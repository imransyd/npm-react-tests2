import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './form';
import Button from './button';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders input-name', () => {
  let wrapper = mount(<Form/>);
  wrapper.find({className:'name'})       
  });

test('renders input-email', () => {
    
   let wrapper = mount(<Form/>); 
   wrapper.find({className:'email'})
  
	
});

test('renders button', () => {
  let wrapper = shallow(<Button />);
	let actual = wrapper.find("button").hasClass("buttonClass");
	let expected = true;
	expect(actual).toBe(expected);

});