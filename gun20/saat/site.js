function saatiGoster() {
const zaman = new Date();
const divSaat = document.getElementById("saat");
divSaat.textContent = zaman.toLocaleTimeString("en")
}

saatiGoster();