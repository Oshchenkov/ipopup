import { iPopup } from "./src";

const globalPopupInstance = new iPopup();


const popupInstance = globalPopupInstance.create({
  type: "defaultPopup",
});
console.log("🚀 ~ popupInstance:", popupInstance);
console.log("-> globalPopupInstance", globalPopupInstance);


