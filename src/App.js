import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import data from './data/data.json';
import './css/App.css';
import Form from 'react-bootstrap/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beastTitle: '',
      beastImg: '',
      beastDescription: '',
      horns: '',
      sortedData: data,
    };
  }

  handleOpenModal = (title, image_url, description) => {
    this.setState({
      showModal: true,
      beastTitle: title,
      beastImg: image_url,
      beastDescription: description,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleSelect = (event) => {
    let selected = parseInt(event.target.value);

    if (selected === 1) {
      let newData = data.filter((element) => element.horns === 1);
      this.setState({
        sortedData: newData,
      });
    } else if (selected === 2) {
      let newData = data.filter((element) => element.horns === 2);
      this.setState({
        sortedData: newData,
      });
    } else if (selected === 3) {
      let newData = data.filter((element) => element.horns === 3);
      this.setState({
        sortedData: newData,
      });
    } else if (selected === 100) {
      let newData = data.filter((element) => element.horns === 100);
      this.setState({
        sortedData: newData,
      });
    } else if (selected === 0) {
      this.setState({
        sortedData: data,
      });
    }
  };

  render() {
    return (
      <>
        <Header />
        <Form.Select onChange={this.handleSelect} aria-label="hornedForm">
          <option>Filter beasts by horns 🎺</option>
          <option value="0">All</option>
          <option value="1">1 horn</option>
          <option value="2">2 horns</option>
          <option value="3">3 horns</option>
          <option value="100">100 horns</option>
        </Form.Select>
        <Main data={this.state.sortedData} handleOpenModal={this.handleOpenModal} />
        <SelectedBeast
          handleCloseModal={this.handleCloseModal}
          showModal={this.state.showModal}
          beastTitle={this.state.beastTitle}
          beastImg={this.state.beastImg}
          beastDescription={this.state.beastDescription}
          beastObj={data}
        ></SelectedBeast>
        <Footer />
      </>
    );
  }
}

export default App;
