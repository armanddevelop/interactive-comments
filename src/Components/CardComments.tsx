import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@mui/material";
import { TCurrentUser } from "../../types/types";
type CardCommentsProps = {
  content: string;
  createdAt: string;
  user: TCurrentUser;
};
export const CardComments = ({
  content,
  createdAt,
  user,
}: CardCommentsProps) => {
  return (
    <Card sx={{ maxWidth: 1200, marginTop: 3 }} variant="outlined">
      <CardHeader
        title={user.username}
        subheader={createdAt}
        avatar={<Avatar src={user.image.png} alt={user.username} />}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};
