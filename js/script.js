import {fetchTerabox} from '../terabox.js';
import {checkServer} from './serverCheck.js';

checkServer();

serverStats.addEventListener("click", function() {
serverStats.style.display="none";
})
fetchLink.addEventListener("click", function() {
  fetchTerabox();
serverStats.style.display="none";

})
copyLinkEl.addEventListener("click", function() {
  navigator.clipboard.writeText(linkTextEl.textContent)
})

hideError.addEventListener("click", function() {
  errorMsg.style.display = "none"
})
