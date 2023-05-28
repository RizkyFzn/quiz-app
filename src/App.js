import Home from './components/Home/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Kategori from './components/Kategori/Kategori';
import Geografi from './components/Pertanyaan/Geografi/Geografi';
import Umum from './components/Pertanyaan/Umum/Umum';
import Olahraga from './components/Pertanyaan/Olahraga/Olahraga';
import Rahasia from './components/Rahasia/Rahasia';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kategori" element={<Kategori />} />
        <Route path="/Olahraga" element={<Olahraga />} />
        <Route path="/Geografi" element={<Geografi />} />
        <Route path="/Umum" element={<Umum />} />

        <Route path="/Abc" element={<Rahasia />} />
        
      </Routes>
    </div>
  );
}

export default App;
