import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";

function App() {
  // creating routers using react-router-dom
  return (
    <>
      <Router>
        <Switch>
          {/* home route */}
          <Route exact path="/" component={Home} />
          {/* movie route */}
          <Route exact path="/movie/:id" component={MovieDetails} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
