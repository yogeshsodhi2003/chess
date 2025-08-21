// components/UsernameForm.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setLoading, setError } from '../store/userSlice';

const UsernameForm = () => {
  const [username, setUsername] = useState('');
  const { loading, error } = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    
    dispatch(setLoading(true));
    
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim() })
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }
      
      const data = await response.json();
      dispatch(setUser(data));
      
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Start Playing'}
      </button>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </form>
  );
};

export default UsernameForm;
