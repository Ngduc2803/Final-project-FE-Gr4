import React, { useState } from 'react';
import './login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Bắt đầu hiển thị spinner

    // Gửi thông tin đăng nhập đến server và xử lý đăng nhập ở đây
    console.log('Email:', email);
    console.log('Password:', password);

    // Giả lập việc xử lý đăng nhập trong 2 giây
    setTimeout(() => {
      setIsLoading(false); // Kết thúc hiển thị spinner
    }, 2000);
  };

  return (
    <div className="login-form">
      <h1 className="facebook-logo">Inkstagram</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email or Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className={`btn btn-primary ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
            {isLoading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
            {isLoading ? 'Loading ...' : 'Log In'}
          </button>
        </div>
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
