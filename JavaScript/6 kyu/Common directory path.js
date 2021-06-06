function getCommonDirectoryPath(pathes) {
    const arr = [];
    for (let i = 0 ; i < Math.min(...pathes.map(path => path.length)); i += 1){
       if (pathes.every(path => path[i] === pathes[0][i])) {
         arr.push(pathes[0][i]);
       } else {
         break;
       }
    }
    return arr.join('').replace(/\w+$/g,'')
}
