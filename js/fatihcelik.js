/* DARK MOD AYARI */
const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();


/*MENÜ AYARLARI İÇİN KODLAR*/
"use strict";

const attachEvent = (element, event, handler, options) => {
  element.addEventListener(event, handler, options);
  return {
    unsubscribe() {
      element.removeEventListener(event, handler);
    }
  };
};

// export { attachEvent }

const backfaceFixed = fixed => {
  /**
   * 表示されているスクロールバーとの差分を計測し、背面固定時はその差分body要素に余白を生成する
   */
  const scrollbarWidth = window.innerWidth - document.body.clientWidth;
  document.body.style.paddingRight = fixed ? `${scrollbarWidth}px` : "";

  /**
   * 背面固定する対象を決定する
   */
  const scrollingElement = "scrollingElement" in document ? document.scrollingElement : document.documentElement;

  /**
   * 背面固定時に変数にスクロール量を格納
   */
  const scrollY = fixed ? scrollingElement.scrollTop : parseInt(scrollingElement.style.top || "0");

  /**
   * CSSで背面を固定
   */
  const styles = {
    height: "100vh",
    left: "0",
    overflow: "hidden",
    position: "fixed",
    top: `${scrollY * -1}px`,
    width: "100vw"
  };
  Object.keys(styles).forEach(key => {
    scrollingElement.style[key] = fixed ? styles[key] : "";
  });

  /**
   * 背面固定解除時に元の位置にスクロールする
   */
  if (!fixed) window.scrollTo(0, scrollY * -1);
};

// export { backfaceFixed }

// import { attachEvent } from '../utils/attachEvent'
// import { backfaceFixed } from '../utils/backfaceFixed'

class DrawerMenu {
  constructor(root, options) {
    this.root = root;
    if (!this.root) return;
    const defaultOptions = {
      openTriggerSelector: ".js-menu-open-trigger",
      // メニューを開く際のターゲットとなるセレクタ
      closeTriggerSelector: ".js-menu-close-trigger",
      // メニューを閉じる際のターゲットとなるセレクタ
      inertTargetSelector: "#js-contents-wrapper",
      // 開いている時はこのセレクタを読み上げ対象外にする。
      clickLinkToClose: true,
      // メニュー内のリンクをクリック時にメニューを閉じるか
      toggleDuration: 500 // メニューの遷移時間
    };

    const mergedOptions = Object.assign(defaultOptions, options);
    this.options = mergedOptions;

    /**
     * メニューを開くトリガーとなるセレクタの設定
     */
    this.openTrigger = document.querySelector(this.options.openTriggerSelector);
    if (!this.openTrigger) throw TypeError("メニューを開く要素が見つかりません");

    /**
     * ボタンとは別にメニューを閉じるトリガーとなるセレクタの設定
     * メニュー内のリンクをクリック時にメニューを閉じる設定をしている場合はメニュー内のa要素をクリック時にもメニューを閉じる
     */
    this.closeTrigger = document.querySelectorAll(this.options.closeTriggerSelector);

    /**
     * メニュー内のリンクをクリック時にメニューを閉じる設定をしている場合はメニュー内のa要素をクリック時にもメニューを閉じる
     */
    this.innerLink = this.root.querySelectorAll("a:not(.js-ignore-target)");

    /**
     * メニューが開かれている際に読み上げ対象外とするセレクタの指定
     */
    this.inertTarget = document.querySelector(this.options.inertTargetSelector);
    if (!this.inertTarget) throw TypeError("inert対象のセレクタの指定は必須です");

    /**
     * イベントハンドラの設定
     */
    this.openTriggerHandler = this.handleOpenTriggerClick.bind(this);
    this.closeTriggerHandler = this.handleCloseTriggerClick.bind(this);
    this.innerLinkHandler = this.handleInnerLinkClick.bind(this);
    this.keyupHandler = this.handleKeyup.bind(this);
  }
  init() {
    /**
     * 状態を格納する変数
     */
    this.isExpanded = false; // メニューの開閉状態を格納する

    /**
     * 初期化時に属性を付与
     */
    this.prepareAttributes();
    attachEvent(this.openTrigger, "click", this.openTriggerHandler);
  }
  prepareAttributes() {
    this.root.setAttribute("role", "dialog");
    this.root.setAttribute("aria-modal", "true");
    this.root.setAttribute("tabindex", "-1");
    this.root.setAttribute("inert", "");
    this.root.style.display = "none";
    this.openTrigger.setAttribute("aria-haspopup", "true");
    document.documentElement.style.setProperty("--menu-toggle-duration", `${this.options.toggleDuration}ms`);
  }
  handleOpenTriggerClick(event) {
    event.preventDefault();
    this.open();
  }
  handleCloseTriggerClick(event) {
    event.preventDefault();
    this.close();
  }
  handleInnerLinkClick(event) {
    this.close();
  }
  handleKeyup(event) {
    if (event.key === "Escape" || event.key === "Esc") this.close();
  }
  open() {
    // メニューの`display:none`を削除
    this.root.style.display = "";
    // Esc押下時イベントを追加
    attachEvent(document, "keyup", this.keyupHandler);
    // 開くボタンクリック時のイベントを削除
    attachEvent(this.openTrigger, "click", this.openTriggerHandler).unsubscribe();
    // 閉じるボタンクリック時のイベントを追加
    this.closeTrigger.forEach(trigger => {
      attachEvent(trigger, "click", this.closeTriggerHandler);
    });
    // メニュー内リンククリック時のイベントを削除
    if (this.options.clickLinkToClose) {
      this.innerLink.forEach(link => {
        attachEvent(link, "click", this.innerLinkHandler);
      });
    }
    backfaceFixed(true);
    this.changeAttribute(true);
    setTimeout(() => {
      this.root.focus();
      this.isExpanded = true;
    }, 100);
  }
  close() {
    // Esc押下時のイベントを削除
    attachEvent(document, "keyup", this.keyupHandler).unsubscribe();
    // 閉じるボタンクリック時のイベントを削除
    this.closeTrigger.forEach(trigger => {
      attachEvent(trigger, "click", this.closeTriggerHandler).unsubscribe();
    });
    // メニュー内リンククリック時のイベントを削除
    if (this.options.clickLinkToClose) {
      this.innerLink.forEach(link => {
        attachEvent(link, "click", this.innerLinkHandler).unsubscribe();
      });
    }
    backfaceFixed(false);
    this.changeAttribute(false);
    setTimeout(() => {
      // 開くボタンクリック時のイベントを再登録
      attachEvent(this.openTrigger, "click", this.openTriggerHandler);
      // メニューに`hidden`を付与
      this.root.style.display = "none";
      // 開くボタンにフォーカスを移動
      this.openTrigger.focus();
      this.isExpanded = false;
    }, this.options.toggleDuration);
  }
  changeAttribute(expanded) {
    if (expanded) {
      this.root.removeAttribute("inert");
      this.openTrigger.setAttribute("inert", "");
      this.inertTarget.setAttribute("inert", "");
    } else {
      this.root.setAttribute("inert", "");
      this.openTrigger.removeAttribute("inert");
      this.inertTarget.removeAttribute("inert");
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const drawerElement = document.getElementById("js-menu-content");
  const drawer = new DrawerMenu(drawerElement);
  drawer.init();
});