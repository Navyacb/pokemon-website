import { render, waitFor } from "../../../util/testUtils/test-utils";
import PokemonDetails from "./PokemonDetails";
import {vi} from 'vitest';
  
vi.mock('react-apexcharts', () => ({ __esModule: true, default: () => <div /> }));


describe('PokemonDetails', () => {
    vi.mock('react-router-dom', async () => {
        const mod = await vi.importActual('react-router-dom');
        return {
          ...(mod as object),
          useParams: () => ({
            name: 'bulbasaur'
          })
        };
      });
    it('should render the component', async () => {
        const { getByText, getByAltText } = render(<PokemonDetails />);
        await waitFor(() => {
            expect(getByText('Back to Pokemon List')).toBeInTheDocument();

            expect(getByText('BULBASAUR')).toBeInTheDocument();
            expect(getByAltText('PokemonImag')).toBeInTheDocument();
            expect(getByText('HEIGHT : 7')).toBeInTheDocument();
            expect(getByText('WEIGHT : 69')).toBeInTheDocument();
            expect(getByText('ABILITIES')).toBeInTheDocument();
            expect(getByText('overgrow')).toBeInTheDocument();
            expect(getByText('chlorophyll')).toBeInTheDocument();
            expect(getByText('TYPES')).toBeInTheDocument();
            expect(getByText('grass')).toBeInTheDocument();
            expect(getByText('poison')).toBeInTheDocument();
            expect(getByText(/STAT GRAPH/i)).toBeInTheDocument();
        });
    });
});