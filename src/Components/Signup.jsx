import React, { useState } from 'react';


const Signup = ({ setShowLogin }) => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowLogin(true);
    };

    return (
        <div className="container">
            <div className="card">
                <div className="left">
                <h2>Sign up</h2>
                <p>Already have an account? <span onClick={() => setShowLogin(true)} className="link">Login here</span></p>
                <form onSubmit={handleSubmit}>
                 <p className='content'>
                    <span>Name : </span> <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter your name here" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required
                    />
                 </p>
                 <p className='content'>
                    <span>Email : </span>                  <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email id here" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required
                    />
                 </p>
                 <p className='content'>
                    <span>Password : </span>               <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter your password here" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required
                    />
                 </p>
                    <label>
                        <input type="checkbox" required /> I agree to receive updates and special offers.
                    </label>
                    <button type="submit">Submit</button>
                </form>
                </div>
                <div className="right">
                 <img src="data:image/png;base64,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" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Signup;
