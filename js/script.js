import {getTera} from './fetchData.js';
import {file_gen, link_gen, uri} from './api.js';
let link = document.getElementById('inputUrl');

fetchBtn.addEventListener('click', function(e) {
  e.preventDefault();
  hiddenItem.classList.remove('is-hidden');
  fetchBtn.classList.add('is-loading');
  fetchBtn.disabled = true;
  try {
//  getTera();
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
