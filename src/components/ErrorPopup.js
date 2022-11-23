import { CloseRounded, WarningAmberRounded } from '@mui/icons-material'
import React from 'react'
import PropTypes from 'prop-types'

const ErrorPopup = ({ detail, onDismiss }) => {
    return (
        <div style={PopupStyle}>
            <div style={ContentStyle}>
                <WarningAmberRounded style={{ marginBottom: '8px', fontSize: '40' }} />
                {detail}
            </div>
            <div onClick={onDismiss}><CloseRounded fontSize='small' /></div>
        </div>

    )
}

ErrorPopup.propTypes = {
    detail: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired,
};

const PopupStyle = {
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

const ContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
}

export default ErrorPopup;