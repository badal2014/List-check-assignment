import React from 'react';
import './App.css';
import Header from './components/Header';
import ListItems from './components/ListItems';
import SelectedItems from './components/SelectedItems';

export default class App extends React.Component {
  state = {
    checkedItems: []
  }
  handleChecked = (id) => {
    console.log(" in handle checked", id)
    let checkedItems = [...this.state.checkedItems]
    if (!checkedItems.includes(id)) {
      checkedItems.push(id)
    }
    else {
      checkedItems = checkedItems.filter(_ => _ !== id)
    }
    this.setState({ checkedItems })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body-container">
          <div className="cards">
            <ListItems checkedItems={this.state.checkedItems} handleChecked={this.handleChecked} />
            <SelectedItems checkedItems={this.state.checkedItems} handleChecked={this.handleChecked} />
          </div>
        </div>
      </div>
    );
  }
}

