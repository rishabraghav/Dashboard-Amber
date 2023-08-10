import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from 'react';
import AgDataGrid from './components/Dashboard/AgDataGrid';
import axios from 'axios';
import DiscoverPage from './components/Dummy/Discover';
import UsersPage from './components/Dummy/UsersPage';
import ApplicationsPage from './components/Dummy/ApplicationsPage';
import PagesPage from './components/Dummy/PagesPage';
import SupportPage from './components/Dummy/SupportsPage';
import InboxPage from './components/Dummy/Inbox';
import FileManagerPage from './components/Dummy/FileManager';
import DataListPage from './components/Dummy/DataListPage';
import SettingsPage from './components/Dummy/SettingsPage';
import LogoutButton from './components/Dummy/LogoutPage';

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://amber-dashboard-backend.onrender.com/dashboard");
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
            <Route path="/discover" element={<DiscoverPage data={data} loading={loading} />} />
            <Route path="/users" element={<UsersPage data={data} loading={loading} />} />
            <Route path="/applications" element={<ApplicationsPage data={data} loading={loading} />} />
            <Route path="/pages" element={<PagesPage data={data} loading={loading} />} />
            <Route path="/support" element={<SupportPage data={data} loading={loading} />} />
            <Route path="/inbox" element={<InboxPage data={data} loading={loading} />} />
            <Route path="/filemanager" element={<FileManagerPage data={data} loading={loading} />} />
            <Route path="/datalist" element={<DataListPage data={data} loading={loading} />} />
            <Route path="/settings" element={<SettingsPage data={data} loading={loading} />} />
            <Route path="/logout" element={<LogoutButton data={data} loading={loading} />} />
          </Routes>
        </div>

      </div>

    </div>

  );
}

export default App;
