import { CloseRounded, WarningAmberRounded } from '@mui/icons-material'
import React from 'react'
import '../styles/ErrorPopup.css'

const ErrorPopup = (props) => {
    return (
        <div style={ContainerStyle}>
            <div className="error-popup" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <WarningAmberRounded fontSize='large' style={{ marginBottom: '8px' }} />
                {props.detail}
            </div>
            <div className="bt-close" onClick={props.onDismiss}><CloseRounded fontSize='small'/></div>
        </div>

    )
}

const ContainerStyle = {
    whiteSpace: 'pre-line',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#de393d',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '14px',
    marginBottom: '10px'
}

export default ErrorPopup;