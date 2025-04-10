import { useEffect, useState } from 'react'
import Header from './components/Header'
import NavBar from './components/Navbar';
import './App.css'
import JobList from './components/JobList';
import SummaryStats from './components/SummaryStats';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [list, setList] = useState([]);
  const[isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://www.themuse.com/api/public/jobs?page=1&api-key=" + API_KEY);
        const data = await res.json();
        setList(data.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  },[]);

  return (
    <div>
      <Header toggleNav={() => setIsNavOpen(!isNavOpen)}/>
      
      <div className='main'>
        {isNavOpen && <NavBar />}
        <div className='main-content'>        
          <SummaryStats jobs={list}/>
          <JobList jobs={list} />
        </div>
      </div>
      
    </div>
  )
}

export default App
