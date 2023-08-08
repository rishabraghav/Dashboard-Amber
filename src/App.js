import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App flex h-screen">
      <NavBar />

      <div className='flex w-full flex-col'>

        <SearchBar />

        <div className='w-full h-full flex justify-center'>
          <Dashboard />
        </div>
        
      </div>

    </div>
  );
}

export default App;
