import {teraApi} from './apiList.js';

export function checkServer() {
fetch(teraApi).then(res => {return res.json()}).then((data) => {
  
  if(data.error) {
    serverCheckEl.style.display = "none";
    statOK.style.display = "block";
  }
  
  }).catch((e) => {
    serverCheckEl.style.display = "none";
    statFail.style.display = "block";
    console.log(e)
    if(e.message == "Failed to fetch") {
      failText.innerHTML = "check your connection"
    } else {
      failText.innerHTML = "server is down! try again after 10 minutes!"
    }
    
  })
}