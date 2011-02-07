OpenPipe = function () {
  this.pagelets = new Array();
  this.head = window.document.getElementsByTagName("head")[0];
  this.body = window.document.body || window.document.getElementsByTagName("body")[0];
};

/**
  @param Object data = {
    "id":     "pagelet_placeholder_id",
    "html":   "<p>Some cool HTML content</p>",
    "css":    "css content",
    "js":     "javascript content"
  }
*/
OpenPipe.prototype.onPageletArrive = function(data) {
  this.pagelets.push(data);
  this._loadCSS(data.css);
  this._showHTML(data.id, data.html);
}

OpenPipe.prototype.close = function() {
  for(var i = 0; i < this.pagelets.length; i++) {
    this._loadJS(this.pagelets[i].js);
  }
}

OpenPipe.prototype._loadCSS = function(CSS) {
  var ref = window.document.createElement("style");
  ref.setAttribute("type", "text/css");
  if(ref.textContent) {
    ref.textContent = CSS;
  } else {
    ref.innerHTML = CSS;
  }
  this.head.appendChild(ref);
}

OpenPipe.prototype._showHTML = function(id, HTML) {
  var placeholder = window.document.getElementById(id);
  placeholder.innerHTML = HTML;
}

OpenPipe.prototype._loadJS = function(JS) {
  var ref = window.document.createElement("script");
  if(ref.textContent) {
    ref.textContent = JS;
  } else {
    ref.innerHTML = JS;
  }
  this.body.appendChild(ref);
}