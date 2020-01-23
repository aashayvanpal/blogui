import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Authors extends React.Component {
    constructor() {
        super()
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const authors = response.data
                this.setState({ authors })
            })
    }
    render() {
        return (
            <div>
                <h1>Authors Component</h1>
                <h1>Listing Authors - {this.state.authors.length}</h1>
                <ul>
                    {
                        this.state.authors.map(author => {
                            return <li key={author.id}><Link to={`/authors/${author.id}`}>{author.name}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}