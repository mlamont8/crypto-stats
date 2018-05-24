import moment from "moment";

// Format the date in the json to m/dd format
export const formatDate = jsondata => {
  const fixDate = jsondata.map(obj => {
    let rObj = {};
    rObj = obj;
    rObj.time = moment(rObj.time * 1000).format("MM/D");
    return rObj;
  });
  return fixDate;
};

// Format the time in the json to hh:mm format
export const formatTime = jsondata => {
  const fixTime = jsondata.map(obj => {
    let rObj = {};
    rObj = obj;
    rObj.time = moment(rObj.time * 1000).format("LT");
    return rObj;
  });
  return fixTime;
};

// Format individual time item
export const liveTime = time => moment(time * 1000).format("LTS");

export const monthYear = jsondata => {
  const newTime = jsondata.map(obj => {
    let rObj = {};
    rObj = obj;
    rObj.time = moment(rObj.time * 1000).format("M/YY");
    return rObj;
  });
  return newTime;
}
