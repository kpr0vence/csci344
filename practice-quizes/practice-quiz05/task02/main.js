// 1. Create your businessToHTML function here:
function businessToHTML(business) {
    let price = "";
    if (business.price)
        price = business.price;

    return `
    <div class="card">
        <h1>${business.name}</h1>
        <h2><em>${business.display_address}</em></h2>
        <img src="${business.image_url}" alt="business image" class="card-img">
        <p>Rating: ${business.rating} stars</p>
        <p>Price: ${price}</p>
        <p># of Reviews: ${322}</p>
    </div>
    `;
}

//write the function to get the items
async function getMatchingResults(location, search_term, num_results) {
    location = location.replaceAll(" ", "+");
    let fullURL = `https://www.apitutor.org/yelp/simple/v3/businesses/search?location=${location}&term=${search_term}&limit=${num_results}`;
    let results = await fetch(fullURL);

    let usable = await results.json();
    console.log(usable)
    renderCards(usable);
}

function renderCards(resultsJSON) {
    resultsJSON.forEach((result) => renderCard(result));
}

function renderCard(business) {
    let snippet = businessToHTML(business);
    document.querySelector(".cards").insertAdjacentHTML("beforeend", snippet);
}

getMatchingResults("Asheville, NC", "pizza", 10);



// 2. When you're done, uncomment the test code below and preview index.html in your browser:

// const businessObjPriceDefined = {
//     id: "d8Vg0DxRY-s2a8xnZ6ratw",
//     name: "Chestnut",
//     rating: 4.5,
//     image_url:
//         "https://s3-media3.fl.yelpcdn.com/bphoto/TprWlxsHLqjZfCRgDmqimA/o.jpg",
//     display_address: "48 Biltmore Ave, Asheville, NC 28801",
//     coordinates: { latitude: 35.5931657, longitude: -82.550943 },
//     price: "$$",
//     review_count: 1257,
// };

// const businessObjPriceNotDefined = {
//     id: "d8Vg0DxRY-s2a8xnZ6ratw",
//     name: "Chestnut",
//     rating: 4.5,
//     image_url:
//         "https://s3-media3.fl.yelpcdn.com/bphoto/TprWlxsHLqjZfCRgDmqimA/o.jpg",
//     display_address: "48 Biltmore Ave, Asheville, NC 28801",
//     coordinates: { latitude: 35.5931657, longitude: -82.550943 },
//     review_count: 1257,
// };


// console.log("HTML representation of a business:", businessToHTML(businessObjPriceDefined));
// console.log("HTML representation of a business (no price):", businessToHTML(businessObjPriceNotDefined));
// document.querySelector("body").insertAdjacentHTML("beforeend", businessToHTML(businessObjPriceDefined));
// document.querySelector("body").insertAdjacentHTML("beforeend", businessToHTML(businessObjPriceNotDefined));

