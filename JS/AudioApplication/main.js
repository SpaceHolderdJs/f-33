// Interfaces

const artistInterface = {
  id: 0,
  name: "",
  link: "",
  picture: "",
  picture_small: "",
  picture_medium: "",
  picture_big: "",
  picture_xl: "",
  tracklist: "",
  type: "",
};

const albumInterface = {
  id: 0,
  title: "",
  cover: "",
  cover_small: "",
  cover_medium: "",
  cover_big: "",
  cover_xl: "",
  md5_image: "",
  tracklist: "",
  type: "",
};

const songInterface = {
  id: 0,
  readable: true,
  title: "",
  title_short: "",
  title_version: "",
  link: "",
  duration: 0,
  rank: 0,
  explicit_lyrics: true,
  explicit_content_lyrics: 0,
  explicit_content_cover: 0,
  preview: "",
  md5_image: "",
  artist: artistInterface,
  album: albumInterface,
};

// Elements

const audio = document.querySelector("audio");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

const currentSongElement = document.querySelector("#current-song-name");

const songsCardsWrapper = document.querySelector(".music-cards-wrapper");

// API

class API {
  constructor(
    baseUrl = "",
    options = {
      headers: {
        "X-RapidAPI-Key": "2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  ) {
    this.baseUrl = baseUrl;
    this.options = options;
  }

  async searchSongsByArtist(artist) {
    const response = await axios({
      method: "GET",
      url: `${this.baseUrl}/search`,
      params: { q: artist },
      headers: this.options.headers,
    });

    console.log(response);

    return response.data;
  }
}
parent;

const musicAPI = new API("https://deezerdevs-deezer.p.rapidapi.com");

// musicAPI.searchSongsByArtist("eminem");

class Views {
  renderSongCard(songData = songInterface, parent) {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "song-card";

    // Image
    const cardImage = document.createElement("img");
    cardImage.className = "song-image";
    cardImage.src = songData.artist.picture_medium;
    cardWrapper.appendChild(cardImage);

    // Title
    const cardTitle = document.createElement("h3");
    cardTitle.textContent = songData.title;
    cardWrapper.appendChild(cardTitle);

    // Description
    const cardDescription = document.createElement("article");
    cardDescription.innerHTML = `
        <p>Duration: ${getSongDuration(songData.duration)}</p>
        <p>Artist: ${songData.artist.name}</p>
        <p>Link: ${songData.link}</p>
    `;
    cardWrapper.appendChild(cardDescription);

    // AudioButon
    const audioButton = document.createElement("button");
    audioButton.className = "audio-button";
    audioButton.textContent = "Play!";

    audioButton.onclick = () => {
      if (audio.src === songData.preview) {
        audio.src = "";
        audio.pause();
        audioButton.textContent = "Play!";
      } else {
        audio.src = songData.preview;
        audio.load();
        audio.play();

        views.updateCurrentSongName(songData);

        audioButton.textContent = "Stop!";
      }
    };

    cardWrapper.appendChild(audioButton);

    // Finaly
    parent.appendChild(cardWrapper);
  }

  updateCurrentSongName(songData = songInterface) {
    currentSongElement.textContent = `${songData.title} (${getSongDuration(
      songData.duration
    )})`;
  }
}

const views = new Views();

async function renderSongsCards() {
  const searchValue = searchInput.value;

  const songsData = await musicAPI.searchSongsByArtist(searchValue);

  songsCardsWrapper.innerHTML = "";

  songsData.data.forEach((songData) => {
    views.renderSongCard(songData, songsCardsWrapper);
  });

  console.log(songsData);
}

searchButton.onclick = renderSongsCards;

function getSongDuration(s) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setSeconds(s);

  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${minutes}:${seconds}`;
}
