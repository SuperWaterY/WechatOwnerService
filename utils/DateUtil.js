/**
 * 时间工具类，访问通过Java110Context 去访问，请不要直接引入该文件
 * 规范编程
 * 
 * add by wuxw 2019-12-27
 */

/**
 * @desc: 格式化时间
 * @return: eg: '2018/04/09 21:31:00'
 * @param {Date对象} date 
 */
const formatTime = date => {

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}


/**
 * @desc: 格式化数字
 * @return: n > 10 [eg: 12] => 12 | n < 10 [eg: 3] => '03'
 * @param {*} n 
 */
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getDateYYYYMMDDHHMISS = function () {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  if (hour < 10){
    hour = '0'+hour;
  }
  if (minute < 10){
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }
  return year + "" + month + "" + day + "" + hour + "" + minute + "" + second;
}

module.exports = {
  formatTime: formatTime,
  getDateYYYYMMDDHHMISS: getDateYYYYMMDDHHMISS
}