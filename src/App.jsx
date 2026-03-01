import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const list = [ 
  { 
    title : " react" , 
    url :"https://react.js.org/",
    author : "jordan",
    num_comments : 2,
    points : 3 , 
    object_ID:0 ,
  },

   { 
    title : " redux" , 
    url :"https://redux.js.org/",
    author : "dan",
    num_comments : 2,
    points : 5 , 
    object_ID:1 ,
  }, 
] ; 
const App = () =>
  <div>  
    <Title> </Title>
    <Search></Search>
    <List></List> 
  </div>
  
const List = () => 
  <ul>
  {list.map((item) => 
  {return(
  <li key={item.object_ID}>
    <span>
      < a href = {item.url}>{item.title} </a>
    </span>
    <span> {item.author}
    </span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>); })}
</ul>

const Search = () => {
  const handleChange = (event) => {
 console.log(event.target.value);
 console.log("input changed");
};
  return (
    <div>
      <label htmlFor="search"> Search :</label>
      <input id="search" type ="text" onChange={handleChange}></input>
    </div>
  );
}
  <div>
    <label htmlFor="search"> Search :</label>
    <input id="search" type ="texte"></input>
  </div>
const Title = () =>
    <div>
 <h1> My hacker stories </h1>
    </div>
  
export default App