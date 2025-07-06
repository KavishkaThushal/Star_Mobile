import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card/Card';
import { MdClose } from "react-icons/md";
import api from "../../config/axiosInterceptor.js";
import './store.css';

const Category = ['mobile', 'earphones', 'smartWatch', 'others'];
const Brand = ['Redmi', 'Samsung', 'Infinix', 'Apple', 'others'];
const PriceOptions = [
    { label: 'Under 20000Lkr', value: 20000 },
    { label: 'Under 50000Lkr', value: 50000 },
    { label: 'Under 100000Lkr', value: 100000 },
];

const ITEMS_PER_PAGE = 8;

function Store() {
    const [filterOpen, setFilterOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const toggleCategory = (cat) => {
        setSelectedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    const toggleBrand = (brand) => {
        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const selectPrice = (priceValue) => {
        setSelectedPrice(priceValue === selectedPrice ? null : priceValue);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const params = {};
                if (selectedCategories.length > 0) params.category = selectedCategories.join(',');
                if (selectedBrands.length > 0) params.brand = selectedBrands.join(',');
                if (selectedPrice) params.maxPrice = selectedPrice;

                const res = await api.get('store/all/stores/products', { params });
                setProducts(res.data);
                setCurrentPage(1); // Reset to page 1 on filter change
            } catch (err) {
                console.error(err);
            }
        };

        fetchProducts();
    }, [selectedCategories, selectedBrands, selectedPrice]);

    const paginatedProducts = products.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    return (
        <div className="fadeInUp">
            <section className="header-section">
                <h1>Store</h1>
            </section>

            <div className='store-wrapper'>
                <h3 className='filter' onClick={() => setFilterOpen(prev => !prev)}>Filter</h3>

                <div className={filterOpen ? 'side-menu-toggle-show' : 'side-menu-toggle'}>
                    <MdClose onClick={() => setFilterOpen(false)} />

                    <div className='filter-section'>
                        <h3>Category</h3>
                        {Category.map(item => (
                            <label key={item} style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <input
                                    type='checkbox'
                                    checked={selectedCategories.includes(item)}
                                    onChange={() => toggleCategory(item)}
                                />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>

                    <hr />

                    <div className='filter-section'>
                        <h3>Brand</h3>
                        {Brand.map(item => (
                            <label key={item} style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <input
                                    type='checkbox'
                                    checked={selectedBrands.includes(item)}
                                    onChange={() => toggleBrand(item)}
                                />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>

                    <hr />

                    <div className='filter-section'>
                        <h3>Price</h3>
                        {PriceOptions.map(option => (
                            <label key={option.value} style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <input
                                    type='checkbox'
                                    checked={selectedPrice === option.value}
                                    onChange={() => selectPrice(option.value)}
                                />
                                <span>{option.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className='side-menu'>
                    <div className='filter-section'>
                        <h3>Category</h3>
                        {Category.map(item => (
                            <label key={item} style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <input
                                    type='checkbox'
                                    checked={selectedCategories.includes(item)}
                                    onChange={() => toggleCategory(item)}
                                />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>

                    <hr />

                    <div className='filter-section'>
                        <h3>Brand</h3>
                        {Brand.map(item => (
                            <label key={item} style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <input
                                    type='checkbox'
                                    checked={selectedBrands.includes(item)}
                                    onChange={() => toggleBrand(item)}
                                />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>

                    <hr />

                    <div className='filter-section'>
                        <h3>Price</h3>
                        {PriceOptions.map(option => (
                            <label key={option.value} style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <input
                                    type='checkbox'
                                    checked={selectedPrice === option.value}
                                    onChange={() => selectPrice(option.value)}
                                />
                                <span>{option.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className='store-content'>
                    {paginatedProducts.length > 0 ? (
                        paginatedProducts.map(product => <Card key={product._id} product={product} />)
                    ) : (
                        <p>No products found</p>
                    )}
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                    <button
                        key={num}
                        onClick={() => setCurrentPage(num)}
                        style={{
                            margin: '10px 5px',
                            padding: '0.5rem 1rem',
                            backgroundColor: num === currentPage ? '#2e4c66' : '#e0e0e0',
                            color: num === currentPage ? '#fff' : '#000',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        {num}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Store;
