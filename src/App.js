import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);

  return (
    <>
    <div>
    <Router>
      <NavBar/>
      <LoadingBar
        color='#060606'
        shadow='true'
        height={3}
        progress={progress}
      />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" country={"in"} category={'general'} pageSize={pageSize}/>}></Route>
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" country={"in"} category={'business'} pageSize={pageSize}/>}></Route>
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" country={"in"} category={'entertainment'} pageSize={pageSize}/>}></Route>
        <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" country={"in"} category={'general'} pageSize={pageSize}/>}></Route>
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" country={"in"} category={'health'} pageSize={pageSize}/>}></Route>
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" country={"in"} category={'science'} pageSize={pageSize}/>}></Route>
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" country={"in"} category={'sports'} pageSize={pageSize}/>}></Route>
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" country={"in"} category={'technology'} pageSize={pageSize}/>}></Route>
    </Routes>
      </Router>
  </div>
  </>
  )
}

export default App