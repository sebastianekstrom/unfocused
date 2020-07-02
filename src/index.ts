interface Params {
  blurTitle: string;
  focusTitle?: string;
}

class Unfocused {
  private initialTitle = document.title;
  private blurTitle: string;
  private focusTitle: string;

  constructor({blurTitle, focusTitle}: Params) {
    this.blurTitle = blurTitle;
    this.focusTitle = focusTitle || this.initialTitle;
    document.title = this.focusTitle;
    this.trackChange();
  }

  destroy = () => {
    document.removeEventListener('visibilitychange', this.onChangeFocus);
  };

  private onChangeFocus = () => {
    if (document.visibilityState === 'hidden') {
      document.title = this.blurTitle;
    } else {
      document.title = this.focusTitle;
    }
  };

  private trackChange = () => {
    document.addEventListener('visibilitychange', this.onChangeFocus);
  };
}

export default Unfocused;
