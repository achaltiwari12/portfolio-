const text = ["Web Developer", "Cloud Enthusiast", "Java Programmer"];
let index = 0;
let charIndex = 0;

function type() {
    if (charIndex < text[index].length) {
        document.querySelector(".typing").textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    }
    else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        document.querySelector(".typing").textContent =
        text[index].substring(0, charIndex - 1);

        charIndex--;
        setTimeout(erase, 50);
    }
    else {
        index++;
        if (index >= text.length)
            index = 0;

        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, 1000);
});
