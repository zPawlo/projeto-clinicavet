export interface Comment {
  id: number;
  text: string;
  approved: boolean;
}

let comments: Comment[] = [];

export function addComment(text: string): void {
  comments.push({
    id: Date.now(),
    text,
    approved: false,
  });
}

export function getPendingComments(): Comment[] {
  return comments.filter((comment) => !comment.approved);
}

export function approveComment(id: number): void {
  comments = comments.map((comment) =>
    comment.id === id
      ? { ...comment, approved: true }
      : comment
  );
}

export function getApprovedComments(): Comment[] {
  return comments.filter((comment) => comment.approved);
}