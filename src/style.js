import styled from "styled-components";

// Estilos com Styled Components
export const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
`;

export const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  height: 100px;
`;

export const Button = styled.button`
  padding: 10px;
  width: 100%;
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? '#ddd' : '#4CAF50')};
  color: white;
  border: none;
  font-size: 16px;
  
  &:hover {
    background-color: ${(props) => (props.disabled ? '#ddd' : '#45a049')};
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const Heading = styled.h2`
  margin-top: 20px;
`;

export const MessageList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const MessageItem = styled.li`
  background-color: #f4f4f4;
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
`;