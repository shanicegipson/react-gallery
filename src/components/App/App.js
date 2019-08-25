import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

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

        <GalleryList list={this.state.galleryList} getGalleryCallback={this.getGalleryItem} />
        
  
      </div>
    );
  }
}

export default App;


// <div className="row">
//           <div class="column">
//             <img src="images/TwinsBirth.jpg" alt="text"/>
//             <img src="images/BryndeeandI.jpg" alt="text"/>
//             <img src="images/favtwinphoto.jpg" alt="text"/>
//           </div>
//           <div class="column">
//             <img src="images/TreaseandI.jpg" alt="text"/>
//             <img src="images/mykids.jpg" alt="text"/>
//             <img src="images/momandnathan.jpg" alt="text"/>
//           </div>
//           <div class="column">
//             <img src="images/Grandma.jpg" alt="text"/>
//             <img class="fix" src="images/meandbrothers.jpg" alt="text"/>
//             <img src="images/shamekaandI.jpg" alt="text"/>
//           </div>
//           <div class="column">
//             <img src="images/TaylorandI.jpg" alt="text"/>
//             <img src="images/pammichaelandI.jpg" alt="text"/>
//           </div>