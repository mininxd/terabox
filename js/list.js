export function downloadList(item, index) {
let row = document.createElement("div");
row.classList.add("row");

let cell1 = document.createElement("div");
cell1.classList.add("cell");

let img = document.createElement("img");
img.src = "https://astro.build/assets/press/astro-icon-dark.svg";
img.classList.add("thumb");
cell1.appendChild(img);

let cell2 = document.createElement("div");
cell2.classList.add("cell");

let filenameSpan = document.createElement("span");
filenameSpan.classList.add("bold");
filenameSpan.textContent = "Lorem Ipsum dolor sit amet.mp4";
cell2.appendChild(filenameSpan);

let filesizeDiv = document.createElement("div");
filesizeDiv.classList.add("tag");
filesizeDiv.textContent = "100MB";
cell2.appendChild(filesizeDiv);

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

  itemDiv.appendChild(button);
  grid.appendChild(itemDiv);
});

serverDownload.appendChild(grid);
row.appendChild(cell1);
row.appendChild(cell2);
row.appendChild(br);
row.appendChild(downBtn);
row.appendChild(serverDownload);

elem.appendChild(row)
}


/*
<div class="row">

  <div class="cell">
    <img  src="https://astro.build/assets/press/astro-icon-dark.svg" id="thumbnails" class="thumb">
  </div>
  <div class="cell">
<span class="bold" id="filename">Lorem Ipsum dolor sit amet.mp4</span>
<div id="filesize" class="tag">100MB</div>
  </div>
  <br>
<div id="downBtn" class="button is-dark is-small">
  download
</div>
<div id="serverDownload" class="is-hidden">
<div class="grid is-col-min-3">
  <div class="items">
<button class="button is-dark is-small">server 1</button>
  </div>
  <div class="items">
<button class="button is-dark is-small">server 2</button>
  </div>
  <div class="items">
<button class="button is-dark is-small">server3</button>
  </div>
</div>
</div>
</div>

*/