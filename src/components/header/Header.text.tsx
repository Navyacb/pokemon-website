import { render } from '../../../util/testUtils/test-utils';
import Header from "./Header"

describe('header test',()=>{
    it('should render the header',()=>{
        const {getByRole} = render(<Header/>)
        expect(getByRole('heading', {  name: /pokemon/i}))
    })
})