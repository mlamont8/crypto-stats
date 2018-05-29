import { SelectData } from './index'

describe('actions', () => {
  it('should create an action to do a search', () => {
    const id = "market";
    const item = "CoinBase";
    const expectedAction = {
      type: "SELECTION_ENTERED",
      id,
      item
    }
    expect(SelectData(id, item)).toEqual(expectedAction);
  })
})

