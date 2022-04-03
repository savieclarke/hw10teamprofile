const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "NYIT";
  const e = new Intern("Foo", 1, "fake@email.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "fake@email.com", "NYIT");
  expect(e.getRole()).toBe(testValue);
});

