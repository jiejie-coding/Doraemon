// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n<style>\n/* \u4F60\u597D\u5440\uFF01\u6211\u662F\u4E00\u540D\u524D\u7AEF\u7684\u5C0F\u767D,\u5B66\u4E60\u4E86css3\u52A8\u753B\u548CJavaScript\uFF0C\n\u6211\u5C31\u7528\u8FD9\u4E24\u6837\u7ED9\u4F60\u7ED8\u5236\u4E00\u4E2A\u53EF\u7231\u7684\u54C6\u5566A\u68A6\u5427 \uFF01\uFF01*/\n/* \u9996\u5148\u6211\u4EEC\u7ED8\u5236\u54C6\u5566A\u68A6\u7684\u5934 */\n.head {\n  position: relative;\n  width: 200px;\n  height: 190px;\n  background-color: #30a7da;\n  border-radius: 50%;\n}\n/* \u7136\u540E\u7ED8\u5236\u4ED6\u7684\u8138 */\n.face {\n  position: absolute;\n  width: 90%;\n  height: 85%;\n  bottom: 0px;\n  left: 5%;\n  background-color: #fff;\n  border: 1px solid #000;\n  border-radius: 50%;\n}\n\n/* \u7ED8\u5236\u4ED6\u7684\u4E24\u4E2A\u5C0F\u773C\u775B */\n.eye1,\n.eye2 {\n  position: absolute;\n  width: 35px;\n  height: 40px;\n  background-color: #fcfffa;\n  border: 1px solid #000;\n  border-radius: 50%;\n  top: -10%;\n  left: 30%;\n}\n.eye2 {\n  left: 48%;\n}\n\n/* \u8981\u8BB0\u5F97\u7ED9\u773C\u775B\u6DFB\u52A0\u4E24\u9897\u70AF\u70AF\u6709\u795E\u7684\u773C\u73E0\u5B50 */\n.eye1::before,\n.eye2::before {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 2px;\n  height: 4px;\n  border: 3px solid #000;\n  border-radius: 50%;\n  left: 42%;\n  bottom: 23%;\n}\n\n/* \u753B\u4E0A\u4ED6\u7684\u7EA2\u9F3B\u5B50 */\n.nose {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-color: #f04835;\n  left: 50%;\n  transform: translate(-50%);\n  top: 8%;\n  border-radius: 50%;\n  border: 1px solid #000;\n}\n/* \u7ED9\u4ED6\u7684\u9F3B\u5B50\u6765\u70B9\u9AD8\u5149\uFF0C\u589E\u52A0\u7ACB\u4F53\u611F */\n.nose::after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #fff;\n}\n/* \u53D1\u73B0\u9F3B\u5B50\u4E0B\u65B9\u6709\u4E00\u6761\u7EBF\uFF0C\u4E5F\u7ED9\u4ED6\u52A0\u4E0A */\n.nose::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: .5px;\n  height: 50px;\n  background-color: #000;\n  left: 50%;\n  top:100%;\n}\n\n/* \u73B0\u5728\u6765\u7ED8\u5236\u80E1\u5B50\u4E86\uFF0C\n\u5148\u7ED8\u5236\u5DE6\u8FB9\u7684\u80E1\u5B50 */\n.mustacheLeft > div{\n  position: absolute;\n  width: 45px;\n  height: .5px;\n  left: 10px;\n  background-color: #000;\n  z-index: 1;\n}\n/* \u7B2C\u4E00\u6839\u80E1\u5B50 */\n.m1 {\n\ttop: 14%;\n\ttransform: rotate(15deg);\n}\n/* \u7B2C\u4E8C\u6839\u80E1\u5B50 */\n.m2 {\n\ttop: 25%;\n\ttransform: rotate(2deg);\n}\n/* \u7B2C\u4E09\u6839\u80E1\u5B50 */\n.m3 {\n\ttop: 35%;\n\ttransform: rotate(-15deg);\n}\n\n/* \u8F6E\u5230\u53F3\u8FB9\u7684\u80E1\u5B50\u4E86 */\n.mustacheRight > div{\n  position: absolute;\n  width: 45px;\n  height: .5px;\n  right: 10px;\n  background-color: #000;\n}\n/* \u53F3\u8FB9\u7684\u7B2C\u4E00\u6839\u80E1\u5B50 */\n.m4 {\n\ttop: 14%;\n\ttransform: rotate(-15deg);\n}\n/* \u53F3\u8FB9\u7684\u7B2C\u4E8C\u6839\u80E1\u5B50 */\n.m5 {\n\ttop: 25%;\n\ttransform: rotate(-2deg);\n}\n/* \u53F3\u8FB9\u7684\u7B2C\u4E09\u6839\u80E1\u5B50 */\n.m6 {\n\ttop: 35%;\n\ttransform: rotate(15deg);\n}\n\n/* \u6765\u7ED8\u5236\u5634\u5DF4 */\n.month {\n  position: absolute;\n  width: 130px;\n  height: 60px;\n  background-color: #5D000A;\n  border-radius: 0px 0px 60px 60px;\n  left: 50%;\n  transform: translate(-50%);\n  top: 50%;\n  overflow: hidden;\n  z-index: 3;\n}\n/* \u8FD9\u662F\u820C\u5934\u9634\u5F71\u54E6 */\n.tou1 {\n  position: relative;\n  width: 40px;\n  height: 50px;\n  background-color: #971112;\n  top: 40%;\n  left: 25%;\n  transform: rotate(-45deg);\n  border-radius: 30px;\n  border: 1px solid transparent;\n}\n/* \u8FD9\u662F\u771F\u7684\u820C\u5934 */\n.tou2 {\n  left: 50%;\n  bottom: 45%;\n  transform: rotate(51deg);\n  position: relative;\n  width: 42px;\n  height: 45px;\n  border-radius: 30px;  \n  border: 1px solid transparent;\n  background-color: #971112;\n}\n/* \u820C\u5934\u7684\u7231\u5FC3\u5F62\u72B6\u5C31\u662F\u8FD9\u4E48\u6765\u7684\u5462 */\n.tou1::before {\n  content: '';\n  display: block;\n  position: relative;\n  width: 90%;\n  height: 180%;\n  background-color: #DB301F;\n  border-radius: 30px;\n  margin: 10% auto;\n  z-index: 9999;\n}\n\n.tou2::before {\n  content: '';\n  display: block;\n  width: 90%;\n  height: 180%;\n  background-color: #DB301F;\n  border-radius: 30px;\n  margin: 10% auto;\n}\n\n\n.face::after {\n  content:'';\n  position: absolute;\n  width: 40px;\n  height: 20px;\n  top: 40px;\n  left: 25px;\n  display:block;\n  background-color: rgba(255,0,0,.4);;\n  box-shadow: 0px 0px 10px 10px rgba(255,0,0,.4);\n  border-radius: 50%;\n  animation: 1s face-be-red alternate infinite;\n}\n\n.face::before {\n  content:'';\n  position: absolute;\n  width: 40px;\n  height: 20px;\n  top: 40px;\n  right: 25px;\n  display:block;\n  background-color:  rgba(255,0,0,.4);\n  box-shadow: 0px 0px 10px 10px rgba(255,0,0,.4);\n  border-radius: 50%;\n  animation: 1s face-be-red alternate infinite;\n}\n\n\n@keyframes face-be-red {\n  0% {\n    transform:scale(0.8);\n  }\n  100% {\n    transform:scale(1.2);\n  }\n}\n/* \u7ED8\u5236\u8EAB\u4F53 */\n.body {\n  position: relative;\n  width: 115px;\n  height: 70px;\n  background-color: #30a7da;\n  border-top-left-radius: 5px;\n  margin: -15px auto;\n  \n}\n\n/* \u5C0F\u94C3\u94DB\u7684\u7EA2\u7EBF */\n.bellLine {\n  width: 110px;\n  height: 7px;\n  background-color: #B70117;\n  border-radius: 5px;\n  margin: auto;\n  z-index: 9999;\n}\n/* \u5C0F\u94C3\u94DB */\n.bell {\n  position: absolute;\n  border-radius: 50%;\n  background-color: #FDAC29;\n  width: 25px;\n  height: 25px;\n  border: 1px solid #000;\n  left: 50%;\n  transform: translate(-50%);\n  z-index: 11;\n}\n/* \u5C0F\u94C3\u94DB\u4E0A\u7684\u7F1D\u9699 */\n.bell::before {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background-color: #5F3800;\n  border-radius: 50%;\n  left: 30%;\n  top: 30%;\n}\n/* \u5C0F\u94C3\u94DB\u4E0A\u7684\u9ED1\u6D1E */\n.bell::after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 0px;\n  height: 6px;\n  border: 1px solid #000;\n  left: 48%;\n  bottom: 0;\n}\n\n/* \u7ED8\u5236\u809A\u76AE\uFF0C\u6700\u5F00\u59CB\u770B\u9519\u4E86\uFF0C\u770B\u6210\u53E3\u888B\u4E86\u545C\u545C\uFF0C\u540E\u9762\u624D\u53D1\u73B0\u662F\u809A\u76AE */\n.pocket {\n  position: absolute;\n  width: 90px;\n  height: 65px;\n  border: 1px solid #000;\n  background-color: #fff;\n  border-radius: 30% 30% 50% 50%;\n  left: 50%;\n  transform: translate(-50%);\n  z-index: 10;\n}\n/* \u7ED8\u5236\u4E07\u80FD\u7684\u53E3\u888B */\n.pocket::before {\n  content: '';\n  position: absolute;\n  display: block;\n  height: 30px;\n  width: 60px;\n  border: 1px solid #000;\n  bottom: 10%;\n  left: 50%;\n  transform: translate(-50%);\n  border-radius: 0 0 30px 30px;\n}\n\n/* \u53F3\u8FB9\u7684\u624B\u81C2 */\n.armR {\n  position: absolute;\n  height: 25px;\n  width: 80px;\n  background-color: #30a7da;\n  top: 23%;\n  left: 78%;\n  border-bottom-right-radius: 50%;\n  transform-origin: 0px 15px;\n  animation: .2s wave-armR alternate infinite;\n}\n\n@keyframes wave-armR {\n  0% {\n    transform: rotate(-50deg);\n  }\n  100% {\n    transform: rotate(-20deg);\n  }\n}\n/* \u4ED6\u7684\u5C0F\u624B */\n.armR .hand {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #fff;\n  border: 1px solid #000;\n  left: 85%;\n  top: -25%;\n}\n/* \u5DE6\u8FB9\u7684\u624B\u81C2 */\n.armL {\n  position: absolute;\n  height: 25px;\n  width: 75px;\n  background-color: #30a7da;\n  transform: rotate(-30deg);\n  top: 25%;\n  right: 85%;\n  border-top-left-radius: 50%;\n}\n\n\n/* \u4ED6\u7684\u5DE6\u624B */\n.armL .hand {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #fff;\n  border: 1px solid #000;\n  left: -5%;\n}\n\n/* \u7EC8\u4E8E\u5230\u817F\u4E86 */\n#footer {\n  position: relative;\n  width: 115px;\n  height: 50px;\n  margin: auto;\n}\n/* \u4ED6\u7684\u5927\u957F\u817F */\n.legL,\n.legR {\n  float: left;\n  width: 45px;\n  height: 100%;\n  background-color: #30a7da;\n}\n\n.legR {\n  float: right;\n}\n\n/* \u5C0F\u88E4\u88C6 */\n.legL::after {\n  content: '';\n  display: block;\n  width: 25px;\n  height: 50px;  \n  background-color: #30a7da;\n  margin-left: 80%;\n  transform: rotate(30deg);\n  z-index: -1;\n}\n\n.legR::after {\n  content: '';\n  display: block;\n  width: 25px;\n  height: 50px;\n  background-color: #30a7da;\n  transform: rotate(-30deg) translate(-40%);\n  z-index: -1;\n}\n/* \u4ED6\u7684\u5DE6\u53F3\u811A */\n.footL,\n.footR {\n  position: absolute;\n  width: 55px;\n  height: 30px;\n  border-radius: 100%;\n  background-color: white;\n  border: 1px solid #000;\n  top: 85%;\n  left: -5%;\n} \n.footR {\n  left: 55%;\n}\n/* \u4F60\u559C\u6B22\u8FD9\u4E2A\u54C6\u5566A\u68A6\u5417\uFF0C\u9001\u7ED9\u4F60\uFF0C\u563B\u563B */\n</style>";
var _default = string;
exports.default = _default;
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 0;
var t = 0;
var demo = document.querySelector('.demo');
var demo2 = document.querySelector('.demo2');
var show = document.querySelector('.show');

var fn = function fn() {
  n += 1;
  demo.innerHTML = _css.default.substr(0, n);
  demo2.innerText = _css.default.substr(0, n);
  show.scrollTo(0, 99999);

  if (n == _css.default.length) {
    window.clearInterval(id);
  }
};

var id = setInterval(function () {
  fn();
}, t);
var pause = document.querySelector('.btn-pause');
pause.addEventListener('click', function () {
  window.clearInterval(id);
});
var play = document.querySelector('.btn-play');
play.addEventListener('click', function () {
  id = window.setInterval(function () {
    fn();
  }, t);
});
var btn1 = document.querySelector(".btn-speed-1");
btn1.addEventListener('click', function () {
  window.clearInterval(id);
  t = 100;
  id = window.setInterval(function () {
    fn();
  }, t);
});
var btn2 = document.querySelector(".btn-speed-2");
btn2.addEventListener('click', function () {
  window.clearInterval(id);
  t = 10;
  id = window.setInterval(function () {
    fn();
  }, t);
});
var btn3 = document.querySelector(".btn-speed-3");
btn3.addEventListener('click', function () {
  window.clearInterval(id);
  t = 0;
  id = window.setInterval(function () {
    fn();
  }, t);
});
},{"./css.js":"js/css.js"}],"../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58729" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map