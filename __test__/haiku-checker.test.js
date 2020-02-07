import { HaikuChecker } from "../src/haiku-checker";

describe('haikuChecker', () => {

  test('should confirm input of string from user', () => {
    let haikuChecker = new HaikuChecker("Hi", "my name", "is Ben");
    expect(haikuChecker.line1).toEqual("Hi");
    expect(haikuChecker.line2).toEqual("my name");
    expect(haikuChecker.line3).toEqual("is Ben");
  });
  test('should confirm no none-letters within input', () => {
    let haikuChecker = new HaikuChecker("hi", "my na%e", "is Ben");
    console.log(haikuChecker);
    expect(haikuChecker.nonLetterCheck(haikuChecker.line1)).toEqual(true);
    expect(haikuChecker.nonLetterCheck(haikuChecker.line2)).toEqual(false);
    expect(haikuChecker.nonLetterCheck(haikuChecker.line3)).toEqual(true);
  });
  // test('should confirm no none-letters within input', () => {
  //   let haikuChecker = new HaikuChecker("hi", "my na%e", "is Ben");
  //   console.log(haikuChecker);
  //   expect(haikuChecker.nonLetterCheck(haikuChecker.line1)).toEqual(["h","i"]);
  //   expect(haikuChecker.nonLetterCheck(haikuChecker.line2)).toEqual(["m", "y", " ", "n", "a", "%", "e"]);
  //   expect(haikuChecker.nonLetterCheck(haikuChecker.line3)).toEqual(["i", "s", " ", "B", "e", "n"]);

});