import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'

const Nav = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false)

    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/"><img src={headerLogo} alt="Nike Logo" width={130} height={29} /></a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <button onClick={() => (setMobileMenuActive(!mobileMenuActive))} className='hidden max-lg:block cursor-pointer'>
                    <img src={hamburger} alt="mobile menu icon" width={25} height={25} />
                </button>
            </nav>
            {mobileMenuActive && (
                <nav className='w-full bg-white py-5'>
                    <ul className='flex items-end flex-col gap-3'>
                        {navLinks.map((item) => (
                            <li key={item.label} onClick={() => (setMobileMenuActive(!mobileMenuActive))}>
                                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default Nav