const ENDPOINT_WIKIPEDIA = "https://en.wikipedia.org/api/rest_v1/page/summary";

async function getWikipediaInfo(searchTerm) {
    const fullURL = `https://en.wikipedia.org/api/rest_v1/page/summary/${searchTerm}`;

    let response = await fetch(fullURL);
    let data = await response.json();
    console.log(data);
    return data;
}


function dataToHTML(wikiArticle) {
    return `
    <section class="card">
        <img src="${wikiArticle.thumbnail.source}">
        <div>
            <h2>${wikiArticle.title}</h2>
            ${wikiArticle.extract_html}
        </div>
    </section>
    `;
}



// Uncomment these functions when you're ready to test:
testgetWikipediaInfo(); // Part A
testDisplayArticles(); // Part B





// Please do not modify the testgetWikipediaInfo() function
async function testgetWikipediaInfo() {
    const western = await getWikipediaInfo("Western Carolina University");
    const unca = await getWikipediaInfo("UNC Asheville");
    const app = await getWikipediaInfo("Appalachian State");
    const charlotte = await getWikipediaInfo("UNC Charlotte");
    console.log(western);
    console.log(unca);
    console.log(app);
    console.log(charlotte);
    return [western, unca, app, charlotte];
}

// Please do not modify the testDisplayArticles() function
async function testDisplayArticles() {
    const container = document.querySelector("#wiki-previews");
    const pages = await testgetWikipediaInfo();
    pages.forEach((page) => {
        container.insertAdjacentHTML("beforeend", dataToHTML(page));
    });
}
