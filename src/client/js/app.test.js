import { handleSubmit } from './app';

describe('handleSubmit', () => {
  it('should prevent default form submission', () => {
    const event = { preventDefault: jest.fn() };
    handleSubmit(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });
});
