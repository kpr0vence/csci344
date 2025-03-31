const showRestaurants = async (location, term, limit) => {
    const rootURL = 'www.apitutor.org/yelp/simple/v3/businesses/search';
    console.log(`${rootURL}?location=${location}&term=${term}&limit=${limit}`);
    const endpoint = `${rootURL}?location=${location}&term=${term}&limit=${limit}`;
    const response = await fetch(endpoint);
    const jsonData = await response.json();
    // console.log(`Matches for ${term}:`, jsonData);
    console.log("Maches found for " +term);
    for (let i = 0; i < jsonData.length; i++) {
        console.log(jsonData[i].name);
    }
 };

// note that the thai restaurants might 
// get printed before the pizza restaurants
showRestaurants('Asheville,+NC', 'pizza', 5);
showRestaurants('Asheville,+NC', 'thai', 1);