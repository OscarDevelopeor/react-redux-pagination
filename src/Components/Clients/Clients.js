import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getClients } from '../../Store/Actions/actions';


class Clients extends Component {

  componentDidMount(){
    this.props.getClients();
  };

  state = {
    currentPage: 1,
    itemsOnPage: 5
  }

  dataTable = () =>{

    const { currentPage, itemsOnPage } = this.state;
    const { clients } = this.props;

    const indexOfLastItem = currentPage * itemsOnPage;
    const indexOfFirstItem = indexOfLastItem - itemsOnPage;
    const currentItems = clients.slice(indexOfFirstItem, indexOfLastItem);


    const renderItems = currentItems.map((data, key) => {
          return (
            <tr key={key}>
              <td>{data.username}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>               
            </tr>
          )
      
    });

    return renderItems;
  }

  paginationNumbers = () =>{
    const { clients } = this.props;
    const { itemsOnPage } = this.state;

    const pagesToNumbers = [];
    for (let i = 1; i <= Math.ceil(clients.length / itemsOnPage); i++) {
      pagesToNumbers.push(i);
    } 

    const numbers = pagesToNumbers.map(number => {
      return (
          <li className="waves-effect"
           key={number} 
           id={number} 
           onClick={this.handleClick}>
           {number}
           </li>
      );
    });

    return numbers;
  }

  handleClick = (e) => {
    this.setState({
        currentPage: Number(e.target.id)
      });
  }

  render() {

    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Clients</span>
        </h1>
            <div>
            <table className="highlight centered responsive-table">
                  <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                  </thead>
                  <tbody>

                        {  this.dataTable() }
                  </tbody>
             </table>               
                
                <ul className="pagination">
                   { this.paginationNumbers() }
                </ul>
            </div>  
      </React.Fragment>
    );
  }
}

Clients.propTypes = {
  clients: PropTypes.array.isRequired,
  getClients: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  clients: state.clients.clients
});

export default connect( mapStateToProps , { getClients } )(Clients);

