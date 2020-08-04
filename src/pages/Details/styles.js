import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import {Animated} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #312E38;
  padding-top: ${getStatusBarHeight}px;
  justify-content:flex-end;
`;

export const Content = styled.View`
	flex: 1;
	max-height: 500px;
	z-index: 5;
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

export const CardHeader = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
`;

export const CardContent = styled.View`
	flex: 1;
	padding: 0 30px;
	justify-content: center;
`;

export const Title = styled.Text`
	font-size: 13px;
	color: #999;
`;

export const Description = styled.Text`
	font-size: 32px;
	margin-top: 3px;
	color: #666;
`;

export const CardFooter = styled.View`
	padding: 30px;
	background: #EEE;
	border-radius: 4px;
`;

export const Annotation = styled.Text`
	font-size: 12px;
	color: #333;
`;