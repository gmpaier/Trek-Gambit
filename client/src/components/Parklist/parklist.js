import ParkList from './ParkList'
import { screen, render } from ''
import ''
import userEvent from ''

describe('ParkList', () => {
  let randomBtn
  const generateRandomParkCode = jest.fn()

  beforeEach(() => {
    render(
      <ParkList 
        generateRandomParkCode={generateRandomParkCode}
      />
    )
    randomBtn = screen.getByTestId("randomize-button")
  })

  it('should render with a randomize button', () => {
    expect(randomBtn).toBeInTheDocument()
  })

  it('should call generateRandomParkCode when the random button is clicked', () => {
    userEvent.click(randomBtn)
    expect(generateRandomParkCode).toHaveBeenCalledTimes(1)
  })
})