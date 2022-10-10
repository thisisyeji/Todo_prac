import React from 'react';
import styled from 'styled-components';
import { FaMinus } from 'react-icons/fa';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';

const Lists = styled.li`
	width: 90%;
	border-radius: 5px;
	background-color: lightyellow;
	padding: 20px 15px;
	margin: 0 auto;
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

	svg {
		background: #fff;
		font-size: 20px;
	}
`;

const todos = [
	{
		id: 1,
		text: '밥먹기',
	},
	{
		id: 2,
		text: '잠자기',
	},

	{
		id: 3,
		text: '공부하기',
	},
];

const TodoListItem = () => {
	return (
		<ul>
			{todos.map((todo, index) => (
				<Lists key={todo.id}>
					<Text className='text'>
						<MdCheckBoxOutlineBlank />
						{todo.text}
					</Text>
					<DelBtn key={todo.id}>
						<FaMinus />
					</DelBtn>
				</Lists>
			))}
		</ul>
	);
};

export default TodoListItem;
