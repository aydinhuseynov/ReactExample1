import "./App.css";
import Fotter from "./component/Fotter";
import Header from "./component/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes
  
} from "react-router-dom";

import Home from "./component/Home";
import About from "./component/About";
function App() {
  const [posts, setPost] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);
  return (
    <>
      <Router>
        <Header name="Aydin huseynov" age="30" />
        <Routes>
          <Route pat="/" excat element={<Home/>} />
          <Route path="/about"  element={<About/>}/>
        </Routes>
        <Fotter />
      </Router>

      <div>
        <h2>POSTS</h2>
        <div className="post-cover">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id}>
                <p>ID:{post.id}</p>
                <p>Title: {post.title}</p>
                <div>Body: {post.body}</div>
              </div>
            ))
          ) : (
            <div>No result</div>
          )}
        </div>
        <div>{errorMessage}</div>
      </div>
    </>
  );
}

export default App;
