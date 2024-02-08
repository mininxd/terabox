import {teraApi} from './js/apiList.js';

export function fetchTerabox() {
let teraLink = inputEl.value;

fetchLink.setAttribute("disabled", "");
fetchLink.classList.add("disabled", "is-loading");
loadingEl.style.display = "block";
errorMsg.style.display ="none";

fetch(teraApi + teraLink).then((res) => {
  return res.json();
}).then((data) => {
  fetchLink.removeAttribute("disabled", "");
fetchLink.classList.remove("disabled", "is-loading");
  downloadBtn.style.display ="block";
  loadingEl.style.display = "none";
  
  downloadLinkEl.setAttribute("href", data.linkdl[0].link);
  linkTextEl.append(data.linkdl[0].link);
  
  
  
  
  if(data.error) {
    downloadBtn.style.display ="none";
    errorMsg.style.display ="block";
    errorMsg.classList.add("is-warning")
    errorText.innerHTML = "Error: Link masih kosong";
    loadingEl.style.display = "none";
  }
  
  if(data.linkdl == "") {
    downloadBtn.style.display ="none";
    errorMsg.style.display ="block";
  errorMsg.classList.add("is-warning")
  errorText.innerHTML = "Error: Masukan link dengan benar";
  loadingEl.style.display = "none";
  }
  
  
}).catch((e) => {

fetchLink.removeAttribute("disabled", "");
fetchLink.classList.remove("disabled", "is-loading");
// console.log(e.message);

if (e.message.includes("reading '0'")) {
  errorMsg.style.display ="block";
    errorMsg.classList.add("is-warning")
    errorText.innerHTML = "Error: Link masih kosong";
    loadingEl.style.display = "none";
} 

else if (e.message.includes("reading 'link'")) {
  errorMsg.style.display ="block";
  errorMsg.classList.add("is-warning")
  errorText.innerHTML = "Error: Masukan link dengan benar";
  loadingEl.style.display = "none";
  
} else {
    errorMsg.style.display ="block";
  errorMsg.classList.add("is-danger")
    errorText.innerHTML = "Error: Failed to Fetch";
    loadingEl.style.display = "none";
}
})


}