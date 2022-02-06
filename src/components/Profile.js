import styled from 'styled-components';

const DivProfile = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background-color: red;
`;

function Profile(props) {
    const user = props.user;
    return <DivProfile>
      <div className="description">
        <img
            src={user.avatar}
            alt="User avatar"
            className="avatar"
        />
        <p className="name">{user.username}</p>
        <p className="tag">{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>
      <ul className="stats">
        <li>
            <span className="label">Followers</span>
            <span className="quantity">{user.stats.followers}</span>
        </li>
        <li>
            <span className="label">Views</span>
            <span classname="quantity">{user.stats.views}</span>
        </li>
        <li>
            <span className="label">Likes</span>
            <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
</DivProfile>
}

export default Profile;