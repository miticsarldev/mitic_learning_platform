import React from 'react';
import Logo from './Logo';
import MenuItem from './MenuItem';
import Button from './Buttons';

const Navbar: React.FC = () => {
    const menuItems = ['Accueil', 'Cours', 'Classe', 'Enterprise'];

    return (
        <nav className=" py-4 flex justify-between items-center">
            {/* Logo */}
            <Logo />

            {/* Menu Items */}
            <div className="flex space-x-8">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} label={item} />
                ))}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
                <Button label="Connexion" />
                <Button label="Inscription" variant="primary" />
            </div>
        </nav>
    );
};

export default Navbar;
