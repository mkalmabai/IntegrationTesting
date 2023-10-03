
import { render, screen } from "@testing-library/react";
import RegisterDonation from "../components/register_donor";

describe("Register component", () => {
  it("should render Register component correctly", () => {
    render(<RegisterDonation />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});