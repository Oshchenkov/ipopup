export interface IPopupContainer {
  state: Map<string, IPopupInstance>;
}

export interface IPopupInstance {
  id: string;
  popupDomElement: HTMLDivElement;
  show: IPopupInstance;
  hide: IPopupInstance;
  destroy: void; // or id of popupIsnt
}

export interface IOptions {
  type: "defaultPopup" | "defaultPopup2";
}
