import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from "./js/store/index";
import { Provider } from "react-redux";

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import rootReducer from "./js/reducers/index";
import {addChat} from "./js/actions/index";
import {createStore} from 'redux'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('>>>A P P --- Shallow Render REACT COMPONENTS',()=>{
  let wrapper
  let store;

  beforeEach(()=>{
    configure({ adapter: new Adapter() });  
    store = createStore(rootReducer)
    wrapper = mount( <Provider store={store}><App /></Provider> )
  })

  // mimics adding new chat record. see if the state stores the record correctly in the Redux component
  it('+++ check Prop matches with initialState', () => {
      store.dispatch(addChat({value: 'aaaa', key: 'txtUserA', originaltext: ''}));
      expect(wrapper.instance().state.storeState.chats[0].value).toBe('aaaa')
    }); 
});