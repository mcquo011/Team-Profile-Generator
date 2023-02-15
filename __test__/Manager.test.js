const Employee = require("../lib/Employee")
const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("getOfficeNumber", () => {
        it("should return the managers office number", () => {
            const manager = new Manager(
                "Mandy",
                123,
                "hello@email.com",
                1234567891
            );
            expect(manager.getOfficeNumber()).toBe(1234567891);
        });
    });

     describe("getRole", () => {
       it("should return 'Manager'", () => {
         const manager = new Manager(
           "Maggie",
           456,
           "email@email.com",
           1234567891
         );
         expect(manager.getRole()).toBe("Manager");
       });
     });
})