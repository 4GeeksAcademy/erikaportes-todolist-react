import React, { useState } from "react";

//create your first component
const ToDoList = () => {

	const [inputList, setInputList] = useState("")
	const [listaTareas, setListaTareas] = useState([])

	function crearTarea(Enter) {
		if (Enter === "Enter" && inputList.trim() !== "") {
			setListaTareas([...listaTareas, inputList])
			setInputList("")
		}
	}

	function trash(indice) {
		setListaTareas(listaTareas.filter((item, i) => indice != i))
	}

	return (

		<>
			<h1>My Todos</h1>
			<div className="container">

				<input
					type="text"
					placeholder='What do you need to do?'
					value={inputList}
					onChange={(e) => setInputList(e.target.value)}
					onKeyUp={evento => crearTarea(evento.key)}
				/>
				<ul className="list-group">
					{listaTareas.map((tarea, indice) => {
						return (
							<li
								className="list-group-item d-flex justify-content-between align-items-center tarea-item"
								key={tarea + indice} >
								{tarea}
								<i
									onClick={() => trash(indice)}
									className="fa-solid fa-trash-can trash-icon ms-auto">
								</i>
							</li>
						)
					})
					}
				</ul>
				<div>{listaTareas.length} tasks</div>

			</div>

		</>

	)
};

export default ToDoList;