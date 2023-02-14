const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern")

describe("Intern", () => {
  describe("getSchool", () => {
    it("should return the interns school", () => {
      const intern = new Intern(
        "Maggie", 
        456, 
        "email@email.com", 
        "NYU");
      expect(intern.getSchool()).toBe("NYU");
    });
  });

  describe("getRole", () => {
    it("should return 'Intern'", () => {
      const intern = new Intern(
        "Maggie",
        456,
        "email@email.com",
        "NYU"
      );
      expect(intern.getRole()).toBe("Intern");
    });
  });
});
