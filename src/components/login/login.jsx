import React from "react";
import { CardItem, CardLit } from "../../common/card";
import Input from "../../common/input";
import Column from "../../common/column";
import { ToastContainer } from "react-toastify";

const Login = ({ handleClick }) => {
  return (
    <>
      <CardItem item={"body"}>
        <div className="row d-flex justify-content-center">
          <Column span={4}>
            <CardLit>
              <form className="form-horizontal" onSubmit={handleClick}>
                <CardItem item="header">
                  <CardItem item={"text"}>
                    <h3>Login</h3>
                  </CardItem>
                </CardItem>
                <CardItem item="body">
                  <div className="form-group">
                    <Input
                      name={"Username"}
                      type={"email"}
                      children={"Username"}
                      id={"Username"}
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      name={"Password"}
                      type={"password"}
                      children={"Password"}
                      id={"Password"}
                    />
                  </div>
                </CardItem>
                <CardItem item="footer">
                  <button className="btn btn-info col-sm-12">Login</button>
                </CardItem>
              </form>
            </CardLit>
          </Column>
        </div>
      </CardItem>
      <ToastContainer />
    </>
  );
};

export default Login;
