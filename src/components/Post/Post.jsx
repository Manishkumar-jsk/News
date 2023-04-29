import "./post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { Users } from "../../dummyData";
import { MoreVert } from "@material-ui/icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <img className="postImg" src={post.photo} alt="" />
          <span className="postText">{post?.desc}</span>
        </div>
        <hr />
        <div className="postBottom">
          <div className="postBottomRight">
            <div className="postBottomIcon">
              <FontAwesomeIcon icon={faWhatsapp} style={{"padding":"10px","fontSize":"1.3rem"}} />
              <FontAwesomeIcon icon={faFacebook} style={{"padding":"10px","fontSize":"1.3rem"}} />
              <FontAwesomeIcon icon={faTwitter} style={{"padding":"10px","fontSize":"1.3rem"}} />
              <FontAwesomeIcon icon={faShareNodes} style={{"padding":"10px","fontSize":"1.3rem"}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}