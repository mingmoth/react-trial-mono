import TodoApp from './TodoApp'
import { TodoProvider } from './TodoContext'
import './App.css'

function App() {

	return (
		<TodoProvider>
			<div className='todoapp'>
				<TodoApp />
			</div>
		</TodoProvider>
	)
}

export default App
