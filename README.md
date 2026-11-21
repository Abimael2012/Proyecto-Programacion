# NSQK · Blog de fans

Sitio web responsivo e interactivo sobre NSQK y su álbum *mosca*.
Proyecto del segundo parcial de Programación Web, 5-D ICI, FIME, Universidad de Colima.

**Página publicada:** https://abimael2012.github.io/Proyecto-Programacion/
**Taller para aprender a hacer cada parte:** https://abimael2012.github.io/taller-nsqk/

## Qué tiene

| Página | Archivo | Qué pide la actividad |
|---|---|---|
| Inicio | `index.html` + `js/canciones.js` | página principal |
| Biografía | `html/biografia.html` | subpágina |
| Discografía | `html/discografia.html` | subpágina |
| Tour | `html/tour.html` + `js/tour.js` | catálogo interactivo (filtro por mes) |
| Club de fans | `html/fans.html` + `js/fans.js` | formulario que muestra el resultado sin recargar |

Tecnologías: HTML semántico, Tailwind CSS por CDN, `css/estilos.css` y JavaScript en archivos externos.

## Cómo trabajamos

1. Acepta la invitación al repositorio que te llega por correo.
2. Descarga el proyecto:
   ```
   git clone https://github.com/Abimael2012/Proyecto-Programacion.git
   cd Proyecto-Programacion
   ```
3. Crea tu rama con el nombre de tu parte (por ejemplo `parte-tour`):
   ```
   git checkout -b parte-tour
   ```
4. Trabaja **solo en los archivos de tu parte**. Cuando tengas un avance:
   ```
   git add .
   git commit -m "Tour: ya filtra por mes"
   git push -u origin parte-tour
   ```
5. En GitHub dale **Compare & pull request** y luego **Create pull request**.
6. Se revisa tu PR y se te dejan comentarios. Corriges y vuelves a hacer el paso 4.
7. Cuando queda, se hace merge a `main` y aparece en la página publicada.

### Reglas
- Nunca trabajes directo en `main`.
- Mensajes de commit claros: qué hiciste.
- Antes de subir, abre tu página y revisa que se vea bien en compu y en celular, sin scroll de lado.
- Un solo `<h1>` por página, `alt` en todas las imágenes y rutas relativas (`../imagenes/...` desde `html/`).
