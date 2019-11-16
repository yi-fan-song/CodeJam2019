module.export = {
  entry: './src/index.js',
  resolve: {
    '@redux': ['./src/redux'],
    '@reducer': ['./src/redux/reducer'],
    '@epic': ['./src/redux/epic'],
    '@page': ['./src/page'],
    '@component': ['./src/component'],
    '@styleConstants': ['./src/styleConstants'],
    '@': ['./src'],
  }
}