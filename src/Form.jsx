import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Google Sheet Form Submit Handler
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new URLSearchParams({
    firstName: e.target.firstName.value,
    lastName: e.target.lastName.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    type: e.target.type?.value || "",
    message: e.target.message?.value || "",
  });

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbw6Be93Qwc9vEdeG2MNXOH1r6W1Bq0anmTfLX9EWZeKCinGoqXxn-szu6QCnUdeCSpIrg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // ✅ No preflight
        },
        body: formData.toString(),
      }
    );

    if (response.ok) {
      toast.success("Form submitted successfully!");
      e.target.reset();
    } else {
      toast.error("Failed to submit form.");
    }
  } catch (error) {
    toast.error("Error submitting form.");
  }
};

function Form() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
        <div className="max-w-5xl w-full bg-black rounded-xl flex flex-col md:flex-row shadow-lg overflow-hidden">
          {/* Left Panel */}
          <div className="bg-violet-700 text-white md:w-1/3 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="mb-6">Fill up the form and then click send message</p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2">📞 +91 9876543210</li>
                <li className="flex items-center gap-2">✉️ thomasryan12a@gmail.com</li>
                <li className="flex items-center gap-2">📍 Kerala, India</li>
              </ul>
            </div>
            <div className="mt-6 flex gap-3">
              <span className="hover:opacity-80 cursor-pointer">📘</span>
              <span className="hover:opacity-80 cursor-pointer">🐦</span>
              <span className="hover:opacity-80 cursor-pointer">📸</span>
              <span className="hover:opacity-80 cursor-pointer">▶️</span>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="md:w-2/3 p-8 backdrop-blur-sm bg-white/5 text-white">
            <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
            <p className="text-gray-400 mb-6">Contact me for service</p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-1/2 p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-500"
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-1/2 p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-500"
                />
              </div>

              <div className="flex gap-4">
                <input
                  name="email"
                  type="email"
                  placeholder="E-Mail"
                  required
                  className="w-1/2 p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-500"
                />
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  required
                  className="w-1/2 p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-500"
                />
              </div>

              <div>
                <p className="mb-2">What Type Of Website Do You Need?</p>
                <div className="flex gap-6 text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="type"
                      value="Personal"
                      className="accent-violet-500"
                      defaultChecked
                    />
                    Personal
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="type"
                      value="Landing Page"
                      className="accent-violet-500"
                    />
                    Landing Page
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="type"
                      value="Other"
                      className="accent-violet-500"
                    />
                    Other
                  </label>
                </div>
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-500"
              ></textarea>

              <button
                type="submit"
                className="mt-4 bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-lg text-white font-semibold transition cursor-pointer"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
}

export default Form;
