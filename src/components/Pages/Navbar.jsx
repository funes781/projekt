import React, { useState } from "react";

import LogoDark from '../../assets/smartzone_dark.svg';
import LogoLight from '../../assets/smartzone_light.svg';

import '../../App.css';
import './style.css';

// bg-[var(--black-theme-background-color)]
function Navbar() {
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    return (
        <div>
            <header className="sticky top-0 z-50 py-8 flex items-center shadow-md bg-[var(--black-theme-background-color)]">
                {/* SMARTZONE LOGO */}
                <div className="ml-4 lg:ml-40">
                    <img src={LogoLight} alt="Smartzone Logo" className="h-8 w-full" />
                </div>

                {/* SEARCHBAR */}
                <div className={`relative mx-auto lg:mx-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 rounded-md ${isInputFocused ? 'shadow-[0px_0px_5px_2px_var(--black-theme-background-color2)]' : ''}`}>
                    <div className={`search-container flex items-center rounded-md overflow-hidden border ${isInputFocused ? 'bg-[var(--black-theme-background-color)] border-[var(--black-theme-background-color)]' : "bg-[var(--black-theme-searchbar-background-color)] border-[var(--black-theme-searchbar-background-color)]"}`}>
                        <input
                            type="text"
                            placeholder="Czego szukasz?"
                            className="px-4 py-2 focus:outline-none w-full lg:w-100 text-[var(--black-theme-text-color)] bg-transparent"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />

                        <div className="h-6 border-l border-[var(--black-theme-text-color)] ml-1 bg-transparent"></div>

                        <button className="select-wrapper px-4 py-2 focus:outline-none bg-transparent cursor-pointer">Wszystko</button>

                        <button className="text-gray-800 bg-[var(--black-theme-interaction-background-color)] w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--black-theme-interaction-background-hover-color)] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* NAVBAR BUTTONS - DESKTOP */}
                <div className="hidden mr-4 items-center lg:flex lg:absolute lg:right-4 lg:top-1/2 lg:-translate-y-1/2 lg:mr-40 ">
                    <div className="flex items-center">
                        <div className="mr-2 flex items-start py-2 px-2 hover:bg-[var(--black-theme-searchbar-background-color)] hover:rounded-md cursor-pointer">
                            <div className="mr-2">
                                <span className="text-[var(--black-theme-text-color)] block text-xs text-right">Cześć,</span>
                                <span className="text-[var(--black-theme-text-color)] block text-xs">Zaloguj się</span>
                            </div>
                            <svg className="icon-theme-dark" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path d="M13.1 15.79C11.772 14.51 11 12.35 11 10c0-3.5 1.875-6 5-6s5 2.5 5 6c0 2.35-.772 4.51-2.1 5.79.365.632.672 1.075.954 1.356.488.49 1.067.792 2.26 1.253l.384.148.395.153c.305.121.565.23.815.346C25.545 19.887 27 22.143 27 24.5a.5.5 0 0 1-.146.354C25.744 25.964 20.217 27 16 27c-4.216 0-9.743-1.036-10.854-2.146A.5.5 0 0 1 5 24.5c0-2.356 1.455-4.613 3.292-5.454.25-.115.51-.225.815-.346a40.51 40.51 0 0 1 .78-.301c1.192-.46 1.77-.764 2.26-1.253.281-.281.588-.724.953-1.355zm.797.62c-.377.641-.707 1.107-1.043 1.444-.617.617-1.29.97-2.608 1.478l-.385.148-.385-.15c-.29.115-.535.218-.768.325-1.423.652-2.611 2.434-2.702 4.314C7.212 25.091 12.238 26 16 26c3.762 0 8.788-.909 9.994-1.73-.09-1.881-1.279-3.663-2.702-4.316a16.666 16.666 0 0 0-.768-.324 37.747 37.747 0 0 0-.385-.15l-.385-.148c-1.318-.509-1.99-.861-2.608-1.478-.336-.337-.666-.803-1.043-1.444A3.99 3.99 0 0 1 16 17a3.99 3.99 0 0 1-2.103-.59zM16 5c-2.5 0-4 2-4 5 0 3.26 1.644 6 4 6s4-2.74 4-6c0-3-1.5-5-4-5z"></path></svg>
                        </div>

                        <div className="mr-2 flex items-start py-2 px-2 hover:bg-[var(--black-theme-searchbar-background-color)] hover:rounded-md cursor-pointer">
                            <svg className="icon-theme-dark" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path d="M16.5 5a9.502 9.502 0 0 1 9.425 8.302A3.501 3.501 0 0 1 28 16.5v2a3.5 3.5 0 0 1-3.2 3.487 9.007 9.007 0 0 1-7.843 5.502 1.498 1.498 0 0 1-1.689.702l-1.932-.517a1.5 1.5 0 1 1 .777-2.898l1.932.518a1.5 1.5 0 0 1 1.088 1.18 8 8 0 0 0 6.603-4.558A3.5 3.5 0 0 1 21 18.5v-2a3.5 3.5 0 0 1 1.905-3.116 6.502 6.502 0 0 0-12.81 0A3.5 3.5 0 0 1 12 16.5v2a3.5 3.5 0 1 1-7 0v-2c0-1.401.831-2.643 2.075-3.198A9.502 9.502 0 0 1 16.5 5zm-3.258 21.095a.5.5 0 0 0 .353.613l1.932.517a.5.5 0 1 0 .259-.966l-1.932-.517a.5.5 0 0 0-.612.353zM16.5 6a8.501 8.501 0 0 0-8.463 7.704l-.03.323-.308.104A2.501 2.501 0 0 0 6 16.5v2a2.5 2.5 0 0 0 5 0v-2a2.501 2.501 0 0 0-1.628-2.344l-.367-.136.045-.39a7.501 7.501 0 0 1 14.9 0l.045.39-.367.136A2.501 2.501 0 0 0 22 16.5v2a2.5 2.5 0 0 0 5 0v-2c0-1.08-.692-2.029-1.699-2.37l-.308-.103-.03-.323A8.501 8.501 0 0 0 16.5 6z"></path></svg>
                        </div>

                        <div className="mr-2 flex items-start py-2 px-2 hover:bg-[var(--black-theme-searchbar-background-color)] hover:rounded-md cursor-pointer">
                            <svg className="icon-theme-dark" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path fill-rule="evenodd" d="M22 21a3 3 0 1 1-2.236 1h-5.528a3 3 0 1 1-2.844-.938L8.098 6H4.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .488.393L9.558 8H25.5a.5.5 0 0 1 .488.608l-2 9A.5.5 0 0 1 23.5 18H11.746l.656 3H22zm2.877-12l-1.778 8H11.527l-1.75-8h15.1zM12 22a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path></svg>
                        </div>
                    </div>
                </div>

            </header>

            {/* NAVBAR BUTTONS - MOBILE/TABLET */}
            <nav className="fixed bottom-0 left-0 w-full bg-[var(--black-theme-background-color)] shadow-lg z-50 flex justify-around items-center py-1 sm:hidden md:hidden lg:hidden">
                <div className="flex items-center">
                    {/* HOME */}
                    <div className="mr-2 flex flex-col items-start py-2 px-2 hover:bg-[var(--black-theme-searchbar-background-color)] hover:rounded-md cursor-pointer">
                        <svg className="icon-theme-dark" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path d="M4 9.5L.5 13H3v9h7v-6h4v6h7v-9h2.5L12 1.5l-4 4V3H4zM5 4h2v3.914l5-5L21.086 12H20v9h-5v-6H9v6H4v-9H2.914L5 9.914z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
                        <span className="text-[var(--black-theme-text-color)] block text-xs text-center">Start</span>
                    </div>

                    {/* SEARCH */}
                    <div className="mr-2 flex flex-col items-center py-2 px-2 hover:bg-[var(--black-theme-searchbar-background-color)] hover:rounded-md cursor-pointer">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9982 18.9497C20.3592 17.5764 21.2 15.6863 21.2 13.6C21.2 9.40264 17.7974 6 13.6 6C9.40264 6 6 9.40264 6 13.6C6 17.7974 9.40264 21.2 13.6 21.2C15.711 21.2 17.6209 20.3393 18.9982 18.9497ZM18.9982 18.9497L25 25" stroke="var(--black-theme-interaction-background-hover-color)" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        <span className="text-[var(--black-theme-text-color)] block text-xs text-center">Szukaj</span>
                    </div>

                    {/* CART */}
                    <div className="mr-2 flex flex-col items-start py-2 px-2 hover:bg-[var(--black-theme-searchbar-background-color)] hover:rounded-md cursor-pointer">
                        <svg className="icon-theme-dark" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path fill-rule="evenodd" d="M22 21a3 3 0 1 1-2.236 1h-5.528a3 3 0 1 1-2.844-.938L8.098 6H4.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .488.393L9.558 8H25.5a.5.5 0 0 1 .488.608l-2 9A.5.5 0 0 1 23.5 18H11.746l.656 3H22zm2.877-12l-1.778 8H11.527l-1.75-8h15.1zM12 22a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path></svg>
                        <span className="text-[var(--black-theme-text-color)] block text-xs text-center">Koszyk</span>
                    </div>

                    {/* ACCOUNT */}
                    <div className="mr-2 flex flex-col items-start py-2 px-2 hover:bg-[var(--black-theme-searchbar-background-color)] hover:rounded-md cursor-pointer">
                        <svg className="icon-theme-dark" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path d="M13.1 15.79C11.772 14.51 11 12.35 11 10c0-3.5 1.875-6 5-6s5 2.5 5 6c0 2.35-.772 4.51-2.1 5.79.365.632.672 1.075.954 1.356.488.49 1.067.792 2.26 1.253l.384.148.395.153c.305.121.565.23.815.346C25.545 19.887 27 22.143 27 24.5a.5.5 0 0 1-.146.354C25.744 25.964 20.217 27 16 27c-4.216 0-9.743-1.036-10.854-2.146A.5.5 0 0 1 5 24.5c0-2.356 1.455-4.613 3.292-5.454.25-.115.51-.225.815-.346a40.51 40.51 0 0 1 .78-.301c1.192-.46 1.77-.764 2.26-1.253.281-.281.588-.724.953-1.355zm.797.62c-.377.641-.707 1.107-1.043 1.444-.617.617-1.29.97-2.608 1.478l-.385.148-.385-.15c-.29.115-.535.218-.768.325-1.423.652-2.611 2.434-2.702 4.314C7.212 25.091 12.238 26 16 26c3.762 0 8.788-.909 9.994-1.73-.09-1.881-1.279-3.663-2.702-4.316a16.666 16.666 0 0 0-.768-.324 37.747 37.747 0 0 0-.385-.15l-.385-.148c-1.318-.509-1.99-.861-2.608-1.478-.336-.337-.666-.803-1.043-1.444A3.99 3.99 0 0 1 16 17a3.99 3.99 0 0 1-2.103-.59zM16 5c-2.5 0-4 2-4 5 0 3.26 1.644 6 4 6s4-2.74 4-6c0-3-1.5-5-4-5z"></path></svg>
                        <span className="text-[var(--black-theme-text-color)] block text-xs text-center">Konto</span>
                    </div>

                    {/* MORE OPTIONS */}
                    <div className="mr-2 flex flex-col items-start py-2 px-2 hover:bg-[var(--black-theme-searchbar-background-color)] hover:rounded-md cursor-pointer">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 26C21.5 26 26 21.5 26 16C26 10.5 21.5 6 16 6C10.5 6 6 10.5 6 16C6 21.5 10.5 26 16 26Z" stroke="var(--black-theme-interaction-background-hover-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.9965 16H20.0054" stroke="var(--black-theme-interaction-background-hover-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.9955 16H16.0045" stroke="var(--black-theme-interaction-background-hover-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.9945 16H12.0035" stroke="var(--black-theme-interaction-background-hover-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="text-[var(--black-theme-text-color)] block text-xs text-center">Więcej</span>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;