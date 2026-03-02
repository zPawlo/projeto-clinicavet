import { useState } from "react";
import { addComment } from "../services/commentService";

function CommentForm() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addComment(text);
    setText("");
    alert("Comentário enviado para aprovação!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Digite seu comentário"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default CommentForm;