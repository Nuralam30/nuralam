import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { PortfolioItems } from './PortfolioItems';
import { FaPlus } from 'react-icons/fa';

const Portfolio = () => {

    const [active, setActive] = useState('');
    const [items, setItems] = useState([]);

    const categories = [...new Set(PortfolioItems.map(item => item.category))]

    useEffect( () => {
        if(active === ''){
            setItems(PortfolioItems)
        }
    }, [active])

    const handleFilter = (e) => {
        setActive(e.currentTarget.textContent)
        const filterItems = PortfolioItems.filter(item => item.category === e.currentTarget.textContent || item.subcategory === e.currentTarget.textContent);
        setItems(filterItems)
        console.log(items)
    }

    const showAll = (e) => {
        setActive('')
        setItems(PortfolioItems)
        console.log('show all')
    }


    return (
        <div>
            <div id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="section-title mb-5">
                            <h1>portfolio</h1>
                            <h4>portfolio</h4>
                        </div>

                        <ul className="filter-btns mb-4" data-aos="fade-right">
                            <li className={active === '' ? "btn btn-sm border btn-primary" : "btn btn-sm border"} onClick={showAll}>All</li>
                            {
                                categories.map((category, i) => <li key={i} className={active === category ? 'btn btn-sm border btn-primary' : 'btn btn-sm border'} onClick={handleFilter}>{category}</li>)
                            }
                        </ul>

                        {
                            items.map((item, i) => <div className="col-md-3">
                            <div className="portfolio-item">
                                <div className="portfolio-image">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="overlay">
                                    <h5>{item.category}</h5>
                                    <span className='white'> <FaPlus className='preview-item' /> </span>
                                </div>
                            </div>
                        </div>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;