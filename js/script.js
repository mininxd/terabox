import {getTera} from './fetchData.js';
import {file_gen, file_data, link_gen, uri} from './api.js';
let link = document.getElementById('inputUrl');

fetchBtn.addEventListener('click', function(e) {
  e.preventDefault();
  hiddenItem.classList.remove('is-hidden');
  fetchBtn.classList.add('is-loading');
  fetchBtn.disabled = true;
  try {
//  getTera();


fetch(file_data + uri(link.value)).then(res=> {
  return res.json()
}).then(data => {
  jstoken.innerHTML = data.js_token;
  browserid.innerHTML = data.browser_id;
  cookie.innerHTML = data.cookie;
  timestamp.innerHTML = data.timestamp;
  shareid.innerHTML = data.shareid;
  uk.innerHTML = data.uk;
})

 getTera(file_gen + uri(link.value));
  } catch(e) {
  console.log("error")
  }
})


/*
fetch('./test.json').then(res => {
  return res.json()
}).then(data => {
  console.log(data)

}).catch(e => {console.log(e)})
*/

