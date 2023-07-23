import defaultPopup from './tempates/defaultPopup';
import { IOptions, IPopupContainer, IPopupInstance } from './types/index.types';

export default class popupContainer implements IPopupContainer {
  public state = new Map<string, IPopupInstance>();

  constructor() {
    return this;
  }

  create(options: IOptions = {}) {
    if (!this.isClient()) {
      this.errorConsoleMessage('iPopup shows only on client (Browser).\n');
      return;
    }
    const popupInstance: IPopupInstance = new defaultPopup(options);

    this.state.set(popupInstance.id, popupInstance);
    return popupInstance;
  }

  isClient(): boolean {
    return Boolean(window);
  }

  errorConsoleMessage(msg: string) {
    console.error(msg);
  }
}
