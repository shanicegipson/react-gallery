import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    galleryList: [],
  };

  componentDidMount() {
    console.log('mounted');
    this.getGalleryItem();
  
  }


  getGalleryItem () {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
    this.setState({
      galleryList: response.data,
    })
    })
    .catch ((err) => {
      console.log('In GET error', err);
      alert('GET Error')
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>

        <GalleryList getGalleryCallback={this.getGalleryItem} list={this.state.galleryList} />
        
  
      </div>
    );
  }
}

export default App;
