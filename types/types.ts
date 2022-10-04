export type TImage = {
  png: string;
  webp: string;
};

export type repliesObj = {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: {
    image: TImage;
    username: string;
  };
};

export type TComments = {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: TImage;
    username: string;
  };
  replies: Array<repliesObj>;
};

export type TCurrentUser = {
  image: TImage;
  username: string;
};

export type stateComments = {
  comments: {
    currentUser: TCurrentUser;
    comments: Array<TComments>;
  };
};
export type commentEdit = {
  comment: string;
  commentIdToEdit: string;
  typeContent: string;
};

export type CommentInfoToDelete = {
  id: string;
  typeComment: string;
};

export type CommentInfo = {
  id: string;
  dateCreation: string;
  comment: string;
  typeComment: string;
  replyingTo?: string;
};
