import React from 'react'
import logo from '../assets/logo.jpg'
import { navItems } from '../constants'

const navbar = () => {
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-center items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
                        <span className="text-xl tracking-tight">Ciberseguridad UNI</span>

                        <ul className="hidden lg:flex ml-14 space-x-6">
                            {navItems.map((item, index) =>
                            (
                                <li key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default navbar
