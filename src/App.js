import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import data from './data/data.json';
import SelectedBeast from './SelectedBeast';
// import './css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beastTitle: '',
      beastImg: '',
      beastDescription: '',
    }
  }


  handleOpenModal = (title, image_url, description) => {
    this.setState({
      showModal: true,
      beastTitle: title,
      beastImg: image_url,
      beastDescription: description,
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main data={data} handleOpenModal={this.handleOpenModal} />
        <SelectedBeast handleCloseModal={this.handleCloseModal} showModal={this.state.showModal} beastTitle={this.state.beastTitle}
          beastImg={this.state.beastImg} beastDescription={this.state.beastDescription} beastObj={data}>
        </SelectedBeast>
        <Footer />
      </>
    )
  }
}
export default App;