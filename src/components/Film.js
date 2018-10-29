import React, {Component} from 'react';

class Film extends Component{
  render(){
    return(
      <div>
      <li>
      <a href = {this.props.url}> {this.props.name}</a>
    </li>
      </div>
    )
  }
}

export default Film;
