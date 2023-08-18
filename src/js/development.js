// DEVELOPMENT
function development() {
    // loads source stylesheet
    const stylesheet = document.createElement("link");
    stylesheet.setAttribute("rel", "stylesheet");
    stylesheet.setAttribute("href", "./src/css/style.css");
    document.head.appendChild(stylesheet);
  }
  
development();