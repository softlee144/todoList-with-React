import styled from '@emotion/styled';
import { useState } from 'react';
import { DataView } from 'components/DataView';
import { TextInput } from 'components/TextInput';
import { Button } from 'components/Button';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  // 변경되는 값은 useState로 관리
  const [toDoList, setToDoList] = useState(['리액트 공부하기', '운동하기', '책읽기']);

  const [toDo, setTodo] = useState('');

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  /*
   1. 할 일이 작성되어 있는지 검사하고
   2. 작성이 되어 있다면,  할 일 목록 State에 저장하고
   3. 할 일 State에 빈 문자열을 대입함으로써 입력창에 작성한 내용을 제거  
   */
  const onAdd = () => {
    if (toDo === ``) return;

    setToDoList([...toDoList, toDo]);
    setTodo('');
  };

  return (
    <Container>
      {/* 컴포넌트에 전달되는 값 */}
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TextInput value={toDo} onChange={setTodo} />
      <Button label="추가" color="#304FFE" onClick={onAdd} />
    </Container>
  );
}

export default App;
