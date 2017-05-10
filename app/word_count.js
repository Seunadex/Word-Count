'use strict';

const words = (str) =>{
  let result = {};

  // Includes punctuation, international characters, removes whitespaces on both ends and split to form an array
  let wordArr = str.replace(/'(?!\w)|\\'\s/g, "").replace(/\s\'(?=\w)|,|\n|\t|\b  \b/g, " ").trim().split(" ");
  
  wordArr.forEach(function (word){
  if (Object.hasOwnProperty.call(result, word)){
    result[word]+=1;
   } else {
  result[word]=1;
  }   

  });

  return result;
};

module.exports = {
  words: words
};