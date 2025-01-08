import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    category: "",
    message: "",
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

    if (!/^(\s*|(\+\d{1,3}[- ]?)?\d{10,15})$/.test(formData.contact)) {
      newErrors.contact = "Contact must be 10-15 digits long.";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const dataToSend = {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        category: formData.category,
        message: formData.message,
      };

      try {
        const response = await fetch("http://localhost:8000/form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Form submission successful:", result);

          setFormData({
            name: "",
            email: "",
            contact: "",
            category: "",
            message: "",
          });
          setErrors({});
        } else {
          console.error("Error submitting form:", response.status);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-white p-6 shadow-lg w-11/12 lg:max-w-[1240px] flex flex-col lg:flex-row md:justify-between py-6 md:py-14 md:px-14 lg:px-14">
        <div className="mb-10 w-full lg:w-[40%]">
          <div className="mb-11">
            <h2 className="text-3xl font-semibold mb-3 pb-2">Contact Us</h2>
            <h3 className="text-2xl lg:text-4xl text-[#1A1A1A] font-medium pb-5">
              Time to break the ice?
            </h3>
            <p>We would love to hear from you.</p>
          </div>
          <p className="text-lg text-red-600 mt-2 pb-5">
            <a
              href="mailto:sales@test.com"
              className="text-2xl leading-9 font-semibold"
            >
              sales@test.com
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full lg:w-[50%] grid gap-4 sm:grid-cols-2">
          <div className="mb-4 sm:col-span-1">
            <input
              placeholder="Name"
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
            <input
              placeholder="Email"
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
            <input
              placeholder="Contact"
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
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border focus:outline-none focus:ring focus:ring-blue-200"
              required
            >
              <option value="">Select a category</option>
              <option value="general">General</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category}</p>
            )}
          </div>
          <div className="mb-4 sm:col-span-2">
            <textarea
              placeholder="Enquiry Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border focus:outline-none focus:ring focus:ring-blue-200"
              rows="4"
              required
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
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
