/// <reference path="../config/appsettings.d.ts" />
declare var  __webpack_public_path__:string;  
declare type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
};
declare interface IReactContext<T> {
    state: T;
    set: (appState:DeepPartial<T>) => void;
    reset: () => void;
}
declare var appSettings: IAppSettings;