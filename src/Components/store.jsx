import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

const Store = () => {
  const [data2, setData] = useState([]);
  let navigate = useNavigate();

  async function getData() {
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data);
  }

  useEffect(() => {
    getData();
    console.log('done')
  }, []);

  function handlePath(id) {
    navigate({
      pathname: `/store/${id}`
    })
  }

  return (
    <div className="container">
      <div className="row " id="cardRow">
        {data2.map((val, ind) => (
          <div className="col-lg-4 col-10 col-md-6 mt-5" key={ind}>
            <div className="card mt-4" style={{ width: "17rem", height: "100%" }}>
              <img className="card-img-top" src={val.image} id="imgg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{val.title}</h5>
                <p className="card-text">${val.price}</p>
                <a onClick={(e) => handlePath(val.id)} className="btn btn-primary justify-content-center" style={{position:'absolute' , bottom:'20px'}}>
                  details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
