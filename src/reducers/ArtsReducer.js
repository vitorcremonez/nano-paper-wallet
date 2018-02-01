import DefaultArt from '../assets/images/arts/raiblocks.jpg';
import NanoDarkBlue from '../assets/images/arts/nano-dark-blue.jpg';

const Arts = {
    "raiblocks": {
        art: DefaultArt,
        size: {
            width: 1000,
            height: 454,
        },
        public_key: {
            width: 320,
            height: 50,
            left: 32,
            bottom: 14,
            color: "black",
            fontSize: 16,
            lineHeight: "18px",
        },
        public_key_qr: {
            width: 143,
            height: 143,
            left: 216,
            bottom: 74,
        },
        seed: {
            width: 210,
            height: 50,
            left: 495,
            bottom: 14,
            color: "black",
            fontSize: 12,
            lineHeight: "14px",
        },
        seed_qr: {
            width: 100,
            height: 100,
            left: 616,
            bottom: 77,
        },
        infos: {
            width: 240,
            height: 409,
            left: 745,
            bottom: 12,
        },
    },
    "nanoDarkBlue": {
        art: NanoDarkBlue,
        size: {
            width: 1000,
            height: 454,
        },
        public_key: {
            width: 320,
            height: 61,
            left: 32,
            bottom: 14,
            color: "white",
            fontSize: 18,
            lineHeight: "20px",
        },
        public_key_qr: {
            width: 119,
            height: 119,
            left: 46,
            bottom: 90,
        },
        seed: {
            width: 260,
            height: 61,
            left: 450,
            bottom: 14,
            color: "white",
            fontSize: 16,
            lineHeight: "18px",
        },
        seed_qr: {
            width: 94,
            height: 94,
            left: 486,
            bottom: 92,
        },
        infos: {
            width: 249,
            height: 434,
            left: 742,
            bottom: 11,
        },
    }
};

export default function (state = Arts, action) {
    return state;
}