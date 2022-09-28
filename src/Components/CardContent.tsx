import { useEffect } from "react";
import { useCardsContent } from "../Hooks/useCardsContent";
import { CardComments } from "./CardComments";

export const CardContentComments = () => {
  const { getComments, comments } = useCardsContent();
  useEffect(() => {
    getComments();
  }, []);
  return (
    <>
      {comments.map(({ id, content, createdAt, score, user, replies }) => {
        return (
          <CardComments
            key={id}
            content={content}
            createdAt={createdAt}
            user={user}
            score={score}
            cardId={id}
            replies={replies}
          />
        );
      })}
    </>
  );
};
