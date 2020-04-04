import React, { Component } from 'react';
import style from "./App.less";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";
import HomePage from './src/components/homePage/HomePage'
import SearchPage from './src/components/searchPage/SearchPage';
import StartPage from './src/components/startPage/StartPage';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               Router
               <Switch>
                  <Route path="/search">
                     <SearchPage />
                     Search Page
                  </Route>
                  <Route path="/start/:id" component={StartPage}>
                  </Route>
                  <Route path="/">
                     <HomePage />
                     Homepage
                  </Route>
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;  