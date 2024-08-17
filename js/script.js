import {fetchTerabox} from '../terabox.js';
import {checkServer} from './serverCheck.js';

checkServer();

setTimeout(function() {
  serverStats.style.display="none";
}, 2000)


fetchLink.addEventListener("click", function() {
  fetchTerabox();

})
copyLinkEl.addEventListener("click", function() {
  navigator.clipboard.writeText(linkTextEl.textContent)
})

hideError.addEventListener("click", function() {
  errorMsg.style.display = "none"
})