# Svelte + Vite + Electron

Clean example that combines [svelte vite](https://vitejs.dev/) and [electron](https://www.electronjs.org/).

Start with: `npm start`

> Vite builds the renderer and watches for changes. Meanwhile, electron starts up and loads the index.html file built.

Build with `npm run build`

> Vite statically builds the renderer into `src/renderer/dist`, then electron-builder packages up the build into an executable.

Enjoy!

## Structure

* `src/index.js` - Electron entrypoint for app
* `src/renderer/index.html` - Renderer entrypoint for electron
