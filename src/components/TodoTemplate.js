import React from 'react';
import styled from 'styled-components';

const ToDoWrapper = styled.section`
	width: 100%;
	height: 40vh;
	background: linear-gradient(
		0deg,
		rgba(22, 1, 168, 1) 0%,
		rgba(163, 1, 251, 1) 100%
	);

	display: flex;
	justify-content: center;
	align-items: center;
`;

const TodoHeader = styled.div`
	width: 50vw;
	max-width: 500px;
	min-width: 330px;
	overflow: hidden;
	background: transparent;
	margin-top: 500px;
	position: relative;

	h1 {
		height: 100px;
		background: transparent;
		font-size: 3rem;
		letter-spacing: 10px;
		color: #fff;
		text-shadow: 3px 3px 8px rgba(255, 255, 255, 0.7);
		text-align: left;
		padding: 20px;
	}

	div {
		width: 100%;
		overflow-y: scroll;
	}

	@media screen and (max-width: 768px) {
		width: 60vw;
	}

	@media screen and (max-width: 375px) {
		width: 340px;
	}
`;

function TodoTemplate({ children }) {
	return (
		<ToDoWrapper>
			<TodoHeader>
				<h1>TO DO</h1>
				<div>{children}</div>
			</TodoHeader>
		</ToDoWrapper>
	);
}

export default TodoTemplate;
