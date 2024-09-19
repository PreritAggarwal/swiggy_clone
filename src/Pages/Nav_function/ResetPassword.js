import React, { useState } from 'react';
import { resetPassword } from '../../Services/authService';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    try {
      if (!newPassword || !token) {
        setMessage('Token and new password are required');
        return;
      }
      
      await resetPassword(token, newPassword);
      setMessage('Password reset successful');
      navigate('/login');
    } catch (error) {
      setMessage(error.message || 'Failed to reset password');
    }
  };


  return (
    <div className="reset-password">
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
