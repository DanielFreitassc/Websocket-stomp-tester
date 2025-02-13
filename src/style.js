import styled from "styled-components";

export const TitleApiTester = styled.h1`
  text-align: center;
  margin: 20px;
`

export const Container = styled.div`
  font-family: 'Fira Code', monospace;
  background-color: #1e1e1e;
  color: #d4d4d4;
  padding: 20px;
  min-height: 100vh;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  background-color: #252526;
  border: 1px solid #3c3c3c;
  color: #d4d4d4;
  font-size: 14px;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: #007acc;
  }
`;

export const Button = styled.button`
  padding: 10px;
  width: 100%;
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? '#3c3c3c' : '#007acc')};
  color: white;
  border: none;
  font-size: 14px;
  border-radius: 4px;
  
  &:hover {
    background-color: ${(props) => (props.disabled ? '#3c3c3c' : '#005f9e')};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Section = styled.div`
  margin-bottom: 20px;
  background-color: #252526;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #3c3c3c;
`;

export const Heading = styled.h2`
  margin-top: 0;
  color: #569cd6;
  font-size: 18px;
`;

export const MessageList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const MessageItem = styled.li`
  background-color: #333;
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
  color: #9cdcfe;
  font-size: 14px;
  border-left: 4px solid #007acc;
`;

export const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  height: 100px;
  background-color: #252526;
  border: 1px solid #3c3c3c;
  color: #d4d4d4;
  font-size: 14px;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #007acc;
  }
`;
