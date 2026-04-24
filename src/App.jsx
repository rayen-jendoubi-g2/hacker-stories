import React, { useState } from 'react'
import './App.css'

const App = () => {
  console.log('App rendered');

  const stories = [
    {
      title: "react",
      url: "https://react.js.org/",
      author: "Jordan",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

const Search = (props) => (
  <div>
    <label htmlFor="search"> Search: </label>
    <input id="search" type="text" onChange={props.onSearch} />
  </div>
);

const List = (props) => {
  console.log('List rendered');
  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

const Item = (props) => {
  console.log("Item rendered");
  return (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span> {props.item.author}</span>
      <span> {props.item.num_comments}</span>
      <span> {props.item.points}</span>
    </li>
  );
};

const Header = () => <h1>My Hacker Stories</h1>;

export default App;
/*
Props vs State:
- Props are read-only values passed from a parent component to a child. 
  They let components receive data but cannot be changed inside the child.
- State is data owned and managed inside a component. 
  It can change over time (with setState/useState) and triggers re-renders.

Why lift state up:
- When multiple components need to share or react to the same data, 
  the state should live in their closest common parent. 
  This ensures a single source of truth and keeps data flow predictable.

Where filtering logic should live:
- Filtering logic should live in the component that owns the data (App). 
  That way, the child components (like List) only receive the already-filtered data 
  and remain focused on presentation, not business logic.
*/


