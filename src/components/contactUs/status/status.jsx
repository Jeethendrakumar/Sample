import React from "react";
import Card, { CardItem, CardLit } from "../../../common/card";
import Column from "../../../common/column";
import Dropdownlist from '../../../common/dropDown'

class Status extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            selectedValue : ''
        }
    }
    handleSelect = (e) => {
        e.preventDefault()
        this.setState({selectedValue : e.target.value})
    }
    
  render() {
    const dropdownList = [
        'IT' , 'Dongle', 'Telephone', 'Internet'
    ]
    return (
      <>
        <CardItem item="body">
          <div className="row">
            <Column span={6}>
              <CardLit>
                <form className="form-horizontal">
                  <CardItem item={"header"}>
                    <CardItem item={"text"}>Form</CardItem>
                  </CardItem>
                  <CardItem item={"body"}>
                    <CardItem item={"text"}>Start Duration:</CardItem>
                    <br></br>
                    <div className="form-group">
                      <label className="col-sm-3" htmlFor="startdate">
                        Date:
                      </label>
                      <input
                        className="form-control col-sm-12"
                        type="date"
                        id="startdate"
                        name="startdate"
                        required
                      />
                      <br />
                      <Dropdownlist dropdown={dropdownList} />
                      {/* <select onChange={(e) => this.handleSelect(e)} className="form-control col-sm-12" name="cars" id="cars"> */}
                        {/* <option value={'volvo'}>Volvo</option> */}
                        {/* {dropdownList.map(items => {
                            return <option value={items} key={items}>{items}</option>
                        })}
                      </select> */}
                    </div>
                    <div className="form-group">
                      <label className="col-sm-3" htmlFor="starttime">
                        Time:
                      </label>
                      <input
                        className="form-control col-sm-12"
                        type="time"
                        id="starttime"
                        step={1}
                        required
                      />
                    </div>
                  </CardItem>
                  <CardItem item={"footer"}>
                    <button
                      className="btn btn-secondary col-sm-3
                                            "
                      type="reset"
                    >
                      Reset
                    </button>
                    <button className="btn btn-info col-sm-3 offset-sm-6">
                      Generate
                    </button>
                  </CardItem>
                </form>
              </CardLit>
            </Column>
            <Column span={6}>
              <CardLit>
                <CardItem item={"header"}>
                  <CardItem item={"text"}>Result</CardItem>
                </CardItem>
                <CardItem item={"body"}>
                  <div>{/* {content} */}</div>
                </CardItem>
              </CardLit>
            </Column>
          </div>
        </CardItem>
      </>
    );
  }
}

export default Status;
