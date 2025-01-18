// jest.setup.js
import "@testing-library/jest-dom";
import React from "react";

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
};

// Mock for images
jest.mock("\\.svg$", () => "svg-file");

// Mock for ClickAwayListener
jest.mock("react-click-away-listener", () => ({
  __esModule: true,
  default: ({
    children,
    onClickAway,
  }: {
    children: React.ReactNode;
    onClickAway: () => void;
  }) => {
    return <div onClick={onClickAway}>{children}</div>;
  },
}));

// Mock import.meta.env
global.import = {};
global.import.meta = {
  env: {
    VITE_API_URL: 'https://mock-api.example.com'
  }
};