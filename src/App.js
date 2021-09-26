import React from 'react'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import dataJson from './data.json';
import Container from 'react-bootstrap/Container';
import SelectedBeast from './SelectedBeast';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataJson,
      showModal: false,
      SingleBeastObject: null,
    }
  }

  toggleModal = () => {
    (this.state.showModal) ? this.setState({ showModal: false }) : this.setState({ showModal: true });

  }

  updateBeast = (beast) => {
    console.log('UPDATEBEAST FUNCTION----------', beast);
    this.setState({ SingleBeastObject: beast });
  }

  render() {
    console.log('STATE: ', this.state);
    return (
      <>
        <Container>
          <Header />
          <Main
            data={this.state.data}
            toggleModal={this.toggleModal}
            updateBeast={this.updateBeast} />
          {/* This is where we pass the functions down as props */}
          <Footer />
        </Container>
        (this.state.SingleBeastObject)?
        <SelectedBeast SingleBeastObject={this.state.SingleBeastObject} showCard={this.state.showModal} hide={this.toggleModal} /> : '';
        {/* Selected Beast also needs props for: 
        function that displays the Modal ie. Handle Click
        Function that closes the modal */}

        {/* <Modal show={this.state.showModal} onHide={this.toggleModal}>
          <Modal.Header>
            <Modal.Title>MODAL HEADING - APP PAGE TEST</Modal.Title>
          </Modal.Header>
          <Modal.Body>MODAL Body - APP PAGE TEST</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.toggleModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}
      </>
    );
  }
}

export default App;
