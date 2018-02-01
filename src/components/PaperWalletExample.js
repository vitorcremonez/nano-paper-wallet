import React, {Component} from 'react';
import PaperWallet from '../assets/images/paper_wallet.jpg';
import SampleArt from '../assets/images/sample.jpg';

import 'react-photoswipe/lib/photoswipe.css';
import {PhotoSwipeGallery} from 'react-photoswipe';

class PaperWalletExample extends Component {
    items = [
        {
            src: SampleArt,
            thumbnail: SampleArt,
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


    renderWhatIsNanoVideo() {
        return (
            <div>
                <iframe src="https://player.vimeo.com/video/253563861" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen/>
            </div>
        );
    }

    renderPaperWalletVideo() {
        return (
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/a38_qR-S8Yo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen/>
            </div>
        );
    }

    render() {
        return(
            <div className="p-16">
                <h4>Example of Paper Wallet:</h4>
                <img src={PaperWallet} width={200} />
                <h5>Click to see in full screen!</h5>
                <PhotoSwipeGallery items={this.items} thumbnailContent={this.getThumbnailContent}/>

                <h4>What is NANO?</h4>
                { this.renderWhatIsNanoVideo() }
                <h4>A breaf look to NANO Paper Wallet</h4>
                { this.renderPaperWalletVideo() }
            </div>
        );
    }
}

export default PaperWalletExample;

