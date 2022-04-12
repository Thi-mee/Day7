function sortNumbers(array){

  array.sort(function(a,b){
    return a-b
  })
  return array
}


console.log(sortNumbers([1,9,4,5,3,0]))
console.log(sortNumbers([48,29,154,15,53,0]))