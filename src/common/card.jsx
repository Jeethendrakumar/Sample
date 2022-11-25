import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ children, background }) => (
  <div className={`card ${background}`}>{children}</div>
);

export const CardItem = ({ children, item }) => (
  <div className={`card-${item}`}>{children}</div>
);

export const CardLit = ({ children }) => (
  <div className="card bg-light">{children}</div>
);

export const CardProfile = ({
  cardtext,
  institution_image,
  author,
  author_name,
  designation,
}) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "640px" }}>
      <div className="row g-0">
        <div className="col-md-8">
          <div className="row mb-1">
            <div className="col-sm-3">
              <img
                src="static/img/Vector.png"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
          <p className="card-text">{cardtext}</p>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-4">
                <img
                  src={institution_image}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-sm-1">
                <div className="mycontent-left"></div>
              </div>
              <div className="col-sm-7">
                <h6>{author_name}</h6>
                <p>{designation}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img src={author} className="img-fluid rounded-start" alt="..." />
        </div>
      </div>
    </div>
  );
};

export const CardGrid = ({ icon, title, body }) => {
  const [cardColor, setColor] = useState(false);
  const style = cardColor
    ? {
        backgroundColor: "#E5E4E2",
        cursor: "pointer",
        position: "relative",
        maxWidth: "540px",
      }
    : { maxWidth: "540px" };
  return (
    <div
      className="card mb-3"
      style={style}
      onMouseEnter={() => setColor(true)}
      onMouseLeave={() => setColor(false)}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <CardItem item="body">
            <FontAwesomeIcon icon={icon} size={"5x"} />
          </CardItem>
        </div>
        <div className="col-md-8">
          <CardItem item="body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
          </CardItem>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.any,
};

CardLit.propsTypes = {
  children: PropTypes.any,
};

CardGrid.propsTypes = {
  icon: PropTypes.any,
  title: PropTypes.any,
  body: PropTypes.any,
};

CardItem.propTypes = {
  children: PropTypes.any,
  item: PropTypes.string,
  span: PropTypes.number,
};

CardProfile.propTypes = {
  cardtext: PropTypes.string,
  institution_image: PropTypes.any,
  author: PropTypes.any,
  author_name: PropTypes.string,
  designation: PropTypes.string,
};

export default Card;
