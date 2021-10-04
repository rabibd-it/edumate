import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";

function App() {
  return (
    <div>
      <Router>
        {/* Header Component */}
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/courses">
            <Courses></Courses>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        {/* Footer Component */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
