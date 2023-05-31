import { MyClass } from "../src/index.js";

test("it decorates", () => {
  expect((MyClass as any)["decoration"]).toBe("decorationValue");
});
