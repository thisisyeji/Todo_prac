import React, { useState } from 'react';
import styled from 'styled-components';
import { FaMinus } from 'react-icons/fa';
import {
	MdCheck,
	MdClose,
	MdOutlineModeEditOutline,
	MdCheckBoxOutlineBlank,
	MdCheckBox,
} from 'react-icons/md';

const List = styled.div`
	background-color: ${(props) => props.theme.bg};
	border-bottom: 1px solid ${(props) => props.theme.listBorder};
	padding: 20px 15px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Btn = styled.button`
	width: 25px;
	height: 25px;
	border-radius: 50%;
	border: 1px solid ${(props) => props.theme.button};
	background: transparent;
	margin-right: 5px;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
	transition: 0.3s;

	&:hover {
		transform: scale(1.1);
		background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
		svg {
			color: #fff;
		}
	}

	svg {
		color: ${(props) => props.theme.text};
		transition: 0.3s;
	}
`;

const Text = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: ${(props) => props.theme.text};
	font-weight: 300;
	gap: 10px;
	text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};

	svg {
		color: ${(props) => props.theme.checkBox};
		font-size: 20px;
	}
`;

const Form = styled.form`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
`;

const UpdateInput = styled.input`
	width: 100%;
	background: transparent;
	outline: none;
	border: none;
	color: ${(props) => props.theme.text};
	font-size: 16px;
	font-weight: 300;
	border-bottom: 1px solid ${(props) => props.theme.text};
	padding: 5px;
`;

const UpdateBtn = styled.button`
	width: 25px;
	height: 25px;
	border: 1px solid ${(props) => props.theme.text};
	background: transparent;
	margin-right: 5px;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
	transition: 0.3s;

	&:hover {
		background: rgba(22, 1, 168, 1);

		svg {
			transform: scale(1.3);
			color: #fff;
		}
	}

	svg {
		color: ${(props) => props.theme.text};
		transition: 0.3s;
	}
`;

const TodoListItem = ({ todo, onDelete, onToggle, onUpdate }) => {
	const [Edit, setEdit] = useState(false);
	const [newTodo, setNewTodo] = useState(todo.text);

	const onChange = (e) => {
		setNewTodo(e.target.value);
	};

	const onCancel = () => {
		setEdit(false);
		setNewTodo(todo.text);
	};

	return (
		<>
			<List>
				{Edit ? (
					<Form onSubmit={() => onUpdate(todo.id, newTodo)}>
						<UpdateInput type='text' value={newTodo} onChange={onChange} />
						<div>
							<UpdateBtn onClick={() => onUpdate(todo.id, newTodo)}>
								<MdCheck />
							</UpdateBtn>
							<UpdateBtn onClick={() => onCancel()}>
								<MdClose />
							</UpdateBtn>
						</div>
					</Form>
				) : (
					<>
						<Text checked={todo.checked} onClick={() => onToggle(todo.id)}>
							{todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
							{todo.text}
						</Text>
						<Btn onClick={() => setEdit(true)}>
							<MdOutlineModeEditOutline />
						</Btn>
						<Btn onClick={() => onDelete(todo.id)}>
							<FaMinus />
						</Btn>
					</>
				)}
			</List>
		</>
	);
};

export default React.memo(TodoListItem);
