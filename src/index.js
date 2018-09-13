/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var arrayLenght = preferences.length;
  var count = 0;
  for(var i = 0; i<arrayLenght; i++){
  	var next = preferences[i] - 1;
  	if(next == i) continue;
  	var next2 = preferences[next] - 1;
  	if(next == next2) continue;
  	var next3 = preferences[next2] - 1;
  	if(next3 == next2) continue;
  	if(next3 == i){
  		count++;
  	}
  }
  return count / 3;
};
