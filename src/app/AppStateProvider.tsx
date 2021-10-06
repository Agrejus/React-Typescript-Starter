/// <reference path="./AppStateProvider.d.ts"/>
import * as React from 'react';
import { StateProvider, update, reset } from '../common/context/StateProvider';

const defaultContext: IReactContext<IAppState> = {
    state: {
        Id: "Id",
        Name: "",
        Array: ['winning','other']
    },
    set: update,
    reset: reset
};

export const AppContext: React.Context<IReactContext<IAppState>> = React.createContext(defaultContext);

export class AppStateProvider extends StateProvider<IAppState> {

    constructor(props: any) {
        super(props, AppContext, defaultContext.state, appSettings.environment === 'development')
    }

}