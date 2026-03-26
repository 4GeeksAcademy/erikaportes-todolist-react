import React, { useState } from "react";

//create your first component
const ToDoList = () => {

	const [inputTarea, setInputTarea] = useState("")
	const [listaTareas, setListaTareas] = useState([])

	function crearTarea(Enter) {
		if (Enter === "Enter" && inputTarea.trim() !== "") {
			setListaTareas([...listaTareas, inputTarea])
			setInputTarea("")
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
					placeholder='Agrega alguna tarea'
					value={inputTarea}
					onChange={e => setInputTarea(e.target.value)}
					onKeyUp={evento => crearTarea(evento.key)}
				/>

				<ul className="list-group">
					{listaTareas.length === 0 ? (
						<li className="list-group-item text-muted">
							No hay tareas, agrega alguna tarea.
						</li>
					) : (listaTareas.map((tarea, indice) => (
						<li
							className="list-group-item d-flex justify-content-between align-items-center tarea-item"
							key={tarea + indice}
						>
							{tarea}
							<i
								onClick={() => trash(indice)}
								className="fa-solid fa-trash-can trash-icon ms-auto"
								style={{ cursor: 'pointer' }}
							></i>
						</li>
					))
					)}
				</ul>

				<div className="mt-2 text-secondary">
					{listaTareas.length === 0
						? "0 tareas pendientes"
						: `${listaTareas.length} ${listaTareas.length === 1 ? "tarea" : "tareas"} por hacer`}
				</div>


			</div>

		</>

	)
};

export default ToDoList;


{/* <ul className="list-group">
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
				<div>{listaTareas.length} tasks</div> */}