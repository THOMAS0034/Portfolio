import React, { useState } from 'react'

export const Home = () => {
  const [activeTab, setactiveTab] = useState("education")
  const [loading, setLoading] = useState(false)

  const handleTabChange = (tab) => {
    if (tab === activeTab) return
    setLoading(true)
    setTimeout(() => {
      setactiveTab(tab)
      setLoading(false)
    }, 300)
  }

  return (
    <>
      <div className="navbar flex justify-around pt-5 pb-5 items-center border-2 border-red-600">
        <h1 className='text-4xl font-bold text-white'>Ryan</h1>
        <ul className='flex gap-10 text-gray-200 font-semibold text-lg'>
          <li>About me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="hero text-white pt-20 pb-5 flex justify-around items-center w-full px-10 bg-black">
        <div className="left flex flex-col gap-5 justify-center max-w-[50%]">
          <h1 className="text-6xl pb-4 font-bold bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hello, I am Thomas Ryan
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad praesentium voluptatibus nesciunt odio qui labore incidunt quis aspernatur...</p>
          <div className="buttondiv flex gap-2 justify-start">
            <button className='border-2 px-6 py-2 m-2 rounded-3xl border-violet-400 font-semibold hover:bg-violet-500 hover:border-white transition-all duration-300 delay-100 hover:translate-y-1'>
              Hire me
            </button>
            <button className='border-2 px-6 py-2 m-2 rounded-3xl border-violet-400 font-semibold hover:bg-violet-500 hover:border-white transition-all duration-300 delay-100 hover:translate-y-1'>
              View my resume
            </button>
          </div>
        </div>

        <div className="right flex justify-center">
          <img
            className="rounded-full w-87 h-120 object-cover"
            src="./imageset/aipic.jpg"
            alt="profile"
          />
        </div>
      </div>

      <h1 className="text-gray-300 flex justify-center mt-25 mb-5 font-bold text-3xl font-michroma">ABOUT ME</h1>
      <p className='text-white font-semibold w-1/2 pt-5 pb-5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi praesentium perspiciatis quam optio modi. Nesciunt quod assumenda, minus enim sequi odio rem, ea quae soluta similique voluptatibus magnam quibusdam, nihil numquam inventore dolor fugit facere illo explicabo quam quidem esse?</p>
      <div className="aboutus mt-10 text-white flex justify-center px-5">
        {/* Left Side - Tabs */}
        <div className="flex flex-row gap-10 mt-30">
          <button
            onClick={() => handleTabChange("education")}
            className={`text-left text-xl font-bold hover:text-gray-400 transition ${activeTab === "education" && "text-green-400 font-semibold"}`}
          >
            Education
          </button>
          <button
            onClick={() => handleTabChange("skills")}
            className={`text-left text-xl font-bold hover:text-gray-400 transition ${activeTab === "skills" && "text-blue-400 font-semibold"}`}
          >
            Skills
          </button>
          <button
            onClick={() => handleTabChange("work")}
            className={`text-left text-xl font-bold hover:text-gray-400 transition ${activeTab === "work" && "text-yellow-400 font-semibold"}`}
          >
            Work
          </button>
        </div>
      </div>

        {/* Right Side - Content or Loader */}
        <div className="w-1/2 mx-auto mt-5 flex flex-col items-center text-center min-h-[300px] justify-center">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <>
              {activeTab === "education" && (
                <>
                  <img
                    src="./imageset/education.jpg"
                    alt="Education"
                    className="rounded-xl w-full max-w-md mb-5 shadow-lg"
                  />
                  <p className="text-white font-semibold text-lg">
                    I completed my education in computer science from XYZ University. I focused on web technologies and AI.
                  </p>
                </>
              )}
              {activeTab === "skills" && (
                <>
                  <img
                    src="./imageset/personal.jpg"
                    alt="Personal"
                    className="rounded-xl w-full max-w-md mb-5 shadow-lg"
                  />
                  <p className="text-white font-semibold text-lg">
                    I enjoy solving problems, exploring new tech, and building cool UI experiences in my free time.
                  </p>
                </>
              )}
              {activeTab === "work" && (
                <>
                  <img
                    src="./imageset/work.jpg"
                    alt="Work"
                    className="rounded-xl w-full max-w-md mb-5 shadow-lg"
                  />
                  <p className="text-white font-semibold text-lg">
                    I've worked on multiple freelance projects including landing pages, dashboards, and booking platforms.
                  </p>
                </>
              )}
            </>
          )}
        </div>
    </>
  )
}
