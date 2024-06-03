import ReactDOM from "react-dom";
import React, {useState} from "react";

export {MainWindow};

const MOCK_JSON = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class ItemRow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let data = this.props.data
    return (<tr>
      <td>{data.name}</td>
      <td>{data.price}</td>
    </tr>)
  }
}

class Category extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let categoryName = this.props.name
    let items = this.props.items
    return (<div>
      <label style={{fontWeight: "bold"}}>{categoryName}</label>
      {
        items.map(item=>{return <ItemRow data={item}/>})
      }
      <hr></hr>
    </div>)
  }
}

class Pannel extends React.Component {
  constructor(prop) {
    super(prop);
  }

  handleChange = (e)=>{
    if(e.target.name == "stockedOnly") {
      console.log("CHECK : " + e.target.checked)
      this.props.updateIsStockedOnly(e.target.checked)
    } else if(e.target.name == "word") {
      this.props.updateSearchWords(e.target.value)
    }
  }

  render() {
    return (
      <div>
        <input type="text" name="word" value={this.props.searchWords} onChange={this.handleChange}></input><br></br>
        <label>StockedOnly</label><input name="stockedOnly" type="checkbox" checked={this.props.stockedOnly} onChange={this.handleChange}></input>
      </div>
    )
  }
}

class ItemsWindow extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let items = this.props.items
    if(this.props.stockedOnly) {
      items = items.filter(i=>i.stocked)
    }
    items = items.filter(i=>i.name.indexOf(this.props.searchWords) != -1)
    let map = {};
    items.forEach((item)=> {
      let category = item.category
      let li = map[category] ?? (map[category]=[])
      li.push(item)
    })
    console.log(map)
    return (
      <table>
      {
        Object.keys(map).map((name)=>{
          console.log(name);
          return <Category name={name} items={map[name]}/>
        })
      }
      </table>
    )
  }
}

class MainWindow extends React.Component {
  
  constructor(prop) {
    super(prop)
    this.state = {searchWords: "", stockedOnly: false}
  }

  updateIsStockedOnly = (value)=> {
    this.setState({stockedOnly: value})
  }

  updateSearchWords = (word)=> {
    console.log(word)
    this.setState({searchWords: word})
  }

  render() {
    return (
      <div>
        <Pannel searchWords={this.state.searchWords} stockedOnly={this.state.stockedOnly} updateIsStockedOnly={this.updateIsStockedOnly} updateSearchWords={this.updateSearchWords}/>
        <hr></hr>
        <ItemsWindow items={this.props.items} searchWords={this.state.searchWords} stockedOnly={this.state.stockedOnly}/>
      </div>
    )
  }
}
