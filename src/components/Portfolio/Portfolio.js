import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { PortfolioItems } from './PortfolioItems';
import SingleItem from './SingleItem';

const Portfolio = () => {

    const [active, setActive] = useState('');
    const [items, setItems] = useState([]);

    const categories = [...new Set(PortfolioItems.map(item => item.category))]

    useEffect(() => {
        if (active === '') {
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
                            <li className={active === '' ? "bg-blue white" : ""} onClick={showAll}>All</li>
                            {
                                categories.map((category, i) => <li key={i} className={active === category ? 'bg-blue white' : ''} onClick={handleFilter}>{category}</li>)
                            }
                        </ul>

                        {
                            items.map((item, i) => <SingleItem item={item} key={i}></SingleItem>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;