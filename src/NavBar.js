import './App.css';
import NavLink from './NavLink.js';
import {navList} from './navList.js';

export default function NavBar() {
    return(
        <div className='w-full border-b-4 border-yellow-400'>
            <img src='https://student.ust.edu.ph/myuste/images/my_uste_banner.jpg' />
            <div className='w-full'>
                <ul>
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