import * as React from 'react';
import { HomePageSubComponent } from './sub-components/HomePageSubComponent';
import './Home.scss';
import { AppContext } from '../../AppStateProvider';

interface State {
    timeOne: string;
    valueOne: string;
    timeTwo: string;
    valueTwo: string;
}

interface Props {

}

export default class Home extends React.PureComponent<Props, State> {

    state: State = {
        timeOne: "",
        timeTwo: "",
        valueOne: "",
        valueTwo: ""
    }

    getData = (value: number) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value);
            }, 1500);
        })
    }

    onTestOneClick = async () => {
        const start = performance.now();
        const one = await this.getData(1);
        const two = await this.getData(2);
        const three = await this.getData(3);
        const four = await this.getData(4);
        const five = await this.getData(5);
        const end = performance.now();

        this.setState({ timeOne: `${end - start}`, valueOne: `${one},${two},${three},${four},${five}` })
    }

    onTestTwoClick = async () => {
        const start = performance.now();
        const [one, two, three, four, five] = await Promise.all([this.getData(1), this.getData(2), this.getData(3), this.getData(4), this.getData(5)]);
        const end = performance.now();
        this.setState({ timeTwo: `${end - start}`, valueTwo: `${one},${two},${three},${four},${five}` })
    }

    render(): React.ReactNode {
        return (
            <div id="home-page-container">
                <h1>Home Page</h1>
                <div>Time One: {this.state.timeOne} ms</div>
                <div>Value One: {this.state.valueOne}</div>
                <div>Time Two: {this.state.timeTwo} ms</div>
                <div>Value Two: {this.state.valueTwo}</div>
                <button className="btn btn-primary" onClick={this.onTestOneClick}>Performance Test One</button>
                <button className="btn btn-primary" onClick={this.onTestTwoClick}>Performance Test Two</button>
            </div>
        );
    }
}