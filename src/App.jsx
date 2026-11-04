import { useState, useEffect } from "react";
import Searchbar from './components/Searchbar.jsx';
import Letterfilter from './components/Letterfilter.jsx';
import Namelist from './components/Namelist.jsx';
import './App.css';
import { supabase } from './libs/supabase.js';


function App() {
  const [searchText, setSearchText] = useState("");
  const [names, setNames] = useState([]);
  
  useEffect(() => {
async function fetchNames() {
  const { data, error } = await supabase
    .from('names')
    .select('*')
    .order('name');

    if (error) {
      console.error('Failed to load names:', error);
    } else {
      setNames(data);
}
}
    fetchNames();
}, []);


  return (
    <main>
    <h1>Sikh Name Finder</h1>
    <p>Find the perfect Sikh name for your newborn.</p>
    
    <Searchbar value={searchText} onChange={setSearchText} />
    <Letterfilter />
    <Namelist names={names} />
    </main>
  );
    
}
export default App;


