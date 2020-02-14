import React from 'react'
import Register from '../components/Register'
// import {  shallow, configure } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent, waitForElement } from '@testing-library/react'

import axiosMock from 'axios'

jest.mock('axios');

test('receives stuff', async () => {
  const url = 'http://localhost:4000/api/users/registeruser'
})

// test('allows the user to regisrer', async () => {
//   const fakeResponse = {
//     firstName: 'fake name',
//     lastName: 'fake name',
//     email: 'fake@test.com',
//     password: '123456',
//     password2: '123456',
//     authenticated: false
//   }

//   jest.spyOn(onSubmit, 'axios.post').mockImplementationOnce(() => {
//     return Promise.resolve({
//       json: () => Promise.resolve(fakeResponse),
//     })
//   })

//   render(<Register />)

//   fireEvent.change(screen.getByLabelText(/First Name/i), {
//     target: {value: 'chuck'},
//   })
//   fireEvent.change(screen.getByLabelText(/Last Name/), {
//     target: {value: 'norris'}
//   })

//   const alert = await screen.findByRole('alert')

//   expect(alert).toHaveContent(/Welcome/i)

//   expect(localStorage.get('firstName')).toEqual(fakeResponse.firstName)

//   expect(localStorage.get('lastName')).toEqual(fakeResponse.lastName)
// })



// configure({ adapter: new Adapter() })



// describe('Register', () => {
//   const testValues = {
//     firstName: 'Test',
//     lastName: 'Test',
//     email: 'bs@test.com',
//     password: '123456',
//     authenticated: false
//   }

//   it('Submit works', () => {
//     const component = shallow(<Register {...testValues} />);
//     component.find('#submitButton').simulate('submit');
//     expect(testValues.onSubmit).toHaveBeenCalledTimes(1);
//     expect(testValues.onSubmit).toBeCalledWith({firstName: testValues.firstName, lastName: testValues.lastName, email: testValues.email, password: testValues.password, password2: testValues.password2, authenticated: testValues.authenticated});
//   });
 
// });

// test('Should submit form', () => {
//     const testValues = {
//     firstName: 'Test',
//     lastName: 'Test',
//     email: 'bs@test.com',
//     password: '123456',
//     password2: '123456',
//     authenticated: false
//   }

//   const onSubmitSpy = jest.fn();

//   const wrapper = shallow(<Register {...testValues} onSubmit={onSubmitSpy}/>)
//   wrapper.find('#regForm').simulate('submit', { preventDefault: () => {} });

//   expect(onSubmitSpy).toHaveBeenLastCalledWith({
//     firstName: testValues.firstName,
//     lastName: testValues.lastName,
//     email: testValues.email,
//     password: testValues.password,
//     password2: testValues.password2,
//     authenticated: testValues.authenticated
//   })
// })