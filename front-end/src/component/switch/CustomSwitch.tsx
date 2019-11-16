import React from 'react';
import { Switch, Route } from 'react-router';
import { NotFound } from '@page/NotFound';
import { Dashboard } from '@page/Dashboard';
import { Signup } from '@page/Signup';
import { About } from '@page/About';

interface Props {}

const CustomSwitchComponent: React.FC = (props: Props) => {
  return (
    <Switch>
      <Route exact path={'/'} component={Dashboard} />
      <Route exact path={'/signup'} component={Signup} />
      <Route exact path={'/about'} component={About} />
      <Route exact path={'/stuff'} component={Dashboard} />
      <Route exact path={'/'} component={Dashboard} />
      <Route exact path={'/'} component={Dashboard} />
      <Route exact path={'/'} component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
};

export const CustomSwitch = CustomSwitchComponent;
