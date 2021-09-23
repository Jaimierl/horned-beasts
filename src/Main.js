import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Main extends React.Component {
  render(){
    let dataArray = [];
    data.forEach((beast, idx)=>{dataArray.push(<HornedBeast key={idx} title={beast.title} image_url={beast.image_url} description={beast.description}/>
    );
    });

    return(
      <>
        {dataArray}
      </>
    );
  }
}

export default Main;
