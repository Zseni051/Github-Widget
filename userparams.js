var doc = document;
var styleSheet = doc.createElement("style");
var docURL = window.location.href;
var css_link = ""
var params = [];

// filter out the website origin "example.github.io"
docURL = docURL.replace(window.location.origin, '');

// if /#/ found then we have URL parameters
if (docURL.indexOf('/#/?') !== -1) { 
  docURL = docURL.split('#/?')[1];
  if (docURL != '') {

    // if "&css="" exist remove it from docUrl and add it to css_link
    if(docURL.indexOf('css=') !== -1) {
      css_link = `css=${docURL.split('&css=')[1]}`;
      docURL = docURL.split('&css=')[0];
    }

    // split the URL final string to get an object with all params 
    params = docURL.split('&');

    // add css_link to params
    if(css_link != '') {
      params.push(css_link);
    }

    // loop through the params, give them a variable and console logs them
    for (var i = 0; i < params.length; i++) {
      var param = params[i].split('=');
      var param_name = param[0];
      var param_value = param[1];
      if (param_name == 'username') {
        var username = param_value;
        console.log(param_name + ': ' + param_value);
      }
      if (param_name == 'toprepos') {
        var toprepos = param_value;
        console.log(param_name + ': ' + param_value);
      }
      if (param_name == 'style') {
        var style = param_value;
        console.log(param_name + ': ' + param_value);
      }
      if (param_name == 'css') {
        var css = param_value;
        console.log(param_name + ': ' + param_value);
      }
    }

    if(css){
      doc.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", `<link rel="stylesheet" href=${css}/>`);
    }
    if(style){
      styleSheet.type = "text/css"
      styleSheet.innerText = style
      doc.head.appendChild(styleSheet)
    }
    if(username){
      if(!toprepos){
        toprepos = 3
      }
      doc.getElementById("add2me").innerHTML = `<div class="github-widget" data-username="${username}" data-toprepos="${toprepos}"></div>`
    }
  }
} else {
  console.log('No URL parameters found');
    doc.getElementById("add2me").innerHTML = `<a>No URL parameters found</a>`;
}
