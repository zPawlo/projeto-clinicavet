import { useEffect, useState } from "react";
import {
  getPendingComments,
  approveComment,
  type Comment,
} from "../services/commentService";

function AdminPanel(): TSX.Element {
  const [pending, setPending] = useState<Comment[]>([]);

  useEffect(() => {
    setPending(getPendingComments());
  }, []);

  const handleApprove = (id: number): void => {
    approveComment(id);
    setPending(getPendingComments());
    alert("Comentário aprovado!");
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Painel do Admin</h3>

      {pending.length === 0 && <p>Nenhum comentário pendente.</p>}

      {pending.map((c: Comment) => (
        <div key={c.id}>
          <p>{c.text}</p>
          <button onClick={() => handleApprove(c.id)}>
            Aprovar
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;