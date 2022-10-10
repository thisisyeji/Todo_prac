import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const InputBox = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100px;
	background: #000;

	display: flex;

	input {
		width: 80%;
		height: 100%;
		border: none;
		outline: none;
		border-top: 1px solid #eee;
	}

	button {
		width: 20%;
		height: 100%;
		border: none;
		outline: none;
		cursor: pointer;

		svg {
			font-size: 18px;
			color: #777;
		}
	}
`;

const TodoInsert = () => {
	return (
		<InputBox>
			<input type='text' />
			<button>
				<FaPlus />
			</button>
		</InputBox>
	);
};

export default TodoInsert;
