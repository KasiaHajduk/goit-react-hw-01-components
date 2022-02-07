import styled from 'styled-components';

const DivProfile = styled.div`
  background-color: #e7ecf2;
  text-align: center;
  height: 370px;
  padding-top: 20px;
`;

const DivDescription = styled.div`
  background-color: #ffffff;
  border: solid 1px #e2e8ef;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 250px;
  height: 260px;
  text-align: center;
  margin:0 auto;
`;

const ImgAvatar = styled.img`
  margin-top: 30px;
  width: 100px;
  border: solid 1px #e2e8ef;
  border-radius: 50px;
`;

const PName = styled.p`
  color: #000000;
  font-size: 16px;
`;

const PTag = styled.p`
  color: #a1abb6;
  font-size: 10px;
`;

const PLocation = styled.p`
  color: #a1abb6;
  font-size: 13px;
`;

const UlStats = styled.ul`
  background-color: #f3f6f9;
  margin: 0px;
  padding: 0px;
  border: solid 1px #e2e8ef;
  border-top: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 250px;
  height: 70px;
  //text-align: center;
  margin:0 auto;
  display: flex;
`;

const LiStats = styled.li`
  margin: 0px;
  padding: 0px;
  border-left: solid 1px #e2e8ef;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 83.3px;
  vertical-align: middle;
  padding-top: 15px; 
`;

const SpanLabel = styled.span`
  color: #a1abb6;
  font-size: 12px;
`;

const SpanQuantity = styled.span`
  color: #000000;
  font-size: 12px;
`;


function Profile(props) {
    const user = props.user;
    return <DivProfile>
      <DivDescription>
        <ImgAvatar
            src={user.avatar}
            alt="User avatar">
        </ImgAvatar>
        <PName>{user.username}</PName>
        <PTag>{user.tag}</PTag>
        <PLocation>{user.location}</PLocation>
      </DivDescription>
      <UlStats>
        <LiStats>
            <SpanLabel>Followers</SpanLabel>
            <SpanQuantity>{user.stats.followers}</SpanQuantity>
        </LiStats>
        <LiStats>
            <SpanLabel>Views</SpanLabel>
            <SpanQuantity>{user.stats.views}</SpanQuantity>
        </LiStats>
        <LiStats>
            <SpanLabel>Likes</SpanLabel>
            <SpanQuantity>{user.stats.likes}</SpanQuantity>
        </LiStats>
      </UlStats>
</DivProfile>
}

export default Profile;