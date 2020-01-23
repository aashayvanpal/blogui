import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ShowAuthors extends React.Component {
    constructor() {
        super()
        this.state = {
            author: {},
            posts: []
        }

    }

    componentDidMount() {
        const id = this.props.match.params.id
        console.log('id :', id)

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                const author = response.data
                console.log('author :', author)
                this.setState({ author })


                axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                    .then(response => {
                        const posts = response.data
                        console.log('posts :', posts)
                        this.setState({ posts })
                    })
            })

    }
    render() {
        return (
            <div>
                <h1>Showing the Author -  {this.props.match.params.id}</h1>

                <h1>Author Name :</h1>
                {this.state.author.name}
                <h1>Email :</h1>
                {this.state.author.email}

                <h1>Lising Posts - {this.state.posts.length}</h1>
                <ul>
                    {
                        this.state.posts.map(post => {
                            return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        })
                    }
                </ul>


            </div>
        )
    }
}