import { useEffect, useState } from "react";
import "./Todos.css";

function Todos() {
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getTodo();
    }, [page]);

    function getTodo() {
        fetch(`http://localhost:3001/todos?_page=${page}&_limit=2`)
            .then((data) => data.json())
            .then((data) => {
                console.log("Todos", data);
                setTodoList(data);
                setLoading(false);
            });
    }

    const handleDelete = (id) => {
      
        fetch(`http://localhost:3001/todos/${id}`, {
            method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then(() => {
                    getTodo();
                }
                );
    }

    const toggleTodo = (id) => {
          
         fetch(`http://localhost:3001/todos?_page=${page}&_limit=2`)
            .then((data) => data.json())
            .then((data) => {
                console.log("Todos", data);
                data.map((e) => {
                    if (e.id == id) {
                        e.status = !e.status;
                    }
                })
                setTodoList(data);
                setLoading(false);
            });
    }

    return loading ? ("Loading"): ( 
        <div>
            <input className="input" placeholder="add todo" type="text" onChange={(e) => {
                setText(e.target.value);
            }} />
            <button  className="butt" onClick={() => {
                const data = {
                    status: false, title: text,
                };
                setTodoList([...todoList, data]);
                fetch("http://localhost:3001/todos", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then(() => {
                    getTodo();
                }
                );
            }}>Add</button>
             
            {
                todoList.map((e) => (
                    <div className="todos" style={{
                    textDecoration: e.status ? "line-through" : "none",
                }}
                    key={e.id}
                >
                    <p className="text">{e.title}</p>

                    <button className="butt"  onClick={() => {
                        toggleTodo(e.id)
                    }}>&#x2714;</button>
                    <button className="butt"  onClick={() => {
                        handleDelete(e.id)
                    }}>&#x2716;</button> </div>
                ))
            }

            <button onClick={() => {
                setPage(page - 1);
            }}>Prev Page</button>
            <button onClick={() => {
                setPage(page + 1);
            }}>Next Page</button>
        </div>
    );
}

export default Todos;