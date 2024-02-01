import './App.css';



export default function NavLink(props) {
    if (props.navObj.imgSrc == null) {
        return <a href='www.example.com' className='no-underline text-white'>{props.navObj.title}</a>

    } else {
        return <img src={props.navObj.imgSrc} alt=''/>
    }
};