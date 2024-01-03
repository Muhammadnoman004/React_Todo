import './App.css';
import { useState } from 'react';

function App() {

  let [list, setlist] = useState([])
  let [InputItem, setInputItem] = useState("")
  let [updatebtn , setupdatebtn] = useState(true)

  function inputItem(e) {
    setInputItem(e.target.value);
  }

  function addItem() {
    var copyList = [...list]
    copyList.push(InputItem)
    setlist(copyList)
    setInputItem(' ')

  }
  function EditItem(value) {
    setInputItem(value)
    setupdatebtn(!updatebtn)
  }
  function deleitem(index) {
    var CopyItem = [...list];
    CopyItem.splice(index, 1);
    setlist(CopyItem);
  }
  function deleteAllItem() {
    setlist([])
  }
  function updateItem(){
    

  }

  return (
    <div className="App">

      <h1>TODO APP</h1>
      <input onChange={inputItem} value={InputItem} type="text" id="" />
      {/* <button onClick={addItem}>Add Item</button> */}
      {
        updatebtn ?  <button onClick={addItem}>Add Item</button> : <button onClick={updateItem}>Update Item</button>
      }
      <button onClick={deleteAllItem}>Delete All</button>

      <ul>
        {
          list.map((value, index) => {
            return <li key={index}>{value} <button onClick={() => EditItem(value)}>Edit</button> <button onClick={() => deleitem(index)}>Delete</button></li>
          })
        }
      </ul>

    </div>
  );
}

export default App;