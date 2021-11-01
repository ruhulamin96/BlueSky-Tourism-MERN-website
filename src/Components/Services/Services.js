import React, { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";
import Service from "./Service";
import "./Services.css";

function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsloading(false);
      });
  }, []);
  console.log(" from services", services);
  return (
    <div>
      {isLoading ? (
        <SpinnerCircular thickness={200} size={100}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ) : (
        <div className="container">
          <div className="row">
            <h1 className="text-primary text-center">Grab Best Tour Plan</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              {services.map((service) => (
                <Service key={service._id} service={service}></Service>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
