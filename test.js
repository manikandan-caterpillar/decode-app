const ReadText = require('text-from-image');
const path = require('path');

const imagePath = path.join(__dirname, "images", "image.png");

ReadText(imagePath).then(text => {
    console.log(text);
}).catch(err => {
    console.log(err);
});