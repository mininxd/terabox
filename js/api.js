export const getConf = 'https://teradl-api.dapuntaratya.com/get_config';
export const file_gen = 'https://api.mininxd.my.id/terabox/getFile?url=';
export const link_gen = 'https://api.mininxd.my.id/terabox/getLink?url=';

export function uri(url) {
  return encodeURIComponent(url);
}

export function nestedFolder(data) {
  if (typeof data !== 'object' || !data.list || !Array.isArray(data.list)) {
    console.error("Expected an object with a 'list' array.");
    return;
  }
  
  const processItems = (list) => {
    const result = {}; 
    let i = 0;
    list.forEach(item => {
      if (item.is_dir) {
        result[i] = processItems(item.list || []);
      } else {
      i++;
        result[i] = {
          fs_id: item.fs_id,
          path: item.path,
          size: item.size,
          image: item.image,
          link: item.link
        };
      }
    });

    return result
  };

  return processItems(data.list);
}


