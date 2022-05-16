//策略模式

function computedTime(nnum) {
  // 1 3 5 7 8 10 12 31天
  // 2 4 6 9 11 30
  const syear = parseInt(nnum.toString().substring(0, 4));
  const smonth = parseInt(nnum.toString().substring(4, 6));
  const sday = parseInt(nnum.toString().substring(6, 8));
  if (
    smonth === 1 ||
    smonth === 3 ||
    smonth === 5 ||
    smonth === 7 ||
    smonth === 8 ||
    smonth === 10 ||
    smonth === 12
  ) {
    if (sday <= 31) {
      return nnum;
    } else {
      // 不小于31 那么就是月份+1
      if (smonth === 12) {
        return parseInt(`${syear + 1}0101`);
      } else {
        return smonth > 9
          ? parseInt(`${syear}${smonth + 1}01`)
          : parseInt(`${syear}0${smonth + 1}01`);
      }
    }
  } else {
    if (smonth === 2) {
      // 判断是否是闰年
      if (syear % 4 === 0 && syear % 100 !== 0) {
        // 2月份29天
        if (sday <= 29) {
          return nnum;
        } else {
          return smonth > 9
            ? parseInt(`${syear}${smonth + 1}01`)
            : parseInt(`${syear}0${smonth + 1}01`);
        }
      } else {
        // 非閏年
        if (sday <= 28) {
          return nnum;
        } else {
          return smonth > 9
            ? parseInt(`${syear}${smonth + 1}01`)
            : parseInt(`${syear}0${smonth + 1}01`);
        }
      }
    } else {
      if (sday <= 30) {
        return nnum;
      } else {
        return smonth > 9
          ? parseInt(`${syear}${smonth + 1}01`)
          : parseInt(`${syear}0${smonth + 1}01`);
      }
    }
  }
}

var map = {
  sdayLen(sday) {
    if (sday <= 31) {
      return sday;
    } else {
      return 1;
    }
  },
  bigMonth(smonth) {
    if (
      smonth === 1 ||
      smonth === 3 ||
      smonth === 5 ||
      smonth === 7 ||
      smonth === 8 ||
      smonth === 10 ||
      smonth === 12
    ) {
      return 31;
    }
  },
  smallMonth(smonth) {
    if (smonth === 4 || smonth === 6 || smonth === 9 || smonth === 11) {
      return 30;
    }
  },
  secondMonth(smonth) {
    if (smonth === 2) {
      return 28;
    }
  },
  leapYearSecondMonth(smonth) {
    if (smonth === 2) {
      return 29;
    }
  },
  leapYear(syear) {
    if (syear % 4 === 0 && syear % 100 !== 0) {
      return true;
    } else {
      return false;
    }
  },
};

function computedSum() {}

var NOW_TIME = 20220515;

function time(day) {
  for (let i = 0; i < day; i++) {
    const syear = parseInt(NOW_TIME.toString().substring(0, 4));
    const smonth = parseInt(NOW_TIME.toString().substring(4, 6));
    const sday = parseInt(NOW_TIME.toString().substring(6, 8));
    if (
      (map.bigMonth(smonth) && sday === 31) ||
      (map.smallMonth(smonth) && sday === 30) ||
      (map.leapYear(syear) && map.leapYearSecondMonth(smonth) && sday === 29) ||
      (!map.leapYear(syear) && map.secondMonth(smonth) && sday === 29)
    ) {
      if (smonth === 12) {
        NOW_TIME = parseInt(`${syear + 1}0101`);
      } else {
        NOW_TIME =
          smonth >= 9
            ? parseInt(`${syear}${smonth + 1}01`)
            : parseInt(`${syear}0${smonth + 1}01`);
      }
    } else {
      NOW_TIME++;
    }
    console.log(computedTime(NOW_TIME));
  }
}


time(110);
