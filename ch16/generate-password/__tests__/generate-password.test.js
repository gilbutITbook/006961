// 예전 버전의 Jest를 사용할 때는 다음 행의 주석을 풀면 자동 모의기능을 사용하지 않도록 할 수 있다.
// jest.dontMock('../generate-password.js')

describe('메서드 generatePassword', ()=>{
  let password
  generatePassword = require('../generate-password')
  it('여덟 자의 영문 소문자 및 숫자로 생성한 비밀번호를 반환한다', (done)=>{
    password = generatePassword()
    expect(password).toMatch(/^[a-z0-9]{8}$/)
    done()
  })
})
