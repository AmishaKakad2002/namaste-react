import { act, fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../Mocks/resMenuMockData.json";
import RestaurantMenu from "../Components/RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../Components/Header";
import "@testing-library/jest-dom";
import Cart from "../Components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should add res items to the cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    );
  });
  const accordianTab = screen.getByText("Recommended (11)");
  fireEvent.click(accordianTab);
  const recommendedItems = screen.getAllByTestId("resItem");
  expect(recommendedItems.length).toBe(11);

  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);

  const cartItem = screen.getByText("Cart - (1)Items");
  expect(cartItem).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart - (2)Items")).toBeInTheDocument();

  const itemsInCart = screen.getAllByTestId("resItem");
  expect(itemsInCart.length).toBe(13); 
});
