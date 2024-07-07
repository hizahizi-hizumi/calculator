import { CalculatorProvider } from "../../CalculatorProvider";
import * as CalculatorProviderParent from "../../CalculatorProvider";
import { CalculatorButtons } from "./CalculatorButtons";

describe("CalculatorButtons", () => {
  describe("ボタン描画", () => {
    beforeEach(() => {
      render(
        <CalculatorProvider>
          <CalculatorButtons />
        </CalculatorProvider>,
      );
    });

    it("0が描画されていること", () =>
      expect(screen.getByText("0")).toBeInTheDocument());

    it("1が描画されていること", () =>
      expect(screen.getByText("1")).toBeInTheDocument());

    it("2が描画されていること", () =>
      expect(screen.getByText("2")).toBeInTheDocument());

    it("3が描画されていること", () =>
      expect(screen.getByText("3")).toBeInTheDocument());

    it("4が描画されていること", () =>
      expect(screen.getByText("4")).toBeInTheDocument());

    it("5が描画されていること", () =>
      expect(screen.getByText("5")).toBeInTheDocument());

    it("6が描画されていること", () =>
      expect(screen.getByText("6")).toBeInTheDocument());

    it("7が描画されていること", () =>
      expect(screen.getByText("7")).toBeInTheDocument());

    it("8が描画されていること", () =>
      expect(screen.getByText("8")).toBeInTheDocument());

    it("9が描画されていること", () =>
      expect(screen.getByText("9")).toBeInTheDocument());

    it("+が描画されていること", () =>
      expect(screen.getByText("+")).toBeInTheDocument());

    it("-が描画されていること", () =>
      expect(screen.getByText("-")).toBeInTheDocument());

    it("×が描画されていること", () =>
      expect(screen.getByText("×")).toBeInTheDocument());

    it("÷が描画されていること", () =>
      expect(screen.getByText("÷")).toBeInTheDocument());

    it("=が描画されていること", () =>
      expect(screen.getByText("=")).toBeInTheDocument());

    it("ACが描画されていること", () =>
      expect(screen.getByText("AC")).toBeInTheDocument());
  });

  describe("ボタンクリック", () => {
    const setDisplayMock = vi.fn();

    beforeEach(() => {
      vi.spyOn(
        CalculatorProviderParent,
        "useCalculatorContext",
      ).mockReturnValue({
        setDisplay: setDisplayMock,
      });

      render(
        <CalculatorProvider>
          <CalculatorButtons />
        </CalculatorProvider>,
      );
    });

    it("0 がクリックされたときにsetDisplayが 0 で呼ばれること", async () => {
      await fireEvent.click(screen.getByText("0"));
      expect(setDisplayMock).toHaveBeenCalledWith("0");
    });

    it("1 がクリックされたときにsetDisplayが 1 で呼ばれること", async () => {
      await fireEvent.click(screen.getByText("1"));
      expect(setDisplayMock).toHaveBeenCalledWith("1");
    });

    it("2 がクリックされたときにsetDisplayが 2 で呼ばれること", async () => {
      await fireEvent.click(screen.getByText("2"));
      expect(setDisplayMock).toHaveBeenCalledWith("2");
    });

    it("3 がクリックされたときにsetDisplayが 3 で呼ばれること", async () => {
      await fireEvent.click(screen.getByText("3"));
      expect(setDisplayMock).toHaveBeenCalledWith("3");
    });

    it("4 がクリックされたときにsetDisplayが 4 で呼ばれること", async () => {
      await fireEvent.click(screen.getByText("4"));
      expect(setDisplayMock).toHaveBeenCalledWith("4");
    });

    it("5 がクリックされたときにsetDisplayが 5 で呼ばれること", async () => {
      await fireEvent.click(screen.getByText("5"));
      expect(setDisplayMock).toHaveBeenCalledWith("5");
    });

    it("6 がクリックされたときにsetDisplayが 6 で呼ばれること", async () => {
      await fireEvent.click(screen.getByText("6"));
      expect(setDisplayMock).toHaveBeenCalledWith("6");
    });

    it("7 がクリックされたときにsetDisplayが 7 で呼ばれること", async () => {
      await fireEvent.click(screen.getByText("7"));
      expect(setDisplayMock).toHaveBeenCalledWith("7");
    });

    it("8 がクリックされたときにsetDisplayが 8 で呼ばれること", async () => {
      await fireEvent.click(screen.getByText("8"));
      expect(setDisplayMock).toHaveBeenCalledWith("8");
    });

    it("9 がクリックされたときにsetDisplayが 9 で呼ばれること", async () => {
      await fireEvent.click(screen.getByText("9"));
      expect(setDisplayMock).toHaveBeenCalledWith("9");
    });

    it("+ がクリックされたときにsetDisplayが + で呼ばれること", async () => {
      await fireEvent.click(screen.getByText("+"));
      expect(setDisplayMock).toHaveBeenCalledWith("+");
    });

    it("- がクリックされたときにsetDisplayが - で呼ばれること", async () => {
      await fireEvent.click(screen.getByText("-"));
      expect(setDisplayMock).toHaveBeenCalledWith("-");
    });

    it("× がクリックされたときにsetDisplayが × で呼ばれること", async () => {
      await fireEvent.click(screen.getByText("×"));
      expect(setDisplayMock).toHaveBeenCalledWith("×");
    });

    it("÷ がクリックされたときにsetDisplayが ÷ で呼ばれること", async () => {
      await fireEvent.click(screen.getByText("÷"));
      expect(setDisplayMock).toHaveBeenCalledWith("÷");
    });

    it("= がクリックされたときにsetDisplayが = で呼ばれること", async () => {
      await fireEvent.click(screen.getByText("="));
      expect(setDisplayMock).toHaveBeenCalledWith("=");
    });

    it("AC がクリックされたときにsetDisplayが AC で呼ばれること", async () => {
      await fireEvent.click(screen.getByText("AC"));
      expect(setDisplayMock).toHaveBeenCalledWith("AC");
    });
  });
});
