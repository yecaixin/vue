/**
 * Created by yecaixin on 2019/4/18.
 */
function paramToObject(str) {
    let obj = {};
    if (str.substring(0, 1) == '?') {
        str = str.slice(1);
    }

    let strArr = str.split('&');
    let param = '';
    for (let i = 0; i < strArr.length; i++) {
        param = strArr[i].split('=');
        obj[param[0]] = param[1] || null;
    }

    return obj;
}

function objectToParam(obj) {
    let str = '';
    for (let key in obj) {
        str += `${key}=${obj[key]}&`;
    }
    str = str.slice(0, -1)
    return str
}

//获取地址栏参数，转化成json
export function getDataFromParam(key) {
    let param = location.search;

    if (!param) {
        return null;
    } else {
        param = paramToObject(decodeURIComponent(param.slice(0)));
    }
    return key != undefined ? param[key] : param;
}
//路由地址参数，转成json
export function getDataFromRouter(key) {
    let param = location.hash;
    let begin = param.indexOf('?')
    if (!param) {
        return null;
    } else {
        param = paramToObject(decodeURIComponent(param.slice(begin + 1)));
    }
    return param[key];
}
//带参数跳转到目标页面
export function turnToNextPage(url, opt, newWin) {
    let u = isEmpty(opt) ? url : `${url}?${objectToParam(opt)}`;
    if (newWin) {
        window.open(u)
    } else {
        window.location.href = u;
    }
}

//根据逗号拆分字符串为数组
export function sepByComma(data, emptyTxt) {
    let emptyArray = !emptyTxt ? [] : [emptyTxt];
    return !data ? emptyArray : data.split(',');
}
//将数组根据按逗号组合
export function joinByComma(arr) {
    if (!Array.isArray(arr))return arr;
    return arr.length == 0 ? '' : arr.join(',');
}

//判断是否为undefined并设置值,不设值时判断是否为空
export function setEmpty(data, val) {
    if (data == undefined) {
        return val != undefined ? val : false;
    } else {
        return data;
    }
}
//复制指定数组
export function doCopy(data) {
    const t = Array.isArray(data) ? 'array' : typeof (data);
    let o = data;
    if (t === 'array') {
        o = [];
        for (let i = 0; i < data.length; i++) {
            o.push(data[i]);
        }
    } else if (t === 'object') {
        o = {};
        for (let i in data) {
            o[i] = data[i];
        }
    }
    return o;
}
export const DateUtils = {
    now: function () {
        return new Date();
    },
    dateFormat: function (date, fmt) {
        if (!date) return '';
        let o = {
            "M+": date.getMonth() + 1, // 月份
            "d+": date.getDate(), // 日
            "h+": date.getHours(), // 小时
            "m+": date.getMinutes(), // 分
            "s+": date.getSeconds(), // 秒
            "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
            "S": date.getMilliseconds() // 毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (let k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    },
    //计算 加 i 天 或者减 i 天
    dayCalc(i){
        let date = this.now();
        date.setDate(date.getDate() + i);
        return date;
    },
    //将 yyyy-MM-dd hh:mm:ss 格式转成正确的Date对象;
    dateToRegular: function (value) {
        let v = value.replace(/\D+/g, ",").split(',');
        v[1] = parseInt(v[1]) - 1;
        for (let i = 0; i < v.length; i++) {
            v[i] = parseInt(v[i])
        }
        v = v.join(',');
        return eval("(new Date(" + v + "))");
    },
    //比较两个时间,如果开始时间大于结束时间,则交换两个时间
    swapTime(startTime, endTime){
        const start = startTime ? DateUtils.dateToRegular(startTime).getTime() : '';
        const end = endTime ? DateUtils.dateToRegular(endTime).getTime() : '';
        let timeArr = [];
        if (start && end && start > end) {
            startTime = [endTime, endTime = startTime][0];
            timeArr = [startTime, endTime]
        } else if (start && end) {
            timeArr = [startTime, endTime]
        } else if (start) {
            timeArr = [startTime, '']
        } else if (end) {
            timeArr = ['', endTime]
        }
        return timeArr;
    }
};

// 去首尾空格
export function strim(str) {
    if (str === undefined || str === null) return '';
    return str.replace(/(^\s*)|(\s*$)/g, '');
}

// 判断是否为空 {}，[],'','undefined','null',undefined,null
export function isEmpty(v) {

    if (v && typeof v === 'object') {

        return Object.keys(v).length === 0;

    } else if (Array.isArray(v)) {
        return v.length === 0
    }

    return v === '' || v === 'undefined' || v === undefined || v === null || v === 'null'
}

//验证规则
const Regs = {
    isChinese: /^[\u4e00-\u9fa5]+$/,
    isEmail: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    isURL: /^[a-zA-z]+:\/\/[^\s]+$/,
    isTel: /^((\d{3,4})-)?(\d{3,8})(-(\d{3,}))?$/,
    isMobile: /^(?:13\d|14\d|15\d|16\d|17\d|18\d)\d{5}(\d{3}|\*{3})$/,
    isLegal: /^[a-zA-Z0-9]{6,20}$/, //(允许6-20字节，允许字母数字下划线)
    isIP: /^\d+\.\d+\.\d+\.\d+$/,
    isEmpty: /^\s*$/,
    isCarNum: /^[a-zA-Z0-9]{4}[a-zA-Z0-9学警港澳]$/,
    isFullCarNum: /^[\u4e00-\u9fa5][a-zA-Z][a-zA-Z0-9]{4}[a-zA-Z0-9学警港澳]$/,
    isName: /^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9\u4e00-\u9fa5]{0,13}$/ //姓名和昵称格式
}
//按规则验证
String.prototype.isInReg = function (reg) {
    var _i = reg;
    var _s = this;
    return _i.test(_s);
};
//移动电话验证
export function isMobile(mobile) {
    return mobile.isInReg(Regs.isMobile);
}
//固定电话验证
export function isTel(tel) {
    return tel.isInReg(Regs.isTel);
}
//验证完整车牌
export function isCarNum(carNum) {
    return carNum.isInReg(Regs.isFullCarNum);
}
//汉字验证
export function isChinese(val) {
    return val.isInReg(Regs.isChinese);
}
//url验证
export function isUrl(val) {
    return val.isInReg(Regs.isURL);
}

//图片预加载
export function imgPreLoad(url, fn) {
    let img = new Image();

    img.src = url;
    img.onload = function () {
        fn && fn(img)
    }
}

export function groupArray(arr, num) {
    num = num * 1 || 1;
    let ret = [];
    arr.forEach(function (item, i) {
        if (i % num === 0) {
            ret.push([]);
        }
        ret[ret.length - 1].push(item);
    });
    return ret;
};

//判断手机是否为安卓系统
export function isAndroid() {
    let u = navigator.userAgent;
    return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
}


