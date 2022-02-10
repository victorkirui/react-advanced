import React, { Component } from 'react';

class ClassCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    // clickHandler = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    clickHandler = () => {
      this.setState(prevCount => {
        return {
          count: prevCount.count + 1
        }
      })
    }

  render() {
      const { count } = this.state
    return <>
            <button onClick={this.clickHandler}> Clicked { count } times </button>
        </> 
  }
}

export default ClassCounter;
