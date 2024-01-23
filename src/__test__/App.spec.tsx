import { render } from "@testing-library/react";
import App from "../App";

describe("testing App", () => {
  it("sample test add", () => {
    expect(1 + 1).toBe(2);
  });

  it("test react", () => {
    render(<App />);
  });
});
