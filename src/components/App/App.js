import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

// import './bootstrap.min.css'

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
        <h2>Shanice's Gallery of Important Life Moments</h2>

        <GalleryList list={this.state.galleryList} getGalleryCallback={this.getGalleryItem} />
        
        
  
      </div>
    );
  }
}

export default App;