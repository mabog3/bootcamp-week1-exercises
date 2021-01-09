import React from 'react'
import { Route, Switch } from "react-router-dom";
import TodoPage from './containers/todopage/todopage.js';
import Homepage from './containers/homepage/homepage.js';


const App = () => {
  return (<>
    <div>
      Beep boop hi there, I&apos;m your personal assistant hehe
    </div>
    <Switch>
      <Route exact path='/'>
        <Homepage/>
      </Route>
      <Route exact path='/todos'>
        <TodoPage/>
      </Route>
    </Switch>
  </>)
}

export default App
