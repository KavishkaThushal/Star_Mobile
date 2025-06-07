import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Upload from '../../assets/upload.gif';
import api from '../../config/axiosInterceptor.js';

const Category = ['mobile', 'earphones', 'smartWatch', 'others'];
const Brand = ['Redmi', 'Samsung', 'Infinix', 'Apple', 'others'];
const FeaturesList = ['CPU', 'Screen', 'RAM_ROM', 'Camera', 'Battery', 'OS', 'Sensor', 'Other'];

function AddEditProduct() {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const imgRef = useRef();

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [imageRemoved, setImageRemoved] = useState(false);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('<p></p>');
  const [brand, setBrand] = useState('Redmi');
  const [category, setCategory] = useState('mobile');
  const [variants, setVariants] = useState(1);
  const [features, setFeatures] = useState({});

  useEffect(() => {
    if (!productId) return;

    async function fetchProduct() {
      try {
        const res = await api.get(`store/${productId}`);
        const product = res.data;

        setName(product.name || '');
        setPrice(product.price || '');
        setStock(product.stock || '');
        setDescription(product.description || '<p></p>');
        setBrand(product.brand || 'Redmi');
        setCategory(product.category || 'mobile');
        setVariants(product.variants || 1);

        if (product.features && Array.isArray(product.features)) {
          setFeatures(product.features[0] || {});
        } else if (typeof product.features === 'object') {
          setFeatures(product.features);
        } else {
          setFeatures(
              FeaturesList.reduce((acc, key) => {
                acc[key] = '';
                return acc;
              }, {})
          );
        }


        if (product.imageUrl || product.image) {
          setPreviewUrl(product.imageUrl || product.image || null);
        }
      } catch (err) {
        toast.error('Failed to fetch product data');
        console.error(err);
      }
    }

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    if (!imageFile) return;
    const url = URL.createObjectURL(imageFile);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  const handleRemoveImage = () => {
    setImageFile(null);
    setPreviewUrl(null);
    setImageRemoved(true);
    toast.info('Image removed');
  };

  const validateForm = () => {
    if (!name.trim()) return toast.error('Title is required') || false;
    if (!price || isNaN(price) || Number(price) <= 0) return toast.error('Price must be a positive number') || false;
    if (!stock || isNaN(stock) || Number(stock) < 0) return toast.error('Amount must be zero or a positive number') || false;
    if (!description || description === '<p></p>') return toast.error('Description is required') || false;
    if (!previewUrl && !imageFile) return toast.error('Image is required') || false;

    for (const key of FeaturesList) {
      if (key !== 'Other' && (!features[key] || !features[key].trim())) {
        toast.error(`Feature "${key}" is required`);
        return false;
      }
    }
    return true;
  };

  const uploadToCloudinary = async () => {
    const cloudData = new FormData();
    cloudData.append('file', imageFile);
    cloudData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    cloudData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        cloudData
    );

    return response.data.secure_url;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      let imageUrl = previewUrl;

      if (imageFile) {
        toast.info('Uploading image...');
        imageUrl = await uploadToCloudinary();
        toast.success('Image uploaded successfully!');
      } else if (imageRemoved) {
        imageUrl = '';
      }

      const payload = {
        name,
        price,
        stock,
        description,
        brand,
        category,
        variants,
        features,
      };

      if (!imageRemoved && imageUrl) {
        payload.imageUrl = imageUrl;
      }

      const url = productId ? `store/${productId}` : `store`;
      const method = productId ? 'put' : 'post';

      const res = await api[method](url, payload);
      console.log(res)
      if (res.status === 201 || res.status === 200) {
        toast.success(productId ? 'Product updated!' : 'Product created!');
        setTimeout(() => {
          navigate('/list');
        }, 2000);
      }
    } catch (err) {
      toast.error('Failed to submit product');
      console.error(err);
    }
  };

  return (
      <div
          className="add-wrapper"
          style={{
            maxWidth: '600px',
            margin: 'auto',
            padding: '20px',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
      >
        <ToastContainer />
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>
          {productId ? 'Edit Product' : 'Add Product'}
        </h2>

        <p style={{ fontWeight: '600', marginBottom: '8px' }}>Upload Image</p>
        <div
            style={{
              position: 'relative',
              width: '200px',
              height: '200px',
              border: '2px dashed #aaa',
              marginBottom: '20px',
              cursor: 'pointer',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fafafa',
              overflow: 'hidden',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            onClick={() => imgRef.current.click()}
        >
          {previewUrl ? (
              <>
                <img
                    src={previewUrl}
                    alt="Preview"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveImage();
                    }}
                    title="Remove image"
                    style={{
                      position: 'absolute',
                      top: '6px',
                      right: '6px',
                      backgroundColor: 'rgba(255, 0, 0, 0.7)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '50%',
                      width: '28px',
                      height: '28px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      lineHeight: '28px',
                      textAlign: 'center',
                    }}
                >
                  &times;
                </button>
              </>
          ) : (
              <img src={Upload} alt="upload" style={{ width: '60px', opacity: 0.6 }} />
          )}
          <input
              type="file"
              hidden
              ref={imgRef}
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file) return;
                if (!file.type.startsWith('image/')) {
                  toast.error('Please upload an image file only');
                  return;
                }
                setImageFile(file);
                setImageRemoved(false);
              }}
          />
        </div>

        <label htmlFor="name" style={{ fontWeight: '600' }}>
          Title
        </label>
        <input
            type="text"
            placeholder="Title"
            required
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
        />

        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="price" style={{ fontWeight: '600' }}>
              Price (RS)
            </label>
            <input
                type="number"
                placeholder="Price"
                required
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <label htmlFor="stock" style={{ fontWeight: '600' }}>
              Stock
            </label>
            <input
                type="number"
                placeholder="Stock"
                required
                id="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                }}
            />
          </div>
        </div>

        {/* Category dropdown */}
        <label htmlFor="category" style={{ fontWeight: '600' }}>
          Category
        </label>
        <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
        >
          {Category.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
          ))}
        </select>

        {/* Brand dropdown */}
        <label htmlFor="brand" style={{ fontWeight: '600' }}>
          Brand
        </label>
        <select
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
        >
          {Brand.map((b) => (
              <option key={b} value={b}>
                {b.charAt(0).toUpperCase() + b.slice(1)}
              </option>
          ))}
        </select>

        {/* Variants */}
        <label htmlFor="variants" style={{ fontWeight: '600' }}>
          Variants
        </label>
        <input
            type="number"
            id="variants"
            min={1}
            value={variants}
            onChange={(e) => setVariants(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '20px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
        />

        {/* Features */}
        <div
            style={{
              border: '1px solid #ddd',
              padding: '75px',
              borderRadius: '8px',
              marginBottom: '55px',
              backgroundColor: '#fafafa',
            }}
        >
          <h3 style={{ marginBottom: '15px', textAlign: 'center', color: '#333' }}>
            Features
          </h3>
          {FeaturesList.map((feature) => (
              <div
                  key={feature}
                  style={{marginBottom: '12px'}}
              >
                <label
                    htmlFor={`feature-${feature}`}
                    style={{fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '5px'}}
                >
                  {feature === 'Other' ? 'Other Feature' : feature}
                </label>

                {feature === 'Other' ? (
                    <ReactQuill
                        theme="snow"
                        value={features[feature] || ''}
                        onChange={(content) =>
                            setFeatures((prev) => ({...prev, [feature]: content}))
                        }
                        style={{height: '150px', marginBottom: '10px'}}
                    />
                ) : (
                    <input
                        type="text"
                        id={`feature-${feature}`}
                        placeholder={`Enter ${feature}`}
                        value={features[feature] || ''}
                        onChange={(e) =>
                            setFeatures((prev) => ({...prev, [feature]: e.target.value}))
                        }
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          fontSize: '15px',
                          borderRadius: '6px',
                          border: '1px solid #ccc',
                        }}
                    />
                )}
              </div>
          ))}
        </div>

        {/* Description */}
        <label htmlFor="description" style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>
          Description
        </label>
        <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            style={{ height: '200px', marginBottom: '45px' }}
        />

        <button
            onClick={handleSubmit}
        >
          {productId ? 'Update Product' : 'Add Product'}
        </button>
      </div>
  );
}

export default AddEditProduct;
