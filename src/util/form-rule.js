export const guestForm = (form) => {
    const nameReg = /^([a-zA-Z ]+|[\u4e00-\u9fa5]+)$/;
    if (!nameReg.test(form.name)) {
        console.log('姓名错误');
        return '姓名错误'
    }
    // const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
    // if (!(form.phone.length > 2 && form.phone.length < 21)) {
    //     console.log('手机号错误');
    //     return '手机号错误'
    // }
    const idReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    if (!(form.idCardNum.length > 2 && form.idCardNum.length < 21)) {
        console.log('身份证错误');
        return '身份证错误'
    }
}
