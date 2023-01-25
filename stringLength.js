const stringLength = (string) => {
 const count = string.trim('').length;
 if(count < 1 || count > 10){
    throw new Error('array length is not in range');
 }
 return count; 
}

module.exports = stringLength;
