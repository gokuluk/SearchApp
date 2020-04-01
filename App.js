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

// class SearchApp extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		const currentYear = new Date().getFullYear();
// 		this.state = {
// 			currentYear
// 		};
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<div className="flex-align-center-justify-center-direction-column view-height p-all">
// 					<img
// 						className="foresight-logo m-bottom"
// 						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/312465/Foresight%20Logo-01.svg"
// 					/>
// 					<div className="foresight-search-bar fill-space m-bottom">
// 						<input type="text" placeholder="Search the Pokémon Universe" />
// 						<i className="material-icons">search</i>
// 					</div>
// 					<div className="m-bottom">
// 						<button className="btn primary m-right">Search</button>
// 						<button className="btn dark-grey">Browse PokéNews</button>
// 					</div>
// 					<div className="text-center text-grey font-lighter">
// 						<div>
// 							<small>&copy; Cole Waldrip, {this.state.currentYear}</small>
// 						</div>
// 						<div>
// 							<small>All rights reserved.</small>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }
export default App;  