import React, { useState } from 'react'
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.png'
import { navItems } from '../constants'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative lg:text-sm">
                <div className="flex justify-between items-center">
                    {/* Logo a la izquierda */}
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
                        <span className="text-xl tracking-tight">Ciberseguridad UNI</span>
                    </div>
                    {/* Items al centro */}
                    <ul className="hidden lg:flex flex-1 justify-center space-x-10">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    {/* Botón a la derecha */}
                    <div className="hidden lg:flex items-center">
                        <a href="#" className='bg-gradient-to-r from-green-500 to-green-400 text-black px-4 py-2 rounded-md'>
                            Iniciar Sesion
                        </a>
                    </div>
                    <div className="lg:hidden md:flex-col-justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#" className="bg-gradient-to-r from-green-500 to-green-400 py-2 px-3 border rounded-md">
                                Iniciar Sesion
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar