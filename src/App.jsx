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

  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('search') || 'React');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    localStorage.setItem('search', event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search"> Search: </label>
    <input id="search" value={search} type="text" onChange={onSearch} />
  </div>
);

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span> {item.author}</span>
    <span> {item.num_comments}</span>
    <span> {item.points}</span>
  </li>
);

const Header = () => <h1>My Hacker Stories</h1>;

export default App;
/*
What is a controlled component?
- A controlled component is an input element (like <input>, <textarea>, <select>) 
  whose value is fully managed by React state. 
  The displayed value always comes from state, and changes are handled through event handlers.

What is a side effect in React?
- A side effect is any operation that affects something outside the component’s scope 
  (e.g., fetching data, updating localStorage, subscribing/unsubscribing, logging).
  It’s code that runs in addition to rendering UI.

Why do we use useEffect instead of calling code directly?
- useEffect ensures side effects run at the right time in the component lifecycle 
  (after render, when dependencies change, or on unmount).
- Calling code directly inside the component body would run on every render, 
  which can cause bugs or performance issues. 
  useEffect gives us control over when and how often side effects execute.
*/



