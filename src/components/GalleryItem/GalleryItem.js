import React, { Component } from 'react';
import axios from 'axios';

console.log('on gallery Item');

class GalleryItem extends Component {
      state = {
        showDescription: true,
        likes: 0,
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
      clickLike =(event) => {
        this.setState({likes: this.state.likes +1});
      }
      

      toggleDescription = (event) => {
        event.preventDefault()

        const description = this.props.itemData.description;
        const image = this.props.itemData.path;

        if (this.state.showDescription !== false ){
          this.setState({description});
        } else if(this.state.showDescription === true ) {
            this.setState({image});
        }  
        
        console.log(description);
        console.log(image);
      }

    render() {
        
        
        return (
          <div className ="galleryitem">
            <p>{this.props.itemData.id}</p>
            {/* {this.state.showDescription && <p className='description'>{description}</p>} */}
            <img src={this.props.itemData.path} onClick ={this.toggleDescription} alt="text"/>
            <p>{this.props.itemData.likes}</p>
            <button onClick={this.clickLike}>Like</button>
        </div>

        );
    }

  }
export default GalleryItem;
