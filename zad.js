// Alert przy załadowaniu strony
alert("Witaj na mojej stronie!");

// Funkcja zmieniająca kolor tła strony po kliknięciu przycisku
function zmienKolorTla() {
    document.body.style.backgroundColor = 'lightblue';
}

// Funkcja zmieniająca kolor nagłówków
function zmienKolorNaglowka() {
    const naglowki = document.querySelectorAll('h1, h2');

    naglowki.forEach(function(naglowek) {
        naglowek.style.color = 'black';
    });
}

// Funkcja zmieniająca tło sekcji
function zmienKolorSekcji() {
    const sekcje = document.querySelectorAll('section');

    sekcje.forEach(function(sekcja) {
        sekcja.style.backgroundColor = 'aliceblue';
    });
}
