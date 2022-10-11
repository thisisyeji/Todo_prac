import React from 'react';
import styled from 'styled-components';
import { FaMinus } from 'react-icons/fa';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

const List = styled.div`
	width: 90%;
	border-radius: 5px;
	background-color: lightyellow;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	padding: 20px 15px;
	margin: 15px auto;
	margin-bottom: 15px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const DelBtn = styled.button`
	width: 25px;
	height: 25px;
	border-radius: 50%;
	border: 1px solid navy;
	background: #fff;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
	transition: 0.3s;

	&:hover {
		transform: scale(1.1);
		border-color: tomato;

		svg {
			color: tomato;
		}
	}

	svg {
		color: navy;
		transition: 0.3s;
	}
`;

const Text = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
	text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};

	svg {
		background: #fff;
		font-size: 20px;
	}
`;

const TodoListItem = ({ todo, onDelete, onToggle }) => {
	return (
		<List>
			<Text checked={todo.checked} onClick={() => onToggle(todo.id)}>
				{todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
				{todo.text}
			</Text>

			<DelBtn onClick={() => onDelete(todo.id)}>
				<FaMinus />
			</DelBtn>
		</List>
	);
};

export default React.memo(TodoListItem);
