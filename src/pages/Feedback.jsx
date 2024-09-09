import React, { useState } from "react";
import {  toast } from "react-toastify";
import  undraw from "../assets/undraw.png"


const FormFeedback = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    rating: "",
    about: ""
  });

  const handleClear = () => {
    setData({
      name: "",
      email: "",
      rating: "",
      about: ""
    });
  };

  const handleOnChange = (e, property) => {
    setData({
      ...data,
      [property]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const feedbackData = { ...data };
    
   
    const existingFeedback = JSON.parse(localStorage.getItem("feedbackList")) || [];
  
  
    const updatedFeedbackList = [...existingFeedback, feedbackData];
    
   
    localStorage.setItem("feedbackList", JSON.stringify(updatedFeedbackList));
  
    toast.success("Feedback submitted successfully!");
  
    handleClear();
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 bg-gray-600 rounded-md w-full max-w-3xl mx-4 lg:w-1/2 m-10">
      <h3 className="text-center text-yellow-600 text-bold text-2xl"><span className="text-red-900 text-bold text-2xl">FeedBack</span> Form</h3>
      <div className="flex justify-center items-center object-cover py-4">
        <img src={undraw} alt="feedbackForm" className="w-48 h-36 rounded-md " />
      </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-white"
            >
              FirstName
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-400 text-sm font-medium rounded-lg focus:outline-none block w-full p-2.5 transition-all duration-300"
              placeholder="Enter your name"
              required
              value={data.name}
              onChange={(e) => handleOnChange(e, "name")}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-400 text-sm font-medium rounded-lg focus:outline-none block w-full p-2.5 transition-all duration-300"
              placeholder="email@gmail.com"
              required
              value={data.email}
              onChange={(e) => handleOnChange(e, "email")}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="rating"
              className="block mb-2 text-sm font-medium text-white"
            >
              Rate us
            </label>
            <select
              id="rating"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm font-medium rounded-lg focus:outline-none block w-full p-2.5 transition-all duration-300"
              value={data.rating}
              onChange={(e) => handleOnChange(e, "rating")}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="about"
              className="block mb-2 text-sm font-medium text-white"
            >
            Feedback
            </label>
            <textarea
              id="about"
              rows="4"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm font-medium rounded-lg focus:outline-none block w-full p-2.5 transition-all duration-300"
              placeholder="Tell us something feedback yourself..."
              value={data.about}
              onChange={(e) => handleOnChange(e, "about")}
            />
          </div>

          <div className="flex justify-center gap-6">
            <button
              type="submit"
              className="text-white bg-red-900 hover:bg-red-950 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Clear
            </button>
          </div>
        </form>
     
       
      </div>
    </div>
  );
};

export default FormFeedback;
