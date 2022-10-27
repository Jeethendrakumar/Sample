import React from "react";
import { fetchApi, changePage } from "../../actions/index";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Column from "../../common/column";
import Card, { CardItem, CardLit } from "../../common/card";
import { getItems } from "../../common/commonFunc";
import Pagination from "../../common/pagination";

class ServiceGrid extends React.Component {
  componentDidMount() {
    this.props.fetchApi();
  }
  render() {
    let { services, changePage } = this.props;
    let { current_page, limit, result } = services;
    let content;
    const items = getItems(current_page, result, limit);
    const size = result.length;
    const data = { size, current_page, limit, changePage };
    content = (
      <>
        {items.map((item) => {
          return (
            <Column span={3} key={item.id}>
              <Card>
                <CardItem item="header">Post Id: {item.postId}</CardItem>
                <CardItem item="body">
                  Name: {item.name} <br />
                  Email: {item.email}
                </CardItem>
              </Card>
            </Column>
          );
        })}
      </>
    );
    return (
      <CardItem item="body">
        <div className="row">{content}</div>
        <Pagination {...data} />
      </CardItem>
    );
  }
}

const mapStateToProps = (state) => {
  return { services: state.services };
};

ServiceGrid.propTypes = {
  services: PropTypes.object,
  fetchApi: PropTypes.func,
  changePage: PropTypes.func,
};

export default connect(mapStateToProps, { fetchApi, changePage })(ServiceGrid);
