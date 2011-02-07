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

OpenPipe=function(){this.pagelets=new Array();this.head=window.document.getElementsByTagName("head")[0];this.body=window.document.body||window.document.getElementsByTagName("body")[0]};OpenPipe.prototype.onPageletArrive=function(a){this.pagelets.push(a);this._0(a.css);this._1(a.id,a.html)}OpenPipe.prototype.close=function(){for(var a=0;a<this.pagelets.length;a++){this._2(this.pagelets[a].js)}}OpenPipe.prototype._0=function(a){var b=window.document.createElement("style");b.setAttribute("type","text/css");if(b.textContent){b.textContent=a}else{b.innerHTML=a}this.head.appendChild(b)}OpenPipe.prototype._1=function(a,b){var c=window.document.getElementById(a);c.innerHTML=b}OpenPipe.prototype._2=function(a){var b=window.document.createElement("script");if(b.textContent){b.textContent=a}else{b.innerHTML=a}this.body.appendChild(b)}