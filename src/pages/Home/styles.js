import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import {Animated} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #312E38;
  padding-top: ${getStatusBarHeight}px;
  justify-content:flex-end;
`;

export const Card = styled.FlatList`
	flex:1;
	background: #232129;
	border-radius: 4px;
	margin: 0 20px;
	height: 100%;
	position: absolute;
	left: 0;
	right: 0;
	top: 0px;
`;
