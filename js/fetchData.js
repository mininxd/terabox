import './checkServer.js';
import {downloadList} from './list.js';
import {link_gen, nestedFolder, uri} from './api.js';

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
fetch(url).then(res => {
  return res.json();
}).then(response => {
  console.log(response)
  const data = response.nested;
  const dataLength = Object.keys(data[0]).length;
  
  
  for(let i = 0; i < dataLength; i ++) {
  let fs = data[0][i].fs_id;
  let filename = slicedName(data[0][i].path)
  let image = data[0][i].image;
  let size = data[0][i].size;
  const downItem = createItem(data[0][i], i);
  fileResult.append(downItem)
  }
  
  
  
function createItem(item, index) {
let filename = slicedName(item.path);
let filesize = Number(item.size / (1024 * 1024)).toFixed(2);
if(!filename) {
  return ""
} else {
let row = document.createElement("div");
row.classList.add("row");

let cell1 = document.createElement("div");
cell1.classList.add("cell");

let img = document.createElement("img");
img.src = item.image;
img.classList.add("thumb");
cell1.append(img);

let cell2 = document.createElement("div");
cell2.classList.add("cell");

let filenameSpan = document.createElement("span");
filenameSpan.classList.add("bold");
filenameSpan.textContent = filename;
cell2.append(filenameSpan);

let filesizeDiv = document.createElement("div");
filesizeDiv.classList.add("tag","mx-1");
filesizeDiv.textContent = filesize.toString() + "MB";
cell2.append(filesizeDiv);

let br = document.createElement("br");

let downBtn = document.createElement("div");
downBtn.classList.add("button", "is-dark", "is-small");
downBtn.textContent = "download";

let serverDownload = document.createElement("div");
serverDownload.classList.add("is-hidden");

let grid = document.createElement("div");
grid.classList.add("grid", "is-col-min-3");

let servers = ["server 1", "server 2", "server 3"];
servers.forEach(server => {
  let itemDiv = document.createElement("div");
  itemDiv.classList.add("items");

  let button = document.createElement("button");
  button.classList.add("button", "is-dark", "is-small");
  button.textContent = server;
  itemDiv.append(button);
  grid.append(itemDiv);
});



let js_token = jstoken.textContent.replace(/"/g,"");
let browserId = browserid.textContent.replace(/"/g,"");
let cookieEl = cookie.textContent.replace(/"/g,"");
let timestampEl = timestamp.textContent.replace(/"/g,"");
let shareidEl = shareid.textContent.replace(/"/g,"");
let ukEl = uk.textContent.replaceAll(/"/g,"");
downBtn.addEventListener('click', ()=> {
console.log(js_token)
  downBtn.classList.add("is-loading");

try {
fetch(link_gen).then(res => { return res.json();
  }).then(data => {
    console.log(data)
 downBtn.classList.add('is-hidden') 
 serverDownload.classList.remove('is-hidden')

  document.querySelectorAll('.items button').forEach(button => {
        button.addEventListener('click', () => {
      
        })
      })
  })
} catch(e) {
  console.log("error")
  }
})


serverDownload.append(grid);
row.append(cell1);
row.append(cell2);
row.append(br);
row.append(downBtn);
row.append(serverDownload);

return row;
 }
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
