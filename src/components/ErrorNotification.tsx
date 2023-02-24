import React from 'react'

interface ErrorNotificationProps {
    message: string;
    onDismiss: () => void;
}

class ErrorNotification extends React.Component<ErrorNotificationProps> {

    render(): React.ReactNode {
        const { message, onDismiss } = this.props
        return (
            <div className='error-notification'>
                <p>{message}</p>
                <button onClick={onDismiss}>Dismiss</button>
            </div>
        )
    }
}