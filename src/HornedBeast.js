import React from 'react';

class HornedBeast extends React.Component{
  render() {
    return (
      <>
        <h2 className="title" >{this.props.title}</h2>
        <img src={this.props.imageURL} alt="Horned Beast Picture"/>
        <p className="description" >{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;

