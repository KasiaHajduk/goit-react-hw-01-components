import styles from "./FriendList.module.css";
import { FaCircle } from 'react-icons/fa';
import PropTypes from "prop-types";


function FriendList(props) {
    const friends = props.friends;
    const viewFriends = friends.map((friend) =>
        <li key={friend.id} className={styles.item}>
            <span className={(friend.isOnline==true) ? styles.status_on : styles.status_off}><FaCircle /></span>
            <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{friend.name}</p>
        </li>
    );

    return <ul className={styles.list}>
        {viewFriends}
    </ul>
}


FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.boolean.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendList;