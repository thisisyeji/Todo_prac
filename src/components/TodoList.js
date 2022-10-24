import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const List = styled.div`
	width: 40%;
	height: 350px;
	background: ${(props) => props.theme.bg};
	border-radius: 4px;
	margin: 0 auto;
	overflow-y: scroll;
`;

const Total = styled.div`
	color: ${(props) => props.theme.total};
	text-align: right;
	border-top: 1px solid ${(props) => props.theme.total};
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
			<Total>{todos.length} items on the list</Total>
		</>
	);
};

export default React.memo(TodoList);
