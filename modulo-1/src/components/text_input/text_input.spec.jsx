import { render, screen } from '@testing-library/react'
import { TextInput } from './index'
import userEvent from '@testing-library/user-event'

describe('<TextInput />', () => {
  it('should have a value of SearchValue', () => {
    const fn = jest.fn()
    render(<TextInput  handleChange={fn}  searchValue={'testando'} />)
    const input = screen.getByPlaceholderText(/type your search/i)

    expect(input.value).toBe('testando')
  })
  
  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn()
    render(<TextInput  handleChange={fn} />)

    const input = screen.getByPlaceholderText(/type your search/i)

    const searchValue = 'o valor'
    userEvent.type(input, searchValue)

    expect(input.value).toBe(searchValue)
    expect(fn).toHaveBeenCalledTimes(searchValue.length)
  })
  
  it('should match snapshot', () => {
    const fn = jest.fn()
    const { container } = render(<TextInput  handleChange={fn} />)

    expect(container).toMatchSnapshot()
  })

})

