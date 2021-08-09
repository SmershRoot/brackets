module.exports = function check(str, bracketsConfig) {
  let arrStart = [];
  let arrEnd = [];
  for(let i=0;i<bracketsConfig.length; i++){
    arrStart.push(bracketsConfig[i][0]);
    arrEnd.push(bracketsConfig[i][1]);
  }

  let charStrs = str.split('');

  let resultString = [];

  for(let i=0; i<charStrs.length; i++){
    let charStr = charStrs[i];
    if(arrStart.indexOf(charStr)>-1){
      if(resultString[resultString.length-1] == charStr && arrEnd.indexOf(charStr)>-1){
        resultString.pop();
      }else{
        resultString.push(charStr);
      }
    } else {
      let endStr = resultString.pop();
      let indexEnd = arrEnd.indexOf(charStr);
      if(indexEnd<0){
        return false;
      }
      if(arrStart[indexEnd] != endStr){
        return false
      }
    }
  }
  return resultString.length == 0;
}
