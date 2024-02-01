import './App.css';
import NavLink from './NavLink.js';
import {navList} from './navList.js';

export default function NavBar() {
    return(
        <div className='w-full'>
            <div className='w-full h-min border-b-4 border-yellow-400'>
                <img src='https://student.ust.edu.ph/myuste/images/my_uste_banner.jpg' alt=''/>
            </div>
            <div className='w-full'>
                <ul className='flex flex-row bg-navCustomLinkBg h-10'>
                    <li className='p-2 flex items-center justify-center bg-white w-10'>
                        <img src='./assets/megaphone.svg' className='text-white font-bold text-navCustomFontSize font-poppins rotate-45' alt='announcements'></img>
                    </li>
                    {navList.map((nav) => (
                        // <Pizza //Type 1
                        // imgSrc = {pizza.imageSrc}
                        // name = {pizza.name}
                        // description = {pizza.description}
                        // price = {pizza.price}
                        // />
                        <NavLink navObj={nav} key={nav.title}/>
                    ))}
                </ul>
                
            </div>
        </div>
    );
};