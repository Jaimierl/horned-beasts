import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      numberFavorites: 0,
      isFave: false
    };
  }

  sendSelected = () => {
    let infoFromBeast = {
      title: this.props.title,
      image_url: this.props.image_url,
      description: this.props.description
    };
    console.log('INFO FROM BEAST IN HORNED BEAST PAGE: ', infoFromBeast);
    this.props.updateBeast(infoFromBeast);
  }

  onAdd = () => {
    this.setState({ numberFavorites: this.state.numberFavorites + 1 });
  }

  onRemove = () => {
    if (this.state.numberFavorites > 0) {
      this.setState({ numberFavorites: this.state.numberFavorites - 1 });
    }
  }

  setFave = () => {
    if (this.state.isFave) {
      this.setState({ isFave: false });
    } else {
      this.setState({ isFave: true });
    }
  }

  runUpdate = () => {
    this.props.toggleModal();
    this.sendSelected();
  }

  render() {
    return (
      <>
        <div className="m-2">

          <Card style={{ width: '18rem' }} onClick={this.setFave}>
            <Card.Img variant="top" src={this.props.image_url} onClick={this.runUpdate} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              <p>Number of Favorites: {this.state.numberFavorites}</p>
              <p>{(this.state.isFave) ? '💙' : ''}</p>
              {/* This p tag controls where on the card the heart shows up. The container is not so important. */}
              <Button variant="outline-info" className="m-1" onClick={this.onAdd}>Add</Button>
              <Button variant="outline-info" className="m-1" onClick={this.onRemove}>Remove</Button>
            </Card.Body>
          </Card>

        </div>
      </>
    );
  }
}

export default HornedBeast;

