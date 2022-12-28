import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Tasks from "./features/tasks/TasksPage";
import Author from "./features/author/Author.js";
import Navigation from "./common/Navigation";
import { StyledNavLink } from "./styled";

export default () => (
  <HashRouter>
    <Navigation
      body={
      <>
        <li><StyledNavLink to="/zadania">Zadania</StyledNavLink></li>
        <li><StyledNavLink to="/autor">O autorze</StyledNavLink></li>
      </>
    }>
    </Navigation>
    <Switch>
      <Route path="/autor">
        <Author />
      </Route>
      <Route path="/zadania">
        <Tasks />
      </Route>
      <Route path="/">
       <Redirect to="/zadania"/>
      </Route>
    </Switch>
  </HashRouter>
);
