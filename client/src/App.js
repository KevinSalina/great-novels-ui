import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import List from './components/List/List';
import Search from './components/Search/Search';


function App() {

  const [novels, setNovels] = useState([])
  const [displayNovels, setDisplayNovels] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getNovels()
  }, []);

  useEffect(() => {
    setDisplayNovels(filterNovels())
  }, [searchTerm])

  const getNovels = async () => {
    const fetch = await axios.get('http://localhost:1337/api/novels')

    console.log(fetch.data)
    setNovels(fetch.data)
    setDisplayNovels(fetch.data)
  };

  const filterNovels = () => {
    return novels.filter(novel => novel.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="App">
      <h1>Great Novels</h1>
      <Search searchTerm={searchTerm} setterFn={updateSearchTerm} />
      <List novels={displayNovels} />
    </div>
  );
}

export default App;
