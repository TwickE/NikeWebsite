import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { useEffect, useState } from 'react'
import Button from './Button'

const Nav = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false)
    const [themeMenuActive, setThemeMenuActive] = useState(false)
    const [activeTheme, setActiveTheme] = useState('system')

    const toggleDarkMode = () => {
        localStorage.theme = 'dark'
        setThemeMenuActive(!themeMenuActive)
        setActiveTheme('dark')
    }

    const toggleLightMode = () => {
        localStorage.theme = 'light'
        setThemeMenuActive(!themeMenuActive)
        setActiveTheme('light')
    }

    const toggleSystemMode = () => {
        localStorage.removeItem('theme')
        setThemeMenuActive(!themeMenuActive)
        setActiveTheme('system')
    }

    useEffect(() => {
        document.documentElement.classList.toggle(
            'dark',
            localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        )
    }, [themeMenuActive])

    return (
        <>
            <header className='padding-x py-8 absolute z-10 w-full dark:bg-slate-900'>
                <nav className='flex justify-between items-center max-container'>
                    <a href="/"><img src={headerLogo} alt="Nike Logo" width={130} height={29} /></a>
                    <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden'>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray dark:text-slate-100'>{item.label}</a>
                            </li>
                        ))}
                        <Button label='Theme' onPress={() => (setThemeMenuActive(!themeMenuActive))} />
                    </ul>
                    <div className='hidden max-lg:flex items-center gap-4 cursor-pointer'>
                        <Button label='Theme' onPress={() => (setThemeMenuActive(!themeMenuActive), setMobileMenuActive(false))} />
                        <button onClick={() => (setMobileMenuActive(!mobileMenuActive), setThemeMenuActive(false))}>
                            <svg viewBox="0 0 448 512" width={25} height={25} className="fill-black dark:fill-slate-100">
                                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
            {mobileMenuActive && (
                <nav className='padding-x mt-24 absolute z-20 w-full flex justify-end'>
                    <ul className='w-full h-fit bg-gray-100 rounded-lg dark:bg-black'>
                        {navLinks.map((item) => (
                            <li key={item.label} onClick={() => (setMobileMenuActive(!mobileMenuActive))} className={`w-full text-end px-5 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 ${item.label === 'Home' ? 'rounded-t-lg' : (item.label === 'Contact Us' ? 'rounded-b-lg' : '')}`}>
                                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray dark:text-slate-100'>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
            {themeMenuActive && (
                <div className='padding-x mt-24 absolute z-20 w-full'>
                    <div className='max-container flex justify-end'>
                        <div className='w-fit h-fit bg-gray-100 rounded-lg dark:bg-black max-lg:mr-[calc(25px+1rem)]'>
                            <span className={`flex gap-4 px-5 py-2 rounded-t-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 ${activeTheme === 'light' ? 'fill-coral-red text-coral-red' : 'fill-slate-gray text-slate-gray dark:fill-slate-100 dark:text-slate-100'}`} onClick={() => toggleLightMode()}>
                                <svg viewBox="0 0 512 512" width={24} height={24}>
                                    <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                                </svg>
                                Light
                            </span>
                            <span className={`flex gap-4 px-5 py-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 ${activeTheme === 'dark' ? 'fill-coral-red text-coral-red' : 'fill-slate-gray text-slate-gray dark:fill-slate-100 dark:text-slate-100'}`} onClick={() => toggleDarkMode()}>
                                <svg viewBox="0 0 384 512" width={24} height={24}>
                                    <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                                </svg>
                                Dark
                            </span>
                            <span className={`flex gap-4 px-5 py-2 rounded-b-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 ${activeTheme === 'system' ? 'fill-coral-red text-coral-red' : 'fill-slate-gray text-slate-gray dark:fill-slate-100 dark:text-slate-100'}`} onClick={() => toggleSystemMode()}>
                                <svg viewBox="0 0 640 512" width={24} height={24}>
                                    <path d="M384 96l0 224L64 320 64 96l320 0zM64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64l117.3 0-10.7 32L96 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-74.7 0-10.7-32L384 384c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L64 32zm464 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0zm16 64l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                </svg>
                                System
                            </span>
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default Nav