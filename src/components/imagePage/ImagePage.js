import React, { Component } from 'react'
import { Image } from 'react-bootstrap';

export default class ImagePage extends Component {
    constructor(props) {
        super(props);
        console.log('props Image: ', props)
        this.state = {
        }
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            fetch("http://127.0.0.1:5000//api/v1/resources/trollsearch?keyw=troll270")
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
    }
}
