function generateSlides() {
  const input = document.getElementById("lyricsInput").value;
  const slides = input.split(/\n\s*\n/); // SPLIT BY BLANK LINE
  const container = document.getElementById("cardsContainer");

  container.innerHTML = "";

  slides.forEach(slideText => {
    if (slideText.trim() === "") return;

    const card = document.createElement("div");
    card.className = "lyric-card";
    card.textContent = slideText.trim();

    container.appendChild(card);
  });
}