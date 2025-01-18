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
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "0px";
  readonly thresholds: ReadonlyArray<number> = [0];

  constructor(
    private callback: IntersectionObserverCallback,
    _options?: IntersectionObserverInit
  ) {}

  observe(target: Element): void {
    // Optionally, you can call the callback here with mock entries
    const entries: IntersectionObserverEntry[] = [
      {
        boundingClientRect: new DOMRect(),
        intersectionRatio: 1,
        intersectionRect: new DOMRect(),
        isIntersecting: true,
        rootBounds: new DOMRect(),
        target,
        time: Date.now(),
      } as IntersectionObserverEntry,
    ];
    this.callback(entries, this);
  }

  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

global.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;

// Mock for images
jest.mock(
  "\\.(svg)$",
  () => ({
    __esModule: true,
    default: "svg-file",
  }),
  { virtual: true }
);

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
    return React.createElement("div", { onClick: onClickAway }, children);
  },
}));

// Mock import.meta.env
declare global {
  var importMeta: {
    meta: {
      env: {
        VITE_API_URL: string;
      };
    };
  };
}

global.importMeta = {
  meta: {
    env: {
      VITE_API_URL: "https://mock-api.example.com",
    },
  },
};

global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;