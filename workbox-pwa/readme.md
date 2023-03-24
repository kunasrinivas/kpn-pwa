# Workshop PWA

Goal: building a _very simple_ PWA, using plain HTML, JavaScript and Google Workbox.

For the workshop, we assume you have `NodeJS` installed. If not, visit https://nodejs.org/en/ and install Node 16.x or 18.x for your operating system. 

### 1. Create a new directory, for instance `workbox-pwa`.

### 2. Create 4 empty files in this directory
- `index.html`
- `manifest.json`
- `sw.js`
- `logo.png` - pick a `.png` logo yourself, or use just a simple image.

Optional: create or use a `favicon.ico` if you want to use one.

### 3. Place the following code in `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>VERY Simple PWA with Workbox</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000000">
</head>
<body>
<h1>Hello World!</h1>
<p>This is the simplest PWA you'll ever see.</p>
</body>
</html>

```

### 4. Place the following code in `manifest.json`

```json
{
  "name": "<your app name>",
  "short_name": "<short name for your app, one word>",
  "start_url": "index.html",
  "display": "fullscreen",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "orientation": "portrait",
  "icons":[
    
  ]
}
```

### 5. Update `index.html` to use the manifest file

```html
<head>
    ...
    <link rel="manifest" href="manifest.json">
    ...
</head>
```

### 6. Add script to use the service worker

In `index.html`, just before the closing `</body>` tag add the following script:

```javascript
<script>
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
    }
</script>
```

### 7. Create and add icons for your app

We're not creating the icons manually, that would take forever. We use an NPM package to do that for us: https://www.npmjs.com/package/pwa-asset-generator.

To generate the icons, we use the `logo.png` file (or whatever you named it). 

- Open a terminal window in the root of your application
- use the following code to generate the assets:

`npx pwa-asset-generator logo.png icons`

This:
- uses `npx` to run `pwa-asset-generator` from the online location, so you don't have to install it locally.
- uses `logo.png` as its source.
- creates a folder `icons` and places the icons there.
- generates `json` for you to place in your manifest file.
- generates `html` for you (pointing to the newly created icons) to add to the header of your `index.html`.

### 8. Add icons to your `manifest.json`

Copy and paste the icons information to your `manifest.json`. It should look something like this (of course the name of your logo files can be different):

```json
   ...
  "icons":[
    {
      "src": "icons/manifest-icon-192.maskable.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "icons/manifest-icon-192.maskable.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "icons/manifest-icon-512.maskable.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "icons/manifest-icon-512.maskable.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ]
  ...
```

### 9. Optional: copy/paste the generated html `<link>` information to the header of your `index.html`

```html
<head>
    ...
    <link rel="apple-touch-icon" href="icons/apple-icon-180.png">

    <meta name="apple-mobile-web-app-capable" content="yes">

    <link rel="apple-touch-startup-image" href="icons/apple-splash-2048-2732.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="icons/apple-splash-2732-2048.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
    ...blablabla
</head>
```

### 10. Add the following code to `sw.js`.

```javascript
importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
);
```

This:
- imports `Google Workbox` and registers a route. 
- It also adds a caching strategy. 
- See https://developer.chrome.com/docs/workbox/ 
or YouTube (https://www.youtube.com/results?search_query=google+workbox) for more information. 

### 11. Serve the PWA

In a command window, run the following code:

`npx serve`

This installs a temporary small webserver (https://www.npmjs.com/package/serve) and uses the current directory as the web root. 
It serves the `index.html` file from there.

### 12. Check the DevTools
See if the manifest file and service worker are correctly registered in the browser.

- Open the Chrome DevTools by pressing F12, or rightclicking and choosing `Inspect`.
- Choose the `Application` tab.
- Pick `Manifest` and subsequently `Service Workers` to check their status.

Your screen should look something like this:

![PWA Manifest](img/pwa-manifest.png?raw=true "The manifest file in Chrome DevTools")

![PWA ServiceWorker](img/pwa-service-worker.png?raw=true "The service worker in Chrome DevTools")

### 13. Optional - check Lighthouse

In the Chrome DevTools use the `Lighthouse` tab to check the Lighthouse score 
(spoiler: it should be very high, since we hardly do anything ;-).

![PWA Lighthouse 1](img/pwa-lighthouse-1.png?raw=true "Starting Lighthouse in Chrome DevTools")

![PWA Lighthouse 2](img/pwa-lighthouse-2.png?raw=true "The PWA score for this app: optimal")


### 14. Next Steps

Use Google, Stackoverflow, Medium, dev.to, web.dev and so on, to learn more about PWAs. Here are some starting points:
- https://www.youtube.com/watch?v=sFsRylCQblw
- https://fireship.io/lessons/pwa-top-features/
- https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/
- https://web.dev/what-are-pwas/
- https://dev.to/terasol_app/top-pwa-development-tools-and-technologies-for-your-business-3kj3
- https://www.netlify.com/

Good luck!

## Questions?

Have a question, or want to organize a full day PWA workshop in your company? Mail me at info@kassenaar.com.

Cheers,
Peter.

