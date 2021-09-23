import React from 'react';

class HornedBeast extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      numberFavorites : 0,
      isFave:false
    };
  }

  onAdd= ()=>{
    this.setState({numberFavorites : this.state.numberFavorites + 1});
  }

  onRemove = () => {
    if (this.state.numberFavorites>0){
      this.setState({numberFavorites: this.state.numberFavorites - 1});
    }
  }

  setFave = () => {
    if (this.state.isFave){
      this.setState({isFave:false});
    } else {
      this.setState({isFave:true});
    }
  }

  render() {
    return (
      <>
        <div className="beast">
          <h2>{this.props.title}</h2>
          <img src={this.props.image_url} />
          <p>{this.props.description}</p>
          <p onClick={this.setFave}>Number of Favorites: {this.state.numberFavorites}</p>
          <p>{(this.state.isFave) ? '💙' : 'Click if this is your favorite!'}</p>
          <button onClick={this.onAdd}>Add</button>
          <button onClick={this.onRemove}>Remove</button>
        </div>
      </>
    );
  }
}

export default HornedBeast;

