import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Posts extends React.Component {
    constructor() {
        super()
        this.state = {
            number: 10,
            posts: []
        }
        this.increasePosts = this.increasePosts.bind(this)
        this.decreasePosts = this.decreasePosts.bind(this)

    }

    increasePosts() {
        console.log('inside increasePosts')

        this.setState(prevState => ({
            number: prevState.number + 10
        }))

    }

    decreasePosts() {
        console.log('inside decreasePosts')

        this.setState(prevState => ({
            number: prevState.number - 10
        }))

    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data
                this.setState({ posts })
            })

    }
    render() {
        return (
            <div>
                <h1>Posts Component</h1>
                <h1>Listing Posts - {this.state.posts.slice(0, this.state.number).length}</h1>
                <ul>
                    {
                        this.state.posts.slice(0, this.state.number).map(post => {
                            return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        })

                    }
                </ul>

                {this.state.number <= this.state.posts.length && <button onClick={this.increasePosts}>Load more</button>}


                {this.state.number > 0 && (<button onClick={this.decreasePosts}>Load Less</button>)}



            </div>
        )
    }
}