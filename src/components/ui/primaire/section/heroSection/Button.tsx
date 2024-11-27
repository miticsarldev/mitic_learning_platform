import * as React from 'react';
import { ButtonProps } from './type';

export const Button: React.FC<ButtonProps> = ({ text, variant }) => (
    <div
        role="button"
        tabIndex={0}
        className={`px-6 py-3.5 rounded-[80px] shadow-[0px_20px_24px_rgba(0,0,0,0.03)] flex justify-center items-center ${variant === 'primary'
                ? 'text-white bg-violet-800'
                : 'text-zinc-600 bg-white'
            }`}
    >
        {text}
    </div>
);