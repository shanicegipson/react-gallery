import React, { Component } from 'react';
import axios from 'axios';

console.log('on gallery Item');

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
    
    clickLikeHandler = (event) => {
        this.setState({likes: 0});
    }

    render() {

        console.log(this.props.itemData.path);
        
        return (
            <div className ="galleryitem">
                <p>{this.props.itemData.id}</p>
                <img src={this.props.itemData.path} alt="text"/>
                <p>{this.props.itemData.description}</p>
                <p>{this.props.itemData.likes}</p>
                <button onClick={this.clickLikeHandler}>Like</button>
            </div>
        );
    }
}

export default GalleryItem;
