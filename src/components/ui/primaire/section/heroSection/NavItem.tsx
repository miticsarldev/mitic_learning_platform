import * as React from 'react';
import { NavItemProps } from './type';

export const NavItem: React.FC<NavItemProps> = ({ text }) => (
    <div className="my-auto text-white">{text}</div>
);