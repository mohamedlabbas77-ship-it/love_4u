const envelope = document.getElementById("openEnvelope");
const envelopeWrap = document.getElementById("envelopeWrap");
const letter = document.getElementById("letter");
const final = document.getElementById("final");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noWrap = document.getElementById("noWrap");
const hint = document.getElementById("hint");
const finalTitle = document.getElementById("finalTitle");
const finalText = document.getElementById("finalText");
const againBtn = document.getElementById("againBtn");

let noAttempts = 0;

envelope.addEventListener("click", () => {
  envelopeWrap.classList.add("hidden");
  letter.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function moveNoButton() {
  noAttempts++;

  // Keep the button inside a safe area on every screen size.
  const maxX = Math.max(10, noWrap.parentElement.clientWidth - noWrap.offsetWidth - 10);
  const maxY = 90;

  const x = Math.random() * maxX - maxX / 2;
  const y = (Math.random() * maxY) - 35;

  noBtn.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 10 - 5}deg)`;

  const messages = [
    "Are you sure? 👀",
    "Nope! Try again 😂",
    "You can't escape that easily 😭",
    "Come on... choose YES ❤️",
    "The NO button is shy 😭",
    "I don't think you mean NO 😂",
    "Okay okay... one more try 👀"
  ];

  hint.textContent = messages[Math.min(noAttempts - 1, messages.length - 1)];
}

// Desktop + mobile: clicking/touching NO makes it run away.
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});
noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
}, { passive: false });

yesBtn.addEventListener("click", () => {
  letter.classList.add("hidden");
  final.classList.remove("hidden");

  if (noAttempts > 0) {
    finalTitle.textContent = "AHHH! 😭❤️";
    finalText.textContent = "I thought you didn't love me for a second! You scared me 😂❤️";
  } else {
    finalTitle.textContent = "I knew it! 🥹❤️";
    finalText.textContent = "You just made me really happy, Maryam.";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
});

againBtn.addEventListener("click", () => {
  final.classList.add("hidden");
  letter.classList.remove("hidden");
  noAttempts = 0;
  noBtn.style.transform = "";
  hint.textContent = "Choose carefully... 👀";
});
