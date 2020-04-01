import React, { Component } from 'react'
import style from "./SearchPage.less";
import { Link } from 'react-router-dom';

export default class SearchPage extends Component {
    constructor(props) {
        super(props);

        const currentYear = new Date().getFullYear();
        this.state = {
            currentYear,
            searchValue: ""
        };
    }

    changeSearchValue(e) {
        const value = e.target.value
        console.log('object e : ', e.target.value)
        this.setState(() => ({ searchValue: value}))
    }

    render() {
        return (
            <div>
                <div className="flex-align-center-justify-center-direction-column view-height p-all">
                    <img
                        className="foresight-logo m-bottom"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/312465/Foresight%20Logo-01.svg"
                    />
                    <div className="foresight-search-bar fill-space m-bottom">
                        <input type="text" placeholder="Search the Pokémon Universe" value={this.state.searchValue} onChange={(e) => this.changeSearchValue(e)} />
                        <i className="material-icons">search</i>
                    </div>
                    <div className="m-bottom">
                        <Link to={{
                            pathname: `/start/${this.state.searchValue}`
                        }}
                        >
                            <button className="btn primary m-right">Search</button>
                        </Link>
                        <button className="btn dark-grey">Browse PokéNews</button>
                    </div>
                    <div className="text-center text-grey font-lighter">
                        <div>
                            <small>&copy; Cole Waldrip, {this.state.currentYear}</small>
                        </div>
                        <div>
                            <small>All rights reserved.</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
