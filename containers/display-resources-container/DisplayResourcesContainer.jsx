import axios from "axios";
import { Spin, List } from "antd";
import React, { Component, Fragment } from "react";
import { Resource } from "../../components";
import res from "../../res";
import "./style.css";

const INIT_STATE = {
  resources: null
};

export default class CreateResourceContainer extends Component {
  state = INIT_STATE;

  async componentDidMount() {
    const response = await axios.get(`${res.api}/all`);
    console.log(response);
    this.setState({
      ...this.state,
      resources: response.data
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.resources === null && (
          <div className="loading">
            <Spin />
          </div>
        )}
        {this.state.resources !== null && (
          <List
            itemLayout="horizontal"
            dataSource={this.state.resources}
            renderItem={resource => <Resource {...resource} />}
          />
        )}
      </Fragment>
    );
  }
}
