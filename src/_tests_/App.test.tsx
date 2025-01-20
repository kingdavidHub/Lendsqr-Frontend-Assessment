import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";
import { MemoryRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import Dashboard from "../pages/Dashboard/Dashboard";



describe("App Component", () => {
  beforeEach(() => {
    global.window.history.pushState = vi.fn();
  })
  // Positive Scenarios
  describe("Positive Tests", () => {
    it("renders login page on root path", () => {
      render(<App />);
      expect(screen.getByTestId("login-page")).toBeInTheDocument();
    });

    // it("renders dashboard with navbar and sidebar", async () => {
    //   // window.history.pushState("/dashboard");
      

    //   render(
    //     // <MemoryRouter initialEntries={["/dashboard"]}>
    //       // <App />
    //     // </MemoryRouter>
    //   );

    //   expect(screen.getByTestId("side-bar")).toBeInTheDocument();
    //   // expect(screen.getByTestId("dashboard")).toBeInTheDocument();
    // });

    // it("renders user details page with correct layout", async () => {
    //   window.history.pushState({}, "", "/user/123/details");
    //   render(<App />);

    //   expect(screen.getByTestId("navbar")).toBeInTheDocument();
    //   expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    //   expect(screen.getByTestId("user-details")).toBeInTheDocument();
    // });
  });

  // Negative Scenarios
  describe("Negative Tests", () => {
    it("displays error page for invalid routes", () => {
      const newUrl = "/invalid-route"

      window.history.pushState({}, "", newUrl);

      expect(window.history.pushState).toHaveBeenCalledWith(newUrl);
      render(<App />);

      expect(screen.getByTestId("error-page")).toBeInTheDocument();
    });

  //   it("handles missing user ID in user details route", () => {
  //     window.history.pushState({}, "", "/user//details");
  //     render(<App />);

  //     expect(screen.getByTestId("error-page")).toBeInTheDocument();
  //   });

  //   it("prevents access to protected routes without authentication", () => {
  //     window.history.pushState({}, "", "/dashboard");
  //     render(<App />);

  //     expect(screen.getByTestId("login-page")).toBeInTheDocument();
  //     expect(screen.queryByTestId("dashboard")).not.toBeInTheDocument();
  //   });
    })
});
