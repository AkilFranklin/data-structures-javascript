const concordance = require("../src/concordance");
const data = require("../src/data");

describe("Concordance", () => {
  let result = {};
  beforeAll(() => {
    result = concordance(data);
  });

  it("should find 430 words", () => {
    expect(Object.keys(result).length).toEqual(430);
  });

  it("should contain 'human' on line 0", () => {
    expect(result["human"]).toContain(0);
  });

  it("should not duplicate line numbers", () => {
    expect(result["of"].length).toEqual(39);
  });

  it("should be case-insensitive", () => {
    expect(result["no"].length).toEqual(10);
  });
});
