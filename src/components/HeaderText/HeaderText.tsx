import React from 'react';
import '../../styles/App.css';
import styles from './HeaderText.module.css'

interface IHeaderTextProps {
    title: string
}

const HeaderText = ({ title }: IHeaderTextProps) => {
    return (
        <div className={styles.header}>
            <h1>{title}</h1>
        </div>
    )
}

export default HeaderText;