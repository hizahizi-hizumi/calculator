import { CalculatorButton } from "./CalculatorButton";

describe("CalculatorButton", () => {
  it("与えられた文字が描画されていること", () => {
    const character = "1";
    render(<CalculatorButton character={character} />);

    expect(screen.getByText(character)).toBeInTheDocument();
  });

  it("クリックされたときにonClickが呼ばれること", async () => {
    const onClick = vi.fn();
    render(<CalculatorButton onClick={onClick} />);

    await fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });

  it("typeごとに違う色であること", () => {
    const { getByText } = render(
      <>
        <CalculatorButton character="1" type="number" />
        <CalculatorButton character="+" type="operator" />
        <CalculatorButton character="AC" type="all-clear" />
      </>,
    );

    const numberButton = getByText("1");
    const operatorButton = getByText("+");
    const allClearButton = getByText("AC");

    const colors = [
      getComputedStyle(numberButton).backgroundColor,
      getComputedStyle(operatorButton).backgroundColor,
      getComputedStyle(allClearButton).backgroundColor,
    ];

    const uniqueColors = new Set(colors);
    expect(uniqueColors.size).toBe(colors.length);
  });
});
