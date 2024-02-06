import {fetchTerabox} from '../terabox.js';

inputEl.addEventListener("focus", function() {
  footer.style.display ="none"
})
inputEl.addEventListener("blur", function() {
  footer.style.display ="block"
})
fetchLink.addEventListener("click", function() {
  fetchTerabox();

})
copyLinkEl.addEventListener("click", function() {
  navigator.clipboard.writeText(linkTextEl.textContent)
})

hideError.addEventListener("click", function() {
  errorMsg.style.display = "none"
})