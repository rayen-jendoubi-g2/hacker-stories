import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

const initialStories = [
  {
    title: "React",
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

const App = () => {
  const [stories, setStories] = useState([]);
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('search') || 'React');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!searchTerm) return;

    setIsLoading(true);

    fetch(`${API_ENDPOINT}${searchTerm}`)
      .then((response) => response.json())
      .then((result) => {
        setIsLoading(false);
        setStories(result.hits);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );
    setStories(newStories);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        Search:
      </InputWithLabel>
      <hr />
      {isError && <p>Something went wrong ...</p>}
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list={searchedStories} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
};

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
);

const InputWithLabel = ({
  id,
  value,
  type = 'text',
  onInputChange,
  children,
}) => (
  <div>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    <input
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
    />
  </div>
);

const Header = () => <h1>My Hacker Stories</h1>;

const Item = ({ item, onRemoveItem }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span> {item.author}</span>
    <span> {item.num_comments}</span>
    <span> {item.points}</span>
    <span>
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
  </li>
);
/*
Why use useEffect for fetching?
- useEffect ensures data fetching runs at the right time in the component lifecycle.
- It triggers after render and when dependencies change, preventing repeated or uncontrolled fetch calls.

What is the difference between loading and error state?
- Loading state indicates a request is in progress (UI can show a spinner or "Loading...").
- Error state indicates the request failed (UI can show an error message).
- They represent different phases of the async process.

Why control when fetching happens?
- Controlling fetch timing avoids unnecessary network requests.
- It ensures data is only fetched when needed (e.g., when searchTerm changes).
- This improves performance, reduces API load, and keeps UI predictable.
*/

export default App;





