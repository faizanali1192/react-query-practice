import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Posts from './components/Posts';
import RCPosts from './components/RCPosts'


function App() {
  return (
    <div className="App">
        <Link to="/">Home</Link> |{" "}
        <Link to="/posts">Posts</Link> |{" "}
        <Link to="/rcposts"> RC Posts</Link>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="rcposts" element={<RCPosts />} />
      
      </Routes>
    </div>
  );
}

export default App;
