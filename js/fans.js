//Elementos del formulario
const campoNombre = document.querySelector("#campo-nombre");
const campoCiudad = document.querySelector("#campo-ciudad");
const campoFavorita = document.querySelector("#campo-favorita");
const botonRegistrar = document.querySelector("#boton-registrar");
const credencial = document.querySelector("#credencial");


// Clic en "Sacar credencial"
botonRegistrar.addEventListener("click", () => {

    // 1. Guarda lo que escribió la persona (trim quita espacios sobrantes)
    const nombre = campoNombre.value.trim();
    const ciudad = campoCiudad.value.trim();
    const favorita = campoFavorita.value.trim();

    // 2. Si falta el nombre o la ciudad, muestra un aviso y corta con return
    if (nombre === "" || ciudad === "") {
        credencial.innerHTML = `<p class="text-red-400">Te falta el nombre o la ciudad.</p>`;
        return;
    }

    // 3. Si todo está bien, arma la credencial con innerHTML
    credencial.innerHTML = `
        <article class="bg-neutral-900 rounded-xl p-5 border-l-4 border-[#1f1fff]">
            <p class="text-[#d9f20b] font-bold uppercase text-sm">Credencial de fan · NSQK</p>
            <h2 class="text-3xl text-white">${nombre}</h2>
            <p>${ciudad}</p>
            <p class="mt-3 text-sm text-neutral-400">Canción favorita</p>
            <p class="text-white">${favorita || "Sin definir"}</p>
        </article>
    `;
});
