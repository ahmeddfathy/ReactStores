import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Storedetails() {
    const [dataArr, setData] = useState({});
    const [showMore, setShowMore] = useState(false);
    const { products } = useParams();

    async function getData() {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${products}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getData();
    }, [products]);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6 mt-3'>
                    <div className="card" style={{width:'20rem' , marginLeft:'10vw'}}>
                        <img src={dataArr.image} className="card-img-top" alt="Product" />
                        <div className="card-body">
                            <h5 className="card-title">{dataArr.title}</h5>
                            <p className="card-text" style={{ maxHeight: showMore ? 'none' : '5em', overflow: 'hidden' }}>{dataArr.description}</p>
                            {!showMore && <button onClick={toggleShowMore} className="btn btn-link">Show more</button>}
                            <Link to="/posts/1" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
