import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/index.js";
import Navigation from "./common/Navigation";
import { StyledNavLink } from "./styled";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage/index";


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
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/autor">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);
