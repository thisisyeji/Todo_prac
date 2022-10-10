import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const List = styled.div`
	width: 100%;
	height: 300px;
	background: lightblue;
	padding: 0 10px;
	margin: 0 auto;
	overflow-y: scroll;
`;

const TodoList = ({ todos, onDelete }) => {
	return (
		<List>
			{todos.map((todo, index) => (
				<TodoListItem key={todo.id} todo={todo} onDelete={onDelete} />
			))}
		</List>
	);
};

export default TodoList;
