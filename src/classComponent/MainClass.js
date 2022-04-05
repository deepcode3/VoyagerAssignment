import React from 'react';
import Navbar from './components/Navbar';
import TodoRows from './components/TodoRows';

class MainClass extends React.Component {
  constructor(props) {
    // super call is done to call React parent Component
    super(props);
    this.state = {
      userName: 'YEs',
      todoItems: [
        { action: 'Buy Milk', done: true },
        { action: 'Dentist at 9pm', done: false },
        { action: 'Gym Gym', done: false },
      ],
      newTodo: '',
    };
    console.warn('constructor');
  }

  componentDidMount() {
    console.warn('componentDidMount');
  }

  updateValue = (e) => {
    // const {newTodo}=this.state;
    this.setState({
      newTodo: e.target.value,
    });
  };

  newTodo = () => {
    const { newTodo, todoItems } = this.state;
    this.setState({
      todoItems: [...todoItems, { action: newTodo, done: false }],
    });
  };

  changeStateData = () => {
    const { userName } = this.state;
    this.setState({
      userName: userName === 'yEs' ? 'nO' : 'yEs',
    });
  };

  toggleDone = (todo) => {
    const { todoItems } = this.state;
    this.setState({
      todoItems: todoItems.map((item) => {
        return item.action === todo.action ? { ...item, done: !item.done } : item;
      }),
    });
  };

  // 2
  todoRows = () => {
    const { todoItems } = this.state;
    return todoItems.map((item) => {
      return <TodoRows key={item.action} item={item} callback={this.toggleDone} />;
    });
  };

  // 1 todoRows = () => {
  //   const { todoItems } = this.state;
  //   // console.log('todoItems', todoItems);
  //   return todoItems.map((item) => {
  //     return (
  //       <tr key={item.action}>
  //         <td>{item.action}</td>
  //         <td>
  //           <input
  //             type='checkbox'
  //             checked={item.done}
  //             onChange={() => {
  //               this.toggleDone(item);
  //             }}
  //           />
  //         </td>
  //       </tr>
  //     );
  //   });
  // };

  render() {
    console.warn('render');
    const { userName, newTodo, todoItems } = this.state;
    console.log('todoItems', todoItems);
    return (
      <div className='container'>
        <div className='row'>
          <Navbar name={userName} changeStateData={this.changeStateData} />
          <div className='col-12'>
            <input className='form-control' value={newTodo} onChange={this.updateValue} />
            <button type='button' className='btn btn-primary' onClick={this.newTodo}>
              Add
            </button>
          </div>
          <div className='col-12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>{this.todoRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default MainClass;
