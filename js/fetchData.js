import './checkServer.js';
import {downloadList} from './list.js';
import {nestedFolder} from './api.js';

function sliced(str) {
  return str.substring(str.lastIndexOf("/") + 1);
}
 function slicedName(str) {
   if(!str) {
    return
  } else {
    return sliced(str);
  }
 }

export function getTera(url) {
  fileResult.innerHTML = "";
  
fetch('https://api.mininxd.my.id/terabox/test').then(res => {
  return res.json();
}).then(response => {
  const data = response.nested;
  const dataLength = Object.keys(data[0]).length;
  
  
  for(let i = 0; i < dataLength; i ++) {
  let fs = data[0][i].fs_id;
  let filename = slicedName(data[0][i].path)
  let image = data[0][i].image;
  let size = data[0][i].size;
  let link = data[0][i].link
  console.log(fs,filename, image, size, link)
  }




footer.classList.remove('is-hidden');
hiddenItem.classList.add('is-hidden');
fetchBtn.classList.remove('is-loading');
fetchBtn.disabled = false;
/* saweria.addEventListener('click', function() {
 window.open('https://saweria.co/mininxd', '_blank'); 
})
 whatsapp.addEventListener('click', function() {
 window.open('https://whatsapp.com/channel/0029VaieVG35K3zatnIond0s', '_blank'); 
})
*/ 

}).catch(e => {
  console.log(e)
  fetchBtn.classList.remove('is-loading');
  fetchBtn.disabled = false;
  hiddenItem.classList.add('is-hidden');
  footer.classList.add('is-hidden');
})
}
