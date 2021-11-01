import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import img from "../../images/about.jpg";
import "./About.css";

function About() {
  const { register, handleSubmit ,reset} = useForm();
  const onSubmit = (data) =>{ 
    // console.log(data)
    axios.post('http://localhost:5000/services',data)
    .then(res=>{
      alert("Successfully Added Your Service");
      reset()
    })
  };
  return (
    <div className="book-form-add-service mx-auto my-5">
      <div className="container">
        <h3 className="text-center">Add A New Service</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Country Name</label>
          <input {...register("name")} />
          <label htmlFor="">Price in BDT</label>
          <input {...register("price")} />
          <label htmlFor="">Image</label>
          <input {...register("img")} />
          <label htmlFor="">Desciription</label><br />
          <textarea style={{height:"10rem"}} className="w-100" {...register("desc")} />

          <input className="btn btn-primary" type="submit" value="Click To Add" />
        </form>
      </div>
    </div>
  );
}

export default About;
