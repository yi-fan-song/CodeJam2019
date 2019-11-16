import React from 'react';

interface Props {}

interface State {}

class EmptyComponentClass extends React.Component<Props, State> {
  state = {};
  render() {
    return <div />;
  }
}

const EmptySFCComponent: React.FC = (props: Props) => {
  return <div />;
};
