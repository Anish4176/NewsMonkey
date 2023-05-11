import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const  App=()=> {
  let pageSize = 6;
  let apikey=process.env.REACT_APP_API_KEY
  const [progress, setprogress] = useState(10)
  // state={
  //   progress:10
  // }
  // const setprogress=(progress)=>{
  //   setState({progress:progress});
  // }

    return (
  
      <>

        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
           
          />
          <Routes>
            <Route path="/" element={<News setprogress={setprogress} apikey={apikey} key="general" pageSize={pageSize} category="general" country="in" />}> </Route>
            <Route path="/business" element={<News setprogress={setprogress} apikey={apikey} key="business" pageSize={pageSize} category="business" country="in" />}> </Route>
            <Route path="/entertainment" element={<News setprogress={setprogress} apikey={apikey} key="entertainment" pageSize={pageSize} category="entertainment" country="in" />}> </Route>
            <Route path="/health" element={<News setprogress={setprogress} apikey={apikey} key="health" pageSize={pageSize} category="health" country="in" />}> </Route>
            <Route path="/science" element={<News setprogress={setprogress} apikey={apikey} key="science" pageSize={pageSize} category="science" country="in" />}> </Route>
            <Route path="/sports" element={<News setprogress={setprogress} apikey={apikey} key="sports" pageSize={pageSize} category="sports" country="in" />}> </Route>
            <Route path="/technology" element={<News setprogress={setprogress} apikey={apikey} key="technology" pageSize={pageSize} category="technology" country="in" />}> </Route>
          </Routes>
        </Router>

      </>
    )
  }
export default App



