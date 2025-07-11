import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RotatingText from './components/RotatingText';
import  Navbar  from './components/Navbar';

function Home() {
  const [activeTab, setactiveTab] = useState("education");
  const [loading, setLoading] = useState(false);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setLoading(true);
    setTimeout(() => {
      setactiveTab(tab);
      setLoading(false);
    }, 300);
  };

  return (
    <>

    <Navbar/>
      <div className="hero text-white pt-50 pb-40 flex justify-around items-center w-full px-10 bg-black">
        <div className="left flex flex-col gap-5 justify-center max-w-[50%]">
          <h1 className="text-7xl pb-4 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
            Hello, I am <RotatingText texts={["Thomas Ryan", "a Web Developer", "a UI Designer"]} />
          </h1>

          <p className='text-lg font-mono font-semibold text-gray-200'>Hi, I’m Thomas Ryan a frontend developer focused on building clean, responsive user interfaces using React and Tailwind CSS. I enjoy creating fast, modern web apps and landing pages that help businesses stand out.</p>
          <div className="buttondiv flex gap-2 justify-start">
            <Link to={"/form"}>
            <button className='border-2 px-6 py-2 m-2 rounded-3xl border-violet-400 font-semibold hover:bg-violet-500 cursor-pointer hover:border-white transition-all duration-300 delay-100 hover:translate-y-1'>
              Hire me
            </button>
            </Link>
            <button className='border-2 px-6 py-2 m-2 rounded-3xl border-violet-400 font-semibold hover:bg-violet-500 cursor-pointer hover:border-white transition-all duration-300 delay-100 hover:translate-y-1'>
              View my resume
            </button>
          </div>
        </div>

        <div className="right flex justify-center">
          <img
            className="rounded-full w-[350px] h-[450px] object-cover"
            src="./imageset/aipic.jpg"
            alt="profile"
          />
        </div>
      </div>

      <h1 className="text-gray-300 flex justify-center mt-20 mb-5 font-serif hover:text-violet-400 font-bold text-3xl">ABOUT ME</h1>
      <p className='text-white font-semibold font-mono text-lg w-2/3 pt-5 pb-5 mx-auto text-center text-base/7'>
       I'm a passionate Front-End Developer with a strong foundation in React and Tailwind CSS. I love turning ideas into beautiful, responsive interfaces and bringing smooth user experiences to life. From landing pages to dashboards and booking apps, I enjoy solving real-world problems with clean, modern UI and scalable code. I’m always learning and exploring new tools, and I’m excited to work on projects that make an impact.
      </p>

      {/* Tabs */}
      <div className="aboutus mt-20 mb-30 text-white flex justify-center px-5">
        <div className="flex flex-row gap-10 mt-5">
          <button
            onClick={() => handleTabChange("education")}
            className={`text-xl font-bold font-serif hover:text-gray-400 transition ${activeTab === "education" && "text-green-400 font-semibold"}`}
          >
            Education
          </button>
          <button
            onClick={() => handleTabChange("skills")}
            className={`text-xl font-bold font-serif hover:text-gray-400 transition ${activeTab === "skills" && "text-blue-400 font-semibold"}`}
          >
            Skills
          </button>
          <button
            onClick={() => handleTabChange("personal")}
            className={`text-xl font-bold font-serif hover:text-gray-400 transition ${activeTab === "personal" && "text-yellow-400  font-semibold"}`}
          >
            Personal
          </button>
        </div>
      </div>

      {/* Tab content */}
      <div className="w-1/2 mx-auto mt-5 flex flex-col items-center text-center min-h-[300px] justify-center">
        {loading ? (
          <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {activeTab === "education" && (
              <>
                <img src="./imageset/education.png" alt="Education" className="rounded-xl w-1/4 mb-20 shadow-lg" />
                <p className="border-1 font-mono  border-green-400 p-6 rounded-2xl text-white w-4/3 bg-black font-semibold text-lg text-base/7">
                  I hold a degree in Computer Science, where I developed a strong foundation in programming, web development, and software design principles. During my studies, I focused on modern web technologies like JavaScript, React, and responsive design. I also worked on several academic and personal projects that helped me apply theoretical concepts to real-world scenarios. This academic background has given me the confidence and technical skills to build efficient, user-friendly web applications.
                </p>
              </>
            )}
            {activeTab === "skills" && (
               <>
    <img src="./imageset/skills.png" alt="Skills" className="rounded-xl w-1/4 mb-20 shadow-lg" />
    <p className="text-white font-mono font-semibold text-lg mb-8">
      I enjoy solving problems and building modern UI.
    </p>
    <div className="grid grid-cols-2 gap-3 w-2/3 text-white font-medium text-center border-1 border-blue-400 p-6 rounded-2xl">
      <div>HTML5</div>
      <div>CSS3</div>
      <div>React.js</div>
      <div>Figma</div>
      <div>JavaScript</div>
      <div>UI/UX Design</div>
      <div>Logo Design</div>
      <div>Tailwind CSS</div>
    </div>
  </>
            )}
            {activeTab === "personal" && (
              <>
                <img src="./imageset/personal.png" alt="Work" className="rounded-xl w-1/4 mb-20 shadow-lg" />
                <p className="text-base/7 text-white border-1 font-mono border-yellow-400 p-6 rounded-2xl font-semibold text-lg w-4/3">
                  I'm currently working as a <span className='text-yellow-500'>Frontend Developer</span> Intern at Brainwired, where I'm gaining real-world experience in building responsive, user-friendly web applications using React and Tailwind CSS. My role involves collaborating with developers and designers, improving UI components, and contributing to live projects. <br /> <br />
                Outside of work, I'm passionate about tech, design, and learning new tools. In my free time, I enjoy sketching, exploring UI/UX trends, and watching design breakdowns. I also love working on side projects that challenge my creativity and coding skills.
                </p>
              </>
            )}
          </>
        )}


      {/* <div className="services">
        <h1 className='uppercase hover:text-violet-400 text-center mt-20 mb-10 text-3xl font-serif font-semibold' >Services</h1>
        <h2 className='text-2xl font-serif font-semibold text-gray-400'>Explore The Services I Offer</h2>
        <div className="services flex flex-cols-3 gap-10 mt-10 mb-10 justify-between">
          <div className="servicecard p-10 bg-violet-600 rounded-2xl">
            <h1 className='text-2xl text-center mb-5 font-serif font-semibold'>Landing pages</h1>
            <p className='text-lg text-center font-mono font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, aperiam? Ipsa consectetur ab atque explicabo! Ratione rem inventore blanditiis quidem?</p>
            <button className='text-sm uppercase font-mono bg-white text-black rounded-2xl p-1 px-2 mt-3'>Get in touch</button>
          </div>
          <div className="servicecard p-10 bg-violet-600 rounded-2xl">
            <h1 className='text-2xl text-center mb-5 font-serif font-semibold'>Landing pages</h1>
            <p className='text-lg text-center font-mono font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, aperiam? Ipsa consectetur ab atque explicabo! Ratione rem inventore blanditiis quidem?</p>
            <button className='text-sm uppercase font-mono bg-white text-black rounded-2xl p-1 px-2 mt-3'>Get in touch</button>
          </div>
          <div className="servicecard p-10 bg-violet-600 rounded-2xl">
            <h1 className='text-2xl text-center mb-5 font-serif font-semibold'>Landing pages</h1>
            <p className='text-lg text-center font-mono font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, aperiam? Ipsa consectetur ab atque explicabo! Ratione rem inventore blanditiis quidem?</p>
            <button className='text-sm uppercase font-mono bg-white text-black rounded-2xl p-1 px-2 mt-3'>Get in touch</button>
          </div>
        </div>
      </div> */}

      <div className="services w-full px-6">
  <h1 className="uppercase hover:text-violet-400 text-center mt-20 mb-4 text-3xl font-serif font-semibold">
    Services
  </h1>
  <h2 className="text-2xl font-serif font-semibold text-gray-400 text-center mb-10">
    Explore The Services I Offer
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="servicecard p-6 bg-violet-600 rounded-2xl text-white shadow-lg">
      <h1 className="text-2xl text-center mb-5 font-serif font-semibold">Landing Pages</h1>
      <p className="text-lg text-center font-mono font-semibold">
        Custom, responsive landing pages built with React and Tailwind to boost your conversions.
      </p>
      <button className="text-sm uppercase font-mono bg-white text-black rounded-2xl p-1 px-3 mt-4 block mx-auto">
        Get in touch
      </button>
    </div>

    <div className="servicecard p-6 bg-violet-600 rounded-2xl text-white shadow-lg">
      <h1 className="text-2xl text-center mb-5 font-serif font-semibold">Web Apps</h1>
      <p className="text-lg text-center font-mono font-semibold">
        Interactive, real-world applications with dynamic UI and API integration using React.
      </p>
      <button className="text-sm uppercase font-mono bg-white text-black rounded-2xl p-1 px-3 mt-4 block mx-auto">
        Get in touch
      </button>
    </div>

    <div className="servicecard p-6 bg-violet-600 rounded-2xl text-white shadow-lg">
      <h1 className="text-2xl text-center mb-5 font-serif font-semibold">UI Components</h1>
      <p className="text-lg text-center font-mono font-semibold">
        Reusable components and clean UI blocks tailored for modern React-based projects.
      </p>
      <button className="text-sm uppercase font-mono bg-white text-black rounded-2xl p-1 px-3 mt-4 block mx-auto">
        Get in touch
      </button>
    </div>
  </div>
</div>


    </div>

    </>
  );
}

export default Home;
