export const api = 'https://api.dapuntaratya.com/terabox-api/fetch?url=';
export function uri(url) {
  return encodeURIComponent(url);
}

// console.log(uri('https://www.terabox.com/wap/share/filelist?surl=01q8Uksjo95fY2z8G3JYpQ'))