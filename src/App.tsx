import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Profile } from './pages';
import { BottomNav } from './components/BottomNav';

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <BottomNav />
    </>
  );
};

export default App;
