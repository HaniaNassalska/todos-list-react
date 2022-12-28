import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author.js";
export default () => (
 <BrowserRouter>
 <nav>
 <ul>
 <li><Link to="/">Strona główna</Link></li>
 <li><Link to="/autor">O autorze</Link></li>
 </ul>
 </nav>
 <Switch>
 <Route path="/autor">
 <Author />
 </Route>
 <Route path="/">
 <Tasks />
 </Route>
 </Switch>
 </BrowserRouter>
);
