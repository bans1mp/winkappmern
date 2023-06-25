import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState , useEffect, useContext} from 'react';
import axios from "axios" ;
import {format} from "timeago.js" ;
import {Link } from "react-router-dom" ;
import { AuthContext } from '../../context/AuthContext';

const Post = ({post}) => {
  const [like , setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER ;
  const {user: currentUser} = useContext(AuthContext) ;

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id))
  }, [currentUser._id , post.likes])

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`) ;
      setUser(res.data) ;
    }
    fetchUser() ;
    
  } , [post.userId])

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like" , {userId: currentUser._id}) ;
    } catch (error) {
      console.log(error);
    }
    setLike(isLiked ? like - 1 : like + 1) ;
    setIsLiked(!isLiked) ;
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
              <Link to={`profile/${user.username}`}>

                <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} className='postProfileImg' alt="" />
              </Link>
                <span className="postUsername">
                  {user.username}
                </span>
                <span className="postDate">{format(post.createdAt)}</span>
            </div>
            <div className="postTopRight">
                <MoreVertIcon/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={PF+post.img} crossOrigin="anonymous" alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src={`${PF}like.png`} alt="" onClick={likeHandler}/>
                <img className="likeIcon" src={`${PF}heart.png`} alt="" onClick={likeHandler}/>
                <span className="likeCounter">{like} people like this post</span>
            </div>
            <div className="postBottomRight">
                <span className='postCommentText'>{post.comment} Comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
