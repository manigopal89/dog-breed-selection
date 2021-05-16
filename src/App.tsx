import "./App.css";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { routes } from "./routes";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm" style={{height: '100vh'}}>
        <Router>
          <Redirect from={""} to={"/breeds"} exact={true}/>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              render={(props) => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} />
              )}
            />
          ))}
        </Router>
      </Container>
    </div>
  );
}

export default App;
