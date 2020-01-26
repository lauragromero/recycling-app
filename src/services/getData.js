const DATA = './data/data.json';

const getData=()=>fetch(DATA).then(response=> response.json());

export {getData};