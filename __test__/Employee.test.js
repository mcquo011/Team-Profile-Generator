const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("constructor", () => {
    it("should create an employee object with name, id, and email properties", () => {
      const employee = new Employee("Maggie", 456, "email@email.com");

      expect(employee).toEqual({
        name: "Maggie",
        id: 456,
        email: "email@email.com",
      });
    });
  });

  describe("getName", () => {
    it("should return the employee's name", () => {
      const employee = new Employee("Maggie", 456, "email@email.com");

      expect(employee.getName()).toBe("Maggie");
    });
  });

  describe("getId", () => {
    it("should return the employee's ID", () => {
      const employee = new Employee("Maggie", 456, "email@email.com");

      expect(employee.getId()).toBe(456);
    });
  });

  describe("getEmail", () => {
    it("should return the employee's email", () => {
      const employee = new Employee("Maggie", 456, "email@email.com");

      expect(employee.getEmail()).toBe("email@email.com");
    });
  });

  describe("getRole", () => {
    it("should return 'Employee'", () => {
      const employee = new Employee("Maggie", 456, "email@email.com");

      expect(employee.getRole()).toBe("Employee");
    });
  });
});
