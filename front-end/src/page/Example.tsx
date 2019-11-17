import React, { useEffect } from "react";
import { bindActionCreators, Action, Dispatch } from "redux";
import { connect } from "react-redux";
import { Colors } from "@styleConstants/Colors";
import { StoreState } from "@/redux/reducer/rootReducer";
import { Item, fetchList, setListAction } from "@/redux/reducer/mlReducer";
import { BaseText } from "@/styleConstants/BaseComponents";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  & li {
    display: flex;
    flex-direction: row;
    height: 40px;
    border-bottom: 1px ${Colors.dark} solid;
    margin-top: 10px;
    padding-right: 12px;
    padding-left: 12px;
  }
  & li p {
    line-height: 30px;
    text-align: left;
  }
  & li p:nth-child(1) {
    width: 30%;
  }
  & li p:nth-child(2) {
    width: 25%;
  }
  & li p:nth-child(3){
    width: 30%;
    font-size: 8px;
    color: ${Colors.red};
  }
`;

const StyledButton = styled.button`
  justify-self: flex-end;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 5px;
  margin-bottom: 5px;
  color: ${Colors.light_pinkish};
  &:hover {
    color: ${Colors.dark_pinkish};
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const btnOnClick = () => {
  alert(
    `This button should allow an user to add an item to his/her shopping cart by connecting with amazon or some other online shopping/grocery service.`
  );
};

interface ReduxProps {
  list: Item[];
  response: any;
}

interface DispatchProps {
  fetchList: () => void;
  setList: (items: Item[]) => void;
}

type Props = ReduxProps & DispatchProps;

const ExampleComponent: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    props.fetchList();
    setInterval(props.fetchList, 10000);
  }, []);
  return (
    <StyledList>
      {props.list.map(item => {
        return (
          <li>
            <BaseText>{item.name}</BaseText>
            <BaseText>{item.quantity}</BaseText>
            <BaseText>!!! {item.name} will go bad !!!</BaseText>
            <StyledButton onClick={btnOnClick}>
              Add to Shopping List
            </StyledButton>
          </li>
        );
      })}
    </StyledList>
  );
};

const mapStateToProps = (state: StoreState): ReduxProps => {
  return {
    list: state.ml.list,
    response: state.ml.response
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return bindActionCreators(
    {
      fetchList: fetchList,
      setList: setListAction
    },
    dispatch
  );
};

export const Example = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleComponent);
