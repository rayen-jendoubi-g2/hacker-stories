import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialStories = [
  {
    title: "react",
    url: "https://react.js.org/",
    author: "jordan",
    num_comments: 2,
    points: 3,
    objectID: 0,
  },
  {
    title: "redux",
    url: "https://redux.js.org/",
    author: "dan",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [stories, setStories] = useState(initialStories);

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );
    setStories(newStories);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleChange}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <Header />
      <hr />
      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
  );
}

const InputWithLabel = ({
  id,
  value,
  type = 'text',
  onInputChange,
  children,
}) => (
  <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    <input
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
    />
  </>
);

const List = ({ list, onRemoveItem }) => {
  console.log("list renders");
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  );
};

const Header = () => {
  console.log("header renders");
  return (
    <div>
      <h1>My hacker stories</h1>
    </div>
  );
};

const Item = ({ item, onRemoveItem }) => {
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button type="button" onClick={() => onRemoveItem(item)}>
          Dismiss
        </button>
      </span>
    </li>
  );
};
/*
What makes a component reusable?
- A reusable component is self-contained, focused on one responsibility, 
  and accepts props to customize behavior or appearance. 
- It avoids hardcoding data so it can be used in different contexts.

What is component composition?
- Component composition means building complex UIs by combining smaller, 
  simpler components together. 
- Instead of one large component, you compose multiple pieces to form the whole.

Why do we pass handlers down the component tree?
- Handlers (like onClick, onChange) are passed down so child components 
  can communicate user actions back to the parent. 
- This keeps state and logic in the parent (single source of truth) 
  while children remain focused on presentation.
*/
export default App;




