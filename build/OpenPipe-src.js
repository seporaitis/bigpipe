/**
 *  Copyright 2011 Julius Seporaitis
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

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