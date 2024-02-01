import './App.css'; 

export default function NavLink(props) {
    return (
        <li className='p-2 px-3 border border-black flex items-center justify-center'>
            <a className='text-white font-medium text-navCustomFontSize font-poppins' href='www.example.com'>{props.navObj.title}</a>
        </li>
    );
};