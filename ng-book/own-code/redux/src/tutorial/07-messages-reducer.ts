interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

interface AppState {
  messages: string[];
}

interface ListenerCallback {
  (): void;
}

interface UnsubscribeCallback {
  (): void;
}

interface AddMessageAction extends Action {
  message: string;
}

interface DeleteMessageAction extends Action {
  index: number;
}

class Store7<T> {
  private _state: T;
  private _listeners: ListenerCallback[] = [];

  constructor(private reducer: Reducer<T>, initialState: T) {
    this._state = initialState;
  }

  getState(): T {
    return this._state;
  }

  dispatch(action: Action): void {
    this._state = this.reducer(this._state, action);
    this._listeners.forEach((listener: ListenerCallback) => listener());
  }

  subscribe(listener: ListenerCallback): UnsubscribeCallback {
    this._listeners.push(listener);
    return () => {
      // Returns an unsubscribe function
      this._listeners = this._listeners.filter((l) => l != listener);
    };
  }
}

let reducer7: Reducer<AppState> = (state: AppState, action: Action) => {
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

let store7 = new Store7<AppState>(reducer7, { messages: [] });
console.log(store7.getState());

store7.dispatch({
  type: 'ADD_MESSAGE',
  message: 'Would you say the fringe was made of silk?',
} as AddMessageAction);

store7.dispatch({
  type: 'ADD_MESSAGE',
  message: 'Wouldnt have no other kind but silk',
} as AddMessageAction);

store7.dispatch({
  type: 'ADD_MESSAGE',
  message: 'Has it really got a team of snow white horses?',
} as AddMessageAction);

console.log(store7.getState());
