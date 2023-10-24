import './App.css'
import Header from './component/Header'
import Main from './component/Main'
import { createContext, useState } from 'react'

export const Mycontext = createContext();

function App() {
  const [category,setCategory] = useState([]);
  const [search,setSearch] = useState('');
  const [sort,setSort] = useState('category');

  return (
    <Mycontext.Provider value={{setCategory,category,setSearch,search,setSort,sort}}>
      <Header/>
      <Main/>
    </Mycontext.Provider>
  )
}

export default App
