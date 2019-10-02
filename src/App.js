import React from 'react';
import './App.css'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
let searchTerm;

function parseToTableDataFormat (data) {
  let result = [];
  data.map( ( item, index ) => (
    result.push({ 
      owners: item.owner.login,
      stars: item.stargazers_count,
      created_at: item.created_at,
      id: index,
      name: item.name
    })
  ))
  return result;
}

class SearchBox extends React.Component {
  constructor(props) {
  super(props);
  this.onChange = this.onChange.bind(this);

  if (localStorage.getItem('cachedSearchResult') !== null) { 
    let cachedResult =JSON.parse(localStorage.getItem('cachedSearchResult'));
    this.state = {
      repositories: parseToTableDataFormat(cachedResult),
      showInfo: true,
      showTable: false
    };
  } else {
    this.state = { 
      repositories: [],
      showInfo: false,
      showTable: true
    };
  }
 
this.columns = [{
    dataField: 'id',
    text: 'ID',
    sort: true
  },{
    dataField: 'name',
    text: 'Name',
    sort: true
  },{
    dataField: 'owners',
    text: 'Owners',
    sort: true
  },{
    dataField: 'stars',
    text: 'Starts',
    sort: true
  },{
    dataField: 'created_at',
    text: 'Created at',
    sort: true
  }];
}

render() {
  const styleInfo = this.state.showInfo ? {display: 'none'} : {};
  const styleTable = this.state.showTable ? {display: 'none'} : {};
  return(
  <div>
    <div className="container"> 
      <h4 className="container__header">GitHub Repositories</h4> 
      <form className="form-container">
        <label className="form-container__label">Type more than 4 words to search</label> <br/>
        <input className="form-container__input form-container__input--border" type="text" className="searchbox" onChange={this.onChange}  ref={(input) => { this.searchBox = input; }}/>
      </form>
      <div style={styleInfo}>
        Your data is not ready yet :)
      </div>
    </div>
    <div style={styleTable} className="table-container">
      <BootstrapTable striped hover keyField='id' data={ this.state.repositories} columns={ this.columns } pagination={ paginationFactory() }/> 
    </div>
  </div>
  );
}

onChange(event) { 
  searchTerm = this.searchBox.value;
  if (localStorage.getItem(searchTerm) !== null) {
    let parsedLocalStorage = JSON.parse(localStorage.getItem(searchTerm));
    localStorage.setItem('cachedSearchResult',localStorage.getItem(searchTerm) );
    this.setState({
      repositories: parseToTableDataFormat(parsedLocalStorage),
      showInfo: true,
      showTable: false
    });
 
  } else {
    if (searchTerm.length > 4 ) {
      let endpoint = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=' + searchTerm;
      fetch(endpoint)
      .then(blob => blob.json())
      .then(response => {
        localStorage.setItem(searchTerm, JSON.stringify(response.items));
        localStorage.setItem('cachedSearchResult', JSON.stringify(response.items));
        this.setState({
          repositories: parseToTableDataFormat(response.items),
          showInfo: true,
          showTable: false
        });
      }).catch(function() {
        console.log("Connection error !");
      });
    }
  }
  event.preventDefault();
  }
}
export default SearchBox;