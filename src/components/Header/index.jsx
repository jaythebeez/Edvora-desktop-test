import styles from './header.module.css';
import Avatar from '../../assets/Avatar.png'
import { useContext, useEffect } from 'react';
import {  UserContext  } from '../../contexts/UserContext'


const Header = () => {
    const {user} = useContext(UserContext);
    return ( 
        <header>
            <div className={styles.header_container}>
                <span className={styles.logo_container}>Edvora</span>
                <div className={styles.profile_container}>
                    <div className={styles.profile_name}>{user.name}</div>
                    <div className={styles.profile_avatar}><img src={Avatar} alt="profile avatar" /></div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;