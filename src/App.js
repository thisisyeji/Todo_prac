import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import { createGlobalStyle } from 'styled-components';
import { useState, useCallback, useEffect, useRef } from 'react';

const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
* {
box-sizing: border-box;
}
body {
  line-height: 1;
  width: 100%;
  height: 100vh;
  background: #555;

  display: flex;
	justify-content: center;
	align-items: center;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;

function App() {
	const getTodos = () => {
		const dummyLists = [
			{
				id: 0,
				text: '할 일 입력하기',
				checked: false,
			},
		];
		const data = localStorage.getItem('todos');
		if (data) {
			return JSON.parse(data);
		} else {
			return dummyLists;
		}
	};

	const [todos, setTodos] = useState(getTodos());
	const nextId = useRef(todos.length);

	const onInsert = useCallback((text) => {
		if (!text.trim()) return alert('할 일을 입력하세요.');

		const todo = {
			id: nextId.current,
			text,
			checked: false,
		};
		setTodos((todos) => todos.concat(todo));
		nextId.current += 1;
	}, []);

	const onDelete = useCallback((id) => {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	}, []);

	const onToggle = useCallback((id) => {
		setTodos((todos) =>
			todos.map((todo) =>
				todo.id === id ? { ...todo, checked: !todo.checked } : todo
			)
		);
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<>
			<GlobalStyle />
			<TodoTemplate>
				<TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
				<TodoInsert onInsert={onInsert} />
			</TodoTemplate>
		</>
	);
}

export default App;
