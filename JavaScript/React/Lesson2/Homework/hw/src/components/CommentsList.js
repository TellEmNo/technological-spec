import React, { useRef, useState } from 'react';
import './commentsListStyle.css';

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
  ]);
  const [newComment, setNewComment] = useState("");
  const idCounter = useRef(comments.length + 1);

  const addComment = () => {
    if (newComment.trim()) {
      const newCommentObj = { id: idCounter.current, text: newComment };
      idCounter.current++;
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  }

  return (
    <div>
      <h2>Список комментариев:</h2>

      <input
        type="text"
        className="commentInput"
        placeholder="Введите комментарий"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button className='addBtn' onClick={addComment}>Добавить</button>

      <ul>
        {comments.map(comment => (
          <li className='comment' key={comment.id}>
            <div className='upperFloor'>
              <div></div>
              <button className='deleteBtn' onClick={() => deleteComment(comment.id)}>✖</button>
            </div>
            <div className='lowerFloor'>
              <p className='commentText'>{comment.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;