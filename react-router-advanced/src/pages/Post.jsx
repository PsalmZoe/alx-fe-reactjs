import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams();
  return <h1>Viewing Post ID: {postId}</h1>;
}

export default Post;
