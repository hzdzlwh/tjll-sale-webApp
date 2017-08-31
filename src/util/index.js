/**
 * 倒计时
 * @param {number} intervalTime 间隔时间
 * @return {object} time 时间对象
 */
export function countDown (intervalTime) {
    return new Promise((resolve, reject) => {
      let time = {}
      if (intervalTime <= -1) throw new Error()
      time['DAY'] = Math.floor(intervalTime / (60 * 60 * 24))
      time['HOUR'] = Math.floor(intervalTime / 3600) - (time['DAY'] * 24)
      time['MINUTE'] = Math.floor(intervalTime / 60) - (time['DAY'] * 24 * 60) - (time['HOUR'] * 60)
      time['SECOND'] = Math.floor(intervalTime) - (time['DAY'] * 24 * 60 * 60) - (time['HOUR'] * 60 * 60) - (time['MINUTE'] * 60)
      resolve(time)
    })
  }