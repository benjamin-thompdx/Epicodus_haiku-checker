import { HaikuChecker } from "../src/haiku-checker";

describe('haikuChecker', () => {

  test('should confirm input of string from user', () => {
    let haikuChecker = new HaikuChecker("Hi", "my name", "is Ben");
    expect(haikuChecker.line1).toEqual("Hi");
    expect(haikuChecker.line2).toEqual("my name");
    expect(haikuChecker.line3).toEqual("is Ben");
  });

});