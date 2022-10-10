import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const List = styled.div`
	width: 100%;
	height: 100%;
	background: lightblue;
	padding: 20px 10px;
	margin: 0 auto;
	overflow-y: scroll;
`;

const TodoList = () => {
	return (
		<List>
			<TodoListItem />
		</List>
	);
};

export default TodoList;
