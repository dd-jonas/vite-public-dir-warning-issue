import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return <>
    <h1>Vite React app</h1>

    <BrowserRouter>
      <Switch>
        <Route path='/public/foo'>
          <h2>Public foo</h2>
          <Link to="/bar">Switch route</Link>
        </Route>

        <Route path='/bar'>
          <h2>Bar</h2>
          <Link to="/public/foo">Switch route</Link>
        </Route>

        <Redirect to='/public/foo' />
      </Switch>
    </BrowserRouter>
  </>
}

export default App;
