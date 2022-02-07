import styles from "./FriendList.module.css";
import { FaCircle } from 'react-icons/fa';


function FriendList(props) {
    const friends = props.friends;
    const viewFriends = friends.map((friend) =>
        <li key={friend.id} className={styles.item}>
            <span className={styles.status}><FaCircle /></span>
            <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{friend.name}</p>
        </li>
    );

    return <ul className={styles.list}>
        {viewFriends}
    </ul>
}

export default FriendList;