// jest.dontMock('../src/build/autocomplete.js')
// jest.autoMockOff()

const rooms = [
    { "_id" : "5622eb1f105807ceb6ad868b", "name" : "node" },
    { "_id" : "5622eb1f105807ceb6ad868c", "name" : "react" },
    { "_id" : "5622eb1f105807ceb6ad868d", "name" : "backbone" },
    { "_id" : "5622eb1f105807ceb6ad868e", "name" : "angular" }
  ]
const TestUtils = require('react-dom/test-utils'),
  React = require('react'),
  ReactDOM = require('react-dom'),
  Autocomplete = require('../src/autocomplete.jsx'),
  fD = ReactDOM.findDOMNode

const autocomplete = TestUtils.renderIntoDocument(
  React.createElement(Autocomplete, {
    options: rooms,
    url: 'test'
  })
)
const optionName = TestUtils.findRenderedDOMComponentWithClass(autocomplete, 'option-name')

describe('Autocomplete', ()=>{
  it('네 개의 초기 항목이 있어야 한다', ()=>{
    var options = TestUtils.scryRenderedDOMComponentsWithClass(autocomplete, 'option-list-item')
    expect(options.length).toBe(4)
  })
  it('입력 값에 따라 항목이 변경되어야 한다', ()=>{
    expect(fD(optionName).value).toBe('')
    fD(optionName).value = 'r'
    TestUtils.Simulate.change(fD(optionName))
    expect(fD(optionName).value).toBe('r')
    options = TestUtils.scryRenderedDOMComponentsWithClass(autocomplete, 'option-list-item')
    expect(options.length).toBe(1)
    expect(fD(options[0]).textContent).toBe('#react')
  })
  it('일치하는 항목이 없으면 새로운 이름을 저장할 수 있어야 한다', ()=>{
    fD(optionName).value = 'ember'
    TestUtils.Simulate.change(fD(optionName))
    options = TestUtils.scryRenderedDOMComponentsWithClass(autocomplete, 'option-list-item')
    expect(options.length).toBe(0)
    var optionAdd = TestUtils.findRenderedDOMComponentWithClass(autocomplete, 'option-add')
    expect(fD(optionAdd).textContent).toBe('Add #ember')

  })
})
