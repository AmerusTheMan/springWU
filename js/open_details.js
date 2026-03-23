/*
All code in here will run after all html is parsed but before the page i loaded.
This is to avoid flickering when opening alldetails tags.
If this code is ran after the html is loaded, you will see all details tags initially open, 
and then quikly open.
*/





// Toggle open all details elements, onload
// Regardless of their initial status
if (visualViewport.width > 800) {
  document.body.querySelectorAll('details')
    .forEach((e) => {(e.hasAttribute('open')) ?
      e.removeAttribute('open') : e.setAttribute('open',true);
      //console.log(e.hasAttribute('open'))
    })
  console.log(visualViewport.width)
}