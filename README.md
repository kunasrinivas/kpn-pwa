# kpn-pwa
Demo code on the KPN PWA-workshop

## Usage
- See the steps in the presentation. The code is built in the following order:
1. Create `index.html` and add first content.
2. Create  `css/style.css` and add first content, just to make it look nice.
   1. Set some fonts.
   2. Do browser resets.
   3. Layout the navbar and main menu.
3. Add styling for the cards. Expand `style.css` with the appropriate styles. Again, no functionality, just layout.
4. Add JavaScript data (in real life this would come from a database).
5. Add functionality to add the data to the DOM.
6. Add images. We used a directory `images` with photos of coffees.
7. Create a PWA by adding a `manifest.json` file.
8. Update  `index.html` with a link to the manifest file.
9. Add a Service Worker (sw) and let it add static items to the cache upon installation.
10. Expand the SW to get the items from the cache when it is loaded. This way our PWA can work offline!
11. Register the Service Worker in `app.js`

## Credits:
- https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/

Questions? email me at info@kassenaar.com
Cheers - Peter.
