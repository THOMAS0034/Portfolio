import { Routes, Route } from 'react-router-dom';
import Home from './Home';   // ✅ not { Home }
import Form from './Form';   // ✅ not from 'react-router-dom'
import Projects from '../Projects';
import './App.css';

function App() {
  return (
    <div className="font-sans bg-black min-h-screen text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
