const x = "This contains JS";
const y = "This does not js";

test("contains JS", () => {
  expect(x).toMatch(/JS/);
});
