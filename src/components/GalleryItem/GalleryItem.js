import React, { Component } from 'react';
import axios from 'axios';


class GalleryItem extends Component {

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
      }
    

    render() {
        
        return (
            <div className ="galleryitem">
                <p>{this.props.id}</p>
                <img>{this.props.path} alt="text"</img>
                <p>{this.props.description}</p>
                <p>{this.props.likes}</p>
            </div>
        );
    }
}

export default GalleryItem;
