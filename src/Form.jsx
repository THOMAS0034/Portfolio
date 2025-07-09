import React from "react";
import  Navbar  from './components/Navbar';

function Form() {
  return (
    <>
    <Navbar/>

    <div className="hireheading">
      <h1 className="text-3xl font-bold text-center mt-15 text-purple-300" >Hire Me / Get In Contact</h1>
    </div>

    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl w-full bg-black rounded-xl flex flex-col md:flex-row shadow-lg overflow-hidden">
        
        {/* Left Panel */}
        <div className="bg-violet-700 text-white md:w-1/3 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-6">Fill up the form and then click send message</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                📞 +91 9895163374
              </li>
              <li className="flex items-center gap-2">
                ✉️ thomasryan12a@gmail.com
              </li>
              <li className="flex items-center gap-2">
                📍 Kerala, India
              </li>
            </ul>
          </div>
          <div className="mt-6 flex gap-3">
            {/* Social icons (just placeholders) */}
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

          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-500"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="E-Mail"
                className="w-1/2 p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-500"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-1/2 p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-500"
              />
            </div>

            <div>
              <p className="mb-2">What Type Of Website Do You Need?</p>
              <div className="flex gap-6 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" name="type" className="accent-violet-500" defaultChecked />
                  Personal
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="type" className="accent-violet-500" />
                  Landing Page
                </label>
                  <label className="flex items-center gap-2">
                  <input type="radio" name="type" className="accent-violet-500" />
                  Other
                </label>
              </div>
            </div>

            <textarea
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
    </>
  );
};



export default Form;
