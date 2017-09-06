const util = {
    dateFormatMAndD: function(date) {
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return m + '月' + d + '日';
    },
	dateFormat: function(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
    },
    dateFormatLong: function(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? '0' + h : h;
        let M = date.getMinutes();
        M = M < 10 ? '0' + M : M;
        let s = date.getSeconds();
        s = s < 10 ? '0' + s : s;
        return y + '-' + m + '-' + d + ' ' + h + ':' + M + ':' + s;
    },
    DateDiff: function(date1, date2) {
        const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
        const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
        return Math.ceil((d2.valueOf() - d1.valueOf()) / 24 / 60 / 60 / 1000);
    },
    getHAndMs(val) {
        const h = parseInt(val);
        const m = val - h;
        if (m) {
            return `${h}小时${parseInt(m * 60)}分钟`;
        }
        return `${h}小时`;
    },
    diffDate: function(date, diff) {
        return new Date(date.valueOf() + diff * 24 * 60 * 60 * 1000);
    },
    isSameDay: function(date1, date2) {
        return date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate();
    },
}
module.exports = util;