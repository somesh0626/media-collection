const mediaData = {
  english: {
    videos: [
      { title: "English Video 1", url: "https://youtube.com/..." },
      { title: "English Video 2", url: "https://youtube.com/..." },
    ],
    audios: [
      { title: "English Audio 1", url: "https://example.com/audio1.mp3" },
      { title: "English Audio 2", url: "https://example.com/audio2.mp3" },
    ],
  },
  hindi: {
    videos: [
      { title: "Hindi Video 1", url: "https://youtube.com/..." },
    ],
    audios: [
      { title: "Hindi Audio 1", url: "https://example.com/audio.mp3" },
    ],
  },
  tamil: {
    videos: [
      { title: "Tamil Video 1", url: "https://youtube.com/..." },
    ],
    audios: [],
  },
  urdu: {
    videos: [
      { title: "Urdu Video 1", url: "https://youtube.com/..." },
    ],
    audios: [],
  },
  kashmiri: {
    videos: [
      { title: "Kashmiri Video 1", url: "https://youtube.com/..." },
    ],
    audios: [],
  },
};

function loadMedia() {
  for (const [language, media] of Object.entries(mediaData)) {
    const section = document.getElementById(language);

    // Videos
    const videosList = section.querySelector(".videos-list");
    media.videos.forEach(({ title, url }) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.textContent = title;
      li.appendChild(a);
      videosList.appendChild(li);
    });

    // Audios
    const audiosList = section.querySelector(".audios-list");
    media.audios.forEach(({ title, url }) => {
      const li = document.createElement("li");
      const label = document.createElement("span");
      label.textContent = title + " ";
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.src = url;
      li.appendChild(label);
      li.appendChild(audio);
      audiosList.appendChild(li);
    });
  }
}

window.onload = loadMedia;
