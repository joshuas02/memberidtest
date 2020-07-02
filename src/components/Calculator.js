import React from 'react';
import { connect } from 'react-redux';
import History from './History';
import { opToExpression, numToExpression, opsToExpression, clearCalculation } from '../actions/currentExpression';
import { addHistoryItem } from '../actions/history';

const operations = ['-', '+','/','*', '='];
const numbersA = [0];
const numbersB = [1];
const numbersC = [2];
const numbersD = [3];
const numbersE = [4];
const numbersF = [5];
const numbersG = [6];
const numbersH = [7];
const numbersI = [8];
const numbersJ = [9];





const Calculator = ({
  expression,
  operationToExpression,
  clearAll,
  numberToExpression,
  addHistoryItem
}) => 

<div className="container">
<div className="dr">
  
  <div className="history">
  <History />
  </div>

  <div className="calculate">
  <input disabled="true" value={expression} />
  </div>
<hr class="new"></hr>
  <br />
  <div className="oprtr">
    <button className="clear" onClick={() => clearAll(1)}>C</button>
  {operations.map((op, index) => (
    <button className="operator" onClick={() => op === '=' ? addHistoryItem(expression) : operationToExpression(op)} key={1}>{op}</button>)
    )}
  
  </div>
    {numbersJ.map(num => <button className="number" onClick={() => numberToExpression(num)} key={num}>{num}</button>)}
    {numbersI.map(num => <button className="number" onClick={() => numberToExpression(num)} key={num}>{num}</button>)}
    {numbersH.map(num => <button className="number" onClick={() => numberToExpression(num)} key={num}>{num}</button>)}
    
    {/* {operations.map((op, index) => (
    <button className="operator" onClick={() => op === '=' ? addHistoryItem(expression) : operationToExpression(op)} key={2}>{op}</button>,
    <button className="operator" onClick={() => op === '=' ? addHistoryItem(expression) : operationToExpression(op)} key={3}>{op}</button>,
    <button className="operator" onClick={() => op === '=' ? addHistoryItem(expression) : operationToExpression(op)} key={4}>{op}</button>,
    <button className="operator" onClick={() => op === '=' ? addHistoryItem(expression) : operationToExpression(op)} key={5}>{op}</button>)
    )} */}

    {numbersG.map(num => <button className="number" onClick={() => numberToExpression(num)} key={num}>{num}</button>)}
    {numbersF.map(num => <button className="number" onClick={() => numberToExpression(num)} key={num}>{num}</button>)}
    {numbersE.map(num => <button className="number" onClick={() => numberToExpression(num)} key={num}>{num}</button>)}
    
    {numbersD.map(num => <button className="number" onClick={() => numberToExpression(num)} key={num}>{num}</button>)}
    {numbersC.map(num => <button className="number" onClick={() => numberToExpression(num)} key={num}>{num}</button>)}
    
    {numbersB.map(num => <button className="number" onClick={() => numberToExpression(num)} key={num}>{num}</button>)}
   
    {numbersA.map(num => <button className="number" onClick={() => numberToExpression(num)} key={num}>{num}</button>)}
</div>
</div>;
const mapStateToProps = state => ({
  expression: state.currentExpression,
});

const mapDispatchToProps = (dispatch) => ({
  clearAll: hit => dispatch(clearCalculation(hit)),  
  clearExpression: op => dispatch(opsToExpression(op)),  
  operationToExpression: op => dispatch(opToExpression(op)),
  numberToExpression: num => dispatch(numToExpression(num)),
  addHistoryItem: expr => dispatch(addHistoryItem(expr))
})

export default connect(mapStateToProps, mapDispatchToProps)( Calculator);