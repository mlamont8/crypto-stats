import React from "react";
import PropTypes from "prop-types";

// const liveGrid = props => {
class liveGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listArray: []
    };

    // this.liveFormat = this.liveFormat.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     listArray: this.props.liveResults
  //   });
  // }

  // static getDerivedStateFromProps(nextProps, prevState){

  // }

  // liveFormat(raw) {
  //   this.setState({
  //     listArray: [...this.state.listArray, raw]
  //   });
  // }

  render() {
    // const liveArray = this.liveFormat(this.props.liveResults);
    // console.log(liveArray, "new Array object");

    return (
      <div className="info-block live-table">
        <h3>LIVE UPDATES</h3>
        <div className="row">
          <table>
            <thead>
              <tr>
                <th>TIME</th>
                <th>LAST CHANGE</th>
                <th>Last Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1:00 PM</td>
                <td> up</td>
                <td>0.0334454</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

liveGrid.proptypes = {
  price: PropTypes.string,
  flag: PropTypes.string,
  time: PropTypes.string
};

export default liveGrid;
