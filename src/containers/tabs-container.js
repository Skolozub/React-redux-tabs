import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { setTabsParams, deleteTabsComponent } from "../actions/tabs-actions";

class TabsContainer extends Component {
  // -----------------Methods-------------------

  parseURLParamsAndAddPage = () => {
    const { location, paramName, activeTabKey, withparams } = this.props;
    const params = queryString.parse(location.search);

    if (withparams)
      return { ...params, [paramName]: params[paramName] || activeTabKey };
    return { [paramName]: params[paramName] || activeTabKey };
  };

  // ----------------Lifecycle------------------

  componentDidMount = () => {
    const { tabsName, setParamsHandler } = this.props;
    const newParams = this.parseURLParamsAndAddPage();
    setParamsHandler({ tabsName: tabsName, params: newParams });
  };

  componentDidUpdate = prevProps => {
    const { location, tabsName, setParamsHandler } = this.props;

    const paramsHasChanged = prevProps.location.search !== location.search;
    if (!paramsHasChanged) return null;

    const newParams = this.parseURLParamsAndAddPage();
    setParamsHandler({ tabsName, params: newParams });
  };

  componentWillUnmount = () => {
    const { tabsName, deleteParamsHandler, saveParams } = this.props;
    if (!saveParams) deleteParamsHandler({ tabsName });
  };

  render = () => <>{this.props.children}</>;
}

const mapStateToProps = state => ({
  location: state.router.location
});

const mapDispatchToProps = dispatch => ({
  setParamsHandler: payload => dispatch(setTabsParams(payload)),
  deleteParamsHandler: payload => dispatch(deleteTabsComponent(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsContainer);
