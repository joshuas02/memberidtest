import React from 'react';
import { connect } from 'react-redux';

import { restoreExpression } from '../actions/currentExpression';

const History = ({list = [], restoreExpression}) => 
<div className="history">
    {list.map((item, index) => <div key={index} onClick={() => restoreExpression(item.expr) }>
      {item.expr} = {item.result}
    </div>)}
</div>

const mapStateToProps = (state) => ({
  list: state.history
});

const mapDispatchToProps = {
  restoreExpression
}

export default connect(mapStateToProps, mapDispatchToProps )(History);