import axios from "axios";
import React, { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";
function MeetDoctor() {
  const [visaservices, setVisaServices] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:5000/visaservices").then((res) => {
      setVisaServices(res.data);
      setIsloading(false);
    });
  }, []);
  return (
    <div>
      {isloading ? (
        <SpinnerCircular
          thickness={200}
          size={100}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></SpinnerCircular>
      ) : (
        <div className="container  my-5">
          <div className="row">
            <h1 className="text-primary text-center">Emergency Visa Service</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              {visaservices.map((service) => (
                <>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={service?.img}
                        class="card-img-top rounded"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center text-primary">
                          {service?.name} <br />{" "}
                          <span className="text-success">Summer Package</span>
                        </h5>
                        <p class="card-text ">
                          {(service?.desc).slice(0, 250)}
                        </p>
                        <h3 className="text-center mx-3">
                          Price: BDT-{service?.price}
                        </h3>
                      </div>
                      <button className="btn btn-primary w-100">
                        Get Visa
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MeetDoctor;
