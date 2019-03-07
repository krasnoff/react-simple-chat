import React from 'react';
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import FormInput from './formInput';

// checks if the inner component "FormInput" has been built correctly
describe('<FormInput />', () => {
    it('render correctly FormInput component - input', () => {  
        configure({ adapter: new Adapter() });
        const editor = shallow(<FormInput />);
        expect(editor.find('input').length).toEqual(1);
    });

    it('render correctly FormInput component - div', () => {  
        configure({ adapter: new Adapter() });
        const editor = shallow(<FormInput />);
        expect(editor.find('div').length).toEqual(1);
    });

    it('get the right class', () => {  
        configure({ adapter: new Adapter() });

        var classDef = 'txtUserA';

        const editor = shallow(<FormInput classDef={classDef} />);
        let res = editor.find('div').html();
        expect(res.indexOf('class="txtUser txtUserA"') > -1).toEqual(true);
    });
});

