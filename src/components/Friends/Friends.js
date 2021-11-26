import { Link, Outlet } from "react-router-dom";
import './Friends.css';

export default function Friends() {
  const friends = ['Alibek Altay', 'Zhandaulet Zhakupov', 'Aruzhan Kozhamzharova'];

  return (
    
    <div className="friends-cont">
        <ul className="tilesWrap">
          {friends.map((person) => (
            <li>
              <h3>{friends.name}</h3>
              <Link to={`/friends/${person}`}>
                {person}
              </Link>
            </li>
          ))}
        </ul>
        <div className="friend_info">
          <Outlet />
        </div>
    </div> 
    
  )
}



