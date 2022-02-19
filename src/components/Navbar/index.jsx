import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css'
import vectorImage from '../../assets/Vector.svg'
import Dropdown from '../Dropdown';
import { useState, useEffect } from 'react';


const Navbar = ({rides, addFilter}) => {
    const [dropDownOpen, setDropDownOpen] = useState(false)
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(()=>{
        rides.forEach(ride=>{
            setStates(states=>states.includes(ride.state) ? [...states]: [...states, ride.state]);
            setCities(cities=>cities.includes(ride.city) ? [...cities] : [...cities, ride.city]);
        })
    },[rides]);

    const toggleDropDown = () => {
        setDropDownOpen(dropDownOpen => !dropDownOpen);
    }

    return ( 
        <nav>
            <div className={styles.navbar}>
                <div className={styles.nav_links}>
                    <NavLink to="/"  className={ ({isActive}) => isActive ? styles.active : styles.nav_link} >Nearest Rides</NavLink>
                    <NavLink to="/upcoming"  className={ ({isActive}) => isActive ? styles.active : styles.nav_link}>Upcoming Rides</NavLink>
                    <NavLink to="/past"  className={ ({isActive}) => isActive ? styles.active : styles.nav_link}>Past Rides</NavLink>
                </div>
                <div className={styles.filter_button} onClick={toggleDropDown}> <img src={vectorImage} />Filter</div>
                {dropDownOpen && <Dropdown states={states} cities={cities} addFilter={addFilter}/>}
            </div>
        </nav>
    );
}
export default Navbar;
