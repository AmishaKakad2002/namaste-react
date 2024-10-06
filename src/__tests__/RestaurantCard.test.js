import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../Components/RestaurantCard";
import MOCK_DATA from "../Mocks/resCardMock.json";

it("should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});
