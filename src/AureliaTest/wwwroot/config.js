System.config({
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "*": "debug/*",
    "dist/*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "dist/aurelia": [
      "github:aurelia/logging-console@0.8.0",
      "github:aurelia/logging-console@0.8.0/aurelia-logging-console",
      "github:aurelia/pal@0.2.0",
      "github:aurelia/logging@0.8.0",
      "github:aurelia/pal@0.2.0/aurelia-pal",
      "github:aurelia/logging@0.8.0/aurelia-logging",
      "github:aurelia/history-browser@0.9.0",
      "github:aurelia/history-browser@0.9.0/aurelia-history-browser",
      "npm:core-js@0.9.18",
      "github:aurelia/history@0.8.0",
      "npm:core-js@0.9.18/client/shim.min",
      "github:aurelia/history@0.8.0/aurelia-history",
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser",
      "github:aurelia/loader-default@0.11.0",
      "github:aurelia/loader-default@0.11.0/aurelia-loader-default",
      "github:aurelia/loader@0.10.0",
      "github:aurelia/metadata@0.9.0",
      "github:aurelia/loader@0.10.0/aurelia-loader",
      "github:aurelia/metadata@0.9.0/aurelia-metadata",
      "npm:core-js@1.2.1",
      "github:aurelia/path@0.10.0",
      "npm:core-js@1.2.1/index",
      "github:aurelia/path@0.10.0/aurelia-path",
      "npm:core-js@1.2.1/shim",
      "npm:core-js@1.2.1/modules/core.dict",
      "npm:core-js@1.2.1/modules/core.get-iterator-method",
      "npm:core-js@1.2.1/modules/core.get-iterator",
      "npm:core-js@1.2.1/modules/core.is-iterable",
      "npm:core-js@1.2.1/modules/core.delay",
      "npm:core-js@1.2.1/modules/core.function.part",
      "npm:core-js@1.2.1/modules/core.object.is-object",
      "npm:core-js@1.2.1/modules/core.object.classof",
      "npm:core-js@1.2.1/modules/core.object.define",
      "npm:core-js@1.2.1/modules/core.object.make",
      "npm:core-js@1.2.1/modules/core.number.iterator",
      "npm:core-js@1.2.1/modules/core.string.escape-html",
      "npm:core-js@1.2.1/modules/core.string.unescape-html",
      "npm:core-js@1.2.1/modules/core.log",
      "npm:core-js@1.2.1/modules/$.core",
      "npm:core-js@1.2.1/modules/es5",
      "npm:core-js@1.2.1/modules/es6.symbol",
      "npm:core-js@1.2.1/modules/es6.object.assign",
      "npm:core-js@1.2.1/modules/es6.object.is",
      "npm:core-js@1.2.1/modules/es6.object.set-prototype-of",
      "npm:core-js@1.2.1/modules/es6.object.to-string",
      "npm:core-js@1.2.1/modules/es6.object.freeze",
      "npm:core-js@1.2.1/modules/es6.object.seal",
      "npm:core-js@1.2.1/modules/es6.object.prevent-extensions",
      "npm:core-js@1.2.1/modules/es6.object.is-frozen",
      "npm:core-js@1.2.1/modules/es6.object.is-sealed",
      "npm:core-js@1.2.1/modules/es6.object.is-extensible",
      "npm:core-js@1.2.1/modules/es6.object.get-own-property-descriptor",
      "npm:core-js@1.2.1/modules/es6.object.get-prototype-of",
      "npm:core-js@1.2.1/modules/es6.object.keys",
      "npm:core-js@1.2.1/modules/es6.object.get-own-property-names",
      "npm:core-js@1.2.1/modules/es6.function.name",
      "npm:core-js@1.2.1/modules/es6.function.has-instance",
      "npm:core-js@1.2.1/modules/es6.number.constructor",
      "npm:core-js@1.2.1/modules/es6.number.epsilon",
      "npm:core-js@1.2.1/modules/es6.number.is-finite",
      "npm:core-js@1.2.1/modules/es6.number.is-integer",
      "npm:core-js@1.2.1/modules/es6.number.is-nan",
      "npm:core-js@1.2.1/modules/es6.number.is-safe-integer",
      "npm:core-js@1.2.1/modules/es6.number.max-safe-integer",
      "npm:core-js@1.2.1/modules/es6.number.min-safe-integer",
      "npm:core-js@1.2.1/modules/es6.number.parse-float",
      "npm:core-js@1.2.1/modules/es6.number.parse-int",
      "npm:core-js@1.2.1/modules/es6.math.acosh",
      "npm:core-js@1.2.1/modules/es6.math.asinh",
      "npm:core-js@1.2.1/modules/es6.math.atanh",
      "npm:core-js@1.2.1/modules/es6.math.cbrt",
      "npm:core-js@1.2.1/modules/es6.math.clz32",
      "npm:core-js@1.2.1/modules/es6.math.cosh",
      "npm:core-js@1.2.1/modules/es6.math.expm1",
      "npm:core-js@1.2.1/modules/es6.math.fround",
      "npm:core-js@1.2.1/modules/es6.math.hypot",
      "npm:core-js@1.2.1/modules/es6.math.imul",
      "npm:core-js@1.2.1/modules/es6.math.log10",
      "npm:core-js@1.2.1/modules/es6.math.log1p",
      "npm:core-js@1.2.1/modules/es6.math.log2",
      "npm:core-js@1.2.1/modules/es6.math.sign",
      "npm:core-js@1.2.1/modules/es6.math.sinh",
      "npm:core-js@1.2.1/modules/es6.math.tanh",
      "npm:core-js@1.2.1/modules/es6.math.trunc",
      "npm:core-js@1.2.1/modules/es6.string.from-code-point",
      "npm:core-js@1.2.1/modules/es6.string.raw",
      "npm:core-js@1.2.1/modules/es6.string.trim",
      "npm:core-js@1.2.1/modules/es6.string.iterator",
      "npm:core-js@1.2.1/modules/es6.string.code-point-at",
      "npm:core-js@1.2.1/modules/es6.string.ends-with",
      "npm:core-js@1.2.1/modules/es6.string.includes",
      "npm:core-js@1.2.1/modules/es6.string.repeat",
      "npm:core-js@1.2.1/modules/es6.string.starts-with",
      "npm:core-js@1.2.1/modules/es6.array.from",
      "npm:core-js@1.2.1/modules/es6.array.of",
      "npm:core-js@1.2.1/modules/es6.array.iterator",
      "npm:core-js@1.2.1/modules/es6.array.species",
      "npm:core-js@1.2.1/modules/es6.array.copy-within",
      "npm:core-js@1.2.1/modules/es6.array.fill",
      "npm:core-js@1.2.1/modules/es6.array.find",
      "npm:core-js@1.2.1/modules/es6.array.find-index",
      "npm:core-js@1.2.1/modules/es6.regexp.constructor",
      "npm:core-js@1.2.1/modules/es6.regexp.flags",
      "npm:core-js@1.2.1/modules/es6.regexp.match",
      "npm:core-js@1.2.1/modules/es6.regexp.replace",
      "npm:core-js@1.2.1/modules/es6.regexp.search",
      "npm:core-js@1.2.1/modules/es6.regexp.split",
      "npm:core-js@1.2.1/modules/es6.promise",
      "npm:core-js@1.2.1/modules/es6.map",
      "npm:core-js@1.2.1/modules/es6.set",
      "npm:core-js@1.2.1/modules/es6.weak-map",
      "npm:core-js@1.2.1/modules/es6.weak-set",
      "npm:core-js@1.2.1/modules/es6.reflect.apply",
      "npm:core-js@1.2.1/modules/es6.reflect.construct",
      "npm:core-js@1.2.1/modules/es6.reflect.define-property",
      "npm:core-js@1.2.1/modules/es6.reflect.delete-property",
      "npm:core-js@1.2.1/modules/es6.reflect.enumerate",
      "npm:core-js@1.2.1/modules/es6.reflect.get",
      "npm:core-js@1.2.1/modules/es6.reflect.get-own-property-descriptor",
      "npm:core-js@1.2.1/modules/es6.reflect.get-prototype-of",
      "npm:core-js@1.2.1/modules/es6.reflect.has",
      "npm:core-js@1.2.1/modules/es6.reflect.is-extensible",
      "npm:core-js@1.2.1/modules/es6.reflect.own-keys",
      "npm:core-js@1.2.1/modules/es6.reflect.prevent-extensions",
      "npm:core-js@1.2.1/modules/es6.reflect.set",
      "npm:core-js@1.2.1/modules/es6.reflect.set-prototype-of",
      "npm:core-js@1.2.1/modules/es7.array.includes",
      "npm:core-js@1.2.1/modules/es7.string.at",
      "npm:core-js@1.2.1/modules/es7.string.pad-left",
      "npm:core-js@1.2.1/modules/es7.string.pad-right",
      "npm:core-js@1.2.1/modules/es7.string.trim-left",
      "npm:core-js@1.2.1/modules/es7.string.trim-right",
      "npm:core-js@1.2.1/modules/es7.regexp.escape",
      "npm:core-js@1.2.1/modules/es7.object.get-own-property-descriptors",
      "npm:core-js@1.2.1/modules/es7.object.values",
      "npm:core-js@1.2.1/modules/es7.object.entries",
      "npm:core-js@1.2.1/modules/es7.map.to-json",
      "npm:core-js@1.2.1/modules/es7.set.to-json",
      "npm:core-js@1.2.1/modules/js.array.statics",
      "npm:core-js@1.2.1/modules/web.timers",
      "npm:core-js@1.2.1/modules/web.immediate",
      "npm:core-js@1.2.1/modules/web.dom.iterable",
      "npm:core-js@1.2.1/modules/$",
      "npm:core-js@1.2.1/modules/$.ctx",
      "npm:core-js@1.2.1/modules/$.def",
      "npm:core-js@1.2.1/modules/$.property-desc",
      "npm:core-js@1.2.1/modules/$.assign",
      "npm:core-js@1.2.1/modules/$.keyof",
      "npm:core-js@1.2.1/modules/$.a-function",
      "npm:core-js@1.2.1/modules/$.for-of",
      "npm:core-js@1.2.1/modules/$.iter-step",
      "npm:core-js@1.2.1/modules/$.is-object",
      "npm:core-js@1.2.1/modules/$.to-iobject",
      "npm:core-js@1.2.1/modules/$.support-desc",
      "npm:core-js@1.2.1/modules/$.has",
      "npm:core-js@1.2.1/modules/$.iter-create",
      "npm:core-js@1.2.1/modules/$.classof",
      "npm:core-js@1.2.1/modules/$.wks",
      "npm:core-js@1.2.1/modules/$.iterators",
      "npm:core-js@1.2.1/modules/$.an-object",
      "npm:core-js@1.2.1/modules/$.global",
      "npm:core-js@1.2.1/modules/$.partial",
      "npm:core-js@1.2.1/modules/$.path",
      "npm:core-js@1.2.1/modules/$.object-define",
      "npm:core-js@1.2.1/modules/$.iter-define",
      "npm:core-js@1.2.1/modules/$.replacer",
      "npm:core-js@1.2.1/modules/$.html",
      "npm:core-js@1.2.1/modules/$.dom-create",
      "npm:core-js@1.2.1/modules/$.cof",
      "npm:core-js@1.2.1/modules/$.invoke",
      "npm:core-js@1.2.1/modules/$.array-methods",
      "npm:core-js@1.2.1/modules/$.uid",
      "npm:core-js@1.2.1/modules/$.to-object",
      "npm:core-js@1.2.1/modules/$.to-integer",
      "npm:core-js@1.2.1/modules/$.to-index",
      "npm:core-js@1.2.1/modules/$.to-length",
      "npm:core-js@1.2.1/modules/$.iobject",
      "npm:core-js@1.2.1/modules/$.fails",
      "npm:core-js@1.2.1/modules/$.array-includes",
      "npm:core-js@1.2.1/modules/$.is-array",
      "npm:core-js@1.2.1/modules/$.redef",
      "npm:core-js@1.2.1/modules/$.shared",
      "npm:core-js@1.2.1/modules/$.tag",
      "npm:core-js@1.2.1/modules/$.get-names",
      "npm:core-js@1.2.1/modules/$.enum-keys",
      "npm:core-js@1.2.1/modules/$.library",
      "npm:core-js@1.2.1/modules/$.same",
      "npm:core-js@1.2.1/modules/$.set-proto",
      "npm:core-js@1.2.1/modules/$.object-sap",
      "npm:core-js@1.2.1/modules/$.is-integer",
      "npm:core-js@1.2.1/modules/$.log1p",
      "npm:core-js@1.2.1/modules/$.sign",
      "npm:core-js@1.2.1/modules/$.expm1",
      "npm:core-js@1.2.1/modules/$.string-trim",
      "npm:core-js@1.2.1/modules/$.string-at",
      "npm:core-js@1.2.1/modules/$.string-context",
      "npm:core-js@1.2.1/modules/$.fails-is-regexp",
      "npm:core-js@1.2.1/modules/$.string-repeat",
      "npm:core-js@1.2.1/modules/$.iter-call",
      "npm:core-js@1.2.1/modules/$.is-array-iter",
      "npm:core-js@1.2.1/modules/$.iter-detect",
      "npm:core-js@1.2.1/modules/$.unscope",
      "npm:core-js@1.2.1/modules/$.species",
      "npm:core-js@1.2.1/modules/$.array-copy-within",
      "npm:core-js@1.2.1/modules/$.array-fill",
      "npm:core-js@1.2.1/modules/$.is-regexp",
      "npm:core-js@1.2.1/modules/$.flags",
      "npm:core-js@1.2.1/modules/$.fix-re-wks",
      "npm:core-js@1.2.1/modules/$.strict-new",
      "npm:core-js@1.2.1/modules/$.microtask",
      "npm:core-js@1.2.1/modules/$.mix",
      "npm:core-js@1.2.1/modules/$.collection-strong",
      "npm:core-js@1.2.1/modules/$.collection",
      "npm:core-js@1.2.1/modules/$.collection-weak",
      "npm:core-js@1.2.1/modules/$.own-keys",
      "npm:core-js@1.2.1/modules/$.string-pad",
      "npm:core-js@1.2.1/modules/$.object-to-array",
      "npm:core-js@1.2.1/modules/$.collection-to-json",
      "npm:core-js@1.2.1/modules/$.task",
      "npm:core-js@1.2.1/modules/$.hide",
      "npm:core-js@1.2.1/modules/$.defined",
      "github:aurelia/templating-router@0.17.0",
      "github:aurelia/templating-router@0.17.0/aurelia-templating-router",
      "github:aurelia/router@0.13.0",
      "github:aurelia/router@0.13.0/aurelia-router",
      "github:aurelia/dependency-injection@0.11.0",
      "github:aurelia/route-recognizer@0.8.0",
      "github:aurelia/event-aggregator@0.9.0",
      "github:aurelia/dependency-injection@0.11.0/aurelia-dependency-injection",
      "github:aurelia/route-recognizer@0.8.0/aurelia-route-recognizer",
      "github:aurelia/event-aggregator@0.9.0/aurelia-event-aggregator",
      "github:aurelia/templating-router@0.17.0/route-href",
      "github:aurelia/templating@0.16.0",
      "github:aurelia/templating@0.16.0/aurelia-templating",
      "github:aurelia/binding@0.10.0",
      "github:aurelia/task-queue@0.8.0",
      "github:aurelia/binding@0.10.0/aurelia-binding",
      "github:aurelia/task-queue@0.8.0/aurelia-task-queue",
      "github:aurelia/templating-router@0.17.0/router-view",
      "github:aurelia/templating-router@0.17.0/route-loader",
      "github:aurelia/templating-resources@0.16.0",
      "github:aurelia/templating-resources@0.16.0/aurelia-templating-resources",
      "github:aurelia/templating-resources@0.16.0/compose",
      "github:aurelia/templating-resources@0.16.0/with",
      "github:aurelia/templating-resources@0.16.0/if",
      "github:aurelia/templating-resources@0.16.0/sanitize-html",
      "github:aurelia/templating-resources@0.16.0/global-behavior",
      "github:aurelia/templating-resources@0.16.0/show",
      "github:aurelia/templating-resources@0.16.0/repeat",
      "github:aurelia/templating-resources@0.16.0/focus",
      "github:aurelia/templating-resources@0.16.0/replaceable",
      "github:aurelia/templating-resources@0.16.0/compile-spy",
      "github:aurelia/templating-resources@0.16.0/dynamic-element",
      "github:aurelia/templating-resources@0.16.0/css-resource",
      "github:aurelia/templating-resources@0.16.0/html-sanitizer",
      "github:aurelia/templating-resources@0.16.0/view-spy",
      "github:aurelia/templating-binding@0.16.0",
      "github:aurelia/templating-binding@0.16.0/aurelia-templating-binding",
      "github:aurelia/animator-css@0.17.0",
      "github:aurelia/animator-css@0.17.0/aurelia-animator-css",
      "github:aurelia/fetch-client@0.3.0",
      "github:aurelia/fetch-client@0.3.0/aurelia-fetch-client",
      "github:aurelia/bootstrapper@0.18.0",
      "github:aurelia/bootstrapper@0.18.0/aurelia-bootstrapper",
      "github:aurelia/pal-browser@0.2.0",
      "github:aurelia/pal-browser@0.2.0/aurelia-pal-browser"
    ],
    "dist/app-build": [
      "github:twbs/bootstrap@3.3.5/css/bootstrap.css!github:systemjs/plugin-text@0.0.2",
      "welcome.html!github:systemjs/plugin-text@0.0.2",
      "users.html!github:systemjs/plugin-text@0.0.2",
      "nav-bar.html!github:systemjs/plugin-text@0.0.2",
      "child-router.html!github:systemjs/plugin-text@0.0.2",
      "app.html!github:systemjs/plugin-text@0.0.2",
      "welcome",
      "users",
      "github:aurelia/framework@0.17.0",
      "github:aurelia/framework@0.17.0/aurelia-framework",
      "github:github/fetch@0.9.0",
      "github:github/fetch@0.9.0/fetch",
      "main",
      "github:twbs/bootstrap@3.3.5",
      "github:twbs/bootstrap@3.3.5/js/bootstrap",
      "github:components/jquery@2.1.4",
      "github:components/jquery@2.1.4/jquery",
      "child-router",
      "blur-image",
      "app"
    ]
  },

  map: {
    "aurelia-animator-css": "github:aurelia/animator-css@0.17.0",
    "aurelia-binding": "github:aurelia/binding@0.10.0",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.18.0",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.0",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.9.0",
    "aurelia-fetch-client": "github:aurelia/fetch-client@0.3.0",
    "aurelia-framework": "github:aurelia/framework@0.17.0",
    "aurelia-history": "github:aurelia/history@0.8.0",
    "aurelia-history-browser": "github:aurelia/history-browser@0.9.0",
    "aurelia-loader": "github:aurelia/loader@0.10.0",
    "aurelia-loader-default": "github:aurelia/loader-default@0.11.0",
    "aurelia-logging": "github:aurelia/logging@0.8.0",
    "aurelia-metadata": "github:aurelia/metadata@0.9.0",
    "aurelia-pal": "github:aurelia/pal@0.2.0",
    "aurelia-pal-browser": "github:aurelia/pal-browser@0.2.0",
    "aurelia-path": "github:aurelia/path@0.10.0",
    "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.8.0",
    "aurelia-router": "github:aurelia/router@0.13.0",
    "aurelia-task-queue": "github:aurelia/task-queue@0.8.0",
    "aurelia-templating": "github:aurelia/templating@0.16.0",
    "aurelia-templating-binding": "github:aurelia/templating-binding@0.16.0",
    "aurelia-templating-resources": "github:aurelia/templating-resources@0.16.0",
    "aurelia-templating-router": "github:aurelia/templating-router@0.17.0",
    "babel": "npm:babel-core@5.8.25",
    "babel-runtime": "npm:babel-runtime@5.8.25",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "core-js": "npm:core-js@1.2.1",
    "fetch": "github:github/fetch@0.9.0",
    "font-awesome": "npm:font-awesome@4.4.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:aurelia/animator-css@0.17.0": {
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0"
    },
    "github:aurelia/binding@0.10.0": {
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.8.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/bootstrapper@0.18.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.9.0",
      "aurelia-framework": "github:aurelia/framework@0.17.0",
      "aurelia-history": "github:aurelia/history@0.8.0",
      "aurelia-history-browser": "github:aurelia/history-browser@0.9.0",
      "aurelia-loader-default": "github:aurelia/loader-default@0.11.0",
      "aurelia-logging-console": "github:aurelia/logging-console@0.8.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-pal-browser": "github:aurelia/pal-browser@0.2.0",
      "aurelia-router": "github:aurelia/router@0.13.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.16.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.16.0",
      "aurelia-templating-router": "github:aurelia/templating-router@0.17.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/dependency-injection@0.11.0": {
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/event-aggregator@0.9.0": {
      "aurelia-logging": "github:aurelia/logging@0.8.0"
    },
    "github:aurelia/fetch-client@0.3.0": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/framework@0.17.0": {
      "aurelia-binding": "github:aurelia/binding@0.10.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.0",
      "aurelia-loader": "github:aurelia/loader@0.10.0",
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-path": "github:aurelia/path@0.10.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.8.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/history-browser@0.9.0": {
      "aurelia-history": "github:aurelia/history@0.8.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/loader-default@0.11.0": {
      "aurelia-loader": "github:aurelia/loader@0.10.0",
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0"
    },
    "github:aurelia/loader@0.10.0": {
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-path": "github:aurelia/path@0.10.0"
    },
    "github:aurelia/logging-console@0.8.0": {
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0"
    },
    "github:aurelia/metadata@0.9.0": {
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/pal-browser@0.2.0": {
      "aurelia-pal": "github:aurelia/pal@0.2.0"
    },
    "github:aurelia/route-recognizer@0.8.0": {
      "aurelia-path": "github:aurelia/path@0.10.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/router@0.13.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.0",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.9.0",
      "aurelia-history": "github:aurelia/history@0.8.0",
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-path": "github:aurelia/path@0.10.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.8.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/task-queue@0.8.0": {
      "aurelia-pal": "github:aurelia/pal@0.2.0"
    },
    "github:aurelia/templating-binding@0.16.0": {
      "aurelia-binding": "github:aurelia/binding@0.10.0",
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0"
    },
    "github:aurelia/templating-resources@0.16.0": {
      "aurelia-binding": "github:aurelia/binding@0.10.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.0",
      "aurelia-loader": "github:aurelia/loader@0.10.0",
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-path": "github:aurelia/path@0.10.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.8.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-router@0.17.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.0",
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-path": "github:aurelia/path@0.10.0",
      "aurelia-router": "github:aurelia/router@0.13.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0"
    },
    "github:aurelia/templating@0.16.0": {
      "aurelia-binding": "github:aurelia/binding@0.10.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.0",
      "aurelia-loader": "github:aurelia/loader@0.10.0",
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-path": "github:aurelia/path@0.10.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.8.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.25": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.4.0": {
      "css": "github:systemjs/plugin-css@0.1.16"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
