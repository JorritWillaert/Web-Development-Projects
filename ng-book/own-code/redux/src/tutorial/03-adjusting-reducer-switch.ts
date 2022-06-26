interface Action {
    type: string;
    payload?: any;
}

interface Reducer<T> {
    (state: T, action: Action): T;
}

let reducer3: Reducer<number>  = (state: number,action: Action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

let incrementAction3: Action = { type: 'INCREMENT' };

console.log(reducer3(0, incrementAction3));
console.log(reducer3(1, incrementAction3));

let decrementAction3: Action = { type: 'DECREMENT' };

console.log(reducer3(100, decrementAction3));

let unknownAction: Action = { type: 'UNKNOWN' };
console.log(reducer3(100, unknownAction));