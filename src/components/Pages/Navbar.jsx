import React from "react";

import Logo from '../../assets/smartzone.svg';

import '../../App.css';
import './style.css';

function Navbar() {
    return (
        <div>
            <header className="sticky top-0 z-50 py-8 flex justify-center items-center bg-[var(--black-theme-background-color)]"> {/*bg-[var(--black-theme-background-color)]*/}
                {/* SMARTZONE LOGO */}
                
                
                {/* SEARCHBAR */}
                <div className="search-container flex items-center rounded-md overflow-hidden border border-[var(--black-theme-searchbar-background-color)] bg-[var(--black-theme-searchbar-background-color)]">
                    <input
                        type="text"
                        placeholder="Czego szukasz?"
                        className="px-4 py-2 focus:outline-none w-120 text-[var(--black-theme-text-color)] bg-transparent"
                    />

                    <div className="h-6 border-l border-[var(--black-theme-text-color)] ml-1 bg-transparent"></div>

                    <select className="select-wrapper px-4 py-2 focus:outline-none bg-transparent ">
                        <option className="option-wrapper">Wszędzie</option>
                        <option className="option-wrapper">Kategoria 1</option>
                        <option className="option-wrapper">Kategoria 2</option>
                        {/* AUTOINCREMENT */}
                    </select>

                    <button className="text-gray-800 bg-[var(--black-theme-interaction-background-color)] w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--black-theme-interaction-background-hover-color)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </button>
                
                </div>
            </header>
        </div>
    );
}

export default Navbar;