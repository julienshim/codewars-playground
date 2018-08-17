function countSmileys(arr) {
    var faceCount = 0;
    arr.forEach(function(face){
      if(face.length === 3) {
        if(face[0] === ':' || face[0] === ';') {
          if(face[1] === '-' || face[1] === '~') {
            if(face[2] === ')' || face[2] === 'D') {
              faceCount++;
            }
          }
        }
      } else if (face.length === 2) {
        if(face[0] === ':' || face[0] === ';') {
            if(face[1] === ')' || face[1] === 'D') {
              faceCount++;
            }
        }
      }
    });
    return faceCount;
}

//Refactored 

function countSmileys(arr) {
    let faceCount = 0;
    arr.forEach(function(face){
        let eyes = face[0];
        let nose = face[1];
        let mouth = face[face.length-1];
        if ( ( (face.length === 3) && (nose === '-' || nose === '~' )) || (face.length === 2) ) {
            if((eyes === ':' || eyes === ';') && (mouth === ')' || mouth === 'D')) {
                faceCount++;
            }
        }
    });
    return faceCount;
}