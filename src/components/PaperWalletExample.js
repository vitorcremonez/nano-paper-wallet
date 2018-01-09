import React, {Component} from 'react';
import PaperWallet from '../assets/images/paper_wallet.jpg';
import Art from '../assets/images/art.jpg';
import 'react-photoswipe/lib/photoswipe.css';
import {PhotoSwipeGallery} from 'react-photoswipe';

class PaperWalletExample extends Component {
    items = [
        {
            src: Art,
            thumbnail: Art,
            w: 4940,
            h: 2239,
            title: 'RaiBlocks Paper Wallet Example'
        }
    ];

    getThumbnailContent = (item) => {
        console.log(PaperWallet);
        return (
            <img src={item.thumbnail} style={{cursor:"pointer", maxWidth: 500, width: "100%"}}/>
        );
    };

    render() {
        return(
            <div>
                <h4>Example of Paper Wallet:</h4>
                <img src={PaperWallet} width={200} />
                <h5>Click to see in full screen!</h5>
                <PhotoSwipeGallery items={this.items} thumbnailContent={this.getThumbnailContent}/>
            </div>
        );
    }
}

export default PaperWalletExample;

