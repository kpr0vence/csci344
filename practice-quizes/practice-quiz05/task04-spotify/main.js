//Given the spotify search api, get a list of itmes
//https://www.apitutor.org/spotify/simple/v1/search?q=XXX&type=XXX&limit=XXX

async function getSpotifyTracks(artist, type, num_tracks) {
    let artistNoSpace = artist.replaceAll(" ", "+");
    let fullURL = `https://www.apitutor.org/spotify/simple/v1/search?q=${artistNoSpace}&type=${type}&limit=${num_tracks}`
    let response = await fetch(fullURL);
    let tracks = await response.json();

    tracks = tracks.filter((track) => track.artist.name === artist);
    console.log(tracks);
    return (tracks);
}

async function  renderTwoArtists(artist1, artist2, type, num_tracks) {
    let t1 = await getSpotifyTracks(artist1, type, num_tracks);
    let t2 = await getSpotifyTracks(artist2, type, num_tracks);

    let tracks = [...t1, ...t2];
    console.log(tracks);

    renderTracks(tracks);
}

function renderTracks(tracks) {
    let tracksHTML = tracks.map((track) => renderTrack(track));
    let location = document.querySelector(".cards");

    tracksHTML.forEach((snippet) => location.insertAdjacentHTML("beforeend", snippet));
}

function renderTrack(track) {
    let image = "";
    if (track.album.image_url)
        image = `<img src="${track.album.image_url}" alt="almum cover for ${track.album.name}" class="card-img">`

    return `
    <div class="card">
        ${image}
        <h2>${track.name}</h2>
        <h3><em>${track.artist.name}</em></h3>
    </div>
    `;
}

renderTwoArtists("NewDad", "Drug Store Romeos", "track", 15);