
// ==========================================
// LEXY POO'S LITTLE PLAYLIST 🤍
// 25 songs, 25 personal notes
// ==========================================

const songs = [
  {
    title: "4 Page Letter",
    artist: "Aaliyah",
    audioFile: "Aaliyah - 4 Page Letter (Original Video).mp3",
    note: "Lexy Poooo! 🥹 Sometimes there are feelings that are easier to express through music than words. This song deserved a special place on your playlist. Just imagine me handing you a little four-page letter filled with things I appreciate about you. 😂🤍"
  },
  {
    title: "Calling on You",
    artist: "Jon B.",
    audioFile: "Jon B. - Calling On You.mp3",
    note: "There's something about this song that makes me think about wanting to hear from someone special. And yes, sometimes that someone is you, silly girl. 😂"
  },
  {
    title: "I'm Gonna Be",
    artist: "Donell Jones",
    audioFile: "Donell Jones - I'm Gonna Be.mp3",
    note: "I hope you know that having someone who genuinely wants to see you smile is a beautiful thing. I can't promise to have all the answers, but I can promise to keep rooting for you."
  },
  {
    title: "All I Ask of You",
    artist: "Raphael Saadiq",
    audioFile: "Raphael Saadiq - Ask Of You (Official HD Video).mp3",
    note: "Sometimes the simplest things mean the most. A little time, genuine affection, laughter, and the opportunity to enjoy someone's company. Those are the kinds of moments worth appreciating."
  },
  {
    title: "Daze",
    artist: "Steve Lacy",
    audioFile: "Steve Lacy - Daze.mp3",
    note: "Lexy Poo, some people have a way of making you lose track of time without even trying. 😂 This one brings a little different energy to the collection, and I had to include it."
  },
  {
    title: "My Love Is Like...Whoa",
    artist: "Mýa",
    audioFile: "Mya - My Love Is Like...Wo (Clean Mix).mp3",
    note: "Okayyyyy, this one needed some personality! 😂 A little confidence, a little sweetness, and a reminder that you're somebody worth celebrating."
  },
  {
    title: "I Can Go Deep",
    artist: "Silk",
    audioFile: "Silk - I Can Go Deep.mp3",
    note: "Remember when we talked about having differnt cravings... yea "
  },
  {
    title: "Forever My Lady",
    artist: "Jodeci",
    audioFile: "Jodeci  - Forever My Lady.mp3",
    note: "A classic is a classic for a reason. There's something timeless about music that captures affection so beautifully. I couldn't leave this one out."
  },
  {
    title: "Lay Me Down",
    artist: "Steve Lacy",
    audioFile: "Steve Lacy - Lay Me Down (Official Audio).mp3",
    note: "Sometimes I imagine the simple things: a peaceful evening, good music playing, and no particular place we need to be. Just enjoying the moment."
  },
  {
    title: "Dance Tonight",
    artist: "Lucy Pearl",
    audioFile: "Lucy Pearl - Dance Tonight.mp3",
    note: "I hope this one puts a smile on your face and gets you moving a little! I can already imagine you enjoying this one. Don't forget to save me a dance. 😂"
  },
  {
    title: "Some",
    artist: "Steve Lacy",
    audioFile: "STEVE LACY - SOME.mp3",
    note: "Some songs just have that special something. Some people do too. And sometimes you don't need a complicated explanation for why somebody makes your day a little brighter."
  },
  {
    title: "Blow Your Mind",
    artist: "Jamiroquai",
    audioFile: "Blow Your Mind - Jamiroquai (Album Version).mp3",
    note: "A little funky, a little different, and definitely deserving of a spot. I wanted this playlist to have some personality, just like you. 😂"
  },
  {
    title: "Donchano",
    artist: "Steve Lacy",
    audioFile: "Donchano Lyrics- Steve Lacy.mp3",
    note: "Here's another one for the vibes. I hope whenever this comes on, you can just relax, enjoy yourself, and forget about everything else for a little while."
  },
  {
    title: "Remind Me",
    artist: "Patrice Rushen",
    audioFile: "Patrice Rushen - Remind Me (LP Version).mp3",
    note: "Let this song remind you that you're appreciated. Not just for what you do, but for who you are. Never underestimate how much the little things about you can mean to somebody."
  },
  {
    title: "So Fine",
    artist: "Mint Condition",
    audioFile: "So Fine - Mint Condition.mp3",
    note: "Now Lexy Poo, I hope you know I wasn't about to make a playlist without including something that makes you feel extra special. So here's a little reminder. 🤍"
  },
  {
    title: "If I Had You",
    artist: "Frankie",
    audioFile: "Frankie - If I Had You.mp3",
    note: "Sometimes I think about all the little moments that haven't happened yet. The conversations, the laughs, the adventures, and the memories waiting to be made. Here's to enjoying the journey."
  },
  {
    title: "I Will Be Your Friend",
    artist: "Sade",
    audioFile: "Sade - I Will Be Your Friend (Audio).mp3",
    note: "I hope you always have people around you who genuinely want to see you win. People who celebrate your happiness, encourage your dreams, and remind you that you don't have to figure everything out alone."
  },
  {
    title: "Stressed Out",
    artist: "Babyface",
    audioFile: "Babyface - Stressed Out.mp3",
    note: "Life can get overwhelming sometimes, my little cabbage patch doll. 🥲 So consider this your reminder to breathe, slow down, and give yourself a little grace. You deserve peaceful days too."
  },
  {
    title: "Soon as I Get Home",
    artist: "Babyface",
    audioFile: "Soon as I Get Home  - Babyface.mp3",
    note: "There's something comforting about having a place or a person that makes you feel at ease. I hope you never settle for anything less than genuine warmth and happiness."
  },
  {
    title: "Lady",
    artist: "D'Angelo",
    audioFile: "D'Angelo - Lady.mp3",
    note: "A little appreciation for the lady herself. 🥹 Sometimes beauty isn't just about what somebody looks like. It's their personality, their heart, their little quirks, and all the things that make them uniquely themselves."
  },
  {
    title: "Angel",
    artist: "Anita Baker",
    audioFile: "Anita Baker - Angel.mp3",
    note: "If I could put appreciation into a melody, this would be one of those songs. There's something beautiful about reminding someone that they're a blessing in their own little way."
  },
  {
    title: "When We Get By",
    artist: "D'Angelo",
    audioFile: "D'Angelo - When We Get By.mp3",
    note: "Life isn't always going to be sunshine and rainbows, but I hope you never forget how capable you are of making it through difficult days. Keep believing in yourself, Lexy Poo. I'm rooting for you."
  },
  {
    title: "Makeda",
    artist: "Les Nubians",
    audioFile: "Les Nubians - Makeda.mp3",
    note: "A little something different for your listening experience. I wanted to include music that feels beautiful, soulful, and unique. Enjoy this little change of scenery. 🤍"
  },
  {
    title: "Right of Spring",
    artist: "Ravyn Lenae",
    audioFile: "Ravyn Lenae - Right Of Spring [Official Audio].mp3",
    note: "A reminder that everything has its own season. There's beauty in growing, changing, learning, and becoming the person you're meant to be. Don't rush your journey, pretty girl."
  },
  {
    title: "Come See Me",
    artist: "112 & Mr. Cheeks",
    audioFile: "112 & Mr. Cheeks - Come See Me.mp3",
    note: "And we made it to the last song! 😂🤍 If there's one thing I hope this playlist reminds you of, it's that sometimes the best moments are the simple ones. I look forward to the memories we haven't made yet. Until then, enjoy your music, Lexy Poo. You deserve every bit of happiness coming your way."
  }
];

// ==========================================
// PLAYER ELEMENTS
// ==========================================

let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio();

const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const songNumber = document.getElementById("song-number");
const songNote = document.getElementById("song-note");
const noteContent = document.getElementById("note-content");
const noteButton = document.getElementById("note-button");
const songList = document.getElementById("song-list");
const playButton = document.getElementById("play-button");
const vinylRecord = document.getElementById("vinyl-record");
const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const durationDisplay = document.getElementById("duration");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const youtubeContainer = document.getElementById("youtube-player-container");

// Hide the old YouTube player.
if (youtubeContainer) {
  youtubeContainer.style.display = "none";
}

// ==========================================
// TIME FORMATTING
// ==========================================

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

// ==========================================
// RENDER THE ORIGINAL STYLED SONG COLLECTION
// ==========================================

function renderSongList() {
  if (!songList) return;

  songList.innerHTML = "";

  songs.forEach((song, index) => {
    const item = document.createElement("div");
    item.className = "song-item";

    if (index === currentSongIndex) {
      item.classList.add("active");
    }

    const number = document.createElement("span");
    number.className = "song-item-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const artwork = document.createElement("div");
    artwork.className = "song-item-art";
    artwork.textContent = "♡";

    const details = document.createElement("div");
    details.className = "song-item-details";

    const title = document.createElement("h3");
    title.textContent = song.title;

    const artist = document.createElement("p");
    artist.textContent = song.artist;

    details.appendChild(title);
    details.appendChild(artist);

    const playIcon = document.createElement("span");
    playIcon.className = "song-item-play";
    playIcon.textContent =
      index === currentSongIndex && isPlaying ? "Ⅱ" : "▶";

    item.appendChild(number);
    item.appendChild(artwork);
    item.appendChild(details);
    item.appendChild(playIcon);

    item.addEventListener("click", () => {
      loadSong(index);
      playSong();
    });

    songList.appendChild(item);
  });
}

// ==========================================
// UPDATE SONG INFORMATION
// ==========================================

function updateSongDisplay() {
  const song = songs[currentSongIndex];

  if (songTitle) songTitle.textContent = song.title;
  if (songArtist) songArtist.textContent = song.artist;

  if (songNumber) {
    songNumber.textContent =
      `SONG ${String(currentSongIndex + 1).padStart(2, "0")} OF 25`;
  }

  if (songNote) songNote.textContent = song.note;

  if (noteContent) {
    noteContent.style.display = "none";
    noteContent.classList.add("hidden");
  }

  if (noteButton) {
    noteButton.textContent = "Read my note 💌";
  }

  renderSongList();
}

// ==========================================
// LOAD A SONG
// ==========================================

function loadSong(index) {
  currentSongIndex = index;
  const song = songs[currentSongIndex];

  audio.pause();
  audio.currentTime = 0;
  isPlaying = false;

  audio.src = `audio/${encodeURIComponent(song.audioFile)}`;
  audio.load();

  updateSongDisplay();
  updatePlayButton();
  updateProgress();
}

// ==========================================
// PLAY AND PAUSE
// ==========================================

function playSong() {
  audio.play()
    .then(() => {
      isPlaying = true;
      updatePlayButton();
    })
    .catch((error) => {
      console.error("Audio playback error:", error);

      alert(
        `Couldn't play "${songs[currentSongIndex].title}". Please check that the MP3 file is in the audio folder.`
      );

      isPlaying = false;
      updatePlayButton();
    });
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  updatePlayButton();
}

function togglePlay() {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

function updatePlayButton() {
  if (playButton) {
    playButton.textContent = isPlaying ? "Ⅱ" : "▶";
    playButton.setAttribute(
      "aria-label",
      isPlaying ? "Pause" : "Play"
    );
  }

  if (vinylRecord) {
    vinylRecord.classList.toggle("spinning", isPlaying);
  }

  renderSongList();
}

// ==========================================
// NEXT AND PREVIOUS SONG
// ==========================================

function playNextSong() {
  if (currentSongIndex < songs.length - 1) {
    loadSong(currentSongIndex + 1);
    playSong();
  } else {
    pauseSong();
    audio.currentTime = 0;
    updateProgress();
  }
}

function playPreviousSong() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }

  if (currentSongIndex > 0) {
    loadSong(currentSongIndex - 1);
    playSong();
  }
}

// ==========================================
// PROGRESS BAR AND TIME
// ==========================================

function updateProgress() {
  if (!audio.duration || !Number.isFinite(audio.duration)) {
    if (progressBar) {
      progressBar.style.width = "0%";
    }

    if (currentTimeDisplay) {
      currentTimeDisplay.textContent = "0:00";
    }

    if (durationDisplay) {
      durationDisplay.textContent = "0:00";
    }

    return;
  }

  const percentage =
    (audio.currentTime / audio.duration) * 100;

  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
  }

  if (currentTimeDisplay) {
    currentTimeDisplay.textContent =
      formatTime(audio.currentTime);
  }

  if (durationDisplay) {
    durationDisplay.textContent =
      formatTime(audio.duration);
  }
}

// ==========================================
// PLAYER BUTTON EVENTS
// ==========================================

if (playButton) {
  playButton.addEventListener("click", togglePlay);
}

if (previousButton) {
  previousButton.addEventListener("click", playPreviousSong);
}

if (nextButton) {
  nextButton.addEventListener("click", playNextSong);
}

// ==========================================
// PERSONAL NOTE BUTTON
// ==========================================

if (noteButton && noteContent) {
  noteButton.addEventListener("click", () => {
    const isHidden =
      noteContent.classList.contains("hidden") ||
      getComputedStyle(noteContent).display === "none";

    if (isHidden) {
      noteContent.classList.remove("hidden");
      noteContent.style.display = "block";
      noteButton.textContent = "Hide my note 💌";
    } else {
      noteContent.classList.add("hidden");
      noteContent.style.display = "none";
      noteButton.textContent = "Read my note 💌";
    }
  });
}

// ==========================================
// AUDIO EVENTS
// ==========================================

audio.addEventListener("timeupdate", updateProgress);

audio.addEventListener("loadedmetadata", updateProgress);

audio.addEventListener("ended", () => {
  if (currentSongIndex < songs.length - 1) {
    playNextSong();
  } else {
    pauseSong();
    audio.currentTime = 0;
    updateProgress();
  }
});

audio.addEventListener("error", () => {
  console.error(
    "Unable to load audio:",
    songs[currentSongIndex].audioFile
  );
});

// ==========================================
// START THE PLAYLIST
// ==========================================

loadSong(0);
