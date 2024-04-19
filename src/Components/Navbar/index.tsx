import { NavLink } from 'react-router-dom';
import './navbar.css';

export const NavBar = ()=> {

    return (
        <nav className='flex justify-between items-center z-10 top-0 w-full py-5 p-8 font-light bg-slate-900 text-white'>
            <ul className=' flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink  to={'/'} 
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/clothes'}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/electronics'}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/furnitures'}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/toys'}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/others'}>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-2'>
                <li className='text-black/40'>
                    user@mail.com
                </li>
                <li>
                    <NavLink to={'/my-account'}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/my-orders'}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/sign-in'}>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒 0
                </li>
            </ul>
        </nav>
    )
}