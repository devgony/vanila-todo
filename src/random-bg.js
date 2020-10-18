const URL = `https://source.unsplash.com/random`

const loadImage = () => {
    const image = new Image();
    image.src = URL
    image.classList.add("bg-image")
    document.body.prepend(image);
}

const bgInit = () => {
    loadImage();
}
bgInit();