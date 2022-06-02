// Third party imports
import { shallow } from "enzyme";

// Local imports
import Home from '../pages/index';

// Test configuration

describe('Home page', function() {
    test('outputs a component', () => {
        expect(shallow(<Home/>)).not.toBeNull();
    });
});