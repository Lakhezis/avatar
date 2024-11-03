function myFunction() {
    var x = document.getElementById("menu_bar");
    if (x.className === "") {
        x.className += " responsive";
    } else {
        x.className = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
     if (window.matchMedia("(max-width: 480px)").matches) {
        const subtitulo = document.querySelector("h4");
        const playlist = document.querySelector("article");
        const irohimg = document.querySelector(".imagen1");
        const tortugaimg = document.querySelector(".imagen2");

        subtitulo.insertAdjacentElement("afterend", irohimg);
        playlist.appendChild(tortugaimg);

        irohimg.style.display = "block";
        irohimg.style.margin = "auto";
        irohimg.style.padding = "20px";
        tortugaimg.style.display = "block";
        tortugaimg.style.margin = "auto";
        tortugaimg.style.padding = "20px";
     }
});

