import React from 'react'
import Login from '../components/Login'
import App from '../app'
import '@testing-library/jest-dom'
import Dashboardhome from '../components/Dashboardhome'
import Enzyme, { mount } from 'enzyme'
//import Adapter from 'enzyme-adapter-react-16'

var login;

beforeEach(() => {
    login = mount(<Login />);
  });

// app renders
it("Does not submit an empty form", () => {
  const Spy = jest.spyOn(login, "handleSubmit").mockImplementation();
  
  const btn = login.find("[type='submit']");
  btn.simulate("click");
  expect(Spy).toHaveBeenCalledTimes(0);
})


it("Submits a valid form", () => {
  const Spy = jest.spyOn(login, "handleSubmit").mockImplementation();
  
  const email = login.find("[type='email']");
  const pwd = login.find("[type='password']");
  const btn = login.find("[type='submit']");
  
  email.value = "testing@code.com");
  pwd.value = "12345678910";
  btn.simulate("click");
  expect(Spy).toHaveBeenCalledTimes(1);
});

describe("Login unit test", () => {
  it("setLocalStorage works", () => {
    const Spy = jest.spyOn(localStorage, "setItem").mockImplementation();
    
    let testData = {login:"helo c:", goodbye:"byeeee"};
    
    login.setLocalStorage(testData);
    
    expect(Spy).toHaveBeenCalledTimes(2);
    expect(Spy).toHaveBeenCalledWith("hello", "helo c:");
    expect(Spy).toHaveBeenCalledWith("goodbye", "byeeee");
    
  });
  it("handleLoginResponse works", () => {
    const storageSpy = jest.spyOn(login, "setLocalStorage").mockImplementation();
    const alertSpy = jest.spyOn(window, "alert").mockImplementation();
    
    let testData = {login:false, user:{email:"ehehe@h.e", password:"12345678910"}};
    
    login.handleLoginResponse(testData);
    
    expect(storageSpy).toHaveBeenCalledWith(testData.user);
    expect(alertSpy).toHaveBeenCalledTimes(1);
  });
  it("update works", () => {
    const Spy = jest.spyOn(login, "update");
    
    const pwd = login.find("[type='password']");
    pwd.value = "secret";
    
    expect(login.state()).toHaveProperty("password", "secret")
    
    expect(Spy).toHaveBeenCalledTimes(1);
  });
  it("handleSubmit works", () => {
    const responseSpy = jest.spyOn(login, "handleLoginResponse").mockImplementation();
    const fetchSpy = jest.spyOn(window, "fetch").mockImplementation( async (e) => return "{test: 'ok'}");
    
    let testData = {preventDefault: jest.fn()};
    
    login.handleSubmit(testData);
    
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(responseSpy).toHaveBeenCalledWith({test: 'ok'});
  });
});