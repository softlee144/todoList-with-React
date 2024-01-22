import styled from "@emotion/styled";
import { Title } from "components/Title";
import { Button } from "components/Button";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  return (
    <Container>
      <Title label="할 일 목록" />
      <Button label="삭제" />
    </Container>
  );
}

export default App;
