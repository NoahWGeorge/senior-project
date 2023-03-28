import { useState } from 'react';

interface SignUpFormState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const [formData, setFormData] = useState<SignUpFormState>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormErrors([]);

    // Validate form data
    if (!formData.username) {
      setFormErrors((prevErrors) => [...prevErrors, 'Username is required']);
    }
    if (!formData.email) {
      setFormErrors((prevErrors) => [...prevErrors, 'Email is required']);
    }
    if (!formData.password) {
      setFormErrors((prevErrors) => [...prevErrors, 'Password is required']);
    }
    if (formData.password !== formData.confirmPassword) {
      setFormErrors((prevErrors) => [...prevErrors, 'Passwords do not match']);
    }

    if (formErrors.length === 0) {
      // Handle form submission
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Sign Up</button>
      {formErrors.length > 0 && (
        <div>
          {formErrors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
      )}
    </form>
  );
};

export default SignUpForm;