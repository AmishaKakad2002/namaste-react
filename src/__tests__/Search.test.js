import { screen, render, act, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../Mocks/mockResData.json";
import Body from "../Components/Body";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search restaurant list for burger text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchBtn = screen.getByRole("button", { name: "Search" });
  fireEvent.click(searchBtn);
  const cardsBeforeText = screen.getAllByTestId("resCard");
  expect(cardsBeforeText.length).toBe(20);

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, {
    target: {
      value: "burger",
    },
  });
  fireEvent.click(searchBtn);
  const cardsAfterText = screen.getAllByTestId("resCard");
  expect(cardsAfterText.length).toBe(2);
});

it("should filter top rated restaurants",async()=>{
    await act(async()=>{
        render(
           <BrowserRouter>
           <Body/>
           </BrowserRouter>
        )
    });

    
    const beforeClickCards = screen.getAllByTestId("resCard");
    expect(beforeClickCards.length).toBe(20);
    const topRatedBtn = screen.getByRole("button",{name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);
    const afterClickCards = screen.getAllByTestId("resCard");
    expect(afterClickCards.length).toBe(18);
})