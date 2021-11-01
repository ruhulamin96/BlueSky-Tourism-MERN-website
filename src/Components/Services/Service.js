import React from "react";
import { Link } from "react-router-dom";

function Service(props) {
  const { name, img, desc,_id,price} = props.service;
  // console.log(_id);
  return (
    <div>
      <div class="col">
        <div class="card">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title text-center">{name}</h3>
            <p class="card-text">{desc.slice(0,200)}</p>
            <h5 className="text-center my-3">Price: BDT-{price}</h5>
            <Link to={`/service/${_id}`} ><button className="btn btn-primary w-100">Book Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
