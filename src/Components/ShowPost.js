import React from 'react'
import axios from 'axios'

export default class ShowPost extends React.Component {
    constructor() {
        super()
        this.state = {
            post: {},
            user: '',
            comments: []
        }

    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {

                const post = response.data
                console.log('post :', post)
                this.setState({ post })


                const userid = response.data.userId
                console.log('userid :', userid)
                axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
                    .then(response => {
                        const user = response.data.name
                        this.setState({ user })
                    })
                    .catch(err => { return err })

                axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
                    .then(response => {
                        const comments = response.data
                        console.log('comments :', comments)
                        this.setState({ comments })

                    })
                    .catch(err => { return err })



            })
            .catch(err => { return err })

    }
    render() {
        return (
            <div>
                <h1>Showing the Post -  {this.props.match.params.id}</h1>

                <h1>Author of the post :</h1>
                {this.state.user}
                < h1 > Post Title :</h1 >
                {this.state.post.title}
                < h1 > Post Body :</h1 >
                {this.state.post.body}

                < h1 > Listing Comments - {this.state.comments.length}</h1 >
                <ul>
                    {
                        this.state.comments.map(comment => {
                            return <li key={comment.id}>{comment.name}</li>
                        })

                    }
                </ul>


            </div >
        )
    }
}