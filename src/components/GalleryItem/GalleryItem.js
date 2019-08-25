import React, { Component } from 'react';
import axios from 'axios';


class GalleryItem extends Component {
    

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
