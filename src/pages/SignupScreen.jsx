import React, { useState, useRef } from 'react';
import { createUser } from '../Lib/API/userApi';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { Link } from 'react-router-dom';

const SignupScreen = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        profileImage: null,
    });

    // Ref for file input
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await createUser(formData);
            console.log(response);
        } catch (error) {
            console.error(error);
        }

        // Reset form fields
        setFormData({
            name: '',
            email: '',
            password: '',
            profileImage: null,
        });

        // Reset file input field
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div>
            <h1 className='text-center p-9 text-3xl uppercase'>Signup User</h1>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className='mx-5 w-[90%] h-[50%] p-4 bg-gray-300 rounded-md backdrop-filter backdrop-blur-md bg-opacity-20 md:mx-auto md:w-[40%]'>
                    <FormInput
                        text="Name"
                        type="text"
                        placeholder="Enter your Name"
                        value={formData.name}
                        name="name"
                        onChange={handleChange}
                    />
                    <FormInput
                        text="Email"
                        type="email"
                        placeholder="Enter your Email"
                        value={formData.email}
                        name="email"
                        onChange={handleChange}
                    />
                    <FormInput
                        text="Password"
                        type="password"
                        placeholder="Enter your Password"
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                    />
                    <input
                        type="file"
                        name="profileImage"
                        onChange={handleChange}
                        ref={fileInputRef} // Attach ref to the file input
                    />
                    <div className='my-5'>
                        <Link to='/'>
                        <FormButton text="Sign Up" />
                        </Link>
                        <div className='my-3 text-center'>
                            Do you have an account? <Link to='/'>Login</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignupScreen;
