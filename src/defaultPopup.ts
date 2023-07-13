import { IOptions, IPopupInstance } from "./types/index.types";

export default class defaultPopup implements IPopupInstance {
  public id: string;
  private options: IOptions;

  constructor(options: IOptions) {
    this.id = window?.crypto?.randomUUID();
    this.options = options;
  }

  
}
