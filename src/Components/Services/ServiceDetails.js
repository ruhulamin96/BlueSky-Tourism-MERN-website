import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Navbar from "../Navbar/Navbar";
import "./ServiceDetails.css";
import axios from "axios";

function ServiceDetails() {
  const { users } = useAuth();
  const priceRef = useRef();
  const placeRef = useRef();
  const history = useHistory();

  const { serviceId } = useParams();
  const [services, setServices] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => {
        const filterService = data.filter((value) => value._id === serviceId);
        setServices(filterService);
      });
  }, [serviceId]);

  console.log("from services details", services);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const price = priceRef.current.value;
    const newData = { ...data, place: placeRef.current.value, price: price, status:false};
    axios.post("http://localhost:5000/orders", newData).then((res) => {
      alert("Booking Successful !!!");

      reset();
      history.goBack();
    });
  };
  // console.log(users);
  return (
    <div>
      <Navbar></Navbar>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <div>
              <div>
                <h3 className="mb-5 text-center">
                  Welcome!! {users?.displayName}
                </h3>
                <p className="mb-5 text-center fw-bold">Confirm Your booking</p>

                <div class="col">
                  <div class="card text-center">
                    <img
                      src={services[0]?.img}
                      class="card-img-top mx-auto"
                      alt="..."
                    />
                    <div class="card-body">
                      <h3 class="card-title">{services[0]?.name}</h3>
                      <p class="card-text text-start">{services[0]?.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="text-center">Booking Registration Form</h3>
            <div className="book-form mx-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Name</label>
                <input
                  {...register("name", { disabled: false })}
                  value={users?.displayName}
                />
                <label htmlFor="">E-mail</label>
                <input
                  {...register("email", { disabled: false })}
                  value={users?.email}
                />
                <label htmlFor="">Country</label>
                <input
                  {...register("place", { disabled: true })}
                  ref={placeRef}
                  defaultValue={services[0]?.name}
                />

                <label htmlFor="">Price in BDT</label>
                <input
                  {...register("price", { disabled: true })}
                  ref={priceRef}
                  defaultValue={services[0]?.price}
                />
                <label htmlFor="">Phone Number</label>
                <input
                  {...register("phone", { required: true })}
                  placeholder="Phone Number"
                />
                <label htmlFor="">Date</label>
                <input type="date" {...register("date", { required: true })} />
                <input className="btn btn-primary" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
