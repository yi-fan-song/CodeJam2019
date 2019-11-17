const path = require('path');

module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = []
    }

    Object.assign(
      config.resolve.alias, 
      {
        '@': path.resolve(__dirname, './src'),
        '@redux':  path.resolve(__dirname, './src/redux'),
        '@reducer': path.resolve(__dirname, './src/redux/reducer'),
        '@epic':  path.resolve(__dirname, './src/redux/epic'),
        '@page':  path.resolve(__dirname, './src/page'),
        '@component':  path.resolve(__dirname, './src/component'),
        '@styleConstants':  path.resolve(__dirname, './src/styleConstants'),
      }
    );

    config.devServer = { 
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*', 
      }}

    console.log(config.devServer);

    return config;
}  