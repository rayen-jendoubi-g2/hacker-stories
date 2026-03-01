import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const list = [
  {
    title: "react",
    url: "https://reactjs.org/",
    author: "jordan",
    num_comments: 2,
    points: 3,
    object_ID: 0,
  },
  {
    title: "redux",
    url: "https://redux.js.org/",
    author: "dan",
    num_comments: 2,
    points: 5,
    object_ID: 1,
  },
]

function Title() {
  return (
    <div>
      <h1>My hacker stories</h1>
    </div>
  )
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  )
}

function List() {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.object_ID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span> {item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </li>
      ))}
    </ul>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Custom components */}
      <Title />
      <Search />
      <List />
    </>
  )
}

export default App
