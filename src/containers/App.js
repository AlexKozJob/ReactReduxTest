import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Price from '../components/Price'
import * as priceActions from '../actions/PriceActions'

class App extends Component {
  render() {
    const { price } = this.props;
    const { expandItem, changeFilter } = this.props.priceActions;
    return (<div className='row'>
      <Price 
          items={price.items}
          keyword={price.keyword}
          expandItemKey={price.expandItemKey}
          expandItem={expandItem}
          changeFilter={changeFilter}
      />
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    price: state.price
  }
}

function mapDispatchToProps(dispatch) {
  return {
    priceActions: bindActionCreators(priceActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
