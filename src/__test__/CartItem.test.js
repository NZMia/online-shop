import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { prettyDOM } from "@testing-library/react";
import CartItem from "../components/CartItem";

afterEach(cleanup);

const setup = () => {
  //   const product = {
  //     name: "Deanston 12 years old",
  //     price: 99.99,
  //     SKU: "DEAN",
  //     promoCode: 0,
  //     _id: 1,
  //   };
  const { container } = render(<CartItem />);

  const card = screen.getByRole("card");
  const cardTitle = screen.getByRole("title");
  const cardPrice = screen.getByRole("subTitle");
  const cartQty = screen.getByRole("qty");
  const cartSubTotal = screen.getByRole("subTotal");
  const buttonRemove = screen.getByRole("button", {
    name: /Remove from cart/i,
  });

  return {
    card,
    cardTitle,
    cardPrice,
    buttonRemove,
    cartQty,
    cartSubTotal,
    container,
  };
};

test("CartItem should be render without crash", () => {
  const { card, cardTitle, cardPrice, cartQty, cartSubTotal, buttonRemove } =
    setup();

  expect(card).toBeInTheDocument();
  expect(cardTitle).toBeInTheDocument();
  expect(cardPrice).toBeInTheDocument();
  expect(cartQty).toBeInTheDocument();
  expect(cartSubTotal).toBeInTheDocument();
  expect(buttonRemove).toBeInTheDocument();
});

test("CartItem should able to click the button", () => {
  const handleClick = jest.spyOn(console, "log");
  const { buttonRemove } = setup();

  fireEvent.click(buttonRemove);
  expect(handleClick).toHaveBeenCalled();
});
