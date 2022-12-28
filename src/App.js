import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Tasks from "./features/tasks/TasksPage";
import Author from "./features/author/Author.js";
import Navigation from "./common/Navigation";

export default () => (
  <HashRouter>
    <Navigation
      body={<>
        <li><Link to="/">Strona główna</Link></li>
        <li><Link to="/autor">O autorze</Link></li>
      </>}>
    </Navigation>
    <Switch>
      <Route path="/autor">
        <Author />
      </Route>
      <Route path="/">
        <Tasks />
      </Route>
    </Switch>
  </HashRouter>
);
