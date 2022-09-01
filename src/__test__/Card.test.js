import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { prettyDOM } from "@testing-library/react";
import Card from "../components/Card";

afterEach(cleanup);

const setup = () => {
  const product = {
    name: "Deanston 12 years old",
    price: 99.99,
    SKU: "DEAN",
    promoCode: 0,
    _id: 1,
  };
  const { container } = render(<Card product={product} />);

  const card = screen.getByRole("card");
  const cardTitle = screen.getByRole("title");
  const cardPrice = screen.getByRole("subTitle");
  const buttonAdd = screen.getByRole("button", { name: /Add to cart/i });

  return {
    card,
    cardTitle,
    cardPrice,
    buttonAdd,
    container,
  };
};

test("Card should be render without crash", () => {
  const { card, cardTitle, cardPrice, buttonAdd } = setup();

  expect(card).toBeInTheDocument();
  expect(cardTitle).toBeInTheDocument();
  expect(cardPrice).toBeInTheDocument();
  expect(buttonAdd).toBeInTheDocument();
});

test("Card should be display title and price", () => {
  const { cardTitle, cardPrice } = setup();

  expect(cardTitle.textContent).toBe("Deanston 12 years old");
  expect(cardPrice.textContent).toBe("$99.99");
});

test("Card should able to click the button", () => {
  const handleClick = jest.spyOn(console, "log");
  const { buttonAdd } = setup();

  fireEvent.click(buttonAdd);
  expect(handleClick).toHaveBeenCalled();
});
