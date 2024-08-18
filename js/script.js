import {getTera} from './fetchData.js';

let url = "https://www.1024tera.com/wap/share/filelist?surl=AjsgcC3UA194wzwBMROC7A"



fetchBtn.addEventListener('click', function(e) {
  e.preventDefault();
  hiddenItem.classList.remove('is-hidden');
  this.classList.add('is-loading');
  this.disabled = true;
  getTera(inputURL.value)
})


/*
fetch('./test.json').then(res => {
  return res.json()
}).then(data => {
  console.log(data)

}).catch(e => {console.log(e)})
*/