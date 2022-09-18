export type TImage = {
  png: string;
  webp: string;
};

export type repliesObj = {
  id: number;
  content: string;
  createdAt: string;
  replyingTo: string;
  user: {
    image: TImage;
    username: string;
  };
};

export type TComments = {
  id: number;
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