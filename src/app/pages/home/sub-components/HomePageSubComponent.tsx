import * as React from 'react';
import { AppContext } from '../../../AppStateProvider';
import './HomePageSubComponent.scss';

export class HomePageSubComponent extends React.Component {

    // React will assign context for you if we supply the type
    static contextType = AppContext;

    // Define our context
    context!: IReactContext<IAppState>;

    constructor(props:any, context:IReactContext<IAppState>) {
        super(props);
        this.context = context;
    }

    onClick = () => {
        this.context.set({
            Id: "100",
            Array: ['Test']
        });
    }

    onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.context.set({
            Id: e.target.value
        });
    }

    render() {
        return (
            <div id="home-page-sub-component">
                <div className="row">
                    <div className="col-sm-4">
                        Type to Change State
                        <input value={this.context.state.Id} onChange={e => this.onInputChange(e)} className="form-control" />
                    </div>
                </div>
                <br />
                <br />
                Or
                <br />
                <br />
                <div className="row">
                    <div className="col-sm-4">
                        Click to Change State
                    <div>
                            <button className="btn btn-primary" onClick={this.onClick}><i className="bi bi-check"></i>&nbsp;Change Parent State Id Value</button>
                        </div>
                    </div>
                </div>
                <div>
                    Array
                    {
                        this.context.state.Array.map(w => <div key={w}>{w}</div>)
                    }
                </div>
            </div>
        );
    }
}