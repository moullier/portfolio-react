import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
        <Route exact path={["/", "/about"]}>
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
