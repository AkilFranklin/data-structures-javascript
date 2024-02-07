const searchLines = require("../src/searchLines");
const concordance = require("../src/concordance");
const LinkedList = require("../src/lib/linkedList");
const data = require("../src/data");

describe("Search Lines", () => {
  let conc = {};
  beforeAll(() => {
    conc = concordance(data);
  });
  
  it("should return empty list when empty list is given", () => {
    const words = new LinkedList();
    expect(searchLines(words, conc, data)).toEqual([]);
  })
  
  it("should return empty list if words are not present in concordance", () => {
    const words = new LinkedList(["dumbledore"]);
    expect(searchLines(words, conc, data)).toEqual([]);
  })
  
  it("should return a single line if word appears on one line", () => {
    const words = new LinkedList(["exile"]);
    expect(searchLines(words, conc, data)).toEqual(["No one shall be subjected to arbitrary arrest, detention or exile."]);
  })
  
  it("should return non duplicated lines", () => {
   
    const words = new LinkedList(["human", "free", "enjoy"]);
    expect(searchLines(words, conc, data)).toEqual([
      "All human beings are born free and equal in dignity and rights.",
      "Everyone who works has the right to just and favourable remuneration ensuring for himself and his family an existence worthy of human dignity, and supplemented, if necessary, by other means of social protection.",
      "Education shall be directed to the full development of the human personality and to the strengthening of respect for human rights and fundamental freedoms.",
      "Marriage shall be entered into only with the free and full consent of the intending spouses.",
      "The will of the people shall be the basis of the authority of government; this will shall be expressed in periodic and genuine elections which shall be by universal and equal suffrage and shall be held by secret vote or by equivalent free voting procedures.",
      "Everyone, as a member of society, has the right to social security and is entitled to realization, through national effort and international co-operation and in accordance with the organization and resources of each State, of the economic, social and cultural rights indispensable for his dignity and the free development of his personality.",
      "Everyone has the right to work, to free choice of employment, to just and favourable conditions of work and to protection against unemployment.",
      "Education shall be free, at least in the elementary and fundamental stages.",
      "Everyone has duties to the community in which alone the free and full development of his personality is possible.",
      "Everyone has the right to seek and to enjoy in other countries asylum from persecution.",
      "All children, whether born in or out of wedlock, shall enjoy the same social protection.",
      "Everyone has the right freely to participate in the cultural life of the community, to enjoy the arts and to share in scientific advancement and its benefits.",
    ]);
  });
});