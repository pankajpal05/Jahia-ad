import React, { useState } from "react";

const Form = ({ showForm, setShowForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    enquiry: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must only contain letters and spaces.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!/^(\s*|(\+\d{1,3}[- ]?)?\d{10})$/.test(formData.contact)) {
      newErrors.contact = "Contact must be 10-15 digits long.";
    }

    if (!formData.enquiry.trim()) {
      newErrors.enquiry = "Enquiry message cannot be empty.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      setShowForm(false);
    }
  };

  if (!showForm) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 shadow-lg w-96 md:w-1/2 relative">
      <button
          onClick={() => setShowForm(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <i className="fa-solid fa-x"></i>
        </button>
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <div className="mb-4 sm:col-span-1">
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4 sm:col-span-1">
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4 sm:col-span-1">
            <label className="block text-gray-700 mb-1" htmlFor="contact">
              Contact
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 border focus:outline-none focus:ring focus:ring-blue-200"
              
            />
            {errors.contact && (
              <p className="text-red-500 text-sm">{errors.contact}</p>
            )}
          </div>
          <div className="mb-4 sm:col-span-1">
            <label className="block text-gray-700 mb-1" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border focus:outline-none focus:ring focus:ring-blue-200"
              required
            >
              <option value="" selected>
                Select a category
              </option>
              <option value="general">general</option>
             
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category}</p>
            )}
          </div>
          <div className="mb-4 sm:col-span-2">
            <label className="block text-gray-700 mb-1" htmlFor="enquiry">
              Enquiry Message
            </label>
            <textarea
              id="enquiry"
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              className="w-full px-3 py-2 border focus:outline-none focus:ring focus:ring-blue-200"
              rows="4"
              required
            />
            {errors.enquiry && (
              <p className="text-red-500 text-sm">{errors.enquiry}</p>
            )}
          </div>
          
          <div className="flex justify-end sm:col-span-2">
            
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 hover:bg-black"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
