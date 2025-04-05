import { useEffect, useState } from 'react'
import Header from './components/Header'
import NavBar from './components/Navbar';
import './App.css'
import JobList from './components/JobList';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [list, setList] = useState([]);
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
      <Header />
      <NavBar />
      <JobList jobs={list} />
     
    </div>
  )
}

export default App
