export const guestForm = (form) => {
    if (form.name.length === 0) {
        console.log('姓名不能为空');
        return '姓名不能为空'
    }
    const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (!phoneReg.test(form.phone)) {
        console.log('手机号错误');
        return '手机号错误'
    }
    const idReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    if (!idReg.test(form.idCardNum)) {
        console.log('身份证错误');
        return '身份证错误'
    }
}
