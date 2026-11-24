
const campoNombre = document.querySelector("#campo-nombre");
const campoCiudad = document.querySelector("#campo-ciudad");
const campoFavorita = document.querySelector("#campo-favorita");
const botonRegistrar = document.querySelector("#boton-registrar");
const credencial = document.querySelector("#credencial");



botonRegistrar.addEventListener("click", () => {

    // Lo que escribió la persona
    const nombre = campoNombre.value;
    const ciudad = campoCiudad.value;
    const favorita = campoFavorita.value;

 
    if (nombre === "" || ciudad === "") {
        credencial.innerHTML = `<p class="text-red-400">Te falta el nombre o la ciudad.</p>`;
        return;
    }


    credencial.innerHTML = `
        <article class="bg-neutral-900 rounded-xl p-5 border-l-4 border-[#1f1fff]">
            <p class="text-[#d9f20b] font-bold uppercase text-sm">Credencial de fan · NSQK</p>
            <h2 class="text-3xl text-white">${nombre}</h2>
            <p>${ciudad}</p>
            <p class="mt-3 text-sm text-neutral-400">Canción favorita</p>
            <p class="text-white">${favorita}</p>
        </article>
    `;
});
