import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types'

//import { getClients } from '../../Actions/actions';


class Clients extends Component {

/*   componentDidMount(){
    this.props.getClients();
  }; */

  render() {
    const { clients } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Clients</span>
        </h1>
        {clients.map((client, key) => (
           <div key={key}>{ client.name }</div>
        ))}
      </React.Fragment>
    );
  }
}

Clients.propTypes = {
  clients: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  clients: state.clients.clients
});

/* const mapDispatchToProps = (dispatch) => ({
  getClients: () => dispatch({type: GET_CONTACTS})
}); */

export default connect( mapStateToProps/* , { getClients } */ )(Clients);

