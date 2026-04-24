import './App.css'

const stories = [
  {
    objectID: "1",
    title: "React 19 Released",
    url: "https://react.dev",
    author: "dan_abramov",
    points: 150,
    num_comments: 45,
  },
  {
    objectID: "2",
    title: "JavaScript Trends in 2026",
    url: "https://javascript.com",
    author: "frontend_master",
    points: 98,
    num_comments: 20,
  },
];

function App() {
  return (
    <div>
      <h1>Hacker News Clone</h1>

      {stories.map((story) => (
        <div key={story.objectID}>
          <h3>
            <a
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {story.title}
            </a>
          </h3>

          <p>
            <span>Author: {story.author} | </span>
            <span>Points: {story.points} | </span>
            <span>Comments: {story.num_comments}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App

