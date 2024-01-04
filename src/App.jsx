import './App.css';
import { useState } from 'react';

function App() {

  let [list, setlist] = useState([])
  let [InputItem, setInputItem] = useState("")
  let [EditTodo, setEditTodo] = useState(null)

  function inputItem(e) {
    setInputItem(e.target.value);
  }

  function addItem() {
    if (InputItem !== "") {

      if (EditTodo !== null) {
        var copyList = [...list];
        copyList[EditTodo] = InputItem;
        setlist(copyList);
        setEditTodo(null);
      } else {
          setlist([...list , InputItem]);
      }
      setInputItem(' ')
    }

  }

  function EditItem(index) {
    setEditTodo(index)
    setInputItem(list[index])

  }
  function deleitem(index) {
    var CopyItem = [...list];
    CopyItem.splice(index, 1);
    setlist(CopyItem);
    setEditTodo(null)
  }
  function deleteAllItem() {
    setlist([])
  }


  return (
    <div className="App">

      <h1 id='h1'>TODO APP</h1>
      <div className='ChildDiv'>
        <input onChange={inputItem} placeholder='Add Item' value={InputItem} type="text" id="inp" />
        <div className='btnDiv'>
          <button onClick={addItem} id='addbtn'>{EditTodo !== null ? "Edit Todo" : "Add Todo"}</button>
          
          <button id='DelAllbtn' onClick={deleteAllItem} style={{ display: list.length > 0 ? "block" : "none" }}>Delete All</button>

        </div>

      </div>
      
      <ul className='ul'>
        {
          list.map((value, index) => {
            return <div><li className='Li' key={index}>{value} <button className='libtn' onClick={() => EditItem(index)}>Edit</button> <button onClick={() => deleitem(index)} className='libtn'>Delete</button></li></div> 
          })
        }
      </ul>

    </div>
  );
}

export default App;