export interface IOptions {
  type: "defaultPopup" | "defaultPopup2";
}

export interface IPopupContainer {
  state: Map<string, IPopupInstance>;
}

export interface IPopupInstance {
  id: string;
}
