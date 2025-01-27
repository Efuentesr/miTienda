import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const CloseSession = () => {
    const { closeSession } = useContext(UserContext);
    const handleCloseSession = async() => {
        await closeSession();
    }
    handleCloseSession();
    const navigate = useNavigate();

    useEffect(()=>{
      navigate("/login")

    },[])

    return (
      <div>Close Session</div>
    )

}

export default CloseSession