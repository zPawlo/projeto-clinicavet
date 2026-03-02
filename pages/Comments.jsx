import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import AdminPanel from "../components/AdminPanel";

function Comments() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Aba de Comentários</h2>
      <CommentForm />
      <CommentList />
      <AdminPanel />
    </div>
  );
}

export default Comments;