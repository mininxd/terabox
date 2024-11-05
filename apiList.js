export const getConf = 'https://teradl-api.dapuntaratya.com/get_config';
export const file_gen = 'https://api.mininxd.my.id/terabox/getFile?url=';
export const link_gen = 'https://api.mininxd.my.id/terabox/getLink?url=';

export function uri(url) {
  return encodeURIComponent(url);
}

//https://1024terabox.com/s/1eBHBOzcEI-VpUGA_xIcGQg
// console.log(uri('https://www.terabox.com/wap/share/filelist?surl=01q8Uksjo95fY2z8G3JYpQ'))
// console.log(uri('https://www.terabox.com/wap/share/filelist?surl=01q8Uksjo95fY2z8G3JYpQ'))