function FriendList(props) {
    const friends = props.friends;
    const viewFriends = friends.map((friend) =>
        <li key={friend.id} className="item">
            <span className="status"></span>
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
        </li>
    );

    return <ul>
        {viewFriends}
    </ul>
}

export default FriendList;