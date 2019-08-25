import React, { Component } from 'react';
import axios from 'axios';


class GalleryItem extends Component {
    

    render() {

        let imgPath = this.props.path;
        
        return (
            <div className ="galleryitem">
                <p>{this.props.id}</p>
                <img>{this.props.path}</img>
                <p>{this.props.description}</p>
                <p>{this.props.likes}</p>
            </div>
        );
    }
}

export default GalleryItem;
