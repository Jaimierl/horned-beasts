import React from 'react'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import dataJson from './data.json';
import Container from 'react-bootstrap/Container';
import SelectedBeast from './SelectedBeast';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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

  onSubmit = (event) => {
    event.preventDefault();
    console.log('submitted')
  }

  handleChange = (event) => {
    console.log('Horns Selected: ', event.target.value);
    let numHorns = parseInt(event.target.value);
    let newData = dataJson;
    if (numHorns) newData = newData.filter(beastsInDataArray => numHorns === beastsInDataArray.horns
    )
    this.setState({ data: newData });
    console.log('New Data:', newData);
  }
  // You can just call the full unaltered array by refering to the dataJson file
  // The ParseInt above is to convert the string from the form value into a number to match the Data.json number
  // Lets run ParseInt on the event to see if the user chose a filter for the numner of horns, then we can add an if statement on the filter to check data type. If parseInt is true aka they chose a number then it will filter, otherwise the result will be Nan and there will be no filter. 


  render() {
    console.log('STATE: ', this.state);
    return (
      <>
        <Container>
          <h2 id="formy"> Filter by Number of Horns!</h2>
          <main>
            <form id="myForm" onSubmit={this.onSubmit}>
              <Form.Group controlid="hornsForm.ControlSelect"></Form.Group>
              <Form Control as="select" name="numberOfHorns" onChange={this.handleChange}>
                <option value="">Select Number of Horns</option>
                <option value="">All Horns</option>
                <option value="1">1 Horn</option>
                <option value="2">2 Horns</option>
                <option value="3">3 Horns</option>
                <option value="100">100 Horns</option>
              </Form>
              <Button type="submit">Submit</Button>
            </form>
          </main>
        </Container>

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
        Function that closes the modal above*/}
      </>
    );
  }
}

export default App;
