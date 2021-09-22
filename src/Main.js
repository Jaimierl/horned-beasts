import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render(){
    return(
      <>
        <HornedBeast title='TITLE1' imageURL ='https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' description= 'This animal has a horn'/>
        <HornedBeast title='TITLE2' imageURL ='https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' description= 'This animal also has a horn'/>
      </>
    );
  }
}

export default Main;
