import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const CloseSession = () => {
    const navigate = useNavigate();
    const { closeSession } = useContext(UserContext);
    const handleCloseSession = async() => {
        await closeSession();
      }
    handleCloseSession();
    navigate("/login")
  return (
    <div>Close Session</div>
  )
}

export default CloseSession