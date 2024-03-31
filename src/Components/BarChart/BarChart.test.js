import { render, screen, waitFor } from '@testing-library/react';
import BarChart from './BarChart';



describe('BarChart component', () => {
  it('renders loading indicator while fetching data', async () => {
    render(<BarChart />);
    expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByTestId('progress-bar')).not.toBeInTheDocument());
  });

  it('renders chart with data after successful fetch', async () => {
    render(<BarChart />);
    // Wait for chart to render
    await waitFor(() => expect(screen.getByTestId('bar-chart')).toBeInTheDocument());
    // Assert chart labels
    expect(screen.getByText('USD To EGP')).toBeInTheDocument();
    expect(screen.getByText('USD To EUR')).toBeInTheDocument();
    expect(screen.getByText('USD To GBP')).toBeInTheDocument();
    // Assert chart data points
    expect(screen.getByText(/USD To EGP/)).toHaveAttribute('data-value', '123'); 
    expect(screen.getByText(/USD To EUR/)).toHaveAttribute('data-value', '456'); 
    expect(screen.getByText(/USD To GBP/)).toHaveAttribute('data-value', '789'); 
  });

  it('displays error message if fetching fails', async () => {
    // Mocking error for useFetchFunction
    const mockError = 'Failed to fetch data';
    render(<BarChart />);
    await waitFor(() => expect(screen.getByText(mockError)).toBeInTheDocument());
  });
});
