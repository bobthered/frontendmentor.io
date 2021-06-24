import { writable } from 'svelte/store';

const initStore = () => {
  // default methods
  const { subscribe, set, update } = writable({
    display: '0',
    equalPressed: false,
    newOperand: true,
    operands: [],
    operator: null,
  })

  const calculate = operands => 
    operands.reduce((total, operand)=> {
      const { operator, value } = operand;
      if ( operator === null ) return parseFloat(value);
      if ( operator === '+' ) return total + parseFloat(value);
      if ( operator === '-' ) return total - parseFloat(value);
      if ( operator === '/' ) return total / parseFloat(value);
      if ( operator === 'X' ) return total * parseFloat(value);
    }, 0).toString().split('').splice(0, 12).join('');
  const del = () => update(state=>{
    const { equalPressed, newOperand } = state;
    if ( !newOperand && !equalPressed ) {
      if ( state.operands[state.operands.length-1].value.length > 1) {
        state.operands[state.operands.length-1].value = state.operands[state.operands.length-1].value.slice(0, -1);
        state.display = state.operands[state.operands.length-1].value;
      }
    }
    return state;
  });
  const equals = () => update(state => {
    const { operands, equalPressed } = state;
    if ( equalPressed ) state.operands.push(operands[operands.length-1])
    state.display = calculate( operands );
    state.equalPressed = true;
    state.newOperand = true;
    return state;
  })
  const handleOperator = nextOperator => update(state=>{
    state.equalPressed = false;
    state.newOperand = true;
    state.operator = nextOperator;
    return state;
  });
  const inputDecimal = () => update(state=>{
    const { newOperand, operator } = state;
    if ( newOperand ) state.operands.push({value:'0', operator});
    state.equalPressed = false;
    state.newOperand = false;
    if ( !state.operands[state.operands.length-1].value.includes('.') ) state.operands[state.operands.length-1].value += '.';
    state.display = state.operands[state.operands.length-1].value;
    return state;
  });
  const inputDigit = digit => update(state=>{
    const { newOperand, operator } = state;
    if ( newOperand ) state.operands.push({value:'', operator});
    state.equalPressed = false;
    state.newOperand = false;
    state.operands[state.operands.length-1].value += digit;
    state.display = state.operands[state.operands.length-1].value;
    return state;
  });
  const reset = () => set({
    display: '0',
    newOperand: true,
    operands: [],
    operator: null,
  });

  return {
    del,
    equals,
    handleOperator,
    inputDecimal,
    inputDigit,
    reset,
    subscribe
  }
}

export default initStore();