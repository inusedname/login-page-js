import { CloseRounded, WarningAmberRounded } from '@mui/icons-material'
import React from 'react'

const ErrorPopup = ({ detail, onDismiss }) => {
    return (
        <div style={ContainerStyle}>
            <div className="error-popup" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <WarningAmberRounded fontSize='large' style={{ marginBottom: '8px' }} />
                {detail}
            </div>
            <div className="bt-close" onClick={onDismiss}><CloseRounded fontSize='small' /></div>
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