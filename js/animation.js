const text = "Cyrus M. Cavero Portfolio";
const container = document.getElementById("waveText");

text.split("").forEach((char, index) => {
  const span = document.createElement("span");
  // Preserve spaces
  span.textContent = char === " " ? "\u00A0" : char;
  span.style.animationDelay = `${index * 0.1}s`; // stagger wave for each letter
  span.classList.add("pixel-wave");
  container.appendChild(span);
});