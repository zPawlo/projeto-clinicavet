import { useEffect, useState } from "react";
import { getApprovedComments } from "../services/commentService";

function CommentList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setComments(getApprovedComments());
  }, []);

  return (
    <div>
      <h3>Comentários Publicados</h3>
      {comments.length === 0 && <p>Nenhum comentário aprovado ainda.</p>}
      {comments.map((c) => (
        <p key={c.id}>{c.text}</p>
      ))}
    </div>
  );
}

export default CommentList;