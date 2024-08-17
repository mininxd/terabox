import {api} from './apiList.js';

export function checkServer() {
fetch(api).then(res => {return res.json()}).then((data) => {
    serverCheckEl.style.display = "none";
    serverStats.style.display = "block";
    serverStats.innerHTML = "Server is up!"
  
  }).catch((e) => {
    serverCheckEl.style.display = "none";
    serverStats.style.display = "block";
    serverStats.innerHTML = "server is down";
    serverStats.classList.remove('is-success')
    serverStats.classList.add('is-danger')
  })
}
