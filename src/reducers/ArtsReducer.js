import defaultArt from '../assets/images/art.jpg';

const Arts = {
    "default": {
        art: defaultArt,
        size: {
            width: 1000,
            height: 454,
        },
        public_key: {
            width: 320,
            height: 50,
            left: 32,
            bottom: 14,
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
    }
};

export default function (state = Arts, action) {
    return state;
}