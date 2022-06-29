(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.d({},{Mw:()=>L,eU:()=>y,w6:()=>b,fE:()=>k});var n=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=t.link,this._name=t.name,this._cardSelector=n}var n,o;return n=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeBtn=this._element.querySelector(".element__like"),this._image=this._element.querySelector(".element__photo"),this._setEventListeners(),this._image.src=this._link,this._image.alt="Фото ".concat(this._link),this._element.querySelector(".element__title").textContent=this._name,this._element}},{key:"_handleLikeButtonClick",value:function(){this._likeBtn.classList.toggle("element__like_active")}},{key:"_handleDeleteButtonClick",value:function(e){e.target.closest(".element").remove()}},{key:"_handleOpenPhoto",value:function(){b.src=this._link,b.alt="Фото ".concat(this._link),k.textContent=this._name,L(y)}},{key:"_setEventListeners",value:function(){var e=this;this._likeBtn.addEventListener("click",(function(){e._handleLikeButtonClick()})),this._element.querySelector(".element__delete").addEventListener("click",(function(t){e._handleDeleteButtonClick(t)})),this._image.addEventListener("click",(function(){e._handleOpenPhoto()}))}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._buttonSubmit=n.querySelector(t.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){var t=e.validationMessage;e.validity.valid?this._hideInputError(e):this._showInputError(e,t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toogleButtonState",value:function(){this._hasInvalidInput()?this.disableButtonSubmit():this.enableButtonSubmit()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toogleButtonState()}))}))}},{key:"deleteError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"disableButtonSubmit",value:function(){this._buttonSubmit.disabled=!0,this._buttonSubmit.classList.add(this._inactiveButtonClass)}},{key:"enableButtonSubmit",value:function(){this._buttonSubmit.disabled=!1,this._buttonSubmit.classList.remove(this._inactiveButtonClass)}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),r=document.querySelector(".profile__edit-button"),u=document.querySelector(".popup-edit"),s=document.querySelector(".popup-edit__form"),l=document.querySelector(".popup-edit__input-name"),a=document.querySelector(".popup-edit__input-desc"),c=document.querySelector(".profile__title"),p=document.querySelector(".profile__subtitle"),d=document.querySelector(".profile__add-button"),_=document.querySelector(".popup-add"),m=document.querySelector(".popup-add__form"),h=(document.querySelector(".popup-add__sub-btn"),document.querySelector(".elements")),f=document.querySelector(".popup-add__input-name"),v=document.querySelector(".popup-add__input-desc"),y=document.querySelector(".popup-photo"),b=document.querySelector(".popup-photo__image"),k=document.querySelector(".popup-photo__subtitle"),S=document.querySelector(".body"),B=document.querySelectorAll(".popup"),E={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__sub-btn",inactiveButtonClass:"popup__sub-btn_disabled",inputErrorClass:"popup__input_type-error",errorClass:"popup__error_visible"},w={};Array.from(document.forms).forEach((function(e){w[e.name]=new i(E,e),w[e.name].enableValidation()})),B.forEach((function(e){e.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&g(),e.target.classList.contains("popup__close")&&g()}))}));var C=function(e,t,o){var i=new n({name:t,link:o},".temp");e.prepend(i.generateCard())};function L(e){e.classList.add("popup_opened",!0),D(),document.addEventListener("keydown",q)}function g(){document.querySelector(".popup_opened").classList.remove("popup_opened"),D(),document.removeEventListener("keydown",q)}function D(){S.classList.toggle("body_overflow")}[{name:"Республика Коми",link:"https://www.russiadiscovery.ru/upload/files/files/Puteshestvie-na-Ural%281%29.jpg"},{name:"Алтай",link:"https://www.russiadiscovery.ru/upload/files/files/%D0%90%D0%BB%D1%82%D0%B0%D0%B8%CC%86-%281%29%281%29.jpg"},{name:"Якутия",link:"https://www.russiadiscovery.ru/upload/files/files/%D0%9B%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B5_%D1%81%D1%82%D0%BE%D0%BB%D0%B1%D1%8B.jpg"},{name:"Камчатка",link:"https://www.russiadiscovery.ru/upload/files/files/Trekking-na-Kamchatke%281%29.jpg"},{name:"Карелия",link:"https://www.russiadiscovery.ru/upload/files/files/%D0%A0%D1%83%D1%81%D0%BA%D0%B5%D0%B0%D0%BB%D0%B0.jpg"},{name:"Карачаевск",link:"https://i.yapx.ru/R2zrO.png"}].forEach((function(e){var t=e.name,n=e.link;C(h,t,n)}));var q=function(e){"Escape"===e.key&&g()};r.addEventListener("click",(function(){l.value=c.textContent,a.value=p.textContent,L(u),w[s.name].deleteError()})),d.addEventListener("click",(function(){return L(_)})),s.addEventListener("submit",(function(e){e.preventDefault(),c.textContent=l.value,p.textContent=a.value,g()})),m.addEventListener("submit",(function(e){e.preventDefault(),C(h,f.value,v.value),e.target.reset(),g(),w[m.name].disableButtonSubmit(),w[m.name].deleteError()}))})();