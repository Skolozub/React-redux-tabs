import React, { Component } from "react";
import axios from "axios";
import { List } from "../components/organizms/list";

class ListContainer extends Component {
  // -----------------Methods-------------------

  fetchList = async params => axios.get("/people", { params });

  loadData = async params => {
    this.setState({ isLoading: true });
    const { data } = await this.fetchList(params);
    this.setState({ list: data.results, isLoading: false });
  };

  // ----------------Lifecycle------------------

  componentDidMount = () => {
    const { params } = this.props;

    this.loadData(params);
  };

  componentDidUpdate = () => {
    const { params } = this.props;
    console.log(params);

    this.loadData(params);
  };

  componentDidUpdate = prevProps => {
    const { params } = this.props;

    if (prevProps.params !== params) this.loadData(params);
  };

  state = {
    list: [],
    isLoading: false
  };

  render = () => (
    <List list={this.state.list} isLoading={this.state.isLoading} />
  );
}

export default ListContainer;
