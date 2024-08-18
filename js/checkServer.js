function hide(element) {
  setTimeout( function() {
   element.style.display = 'none';
  }, 2500);
}

fetch('https://api.dapuntaratya.com/terabox-api/fetch?url=').then(res => {
  return res.json() 
  }).then(data => {
    progressCheck.style.display = 'none';
    statusTag.classList.add('is-success');
    statusTag.innerHTML = "Server is up!"
    hide(checking)
  }).catch(e => {
    statusTag.classList.add('is-danger');
    progressCheck.style.display = 'none';
    statusTag.innerHTML = "Server is down! (or) check your connection!"
    hide(checking)
  })