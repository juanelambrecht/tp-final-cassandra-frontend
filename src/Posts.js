import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);
  const { postId } = useParams();
  const { name } = useParams();

  useEffect(() => {
    let uri = "posts/";
    if (postId) uri += postId;
    if (name) uri += "author/" + name;

    fetch(props.apiUrl + uri)
      .then((response) => response.json())
      .then((response) => {
        setPosts(response);
      });
  }, [postId, name]);

  return (
    <span key={name}>
      {posts.map((post) => (
        <section key={post._id.$oid}>
          <header className="main">
            <h1>{post.title}</h1>
          </header>
          <h3>{post.resume}</h3>
          <p>{post.text}</p>
          <h4>Related Links</h4>
          <ul className="alt">
            {post.relatedlinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
          <h4>Tags</h4>
          <ul>
            {post.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <h4>Author</h4>
          <p>{post.author}</p>
        </section>
      ))}
      <p>
        <Link to="/">Back to Home Page</Link>
      </p>
    </span>
  );
}
