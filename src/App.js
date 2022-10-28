import './App.css';
import {Header} from "./Components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Landing} from "./Components/Landing/Landing";
import {useEffect} from "react";

function App(props) {

  return (
      <BrowserRouter>
          <div className="App">
              <Header />
              <Routes>
                  <Route path={'/'} element={<Landing/>}></Route>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
