import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from 'react';
import AgDataGrid from './components/Dashboard/AgDataGrid';
import axios from 'axios';

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://amber-dashboard.onrender.com/dashboard");
        console.log("fetched Data: ", response.data);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("error in fetching the data: ", err);
      }
    }

    fetchData();

  }, []);

  return (

    <div className="App flex h-screen">
      <NavBar />

      <div className='flex w-full flex-col'>

        <SearchBar />

        <div className='w-full h-full flex justify-center'>
          <Routes>
            <Route exact path="/" element={<Dashboard data={data} loading={loading} />} />
            <Route path="/agdata" element={<AgDataGrid data={data} loading={loading} />} />
          </Routes>
        </div>

      </div>

    </div>

  );
}

export default App;
