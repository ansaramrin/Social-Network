import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Friend.css';

export default function Friend() {
  const { friend } = useParams();
  const [chosenFriend, setChosenFriend] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const friends = [
      {
        img: "http://pngimg.com/uploads/stormtrooper/stormtrooper_PNG33.png",
        name: 'Alibek Altay',
        nickname: "@piromannn",
        followers: 200,
        profession: 'Surgeon'
      },
      {
        img: "http://pngimg.com/uploads/goblin/goblin_PNG32.png",
        name: 'Zhandaulet Zhakupov',
        nickname: "@nimbuss",
        followers: 100,
        profession: 'Lawyer'
      },
      {
        img: "http://pngimg.com/uploads/anime_girl/anime_girl_PNG111.png",
        name: 'Aruzhan Kozhamzharova',
        nickname: "@aruzhannn",
        followers: 500,
        profession: 'English Teacher'
      },
    ];
    const foundFriend = friends.find((person) => person.name === friend);
    if (foundFriend) {
      setChosenFriend(foundFriend);
      setErrorMessage('');
    } else {
      setErrorMessage('No friends');
    }
  }, [friend]);

  if (errorMessage) {
    return (
      <div class="alert alert-danger" role="alert">
          {errorMessage}
      </div>
    )
  }

  if (!chosenFriend) {
    return (
      <h1>
        Select your friend
      </h1>
    )
  }

  return (
    <div className="container-friends">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="our-team">
            <div className="picture">
              <img className="img-fluid" src={chosenFriend.img} />
            </div>
          <div className="team-content">
            <h3 className="name">{chosenFriend.name}</h3>
            <h3 className="nickname">{chosenFriend.nickname}</h3> <br></br>
            <h3 className="followers"><span>{chosenFriend.followers}</span> Followers</h3> <br></br>
            <h3 className="profession">{chosenFriend.profession}</h3>
          </div>
        </div>
      </div>  
    </div>
  </div>
   
  )
}

