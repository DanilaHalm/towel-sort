
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix === 'undefined') {
      matrix = []
  }
  if (matrix.length > 0){
  for ( let i = 0; i < matrix.length; i++ ){
      i% 2 === 0? matrix[i] : matrix[i].reverse()
  }
    return [matrix].join('').split(',')
  } else {
  return []
}
}