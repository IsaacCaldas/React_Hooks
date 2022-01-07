export function numberReducer(state, action){
  
	switch (action.type){
		case 'add2Number':
			return {...state, number: state.number + 2};
			break;
		case 'x7Number':
			return {...state, number: state.number * 7};
			break;
		case 'div25Number':
			return {...state, number: state.number / 25};
			break;
		case 'parseToIntNumber':
			return {...state, number: parseInt(state.number)};
			break;
		case 'numAddN':
			return {...state, number: state.number + action.payload};
			break;

		default:
			return state;
	}
}
