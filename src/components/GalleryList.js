import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        const galleryItemElements = this.props.list.map((galleryItem, index) => {
        return  <GalleryItem
                    key={index}
                    getGalleryCallback={this.props.getGalleryCallback}
                    itemData={galleryItem}
                />;
            });
            console.log(galleryItemElements);
    
            return (
                {galleryItemElements}
                
            );
        }
    }
    
    export default GalleryList;