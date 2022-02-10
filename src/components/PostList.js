import React, { Component } from 'react';
import axios from 'axios'

class PostList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errmsg: ''
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/postsy')
        .then(res => {
            this.setState({
                posts: res.data
            })
        }).catch(err => {
            console.log(err);
            this.setState({errmsg: 'error retrieving data'})
        })
    }
    
  render() {

    const { posts,errmsg} =  this.state
    return <div>
        Post list

        {
            posts.map(post => {
                return <h6 key={post.id}>{post.title}</h6>
            })
        }
        {
            errmsg ? <div>{errmsg} </div> : null
        }
    </div>;
  }
}

export default PostList;
