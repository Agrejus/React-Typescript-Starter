import config from '../webpack.config.common';
import { merge } from 'webpack-merge';
import { DefinePlugin } from 'webpack';
import { appSettings } from './appsettings.transform';
import { appSettings as defaultSettings } from '../appsettings';

export default merge(config, {

    optimization: {
        // We no not want to minimize our code in dev
        minimize: false
    },
    plugins: [
        new DefinePlugin({
            appSettings: JSON.stringify({ ...defaultSettings, ...appSettings })
        })
    ],

    mode: "development",
});