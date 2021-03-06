import styled from 'styled-components/native';
import {StyleSheet, Animated} from 'react-native';

export const Container = styled.TouchableOpacity`
  background-color:#3E3B47;
  height:100px;
  margin:5px;
  flex-direction:row;
  border-radius:2px;
`;

export const Color = styled.View`
  background-color:#FFF;
  width:10px;
  height:100%;
  border-bottom-left-radius:2px;
  border-top-left-radius:2px;
`;

export const Content = styled.View`
  flex:1;
  margin:10px;
`;

export const Title = styled.Text`
  color:#FFF;
  font-weight:bold;
  font-size:16px;
`;