interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

interface ListenerCallback {
  (): void;
}

interface UnsubscribeCallback {
  (): void;
}

class Store6<T> {
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

let reducer6: Reducer<number> = (state: number, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'PLUS':
      return state + action.payload;
    default:
      return state;
  }
};

let store6 = new Store6<number>(reducer6, 0);
console.log(store6.getState());

let unsubscribe = store6.subscribe(() => {
  console.log('subscribed: ', store6.getState());
});

store6.dispatch({ type: 'INCREMENT' });
store6.dispatch({ type: 'INCREMENT' });

unsubscribe();
store6.dispatch({ type: 'DECREMENT' });

console.log(store6.getState());
