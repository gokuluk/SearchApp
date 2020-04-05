import React, { Component } from 'react'
// import Image from .

import style from "./StartPage.less";
import ImagePage from '../imagePage/ImagePage';

export default class StartPage extends Component {
    constructor(props) {
        super(props);
        console.log('props StartPage: ', props)
        this.state = {
            searchValue: this.props.match.params.value | "",
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            fetch("http://127.0.0.1:5000//api/v1/resources/trollsearch?keyw=" + this.props.match.params.id)//troll270
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log("rresponse::: " + result)
                        this.setState({
                            isLoaded: true,
                            items: result
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
                .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
        }
    }

    render() {
        const { searchValue, error, isLoaded, items } = this.state;
        console.log('searchValue : ', this.props)
        console.log('items : ', items)
        console.log('isLoaded : ', isLoaded)
        let images;
        if (error) {
            console.log('isLoaded error:::: ', isLoaded)
            images = <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            console.log('isLoaded not: ', isLoaded)
            images = <div>Loading...</div>;
        } else if (isLoaded) {
            if (items.length) {
                console.log('isLoaded done: ', JSON.stringify(items))
                images = (
                    <ul>
                        {items.map((item, key) => (
                            <li key={key}>
                                <img
                                    src={item.url.split("'")[1]}
                                    alt="new"
                                />
                            </li>
                        ))}
                    </ul>
                );
            } else {
                images = <div>No match Found...</div>;
            }
        }

        return (
            <div>
                images::    {images}
            </div>
        )
    }
}
