const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("should return the engineer's github username", () => {
      const engineer = new Engineer(
        "Maggie",
        456,
        "email@email.com",
        "maggiegithub"
      );
      expect(engineer.getGithub()).toBe("maggiegithub");
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const engineer = new Engineer(
        "Maggie",
        456,
        "email@email.com",
        "maggiegithub"
      );
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});
