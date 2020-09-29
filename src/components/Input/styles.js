import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 45px;
  background: #0000001a;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #666666;
`;
