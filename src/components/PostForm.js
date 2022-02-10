import React, { Component } from 'react';
import axios from 'axios'

class PostForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         title: '',
         body: ''
      }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

  render() {
      const { userId,title,body } = this.state
    return <>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="userId" value={userId} onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="text" name="title" value={title} onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="text" name="body" value={body} onChange={this.handleChange}/>
                </div>

                <button type="submit">Submit</button>
            </form>
    </>;
  }
}

export default PostForm;
