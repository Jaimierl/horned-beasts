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

  render() {
    return (
      <>
        <div className="beast">

          <Card style={{ width: '18rem' }} onClick={this.setFave}>
            <Card.Img variant="top" src={this.props.image_url} />
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

