import React, {Component} from 'react';
import PaperWallet from '../assets/images/paper_wallet.jpg';

import nanoSampleArt from '../assets/images/arts/samples/nano-sample.jpg';

import 'react-photoswipe/lib/photoswipe.css';
import {PhotoSwipeGallery} from 'react-photoswipe';

class PaperWalletExample extends Component {
    items = [
        {
            src: nanoSampleArt,
            thumbnail: nanoSampleArt,
            w: 4940,
            h: 2239,
            title: 'Nano Paper Wallet Example'
        }
    ];

    getThumbnailContent = (item) => {
        return (
            <img src={item.thumbnail} style={{cursor:"pointer", maxWidth: 500, width: "100%"}}/>
        );
    };


    renderWhatIsNanoVideo() {
        return (
            <div className="center">
                <div style={{left: 0, width: "100%", height: 0, position: "relative", paddingBottom: "56.2493%", margin: "auto"}}>
                    <iframe src="https://player.vimeo.com/video/253563861?byline=0&badge=0&portrait=0&title=0" style={{border: 0, top: 0, left: 0, width: "100%", height: "100%", position: "absolute"}} allowfullscreen scrolling="no"/>
                </div>
            </div>
        );
    }

    renderPaperWalletVideo() {
        return (
            <div className="center">
                <div style={{left: 0, width: "100%", height: 0, position: "relative", paddingBottom: "56.2493%"}}>
                    <iframe src="https://www.youtube.com/embed/MI2AW7xnioY?rel=0&showinfo=0" style={{border: 0, top: 0, left: 0, width: "100%", height: "100%", position: "absolute"}} allowfullscreen scrolling="no"/>
                </div>
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
                <h4>A brief look to NANO Paper Wallet</h4>
                { this.renderPaperWalletVideo() }
            </div>
        );
    }
}

export default PaperWalletExample;

