self.addEventListener('fetch', function(event) {
  var url = event.request.url;
  var def = url.substr(url.length - 4);
  // TODO: only respond to requests with a
  // url ending in ".jpg"

  //ES6 alternative: if (event.request.url.endsWith('.jpg')) {}
  if(def === '.jpg') {
    event.respondWith(
      fetch('/imgs/dr-evil.gif')
    );
  }
});
