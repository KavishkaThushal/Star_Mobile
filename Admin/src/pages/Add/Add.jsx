import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Upload from '../../assets/upload.gif';
import api from '../../config/axiosInterceptor.js';

const FeaturesList = ['CPU', 'Screen', 'RAM_ROM', 'Camera', 'Battery', 'OS', 'Sensor', 'Other'];

function AddEditProduct() {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const imgRef = useRef();

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [imageRemoved, setImageRemoved] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    description: '<p></p>',
    brand: 'YourBrand',
    category: 'mobile',
    variants: 1,
    features: FeaturesList.reduce((acc, feature) => ({ ...acc, [feature]: '' }), {}),
  });

  // Fetch existing product
  useEffect(() => {
    if (!productId) return;

    async function fetchProduct() {
      try {
        const res = await api.get(`store/${productId}`);
        const product = res.data;

        setFormData({
          name: product.name || '',
          price: product.price || '',
          stock: product.stock || '',
          description: product.description || '<p></p>',
          brand: product.brand || 'YourBrand',
          category: product.category || 'mobile',
          variants: product.variants || 1,
          features: FeaturesList.reduce((acc, feature, i) => {
            acc[feature] = product.features?.[i] || '';
            return acc;
          }, {}),
        });

        if (product.imageUrl || product.image ) {
          setPreviewUrl(product.imageUrl || product.image || null);

        }
      } catch (err) {
        toast.error('Failed to fetch product data');
        console.error(err);
      }
    }

    fetchProduct();
  }, [productId]);

  // Update preview when a new local file is uploaded
  useEffect(() => {
    if (!imageFile) return;
    const url = URL.createObjectURL(imageFile);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const removeImage = () => {
    setImageFile(null);
    setPreviewUrl(null);
    setImageRemoved(true);
    toast.info('Image removed');
  };

  const validateForm = () => {
    if (!formData.name.trim()) return toast.error('Title is required') || false;
    if (!formData.price || isNaN(formData.price) || Number(formData.price) <= 0) return toast.error('Price must be a positive number') || false;
    if (!formData.stock || isNaN(formData.stock) || Number(formData.stock) < 0) return toast.error('Amount must be zero or a positive number') || false;
    if (!formData.description || formData.description === '<p></p>') return toast.error('Description is required') || false;
    if (!previewUrl && !imageFile) return toast.error('Image is required') || false;
    for (const feature of FeaturesList) {
      if (feature !== 'Other' && !formData.features[feature]?.trim()) {
        toast.error(`Feature "${feature}" is required`);
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
        name: formData.name,
        price: formData.price,
        stock: formData.stock,
        description: formData.description,
        brand: formData.brand,
        category: formData.category,
        variants: formData.variants,
        features: Object.values(formData.features),
      };

      if (!imageRemoved && imageUrl) {
        payload.imageUrl = imageUrl;
      }

      const url = productId ? `store/${productId}` : `store`;
      const method = productId ? 'put' : 'post';

      const res = await api[method](url, payload);

      if(res.status === 200){
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
      <div className="add-wrapper" style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
        <ToastContainer />
        <p style={{ fontSize: '.9rem', fontWeight: '600' }}>Upload Image</p>
        <div
            style={{
              position: 'relative',
              width: '200px',
              height: '200px',
              border: '1px dashed #ccc',
              marginBottom: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => imgRef.current.click()}
        >
          {previewUrl ? (
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img src={previewUrl} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage();
                    }}
                    title="Remove image"
                    style={{
                      position: 'absolute',
                      top: '2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '28px',
                      height: '28px',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      color: '#fff',
                      borderRadius: '50%',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      lineHeight: '28px',
                      cursor: 'pointer',
                      zIndex: 10,
                    }}
                >
              &times;
            </span>
              </div>
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

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Title</label>
          <input
              type="text"
              placeholder="Title"
              required
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '6px', marginTop: '4px' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="price">Price (RS)</label>
            <input
                type="text"
                placeholder="Price"
                required
                id="price"
                value={formData.price}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '6px', marginTop: '4px' }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <label htmlFor="stock">Stock</label>
            <input
                type="number"
                placeholder="Stock"
                required
                id="stock"
                value={formData.stock}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '6px', marginTop: '4px' }}
            />
          </div>
        </div>

        <h3 style={{ marginTop: '20px' }}>Features</h3>
        {FeaturesList.map((feature) => (
            <div key={feature} style={{ marginBottom: '10px' }}>
              <label htmlFor={feature}>{feature}</label>
              {feature === 'Other' ? (
                  <ReactQuill
                      theme="snow"
                      id={feature}
                      value={formData.features[feature]}
                      onChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            features: { ...prev.features, [feature]: value },
                          }))
                      }
                      style={{ marginTop: '4px' }}
                  />
              ) : (
                  <input
                      type="text"
                      placeholder={feature}
                      id={feature}
                      value={formData.features[feature]}
                      onChange={(e) => {
                        const { id, value } = e.target;
                        setFormData((prev) => ({
                          ...prev,
                          features: { ...prev.features, [id]: value },
                        }));
                      }}
                      style={{ width: '100%', padding: '6px', marginTop: '4px' }}
                  />
              )}
            </div>
        ))}

        <div style={{ marginTop: '20px' }}>
          <label htmlFor="description">Description</label>
          <ReactQuill
              theme="snow"
              value={formData.description}
              onChange={(value) => setFormData((prev) => ({ ...prev, description: value }))}
              style={{ marginTop: '4px' }}
          />
        </div>

        <button
            onClick={handleSubmit}
        >
          {productId ? 'Update Item' : 'Create Item'}
        </button>
      </div>
  );
}

export default AddEditProduct;
