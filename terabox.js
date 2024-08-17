import {api, uri} from './js/apiList.js';

export function fetchTerabox() {
let teraLink = inputEl.value;
serverStats.style.display="none";

fetchLink.setAttribute("disabled", "");
fetchLink.classList.add("disabled", "is-loading");
loadingEl.style.display = "block";
errorMsg.style.display ="none";

fetch(api + uri(teraLink)).then((res) => {
  return res.json();
}).then((data) => {
if(!data.file) {
loadingEl.style.display = "none";
fetchLink.removeAttribute("disabled", "");
fetchLink.classList.remove("disabled", "is-loading");
} else {
fetchLink.removeAttribute("disabled", "");
fetchLink.classList.remove("disabled", "is-loading");
  downloadBtn.style.display ="block";
  loadingEl.style.display = "none";
  downloadLinkEl.setAttribute("href", data.file[0].url);
  linkTextEl.append(data.file[0].url);
  fileThumb.src = data.file[0].thumbnail;
  fileName.innerHTML = data.file[0].name;
  fileSize.innerHTML = data.file[0].size + ' MB';
  console.log(data.messages)
  
  footer.style.display ="block";
}
}).catch((e) => {
  console.log(e);
fetchLink.removeAttribute("disabled", "");
fetchLink.classList.remove("disabled", "is-loading");
})

}
