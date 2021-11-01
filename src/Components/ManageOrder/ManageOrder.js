import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

function ManageOrder() {
  const { users } = useAuth();
  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/orders").then((res) => {
      setMyOrder(res.data)
    });
  }, []);

  const handleCancelBooking = (id) => {
    const confirm = window.confirm("Would You Like to Cancel Booking");
    if (confirm) {
      axios.delete(`http://localhost:5000/orders/${id}`).then((res) => {
        //if you re render front end after delete. u can also use above dependancy in useEffect()
        if (res.data.deletedCount === 1) {
          const newOrder = myOrder.filter((order) => order._id !== id);
          setMyOrder(newOrder);
          alert("Cancel Successful !!!");
        }
      });
    }
  };

  const handleStatus=(id)=>{
    axios.put(`http://localhost:5000/orders/${id}`)
    .then(res=>{
     if(res.data.modifiedCount>0){
       alert('Approved Booking Successfully !!');
       axios.get("http://localhost:5000/orders").then((res) => {
         setMyOrder(res.data)
       });
     }
    })
  }

  return (
    <div>
      <div className="container">
        <h1 className="text-center m-5">Manage All Booking</h1>
        <div className="row text-center">
          <div className="col-md-3">
            <h3>Tour Place</h3>
          </div>
          <div className="col-md-3">
            <h3>Price</h3>
          </div>
          <div className="col-md-3">
            <h3>Date</h3>
          </div>
          <div className="col-md-3">
            <h3>Cancel Order</h3>
          </div>
          {myOrder.map((order) => (
            <>
              <div className="col-md-3 fs-4 p-1">{order.place}</div>
              <div className="col-md-3 fs-4 p-1">{order.price}</div>
              <div className="col-md-3 fs-4 p-1">{order.date}</div>
              <div className="col-md-3 fs-4 p-1">
                <button
                  onClick={() => {
                    handleCancelBooking(order._id);
                  }}
                  className="btn btn-danger"
                >
                  Cancel Booking
                </button>
                {order.status?<button className="btn btn-primary ms-3">Approved</button>:<button onClick={()=>handleStatus(order._id)} className="btn btn-secondary ms-4">Pending</button>}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageOrder;
