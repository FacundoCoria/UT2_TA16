const btn = document.getElementById("boton");
const p = document.getElementById("parrafo");

btn.addEventListener("click", () => {
    if (p.style.display === "none" || p.style.display === "") {
        p.style.display = "block"; 
        btn.innerHTML = "Ocultar"
    } else {
        p.style.display = "none"; 
        btn.innerHTML = "Mostrar"
    }
});
