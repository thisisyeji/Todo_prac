import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { useState, useCallback } from 'react';

const InputBox = styled.form`
	/* position: absolute;
	bottom: 0;
	left: 0; */
	width: 100%;
	height: 100px;
	background: #000;

	display: flex;

	input {
		width: 80%;
		height: 100px;
		border: none;
		outline: none;
		border-top: 1px solid #eee;
		padding: 10px;
	}

	button {
		width: 20%;
		height: 100px;
		border: none;
		outline: none;
		cursor: pointer;

		&:hover {
			svg {
				transform: scale(1.1);
				color: #555;
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
			<input type='text' value={value} onChange={onChange} />
			<button>
				<FaPlus />
			</button>
		</InputBox>
	);
};

export default TodoInsert;
