import React from 'react';
import styles from './Logo.module.scss';
import { audiowide } from '@/app/fonts';

export const Logo: React.FC = () => {
    return (
        <div className={`${styles.logo} ${audiowide.className}`}>
            R2N
        </div>
    );
};