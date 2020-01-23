import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Authors from './Components/Authors.js'
import Posts from './Components/Posts.js'
import ShowPost from './Components/ShowPost.js'
import ShowAuthor from './Components/ShowAuthor.js'

function App() {
  return (
    <BrowserRouter>
      <Link to='/' >Home </Link>
      <Link to='/posts' >Posts</Link>
      <Link to='/authors' >Authors</Link>

      <Route path="/authors" component={Authors} exact={true} />
      <Route path="/authors/:id" component={ShowAuthor} />
      <Route path="/posts" component={Posts} exact={true} />
      <Route path="/posts/:id" component={ShowPost} />

    </BrowserRouter>
  );
}

export default App;
