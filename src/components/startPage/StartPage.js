import React, { Component } from 'react'

import style from "./StartPage.less";

export default class StartPage extends Component {
    constructor(props) {
        super(props);
        console.log('props StartPage: ', props)
        this.state = {
            searchValue: this.props.match.params.value| ""
        }
    }

    render() {
        const {searchValue} = this.state
        console.log('searchValue : ', this.props)
        return (
            <div>
                Start Page: {this.props.match.params.id}
            </div>
        )
    }
}
