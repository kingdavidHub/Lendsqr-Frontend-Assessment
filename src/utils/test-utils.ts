import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store'; // Adjust the import based on your store setup

const renderWithProviders = (ui, { initialState, store = createStore(reducer, initialState), ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { renderWithProviders };