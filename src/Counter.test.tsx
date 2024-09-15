import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

/*
   *** Test Driven Development (TDD) ***

   TDD yaklaşımında, kod yazmadan önce testleri yazarız. Bu projede, App bileşini
   için 4 temel senaryo belirledik:

   1. Sayaç 0'dan başlamalı
   2. Artırma butonuna tıklandığında sayaç artmalı
   3. Azaltma butonuna tıklandığında sayaç azalmalı
   4. Sıfırlama butonuna tıklandığında sayaç 0'a dönmeli

   Bu senaryolar, bileşenimizin temel işlevselliğini tanımlar. Her test, bu
   senaryolardan birini doğrular. Testleri yazdıktan sonra, bu testleri geçecek
   kodu yazacağız.

   TDD'nin avantajları:
   - Daha iyi tasarlanmış, test edilebilir kod
   - Hataların erken tespiti
   - Otomatik test suite'i sayesinde güvenli refactoring
   - Dokümantasyon görevi gören testler
 */

describe("Counter Component", () => {

  test("renders initial count of 0", () => {
    render(<App/>);
    expect(screen.getByText("count is 0")).toBeInTheDocument();
  });

  test("increments count when increment button is clicked", () => {
    render(<App/>);
    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton);
    expect(screen.getByText("count is 1")).toBeInTheDocument();
  });

  test("decrements count when decrement button is clicked", () => {
    render(<App/>);
    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton);
    expect(screen.getByText("count is -1")).toBeInTheDocument();
  });

  test("resets count to 0 when reset button is clicked", () => {
    render(<App/>);
    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    const resetButton = screen.getByText("reset");
    fireEvent.click(resetButton);
    expect(screen.getByText("count is 0")).toBeInTheDocument();
  });
});
