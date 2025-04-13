import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/header/Navbar';
import JobList from './components/manage-job/JobList';
import JobDetail from './components/manage-job/JobDetails';
import SummaryStats from './components/manage-job/SummaryStats';

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [list, setList] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);

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
  }, []);

  return (
    <div>
      <Header toggleNav={() => setIsNavOpen(!isNavOpen)} />
      <div className="main">
        {isNavOpen && <NavBar />}
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <SummaryStats jobs={list} />
                <JobList jobs={list} />
              </>
            } />
            
            <Route path="/job/:jobId" element={<JobDetail jobs={list} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
