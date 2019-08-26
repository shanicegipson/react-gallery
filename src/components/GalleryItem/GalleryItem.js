import React, { Component } from 'react';
import axios from 'axios';

console.log('on gallery Item');

class GalleryItem extends Component {
      state = {
        showDescription: false,
      }

  

  
     
    putLikeGalleryItem (galleryId) {
        axios({
            method: 'PUT',
            url: `/gallery/like/${galleryId}`,
          })
          .then((response) => {
            this.props.getGalleryCallback()
          })
          .catch ((err) => {
            console.log('In PUT error', err);
            alert('PUT Error')
          });
      };

      

      toggleDescription = (event) => {
        event.preventDefault()

        this.setState({
          showDescription: !this.state.showDescription
        })
        
      }
    

    render() {
        const description = this.props.itemData.description;
        console.log(this.props.itemData.path);
        
        return (
          <div className ="galleryitem">
            <p>{this.props.itemData.id}</p>
            {this.state.showDescription && <p className='description'>{description}</p>}
            <img src={this.props.itemData.path} onClick ={this.toggleDescription} alt="text"/>
            <p>{this.props.itemData.likes}</p>
            <button>Like</button>
        </div>

        );
    }

  }
export default GalleryItem;
