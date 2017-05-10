'use strict';

const words = (input) =>{
  let resultObj = {};

  // Includes punctuation, international characters, removes whitespaces on both ends and split to form an array
  let wordArr = input.replace(/'(?!\w)|\\'\s/g, "").replace(/\s\'(?=\w)|,|\n|\t|\b  \b/g, " ").trim().split(" ");
  // Treat each element in the array individually
  wordArr.forEach((word) =>{
  if (Object.hasOwnProperty.call(resultObj, word)){
    resultObj[word] += 1;
   } 
  else {
    resultObj[word] = 1;
  }   

  });
  return resultObj;
};

module.exports = {
  words: words
};