import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import {useState, useEffect} from 'react'
import axios from '../../axios'

export default function Feed({username}) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      console.log('true')
      const res = username 
      ? await axios.get('posts/profile/' + username)
      : await axios.get('posts/timeline/61d9449e8617bd7554dda32e') 
      setPosts(res.data)
    }
    fetchPosts()
  }, [username])

  console.log("This is the user post", posts)

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
