// 예전 버전의 Jest를 사용할 때는 다음 행의 주석을 풀면 자동 모의기능을 사용하지 않도록 할 수 있다.
// jest.dontMock('../js/generate-password.js')
const generatePassword = require('../js/generate-password.js')
const pattern = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\\|\[\]\/'\,\.\`\~]{8,16}$/

describe('메서드 generatePassword', () => {

    let password, password2

    it('설정한 패턴에 맞는 비밀번호를 반환한다.', () => {
        password = generatePassword()
        expect(password).toMatch(pattern)
    })

    it('이전에 생성한 비밀번호와 다른 새로운 비밀번호를 반환한다.', () => {
        password2 = generatePassword()
        expect(password2).toMatch(pattern)
        expect(password2).not.toEqual(password)
    })
})
