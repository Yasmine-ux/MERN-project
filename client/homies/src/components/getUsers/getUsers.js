import React, { Component } from 'react'
import Axios from 'axios'

export default class getUsers extends Component {
    state = {
        name:'',
        email:'',
        posts: []
    }

    getUserPosts = ()=> {
        Axios.get('http://localhost:5000/api/users')
        .then((response)=> {
            const data = response.data;
            this.setState({ posts: data });
            console.log('data has been recieved')
        })
        .catch(()=>{
            alert('error retrieving data')
        })
    }
    componentDidMount=()=>{
        this.getUserPosts()
    }
    displayUser =(posts)=>{
        if (!posts.length) return null;
        return posts.map((post, i)=>(
            <div key={i}>
                <p>{'hello'}</p>
                <p>{post.email}</p>
            </div>
        ))
    }


    render() {
        return (
            <div>
                {this.displayUser(this.state.posts)}
            </div>
        )
    }
}
