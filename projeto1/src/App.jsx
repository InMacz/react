import {useState, useEffect } from "react"
import './App.css';

function App(){
  const [task, setTask] = useState('')
  const [taskAll, setTaskAll] = useState([])

  function handleTasks(event){
    event.preventDefault();
    
    if(task === ""){
      alert("Você precisa informar uma tarefa!")
      return
    }

    const novaTarefa = { texto: task, concluida: false }// novaTarefa = objeto
    const lista = [...taskAll, novaTarefa]
    setTaskAll(lista)

    localStorage.setItem('task', JSON.stringify(lista))
    setTask("")
    
  }

  
  function excluir(indice){
    const novaLista = taskAll.filter((_, i) => i !== indice)
    setTaskAll(novaLista)
    localStorage.setItem('task', JSON.stringify(novaLista))
  }

  function concluida(indice){
    const novaLista = taskAll.map((item, i) => 
      i === indice ? {...item, concluida: true} : item)
    setTaskAll(novaLista)
    localStorage.setItem('task', JSON.stringify(novaLista))
  }

  useEffect( ()=>{
    let lista = localStorage.getItem('task')
    lista = JSON.parse(lista)
    
    if(lista !== null && lista.length > 0){
      setTaskAll(lista)
    }
  }, [])
  
  return (
    <div className="container">
      <h1 className="titulo">Cadastro de Tarefas</h1>
      <form onSubmit={handleTasks}>
        <label className="label">Tarefa</label><br/>
        <input className="input" 
        type="text"
        placeholder="Digite uma tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}/> <br/> <br/>
        <button className="btn">Adicionar</button>
      </form>
      <h1 className="titulo">Minhas tarefas</h1>
      {taskAll
      .map((item, indice) => ({...item, indice}))
      .filter(item => !item.concluida)
      .map((item) => (
        <div key={item.indice}>
          <strong>{item.indice+1}º </strong> {item.texto}
          <button className="btn" onClick={ () => excluir(item.indice)}>Excluir</button>
          <button className="btn" onClick={ () => concluida(item.indice)}>COMPLETA</button>
        </div>
      ))}
    </div>
  )
}
export default App
