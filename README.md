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

## Reproduction Steps

To redo this repo:

1. `npm init vite@latest`, select svelte.
2. Copy `public`, `src`, `index.html` to `src/renderer`. You can remote the fluff like `.vscode`.
3. Add more dependencies `npm install --save-dev electron electron-builder concurrently cross-env`
4. Edit `package.json`:
    * delete line with `"type": "module",`
    * add `"main": "src/index.js",`
    * add scripts:
      ```json
      "scripts": {
        "start": "cross-env NODE_ENV=development concurrently \"npm run web:watch\" \"npm run electron:start\"",
        "web:watch": "vite",
        "electron:start": "electron src",
        "build": "vite build && electron-builder"
      }
      ```
    * add build options for electron-builder:
      ```json
      "build": {
        "files": [
          "src/**/*"
        ]
      }
      ```
4. Create `src/index.js`. Follow getting started guide in [Electron](https://www.electronjs.org/docs/latest/tutorial/quick-start) and when creating the window, use something like this:
    ```js
    if (process.env.NODE_ENV !== 'development') {
      // Load production build
      win.loadFile(`${__dirname}/renderer/dist/index.html`)
    } else {
      // Load vite dev server page 
      console.log('Development mode')
      win.loadURL('http://localhost:3000/')
    }
    ```