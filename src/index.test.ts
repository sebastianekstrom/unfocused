import Unfocused from './index';

describe('Unfocused', () => {
  it('overrides the current page title', () => {
    global.window.document.title = 'Initial title';
    new Unfocused({
      focusTitle: 'Focus title',
      blurTitle: 'Blur Title',
    });
    expect(global.window.document.title).toBe('Focus title');
  });

  it('defaults to page title if focusTitle is not passed', () => {
    global.window.document.title = 'Initial title';
    new Unfocused({
      blurTitle: 'Blur Title',
    });
    expect(global.window.document.title).toBe('Initial title');
  });
});
