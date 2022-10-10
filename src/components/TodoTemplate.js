import React from 'react';
import styled from 'styled-components';

const TodoHeader = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;

	width: 30vw;
	min-width: 400px;
	height: 60vh;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

	title {
		height: 100px;
		display: block;
		color: black;
		background: #efefef;
		color: #fff;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
		font-size: 2em;
		font-weight: 700;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	div {
		width: 100%;
	}
`;

function TodoTemplate({ children }) {
	return (
		<TodoHeader>
			<title>TODO LIST</title>
			<div>{children}</div>
		</TodoHeader>
	);
}

export default TodoTemplate;
