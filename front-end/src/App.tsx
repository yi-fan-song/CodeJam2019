import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { WithMenu } from '@component/menu/WithMenu';
import { CustomSwitch } from '@component/switch/CustomSwitch';

const App: React.FC = () => {
  return (
    <Router>
      <WithMenu>
        <CustomSwitch />
      </WithMenu>
    </Router>
  );
};

export default App;
