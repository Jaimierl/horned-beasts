import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  render() {
    console.log('SELECTED BEAST--Props:', this.props);
    return (
      <>
        {
          this.props.SingleBeastObject ?
            <Modal show={this.props.showCard} onHide={this.props.hide}>
              <Modal.Header>
                <Modal.Title>
                  {this.props.SingleBeastObject.title}</Modal.Title>
                <img
                  src={this.props.SingleBeastObject.image_url}
                  alt={this.props.SingleBeastObject.title}
                  style={{ width: '300px' }}
                />
              </Modal.Header>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.props.hide}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            : ''
        }
      </>
    );
  }
}

export default SelectedBeast;