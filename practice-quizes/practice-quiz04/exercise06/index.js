const photos = [
    { image_url: 'images/poppies.jpg', is_favorite: true },
    { image_url: 'images/dogwoods.jpg', is_favorite: true },
    { image_url: 'images/blossom.jpg', is_favorite: false },
    { image_url: 'images/field3.jpg', is_favorite: false },
    { image_url: 'images/field4.jpg', is_favorite: false },
    { image_url: 'images/branch.jpg', is_favorite: true },
    { image_url: 'images/red.jpg', is_favorite: true },
    { image_url: 'images/purple2.jpg', is_favorite: false },
    { image_url: 'images/field1.jpg', is_favorite: false },
    { image_url: 'images/purple.jpg', is_favorite: true },
    { image_url: 'images/jar.jpg', is_favorite: true },
    { image_url: 'images/green.jpg', is_favorite: false },
    { image_url: 'images/green1.jpg', is_favorite: true },
    { image_url: 'images/purple1.jpg', is_favorite: false },
    { image_url: 'images/magnolias.jpg', is_favorite: false },
    { image_url: 'images/daisy1.jpg', is_favorite: true }
];

// write a program, using any kind of loop you want, 
// that draws all of the pictures to the screen 
// where the is_favorite property is set to true. 
// 8 photos should be displayed.

//1. get all of the photos that meet the criteria
let favorites = photos.filter((photo) => {
    //Each one is an object
    return (photo.is_favorite);
});

//2. Build each one's code snippet and inject
let placeHere = document.querySelector(".images");
for (photo of favorites) {
    let snippet = `<img src=${photo.image_url} alt="flower">`;

    placeHere.insertAdjacentHTML("beforeend", snippet);    
}