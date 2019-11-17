import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({ name: 'lul' })
  .use(reactotronRedux())
  .connect();

export default reactotron;
