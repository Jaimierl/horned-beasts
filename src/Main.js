import React from 'react';
import HornedBeast from './HornedBeast';
import CardGroup from 'react-bootstrap/CardGroup';
// import data from './data.json';

class Main extends React.Component {

  render() {
    let dataArray = this.props.data.map((beast, idx) =>
      <HornedBeast
        key={idx}
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        toggleModal={this.props.toggleModal}
        updateBeast={this.props.updateBeast}
        hornNumber={beast.horns} />
    )
    console.log('Main Props: ', this.props);
    return (
      <>
        <CardGroup>
          {dataArray}
        </CardGroup>
      </>
    );
  }
}

export default Main;
