/**
 *  영문+숫자+특수기호 16자 이하의 문자열
 */
export const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{1,16}$/;