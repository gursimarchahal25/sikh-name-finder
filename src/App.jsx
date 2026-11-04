import { useState } from "react";
import Searchbar from './components/Searchbar.jsx';
import Letterfilter from './components/Letterfilter.jsx';
import Namelist from './components/Namelist.jsx';
import './App.css';

const samplenames = [
  { name: "Gursimar", meaning: "Remembrance of Guru" },
  { name: "Sumit", meaning: "True friend" },
  { name : "Joban", meaning: "Youthful" }
];


function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <main>
    <h1>Sikh Name Finder</h1>
    <p>Find the perfect Sikh name for your newborn.</p>
    
    <Searchbar value={searchText} onChange={setSearchText} />
    <Letterfilter />
    <Namelist names={samplenames} />
    </main>
  );
    
}
export default App;

