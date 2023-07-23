export interface IPopupContainer {
  state: Map<string, IPopupInstance>;
  create: (options: IOptions) => IPopupInstance | undefined;
}

export interface IPopupInstance {
  id: string;
  popupDomElement?: HTMLDivElement;
  show?: IPopupInstance;
  hide?: IPopupInstance;
  destroy?: void; // or id of popupIsnt
}

export type callback = () => void;
export type popupPosition = 'top' | 'center' | 'bottom';

export interface IOptions {
  type?: 'default' | 'image' | 'video' | 'jsx' | 'noOverlay';
  // https://www.npmjs.com/package/jsx-to-html
  // https://github.com/humaan/Modaal
  insertIntoDomElem?: HTMLElement | string;
  template?: HTMLElement | string;
  modalClassName?: string;
  overlayClassName?: string;
  position?: popupPosition;

  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  disableScroll?: boolean;
  catchFocus?: boolean; // If true – when modal window is opened, focus will looped on active elements inside modal. When modal window closing, focus returning on previous selector.
  // https://addmorescripts.github.io/hystModal/

  beforeCreate?: callback;
  onCreated?: callback;
  beforeShow?: callback;
  onShowCallBack?: callback;
  beforeHide?: callback;
  onHideCallBack?: callback;
  beforeDestroy?: callback;
  onDestroyed?: callback;
}
