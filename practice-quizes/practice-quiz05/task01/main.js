// 1. Create your getBusinesses function here:
async function getBusinesses(location, search_term, num_results) {
    search_term = search_term.replaceAll(" ", "+");
    console.log(search_term);
    const rootURL = 'https://www.apitutor.org/yelp/simple/v3/businesses/search';
    const endpoint = `${rootURL}?location=${location}&term=${search_term}&limit=${num_results}`;

    const response = await fetch(endpoint);
    const matchingBusinesses = await response.json();

    console.log(typeof(matchingBusinesses));
    console.log(`Matches found for ${search_term}, ${location}`)
    console.log(matchingBusinesses);
    
    return matchingBusinesses;
}

    





// 2. When you're done, uncomment the test code below and preview index.html in your browser:


console.log(
    "Should display 3 pizza restaurants in Asheville:",
    getBusinesses("Asheville, NC", "pizza", 3)
);
console.log(
    "Should display 10 thai restaurants in San Francisco:",
    getBusinesses("San Francisco, CS", "thai", 10)
);

