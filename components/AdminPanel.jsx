import { useEffect, useState } from "react";
import {
  getPendingComments,
  approveComment,
} from "../services/commentService";

function AdminPanel() {
  const [pending, setPending] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPending(getPendingComments());
  }, []);

  const handleApprove = (id) => {
    approveComment(id);
    setPending(getPendingComments());
    alert("Comentário aprovado!");
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Painel do Admin</h3>
      {pending.length === 0 && <p>Nenhum comentário pendente.</p>}
      {pending.map((c) => (
        <div key={c.id}>
          <p>{c.text}</p>
          <button onClick={() => handleApprove(c.id)}>Aprovar</button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;