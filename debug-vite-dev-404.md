# Debug Session: vite-dev-404

## Estado
- [OPEN] Sesion iniciada para investigar por que el servidor de desarrollo responde con `404`.

## Sintoma
- `npm run dev` parece levantar correctamente.
- Al abrir la URL local, la pagina devuelve `404`.

## Hipotesis Iniciales
1. El servidor de Vite se esta iniciando con un directorio raiz incorrecto y por eso no encuentra `index.html`.
2. El comando usado para iniciar `dev` esta pasando argumentos mal formados y Vite los interpreta como ruta en lugar de flags.
3. Hay un problema en la configuracion de `vite.config.js` que cambia el comportamiento esperado del servidor de desarrollo.
4. Existe un conflicto de puertos o una URL antigua y se esta abriendo otra instancia distinta a la correcta.
5. El archivo `index.html` no esta siendo resuelto por Vite en tiempo de ejecucion aunque el build de produccion si funcione.

## Evidencia
- Pendiente de recoleccion.

## Siguiente Paso
- Reproducir el arranque del servidor y comparar el comando efectivo, la URL servida y la resolucion de `index.html`.
