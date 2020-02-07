export class HaikuChecker {
  constructor (line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  nonLetterCheck(line) {
    let strArray = line.split('');
    strArray.forEach(function(char)  {
      if(char === /[^a-zA-Z]/) {
        return false;
      }
      return true;
    }); 
  }
};