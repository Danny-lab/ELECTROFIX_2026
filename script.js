// Año automático
document.getElementById("year").textContent = new Date().getFullYear();

// Contadores animados
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const update = () => {
        const target = +counter.dataset.target;
        const value = +counter.innerText;
        const increment = target / 80;

        if (value < target) {
            counter.innerText = Math.ceil(value + increment);
            setTimeout(update, 20);
        } else {
            counter.innerText = target;
        }
    };
    update();
});

// WhatsApp Profesional (SIEMPRE FUNCIONA)
function openWhatsApp(e, service = "") {
    if (e) e.preventDefault();

    const phone = "573023947801";
    let message = "Hola Electrofix, necesito asesoria para la reparacion de un electrodomestico";

    if (service) {
        message = `Hola Electrofix, necesito asesoria para reparar una ${service}`;
    }

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
