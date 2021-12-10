import React from 'react';
import Text from './Text'

import '../styles/button.style.css';


const Button = ({onClick, ...props}) => {
    return (
        <div className="button-container">
            <Text size="18" color="#f8f8ff" weight="1000">{props.children}</Text>
        </div>
    )
}

export default Button;