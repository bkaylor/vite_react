import { useState } from 'react'

function Post(props) {
    return (
      <div className="card">
        <a href="/oliver">{props.name} {props.handle}</a>
        <div>{props.message}</div>
        <div>
          <a>💖</a>
          <a>🔃</a>
        </div>
      </div>
    )
}

function App() {
  const [count, setCount] = useState(0)

  const post = {
      name: "Oliver",
      handle: "OldMeower",
      message: "Meow! I am an old man, and I love to scream. Meow!",
  }

  const post2 = {
      name: "Torple",
      handle: "GingerMeower",
      message: "Meow! I am an young lady.",
  }

  let posts = [];
  for (var i = 0; i < 10; i += 1)
  {
      posts.push(post);
      posts.push(post2);
  }

  return (
    <>
      <h2>Timeline</h2>
      <div>
        {posts.map((post) => (
            <Post name={post.name} message={post.message} />
        ))}
      </div>
    </>
  )
}

export default App
