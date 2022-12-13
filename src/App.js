import './App.css';
import styled from "styled-components";

const Father = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height : 100vh;
  background-color: blue;
`;
const Children = styled.div`
  max-width: 414px;
  height: 100%;
  background-color: red;
`

function App() {
  return (
    <div className="App">
      <Father>
        <Children>
            <h1>롤링페이퍼</h1>
            안녕하세요!
            안녕하세요!
            안녕하세요!
            안녕하세요!
            안녕하세요!
            안녕하세요!
            안녕하세요!
            안녕하세요!
            안녕하세요!
            안녕하세요!
            안녕하세요!
            안녕하세요!
            안녕하세요!
          </Children>
      </Father>
    </div>
  );
}

export default App;
