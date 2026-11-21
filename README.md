# NSQK · Blog de fans

Sitio web responsivo e interactivo sobre NSQK y su álbum *mosca*.
Proyecto del segundo parcial de Programación Web, 5-D ICI, FIME, Universidad de Colima.

Este repositorio empieza vacío a propósito: **cada integrante sube su parte** desde su propia rama, se revisa y, cuando está bien, se une a `main`.

📚 **Antes de programar, practica tu parte aquí:** https://abimael2012.github.io/taller-nsqk/

---

## Las partes

| Parte | Rama | Archivos | Encargado |
|---|---|---|---|
| Inicio | `parte-inicio` | `index.html`, `css/estilos.css`, `js/canciones.js` | por asignar |
| Biografía | `parte-biografia` | `html/biografia.html` | por asignar |
| Discografía | `parte-discografia` | `html/discografia.html` | por asignar |
| Tour (catálogo) | `parte-tour` | `html/tour.html`, `js/tour.js` | por asignar |
| Club de fans (formulario) | `parte-fans` | `html/fans.html`, `js/fans.js` | por asignar |

Así va quedando la carpeta:

```
Proyecto-Programacion/
    index.html
    css/estilos.css
    html/        biografia.html, discografia.html, tour.html, fans.html
    js/          canciones.js, tour.js, fans.js
    imagenes/    todas las imágenes
    multimedia/  videos
```

Cada quien sube también las imágenes o videos que use su página, dentro de `imagenes/` o `multimedia/`.

---

## Cómo subir tu parte, paso a paso

### 0. Una sola vez: preparar tu compu

1. Instala Git: https://git-scm.com/downloads (siguiente, siguiente, finalizar).
2. Abre una terminal (en VS Code: **Terminal → New Terminal**) y dile a Git quién eres:
   ```
   git config --global user.name "Tu Nombre"
   git config --global user.email "tu-correo@ucol.mx"
   ```
   Usa el mismo correo de tu cuenta de GitHub, así tus commits salen con tu nombre.
3. Acepta la invitación al repositorio que te llegó al correo.

### 1. Descargar el proyecto (una sola vez)

```
git clone https://github.com/Abimael2012/Proyecto-Programacion.git
cd Proyecto-Programacion
```

Esto crea la carpeta `Proyecto-Programacion` en tu compu, conectada con GitHub.

### 2. Crear tu rama (una sola vez)

```
git checkout -b parte-tour
```

Cambia `parte-tour` por la rama de tu parte (ver la tabla de arriba). Una **rama** es tu copia para trabajar: lo que hagas aquí no afecta a los demás hasta que se apruebe.

Para revisar en qué rama estás: `git branch` (la tuya sale con un `*`).

### 3. Trabajar y guardar avances (cuantas veces quieras)

Haz tus archivos y, cada vez que tengas un avance que funcione:

```
git add .
git commit -m "Tour: ya pinta las tarjetas con forEach"
```

- `git add .` prepara todos tus cambios.
- `git commit -m "..."` los guarda con un mensaje. El mensaje dice **qué hiciste**: nada de "cambios" o "asdf".

### 4. Subir tu rama a GitHub

La primera vez:

```
git push -u origin parte-tour
```

Las siguientes veces basta con:

```
git push
```

### 5. Pedir que revisen tu parte (Pull Request)

1. Entra al repositorio en GitHub. Arriba aparece un aviso amarillo con el botón verde **Compare & pull request**.
2. Escribe un título (por ejemplo "Parte del tour") y, en la descripción, qué hiciste.
3. Dale **Create pull request**.

### 6. Corregir lo que te pidan

En tu Pull Request te van a dejar comentarios. Corrige en tu compu y repite:

```
git add .
git commit -m "Tour: corregido el alt de las imágenes"
git push
```

El Pull Request se actualiza solo, no tienes que hacer otro.

### 7. Cuando se aprueba

Se hace **merge** a `main` y tu parte aparece en la página publicada:
https://abimael2012.github.io/Proyecto-Programacion/

---

## Si algo sale mal

| Mensaje o problema | Qué hacer |
|---|---|
| `fatal: not a git repository` | No estás dentro de la carpeta. Entra con `cd Proyecto-Programacion`. |
| `rejected ... (fetch first)` al hacer push | Alguien subió cambios antes. Corre `git pull` y vuelve a hacer `git push`. |
| Me equivoqué de rama | `git checkout parte-tour` para regresar a la tuya. |
| Quiero traer lo último de `main` a mi rama | `git pull origin main` (estando en tu rama). |
| Me pide usuario y contraseña | Se abre una ventana para iniciar sesión en GitHub; entra con tu cuenta. |

¿Prefieres botones en vez de comandos? **GitHub Desktop** (https://desktop.github.com) hace todo esto con clics: clonar, crear rama (*Current branch → New branch*), commit, *Push origin* y *Create Pull Request*.

---

## Reglas del equipo

- Nunca trabajes directo en `main`.
- Solo toca los archivos de tu parte.
- Antes de subir, abre tu página en el navegador y revisa que se vea bien en compu y en celular, sin scroll de lado.
- Un solo `<h1>` por página, `alt` en todas las imágenes, rutas relativas (desde `html/` se usa `../imagenes/...`).
- Tailwind por CDN en el `<head>`: `<script src="https://cdn.tailwindcss.com"></script>`.
