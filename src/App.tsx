import { Container } from "@mui/material";

import { Provider } from "react-redux";
import { store } from "./Store/store";
import { CardAddComments, CardContentComments } from "./Components";

function App() {
  return (
    <Provider store={store}>
      <Container fixed>
        <CardContentComments />
        <CardAddComments buttonName={"SEND"} />
      </Container>
    </Provider>
  );
}

export default App;
