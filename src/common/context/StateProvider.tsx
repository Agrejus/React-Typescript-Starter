import * as React from 'react';
//import { cloneDeep } from 'lodash';

export const update = (state: DeepPartial<any>) => void (0);
export const reset = () => void (0);

export abstract class StateProvider<T> extends React.Component implements IReactContext<T> {

    private appContext: React.Context<IReactContext<T>>;
    state:T;
    initialState!: T;
    debugMode!: boolean;

    constructor(props: any, defaultContext: React.Context<IReactContext<T>>, defaultState: T, debugMode: boolean) {
        super(props); // need to pass the same props that constructor passes, otherwise we get an error

        this.debugMode = debugMode;
        this.initialState = {...defaultState} //cloneDeep(defaultState);
        this.state = defaultState;
        this.appContext = defaultContext;
    }

    set = (appState: DeepPartial<T>) => {
        this.setState(appState);
    }

    reset = () => {
        this.setState(this.initialState);
    }

    render() {
        const context = this.appContext;
        return (<context.Provider value={{ state: this.state, set: this.set, reset: this.reset }}>{this.props.children}</context.Provider>);
    }
}