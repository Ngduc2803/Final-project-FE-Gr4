import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Kiểm tra thông tin đăng nhập
    // Gọi API để xác thực người dùng
    // Xử lý logic đăng nhập ở đây
    if (email === 'example@example.com' && password === 'password') {
      setIsLoggedIn(true);
      alert('Đăng nhập thành công!');
    } else {
      alert('Email hoặc mật khẩu không đúng!');
    }
    // Xóa dữ liệu đăng nhập sau khi xử lý
    setEmail('');
    setPassword('');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('Đăng xuất thành công!');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Chào mừng bạn đã đăng nhập!</h1>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h1>Đăng nhập</h1>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Mật khẩu:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Đăng nhập</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
