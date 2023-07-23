import { iPopup } from './src';

const globalPopupInstance = new iPopup();

const popupInstance = globalPopupInstance.create({
  type: 'default',
  // https://www.npmjs.com/package/jsx-to-html
  // https://github.com/humaan/Modaal
  insertIntoDomElem: 'HTMLelement || query string selector',
  template: '<div>Popup template</div>',
  modalClassName: 'html class names',
  overlayClassName: 'html class names',
  position: 'center',

  closeOnClickOutside: true,
  closeOnEsc: true,
  disableScroll: false,
  catchFocus: true, // If true – when modal window is opened, focus will looped on active elements inside modal. When modal window closing, focus returning on previous selector.
  // https://addmorescripts.github.io/hystModal/

  beforeCreate: () => {},
  onCreated: () => {},
  beforeShow: () => {},
  onShowCallBack: () => {},
  beforeHide: () => {},
  onHideCallBack: () => {},
  beforeDestroy: () => {},
  onDestroyed: () => {},
});

console.log('🚀 ~ popupInstance:', popupInstance);

const minimapInstance = globalPopupInstance.create();
console.log('🚀 ~ minimapInstance:', minimapInstance);

console.log('-> globalPopupInstance', globalPopupInstance);
