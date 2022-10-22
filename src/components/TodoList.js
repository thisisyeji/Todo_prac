import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const List = styled.div`
	width: 40%;
	height: 350px;
	background: hsl(235, 24%, 19%);
	border-radius: 4px;
	margin: 0 auto;
	overflow-y: scroll;
`;

const Total = styled.div`
	color: hsl(234, 39%, 85%);
	text-align: right;
	border-top: 1px solid hsl(234, 39%, 85%);
	margin-top: 10px;
	padding: 15px 10px;
`;

const TodoList = ({ todos, onDelete, onToggle, onUpdate }) => {
	return (
		<>
			<List>
				{todos.map((todo, index) => (
					<TodoListItem
						key={todo.id}
						todo={todo}
						onDelete={onDelete}
						onToggle={onToggle}
						onUpdate={onUpdate}
					/>
				))}
			</List>
			<Total>{todos.length} items left</Total>
		</>
	);
};

export default React.memo(TodoList);
