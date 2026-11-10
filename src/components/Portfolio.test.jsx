import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import Portfolio from './Portfolio';

let container;
let root;

const renderPortfolio = () => {
  act(() => {
    root.render(<Portfolio />);
  });
};

const click = (element) => {
  act(() => {
    element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
};

beforeEach(() => {
  global.IS_REACT_ACT_ENVIRONMENT = true;
  window.requestAnimationFrame = (callback) => callback();
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

test('mobile navigation announces state and closes after selecting a destination', () => {
  renderPortfolio();
  const menuButton = container.querySelector('button[aria-controls="mobile-navigation"]');

  expect(menuButton.getAttribute('aria-expanded')).toBe('false');
  click(menuButton);
  expect(menuButton.getAttribute('aria-expanded')).toBe('true');

  const contactLink = [...container.querySelectorAll('#mobile-navigation a')].find((link) => link.getAttribute('href') === '#contact');
  expect(contactLink).toBeTruthy();
  click(contactLink);

  expect(menuButton.getAttribute('aria-expanded')).toBe('false');
  expect(container.querySelector('#mobile-navigation')).toBeNull();
});

test('Escape closes the mobile navigation and returns focus to its button', () => {
  renderPortfolio();
  const menuButton = container.querySelector('button[aria-controls="mobile-navigation"]');
  click(menuButton);

  act(() => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  });

  expect(menuButton.getAttribute('aria-expanded')).toBe('false');
  expect(document.activeElement).toBe(menuButton);
});

test('shows verified roles and links only to public project destinations', () => {
  renderPortfolio();
  const copy = container.textContent;

  expect(copy).toContain('Business Systems Analyst');
  expect(copy).toContain('Application Support Analyst Intern');
  expect(copy).toContain('Oct 2026–Present');
  expect(copy).toContain('Jul 2026–Sep 2026');
  expect(copy).toContain('Jul 2024–Oct 2024');
  expect(copy).not.toMatch(/certif/i);

  expect(container.querySelector('a[href="https://postlia.com/"]')).toBeTruthy();
  expect(container.querySelector('a[href="https://github.com/mertkodzhaaslan/FoodLink-FLWA"]')).toBeTruthy();
  expect(container.querySelector('a[href="mailto:mert.kodzhaaslan.software@gmail.com"]')).toBeTruthy();
});
