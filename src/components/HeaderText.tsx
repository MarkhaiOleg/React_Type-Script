import React from 'react';
import '../styles/App.css';

interface IHeaderTextProps {
    title: string
}

const HeaderText = ({ title }: IHeaderTextProps) => {
    return (
        <div className='header'>
            <h1>{title}</h1>
        </div>
    )
}

export default HeaderText;