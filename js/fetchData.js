import {obj} from './test.js';
import './checkServer.js';

export function getTera(url) {
  fileResult.innerHTML = "";
fetch('https://api.dapuntaratya.com/terabox-api/fetch?url=' + url).then(res => {
  return res.json();
}).then(data => {

for(var i = 0; i < data.file.length; i++) {
//  console.log(obj.file[i])
  let files = data.file[i];
  
  
  let row = document.createElement('div');
  row.classList.add('row');
  
  let thumb = document.createElement('img');
  let thumbCell = document.createElement('div');
  thumbCell.classList.add('cell')
  
  let fileName = document.createElement('span');
  let fileNameCell = document.createElement('div');
  fileName.classList.add('fileName','title','is-6')
  fileNameCell.classList.add('cell');
  
  let fileSize = document.createElement('span');
  let fileSizeCell = document.createElement('div');
  fileSize.classList.add('fileSize', 'subtitle','is-6')
  fileSizeCell.classList.add('cell');
  
  
  let copyBtn = document.createElement('span');
  let copyBtnCell = document.createElement('div');
  copyBtn.classList.add('material-symbols-outlined');
  copyBtnCell.classList.add('cell','last');
  
  let downBtn = document.createElement('span');
  let downBtnCell = document.createElement('div');
  downBtn.classList.add('material-symbols-outlined');
  downBtn.textContent = 'download';
  downBtnCell.classList.add('cell','last');




thumb.src= files.thumbnail;
thumbCell.append(thumb);
fileName.append(files.name);
fileSize.innerHTML = `<br> ${files.size} MB`;
fileName.append(fileSize)
fileNameCell.append(fileName);

copyBtn.textContent = 'content_copy';
copyBtn.addEventListener('click', function() {
  navigator.clipboard.writeText(files.url)
})
copyBtnCell.append(copyBtn);

downBtn.textContent = 'download';
downBtnCell.addEventListener('click', function() {
  window.open(files.url, '_blank')
})
downBtnCell.append(downBtn);

row.append(thumbCell);
row.append(fileNameCell);
row.append(copyBtnCell);
row.append(downBtnCell);

fileResult.append(row);

}


footer.classList.remove('is-hidden');
hiddenItem.classList.add('is-hidden');
fetchBtn.classList.remove('is-loading');
fetchBtn.disabled = false;
saweria.addEventListener('click', function() {
 window.open('https://saweria.co/mininxd', '_blank'); 
})
whatsapp.addEventListener('click', function() {
 window.open('https://whatsapp.com/channel/0029VaieVG35K3zatnIond0s', '_blank'); 
})




if(data == undefined) {
  fetchBtn.classList.remove('is-loading');
  fetchBtn.disabled = false;
  hiddenItem.classList.add('is-hidden');
  footer.classList.add('is-hidden');
}
}).then(e => {
  fetchBtn.classList.remove('is-loading');
  fetchBtn.disabled = false;
  hiddenItem.classList.add('is-hidden');
  footer.classList.add('is-hidden');
})
}
