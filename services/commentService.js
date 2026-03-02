let comments = [];

export function addComment(text) {
  comments.push({
    id: Date.now(),
    text,
    approved: false
  });
}

export function getPendingComments() {
  return comments.filter(comment => !comment.approved);
}

export function approveComment(id) {
  comments = comments.map(comment =>
    comment.id === id
      ? { ...comment, approved: true }
      : comment
  );
}

export function getApprovedComments() {
  return comments.filter(comment => comment.approved);
}