import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { setLoginInfo } from '../Redux/slice/UserSlice';
import { loginUser } from '../Lib/API/userApi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginScreen = () => {
  const [formdata, setformdata] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formdata);
      console.log("response in login submit button",response);
        dispatch(setLoginInfo(response));
    } catch (error) {
      console.error(error);
    }
    setformdata({ email: '', password: '' });
  };

  return (
    <>
      <h1 className="text-center p-9 text-3xl uppercase">Login User</h1>
      <div className="mx-5 w-[90%] h-[50%] p-4 bg-gray-300 rounded-md backdrop-filter backdrop-blur-md bg-opacity-20 md:mx-auto md:w-[40%]">
        <form onSubmit={handleSubmit}>
          <FormInput text="Email" type="email" placeholder="Enter your Email" value={formdata.email} name="email" onChange={handleInput} />
          <FormInput text="Password" type="password" placeholder="Enter your Password" value={formdata.password} name="password" onChange={handleInput} />
          <div className="my-5">
            <FormButton text="Login" color="#ff5733" />
            <div className="my-3 text-center">
              Don't have an account? <Link to="/signup">Signup</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
