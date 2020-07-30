import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  background: #312E38;
  padding-top: ${getStatusBarHeight}px;
  justify-content:center;
  flex-direction:column;
`;

export const InputDiv = styled.View`
  background: #3E3B47;
  margin: 0 20px;
  align-items:center;
  border-radius:10px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size:22px;
  margin-top:10px;
  margin-bottom:10px;
`;

export const Input = styled.TextInput`
  background:#232129;
  width:90%;
  height:60px;
  border-radius:10px;
  margin-top:10px;
  text-align:center;
  font-size:16px;
  color:#FFF;
`;

export const Button = styled.TouchableOpacity`
  background:#FFF;
  width:90%;
  height:60px;
  border-radius:10px;
  margin-top:10px;
  font-size:16px;
  align-items:center;
  justify-content: center;
  margin-bottom:20px;
  flex-direction:row;
`;

export const ButtonText = styled.Text`
  font-size:16px;
`;