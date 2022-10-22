import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { useState, useCallback } from 'react';

const InputBox = styled.form`
	width: 100%;
	height: 60px;
	background: hsl(235, 24%, 19%);
	border-radius: 4px;
	margin-bottom: 15px;

	display: flex;

	input {
		width: 80%;
		background: transparent;
		border: none;
		outline: none;
		font-size: 18px;
		font-weight: 300;
		color: hsl(234, 39%, 85%);
		padding: 10px;
	}

	button {
		width: 20%;
		height: 60px;
		background: transparent;
		border: none;
		outline: none;
		cursor: pointer;

		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			svg {
				transform: scale(1.1);
				color: #999;
			}
		}

		svg {
			font-size: 18px;
			color: #777;
			transition: 0.2s;
		}
	}
`;

const TodoInsert = ({ onInsert }) => {
	const [value, setValue] = useState('');

	const onChange = useCallback((e) => {
		setValue(e.target.value);
	}, []);

	const onSubmit = useCallback(
		(e) => {
			onInsert(value);
			setValue('');

			e.preventDefault();
		},
		[onInsert, value]
	);

	return (
		<InputBox onSubmit={onSubmit}>
			<input
				type='text'
				value={value}
				onChange={onChange}
				placeholder='Create a new to do...'
			/>
			<button>
				<FaPlus />
			</button>
		</InputBox>
	);
};

export default TodoInsert;
