import React, { useEffect } from "react";
import { bindActionCreators, Action, Dispatch } from "redux";
import { connect } from "react-redux";
import { StoreState } from "@/redux/reducer/rootReducer";
import { Item, fetchList, setListAction } from "@/redux/reducer/mlReducer";

interface ReduxProps {
    list: Item[]
}

interface DispatchProps {
    fetchList: () => void;
    setList: (items: Item[]) => void;
}

type Props = ReduxProps & DispatchProps;

const ListComponent: React.FC<Props> = (props: Props) => {
    useEffect(() => {
        setInterval(() => {props.setList(props.list.map(i => {return { name: i.name, count: i.count + 1}}))}, 10000)
    })
    return (
    <ul> 
        {props.list.map(
            item => {
                return <li>{item.name} : {item.count}</li>
            }
        )}
    </ul>)
};

const mapStateToProps = (state: StoreState): ReduxProps => {
    return {
      list: state.ml.list
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

export const List = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListComponent);
