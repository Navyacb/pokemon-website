import {act, fireEvent, render, waitFor} from '../../../util/testUtils/test-utils';
import Home from './Home';
describe('Home page test', () => {
    it('should render the home page', () => {
        const {getByPlaceholderText} = render(<Home/>)

        expect(getByPlaceholderText('Search for your favorite pokemon...')).toBeInTheDocument();
        expect(getByPlaceholderText('Search for your favorite pokemon...')).toHaveValue('');
        expect(getByPlaceholderText('Filter by Pokemon Category/type')).toBeInTheDocument();

    });

    it('should render the list of pokemon category', async () => {
        const {getByText} = render(<Home/>)
        await waitFor(() => {
            expect(getByText('BULBASAUR')).toBeInTheDocument();
            expect(getByText('IVYSAUR')).toBeInTheDocument();
            expect(getByText('VENUSAUR')).toBeInTheDocument();
            expect(getByText('CHARMANDER')).toBeInTheDocument();
        });
    });

    it('search for a pokemon', async () => {
        const {getByPlaceholderText, getByText} = render(<Home/>)
        const searchInput = getByPlaceholderText('Search for your favorite pokemon...');

        act(() => {
            fireEvent.change(searchInput, {target: {value: 'bulbasaur'}});
        });
        await waitFor(() => {
            expect(getByText('BULBASAUR')).toBeInTheDocument();
        });
    });

    it('filter by pokemon category', async () => {
        const { getByPlaceholderText, getByText } = render(<Home/>)

        expect(getByPlaceholderText('Filter by Pokemon Category/type')).toBeInTheDocument();

        act(() => {
            fireEvent.click(getByPlaceholderText('Filter by Pokemon Category/type'));
        });

        await waitFor(() => {
            expect(getByText('NORMAL')).toBeInTheDocument();
            expect(getByText('FIGHTING')).toBeInTheDocument();
            expect(getByText('FLYING')).toBeInTheDocument();
            expect(getByText('POISON')).toBeInTheDocument();
        });

        act(() => {
            fireEvent.click(getByText('POISON'));
        });

        await waitFor(() => {
            expect(getByText('BULBASAUR')).toBeInTheDocument();
            expect(getByText('IVYSAUR')).toBeInTheDocument();
            expect(getByText('VENUSAUR')).toBeInTheDocument();
        });

    });

});