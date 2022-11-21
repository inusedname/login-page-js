import styled from '@emotion/styled';
import { ExitToAppOutlined } from '@mui/icons-material';
import React from 'react'
import '../styles/HomeScreen.css'

export const HomeScreen = ({ user, onLogoutClick }) => {

    return (
        <div style={HomeScreenStyle}>
            <h2>Welcome home, <span>{user.name}</span></h2>
            <body style={TextEmailStyle}>Your email is: {user.email}</body>
            <div className='logout-button' onClick={onLogoutClick}>
                <ExitToAppOutlined fontSize='small' />
                <span style={{ paddingLeft: 4 }}>Logout</span>
            </div>
        </div>
    );
}

const HomeScreenStyle = {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 6,
}

const TextEmailStyle = {
    marginTop: 4,
}