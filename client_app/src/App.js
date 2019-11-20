import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routers/routes';

function App() {
  return (
    <main className="mainNotification">
      <Switch>
        { routes.map((route, index) => {
          return <Route key={index} path={route.path} exact={route.exact} component={route.main}/>
        })}
      </Switch>
    </main>
  );
}

export default App;
