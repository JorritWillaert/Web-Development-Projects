import { Action, Reducer, Store, createStore } from 'redux';

interface AppState {
  messages: string[];
}

interface AddMessageAction extends Action {
  message: string;
}

interface DeleteMessageAction extends Action {
  index: number;
}

class MessageActions {
  static addMessage(message: string): AddMessageAction {
    return {
      type: 'ADD_MESSAGE',
      message: message,
    };
  }
  static deleteMessage(index: number): DeleteMessageAction {
    return {
      type: 'DELETE_MESSAGE',
      index: index,
    };
  }
}

let initialState: AppState = { messages: [] };

let reducer9: Reducer<AppState> = (
  state: AppState = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        messages: state.messages.concat((<AddMessageAction>action).message),
      };
    case 'DELETE_MESSAGE':
      let idx = (<DeleteMessageAction>action).index;
      return {
        messages: [
          ...state.messages.slice(0, idx),
          ...state.messages.slice(idx + 1, state.messages.length),
        ],
      };
    default:
      return state;
  }
};

// create a new store
let store9: Store<AppState> = createStore(reducer9);
console.log(store9.getState()); // -> { messages: [] }

store9.dispatch(
  MessageActions.addMessage('Would you say the fringe was made of silk?')
);

store9.dispatch(
  MessageActions.addMessage('Wouldnt have no other kind but silk')
);

store9.dispatch(
  MessageActions.addMessage('Has it really got a team of snow white horses?')
);

console.log(store9.getState());
// ->
// { messages:
//    [ 'Would you say the fringe was made of silk?',
//      'Wouldnt have no other kind but silk',
//      'Has it really got a team of snow white horses?' ] }

store9.dispatch(MessageActions.deleteMessage(1));

console.log(store9.getState());
// ->
// { messages:
//    [ 'Would you say the fringe was made of silk?',
//      'Has it really got a team of snow white horses?' ] }

store9.dispatch(MessageActions.deleteMessage(0));

console.log(store9.getState());
// ->
// { messages: [ 'Has it really got a team of snow white horses?' ] }
