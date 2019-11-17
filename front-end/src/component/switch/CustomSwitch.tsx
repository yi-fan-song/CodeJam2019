import React from 'react';
import { Switch, Route } from 'react-router';
import { NotFound } from '@page/NotFound';
import { Example } from '@/page/Example';
import { About } from '@page/About';
import { List } from '@page/List';

interface Props {}

const CustomSwitchComponent: React.FC = (props: Props) => {
  return (
    <Switch>
      <Route exact path={'/'} component={About}/>
      <Route exact path={'/about'} component={About} />
      <Route exact path={'/list'} component={List} />
      <Route exact path={'/example'} component={Example} />
      <Route component={NotFound} />
    </Switch>
  );
};

export const CustomSwitch = CustomSwitchComponent;
