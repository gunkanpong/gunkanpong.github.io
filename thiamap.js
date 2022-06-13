
(function (X, G) { "object" === typeof module && module.exports ? (G["default"] = G, module.exports = X.document ? G(X) : G) : "function" === typeof define && define.amd ? define("highcharts/highmaps", function () { return G(X) }) : (X.Highcharts && X.Highcharts.error(16, !0), X.Highcharts = G(X)) })("undefined" !== typeof window ? window : this, function (X) {
    function G(a, I, f, D) { a.hasOwnProperty(I) || (a[I] = D.apply(null, f), "function" === typeof CustomEvent && X.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: I, module: a[I] } }))) } var f =
        {}; G(f, "Core/Globals.js", [], function () {
            var a; (function (a) {
                a.SVG_NS = "http://www.w3.org/2000/svg"; a.product = "Highcharts"; a.version = "10.1.0"; a.win = "undefined" !== typeof X ? X : {}; a.doc = a.win.document; a.svg = a.doc && a.doc.createElementNS && !!a.doc.createElementNS(a.SVG_NS, "svg").createSVGRect; a.userAgent = a.win.navigator && a.win.navigator.userAgent || ""; a.isChrome = -1 !== a.userAgent.indexOf("Chrome"); a.isFirefox = -1 !== a.userAgent.indexOf("Firefox"); a.isMS = /(edge|msie|trident)/i.test(a.userAgent) && !a.win.opera; a.isSafari =
                    !a.isChrome && -1 !== a.userAgent.indexOf("Safari"); a.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(a.userAgent); a.isWebKit = -1 !== a.userAgent.indexOf("AppleWebKit"); a.deg2rad = 2 * Math.PI / 360; a.hasBidiBug = a.isFirefox && 4 > parseInt(a.userAgent.split("Firefox/")[1], 10); a.hasTouch = !!a.win.TouchEvent; a.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"]; a.noop = function () { }; a.supportsPassiveEvents = function () {
                        var f = !1; if (!a.isMS) {
                            var I = Object.defineProperty({}, "passive", { get: function () { f = !0 } });
                            a.win.addEventListener && a.win.removeEventListener && (a.win.addEventListener("testPassive", a.noop, I), a.win.removeEventListener("testPassive", a.noop, I))
                        } return f
                    }(); a.charts = []; a.dateFormats = {}; a.seriesTypes = {}; a.symbolSizes = {}; a.chartCount = 0
            })(a || (a = {})); ""; return a
        }); G(f, "Core/Utilities.js", [f["Core/Globals.js"]], function (a) {
            function f(p, x, e, h) {
                var c = x ? "Highcharts error" : "Highcharts warning"; 32 === p && (p = c + ": Deprecated member"); var g = n(p), v = g ? c + " #" + p + ": www.highcharts.com/errors/" + p + "/" : p.toString();
                if ("undefined" !== typeof h) { var d = ""; g && (v += "?"); r(h, function (p, b) { d += "\n - " + b + ": " + p; g && (v += encodeURI(b) + "=" + encodeURI(p)) }); v += d } k(a, "displayError", { chart: e, code: p, message: v, params: h }, function () { if (x) throw Error(v); b.console && -1 === f.messages.indexOf(v) && console.warn(v) }); f.messages.push(v)
            } function w(p, b) { var x = {}; r(p, function (e, h) { if (C(p[h], !0) && !p.nodeType && b[h]) e = w(p[h], b[h]), Object.keys(e).length && (x[h] = e); else if (C(p[h]) || p[h] !== b[h] || h in p && !(h in b)) x[h] = p[h] }); return x } function D(p, b) {
                return parseInt(p,
                    b || 10)
            } function u(p) { return "string" === typeof p } function B(p) { p = Object.prototype.toString.call(p); return "[object Array]" === p || "[object Array Iterator]" === p } function C(p, b) { return !!p && "object" === typeof p && (!b || !B(p)) } function y(p) { return C(p) && "number" === typeof p.nodeType } function t(p) { var b = p && p.constructor; return !(!C(p, !0) || y(p) || !b || !b.name || "Object" === b.name) } function n(p) { return "number" === typeof p && !isNaN(p) && Infinity > p && -Infinity < p } function l(p) { return "undefined" !== typeof p && null !== p } function d(p,
                b, e) { var x = u(b) && !l(e), h, k = function (b, e) { l(b) ? p.setAttribute(e, b) : x ? (h = p.getAttribute(e)) || "class" !== e || (h = p.getAttribute(e + "Name")) : p.removeAttribute(e) }; u(b) ? k(e, b) : r(b, k); return h } function c(p, b) { var e; p || (p = {}); for (e in b) p[e] = b[e]; return p } function g() { for (var p = arguments, b = p.length, e = 0; e < b; e++) { var h = p[e]; if ("undefined" !== typeof h && null !== h) return h } } function m(p, b) { a.isMS && !a.svg && b && l(b.opacity) && (b.filter = "alpha(opacity=" + 100 * b.opacity + ")"); c(p.style, b) } function E(p) {
                    return Math.pow(10, Math.floor(Math.log(p) /
                        Math.LN10))
                } function z(p, b) { return 1E14 < p ? p : parseFloat(p.toPrecision(b || 14)) } function A(p, e, h) {
                    var x = a.getStyle || A; if ("width" === e) return e = Math.min(p.offsetWidth, p.scrollWidth), h = p.getBoundingClientRect && p.getBoundingClientRect().width, h < e && h >= e - 1 && (e = Math.floor(h)), Math.max(0, e - (x(p, "padding-left", !0) || 0) - (x(p, "padding-right", !0) || 0)); if ("height" === e) return Math.max(0, Math.min(p.offsetHeight, p.scrollHeight) - (x(p, "padding-top", !0) || 0) - (x(p, "padding-bottom", !0) || 0)); b.getComputedStyle || f(27, !0); if (p =
                        b.getComputedStyle(p, void 0)) { var k = p.getPropertyValue(e); g(h, "opacity" !== e) && (k = D(k)) } return k
                } function r(p, b, e) { for (var h in p) Object.hasOwnProperty.call(p, h) && b.call(e || p[h], p[h], h, p) } function q(p, b, e) {
                    function h(b, e) { var h = p.removeEventListener || a.removeEventListenerPolyfill; h && h.call(p, b, e, !1) } function x(e) { var x; if (p.nodeName) { if (b) { var k = {}; k[b] = !0 } else k = e; r(k, function (p, b) { if (e[b]) for (x = e[b].length; x--;)h(b, e[b][x].fn) }) } } var k = "function" === typeof p && p.prototype || p; if (Object.hasOwnProperty.call(k,
                        "hcEvents")) { var c = k.hcEvents; b ? (k = c[b] || [], e ? (c[b] = k.filter(function (b) { return e !== b.fn }), h(b, e)) : (x(c), c[b] = [])) : (x(c), delete k.hcEvents) }
                } function k(b, e, h, k) {
                    h = h || {}; if (v.createEvent && (b.dispatchEvent || b.fireEvent && b !== a)) { var p = v.createEvent("Events"); p.initEvent(e, !0, !0); h = c(p, h); b.dispatchEvent ? b.dispatchEvent(h) : b.fireEvent(e, h) } else if (b.hcEvents) {
                        h.target || c(h, { preventDefault: function () { h.defaultPrevented = !0 }, target: b, type: e }); p = []; for (var x = b, g = !1; x.hcEvents;)Object.hasOwnProperty.call(x,
                            "hcEvents") && x.hcEvents[e] && (p.length && (g = !0), p.unshift.apply(p, x.hcEvents[e])), x = Object.getPrototypeOf(x); g && p.sort(function (b, p) { return b.order - p.order }); p.forEach(function (p) { !1 === p.fn.call(b, h) && h.preventDefault() })
                    } k && !h.defaultPrevented && k.call(b, h)
                } var h = a.charts, v = a.doc, b = a.win; (f || (f = {})).messages = []; Math.easeInOutSine = function (b) { return -.5 * (Math.cos(Math.PI * b) - 1) }; var F = Array.prototype.find ? function (b, e) { return b.find(e) } : function (b, e) { var p, h = b.length; for (p = 0; p < h; p++)if (e(b[p], p)) return b[p] };
            r({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function (b, e) { a[e] = function (p) { var h; f(32, !1, void 0, (h = {}, h["Highcharts." + e] = "use Array." + b, h)); return Array.prototype[b].apply(p, [].slice.call(arguments, 1)) } }); var e, H = function () { var b = Math.random().toString(36).substring(2, 9) + "-", h = 0; return function () { return "highcharts-" + (e ? "" : b) + h++ } }(); b.jQuery && (b.jQuery.fn.highcharts = function () {
                var b = [].slice.call(arguments); if (this[0]) return b[0] ? (new (a[u(b[0]) ? b.shift() : "Chart"])(this[0],
                    b[0], b[1]), this) : h[d(this[0], "data-highcharts-chart")]
            }); F = {
                addEvent: function (b, e, h, k) {
                    void 0 === k && (k = {}); var p = "function" === typeof b && b.prototype || b; Object.hasOwnProperty.call(p, "hcEvents") || (p.hcEvents = {}); p = p.hcEvents; a.Point && b instanceof a.Point && b.series && b.series.chart && (b.series.chart.runTrackerClick = !0); var x = b.addEventListener || a.addEventListenerPolyfill; x && x.call(b, e, h, a.supportsPassiveEvents ? { passive: void 0 === k.passive ? -1 !== e.indexOf("touch") : k.passive, capture: !1 } : !1); p[e] || (p[e] = []);
                    p[e].push({ fn: h, order: "number" === typeof k.order ? k.order : Infinity }); p[e].sort(function (b, p) { return b.order - p.order }); return function () { q(b, e, h) }
                }, arrayMax: function (b) { for (var p = b.length, e = b[0]; p--;)b[p] > e && (e = b[p]); return e }, arrayMin: function (b) { for (var p = b.length, e = b[0]; p--;)b[p] < e && (e = b[p]); return e }, attr: d, clamp: function (b, e, h) { return b > e ? b < h ? b : h : e }, cleanRecursively: w, clearTimeout: function (b) { l(b) && clearTimeout(b) }, correctFloat: z, createElement: function (b, e, h, k, g) {
                    b = v.createElement(b); e && c(b, e);
                    g && m(b, { padding: "0", border: "none", margin: "0" }); h && m(b, h); k && k.appendChild(b); return b
                }, css: m, defined: l, destroyObjectProperties: function (b, e) { r(b, function (p, h) { p && p !== e && p.destroy && p.destroy(); delete b[h] }) }, discardElement: function (b) { b && b.parentElement && b.parentElement.removeChild(b) }, erase: function (b, e) { for (var p = b.length; p--;)if (b[p] === e) { b.splice(p, 1); break } }, error: f, extend: c, extendClass: function (b, e) { var p = function () { }; p.prototype = new b; c(p.prototype, e); return p }, find: F, fireEvent: k, getMagnitude: E,
                getNestedProperty: function (p, e) { for (p = p.split("."); p.length && l(e);) { var h = p.shift(); if ("undefined" === typeof h || "__proto__" === h) return; e = e[h]; if (!l(e) || "function" === typeof e || "number" === typeof e.nodeType || e === b) return } return e }, getStyle: A, inArray: function (b, e, h) { f(32, !1, void 0, { "Highcharts.inArray": "use Array.indexOf" }); return e.indexOf(b, h) }, isArray: B, isClass: t, isDOMElement: y, isFunction: function (b) { return "function" === typeof b }, isNumber: n, isObject: C, isString: u, keys: function (b) {
                    f(32, !1, void 0, { "Highcharts.keys": "use Object.keys" });
                    return Object.keys(b)
                }, merge: function () { var b, e = arguments, h = {}, k = function (b, e) { "object" !== typeof b && (b = {}); r(e, function (p, h) { "__proto__" !== h && "constructor" !== h && (!C(p, !0) || t(p) || y(p) ? b[h] = e[h] : b[h] = k(b[h] || {}, p)) }); return b }; !0 === e[0] && (h = e[1], e = Array.prototype.slice.call(e, 2)); var c = e.length; for (b = 0; b < c; b++)h = k(h, e[b]); return h }, normalizeTickInterval: function (b, e, h, k, c) {
                    var p = b; h = g(h, E(b)); var x = b / h; e || (e = c ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === k && (1 === h ? e = e.filter(function (b) {
                        return 0 ===
                            b % 1
                    }) : .1 >= h && (e = [1 / h]))); for (k = 0; k < e.length && !(p = e[k], c && p * h >= b || !c && x <= (e[k] + (e[k + 1] || e[k])) / 2); k++); return p = z(p * h, -Math.round(Math.log(.001) / Math.LN10))
                }, objectEach: r, offset: function (e) { var p = v.documentElement; e = e.parentElement || e.parentNode ? e.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 }; return { top: e.top + (b.pageYOffset || p.scrollTop) - (p.clientTop || 0), left: e.left + (b.pageXOffset || p.scrollLeft) - (p.clientLeft || 0), width: e.width, height: e.height } }, pad: function (b, e, h) {
                    return Array((e || 2) + 1 - String(b).replace("-",
                        "").length).join(h || "0") + b
                }, pick: g, pInt: D, relativeLength: function (b, e, h) { return /%$/.test(b) ? e * parseFloat(b) / 100 + (h || 0) : parseFloat(b) }, removeEvent: q, splat: function (b) { return B(b) ? b : [b] }, stableSort: function (b, e) { var h = b.length, p, k; for (k = 0; k < h; k++)b[k].safeI = k; b.sort(function (b, h) { p = e(b, h); return 0 === p ? b.safeI - h.safeI : p }); for (k = 0; k < h; k++)delete b[k].safeI }, syncTimeout: function (b, e, h) { if (0 < e) return setTimeout(b, e, h); b.call(0, h); return -1 }, timeUnits: {
                    millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5,
                    week: 6048E5, month: 24192E5, year: 314496E5
                }, uniqueKey: H, useSerialIds: function (b) { return e = g(b, e) }, wrap: function (b, e, h) { var p = b[e]; b[e] = function () { var b = Array.prototype.slice.call(arguments), e = arguments, k = this; k.proceed = function () { p.apply(k, arguments.length ? arguments : e) }; b.unshift(p); b = h.apply(this, b); k.proceed = null; return b } }
            }; ""; return F
        }); G(f, "Core/Chart/ChartDefaults.js", [], function () {
            return {
                alignThresholds: !1, panning: { enabled: !1, type: "x" }, styledMode: !1, borderRadius: 0, colorCount: 10, allowMutatingData: !0,
                defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } }, zoomBySingleTouch: !1, width: null, height: null, borderColor: "#335cad", backgroundColor: "#ffffff", plotBorderColor: "#cccccc"
            }
        }); G(f, "Core/Color/Color.js", [f["Core/Globals.js"], f["Core/Utilities.js"]], function (a, f) {
            var I = f.isNumber, D = f.merge, u = f.pInt; f = function () {
                function f(C) {
                    this.rgba = [NaN, NaN, NaN, NaN]; this.input = C; var y = a.Color; if (y && y !== f) return new y(C); if (!(this instanceof
                        f)) return new f(C); this.init(C)
                } f.parse = function (a) { return a ? new f(a) : f.None }; f.prototype.init = function (a) {
                    var y; if ("object" === typeof a && "undefined" !== typeof a.stops) this.stops = a.stops.map(function (d) { return new f(d[1]) }); else if ("string" === typeof a) {
                        this.input = a = f.names[a.toLowerCase()] || a; if ("#" === a.charAt(0)) { var t = a.length; var n = parseInt(a.substr(1), 16); 7 === t ? y = [(n & 16711680) >> 16, (n & 65280) >> 8, n & 255, 1] : 4 === t && (y = [(n & 3840) >> 4 | (n & 3840) >> 8, (n & 240) >> 4 | n & 240, (n & 15) << 4 | n & 15, 1]) } if (!y) for (n = f.parsers.length; n-- &&
                            !y;) { var l = f.parsers[n]; (t = l.regex.exec(a)) && (y = l.parse(t)) }
                    } y && (this.rgba = y)
                }; f.prototype.get = function (a) { var y = this.input, t = this.rgba; if ("object" === typeof y && "undefined" !== typeof this.stops) { var n = D(y); n.stops = [].slice.call(n.stops); this.stops.forEach(function (l, d) { n.stops[d] = [n.stops[d][0], l.get(a)] }); return n } return t && I(t[0]) ? "rgb" === a || !a && 1 === t[3] ? "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")" : "a" === a ? "" + t[3] : "rgba(" + t.join(",") + ")" : y }; f.prototype.brighten = function (a) {
                    var y = this.rgba; if (this.stops) this.stops.forEach(function (n) { n.brighten(a) });
                    else if (I(a) && 0 !== a) for (var t = 0; 3 > t; t++)y[t] += u(255 * a), 0 > y[t] && (y[t] = 0), 255 < y[t] && (y[t] = 255); return this
                }; f.prototype.setOpacity = function (a) { this.rgba[3] = a; return this }; f.prototype.tweenTo = function (a, y) { var t = this.rgba, n = a.rgba; if (!I(t[0]) || !I(n[0])) return a.input || "none"; a = 1 !== n[3] || 1 !== t[3]; return (a ? "rgba(" : "rgb(") + Math.round(n[0] + (t[0] - n[0]) * (1 - y)) + "," + Math.round(n[1] + (t[1] - n[1]) * (1 - y)) + "," + Math.round(n[2] + (t[2] - n[2]) * (1 - y)) + (a ? "," + (n[3] + (t[3] - n[3]) * (1 - y)) : "") + ")" }; f.names = { white: "#ffffff", black: "#000000" };
                f.parsers = [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function (a) { return [u(a[1]), u(a[2]), u(a[3]), parseFloat(a[4], 10)] } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function (a) { return [u(a[1]), u(a[2]), u(a[3]), 1] } }]; f.None = new f(""); return f
            }(); ""; return f
        }); G(f, "Core/Color/Palettes.js", [], function () { return { colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" ") } });
    G(f, "Core/Time.js", [f["Core/Globals.js"], f["Core/Utilities.js"]], function (a, f) {
        var I = a.win, D = f.defined, u = f.error, B = f.extend, C = f.isObject, y = f.merge, t = f.objectEach, n = f.pad, l = f.pick, d = f.splat, c = f.timeUnits, g = a.isSafari && I.Intl && I.Intl.DateTimeFormat.prototype.formatRange, m = a.isSafari && I.Intl && !I.Intl.DateTimeFormat.prototype.formatRange; f = function () {
            function E(c) { this.options = {}; this.variableTimezone = this.useUTC = !1; this.Date = I.Date; this.getTimezoneOffset = this.timezoneOffsetFunction(); this.update(c) }
            E.prototype.get = function (c, g) { if (this.variableTimezone || this.timezoneOffset) { var d = g.getTime(), q = d - this.getTimezoneOffset(g); g.setTime(q); c = g["getUTC" + c](); g.setTime(d); return c } return this.useUTC ? g["getUTC" + c]() : g["get" + c]() }; E.prototype.set = function (c, d, r) {
                if (this.variableTimezone || this.timezoneOffset) {
                    if ("Milliseconds" === c || "Seconds" === c || "Minutes" === c && 0 === this.getTimezoneOffset(d) % 36E5) return d["setUTC" + c](r); var q = this.getTimezoneOffset(d); q = d.getTime() - q; d.setTime(q); d["setUTC" + c](r); c = this.getTimezoneOffset(d);
                    q = d.getTime() + c; return d.setTime(q)
                } return this.useUTC || g && "FullYear" === c ? d["setUTC" + c](r) : d["set" + c](r)
            }; E.prototype.update = function (c) { var g = l(c && c.useUTC, !0); this.options = c = y(!0, this.options || {}, c); this.Date = c.Date || I.Date || Date; this.timezoneOffset = (this.useUTC = g) && c.timezoneOffset; this.getTimezoneOffset = this.timezoneOffsetFunction(); this.variableTimezone = g && !(!c.getTimezoneOffset && !c.timezone) }; E.prototype.makeTime = function (c, g, d, q, k, h) {
                if (this.useUTC) {
                    var v = this.Date.UTC.apply(0, arguments); var b =
                        this.getTimezoneOffset(v); v += b; var r = this.getTimezoneOffset(v); b !== r ? v += r - b : b - 36E5 !== this.getTimezoneOffset(v - 36E5) || m || (v -= 36E5)
                } else v = (new this.Date(c, g, l(d, 1), l(q, 0), l(k, 0), l(h, 0))).getTime(); return v
            }; E.prototype.timezoneOffsetFunction = function () {
                var c = this, g = this.options, d = g.getTimezoneOffset, q = g.moment || I.moment; if (!this.useUTC) return function (k) { return 6E4 * (new Date(k.toString())).getTimezoneOffset() }; if (g.timezone) { if (q) return function (k) { return 6E4 * -q.tz(k, g.timezone).utcOffset() }; u(25) } return this.useUTC &&
                    d ? function (k) { return 6E4 * d(k.valueOf()) } : function () { return 6E4 * (c.timezoneOffset || 0) }
            }; E.prototype.dateFormat = function (c, g, d) {
                if (!D(g) || isNaN(g)) return a.defaultOptions.lang && a.defaultOptions.lang.invalidDate || ""; c = l(c, "%Y-%m-%d %H:%M:%S"); var q = this, k = new this.Date(g), h = this.get("Hours", k), v = this.get("Day", k), b = this.get("Date", k), r = this.get("Month", k), e = this.get("FullYear", k), m = a.defaultOptions.lang, p = m && m.weekdays, x = m && m.shortWeekdays; k = B({
                    a: x ? x[v] : p[v].substr(0, 3), A: p[v], d: n(b), e: n(b, 2, " "), w: v,
                    b: m.shortMonths[r], B: m.months[r], m: n(r + 1), o: r + 1, y: e.toString().substr(2, 2), Y: e, H: n(h), k: h, I: n(h % 12 || 12), l: h % 12 || 12, M: n(this.get("Minutes", k)), p: 12 > h ? "AM" : "PM", P: 12 > h ? "am" : "pm", S: n(k.getSeconds()), L: n(Math.floor(g % 1E3), 3)
                }, a.dateFormats); t(k, function (b, e) { for (; -1 !== c.indexOf("%" + e);)c = c.replace("%" + e, "function" === typeof b ? b.call(q, g) : b) }); return d ? c.substr(0, 1).toUpperCase() + c.substr(1) : c
            }; E.prototype.resolveDTLFormat = function (c) { return C(c, !0) ? c : (c = d(c), { main: c[0], from: c[1], to: c[2] }) }; E.prototype.getTimeTicks =
                function (g, d, m, q) {
                    var k = this, h = [], v = {}, b = new k.Date(d), r = g.unitRange, e = g.count || 1, H; q = l(q, 1); if (D(d)) {
                        k.set("Milliseconds", b, r >= c.second ? 0 : e * Math.floor(k.get("Milliseconds", b) / e)); r >= c.second && k.set("Seconds", b, r >= c.minute ? 0 : e * Math.floor(k.get("Seconds", b) / e)); r >= c.minute && k.set("Minutes", b, r >= c.hour ? 0 : e * Math.floor(k.get("Minutes", b) / e)); r >= c.hour && k.set("Hours", b, r >= c.day ? 0 : e * Math.floor(k.get("Hours", b) / e)); r >= c.day && k.set("Date", b, r >= c.month ? 1 : Math.max(1, e * Math.floor(k.get("Date", b) / e))); if (r >=
                            c.month) { k.set("Month", b, r >= c.year ? 0 : e * Math.floor(k.get("Month", b) / e)); var p = k.get("FullYear", b) } r >= c.year && k.set("FullYear", b, p - p % e); r === c.week && (p = k.get("Day", b), k.set("Date", b, k.get("Date", b) - p + q + (p < q ? -7 : 0))); p = k.get("FullYear", b); q = k.get("Month", b); var x = k.get("Date", b), E = k.get("Hours", b); d = b.getTime(); !k.variableTimezone && k.useUTC || !D(m) || (H = m - d > 4 * c.month || k.getTimezoneOffset(d) !== k.getTimezoneOffset(m)); d = b.getTime(); for (b = 1; d < m;)h.push(d), d = r === c.year ? k.makeTime(p + b * e, 0) : r === c.month ? k.makeTime(p,
                                q + b * e) : !H || r !== c.day && r !== c.week ? H && r === c.hour && 1 < e ? k.makeTime(p, q, x, E + b * e) : d + r * e : k.makeTime(p, q, x + b * e * (r === c.day ? 1 : 7)), b++; h.push(d); r <= c.hour && 1E4 > h.length && h.forEach(function (b) { 0 === b % 18E5 && "000000000" === k.dateFormat("%H%M%S%L", b) && (v[b] = "day") })
                    } h.info = B(g, { higherRanks: v, totalRange: r * e }); return h
                }; E.prototype.getDateFormat = function (g, d, r, q) {
                    var k = this.dateFormat("%m-%d %H:%M:%S.%L", d), h = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, v = "millisecond"; for (b in c) {
                        if (g === c.week && +this.dateFormat("%w",
                            d) === r && "00:00:00.000" === k.substr(6)) { var b = "week"; break } if (c[b] > g) { b = v; break } if (h[b] && k.substr(h[b]) !== "01-01 00:00:00.000".substr(h[b])) break; "week" !== b && (v = b)
                    } if (b) var m = this.resolveDTLFormat(q[b]).main; return m
                }; return E
        }(); ""; return f
    }); G(f, "Core/DefaultOptions.js", [f["Core/Chart/ChartDefaults.js"], f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Color/Palettes.js"], f["Core/Time.js"], f["Core/Utilities.js"]], function (a, f, w, D, u, B) {
        f = f.parse; var I = B.merge, y = {
            colors: D.colors, symbols: ["circle",
                "diamond", "square", "triangle", "triangle-down"], lang: { loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " " }, global: {}, time: {
                    Date: void 0, getTimezoneOffset: void 0,
                    timezone: void 0, timezoneOffset: 0, useUTC: !0
                }, chart: a, title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { text: "", align: "center", widthAdjust: -44 }, caption: { margin: 15, text: "", align: "left", verticalAlign: "bottom" }, plotOptions: {}, labels: { style: { position: "absolute", color: "#333333" } }, legend: {
                    enabled: !0, align: "center", alignColumns: !0, className: "highcharts-no-tooltip", layout: "horizontal", labelFormatter: function () { return this.name }, borderColor: "#999999", borderRadius: 0, navigation: {
                        activeColor: "#003399",
                        inactiveColor: "#cccccc"
                    }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#cccccc" }, shadow: !1, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } }
                }, loading: {
                    labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: {
                        position: "absolute", backgroundColor: "#ffffff", opacity: .5,
                        textAlign: "center"
                    }
                }, tooltip: {
                    enabled: !0, animation: w.svg, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y" }, footerFormat: "", headerShape: "callout", hideDelay: 500, padding: 8, shape: "callout", shared: !1, snap: w.isTouchDevice ? 25 : 10, headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
                    backgroundColor: f("#f7f7f7").setOpacity(.85).get(), borderWidth: 1, shadow: !0, stickOnContact: !1, style: { color: "#333333", cursor: "default", fontSize: "12px", whiteSpace: "nowrap" }, useHTML: !1
                }, credits: { enabled: !0, href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "9px" }}
        }; y.chart.styledMode = !1; ""; var t = new u(I(y.global, y.time)); a = {
            defaultOptions: y, defaultTime: t, getOptions: function () { return y },
            setOptions: function (n) { I(!0, y, n); if (n.time || n.global) w.time ? w.time.update(I(y.global, y.time, n.global, n.time)) : w.time = t; return y }
        }; ""; return a
    }); G(f, "Core/Animation/Fx.js", [f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function (a, f, w) {
        var I = a.parse, u = f.win, B = w.isNumber, C = w.objectEach; return function () {
            function a(a, n, l) { this.pos = NaN; this.options = n; this.elem = a; this.prop = l } a.prototype.dSetter = function () {
                var a = this.paths, n = a && a[0]; a = a && a[1]; var l = this.now || 0, d = []; if (1 !== l && n && a) if (n.length ===
                    a.length && 1 > l) for (var c = 0; c < a.length; c++) { for (var g = n[c], m = a[c], E = [], z = 0; z < m.length; z++) { var A = g[z], r = m[z]; B(A) && B(r) && ("A" !== m[0] || 4 !== z && 5 !== z) ? E[z] = A + l * (r - A) : E[z] = r } d.push(E) } else d = a; else d = this.toD || []; this.elem.attr("d", d, void 0, !0)
            }; a.prototype.update = function () { var a = this.elem, n = this.prop, l = this.now, d = this.options.step; if (this[n + "Setter"]) this[n + "Setter"](); else a.attr ? a.element && a.attr(n, l, null, !0) : a.style[n] = l + this.unit; d && d.call(a, l, this) }; a.prototype.run = function (t, n, l) {
                var d = this, c = d.options,
                g = function (c) { return g.stopped ? !1 : d.step(c) }, m = u.requestAnimationFrame || function (c) { setTimeout(c, 13) }, E = function () { for (var c = 0; c < a.timers.length; c++)a.timers[c]() || a.timers.splice(c--, 1); a.timers.length && m(E) }; t !== n || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = t, this.end = n, this.unit = l, this.now = this.start, this.pos = 0, g.elem = this.elem, g.prop = this.prop, g() && 1 === a.timers.push(g) && m(E)) : (delete c.curAnim[this.prop], c.complete && 0 === Object.keys(c.curAnim).length && c.complete.call(this.elem))
            };
            a.prototype.step = function (a) { var n = +new Date, l = this.options, d = this.elem, c = l.complete, g = l.duration, m = l.curAnim; if (d.attr && !d.element) a = !1; else if (a || n >= g + this.startTime) { this.now = this.end; this.pos = 1; this.update(); var E = m[this.prop] = !0; C(m, function (c) { !0 !== c && (E = !1) }); E && c && c.call(d); a = !1 } else this.pos = l.easing((n - this.startTime) / g), this.now = this.start + (this.end - this.start) * this.pos, this.update(), a = !0; return a }; a.prototype.initPath = function (a, n, l) {
                function d(c, h) {
                    for (; c.length < q;) {
                        var k = c[0], b = h[q -
                            c.length]; b && "M" === k[0] && (c[0] = "C" === b[0] ? ["C", k[1], k[2], k[1], k[2], k[1], k[2]] : ["L", k[1], k[2]]); c.unshift(k); E && (k = c.pop(), c.push(c[c.length - 1], k))
                    }
                } function c(c, h) { for (; c.length < q;)if (h = c[Math.floor(c.length / z) - 1].slice(), "C" === h[0] && (h[1] = h[5], h[2] = h[6]), E) { var k = c[Math.floor(c.length / z)].slice(); c.splice(c.length / 2, 0, h, k) } else c.push(h) } var g = a.startX, m = a.endX; l = l.slice(); var E = a.isArea, z = E ? 2 : 1; n = n && n.slice(); if (!n) return [l, l]; if (g && m && m.length) {
                    for (a = 0; a < g.length; a++)if (g[a] === m[0]) { var A = a; break } else if (g[0] ===
                        m[m.length - g.length + a]) { A = a; var r = !0; break } else if (g[g.length - 1] === m[m.length - g.length + a]) { A = g.length - a; break } "undefined" === typeof A && (n = [])
                } if (n.length && B(A)) { var q = l.length + A * z; r ? (d(n, l), c(l, n)) : (d(l, n), c(n, l)) } return [n, l]
            }; a.prototype.fillSetter = function () { a.prototype.strokeSetter.apply(this, arguments) }; a.prototype.strokeSetter = function () { this.elem.attr(this.prop, I(this.start).tweenTo(I(this.end), this.pos), void 0, !0) }; a.timers = []; return a
        }()
    }); G(f, "Core/Animation/AnimationUtilities.js", [f["Core/Animation/Fx.js"],
    f["Core/Utilities.js"]], function (a, f) {
        function I(c) { return t(c) ? n({ duration: 500, defer: 0 }, c) : { duration: c ? 500 : 0, defer: 0 } } function D(c, g) { for (var d = a.timers.length; d--;)a.timers[d].elem !== c || g && g !== a.timers[d].prop || (a.timers[d].stopped = !0) } var u = f.defined, B = f.getStyle, C = f.isArray, y = f.isNumber, t = f.isObject, n = f.merge, l = f.objectEach, d = f.pick; return {
            animate: function (c, g, d) {
                var m, z = "", A, r; if (!t(d)) { var q = arguments; d = { duration: q[2], easing: q[3], complete: q[4] } } y(d.duration) || (d.duration = 400); d.easing = "function" ===
                    typeof d.easing ? d.easing : Math[d.easing] || Math.easeInOutSine; d.curAnim = n(g); l(g, function (k, h) { D(c, h); r = new a(c, d, h); A = void 0; "d" === h && C(g.d) ? (r.paths = r.initPath(c, c.pathArray, g.d), r.toD = g.d, m = 0, A = 1) : c.attr ? m = c.attr(h) : (m = parseFloat(B(c, h)) || 0, "opacity" !== h && (z = "px")); A || (A = k); "string" === typeof A && A.match("px") && (A = A.replace(/px/g, "")); r.run(m, A, z) })
            }, animObject: I, getDeferredAnimation: function (c, g, d) {
                var m = I(g), z = 0, A = 0; (d ? [d] : c.series).forEach(function (c) {
                    c = I(c.options.animation); z = g && u(g.defer) ? m.defer :
                        Math.max(z, c.duration + c.defer); A = Math.min(m.duration, c.duration)
                }); c.renderer.forExport && (z = 0); return { defer: Math.max(0, z - A), duration: Math.min(z, A) }
            }, setAnimation: function (c, g) { g.renderer.globalAnimation = d(c, g.options.chart.animation, !0) }, stop: D
        }
    }); G(f, "Core/Renderer/HTML/AST.js", [f["Core/Globals.js"], f["Core/Utilities.js"]], function (a, f) {
        var I = a.SVG_NS, D = f.attr, u = f.createElement, B = f.css, C = f.error, y = f.isFunction, t = f.isString, n = f.objectEach, l = f.splat, d = (f = a.win.trustedTypes) && y(f.createPolicy) && f.createPolicy("highcharts",
            { createHTML: function (c) { return c } }), c = d ? d.createHTML("") : ""; try { var g = !!(new DOMParser).parseFromString(c, "text/html") } catch (m) { g = !1 } y = function () {
                function m(c) { this.nodes = "string" === typeof c ? this.parseMarkup(c) : c } m.filterUserAttributes = function (c) {
                    n(c, function (g, d) {
                        var r = !0; -1 === m.allowedAttributes.indexOf(d) && (r = !1); -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(d) && (r = t(g) && m.allowedReferences.some(function (c) { return 0 === g.indexOf(c) })); r || (C(33, !1, void 0, {
                            "Invalid attribute in config": "" +
                                d
                        }), delete c[d])
                    }); return c
                }; m.parseStyle = function (c) { return c.split(";").reduce(function (c, g) { g = g.split(":").map(function (c) { return c.trim() }); var d = g.shift(); d && g.length && (c[d.replace(/-([a-z])/g, function (c) { return c[1].toUpperCase() })] = g.join(":")); return c }, {}) }; m.setElementHTML = function (c, g) { c.innerHTML = m.emptyHTML; g && (new m(g)).addToDOM(c) }; m.prototype.addToDOM = function (c) {
                    function g(c, d) {
                        var q; l(c).forEach(function (c) {
                            var h = c.tagName, k = c.textContent ? a.doc.createTextNode(c.textContent) : void 0,
                            b = m.bypassHTMLFiltering; if (h) if ("#text" === h) var r = k; else if (-1 !== m.allowedTags.indexOf(h) || b) { h = a.doc.createElementNS("svg" === h ? I : d.namespaceURI || I, h); var e = c.attributes || {}; n(c, function (b, h) { "tagName" !== h && "attributes" !== h && "children" !== h && "style" !== h && "textContent" !== h && (e[h] = b) }); D(h, b ? e : m.filterUserAttributes(e)); c.style && B(h, c.style); k && h.appendChild(k); g(c.children || [], h); r = h } else C(33, !1, void 0, { "Invalid tagName in config": h }); r && d.appendChild(r); q = r
                        }); return q
                    } return g(this.nodes, c)
                }; m.prototype.parseMarkup =
                    function (c) {
                        var l = []; c = c.trim().replace(/ style="/g, ' data-style="'); if (g) c = (new DOMParser).parseFromString(d ? d.createHTML(c) : c, "text/html"); else { var A = u("div"); A.innerHTML = c; c = { body: A } } var r = function (c, k) {
                            var h = c.nodeName.toLowerCase(), g = { tagName: h }; "#text" === h && (g.textContent = c.textContent || ""); if (h = c.attributes) { var b = {};[].forEach.call(h, function (e) { "data-style" === e.name ? g.style = m.parseStyle(e.value) : b[e.name] = e.value }); g.attributes = b } if (c.childNodes.length) {
                                var d = [];[].forEach.call(c.childNodes,
                                    function (b) { r(b, d) }); d.length && (g.children = d)
                            } k.push(g)
                        };[].forEach.call(c.body.childNodes, function (c) { return r(c, l) }); return l
                    }; m.allowedAttributes = "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align textAnchor textLength title type valign width x x1 x2 y y1 y2 zIndex".split(" ");
                m.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" "); m.allowedTags = "a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr u ul #text".split(" "); m.emptyHTML = c; m.bypassHTMLFiltering = !1; return m
            }(); ""; return y
    });
    G(f, "Core/FormatUtilities.js", [f["Core/DefaultOptions.js"], f["Core/Utilities.js"]], function (a, f) {
        function I(n, l, d, c) {
            n = +n || 0; l = +l; var g = D.lang, m = (n.toString().split(".")[1] || "").split("e")[0].length, E = n.toString().split("e"), z = l; if (-1 === l) l = Math.min(m, 20); else if (!C(l)) l = 2; else if (l && E[1] && 0 > E[1]) { var A = l + +E[1]; 0 <= A ? (E[0] = (+E[0]).toExponential(A).split("e")[0], l = A) : (E[0] = E[0].split(".")[0] || 0, n = 20 > l ? (E[0] * Math.pow(10, E[1])).toFixed(l) : 0, E[1] = 0) } A = (Math.abs(E[1] ? E[0] : n) + Math.pow(10, -Math.max(l, m) -
                1)).toFixed(l); m = String(t(A)); var r = 3 < m.length ? m.length % 3 : 0; d = y(d, g.decimalPoint); c = y(c, g.thousandsSep); n = (0 > n ? "-" : "") + (r ? m.substr(0, r) + c : ""); n = 0 > +E[1] && !z ? "0" : n + m.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + c); l && (n += d + A.slice(-l)); E[1] && 0 !== +n && (n += "e" + E[1]); return n
        } var D = a.defaultOptions, u = a.defaultTime, B = f.getNestedProperty, C = f.isNumber, y = f.pick, t = f.pInt; return {
            dateFormat: function (n, l, d) { return u.dateFormat(n, l, d) }, format: function (n, l, d) {
                var c = "{", g = !1, m = /f$/, E = /\.([0-9])/, z = D.lang, A = d && d.time ||
                    u; d = d && d.numberFormatter || I; for (var r = []; n;) { var q = n.indexOf(c); if (-1 === q) break; var k = n.slice(0, q); if (g) { k = k.split(":"); c = B(k.shift() || "", l); if (k.length && "number" === typeof c) if (k = k.join(":"), m.test(k)) { var h = parseInt((k.match(E) || ["", "-1"])[1], 10); null !== c && (c = d(c, h, z.decimalPoint, -1 < k.indexOf(",") ? z.thousandsSep : "")) } else c = A.dateFormat(k, c); r.push(c) } else r.push(k); n = n.slice(q + 1); c = (g = !g) ? "}" : "{" } r.push(n); return r.join("")
            }, numberFormat: I
        }
    }); G(f, "Core/Renderer/RendererUtilities.js", [f["Core/Utilities.js"]],
        function (a) {
            var f = a.clamp, w = a.pick, D = a.stableSort, u; (function (a) {
                function u(a, t, n) {
                    var l = a, d = l.reducedLen || t, c = function (c, g) { return (g.rank || 0) - (c.rank || 0) }, g = function (c, g) { return c.target - g.target }, m, E = !0, z = [], A = 0; for (m = a.length; m--;)A += a[m].size; if (A > d) { D(a, c); for (A = m = 0; A <= d;)A += a[m].size, m++; z = a.splice(m - 1, a.length) } D(a, g); for (a = a.map(function (c) { return { size: c.size, targets: [c.target], align: w(c.align, .5) } }); E;) {
                        for (m = a.length; m--;)d = a[m], c = (Math.min.apply(0, d.targets) + Math.max.apply(0, d.targets)) /
                            2, d.pos = f(c - d.size * d.align, 0, t - d.size); m = a.length; for (E = !1; m--;)0 < m && a[m - 1].pos + a[m - 1].size > a[m].pos && (a[m - 1].size += a[m].size, a[m - 1].targets = a[m - 1].targets.concat(a[m].targets), a[m - 1].align = .5, a[m - 1].pos + a[m - 1].size > t && (a[m - 1].pos = t - a[m - 1].size), a.splice(m, 1), E = !0)
                    } l.push.apply(l, z); m = 0; a.some(function (c) {
                        var g = 0; return (c.targets || []).some(function () {
                            l[m].pos = c.pos + g; if ("undefined" !== typeof n && Math.abs(l[m].pos - l[m].target) > n) return l.slice(0, m + 1).forEach(function (c) { return delete c.pos }), l.reducedLen =
                                (l.reducedLen || t) - .1 * t, l.reducedLen > .1 * t && u(l, t, n), !0; g += l[m].size; m++; return !1
                        })
                    }); D(l, g); return l
                } a.distribute = u
            })(u || (u = {})); return u
        }); G(f, "Core/Renderer/SVG/SVGElement.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Renderer/HTML/AST.js"], f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function (a, f, w, D, u) {
            var I = a.animate, C = a.animObject, y = a.stop, t = D.deg2rad, n = D.doc, l = D.noop, d = D.svg, c = D.SVG_NS, g = D.win, m = u.addEvent, E = u.attr, z = u.createElement, A = u.css, r = u.defined, q = u.erase,
            k = u.extend, h = u.fireEvent, v = u.isArray, b = u.isFunction, F = u.isNumber, e = u.isString, H = u.merge, p = u.objectEach, x = u.pick, J = u.pInt, M = u.syncTimeout, P = u.uniqueKey; a = function () {
                function a() { this.element = void 0; this.onEvents = {}; this.opacity = 1; this.renderer = void 0; this.SVG_NS = c; this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ") } a.prototype._defaultGetter = function (b) {
                    b = x(this[b + "Value"], this[b], this.element ? this.element.getAttribute(b) : null, 0); /^[\-0-9\.]+$/.test(b) &&
                        (b = parseFloat(b)); return b
                }; a.prototype._defaultSetter = function (b, e, c) { c.setAttribute(e, b) }; a.prototype.add = function (b) { var e = this.renderer, c = this.element; b && (this.parentGroup = b); this.parentInverted = b && b.inverted; "undefined" !== typeof this.textStr && "text" === this.element.nodeName && e.buildText(this); this.added = !0; if (!b || b.handleZ || this.zIndex) var h = this.zIndexSetter(); h || (b ? b.element : e.box).appendChild(c); if (this.onAdd) this.onAdd(); return this }; a.prototype.addClass = function (b, e) {
                    var c = e ? "" : this.attr("class") ||
                        ""; b = (b || "").split(/ /g).reduce(function (b, e) { -1 === c.indexOf(e) && b.push(e); return b }, c ? [c] : []).join(" "); b !== c && this.attr("class", b); return this
                }; a.prototype.afterSetters = function () { this.doTransform && (this.updateTransform(), this.doTransform = !1) }; a.prototype.align = function (b, c, h) {
                    var p = {}, k = this.renderer, g = k.alignedObjects, d, v, r; if (b) { if (this.alignOptions = b, this.alignByTranslate = c, !h || e(h)) this.alignTo = d = h || "renderer", q(g, this), g.push(this), h = void 0 } else b = this.alignOptions, c = this.alignByTranslate,
                        d = this.alignTo; h = x(h, k[d], "scrollablePlotBox" === d ? k.plotBox : void 0, k); d = b.align; var Y = b.verticalAlign; k = (h.x || 0) + (b.x || 0); g = (h.y || 0) + (b.y || 0); "right" === d ? v = 1 : "center" === d && (v = 2); v && (k += (h.width - (b.width || 0)) / v); p[c ? "translateX" : "x"] = Math.round(k); "bottom" === Y ? r = 1 : "middle" === Y && (r = 2); r && (g += (h.height - (b.height || 0)) / r); p[c ? "translateY" : "y"] = Math.round(g); this[this.placed ? "animate" : "attr"](p); this.placed = !0; this.alignAttr = p; return this
                }; a.prototype.alignSetter = function (b) {
                    var e = {
                        left: "start", center: "middle",
                        right: "end"
                    }; e[b] && (this.alignValue = b, this.element.setAttribute("text-anchor", e[b]))
                }; a.prototype.animate = function (b, e, c) { var h = this, k = C(x(e, this.renderer.globalAnimation, !0)); e = k.defer; x(n.hidden, n.msHidden, n.webkitHidden, !1) && (k.duration = 0); 0 !== k.duration ? (c && (k.complete = c), M(function () { h.element && I(h, b, k) }, e)) : (this.attr(b, void 0, c || k.complete), p(b, function (b, e) { k.step && k.step.call(this, b, { prop: e, pos: 1, elem: this }) }, this)); return this }; a.prototype.applyTextOutline = function (b) {
                    var e = this.element;
                    -1 !== b.indexOf("contrast") && (b = b.replace(/contrast/g, this.renderer.getContrast(e.style.fill))); var h = b.split(" "); b = h[h.length - 1]; if ((h = h[0]) && "none" !== h && D.svg) {
                        this.fakeTS = !0; this.ySetter = this.xSetter; h = h.replace(/(^[\d\.]+)(.*?)$/g, function (b, e, h) { return 2 * Number(e) + h }); this.removeTextOutline(); var p = n.createElementNS(c, "tspan"); E(p, { "class": "highcharts-text-outline", fill: b, stroke: b, "stroke-width": h, "stroke-linejoin": "round" });[].forEach.call(e.childNodes, function (b) {
                            var e = b.cloneNode(!0); e.removeAttribute &&
                                ["fill", "stroke", "stroke-width", "stroke"].forEach(function (b) { return e.removeAttribute(b) }); p.appendChild(e)
                        }); var k = n.createElementNS(c, "tspan"); k.textContent = "\u200b";["x", "y"].forEach(function (b) { var h = e.getAttribute(b); h && k.setAttribute(b, h) }); p.appendChild(k); e.insertBefore(p, e.firstChild)
                    }
                }; a.prototype.attr = function (b, e, h, c) {
                    var k = this.element, g = this.symbolCustomAttribs, d, x = this, v, q; if ("string" === typeof b && "undefined" !== typeof e) { var r = b; b = {}; b[r] = e } "string" === typeof b ? x = (this[b + "Getter"] ||
                        this._defaultGetter).call(this, b, k) : (p(b, function (e, h) { v = !1; c || y(this, h); this.symbolName && -1 !== g.indexOf(h) && (d || (this.symbolAttr(b), d = !0), v = !0); !this.rotation || "x" !== h && "y" !== h || (this.doTransform = !0); v || (q = this[h + "Setter"] || this._defaultSetter, q.call(this, e, h, k), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(h) && this.updateShadows(h, e, q)) }, this), this.afterSetters()); h && h.call(this); return x
                }; a.prototype.clip = function (b) {
                    return this.attr("clip-path", b ? "url(" +
                        this.renderer.url + "#" + b.id + ")" : "none")
                }; a.prototype.crisp = function (b, e) { e = e || b.strokeWidth || 0; var h = Math.round(e) % 2 / 2; b.x = Math.floor(b.x || this.x || 0) + h; b.y = Math.floor(b.y || this.y || 0) + h; b.width = Math.floor((b.width || this.width || 0) - 2 * h); b.height = Math.floor((b.height || this.height || 0) - 2 * h); r(b.strokeWidth) && (b.strokeWidth = e); return b }; a.prototype.complexColor = function (b, e, c) {
                    var k = this.renderer, g, d, x, q, m, Y, a, F, l, A, n = [], z; h(this.renderer, "complexColor", { args: arguments }, function () {
                        b.radialGradient ? d = "radialGradient" :
                        b.linearGradient && (d = "linearGradient"); if (d) {
                            x = b[d]; m = k.gradients; Y = b.stops; l = c.radialReference; v(x) && (b[d] = x = { x1: x[0], y1: x[1], x2: x[2], y2: x[3], gradientUnits: "userSpaceOnUse" }); "radialGradient" === d && l && !r(x.gradientUnits) && (q = x, x = H(x, k.getRadialAttr(l, q), { gradientUnits: "userSpaceOnUse" })); p(x, function (b, e) { "id" !== e && n.push(e, b) }); p(Y, function (b) { n.push(b) }); n = n.join(","); if (m[n]) A = m[n].attr("id"); else {
                                x.id = A = P(); var h = m[n] = k.createElement(d).attr(x).add(k.defs); h.radAttr = q; h.stops = []; Y.forEach(function (b) {
                                    0 ===
                                    b[1].indexOf("rgba") ? (g = w.parse(b[1]), a = g.get("rgb"), F = g.get("a")) : (a = b[1], F = 1); b = k.createElement("stop").attr({ offset: b[0], "stop-color": a, "stop-opacity": F }).add(h); h.stops.push(b)
                                })
                            } z = "url(" + k.url + "#" + A + ")"; c.setAttribute(e, z); c.gradient = n; b.toString = function () { return z }
                        }
                    })
                }; a.prototype.css = function (b) {
                    var e = this.styles, h = {}, c = this.element, g = !e; b.color && (b.fill = b.color); e && p(b, function (b, c) { e && e[c] !== b && (h[c] = b, g = !0) }); if (g) {
                        e && (b = k(e, h)); if (null === b.width || "auto" === b.width) delete this.textWidth;
                        else if ("text" === c.nodeName.toLowerCase() && b.width) var x = this.textWidth = J(b.width); this.styles = b; x && !d && this.renderer.forExport && delete b.width; var v = H(b); c.namespaceURI === this.SVG_NS && ["textOutline", "textOverflow", "width"].forEach(function (b) { return v && delete v[b] }); A(c, v); this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), b.textOutline && this.applyTextOutline(b.textOutline))
                    } return this
                }; a.prototype.dashstyleSetter = function (b) {
                    var e = this["stroke-width"]; "inherit" === e && (e =
                        1); if (b = b && b.toLowerCase()) { var h = b.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","); for (b = h.length; b--;)h[b] = "" + J(h[b]) * x(e, NaN); b = h.join(",").replace(/NaN/g, "none"); this.element.setAttribute("stroke-dasharray", b) }
                }; a.prototype.destroy = function () {
                    var b = this, e = b.element || {}, h = b.renderer, c = e.ownerSVGElement, k = h.isSVG &&
                        "SPAN" === e.nodeName && b.parentGroup || void 0; e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null; y(b); if (b.clipPath && c) { var g = b.clipPath;[].forEach.call(c.querySelectorAll("[clip-path],[CLIP-PATH]"), function (b) { -1 < b.getAttribute("clip-path").indexOf(g.element.id) && b.removeAttribute("clip-path") }); b.clipPath = g.destroy() } if (b.stops) { for (c = 0; c < b.stops.length; c++)b.stops[c].destroy(); b.stops.length = 0; b.stops = void 0 } b.safeRemoveChild(e); for (h.styledMode || b.destroyShadows(); k && k.div && 0 === k.div.childNodes.length;)e =
                            k.parentGroup, b.safeRemoveChild(k.div), delete k.div, k = e; b.alignTo && q(h.alignedObjects, b); p(b, function (e, h) { b[h] && b[h].parentGroup === b && b[h].destroy && b[h].destroy(); delete b[h] })
                }; a.prototype.destroyShadows = function () { (this.shadows || []).forEach(function (b) { this.safeRemoveChild(b) }, this); this.shadows = void 0 }; a.prototype.destroyTextPath = function (b, e) {
                    var h = b.getElementsByTagName("text")[0]; if (h) {
                        if (h.removeAttribute("dx"), h.removeAttribute("dy"), e.element.setAttribute("id", ""), this.textPathWrapper &&
                            h.getElementsByTagName("textPath").length) { for (b = this.textPathWrapper.element.childNodes; b.length;)h.appendChild(b[0]); h.removeChild(this.textPathWrapper.element) }
                    } else if (b.getAttribute("dx") || b.getAttribute("dy")) b.removeAttribute("dx"), b.removeAttribute("dy"); this.textPathWrapper && (this.textPathWrapper = this.textPathWrapper.destroy())
                }; a.prototype.dSetter = function (b, e, h) {
                    v(b) && ("string" === typeof b[0] && (b = this.renderer.pathToSegments(b)), this.pathArray = b, b = b.reduce(function (b, e, h) {
                        return e && e.join ?
                            (h ? b + " " : "") + e.join(" ") : (e || "").toString()
                    }, "")); /(NaN| {2}|^$)/.test(b) && (b = "M 0 0"); this[e] !== b && (h.setAttribute(e, b), this[e] = b)
                }; a.prototype.fadeOut = function (b) { var e = this; e.animate({ opacity: 0 }, { duration: x(b, 150), complete: function () { e.attr({ y: -9999 }).hide() } }) }; a.prototype.fillSetter = function (b, e, h) { "string" === typeof b ? h.setAttribute(e, b) : b && this.complexColor(b, e, h) }; a.prototype.getBBox = function (e, h) {
                    var c = this.alignValue, p = this.element, g = this.renderer, d = this.styles, v = this.textStr, q = g.cache, m =
                        g.cacheKeys, F = p.namespaceURI === this.SVG_NS; h = x(h, this.rotation, 0); var H = g.styledMode ? p && a.prototype.getStyle.call(p, "font-size") : d && d.fontSize, l; if (r(v)) { var n = v.toString(); -1 === n.indexOf("<") && (n = n.replace(/[0-9]/g, "0")); n += ["", h, H, this.textWidth, c, d && d.textOverflow, d && d.fontWeight].join() } n && !e && (l = q[n]); if (!l) {
                            if (F || g.forExport) {
                                try {
                                    var z = this.fakeTS && function (b) { var e = p.querySelector(".highcharts-text-outline"); e && A(e, { display: b }) }; b(z) && z("none"); l = p.getBBox ? k({}, p.getBBox()) : {
                                        width: p.offsetWidth,
                                        height: p.offsetHeight
                                    }; b(z) && z("")
                                } catch (ca) { "" } if (!l || 0 > l.width) l = { x: 0, y: 0, width: 0, height: 0 }
                            } else l = this.htmlGetBBox(); if (g.isSVG && (g = l.width, e = l.height, F && (l.height = e = { "11px,17": 14, "13px,20": 16 }[(H || "") + "," + Math.round(e)] || e), h)) {
                                F = Number(p.getAttribute("y") || 0) - l.y; c = { right: 1, center: .5 }[c || 0] || 0; d = h * t; H = (h - 90) * t; var E = g * Math.cos(d); h = g * Math.sin(d); z = Math.cos(H); d = Math.sin(H); g = l.x + c * (g - E) + F * z; H = g + E; z = H - e * z; E = z - E; F = l.y + F - c * h + F * d; c = F + h; e = c - e * d; h = e - h; l.x = Math.min(g, H, z, E); l.y = Math.min(F, c, e, h); l.width =
                                    Math.max(g, H, z, E) - l.x; l.height = Math.max(F, c, e, h) - l.y
                            } if (n && ("" === v || 0 < l.height)) { for (; 250 < m.length;)delete q[m.shift()]; q[n] || m.push(n); q[n] = l }
                        } return l
                }; a.prototype.getStyle = function (b) { return g.getComputedStyle(this.element || this, "").getPropertyValue(b) }; a.prototype.hasClass = function (b) { return -1 !== ("" + this.attr("class")).split(" ").indexOf(b) }; a.prototype.hide = function () { return this.attr({ visibility: "hidden" }) }; a.prototype.htmlGetBBox = function () { return { height: 0, width: 0, x: 0, y: 0 } }; a.prototype.init =
                    function (b, e) { this.element = "span" === e ? z(e) : n.createElementNS(this.SVG_NS, e); this.renderer = b; h(this, "afterInit") }; a.prototype.invert = function (b) { this.inverted = b; this.updateTransform(); return this }; a.prototype.on = function (b, e) { var h = this.onEvents; if (h[b]) h[b](); h[b] = m(this.element, b, e); return this }; a.prototype.opacitySetter = function (b, e, h) { this.opacity = b = Number(Number(b).toFixed(3)); h.setAttribute(e, b) }; a.prototype.removeClass = function (b) {
                        return this.attr("class", ("" + this.attr("class")).replace(e(b) ?
                            new RegExp("(^| )" + b + "( |$)") : b, " ").replace(/ +/g, " ").trim())
                    }; a.prototype.removeTextOutline = function () { var b = this.element.querySelector("tspan.highcharts-text-outline"); b && this.safeRemoveChild(b) }; a.prototype.safeRemoveChild = function (b) { var e = b.parentNode; e && e.removeChild(b) }; a.prototype.setRadialReference = function (b) { var e = this.element.gradient && this.renderer.gradients[this.element.gradient]; this.element.radialReference = b; e && e.radAttr && e.animate(this.renderer.getRadialAttr(b, e.radAttr)); return this };
                a.prototype.setTextPath = function (b, e) {
                    var h = this.element, c = this.text ? this.text.element : h, k = { textAnchor: "text-anchor" }, d = !1, x = this.textPathWrapper, v = !x; e = H(!0, { enabled: !0, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, e); var q = f.filterUserAttributes(e.attributes); if (b && e && e.enabled) {
                        x && null === x.element.parentNode ? (v = !0, x = x.destroy()) : x && this.removeTextOutline.call(x.parentGroup); this.options && this.options.padding && (q.dx = -this.options.padding); x || (this.textPathWrapper = x = this.renderer.createElement("textPath"),
                            d = !0); var m = x.element; (e = b.element.getAttribute("id")) || b.element.setAttribute("id", e = P()); if (v) for (c.setAttribute("y", 0), F(q.dx) && c.setAttribute("x", -q.dx), b = [].slice.call(c.childNodes), v = 0; v < b.length; v++) { var a = b[v]; a.nodeType !== g.Node.TEXT_NODE && "tspan" !== a.nodeName || m.appendChild(a) } d && x && x.add({ element: c }); m.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + e); r(q.dy) && (m.parentNode.setAttribute("dy", q.dy), delete q.dy); r(q.dx) && (m.parentNode.setAttribute("dx", q.dx), delete q.dx);
                        p(q, function (b, e) { m.setAttribute(k[e] || e, b) }); h.removeAttribute("transform"); this.removeTextOutline.call(x); this.text && !this.renderer.styledMode && this.attr({ fill: "none", "stroke-width": 0 }); this.applyTextOutline = this.updateTransform = l
                    } else x && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(h, b), this.updateTransform(), this.options && this.options.rotation && this.applyTextOutline(this.options.style.textOutline)); return this
                }; a.prototype.shadow = function (b, e, h) {
                    var c = [], g = this.element,
                    d = this.oldShadowOptions, x = { color: "#000000", offsetX: this.parentInverted ? -1 : 1, offsetY: this.parentInverted ? -1 : 1, opacity: .15, width: 3 }, v = !1, q; !0 === b ? q = x : "object" === typeof b && (q = k(x, b)); q && (q && d && p(q, function (b, e) { b !== d[e] && (v = !0) }), v && this.destroyShadows(), this.oldShadowOptions = q); if (!q) this.destroyShadows(); else if (!this.shadows) {
                        var m = q.opacity / q.width; var r = this.parentInverted ? "translate(" + q.offsetY + ", " + q.offsetX + ")" : "translate(" + q.offsetX + ", " + q.offsetY + ")"; for (x = 1; x <= q.width; x++) {
                            var a = g.cloneNode(!1);
                            var F = 2 * q.width + 1 - 2 * x; E(a, { stroke: b.color || "#000000", "stroke-opacity": m * x, "stroke-width": F, transform: r, fill: "none" }); a.setAttribute("class", (a.getAttribute("class") || "") + " highcharts-shadow"); h && (E(a, "height", Math.max(E(a, "height") - F, 0)), a.cutHeight = F); e ? e.element.appendChild(a) : g.parentNode && g.parentNode.insertBefore(a, g); c.push(a)
                        } this.shadows = c
                    } return this
                }; a.prototype.show = function (b) { void 0 === b && (b = !0); return this.attr({ visibility: b ? "inherit" : "visible" }) }; a.prototype.strokeSetter = function (b,
                    e, h) { this[e] = b; this.stroke && this["stroke-width"] ? (a.prototype.fillSetter.call(this, this.stroke, "stroke", h), h.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === e && 0 === b && this.hasStroke ? (h.removeAttribute("stroke"), this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] && (h.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) }; a.prototype.strokeWidth = function () {
                        if (!this.renderer.styledMode) return this["stroke-width"] || 0; var b = this.getStyle("stroke-width"),
                            e = 0; if (b.indexOf("px") === b.length - 2) e = J(b); else if ("" !== b) { var h = n.createElementNS(c, "rect"); E(h, { width: b, "stroke-width": 0 }); this.element.parentNode.appendChild(h); e = h.getBBox().width; h.parentNode.removeChild(h) } return e
                    }; a.prototype.symbolAttr = function (b) { var e = this; "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function (h) { e[h] = x(b[h], e[h]) }); e.attr({ d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e) }) }; a.prototype.textSetter = function (b) {
                        b !== this.textStr &&
                        (delete this.textPxLength, this.textStr = b, this.added && this.renderer.buildText(this))
                    }; a.prototype.titleSetter = function (b) { var e = this.element, h = e.getElementsByTagName("title")[0] || n.createElementNS(this.SVG_NS, "title"); e.insertBefore ? e.insertBefore(h, e.firstChild) : e.appendChild(h); h.textContent = String(x(b, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">") }; a.prototype.toFront = function () { var b = this.element; b.parentNode.appendChild(b); return this }; a.prototype.translate = function (b, e) {
                        return this.attr({
                            translateX: b,
                            translateY: e
                        })
                    }; a.prototype.updateShadows = function (b, e, h) { var c = this.shadows; if (c) for (var p = c.length; p--;)h.call(c[p], "height" === b ? Math.max(e - (c[p].cutHeight || 0), 0) : "d" === b ? this.d : e, b, c[p]) }; a.prototype.updateTransform = function () {
                        var b = this.scaleX, e = this.scaleY, h = this.inverted, c = this.rotation, p = this.matrix, k = this.element, g = this.translateX || 0, d = this.translateY || 0; h && (g += this.width, d += this.height); g = ["translate(" + g + "," + d + ")"]; r(p) && g.push("matrix(" + p.join(",") + ")"); h ? g.push("rotate(90) scale(-1,1)") :
                            c && g.push("rotate(" + c + " " + x(this.rotationOriginX, k.getAttribute("x"), 0) + " " + x(this.rotationOriginY, k.getAttribute("y") || 0) + ")"); (r(b) || r(e)) && g.push("scale(" + x(b, 1) + " " + x(e, 1) + ")"); g.length && k.setAttribute("transform", g.join(" "))
                    }; a.prototype.visibilitySetter = function (b, e, h) { "inherit" === b ? h.removeAttribute(e) : this[e] !== b && h.setAttribute(e, b); this[e] = b }; a.prototype.xGetter = function (b) { "circle" === this.element.nodeName && ("x" === b ? b = "cx" : "y" === b && (b = "cy")); return this._defaultGetter(b) }; a.prototype.zIndexSetter =
                        function (b, e) {
                            var h = this.renderer, c = this.parentGroup, p = (c || h).element || h.box, k = this.element; h = p === h.box; var g = !1; var d = this.added; var x; r(b) ? (k.setAttribute("data-z-index", b), b = +b, this[e] === b && (d = !1)) : r(this[e]) && k.removeAttribute("data-z-index"); this[e] = b; if (d) {
                                (b = this.zIndex) && c && (c.handleZ = !0); e = p.childNodes; for (x = e.length - 1; 0 <= x && !g; x--) {
                                    c = e[x]; d = c.getAttribute("data-z-index"); var v = !r(d); if (c !== k) if (0 > b && v && !h && !x) p.insertBefore(k, e[x]), g = !0; else if (J(d) <= b || v && (!r(b) || 0 <= b)) p.insertBefore(k,
                                        e[x + 1] || null), g = !0
                                } g || (p.insertBefore(k, e[h ? 3 : 0] || null), g = !0)
                            } return g
                        }; return a
            }(); a.prototype["stroke-widthSetter"] = a.prototype.strokeSetter; a.prototype.yGetter = a.prototype.xGetter; a.prototype.matrixSetter = a.prototype.rotationOriginXSetter = a.prototype.rotationOriginYSetter = a.prototype.rotationSetter = a.prototype.scaleXSetter = a.prototype.scaleYSetter = a.prototype.translateXSetter = a.prototype.translateYSetter = a.prototype.verticalAlignSetter = function (b, e) { this[e] = b; this.doTransform = !0 }; ""; return a
        });
    G(f, "Core/Renderer/RendererRegistry.js", [f["Core/Globals.js"]], function (a) { var f; (function (f) { f.rendererTypes = {}; var I; f.getRendererType = function (a) { void 0 === a && (a = I); return f.rendererTypes[a] || f.rendererTypes[I] }; f.registerRendererType = function (u, B, C) { f.rendererTypes[u] = B; if (!I || C) I = u, a.Renderer = B } })(f || (f = {})); return f }); G(f, "Core/Renderer/SVG/SVGLabel.js", [f["Core/Renderer/SVG/SVGElement.js"], f["Core/Utilities.js"]], function (a, f) {
        var I = this && this.__extends || function () {
            var a = function (l, d) {
                a = Object.setPrototypeOf ||
                { __proto__: [] } instanceof Array && function (c, g) { c.__proto__ = g } || function (c, g) { for (var d in g) g.hasOwnProperty(d) && (c[d] = g[d]) }; return a(l, d)
            }; return function (l, d) { function c() { this.constructor = l } a(l, d); l.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype, new c) }
        }(), D = f.defined, u = f.extend, B = f.isNumber, C = f.merge, y = f.pick, t = f.removeEvent; return function (n) {
            function l(d, c, g, m, a, z, A, r, q, k) {
                var h = n.call(this) || this; h.paddingLeftSetter = h.paddingSetter; h.paddingRightSetter = h.paddingSetter; h.init(d,
                    "g"); h.textStr = c; h.x = g; h.y = m; h.anchorX = z; h.anchorY = A; h.baseline = q; h.className = k; h.addClass("button" === k ? "highcharts-no-tooltip" : "highcharts-label"); k && h.addClass("highcharts-" + k); h.text = d.text(void 0, 0, 0, r).attr({ zIndex: 1 }); var v; "string" === typeof a && ((v = /^url\((.*?)\)$/.test(a)) || h.renderer.symbols[a]) && (h.symbolKey = a); h.bBox = l.emptyBBox; h.padding = 3; h.baselineOffset = 0; h.needsBox = d.styledMode || v; h.deferredAttr = {}; h.alignFactor = 0; return h
            } I(l, n); l.prototype.alignSetter = function (d) {
                d = {
                    left: 0, center: .5,
                    right: 1
                }[d]; d !== this.alignFactor && (this.alignFactor = d, this.bBox && B(this.xSetting) && this.attr({ x: this.xSetting }))
            }; l.prototype.anchorXSetter = function (d, c) { this.anchorX = d; this.boxAttr(c, Math.round(d) - this.getCrispAdjust() - this.xSetting) }; l.prototype.anchorYSetter = function (d, c) { this.anchorY = d; this.boxAttr(c, d - this.ySetting) }; l.prototype.boxAttr = function (d, c) { this.box ? this.box.attr(d, c) : this.deferredAttr[d] = c }; l.prototype.css = function (d) {
                if (d) {
                    var c = {}; d = C(d); l.textProps.forEach(function (g) {
                        "undefined" !==
                        typeof d[g] && (c[g] = d[g], delete d[g])
                    }); this.text.css(c); var g = "width" in c; "fontSize" in c || "fontWeight" in c ? this.updateTextPadding() : g && this.updateBoxSize()
                } return a.prototype.css.call(this, d)
            }; l.prototype.destroy = function () { t(this.element, "mouseenter"); t(this.element, "mouseleave"); this.text && this.text.destroy(); this.box && (this.box = this.box.destroy()); a.prototype.destroy.call(this) }; l.prototype.fillSetter = function (d, c) { d && (this.needsBox = !0); this.fill = d; this.boxAttr(c, d) }; l.prototype.getBBox = function () {
                this.textStr &&
                0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize(); var d = this.padding, c = y(this.paddingLeft, d); return { width: this.width, height: this.height, x: this.bBox.x - c, y: this.bBox.y - d }
            }; l.prototype.getCrispAdjust = function () { return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2 }; l.prototype.heightSetter = function (d) { this.heightSetting = d }; l.prototype.onAdd = function () {
                var d = this.textStr; this.text.add(this); this.attr({
                    text: D(d) ?
                        d : "", x: this.x, y: this.y
                }); this.box && D(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY })
            }; l.prototype.paddingSetter = function (d, c) { B(d) ? d !== this[c] && (this[c] = d, this.updateTextPadding()) : this[c] = void 0 }; l.prototype.rSetter = function (d, c) { this.boxAttr(c, d) }; l.prototype.shadow = function (d) { d && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(d)); return this }; l.prototype.strokeSetter = function (d, c) { this.stroke = d; this.boxAttr(c, d) }; l.prototype["stroke-widthSetter"] =
                function (d, c) { d && (this.needsBox = !0); this["stroke-width"] = d; this.boxAttr(c, d) }; l.prototype["text-alignSetter"] = function (d) { this.textAlign = d }; l.prototype.textSetter = function (d) { "undefined" !== typeof d && this.text.attr({ text: d }); this.updateTextPadding() }; l.prototype.updateBoxSize = function () {
                    var d = this.text.element.style, c = {}, g = this.padding, m = this.bBox = B(this.widthSetting) && B(this.heightSetting) && !this.textAlign || !D(this.text.textStr) ? l.emptyBBox : this.text.getBBox(); this.width = this.getPaddedWidth(); this.height =
                        (this.heightSetting || m.height || 0) + 2 * g; d = this.renderer.fontMetrics(d && d.fontSize, this.text); this.baselineOffset = g + Math.min((this.text.firstLineMetrics || d).b, m.height || Infinity); this.heightSetting && (this.baselineOffset += (this.heightSetting - d.h) / 2); this.needsBox && (this.box || (g = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), g.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), g.add(this)), g = this.getCrispAdjust(),
                            c.x = g, c.y = (this.baseline ? -this.baselineOffset : 0) + g, c.width = Math.round(this.width), c.height = Math.round(this.height), this.box.attr(u(c, this.deferredAttr)), this.deferredAttr = {})
                }; l.prototype.updateTextPadding = function () {
                    var d = this.text; this.updateBoxSize(); var c = this.baseline ? 0 : this.baselineOffset, g = y(this.paddingLeft, this.padding); D(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (g += { center: .5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width)); if (g !==
                        d.x || c !== d.y) d.attr("x", g), d.hasBoxWidthChanged && (this.bBox = d.getBBox(!0)), "undefined" !== typeof c && d.attr("y", c); d.x = g; d.y = c
                }; l.prototype.widthSetter = function (d) { this.widthSetting = B(d) ? d : void 0 }; l.prototype.getPaddedWidth = function () { var d = this.padding, c = y(this.paddingLeft, d); d = y(this.paddingRight, d); return (this.widthSetting || this.bBox.width || 0) + c + d }; l.prototype.xSetter = function (d) {
                    this.x = d; this.alignFactor && (d -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0); this.xSetting = Math.round(d);
                    this.attr("translateX", this.xSetting)
                }; l.prototype.ySetter = function (d) { this.ySetting = this.y = Math.round(d); this.attr("translateY", this.ySetting) }; l.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }; l.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" "); return l
        }(a)
    }); G(f, "Core/Renderer/SVG/Symbols.js", [f["Core/Utilities.js"]], function (a) {
        function f(a, f, n, l, d) {
            var c = []; if (d) {
                var g = d.start || 0, m = C(d.r, n); n = C(d.r, l || n); var E =
                    (d.end || 0) - .001; l = d.innerR; var z = C(d.open, .001 > Math.abs((d.end || 0) - g - 2 * Math.PI)), A = Math.cos(g), r = Math.sin(g), q = Math.cos(E), k = Math.sin(E); g = C(d.longArc, .001 > E - g - Math.PI ? 0 : 1); c.push(["M", a + m * A, f + n * r], ["A", m, n, 0, g, C(d.clockwise, 1), a + m * q, f + n * k]); u(l) && c.push(z ? ["M", a + l * q, f + l * k] : ["L", a + l * q, f + l * k], ["A", l, l, 0, g, u(d.clockwise) ? 1 - d.clockwise : 0, a + l * A, f + l * r]); z || c.push(["Z"])
            } return c
        } function w(a, f, n, l, d) { return d && d.r ? D(a, f, n, l, d) : [["M", a, f], ["L", a + n, f], ["L", a + n, f + l], ["L", a, f + l], ["Z"]] } function D(a, f, n, l,
            d) { d = d && d.r || 0; return [["M", a + d, f], ["L", a + n - d, f], ["C", a + n, f, a + n, f, a + n, f + d], ["L", a + n, f + l - d], ["C", a + n, f + l, a + n, f + l, a + n - d, f + l], ["L", a + d, f + l], ["C", a, f + l, a, f + l, a, f + l - d], ["L", a, f + d], ["C", a, f, a, f, a + d, f]] } var u = a.defined, B = a.isNumber, C = a.pick; return {
                arc: f, callout: function (a, f, n, l, d) {
                    var c = Math.min(d && d.r || 0, n, l), g = c + 6, m = d && d.anchorX; d = d && d.anchorY || 0; var E = D(a, f, n, l, { r: c }); if (!B(m)) return E; a + m >= n ? d > f + g && d < f + l - g ? E.splice(3, 1, ["L", a + n, d - 6], ["L", a + n + 6, d], ["L", a + n, d + 6], ["L", a + n, f + l - c]) : E.splice(3, 1, ["L", a + n, l /
                        2], ["L", m, d], ["L", a + n, l / 2], ["L", a + n, f + l - c]) : 0 >= a + m ? d > f + g && d < f + l - g ? E.splice(7, 1, ["L", a, d + 6], ["L", a - 6, d], ["L", a, d - 6], ["L", a, f + c]) : E.splice(7, 1, ["L", a, l / 2], ["L", m, d], ["L", a, l / 2], ["L", a, f + c]) : d && d > l && m > a + g && m < a + n - g ? E.splice(5, 1, ["L", m + 6, f + l], ["L", m, f + l + 6], ["L", m - 6, f + l], ["L", a + c, f + l]) : d && 0 > d && m > a + g && m < a + n - g && E.splice(1, 1, ["L", m - 6, f], ["L", m, f - 6], ["L", m + 6, f], ["L", n - c, f]); return E
                }, circle: function (a, t, n, l) { return f(a + n / 2, t + l / 2, n / 2, l / 2, { start: .5 * Math.PI, end: 2.5 * Math.PI, open: !1 }) }, diamond: function (a, f, n, l) {
                    return [["M",
                        a + n / 2, f], ["L", a + n, f + l / 2], ["L", a + n / 2, f + l], ["L", a, f + l / 2], ["Z"]]
                }, rect: w, roundedRect: D, square: w, triangle: function (a, f, n, l) { return [["M", a + n / 2, f], ["L", a + n, f + l], ["L", a, f + l], ["Z"]] }, "triangle-down": function (a, f, n, l) { return [["M", a, f], ["L", a + n, f], ["L", a + n / 2, f + l], ["Z"]] }
            }
    }); G(f, "Core/Renderer/SVG/TextBuilder.js", [f["Core/Renderer/HTML/AST.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function (a, f, w) {
        var I = f.doc, u = f.SVG_NS, B = f.win, C = w.attr, y = w.extend, t = w.isString, n = w.objectEach, l = w.pick; return function () {
            function d(c) {
                var g =
                    c.styles; this.renderer = c.renderer; this.svgElement = c; this.width = c.textWidth; this.textLineHeight = g && g.lineHeight; this.textOutline = g && g.textOutline; this.ellipsis = !(!g || "ellipsis" !== g.textOverflow); this.noWrap = !(!g || "nowrap" !== g.whiteSpace); this.fontSize = g && g.fontSize
            } d.prototype.buildSVG = function () {
                var c = this.svgElement, g = c.element, d = c.renderer, n = l(c.textStr, "").toString(), z = -1 !== n.indexOf("<"), A = g.childNodes; d = this.width && !c.added && d.box; var r = /<br.*?>/g, q = [n, this.ellipsis, this.noWrap, this.textLineHeight,
                    this.textOutline, this.fontSize, this.width].join(); if (q !== c.textCache) {
                        c.textCache = q; delete c.actualWidth; for (q = A.length; q--;)g.removeChild(A[q]); z || this.ellipsis || this.width || -1 !== n.indexOf(" ") && (!this.noWrap || r.test(n)) ? "" !== n && (d && d.appendChild(g), n = new a(n), this.modifyTree(n.nodes), n.addToDOM(c.element), this.modifyDOM(), this.ellipsis && -1 !== (g.textContent || "").indexOf("\u2026") && c.attr("title", this.unescapeEntities(c.textStr || "", ["&lt;", "&gt;"])), d && d.removeChild(g)) : g.appendChild(I.createTextNode(this.unescapeEntities(n)));
                        t(this.textOutline) && c.applyTextOutline && c.applyTextOutline(this.textOutline)
                    }
            }; d.prototype.modifyDOM = function () {
                var c = this, g = this.svgElement, d = C(g.element, "x"); g.firstLineMetrics = void 0; for (var a; a = g.element.firstChild;)if (/^[\s\u200B]*$/.test(a.textContent || " ")) g.element.removeChild(a); else break;[].forEach.call(g.element.querySelectorAll("tspan.highcharts-br"), function (a, k) {
                    a.nextSibling && a.previousSibling && (0 === k && 1 === a.previousSibling.nodeType && (g.firstLineMetrics = g.renderer.fontMetrics(void 0,
                        a.previousSibling)), C(a, { dy: c.getLineHeight(a.nextSibling), x: d }))
                }); var l = this.width || 0; if (l) {
                    var n = function (a, k) {
                        var h = a.textContent || "", v = h.replace(/([^\^])-/g, "$1- ").split(" "), b = !c.noWrap && (1 < v.length || 1 < g.element.childNodes.length), q = c.getLineHeight(k), e = 0, r = g.actualWidth; if (c.ellipsis) h && c.truncate(a, h, void 0, 0, Math.max(0, l - parseInt(c.fontSize || 12, 10)), function (b, e) { return b.substring(0, e) + "\u2026" }); else if (b) {
                            h = []; for (b = []; k.firstChild && k.firstChild !== a;)b.push(k.firstChild), k.removeChild(k.firstChild);
                            for (; v.length;)v.length && !c.noWrap && 0 < e && (h.push(a.textContent || ""), a.textContent = v.join(" ").replace(/- /g, "-")), c.truncate(a, void 0, v, 0 === e ? r || 0 : 0, l, function (b, e) { return v.slice(0, e).join(" ").replace(/- /g, "-") }), r = g.actualWidth, e++; b.forEach(function (b) { k.insertBefore(b, a) }); h.forEach(function (b) { k.insertBefore(I.createTextNode(b), a); b = I.createElementNS(u, "tspan"); b.textContent = "\u200b"; C(b, { dy: q, x: d }); k.insertBefore(b, a) })
                        }
                    }, r = function (c) {
                        [].slice.call(c.childNodes).forEach(function (k) {
                            k.nodeType ===
                            B.Node.TEXT_NODE ? n(k, c) : (-1 !== k.className.baseVal.indexOf("highcharts-br") && (g.actualWidth = 0), r(k))
                        })
                    }; r(g.element)
                }
            }; d.prototype.getLineHeight = function (c) { var g; c = c.nodeType === B.Node.TEXT_NODE ? c.parentElement : c; this.renderer.styledMode || (g = c && /(px|em)$/.test(c.style.fontSize) ? c.style.fontSize : this.fontSize || this.renderer.style.fontSize || 12); return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(g, c || this.svgElement.element).h }; d.prototype.modifyTree = function (c) {
                var g =
                    this, d = function (a, m) {
                        var l = a.attributes; l = void 0 === l ? {} : l; var r = a.children, q = a.style; q = void 0 === q ? {} : q; var k = a.tagName, h = g.renderer.styledMode; if ("b" === k || "strong" === k) h ? l["class"] = "highcharts-strong" : q.fontWeight = "bold"; else if ("i" === k || "em" === k) h ? l["class"] = "highcharts-emphasized" : q.fontStyle = "italic"; q && q.color && (q.fill = q.color); "br" === k ? (l["class"] = "highcharts-br", a.textContent = "\u200b", (m = c[m + 1]) && m.textContent && (m.textContent = m.textContent.replace(/^ +/gm, ""))) : "a" === k && r && r.some(function (h) {
                            return "#text" ===
                                h.tagName
                        }) && (a.children = [{ children: r, tagName: "tspan" }]); "#text" !== k && "a" !== k && (a.tagName = "tspan"); y(a, { attributes: l, style: q }); r && r.filter(function (h) { return "#text" !== h.tagName }).forEach(d)
                    }; c.forEach(d)
            }; d.prototype.truncate = function (c, g, d, a, l, n) {
                var r = this.svgElement, q = r.renderer, k = r.rotation, h = [], v = d ? 1 : 0, b = (g || d || "").length, m = b, e, H = function (b, e) {
                    e = e || b; var p = c.parentNode; if (p && "undefined" === typeof h[e]) if (p.getSubStringLength) try { h[e] = a + p.getSubStringLength(0, d ? e + 1 : e) } catch (P) { "" } else q.getSpanWidth &&
                        (c.textContent = n(g || d, b), h[e] = a + q.getSpanWidth(r, c)); return h[e]
                }; r.rotation = 0; var p = H(c.textContent.length); if (a + p > l) { for (; v <= b;)m = Math.ceil((v + b) / 2), d && (e = n(d, m)), p = H(m, e && e.length - 1), v === b ? v = b + 1 : p > l ? b = m - 1 : v = m; 0 === b ? c.textContent = "" : g && b === g.length - 1 || (c.textContent = e || n(g || d, m)) } d && d.splice(0, m); r.actualWidth = p; r.rotation = k
            }; d.prototype.unescapeEntities = function (c, g) { n(this.renderer.escapes, function (d, a) { g && -1 !== g.indexOf(d) || (c = c.toString().replace(new RegExp(d, "g"), a)) }); return c }; return d
        }()
    });
    G(f, "Core/Renderer/SVG/SVGRenderer.js", [f["Core/Renderer/HTML/AST.js"], f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Renderer/RendererRegistry.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Renderer/SVG/SVGLabel.js"], f["Core/Renderer/SVG/Symbols.js"], f["Core/Renderer/SVG/TextBuilder.js"], f["Core/Utilities.js"]], function (a, f, w, D, u, B, C, y, t) {
        var n = w.charts, l = w.deg2rad, d = w.doc, c = w.isFirefox, g = w.isMS, m = w.isWebKit, E = w.noop, z = w.SVG_NS, A = w.symbolSizes, r = w.win, q = t.addEvent, k = t.attr, h = t.createElement,
        v = t.css, b = t.defined, F = t.destroyObjectProperties, e = t.extend, H = t.isArray, p = t.isNumber, x = t.isObject, J = t.isString, M = t.merge, P = t.pick, L = t.pInt, I = t.uniqueKey, W; w = function () {
            function z(b, e, h, c, p, k, g) { this.width = this.url = this.style = this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0; this.init(b, e, h, c, p, k, g) } z.prototype.init = function (b, e, h, p, g, x, a) {
                var m = this.createElement("svg").attr({
                    version: "1.1",
                    "class": "highcharts-root"
                }), F = m.element; a || m.css(this.getStyle(p)); b.appendChild(F); k(b, "dir", "ltr"); -1 === b.innerHTML.indexOf("xmlns") && k(F, "xmlns", this.SVG_NS); this.isSVG = !0; this.box = F; this.boxWrapper = m; this.alignedObjects = []; this.url = this.getReferenceURL(); this.createElement("desc").add().element.appendChild(d.createTextNode("Created with Highcharts 10.1.0")); this.defs = this.createElement("defs").add(); this.allowHTML = x; this.forExport = g; this.styledMode = a; this.gradients = {}; this.cache = {}; this.cacheKeys =
                    []; this.imgCount = 0; this.setSize(e, h, !1); var l; c && b.getBoundingClientRect && (e = function () { v(b, { left: 0, top: 0 }); l = b.getBoundingClientRect(); v(b, { left: Math.ceil(l.left) - l.left + "px", top: Math.ceil(l.top) - l.top + "px" }) }, e(), this.unSubPixelFix = q(r, "resize", e))
            }; z.prototype.definition = function (b) { return (new a([b])).addToDOM(this.defs.element) }; z.prototype.getReferenceURL = function () {
                if ((c || m) && d.getElementsByTagName("base").length) {
                    if (!b(W)) {
                        var e = I(); e = (new a([{
                            tagName: "svg", attributes: { width: 8, height: 8 }, children: [{
                                tagName: "defs",
                                children: [{ tagName: "clipPath", attributes: { id: e }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }]
                            }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": "url(#" + e + ")", fill: "rgba(0,0,0,0.001)" } }]
                        }])).addToDOM(d.body); v(e, { position: "fixed", top: 0, left: 0, zIndex: 9E5 }); var h = d.elementFromPoint(6, 6); W = "hitme" === (h && h.id); d.body.removeChild(e)
                    } if (W) return r.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20")
                } return ""
            }; z.prototype.getStyle =
                function (b) { return this.style = e({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, b) }; z.prototype.setStyle = function (b) { this.boxWrapper.css(this.getStyle(b)) }; z.prototype.isHidden = function () { return !this.boxWrapper.getBBox().width }; z.prototype.destroy = function () {
                    var b = this.defs; this.box = null; this.boxWrapper = this.boxWrapper.destroy(); F(this.gradients || {}); this.gradients = null; b && (this.defs = b.destroy()); this.unSubPixelFix && this.unSubPixelFix(); return this.alignedObjects =
                        null
                }; z.prototype.createElement = function (b) { var e = new this.Element; e.init(this, b); return e }; z.prototype.getRadialAttr = function (b, e) { return { cx: b[0] - b[2] / 2 + (e.cx || 0) * b[2], cy: b[1] - b[2] / 2 + (e.cy || 0) * b[2], r: (e.r || 0) * b[2] } }; z.prototype.buildText = function (b) { (new y(b)).buildSVG() }; z.prototype.getContrast = function (b) { b = f.parse(b).rgba; b[0] *= 1; b[1] *= 1.2; b[2] *= .5; return 459 < b[0] + b[1] + b[2] ? "#000000" : "#FFFFFF" }; z.prototype.button = function (b, h, c, p, k, d, v, r, m, l) {
                    var F = this.label(b, h, c, m, void 0, void 0, l, void 0, "button"),
                    H = this.styledMode; b = k && k.states || {}; k && delete k.states; var n = 0, z = k ? M(k) : {}, A = M({ color: "#333333", cursor: "pointer", fontWeight: "normal" }, z.style); delete z.style; z = a.filterUserAttributes(z); F.attr(M({ padding: 8, r: 2 }, z)); if (!H) {
                        z = M({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1 }, z); d = M(z, { fill: "#e6e6e6" }, a.filterUserAttributes(d || b.hover || {})); var f = d.style; delete d.style; v = M(z, { fill: "#e6ebf5", style: { color: "#000000", fontWeight: "bold" } }, a.filterUserAttributes(v || b.select || {})); var E = v.style; delete v.style;
                        r = M(z, { style: { color: "#cccccc" } }, a.filterUserAttributes(r || b.disabled || {})); var Y = r.style; delete r.style
                    } q(F.element, g ? "mouseover" : "mouseenter", function () { 3 !== n && F.setState(1) }); q(F.element, g ? "mouseout" : "mouseleave", function () { 3 !== n && F.setState(n) }); F.setState = function (b) { 1 !== b && (F.state = n = b); F.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][b || 0]); H || (F.attr([z, d, v, r][b || 0]), b = [A, f, E, Y][b || 0], x(b) && F.css(b)) }; H ||
                        F.attr(z).css(e({ cursor: "default" }, A)); return F.on("touchstart", function (b) { return b.stopPropagation() }).on("click", function (b) { 3 !== n && p.call(F, b) })
                }; z.prototype.crispLine = function (e, h, c) { void 0 === c && (c = "round"); var p = e[0], k = e[1]; b(p[1]) && p[1] === k[1] && (p[1] = k[1] = Math[c](p[1]) - h % 2 / 2); b(p[2]) && p[2] === k[2] && (p[2] = k[2] = Math[c](p[2]) + h % 2 / 2); return e }; z.prototype.path = function (b) { var h = this.styledMode ? {} : { fill: "none" }; H(b) ? h.d = b : x(b) && e(h, b); return this.createElement("path").attr(h) }; z.prototype.circle =
                    function (b, e, h) { b = x(b) ? b : "undefined" === typeof b ? {} : { x: b, y: e, r: h }; e = this.createElement("circle"); e.xSetter = e.ySetter = function (b, e, h) { h.setAttribute("c" + e, b) }; return e.attr(b) }; z.prototype.arc = function (b, e, h, c, p, k) { x(b) ? (c = b, e = c.y, h = c.r, b = c.x) : c = { innerR: c, start: p, end: k }; b = this.symbol("arc", b, e, h, h, c); b.r = h; return b }; z.prototype.rect = function (b, e, h, c, p, d) {
                        p = x(b) ? b.r : p; var g = this.createElement("rect"); b = x(b) ? b : "undefined" === typeof b ? {} : { x: b, y: e, width: Math.max(h, 0), height: Math.max(c, 0) }; this.styledMode ||
                            ("undefined" !== typeof d && (b["stroke-width"] = d, b = g.crisp(b)), b.fill = "none"); p && (b.r = p); g.rSetter = function (b, e, h) { g.r = b; k(h, { rx: b, ry: b }) }; g.rGetter = function () { return g.r || 0 }; return g.attr(b)
                    }; z.prototype.setSize = function (b, e, h) { this.width = b; this.height = e; this.boxWrapper.animate({ width: b, height: e }, { step: function () { this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") }) }, duration: P(h, !0) ? void 0 : 0 }); this.alignElements() }; z.prototype.g = function (b) {
                        var e = this.createElement("g"); return b ? e.attr({
                            "class": "highcharts-" +
                                b
                        }) : e
                    }; z.prototype.image = function (b, e, h, c, k, g) {
                        var d = { preserveAspectRatio: "none" }, x = function (b, e) { b.setAttributeNS ? b.setAttributeNS("http://www.w3.org/1999/xlink", "href", e) : b.setAttribute("hc-svg-href", e) }; p(e) && (d.x = e); p(h) && (d.y = h); p(c) && (d.width = c); p(k) && (d.height = k); var a = this.createElement("image").attr(d); e = function (e) { x(a.element, b); g.call(a, e) }; g ? (x(a.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), h = new r.Image, q(h, "load", e), h.src = b, h.complete && e({})) :
                            x(a.element, b); return a
                    }; z.prototype.symbol = function (c, p, k, g, x, a) {
                        var q = this, r = /^url\((.*?)\)$/, m = r.test(c), F = !m && (this.symbols[c] ? c : "circle"), l = F && this.symbols[F], H; if (l) { "number" === typeof p && (H = l.call(this.symbols, Math.round(p || 0), Math.round(k || 0), g || 0, x || 0, a)); var z = this.path(H); q.styledMode || z.attr("fill", "none"); e(z, { symbolName: F || void 0, x: p, y: k, width: g, height: x }); a && e(z, a) } else if (m) {
                            var f = c.match(r)[1]; var E = z = this.image(f); E.imgwidth = P(A[f] && A[f].width, a && a.width); E.imgheight = P(A[f] && A[f].height,
                                a && a.height); var Y = function (b) { return b.attr({ width: b.width, height: b.height }) };["width", "height"].forEach(function (e) { E[e + "Setter"] = function (e, h) { var c = this["img" + h]; this[h] = e; b(c) && (a && "within" === a.backgroundSize && this.width && this.height && (c = Math.round(c * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(h, c), this.alignByTranslate || (e = ((this[h] || 0) - c) / 2, this.attr("width" === h ? { translateX: e } : { translateY: e }))) } }); b(p) && E.attr({ x: p, y: k }); E.isImg = !0;
                            b(E.imgwidth) && b(E.imgheight) ? Y(E) : (E.attr({ width: 0, height: 0 }), h("img", { onload: function () { var b = n[q.chartIndex]; 0 === this.width && (v(this, { position: "absolute", top: "-999em" }), d.body.appendChild(this)); A[f] = { width: this.width, height: this.height }; E.imgwidth = this.width; E.imgheight = this.height; E.element && Y(E); this.parentNode && this.parentNode.removeChild(this); q.imgCount--; if (!q.imgCount && b && !b.hasLoaded) b.onload() }, src: f }), this.imgCount++)
                        } return z
                    }; z.prototype.clipRect = function (b, e, h, c) {
                        var p = I() + "-", k =
                            this.createElement("clipPath").attr({ id: p }).add(this.defs); b = this.rect(b, e, h, c, 0).add(k); b.id = p; b.clipPath = k; b.count = 0; return b
                    }; z.prototype.text = function (e, h, c, p) {
                        var k = {}; if (p && (this.allowHTML || !this.forExport)) return this.html(e, h, c); k.x = Math.round(h || 0); c && (k.y = Math.round(c)); b(e) && (k.text = e); e = this.createElement("text").attr(k); if (!p || this.forExport && !this.allowHTML) e.xSetter = function (b, e, h) {
                            for (var c = h.getElementsByTagName("tspan"), p = h.getAttribute(e), k = 0, g; k < c.length; k++)g = c[k], g.getAttribute(e) ===
                                p && g.setAttribute(e, b); h.setAttribute(e, b)
                        }; return e
                    }; z.prototype.fontMetrics = function (b, e) { b = !this.styledMode && /px/.test(b) || !r.getComputedStyle ? b || e && e.style && e.style.fontSize || this.style && this.style.fontSize : e && u.prototype.getStyle.call(e, "font-size"); b = /px/.test(b) ? L(b) : 12; e = 24 > b ? b + 3 : Math.round(1.2 * b); return { h: e, b: Math.round(.8 * e), f: b } }; z.prototype.rotCorr = function (b, e, h) { var c = b; e && h && (c = Math.max(c * Math.cos(e * l), 4)); return { x: -b / 3 * Math.sin(e * l), y: c } }; z.prototype.pathToSegments = function (b) {
                        for (var e =
                            [], h = [], c = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 }, k = 0; k < b.length; k++)J(h[0]) && p(b[k]) && h.length === c[h[0].toUpperCase()] && b.splice(k, 0, h[0].replace("M", "L").replace("m", "l")), "string" === typeof b[k] && (h.length && e.push(h.slice(0)), h.length = 0), h.push(b[k]); e.push(h.slice(0)); return e
                    }; z.prototype.label = function (b, e, h, c, p, k, g, d, x) { return new B(this, b, e, h, c, p, k, g, d, x) }; z.prototype.alignElements = function () { this.alignedObjects.forEach(function (b) { return b.align() }) }; return z
        }(); e(w.prototype, {
            Element: u, SVG_NS: z,
            escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, symbols: C, draw: E
        }); D.registerRendererType("svg", w, !0); ""; return w
    }); G(f, "Core/Renderer/HTML/HTMLElement.js", [f["Core/Globals.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Utilities.js"]], function (a, f, w) {
        var I = this && this.__extends || function () {
            var c = function (g, d) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, g) { c.__proto__ = g } || function (c, g) { for (var d in g) g.hasOwnProperty(d) && (c[d] = g[d]) }; return c(g, d) }; return function (g,
                d) { function a() { this.constructor = g } c(g, d); g.prototype = null === d ? Object.create(d) : (a.prototype = d.prototype, new a) }
        }(), u = a.isFirefox, B = a.isMS, C = a.isWebKit, y = a.win, t = w.css, n = w.defined, l = w.extend, d = w.pick, c = w.pInt; return function (g) {
            function a() { return null !== g && g.apply(this, arguments) || this } I(a, g); a.compose = function (c) {
                if (-1 === a.composedClasses.indexOf(c)) {
                    a.composedClasses.push(c); var g = a.prototype, d = c.prototype; d.getSpanCorrection = g.getSpanCorrection; d.htmlCss = g.htmlCss; d.htmlGetBBox = g.htmlGetBBox;
                    d.htmlUpdateTransform = g.htmlUpdateTransform; d.setSpanRotation = g.setSpanRotation
                } return c
            }; a.prototype.getSpanCorrection = function (c, g, d) { this.xCorr = -c * d; this.yCorr = -g }; a.prototype.htmlCss = function (c) { var g = "SPAN" === this.element.tagName && c && "width" in c, a = d(g && c.width, void 0); if (g) { delete c.width; this.textWidth = a; var r = !0 } c && "ellipsis" === c.textOverflow && (c.whiteSpace = "nowrap", c.overflow = "hidden"); this.styles = l(this.styles, c); t(this.element, c); r && this.htmlUpdateTransform(); return this }; a.prototype.htmlGetBBox =
                function () { var c = this.element; return { x: c.offsetLeft, y: c.offsetTop, width: c.offsetWidth, height: c.offsetHeight } }; a.prototype.htmlUpdateTransform = function () {
                    if (this.added) {
                        var g = this.renderer, d = this.element, a = this.translateX || 0, r = this.translateY || 0, q = this.x || 0, k = this.y || 0, h = this.textAlign || "left", v = { left: 0, center: .5, right: 1 }[h], b = this.styles; b = b && b.whiteSpace; t(d, { marginLeft: a, marginTop: r }); !g.styledMode && this.shadows && this.shadows.forEach(function (b) { t(b, { marginLeft: a + 1, marginTop: r + 1 }) }); this.inverted &&
                            [].forEach.call(d.childNodes, function (b) { g.invertChild(b, d) }); if ("SPAN" === d.tagName) {
                                var F = this.rotation, e = this.textWidth && c(this.textWidth), m = [F, h, d.innerHTML, this.textWidth, this.textAlign].join(), p = void 0; p = !1; if (e !== this.oldTextWidth) {
                                    if (this.textPxLength) var x = this.textPxLength; else t(d, { width: "", whiteSpace: b || "nowrap" }), x = d.offsetWidth; (e > this.oldTextWidth || x > e) && (/[ \-]/.test(d.textContent || d.innerText) || "ellipsis" === d.style.textOverflow) && (t(d, {
                                        width: x > e || F ? e + "px" : "auto", display: "block", whiteSpace: b ||
                                            "normal"
                                    }), this.oldTextWidth = e, p = !0)
                                } this.hasBoxWidthChanged = p; m !== this.cTT && (p = g.fontMetrics(d.style.fontSize, d).b, !n(F) || F === (this.oldRotation || 0) && h === this.oldAlign || this.setSpanRotation(F, v, p), this.getSpanCorrection(!n(F) && this.textPxLength || d.offsetWidth, p, v, F, h)); t(d, { left: q + (this.xCorr || 0) + "px", top: k + (this.yCorr || 0) + "px" }); this.cTT = m; this.oldRotation = F; this.oldAlign = h
                            }
                    } else this.alignOnAdd = !0
                }; a.prototype.setSpanRotation = function (c, d, g) {
                    var a = {}, q = B && !/Edge/.test(y.navigator.userAgent) ? "-ms-transform" :
                        C ? "-webkit-transform" : u ? "MozTransform" : y.opera ? "-o-transform" : void 0; q && (a[q] = a.transform = "rotate(" + c + "deg)", a[q + (u ? "Origin" : "-origin")] = a.transformOrigin = 100 * d + "% " + g + "px", t(this.element, a))
                }; a.composedClasses = []; return a
        }(f)
    }); G(f, "Core/Renderer/HTML/HTMLRenderer.js", [f["Core/Renderer/HTML/AST.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Renderer/SVG/SVGRenderer.js"], f["Core/Utilities.js"]], function (a, f, w, D) {
        var u = this && this.__extends || function () {
            var a = function (l, d) {
                a = Object.setPrototypeOf ||
                { __proto__: [] } instanceof Array && function (c, d) { c.__proto__ = d } || function (c, d) { for (var g in d) d.hasOwnProperty(g) && (c[g] = d[g]) }; return a(l, d)
            }; return function (l, d) { function c() { this.constructor = l } a(l, d); l.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype, new c) }
        }(), I = D.attr, C = D.createElement, y = D.extend, t = D.pick; return function (n) {
            function l() { return null !== n && n.apply(this, arguments) || this } u(l, n); l.compose = function (d) {
                -1 === l.composedClasses.indexOf(d) && (l.composedClasses.push(d), d.prototype.html =
                    l.prototype.html); return d
            }; l.prototype.html = function (d, c, g) {
                var m = this.createElement("span"), l = m.element, n = m.renderer, A = n.isSVG, r = function (c, d) { ["opacity", "visibility"].forEach(function (h) { c[h + "Setter"] = function (k, b, g) { var e = c.div ? c.div.style : d; f.prototype[h + "Setter"].call(this, k, b, g); e && (e[b] = k) } }); c.addedSetters = !0 }; m.textSetter = function (c) { c !== this.textStr && (delete this.bBox, delete this.oldTextWidth, a.setElementHTML(this.element, t(c, "")), this.textStr = c, m.doTransform = !0) }; A && r(m, m.element.style);
                m.xSetter = m.ySetter = m.alignSetter = m.rotationSetter = function (c, d) { "align" === d ? m.alignValue = m.textAlign = c : m[d] = c; m.doTransform = !0 }; m.afterSetters = function () { this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1) }; m.attr({ text: d, x: Math.round(c), y: Math.round(g) }).css({ position: "absolute" }); n.styledMode || m.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize }); l.style.whiteSpace = "nowrap"; m.css = m.htmlCss; A && (m.add = function (c) {
                    var d = n.box.parentNode, h = []; if (this.parentGroup = c) {
                        var g =
                            c.div; if (!g) {
                                for (; c;)h.push(c), c = c.parentGroup; h.reverse().forEach(function (b) {
                                    function c(e, h) { b[h] = e; "translateX" === h ? p.left = e + "px" : p.top = e + "px"; b.doTransform = !0 } var e = I(b.element, "class"), k = b.styles || {}; g = b.div = b.div || C("div", e ? { className: e } : void 0, { position: "absolute", left: (b.translateX || 0) + "px", top: (b.translateY || 0) + "px", display: b.display, opacity: b.opacity, cursor: k.cursor, pointerEvents: k.pointerEvents, visibility: b.visibility }, g || d); var p = g.style; y(b, {
                                        classSetter: function (b) {
                                            return function (e) {
                                                this.element.setAttribute("class",
                                                    e); b.className = e
                                            }
                                        }(g), on: function () { h[0].div && m.on.apply({ element: h[0].div, onEvents: b.onEvents }, arguments); return b }, translateXSetter: c, translateYSetter: c
                                    }); b.addedSetters || r(b)
                                })
                            }
                    } else g = d; g.appendChild(l); m.added = !0; m.alignOnAdd && m.htmlUpdateTransform(); return m
                }); return m
            }; l.composedClasses = []; return l
        }(w)
    }); G(f, "Core/Axis/AxisDefaults.js", [], function () {
        var a; (function (a) {
            a.defaultXAxisOptions = {
                alignTicks: !0, allowDecimals: void 0, panningEnabled: !0, zIndex: 2, zoomEnabled: !0, dateTimeLabelFormats: {
                    millisecond: {
                        main: "%H:%M:%S.%L",
                        range: !1
                    }, second: { main: "%H:%M:%S", range: !1 }, minute: { main: "%H:%M", range: !1 }, hour: { main: "%H:%M", range: !1 }, day: { main: "%e. %b" }, week: { main: "%e. %b" }, month: { main: "%b '%y" }, year: { main: "%Y" }
                }, endOnTick: !1, gridLineDashStyle: "Solid", gridZIndex: 1, labels: { autoRotation: void 0, autoRotationLimit: 80, distance: void 0, enabled: !0, indentation: 10, overflow: "justify", padding: 5, reserveSpace: void 0, rotation: void 0, staggerLines: 0, step: 0, useHTML: !1, x: 0, zIndex: 7, style: { color: "#666666", cursor: "default", fontSize: "11px" } }, maxPadding: .01,
                minorGridLineDashStyle: "Solid", minorTickLength: 2, minorTickPosition: "outside", minPadding: .01, offset: void 0, opposite: !1, reversed: void 0, reversedStacks: !1, showEmpty: !0, showFirstLabel: !0, showLastLabel: !0, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: { align: "middle", rotation: 0, useHTML: !1, x: 0, y: 0, style: { color: "#666666" } }, type: "linear", uniqueNames: !0, visible: !0, minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999",
                lineColor: "#ccd6eb", lineWidth: 1, gridLineColor: "#e6e6e6", gridLineWidth: void 0, tickColor: "#ccd6eb"
            }; a.defaultYAxisOptions = {
                reversedStacks: !0, endOnTick: !0, maxPadding: .05, minPadding: .05, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8 }, startOnTick: !0, title: { rotation: 270, text: "Values" }, stackLabels: {
                    animation: {}, allowOverlap: !1, enabled: !1, crop: !0, overflow: "justify", formatter: function () { var a = this.axis.chart.numberFormatter; return a(this.total, -1) }, style: {
                        color: "#000000", fontSize: "11px", fontWeight: "bold",
                        textOutline: "1px contrast"
                    }
                }, gridLineWidth: 1, lineWidth: 0
            }; a.defaultLeftAxisOptions = { labels: { x: -15 }, title: { rotation: 270 } }; a.defaultRightAxisOptions = { labels: { x: 15 }, title: { rotation: 90 } }; a.defaultBottomAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } }; a.defaultTopAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } }
        })(a || (a = {})); return a
    }); G(f, "Core/Foundation.js", [f["Core/Utilities.js"]], function (a) {
        var f = a.addEvent, w = a.isFunction, D = a.objectEach, u = a.removeEvent,
        B; (function (a) { a.registerEventOptions = function (a, t) { a.eventOptions = a.eventOptions || {}; D(t.events, function (n, l) { a.eventOptions[l] !== n && (a.eventOptions[l] && (u(a, l, a.eventOptions[l]), delete a.eventOptions[l]), w(n) && (a.eventOptions[l] = n, f(a, l, n))) }) } })(B || (B = {})); return B
    }); G(f, "Core/Axis/Tick.js", [f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function (a, f, w) {
        var I = f.deg2rad, u = w.clamp, B = w.correctFloat, C = w.defined, y = w.destroyObjectProperties, t = w.extend, n = w.fireEvent, l = w.isNumber,
        d = w.merge, c = w.objectEach, g = w.pick; f = function () {
            function m(c, d, g, a, q) { this.isNewLabel = this.isNew = !0; this.axis = c; this.pos = d; this.type = g || ""; this.parameters = q || {}; this.tickmarkOffset = this.parameters.tickmarkOffset; this.options = this.parameters.options; n(this, "init"); g || a || this.addLabel() } m.prototype.addLabel = function () {
                var c = this, d = c.axis, m = d.options, r = d.chart, q = d.categories, k = d.logarithmic, h = d.names, v = c.pos, b = g(c.options && c.options.labels, m.labels), F = d.tickPositions, e = v === F[0], H = v === F[F.length - 1], p =
                    (!b.step || 1 === b.step) && 1 === d.tickInterval; F = F.info; var x = c.label, f; q = this.parameters.category || (q ? g(q[v], h[v], v) : v); k && l(q) && (q = B(k.lin2log(q))); if (d.dateTime) if (F) { var M = r.time.resolveDTLFormat(m.dateTimeLabelFormats[!m.grid && F.higherRanks[v] || F.unitName]); var P = M.main } else l(q) && (P = d.dateTime.getXDateFormat(q, m.dateTimeLabelFormats || {})); c.isFirst = e; c.isLast = H; var L = { axis: d, chart: r, dateTimeLabelFormat: P, isFirst: e, isLast: H, pos: v, tick: c, tickPositionInfo: F, value: q }; n(this, "labelFormat", L); var u = function (e) {
                        return b.formatter ?
                            b.formatter.call(e, e) : b.format ? (e.text = d.defaultLabelFormatter.call(e), a.format(b.format, e, r)) : d.defaultLabelFormatter.call(e, e)
                    }; m = u.call(L, L); var y = M && M.list; c.shortenLabel = y ? function () { for (f = 0; f < y.length; f++)if (t(L, { dateTimeLabelFormat: y[f] }), x.attr({ text: u.call(L, L) }), x.getBBox().width < d.getSlotWidth(c) - 2 * b.padding) return; x.attr({ text: "" }) } : void 0; p && d._addedPlotLB && c.moveLabel(m, b); C(x) || c.movedLabel ? x && x.textStr !== m && !p && (!x.textWidth || b.style.width || x.styles.width || x.css({ width: null }), x.attr({ text: m }),
                        x.textPxLength = x.getBBox().width) : (c.label = x = c.createLabel({ x: 0, y: 0 }, m, b), c.rotation = 0)
            }; m.prototype.createLabel = function (c, g, a) { var r = this.axis, q = r.chart; if (c = C(g) && a.enabled ? q.renderer.text(g, c.x, c.y, a.useHTML).add(r.labelGroup) : null) q.styledMode || c.css(d(a.style)), c.textPxLength = c.getBBox().width; return c }; m.prototype.destroy = function () { y(this, this.axis) }; m.prototype.getPosition = function (c, d, g, a) {
                var q = this.axis, k = q.chart, h = a && k.oldChartHeight || k.chartHeight; c = {
                    x: c ? B(q.translate(d + g, null, null,
                        a) + q.transB) : q.left + q.offset + (q.opposite ? (a && k.oldChartWidth || k.chartWidth) - q.right - q.left : 0), y: c ? h - q.bottom + q.offset - (q.opposite ? q.height : 0) : B(h - q.translate(d + g, null, null, a) - q.transB)
                }; c.y = u(c.y, -1E5, 1E5); n(this, "afterGetPosition", { pos: c }); return c
            }; m.prototype.getLabelPosition = function (c, d, g, a, q, k, h, v) {
                var b = this.axis, r = b.transA, e = b.isLinked && b.linkedParent ? b.linkedParent.reversed : b.reversed, m = b.staggerLines, p = b.tickRotCorr || { x: 0, y: 0 }, x = a || b.reserveSpaceDefault ? 0 : -b.labelOffset * ("center" === b.labelAlign ?
                    .5 : 1), l = {}, f = q.y; C(f) || (f = 0 === b.side ? g.rotation ? -8 : -g.getBBox().height : 2 === b.side ? p.y + 8 : Math.cos(g.rotation * I) * (p.y - g.getBBox(!1, 0).height / 2)); c = c + q.x + x + p.x - (k && a ? k * r * (e ? -1 : 1) : 0); d = d + f - (k && !a ? k * r * (e ? 1 : -1) : 0); m && (g = h / (v || 1) % m, b.opposite && (g = m - g - 1), d += b.labelOffset / m * g); l.x = c; l.y = Math.round(d); n(this, "afterGetLabelPosition", { pos: l, tickmarkOffset: k, index: h }); return l
            }; m.prototype.getLabelSize = function () { return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0 }; m.prototype.getMarkPath =
                function (c, d, g, a, q, k) { return k.crispLine([["M", c, d], ["L", c + (q ? 0 : -g), d + (q ? g : 0)]], a) }; m.prototype.handleOverflow = function (c) {
                    var d = this.axis, a = d.options.labels, r = c.x, q = d.chart.chartWidth, k = d.chart.spacing, h = g(d.labelLeft, Math.min(d.pos, k[3])); k = g(d.labelRight, Math.max(d.isRadial ? 0 : d.pos + d.len, q - k[1])); var v = this.label, b = this.rotation, m = { left: 0, center: .5, right: 1 }[d.labelAlign || v.attr("align")], e = v.getBBox().width, l = d.getSlotWidth(this), p = {}, x = l, n = 1, f; if (b || "justify" !== a.overflow) 0 > b && r - m * e < h ? f = Math.round(r /
                        Math.cos(b * I) - h) : 0 < b && r + m * e > k && (f = Math.round((q - r) / Math.cos(b * I))); else if (q = r + (1 - m) * e, r - m * e < h ? x = c.x + x * (1 - m) - h : q > k && (x = k - c.x + x * m, n = -1), x = Math.min(l, x), x < l && "center" === d.labelAlign && (c.x += n * (l - x - m * (l - Math.min(e, x)))), e > x || d.autoRotation && (v.styles || {}).width) f = x; f && (this.shortenLabel ? this.shortenLabel() : (p.width = Math.floor(f) + "px", (a.style || {}).textOverflow || (p.textOverflow = "ellipsis"), v.css(p)))
                }; m.prototype.moveLabel = function (d, g) {
                    var a = this, m = a.label, q = a.axis, k = q.reversed, h = !1; m && m.textStr === d ?
                        (a.movedLabel = m, h = !0, delete a.label) : c(q.ticks, function (b) { h || b.isNew || b === a || !b.label || b.label.textStr !== d || (a.movedLabel = b.label, h = !0, b.labelPos = a.movedLabel.xy, delete b.label) }); if (!h && (a.labelPos || m)) { var v = a.labelPos || m.xy; m = q.horiz ? k ? 0 : q.width + q.left : v.x; q = q.horiz ? v.y : k ? q.width + q.left : 0; a.movedLabel = a.createLabel({ x: m, y: q }, d, g); a.movedLabel && a.movedLabel.attr({ opacity: 0 }) }
                }; m.prototype.render = function (c, d, a) {
                    var m = this.axis, q = m.horiz, k = this.pos, h = g(this.tickmarkOffset, m.tickmarkOffset); k = this.getPosition(q,
                        k, h, d); h = k.x; var v = k.y; m = q && h === m.pos + m.len || !q && v === m.pos ? -1 : 1; q = g(a, this.label && this.label.newOpacity, 1); a = g(a, 1); this.isActive = !0; this.renderGridLine(d, a, m); this.renderMark(k, a, m); this.renderLabel(k, d, q, c); this.isNew = !1; n(this, "afterRender")
                }; m.prototype.renderGridLine = function (c, d, a) {
                    var m = this.axis, q = m.options, k = {}, h = this.pos, v = this.type, b = g(this.tickmarkOffset, m.tickmarkOffset), l = m.chart.renderer, e = this.gridLine, n = q.gridLineWidth, p = q.gridLineColor, x = q.gridLineDashStyle; "minor" === this.type &&
                        (n = q.minorGridLineWidth, p = q.minorGridLineColor, x = q.minorGridLineDashStyle); e || (m.chart.styledMode || (k.stroke = p, k["stroke-width"] = n || 0, k.dashstyle = x), v || (k.zIndex = 1), c && (d = 0), this.gridLine = e = l.path().attr(k).addClass("highcharts-" + (v ? v + "-" : "") + "grid-line").add(m.gridGroup)); if (e && (a = m.getPlotLinePath({ value: h + b, lineWidth: e.strokeWidth() * a, force: "pass", old: c }))) e[c || this.isNew ? "attr" : "animate"]({ d: a, opacity: d })
                }; m.prototype.renderMark = function (c, d, a) {
                    var m = this.axis, q = m.options, k = m.chart.renderer, h =
                        this.type, v = m.tickSize(h ? h + "Tick" : "tick"), b = c.x; c = c.y; var l = g(q["minor" !== h ? "tickWidth" : "minorTickWidth"], !h && m.isXAxis ? 1 : 0); q = q["minor" !== h ? "tickColor" : "minorTickColor"]; var e = this.mark, n = !e; v && (m.opposite && (v[0] = -v[0]), e || (this.mark = e = k.path().addClass("highcharts-" + (h ? h + "-" : "") + "tick").add(m.axisGroup), m.chart.styledMode || e.attr({ stroke: q, "stroke-width": l })), e[n ? "attr" : "animate"]({ d: this.getMarkPath(b, c, v[0], e.strokeWidth() * a, m.horiz, k), opacity: d }))
                }; m.prototype.renderLabel = function (c, d, a, m) {
                    var q =
                        this.axis, k = q.horiz, h = q.options, v = this.label, b = h.labels, r = b.step; q = g(this.tickmarkOffset, q.tickmarkOffset); var e = c.x; c = c.y; var n = !0; v && l(e) && (v.xy = c = this.getLabelPosition(e, c, v, k, b, q, m, r), this.isFirst && !this.isLast && !h.showFirstLabel || this.isLast && !this.isFirst && !h.showLastLabel ? n = !1 : !k || b.step || b.rotation || d || 0 === a || this.handleOverflow(c), r && m % r && (n = !1), n && l(c.y) ? (c.opacity = a, v[this.isNewLabel ? "attr" : "animate"](c).show(!0), this.isNewLabel = !1) : (v.hide(), this.isNewLabel = !0))
                }; m.prototype.replaceMovedLabel =
                    function () { var c = this.label, d = this.axis, g = d.reversed; if (c && !this.isNew) { var a = d.horiz ? g ? d.left : d.width + d.left : c.xy.x; g = d.horiz ? c.xy.y : g ? d.width + d.top : d.top; c.animate({ x: a, y: g, opacity: 0 }, void 0, c.destroy); delete this.label } d.isDirty = !0; this.label = this.movedLabel; delete this.movedLabel }; return m
        }(); ""; return f
    }); G(f, "Core/Axis/Axis.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Axis/AxisDefaults.js"], f["Core/Color/Color.js"], f["Core/DefaultOptions.js"], f["Core/Foundation.js"], f["Core/Globals.js"],
    f["Core/Axis/Tick.js"], f["Core/Utilities.js"]], function (a, f, w, D, u, B, C, y) {
        var t = a.animObject, n = D.defaultOptions, l = u.registerEventOptions, d = B.deg2rad, c = y.arrayMax, g = y.arrayMin, m = y.clamp, E = y.correctFloat, z = y.defined, A = y.destroyObjectProperties, r = y.erase, q = y.error, k = y.extend, h = y.fireEvent, v = y.isArray, b = y.isNumber, F = y.isString, e = y.merge, H = y.normalizeTickInterval, p = y.objectEach, x = y.pick, J = y.relativeLength, M = y.removeEvent, P = y.splat, L = y.syncTimeout, I = function (b, e) {
            return H(e, void 0, void 0, x(b.options.allowDecimals,
                .5 > e || void 0 !== b.tickAmount), !!b.tickAmount)
        }; a = function () {
            function a(b, e) {
                this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset =
                    this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.eventOptions = this.coll = this.closestPointRange = this.chart = this.bottom = this.alternateBands = void 0; this.init(b, e)
            } a.prototype.init = function (e, c) {
                var d = c.isX; this.chart = e; this.horiz = e.inverted && !this.isZAxis ? !d : d; this.isXAxis = d; this.coll = this.coll || (d ? "xAxis" : "yAxis"); h(this,
                    "init", { userOptions: c }); this.opposite = x(c.opposite, this.opposite); this.side = x(c.side, this.side, this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3); this.setOptions(c); var p = this.options, a = p.labels, g = p.type; this.userOptions = c; this.minPixelPadding = 0; this.reversed = x(p.reversed, this.reversed); this.visible = p.visible; this.zoomEnabled = p.zoomEnabled; this.hasNames = "category" === g || !0 === p.categories; this.categories = p.categories || (this.hasNames ? [] : void 0); this.names || (this.names = [], this.names.keys = {}); this.plotLinesAndBandsGroups =
                        {}; this.positiveValuesOnly = !!this.logarithmic; this.isLinked = z(p.linkedTo); this.ticks = {}; this.labelEdge = []; this.minorTicks = {}; this.plotLinesAndBands = []; this.alternateBands = {}; this.len = 0; this.minRange = this.userMinRange = p.minRange || p.maxZoom; this.range = p.range; this.offset = p.offset || 0; this.min = this.max = null; c = x(p.crosshair, P(e.options.tooltip.crosshairs)[d ? 0 : 1]); this.crosshair = !0 === c ? {} : c; -1 === e.axes.indexOf(this) && (d ? e.axes.splice(e.xAxis.length, 0, this) : e.axes.push(this), e[this.coll].push(this)); this.series =
                            this.series || []; e.inverted && !this.isZAxis && d && "undefined" === typeof this.reversed && (this.reversed = !0); this.labelRotation = b(a.rotation) ? a.rotation : void 0; l(this, p); h(this, "afterInit")
            }; a.prototype.setOptions = function (b) { this.options = e(f.defaultXAxisOptions, "yAxis" === this.coll && f.defaultYAxisOptions, [f.defaultTopAxisOptions, f.defaultRightAxisOptions, f.defaultBottomAxisOptions, f.defaultLeftAxisOptions][this.side], e(n[this.coll], b)); h(this, "afterSetOptions", { userOptions: b }) }; a.prototype.defaultLabelFormatter =
                function (e) {
                    var c = this.axis; e = this.chart.numberFormatter; var h = b(this.value) ? this.value : NaN, d = c.chart.time, p = this.dateTimeLabelFormat, a = n.lang, g = a.numericSymbols; a = a.numericSymbolMagnitude || 1E3; var k = c.logarithmic ? Math.abs(h) : c.tickInterval, x = g && g.length; if (c.categories) var v = "" + this.value; else if (p) v = d.dateFormat(p, h); else if (x && 1E3 <= k) for (; x-- && "undefined" === typeof v;)c = Math.pow(a, x + 1), k >= c && 0 === 10 * h % c && null !== g[x] && 0 !== h && (v = e(h / c, -1) + g[x]); "undefined" === typeof v && (v = 1E4 <= Math.abs(h) ? e(h, -1) : e(h,
                        -1, void 0, "")); return v
                }; a.prototype.getSeriesExtremes = function () {
                    var e = this, c = e.chart, d; h(this, "getSeriesExtremes", null, function () {
                        e.hasVisibleSeries = !1; e.dataMin = e.dataMax = e.threshold = null; e.softThreshold = !e.isXAxis; e.stacking && e.stacking.buildStacks(); e.series.forEach(function (h) {
                            if (h.visible || !c.options.chart.ignoreHiddenSeries) {
                                var p = h.options, a = p.threshold; e.hasVisibleSeries = !0; e.positiveValuesOnly && 0 >= a && (a = null); if (e.isXAxis) {
                                    if (p = h.xData, p.length) {
                                        p = e.logarithmic ? p.filter(e.validatePositiveValue) :
                                            p; d = h.getXExtremes(p); var g = d.min; var k = d.max; b(g) || g instanceof Date || (p = p.filter(b), d = h.getXExtremes(p), g = d.min, k = d.max); p.length && (e.dataMin = Math.min(x(e.dataMin, g), g), e.dataMax = Math.max(x(e.dataMax, k), k))
                                    }
                                } else if (h = h.applyExtremes(), b(h.dataMin) && (g = h.dataMin, e.dataMin = Math.min(x(e.dataMin, g), g)), b(h.dataMax) && (k = h.dataMax, e.dataMax = Math.max(x(e.dataMax, k), k)), z(a) && (e.threshold = a), !p.softThreshold || e.positiveValuesOnly) e.softThreshold = !1
                            }
                        })
                    }); h(this, "afterGetSeriesExtremes")
                }; a.prototype.translate =
                    function (e, c, h, d, p, a) { var g = this.linkedParent || this, k = d && g.old ? g.old.min : g.min, x = g.minPixelPadding; p = (g.isOrdinal || g.brokenAxis && g.brokenAxis.hasBreaks || g.logarithmic && p) && g.lin2val; var v = 1, m = 0; d = d && g.old ? g.old.transA : g.transA; d || (d = g.transA); h && (v *= -1, m = g.len); g.reversed && (v *= -1, m -= v * (g.sector || g.len)); c ? (a = (e * v + m - x) / d + k, p && (a = g.lin2val(a))) : (p && (e = g.val2lin(e)), e = v * (e - k) * d, a = b(k) ? (g.isRadial ? e : E(e)) + m + v * x + (b(a) ? d * a : 0) : void 0); return a }; a.prototype.toPixels = function (b, e) {
                        return this.translate(b,
                            !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
                    }; a.prototype.toValue = function (b, e) { return this.translate(b - (e ? 0 : this.pos), !0, !this.horiz, null, !0) }; a.prototype.getPlotLinePath = function (e) {
                        function c(b, e, c) { if ("pass" !== H && b < e || b > c) H ? b = m(b, e, c) : M = !0; return b } var d = this, p = d.chart, g = d.left, a = d.top, k = e.old, v = e.value, q = e.lineWidth, l = k && p.oldChartHeight || p.chartHeight, r = k && p.oldChartWidth || p.chartWidth, n = d.transB, F = e.translatedValue, H = e.force, f, z, J, A, M; e = {
                            value: v, lineWidth: q, old: k, force: H, acrossPanes: e.acrossPanes,
                            translatedValue: F
                        }; h(this, "getPlotLinePath", e, function (e) { F = x(F, d.translate(v, null, null, k)); F = m(F, -1E5, 1E5); f = J = Math.round(F + n); z = A = Math.round(l - F - n); b(F) ? d.horiz ? (z = a, A = l - d.bottom, f = J = c(f, g, g + d.width)) : (f = g, J = r - d.right, z = A = c(z, a, a + d.height)) : (M = !0, H = !1); e.path = M && !H ? null : p.renderer.crispLine([["M", f, z], ["L", J, A]], q || 1) }); return e.path
                    }; a.prototype.getLinearTickPositions = function (b, e, c) {
                        var h = E(Math.floor(e / b) * b); c = E(Math.ceil(c / b) * b); var d = [], p; E(h + b) === h && (p = 20); if (this.single) return [e]; for (e = h; e <=
                            c;) { d.push(e); e = E(e + b, p); if (e === g) break; var g = e } return d
                    }; a.prototype.getMinorTickInterval = function () { var b = this.options; return !0 === b.minorTicks ? x(b.minorTickInterval, "auto") : !1 === b.minorTicks ? null : b.minorTickInterval }; a.prototype.getMinorTickPositions = function () {
                        var b = this.options, e = this.tickPositions, c = this.minorTickInterval, h = this.pointRangePadding || 0, d = this.min - h; h = this.max + h; var p = h - d, g = []; if (p && p / c < this.len / 3) {
                            var a = this.logarithmic; if (a) this.paddedTicks.forEach(function (b, e, h) {
                                e && g.push.apply(g,
                                    a.getLogTickPositions(c, h[e - 1], h[e], !0))
                            }); else if (this.dateTime && "auto" === this.getMinorTickInterval()) g = g.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(c), d, h, b.startOfWeek)); else for (b = d + (e[0] - d) % c; b <= h && b !== g[0]; b += c)g.push(b)
                        } 0 !== g.length && this.trimTicks(g); return g
                    }; a.prototype.adjustForMinRange = function () {
                        var b = this.options, e = this.logarithmic, h = this.min, d = this.max, p = 0, a, k, v, m; this.isXAxis && "undefined" === typeof this.minRange && !e && (z(b.min) || z(b.max) || z(b.floor) || z(b.ceiling) ?
                            this.minRange = null : (this.series.forEach(function (b) { v = b.xData; m = b.xIncrement ? 1 : v.length - 1; if (1 < v.length) for (a = m; 0 < a; a--)if (k = v[a] - v[a - 1], !p || k < p) p = k }), this.minRange = Math.min(5 * p, this.dataMax - this.dataMin))); if (d - h < this.minRange) {
                                var q = this.dataMax - this.dataMin >= this.minRange; var l = this.minRange; var r = (l - d + h) / 2; r = [h - r, x(b.min, h - r)]; q && (r[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin); h = c(r); d = [h + l, x(b.max, h + l)]; q && (d[2] = e ? e.log2lin(this.dataMax) : this.dataMax); d = g(d); d - h < l &&
                                    (r[0] = d - l, r[1] = x(b.min, d - l), h = c(r))
                            } this.min = h; this.max = d
                    }; a.prototype.getClosest = function () { var b; this.categories ? b = 1 : this.series.forEach(function (e) { var c = e.closestPointRange, h = e.visible || !e.chart.options.chart.ignoreHiddenSeries; !e.noSharedTooltip && z(c) && h && (b = z(b) ? Math.min(b, c) : c) }); return b }; a.prototype.nameToX = function (b) {
                        var e = v(this.options.categories), c = e ? this.categories : this.names, h = b.options.x; b.series.requireSorting = !1; z(h) || (h = this.options.uniqueNames && c ? e ? c.indexOf(b.name) : x(c.keys[b.name],
                            -1) : b.series.autoIncrement()); if (-1 === h) { if (!e && c) var d = c.length } else d = h; "undefined" !== typeof d && (this.names[d] = b.name, this.names.keys[b.name] = d); return d
                    }; a.prototype.updateNames = function () {
                        var b = this, e = this.names; 0 < e.length && (Object.keys(e.keys).forEach(function (b) { delete e.keys[b] }), e.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (e) {
                            e.xIncrement = null; if (!e.points || e.isDirtyData) b.max = Math.max(b.max, e.xData.length - 1), e.processData(), e.generatePoints(); e.data.forEach(function (c,
                                h) { if (c && c.options && "undefined" !== typeof c.name) { var d = b.nameToX(c); "undefined" !== typeof d && d !== c.x && (c.x = d, e.xData[h] = d) } })
                        }))
                    }; a.prototype.setAxisTranslation = function () {
                        var b = this, e = b.max - b.min, c = b.linkedParent, d = !!b.categories, p = b.isXAxis, g = b.axisPointRange || 0, a = 0, k = 0, v = b.transA; if (p || d || g) {
                            var m = b.getClosest(); c ? (a = c.minPointOffset, k = c.pointRangePadding) : b.series.forEach(function (e) {
                                var c = d ? 1 : p ? x(e.options.pointRange, m, 0) : b.axisPointRange || 0, h = e.options.pointPlacement; g = Math.max(g, c); if (!b.single ||
                                    d) e = e.is("xrange") ? !p : p, a = Math.max(a, e && F(h) ? 0 : c / 2), k = Math.max(k, e && "on" === h ? 0 : c)
                            }); c = b.ordinal && b.ordinal.slope && m ? b.ordinal.slope / m : 1; b.minPointOffset = a *= c; b.pointRangePadding = k *= c; b.pointRange = Math.min(g, b.single && d ? 1 : e); p && (b.closestPointRange = m)
                        } b.translationSlope = b.transA = v = b.staticScale || b.len / (e + k || 1); b.transB = b.horiz ? b.left : b.bottom; b.minPixelPadding = v * a; h(this, "afterSetAxisTranslation")
                    }; a.prototype.minFromRange = function () { return this.max - this.range }; a.prototype.setTickInterval = function (e) {
                        var c =
                            this.chart, d = this.logarithmic, p = this.options, g = this.isXAxis, a = this.isLinked, k = p.tickPixelInterval, v = this.categories, m = this.softThreshold, l = p.maxPadding, r = p.minPadding, F = b(p.tickInterval) && 0 <= p.tickInterval ? p.tickInterval : void 0, n = b(this.threshold) ? this.threshold : null; this.dateTime || v || a || this.getTickAmount(); var H = x(this.userMin, p.min); var f = x(this.userMax, p.max); if (a) {
                                this.linkedParent = c[this.coll][p.linkedTo]; var J = this.linkedParent.getExtremes(); this.min = x(J.min, J.dataMin); this.max = x(J.max, J.dataMax);
                                p.type !== this.linkedParent.options.type && q(11, 1, c)
                            } else { if (m && z(n)) if (this.dataMin >= n) J = n, r = 0; else if (this.dataMax <= n) { var A = n; l = 0 } this.min = x(H, J, this.dataMin); this.max = x(f, A, this.dataMax) } d && (this.positiveValuesOnly && !e && 0 >= Math.min(this.min, x(this.dataMin, this.min)) && q(10, 1, c), this.min = E(d.log2lin(this.min), 16), this.max = E(d.log2lin(this.max), 16)); this.range && z(this.max) && (this.userMin = this.min = H = Math.max(this.dataMin, this.minFromRange()), this.userMax = f = this.max, this.range = null); h(this, "foundExtremes");
                        this.beforePadding && this.beforePadding(); this.adjustForMinRange(); !(v || this.axisPointRange || this.stacking && this.stacking.usePercentage || a) && z(this.min) && z(this.max) && (c = this.max - this.min) && (!z(H) && r && (this.min -= c * r), !z(f) && l && (this.max += c * l)); b(this.userMin) || (b(p.softMin) && p.softMin < this.min && (this.min = H = p.softMin), b(p.floor) && (this.min = Math.max(this.min, p.floor))); b(this.userMax) || (b(p.softMax) && p.softMax > this.max && (this.max = f = p.softMax), b(p.ceiling) && (this.max = Math.min(this.max, p.ceiling))); m &&
                            z(this.dataMin) && (n = n || 0, !z(H) && this.min < n && this.dataMin >= n ? this.min = this.options.minRange ? Math.min(n, this.max - this.minRange) : n : !z(f) && this.max > n && this.dataMax <= n && (this.max = this.options.minRange ? Math.max(n, this.min + this.minRange) : n)); b(this.min) && b(this.max) && !this.chart.polar && this.min > this.max && (z(this.options.min) ? this.max = this.min : z(this.options.max) && (this.min = this.max)); this.tickInterval = this.min === this.max || "undefined" === typeof this.min || "undefined" === typeof this.max ? 1 : a && this.linkedParent &&
                                !F && k === this.linkedParent.options.tickPixelInterval ? F = this.linkedParent.tickInterval : x(F, this.tickAmount ? (this.max - this.min) / Math.max(this.tickAmount - 1, 1) : void 0, v ? 1 : (this.max - this.min) * k / Math.max(this.len, k)); if (g && !e) { var M = this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max); this.series.forEach(function (b) { b.forceCrop = b.forceCropping && b.forceCropping(); b.processData(M) }); h(this, "postProcessData", { hasExtemesChanged: M }) } this.setAxisTranslation(); h(this, "initialAxisTranslation");
                        this.pointRange && !F && (this.tickInterval = Math.max(this.pointRange, this.tickInterval)); e = x(p.minTickInterval, this.dateTime && !this.series.some(function (b) { return b.noSharedTooltip }) ? this.closestPointRange : 0); !F && this.tickInterval < e && (this.tickInterval = e); this.dateTime || this.logarithmic || F || (this.tickInterval = I(this, this.tickInterval)); this.tickAmount || (this.tickInterval = this.unsquish()); this.setTickPositions()
                    }; a.prototype.setTickPositions = function () {
                        var b = this.options, e = b.tickPositions, c = this.getMinorTickInterval(),
                        d = this.hasVerticalPanning(), p = "colorAxis" === this.coll, g = (p || !d) && b.startOnTick; d = (p || !d) && b.endOnTick; p = b.tickPositioner; this.tickmarkOffset = this.categories && "between" === b.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0; this.minorTickInterval = "auto" === c && this.tickInterval ? this.tickInterval / 5 : c; this.single = this.min === this.max && z(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== b.allowDecimals); this.tickPositions = c = e && e.slice(); if (!c) {
                            if (this.ordinal && this.ordinal.positions || !((this.max -
                                this.min) / this.tickInterval > Math.max(2 * this.len, 200))) if (this.dateTime) c = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, b.units), this.min, this.max, b.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, !0); else if (this.logarithmic) c = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max); else for (var a = b = this.tickInterval; a <= 2 * b;)if (c = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && c.length > this.tickAmount) this.tickInterval =
                                    I(this, a *= 1.1); else break; else c = [this.min, this.max], q(19, !1, this.chart); c.length > this.len && (c = [c[0], c.pop()], c[0] === c[1] && (c.length = 1)); this.tickPositions = c; p && (p = p.apply(this, [this.min, this.max])) && (this.tickPositions = c = p)
                        } this.paddedTicks = c.slice(0); this.trimTicks(c, g, d); this.isLinked || (this.single && 2 > c.length && !this.categories && !this.series.some(function (b) { return b.is("heatmap") && "between" === b.options.pointPlacement }) && (this.min -= .5, this.max += .5), e || p || this.adjustTickAmount()); h(this, "afterSetTickPositions")
                    };
            a.prototype.trimTicks = function (b, e, c) { var d = b[0], p = b[b.length - 1], g = !this.isOrdinal && this.minPointOffset || 0; h(this, "trimTicks"); if (!this.isLinked) { if (e && -Infinity !== d) this.min = d; else for (; this.min - g > b[0];)b.shift(); if (c) this.max = p; else for (; this.max + g < b[b.length - 1];)b.pop(); 0 === b.length && z(d) && !this.options.tickPositions && b.push((p + d) / 2) } }; a.prototype.alignToOthers = function () {
                var e = this, c = [this], h = e.options, d = "yAxis" === this.coll && this.chart.options.chart.alignThresholds, p = [], g; e.thresholdAlignment =
                    void 0; if ((!1 !== this.chart.options.chart.alignTicks && h.alignTicks || d) && !1 !== h.startOnTick && !1 !== h.endOnTick && !e.logarithmic) { var a = function (b) { var e = b.options; return [b.horiz ? e.left : e.top, e.width, e.height, e.pane].join() }, k = a(this); this.chart[this.coll].forEach(function (b) { var h = b.series; h.length && h.some(function (b) { return b.visible }) && b !== e && a(b) === k && (g = !0, c.push(b)) }) } if (g && d) {
                        c.forEach(function (c) { c = c.getThresholdAlignment(e); b(c) && p.push(c) }); var x = 1 < p.length ? p.reduce(function (b, e) { return b + e },
                            0) / p.length : void 0; c.forEach(function (b) { b.thresholdAlignment = x })
                    } return g
            }; a.prototype.getThresholdAlignment = function (e) { (!b(this.dataMin) || this !== e && this.series.some(function (b) { return b.isDirty || b.isDirtyData })) && this.getSeriesExtremes(); if (b(this.threshold)) return e = m((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1), this.options.reversed && (e = 1 - e), e }; a.prototype.getTickAmount = function () {
                var b = this.options, e = b.tickPixelInterval, c = b.tickAmount; !z(b.tickInterval) && !c &&
                    this.len < e && !this.isRadial && !this.logarithmic && b.startOnTick && b.endOnTick && (c = 2); !c && this.alignToOthers() && (c = Math.ceil(this.len / e) + 1); 4 > c && (this.finalTickAmt = c, c = 5); this.tickAmount = c
            }; a.prototype.adjustTickAmount = function () {
                var e = this, c = e.finalTickAmt, h = e.max, d = e.min, p = e.options, g = e.tickPositions, a = e.tickAmount, k = e.thresholdAlignment, v = g && g.length, m = x(e.threshold, e.softThreshold ? 0 : null); var q = e.tickInterval; if (b(k)) { var l = .5 > k ? Math.ceil(k * (a - 1)) : Math.floor(k * (a - 1)); p.reversed && (l = a - 1 - l) } if (e.hasData() &&
                    b(d) && b(h)) {
                        k = function () { e.transA *= (v - 1) / (a - 1); e.min = p.startOnTick ? g[0] : Math.min(d, g[0]); e.max = p.endOnTick ? g[g.length - 1] : Math.max(h, g[g.length - 1]) }; if (b(l) && b(e.threshold)) { for (; g[l] !== m || g.length !== a || g[0] > d || g[g.length - 1] < h;) { g.length = 0; for (g.push(e.threshold); g.length < a;)void 0 === g[l] || g[l] > e.threshold ? g.unshift(E(g[0] - q)) : g.push(E(g[g.length - 1] + q)); if (q > 8 * e.tickInterval) break; q *= 2 } k() } else if (v < a) { for (; g.length < a;)g.length % 2 || d === m ? g.push(E(g[g.length - 1] + q)) : g.unshift(E(g[0] - q)); k() } if (z(c)) {
                            for (q =
                                m = g.length; q--;)(3 === c && 1 === q % 2 || 2 >= c && 0 < q && q < m - 1) && g.splice(q, 1); e.finalTickAmt = void 0
                        }
                }
            }; a.prototype.setScale = function () {
                var b = !1, e = !1; this.series.forEach(function (c) { b = b || c.isDirtyData || c.isDirty; e = e || c.xAxis && c.xAxis.isDirty || !1 }); this.setAxisSize(); var c = this.len !== (this.old && this.old.len); c || b || e || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (this.stacking && this.stacking.resetStacks(), this.forceRedraw =
                    !1, this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = c || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : this.stacking && this.stacking.cleanStacks(); b && this.panningState && (this.panningState.isDirty = !0); h(this, "afterSetScale")
            }; a.prototype.setExtremes = function (b, e, c, d, p) { var g = this, a = g.chart; c = x(c, !0); g.series.forEach(function (b) { delete b.kdTree }); p = k(p, { min: b, max: e }); h(g, "setExtremes", p, function () { g.userMin = b; g.userMax = e; g.eventArgs = p; c && a.redraw(d) }) };
            a.prototype.zoom = function (b, e) { var c = this, d = this.dataMin, p = this.dataMax, g = this.options, a = Math.min(d, x(g.min, d)), k = Math.max(p, x(g.max, p)); b = { newMin: b, newMax: e }; h(this, "zoom", b, function (b) { var e = b.newMin, h = b.newMax; if (e !== c.min || h !== c.max) c.allowZoomOutside || (z(d) && (e < a && (e = a), e > k && (e = k)), z(p) && (h < a && (h = a), h > k && (h = k))), c.displayBtn = "undefined" !== typeof e || "undefined" !== typeof h, c.setExtremes(e, h, !1, void 0, { trigger: "zoom" }); b.zoomed = !0 }); return b.zoomed }; a.prototype.setAxisSize = function () {
                var b = this.chart,
                e = this.options, c = e.offsets || [0, 0, 0, 0], h = this.horiz, d = this.width = Math.round(J(x(e.width, b.plotWidth - c[3] + c[1]), b.plotWidth)), p = this.height = Math.round(J(x(e.height, b.plotHeight - c[0] + c[2]), b.plotHeight)), g = this.top = Math.round(J(x(e.top, b.plotTop + c[0]), b.plotHeight, b.plotTop)); e = this.left = Math.round(J(x(e.left, b.plotLeft + c[3]), b.plotWidth, b.plotLeft)); this.bottom = b.chartHeight - p - g; this.right = b.chartWidth - d - e; this.len = Math.max(h ? d : p, 0); this.pos = h ? e : g
            }; a.prototype.getExtremes = function () {
                var b = this.logarithmic;
                return { min: b ? E(b.lin2log(this.min)) : this.min, max: b ? E(b.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax }
            }; a.prototype.getThreshold = function (b) { var e = this.logarithmic, c = e ? e.lin2log(this.min) : this.min; e = e ? e.lin2log(this.max) : this.max; null === b || -Infinity === b ? b = c : Infinity === b ? b = e : c > b ? b = c : e < b && (b = e); return this.translate(b, 0, 1, 0, 1) }; a.prototype.autoLabelAlign = function (b) {
                var e = (x(b, 0) - 90 * this.side + 720) % 360; b = { align: "center" }; h(this, "autoLabelAlign",
                    b, function (b) { 15 < e && 165 > e ? b.align = "right" : 195 < e && 345 > e && (b.align = "left") }); return b.align
            }; a.prototype.tickSize = function (b) { var e = this.options, c = x(e["tick" === b ? "tickWidth" : "minorTickWidth"], "tick" === b && this.isXAxis && !this.categories ? 1 : 0), d = e["tick" === b ? "tickLength" : "minorTickLength"]; if (c && d) { "inside" === e[b + "Position"] && (d = -d); var p = [d, c] } b = { tickSize: p }; h(this, "afterTickSize", b); return b.tickSize }; a.prototype.labelMetrics = function () {
                var b = this.tickPositions && this.tickPositions[0] || 0; return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize,
                    this.ticks[b] && this.ticks[b].label)
            }; a.prototype.unsquish = function () {
                var e = this.options.labels, c = this.horiz, h = this.tickInterval, p = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / h), g = e.rotation, a = this.labelMetrics(), k = Math.max(this.max - this.min, 0), v = function (b) { var e = b / (p || 1); e = 1 < e ? Math.ceil(e) : 1; e * h > k && Infinity !== b && Infinity !== p && k && (e = Math.ceil(k / h)); return E(e * h) }, m = h, q, l, r = Number.MAX_VALUE; if (c) {
                    if (!e.staggerLines && !e.step) if (b(g)) var n = [g]; else p < e.autoRotationLimit && (n = e.autoRotation); n &&
                        n.forEach(function (b) { if (b === g || b && -90 <= b && 90 >= b) { l = v(Math.abs(a.h / Math.sin(d * b))); var e = l + Math.abs(b / 360); e < r && (r = e, q = b, m = l) } })
                } else e.step || (m = v(a.h)); this.autoRotation = n; this.labelRotation = x(q, b(g) ? g : 0); return m
            }; a.prototype.getSlotWidth = function (e) {
                var c = this.chart, h = this.horiz, d = this.options.labels, p = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), g = c.margin[3]; if (e && b(e.slotWidth)) return e.slotWidth; if (h && 2 > d.step) return d.rotation ? 0 : (this.staggerLines || 1) * this.len / p; if (!h) {
                    e = d.style.width;
                    if (void 0 !== e) return parseInt(String(e), 10); if (g) return g - c.spacing[3]
                } return .33 * c.chartWidth
            }; a.prototype.renderUnsquish = function () {
                var b = this.chart, e = b.renderer, c = this.tickPositions, h = this.ticks, d = this.options.labels, p = d.style, g = this.horiz, a = this.getSlotWidth(), k = Math.max(1, Math.round(a - 2 * d.padding)), x = {}, v = this.labelMetrics(), m = p.textOverflow, q = 0; F(d.rotation) || (x.rotation = d.rotation || 0); c.forEach(function (b) { b = h[b]; b.movedLabel && b.replaceMovedLabel(); b && b.label && b.label.textPxLength > q && (q = b.label.textPxLength) });
                this.maxLabelLength = q; if (this.autoRotation) q > k && q > v.h ? x.rotation = this.labelRotation : this.labelRotation = 0; else if (a) { var l = k; if (!m) { var r = "clip"; for (k = c.length; !g && k--;) { var n = c[k]; if (n = h[n].label) n.styles && "ellipsis" === n.styles.textOverflow ? n.css({ textOverflow: "clip" }) : n.textPxLength > a && n.css({ width: a + "px" }), n.getBBox().height > this.len / c.length - (v.h - v.f) && (n.specificTextOverflow = "ellipsis") } } } x.rotation && (l = q > .5 * b.chartHeight ? .33 * b.chartHeight : q, m || (r = "ellipsis")); if (this.labelAlign = d.align || this.autoLabelAlign(this.labelRotation)) x.align =
                    this.labelAlign; c.forEach(function (b) { var e = (b = h[b]) && b.label, c = p.width, d = {}; e && (e.attr(x), b.shortenLabel ? b.shortenLabel() : l && !c && "nowrap" !== p.whiteSpace && (l < e.textPxLength || "SPAN" === e.element.tagName) ? (d.width = l + "px", m || (d.textOverflow = e.specificTextOverflow || r), e.css(d)) : e.styles && e.styles.width && !d.width && !c && e.css({ width: null }), delete e.specificTextOverflow, b.rotation = x.rotation) }, this); this.tickRotCorr = e.rotCorr(v.b, this.labelRotation || 0, 0 !== this.side)
            }; a.prototype.hasData = function () {
                return this.series.some(function (b) { return b.hasData() }) ||
                    this.options.showEmpty && z(this.min) && z(this.max)
            }; a.prototype.addTitle = function (b) {
                var c = this.chart.renderer, h = this.horiz, d = this.opposite, p = this.options.title, g = this.chart.styledMode, a; this.axisTitle || ((a = p.textAlign) || (a = (h ? { low: "left", middle: "center", high: "right" } : { low: d ? "right" : "left", middle: "center", high: d ? "left" : "right" })[p.align]), this.axisTitle = c.text(p.text || "", 0, 0, p.useHTML).attr({ zIndex: 7, rotation: p.rotation, align: a }).addClass("highcharts-axis-title"), g || this.axisTitle.css(e(p.style)), this.axisTitle.add(this.axisGroup),
                    this.axisTitle.isNew = !0); g || p.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }); this.axisTitle[b ? "show" : "hide"](b)
            }; a.prototype.generateTick = function (b) { var e = this.ticks; e[b] ? e[b].addLabel() : e[b] = new C(this, b) }; a.prototype.getOffset = function () {
                var b = this, e = this, c = e.chart, d = e.horiz, g = e.options, a = e.side, k = e.ticks, v = e.tickPositions, m = e.coll, q = e.axisParent, l = c.renderer, n = c.inverted && !e.isZAxis ? [1, 0, 3, 2][a] : a, r = e.hasData(), F = g.title, H = g.labels, f = c.axisOffset; c = c.clipOffset; var J = [-1,
                    1, 1, -1][a], A = g.className, M, E = 0, t = 0, P = 0; e.showAxis = M = r || g.showEmpty; e.staggerLines = e.horiz && H.staggerLines || void 0; if (!e.axisGroup) { var L = function (e, c, h) { return l.g(e).attr({ zIndex: h }).addClass("highcharts-" + m.toLowerCase() + c + " " + (b.isRadial ? "highcharts-radial-axis" + c + " " : "") + (A || "")).add(q) }; e.gridGroup = L("grid", "-grid", g.gridZIndex); e.axisGroup = L("axis", "", g.zIndex); e.labelGroup = L("axis-labels", "-labels", H.zIndex) } r || e.isLinked ? (v.forEach(function (b) { e.generateTick(b) }), e.renderUnsquish(), e.reserveSpaceDefault =
                        0 === a || 2 === a || { 1: "left", 3: "right" }[a] === e.labelAlign, x(H.reserveSpace, "center" === e.labelAlign ? !0 : null, e.reserveSpaceDefault) && v.forEach(function (b) { P = Math.max(k[b].getLabelSize(), P) }), e.staggerLines && (P *= e.staggerLines), e.labelOffset = P * (e.opposite ? -1 : 1)) : p(k, function (b, e) { b.destroy(); delete k[e] }); if (F && F.text && !1 !== F.enabled && (e.addTitle(M), M && !1 !== F.reserveSpace)) { e.titleOffset = E = e.axisTitle.getBBox()[d ? "height" : "width"]; var u = F.offset; t = z(u) ? 0 : x(F.margin, d ? 5 : 10) } e.renderLine(); e.offset = J * x(g.offset,
                            f[a] ? f[a] + (g.margin || 0) : 0); e.tickRotCorr = e.tickRotCorr || { x: 0, y: 0 }; F = 0 === a ? -e.labelMetrics().h : 2 === a ? e.tickRotCorr.y : 0; r = Math.abs(P) + t; P && (r = r - F + J * (d ? x(H.y, e.tickRotCorr.y + 8 * J) : H.x)); e.axisTitleMargin = x(u, r); e.getMaxLabelDimensions && (e.maxLabelDimensions = e.getMaxLabelDimensions(k, v)); "colorAxis" !== m && (d = this.tickSize("tick"), f[a] = Math.max(f[a], (e.axisTitleMargin || 0) + E + J * e.offset, r, v && v.length && d ? d[0] + J * e.offset : 0), g = !e.axisLine || g.offset ? 0 : 2 * Math.floor(e.axisLine.strokeWidth() / 2), c[n] = Math.max(c[n],
                                g)); h(this, "afterGetOffset")
            }; a.prototype.getLinePath = function (b) { var e = this.chart, c = this.opposite, h = this.offset, d = this.horiz, p = this.left + (c ? this.width : 0) + h; h = e.chartHeight - this.bottom - (c ? this.height : 0) + h; c && (b *= -1); return e.renderer.crispLine([["M", d ? this.left : p, d ? h : this.top], ["L", d ? e.chartWidth - this.right : p, d ? h : e.chartHeight - this.bottom]], b) }; a.prototype.renderLine = function () {
                this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode ||
                    this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }))
            }; a.prototype.getTitlePosition = function () {
                var b = this.horiz, e = this.left, c = this.top, d = this.len, p = this.options.title, g = b ? e : c, a = this.opposite, k = this.offset, x = p.x, v = p.y, m = this.axisTitle, q = this.chart.renderer.fontMetrics(p.style.fontSize, m); m = m ? Math.max(m.getBBox(!1, 0).height - q.h - 1, 0) : 0; d = { low: g + (b ? 0 : d), middle: g + d / 2, high: g + (b ? d : 0) }[p.align]; e = (b ? c + this.height : e) + (b ? 1 : -1) * (a ? -1 : 1) * (this.axisTitleMargin || 0) +
                    [-m, m, q.f, -m][this.side]; b = { x: b ? d + x : e + (a ? this.width : 0) + k + x, y: b ? e + v - (a ? this.height : 0) + k : d + v }; h(this, "afterGetTitlePosition", { titlePosition: b }); return b
            }; a.prototype.renderMinorTick = function (b, e) { var c = this.minorTicks; c[b] || (c[b] = new C(this, b, "minor")); e && c[b].isNew && c[b].render(null, !0); c[b].render(null, !1, 1) }; a.prototype.renderTick = function (b, e, c) {
                var h = this.ticks; if (!this.isLinked || b >= this.min && b <= this.max || this.grid && this.grid.isColumn) h[b] || (h[b] = new C(this, b)), c && h[b].isNew && h[b].render(e, !0,
                    -1), h[b].render(e)
            }; a.prototype.render = function () {
                var e = this, c = e.chart, d = e.logarithmic, g = e.options, a = e.isLinked, k = e.tickPositions, x = e.axisTitle, v = e.ticks, m = e.minorTicks, q = e.alternateBands, l = g.stackLabels, n = g.alternateGridColor, r = e.tickmarkOffset, F = e.axisLine, H = e.showAxis, f = t(c.renderer.globalAnimation), J, z; e.labelEdge.length = 0; e.overlap = !1;[v, m, q].forEach(function (b) { p(b, function (b) { b.isActive = !1 }) }); if (e.hasData() || a) {
                    var A = e.chart.hasRendered && e.old && b(e.old.min); e.minorTickInterval && !e.categories &&
                        e.getMinorTickPositions().forEach(function (b) { e.renderMinorTick(b, A) }); k.length && (k.forEach(function (b, c) { e.renderTick(b, c, A) }), r && (0 === e.min || e.single) && (v[-1] || (v[-1] = new C(e, -1, null, !0)), v[-1].render(-1))); n && k.forEach(function (b, h) {
                            z = "undefined" !== typeof k[h + 1] ? k[h + 1] + r : e.max - r; 0 === h % 2 && b < e.max && z <= e.max + (c.polar ? -r : r) && (q[b] || (q[b] = new B.PlotLineOrBand(e)), J = b + r, q[b].options = { from: d ? d.lin2log(J) : J, to: d ? d.lin2log(z) : z, color: n, className: "highcharts-alternate-grid" }, q[b].render(), q[b].isActive =
                                !0)
                        }); e._addedPlotLB || (e._addedPlotLB = !0, (g.plotLines || []).concat(g.plotBands || []).forEach(function (b) { e.addPlotBandOrLine(b) }))
                } [v, m, q].forEach(function (b) { var e = [], h = f.duration; p(b, function (b, c) { b.isActive || (b.render(c, !1, 0), b.isActive = !1, e.push(c)) }); L(function () { for (var c = e.length; c--;)b[e[c]] && !b[e[c]].isActive && (b[e[c]].destroy(), delete b[e[c]]) }, b !== q && c.hasRendered && h ? h : 0) }); F && (F[F.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(F.strokeWidth()) }), F.isPlaced = !0, F[H ? "show" : "hide"](H)); x && H &&
                    (g = e.getTitlePosition(), x[x.isNew ? "attr" : "animate"](g), x.isNew = !1); l && l.enabled && e.stacking && e.stacking.renderStackTotals(); e.old = { len: e.len, max: e.max, min: e.min, transA: e.transA, userMax: e.userMax, userMin: e.userMin }; e.isDirty = !1; h(this, "afterRender")
            }; a.prototype.redraw = function () { this.visible && (this.render(), this.plotLinesAndBands.forEach(function (b) { b.render() })); this.series.forEach(function (b) { b.isDirty = !0 }) }; a.prototype.getKeepProps = function () { return this.keepProps || a.keepProps }; a.prototype.destroy =
                function (b) {
                    var e = this, c = e.plotLinesAndBands, d = this.eventOptions; h(this, "destroy", { keepEvents: b }); b || M(e);[e.ticks, e.minorTicks, e.alternateBands].forEach(function (b) { A(b) }); if (c) for (b = c.length; b--;)c[b].destroy(); "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (b) { e[b] && (e[b] = e[b].destroy()) }); for (var g in e.plotLinesAndBandsGroups) e.plotLinesAndBandsGroups[g] = e.plotLinesAndBandsGroups[g].destroy(); p(e, function (b, c) {
                        -1 === e.getKeepProps().indexOf(c) &&
                        delete e[c]
                    }); this.eventOptions = d
                }; a.prototype.drawCrosshair = function (b, e) {
                    var c = this.crosshair, d = x(c && c.snap, !0), g = this.chart, p, a = this.cross; h(this, "drawCrosshair", { e: b, point: e }); b || (b = this.cross && this.cross.e); if (c && !1 !== (z(e) || !d)) {
                        d ? z(e) && (p = x("colorAxis" !== this.coll ? e.crosshairPos : null, this.isXAxis ? e.plotX : this.len - e.plotY)) : p = b && (this.horiz ? b.chartX - this.pos : this.len - b.chartY + this.pos); if (z(p)) {
                            var v = { value: e && (this.isXAxis ? e.x : x(e.stackY, e.y)), translatedValue: p }; g.polar && k(v, {
                                isCrosshair: !0,
                                chartX: b && b.chartX, chartY: b && b.chartY, point: e
                            }); v = this.getPlotLinePath(v) || null
                        } if (!z(v)) { this.hideCrosshair(); return } d = this.categories && !this.isRadial; a || (this.cross = a = g.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (d ? "category " : "thin ") + (c.className || "")).attr({ zIndex: x(c.zIndex, 2) }).add(), g.styledMode || (a.attr({ stroke: c.color || (d ? w.parse("#ccd6eb").setOpacity(.25).get() : "#cccccc"), "stroke-width": x(c.width, 1) }).css({ "pointer-events": "none" }), c.dashStyle && a.attr({ dashstyle: c.dashStyle })));
                        a.show().attr({ d: v }); d && !c.width && a.attr({ "stroke-width": this.transA }); this.cross.e = b
                    } else this.hideCrosshair(); h(this, "afterDrawCrosshair", { e: b, point: e })
                }; a.prototype.hideCrosshair = function () { this.cross && this.cross.hide(); h(this, "afterHideCrosshair") }; a.prototype.hasVerticalPanning = function () { var b = this.chart.options.chart.panning; return !!(b && b.enabled && /y/.test(b.type)) }; a.prototype.validatePositiveValue = function (e) { return b(e) && 0 < e }; a.prototype.update = function (b, c) {
                    var h = this.chart; b = e(this.userOptions,
                        b); this.destroy(!0); this.init(h, b); h.isDirtyBox = !0; x(c, !0) && h.redraw()
                }; a.prototype.remove = function (b) { for (var e = this.chart, c = this.coll, h = this.series, d = h.length; d--;)h[d] && h[d].remove(!1); r(e.axes, this); r(e[c], this); e[c].forEach(function (b, e) { b.options.index = b.userOptions.index = e }); this.destroy(); e.isDirtyBox = !0; x(b, !0) && e.redraw() }; a.prototype.setTitle = function (b, e) { this.update({ title: b }, e) }; a.prototype.setCategories = function (b, e) { this.update({ categories: b }, e) }; a.defaultOptions = f.defaultXAxisOptions;
            a.keepProps = "extKey hcEvents names series userMax userMin".split(" "); return a
        }(); ""; return a
    }); G(f, "Core/Axis/DateTimeAxis.js", [f["Core/Utilities.js"]], function (a) {
        var f = a.addEvent, w = a.getMagnitude, D = a.normalizeTickInterval, u = a.timeUnits, B; (function (a) {
            function y() { return this.chart.time.getTimeTicks.apply(this.chart.time, arguments) } function t(d) { "datetime" !== d.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new l(this)) } var n = []; a.compose = function (d) {
                -1 === n.indexOf(d) && (n.push(d),
                    d.keepProps.push("dateTime"), d.prototype.getTimeTicks = y, f(d, "init", t)); return d
            }; var l = function () {
                function d(c) { this.axis = c } d.prototype.normalizeTimeTickInterval = function (c, d) {
                    var g = d || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]]; d = g[g.length - 1]; var a = u[d[0]], l = d[1], n; for (n = 0; n < g.length && !(d = g[n], a = u[d[0]], l = d[1], g[n + 1] && c <= (a * l[l.length - 1] + u[g[n +
                        1][0]]) / 2); n++); a === u.year && c < 5 * a && (l = [1, 2, 5]); c = D(c / a, l, "year" === d[0] ? Math.max(w(c / a), 1) : 1); return { unitRange: a, count: c, unitName: d[0] }
                }; d.prototype.getXDateFormat = function (c, d) { var g = this.axis; return g.closestPointRange ? g.chart.time.getDateFormat(g.closestPointRange, c, g.options.startOfWeek, d) || d.year : d.day }; return d
            }(); a.Additions = l
        })(B || (B = {})); return B
    }); G(f, "Core/Axis/LogarithmicAxis.js", [f["Core/Utilities.js"]], function (a) {
        var f = a.addEvent, w = a.normalizeTickInterval, D = a.pick, u; (function (a) {
            function u(a) {
                var d =
                    this.logarithmic; "logarithmic" !== a.userOptions.type ? this.logarithmic = void 0 : d || (this.logarithmic = new n(this))
            } function y() { var a = this.logarithmic; a && (this.lin2val = function (d) { return a.lin2log(d) }, this.val2lin = function (d) { return a.log2lin(d) }) } var t = []; a.compose = function (a) { -1 === t.indexOf(a) && (t.push(a), a.keepProps.push("logarithmic"), f(a, "init", u), f(a, "afterInit", y)); return a }; var n = function () {
                function a(d) { this.axis = d } a.prototype.getLogTickPositions = function (d, c, g, a) {
                    var m = this.axis, l = m.len, n = m.options,
                    r = []; a || (this.minorAutoInterval = void 0); if (.5 <= d) d = Math.round(d), r = m.getLinearTickPositions(d, c, g); else if (.08 <= d) { var q = Math.floor(c), k, h = n = void 0; for (l = .3 < d ? [1, 2, 4] : .15 < d ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; q < g + 1 && !h; q++) { var v = l.length; for (k = 0; k < v && !h; k++) { var b = this.log2lin(this.lin2log(q) * l[k]); b > c && (!a || n <= g) && "undefined" !== typeof n && r.push(n); n > g && (h = !0); n = b } } } else c = this.lin2log(c), g = this.lin2log(g), d = a ? m.getMinorTickInterval() : n.tickInterval, d = D("auto" === d ? null : d, this.minorAutoInterval, n.tickPixelInterval /
                        (a ? 5 : 1) * (g - c) / ((a ? l / m.tickPositions.length : l) || 1)), d = w(d), r = m.getLinearTickPositions(d, c, g).map(this.log2lin), a || (this.minorAutoInterval = d / 5); a || (m.tickInterval = d); return r
                }; a.prototype.lin2log = function (d) { return Math.pow(10, d) }; a.prototype.log2lin = function (d) { return Math.log(d) / Math.LN10 }; return a
            }(); a.Additions = n
        })(u || (u = {})); return u
    }); G(f, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [f["Core/Utilities.js"]], function (a) {
        var f = a.erase, w = a.extend, D = a.isNumber, u; (function (a) {
            var u = [], y; a.compose =
                function (a, l) { y || (y = a); -1 === u.indexOf(l) && (u.push(l), w(l.prototype, t.prototype)); return l }; var t = function () {
                    function a() { } a.prototype.getPlotBandPath = function (a, d, c) {
                        void 0 === c && (c = this.options); var g = this.getPlotLinePath({ value: d, force: !0, acrossPanes: c.acrossPanes }), m = [], l = this.horiz; d = !D(this.min) || !D(this.max) || a < this.min && d < this.min || a > this.max && d > this.max; a = this.getPlotLinePath({ value: a, force: !0, acrossPanes: c.acrossPanes }); c = 1; if (a && g) {
                            if (d) { var n = a.toString() === g.toString(); c = 0 } for (d = 0; d < a.length; d +=
                                2) { var f = a[d], r = a[d + 1], q = g[d], k = g[d + 1]; "M" !== f[0] && "L" !== f[0] || "M" !== r[0] && "L" !== r[0] || "M" !== q[0] && "L" !== q[0] || "M" !== k[0] && "L" !== k[0] || (l && q[1] === f[1] ? (q[1] += c, k[1] += c) : l || q[2] !== f[2] || (q[2] += c, k[2] += c), m.push(["M", f[1], f[2]], ["L", r[1], r[2]], ["L", k[1], k[2]], ["L", q[1], q[2]], ["Z"])); m.isFlat = n }
                        } return m
                    }; a.prototype.addPlotBand = function (a) { return this.addPlotBandOrLine(a, "plotBands") }; a.prototype.addPlotLine = function (a) { return this.addPlotBandOrLine(a, "plotLines") }; a.prototype.addPlotBandOrLine = function (a,
                        d) { var c = this, g = this.userOptions, m = new y(this, a); this.visible && (m = m.render()); if (m) { this._addedPlotLB || (this._addedPlotLB = !0, (g.plotLines || []).concat(g.plotBands || []).forEach(function (d) { c.addPlotBandOrLine(d) })); if (d) { var n = g[d] || []; n.push(a); g[d] = n } this.plotLinesAndBands.push(m) } return m }; a.prototype.removePlotBandOrLine = function (a) {
                            var d = this.plotLinesAndBands, c = this.options, g = this.userOptions; if (d) {
                                for (var m = d.length; m--;)d[m].id === a && d[m].destroy();[c.plotLines || [], g.plotLines || [], c.plotBands ||
                                    [], g.plotBands || []].forEach(function (c) { for (m = c.length; m--;)(c[m] || {}).id === a && f(c, c[m]) })
                            }
                        }; a.prototype.removePlotBand = function (a) { this.removePlotBandOrLine(a) }; a.prototype.removePlotLine = function (a) { this.removePlotBandOrLine(a) }; return a
                }()
        })(u || (u = {})); return u
    }); G(f, "Core/Axis/PlotLineOrBand/PlotLineOrBand.js", [f["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], f["Core/Utilities.js"]], function (a, f) {
        var w = f.arrayMax, I = f.arrayMin, u = f.defined, B = f.destroyObjectProperties, C = f.erase, y = f.fireEvent,
        t = f.merge, n = f.objectEach, l = f.pick; f = function () {
            function d(c, d) { this.axis = c; d && (this.options = d, this.id = d.id) } d.compose = function (c) { return a.compose(d, c) }; d.prototype.render = function () {
                y(this, "render"); var c = this, d = c.axis, a = d.horiz, f = d.logarithmic, z = c.options, A = z.color, r = l(z.zIndex, 0), q = z.events, k = {}, h = d.chart.renderer, v = z.label, b = c.label, F = z.to, e = z.from, H = z.value, p = c.svgElem, x = [], J = u(e) && u(F); x = u(H); var M = !p, P = { "class": "highcharts-plot-" + (J ? "band " : "line ") + (z.className || "") }, L = J ? "bands" : "lines"; f &&
                    (e = f.log2lin(e), F = f.log2lin(F), H = f.log2lin(H)); d.chart.styledMode || (x ? (P.stroke = A || "#999999", P["stroke-width"] = l(z.width, 1), z.dashStyle && (P.dashstyle = z.dashStyle)) : J && (P.fill = A || "#e6ebf5", z.borderWidth && (P.stroke = z.borderColor, P["stroke-width"] = z.borderWidth))); k.zIndex = r; L += "-" + r; (f = d.plotLinesAndBandsGroups[L]) || (d.plotLinesAndBandsGroups[L] = f = h.g("plot-" + L).attr(k).add()); M && (c.svgElem = p = h.path().attr(P).add(f)); if (x) x = d.getPlotLinePath({ value: H, lineWidth: p.strokeWidth(), acrossPanes: z.acrossPanes });
                else if (J) x = d.getPlotBandPath(e, F, z); else return; !c.eventsAdded && q && (n(q, function (b, e) { p.on(e, function (b) { q[e].apply(c, [b]) }) }), c.eventsAdded = !0); (M || !p.d) && x && x.length ? p.attr({ d: x }) : p && (x ? (p.show(), p.animate({ d: x })) : p.d && (p.hide(), b && (c.label = b = b.destroy()))); v && (u(v.text) || u(v.formatter)) && x && x.length && 0 < d.width && 0 < d.height && !x.isFlat ? (v = t({ align: a && J && "center", x: a ? !J && 4 : 10, verticalAlign: !a && J && "middle", y: a ? J ? 16 : 10 : J ? 6 : -4, rotation: a && !J && 90 }, v), this.renderLabel(v, x, J, r)) : b && b.hide(); return c
            }; d.prototype.renderLabel =
                function (c, d, a, n) {
                    var g = this.axis, m = g.chart.renderer, r = this.label; r || (this.label = r = m.text(this.getLabelText(c), 0, 0, c.useHTML).attr({ align: c.textAlign || c.align, rotation: c.rotation, "class": "highcharts-plot-" + (a ? "band" : "line") + "-label " + (c.className || ""), zIndex: n }).add(), g.chart.styledMode || r.css(t({ textOverflow: "ellipsis" }, c.style))); n = d.xBounds || [d[0][1], d[1][1], a ? d[2][1] : d[0][1]]; d = d.yBounds || [d[0][2], d[1][2], a ? d[2][2] : d[0][2]]; a = I(n); m = I(d); r.align(c, !1, { x: a, y: m, width: w(n) - a, height: w(d) - m }); r.alignValue &&
                        "left" !== r.alignValue || r.css({ width: (90 === r.rotation ? g.height - (r.alignAttr.y - g.top) : g.width - (r.alignAttr.x - g.left)) + "px" }); r.show(!0)
                }; d.prototype.getLabelText = function (c) { return u(c.formatter) ? c.formatter.call(this) : c.text }; d.prototype.destroy = function () { C(this.axis.plotLinesAndBands, this); delete this.axis; B(this) }; return d
        }(); ""; ""; return f
    }); G(f, "Core/Tooltip.js", [f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Renderer/RendererUtilities.js"], f["Core/Renderer/RendererRegistry.js"], f["Core/Utilities.js"]],
        function (a, f, w, D, u) {
            var B = a.format, C = f.doc, y = w.distribute, t = u.addEvent, n = u.clamp, l = u.css, d = u.defined, c = u.discardElement, g = u.extend, m = u.fireEvent, E = u.isArray, z = u.isNumber, A = u.isString, r = u.merge, q = u.pick, k = u.splat, h = u.syncTimeout; a = function () {
                function a(b, c) { this.allowShared = !0; this.container = void 0; this.crosshairs = []; this.distance = 0; this.isHidden = !0; this.isSticky = !1; this.now = {}; this.options = {}; this.outside = !1; this.chart = b; this.init(b, c) } a.prototype.applyFilter = function () {
                    var b = this.chart; b.renderer.definition({
                        tagName: "filter",
                        attributes: { id: "drop-shadow-" + b.index, opacity: .5 }, children: [{ tagName: "feGaussianBlur", attributes: { "in": "SourceAlpha", stdDeviation: 1 } }, { tagName: "feOffset", attributes: { dx: 1, dy: 1 } }, { tagName: "feComponentTransfer", children: [{ tagName: "feFuncA", attributes: { type: "linear", slope: .3 } }] }, { tagName: "feMerge", children: [{ tagName: "feMergeNode" }, { tagName: "feMergeNode", attributes: { "in": "SourceGraphic" } }] }]
                    })
                }; a.prototype.bodyFormatter = function (b) {
                    return b.map(function (b) {
                        var e = b.series.tooltipOptions; return (e[(b.point.formatPrefix ||
                            "point") + "Formatter"] || b.point.tooltipFormatter).call(b.point, e[(b.point.formatPrefix || "point") + "Format"] || "")
                    })
                }; a.prototype.cleanSplit = function (b) { this.chart.series.forEach(function (c) { var e = c && c.tt; e && (!e.isActive || b ? c.tt = e.destroy() : e.isActive = !1) }) }; a.prototype.defaultFormatter = function (b) { var c = this.points || k(this); var e = [b.tooltipFooterHeaderFormatter(c[0])]; e = e.concat(b.bodyFormatter(c)); e.push(b.tooltipFooterHeaderFormatter(c[0], !0)); return e }; a.prototype.destroy = function () {
                    this.label && (this.label =
                        this.label.destroy()); this.split && this.tt && (this.cleanSplit(!0), this.tt = this.tt.destroy()); this.renderer && (this.renderer = this.renderer.destroy(), c(this.container)); u.clearTimeout(this.hideTimer); u.clearTimeout(this.tooltipTimeout)
                }; a.prototype.getAnchor = function (b, c) {
                    var e = this.chart, h = e.pointer, d = e.inverted, a = e.plotTop, g = e.plotLeft, v, m, q = 0, n = 0; b = k(b); this.followPointer && c ? ("undefined" === typeof c.chartX && (c = h.normalize(c)), h = [c.chartX - g, c.chartY - a]) : b[0].tooltipPos ? h = b[0].tooltipPos : (b.forEach(function (b) {
                        v =
                        b.series.yAxis; m = b.series.xAxis; q += b.plotX || 0; n += b.plotLow ? (b.plotLow + (b.plotHigh || 0)) / 2 : b.plotY || 0; m && v && (d ? (q += a + e.plotHeight - m.len - m.pos, n += g + e.plotWidth - v.len - v.pos) : (q += m.pos - g, n += v.pos - a))
                    }), q /= b.length, n /= b.length, h = [d ? e.plotWidth - n : q, d ? e.plotHeight - q : n], this.shared && 1 < b.length && c && (d ? h[0] = c.chartX - g : h[1] = c.chartY - a)); return h.map(Math.round)
                }; a.prototype.getLabel = function () {
                    var b = this, c = this.chart.styledMode, e = this.options, h = this.split && this.allowShared, a = "tooltip" + (d(e.className) ? " " + e.className :
                        ""), g = e.style.pointerEvents || (!this.followPointer && e.stickOnContact ? "auto" : "none"), k = function () { b.inContact = !0 }, v = function (e) { var c = b.chart.hoverSeries; b.inContact = b.shouldStickOnContact() && b.chart.pointer.inClass(e.relatedTarget, "highcharts-tooltip"); if (!b.inContact && c && c.onMouseOut) c.onMouseOut() }, q, m = this.chart.renderer; if (b.label) { var n = !b.label.hasClass("highcharts-label"); (h && !n || !h && n) && b.destroy() } if (!this.label) {
                            if (this.outside) {
                                n = this.chart.options.chart.style; var r = D.getRendererType();
                                this.container = q = f.doc.createElement("div"); q.className = "highcharts-tooltip-container"; l(q, { position: "absolute", top: "1px", pointerEvents: g, zIndex: Math.max(this.options.style.zIndex || 0, (n && n.zIndex || 0) + 3) }); t(q, "mouseenter", k); t(q, "mouseleave", v); f.doc.body.appendChild(q); this.renderer = m = new r(q, 0, 0, n, void 0, void 0, m.styledMode)
                            } h ? this.label = m.g(a) : (this.label = m.label("", 0, 0, e.shape, void 0, void 0, e.useHTML, void 0, a).attr({ padding: e.padding, r: e.borderRadius }), c || this.label.attr({
                                fill: e.backgroundColor,
                                "stroke-width": e.borderWidth
                            }).css(e.style).css({ pointerEvents: g }).shadow(e.shadow)); c && e.shadow && (this.applyFilter(), this.label.attr({ filter: "url(#drop-shadow-" + this.chart.index + ")" })); if (b.outside && !b.split) { var z = this.label, A = z.xSetter, E = z.ySetter; z.xSetter = function (e) { A.call(z, b.distance); q.style.left = e + "px" }; z.ySetter = function (e) { E.call(z, b.distance); q.style.top = e + "px" } } this.label.on("mouseenter", k).on("mouseleave", v).attr({ zIndex: 8 }).add()
                        } return this.label
                }; a.prototype.getPosition = function (b,
                    c, e) {
                        var h = this.chart, d = this.distance, a = {}, g = h.inverted && e.h || 0, k = this.outside, v = k ? C.documentElement.clientWidth - 2 * d : h.chartWidth, m = k ? Math.max(C.body.scrollHeight, C.documentElement.scrollHeight, C.body.offsetHeight, C.documentElement.offsetHeight, C.documentElement.clientHeight) : h.chartHeight, n = h.pointer.getChartPosition(), r = function (a) {
                            var g = "x" === a; return [a, g ? v : m, g ? b : c].concat(k ? [g ? b * n.scaleX : c * n.scaleY, g ? n.left - d + (e.plotX + h.plotLeft) * n.scaleX : n.top - d + (e.plotY + h.plotTop) * n.scaleY, 0, g ? v : m] : [g ? b : c, g ?
                                e.plotX + h.plotLeft : e.plotY + h.plotTop, g ? h.plotLeft : h.plotTop, g ? h.plotLeft + h.plotWidth : h.plotTop + h.plotHeight])
                        }, l = r("y"), f = r("x"), F; r = !!e.negative; !h.polar && h.hoverSeries && h.hoverSeries.yAxis && h.hoverSeries.yAxis.reversed && (r = !r); var z = !this.followPointer && q(e.ttBelow, !h.inverted === r), A = function (b, e, c, h, p, x, v) {
                            var q = k ? "y" === b ? d * n.scaleY : d * n.scaleX : d, m = (c - h) / 2, r = h < p - d, l = p + d + h < e, f = p - q - c + m; p = p + q - m; if (z && l) a[b] = p; else if (!z && r) a[b] = f; else if (r) a[b] = Math.min(v - h, 0 > f - g ? f : f - g); else if (l) a[b] = Math.max(x, p +
                                g + c > e ? p : p + g); else return !1
                        }, E = function (b, e, c, h, g) { var p; g < d || g > e - d ? p = !1 : a[b] = g < c / 2 ? 1 : g > e - h / 2 ? e - h - 2 : g - c / 2; return p }, t = function (b) { var e = l; l = f; f = e; F = b }, u = function () { !1 !== A.apply(0, l) ? !1 !== E.apply(0, f) || F || (t(!0), u()) : F ? a.x = a.y = 0 : (t(!0), u()) }; (h.inverted || 1 < this.len) && t(); u(); return a
                }; a.prototype.hide = function (b) { var c = this; u.clearTimeout(this.hideTimer); b = q(b, this.options.hideDelay); this.isHidden || (this.hideTimer = h(function () { c.getLabel().fadeOut(b ? void 0 : b); c.isHidden = !0 }, b)) }; a.prototype.init = function (b,
                    c) { this.chart = b; this.options = c; this.crosshairs = []; this.now = { x: 0, y: 0 }; this.isHidden = !0; this.split = c.split && !b.inverted && !b.polar; this.shared = c.shared || this.split; this.outside = q(c.outside, !(!b.scrollablePixelsX && !b.scrollablePixelsY)) }; a.prototype.shouldStickOnContact = function () { return !(this.followPointer || !this.options.stickOnContact) }; a.prototype.isStickyOnContact = function () { return !(!this.shouldStickOnContact() || !this.inContact) }; a.prototype.move = function (b, c, e, h) {
                        var d = this, a = d.now, k = !1 !== d.options.animation &&
                            !d.isHidden && (1 < Math.abs(b - a.x) || 1 < Math.abs(c - a.y)), v = d.followPointer || 1 < d.len; g(a, { x: k ? (2 * a.x + b) / 3 : b, y: k ? (a.y + c) / 2 : c, anchorX: v ? void 0 : k ? (2 * a.anchorX + e) / 3 : e, anchorY: v ? void 0 : k ? (a.anchorY + h) / 2 : h }); d.getLabel().attr(a); d.drawTracker(); k && (u.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () { d && d.move(b, c, e, h) }, 32))
                    }; a.prototype.refresh = function (b, c) {
                        var e = this.chart, h = this.options, d = k(b), a = d[0], g = [], v = h.formatter || this.defaultFormatter, n = this.shared, r = e.styledMode, l = {}; if (h.enabled &&
                            a.series) {
                                u.clearTimeout(this.hideTimer); this.allowShared = !(!E(b) && b.series && b.series.noSharedTooltip); this.followPointer = !this.split && a.series.tooltipOptions.followPointer; b = this.getAnchor(b, c); var f = b[0], F = b[1]; n && this.allowShared ? (e.pointer.applyInactiveState(d), d.forEach(function (b) { b.setState("hover"); g.push(b.getLabelConfig()) }), l = { x: a.category, y: a.y }, l.points = g) : l = a.getLabelConfig(); this.len = g.length; v = v.call(l, this); n = a.series; this.distance = q(n.tooltipOptions.distance, 16); if (!1 === v) this.hide();
                                else {
                                    if (this.split && this.allowShared) this.renderSplit(v, d); else {
                                        var z = f, A = F; c && e.pointer.isDirectTouch && (z = c.chartX - e.plotLeft, A = c.chartY - e.plotTop); if (e.polar || !1 === n.options.clip || d.some(function (b) { return b.series.shouldShowTooltip(z, A) })) c = this.getLabel(), h.style.width && !r || c.css({ width: this.chart.spacingBox.width + "px" }), c.attr({ text: v && v.join ? v.join("") : v }), c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + q(a.colorIndex, n.colorIndex)), r || c.attr({
                                            stroke: h.borderColor || a.color ||
                                                n.color || "#666666"
                                        }), this.updatePosition({ plotX: f, plotY: F, negative: a.negative, ttBelow: a.ttBelow, h: b[2] || 0 }); else { this.hide(); return }
                                    } this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(); this.isHidden = !1
                                } m(this, "refresh")
                        }
                    }; a.prototype.renderSplit = function (b, c) {
                        function e(b, e, c, d, a) { void 0 === a && (a = !0); c ? (e = V ? 0 : G, b = n(b - d / 2, Q.left, Q.right - d - (h.outside ? O : 0))) : (e -= ca, b = a ? b - d - B : b + B, b = n(b, a ? b : Q.left, Q.right)); return { x: b, y: e } } var h = this, d = h.chart, a = h.chart, k = a.chartWidth, v = a.chartHeight, m = a.plotHeight,
                            r = a.plotLeft, l = a.plotTop, f = a.pointer, F = a.scrollablePixelsY; F = void 0 === F ? 0 : F; var z = a.scrollablePixelsX, t = a.scrollingContainer; t = void 0 === t ? { scrollLeft: 0, scrollTop: 0 } : t; var E = t.scrollLeft; t = t.scrollTop; var u = a.styledMode, B = h.distance, R = h.options, w = h.options.positioner, Q = h.outside && "number" !== typeof z ? C.documentElement.getBoundingClientRect() : { left: E, right: E + k, top: t, bottom: t + v }, I = h.getLabel(), D = this.renderer || d.renderer, V = !(!d.xAxis[0] || !d.xAxis[0].opposite); d = f.getChartPosition(); var O = d.left; d = d.top;
                        var ca = l + t, da = 0, G = m - F; A(b) && (b = [!1, b]); b = b.slice(0, c.length + 1).reduce(function (b, d, a) {
                            if (!1 !== d && "" !== d) {
                                a = c[a - 1] || { isHeader: !0, plotX: c[0].plotX, plotY: m, series: {} }; var g = a.isHeader, p = g ? h : a.series; d = d.toString(); var k = p.tt, v = a.isHeader; var x = a.series; var f = "highcharts-color-" + q(a.colorIndex, x.colorIndex, "none"); k || (k = { padding: R.padding, r: R.borderRadius }, u || (k.fill = R.backgroundColor, k["stroke-width"] = R.borderWidth), k = D.label("", 0, 0, R[v ? "headerShape" : "shape"], void 0, void 0, R.useHTML).addClass((v ? "highcharts-tooltip-header " :
                                    "") + "highcharts-tooltip-box " + f).attr(k).add(I)); k.isActive = !0; k.attr({ text: d }); u || k.css(R.style).shadow(R.shadow).attr({ stroke: R.borderColor || a.color || x.color || "#333333" }); p = p.tt = k; v = p.getBBox(); d = v.width + p.strokeWidth(); g && (da = v.height, G += da, V && (ca -= da)); x = a.plotX; x = void 0 === x ? 0 : x; f = a.plotY; f = void 0 === f ? 0 : f; k = a.series; if (a.isHeader) { x = r + x; var F = l + m / 2 } else { var H = k.xAxis, z = k.yAxis; x = H.pos + n(x, -B, H.len + B); k.shouldShowTooltip(0, z.pos - l + f, { ignoreX: !0 }) && (F = z.pos + f) } x = n(x, Q.left - B, Q.right + B); "number" ===
                                        typeof F ? (v = v.height + 1, f = w ? w.call(h, d, v, a) : e(x, F, g, d), b.push({ align: w ? 0 : void 0, anchorX: x, anchorY: F, boxWidth: d, point: a, rank: q(f.rank, g ? 1 : 0), size: v, target: f.y, tt: p, x: f.x })) : p.isActive = !1
                            } return b
                        }, []); !w && b.some(function (b) { var e = (h.outside ? O : 0) + b.anchorX; return e < Q.left && e + b.boxWidth < Q.right ? !0 : e < O - Q.left + b.boxWidth && Q.right - e > e }) && (b = b.map(function (b) { var c = e(b.anchorX, b.anchorY, b.point.isHeader, b.boxWidth, !1); return g(b, { target: c.y, x: c.x }) })); h.cleanSplit(); y(b, G); var aa = O, ea = O; b.forEach(function (b) {
                            var e =
                                b.x, c = b.boxWidth; b = b.isHeader; b || (h.outside && O + e < aa && (aa = O + e), !b && h.outside && aa + c > ea && (ea = O + e))
                        }); b.forEach(function (b) { var e = b.x, c = b.anchorX, d = b.pos, a = b.point.isHeader; d = { visibility: "undefined" === typeof d ? "hidden" : "inherit", x: e, y: d + ca, anchorX: c, anchorY: b.anchorY }; if (h.outside && e < c) { var g = O - aa; 0 < g && (a || (d.x = e + g, d.anchorX = c + g), a && (d.x = (ea - aa) / 2, d.anchorX = c + g)) } b.tt.attr(d) }); b = h.container; F = h.renderer; h.outside && b && F && (a = I.getBBox(), F.setSize(a.width + a.x, a.height + a.y, !1), b.style.left = aa + "px", b.style.top =
                            d + "px")
                    }; a.prototype.drawTracker = function () {
                        if (this.followPointer || !this.options.stickOnContact) this.tracker && this.tracker.destroy(); else {
                            var b = this.chart, c = this.label, e = this.shared ? b.hoverPoints : b.hoverPoint; if (c && e) {
                                var h = { x: 0, y: 0, width: 0, height: 0 }; e = this.getAnchor(e); var d = c.getBBox(); e[0] += b.plotLeft - c.translateX; e[1] += b.plotTop - c.translateY; h.x = Math.min(0, e[0]); h.y = Math.min(0, e[1]); h.width = 0 > e[0] ? Math.max(Math.abs(e[0]), d.width - e[0]) : Math.max(Math.abs(e[0]), d.width); h.height = 0 > e[1] ? Math.max(Math.abs(e[1]),
                                    d.height - Math.abs(e[1])) : Math.max(Math.abs(e[1]), d.height); this.tracker ? this.tracker.attr(h) : (this.tracker = c.renderer.rect(h).addClass("highcharts-tracker").add(c), b.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }))
                            }
                        }
                    }; a.prototype.styledModeFormat = function (b) { return b.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"') }; a.prototype.tooltipFooterHeaderFormatter = function (b, c) {
                        var e = b.series,
                        h = e.tooltipOptions, d = e.xAxis, a = d && d.dateTime; d = { isFooter: c, labelConfig: b }; var g = h.xDateFormat, k = h[c ? "footerFormat" : "headerFormat"]; m(this, "headerFormatter", d, function (c) { a && !g && z(b.key) && (g = a.getXDateFormat(b.key, h.dateTimeLabelFormats)); a && g && (b.point && b.point.tooltipDateKeys || ["key"]).forEach(function (b) { k = k.replace("{point." + b + "}", "{point." + b + ":" + g + "}") }); e.chart.styledMode && (k = this.styledModeFormat(k)); c.text = B(k, { point: b, series: e }, this.chart) }); return d.text
                    }; a.prototype.update = function (b) {
                        this.destroy();
                        r(!0, this.chart.options.tooltip.userOptions, b); this.init(this.chart, r(!0, this.options, b))
                    }; a.prototype.updatePosition = function (b) {
                        var c = this.chart, e = this.options, h = c.pointer, d = this.getLabel(); h = h.getChartPosition(); var a = (e.positioner || this.getPosition).call(this, d.width, d.height, b), g = b.plotX + c.plotLeft; b = b.plotY + c.plotTop; if (this.outside) {
                            e = e.borderWidth + 2 * this.distance; this.renderer.setSize(d.width + e, d.height + e, !1); if (1 !== h.scaleX || 1 !== h.scaleY) l(this.container, {
                                transform: "scale(" + h.scaleX + ", " +
                                    h.scaleY + ")"
                            }), g *= h.scaleX, b *= h.scaleY; g += h.left - a.x; b += h.top - a.y
                        } this.move(Math.round(a.x), Math.round(a.y || 0), g, b)
                    }; return a
            }(); ""; return a
        }); G(f, "Core/Series/Point.js", [f["Core/Renderer/HTML/AST.js"], f["Core/Animation/AnimationUtilities.js"], f["Core/DefaultOptions.js"], f["Core/FormatUtilities.js"], f["Core/Utilities.js"]], function (a, f, w, D, u) {
            var B = f.animObject, C = w.defaultOptions, y = D.format, t = u.addEvent, n = u.defined, l = u.erase, d = u.extend, c = u.fireEvent, g = u.getNestedProperty, m = u.isArray, E = u.isFunction,
            z = u.isNumber, A = u.isObject, r = u.merge, q = u.objectEach, k = u.pick, h = u.syncTimeout, v = u.removeEvent, b = u.uniqueKey; f = function () {
                function f() { this.colorIndex = this.category = void 0; this.formatPrefix = "point"; this.id = void 0; this.isNull = !1; this.percentage = this.options = this.name = void 0; this.selected = !1; this.total = this.series = void 0; this.visible = !0; this.x = void 0 } f.prototype.animateBeforeDestroy = function () {
                    var b = this, c = { x: b.startXPos, opacity: 0 }, h = b.getGraphicalProps(); h.singular.forEach(function (e) {
                        b[e] = b[e].animate("dataLabel" ===
                            e ? { x: b[e].startXPos, y: b[e].startYPos, opacity: 0 } : c)
                    }); h.plural.forEach(function (e) { b[e].forEach(function (e) { e.element && e.animate(d({ x: b.startXPos }, e.startYPos ? { x: e.startXPos, y: e.startYPos } : {})) }) })
                }; f.prototype.applyOptions = function (b, c) {
                    var e = this.series, h = e.options.pointValKey || e.pointValKey; b = f.prototype.optionsToObject.call(this, b); d(this, b); this.options = this.options ? d(this.options, b) : b; b.group && delete this.group; b.dataLabels && delete this.dataLabels; h && (this.y = f.prototype.getNestedProperty.call(this,
                        h)); this.formatPrefix = (this.isNull = k(this.isValid && !this.isValid(), null === this.x || !z(this.y))) ? "null" : "point"; this.selected && (this.state = "select"); "name" in this && "undefined" === typeof c && e.xAxis && e.xAxis.hasNames && (this.x = e.xAxis.nameToX(this)); "undefined" === typeof this.x && e ? this.x = "undefined" === typeof c ? e.autoIncrement() : c : z(b.x) && e.options.relativeXValue && (this.x = e.autoIncrement(b.x)); return this
                }; f.prototype.destroy = function () {
                    function b() {
                        if (c.graphic || c.dataLabel || c.dataLabels) v(c), c.destroyElements();
                        for (m in c) c[m] = null
                    } var c = this, d = c.series, a = d.chart; d = d.options.dataSorting; var g = a.hoverPoints, k = B(c.series.chart.renderer.globalAnimation), m; c.legendItem && a.legend.destroyItem(c); g && (c.setState(), l(g, c), g.length || (a.hoverPoints = null)); if (c === a.hoverPoint) c.onMouseOut(); d && d.enabled ? (this.animateBeforeDestroy(), h(b, k.duration)) : b(); a.pointCount--
                }; f.prototype.destroyElements = function (b) {
                    var e = this; b = e.getGraphicalProps(b); b.singular.forEach(function (b) { e[b] = e[b].destroy() }); b.plural.forEach(function (b) {
                        e[b].forEach(function (b) {
                            b.element &&
                            b.destroy()
                        }); delete e[b]
                    })
                }; f.prototype.firePointEvent = function (b, h, d) { var e = this, a = this.series.options; (a.point.events[b] || e.options && e.options.events && e.options.events[b]) && e.importEvents(); "click" === b && a.allowPointSelect && (d = function (b) { e.select && e.select(null, b.ctrlKey || b.metaKey || b.shiftKey) }); c(e, b, h, d) }; f.prototype.getClassName = function () {
                    return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") +
                        ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
                }; f.prototype.getGraphicalProps = function (b) {
                    var e = this, c = [], h = { singular: [], plural: [] }, d; b = b || { graphic: 1, dataLabel: 1 }; b.graphic && c.push("graphic", "upperGraphic", "shadowGroup"); b.dataLabel && c.push("dataLabel", "dataLabelUpper", "connector"); for (d = c.length; d--;) {
                        var a = c[d]; e[a] &&
                            h.singular.push(a)
                    } ["dataLabel", "connector"].forEach(function (c) { var d = c + "s"; b[c] && e[d] && h.plural.push(d) }); return h
                }; f.prototype.getLabelConfig = function () { return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal } }; f.prototype.getNestedProperty = function (b) { if (b) return 0 === b.indexOf("custom.") ? g(b, this.options) : this[b] }; f.prototype.getZone = function () {
                    var b = this.series,
                    c = b.zones; b = b.zoneAxis || "y"; var h, d = 0; for (h = c[d]; this[b] >= h.value;)h = c[++d]; this.nonZonedColor || (this.nonZonedColor = this.color); this.color = h && h.color && !this.options.color ? h.color : this.nonZonedColor; return h
                }; f.prototype.hasNewShapeType = function () { return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType }; f.prototype.init = function (e, h, d) {
                    this.series = e; this.applyOptions(h, d); this.id = n(this.id) ? this.id : b(); this.resolveColor(); e.chart.pointCount++; c(this, "afterInit");
                    return this
                }; f.prototype.optionsToObject = function (b) { var e = this.series, c = e.options.keys, h = c || e.pointArrayMap || ["y"], d = h.length, a = {}, g = 0, k = 0; if (z(b) || null === b) a[h[0]] = b; else if (m(b)) for (!c && b.length > d && (e = typeof b[0], "string" === e ? a.name = b[0] : "number" === e && (a.x = b[0]), g++); k < d;)c && "undefined" === typeof b[g] || (0 < h[k].indexOf(".") ? f.prototype.setNestedProperty(a, b[g], h[k]) : a[h[k]] = b[g]), g++, k++; else "object" === typeof b && (a = b, b.dataLabels && (e._hasPointLabels = !0), b.marker && (e._hasPointMarkers = !0)); return a };
                f.prototype.resolveColor = function () { var b = this.series, c = b.chart.styledMode; var h = b.chart.options.chart.colorCount; delete this.nonZonedColor; if (b.options.colorByPoint) { if (!c) { h = b.options.colors || b.chart.options.colors; var d = h[b.colorCounter]; h = h.length } c = b.colorCounter; b.colorCounter++; b.colorCounter === h && (b.colorCounter = 0) } else c || (d = b.color), c = b.colorIndex; this.colorIndex = k(this.options.colorIndex, c); this.color = k(this.options.color, d) }; f.prototype.setNestedProperty = function (b, c, h) {
                    h.split(".").reduce(function (b,
                        e, h, d) { b[e] = d.length - 1 === h ? c : A(b[e], !0) ? b[e] : {}; return b[e] }, b); return b
                }; f.prototype.tooltipFormatter = function (b) { var e = this.series, c = e.tooltipOptions, h = k(c.valueDecimals, ""), d = c.valuePrefix || "", a = c.valueSuffix || ""; e.chart.styledMode && (b = e.chart.tooltip.styledModeFormat(b)); (e.pointArrayMap || ["y"]).forEach(function (e) { e = "{point." + e; if (d || a) b = b.replace(RegExp(e + "}", "g"), d + e + "}" + a); b = b.replace(RegExp(e + "}", "g"), e + ":,." + h + "f}") }); return y(b, { point: this, series: this.series }, e.chart) }; f.prototype.update =
                    function (b, c, h, d) {
                        function e() {
                            a.applyOptions(b); var e = p && a.hasDummyGraphic; e = null === a.y ? !e : e; p && e && (a.graphic = p.destroy(), delete a.hasDummyGraphic); A(b, !0) && (p && p.element && b && b.marker && "undefined" !== typeof b.marker.symbol && (a.graphic = p.destroy()), b && b.dataLabels && a.dataLabel && (a.dataLabel = a.dataLabel.destroy()), a.connector && (a.connector = a.connector.destroy())); q = a.index; g.updateParallelArrays(a, q); m.data[q] = A(m.data[q], !0) || A(b, !0) ? a.options : k(b, m.data[q]); g.isDirty = g.isDirtyData = !0; !g.fixedBox &&
                                g.hasCartesianSeries && (v.isDirtyBox = !0); "point" === m.legendType && (v.isDirtyLegend = !0); c && v.redraw(h)
                        } var a = this, g = a.series, p = a.graphic, v = g.chart, m = g.options, q; c = k(c, !0); !1 === d ? e() : a.firePointEvent("update", { options: b }, e)
                    }; f.prototype.remove = function (b, c) { this.series.removePoint(this.series.data.indexOf(this), b, c) }; f.prototype.select = function (b, c) {
                        var e = this, h = e.series, d = h.chart; this.selectedStaging = b = k(b, !e.selected); e.firePointEvent(b ? "select" : "unselect", { accumulate: c }, function () {
                            e.selected = e.options.selected =
                                b; h.options.data[h.data.indexOf(e)] = e.options; e.setState(b && "select"); c || d.getSelectedPoints().forEach(function (b) { var c = b.series; b.selected && b !== e && (b.selected = b.options.selected = !1, c.options.data[c.data.indexOf(b)] = b.options, b.setState(d.hoverPoints && c.options.inactiveOtherPoints ? "inactive" : ""), b.firePointEvent("unselect")) })
                        }); delete this.selectedStaging
                    }; f.prototype.onMouseOver = function (b) {
                        var e = this.series.chart, c = e.pointer; b = b ? c.normalize(b) : c.getChartCoordinatesFromPoint(this, e.inverted); c.runPointActions(b,
                            this)
                    }; f.prototype.onMouseOut = function () { var b = this.series.chart; this.firePointEvent("mouseOut"); this.series.options.inactiveOtherPoints || (b.hoverPoints || []).forEach(function (b) { b.setState() }); b.hoverPoints = b.hoverPoint = null }; f.prototype.importEvents = function () { if (!this.hasImportedEvents) { var b = this, c = r(b.series.options.point, b.options).events; b.events = c; q(c, function (e, c) { E(e) && t(b, c, e) }); this.hasImportedEvents = !0 } }; f.prototype.setState = function (b, h) {
                        var e = this.series, g = this.state, v = e.options.states[b ||
                            "normal"] || {}, m = C.plotOptions[e.type].marker && e.options.marker, q = m && !1 === m.enabled, f = m && m.states && m.states[b || "normal"] || {}, n = !1 === f.enabled, r = this.marker || {}, l = e.chart, F = m && e.markerAttribs, A = e.halo, H, t = e.stateMarkerGraphic; b = b || ""; if (!(b === this.state && !h || this.selected && "select" !== b || !1 === v.enabled || b && (n || q && !1 === f.enabled) || b && r.states && r.states[b] && !1 === r.states[b].enabled)) {
                                this.state = b; F && (H = e.markerAttribs(this, b)); if (this.graphic && !this.hasDummyGraphic) {
                                    g && this.graphic.removeClass("highcharts-point-" +
                                        g); b && this.graphic.addClass("highcharts-point-" + b); if (!l.styledMode) { var E = e.pointAttribs(this, b); var R = k(l.options.chart.animation, v.animation); e.options.inactiveOtherPoints && z(E.opacity) && ((this.dataLabels || []).forEach(function (b) { b && b.animate({ opacity: E.opacity }, R) }), this.connector && this.connector.animate({ opacity: E.opacity }, R)); this.graphic.animate(E, R) } H && this.graphic.animate(H, k(l.options.chart.animation, f.animation, m.animation)); t && t.hide()
                                } else {
                                    if (b && f) {
                                        g = r.symbol || e.symbol; t && t.currentSymbol !==
                                            g && (t = t.destroy()); if (H) if (t) t[h ? "animate" : "attr"]({ x: H.x, y: H.y }); else g && (e.stateMarkerGraphic = t = l.renderer.symbol(g, H.x, H.y, H.width, H.height).add(e.markerGroup), t.currentSymbol = g); !l.styledMode && t && "inactive" !== this.state && t.attr(e.pointAttribs(this, b))
                                    } t && (t[b && this.isInside ? "show" : "hide"](), t.element.point = this, t.addClass(this.getClassName(), !0))
                                } v = v.halo; H = (t = this.graphic || t) && t.visibility || "inherit"; v && v.size && t && "hidden" !== H && !this.isCluster ? (A || (e.halo = A = l.renderer.path().add(t.parentGroup)),
                                    A.show()[h ? "animate" : "attr"]({ d: this.haloPath(v.size) }), A.attr({ "class": "highcharts-halo highcharts-color-" + k(this.colorIndex, e.colorIndex) + (this.className ? " " + this.className : ""), visibility: H, zIndex: -1 }), A.point = this, l.styledMode || A.attr(d({ fill: this.color || e.color, "fill-opacity": v.opacity }, a.filterUserAttributes(v.attributes || {})))) : A && A.point && A.point.haloPath && A.animate({ d: A.point.haloPath(0) }, null, A.hide); c(this, "afterSetState", { state: b })
                            }
                    }; f.prototype.haloPath = function (b) {
                        return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) -
                            b, this.plotY - b, 2 * b, 2 * b)
                    }; return f
            }(); ""; return f
        }); G(f, "Core/Pointer.js", [f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Tooltip.js"], f["Core/Utilities.js"]], function (a, f, w, D) {
            var u = a.parse, B = f.charts, C = f.noop, y = D.addEvent, t = D.attr, n = D.css, l = D.defined, d = D.extend, c = D.find, g = D.fireEvent, m = D.isNumber, E = D.isObject, z = D.objectEach, A = D.offset, r = D.pick, q = D.splat; a = function () {
                function a(c, a) {
                    this.lastValidTouch = {}; this.pinchDown = []; this.runChartClick = !1; this.eventsToUnbind = []; this.chart = c; this.hasDragged =
                        !1; this.options = a; this.init(c, a)
                } a.prototype.applyInactiveState = function (c) { var h = [], b; (c || []).forEach(function (c) { b = c.series; h.push(b); b.linkedParent && h.push(b.linkedParent); b.linkedSeries && (h = h.concat(b.linkedSeries)); b.navigatorSeries && h.push(b.navigatorSeries) }); this.chart.series.forEach(function (b) { -1 === h.indexOf(b) ? b.setState("inactive", !0) : b.options.inactiveOtherPoints && b.setAllPointsToState("inactive") }) }; a.prototype.destroy = function () {
                    var c = this; this.eventsToUnbind.forEach(function (c) { return c() });
                    this.eventsToUnbind = []; f.chartCount || (a.unbindDocumentMouseUp && (a.unbindDocumentMouseUp = a.unbindDocumentMouseUp()), a.unbindDocumentTouchEnd && (a.unbindDocumentTouchEnd = a.unbindDocumentTouchEnd())); clearInterval(c.tooltipTimeout); z(c, function (h, b) { c[b] = void 0 })
                }; a.prototype.drag = function (c) {
                    var h = this.chart, b = h.options.chart, a = this.zoomHor, e = this.zoomVert, d = h.plotLeft, g = h.plotTop, k = h.plotWidth, m = h.plotHeight, q = this.mouseDownX || 0, f = this.mouseDownY || 0, n = E(b.panning) ? b.panning && b.panning.enabled : b.panning,
                    r = b.panKey && c[b.panKey + "Key"], l = c.chartX, z = c.chartY, A = this.selectionMarker; if (!A || !A.touch) if (l < d ? l = d : l > d + k && (l = d + k), z < g ? z = g : z > g + m && (z = g + m), this.hasDragged = Math.sqrt(Math.pow(q - l, 2) + Math.pow(f - z, 2)), 10 < this.hasDragged) {
                        var t = h.isInsidePlot(q - d, f - g, { visiblePlotOnly: !0 }); !h.hasCartesianSeries && !h.mapView || !this.zoomX && !this.zoomY || !t || r || A || (this.selectionMarker = A = h.renderer.rect(d, g, a ? 1 : k, e ? 1 : m, 0).attr({ "class": "highcharts-selection-marker", zIndex: 7 }).add(), h.styledMode || A.attr({
                            fill: b.selectionMarkerFill ||
                                u("#335cad").setOpacity(.25).get()
                        })); A && a && (a = l - q, A.attr({ width: Math.abs(a), x: (0 < a ? 0 : a) + q })); A && e && (a = z - f, A.attr({ height: Math.abs(a), y: (0 < a ? 0 : a) + f })); t && !A && n && h.pan(c, b.panning)
                    }
                }; a.prototype.dragStart = function (c) { var h = this.chart; h.mouseIsDown = c.type; h.cancelClick = !1; h.mouseDownX = this.mouseDownX = c.chartX; h.mouseDownY = this.mouseDownY = c.chartY }; a.prototype.drop = function (c) {
                    var h = this, b = this.chart, a = this.hasPinched; if (this.selectionMarker) {
                        var e = this.selectionMarker, k = e.attr ? e.attr("x") : e.x, p = e.attr ?
                            e.attr("y") : e.y, q = e.attr ? e.attr("width") : e.width, f = e.attr ? e.attr("height") : e.height, r = { originalEvent: c, xAxis: [], yAxis: [], x: k, y: p, width: q, height: f }, z = !!b.mapView; if (this.hasDragged || a) b.axes.forEach(function (b) { if (b.zoomEnabled && l(b.min) && (a || h[{ xAxis: "zoomX", yAxis: "zoomY" }[b.coll]]) && m(k) && m(p)) { var e = b.horiz, d = "touchend" === c.type ? b.minPixelPadding : 0, g = b.toValue((e ? k : p) + d); e = b.toValue((e ? k + q : p + f) - d); r[b.coll].push({ axis: b, min: Math.min(g, e), max: Math.max(g, e) }); z = !0 } }), z && g(b, "selection", r, function (e) {
                                b.zoom(d(e,
                                    a ? { animation: !1 } : null))
                            }); m(b.index) && (this.selectionMarker = this.selectionMarker.destroy()); a && this.scaleGroups()
                    } b && m(b.index) && (n(b.container, { cursor: b._cursor }), b.cancelClick = 10 < this.hasDragged, b.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
                }; a.prototype.findNearestKDPoint = function (c, a, b) {
                    var h = this.chart, e = h.hoverPoint; h = h.tooltip; if (e && h && h.isStickyOnContact()) return e; var d; c.forEach(function (e) {
                        var c = !(e.noSharedTooltip && a) && 0 > e.options.findNearestPointBy.indexOf("y"); e =
                            e.searchPoint(b, c); if ((c = E(e, !0) && e.series) && !(c = !E(d, !0))) { c = d.distX - e.distX; var h = d.dist - e.dist, g = (e.series.group && e.series.group.zIndex) - (d.series.group && d.series.group.zIndex); c = 0 < (0 !== c && a ? c : 0 !== h ? h : 0 !== g ? g : d.series.index > e.series.index ? -1 : 1) } c && (d = e)
                    }); return d
                }; a.prototype.getChartCoordinatesFromPoint = function (c, a) {
                    var b = c.series, h = b.xAxis; b = b.yAxis; var e = c.shapeArgs; if (h && b) {
                        var d = r(c.clientX, c.plotX), g = c.plotY || 0; c.isNode && e && m(e.x) && m(e.y) && (d = e.x, g = e.y); return a ? {
                            chartX: b.len + b.pos - g, chartY: h.len +
                                h.pos - d
                        } : { chartX: d + h.pos, chartY: g + b.pos }
                    } if (e && e.x && e.y) return { chartX: e.x, chartY: e.y }
                }; a.prototype.getChartPosition = function () { if (this.chartPosition) return this.chartPosition; var c = this.chart.container, a = A(c); this.chartPosition = { left: a.left, top: a.top, scaleX: 1, scaleY: 1 }; var b = c.offsetWidth; c = c.offsetHeight; 2 < b && 2 < c && (this.chartPosition.scaleX = a.width / b, this.chartPosition.scaleY = a.height / c); return this.chartPosition }; a.prototype.getCoordinates = function (c) {
                    var h = { xAxis: [], yAxis: [] }; this.chart.axes.forEach(function (b) {
                        h[b.isXAxis ?
                            "xAxis" : "yAxis"].push({ axis: b, value: b.toValue(c[b.horiz ? "chartX" : "chartY"]) })
                    }); return h
                }; a.prototype.getHoverData = function (h, a, b, d, e, k) {
                    var p = []; d = !(!d || !h); var m = { chartX: k ? k.chartX : void 0, chartY: k ? k.chartY : void 0, shared: e }; g(this, "beforeGetHoverData", m); var q = a && !a.stickyTracking ? [a] : b.filter(function (b) { return m.filter ? m.filter(b) : b.visible && !(!e && b.directTouch) && r(b.options.enableMouseTracking, !0) && b.stickyTracking }); var v = d || !k ? h : this.findNearestKDPoint(q, e, k); a = v && v.series; v && (e && !a.noSharedTooltip ?
                        (q = b.filter(function (b) { return m.filter ? m.filter(b) : b.visible && !(!e && b.directTouch) && r(b.options.enableMouseTracking, !0) && !b.noSharedTooltip }), q.forEach(function (b) { var e = c(b.points, function (b) { return b.x === v.x && !b.isNull }); E(e) && (b.chart.isBoosting && (e = b.getPoint(e)), p.push(e)) })) : p.push(v)); m = { hoverPoint: v }; g(this, "afterGetHoverData", m); return { hoverPoint: m.hoverPoint, hoverSeries: a, hoverPoints: p }
                }; a.prototype.getPointFromEvent = function (c) { c = c.target; for (var h; c && !h;)h = c.point, c = c.parentNode; return h };
                a.prototype.onTrackerMouseOut = function (c) { c = c.relatedTarget || c.toElement; var h = this.chart.hoverSeries; this.isDirectTouch = !1; if (!(!h || !c || h.stickyTracking || this.inClass(c, "highcharts-tooltip") || this.inClass(c, "highcharts-series-" + h.index) && this.inClass(c, "highcharts-tracker"))) h.onMouseOut() }; a.prototype.inClass = function (c, a) { for (var b; c;) { if (b = t(c, "class")) { if (-1 !== b.indexOf(a)) return !0; if (-1 !== b.indexOf("highcharts-container")) return !1 } c = c.parentElement } }; a.prototype.init = function (c, a) {
                    this.options =
                    a; this.chart = c; this.runChartClick = !(!a.chart.events || !a.chart.events.click); this.pinchDown = []; this.lastValidTouch = {}; w && (c.tooltip = new w(c, a.tooltip), this.followTouchMove = r(a.tooltip.followTouchMove, !0)); this.setDOMEvents()
                }; a.prototype.normalize = function (c, a) { var b = c.touches, h = b ? b.length ? b.item(0) : r(b.changedTouches, c.changedTouches)[0] : c; a || (a = this.getChartPosition()); b = h.pageX - a.left; h = h.pageY - a.top; b /= a.scaleX; h /= a.scaleY; return d(c, { chartX: Math.round(b), chartY: Math.round(h) }) }; a.prototype.onContainerClick =
                    function (c) { var a = this.chart, b = a.hoverPoint; c = this.normalize(c); var h = a.plotLeft, e = a.plotTop; a.cancelClick || (b && this.inClass(c.target, "highcharts-tracker") ? (g(b.series, "click", d(c, { point: b })), a.hoverPoint && b.firePointEvent("click", c)) : (d(c, this.getCoordinates(c)), a.isInsidePlot(c.chartX - h, c.chartY - e, { visiblePlotOnly: !0 }) && g(a, "click", c))) }; a.prototype.onContainerMouseDown = function (c) {
                        var a = 1 === ((c.buttons || c.button) & 1); c = this.normalize(c); if (f.isFirefox && 0 !== c.button) this.onContainerMouseMove(c);
                        if ("undefined" === typeof c.button || a) this.zoomOption(c), a && c.preventDefault && c.preventDefault(), this.dragStart(c)
                    }; a.prototype.onContainerMouseLeave = function (c) { var h = B[r(a.hoverChartIndex, -1)], b = this.chart.tooltip; b && b.shouldStickOnContact() && this.inClass(c.relatedTarget, "highcharts-tooltip-container") || (c = this.normalize(c), h && (c.relatedTarget || c.toElement) && (h.pointer.reset(), h.pointer.chartPosition = void 0), b && !b.isHidden && this.reset()) }; a.prototype.onContainerMouseEnter = function (c) { delete this.chartPosition };
                a.prototype.onContainerMouseMove = function (c) { var a = this.chart; c = this.normalize(c); this.setHoverChartIndex(); c.preventDefault || (c.returnValue = !1); ("mousedown" === a.mouseIsDown || this.touchSelect(c)) && this.drag(c); a.openMenu || !this.inClass(c.target, "highcharts-tracker") && !a.isInsidePlot(c.chartX - a.plotLeft, c.chartY - a.plotTop, { visiblePlotOnly: !0 }) || (this.inClass(c.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(c)) }; a.prototype.onDocumentTouchEnd = function (c) {
                    var h = B[r(a.hoverChartIndex,
                        -1)]; h && h.pointer.drop(c)
                }; a.prototype.onContainerTouchMove = function (c) { if (this.touchSelect(c)) this.onContainerMouseMove(c); else this.touch(c) }; a.prototype.onContainerTouchStart = function (c) { if (this.touchSelect(c)) this.onContainerMouseDown(c); else this.zoomOption(c), this.touch(c, !0) }; a.prototype.onDocumentMouseMove = function (c) {
                    var a = this.chart, b = this.chartPosition; c = this.normalize(c, b); var h = a.tooltip; !b || h && h.isStickyOnContact() || a.isInsidePlot(c.chartX - a.plotLeft, c.chartY - a.plotTop, { visiblePlotOnly: !0 }) ||
                        this.inClass(c.target, "highcharts-tracker") || this.reset()
                }; a.prototype.onDocumentMouseUp = function (c) { var h = B[r(a.hoverChartIndex, -1)]; h && h.pointer.drop(c) }; a.prototype.pinch = function (c) {
                    var a = this, b = a.chart, h = a.pinchDown, e = c.touches || [], k = e.length, p = a.lastValidTouch, m = a.hasZoom, q = {}, f = 1 === k && (a.inClass(c.target, "highcharts-tracker") && b.runTrackerClick || a.runChartClick), n = {}, l = a.selectionMarker; 1 < k ? a.initiated = !0 : 1 === k && this.followTouchMove && (a.initiated = !1); m && a.initiated && !f && !1 !== c.cancelable &&
                        c.preventDefault();[].map.call(e, function (b) { return a.normalize(b) }); "touchstart" === c.type ? ([].forEach.call(e, function (b, e) { h[e] = { chartX: b.chartX, chartY: b.chartY } }), p.x = [h[0].chartX, h[1] && h[1].chartX], p.y = [h[0].chartY, h[1] && h[1].chartY], b.axes.forEach(function (e) {
                            if (e.zoomEnabled) {
                                var c = b.bounds[e.horiz ? "h" : "v"], a = e.minPixelPadding, h = e.toPixels(Math.min(r(e.options.min, e.dataMin), e.dataMin)), d = e.toPixels(Math.max(r(e.options.max, e.dataMax), e.dataMax)), g = Math.max(h, d); c.min = Math.min(e.pos, Math.min(h,
                                    d) - a); c.max = Math.max(e.pos + e.len, g + a)
                            }
                        }), a.res = !0) : a.followTouchMove && 1 === k ? this.runPointActions(a.normalize(c)) : h.length && (g(b, "touchpan", { originalEvent: c }, function () { l || (a.selectionMarker = l = d({ destroy: C, touch: !0 }, b.plotBox)); a.pinchTranslate(h, e, q, l, n, p); a.hasPinched = m; a.scaleGroups(q, n) }), a.res && (a.res = !1, this.reset(!1, 0)))
                }; a.prototype.pinchTranslate = function (c, a, b, d, e, g) { this.zoomHor && this.pinchTranslateDirection(!0, c, a, b, d, e, g); this.zoomVert && this.pinchTranslateDirection(!1, c, a, b, d, e, g) }; a.prototype.pinchTranslateDirection =
                    function (c, a, b, d, e, g, k, m) {
                        var h = this.chart, p = c ? "x" : "y", q = c ? "X" : "Y", f = "chart" + q, n = c ? "width" : "height", l = h["plot" + (c ? "Left" : "Top")], r = h.inverted, v = h.bounds[c ? "h" : "v"], x = 1 === a.length, z = a[0][f], F = !x && a[1][f]; a = function () { "number" === typeof u && 20 < Math.abs(z - F) && (H = m || Math.abs(E - u) / Math.abs(z - F)); t = (l - E) / H + z; A = h["plot" + (c ? "Width" : "Height")] / H }; var A, t, H = m || 1, E = b[0][f], u = !x && b[1][f]; a(); b = t; if (b < v.min) { b = v.min; var y = !0 } else b + A > v.max && (b = v.max - A, y = !0); y ? (E -= .8 * (E - k[p][0]), "number" === typeof u && (u -= .8 * (u - k[p][1])),
                            a()) : k[p] = [E, u]; r || (g[p] = t - l, g[n] = A); g = r ? 1 / H : H; e[n] = A; e[p] = b; d[r ? c ? "scaleY" : "scaleX" : "scale" + q] = H; d["translate" + q] = g * l + (E - g * z)
                    }; a.prototype.reset = function (c, a) {
                        var b = this.chart, d = b.hoverSeries, e = b.hoverPoint, h = b.hoverPoints, g = b.tooltip, k = g && g.shared ? h : e; c && k && q(k).forEach(function (b) { b.series.isCartesian && "undefined" === typeof b.plotX && (c = !1) }); if (c) g && k && q(k).length && (g.refresh(k), g.shared && h ? h.forEach(function (b) {
                            b.setState(b.state, !0); b.series.isCartesian && (b.series.xAxis.crosshair && b.series.xAxis.drawCrosshair(null,
                                b), b.series.yAxis.crosshair && b.series.yAxis.drawCrosshair(null, b))
                        }) : e && (e.setState(e.state, !0), b.axes.forEach(function (b) { b.crosshair && e.series[b.coll] === b && b.drawCrosshair(null, e) }))); else { if (e) e.onMouseOut(); h && h.forEach(function (b) { b.setState() }); if (d) d.onMouseOut(); g && g.hide(a); this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()); b.axes.forEach(function (b) { b.hideCrosshair() }); this.hoverX = b.hoverPoints = b.hoverPoint = null }
                    }; a.prototype.runPointActions = function (d, g) {
                        var b = this.chart,
                        h = b.tooltip && b.tooltip.options.enabled ? b.tooltip : void 0, e = h ? h.shared : !1, k = g || b.hoverPoint, p = k && k.series || b.hoverSeries; g = this.getHoverData(k, p, b.series, (!d || "touchmove" !== d.type) && (!!g || p && p.directTouch && this.isDirectTouch), e, d); k = g.hoverPoint; p = g.hoverSeries; var m = g.hoverPoints; g = p && p.tooltipOptions.followPointer && !p.tooltipOptions.split; var q = e && p && !p.noSharedTooltip; if (k && (k !== b.hoverPoint || h && h.isHidden)) {
                            (b.hoverPoints || []).forEach(function (b) { -1 === m.indexOf(b) && b.setState() }); if (b.hoverSeries !==
                                p) p.onMouseOver(); this.applyInactiveState(m); (m || []).forEach(function (b) { b.setState("hover") }); b.hoverPoint && b.hoverPoint.firePointEvent("mouseOut"); if (!k.series) return; b.hoverPoints = m; b.hoverPoint = k; k.firePointEvent("mouseOver", void 0, function () { h && k && h.refresh(q ? m : k, d) })
                        } else g && h && !h.isHidden && (e = h.getAnchor([{}], d), b.isInsidePlot(e[0], e[1], { visiblePlotOnly: !0 }) && h.updatePosition({ plotX: e[0], plotY: e[1] })); this.unDocMouseMove || (this.unDocMouseMove = y(b.container.ownerDocument, "mousemove", function (b) {
                            var e =
                                B[a.hoverChartIndex]; if (e) e.pointer.onDocumentMouseMove(b)
                        }), this.eventsToUnbind.push(this.unDocMouseMove)); b.axes.forEach(function (e) { var a = r((e.crosshair || {}).snap, !0), h; a && ((h = b.hoverPoint) && h.series[e.coll] === e || (h = c(m, function (b) { return b.series && b.series[e.coll] === e }))); h || !a ? e.drawCrosshair(d, h) : e.hideCrosshair() })
                    }; a.prototype.scaleGroups = function (c, a) {
                        var b = this.chart; b.series.forEach(function (d) {
                            var e = c || d.getPlotBox(); d.group && (d.xAxis && d.xAxis.zoomEnabled || b.mapView) && (d.group.attr(e),
                                d.markerGroup && (d.markerGroup.attr(e), d.markerGroup.clip(a ? b.clipRect : null)), d.dataLabelsGroup && d.dataLabelsGroup.attr(e))
                        }); b.clipRect.attr(a || b.clipBox)
                    }; a.prototype.setDOMEvents = function () {
                        var c = this, d = this.chart.container, b = d.ownerDocument; d.onmousedown = this.onContainerMouseDown.bind(this); d.onmousemove = this.onContainerMouseMove.bind(this); d.onclick = this.onContainerClick.bind(this); this.eventsToUnbind.push(y(d, "mouseenter", this.onContainerMouseEnter.bind(this))); this.eventsToUnbind.push(y(d, "mouseleave",
                            this.onContainerMouseLeave.bind(this))); a.unbindDocumentMouseUp || (a.unbindDocumentMouseUp = y(b, "mouseup", this.onDocumentMouseUp.bind(this))); for (var g = this.chart.renderTo.parentElement; g && "BODY" !== g.tagName;)this.eventsToUnbind.push(y(g, "scroll", function () { delete c.chartPosition })), g = g.parentElement; f.hasTouch && (this.eventsToUnbind.push(y(d, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 })), this.eventsToUnbind.push(y(d, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })),
                                a.unbindDocumentTouchEnd || (a.unbindDocumentTouchEnd = y(b, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 })))
                    }; a.prototype.setHoverChartIndex = function () { var c = this.chart, d = f.charts[r(a.hoverChartIndex, -1)]; if (d && d !== c) d.pointer.onContainerMouseLeave({ relatedTarget: c.container }); d && d.mouseIsDown || (a.hoverChartIndex = c.index) }; a.prototype.touch = function (c, a) {
                        var b = this.chart, d; this.setHoverChartIndex(); if (1 === c.touches.length) if (c = this.normalize(c), (d = b.isInsidePlot(c.chartX - b.plotLeft, c.chartY -
                            b.plotTop, { visiblePlotOnly: !0 })) && !b.openMenu) { a && this.runPointActions(c); if ("touchmove" === c.type) { a = this.pinchDown; var e = a[0] ? 4 <= Math.sqrt(Math.pow(a[0].chartX - c.chartX, 2) + Math.pow(a[0].chartY - c.chartY, 2)) : !1 } r(e, !0) && this.pinch(c) } else a && this.reset(); else 2 === c.touches.length && this.pinch(c)
                    }; a.prototype.touchSelect = function (c) { return !(!this.chart.options.chart.zoomBySingleTouch || !c.touches || 1 !== c.touches.length) }; a.prototype.zoomOption = function (c) {
                        var a = this.chart, b = a.options.chart; a = a.inverted;
                        var d = b.zoomType || ""; /touch/.test(c.type) && (d = r(b.pinchType, d)); this.zoomX = c = /x/.test(d); this.zoomY = b = /y/.test(d); this.zoomHor = c && !a || b && a; this.zoomVert = b && !a || c && a; this.hasZoom = c || b
                    }; return a
            }(); ""; return a
        }); G(f, "Core/MSPointer.js", [f["Core/Globals.js"], f["Core/Pointer.js"], f["Core/Utilities.js"]], function (a, f, w) {
            function D() { var a = []; a.item = function (c) { return this[c] }; c(m, function (c) { a.push({ pageX: c.pageX, pageY: c.pageY, target: c.target }) }); return a } function u(c, a, d, g) {
                var k = C[f.hoverChartIndex ||
                    NaN]; "touch" !== c.pointerType && c.pointerType !== c.MSPOINTER_TYPE_TOUCH || !k || (k = k.pointer, g(c), k[a]({ type: d, target: c.currentTarget, preventDefault: t, touches: D() }))
            } var B = this && this.__extends || function () {
                var c = function (a, d) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, a) { c.__proto__ = a } || function (c, a) { for (var d in a) a.hasOwnProperty(d) && (c[d] = a[d]) }; return c(a, d) }; return function (a, d) {
                    function g() { this.constructor = a } c(a, d); a.prototype = null === d ? Object.create(d) : (g.prototype = d.prototype,
                        new g)
                }
            }(), C = a.charts, y = a.doc, t = a.noop, n = a.win, l = w.addEvent, d = w.css, c = w.objectEach, g = w.removeEvent, m = {}, E = !!n.PointerEvent; return function (c) {
                function f() { return null !== c && c.apply(this, arguments) || this } B(f, c); f.isRequired = function () { return !(a.hasTouch || !n.PointerEvent && !n.MSPointerEvent) }; f.prototype.batchMSEvents = function (c) {
                    c(this.chart.container, E ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown); c(this.chart.container, E ? "pointermove" : "MSPointerMove", this.onContainerPointerMove); c(y, E ?
                        "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                }; f.prototype.destroy = function () { this.batchMSEvents(g); c.prototype.destroy.call(this) }; f.prototype.init = function (a, g) { c.prototype.init.call(this, a, g); this.hasZoom && d(a.container, { "-ms-touch-action": "none", "touch-action": "none" }) }; f.prototype.onContainerPointerDown = function (c) { u(c, "onContainerTouchStart", "touchstart", function (c) { m[c.pointerId] = { pageX: c.pageX, pageY: c.pageY, target: c.currentTarget } }) }; f.prototype.onContainerPointerMove = function (c) {
                    u(c,
                        "onContainerTouchMove", "touchmove", function (c) { m[c.pointerId] = { pageX: c.pageX, pageY: c.pageY }; m[c.pointerId].target || (m[c.pointerId].target = c.currentTarget) })
                }; f.prototype.onDocumentPointerUp = function (c) { u(c, "onDocumentTouchEnd", "touchend", function (c) { delete m[c.pointerId] }) }; f.prototype.setDOMEvents = function () { c.prototype.setDOMEvents.call(this); (this.hasZoom || this.followTouchMove) && this.batchMSEvents(l) }; return f
            }(f)
        }); G(f, "Core/Legend/Legend.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/FormatUtilities.js"],
        f["Core/Globals.js"], f["Core/Series/Point.js"], f["Core/Renderer/RendererUtilities.js"], f["Core/Utilities.js"]], function (a, f, w, D, u, B) {
            var C = a.animObject, y = a.setAnimation, t = f.format; a = w.isFirefox; var n = w.marginNames; w = w.win; var l = u.distribute, d = B.addEvent, c = B.createElement, g = B.css, m = B.defined, E = B.discardElement, z = B.find, A = B.fireEvent, r = B.isNumber, q = B.merge, k = B.pick, h = B.relativeLength, v = B.stableSort, b = B.syncTimeout; u = B.wrap; B = function () {
                function a(b, c) {
                    this.allItems = []; this.contentGroup = this.box = void 0;
                    this.display = !1; this.group = void 0; this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0; this.options = void 0; this.padding = 0; this.pages = []; this.proximate = !1; this.scrollGroup = void 0; this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0; this.chart = b; this.init(b, c)
                } a.prototype.init = function (b, c) {
                    this.chart =
                    b; this.setOptions(c); c.enabled && (this.render(), d(this.chart, "endResize", function () { this.legend.positionCheckboxes() }), this.proximate ? this.unchartrender = d(this.chart, "render", function () { this.legend.proximatePositions(); this.legend.positionItems() }) : this.unchartrender && this.unchartrender())
                }; a.prototype.setOptions = function (b) {
                    var c = k(b.padding, 8); this.options = b; this.chart.styledMode || (this.itemStyle = b.itemStyle, this.itemHiddenStyle = q(this.itemStyle, b.itemHiddenStyle)); this.itemMarginTop = b.itemMarginTop ||
                        0; this.itemMarginBottom = b.itemMarginBottom || 0; this.padding = c; this.initialItemY = c - 5; this.symbolWidth = k(b.symbolWidth, 16); this.pages = []; this.proximate = "proximate" === b.layout && !this.chart.inverted; this.baseline = void 0
                }; a.prototype.update = function (b, c) { var e = this.chart; this.setOptions(q(!0, this.options, b)); this.destroy(); e.isDirtyLegend = e.isDirtyBox = !0; k(c, !0) && e.redraw(); A(this, "afterUpdate") }; a.prototype.colorizeItem = function (b, c) {
                    b.legendGroup[c ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
                    if (!this.chart.styledMode) { var e = this.options, a = b.legendItem, d = b.legendLine, h = b.legendSymbol, g = this.itemHiddenStyle.color; e = c ? e.itemStyle.color : g; var k = c ? b.color || g : g, m = b.options && b.options.marker, f = { fill: k }; a && a.css({ fill: e, color: e }); d && d.attr({ stroke: k }); h && (m && h.isMarker && (f = b.pointAttribs(), c || (f.stroke = f.fill = g)), h.attr(f)) } A(this, "afterColorizeItem", { item: b, visible: c })
                }; a.prototype.positionItems = function () { this.allItems.forEach(this.positionItem, this); this.chart.isResizing || this.positionCheckboxes() };
                a.prototype.positionItem = function (b) { var c = this, e = this.options, a = e.symbolPadding, d = !e.rtl, h = b._legendItemPos; e = h[0]; h = h[1]; var g = b.checkbox, k = b.legendGroup; k && k.element && (a = { translateX: d ? e : this.legendWidth - e - 2 * a - 4, translateY: h }, d = function () { A(c, "afterPositionItem", { item: b }) }, m(k.translateY) ? k.animate(a, void 0, d) : (k.attr(a), d())); g && (g.x = e, g.y = h) }; a.prototype.destroyItem = function (b) {
                    var c = b.checkbox;["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function (c) { b[c] && (b[c] = b[c].destroy()) });
                    c && E(b.checkbox)
                }; a.prototype.destroy = function () { function b(b) { this[b] && (this[b] = this[b].destroy()) } this.getAllItems().forEach(function (c) { ["legendItem", "legendGroup"].forEach(b, c) }); "clipRect up down pager nav box title group".split(" ").forEach(b, this); this.display = null }; a.prototype.positionCheckboxes = function () {
                    var b = this.group && this.group.alignAttr, c = this.clipHeight || this.legendHeight, a = this.titleHeight; if (b) {
                        var d = b.translateY; this.allItems.forEach(function (e) {
                            var h = e.checkbox; if (h) {
                                var k = d +
                                    a + h.y + (this.scrollOffset || 0) + 3; g(h, { left: b.translateX + e.checkboxOffset + h.x - 20 + "px", top: k + "px", display: this.proximate || k > d - 6 && k < d + c - 6 ? "" : "none" })
                            }
                        }, this)
                    }
                }; a.prototype.renderTitle = function () {
                    var b = this.options, c = this.padding, a = b.title, d = 0; a.text && (this.title || (this.title = this.chart.renderer.label(a.text, c - 3, c - 4, void 0, void 0, void 0, b.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(a.style), this.title.add(this.group)), a.width || this.title.css({
                        width: this.maxLegendWidth +
                            "px"
                    }), b = this.title.getBBox(), d = b.height, this.offsetWidth = b.width, this.contentGroup.attr({ translateY: d })); this.titleHeight = d
                }; a.prototype.setText = function (b) { var c = this.options; b.legendItem.attr({ text: c.labelFormat ? t(c.labelFormat, b, this.chart) : c.labelFormatter.call(b) }) }; a.prototype.renderItem = function (b) {
                    var c = this.chart, e = c.renderer, a = this.options, d = this.symbolWidth, h = a.symbolPadding || 0, g = this.itemStyle, m = this.itemHiddenStyle, f = "horizontal" === a.layout ? k(a.itemDistance, 20) : 0, n = !a.rtl, l = !b.series,
                    r = !l && b.series.drawLegendSymbol ? b.series : b, v = r.options, z = this.createCheckboxForItem && v && v.showCheckbox, A = a.useHTML, F = b.options.className, t = b.legendItem; v = d + h + f + (z ? 20 : 0); t || (b.legendGroup = e.g("legend-item").addClass("highcharts-" + r.type + "-series highcharts-color-" + b.colorIndex + (F ? " " + F : "") + (l ? " highcharts-series-" + b.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), b.legendItem = t = e.text("", n ? d + h : -h, this.baseline || 0, A), c.styledMode || t.css(q(b.visible ? g : m)), t.attr({ align: n ? "left" : "right", zIndex: 2 }).add(b.legendGroup),
                        this.baseline || (this.fontMetrics = e.fontMetrics(c.styledMode ? 12 : g.fontSize, t), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, t.attr("y", this.baseline), this.symbolHeight = a.symbolHeight || this.fontMetrics.f, a.squareSymbol && (this.symbolWidth = k(a.symbolWidth, Math.max(this.symbolHeight, 16)), v = this.symbolWidth + h + f + (z ? 20 : 0), n && t.attr("x", this.symbolWidth + h))), r.drawLegendSymbol(this, b), this.setItemEvents && this.setItemEvents(b, t, A)); z && !b.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(b);
                    this.colorizeItem(b, b.visible); !c.styledMode && g.width || t.css({ width: (a.itemWidth || this.widthOption || c.spacingBox.width) - v + "px" }); this.setText(b); c = t.getBBox(); e = this.fontMetrics && this.fontMetrics.h || 0; b.itemWidth = b.checkboxOffset = a.itemWidth || b.legendItemWidth || c.width + v; this.maxItemWidth = Math.max(this.maxItemWidth, b.itemWidth); this.totalItemWidth += b.itemWidth; this.itemHeight = b.itemHeight = Math.round(b.legendItemHeight || (c.height > 1.5 * e ? c.height : e))
                }; a.prototype.layoutItem = function (b) {
                    var c = this.options,
                    e = this.padding, a = "horizontal" === c.layout, d = b.itemHeight, h = this.itemMarginBottom, g = this.itemMarginTop, m = a ? k(c.itemDistance, 20) : 0, f = this.maxLegendWidth; c = c.alignColumns && this.totalItemWidth > f ? this.maxItemWidth : b.itemWidth; a && this.itemX - e + c > f && (this.itemX = e, this.lastLineHeight && (this.itemY += g + this.lastLineHeight + h), this.lastLineHeight = 0); this.lastItemY = g + this.itemY + h; this.lastLineHeight = Math.max(d, this.lastLineHeight); b._legendItemPos = [this.itemX, this.itemY]; a ? this.itemX += c : (this.itemY += g + d + h, this.lastLineHeight =
                        d); this.offsetWidth = this.widthOption || Math.max((a ? this.itemX - e - (b.checkbox ? 0 : m) : c) + e, this.offsetWidth)
                }; a.prototype.getAllItems = function () { var b = []; this.chart.series.forEach(function (c) { var e = c && c.options; c && k(e.showInLegend, m(e.linkedTo) ? !1 : void 0, !0) && (b = b.concat(c.legendItems || ("point" === e.legendType ? c.data : c))) }); A(this, "afterGetAllItems", { allItems: b }); return b }; a.prototype.getAlignment = function () {
                    var b = this.options; return this.proximate ? b.align.charAt(0) + "tv" : b.floating ? "" : b.align.charAt(0) +
                        b.verticalAlign.charAt(0) + b.layout.charAt(0)
                }; a.prototype.adjustMargins = function (b, c) { var e = this.chart, a = this.options, d = this.getAlignment(); d && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (h, g) { h.test(d) && !m(b[g]) && (e[n[g]] = Math.max(e[n[g]], e.legend[(g + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][g] * a[g % 2 ? "x" : "y"] + k(a.margin, 12) + c[g] + (e.titleOffset[g] || 0))) }) }; a.prototype.proximatePositions = function () {
                    var b = this.chart, c = [], a = "left" === this.options.align; this.allItems.forEach(function (e) {
                        var d;
                        var h = a; if (e.yAxis) { e.xAxis.options.reversed && (h = !h); e.points && (d = z(h ? e.points : e.points.slice(0).reverse(), function (b) { return r(b.plotY) })); h = this.itemMarginTop + e.legendItem.getBBox().height + this.itemMarginBottom; var g = e.yAxis.top - b.plotTop; e.visible ? (d = d ? d.plotY : e.yAxis.height, d += g - .3 * h) : d = g + e.yAxis.height; c.push({ target: d, size: h, item: e }) }
                    }, this); l(c, b.plotHeight).forEach(function (c) { c.item._legendItemPos && (c.item._legendItemPos[1] = b.plotTop - b.spacing[0] + c.pos) })
                }; a.prototype.render = function () {
                    var b =
                        this.chart, c = b.renderer, a = this.options, d = this.padding, g = this.getAllItems(), k = this.group, m = this.box; this.itemX = d; this.itemY = this.initialItemY; this.lastItemY = this.offsetWidth = 0; this.widthOption = h(a.width, b.spacingBox.width - d); var f = b.spacingBox.width - 2 * d - a.x; -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (f /= 2); this.maxLegendWidth = this.widthOption || f; k || (this.group = k = c.g("legend").addClass(a.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = c.g().attr({ zIndex: 1 }).add(k), this.scrollGroup =
                            c.g().add(this.contentGroup)); this.renderTitle(); v(g, function (b, c) { return (b.options && b.options.legendIndex || 0) - (c.options && c.options.legendIndex || 0) }); a.reversed && g.reverse(); this.allItems = g; this.display = f = !!g.length; this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0; g.forEach(this.renderItem, this); g.forEach(this.layoutItem, this); g = (this.widthOption || this.offsetWidth) + d; var q = this.lastItemY + this.lastLineHeight + this.titleHeight; q = this.handleOverflow(q); q += d; m || (this.box = m =
                                c.rect().addClass("highcharts-legend-box").attr({ r: a.borderRadius }).add(k)); b.styledMode || m.attr({ stroke: a.borderColor, "stroke-width": a.borderWidth || 0, fill: a.backgroundColor || "none" }).shadow(a.shadow); if (0 < g && 0 < q) m[m.placed ? "animate" : "attr"](m.crisp.call({}, { x: 0, y: 0, width: g, height: q }, m.strokeWidth())); m[f ? "show" : "hide"](); b.styledMode && "none" === k.getStyle("display") && (g = q = 0); this.legendWidth = g; this.legendHeight = q; f && this.align(); this.proximate || this.positionItems(); A(this, "afterRender")
                }; a.prototype.align =
                    function (b) { void 0 === b && (b = this.chart.spacingBox); var c = this.chart, e = this.options, a = b.y; /(lth|ct|rth)/.test(this.getAlignment()) && 0 < c.titleOffset[0] ? a += c.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < c.titleOffset[2] && (a -= c.titleOffset[2]); a !== b.y && (b = q(b, { y: a })); c.hasRendered || (this.group.placed = !1); this.group.align(q(e, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : e.verticalAlign }), !0, b) }; a.prototype.handleOverflow = function (b) {
                        var c = this, e = this.chart,
                        a = e.renderer, d = this.options, h = d.y, g = "top" === d.verticalAlign, m = this.padding, f = d.maxHeight, q = d.navigation, n = k(q.animation, !0), l = q.arrowSize || 12, r = this.pages, v = this.allItems, z = function (b) { "number" === typeof b ? u.attr({ height: b }) : u && (c.clipRect = u.destroy(), c.contentGroup.clip()); c.contentGroup.div && (c.contentGroup.div.style.clip = b ? "rect(" + m + "px,9999px," + (m + b) + "px,0)" : "auto") }, A = function (b) { c[b] = a.circle(0, 0, 1.3 * l).translate(l / 2, l / 2).add(E); e.styledMode || c[b].attr("fill", "rgba(0,0,0,0.0001)"); return c[b] },
                        t, F; h = e.spacingBox.height + (g ? -h : h) - m; var E = this.nav, u = this.clipRect; "horizontal" !== d.layout || "middle" === d.verticalAlign || d.floating || (h /= 2); f && (h = Math.min(h, f)); r.length = 0; b && 0 < h && b > h && !1 !== q.enabled ? (this.clipHeight = t = Math.max(h - 20 - this.titleHeight - m, 0), this.currentPage = k(this.currentPage, 1), this.fullHeight = b, v.forEach(function (b, c) {
                            var e = b._legendItemPos[1], a = Math.round(b.legendItem.getBBox().height), d = r.length; if (!d || e - r[d - 1] > t && (F || e) !== r[d - 1]) r.push(F || e), d++; b.pageIx = d - 1; F && (v[c - 1].pageIx = d -
                                1); c === v.length - 1 && e + a - r[d - 1] > t && a <= t && (r.push(e), b.pageIx = d); e !== F && (F = e)
                        }), u || (u = c.clipRect = a.clipRect(0, m, 9999, 0), c.contentGroup.clip(u)), z(t), E || (this.nav = E = a.g().attr({ zIndex: 1 }).add(this.group), this.up = a.symbol("triangle", 0, 0, l, l).add(E), A("upTracker").on("click", function () { c.scroll(-1, n) }), this.pager = a.text("", 15, 10).addClass("highcharts-legend-navigation"), !e.styledMode && q.style && this.pager.css(q.style), this.pager.add(E), this.down = a.symbol("triangle-down", 0, 0, l, l).add(E), A("downTracker").on("click",
                            function () { c.scroll(1, n) })), c.scroll(0), b = h) : E && (z(), this.nav = E.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0); return b
                    }; a.prototype.scroll = function (c, a) {
                        var e = this, d = this.chart, h = this.pages, g = h.length, m = this.clipHeight, f = this.options.navigation, q = this.pager, n = this.padding, l = this.currentPage + c; l > g && (l = g); 0 < l && ("undefined" !== typeof a && y(a, d), this.nav.attr({ translateX: n, translateY: m + this.padding + 7 + this.titleHeight, visibility: "inherit" }), [this.up, this.upTracker].forEach(function (b) {
                            b.attr({
                                "class": 1 ===
                                    l ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                            })
                        }), q.attr({ text: l + "/" + g }), [this.down, this.downTracker].forEach(function (b) { b.attr({ x: 18 + this.pager.getBBox().width, "class": l === g ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }) }, this), d.styledMode || (this.up.attr({ fill: 1 === l ? f.inactiveColor : f.activeColor }), this.upTracker.css({ cursor: 1 === l ? "default" : "pointer" }), this.down.attr({ fill: l === g ? f.inactiveColor : f.activeColor }), this.downTracker.css({ cursor: l === g ? "default" : "pointer" })),
                            this.scrollOffset = -h[l - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = l, this.positionCheckboxes(), c = C(k(a, d.renderer.globalAnimation, !0)), b(function () { A(e, "afterScroll", { currentPage: l }) }, c.duration))
                    }; a.prototype.setItemEvents = function (b, c, a) {
                        var e = this, d = e.chart.renderer.boxWrapper, h = b instanceof D, g = "highcharts-legend-" + (h ? "point" : "series") + "-active", k = e.chart.styledMode, p = function (c) {
                            e.allItems.forEach(function (e) {
                                b !== e && [e].concat(e.linkedSeries ||
                                    []).forEach(function (b) { b.setState(c, !h) })
                            })
                        }; (a ? [c, b.legendSymbol] : [b.legendGroup]).forEach(function (a) {
                            if (a) a.on("mouseover", function () { b.visible && p("inactive"); b.setState("hover"); b.visible && d.addClass(g); k || c.css(e.options.itemHoverStyle) }).on("mouseout", function () { e.chart.styledMode || c.css(q(b.visible ? e.itemStyle : e.itemHiddenStyle)); p(""); d.removeClass(g); b.setState() }).on("click", function (c) {
                                var e = function () { b.setVisible && b.setVisible(); p(b.visible ? "inactive" : "") }; d.removeClass(g); c = { browserEvent: c };
                                b.firePointEvent ? b.firePointEvent("legendItemClick", c, e) : A(b, "legendItemClick", c, e)
                            })
                        })
                    }; a.prototype.createCheckboxForItem = function (b) { b.checkbox = c("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: b.selected, defaultChecked: b.selected }, this.options.itemCheckboxStyle, this.chart.container); d(b.checkbox, "click", function (c) { A(b.series || b, "checkboxClick", { checked: c.target.checked, item: b }, function () { b.select() }) }) }; return a
            }(); (/Trident\/7\.0/.test(w.navigator && w.navigator.userAgent) ||
                a) && u(B.prototype, "positionItem", function (b, c) { var e = this, a = function () { c._legendItemPos && b.call(e, c) }; a(); e.bubbleLegend || setTimeout(a) }); ""; return B
        }); G(f, "Core/Series/SeriesRegistry.js", [f["Core/Globals.js"], f["Core/DefaultOptions.js"], f["Core/Series/Point.js"], f["Core/Utilities.js"]], function (a, f, w, D) {
            var u = f.defaultOptions, B = D.error, C = D.extendClass, y = D.merge, t; (function (f) {
                function l(a, c) {
                    var d = u.plotOptions || {}, m = c.defaultOptions; c.prototype.pointClass || (c.prototype.pointClass = w); c.prototype.type =
                        a; m && (d[a] = m); f.seriesTypes[a] = c
                } f.seriesTypes = a.seriesTypes; f.getSeries = function (a, c) { void 0 === c && (c = {}); var d = a.options.chart; d = c.type || d.type || d.defaultSeriesType || ""; var m = f.seriesTypes[d]; f || B(17, !0, a, { missingModuleFor: d }); d = new m; "function" === typeof d.init && d.init(a, c); return d }; f.registerSeriesType = l; f.seriesType = function (a, c, g, m, n) {
                    var d = u.plotOptions || {}; c = c || ""; d[a] = y(d[c], g); l(a, C(f.seriesTypes[c] || function () { }, m)); f.seriesTypes[a].prototype.type = a; n && (f.seriesTypes[a].prototype.pointClass =
                        C(w, n)); return f.seriesTypes[a]
                }
            })(t || (t = {})); return t
        }); G(f, "Core/Chart/Chart.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Axis/Axis.js"], f["Core/FormatUtilities.js"], f["Core/Foundation.js"], f["Core/Globals.js"], f["Core/Legend/Legend.js"], f["Core/MSPointer.js"], f["Core/DefaultOptions.js"], f["Core/Pointer.js"], f["Core/Renderer/RendererRegistry.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Renderer/SVG/SVGRenderer.js"], f["Core/Time.js"], f["Core/Utilities.js"], f["Core/Renderer/HTML/AST.js"]],
            function (a, f, w, D, u, B, C, y, t, n, l, d, c, g, m) {
                var E = a.animate, z = a.animObject, A = a.setAnimation, r = w.numberFormat, q = D.registerEventOptions, k = u.charts, h = u.doc, v = u.marginNames, b = u.svg, F = u.win, e = y.defaultOptions, H = y.defaultTime, p = l.seriesTypes, x = g.addEvent, J = g.attr, M = g.cleanRecursively, I = g.createElement, L = g.css, U = g.defined, W = g.discardElement, G = g.erase, K = g.error, ba = g.extend, fa = g.find, N = g.fireEvent, ha = g.getStyle, R = g.isArray, Z = g.isNumber, Q = g.isObject, T = g.isString, S = g.merge, V = g.objectEach, O = g.pick, ca = g.pInt, da = g.relativeLength,
                ia = g.removeEvent, aa = g.splat, ea = g.syncTimeout, ja = g.uniqueKey; a = function () {
                    function a(b, c, e) {
                        this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.eventOptions = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0; this.sharedClips = {}; this.yAxis =
                            this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = void 0; this.getArgs(b, c, e)
                    } a.chart = function (b, c, e) { return new a(b, c, e) }; a.prototype.getArgs = function (b, c, e) { T(b) || b.nodeName ? (this.renderTo = b, this.init(c, e)) : this.init(b, c) }; a.prototype.init = function (b, a) {
                        var d = b.plotOptions || {}; N(this, "init", { args: arguments }, function () {
                            var h = S(e, b), g = h.chart; V(h.plotOptions, function (b, c) { Q(b) && (b.tooltip = d[c] && S(d[c].tooltip) || void 0) }); h.tooltip.userOptions = b.chart &&
                                b.chart.forExport && b.tooltip.userOptions || b.tooltip; this.userOptions = b; this.margin = []; this.spacing = []; this.bounds = { h: {}, v: {} }; this.labelCollectors = []; this.callback = a; this.isResizing = 0; this.options = h; this.axes = []; this.series = []; this.time = b.time && Object.keys(b.time).length ? new c(b.time) : u.time; this.numberFormatter = g.numberFormatter || r; this.styledMode = g.styledMode; this.hasCartesianSeries = g.showAxes; this.index = k.length; k.push(this); u.chartCount++; q(this, g); this.xAxis = []; this.yAxis = []; this.pointCount =
                                    this.colorCounter = this.symbolCounter = 0; N(this, "afterInit"); this.firstRender()
                        })
                    }; a.prototype.initSeries = function (b) { var c = this.options.chart; c = b.type || c.type || c.defaultSeriesType; var e = p[c]; e || K(17, !0, this, { missingModuleFor: c }); c = new e; "function" === typeof c.init && c.init(this, b); return c }; a.prototype.setSeriesData = function () { this.getSeriesOrderByLinks().forEach(function (b) { b.points || b.data || !b.enabledDataSorting || b.setData(b.options.data, !1) }) }; a.prototype.getSeriesOrderByLinks = function () {
                        return this.series.concat().sort(function (b,
                            c) { return b.linkedSeries.length || c.linkedSeries.length ? c.linkedSeries.length - b.linkedSeries.length : 0 })
                    }; a.prototype.orderSeries = function (b) { var c = this.series; b = b || 0; for (var e = c.length; b < e; ++b)c[b] && (c[b].index = b, c[b].name = c[b].getName()) }; a.prototype.isInsidePlot = function (b, c, e) {
                        void 0 === e && (e = {}); var a = this.inverted, d = this.plotBox, h = this.plotLeft, g = this.plotTop, k = this.scrollablePlotBox, p = 0; var m = 0; e.visiblePlotOnly && this.scrollingContainer && (m = this.scrollingContainer, p = m.scrollLeft, m = m.scrollTop);
                        var f = e.series; d = e.visiblePlotOnly && k || d; k = e.inverted ? c : b; c = e.inverted ? b : c; b = { x: k, y: c, isInsidePlot: !0 }; if (!e.ignoreX) { var q = f && (a ? f.yAxis : f.xAxis) || { pos: h, len: Infinity }; k = e.paneCoordinates ? q.pos + k : h + k; k >= Math.max(p + h, q.pos) && k <= Math.min(p + h + d.width, q.pos + q.len) || (b.isInsidePlot = !1) } !e.ignoreY && b.isInsidePlot && (a = f && (a ? f.xAxis : f.yAxis) || { pos: g, len: Infinity }, e = e.paneCoordinates ? a.pos + c : g + c, e >= Math.max(m + g, a.pos) && e <= Math.min(m + g + d.height, a.pos + a.len) || (b.isInsidePlot = !1)); N(this, "afterIsInsidePlot",
                            b); return b.isInsidePlot
                    }; a.prototype.redraw = function (b) {
                        N(this, "beforeRedraw"); var c = this.hasCartesianSeries ? this.axes : this.colorAxis || [], e = this.series, a = this.pointer, d = this.legend, h = this.userOptions.legend, g = this.renderer, k = g.isHidden(), p = [], m = this.isDirtyBox, f = this.isDirtyLegend; this.setResponsive && this.setResponsive(!1); A(this.hasRendered ? b : !1, this); k && this.temporaryDisplay(); this.layOutTitles(); for (b = e.length; b--;) {
                            var q = e[b]; if (q.options.stacking || q.options.centerInCategory) {
                                var l = !0; if (q.isDirty) {
                                    var n =
                                        !0; break
                                }
                            }
                        } if (n) for (b = e.length; b--;)q = e[b], q.options.stacking && (q.isDirty = !0); e.forEach(function (b) { b.isDirty && ("point" === b.options.legendType ? ("function" === typeof b.updateTotals && b.updateTotals(), f = !0) : h && (h.labelFormatter || h.labelFormat) && (f = !0)); b.isDirtyData && N(b, "updatedData") }); f && d && d.options.enabled && (d.render(), this.isDirtyLegend = !1); l && this.getStacks(); c.forEach(function (b) { b.updateNames(); b.setScale() }); this.getMargins(); c.forEach(function (b) { b.isDirty && (m = !0) }); c.forEach(function (b) {
                            var c =
                                b.min + "," + b.max; b.extKey !== c && (b.extKey = c, p.push(function () { N(b, "afterSetExtremes", ba(b.eventArgs, b.getExtremes())); delete b.eventArgs })); (m || l) && b.redraw()
                        }); m && this.drawChartBox(); N(this, "predraw"); e.forEach(function (b) { (m || b.isDirty) && b.visible && b.redraw(); b.isDirtyData = !1 }); a && a.reset(!0); g.draw(); N(this, "redraw"); N(this, "render"); k && this.temporaryDisplay(!0); p.forEach(function (b) { b.call() })
                    }; a.prototype.get = function (b) {
                        function c(c) { return c.id === b || c.options && c.options.id === b } for (var e = this.series,
                            a = fa(this.axes, c) || fa(this.series, c), d = 0; !a && d < e.length; d++)a = fa(e[d].points || [], c); return a
                    }; a.prototype.getAxes = function () { var b = this, c = this.options, e = c.xAxis = aa(c.xAxis || {}); c = c.yAxis = aa(c.yAxis || {}); N(this, "getAxes"); e.forEach(function (b, c) { b.index = c; b.isX = !0 }); c.forEach(function (b, c) { b.index = c }); e.concat(c).forEach(function (c) { new f(b, c) }); N(this, "afterGetAxes") }; a.prototype.getSelectedPoints = function () {
                        return this.series.reduce(function (b, c) {
                            c.getPointsCollection().forEach(function (c) {
                                O(c.selectedStaging,
                                    c.selected) && b.push(c)
                            }); return b
                        }, [])
                    }; a.prototype.getSelectedSeries = function () { return this.series.filter(function (b) { return b.selected }) }; a.prototype.setTitle = function (b, c, e) { this.applyDescription("title", b); this.applyDescription("subtitle", c); this.applyDescription("caption", void 0); this.layOutTitles(e) }; a.prototype.applyDescription = function (b, c) {
                        var e = this, a = "title" === b ? { color: "#333333", fontSize: this.options.isStock ? "16px" : "18px" } : { color: "#666666" }; a = this.options[b] = S(!this.styledMode && { style: a },
                            this.options[b], c); var d = this[b]; d && c && (this[b] = d = d.destroy()); a && !d && (d = this.renderer.text(a.text, 0, 0, a.useHTML).attr({ align: a.align, "class": "highcharts-" + b, zIndex: a.zIndex || 4 }).add(), d.update = function (c) { e[{ title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }[b]](c) }, this.styledMode || d.css(a.style), this[b] = d)
                    }; a.prototype.layOutTitles = function (b) {
                        var c = [0, 0, 0], e = this.renderer, a = this.spacingBox;["title", "subtitle", "caption"].forEach(function (b) {
                            var d = this[b], h = this.options[b], g = h.verticalAlign ||
                                "top"; b = "title" === b ? "top" === g ? -3 : 0 : "top" === g ? c[0] + 2 : 0; var k; if (d) { this.styledMode || (k = h.style && h.style.fontSize); k = e.fontMetrics(k, d).b; d.css({ width: (h.width || a.width + (h.widthAdjust || 0)) + "px" }); var p = Math.round(d.getBBox(h.useHTML).height); d.align(ba({ y: "bottom" === g ? k : b + k, height: p }, h), !1, "spacingBox"); h.floating || ("top" === g ? c[0] = Math.ceil(c[0] + p) : "bottom" === g && (c[2] = Math.ceil(c[2] + p))) }
                        }, this); c[0] && "top" === (this.options.title.verticalAlign || "top") && (c[0] += this.options.title.margin); c[2] && "bottom" ===
                            this.options.caption.verticalAlign && (c[2] += this.options.caption.margin); var d = !this.titleOffset || this.titleOffset.join(",") !== c.join(","); this.titleOffset = c; N(this, "afterLayOutTitles"); !this.isDirtyBox && d && (this.isDirtyBox = this.isDirtyLegend = d, this.hasRendered && O(b, !0) && this.isDirtyBox && this.redraw())
                    }; a.prototype.getChartSize = function () {
                        var b = this.options.chart, c = b.width; b = b.height; var e = this.renderTo; U(c) || (this.containerWidth = ha(e, "width")); U(b) || (this.containerHeight = ha(e, "height")); this.chartWidth =
                            Math.max(0, c || this.containerWidth || 600); this.chartHeight = Math.max(0, da(b, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400))
                    }; a.prototype.temporaryDisplay = function (b) {
                        var c = this.renderTo; if (b) for (; c && c.style;)c.hcOrigStyle && (L(c, c.hcOrigStyle), delete c.hcOrigStyle), c.hcOrigDetached && (h.body.removeChild(c), c.hcOrigDetached = !1), c = c.parentNode; else for (; c && c.style;) {
                            h.body.contains(c) || c.parentNode || (c.hcOrigDetached = !0, h.body.appendChild(c)); if ("none" === ha(c, "display", !1) || c.hcOricDetached) c.hcOrigStyle =
                                { display: c.style.display, height: c.style.height, overflow: c.style.overflow }, b = { display: "block", overflow: "hidden" }, c !== this.renderTo && (b.height = 0), L(c, b), c.offsetWidth || c.style.setProperty("display", "block", "important"); c = c.parentNode; if (c === h.body) break
                        }
                    }; a.prototype.setClassName = function (b) { this.container.className = "highcharts-container " + (b || "") }; a.prototype.getContainer = function () {
                        var c = this.options, e = c.chart, a = ja(), g, p = this.renderTo; p || (this.renderTo = p = e.renderTo); T(p) && (this.renderTo = p = h.getElementById(p));
                        p || K(13, !0, this); var f = ca(J(p, "data-highcharts-chart")); Z(f) && k[f] && k[f].hasRendered && k[f].destroy(); J(p, "data-highcharts-chart", this.index); p.innerHTML = m.emptyHTML; e.skipClone || p.offsetWidth || this.temporaryDisplay(); this.getChartSize(); f = this.chartWidth; var q = this.chartHeight; L(p, { overflow: "hidden" }); this.styledMode || (g = ba({
                            position: "relative", overflow: "hidden", width: f + "px", height: q + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none",
                            "touch-action": "manipulation", outline: "none"
                        }, e.style || {})); this.container = a = I("div", { id: a }, g, p); this._cursor = a.style.cursor; this.renderer = new (e.renderer || !b ? n.getRendererType(e.renderer) : d)(a, f, q, void 0, e.forExport, c.exporting && c.exporting.allowHTML, this.styledMode); A(void 0, this); this.setClassName(e.className); if (this.styledMode) for (var l in c.defs) this.renderer.definition(c.defs[l]); else this.renderer.setStyle(e.style); this.renderer.chartIndex = this.index; N(this, "afterGetContainer")
                    }; a.prototype.getMargins =
                        function (b) { var c = this.spacing, e = this.margin, a = this.titleOffset; this.resetMargins(); a[0] && !U(e[0]) && (this.plotTop = Math.max(this.plotTop, a[0] + c[0])); a[2] && !U(e[2]) && (this.marginBottom = Math.max(this.marginBottom, a[2] + c[2])); this.legend && this.legend.display && this.legend.adjustMargins(e, c); N(this, "getMargins"); b || this.getAxisMargins() }; a.prototype.getAxisMargins = function () {
                            var b = this, c = b.axisOffset = [0, 0, 0, 0], e = b.colorAxis, a = b.margin, d = function (b) { b.forEach(function (b) { b.visible && b.getOffset() }) }; b.hasCartesianSeries ?
                                d(b.axes) : e && e.length && d(e); v.forEach(function (e, d) { U(a[d]) || (b[e] += c[d]) }); b.setChartSize()
                        }; a.prototype.reflow = function (b) {
                            var c = this, e = c.options.chart, a = c.renderTo, d = U(e.width) && U(e.height), k = e.width || ha(a, "width"); e = e.height || ha(a, "height"); a = b ? b.target : F; delete c.pointer.chartPosition; if (!d && !c.isPrinting && k && e && (a === F || a === h)) {
                                if (k !== c.containerWidth || e !== c.containerHeight) g.clearTimeout(c.reflowTimeout), c.reflowTimeout = ea(function () { c.container && c.setSize(void 0, void 0, !1) }, b ? 100 : 0); c.containerWidth =
                                    k; c.containerHeight = e
                            }
                        }; a.prototype.setReflow = function (b) { var c = this; !1 === b || this.unbindReflow ? !1 === b && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = x(F, "resize", function (b) { c.options && c.reflow(b) }), x(this, "destroy", this.unbindReflow)) }; a.prototype.setSize = function (b, c, e) {
                            var a = this, d = a.renderer; a.isResizing += 1; A(e, a); e = d.globalAnimation; a.oldChartHeight = a.chartHeight; a.oldChartWidth = a.chartWidth; "undefined" !== typeof b && (a.options.chart.width = b); "undefined" !== typeof c &&
                                (a.options.chart.height = c); a.getChartSize(); a.styledMode || (e ? E : L)(a.container, { width: a.chartWidth + "px", height: a.chartHeight + "px" }, e); a.setChartSize(!0); d.setSize(a.chartWidth, a.chartHeight, e); a.axes.forEach(function (b) { b.isDirty = !0; b.setScale() }); a.isDirtyLegend = !0; a.isDirtyBox = !0; a.layOutTitles(); a.getMargins(); a.redraw(e); a.oldChartHeight = null; N(a, "resize"); ea(function () { a && N(a, "endResize", null, function () { --a.isResizing }) }, z(e).duration)
                        }; a.prototype.setChartSize = function (b) {
                            var c = this.inverted,
                            e = this.renderer, a = this.chartWidth, d = this.chartHeight, h = this.options.chart, g = this.spacing, k = this.clipOffset, p, m, f, q; this.plotLeft = p = Math.round(this.plotLeft); this.plotTop = m = Math.round(this.plotTop); this.plotWidth = f = Math.max(0, Math.round(a - p - this.marginRight)); this.plotHeight = q = Math.max(0, Math.round(d - m - this.marginBottom)); this.plotSizeX = c ? q : f; this.plotSizeY = c ? f : q; this.plotBorderWidth = h.plotBorderWidth || 0; this.spacingBox = e.spacingBox = { x: g[3], y: g[0], width: a - g[3] - g[1], height: d - g[0] - g[2] }; this.plotBox =
                                e.plotBox = { x: p, y: m, width: f, height: q }; c = 2 * Math.floor(this.plotBorderWidth / 2); a = Math.ceil(Math.max(c, k[3]) / 2); d = Math.ceil(Math.max(c, k[0]) / 2); this.clipBox = { x: a, y: d, width: Math.floor(this.plotSizeX - Math.max(c, k[1]) / 2 - a), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(c, k[2]) / 2 - d)) }; b || (this.axes.forEach(function (b) { b.setAxisSize(); b.setAxisTranslation() }), e.alignElements()); N(this, "afterSetChartSize", { skipAxes: b })
                        }; a.prototype.resetMargins = function () {
                            N(this, "resetMargins"); var b = this, c = b.options.chart;
                            ["margin", "spacing"].forEach(function (e) { var a = c[e], d = Q(a) ? a : [a, a, a, a];["Top", "Right", "Bottom", "Left"].forEach(function (a, h) { b[e][h] = O(c[e + a], d[h]) }) }); v.forEach(function (c, e) { b[c] = O(b.margin[e], b.spacing[e]) }); b.axisOffset = [0, 0, 0, 0]; b.clipOffset = [0, 0, 0, 0]
                        }; a.prototype.drawChartBox = function () {
                            var b = this.options.chart, c = this.renderer, e = this.chartWidth, a = this.chartHeight, d = this.styledMode, h = this.plotBGImage, g = b.backgroundColor, k = b.plotBackgroundColor, p = b.plotBackgroundImage, m = this.plotLeft, f = this.plotTop,
                            q = this.plotWidth, l = this.plotHeight, n = this.plotBox, r = this.clipRect, v = this.clipBox, x = this.chartBackground, z = this.plotBackground, A = this.plotBorder, t, F = "animate"; x || (this.chartBackground = x = c.rect().addClass("highcharts-background").add(), F = "attr"); if (d) var E = t = x.strokeWidth(); else { E = b.borderWidth || 0; t = E + (b.shadow ? 8 : 0); g = { fill: g || "none" }; if (E || x["stroke-width"]) g.stroke = b.borderColor, g["stroke-width"] = E; x.attr(g).shadow(b.shadow) } x[F]({ x: t / 2, y: t / 2, width: e - t - E % 2, height: a - t - E % 2, r: b.borderRadius }); F = "animate";
                            z || (F = "attr", this.plotBackground = z = c.rect().addClass("highcharts-plot-background").add()); z[F](n); d || (z.attr({ fill: k || "none" }).shadow(b.plotShadow), p && (h ? (p !== h.attr("href") && h.attr("href", p), h.animate(n)) : this.plotBGImage = c.image(p, m, f, q, l).add())); r ? r.animate({ width: v.width, height: v.height }) : this.clipRect = c.clipRect(v); F = "animate"; A || (F = "attr", this.plotBorder = A = c.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()); d || A.attr({
                                stroke: b.plotBorderColor, "stroke-width": b.plotBorderWidth ||
                                    0, fill: "none"
                            }); A[F](A.crisp({ x: m, y: f, width: q, height: l }, -A.strokeWidth())); this.isDirtyBox = !1; N(this, "afterDrawChartBox")
                        }; a.prototype.propFromSeries = function () { var b = this, c = b.options.chart, e = b.options.series, a, d, h;["inverted", "angular", "polar"].forEach(function (g) { d = p[c.type || c.defaultSeriesType]; h = c[g] || d && d.prototype[g]; for (a = e && e.length; !h && a--;)(d = p[e[a].type]) && d.prototype[g] && (h = !0); b[g] = h }) }; a.prototype.linkSeries = function () {
                            var b = this, c = b.series; c.forEach(function (b) {
                                b.linkedSeries.length =
                                0
                            }); c.forEach(function (c) { var e = c.options.linkedTo; T(e) && (e = ":previous" === e ? b.series[c.index - 1] : b.get(e)) && e.linkedParent !== c && (e.linkedSeries.push(c), c.linkedParent = e, e.enabledDataSorting && c.setDataSortingOptions(), c.visible = O(c.options.visible, e.options.visible, c.visible)) }); N(this, "afterLinkSeries")
                        }; a.prototype.renderSeries = function () { this.series.forEach(function (b) { b.translate(); b.render() }) }; a.prototype.renderLabels = function () {
                            var b = this, c = b.options.labels; c.items && c.items.forEach(function (e) {
                                var a =
                                    ba(c.style, e.style), d = ca(a.left) + b.plotLeft, h = ca(a.top) + b.plotTop + 12; delete a.left; delete a.top; b.renderer.text(e.html, d, h).attr({ zIndex: 2 }).css(a).add()
                            })
                        }; a.prototype.render = function () {
                            var b = this.axes, c = this.colorAxis, e = this.renderer, a = this.options, d = function (b) { b.forEach(function (b) { b.visible && b.render() }) }, h = 0; this.setTitle(); this.legend = new B(this, a.legend); this.getStacks && this.getStacks(); this.getMargins(!0); this.setChartSize(); a = this.plotWidth; b.some(function (b) {
                                if (b.horiz && b.visible && b.options.labels.enabled &&
                                    b.series.length) return h = 21, !0
                            }); var g = this.plotHeight = Math.max(this.plotHeight - h, 0); b.forEach(function (b) { b.setScale() }); this.getAxisMargins(); var k = 1.1 < a / this.plotWidth, p = 1.05 < g / this.plotHeight; if (k || p) b.forEach(function (b) { (b.horiz && k || !b.horiz && p) && b.setTickInterval(!0) }), this.getMargins(); this.drawChartBox(); this.hasCartesianSeries ? d(b) : c && c.length && d(c); this.seriesGroup || (this.seriesGroup = e.g("series-group").attr({ zIndex: 3 }).add()); this.renderSeries(); this.renderLabels(); this.addCredits(); this.setResponsive &&
                                this.setResponsive(); this.hasRendered = !0
                        }; a.prototype.addCredits = function (b) { var c = this, e = S(!0, this.options.credits, b); e.enabled && !this.credits && (this.credits = this.renderer.text(e.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () { e.href && (F.location.href = e.href) }).attr({ align: e.position.align, zIndex: 8 }), c.styledMode || this.credits.css(e.style), this.credits.add().align(e.position), this.credits.update = function (b) { c.credits = c.credits.destroy(); c.addCredits(b) }) }; a.prototype.destroy =
                            function () {
                                var b = this, c = b.axes, e = b.series, a = b.container, d = a && a.parentNode, h; N(b, "destroy"); b.renderer.forExport ? G(k, b) : k[b.index] = void 0; u.chartCount--; b.renderTo.removeAttribute("data-highcharts-chart"); ia(b); for (h = c.length; h--;)c[h] = c[h].destroy(); this.scroller && this.scroller.destroy && this.scroller.destroy(); for (h = e.length; h--;)e[h] = e[h].destroy(); "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (c) {
                                    var e =
                                        b[c]; e && e.destroy && (b[c] = e.destroy())
                                }); a && (a.innerHTML = m.emptyHTML, ia(a), d && W(a)); V(b, function (c, e) { delete b[e] })
                            }; a.prototype.firstRender = function () {
                                var b = this, c = b.options; if (!b.isReadyToRender || b.isReadyToRender()) {
                                    b.getContainer(); b.resetMargins(); b.setChartSize(); b.propFromSeries(); b.getAxes(); (R(c.series) ? c.series : []).forEach(function (c) { b.initSeries(c) }); b.linkSeries(); b.setSeriesData(); N(b, "beforeRender"); t && (C.isRequired() ? b.pointer = new C(b, c) : b.pointer = new t(b, c)); b.render(); b.pointer.getChartPosition();
                                    if (!b.renderer.imgCount && !b.hasLoaded) b.onload(); b.temporaryDisplay(!0)
                                }
                            }; a.prototype.onload = function () { this.callbacks.concat([this.callback]).forEach(function (b) { b && "undefined" !== typeof this.index && b.apply(this, [this]) }, this); N(this, "load"); N(this, "render"); U(this.index) && this.setReflow(this.options.chart.reflow); this.warnIfA11yModuleNotLoaded(); this.hasLoaded = !0 }; a.prototype.warnIfA11yModuleNotLoaded = function () {
                                var b = this; setTimeout(function () {
                                    var c = b && b.options; !c || b.accessibility || c.accessibility &&
                                        !1 === c.accessibility.enabled || K('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.', !1, b)
                                }, 100)
                            }; a.prototype.addSeries = function (b, c, e) {
                                var a = this, d; b && (c = O(c, !0), N(a, "addSeries", { options: b }, function () {
                                    d = a.initSeries(b); a.isDirtyLegend = !0; a.linkSeries(); d.enabledDataSorting && d.setData(b.data,
                                        !1); N(a, "afterAddSeries", { series: d }); c && a.redraw(e)
                                })); return d
                            }; a.prototype.addAxis = function (b, c, e, a) { return this.createAxis(c ? "xAxis" : "yAxis", { axis: b, redraw: e, animation: a }) }; a.prototype.addColorAxis = function (b, c, e) { return this.createAxis("colorAxis", { axis: b, redraw: c, animation: e }) }; a.prototype.createAxis = function (b, c) { b = new f(this, S(c.axis, { index: this[b].length, isX: "xAxis" === b })); O(c.redraw, !0) && this.redraw(c.animation); return b }; a.prototype.showLoading = function (b) {
                                var c = this, e = c.options, a = e.loading,
                                d = function () { h && L(h, { left: c.plotLeft + "px", top: c.plotTop + "px", width: c.plotWidth + "px", height: c.plotHeight + "px" }) }, h = c.loadingDiv, g = c.loadingSpan; h || (c.loadingDiv = h = I("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, c.container)); g || (c.loadingSpan = g = I("span", { className: "highcharts-loading-inner" }, null, h), x(c, "redraw", d)); h.className = "highcharts-loading"; m.setElementHTML(g, O(b, e.lang.loading, "")); c.styledMode || (L(h, ba(a.style, { zIndex: 10 })), L(g, a.labelStyle), c.loadingShown || (L(h, {
                                    opacity: 0,
                                    display: ""
                                }), E(h, { opacity: a.style.opacity || .5 }, { duration: a.showDuration || 0 }))); c.loadingShown = !0; d()
                            }; a.prototype.hideLoading = function () { var b = this.options, c = this.loadingDiv; c && (c.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || E(c, { opacity: 0 }, { duration: b.loading.hideDuration || 100, complete: function () { L(c, { display: "none" }) } })); this.loadingShown = !1 }; a.prototype.update = function (b, e, a, d) {
                                var h = this, g = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" },
                                k = b.isResponsiveOptions, p = [], m, f; N(h, "update", { options: b }); k || h.setResponsive(!1, !0); b = M(b, h.options); h.userOptions = S(h.userOptions, b); var l = b.chart; if (l) {
                                    S(!0, h.options.chart, l); "className" in l && h.setClassName(l.className); "reflow" in l && h.setReflow(l.reflow); if ("inverted" in l || "polar" in l || "type" in l) { h.propFromSeries(); var n = !0 } "alignTicks" in l && (n = !0); "events" in l && q(this, l); V(l, function (b, c) {
                                        -1 !== h.propsRequireUpdateSeries.indexOf("chart." + c) && (m = !0); -1 !== h.propsRequireDirtyBox.indexOf(c) && (h.isDirtyBox =
                                            !0); -1 !== h.propsRequireReflow.indexOf(c) && (k ? h.isDirtyBox = !0 : f = !0)
                                    }); !h.styledMode && l.style && h.renderer.setStyle(h.options.chart.style || {})
                                } !h.styledMode && b.colors && (this.options.colors = b.colors); b.time && (this.time === H && (this.time = new c(b.time)), S(!0, h.options.time, b.time)); V(b, function (c, e) {
                                    if (h[e] && "function" === typeof h[e].update) h[e].update(c, !1); else if ("function" === typeof h[g[e]]) h[g[e]](c); else "colors" !== e && -1 === h.collectionsWithUpdate.indexOf(e) && S(!0, h.options[e], b[e]); "chart" !== e && -1 !== h.propsRequireUpdateSeries.indexOf(e) &&
                                        (m = !0)
                                }); this.collectionsWithUpdate.forEach(function (c) {
                                    if (b[c]) {
                                        var e = []; h[c].forEach(function (b, c) { b.options.isInternal || e.push(O(b.options.index, c)) }); aa(b[c]).forEach(function (b, d) { var g = U(b.id), k; g && (k = h.get(b.id)); !k && h[c] && (k = h[c][e ? e[d] : d]) && g && U(k.options.id) && (k = void 0); k && k.coll === c && (k.update(b, !1), a && (k.touched = !0)); !k && a && h.collectionsWithInit[c] && (h.collectionsWithInit[c][0].apply(h, [b].concat(h.collectionsWithInit[c][1] || []).concat([!1])).touched = !0) }); a && h[c].forEach(function (b) {
                                            b.touched ||
                                            b.options.isInternal ? delete b.touched : p.push(b)
                                        })
                                    }
                                }); p.forEach(function (b) { b.chart && b.remove && b.remove(!1) }); n && h.axes.forEach(function (b) { b.update({}, !1) }); m && h.getSeriesOrderByLinks().forEach(function (b) { b.chart && b.update({}, !1) }, this); n = l && l.width; l = l && (T(l.height) ? da(l.height, n || h.chartWidth) : l.height); f || Z(n) && n !== h.chartWidth || Z(l) && l !== h.chartHeight ? h.setSize(n, l, d) : O(e, !0) && h.redraw(d); N(h, "afterUpdate", { options: b, redraw: e, animation: d })
                            }; a.prototype.setSubtitle = function (b, c) {
                                this.applyDescription("subtitle",
                                    b); this.layOutTitles(c)
                            }; a.prototype.setCaption = function (b, c) { this.applyDescription("caption", b); this.layOutTitles(c) }; a.prototype.showResetZoom = function () {
                                function b() { c.zoomOut() } var c = this, a = e.lang, d = c.options.chart.resetZoomButton, h = d.theme, g = "chart" === d.relativeTo || "spacingBox" === d.relativeTo ? null : "scrollablePlotBox"; N(this, "beforeShowResetZoom", null, function () {
                                    c.resetZoomButton = c.renderer.button(a.resetZoom, null, null, b, h).attr({ align: d.position.align, title: a.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(d.position,
                                        !1, g)
                                }); N(this, "afterShowResetZoom")
                            }; a.prototype.zoomOut = function () { N(this, "selection", { resetSelection: !0 }, this.zoom) }; a.prototype.zoom = function (b) {
                                var c = this, e = c.pointer, a = c.inverted ? e.mouseDownX : e.mouseDownY, d = !1, h; !b || b.resetSelection ? (c.axes.forEach(function (b) { h = b.zoom() }), e.initiated = !1) : b.xAxis.concat(b.yAxis).forEach(function (b) {
                                    var g = b.axis, k = c.inverted ? g.left : g.top, p = c.inverted ? k + g.width : k + g.height, m = g.isXAxis, f = !1; if (!m && a >= k && a <= p || m || !U(a)) f = !0; e[m ? "zoomX" : "zoomY"] && f && (h = g.zoom(b.min,
                                        b.max), g.displayBtn && (d = !0))
                                }); var g = c.resetZoomButton; d && !g ? c.showResetZoom() : !d && Q(g) && (c.resetZoomButton = g.destroy()); h && c.redraw(O(c.options.chart.animation, b && b.animation, 100 > c.pointCount))
                            }; a.prototype.pan = function (b, c) {
                                var e = this, a = e.hoverPoints; c = "object" === typeof c ? c : { enabled: c, type: "x" }; var d = e.options.chart, h = e.options.mapNavigation && e.options.mapNavigation.enabled; d && d.panning && (d.panning = c); var g = c.type, k; N(this, "pan", { originalEvent: b }, function () {
                                    a && a.forEach(function (b) { b.setState() });
                                    var c = e.xAxis; "xy" === g ? c = c.concat(e.yAxis) : "y" === g && (c = e.yAxis); var d = {}; c.forEach(function (c) {
                                        if (c.options.panningEnabled && !c.options.isInternal) {
                                            var a = c.horiz, p = b[a ? "chartX" : "chartY"]; a = a ? "mouseDownX" : "mouseDownY"; var m = e[a], f = c.minPointOffset || 0, q = c.reversed && !e.inverted || !c.reversed && e.inverted ? -1 : 1, l = c.getExtremes(), n = c.toValue(m - p, !0) + f * q, r = c.toValue(m + c.len - p, !0) - (f * q || c.isXAxis && c.pointRangePadding || 0), v = r < n; q = c.hasVerticalPanning(); m = v ? r : n; n = v ? n : r; var x = c.panningState; !q || c.isXAxis || x && !x.isDirty ||
                                                c.series.forEach(function (b) { var c = b.getProcessedData(!0); c = b.getExtremes(c.yData, !0); x || (x = { startMin: Number.MAX_VALUE, startMax: -Number.MAX_VALUE }); Z(c.dataMin) && Z(c.dataMax) && (x.startMin = Math.min(O(b.options.threshold, Infinity), c.dataMin, x.startMin), x.startMax = Math.max(O(b.options.threshold, -Infinity), c.dataMax, x.startMax)) }); q = Math.min(O(x && x.startMin, l.dataMin), f ? l.min : c.toValue(c.toPixels(l.min) - c.minPixelPadding)); r = Math.max(O(x && x.startMax, l.dataMax), f ? l.max : c.toValue(c.toPixels(l.max) + c.minPixelPadding));
                                            c.panningState = x; c.isOrdinal || (f = q - m, 0 < f && (n += f, m = q), f = n - r, 0 < f && (n = r, m -= f), c.series.length && m !== l.min && n !== l.max && m >= q && n <= r && (c.setExtremes(m, n, !1, !1, { trigger: "pan" }), e.resetZoomButton || h || m === q || n === r || !g.match("y") || (e.showResetZoom(), c.displayBtn = !1), k = !0), d[a] = p)
                                        }
                                    }); V(d, function (b, c) { e[c] = b }); k && e.redraw(!1); L(e.container, { cursor: "move" })
                                })
                            }; return a
                }(); ba(a.prototype, {
                    callbacks: [], collectionsWithInit: { xAxis: [a.prototype.addAxis, [!0]], yAxis: [a.prototype.addAxis, [!1]], series: [a.prototype.addSeries] },
                    collectionsWithUpdate: ["xAxis", "yAxis", "series"], propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "), propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "), propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
                });
                ""; return a
            }); G(f, "Core/Legend/LegendSymbol.js", [f["Core/Utilities.js"]], function (a) {
                var f = a.merge, w = a.pick, D; (function (a) {
                    a.drawLineMarker = function (a) {
                        var u = this.options, y = a.symbolWidth, t = a.symbolHeight, n = t / 2, l = this.chart.renderer, d = this.legendGroup; a = a.baseline - Math.round(.3 * a.fontMetrics.b); var c = {}, g = u.marker; this.chart.styledMode || (c = { "stroke-width": u.lineWidth || 0 }, u.dashStyle && (c.dashstyle = u.dashStyle)); this.legendLine = l.path([["M", 0, a], ["L", y, a]]).addClass("highcharts-graph").attr(c).add(d);
                        g && !1 !== g.enabled && y && (u = Math.min(w(g.radius, n), n), 0 === this.symbol.indexOf("url") && (g = f(g, { width: t, height: t }), u = 0), this.legendSymbol = y = l.symbol(this.symbol, y / 2 - u, a - u, 2 * u, 2 * u, g).addClass("highcharts-point").add(d), y.isMarker = !0)
                    }; a.drawRectangle = function (a, f) { var u = a.symbolHeight, t = a.options.squareSymbol; f.legendSymbol = this.chart.renderer.rect(t ? (a.symbolWidth - u) / 2 : 0, a.baseline - u + 1, t ? u : a.symbolWidth, u, w(a.options.symbolRadius, u / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(f.legendGroup) }
                })(D ||
                    (D = {})); return D
            }); G(f, "Core/Series/SeriesDefaults.js", [], function () {
                return {
                    lineWidth: 2, allowPointSelect: !1, crisp: !0, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, marker: { enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: { normal: { animation: !0 }, hover: { animation: { duration: 50 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: {
                        animation: {}, align: "center", defer: !0, formatter: function () {
                            var a = this.series.chart.numberFormatter;
                            return "number" !== typeof this.y ? "" : a(this.y, -1)
                        }, padding: 5, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0
                    }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: !0, states: { normal: { animation: !0 }, hover: { animation: { duration: 50 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: .25 } }, select: { animation: { duration: 0 } }, inactive: { animation: { duration: 50 }, opacity: .2 } }, stickyTracking: !0, turboThreshold: 1E3, findNearestPointBy: "x"
                }
            }); G(f, "Core/Series/Series.js",
                [f["Core/Animation/AnimationUtilities.js"], f["Core/DefaultOptions.js"], f["Core/Foundation.js"], f["Core/Globals.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Series/Point.js"], f["Core/Series/SeriesDefaults.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Utilities.js"]], function (a, f, w, D, u, B, C, y, t, n) {
                    var l = a.animObject, d = a.setAnimation, c = f.defaultOptions, g = w.registerEventOptions, m = D.hasTouch, E = D.svg, z = D.win, A = y.seriesTypes, r = n.addEvent, q = n.arrayMax, k = n.arrayMin, h =
                        n.clamp, v = n.cleanRecursively, b = n.correctFloat, F = n.defined, e = n.erase, H = n.error, p = n.extend, x = n.find, J = n.fireEvent, M = n.getNestedProperty, I = n.isArray, L = n.isNumber, U = n.isString, W = n.merge, G = n.objectEach, K = n.pick, ba = n.removeEvent, fa = n.splat, N = n.syncTimeout; a = function () {
                            function a() {
                                this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions = this.processedYData = this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i =
                                    void 0
                            } a.prototype.init = function (b, c) {
                                J(this, "init", { options: c }); var a = this, e = b.series; this.eventsToUnbind = []; a.chart = b; a.options = a.setOptions(c); c = a.options; a.linkedSeries = []; a.bindAxes(); p(a, { name: c.name, state: "", visible: !1 !== c.visible, selected: !0 === c.selected }); g(this, c); var d = c.events; if (d && d.click || c.point && c.point.events && c.point.events.click || c.allowPointSelect) b.runTrackerClick = !0; a.getColor(); a.getSymbol(); a.parallelArrays.forEach(function (b) { a[b + "Data"] || (a[b + "Data"] = []) }); a.isCartesian &&
                                    (b.hasCartesianSeries = !0); var h; e.length && (h = e[e.length - 1]); a._i = K(h && h._i, -1) + 1; a.opacity = a.options.opacity; b.orderSeries(this.insert(e)); c.dataSorting && c.dataSorting.enabled ? a.setDataSortingOptions() : a.points || a.data || a.setData(c.data, !1); J(this, "afterInit")
                            }; a.prototype.is = function (b) { return A[b] && this instanceof A[b] }; a.prototype.insert = function (b) {
                                var c = this.options.index, a; if (L(c)) {
                                    for (a = b.length; a--;)if (c >= K(b[a].options.index, b[a]._i)) { b.splice(a + 1, 0, this); break } -1 === a && b.unshift(this); a +=
                                        1
                                } else b.push(this); return K(a, b.length - 1)
                            }; a.prototype.bindAxes = function () { var b = this, c = b.options, a = b.chart, e; J(this, "bindAxes", null, function () { (b.axisTypes || []).forEach(function (d) { var h = 0; a[d].forEach(function (a) { e = a.options; if (c[d] === h && !e.isInternal || "undefined" !== typeof c[d] && c[d] === e.id || "undefined" === typeof c[d] && 0 === e.index) b.insert(a.series), b[d] = a, a.isDirty = !0; e.isInternal || h++ }); b[d] || b.optionalAxis === d || H(18, !0, a) }) }); J(this, "afterBindAxes") }; a.prototype.updateParallelArrays = function (b,
                                c) { var a = b.series, e = arguments, d = L(c) ? function (e) { var d = "y" === e && a.toYData ? a.toYData(b) : b[e]; a[e + "Data"][c] = d } : function (b) { Array.prototype[c].apply(a[b + "Data"], Array.prototype.slice.call(e, 2)) }; a.parallelArrays.forEach(d) }; a.prototype.hasData = function () { return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length }; a.prototype.autoIncrement = function (b) {
                                    var c = this.options, a = c.pointIntervalUnit, e = c.relativeXValue, d = this.chart.time,
                                    h = this.xIncrement, g; h = K(h, c.pointStart, 0); this.pointInterval = g = K(this.pointInterval, c.pointInterval, 1); e && L(b) && (g *= b); a && (c = new d.Date(h), "day" === a ? d.set("Date", c, d.get("Date", c) + g) : "month" === a ? d.set("Month", c, d.get("Month", c) + g) : "year" === a && d.set("FullYear", c, d.get("FullYear", c) + g), g = c.getTime() - h); if (e && L(b)) return h + g; this.xIncrement = h + g; return h
                                }; a.prototype.setDataSortingOptions = function () {
                                    var b = this.options; p(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 }); F(b.pointRange) ||
                                        (b.pointRange = 1)
                                }; a.prototype.setOptions = function (b) {
                                    var a = this.chart, e = a.options, d = e.plotOptions, h = a.userOptions || {}; b = W(b); a = a.styledMode; var g = { plotOptions: d, userOptions: b }; J(this, "setOptions", g); var k = g.plotOptions[this.type], p = h.plotOptions || {}; this.userOptions = g.userOptions; h = W(k, d.series, h.plotOptions && h.plotOptions[this.type], b); this.tooltipOptions = W(c.tooltip, c.plotOptions.series && c.plotOptions.series.tooltip, c.plotOptions[this.type].tooltip, e.tooltip.userOptions, d.series && d.series.tooltip,
                                        d[this.type].tooltip, b.tooltip); this.stickyTracking = K(b.stickyTracking, p[this.type] && p[this.type].stickyTracking, p.series && p.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : h.stickyTracking); null === k.marker && delete h.marker; this.zoneAxis = h.zoneAxis; d = this.zones = (h.zones || []).slice(); !h.negativeColor && !h.negativeFillColor || h.zones || (e = { value: h[this.zoneAxis + "Threshold"] || h.threshold || 0, className: "highcharts-negative" }, a || (e.color = h.negativeColor, e.fillColor = h.negativeFillColor),
                                            d.push(e)); d.length && F(d[d.length - 1].value) && d.push(a ? {} : { color: this.color, fillColor: this.fillColor }); J(this, "afterSetOptions", { options: h }); return h
                                }; a.prototype.getName = function () { return K(this.options.name, "Series " + (this.index + 1)) }; a.prototype.getCyclic = function (b, c, a) {
                                    var e = this.chart, d = this.userOptions, h = b + "Index", g = b + "Counter", k = a ? a.length : K(e.options.chart[b + "Count"], e[b + "Count"]); if (!c) { var p = K(d[h], d["_" + h]); F(p) || (e.series.length || (e[g] = 0), d["_" + h] = p = e[g] % k, e[g] += 1); a && (c = a[p]) } "undefined" !==
                                        typeof p && (this[h] = p); this[b] = c
                                }; a.prototype.getColor = function () { this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || c.plotOptions[this.type].color, this.chart.options.colors) }; a.prototype.getPointsCollection = function () { return (this.hasGroupedData ? this.points : this.data) || [] }; a.prototype.getSymbol = function () { this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols) }; a.prototype.findPointIndex = function (b,
                                    c) {
                                        var a = b.id, e = b.x, d = this.points, h = this.options.dataSorting, g, k; if (a) h = this.chart.get(a), h instanceof B && (g = h); else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) if (g = function (c) { return !c.touched && c.index === b.index }, h && h.matchByName ? g = function (c) { return !c.touched && c.name === b.name } : this.options.relativeXValue && (g = function (c) { return !c.touched && c.options.x === b.x }), g = x(d, g), !g) return; if (g) { var p = g && g.index; "undefined" !== typeof p && (k = !0) } "undefined" === typeof p && L(e) && (p = this.xData.indexOf(e,
                                            c)); -1 !== p && "undefined" !== typeof p && this.cropped && (p = p >= this.cropStart ? p - this.cropStart : p); !k && L(p) && d[p] && d[p].touched && (p = void 0); return p
                                }; a.prototype.updateData = function (b, c) {
                                    var a = this.options, e = a.dataSorting, d = this.points, h = [], g = this.requireSorting, k = b.length === d.length, p, m, f, l = !0; this.xIncrement = null; b.forEach(function (b, c) {
                                        var m = F(b) && this.pointClass.prototype.optionsToObject.call({ series: this }, b) || {}, q = m.x; if (m.id || L(q)) {
                                            if (m = this.findPointIndex(m, f), -1 === m || "undefined" === typeof m ? h.push(b) :
                                                d[m] && b !== a.data[m] ? (d[m].update(b, !1, null, !1), d[m].touched = !0, g && (f = m + 1)) : d[m] && (d[m].touched = !0), !k || c !== m || e && e.enabled || this.hasDerivedData) p = !0
                                        } else h.push(b)
                                    }, this); if (p) for (b = d.length; b--;)(m = d[b]) && !m.touched && m.remove && m.remove(!1, c); else !k || e && e.enabled ? l = !1 : (b.forEach(function (b, c) { b !== d[c].y && d[c].update && d[c].update(b, !1, null, !1) }), h.length = 0); d.forEach(function (b) { b && (b.touched = !1) }); if (!l) return !1; h.forEach(function (b) { this.addPoint(b, !1, null, null, !1) }, this); null === this.xIncrement &&
                                        this.xData && this.xData.length && (this.xIncrement = q(this.xData), this.autoIncrement()); return !0
                                }; a.prototype.setData = function (b, c, a, e) {
                                    var d = this, h = d.points, g = h && h.length || 0, k = d.options, p = d.chart, m = k.dataSorting, f = d.xAxis, q = k.turboThreshold, l = this.xData, n = this.yData, r = d.pointArrayMap; r = r && r.length; var v = k.keys, x, z = 0, A = 1, t = null; if (!p.options.chart.allowMutatingData) { k.data && delete d.options.data; d.userOptions.data && delete d.userOptions.data; var F = W(!0, b) } b = F || b || []; F = b.length; c = K(c, !0); m && m.enabled &&
                                        (b = this.sortData(b)); p.options.chart.allowMutatingData && !1 !== e && F && g && !d.cropped && !d.hasGroupedData && d.visible && !d.isSeriesBoosting && (x = this.updateData(b, a)); if (!x) {
                                            d.xIncrement = null; d.colorCounter = 0; this.parallelArrays.forEach(function (b) { d[b + "Data"].length = 0 }); if (q && F > q) if (t = d.getFirstValidPoint(b), L(t)) for (a = 0; a < F; a++)l[a] = this.autoIncrement(), n[a] = b[a]; else if (I(t)) if (r) if (t.length === r) for (a = 0; a < F; a++)l[a] = this.autoIncrement(), n[a] = b[a]; else for (a = 0; a < F; a++)e = b[a], l[a] = e[0], n[a] = e.slice(1, r + 1);
                                            else if (v && (z = v.indexOf("x"), A = v.indexOf("y"), z = 0 <= z ? z : 0, A = 0 <= A ? A : 1), 1 === t.length && (A = 0), z === A) for (a = 0; a < F; a++)l[a] = this.autoIncrement(), n[a] = b[a][A]; else for (a = 0; a < F; a++)e = b[a], l[a] = e[z], n[a] = e[A]; else H(12, !1, p); else for (a = 0; a < F; a++)"undefined" !== typeof b[a] && (e = { series: d }, d.pointClass.prototype.applyOptions.apply(e, [b[a]]), d.updateParallelArrays(e, a)); n && U(n[0]) && H(14, !0, p); d.data = []; d.options.data = d.userOptions.data = b; for (a = g; a--;)h[a] && h[a].destroy && h[a].destroy(); f && (f.minRange = f.userMinRange);
                                            d.isDirty = p.isDirtyBox = !0; d.isDirtyData = !!h; a = !1
                                        } "point" === k.legendType && (this.processData(), this.generatePoints()); c && p.redraw(a)
                                }; a.prototype.sortData = function (b) {
                                    var c = this, a = c.options.dataSorting.sortKey || "y", e = function (b, c) { return F(c) && b.pointClass.prototype.optionsToObject.call({ series: b }, c) || {} }; b.forEach(function (a, d) { b[d] = e(c, a); b[d].index = d }, this); b.concat().sort(function (b, c) { b = M(a, b); c = M(a, c); return c < b ? -1 : c > b ? 1 : 0 }).forEach(function (b, c) { b.x = c }, this); c.linkedSeries && c.linkedSeries.forEach(function (c) {
                                        var a =
                                            c.options, d = a.data; a.dataSorting && a.dataSorting.enabled || !d || (d.forEach(function (a, h) { d[h] = e(c, a); b[h] && (d[h].x = b[h].x, d[h].index = h) }), c.setData(d, !1))
                                    }); return b
                                }; a.prototype.getProcessedData = function (b) {
                                    var c = this.xAxis, a = this.options, e = a.cropThreshold, d = b || this.getExtremesFromAll || a.getExtremesFromAll, h = this.isCartesian; b = c && c.val2lin; a = !(!c || !c.logarithmic); var g = 0, k = this.xData, p = this.yData, m = this.requireSorting; var f = !1; var q = k.length; if (c) {
                                        f = c.getExtremes(); var l = f.min; var n = f.max; f = !(!c.categories ||
                                            c.names.length)
                                    } if (h && this.sorted && !d && (!e || q > e || this.forceCrop)) if (k[q - 1] < l || k[0] > n) k = [], p = []; else if (this.yData && (k[0] < l || k[q - 1] > n)) { var r = this.cropData(this.xData, this.yData, l, n); k = r.xData; p = r.yData; g = r.start; r = !0 } for (e = k.length || 1; --e;)if (c = a ? b(k[e]) - b(k[e - 1]) : k[e] - k[e - 1], 0 < c && ("undefined" === typeof v || c < v)) var v = c; else 0 > c && m && !f && (H(15, !1, this.chart), m = !1); return { xData: k, yData: p, cropped: r, cropStart: g, closestPointRange: v }
                                }; a.prototype.processData = function (b) {
                                    var c = this.xAxis; if (this.isCartesian &&
                                        !this.isDirty && !c.isDirty && !this.yAxis.isDirty && !b) return !1; b = this.getProcessedData(); this.cropped = b.cropped; this.cropStart = b.cropStart; this.processedXData = b.xData; this.processedYData = b.yData; this.closestPointRange = this.basePointRange = b.closestPointRange; J(this, "afterProcessData")
                                }; a.prototype.cropData = function (b, c, a, e, d) {
                                    var h = b.length, g, k = 0, p = h; d = K(d, this.cropShoulder); for (g = 0; g < h; g++)if (b[g] >= a) { k = Math.max(0, g - d); break } for (a = g; a < h; a++)if (b[a] > e) { p = a + d; break } return {
                                        xData: b.slice(k, p), yData: c.slice(k,
                                            p), start: k, end: p
                                    }
                                }; a.prototype.generatePoints = function () {
                                    var b = this.options, c = this.processedData || b.data, a = this.processedXData, e = this.processedYData, d = this.pointClass, h = a.length, g = this.cropStart || 0, k = this.hasGroupedData, m = b.keys, f = []; b = b.dataGrouping && b.dataGrouping.groupAll ? g : 0; var q, l, n = this.data; if (!n && !k) { var r = []; r.length = c.length; n = this.data = r } m && k && (this.options.keys = !1); for (l = 0; l < h; l++) {
                                        r = g + l; if (k) {
                                            var v = (new d).init(this, [a[l]].concat(fa(e[l]))); v.dataGroup = this.groupMap[b + l]; v.dataGroup.options &&
                                                (v.options = v.dataGroup.options, p(v, v.dataGroup.options), delete v.dataLabels)
                                        } else (v = n[r]) || "undefined" === typeof c[r] || (n[r] = v = (new d).init(this, c[r], a[l])); v && (v.index = k ? b + l : r, f[l] = v)
                                    } this.options.keys = m; if (n && (h !== (q = n.length) || k)) for (l = 0; l < q; l++)l !== g || k || (l += h), n[l] && (n[l].destroyElements(), n[l].plotX = void 0); this.data = n; this.points = f; J(this, "afterGeneratePoints")
                                }; a.prototype.getXExtremes = function (b) { return { min: k(b), max: q(b) } }; a.prototype.getExtremes = function (b, c) {
                                    var a = this.xAxis, e = this.yAxis,
                                    d = this.processedXData || this.xData, h = [], g = this.requireSorting ? this.cropShoulder : 0; e = e ? e.positiveValuesOnly : !1; var p, m = 0, f = 0, l = 0; b = b || this.stackedYData || this.processedYData || []; var n = b.length; if (a) { var r = a.getExtremes(); m = r.min; f = r.max } for (p = 0; p < n; p++) { var v = d[p]; r = b[p]; var x = (L(r) || I(r)) && (r.length || 0 < r || !e); v = c || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !a || (d[p + g] || v) >= m && (d[p - g] || v) <= f; if (x && v) if (x = r.length) for (; x--;)L(r[x]) && (h[l++] = r[x]); else h[l++] = r } b = {
                                        activeYData: h,
                                        dataMin: k(h), dataMax: q(h)
                                    }; J(this, "afterGetExtremes", { dataExtremes: b }); return b
                                }; a.prototype.applyExtremes = function () { var b = this.getExtremes(); this.dataMin = b.dataMin; this.dataMax = b.dataMax; return b }; a.prototype.getFirstValidPoint = function (b) { for (var c = b.length, a = 0, e = null; null === e && a < c;)e = b[a], a++; return e }; a.prototype.translate = function () {
                                    this.processedXData || this.processData(); this.generatePoints(); var c = this.options, a = c.stacking, e = this.xAxis, d = e.categories, g = this.enabledDataSorting, k = this.yAxis,
                                        p = this.points, m = p.length, f = this.pointPlacementToXValue(), q = !!f, l = c.threshold, n = c.startFromThreshold ? l : 0, r = this.zoneAxis || "y", v, x, z = Number.MAX_VALUE; for (v = 0; v < m; v++) {
                                            var A = p[v], t = A.x, E = void 0, u = void 0, H = A.y, y = A.low, M = a && k.stacking && k.stacking.stacks[(this.negStacks && H < (n ? 0 : l) ? "-" : "") + this.stackKey]; if (k.positiveValuesOnly && !k.validatePositiveValue(H) || e.positiveValuesOnly && !e.validatePositiveValue(t)) A.isNull = !0; A.plotX = x = b(h(e.translate(t, 0, 0, 0, 1, f, "flags" === this.type), -1E5, 1E5)); if (a && this.visible &&
                                                M && M[t]) { var w = this.getStackIndicator(w, t, this.index); A.isNull || (E = M[t], u = E.points[w.key]) } I(u) && (y = u[0], H = u[1], y === n && w.key === M[t].base && (y = K(L(l) && l, k.min)), k.positiveValuesOnly && 0 >= y && (y = null), A.total = A.stackTotal = E.total, A.percentage = E.total && A.y / E.total * 100, A.stackY = H, this.irregularWidths || E.setOffset(this.pointXOffset || 0, this.barW || 0)); A.yBottom = F(y) ? h(k.translate(y, 0, 1, 0, 1), -1E5, 1E5) : null; this.dataModify && (H = this.dataModify.modifyValue(H, v)); A.plotY = void 0; L(H) && (E = k.translate(H, !1, !0, !1, !0),
                                                    "undefined" !== typeof E && (A.plotY = h(E, -1E5, 1E5))); A.isInside = this.isPointInside(A); A.clientX = q ? b(e.translate(t, 0, 0, 0, 1, f)) : x; A.negative = A[r] < (c[r + "Threshold"] || l || 0); A.category = K(d && d[A.x], A.x); if (!A.isNull && !1 !== A.visible) { "undefined" !== typeof C && (z = Math.min(z, Math.abs(x - C))); var C = x } A.zone = this.zones.length ? A.getZone() : void 0; !A.graphic && this.group && g && (A.isNew = !0)
                                        } this.closestPointRangePx = z; J(this, "afterTranslate")
                                }; a.prototype.getValidPoints = function (b, c, a) {
                                    var e = this.chart; return (b || this.points ||
                                        []).filter(function (b) { return c && !e.isInsidePlot(b.plotX, b.plotY, { inverted: e.inverted }) ? !1 : !1 !== b.visible && (a || !b.isNull) })
                                }; a.prototype.getClipBox = function () { var b = this.chart, c = this.xAxis, a = this.yAxis, e = W(b.clipBox); c && c.len !== b.plotSizeX && (e.width = c.len); a && a.len !== b.plotSizeY && (e.height = a.len); return e }; a.prototype.getSharedClipKey = function () { return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0) }; a.prototype.setClip = function () {
                                    var b = this.chart, c = this.group, a = this.markerGroup,
                                    e = b.sharedClips; b = b.renderer; var d = this.getClipBox(), h = this.getSharedClipKey(), g = e[h]; g ? g.animate(d) : e[h] = g = b.clipRect(d); c && c.clip(!1 === this.options.clip ? void 0 : g); a && a.clip()
                                }; a.prototype.animate = function (b) {
                                    var c = this.chart, a = this.group, e = this.markerGroup, d = c.inverted, h = l(this.options.animation), g = [this.getSharedClipKey(), h.duration, h.easing, h.defer].join(), k = c.sharedClips[g], p = c.sharedClips[g + "m"]; if (b && a) h = this.getClipBox(), k ? k.attr("height", h.height) : (h.width = 0, d && (h.x = c.plotHeight), k = c.renderer.clipRect(h),
                                        c.sharedClips[g] = k, p = c.renderer.clipRect({ x: d ? (c.plotSizeX || 0) + 99 : -99, y: d ? -c.plotLeft : -c.plotTop, width: 99, height: d ? c.chartWidth : c.chartHeight }), c.sharedClips[g + "m"] = p), a.clip(k), e && e.clip(p); else if (k && !k.hasClass("highcharts-animating")) { c = this.getClipBox(); var m = h.step; e && e.element.childNodes.length && (h.step = function (b, c) { m && m.apply(c, arguments); p && p.element && p.attr(c.prop, "width" === c.prop ? b + 99 : b) }); k.addClass("highcharts-animating").animate(c, h) }
                                }; a.prototype.afterAnimate = function () {
                                    var b = this;
                                    this.setClip(); G(this.chart.sharedClips, function (c, a, e) { c && !b.chart.container.querySelector('[clip-path="url(#' + c.id + ')"]') && (c.destroy(), delete e[a]) }); this.finishedAnimating = !0; J(this, "afterAnimate")
                                }; a.prototype.drawPoints = function () {
                                    var b = this.points, c = this.chart, a = this.options.marker, e = this[this.specialGroup] || this.markerGroup, d = this.xAxis, h = K(a.enabled, !d || d.isRadial ? !0 : null, this.closestPointRangePx >= a.enabledThreshold * a.radius), g, k; if (!1 !== a.enabled || this._hasPointMarkers) for (g = 0; g < b.length; g++) {
                                        var p =
                                            b[g]; var m = (k = p.graphic) ? "animate" : "attr"; var f = p.marker || {}; var q = !!p.marker; if ((h && "undefined" === typeof f.enabled || f.enabled) && !p.isNull && !1 !== p.visible) {
                                                var l = K(f.symbol, this.symbol, "rect"); var n = this.markerAttribs(p, p.selected && "select"); this.enabledDataSorting && (p.startXPos = d.reversed ? -(n.width || 0) : d.width); var r = !1 !== p.isInside; k ? k[r ? "show" : "hide"](r).animate(n) : r && (0 < (n.width || 0) || p.hasImage) && (p.graphic = k = c.renderer.symbol(l, n.x, n.y, n.width, n.height, q ? f : a).add(e), this.enabledDataSorting &&
                                                    c.hasRendered && (k.attr({ x: p.startXPos }), m = "animate")); k && "animate" === m && k[r ? "show" : "hide"](r).animate(n); if (k && !c.styledMode) k[m](this.pointAttribs(p, p.selected && "select")); k && k.addClass(p.getClassName(), !0)
                                            } else k && (p.graphic = k.destroy())
                                    }
                                }; a.prototype.markerAttribs = function (b, c) {
                                    var a = this.options, e = a.marker, d = b.marker || {}, h = d.symbol || e.symbol, g = K(d.radius, e && e.radius); c && (e = e.states[c], c = d.states && d.states[c], g = K(c && c.radius, e && e.radius, g && g + (e && e.radiusPlus || 0))); b.hasImage = h && 0 === h.indexOf("url");
                                    b.hasImage && (g = 0); b = L(g) ? { x: a.crisp ? Math.floor(b.plotX - g) : b.plotX - g, y: b.plotY - g } : {}; g && (b.width = b.height = 2 * g); return b
                                }; a.prototype.pointAttribs = function (b, c) {
                                    var a = this.options.marker, e = b && b.options, d = e && e.marker || {}, h = e && e.color, g = b && b.color, k = b && b.zone && b.zone.color, p = this.color; b = K(d.lineWidth, a.lineWidth); e = 1; p = h || k || g || p; h = d.fillColor || a.fillColor || p; g = d.lineColor || a.lineColor || p; c = c || "normal"; a = a.states[c] || {}; c = d.states && d.states[c] || {}; b = K(c.lineWidth, a.lineWidth, b + K(c.lineWidthPlus, a.lineWidthPlus,
                                        0)); h = c.fillColor || a.fillColor || h; g = c.lineColor || a.lineColor || g; e = K(c.opacity, a.opacity, e); return { stroke: g, "stroke-width": b, fill: h, opacity: e }
                                }; a.prototype.destroy = function (b) {
                                    var c = this, a = c.chart, d = /AppleWebKit\/533/.test(z.navigator.userAgent), h = c.data || [], g, k, p, m; J(c, "destroy", { keepEventsForUpdate: b }); this.removeEvents(b); (c.axisTypes || []).forEach(function (b) { (m = c[b]) && m.series && (e(m.series, c), m.isDirty = m.forceRedraw = !0) }); c.legendItem && c.chart.legend.destroyItem(c); for (k = h.length; k--;)(p = h[k]) &&
                                        p.destroy && p.destroy(); c.clips && c.clips.forEach(function (b) { return b.destroy() }); n.clearTimeout(c.animationTimeout); G(c, function (b, c) { b instanceof t && !b.survive && (g = d && "group" === c ? "hide" : "destroy", b[g]()) }); a.hoverSeries === c && (a.hoverSeries = void 0); e(a.series, c); a.orderSeries(); G(c, function (a, e) { b && "hcEvents" === e || delete c[e] })
                                }; a.prototype.applyZones = function () {
                                    var b = this, c = this.chart, a = c.renderer, e = this.zones, d = this.clips || [], g = this.graph, k = this.area, p = Math.max(c.chartWidth, c.chartHeight), m = this[(this.zoneAxis ||
                                        "y") + "Axis"], f = c.inverted, q, l, n, r, v, x, z, A, t = !1; if (e.length && (g || k) && m && "undefined" !== typeof m.min) {
                                            var F = m.reversed; var E = m.horiz; g && !this.showLine && g.hide(); k && k.hide(); var u = m.getExtremes(); e.forEach(function (e, J) {
                                                q = F ? E ? c.plotWidth : 0 : E ? 0 : m.toPixels(u.min) || 0; q = h(K(l, q), 0, p); l = h(Math.round(m.toPixels(K(e.value, u.max), !0) || 0), 0, p); t && (q = l = m.toPixels(u.max)); r = Math.abs(q - l); v = Math.min(q, l); x = Math.max(q, l); m.isXAxis ? (n = { x: f ? x : v, y: 0, width: r, height: p }, E || (n.x = c.plotHeight - n.x)) : (n = {
                                                    x: 0, y: f ? x : v, width: p,
                                                    height: r
                                                }, E && (n.y = c.plotWidth - n.y)); f && a.isVML && (n = m.isXAxis ? { x: 0, y: F ? v : x, height: n.width, width: c.chartWidth } : { x: n.y - c.plotLeft - c.spacingBox.x, y: 0, width: n.height, height: c.chartHeight }); d[J] ? d[J].animate(n) : d[J] = a.clipRect(n); z = b["zone-area-" + J]; A = b["zone-graph-" + J]; g && A && A.clip(d[J]); k && z && z.clip(d[J]); t = e.value > u.max; b.resetZones && 0 === l && (l = void 0)
                                            }); this.clips = d
                                        } else b.visible && (g && g.show(), k && k.show())
                                }; a.prototype.invertGroups = function (b) {
                                    function c() {
                                        ["group", "markerGroup"].forEach(function (c) {
                                            a[c] &&
                                            (e.renderer.isVML && a[c].attr({ width: a.yAxis.len, height: a.xAxis.len }), a[c].width = a.yAxis.len, a[c].height = a.xAxis.len, a[c].invert(a.isRadialSeries ? !1 : b))
                                        })
                                    } var a = this, e = a.chart; a.xAxis && (a.eventsToUnbind.push(r(e, "resize", c)), c(), a.invertGroups = c)
                                }; a.prototype.plotGroup = function (b, c, a, e, d) {
                                    var h = this[b], g = !h; a = { visibility: a, zIndex: e || .1 }; "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" === this.state || (a.opacity = this.opacity); g && (this[b] = h = this.chart.renderer.g().add(d)); h.addClass("highcharts-" +
                                        c + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (F(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (h.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0); h.attr(a)[g ? "attr" : "animate"](this.getPlotBox()); return h
                                }; a.prototype.getPlotBox = function () { var b = this.chart, c = this.xAxis, a = this.yAxis; b.inverted && (c = a, a = this.xAxis); return { translateX: c ? c.left : b.plotLeft, translateY: a ? a.top : b.plotTop, scaleX: 1, scaleY: 1 } }; a.prototype.removeEvents =
                                    function (b) { b || ba(this); this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function (b) { b() }), this.eventsToUnbind.length = 0) }; a.prototype.render = function () {
                                        var b = this, c = b.chart, a = b.options, e = l(a.animation), d = b.visible ? "inherit" : "hidden", h = a.zIndex, g = b.hasRendered, k = c.seriesGroup, p = c.inverted; c = !b.finishedAnimating && c.renderer.isSVG ? e.duration : 0; J(this, "render"); var m = b.plotGroup("group", "series", d, h, k); b.markerGroup = b.plotGroup("markerGroup", "markers", d, h, k); !1 !== a.clip && b.setClip(); b.animate &&
                                            c && b.animate(!0); m.inverted = K(b.invertible, b.isCartesian) ? p : !1; b.drawGraph && (b.drawGraph(), b.applyZones()); b.visible && b.drawPoints(); b.drawDataLabels && b.drawDataLabels(); b.redrawPoints && b.redrawPoints(); b.drawTracker && !1 !== b.options.enableMouseTracking && b.drawTracker(); b.invertGroups(p); b.animate && c && b.animate(); g || (c && e.defer && (c += e.defer), b.animationTimeout = N(function () { b.afterAnimate() }, c || 0)); b.isDirty = !1; b.hasRendered = !0; J(b, "afterRender")
                                    }; a.prototype.redraw = function () {
                                        var b = this.chart, c = this.isDirty ||
                                            this.isDirtyData, a = this.group, e = this.xAxis, d = this.yAxis; a && (b.inverted && a.attr({ width: b.plotWidth, height: b.plotHeight }), a.animate({ translateX: K(e && e.left, b.plotLeft), translateY: K(d && d.top, b.plotTop) })); this.translate(); this.render(); c && delete this.kdTree
                                    }; a.prototype.searchPoint = function (b, c) { var a = this.xAxis, e = this.yAxis, d = this.chart.inverted; return this.searchKDTree({ clientX: d ? a.len - b.chartY + a.pos : b.chartX - a.pos, plotY: d ? e.len - b.chartX + e.pos : b.chartY - e.pos }, c, b) }; a.prototype.buildKDTree = function (b) {
                                        function c(b,
                                            e, d) { var h = b && b.length; if (h) { var g = a.kdAxisArray[e % d]; b.sort(function (b, c) { return b[g] - c[g] }); h = Math.floor(h / 2); return { point: b[h], left: c(b.slice(0, h), e + 1, d), right: c(b.slice(h + 1), e + 1, d) } } } this.buildingKdTree = !0; var a = this, e = -1 < a.options.findNearestPointBy.indexOf("y") ? 2 : 1; delete a.kdTree; N(function () { a.kdTree = c(a.getValidPoints(null, !a.directTouch), e, e); a.buildingKdTree = !1 }, a.options.kdNow || b && "touchstart" === b.type ? 0 : 1)
                                    }; a.prototype.searchKDTree = function (b, c, a) {
                                        function e(b, c, a, p) {
                                            var m = c.point, f =
                                                d.kdAxisArray[a % p], q = m, l = F(b[h]) && F(m[h]) ? Math.pow(b[h] - m[h], 2) : null; var n = F(b[g]) && F(m[g]) ? Math.pow(b[g] - m[g], 2) : null; n = (l || 0) + (n || 0); m.dist = F(n) ? Math.sqrt(n) : Number.MAX_VALUE; m.distX = F(l) ? Math.sqrt(l) : Number.MAX_VALUE; f = b[f] - m[f]; n = 0 > f ? "left" : "right"; l = 0 > f ? "right" : "left"; c[n] && (n = e(b, c[n], a + 1, p), q = n[k] < q[k] ? n : m); c[l] && Math.sqrt(f * f) < q[k] && (b = e(b, c[l], a + 1, p), q = b[k] < q[k] ? b : q); return q
                                        } var d = this, h = this.kdAxisArray[0], g = this.kdAxisArray[1], k = c ? "distX" : "dist"; c = -1 < d.options.findNearestPointBy.indexOf("y") ?
                                            2 : 1; this.kdTree || this.buildingKdTree || this.buildKDTree(a); if (this.kdTree) return e(b, this.kdTree, c, c)
                                    }; a.prototype.pointPlacementToXValue = function () { var b = this.options, c = b.pointRange, a = this.xAxis; b = b.pointPlacement; "between" === b && (b = a.reversed ? -.5 : .5); return L(b) ? b * (c || a.pointRange) : 0 }; a.prototype.isPointInside = function (b) {
                                        var c = this.chart, a = this.xAxis, e = this.yAxis; return "undefined" !== typeof b.plotY && "undefined" !== typeof b.plotX && 0 <= b.plotY && b.plotY <= (e ? e.len : c.plotHeight) && 0 <= b.plotX && b.plotX <= (a ?
                                            a.len : c.plotWidth)
                                    }; a.prototype.drawTracker = function () {
                                        var b = this, c = b.options, a = c.trackByArea, e = [].concat(a ? b.areaPath : b.graphPath), d = b.chart, h = d.pointer, g = d.renderer, k = d.options.tooltip.snap, p = b.tracker, f = function (c) { if (d.hoverSeries !== b) b.onMouseOver() }, q = "rgba(192,192,192," + (E ? .0001 : .002) + ")"; p ? p.attr({ d: e }) : b.graph && (b.tracker = g.path(e).attr({ visibility: b.visible ? "inherit" : "hidden", zIndex: 2 }).addClass(a ? "highcharts-tracker-area" : "highcharts-tracker-line").add(b.group), d.styledMode || b.tracker.attr({
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round", stroke: q, fill: a ? q : "none", "stroke-width": b.graph.strokeWidth() + (a ? 0 : 2 * k)
                                        }), [b.tracker, b.markerGroup, b.dataLabelsGroup].forEach(function (b) { if (b && (b.addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function (b) { h.onTrackerMouseOut(b) }), c.cursor && !d.styledMode && b.css({ cursor: c.cursor }), m)) b.on("touchstart", f) })); J(this, "afterDrawTracker")
                                    }; a.prototype.addPoint = function (b, c, a, e, d) {
                                        var h = this.options, g = this.data, k = this.chart, p = this.xAxis; p = p && p.hasNames && p.names;
                                        var m = h.data, f = this.xData, q; c = K(c, !0); var l = { series: this }; this.pointClass.prototype.applyOptions.apply(l, [b]); var n = l.x; var r = f.length; if (this.requireSorting && n < f[r - 1]) for (q = !0; r && f[r - 1] > n;)r--; this.updateParallelArrays(l, "splice", r, 0, 0); this.updateParallelArrays(l, r); p && l.name && (p[n] = l.name); m.splice(r, 0, b); if (q || this.processedData) this.data.splice(r, 0, null), this.processData(); "point" === h.legendType && this.generatePoints(); a && (g[0] && g[0].remove ? g[0].remove(!1) : (g.shift(), this.updateParallelArrays(l,
                                            "shift"), m.shift())); !1 !== d && J(this, "addPoint", { point: l }); this.isDirtyData = this.isDirty = !0; c && k.redraw(e)
                                    }; a.prototype.removePoint = function (b, c, a) { var e = this, h = e.data, g = h[b], k = e.points, p = e.chart, m = function () { k && k.length === h.length && k.splice(b, 1); h.splice(b, 1); e.options.data.splice(b, 1); e.updateParallelArrays(g || { series: e }, "splice", b, 1); g && g.destroy(); e.isDirty = !0; e.isDirtyData = !0; c && p.redraw() }; d(a, p); c = K(c, !0); g ? g.firePointEvent("remove", null, m) : m() }; a.prototype.remove = function (b, c, a, e) {
                                        function d() {
                                            h.destroy(e);
                                            g.isDirtyLegend = g.isDirtyBox = !0; g.linkSeries(); K(b, !0) && g.redraw(c)
                                        } var h = this, g = h.chart; !1 !== a ? J(h, "remove", null, d) : d()
                                    }; a.prototype.update = function (b, c) {
                                        b = v(b, this.userOptions); J(this, "update", { options: b }); var a = this, e = a.chart, d = a.userOptions, h = a.initialType || a.type, g = e.options.plotOptions, k = A[h].prototype, m = a.finishedAnimating && { animation: !1 }, f = {}, q, l = ["eventOptions", "navigatorSeries", "baseSeries"], n = b.type || d.type || e.options.chart.type, r = !(this.hasDerivedData || n && n !== this.type || "undefined" !==
                                            typeof b.pointStart || "undefined" !== typeof b.pointInterval || "undefined" !== typeof b.relativeXValue || b.joinBy || b.mapData || a.hasOptionChanged("dataGrouping") || a.hasOptionChanged("pointStart") || a.hasOptionChanged("pointInterval") || a.hasOptionChanged("pointIntervalUnit") || a.hasOptionChanged("keys")); n = n || h; r && (l.push("data", "isDirtyData", "points", "processedData", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "clips", "nodes", "layout", "level", "mapMap", "mapData",
                                                "minY", "maxY", "minX", "maxX"), !1 !== b.visible && l.push("area", "graph"), a.parallelArrays.forEach(function (b) { l.push(b + "Data") }), b.data && (b.dataSorting && p(a.options.dataSorting, b.dataSorting), this.setData(b.data, !1))); b = W(d, m, { index: "undefined" === typeof d.index ? a.index : d.index, pointStart: K(g && g.series && g.series.pointStart, d.pointStart, a.xData[0]) }, !r && { data: a.options.data }, b); r && b.data && (b.data = a.options.data); l = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(l); l.forEach(function (b) {
                                                    l[b] =
                                                    a[b]; delete a[b]
                                                }); g = !1; if (A[n]) { if (g = n !== a.type, a.remove(!1, !1, !1, !0), g) if (Object.setPrototypeOf) Object.setPrototypeOf(a, A[n].prototype); else { m = Object.hasOwnProperty.call(a, "hcEvents") && a.hcEvents; for (q in k) a[q] = void 0; p(a, A[n].prototype); m ? a.hcEvents = m : delete a.hcEvents } } else H(17, !0, e, { missingModuleFor: n }); l.forEach(function (b) { a[b] = l[b] }); a.init(e, b); if (r && this.points) {
                                                    var x = a.options; !1 === x.visible ? (f.graphic = 1, f.dataLabel = 1) : a._hasPointLabels || (b = x.marker, k = x.dataLabels, !b || !1 !== b.enabled &&
                                                        (d.marker && d.marker.symbol) === b.symbol || (f.graphic = 1), k && !1 === k.enabled && (f.dataLabel = 1)); this.points.forEach(function (b) { b && b.series && (b.resolveColor(), Object.keys(f).length && b.destroyElements(f), !1 === x.showInLegend && b.legendItem && e.legend.destroyItem(b)) }, this)
                                                } a.initialType = h; e.linkSeries(); g && a.linkedSeries.length && (a.isDirtyData = !0); J(this, "afterUpdate"); K(c, !0) && e.redraw(r ? void 0 : !1)
                                    }; a.prototype.setName = function (b) {
                                        this.name = this.options.name = this.userOptions.name = b; this.chart.isDirtyLegend =
                                            !0
                                    }; a.prototype.hasOptionChanged = function (b) { var c = this.options[b], a = this.chart.options.plotOptions, e = this.userOptions[b]; return e ? c !== e : c !== K(a && a[this.type] && a[this.type][b], a && a.series && a.series[b], c) }; a.prototype.onMouseOver = function () { var b = this.chart, c = b.hoverSeries; b.pointer.setHoverChartIndex(); if (c && c !== this) c.onMouseOut(); this.options.events.mouseOver && J(this, "mouseOver"); this.setState("hover"); b.hoverSeries = this }; a.prototype.onMouseOut = function () {
                                        var b = this.options, c = this.chart, a = c.tooltip,
                                        e = c.hoverPoint; c.hoverSeries = null; if (e) e.onMouseOut(); this && b.events.mouseOut && J(this, "mouseOut"); !a || this.stickyTracking || a.shared && !this.noSharedTooltip || a.hide(); c.series.forEach(function (b) { b.setState("", !0) })
                                    }; a.prototype.setState = function (b, c) {
                                        var a = this, e = a.options, d = a.graph, h = e.inactiveOtherPoints, g = e.states, k = K(g[b || "normal"] && g[b || "normal"].animation, a.chart.options.chart.animation), p = e.lineWidth, m = 0, f = e.opacity; b = b || ""; if (a.state !== b && ([a.group, a.markerGroup, a.dataLabelsGroup].forEach(function (c) {
                                            c &&
                                            (a.state && c.removeClass("highcharts-series-" + a.state), b && c.addClass("highcharts-series-" + b))
                                        }), a.state = b, !a.chart.styledMode)) { if (g[b] && !1 === g[b].enabled) return; b && (p = g[b].lineWidth || p + (g[b].lineWidthPlus || 0), f = K(g[b].opacity, f)); if (d && !d.dashstyle) for (e = { "stroke-width": p }, d.animate(e, k); a["zone-graph-" + m];)a["zone-graph-" + m].animate(e, k), m += 1; h || [a.group, a.markerGroup, a.dataLabelsGroup, a.labelBySeries].forEach(function (b) { b && b.animate({ opacity: f }, k) }) } c && h && a.points && a.setAllPointsToState(b || void 0)
                                    };
                            a.prototype.setAllPointsToState = function (b) { this.points.forEach(function (c) { c.setState && c.setState(b) }) }; a.prototype.setVisible = function (b, c) {
                                var a = this, e = a.chart, d = a.legendItem, h = e.options.chart.ignoreHiddenSeries, g = a.visible, k = (a.visible = b = a.options.visible = a.userOptions.visible = "undefined" === typeof b ? !g : b) ? "show" : "hide";["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function (b) { if (a[b]) a[b][k]() }); if (e.hoverSeries === a || (e.hoverPoint && e.hoverPoint.series) === a) a.onMouseOut(); d &&
                                    e.legend.colorizeItem(a, b); a.isDirty = !0; a.options.stacking && e.series.forEach(function (b) { b.options.stacking && b.visible && (b.isDirty = !0) }); a.linkedSeries.forEach(function (c) { c.setVisible(b, !1) }); h && (e.isDirtyBox = !0); J(a, k); !1 !== c && e.redraw()
                            }; a.prototype.show = function () { this.setVisible(!0) }; a.prototype.hide = function () { this.setVisible(!1) }; a.prototype.select = function (b) {
                                this.selected = b = this.options.selected = "undefined" === typeof b ? !this.selected : b; this.checkbox && (this.checkbox.checked = b); J(this, b ? "select" :
                                    "unselect")
                            }; a.prototype.shouldShowTooltip = function (b, c, a) { void 0 === a && (a = {}); a.series = this; a.visiblePlotOnly = !0; return this.chart.isInsidePlot(b, c, a) }; a.defaultOptions = C; return a
                        }(); p(a.prototype, { axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, cropShoulder: 1, directTouch: !1, drawLegendSymbol: u.drawLineMarker, isCartesian: !0, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: B, requireSorting: !0, sorted: !0 }); y.series = a; ""; ""; return a
                }); G(f, "Extensions/ScrollablePlotArea.js",
                    [f["Core/Animation/AnimationUtilities.js"], f["Core/Axis/Axis.js"], f["Core/Chart/Chart.js"], f["Core/Series/Series.js"], f["Core/Renderer/RendererRegistry.js"], f["Core/Utilities.js"]], function (a, f, w, D, u, B) {
                        var C = a.stop, y = B.addEvent, t = B.createElement, n = B.merge, l = B.pick; y(w, "afterSetChartSize", function (a) {
                            var c = this.options.chart.scrollablePlotArea, d = c && c.minWidth; c = c && c.minHeight; if (!this.renderer.forExport) {
                                if (d) {
                                    if (this.scrollablePixelsX = d = Math.max(0, d - this.chartWidth)) {
                                        this.scrollablePlotBox = this.renderer.scrollablePlotBox =
                                            n(this.plotBox); this.plotBox.width = this.plotWidth += d; this.inverted ? this.clipBox.height += d : this.clipBox.width += d; var m = { 1: { name: "right", value: d } }
                                    }
                                } else c && (this.scrollablePixelsY = d = Math.max(0, c - this.chartHeight)) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = n(this.plotBox), this.plotBox.height = this.plotHeight += d, this.inverted ? this.clipBox.width += d : this.clipBox.height += d, m = { 2: { name: "bottom", value: d } }); m && !a.skipAxes && this.axes.forEach(function (c) {
                                    m[c.side] ? c.getPlotLinePath = function () {
                                        var a =
                                            m[c.side].name, d = this[a]; this[a] = d - m[c.side].value; var g = f.prototype.getPlotLinePath.apply(this, arguments); this[a] = d; return g
                                    } : (c.setAxisSize(), c.setAxisTranslation())
                                })
                            }
                        }); y(w, "render", function () { this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed() }); w.prototype.setUpScrolling = function () {
                            var a = this, c = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" }; this.scrollablePixelsX && (c.overflowX =
                                "auto"); this.scrollablePixelsY && (c.overflowY = "auto"); this.scrollingParent = t("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, this.renderTo); this.scrollingContainer = t("div", { className: "highcharts-scrolling" }, c, this.scrollingParent); y(this.scrollingContainer, "scroll", function () { a.pointer && delete a.pointer.chartPosition }); this.innerContainer = t("div", { className: "highcharts-inner-container" }, null, this.scrollingContainer); this.innerContainer.appendChild(this.container); this.setUpScrolling =
                                    null
                        }; w.prototype.moveFixedElements = function () {
                            var a = this.container, c = this.fixedRenderer, g = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "), m; this.scrollablePixelsX && !this.inverted ? m = ".highcharts-yaxis" : this.scrollablePixelsX &&
                                this.inverted ? m = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? m = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (m = ".highcharts-yaxis"); m && g.push(m + ":not(.highcharts-radial-axis)", m + "-labels:not(.highcharts-radial-axis-labels)"); g.forEach(function (d) { [].forEach.call(a.querySelectorAll(d), function (a) { (a.namespaceURI === c.SVG_NS ? c.box : c.box.parentNode).appendChild(a); a.style.pointerEvents = "auto" }) })
                        }; w.prototype.applyFixed = function () {
                            var a = !this.fixedDiv, c = this.options.chart,
                            g = c.scrollablePlotArea, m = u.getRendererType(); a ? (this.fixedDiv = t("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (c.style && c.style.zIndex || 0) + 2, top: 0 }, null, !0), this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = c = new m(this.fixedDiv, this.chartWidth, this.chartHeight, this.options.chart.style), this.scrollableMask = c.path().attr({
                                fill: this.options.chart.backgroundColor ||
                                    "#fff", "fill-opacity": l(g.opacity, .85), zIndex: -1
                            }).addClass("highcharts-scrollable-mask").add(), y(this, "afterShowResetZoom", this.moveFixedElements), y(this, "afterApplyDrilldown", this.moveFixedElements), y(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight); if (this.scrollableDirty || a) this.scrollableDirty = !1, this.moveFixedElements(); c = this.chartWidth + (this.scrollablePixelsX || 0); m = this.chartHeight + (this.scrollablePixelsY || 0); C(this.container);
                            this.container.style.width = c + "px"; this.container.style.height = m + "px"; this.renderer.boxWrapper.attr({ width: c, height: m, viewBox: [0, 0, c, m].join(" ") }); this.chartBackground.attr({ width: c, height: m }); this.scrollingContainer.style.height = this.chartHeight + "px"; a && (g.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * g.scrollPositionX), g.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * g.scrollPositionY)); m = this.axisOffset; a = this.plotTop - m[0] - 1; g = this.plotLeft -
                                m[3] - 1; c = this.plotTop + this.plotHeight + m[2] + 1; m = this.plotLeft + this.plotWidth + m[1] + 1; var f = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0), n = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0); a = this.scrollablePixelsX ? [["M", 0, a], ["L", this.plotLeft - 1, a], ["L", this.plotLeft - 1, c], ["L", 0, c], ["Z"], ["M", f, a], ["L", this.chartWidth, a], ["L", this.chartWidth, c], ["L", f, c], ["Z"]] : this.scrollablePixelsY ? [["M", g, 0], ["L", g, this.plotTop - 1], ["L", m, this.plotTop - 1], ["L", m, 0], ["Z"], ["M", g, n], ["L", g, this.chartHeight],
                                ["L", m, this.chartHeight], ["L", m, n], ["Z"]] : [["M", 0, 0]]; "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({ d: a })
                        }; y(f, "afterInit", function () { this.chart.scrollableDirty = !0 }); y(D, "show", function () { this.chart.scrollableDirty = !0 }); ""
                    }); G(f, "Core/Axis/StackingAxis.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Axis/Axis.js"], f["Core/Utilities.js"]], function (a, f, w) {
                        var D = a.getDeferredAnimation, u = w.addEvent, B = w.destroyObjectProperties, C = w.fireEvent, y = w.isNumber, t = w.objectEach, n; (function (a) {
                            function d() {
                                var c =
                                    this.stacking; if (c) { var a = c.stacks; t(a, function (c, d) { B(c); a[d] = null }); c && c.stackTotalGroup && c.stackTotalGroup.destroy() }
                            } function c() { this.stacking || (this.stacking = new m(this)) } var g = []; a.compose = function (a) { -1 === g.indexOf(a) && (g.push(a), u(a, "init", c), u(a, "destroy", d)); return a }; var m = function () {
                                function c(c) { this.oldStacks = {}; this.stacks = {}; this.stacksTouched = 0; this.axis = c } c.prototype.buildStacks = function () {
                                    var c = this.axis, a = c.series, d = c.options.reversedStacks, g = a.length, k; if (!c.isXAxis) {
                                        this.usePercentage =
                                        !1; for (k = g; k--;) { var h = a[d ? k : g - k - 1]; h.setStackedPoints(); h.setGroupedPoints() } for (k = 0; k < g; k++)a[k].modifyStacks(); C(c, "afterBuildStacks")
                                    }
                                }; c.prototype.cleanStacks = function () { if (!this.axis.isXAxis) { if (this.oldStacks) var c = this.stacks = this.oldStacks; t(c, function (c) { t(c, function (c) { c.cumulative = c.total }) }) } }; c.prototype.resetStacks = function () {
                                    var c = this, a = c.stacks; c.axis.isXAxis || t(a, function (a) {
                                        t(a, function (d, g) {
                                            y(d.touched) && d.touched < c.stacksTouched ? (d.destroy(), delete a[g]) : (d.total = null, d.cumulative =
                                                null)
                                        })
                                    })
                                }; c.prototype.renderStackTotals = function () { var c = this.axis, a = c.chart, d = a.renderer, g = this.stacks; c = D(a, c.options.stackLabels && c.options.stackLabels.animation || !1); var k = this.stackTotalGroup = this.stackTotalGroup || d.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add(); k.translate(a.plotLeft, a.plotTop); t(g, function (c) { t(c, function (c) { c.render(k) }) }); k.animate({ opacity: 1 }, c) }; return c
                            }(); a.Additions = m
                        })(n || (n = {})); return n
                    }); G(f, "Extensions/Stacking.js", [f["Core/Axis/Axis.js"], f["Core/Chart/Chart.js"],
                    f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Series/Series.js"], f["Core/Axis/StackingAxis.js"], f["Core/Utilities.js"]], function (a, f, w, D, u, B, C) {
                        var y = w.format, t = C.correctFloat, n = C.defined, l = C.destroyObjectProperties, d = C.isArray, c = C.isNumber, g = C.objectEach, m = C.pick, E = function () {
                            function a(c, a, d, g, h) {
                                var k = c.chart.inverted; this.axis = c; this.isNegative = d; this.options = a = a || {}; this.x = g; this.total = null; this.points = {}; this.hasValidPoints = !1; this.stack = h; this.rightCliff = this.leftCliff = 0; this.alignOptions =
                                    { align: a.align || (k ? d ? "left" : "right" : "center"), verticalAlign: a.verticalAlign || (k ? "middle" : d ? "bottom" : "top"), y: a.y, x: a.x }; this.textAlign = a.textAlign || (k ? d ? "right" : "left" : "center")
                            } a.prototype.destroy = function () { l(this, this.axis) }; a.prototype.render = function (c) {
                                var a = this.axis.chart, d = this.options, g = d.format; g = g ? y(g, this, a) : d.formatter.call(this); this.label ? this.label.attr({ text: g, visibility: "hidden" }) : (this.label = a.renderer.label(g, null, null, d.shape, null, null, d.useHTML, !1, "stack-labels"), g = {
                                    r: d.borderRadius ||
                                        0, text: g, rotation: d.rotation, padding: m(d.padding, 5), visibility: "hidden"
                                }, a.styledMode || (g.fill = d.backgroundColor, g.stroke = d.borderColor, g["stroke-width"] = d.borderWidth, this.label.css(d.style)), this.label.attr(g), this.label.added || this.label.add(c)); this.label.labelrank = a.plotSizeY
                            }; a.prototype.setOffset = function (a, d, g, k, h) {
                                var f = this.axis, b = f.chart; k = f.translate(f.stacking.usePercentage ? 100 : k ? k : this.total, 0, 0, 0, 1); g = f.translate(g ? g : 0); g = n(k) && Math.abs(k - g); a = m(h, b.xAxis[0].translate(this.x)) + a; f =
                                    n(k) && this.getStackBox(b, this, a, k, d, g, f); d = this.label; g = this.isNegative; a = "justify" === m(this.options.overflow, "justify"); var l = this.textAlign; d && f && (h = d.getBBox(), k = d.padding, l = "left" === l ? b.inverted ? -k : k : "right" === l ? h.width : b.inverted && "center" === l ? h.width / 2 : b.inverted ? g ? h.width + k : -k : h.width / 2, g = b.inverted ? h.height / 2 : g ? -k : h.height, this.alignOptions.x = m(this.options.x, 0), this.alignOptions.y = m(this.options.y, 0), f.x -= l, f.y -= g, d.align(this.alignOptions, null, f), b.isInsidePlot(d.alignAttr.x + l - this.alignOptions.x,
                                        d.alignAttr.y + g - this.alignOptions.y) ? d.show() : (d.hide(), a = !1), a && u.prototype.justifyDataLabel.call(this.axis, d, this.alignOptions, d.alignAttr, h, f), d.attr({ x: d.alignAttr.x, y: d.alignAttr.y }), m(!a && this.options.crop, !0) && ((b = c(d.x) && c(d.y) && b.isInsidePlot(d.x - k + d.width, d.y) && b.isInsidePlot(d.x + k, d.y)) || d.hide()))
                            }; a.prototype.getStackBox = function (c, a, d, g, h, m, b) {
                                var k = a.axis.reversed, e = c.inverted, f = b.height + b.pos - (e ? c.plotLeft : c.plotTop); a = a.isNegative && !k || !a.isNegative && k; return {
                                    x: e ? a ? g - b.right : g - m +
                                        b.pos - c.plotLeft : d + c.xAxis[0].transB - c.plotLeft, y: e ? b.height - d - h : a ? f - g - m : f - g, width: e ? m : h, height: e ? h : m
                                }
                            }; return a
                        }(); f.prototype.getStacks = function () {
                            var c = this, a = c.inverted; c.yAxis.forEach(function (c) { c.stacking && c.stacking.stacks && c.hasVisibleSeries && (c.stacking.oldStacks = c.stacking.stacks) }); c.series.forEach(function (d) {
                                var g = d.xAxis && d.xAxis.options || {}; !d.options.stacking || !0 !== d.visible && !1 !== c.options.chart.ignoreHiddenSeries || (d.stackKey = [d.type, m(d.options.stack, ""), a ? g.top : g.left, a ? g.height :
                                    g.width].join())
                            })
                        }; B.compose(a); u.prototype.setGroupedPoints = function () { var c = this.yAxis.stacking; this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length ? u.prototype.setStackedPoints.call(this, "group") : c && g(c.stacks, function (a, d) { "group" === d.slice(-5) && (g(a, function (c) { return c.destroy() }), delete c.stacks[d]) }) }; u.prototype.setStackedPoints = function (c) {
                            var a = c || this.options.stacking; if (a && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                                var g =
                                    this.processedXData, f = this.processedYData, k = [], h = f.length, l = this.options, b = l.threshold, z = m(l.startFromThreshold && b, 0); l = l.stack; c = c ? this.type + "," + a : this.stackKey; var e = "-" + c, u = this.negStacks, p = this.yAxis, x = p.stacking.stacks, J = p.stacking.oldStacks, y, w; p.stacking.stacksTouched += 1; for (w = 0; w < h; w++) {
                                        var C = g[w]; var B = f[w]; var D = this.getStackIndicator(D, C, this.index); var I = D.key; var K = (y = u && B < (z ? 0 : b)) ? e : c; x[K] || (x[K] = {}); x[K][C] || (J[K] && J[K][C] ? (x[K][C] = J[K][C], x[K][C].total = null) : x[K][C] = new E(p, p.options.stackLabels,
                                            y, C, l)); K = x[K][C]; null !== B ? (K.points[I] = K.points[this.index] = [m(K.cumulative, z)], n(K.cumulative) || (K.base = I), K.touched = p.stacking.stacksTouched, 0 < D.index && !1 === this.singleStacks && (K.points[I][0] = K.points[this.index + "," + C + ",0"][0])) : K.points[I] = K.points[this.index] = null; "percent" === a ? (y = y ? c : e, u && x[y] && x[y][C] ? (y = x[y][C], K.total = y.total = Math.max(y.total, K.total) + Math.abs(B) || 0) : K.total = t(K.total + (Math.abs(B) || 0))) : "group" === a ? (d(B) && (B = B[0]), null !== B && (K.total = (K.total || 0) + 1)) : K.total = t(K.total + (B ||
                                                0)); K.cumulative = "group" === a ? (K.total || 1) - 1 : m(K.cumulative, z) + (B || 0); null !== B && (K.points[I].push(K.cumulative), k[w] = K.cumulative, K.hasValidPoints = !0)
                                    } "percent" === a && (p.stacking.usePercentage = !0); "group" !== a && (this.stackedYData = k); p.stacking.oldStacks = {}
                            }
                        }; u.prototype.modifyStacks = function () {
                            var c = this, a = c.stackKey, d = c.yAxis.stacking.stacks, g = c.processedXData, k, h = c.options.stacking; c[h + "Stacker"] && [a, "-" + a].forEach(function (a) {
                                for (var b = g.length, m, e; b--;)if (m = g[b], k = c.getStackIndicator(k, m, c.index,
                                    a), e = (m = d[a] && d[a][m]) && m.points[k.key]) c[h + "Stacker"](e, m, b)
                            })
                        }; u.prototype.percentStacker = function (c, a, d) { a = a.total ? 100 / a.total : 0; c[0] = t(c[0] * a); c[1] = t(c[1] * a); this.stackedYData[d] = c[1] }; u.prototype.getStackIndicator = function (c, a, d, g) { !n(c) || c.x !== a || g && c.stackKey !== g ? c = { x: a, index: 0, key: g, stackKey: g } : c.index++; c.key = [d, a, c.index].join(); return c }; D.StackItem = E; ""; return D.StackItem
                    }); G(f, "Series/Line/LineSeries.js", [f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]],
                        function (a, f, w) {
                            var D = this && this.__extends || function () { var a = function (f, t) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, f) { a.__proto__ = f } || function (a, f) { for (var d in f) f.hasOwnProperty(d) && (a[d] = f[d]) }; return a(f, t) }; return function (f, t) { function n() { this.constructor = f } a(f, t); f.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) } }(), u = w.defined, B = w.merge; w = function (f) {
                                function y() {
                                    var a = null !== f && f.apply(this, arguments) || this; a.data = void 0; a.options = void 0; a.points =
                                        void 0; return a
                                } D(y, f); y.prototype.drawGraph = function () {
                                    var a = this, f = this.options, l = (this.gappedPath || this.getGraphPath).call(this), d = this.chart.styledMode, c = [["graph", "highcharts-graph"]]; d || c[0].push(f.lineColor || this.color || "#cccccc", f.dashStyle); c = a.getZonesGraphs(c); c.forEach(function (c, m) {
                                        var g = c[0], n = a[g], t = n ? "animate" : "attr"; n ? (n.endX = a.preventGraphAnimation ? null : l.xMap, n.animate({ d: l })) : l.length && (a[g] = n = a.chart.renderer.path(l).addClass(c[1]).attr({ zIndex: 1 }).add(a.group)); n && !d && (g = {
                                            stroke: c[2],
                                            "stroke-width": f.lineWidth, fill: a.fillGraph && a.color || "none"
                                        }, c[3] ? g.dashstyle = c[3] : "square" !== f.linecap && (g["stroke-linecap"] = g["stroke-linejoin"] = "round"), n[t](g).shadow(2 > m && f.shadow)); n && (n.startX = l.xMap, n.isArea = l.isArea)
                                    })
                                }; y.prototype.getGraphPath = function (a, f, l) {
                                    var d = this, c = d.options, g = [], m = [], n, t = c.step; a = a || d.points; var A = a.reversed; A && a.reverse(); (t = { right: 1, center: 2 }[t] || t && 3) && A && (t = 4 - t); a = this.getValidPoints(a, !1, !(c.connectNulls && !f && !l)); a.forEach(function (r, q) {
                                        var k = r.plotX, h = r.plotY,
                                        v = a[q - 1]; (r.leftCliff || v && v.rightCliff) && !l && (n = !0); r.isNull && !u(f) && 0 < q ? n = !c.connectNulls : r.isNull && !f ? n = !0 : (0 === q || n ? q = [["M", r.plotX, r.plotY]] : d.getPointSpline ? q = [d.getPointSpline(a, r, q)] : t ? (q = 1 === t ? [["L", v.plotX, h]] : 2 === t ? [["L", (v.plotX + k) / 2, v.plotY], ["L", (v.plotX + k) / 2, h]] : [["L", k, v.plotY]], q.push(["L", k, h])) : q = [["L", k, h]], m.push(r.x), t && (m.push(r.x), 2 === t && m.push(r.x)), g.push.apply(g, q), n = !1)
                                    }); g.xMap = m; return d.graphPath = g
                                }; y.prototype.getZonesGraphs = function (a) {
                                    this.zones.forEach(function (f,
                                        l) { l = ["zone-graph-" + l, "highcharts-graph highcharts-zone-graph-" + l + " " + (f.className || "")]; this.chart.styledMode || l.push(f.color || this.color, f.dashStyle || this.options.dashStyle); a.push(l) }, this); return a
                                }; y.defaultOptions = B(a.defaultOptions, {}); return y
                            }(a); f.registerSeriesType("line", w); ""; return w
                        }); G(f, "Series/Area/AreaSeries.js", [f["Core/Color/Color.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, w, D) {
                            var u = this && this.__extends || function () {
                                var a =
                                    function (d, c) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, a) { c.__proto__ = a } || function (c, a) { for (var d in a) a.hasOwnProperty(d) && (c[d] = a[d]) }; return a(d, c) }; return function (d, c) { function g() { this.constructor = d } a(d, c); d.prototype = null === c ? Object.create(c) : (g.prototype = c.prototype, new g) }
                            }(), B = a.parse, C = w.seriesTypes.line; a = D.extend; var y = D.merge, t = D.objectEach, n = D.pick; D = function (a) {
                                function d() {
                                    var c = null !== a && a.apply(this, arguments) || this; c.data = void 0; c.options = void 0; c.points =
                                        void 0; return c
                                } u(d, a); d.prototype.drawGraph = function () {
                                    this.areaPath = []; a.prototype.drawGraph.apply(this); var c = this, d = this.areaPath, f = this.options, l = [["area", "highcharts-area", this.color, f.fillColor]]; this.zones.forEach(function (a, d) { l.push(["zone-area-" + d, "highcharts-area highcharts-zone-area-" + d + " " + a.className, a.color || c.color, a.fillColor || f.fillColor]) }); l.forEach(function (a) {
                                        var g = a[0], m = c[g], l = m ? "animate" : "attr", k = {}; m ? (m.endX = c.preventGraphAnimation ? null : d.xMap, m.animate({ d: d })) : (k.zIndex =
                                            0, m = c[g] = c.chart.renderer.path(d).addClass(a[1]).add(c.group), m.isArea = !0); c.chart.styledMode || (k.fill = n(a[3], B(a[2]).setOpacity(n(f.fillOpacity, .75)).get())); m[l](k); m.startX = d.xMap; m.shiftUnit = f.step ? 2 : 1
                                    })
                                }; d.prototype.getGraphPath = function (c) {
                                    var a = C.prototype.getGraphPath, d = this.options, f = d.stacking, l = this.yAxis, t, r = [], q = [], k = this.index, h = l.stacking.stacks[this.stackKey], v = d.threshold, b = Math.round(l.getThreshold(d.threshold)); d = n(d.connectNulls, "percent" === f); var F = function (a, e, d) {
                                        var g = c[a];
                                        a = f && h[g.x].points[k]; var p = g[d + "Null"] || 0; d = g[d + "Cliff"] || 0; g = !0; if (d || p) { var m = (p ? a[0] : a[1]) + d; var n = a[0] + d; g = !!p } else !f && c[e] && c[e].isNull && (m = n = v); "undefined" !== typeof m && (q.push({ plotX: u, plotY: null === m ? b : l.getThreshold(m), isNull: g, isCliff: !0 }), r.push({ plotX: u, plotY: null === n ? b : l.getThreshold(n), doCurve: !1 }))
                                    }; c = c || this.points; f && (c = this.getStackPoints(c)); for (t = 0; t < c.length; t++) {
                                        f || (c[t].leftCliff = c[t].rightCliff = c[t].leftNull = c[t].rightNull = void 0); var e = c[t].isNull; var u = n(c[t].rectPlotX, c[t].plotX);
                                        var p = f ? n(c[t].yBottom, b) : b; if (!e || d) d || F(t, t - 1, "left"), e && !f && d || (q.push(c[t]), r.push({ x: t, plotX: u, plotY: p })), d || F(t, t + 1, "right")
                                    } t = a.call(this, q, !0, !0); r.reversed = !0; e = a.call(this, r, !0, !0); (p = e[0]) && "M" === p[0] && (e[0] = ["L", p[1], p[2]]); e = t.concat(e); e.length && e.push(["Z"]); a = a.call(this, q, !1, d); e.xMap = t.xMap; this.areaPath = e; return a
                                }; d.prototype.getStackPoints = function (c) {
                                    var a = this, d = [], f = [], l = this.xAxis, A = this.yAxis, r = A.stacking.stacks[this.stackKey], q = {}, k = A.series, h = k.length, v = A.options.reversedStacks ?
                                        1 : -1, b = k.indexOf(a); c = c || this.points; if (this.options.stacking) {
                                            for (var F = 0; F < c.length; F++)c[F].leftNull = c[F].rightNull = void 0, q[c[F].x] = c[F]; t(r, function (b, c) { null !== b.total && f.push(c) }); f.sort(function (b, c) { return b - c }); var e = k.map(function (b) { return b.visible }); f.forEach(function (c, g) {
                                                var p = 0, m, t; if (q[c] && !q[c].isNull) d.push(q[c]), [-1, 1].forEach(function (d) {
                                                    var p = 1 === d ? "rightNull" : "leftNull", l = 0, n = r[f[g + d]]; if (n) for (var x = b; 0 <= x && x < h;) {
                                                        var F = k[x].index; m = n.points[F]; m || (F === a.index ? q[c][p] = !0 : e[x] &&
                                                            (t = r[c].points[F]) && (l -= t[1] - t[0])); x += v
                                                    } q[c][1 === d ? "rightCliff" : "leftCliff"] = l
                                                }); else { for (var F = b; 0 <= F && F < h;) { if (m = r[c].points[k[F].index]) { p = m[1]; break } F += v } p = n(p, 0); p = A.translate(p, 0, 1, 0, 1); d.push({ isNull: !0, plotX: l.translate(c, 0, 0, 0, 1), x: c, plotY: p, yBottom: p }) }
                                            })
                                        } return d
                                }; d.defaultOptions = y(C.defaultOptions, { threshold: 0 }); return d
                            }(C); a(D.prototype, { singleStacks: !1, drawLegendSymbol: f.drawRectangle }); w.registerSeriesType("area", D); ""; return D
                        }); G(f, "Series/Spline/SplineSeries.js", [f["Core/Series/SeriesRegistry.js"],
                        f["Core/Utilities.js"]], function (a, f) {
                            var w = this && this.__extends || function () { var a = function (f, t) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, f) { a.__proto__ = f } || function (a, f) { for (var d in f) f.hasOwnProperty(d) && (a[d] = f[d]) }; return a(f, t) }; return function (f, t) { function n() { this.constructor = f } a(f, t); f.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) } }(), D = a.seriesTypes.line, u = f.merge, B = f.pick; f = function (a) {
                                function f() {
                                    var f = null !== a && a.apply(this, arguments) ||
                                        this; f.data = void 0; f.options = void 0; f.points = void 0; return f
                                } w(f, a); f.prototype.getPointSpline = function (a, f, l) {
                                    var d = f.plotX || 0, c = f.plotY || 0, g = a[l - 1]; l = a[l + 1]; if (g && !g.isNull && !1 !== g.doCurve && !f.isCliff && l && !l.isNull && !1 !== l.doCurve && !f.isCliff) {
                                        a = g.plotY || 0; var m = l.plotX || 0; l = l.plotY || 0; var n = 0; var t = (1.5 * d + (g.plotX || 0)) / 2.5; var A = (1.5 * c + a) / 2.5; m = (1.5 * d + m) / 2.5; var r = (1.5 * c + l) / 2.5; m !== t && (n = (r - A) * (m - d) / (m - t) + c - r); A += n; r += n; A > a && A > c ? (A = Math.max(a, c), r = 2 * c - A) : A < a && A < c && (A = Math.min(a, c), r = 2 * c - A); r > l &&
                                            r > c ? (r = Math.max(l, c), A = 2 * c - r) : r < l && r < c && (r = Math.min(l, c), A = 2 * c - r); f.rightContX = m; f.rightContY = r
                                    } f = ["C", B(g.rightContX, g.plotX, 0), B(g.rightContY, g.plotY, 0), B(t, d, 0), B(A, c, 0), d, c]; g.rightContX = g.rightContY = void 0; return f
                                }; f.defaultOptions = u(D.defaultOptions); return f
                            }(D); a.registerSeriesType("spline", f); ""; return f
                        }); G(f, "Series/AreaSpline/AreaSplineSeries.js", [f["Series/Area/AreaSeries.js"], f["Series/Spline/SplineSeries.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]],
                            function (a, f, w, D, u) {
                                var B = this && this.__extends || function () { var a = function (f, d) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, a) { c.__proto__ = a } || function (c, a) { for (var d in a) a.hasOwnProperty(d) && (c[d] = a[d]) }; return a(f, d) }; return function (f, d) { function c() { this.constructor = f } a(f, d); f.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype, new c) } }(), C = a.prototype, y = u.extend, t = u.merge; u = function (n) {
                                    function l() {
                                        var a = null !== n && n.apply(this, arguments) || this; a.data = void 0; a.points =
                                            void 0; a.options = void 0; return a
                                    } B(l, n); l.defaultOptions = t(f.defaultOptions, a.defaultOptions); return l
                                }(f); y(u.prototype, { getGraphPath: C.getGraphPath, getStackPoints: C.getStackPoints, drawGraph: C.drawGraph, drawLegendSymbol: w.drawRectangle }); D.registerSeriesType("areaspline", u); ""; return u
                            }); G(f, "Series/Column/ColumnSeries.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"],
                            f["Core/Utilities.js"]], function (a, f, w, D, u, B, C) {
                                var y = this && this.__extends || function () { var c = function (a, b) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, c) { b.__proto__ = c } || function (b, c) { for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]) }; return c(a, b) }; return function (a, b) { function d() { this.constructor = a } c(a, b); a.prototype = null === b ? Object.create(b) : (d.prototype = b.prototype, new d) } }(), t = a.animObject, n = f.parse, l = w.hasTouch; a = w.noop; var d = C.clamp, c = C.css, g = C.defined, m = C.extend, E = C.fireEvent,
                                    z = C.isArray, A = C.isNumber, r = C.merge, q = C.pick, k = C.objectEach; C = function (a) {
                                        function h() { var b = null !== a && a.apply(this, arguments) || this; b.borderWidth = void 0; b.data = void 0; b.group = void 0; b.options = void 0; b.points = void 0; return b } y(h, a); h.prototype.animate = function (b) {
                                            var c = this, a = this.yAxis, h = c.options, g = this.chart.inverted, k = {}, f = g ? "translateX" : "translateY"; if (b) k.scaleY = .001, b = d(a.toPixels(h.threshold), a.pos, a.pos + a.len), g ? k.translateX = b - a.len : k.translateY = b, c.clipBox && c.setClip(), c.group.attr(k); else {
                                                var l =
                                                    Number(c.group.attr(f)); c.group.animate({ scaleY: 1 }, m(t(c.options.animation), { step: function (b, e) { c.group && (k[f] = l + e.pos * (a.pos - l), c.group.attr(k)) } }))
                                            }
                                        }; h.prototype.init = function (b, c) { a.prototype.init.apply(this, arguments); var e = this; b = e.chart; b.hasRendered && b.series.forEach(function (b) { b.type === e.type && (b.isDirty = !0) }) }; h.prototype.getColumnMetrics = function () {
                                            var b = this, c = b.options, a = b.xAxis, d = b.yAxis, h = a.options.reversedStacks; h = a.reversed && !h || !a.reversed && h; var g = {}, k, f = 0; !1 === c.grouping ? f = 1 : b.chart.series.forEach(function (c) {
                                                var a =
                                                    c.yAxis, e = c.options; if (c.type === b.type && (c.visible || !b.chart.options.chart.ignoreHiddenSeries) && d.len === a.len && d.pos === a.pos) { if (e.stacking && "group" !== e.stacking) { k = c.stackKey; "undefined" === typeof g[k] && (g[k] = f++); var h = g[k] } else !1 !== e.grouping && (h = f++); c.columnIndex = h }
                                            }); var m = Math.min(Math.abs(a.transA) * (a.ordinal && a.ordinal.slope || c.pointRange || a.closestPointRange || a.tickInterval || 1), a.len), l = m * c.groupPadding, n = (m - 2 * l) / (f || 1); c = Math.min(c.maxPointWidth || a.len, q(c.pointWidth, n * (1 - 2 * c.pointPadding)));
                                            b.columnMetrics = { width: c, offset: (n - c) / 2 + (l + ((b.columnIndex || 0) + (h ? 1 : 0)) * n - m / 2) * (h ? -1 : 1), paddedWidth: n, columnCount: f }; return b.columnMetrics
                                        }; h.prototype.crispCol = function (b, c, a, d) { var e = this.chart, h = this.borderWidth, g = -(h % 2 ? .5 : 0); h = h % 2 ? .5 : 1; e.inverted && e.renderer.isVML && (h += 1); this.options.crisp && (a = Math.round(b + a) + g, b = Math.round(b) + g, a -= b); d = Math.round(c + d) + h; g = .5 >= Math.abs(c) && .5 < d; c = Math.round(c) + h; d -= c; g && d && (--c, d += 1); return { x: b, y: c, width: a, height: d } }; h.prototype.adjustForMissingColumns = function (b,
                                            c, a, d) { var e = this, h = this.options.stacking; if (!a.isNull && 1 < d.columnCount) { var g = this.yAxis.options.reversedStacks, f = 0, m = g ? 0 : -d.columnCount; k(this.yAxis.stacking && this.yAxis.stacking.stacks, function (b) { if ("number" === typeof a.x && (b = b[a.x.toString()])) { var c = b.points[e.index], d = b.total; h ? (c && (f = m), b.hasValidPoints && (g ? m++ : m--)) : z(c) && (f = c[1], m = d || 0) } }); b = (a.plotX || 0) + ((m - 1) * d.paddedWidth + c) / 2 - c - f * d.paddedWidth } return b }; h.prototype.translate = function () {
                                                var b = this, c = b.chart, a = b.options, h = b.dense = 2 > b.closestPointRange *
                                                    b.xAxis.transA; h = b.borderWidth = q(a.borderWidth, h ? 0 : 1); var k = b.xAxis, f = b.yAxis, m = a.threshold, l = b.translatedThreshold = f.getThreshold(m), n = q(a.minPointLength, 5), r = b.getColumnMetrics(), v = r.width, t = b.pointXOffset = r.offset, z = b.dataMin, E = b.dataMax, y = b.barW = Math.max(v, 1 + 2 * h); c.inverted && (l -= .5); a.pointPadding && (y = Math.ceil(y)); u.prototype.translate.apply(b); b.points.forEach(function (e) {
                                                        var h = q(e.yBottom, l), p = 999 + Math.abs(h), x = e.plotX || 0; p = d(e.plotY, -p, f.len + p); var F = Math.min(p, h), u = Math.max(p, h) - F, J = v, w =
                                                            x + t, B = y; n && Math.abs(u) < n && (u = n, x = !f.reversed && !e.negative || f.reversed && e.negative, A(m) && A(E) && e.y === m && E <= m && (f.min || 0) < m && (z !== E || (f.max || 0) <= m) && (x = !x), F = Math.abs(F - l) > n ? h - n : l - (x ? n : 0)); g(e.options.pointWidth) && (J = B = Math.ceil(e.options.pointWidth), w -= Math.round((J - v) / 2)); a.centerInCategory && (w = b.adjustForMissingColumns(w, J, e, r)); e.barX = w; e.pointWidth = J; e.tooltipPos = c.inverted ? [d(f.len + f.pos - c.plotLeft - p, f.pos - c.plotLeft, f.len + f.pos - c.plotLeft), k.len + k.pos - c.plotTop - w - B / 2, u] : [k.left - c.plotLeft + w +
                                                                B / 2, d(p + f.pos - c.plotTop, f.pos - c.plotTop, f.len + f.pos - c.plotTop), u]; e.shapeType = b.pointClass.prototype.shapeType || "rect"; e.shapeArgs = b.crispCol.apply(b, e.isNull ? [w, l, B, 0] : [w, F, B, u])
                                                    })
                                            }; h.prototype.drawGraph = function () { this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data") }; h.prototype.pointAttribs = function (b, c) {
                                                var a = this.options, d = this.pointAttrToOptions || {}, h = d.stroke || "borderColor", g = d["stroke-width"] || "borderWidth", k = b && b.color || this.color, f = b && b[h] || a[h] || k; d = b && b.options.dashStyle ||
                                                    a.dashStyle; var m = b && b[g] || a[g] || this[g] || 0, l = q(b && b.opacity, a.opacity, 1); if (b && this.zones.length) { var v = b.getZone(); k = b.options.color || v && (v.color || b.nonZonedColor) || this.color; v && (f = v.borderColor || f, d = v.dashStyle || d, m = v.borderWidth || m) } c && b && (b = r(a.states[c], b.options.states && b.options.states[c] || {}), c = b.brightness, k = b.color || "undefined" !== typeof c && n(k).brighten(b.brightness).get() || k, f = b[h] || f, m = b[g] || m, d = b.dashStyle || d, l = q(b.opacity, l)); h = { fill: k, stroke: f, "stroke-width": m, opacity: l }; d && (h.dashstyle =
                                                        d); return h
                                            }; h.prototype.drawPoints = function () {
                                                var b = this, c = this.chart, a = b.options, d = c.renderer, h = a.animationLimit || 250, g; b.points.forEach(function (e) {
                                                    var k = e.graphic, f = !!k, p = k && c.pointCount < h ? "animate" : "attr"; if (A(e.plotY) && null !== e.y) {
                                                        g = e.shapeArgs; k && e.hasNewShapeType() && (k = k.destroy()); b.enabledDataSorting && (e.startXPos = b.xAxis.reversed ? -(g ? g.width || 0 : 0) : b.xAxis.width); k || (e.graphic = k = d[e.shapeType](g).add(e.group || b.group)) && b.enabledDataSorting && c.hasRendered && c.pointCount < h && (k.attr({ x: e.startXPos }),
                                                            f = !0, p = "animate"); if (k && f) k[p](r(g)); if (a.borderRadius) k[p]({ r: a.borderRadius }); c.styledMode || k[p](b.pointAttribs(e, e.selected && "select")).shadow(!1 !== e.allowShadow && a.shadow, null, a.stacking && !a.borderRadius); k && (k.addClass(e.getClassName(), !0), k.attr({ visibility: e.visible ? "inherit" : "hidden" }))
                                                    } else k && (e.graphic = k.destroy())
                                                })
                                            }; h.prototype.drawTracker = function () {
                                                var b = this, a = b.chart, e = a.pointer, d = function (b) { var c = e.getPointFromEvent(b); "undefined" !== typeof c && (e.isDirectTouch = !0, c.onMouseOver(b)) },
                                                h; b.points.forEach(function (b) { h = z(b.dataLabels) ? b.dataLabels : b.dataLabel ? [b.dataLabel] : []; b.graphic && (b.graphic.element.point = b); h.forEach(function (c) { c.div ? c.div.point = b : c.element.point = b }) }); b._hasTracking || (b.trackerGroups.forEach(function (h) { if (b[h]) { b[h].addClass("highcharts-tracker").on("mouseover", d).on("mouseout", function (b) { e.onTrackerMouseOut(b) }); if (l) b[h].on("touchstart", d); !a.styledMode && b.options.cursor && b[h].css(c).css({ cursor: b.options.cursor }) } }), b._hasTracking = !0); E(this, "afterDrawTracker")
                                            };
                                        h.prototype.remove = function () { var b = this, c = b.chart; c.hasRendered && c.series.forEach(function (c) { c.type === b.type && (c.isDirty = !0) }); u.prototype.remove.apply(b, arguments) }; h.defaultOptions = r(u.defaultOptions, {
                                            borderRadius: 0, centerInCategory: !1, groupPadding: .2, marker: null, pointPadding: .1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: .1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: !0, stickyTracking: !1,
                                            tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff"
                                        }); return h
                                    }(u); m(C.prototype, { cropShoulder: 0, directTouch: !0, drawLegendSymbol: D.drawRectangle, getSymbol: a, negStacks: !0, trackerGroups: ["group", "dataLabelsGroup"] }); B.registerSeriesType("column", C); ""; ""; return C
                            }); G(f, "Core/Series/DataLabel.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/FormatUtilities.js"], f["Core/Utilities.js"]], function (a, f, w) {
                                var D = a.getDeferredAnimation, u = f.format, B = w.defined, C = w.extend, y = w.fireEvent, t = w.isArray, n =
                                    w.merge, l = w.objectEach, d = w.pick, c = w.splat, g; (function (a) {
                                        function g(c, b, a, e, h) {
                                            var g = this, k = this.chart, f = this.isCartesian && k.inverted, m = this.enabledDataSorting, l = d(c.dlBox && c.dlBox.centerX, c.plotX), n = c.plotY, q = a.rotation, r = a.align, v = B(l) && B(n) && k.isInsidePlot(l, Math.round(n), { inverted: f, paneCoordinates: !0, series: g }), t = function (a) { m && g.xAxis && !A && g.setDataLabelStartPos(c, b, h, v, a) }, A = "justify" === d(a.overflow, m ? "none" : "justify"), z = this.visible && !1 !== c.visible && (c.series.forceDL || m && !A || v || d(a.inside,
                                                !!this.options.stacking) && e && k.isInsidePlot(l, f ? e.x + 1 : e.y + e.height - 1, { inverted: f, paneCoordinates: !0, series: g })); if (z && B(l) && B(n)) {
                                                    q && b.attr({ align: r }); r = b.getBBox(!0); var u = [0, 0]; var F = k.renderer.fontMetrics(k.styledMode ? void 0 : a.style.fontSize, b).b; e = C({ x: f ? this.yAxis.len - n : l, y: Math.round(f ? this.xAxis.len - l : n), width: 0, height: 0 }, e); C(a, { width: r.width, height: r.height }); q ? (A = !1, u = k.renderer.rotCorr(F, q), l = { x: e.x + (a.x || 0) + e.width / 2 + u.x, y: e.y + (a.y || 0) + { top: 0, middle: .5, bottom: 1 }[a.verticalAlign] * e.height },
                                                        u = [r.x - Number(b.attr("x")), r.y - Number(b.attr("y"))], t(l), b[h ? "attr" : "animate"](l)) : (t(e), b.align(a, void 0, e), l = b.alignAttr); A && 0 <= e.height ? this.justifyDataLabel(b, a, l, r, e, h) : d(a.crop, !0) && (e = l.x, t = l.y, e += u[0], t += u[1], z = k.isInsidePlot(e, t, { paneCoordinates: !0, series: g }) && k.isInsidePlot(e + r.width, t + r.height, { paneCoordinates: !0, series: g })); if (a.shape && !q) b[h ? "attr" : "animate"]({ anchorX: f ? k.plotWidth - c.plotY : c.plotX, anchorY: f ? k.plotHeight - c.plotX : c.plotY })
                                                } h && m && (b.placed = !1); z || m && !A ? b.show() : (b.hide(),
                                                    b.placed = !1)
                                        } function f(c, b) { var a = b.filter; return a ? (b = a.operator, c = c[a.property], a = a.value, ">" === b && c > a || "<" === b && c < a || ">=" === b && c >= a || "<=" === b && c <= a || "==" === b && c == a || "===" === b && c === a ? !0 : !1) : !0 } function m() {
                                            var a = this, b = a.chart, h = a.options, e = a.points, g = a.hasRendered || 0, k = b.renderer, m = h.dataLabels, n, r = m.animation; r = m.defer ? D(b, r, a) : { defer: 0, duration: 0 }; m = q(q(b.options.plotOptions && b.options.plotOptions.series && b.options.plotOptions.series.dataLabels, b.options.plotOptions && b.options.plotOptions[a.type] &&
                                                b.options.plotOptions[a.type].dataLabels), m); y(this, "drawDataLabels"); if (t(m) || m.enabled || a._hasPointLabels) {
                                                    var A = a.plotGroup("dataLabelsGroup", "data-labels", g ? "inherit" : "hidden", m.zIndex || 6); A.attr({ opacity: +g }); !g && (g = a.dataLabelsGroup) && (a.visible && A.show(), g[h.animation ? "animate" : "attr"]({ opacity: 1 }, r)); e.forEach(function (e) {
                                                        n = c(q(m, e.dlOptions || e.options && e.options.dataLabels)); n.forEach(function (c, g) {
                                                            var p = c.enabled && (!e.isNull || e.dataLabelOnNull) && f(e, c), m = e.connectors ? e.connectors[g] : e.connector,
                                                            n = e.dataLabels ? e.dataLabels[g] : e.dataLabel, q = !n, r = d(c.distance, e.labelDistance); if (p) {
                                                                var v = e.getLabelConfig(); var x = d(c[e.formatPrefix + "Format"], c.format); v = B(x) ? u(x, v, b) : (c[e.formatPrefix + "Formatter"] || c.formatter).call(v, c); x = c.style; var t = c.rotation; b.styledMode || (x.color = d(c.color, x.color, a.color, "#000000"), "contrast" === x.color ? (e.contrastColor = k.getContrast(e.color || a.color), x.color = !B(r) && c.inside || 0 > r || h.stacking ? e.contrastColor : "#000000") : delete e.contrastColor, h.cursor && (x.cursor = h.cursor));
                                                                var z = { r: c.borderRadius || 0, rotation: t, padding: c.padding, zIndex: 1 }; b.styledMode || (z.fill = c.backgroundColor, z.stroke = c.borderColor, z["stroke-width"] = c.borderWidth); l(z, function (b, c) { "undefined" === typeof b && delete z[c] })
                                                            } !n || p && B(v) && !!n.div === !!c.useHTML && (n.rotation && c.rotation || n.rotation === c.rotation) || (q = !0, e.dataLabel = n = e.dataLabel && e.dataLabel.destroy(), e.dataLabels && (1 === e.dataLabels.length ? delete e.dataLabels : delete e.dataLabels[g]), g || delete e.dataLabel, m && (e.connector = e.connector.destroy(),
                                                                e.connectors && (1 === e.connectors.length ? delete e.connectors : delete e.connectors[g]))); p && B(v) ? (n ? z.text = v : (e.dataLabels = e.dataLabels || [], n = e.dataLabels[g] = t ? k.text(v, 0, 0, c.useHTML).addClass("highcharts-data-label") : k.label(v, 0, 0, c.shape, null, null, c.useHTML, null, "data-label"), g || (e.dataLabel = n), n.addClass(" highcharts-data-label-color-" + e.colorIndex + " " + (c.className || "") + (c.useHTML ? " highcharts-tracker" : ""))), n.options = c, n.attr(z), b.styledMode || n.css(x).shadow(c.shadow), n.added || n.add(A), c.textPath &&
                                                                    !c.useHTML && (n.setTextPath(e.getDataLabelPath && e.getDataLabelPath(n) || e.graphic, c.textPath), e.dataLabelPath && !c.textPath.enabled && (e.dataLabelPath = e.dataLabelPath.destroy())), a.alignDataLabel(e, n, c, null, q)) : n && n.hide()
                                                        })
                                                    })
                                                } y(this, "afterDrawDataLabels")
                                        } function r(c, b, a, e, d, h) {
                                            var g = this.chart, k = b.align, f = b.verticalAlign, p = c.box ? 0 : c.padding || 0, m = b.x; m = void 0 === m ? 0 : m; var l = b.y; l = void 0 === l ? 0 : l; var n = (a.x || 0) + p; if (0 > n) { "right" === k && 0 <= m ? (b.align = "left", b.inside = !0) : m -= n; var q = !0 } n = (a.x || 0) + e.width - p;
                                            n > g.plotWidth && ("left" === k && 0 >= m ? (b.align = "right", b.inside = !0) : m += g.plotWidth - n, q = !0); n = a.y + p; 0 > n && ("bottom" === f && 0 <= l ? (b.verticalAlign = "top", b.inside = !0) : l -= n, q = !0); n = (a.y || 0) + e.height - p; n > g.plotHeight && ("top" === f && 0 >= l ? (b.verticalAlign = "bottom", b.inside = !0) : l += g.plotHeight - n, q = !0); q && (b.x = m, b.y = l, c.placed = !h, c.align(b, void 0, d)); return q
                                        } function q(c, b) {
                                            var a = [], e; if (t(c) && !t(b)) a = c.map(function (c) { return n(c, b) }); else if (t(b) && !t(c)) a = b.map(function (b) { return n(c, b) }); else if (t(c) || t(b)) for (e =
                                                Math.max(c.length, b.length); e--;)a[e] = n(c[e], b[e]); else a = n(c, b); return a
                                        } function k(c, b, a, e, d) { var h = this.chart, g = h.inverted, k = this.xAxis, f = k.reversed, m = g ? b.height / 2 : b.width / 2; c = (c = c.pointWidth) ? c / 2 : 0; b.startXPos = g ? d.x : f ? -m - c : k.width - m + c; b.startYPos = g ? f ? this.yAxis.height - m + c : -m - c : d.y; e ? "hidden" === b.visibility && (b.show(), b.attr({ opacity: 0 }).animate({ opacity: 1 })) : b.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, b.hide); h.hasRendered && (a && b.attr({ x: b.startXPos, y: b.startYPos }), b.placed = !0) } var h = []; a.compose =
                                            function (c) { if (-1 === h.indexOf(c)) { var b = c.prototype; h.push(c); b.alignDataLabel = g; b.drawDataLabels = m; b.justifyDataLabel = r; b.setDataLabelStartPos = k } }
                                    })(g || (g = {})); ""; return g
                            }); G(f, "Series/Column/ColumnDataLabel.js", [f["Core/Series/DataLabel.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, w) {
                                var D = f.series, u = w.merge, B = w.pick, C; (function (f) {
                                    function t(a, d, c, g, f) {
                                        var m = this.chart.inverted, l = a.series, n = (l.xAxis ? l.xAxis.len : this.chart.plotSizeX) || 0; l = (l.yAxis ? l.yAxis.len : this.chart.plotSizeY) ||
                                            0; var r = a.dlBox || a.shapeArgs, q = B(a.below, a.plotY > B(this.translatedThreshold, l)), k = B(c.inside, !!this.options.stacking); r && (g = u(r), 0 > g.y && (g.height += g.y, g.y = 0), r = g.y + g.height - l, 0 < r && r < g.height && (g.height -= r), m && (g = { x: l - g.y - g.height, y: n - g.x - g.width, width: g.height, height: g.width }), k || (m ? (g.x += q ? 0 : g.width, g.width = 0) : (g.y += q ? g.height : 0, g.height = 0))); c.align = B(c.align, !m || k ? "center" : q ? "right" : "left"); c.verticalAlign = B(c.verticalAlign, m || k ? "middle" : q ? "top" : "bottom"); D.prototype.alignDataLabel.call(this, a,
                                                d, c, g, f); c.inside && a.contrastColor && d.css({ color: a.contrastColor })
                                    } var n = []; f.compose = function (f) { a.compose(D); -1 === n.indexOf(f) && (n.push(f), f.prototype.alignDataLabel = t) }
                                })(C || (C = {})); return C
                            }); G(f, "Series/Bar/BarSeries.js", [f["Series/Column/ColumnSeries.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, w) {
                                var D = this && this.__extends || function () {
                                    var a = function (f, t) {
                                        a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, f) { a.__proto__ = f } || function (a, f) {
                                            for (var d in f) f.hasOwnProperty(d) &&
                                                (a[d] = f[d])
                                        }; return a(f, t)
                                    }; return function (f, t) { function n() { this.constructor = f } a(f, t); f.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }
                                }(), u = w.extend, B = w.merge; w = function (f) { function u() { var a = null !== f && f.apply(this, arguments) || this; a.data = void 0; a.options = void 0; a.points = void 0; return a } D(u, f); u.defaultOptions = B(a.defaultOptions, {}); return u }(a); u(w.prototype, { inverted: !0 }); f.registerSeriesType("bar", w); ""; return w
                            }); G(f, "Series/Scatter/ScatterSeries.js", [f["Series/Column/ColumnSeries.js"],
                            f["Series/Line/LineSeries.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, w, D) {
                                var u = this && this.__extends || function () { var a = function (f, l) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, c) { a.__proto__ = c } || function (a, c) { for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d]) }; return a(f, l) }; return function (f, l) { function d() { this.constructor = f } a(f, l); f.prototype = null === l ? Object.create(l) : (d.prototype = l.prototype, new d) } }(), B = D.addEvent, C = D.extend, y = D.merge; D =
                                    function (a) {
                                        function n() { var f = null !== a && a.apply(this, arguments) || this; f.data = void 0; f.options = void 0; f.points = void 0; return f } u(n, a); n.prototype.applyJitter = function () {
                                            var a = this, d = this.options.jitter, c = this.points.length; d && this.points.forEach(function (g, f) {
                                                ["x", "y"].forEach(function (m, l) {
                                                    var n = "plot" + m.toUpperCase(); if (d[m] && !g.isNull) {
                                                        var r = a[m + "Axis"]; var q = d[m] * r.transA; if (r && !r.isLog) {
                                                            var k = Math.max(0, g[n] - q); r = Math.min(r.len, g[n] + q); l = 1E4 * Math.sin(f + l * c); g[n] = k + (r - k) * (l - Math.floor(l)); "x" ===
                                                                m && (g.clientX = g.plotX)
                                                        }
                                                    }
                                                })
                                            })
                                        }; n.prototype.drawGraph = function () { this.options.lineWidth ? a.prototype.drawGraph.call(this) : this.graph && (this.graph = this.graph.destroy()) }; n.defaultOptions = y(f.defaultOptions, { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: !0 }, tooltip: { headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } }); return n
                                    }(f); C(D.prototype, {
                                        drawTracker: a.prototype.drawTracker,
                                        sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1
                                    }); B(D, "afterTranslate", function () { this.applyJitter() }); w.registerSeriesType("scatter", D); ""; return D
                            }); G(f, "Series/CenteredUtilities.js", [f["Core/Globals.js"], f["Core/Series/Series.js"], f["Core/Utilities.js"]], function (a, f, w) {
                                var D = a.deg2rad, u = w.isNumber, B = w.pick, C = w.relativeLength, y; (function (a) {
                                    a.getCenter = function () {
                                        var a = this.options, l = this.chart, d = 2 * (a.slicedOffset || 0),
                                        c = l.plotWidth - 2 * d, g = l.plotHeight - 2 * d, m = a.center, t = Math.min(c, g), z = a.thickness, A = a.size, r = a.innerSize || 0; "string" === typeof A && (A = parseFloat(A)); "string" === typeof r && (r = parseFloat(r)); a = [B(m[0], "50%"), B(m[1], "50%"), B(A && 0 > A ? void 0 : a.size, "100%"), B(r && 0 > r ? void 0 : a.innerSize || 0, "0%")]; !l.angular || this instanceof f || (a[3] = 0); for (m = 0; 4 > m; ++m)A = a[m], l = 2 > m || 2 === m && /%$/.test(A), a[m] = C(A, [c, g, t, a[2]][m]) + (l ? d : 0); a[3] > a[2] && (a[3] = a[2]); u(z) && 2 * z < a[2] && 0 < z && (a[3] = a[2] - 2 * z); return a
                                    }; a.getStartAndEndRadians = function (a,
                                        f) { a = u(a) ? a : 0; f = u(f) && f > a && 360 > f - a ? f : a + 360; return { start: D * (a + -90), end: D * (f + -90) } }
                                })(y || (y = {})); ""; return y
                            }); G(f, "Series/Pie/PiePoint.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Series/Point.js"], f["Core/Utilities.js"]], function (a, f, w) {
                                var D = this && this.__extends || function () {
                                    var a = function (d, c) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, a) { c.__proto__ = a } || function (c, a) { for (var d in a) a.hasOwnProperty(d) && (c[d] = a[d]) }; return a(d, c) }; return function (d, c) {
                                        function g() {
                                            this.constructor =
                                            d
                                        } a(d, c); d.prototype = null === c ? Object.create(c) : (g.prototype = c.prototype, new g)
                                    }
                                }(), u = a.setAnimation, B = w.addEvent, C = w.defined; a = w.extend; var y = w.isNumber, t = w.pick, n = w.relativeLength; f = function (a) {
                                    function d() { var c = null !== a && a.apply(this, arguments) || this; c.labelDistance = void 0; c.options = void 0; c.series = void 0; return c } D(d, a); d.prototype.getConnectorPath = function () {
                                        var c = this.labelPosition, a = this.series.options.dataLabels, d = this.connectorShapes, f = a.connectorShape; d[f] && (f = d[f]); return f.call(this, {
                                            x: c.final.x,
                                            y: c.final.y, alignment: c.alignment
                                        }, c.connectorPosition, a)
                                    }; d.prototype.getTranslate = function () { return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 } }; d.prototype.haloPath = function (c) { var a = this.shapeArgs; return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(a.x, a.y, a.r + c, a.r + c, { innerR: a.r - 1, start: a.start, end: a.end }) }; d.prototype.init = function () {
                                        var c = this; a.prototype.init.apply(this, arguments); this.name = t(this.name, "Slice"); var d = function (a) {
                                            c.slice("select" ===
                                                a.type)
                                        }; B(this, "select", d); B(this, "unselect", d); return this
                                    }; d.prototype.isValid = function () { return y(this.y) && 0 <= this.y }; d.prototype.setVisible = function (c, a) {
                                        var d = this, g = this.series, f = g.chart, l = g.options.ignoreHiddenPoint; a = t(a, l); c !== this.visible && (this.visible = this.options.visible = c = "undefined" === typeof c ? !this.visible : c, g.options.data[g.data.indexOf(this)] = this.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (a) { if (d[a]) d[a][c ? "show" : "hide"](c) }), this.legendItem && f.legend.colorizeItem(this,
                                            c), c || "hover" !== this.state || this.setState(""), l && (g.isDirty = !0), a && f.redraw())
                                    }; d.prototype.slice = function (c, a, d) { var g = this.series; u(d, g.chart); t(a, !0); this.sliced = this.options.sliced = C(c) ? c : !this.sliced; g.options.data[g.data.indexOf(this)] = this.options; this.graphic && this.graphic.animate(this.getTranslate()); this.shadowGroup && this.shadowGroup.animate(this.getTranslate()) }; return d
                                }(f); a(f.prototype, {
                                    connectorShapes: {
                                        fixedOffset: function (a, d, c) {
                                            var g = d.breakAt; d = d.touchingSliceAt; return [["M", a.x,
                                                a.y], c.softConnector ? ["C", a.x + ("left" === a.alignment ? -5 : 5), a.y, 2 * g.x - d.x, 2 * g.y - d.y, g.x, g.y] : ["L", g.x, g.y], ["L", d.x, d.y]]
                                        }, straight: function (a, d) { d = d.touchingSliceAt; return [["M", a.x, a.y], ["L", d.x, d.y]] }, crookedLine: function (a, d, c) {
                                            d = d.touchingSliceAt; var g = this.series, f = g.center[0], l = g.chart.plotWidth, t = g.chart.plotLeft; g = a.alignment; var A = this.shapeArgs.r; c = n(c.crookDistance, 1); l = "left" === g ? f + A + (l + t - f - A) * (1 - c) : t + (f - A) * c; c = ["L", l, a.y]; f = !0; if ("left" === g ? l > a.x || l < d.x : l < a.x || l > d.x) f = !1; a = [["M", a.x, a.y]];
                                            f && a.push(c); a.push(["L", d.x, d.y]); return a
                                        }
                                    }
                                }); return f
                            }); G(f, "Series/Pie/PieSeries.js", [f["Series/CenteredUtilities.js"], f["Series/Column/ColumnSeries.js"], f["Core/Globals.js"], f["Core/Legend/LegendSymbol.js"], f["Series/Pie/PiePoint.js"], f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Renderer/SVG/Symbols.js"], f["Core/Utilities.js"]], function (a, f, w, D, u, B, C, y, t) {
                                var n = this && this.__extends || function () {
                                    var c = function (a, d) {
                                        c = Object.setPrototypeOf || { __proto__: [] } instanceof Array &&
                                        function (c, a) { c.__proto__ = a } || function (c, a) { for (var d in a) a.hasOwnProperty(d) && (c[d] = a[d]) }; return c(a, d)
                                    }; return function (a, d) { function g() { this.constructor = a } c(a, d); a.prototype = null === d ? Object.create(d) : (g.prototype = d.prototype, new g) }
                                }(), l = a.getStartAndEndRadians; w = w.noop; var d = t.clamp, c = t.extend, g = t.fireEvent, m = t.merge, E = t.pick, z = t.relativeLength; t = function (c) {
                                    function a() {
                                        var a = null !== c && c.apply(this, arguments) || this; a.center = void 0; a.data = void 0; a.maxLabelDistance = void 0; a.options = void 0; a.points =
                                            void 0; return a
                                    } n(a, c); a.prototype.animate = function (c) { var a = this, d = a.points, g = a.startAngleRad; c || d.forEach(function (b) { var c = b.graphic, e = b.shapeArgs; c && e && (c.attr({ r: E(b.startR, a.center && a.center[3] / 2), start: g, end: g }), c.animate({ r: e.r, start: e.start, end: e.end }, a.options.animation)) }) }; a.prototype.drawEmpty = function () {
                                        var c = this.startAngleRad, a = this.endAngleRad, d = this.options; if (0 === this.total && this.center) {
                                            var g = this.center[0]; var b = this.center[1]; this.graph || (this.graph = this.chart.renderer.arc(g,
                                                b, this.center[1] / 2, 0, c, a).addClass("highcharts-empty-series").add(this.group)); this.graph.attr({ d: y.arc(g, b, this.center[2] / 2, 0, { start: c, end: a, innerR: this.center[3] / 2 }) }); this.chart.styledMode || this.graph.attr({ "stroke-width": d.borderWidth, fill: d.fillColor || "none", stroke: d.color || "#cccccc" })
                                        } else this.graph && (this.graph = this.graph.destroy())
                                    }; a.prototype.drawPoints = function () {
                                        var c = this.chart.renderer; this.points.forEach(function (a) {
                                            a.graphic && a.hasNewShapeType() && (a.graphic = a.graphic.destroy()); a.graphic ||
                                                (a.graphic = c[a.shapeType](a.shapeArgs).add(a.series.group), a.delayedRendering = !0)
                                        })
                                    }; a.prototype.generatePoints = function () { c.prototype.generatePoints.call(this); this.updateTotals() }; a.prototype.getX = function (c, a, h) { var g = this.center, b = this.radii ? this.radii[h.index] || 0 : g[2] / 2; c = Math.asin(d((c - g[1]) / (b + h.labelDistance), -1, 1)); return g[0] + (a ? -1 : 1) * Math.cos(c) * (b + h.labelDistance) + (0 < h.labelDistance ? (a ? -1 : 1) * this.options.dataLabels.padding : 0) }; a.prototype.hasData = function () { return !!this.processedXData.length };
                                    a.prototype.redrawPoints = function () {
                                        var c = this, a = c.chart, d = a.renderer, g = c.options.shadow, b, f, e, l; this.drawEmpty(); !g || c.shadowGroup || a.styledMode || (c.shadowGroup = d.g("shadow").attr({ zIndex: -1 }).add(c.group)); c.points.forEach(function (h) {
                                            var k = {}; f = h.graphic; if (!h.isNull && f) {
                                                var p = void 0; l = h.shapeArgs; b = h.getTranslate(); a.styledMode || (p = h.shadowGroup, g && !p && (p = h.shadowGroup = d.g("shadow").add(c.shadowGroup)), p && p.attr(b), e = c.pointAttribs(h, h.selected && "select")); h.delayedRendering ? (f.setRadialReference(c.center).attr(l).attr(b),
                                                    a.styledMode || f.attr(e).attr({ "stroke-linejoin": "round" }).shadow(g, p), h.delayedRendering = !1) : (f.setRadialReference(c.center), a.styledMode || m(!0, k, e), m(!0, k, l, b), f.animate(k)); f.attr({ visibility: h.visible ? "inherit" : "hidden" }); f.addClass(h.getClassName(), !0)
                                            } else f && (h.graphic = f.destroy())
                                        })
                                    }; a.prototype.sortByAngle = function (c, a) { c.sort(function (c, d) { return "undefined" !== typeof c.angle && (d.angle - c.angle) * a }) }; a.prototype.translate = function (c) {
                                        this.generatePoints(); var a = this.options, d = a.slicedOffset,
                                            f = d + (a.borderWidth || 0), b = l(a.startAngle, a.endAngle), m = this.startAngleRad = b.start; b = (this.endAngleRad = b.end) - m; var e = this.points, n = a.dataLabels.distance; a = a.ignoreHiddenPoint; var p = e.length, q, r = 0; c || (this.center = c = this.getCenter()); for (q = 0; q < p; q++) {
                                                var t = e[q]; var A = m + r * b; !t.isValid() || a && !t.visible || (r += t.percentage / 100); var u = m + r * b; var y = { x: c[0], y: c[1], r: c[2] / 2, innerR: c[3] / 2, start: Math.round(1E3 * A) / 1E3, end: Math.round(1E3 * u) / 1E3 }; t.shapeType = "arc"; t.shapeArgs = y; t.labelDistance = E(t.options.dataLabels &&
                                                    t.options.dataLabels.distance, n); t.labelDistance = z(t.labelDistance, y.r); this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, t.labelDistance); u = (u + A) / 2; u > 1.5 * Math.PI ? u -= 2 * Math.PI : u < -Math.PI / 2 && (u += 2 * Math.PI); t.slicedTranslation = { translateX: Math.round(Math.cos(u) * d), translateY: Math.round(Math.sin(u) * d) }; y = Math.cos(u) * c[2] / 2; var w = Math.sin(u) * c[2] / 2; t.tooltipPos = [c[0] + .7 * y, c[1] + .7 * w]; t.half = u < -Math.PI / 2 || u > Math.PI / 2 ? 1 : 0; t.angle = u; A = Math.min(f, t.labelDistance / 5); t.labelPosition = {
                                                        natural: {
                                                            x: c[0] + y +
                                                                Math.cos(u) * t.labelDistance, y: c[1] + w + Math.sin(u) * t.labelDistance
                                                        }, "final": {}, alignment: 0 > t.labelDistance ? "center" : t.half ? "right" : "left", connectorPosition: { breakAt: { x: c[0] + y + Math.cos(u) * A, y: c[1] + w + Math.sin(u) * A }, touchingSliceAt: { x: c[0] + y, y: c[1] + w } }
                                                    }
                                            } g(this, "afterTranslate")
                                    }; a.prototype.updateTotals = function () {
                                        var c = this.points, a = c.length, d = this.options.ignoreHiddenPoint, g, b = 0; for (g = 0; g < a; g++) { var f = c[g]; !f.isValid() || d && !f.visible || (b += f.y) } this.total = b; for (g = 0; g < a; g++)f = c[g], f.percentage = 0 < b && (f.visible ||
                                            !d) ? f.y / b * 100 : 0, f.total = b
                                    }; a.defaultOptions = m(B.defaultOptions, {
                                        center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { allowOverlap: !0, connectorPadding: 5, connectorShape: "fixedOffset", crookDistance: "70%", distance: 30, enabled: !0, formatter: function () { return this.point.isNull ? void 0 : this.point.name }, softConnector: !0, x: 0 }, fillColor: void 0, ignoreHiddenPoint: !0, inactiveOtherPoints: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff",
                                        borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: .1 } }
                                    }); return a
                                }(B); c(t.prototype, { axisTypes: [], directTouch: !0, drawGraph: void 0, drawLegendSymbol: D.drawRectangle, drawTracker: f.prototype.drawTracker, getCenter: a.getCenter, getSymbol: w, isCartesian: !1, noSharedTooltip: !0, pointAttribs: f.prototype.pointAttribs, pointClass: u, requireSorting: !1, searchPoint: w, trackerGroups: ["group", "dataLabelsGroup"] }); C.registerSeriesType("pie", t); ""; return t
                            }); G(f, "Series/Pie/PieDataLabel.js", [f["Core/Series/DataLabel.js"],
                            f["Core/Globals.js"], f["Core/Renderer/RendererUtilities.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, w, D, u) {
                                var B = f.noop, C = w.distribute, y = D.series, t = u.arrayMax, n = u.clamp, l = u.defined, d = u.merge, c = u.pick, g = u.relativeLength, m; (function (f) {
                                    function m() {
                                        var a = this, g = a.data, b = a.chart, f = a.options.dataLabels || {}, e = f.connectorPadding, k = b.plotWidth, p = b.plotHeight, m = b.plotLeft, n = Math.round(b.chartWidth / 3), q = a.center, r = q[2] / 2, u = q[1], A = [[], []], z = [0, 0, 0, 0], E = a.dataLabelPositioners,
                                        w, B, D, I, G, R, Z, Q, T, S, V, O; a.visible && (f.enabled || a._hasPointLabels) && (g.forEach(function (b) { b.dataLabel && b.visible && b.dataLabel.shortened && (b.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), b.dataLabel.shortened = !1) }), y.prototype.drawDataLabels.apply(a), g.forEach(function (b) {
                                            b.dataLabel && (b.visible ? (A[b.half].push(b), b.dataLabel._pos = null, !l(f.style.width) && !l(b.options.dataLabels && b.options.dataLabels.style && b.options.dataLabels.style.width) && b.dataLabel.getBBox().width > n && (b.dataLabel.css({
                                                width: Math.round(.7 *
                                                    n) + "px"
                                            }), b.dataLabel.shortened = !0)) : (b.dataLabel = b.dataLabel.destroy(), b.dataLabels && 1 === b.dataLabels.length && delete b.dataLabels))
                                        }), A.forEach(function (d, h) {
                                            var g = d.length, n = [], v; if (g) {
                                                a.sortByAngle(d, h - .5); if (0 < a.maxLabelDistance) {
                                                    var x = Math.max(0, u - r - a.maxLabelDistance); var t = Math.min(u + r + a.maxLabelDistance, b.plotHeight); d.forEach(function (c) {
                                                        0 < c.labelDistance && c.dataLabel && (c.top = Math.max(0, u - r - c.labelDistance), c.bottom = Math.min(u + r + c.labelDistance, b.plotHeight), v = c.dataLabel.getBBox().height ||
                                                            21, c.distributeBox = { target: c.labelPosition.natural.y - c.top + v / 2, size: v, rank: c.y }, n.push(c.distributeBox))
                                                    }); x = t + v - x; C(n, x, x / 5)
                                                } for (V = 0; V < g; V++) {
                                                    w = d[V]; R = w.labelPosition; I = w.dataLabel; S = !1 === w.visible ? "hidden" : "inherit"; T = x = R.natural.y; n && l(w.distributeBox) && ("undefined" === typeof w.distributeBox.pos ? S = "hidden" : (Z = w.distributeBox.size, T = E.radialDistributionY(w))); delete w.positionIndex; if (f.justify) Q = E.justify(w, r, q); else switch (f.alignTo) {
                                                        case "connectors": Q = E.alignToConnectors(d, h, k, m); break; case "plotEdges": Q =
                                                            E.alignToPlotEdges(I, h, k, m); break; default: Q = E.radialDistributionX(a, w, T, x)
                                                    }I._attr = { visibility: S, align: R.alignment }; O = w.options.dataLabels || {}; I._pos = { x: Q + c(O.x, f.x) + ({ left: e, right: -e }[R.alignment] || 0), y: T + c(O.y, f.y) - 10 }; R.final.x = Q; R.final.y = T; c(f.crop, !0) && (G = I.getBBox().width, x = null, Q - G < e && 1 === h ? (x = Math.round(G - Q + e), z[3] = Math.max(x, z[3])) : Q + G > k - e && 0 === h && (x = Math.round(Q + G - k + e), z[1] = Math.max(x, z[1])), 0 > T - Z / 2 ? z[0] = Math.max(Math.round(-T + Z / 2), z[0]) : T + Z / 2 > p && (z[2] = Math.max(Math.round(T + Z / 2 - p), z[2])),
                                                        I.sideOverflow = x)
                                                }
                                            }
                                        }), 0 === t(z) || this.verifyDataLabelOverflow(z)) && (this.placeDataLabels(), this.points.forEach(function (e) {
                                            O = d(f, e.options.dataLabels); if (B = c(O.connectorWidth, 1)) {
                                                var h; D = e.connector; if ((I = e.dataLabel) && I._pos && e.visible && 0 < e.labelDistance) {
                                                    S = I._attr.visibility; if (h = !D) e.connector = D = b.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + e.colorIndex + (e.className ? " " + e.className : "")).add(a.dataLabelsGroup), b.styledMode || D.attr({
                                                        "stroke-width": B, stroke: O.connectorColor ||
                                                            e.color || "#666666"
                                                    }); D[h ? "attr" : "animate"]({ d: e.getConnectorPath() }); D.attr("visibility", S)
                                                } else D && (e.connector = D.destroy())
                                            }
                                        }))
                                    } function u() {
                                        this.points.forEach(function (c) {
                                            var a = c.dataLabel, b; a && c.visible && ((b = a._pos) ? (a.sideOverflow && (a._attr.width = Math.max(a.getBBox().width - a.sideOverflow, 0), a.css({ width: a._attr.width + "px", textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis" }), a.shortened = !0), a.attr(a._attr), a[a.moved ? "animate" : "attr"](b), a.moved = !0) : a && a.attr({ y: -9999 }));
                                            delete c.distributeBox
                                        }, this)
                                    } function r(c) { var a = this.center, b = this.options, d = b.center, e = b.minSize || 80, h = null !== b.size; if (!h) { if (null !== d[0]) var f = Math.max(a[2] - Math.max(c[1], c[3]), e); else f = Math.max(a[2] - c[1] - c[3], e), a[0] += (c[3] - c[1]) / 2; null !== d[1] ? f = n(f, e, a[2] - Math.max(c[0], c[2])) : (f = n(f, e, a[2] - c[0] - c[2]), a[1] += (c[0] - c[2]) / 2); f < a[2] ? (a[2] = f, a[3] = Math.min(b.thickness ? Math.max(0, f - 2 * b.thickness) : Math.max(0, g(b.innerSize || 0, f)), f), this.translate(a), this.drawDataLabels && this.drawDataLabels()) : h = !0 } return h }
                                    var q = [], k = { radialDistributionY: function (c) { return c.top + c.distributeBox.pos }, radialDistributionX: function (c, a, b, d) { return c.getX(b < a.top + 2 || b > a.bottom - 2 ? d : b, a.half, a) }, justify: function (c, a, b) { return b[0] + (c.half ? -1 : 1) * (a + c.labelDistance) }, alignToPlotEdges: function (c, a, b, d) { c = c.getBBox().width; return a ? c + d : b - c - d }, alignToConnectors: function (c, a, b, d) { var e = 0, h; c.forEach(function (b) { h = b.dataLabel.getBBox().width; h > e && (e = h) }); return a ? e + d : b - e - d } }; f.compose = function (c) {
                                        a.compose(y); -1 === q.indexOf(c) &&
                                            (q.push(c), c = c.prototype, c.dataLabelPositioners = k, c.alignDataLabel = B, c.drawDataLabels = m, c.placeDataLabels = u, c.verifyDataLabelOverflow = r)
                                    }
                                })(m || (m = {})); return m
                            }); G(f, "Extensions/OverlappingDataLabels.js", [f["Core/Chart/Chart.js"], f["Core/Utilities.js"]], function (a, f) {
                                function w(a, f) {
                                    var d = !1; if (a) {
                                        var c = a.newOpacity; a.oldOpacity !== c && (a.alignAttr && a.placed ? (a[c ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), d = !0, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, function () {
                                            f.styledMode ||
                                            a.css({ pointerEvents: c ? "auto" : "none" })
                                        }), u(f, "afterHideOverlappingLabel")) : a.attr({ opacity: c })); a.isOld = !0
                                    } return d
                                } var D = f.addEvent, u = f.fireEvent, B = f.isArray, C = f.isNumber, y = f.objectEach, t = f.pick; D(a, "render", function () {
                                    var a = this, f = []; (this.labelCollectors || []).forEach(function (a) { f = f.concat(a()) }); (this.yAxis || []).forEach(function (a) { a.stacking && a.options.stackLabels && !a.options.stackLabels.allowOverlap && y(a.stacking.stacks, function (c) { y(c, function (c) { c.label && f.push(c.label) }) }) }); (this.series ||
                                        []).forEach(function (d) { var c = d.options.dataLabels; d.visible && (!1 !== c.enabled || d._hasPointLabels) && (c = function (c) { return c.forEach(function (c) { c.visible && (B(c.dataLabels) ? c.dataLabels : c.dataLabel ? [c.dataLabel] : []).forEach(function (d) { var g = d.options; d.labelrank = t(g.labelrank, c.labelrank, c.shapeArgs && c.shapeArgs.height); g.allowOverlap ? (d.oldOpacity = d.opacity, d.newOpacity = 1, w(d, a)) : f.push(d) }) }) }, c(d.nodes || []), c(d.points)) }); this.hideOverlappingLabels(f)
                                }); a.prototype.hideOverlappingLabels = function (a) {
                                    var f =
                                        this, d = a.length, c = f.renderer, g, m, n, t = !1; var A = function (a) {
                                            var d, g = a.box ? 0 : a.padding || 0, b = d = 0, f; if (a && (!a.alignAttr || a.placed)) {
                                                var e = a.alignAttr || { x: a.attr("x"), y: a.attr("y") }; var k = a.parentGroup; a.width || (d = a.getBBox(), a.width = d.width, a.height = d.height, d = c.fontMetrics(null, a.element).h); var p = a.width - 2 * g; (f = { left: "0", center: "0.5", right: "1" }[a.alignValue]) ? b = +f * p : C(a.x) && Math.round(a.x) !== a.translateX && (b = a.x - a.translateX); return {
                                                    x: e.x + (k.translateX || 0) + g - (b || 0), y: e.y + (k.translateY || 0) + g - d, width: a.width -
                                                        2 * g, height: a.height - 2 * g
                                                }
                                            }
                                        }; for (m = 0; m < d; m++)if (g = a[m]) g.oldOpacity = g.opacity, g.newOpacity = 1, g.absoluteBox = A(g); a.sort(function (c, a) { return (a.labelrank || 0) - (c.labelrank || 0) }); for (m = 0; m < d; m++) { var r = (A = a[m]) && A.absoluteBox; for (g = m + 1; g < d; ++g) { var q = (n = a[g]) && n.absoluteBox; !r || !q || A === n || 0 === A.newOpacity || 0 === n.newOpacity || "hidden" === A.visibility || "hidden" === n.visibility || q.x >= r.x + r.width || q.x + q.width <= r.x || q.y >= r.y + r.height || q.y + q.height <= r.y || ((A.labelrank < n.labelrank ? A : n).newOpacity = 0) } } a.forEach(function (c) {
                                            w(c,
                                                f) && (t = !0)
                                        }); t && u(f, "afterHideAllOverlappingLabels")
                                }
                            }); G(f, "Core/Responsive.js", [f["Core/Utilities.js"]], function (a) {
                                var f = a.extend, w = a.find, D = a.isArray, u = a.isObject, B = a.merge, C = a.objectEach, y = a.pick, t = a.splat, n = a.uniqueKey, l; (function (a) {
                                    var c = []; a.compose = function (a) { -1 === c.indexOf(a) && (c.push(a), f(a.prototype, d.prototype)); return a }; var d = function () {
                                        function c() { } c.prototype.currentOptions = function (c) {
                                            function a(c, g, h, f) {
                                                var b; C(c, function (c, e) {
                                                    if (!f && -1 < d.collectionsWithUpdate.indexOf(e) && g[e]) for (c =
                                                        t(c), h[e] = [], b = 0; b < Math.max(c.length, g[e].length); b++)g[e][b] && (void 0 === c[b] ? h[e][b] = g[e][b] : (h[e][b] = {}, a(c[b], g[e][b], h[e][b], f + 1))); else u(c) ? (h[e] = D(c) ? [] : {}, a(c, g[e] || {}, h[e], f + 1)) : h[e] = "undefined" === typeof g[e] ? null : g[e]
                                                })
                                            } var d = this, g = {}; a(c, this.options, g, 0); return g
                                        }; c.prototype.matchResponsiveRule = function (c, a) {
                                            var d = c.condition; (d.callback || function () {
                                                return this.chartWidth <= y(d.maxWidth, Number.MAX_VALUE) && this.chartHeight <= y(d.maxHeight, Number.MAX_VALUE) && this.chartWidth >= y(d.minWidth,
                                                    0) && this.chartHeight >= y(d.minHeight, 0)
                                            }).call(this) && a.push(c._id)
                                        }; c.prototype.setResponsive = function (c, a) {
                                            var d = this, g = this.options.responsive, f = this.currentResponsive, k = []; !a && g && g.rules && g.rules.forEach(function (c) { "undefined" === typeof c._id && (c._id = n()); d.matchResponsiveRule(c, k) }, this); a = B.apply(void 0, k.map(function (c) { return w((g || {}).rules || [], function (a) { return a._id === c }) }).map(function (c) { return c && c.chartOptions })); a.isResponsiveOptions = !0; k = k.toString() || void 0; k !== (f && f.ruleIds) && (f &&
                                                this.update(f.undoOptions, c, !0), k ? (f = this.currentOptions(a), f.isResponsiveOptions = !0, this.currentResponsive = { ruleIds: k, mergedOptions: a, undoOptions: f }, this.update(a, c, !0)) : this.currentResponsive = void 0)
                                        }; return c
                                    }()
                                })(l || (l = {})); ""; ""; return l
                            }); G(f, "masters/highcharts.src.js", [f["Core/Globals.js"], f["Core/Utilities.js"], f["Core/DefaultOptions.js"], f["Core/Animation/Fx.js"], f["Core/Animation/AnimationUtilities.js"], f["Core/Renderer/HTML/AST.js"], f["Core/FormatUtilities.js"], f["Core/Renderer/RendererUtilities.js"],
                            f["Core/Renderer/SVG/SVGElement.js"], f["Core/Renderer/SVG/SVGRenderer.js"], f["Core/Renderer/HTML/HTMLElement.js"], f["Core/Renderer/HTML/HTMLRenderer.js"], f["Core/Axis/Axis.js"], f["Core/Axis/DateTimeAxis.js"], f["Core/Axis/LogarithmicAxis.js"], f["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"], f["Core/Axis/Tick.js"], f["Core/Tooltip.js"], f["Core/Series/Point.js"], f["Core/Pointer.js"], f["Core/MSPointer.js"], f["Core/Legend/Legend.js"], f["Core/Chart/Chart.js"], f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"],
                            f["Series/Column/ColumnSeries.js"], f["Series/Column/ColumnDataLabel.js"], f["Series/Pie/PieSeries.js"], f["Series/Pie/PieDataLabel.js"], f["Core/Series/DataLabel.js"], f["Core/Responsive.js"], f["Core/Color/Color.js"], f["Core/Time.js"]], function (a, f, w, D, u, B, C, y, t, n, l, d, c, g, m, E, z, A, r, q, k, h, v, b, F, e, H, p, x, J, M, P, L) {
                                a.animate = u.animate; a.animObject = u.animObject; a.getDeferredAnimation = u.getDeferredAnimation; a.setAnimation = u.setAnimation; a.stop = u.stop; a.timers = D.timers; a.AST = B; a.Axis = c; a.Chart = v; a.chart = v.chart;
                                a.Fx = D; a.Legend = h; a.PlotLineOrBand = E; a.Point = r; a.Pointer = k.isRequired() ? k : q; a.Series = b; a.SVGElement = t; a.SVGRenderer = n; a.Tick = z; a.Time = L; a.Tooltip = A; a.Color = P; a.color = P.parse; d.compose(n); l.compose(t); a.defaultOptions = w.defaultOptions; a.getOptions = w.getOptions; a.time = w.defaultTime; a.setOptions = w.setOptions; a.dateFormat = C.dateFormat; a.format = C.format; a.numberFormat = C.numberFormat; a.addEvent = f.addEvent; a.arrayMax = f.arrayMax; a.arrayMin = f.arrayMin; a.attr = f.attr; a.clearTimeout = f.clearTimeout; a.correctFloat =
                                    f.correctFloat; a.createElement = f.createElement; a.css = f.css; a.defined = f.defined; a.destroyObjectProperties = f.destroyObjectProperties; a.discardElement = f.discardElement; a.distribute = y.distribute; a.erase = f.erase; a.error = f.error; a.extend = f.extend; a.extendClass = f.extendClass; a.find = f.find; a.fireEvent = f.fireEvent; a.getMagnitude = f.getMagnitude; a.getStyle = f.getStyle; a.inArray = f.inArray; a.isArray = f.isArray; a.isClass = f.isClass; a.isDOMElement = f.isDOMElement; a.isFunction = f.isFunction; a.isNumber = f.isNumber; a.isObject =
                                        f.isObject; a.isString = f.isString; a.keys = f.keys; a.merge = f.merge; a.normalizeTickInterval = f.normalizeTickInterval; a.objectEach = f.objectEach; a.offset = f.offset; a.pad = f.pad; a.pick = f.pick; a.pInt = f.pInt; a.relativeLength = f.relativeLength; a.removeEvent = f.removeEvent; a.seriesType = F.seriesType; a.splat = f.splat; a.stableSort = f.stableSort; a.syncTimeout = f.syncTimeout; a.timeUnits = f.timeUnits; a.uniqueKey = f.uniqueKey; a.useSerialIds = f.useSerialIds; a.wrap = f.wrap; H.compose(e); J.compose(b); g.compose(c); m.compose(c); x.compose(p);
                                E.compose(c); M.compose(v); return a
                            }); G(f, "Core/Axis/Color/ColorAxisComposition.js", [f["Core/Color/Color.js"], f["Core/Utilities.js"]], function (a, f) {
                                var w = a.parse, D = f.addEvent, u = f.extend, B = f.merge, C = f.pick, y = f.splat, t; (function (a) {
                                    function f() { var b = this, c = this.options; this.colorAxis = []; c.colorAxis && (c.colorAxis = y(c.colorAxis), c.colorAxis.forEach(function (c, a) { c.index = a; new v(b, c) })) } function d(b) {
                                        var c = this, a = function (a) {
                                            a = b.allItems.indexOf(a); -1 !== a && (c.destroyItem(b.allItems[a]), b.allItems.splice(a,
                                                1))
                                        }, d = [], h, g; (this.chart.colorAxis || []).forEach(function (b) { (h = b.options) && h.showInLegend && (h.dataClasses && h.visible ? d = d.concat(b.getDataClassLegendSymbols()) : h.visible && d.push(b), b.series.forEach(function (b) { if (!b.options.showInLegend || h.dataClasses) "point" === b.options.legendType ? b.points.forEach(function (b) { a(b) }) : a(b) })) }); for (g = d.length; g--;)b.allItems.unshift(d[g])
                                    } function c(b) { b.visible && b.item.legendColor && b.item.legendSymbol.attr({ fill: b.item.legendColor }) } function g() {
                                        var b = this.chart.colorAxis;
                                        b && b.forEach(function (b, c, a) { b.update({}, a) })
                                    } function m() { (this.chart.colorAxis && this.chart.colorAxis.length || this.colorAttribs) && this.translateColors() } function n() { var b = this.axisTypes; b ? -1 === b.indexOf("colorAxis") && b.push("colorAxis") : this.axisTypes = ["colorAxis"] } function t(b) { var c = this, a = b ? "show" : "hide"; c.visible = c.options.visible = !!b;["graphic", "dataLabel"].forEach(function (b) { if (c[b]) c[b][a]() }); this.series.buildKDTree() } function A() {
                                        var b = this, c = this.options.nullColor, a = this.colorAxis, d =
                                            this.colorKey; (this.data.length ? this.data : this.points).forEach(function (e) { var h = e.getNestedProperty(d); (h = e.options.color || (e.isNull || null === e.value ? c : a && "undefined" !== typeof h ? a.toColor(h, e) : e.color || b.color)) && e.color !== h && (e.color = h, "point" === b.options.legendType && e.legendItem && b.chart.legend.colorizeItem(e, e.visible)) })
                                    } function r(b) {
                                        var c = b.prototype.createAxis; b.prototype.createAxis = function (b, a) {
                                            if ("colorAxis" !== b) return c.apply(this, arguments); var e = new v(this, B(a.axis, {
                                                index: this[b].length,
                                                isX: !1
                                            })); this.isDirtyLegend = !0; this.axes.forEach(function (b) { b.series = [] }); this.series.forEach(function (b) { b.bindAxes(); b.isDirtyData = !0 }); C(a.redraw, !0) && this.redraw(a.animation); return e
                                        }
                                    } function q() { this.elem.attr("fill", w(this.start).tweenTo(w(this.end), this.pos), void 0, !0) } function k() { this.elem.attr("stroke", w(this.start).tweenTo(w(this.end), this.pos), void 0, !0) } var h = [], v; a.compose = function (b, a, e, l, p) {
                                        v || (v = b); -1 === h.indexOf(a) && (h.push(a), b = a.prototype, b.collectionsWithUpdate.push("colorAxis"),
                                            b.collectionsWithInit.colorAxis = [b.addColorAxis], D(a, "afterGetAxes", f), r(a)); -1 === h.indexOf(e) && (h.push(e), a = e.prototype, a.fillSetter = q, a.strokeSetter = k); -1 === h.indexOf(l) && (h.push(l), D(l, "afterGetAllItems", d), D(l, "afterColorizeItem", c), D(l, "afterUpdate", g)); -1 === h.indexOf(p) && (h.push(p), u(p.prototype, { optionalAxis: "colorAxis", translateColors: A }), u(p.prototype.pointClass.prototype, { setVisible: t }), D(p, "afterTranslate", m), D(p, "bindAxes", n))
                                    }; a.pointSetVisible = t
                                })(t || (t = {})); return t
                            }); G(f, "Core/Axis/Color/ColorAxisDefaults.js",
                                [], function () { return { lineWidth: 0, minPadding: 0, maxPadding: 0, gridLineWidth: 1, tickPixelInterval: 72, startOnTick: !0, endOnTick: !0, offset: 0, marker: { animation: { duration: 50 }, width: .01, color: "#999999" }, labels: { overflow: "justify", rotation: 0 }, minColor: "#e6ebf5", maxColor: "#003399", tickLength: 5, showInLegend: !0 } }); G(f, "Core/Axis/Color/ColorAxis.js", [f["Core/Axis/Axis.js"], f["Core/Color/Color.js"], f["Core/Axis/Color/ColorAxisComposition.js"], f["Core/Axis/Color/ColorAxisDefaults.js"], f["Core/Globals.js"], f["Core/Legend/LegendSymbol.js"],
                                f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, w, D, u, B, C, y) {
                                    var t = this && this.__extends || function () { var c = function (a, d) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, a) { c.__proto__ = a } || function (c, a) { for (var d in a) a.hasOwnProperty(d) && (c[d] = a[d]) }; return c(a, d) }; return function (a, d) { function g() { this.constructor = a } c(a, d); a.prototype = null === d ? Object.create(d) : (g.prototype = d.prototype, new g) } }(), n = f.parse, l = u.noop, d = C.series, c = y.extend, g = y.isNumber, m = y.merge,
                                    E = y.pick; f = function (a) {
                                        function f(c, d) { var g = a.call(this, c, d) || this; g.beforePadding = !1; g.chart = void 0; g.coll = "colorAxis"; g.dataClasses = void 0; g.legendItem = void 0; g.legendItems = void 0; g.name = ""; g.options = void 0; g.stops = void 0; g.visible = !0; g.init(c, d); return g } t(f, a); f.compose = function (c, a, d, h) { w.compose(f, c, a, d, h) }; f.prototype.init = function (c, d) {
                                            var g = c.options.legend || {}, h = d.layout ? "vertical" !== d.layout : "vertical" !== g.layout, l = d.visible; g = m(f.defaultColorAxisOptions, d, {
                                                showEmpty: !1, title: null, visible: g.enabled &&
                                                    !1 !== l
                                            }); this.coll = "colorAxis"; this.side = d.side || h ? 2 : 1; this.reversed = d.reversed || !h; this.opposite = !h; a.prototype.init.call(this, c, g); this.userOptions.visible = l; d.dataClasses && this.initDataClasses(d); this.initStops(); this.horiz = h; this.zoomEnabled = !1
                                        }; f.prototype.initDataClasses = function (c) {
                                            var a = this.chart, d = this.options, h = c.dataClasses.length, g, b = 0, f = a.options.chart.colorCount; this.dataClasses = g = []; this.legendItems = []; (c.dataClasses || []).forEach(function (c, k) {
                                                c = m(c); g.push(c); if (a.styledMode || !c.color) "category" ===
                                                    d.dataClassColor ? (a.styledMode || (k = a.options.colors, f = k.length, c.color = k[b]), c.colorIndex = b, b++, b === f && (b = 0)) : c.color = n(d.minColor).tweenTo(n(d.maxColor), 2 > h ? .5 : k / (h - 1))
                                            })
                                        }; f.prototype.hasData = function () { return !!(this.tickPositions || []).length }; f.prototype.setTickPositions = function () { if (!this.dataClasses) return a.prototype.setTickPositions.call(this) }; f.prototype.initStops = function () {
                                            this.stops = this.options.stops || [[0, this.options.minColor], [1, this.options.maxColor]]; this.stops.forEach(function (c) {
                                                c.color =
                                                n(c[1])
                                            })
                                        }; f.prototype.setOptions = function (c) { a.prototype.setOptions.call(this, c); this.options.crosshair = this.options.marker }; f.prototype.setAxisSize = function () { var c = this.legendSymbol, a = this.chart, d = a.options.legend || {}, h, g; c ? (this.left = d = c.attr("x"), this.top = h = c.attr("y"), this.width = g = c.attr("width"), this.height = c = c.attr("height"), this.right = a.chartWidth - d - g, this.bottom = a.chartHeight - h - c, this.len = this.horiz ? g : c, this.pos = this.horiz ? d : h) : this.len = (this.horiz ? d.symbolWidth : d.symbolHeight) || f.defaultLegendLength };
                                        f.prototype.normalizedValue = function (c) { this.logarithmic && (c = this.logarithmic.log2lin(c)); return 1 - (this.max - c) / (this.max - this.min || 1) }; f.prototype.toColor = function (c, a) {
                                            var d = this.dataClasses, h = this.stops, g; if (d) for (g = d.length; g--;) { var b = d[g]; var f = b.from; h = b.to; if (("undefined" === typeof f || c >= f) && ("undefined" === typeof h || c <= h)) { var e = b.color; a && (a.dataClass = g, a.colorIndex = b.colorIndex); break } } else {
                                                c = this.normalizedValue(c); for (g = h.length; g-- && !(c > h[g][0]);); f = h[g] || h[g + 1]; h = h[g + 1] || f; c = 1 - (h[0] -
                                                    c) / (h[0] - f[0] || 1); e = f.color.tweenTo(h.color, c)
                                            } return e
                                        }; f.prototype.getOffset = function () { var c = this.legendGroup, d = this.chart.axisOffset[this.side]; if (c) { this.axisParent = c; a.prototype.getOffset.call(this); var g = this.chart.legend; g.allItems.forEach(function (c) { c instanceof f && c.drawLegendSymbol(g, c) }); g.render(); this.chart.getMargins(!0); this.added || (this.added = !0, this.labelLeft = 0, this.labelRight = this.width); this.chart.axisOffset[this.side] = d } }; f.prototype.setLegendColor = function () {
                                            var c = this.reversed,
                                            a = c ? 1 : 0; c = c ? 0 : 1; a = this.horiz ? [a, 0, c, 0] : [0, c, 0, a]; this.legendColor = { linearGradient: { x1: a[0], y1: a[1], x2: a[2], y2: a[3] }, stops: this.stops }
                                        }; f.prototype.drawLegendSymbol = function (c, a) {
                                            var d = c.padding, h = c.options, g = this.horiz, b = E(h.symbolWidth, g ? f.defaultLegendLength : 12), m = E(h.symbolHeight, g ? 12 : f.defaultLegendLength), e = E(h.labelPadding, g ? 16 : 30); h = E(h.itemDistance, 10); this.setLegendColor(); a.legendSymbol || (a.legendSymbol = this.chart.renderer.rect(0, c.baseline - 11, b, m).attr({ zIndex: 1 }).add(a.legendGroup)); this.legendItemWidth =
                                                b + d + (g ? h : this.options.labels.x + this.maxLabelLength); this.legendItemHeight = m + d + (g ? e : 0)
                                        }; f.prototype.setState = function (c) { this.series.forEach(function (a) { a.setState(c) }) }; f.prototype.setVisible = function () { }; f.prototype.getSeriesExtremes = function () {
                                            var c = this.series, a = c.length, g; this.dataMin = Infinity; for (this.dataMax = -Infinity; a--;) {
                                                var h = c[a]; var f = h.colorKey = E(h.options.colorKey, h.colorKey, h.pointValKey, h.zoneAxis, "y"); var b = h.pointArrayMap; var m = h[f + "Min"] && h[f + "Max"]; if (h[f + "Data"]) var e = h[f + "Data"];
                                                else if (b) { e = []; b = b.indexOf(f); var l = h.yData; if (0 <= b && l) for (g = 0; g < l.length; g++)e.push(E(l[g][b], l[g])) } else e = h.yData; m ? (h.minColorValue = h[f + "Min"], h.maxColorValue = h[f + "Max"]) : (e = d.prototype.getExtremes.call(h, e), h.minColorValue = e.dataMin, h.maxColorValue = e.dataMax); "undefined" !== typeof h.minColorValue && (this.dataMin = Math.min(this.dataMin, h.minColorValue), this.dataMax = Math.max(this.dataMax, h.maxColorValue)); m || d.prototype.applyExtremes.call(h)
                                            }
                                        }; f.prototype.drawCrosshair = function (c, d) {
                                            var g = d && d.plotX,
                                            h = d && d.plotY, f = this.pos, b = this.len; if (d) { var m = this.toPixels(d.getNestedProperty(d.series.colorKey)); m < f ? m = f - 2 : m > f + b && (m = f + b + 2); d.plotX = m; d.plotY = this.len - m; a.prototype.drawCrosshair.call(this, c, d); d.plotX = g; d.plotY = h; this.cross && !this.cross.addedToColorAxis && this.legendGroup && (this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup), this.cross.addedToColorAxis = !0, this.chart.styledMode || "object" !== typeof this.crosshair || this.cross.attr({ fill: this.crosshair.color })) }
                                        }; f.prototype.getPlotLinePath =
                                            function (c) { var d = this.left, f = c.translatedValue, h = this.top; return g(f) ? this.horiz ? [["M", f - 4, h - 6], ["L", f + 4, h - 6], ["L", f, h], ["Z"]] : [["M", d, f], ["L", d - 6, f + 6], ["L", d - 6, f - 6], ["Z"]] : a.prototype.getPlotLinePath.call(this, c) }; f.prototype.update = function (c, d) { var g = this.chart.legend; this.series.forEach(function (c) { c.isDirtyData = !0 }); (c.dataClasses && g.allItems || this.dataClasses) && this.destroyItems(); a.prototype.update.call(this, c, d); this.legendItem && (this.setLegendColor(), g.colorizeItem(this, !0)) }; f.prototype.destroyItems =
                                                function () { var c = this.chart; this.legendItem ? c.legend.destroyItem(this) : this.legendItems && this.legendItems.forEach(function (a) { c.legend.destroyItem(a) }); c.isDirtyLegend = !0 }; f.prototype.destroy = function () { this.chart.isDirtyLegend = !0; this.destroyItems(); a.prototype.destroy.apply(this, [].slice.call(arguments)) }; f.prototype.remove = function (c) { this.destroyItems(); a.prototype.remove.call(this, c) }; f.prototype.getDataClassLegendSymbols = function () {
                                                    var a = this, d = a.chart, g = a.legendItems, h = d.options.legend, f = h.valueDecimals,
                                                    b = h.valueSuffix || "", m; g.length || a.dataClasses.forEach(function (e, h) {
                                                        var k = e.from, n = e.to, q = d.numberFormatter, r = !0; m = ""; "undefined" === typeof k ? m = "< " : "undefined" === typeof n && (m = "> "); "undefined" !== typeof k && (m += q(k, f) + b); "undefined" !== typeof k && "undefined" !== typeof n && (m += " - "); "undefined" !== typeof n && (m += q(n, f) + b); g.push(c({
                                                            chart: d, name: m, options: {}, drawLegendSymbol: B.drawRectangle, visible: !0, setState: l, isDataClass: !0, setVisible: function () {
                                                                r = a.visible = !r; a.series.forEach(function (b) {
                                                                    b.points.forEach(function (b) {
                                                                        b.dataClass ===
                                                                        h && b.setVisible(r)
                                                                    })
                                                                }); d.legend.colorizeItem(this, r)
                                                            }
                                                        }, e))
                                                    }); return g
                                                }; f.defaultColorAxisOptions = D; f.defaultLegendLength = 200; f.keepProps = ["legendGroup", "legendItemHeight", "legendItemWidth", "legendItem", "legendSymbol"]; return f
                                    }(a); Array.prototype.push.apply(a.keepProps, f.keepProps); ""; return f
                                }); G(f, "Maps/MapNavigationOptionsDefault.js", [f["Core/DefaultOptions.js"], f["Core/Utilities.js"]], function (a, f) {
                                    f = f.extend; var w = {
                                        buttonOptions: {
                                            alignTo: "plotBox", align: "left", verticalAlign: "top", x: 0, width: 18,
                                            height: 18, padding: 5, style: { fontSize: "15px", fontWeight: "bold" }, theme: { "stroke-width": 1, "text-align": "center" }
                                        }, buttons: { zoomIn: { onclick: function () { this.mapZoom(.5) }, text: "+", y: 0 }, zoomOut: { onclick: function () { this.mapZoom(2) }, text: "-", y: 28 } }, mouseWheelSensitivity: 1.1
                                    }; f(a.defaultOptions.lang, { zoomIn: "Zoom in", zoomOut: "Zoom out" }); return a.defaultOptions.mapNavigation = w
                                }); G(f, "Maps/MapNavigation.js", [f["Core/Chart/Chart.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function (a, f, w) {
                                    function D(c) {
                                        c &&
                                        (c.preventDefault && c.preventDefault(), c.stopPropagation && c.stopPropagation(), c.cancelBubble = !0)
                                    } function u(c) { this.navButtons = []; this.init(c) } var B = f.doc, C = w.addEvent, y = w.extend, t = w.isNumber, n = w.merge, l = w.objectEach, d = w.pick; u.prototype.init = function (c) { this.chart = c }; u.prototype.update = function (c) {
                                        var a = this, f = this.chart, t = f.options.mapNavigation, u, A = function (c) { this.handler.call(f, c); D(c) }, r = a.navButtons; c && (t = f.options.mapNavigation = n(f.options.mapNavigation, c)); for (; r.length;)r.pop().destroy();
                                        d(t.enableButtons, t.enabled) && !f.renderer.forExport && (a.navButtonsGroup || (a.navButtonsGroup = f.renderer.g().attr({ zIndex: 4 }).add()), l(t.buttons, function (c, d) {
                                            c = n(t.buttonOptions, c); !f.styledMode && c.theme && (u = c.theme, u.style = n(c.theme.style, c.style)); var g = f.renderer.button(c.text || "", 0, 0, A, u, void 0, void 0, void 0, "zoomIn" === d ? "topbutton" : "bottombutton").addClass("highcharts-map-navigation highcharts-" + { zoomIn: "zoom-in", zoomOut: "zoom-out" }[d]).attr({
                                                width: c.width, height: c.height, title: f.options.lang[d],
                                                padding: c.padding, zIndex: 5
                                            }).add(a.navButtonsGroup); g.handler = c.onclick; C(g.element, "dblclick", D); r.push(g); y(c, { width: g.width, height: 2 * g.height }); if (f.hasLoaded) g.align(c, !1, c.alignTo); else var k = C(f, "load", function () { g.element && g.align(c, !1, c.alignTo); k() })
                                        }), c = function () {
                                            var c = f.exportingGroup && f.exportingGroup.getBBox(); if (c) {
                                                var d = a.navButtonsGroup.getBBox(); if (!(d.x >= c.x + c.width || d.x + d.width <= c.x || d.y >= c.y + c.height || d.y + d.height <= c.y)) {
                                                    var g = -d.y - d.height + c.y - 5; c = c.y + c.height - d.y + 5; a.navButtonsGroup.attr({
                                                        translateY: "bottom" ===
                                                            (t.buttonOptions && t.buttonOptions.verticalAlign) ? g : c
                                                    })
                                                }
                                            }
                                        }, f.hasLoaded || C(f, "render", c)); this.updateEvents(t)
                                    }; u.prototype.updateEvents = function (c) {
                                        var a = this.chart; d(c.enableDoubleClickZoom, c.enabled) || c.enableDoubleClickZoomTo ? this.unbindDblClick = this.unbindDblClick || C(a.container, "dblclick", function (c) { a.pointer.onContainerDblClick(c) }) : this.unbindDblClick && (this.unbindDblClick = this.unbindDblClick()); d(c.enableMouseWheelZoom, c.enabled) ? this.unbindMouseWheel = this.unbindMouseWheel || C(a.container,
                                            void 0 !== B.onwheel ? "wheel" : void 0 !== B.onmousewheel ? "mousewheel" : "DOMMouseScroll", function (c) { a.pointer.inClass(c.target, "highcharts-no-mousewheel") || (a.pointer.onContainerMouseWheel(c), D(c)); return !1 }) : this.unbindMouseWheel && (this.unbindMouseWheel = this.unbindMouseWheel())
                                    }; y(a.prototype, {
                                        fitToBox: function (c, a) {
                                            [["x", "width"], ["y", "height"]].forEach(function (d) { var g = d[0]; d = d[1]; c[g] + c[d] > a[g] + a[d] && (c[d] > a[d] ? (c[d] = a[d], c[g] = a[g]) : c[g] = a[g] + a[d] - c[d]); c[d] > a[d] && (c[d] = a[d]); c[g] < a[g] && (c[g] = a[g]) });
                                            return c
                                        }, mapZoom: function (c, a, d, f, l) { this.mapView && (t(c) && (c = Math.log(c) / Math.log(.5)), this.mapView.zoomBy(c, t(a) && t(d) ? this.mapView.projection.inverse([a, d]) : void 0, t(f) && t(l) ? [f, l] : void 0)) }
                                    }); C(a, "beforeRender", function () { this.mapNavigation = new u(this); this.mapNavigation.update() }); f.MapNavigation = u
                                }); G(f, "Maps/MapPointer.js", [f["Core/Pointer.js"], f["Core/Utilities.js"]], function (a, f) {
                                    var w = f.defined, D = f.extend, u = f.pick; f = f.wrap; var B = a.prototype.normalize, C = 0, y; D(a.prototype, {
                                        normalize: function (a,
                                            f) { var l = this.chart; a = B.call(this, a, f); l && l.mapView && (f = l.mapView.pixelsToLonLat({ x: a.chartX - l.plotLeft, y: a.chartY - l.plotTop })) && D(a, f); return a }, onContainerDblClick: function (a) { var f = this.chart; a = this.normalize(a); f.options.mapNavigation.enableDoubleClickZoomTo ? f.pointer.inClass(a.target, "highcharts-tracker") && f.hoverPoint && f.hoverPoint.zoomTo() : f.isInsidePlot(a.chartX - f.plotLeft, a.chartY - f.plotTop) && f.mapZoom(.5, void 0, void 0, a.chartX, a.chartY) }, onContainerMouseWheel: function (a) {
                                                var f = this.chart;
                                                a = this.normalize(a); var l = w(a.wheelDelta) && -a.wheelDelta / 120 || a.deltaY || a.detail; 1 <= Math.abs(l) && (C += Math.abs(l), y && clearTimeout(y), y = setTimeout(function () { C = 0 }, 50)); 10 > C && f.isInsidePlot(a.chartX - f.plotLeft, a.chartY - f.plotTop) && f.mapView && f.mapView.zoomBy((f.options.mapNavigation.mouseWheelSensitivity - 1) * -l, void 0, [a.chartX, a.chartY], 1 > Math.abs(l) ? !1 : void 0)
                                            }
                                    }); f(a.prototype, "zoomOption", function (a) {
                                        var f = this.chart.options.mapNavigation; u(f.enableTouchZoom, f.enabled) && (this.chart.options.chart.pinchType =
                                            "xy"); a.apply(this, [].slice.call(arguments, 1))
                                    }); f(a.prototype, "pinchTranslate", function (a, f, l, d, c, g, m) { a.call(this, f, l, d, c, g, m); "map" === this.chart.options.chart.type && this.hasZoom && (a = d.scaleX > d.scaleY, this.pinchTranslateDirection(!a, f, l, d, c, g, m, a ? d.scaleX : d.scaleY)) })
                                }); G(f, "Series/ColorMapMixin.js", [f["Core/Globals.js"], f["Core/Series/Point.js"], f["Core/Utilities.js"]], function (a, f, w) {
                                    var D = a.noop; a = a.seriesTypes; var u = w.defined; w = w.addEvent; w(f, "afterSetState", function (a) {
                                        this.moveToTopOnHover &&
                                        this.graphic && this.graphic.attr({ zIndex: a && "hover" === a.state ? 1 : 0 })
                                    }); return {
                                        PointMixin: { dataLabelOnNull: !0, moveToTopOnHover: !0, isValid: function () { return null !== this.value && Infinity !== this.value && -Infinity !== this.value } }, SeriesMixin: {
                                            pointArrayMap: ["value"], axisTypes: ["xAxis", "yAxis", "colorAxis"], trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], getSymbol: D, parallelArrays: ["x", "y", "value"], colorKey: "value", pointAttribs: a.column.prototype.pointAttribs, colorAttribs: function (a) {
                                                var f = {}; !u(a.color) ||
                                                    a.state && "normal" !== a.state || (f[this.colorProp || "fill"] = a.color); return f
                                            }
                                        }
                                    }
                                }); G(f, "Maps/MapSymbols.js", [f["Core/Renderer/SVG/SVGRenderer.js"]], function (a) {
                                    function f(a, f, u, B, C, y, t, n) { return [["M", a + C, f], ["L", a + u - y, f], ["C", a + u - y / 2, f, a + u, f + y / 2, a + u, f + y], ["L", a + u, f + B - t], ["C", a + u, f + B - t / 2, a + u - t / 2, f + B, a + u - t, f + B], ["L", a + n, f + B], ["C", a + n / 2, f + B, a, f + B - n / 2, a, f + B - n], ["L", a, f + C], ["C", a, f + C / 2, a + C / 2, f, a + C, f], ["Z"]] } a = a.prototype.symbols; a.bottombutton = function (a, D, u, B, C) { C = C && C.r || 0; return f(a - 1, D - 1, u, B, 0, 0, C, C) };
                                    a.topbutton = function (a, D, u, B, C) { C = C && C.r || 0; return f(a - 1, D - 1, u, B, C, C, 0, 0) }; return a
                                }); G(f, "Core/Chart/MapChart.js", [f["Core/Chart/Chart.js"], f["Core/DefaultOptions.js"], f["Core/Renderer/SVG/SVGRenderer.js"], f["Core/Utilities.js"]], function (a, f, w, D) {
                                    var u = this && this.__extends || function () {
                                        var a = function (f, l) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, c) { a.__proto__ = c } || function (a, c) { for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d]) }; return a(f, l) }; return function (f, l) {
                                            function d() {
                                                this.constructor =
                                                f
                                            } a(f, l); f.prototype = null === l ? Object.create(l) : (d.prototype = l.prototype, new d)
                                        }
                                    }(), B = f.getOptions, C = D.merge, y = D.pick; a = function (a) {
                                        function f() { return null !== a && a.apply(this, arguments) || this } u(f, a); f.prototype.init = function (f, d) {
                                            var c = B().credits; f = C({ chart: { panning: { enabled: !0, type: "xy" }, type: "map" }, credits: { mapText: y(c.mapText, ' \u00a9 <a href="{geojson.copyrightUrl}">{geojson.copyrightShort}</a>'), mapTextFull: y(c.mapTextFull, "{geojson.copyright}") }, mapView: {}, tooltip: { followTouchMove: !1 } }, f); a.prototype.init.call(this,
                                                f, d)
                                        }; return f
                                    }(a); (function (a) { a.maps = {}; a.mapChart = function (f, l, d) { return new a(f, l, d) }; a.splitPath = function (a) { "string" === typeof a && (a = a.replace(/([A-Za-z])/g, " $1 ").replace(/^\s*/, "").replace(/\s*$/, ""), a = a.split(/[ ,;]+/).map(function (a) { return /[A-za-z]/.test(a) ? a : parseFloat(a) })); return w.prototype.pathToSegments(a) } })(a || (a = {})); return a
                                }); G(f, "Maps/MapUtilities.js", [], function () {
                                    return {
                                        boundsFromPath: function (a) {
                                            var f = -Number.MAX_VALUE, w = Number.MAX_VALUE, D = -Number.MAX_VALUE, u = Number.MAX_VALUE,
                                            B; a.forEach(function (a) { var y = a[a.length - 2]; a = a[a.length - 1]; "number" === typeof y && "number" === typeof a && (w = Math.min(w, y), f = Math.max(f, y), u = Math.min(u, a), D = Math.max(D, a), B = !0) }); if (B) return { x1: w, y1: u, x2: f, y2: D }
                                        }, pointInPolygon: function (a, f) { var w, D = !1, u = a.x, B = a.y; a = 0; for (w = f.length - 1; a < f.length; w = a++) { var C = f[a][1] > B; var y = f[w][1] > B; C !== y && u < (f[w][0] - f[a][0]) * (B - f[a][1]) / (f[w][1] - f[a][1]) + f[a][0] && (D = !D) } return D }
                                    }
                                }); G(f, "Series/Map/MapPoint.js", [f["Series/ColorMapMixin.js"], f["Maps/MapUtilities.js"],
                                f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, w, D) {
                                    var u = this && this.__extends || function () { var a = function (f, d) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, a) { c.__proto__ = a } || function (c, a) { for (var d in a) a.hasOwnProperty(d) && (c[d] = a[d]) }; return a(f, d) }; return function (f, d) { function c() { this.constructor = f } a(f, d); f.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype, new c) } }(), B = f.boundsFromPath, C = D.extend, y = D.isNumber, t = D.pick; f = function (a) {
                                        function f() {
                                            var d =
                                                null !== a && a.apply(this, arguments) || this; d.options = void 0; d.path = void 0; d.series = void 0; return d
                                        } u(f, a); f.getProjectedPath = function (a, c) { a.projectedPath || (c && a.geometry ? (c.hasCoordinates = !0, a.projectedPath = c.path(a.geometry)) : a.projectedPath = a.path); return a.projectedPath || [] }; f.prototype.applyOptions = function (d, c) {
                                            var g = this.series; d = a.prototype.applyOptions.call(this, d, c); c = g.joinBy; g.mapData && g.mapMap && (c = a.prototype.getNestedProperty.call(d, c[1]), (g = "undefined" !== typeof c && g.mapMap[c]) ? C(d, g) :
                                                d.value = d.value || null); return d
                                        }; f.prototype.getProjectedBounds = function (a) { a = f.getProjectedPath(this, a); a = B(a); var c = this.properties; if (a) { var d = c && c["hc-middle-x"]; c = c && c["hc-middle-y"]; a.midX = a.x1 + (a.x2 - a.x1) * t(this.middleX, y(d) ? d : .5); d = t(this.middleY, y(c) ? c : .5); this.geometry || (d = 1 - d); a.midY = a.y2 - (a.y2 - a.y1) * d; return a } }; f.prototype.onMouseOver = function (d) { D.clearTimeout(this.colorInterval); if (null !== this.value || this.series.options.nullInteraction) a.prototype.onMouseOver.call(this, d); else this.series.onMouseOut(d) };
                                        f.prototype.zoomTo = function () { var a = this.series.chart; a.mapView && this.bounds && (a.mapView.fitToBounds(this.bounds, void 0, !1), this.series.isDirty = !0, a.redraw()) }; return f
                                    }(w.seriesTypes.scatter.prototype.pointClass); C(f.prototype, { dataLabelOnNull: a.PointMixin.dataLabelOnNull, isValid: a.PointMixin.isValid, moveToTopOnHover: a.PointMixin.moveToTopOnHover }); return f
                                }); G(f, "Maps/MapViewOptionsDefault.js", [], function () {
                                    return {
                                        center: [0, 0], maxZoom: void 0, padding: 0, projection: { name: void 0, parallels: void 0, rotation: void 0 },
                                        zoom: void 0
                                    }
                                }); G(f, "Maps/MapViewInsetsOptionsDefault.js", [], function () { return { borderColor: "#cccccc", borderWidth: 1, center: [0, 0], padding: "10%", relativeTo: "mapBoundingBox", units: "percent" } }); G(f, "Extensions/GeoJSON.js", [f["Core/Chart/Chart.js"], f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Maps/MapUtilities.js"], f["Core/Utilities.js"]], function (a, f, w, D, u) {
                                    function B(c, a) {
                                        a || (a = Object.keys(c.objects)[0]); a = c.objects[a]; if (a["hc-decoded-geojson"]) return a["hc-decoded-geojson"]; var d = c.arcs; if (c.transform) {
                                            var g =
                                                c.transform, f = g.scale, l = g.translate; d = c.arcs.map(function (c) { var a = 0, d = 0; return c.map(function (c) { c = c.slice(); c[0] = (a += c[0]) * f[0] + l[0]; c[1] = (d += c[1]) * f[1] + l[1]; return c }) })
                                        } var n = function (c) { return "number" === typeof c[0] ? c.reduce(function (c, a, g) { var b = 0 > a ? d[~a] : d[a]; 0 > a ? (b = b.slice(0, 0 === g ? b.length : b.length - 1), b.reverse()) : g && (b = b.slice(1)); return c.concat(b) }, []) : c.map(n) }; g = a.geometries.map(function (c) {
                                            return {
                                                type: "Feature", properties: c.properties, geometry: {
                                                    type: c.type, coordinates: c.coordinates ||
                                                        n(c.arcs)
                                                }
                                            }
                                        }); c = { type: "FeatureCollection", copyright: c.copyright, copyrightShort: c.copyrightShort, copyrightUrl: c.copyrightUrl, features: g, "hc-recommended-mapview": a["hc-recommended-mapview"], bbox: c.bbox, title: c.title }; return a["hc-decoded-geojson"] = c
                                    } function C(c, a, d) {
                                        void 0 === a && (a = "map"); var g = []; c = "Topology" === c.type ? B(c) : c; c.features.forEach(function (c) {
                                            var d = c.geometry || {}, f = d.type; d = d.coordinates; c = c.properties; var m; "map" !== a && "mapbubble" !== a || "Polygon" !== f && "MultiPolygon" !== f ? "mapline" !== a ||
                                                "LineString" !== f && "MultiLineString" !== f ? "mappoint" === a && "Point" === f && d.length && (m = { geometry: { coordinates: d, type: f } }) : d.length && (m = { geometry: { coordinates: d, type: f } }) : d.length && (m = { geometry: { coordinates: d, type: f } }); m && (f = c && (c.name || c.NAME), g.push(l(m, { name: "string" === typeof f ? f : void 0, properties: c })))
                                        }); d && c.copyrightShort && (d.chart.mapCredits = y(d.chart.options.credits.mapText, { geojson: c }), d.chart.mapCreditsFull = y(d.chart.options.credits.mapTextFull, { geojson: c })); return g
                                    } var y = f.format, t = w.win, n =
                                        u.error, l = u.extend, d = u.merge; f = u.wrap; ""; a.prototype.transformFromLatLon = function (c, a) {
                                            var d = this.options.chart.proj4 || t.proj4; if (d) {
                                                var g = a.jsonmarginX; g = void 0 === g ? 0 : g; var f = a.jsonmarginY; f = void 0 === f ? 0 : f; var l = a.jsonres; l = void 0 === l ? 1 : l; var r = a.scale; r = void 0 === r ? 1 : r; var q = a.xoffset; q = void 0 === q ? 0 : q; var k = a.xpan; k = void 0 === k ? 0 : k; var h = a.yoffset; h = void 0 === h ? 0 : h; var v = a.ypan; v = void 0 === v ? 0 : v; c = d(a.crs, [c.lon, c.lat]); d = a.cosAngle || a.rotation && Math.cos(a.rotation); var b = a.sinAngle || a.rotation && Math.sin(a.rotation);
                                                a = a.rotation ? [c[0] * d + c[1] * b, -c[0] * b + c[1] * d] : c; return { x: ((a[0] - q) * r + k) * l + g, y: -(((h - a[1]) * r + v) * l - f) }
                                            } n(21, !1, this)
                                        }; a.prototype.transformToLatLon = function (a, d) {
                                            var c = this.options.chart.proj4 || t.proj4; if (!c) n(21, !1, this); else if (null !== a.y) {
                                                var g = d.jsonmarginX, f = d.jsonmarginY, l = d.jsonres; l = void 0 === l ? 1 : l; var r = d.scale; r = void 0 === r ? 1 : r; var q = d.xoffset, k = d.xpan, h = d.yoffset, v = d.ypan; a = {
                                                    x: ((a.x - (void 0 === g ? 0 : g)) / l - (void 0 === k ? 0 : k)) / r + (void 0 === q ? 0 : q), y: ((a.y - (void 0 === f ? 0 : f)) / l + (void 0 === v ? 0 : v)) / r + (void 0 ===
                                                        h ? 0 : h)
                                                }; g = d.cosAngle || d.rotation && Math.cos(d.rotation); f = d.sinAngle || d.rotation && Math.sin(d.rotation); d = c(d.crs, "WGS84", d.rotation ? { x: a.x * g + a.y * -f, y: a.x * f + a.y * g } : a); return { lat: d.y, lon: d.x }
                                            }
                                        }; a.prototype.fromPointToLatLon = function (a) { return this.mapView && this.mapView.projectedUnitsToLonLat(a) }; a.prototype.fromLatLonToPoint = function (a) { return this.mapView && this.mapView.lonLatToProjectedUnits(a) }; f(a.prototype, "addCredits", function (a, g) {
                                            g = d(!0, this.options.credits, g); this.mapCredits && (g.href = null); a.call(this,
                                                g); this.credits && this.mapCreditsFull && this.credits.attr({ title: this.mapCreditsFull })
                                        }); w.geojson = C; return { geojson: C, topo2geo: B }
                                }); G(f, "Core/Geometry/PolygonClip.js", [], function () {
                                    var a = function (a, f, w) { return (f[0] - a[0]) * (w[1] - a[1]) > (f[1] - a[1]) * (w[0] - a[0]) }, f = function (a, f, w, C) { var u = [a[0] - f[0], a[1] - f[1]], t = [w[0] - C[0], w[1] - C[1]]; a = a[0] * f[1] - a[1] * f[0]; w = w[0] * C[1] - w[1] * C[0]; C = 1 / (u[0] * t[1] - u[1] * t[0]); u = [(a * t[0] - w * u[0]) * C, (a * t[1] - w * u[1]) * C]; u.isIntersection = !0; return u }, w; (function (w) {
                                        w.clipLineString = function (a,
                                            f) { var u = []; a = w.clipPolygon(a, f, !1); for (f = 1; f < a.length; f++)a[f].isIntersection && a[f - 1].isIntersection && (u.push(a.splice(0, f)), f = 0), f === a.length - 1 && u.push(a); return u }; w.clipPolygon = function (u, w, C) { void 0 === C && (C = !0); for (var y = w[w.length - 1], t, n, l = u, d = 0; d < w.length; d++) { var c = l; u = w[d]; l = []; t = C ? c[c.length - 1] : c[0]; for (var g = 0; g < c.length; g++)n = c[g], a(y, u, n) ? (a(y, u, t) || l.push(f(y, u, t, n)), l.push(n)) : a(y, u, t) && l.push(f(y, u, t, n)), t = n; y = u } return l }
                                    })(w || (w = {})); return w
                                }); G(f, "Maps/Projections/LambertConformalConic.js",
                                    [], function () {
                                        var a = Math.sign || function (a) { return 0 === a ? 0 : 0 < a ? 1 : -1 }, f = Math.PI / 180, w = Math.PI / 2; return function () {
                                            function D(u) { var B, C = (u.parallels || []).map(function (a) { return a * f }), y = C[0] || 0; C = null !== (B = C[1]) && void 0 !== B ? B : y; B = Math.cos(y); "object" === typeof u.projectedBounds && (this.projectedBounds = u.projectedBounds); u = y === C ? Math.sin(y) : Math.log(B / Math.cos(C)) / Math.log(Math.tan((w + C) / 2) / Math.tan((w + y) / 2)); 1e-10 > Math.abs(u) && (u = 1e-10 * (a(u) || 1)); this.n = u; this.c = B * Math.pow(Math.tan((w + y) / 2), u) / u } D.prototype.forward =
                                                function (a) { var u = a[0] * f, C = this.c, y = this.n, t = this.projectedBounds; a = a[1] * f; 0 < C ? a < -w + .000001 && (a = -w + .000001) : a > w - .000001 && (a = w - .000001); var n = C / Math.pow(Math.tan((w + a) / 2), y); a = n * Math.sin(y * u) * 63.78137; u = 63.78137 * (C - n * Math.cos(y * u)); C = [a, u]; t && (a < t.x1 || a > t.x2 || u < t.y1 || u > t.y2) && (C.outside = !0); return C }; D.prototype.inverse = function (u) {
                                                    var B = u[0] / 63.78137, C = this.c, y = this.n; u = C - u[1] / 63.78137; var t = a(y) * Math.sqrt(B * B + u * u), n = Math.atan2(B, Math.abs(u)) * a(u); 0 > u * y && (n -= Math.PI * a(B) * a(u)); return [n / y / f, (2 * Math.atan(Math.pow(C /
                                                        t, 1 / y)) - w) / f]
                                                }; return D
                                        }()
                                    }); G(f, "Maps/Projections/EqualEarth.js", [], function () {
                                        var a = Math.sqrt(3) / 2; return function () {
                                            function f() { this.bounds = { x1: -200.37508342789243, x2: 200.37508342789243, y1: -97.52595454902263, y2: 97.52595454902263 } } f.prototype.forward = function (f) { var w = Math.PI / 180, u = Math.asin(a * Math.sin(f[1] * w)), B = u * u, C = B * B * B; return [f[0] * w * Math.cos(u) * 74.03120656864502 / (a * (1.340264 + 3 * -.081106 * B + C * (7 * .000893 + .034164 * B))), 74.03120656864502 * u * (1.340264 + -.081106 * B + C * (.000893 + .003796 * B))] }; f.prototype.inverse =
                                                function (f) { var w = f[0] / 74.03120656864502; f = f[1] / 74.03120656864502; var u = 180 / Math.PI, B = f, C; for (C = 0; 12 > C; ++C) { var y = B * B; var t = y * y * y; var n = B * (1.340264 + -.081106 * y + t * (.000893 + .003796 * y)) - f; y = 1.340264 + 3 * -.081106 * y + t * (7 * .000893 + .034164 * y); B -= n /= y; if (1e-9 > Math.abs(n)) break } y = B * B; return [u * a * w * (1.340264 + 3 * -.081106 * y + y * y * y * (7 * .000893 + .034164 * y)) / Math.cos(B), u * Math.asin(Math.sin(B) / a)] }; return f
                                        }()
                                    }); G(f, "Maps/Projections/Miller.js", [], function () {
                                        var a = Math.PI / 4, f = Math.PI / 180; return function () {
                                            function w() {
                                                this.bounds =
                                                { x1: -200.37508342789243, x2: 200.37508342789243, y1: -146.91480769173063, y2: 146.91480769173063 }
                                            } w.prototype.forward = function (w) { return [w[0] * f * 63.78137, 79.7267125 * Math.log(Math.tan(a + .4 * w[1] * f))] }; w.prototype.inverse = function (w) { return [w[0] / 63.78137 / f, 2.5 * (Math.atan(Math.exp(w[1] / 63.78137 * .8)) - a) / f] }; return w
                                        }()
                                    }); G(f, "Maps/Projections/Orthographic.js", [], function () {
                                        var a = Math.PI / 180; return function () {
                                            function f() {
                                                this.antimeridianCutting = !1; this.bounds = {
                                                    x1: -63.78460826781007, x2: 63.78460826781007, y1: -63.78460826781007,
                                                    y2: 63.78460826781007
                                                }
                                            } f.prototype.forward = function (f) { var w = f[0]; f = f[1] * a; f = [Math.cos(f) * Math.sin(w * a) * 63.78460826781007, 63.78460826781007 * Math.sin(f)]; if (-90 > w || 90 < w) f.outside = !0; return f }; f.prototype.inverse = function (f) { var w = f[0] / 63.78460826781007; f = f[1] / 63.78460826781007; var u = Math.sqrt(w * w + f * f), B = Math.asin(u), C = Math.sin(B); return [Math.atan2(w * C, u * Math.cos(B)) / a, Math.asin(u && f * C / u) / a] }; return f
                                        }()
                                    }); G(f, "Maps/Projections/WebMercator.js", [], function () {
                                        var a = Math.PI / 180; return function () {
                                            function f() {
                                                this.bounds =
                                                { x1: -200.37508342789243, x2: 200.37508342789243, y1: -200.3750834278071, y2: 200.3750834278071 }; this.maxLatitude = 85.0511287798
                                            } f.prototype.forward = function (f) { var w = Math.sin(f[1] * a); w = [63.78137 * f[0] * a, 63.78137 * Math.log((1 + w) / (1 - w)) / 2]; 85.0511287798 < Math.abs(f[1]) && (w.outside = !0); return w }; f.prototype.inverse = function (f) { return [f[0] / (63.78137 * a), (2 * Math.atan(Math.exp(f[1] / 63.78137)) - Math.PI / 2) / a] }; return f
                                        }()
                                    }); G(f, "Maps/Projections/ProjectionRegistry.js", [f["Maps/Projections/LambertConformalConic.js"],
                                    f["Maps/Projections/EqualEarth.js"], f["Maps/Projections/Miller.js"], f["Maps/Projections/Orthographic.js"], f["Maps/Projections/WebMercator.js"]], function (a, f, w, D, u) { return { EqualEarth: f, LambertConformalConic: a, Miller: w, Orthographic: D, WebMercator: u } }); G(f, "Maps/Projection.js", [f["Core/Geometry/PolygonClip.js"], f["Maps/Projections/ProjectionRegistry.js"], f["Core/Utilities.js"]], function (a, f, w) {
                                        var D = this && this.__spreadArrays || function () {
                                            for (var a = 0, d = 0, c = arguments.length; d < c; d++)a += arguments[d].length;
                                            a = Array(a); var f = 0; for (d = 0; d < c; d++)for (var m = arguments[d], n = 0, t = m.length; n < t; n++, f++)a[f] = m[n]; return a
                                        }, u = a.clipLineString, B = a.clipPolygon, C = w.clamp, y = w.erase, t = 2 * Math.PI / 360, n = function (a) { -180 > a && (a += 360); 180 < a && (a -= 360); return a }; return function () {
                                            function a(d) {
                                                void 0 === d && (d = {}); this.hasGeoProjection = this.hasCoordinates = !1; this.maxLatitude = 90; this.options = d; var c = d.name, f = d.projectedBounds, m = d.rotation; this.rotator = m ? this.getRotator(m) : void 0; if (c = c ? a.registry[c] : void 0) this.def = new c(d); var l =
                                                    this.def, n = this.rotator; l && (this.maxLatitude = l.maxLatitude || 90, this.hasGeoProjection = !0); n && l ? (this.forward = function (a) { return l.forward(n.forward(a)) }, this.inverse = function (a) { return n.inverse(l.inverse(a)) }) : l ? (this.forward = function (a) { return l.forward(a) }, this.inverse = function (a) { return l.inverse(a) }) : n && (this.forward = n.forward, this.inverse = n.inverse); this.bounds = "world" === f ? l && l.bounds : f
                                            } a.add = function (d, c) { a.registry[d] = c }; a.greatCircle = function (a, c, f) {
                                                var d = Math.atan2, g = Math.cos, l = Math.sin,
                                                n = Math.sqrt, r = a[1] * t, q = a[0] * t, k = c[1] * t, h = c[0] * t, v = k - r, b = h - q; v = l(v / 2) * l(v / 2) + g(r) * g(k) * l(b / 2) * l(b / 2); v = 2 * d(n(v), n(1 - v)); var u = Math.round(6371E3 * v / 5E5); b = []; f && b.push(a); if (1 < u) for (u = a = 1 / u; .999 > u; u += a) { var e = l((1 - u) * v) / l(v), w = l(u * v) / l(v), p = e * g(r) * g(q) + w * g(k) * g(h), x = e * g(r) * l(q) + w * g(k) * l(h); e = e * l(r) + w * l(k); e = d(e, n(p * p + x * x)); p = d(x, p); b.push([p / t, e / t]) } f && b.push(c); return b
                                            }; a.insertGreatCircles = function (d) {
                                                for (var c = d.length - 1; c--;)if (10 < Math.max(Math.abs(d[c][0] - d[c + 1][0]), Math.abs(d[c][1] - d[c + 1][1]))) {
                                                    var f =
                                                        a.greatCircle(d[c], d[c + 1]); f.length && d.splice.apply(d, D([c + 1, 0], f))
                                                }
                                            }; a.toString = function (a) { a = a || {}; var c = a.rotation; return [a.name, c && c.join(",")].join(";") }; a.prototype.lineIntersectsBounds = function (a) {
                                                var c = this.bounds || {}, d = c.x2, f = c.y1, l = c.y2, n = function (a, c, d) { var f = a[0]; a = a[1]; var g = c ? 0 : 1; if ("number" === typeof d && f[c] >= d !== a[c] >= d) return f = f[g] + (d - f[c]) / (a[c] - f[c]) * (a[g] - f[g]), c ? [f, d] : [d, f] }, t = a[0]; if (c = n(a, 0, c.x1)) t = c, a[1] = c; else if (c = n(a, 0, d)) t = c, a[1] = c; if (c = n(a, 1, f)) t = c; else if (c = n(a, 1, l)) t =
                                                    c; return t
                                            }; a.prototype.getRotator = function (a) {
                                                var c = a[0] * t, d = (a[1] || 0) * t; a = (a[2] || 0) * t; var f = Math.cos(d), l = Math.sin(d), n = Math.cos(a), u = Math.sin(a); if (0 !== c || 0 !== d || 0 !== a) return {
                                                    forward: function (a) { var d = a[0] * t + c, g = a[1] * t, h = Math.cos(g); a = Math.cos(d) * h; d = Math.sin(d) * h; g = Math.sin(g); h = g * f + a * l; return [Math.atan2(d * n - h * u, a * f - g * l) / t, Math.asin(h * n + d * u) / t] }, inverse: function (a) {
                                                        var d = a[0] * t, g = a[1] * t, h = Math.cos(g); a = Math.cos(d) * h; d = Math.sin(d) * h; g = Math.sin(g); h = g * n - d * u; return [(Math.atan2(d * n + g * u, a * f + h * l) - c) /
                                                            t, Math.asin(h * f - a * l) / t]
                                                    }
                                                }
                                            }; a.prototype.forward = function (a) { return a }; a.prototype.inverse = function (a) { return a }; a.prototype.cutOnAntimeridian = function (d, c) {
                                                var f = [], m = [d]; d.forEach(function (a, h) { var b = d[h - 1]; if (!h) { if (!c) return; b = d[d.length - 1] } var g = b[0], k = a[0]; (-90 > g || 90 < g) && (-90 > k || 90 < k) && 0 < g !== 0 < k && (k = C((180 - (g + 360) % 360) / ((k + 360) % 360 - (g + 360) % 360), 0, 1), f.push({ i: h, lat: b[1] + k * (a[1] - b[1]), direction: 0 > g ? 1 : -1, previousLonLat: b, lonLat: a })) }); if (f.length) if (c) {
                                                    if (1 === f.length % 2) {
                                                        var l = f.slice().sort(function (a,
                                                            c) { return Math.abs(c.lat) - Math.abs(a.lat) })[0]; y(f, l)
                                                    } for (var t = f.length - 2; 0 <= t;) { var u = f[t].i, r = n(180 + .000001 * f[t].direction), q = n(180 - .000001 * f[t].direction); u = d.splice.apply(d, D([u, f[t + 1].i - u], a.greatCircle([r, f[t].lat], [r, f[t + 1].lat], !0))); u.push.apply(u, a.greatCircle([q, f[t + 1].lat], [q, f[t].lat], !0)); m.push(u); t -= 2 } if (l) for (r = 0; r < m.length; r++) {
                                                        t = l.direction; var k = l.lat; q = m[r]; u = q.indexOf(l.lonLat); if (-1 < u) {
                                                            r = (0 > k ? -1 : 1) * this.maxLatitude; var h = n(180 + .000001 * t), v = n(180 - .000001 * t); k = a.greatCircle([h,
                                                                k], [h, r], !0); for (h += 120 * t; -180 < h && 180 > h; h += 120 * t)k.push([h, r]); k.push.apply(k, a.greatCircle([v, r], [v, l.lat], !0)); q.splice.apply(q, D([u, 0], k)); break
                                                        }
                                                    }
                                                } else for (t = f.length; t--;)u = f[t].i, u = d.splice(u, d.length, [n(180 + .000001 * f[t].direction), f[t].lat]), u.unshift([n(180 - .000001 * f[t].direction), f[t].lat]), m.push(u); return m
                                            }; a.prototype.path = function (d) {
                                                var c = this, f = this.bounds, m = this.def, l = this.rotator, n = [], t = "Polygon" === d.type || "MultiPolygon" === d.type, r = this.hasGeoProjection, q = !m || !1 !== m.antimeridianCutting,
                                                k = q ? l : void 0, h = q ? m || this : this, v; f && (v = [[f.x1, f.y1], [f.x2, f.y1], [f.x2, f.y2], [f.x1, f.y2]]); var b = function (b) {
                                                    b = b.map(function (a) { if (q) { k && (a = k.forward(a)); var b = a[0]; .000001 > Math.abs(b - 180) && (b = 180 > b ? 179.999999 : 180.000001); a = [b, a[1]] } return a }); var d = [b]; r && (a.insertGreatCircles(b), q && (d = c.cutOnAntimeridian(b, t))); d.forEach(function (b) {
                                                        if (!(2 > b.length)) {
                                                            var c = !1, d = !1, e = function (a) { c ? n.push(["L", a[0], a[1]]) : (n.push(["M", a[0], a[1]]), c = !0) }, g = !1, k = !1, m = b.map(function (a) {
                                                                a = h.forward(a); a.outside ? g = !0 : k =
                                                                    !0; Infinity === a[1] ? a[1] = 1E10 : -Infinity === a[1] && (a[1] = -1E10); return a
                                                            }); if (q) { t && m.push(m[0]); if (g) { if (!k) return; if (v) if (t) m = B(m, v); else if (f) { u(m, v).forEach(function (a) { c = !1; a.forEach(e) }); return } } m.forEach(e) } else for (var l = 0; l < m.length; l++) { var A = b[l], w = m[l]; if (w.outside) d = !0; else { if (t && !y) { var y = A; b.push(A); m.push(w) } d && z && (t && r ? a.greatCircle(z, A).forEach(function (a) { return e(h.forward(a)) }) : c = !1); e(w); var z = A; d = !1 } }
                                                        }
                                                    })
                                                }; "LineString" === d.type ? b(d.coordinates) : "MultiLineString" === d.type ? d.coordinates.forEach(function (a) { return b(a) }) :
                                                    "Polygon" === d.type ? (d.coordinates.forEach(function (a) { return b(a) }), n.length && n.push(["Z"])) : "MultiPolygon" === d.type && (d.coordinates.forEach(function (a) { a.forEach(function (a) { return b(a) }) }), n.length && n.push(["Z"])); return n
                                            }; a.registry = f; return a
                                        }()
                                    }); G(f, "Maps/MapView.js", [f["Maps/MapViewOptionsDefault.js"], f["Maps/MapViewInsetsOptionsDefault.js"], f["Extensions/GeoJSON.js"], f["Core/Chart/MapChart.js"], f["Maps/MapUtilities.js"], f["Maps/Projection.js"], f["Core/Utilities.js"]], function (a, f, w, D, u, B,
                                        C) {
                                            var y = this && this.__extends || function () { var a = function (b, c) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) }; return a(b, c) }; return function (b, c) { function d() { this.constructor = b } a(b, c); b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d) } }(), t = this && this.__spreadArrays || function () {
                                                for (var a = 0, b = 0, c = arguments.length; b < c; b++)a += arguments[b].length; a = Array(a); var d = 0; for (b = 0; b < c; b++)for (var e =
                                                    arguments[b], f = 0, h = e.length; f < h; f++, d++)a[d] = e[f]; return a
                                            }, n = w.topo2geo, l = D.maps, d = u.boundsFromPath, c = u.pointInPolygon, g = C.addEvent, m = C.clamp, E = C.fireEvent, z = C.isArray, A = C.isNumber, r = C.isObject, q = C.isString, k = C.merge, h = C.pick, v = C.relativeLength, b = function (a, b) { return Math.log(400.979322 / Math.max((a.x2 - a.x1) / (b.width / 256), (a.y2 - a.y1) / (b.height / 256))) / Math.log(2) }, F = function () {
                                                function d(b, c) {
                                                    var f = this; this.insets = []; this.padding = [0, 0, 0, 0]; this.eventsToUnbind = []; var h; if (!(this instanceof e)) {
                                                        var m =
                                                            t([b.options.chart.map], (b.options.series || []).map(function (a) { return a.mapData })).map(function (a) { return f.getGeoMap(a) }), p = []; m.forEach(function (a) { a && (h || (h = a["hc-recommended-mapview"]), a.bbox && (a = a.bbox, p.push({ x1: a[0], y1: a[1], x2: a[2], y2: a[3] }))) }); var l = p.length && d.compositeBounds(p); if (l) { var n = l.x1; var q = l.y1, r = l.x2; l = l.y2; n = 180 < r - n && 90 < l - q ? { name: "EqualEarth" } : { name: "LambertConformalConic", parallels: [q, l], rotation: [-(n + r) / 2] } } this.geoMap = m[0]
                                                    } this.userOptions = c || {}; m = k(a, { projection: n }, h, c);
                                                    l = h && h.insets; c = c && c.insets; l && c && (m.insets = d.mergeInsets(l, c)); this.chart = b; this.center = m.center; this.options = m; this.projection = new B(m.projection); this.playingField = b.plotBox; this.zoom = m.zoom || 0; this.createInsets(); this.eventsToUnbind.push(g(b, "afterSetChartSize", function () { f.playingField = f.getField(); if (void 0 === f.minZoom || f.minZoom === f.zoom) f.fitToBounds(void 0, void 0, !1), !f.chart.hasRendered && A(f.userOptions.zoom) && (f.zoom = f.userOptions.zoom), f.userOptions.center && k(!0, f.center, f.userOptions.center) }));
                                                    this.setUpEvents()
                                                } d.mergeInsets = function (a, b) { var c = function (a) { var b = {}; a.forEach(function (a, c) { b[a && a.id || "i" + c] = a }); return b }, d = k(c(a), c(b)); return Object.keys(d).map(function (a) { return d[a] }) }; d.prototype.createInsets = function () { var a = this, b = this.options, c = b.insets; c && c.forEach(function (c) { c = new e(a, k(b.insetOptions, c)); a.insets.push(c) }) }; d.prototype.fitToBounds = function (a, c, d, e) {
                                                    void 0 === d && (d = !0); var f = a || this.getProjectedBounds(); if (f) {
                                                        var g = h(c, a ? 0 : this.options.padding); c = this.getField(!1);
                                                        g = z(g) ? g : [g, g, g, g]; this.padding = [v(g[0], c.height), v(g[1], c.width), v(g[2], c.height), v(g[3], c.width)]; this.playingField = this.getField(); c = b(f, this.playingField); a || (this.minZoom = c); a = this.projection.inverse([(f.x2 + f.x1) / 2, (f.y2 + f.y1) / 2]); this.setView(a, c, d, e)
                                                    }
                                                }; d.prototype.getField = function (a) { void 0 === a && (a = !0); a = a ? this.padding : [0, 0, 0, 0]; return { x: a[3], y: a[0], width: this.chart.plotWidth - a[1] - a[3], height: this.chart.plotHeight - a[0] - a[2] } }; d.prototype.getGeoMap = function (a) {
                                                    if (q(a)) return l[a]; if (r(a, !0)) {
                                                        if ("FeatureCollection" ===
                                                            a.type) return a; if ("Topology" === a.type) return n(a)
                                                    }
                                                }; d.prototype.getMapBBox = function () { var a = this.getProjectedBounds(), b = this.getScale(); if (a) { var c = this.padding, d = this.projectedUnitsToPixels({ x: a.x1, y: a.y2 }); return { width: (a.x2 - a.x1) * b + c[1] + c[3], height: (a.y2 - a.y1) * b + c[0] + c[2], x: d.x - c[3], y: d.y - c[0] } } }; d.prototype.getProjectedBounds = function () {
                                                    var a = this.chart.series.reduce(function (a, b) { var c = b.getProjectedBounds && b.getProjectedBounds(); c && !1 !== b.options.affectsMapView && a.push(c); return a }, []); return this.projection.bounds ||
                                                        d.compositeBounds(a)
                                                }; d.prototype.getScale = function () { return 256 / 400.979322 * Math.pow(2, this.zoom) }; d.prototype.getSVGTransform = function () { var a = this.playingField, b = a.x, c = a.y, d = a.width; a = a.height; var e = this.projection.forward(this.center), f = this.projection.hasCoordinates ? -1 : 1, h = this.getScale(); f *= h; return { scaleX: h, scaleY: f, translateX: b + d / 2 - e[0] * h, translateY: c + a / 2 - e[1] * f } }; d.prototype.lonLatToPixels = function (a) { if (a = this.lonLatToProjectedUnits(a)) return this.projectedUnitsToPixels(a) }; d.prototype.lonLatToProjectedUnits =
                                                    function (a) {
                                                        var b = this.chart, d = b.mapTransforms; if (d) { for (var e in d) if (Object.hasOwnProperty.call(d, e) && d[e].hitZone) { var f = b.transformFromLatLon(a, d[e]); if (f && c(f, d[e].hitZone.coordinates[0])) return f } return b.transformFromLatLon(a, d["default"]) } d = 0; for (e = this.insets; d < e.length; d++)if (b = e[d], b.options.geoBounds && c({ x: a.lon, y: a.lat }, b.options.geoBounds.coordinates[0])) return a = b.projection.forward([a.lon, a.lat]), a = b.projectedUnitsToPixels({ x: a[0], y: a[1] }), this.pixelsToProjectedUnits(a); a = this.projection.forward([a.lon,
                                                        a.lat]); if (!a.outside) return { x: a[0], y: a[1] }
                                                    }; d.prototype.projectedUnitsToLonLat = function (a) {
                                                        var b = this.chart, d = b.mapTransforms; if (d) { for (var e in d) if (Object.hasOwnProperty.call(d, e) && d[e].hitZone && c(a, d[e].hitZone.coordinates[0])) return b.transformToLatLon(a, d[e]); return b.transformToLatLon(a, d["default"]) } d = this.projectedUnitsToPixels(a); e = 0; for (var f = this.insets; e < f.length; e++)if (b = f[e], b.hitZone && c(d, b.hitZone.coordinates[0])) return a = b.pixelsToProjectedUnits(d), a = b.projection.inverse([a.x, a.y]),
                                                            { lon: a[0], lat: a[1] }; a = this.projection.inverse([a.x, a.y]); return { lon: a[0], lat: a[1] }
                                                    }; d.prototype.redraw = function (a) { this.chart.series.forEach(function (a) { a.useMapGeometry && (a.isDirty = !0) }); this.chart.redraw(a) }; d.prototype.setView = function (a, b, c, d) {
                                                        void 0 === c && (c = !0); a && (this.center = a); "number" === typeof b && ("number" === typeof this.minZoom && (b = Math.max(b, this.minZoom)), "number" === typeof this.options.maxZoom && (b = Math.min(b, this.options.maxZoom)), this.zoom = b); var e = this.getProjectedBounds(); if (e) {
                                                            a = this.projection.forward(this.center);
                                                            var f = this.playingField; b = f.x; var h = f.y, g = f.width; f = f.height; var k = this.getScale(), m = this.projectedUnitsToPixels({ x: e.x1, y: e.y1 }), l = this.projectedUnitsToPixels({ x: e.x2, y: e.y2 }); e = [(e.x1 + e.x2) / 2, (e.y1 + e.y2) / 2]; var p = m.x, n = l.y; l = l.x; m = m.y; l - p < g ? a[0] = e[0] : p < b && l < b + g ? a[0] += Math.max(p - b, l - g - b) / k : l > b + g && p > b && (a[0] += Math.min(l - g - b, p - b) / k); m - n < f ? a[1] = e[1] : n < h && m < h + f ? a[1] -= Math.max(n - h, m - f - h) / k : m > h + f && n > h && (a[1] -= Math.min(m - f - h, n - h) / k); this.center = this.projection.inverse(a); this.insets.forEach(function (a) {
                                                                a.options.field &&
                                                                (a.hitZone = a.getHitZone(), a.playingField = a.getField())
                                                            }); this.render()
                                                        } E(this, "afterSetView"); c && this.redraw(d)
                                                    }; d.prototype.projectedUnitsToPixels = function (a) { var b = this.getScale(), c = this.projection.forward(this.center), d = this.playingField; return { x: d.x + d.width / 2 - b * (c[0] - a.x), y: d.y + d.height / 2 + b * (c[1] - a.y) } }; d.prototype.pixelsToLonLat = function (a) { return this.projectedUnitsToLonLat(this.pixelsToProjectedUnits(a)) }; d.prototype.pixelsToProjectedUnits = function (a) {
                                                        var b = a.x; a = a.y; var c = this.getScale(),
                                                            d = this.projection.forward(this.center), e = this.playingField; return { x: d[0] + (b - (e.x + e.width / 2)) / c, y: d[1] - (a - (e.y + e.height / 2)) / c }
                                                    }; d.prototype.setUpEvents = function () {
                                                        var a = this, c = this.chart, d, e, f, h = function (h) {
                                                            var g = c.pointer.pinchDown, k = a.projection, l = c.mouseDownX, n = c.mouseDownY; 1 === g.length && (l = g[0].chartX, n = g[0].chartY); if ("number" === typeof l && "number" === typeof n) {
                                                                var p = l + "," + n, q = h.originalEvent; g = q.chartX; q = q.chartY; p !== e && (e = p, d = a.projection.forward(a.center), f = (a.projection.options.rotation || [0,
                                                                    0]).slice()); p = (p = k.def && k.def.bounds) && b(p, a.playingField) || -Infinity; "Orthographic" === k.options.name && (a.minZoom || Infinity) < 1.1 * p ? (k = 440 / (a.getScale() * Math.min(c.plotWidth, c.plotHeight)), f && (l = (l - g) * k - f[0], n = m(-f[1] - (n - q) * k, -80, 80), g = a.zoom, a.update({ projection: { rotation: [-l, -n] } }, !1), a.zoom = g, c.redraw(!1))) : (k = a.getScale(), n = a.projection.inverse([d[0] + (l - g) / k, d[1] - (n - q) / k]), a.setView(n, void 0, !0, !1)); h.preventDefault()
                                                            }
                                                        }; g(c, "pan", h); g(c, "touchpan", h); g(c, "selection", function (b) {
                                                            if (b.resetSelection) a.zoomBy();
                                                            else { var d = b.x - c.plotLeft, e = b.y - c.plotTop, f = a.pixelsToProjectedUnits({ x: d, y: e }), h = f.y; f = f.x; d = a.pixelsToProjectedUnits({ x: d + b.width, y: e + b.height }); a.fitToBounds({ x1: f, y1: h, x2: d.x, y2: d.y }, void 0, !0, b.originalEvent.touches ? !1 : void 0); /^touch/.test(b.originalEvent.type) || c.showResetZoom(); b.preventDefault() }
                                                        })
                                                    }; d.prototype.render = function () { this.group || (this.group = this.chart.renderer.g("map-view").attr({ zIndex: 4 }).add()) }; d.prototype.update = function (a, b, c) {
                                                        void 0 === b && (b = !0); var d = a.projection; d = d &&
                                                            B.toString(d) !== B.toString(this.options.projection); var e = !1; k(!0, this.userOptions, a); k(!0, this.options, a); "insets" in a && (this.insets.forEach(function (a) { return a.destroy() }), this.insets.length = 0, e = !0); if (d || e) this.chart.series.forEach(function (a) { var b = a.transformGroups; a.clearBounds && a.clearBounds(); a.isDirty = !0; a.isDirtyData = !0; if (e && b) for (; 1 < b.length;)(a = b.pop()) && a.destroy() }), d && (this.projection = new B(this.options.projection)), e && this.createInsets(), a.center || A(a.zoom) || this.fitToBounds(void 0,
                                                                void 0, !1); (a.center || A(a.zoom)) && this.setView(this.options.center, a.zoom, !1); b && this.chart.redraw(c)
                                                    }; d.prototype.zoomBy = function (a, b, c, d) {
                                                        var e = this.chart, f = this.projection.forward(this.center); b = b ? this.projection.forward(b) : []; var h = b[0], g = b[1]; "number" === typeof a ? (a = this.zoom + a, b = void 0, c && (h = c[0], g = c[1], c = this.getScale(), h = h - e.plotLeft - e.plotWidth / 2, e = g - e.plotTop - e.plotHeight / 2, h = f[0] + h / c, g = f[1] + e / c), "number" === typeof h && "number" === typeof g && (c = 1 - Math.pow(2, this.zoom) / Math.pow(2, a), h = f[0] - h,
                                                            e = f[1] - g, f[0] -= h * c, f[1] += e * c, b = this.projection.inverse(f)), this.setView(b, a, void 0, d)) : this.fitToBounds(void 0, void 0, void 0, d)
                                                    }; d.compositeBounds = function (a) { if (a.length) return a.slice(1).reduce(function (a, b) { a.x1 = Math.min(a.x1, b.x1); a.y1 = Math.min(a.y1, b.y1); a.x2 = Math.max(a.x2, b.x2); a.y2 = Math.max(a.y2, b.y2); return a }, k(a[0])) }; return d
                                            }(), e = function (a) {
                                                function b(b, c) {
                                                    var e = a.call(this, b.chart, c) || this; e.id = c.id; e.mapView = b; e.options = k(f, c); e.allBounds = []; e.options.geoBounds && (b = b.projection.path(e.options.geoBounds),
                                                        e.geoBoundsProjectedBox = d(b), e.geoBoundsProjectedPolygon = b.map(function (a) { return [a[1] || 0, a[2] || 0] })); return e
                                                } y(b, a); b.prototype.getField = function (b) {
                                                    void 0 === b && (b = !0); var c = this.hitZone; if (c) { var d = b ? this.padding : [0, 0, 0, 0]; c = c.coordinates[0]; var e = c.map(function (a) { return a[0] }), f = c.map(function (a) { return a[1] }); c = Math.min.apply(0, e) + d[3]; e = Math.max.apply(0, e) - d[1]; var h = Math.min.apply(0, f) + d[0]; d = Math.max.apply(0, f) - d[2]; if (A(c) && A(h)) return { x: c, y: h, width: e - c, height: d - h } } return a.prototype.getField.call(this,
                                                        b)
                                                }; b.prototype.getHitZone = function () { var a = this.chart, b = this.mapView, c = this.options, d = (c.field || {}).coordinates; if (d) { d = d[0]; if ("percent" === c.units) { var e = "mapBoundingBox" === c.relativeTo && b.getMapBBox() || k(a.plotBox, { x: 0, y: 0 }); d = d.map(function (a) { return [v(a[0] + "%", e.width, e.x), v(a[1] + "%", e.height, e.y)] }) } return { type: "Polygon", coordinates: [d] } } }; b.prototype.getProjectedBounds = function () { return F.compositeBounds(this.allBounds) }; b.prototype.isInside = function (a) {
                                                    var b = this.geoBoundsProjectedBox, d = this.geoBoundsProjectedPolygon;
                                                    return !!(b && a.x >= b.x1 && a.x <= b.x2 && a.y >= b.y1 && a.y <= b.y2 && d && c(a, d))
                                                }; b.prototype.render = function () {
                                                    var a = this.chart, b = this.mapView, c = this.options, d = c.borderPath || c.field; if (d && b.group) {
                                                        var e = !0; this.border || (this.border = a.renderer.path().addClass("highcharts-mapview-inset-border").add(b.group), e = !1); a.styledMode || this.border.attr({ stroke: c.borderColor, "stroke-width": c.borderWidth }); var f = Math.round(this.border.strokeWidth()) % 2 / 2, h = "mapBoundingBox" === c.relativeTo && b.getMapBBox() || b.playingField; b = (d.coordinates ||
                                                            []).reduce(function (b, d) { return d.reduce(function (b, d, e) { var g = d[0]; d = d[1]; "percent" === c.units && (g = a.plotLeft + v(g + "%", h.width, h.x), d = a.plotTop + v(d + "%", h.height, h.y)); g = Math.floor(g) + f; d = Math.floor(d) + f; b.push(0 === e ? ["M", g, d] : ["L", g, d]); return b }, b) }, []); this.border[e ? "animate" : "attr"]({ d: b })
                                                    }
                                                }; b.prototype.destroy = function () { this.border && (this.border = this.border.destroy()); this.eventsToUnbind.forEach(function (a) { return a() }) }; b.prototype.setUpEvents = function () { }; return b
                                            }(F); g(D, "afterInit", function () {
                                                this.mapView =
                                                new F(this, this.options.mapView)
                                            }); return F
                                    }); G(f, "Series/Map/MapSeries.js", [f["Core/Animation/AnimationUtilities.js"], f["Series/ColorMapMixin.js"], f["Series/CenteredUtilities.js"], f["Core/Globals.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Chart/MapChart.js"], f["Series/Map/MapPoint.js"], f["Maps/MapView.js"], f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Renderer/SVG/SVGRenderer.js"], f["Core/Utilities.js"]], function (a, f, w, D, u, B, C, y, t, n, l, d) {
                                        var c = this && this.__extends || function () {
                                            var a =
                                                function (b, c) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) }; return a(b, c) }; return function (b, c) { function d() { this.constructor = b } a(b, c); b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d) }
                                        }(), g = a.animObject; a = D.noop; var m = B.splitPath; B = n.seriesTypes; var E = B.column, z = B.scatter; B = d.extend; var A = d.find, r = d.fireEvent, q = d.getNestedProperty, k = d.isArray, h = d.isNumber, v = d.isObject, b = d.merge,
                                            F = d.objectEach, e = d.pick, H = d.splat; d = function (a) {
                                                function d() { var b = null !== a && a.apply(this, arguments) || this; b.chart = void 0; b.data = void 0; b.group = void 0; b.joinBy = void 0; b.options = void 0; b.points = void 0; b.processedData = []; return b } c(d, a); d.prototype.animate = function (a) {
                                                    var b = this.chart, c = this.group, d = g(this.options.animation); b.renderer.isSVG && (a ? c.attr({ translateX: b.plotLeft + b.plotWidth / 2, translateY: b.plotTop + b.plotHeight / 2, scaleX: .001, scaleY: .001 }) : c.animate({
                                                        translateX: b.plotLeft, translateY: b.plotTop,
                                                        scaleX: 1, scaleY: 1
                                                    }, d))
                                                }; d.prototype.animateDrilldown = function (a) { var b = this.chart, c = this.group; b.renderer.isSVG && (a ? c.attr({ translateX: b.plotLeft + b.plotWidth / 2, translateY: b.plotTop + b.plotHeight / 2, scaleX: .1, scaleY: .1, opacity: .01 }) : (c.animate({ translateX: b.plotLeft, translateY: b.plotTop, scaleX: 1, scaleY: 1, opacity: 1 }, this.chart.options.drilldown.animation), b.drilldown && b.drilldown.fadeInGroup(this.dataLabelsGroup))) }; d.prototype.animateDrillupFrom = function () {
                                                    var a = this.chart; a.renderer.isSVG && this.group.animate({
                                                        translateX: a.plotLeft +
                                                            a.plotWidth / 2, translateY: a.plotTop + a.plotHeight / 2, scaleX: .1, scaleY: .1, opacity: .01
                                                    })
                                                }; d.prototype.animateDrillupTo = function (a) { E.prototype.animateDrillupTo.call(this, a) }; d.prototype.clearBounds = function () { this.points.forEach(function (a) { delete a.bounds; delete a.insetIndex; delete a.projectedPath }); delete this.bounds }; d.prototype.doFullTranslate = function () { return !(!(this.isDirtyData || this.chart.isResizing || this.chart.renderer.isVML) && this.hasRendered) }; d.prototype.drawMapDataLabels = function () {
                                                    t.prototype.drawDataLabels.call(this);
                                                    this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect)
                                                }; d.prototype.drawPoints = function () {
                                                    var a = this, b = this.chart, c = this.group, d = this.transformGroups, f = void 0 === d ? [] : d, h = b.mapView, g = b.renderer; h && (this.transformGroups = f, f[0] || (f[0] = g.g().add(c)), h.insets.forEach(function (a, b) { f[b + 1] || f.push(g.g().add(c)) }), this.doFullTranslate() && (this.points.forEach(function (c) {
                                                        var d = c.graphic, e = c.shapeArgs; c.group = f["number" === typeof c.insetIndex ? c.insetIndex + 1 : 0]; d && d.parentGroup !== c.group && d.add(c.group);
                                                        e && b.hasRendered && !b.styledMode && (e.fill = a.pointAttribs(c, c.state).fill)
                                                    }), E.prototype.drawPoints.apply(this), this.points.forEach(function (c) { if (c.graphic) { var d = ""; c.name && (d += "highcharts-name-" + c.name.replace(/ /g, "-").toLowerCase()); c.properties && c.properties["hc-key"] && (d += " highcharts-key-" + c.properties["hc-key"].toString().toLowerCase()); d && c.graphic.addClass(d); b.styledMode && c.graphic.css(a.pointAttribs(c, c.selected && "select" || void 0)) } })), f.forEach(function (c, d) {
                                                        var f = (0 === d ? h : h.insets[d -
                                                            1]).getSVGTransform(), k = e(a.options[a.pointAttrToOptions && a.pointAttrToOptions["stroke-width"] || "borderWidth"], 1), m = f.scaleX, l = 0 < f.scaleY ? 1 : -1; if (g.globalAnimation && b.hasRendered) { var n = Number(c.attr("translateX")), p = Number(c.attr("translateY")), q = Number(c.attr("scaleX")); c.attr({ animator: 0 }).animate({ animator: 1 }, { step: function (a, b) { a = q + (m - q) * b.pos; c.attr({ translateX: n + (f.translateX - n) * b.pos, translateY: p + (f.translateY - p) * b.pos, scaleX: a, scaleY: a * l }); c.element.setAttribute("stroke-width", k / a) } }) } else c.attr(f),
                                                                c.element.setAttribute("stroke-width", k / m)
                                                    }), this.drawMapDataLabels())
                                                }; d.prototype.getProjectedBounds = function () {
                                                    if (!this.bounds && this.chart.mapView) {
                                                        var a = this.chart.mapView, b = a.insets, c = a.projection, d = []; (this.points || []).forEach(function (a) {
                                                            if (a.path || a.geometry) {
                                                                "string" === typeof a.path ? a.path = m(a.path) : k(a.path) && "M" === a.path[0] && (a.path = l.prototype.pathToSegments(a.path)); if (!a.bounds) {
                                                                    var f = a.getProjectedBounds(c); if (f) {
                                                                        a.labelrank = e(a.labelrank, (f.x2 - f.x1) * (f.y2 - f.y1)); var g = f.midX, n = f.midY;
                                                                        if (b && h(g) && h(n)) { var p = A(b, function (a) { return a.isInside({ x: g, y: n }) }); p && (delete a.projectedPath, (f = a.getProjectedBounds(p.projection)) && p.allBounds.push(f), a.insetIndex = b.indexOf(p)) } a.bounds = f
                                                                    }
                                                                } a.bounds && void 0 === a.insetIndex && d.push(a.bounds)
                                                            }
                                                        }); this.bounds = y.compositeBounds(d)
                                                    } return this.bounds
                                                }; d.prototype.hasData = function () { return !!this.processedXData.length }; d.prototype.pointAttribs = function (a, b) {
                                                    var c = a.series.chart, d = c.mapView; b = c.styledMode ? this.colorAttribs(a) : E.prototype.pointAttribs.call(this,
                                                        a, b); (a = a.options[this.pointAttrToOptions && this.pointAttrToOptions["stroke-width"] || "borderWidth"]) && d && (a /= d.getScale()); b.dashstyle && d && this.options.borderWidth && (a = this.options.borderWidth / d.getScale()); b["stroke-width"] = e(a, "inherit"); return b
                                                }; d.prototype.updateData = function () { return this.processedData ? !1 : a.prototype.updateData.apply(this, arguments) }; d.prototype.setData = function () { a.prototype.setData.apply(this, arguments); this.processData(); this.generatePoints() }; d.prototype.processData = function () {
                                                    var a =
                                                        this.options, c = a.data, d = this.chart.options.chart, e = this.joinBy, f = a.keys || this.pointArrayMap, g = [], m = {}, l = this.chart.mapView; l = l && (v(a.mapData, !0) ? l.getGeoMap(a.mapData) : l.geoMap); var n = this.chart.mapTransforms; (this.chart.mapTransforms = n = d.mapTransforms || l && l["hc-transform"] || n) && F(n, function (a) { a.rotation && (a.cosAngle = Math.cos(a.rotation), a.sinAngle = Math.sin(a.rotation)) }); if (k(a.mapData)) var p = a.mapData; else l && "FeatureCollection" === l.type && (this.mapTitle = l.title, p = D.geojson(l, this.type, this)); var r =
                                                            this.processedData = []; c && c.forEach(function (b, d) { var g = 0; if (h(b)) r[d] = { value: b }; else if (k(b)) { r[d] = {}; !a.keys && b.length > f.length && "string" === typeof b[0] && (r[d]["hc-key"] = b[0], ++g); for (var m = 0; m < f.length; ++m, ++g)f[m] && "undefined" !== typeof b[g] && (0 < f[m].indexOf(".") ? C.prototype.setNestedProperty(r[d], b[g], f[m]) : r[d][f[m]] = b[g]) } else r[d] = c[d]; e && "_i" === e[0] && (r[d]._i = d) }); if (p) {
                                                                this.mapData = p; this.mapMap = {}; for (n = 0; n < p.length; n++)d = p[n], l = d.properties, d._i = n, e[0] && l && l[e[0]] && (d[e[0]] = l[e[0]]), m[d[e[0]]] =
                                                                    d; this.mapMap = m; if (e[1]) { var t = e[1]; r.forEach(function (a) { a = q(t, a); m[a] && g.push(m[a]) }) } if (a.allAreas) { if (e[1]) { var u = e[1]; r.forEach(function (a) { g.push(q(u, a)) }) } var x = "|" + g.map(function (a) { return a && a[e[0]] }).join("|") + "|"; p.forEach(function (a) { e[0] && -1 !== x.indexOf("|" + a[e[0]] + "|") || r.push(b(a, { value: null })) }) }
                                                            } this.processedXData = Array(r.length)
                                                }; d.prototype.setOptions = function (a) { a = t.prototype.setOptions.call(this, a); var b = a.joinBy; null === b && (b = "_i"); b = this.joinBy = H(b); b[1] || (b[1] = b[0]); return a };
                                                d.prototype.translate = function () {
                                                    var a = this.doFullTranslate(), b = this.chart.mapView, c = b && b.projection; !this.chart.hasRendered || !this.isDirtyData && this.hasRendered || (this.processData(), this.generatePoints(), delete this.bounds, this.getProjectedBounds()); if (b) {
                                                        var d = b.getSVGTransform(); this.points.forEach(function (e) {
                                                            var f = h(e.insetIndex) && b.insets[e.insetIndex].getSVGTransform() || d; f && e.bounds && h(e.bounds.midX) && h(e.bounds.midY) && (e.plotX = e.bounds.midX * f.scaleX + f.translateX, e.plotY = e.bounds.midY * f.scaleY +
                                                                f.translateY); a && (e.shapeType = "path", e.shapeArgs = { d: C.getProjectedPath(e, c) })
                                                        })
                                                    } r(this, "afterTranslate")
                                                }; d.defaultOptions = b(z.defaultOptions, {
                                                    affectsMapView: !0, animation: !1, dataLabels: { crop: !1, formatter: function () { var a = this.series.chart.numberFormatter, b = this.point.value; return h(b) ? a(b, -1) : "" }, inside: !0, overflow: !1, padding: 0, verticalAlign: "middle" }, marker: null, nullColor: "#f7f7f7", stickyTracking: !1, tooltip: { followPointer: !0, pointFormat: "{point.name}: {point.value}<br/>" }, turboThreshold: 0, allAreas: !0,
                                                    borderColor: "#cccccc", borderWidth: 1, joinBy: "hc-key", states: { hover: { halo: null, brightness: .2 }, normal: { animation: !0 }, select: { color: "#cccccc" }, inactive: { opacity: 1 } }
                                                }); return d
                                            }(z); B(d.prototype, {
                                                type: "map", axisTypes: f.SeriesMixin.axisTypes, colorAttribs: f.SeriesMixin.colorAttribs, colorKey: f.SeriesMixin.colorKey, directTouch: !0, drawDataLabels: a, drawGraph: a, drawLegendSymbol: u.drawRectangle, forceDL: !0, getCenter: w.getCenter, getExtremesFromAll: !0, getSymbol: f.SeriesMixin.getSymbol, isCartesian: !1, parallelArrays: f.SeriesMixin.parallelArrays,
                                                pointArrayMap: f.SeriesMixin.pointArrayMap, pointClass: C, preserveAspectRatio: !0, searchPoint: a, trackerGroups: f.SeriesMixin.trackerGroups, useMapGeometry: !0
                                            }); n.registerSeriesType("map", d); ""; return d
                                    }); G(f, "Series/MapLine/MapLineSeries.js", [f["Series/Map/MapSeries.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, w) {
                                        var D = this && this.__extends || function () {
                                            var a = function (f, n) {
                                                a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, d) { a.__proto__ = d } || function (a, d) {
                                                    for (var c in d) d.hasOwnProperty(c) &&
                                                        (a[c] = d[c])
                                                }; return a(f, n)
                                            }; return function (f, n) { function l() { this.constructor = f } a(f, n); f.prototype = null === n ? Object.create(n) : (l.prototype = n.prototype, new l) }
                                        }(), u = f.series, B = w.extend, C = w.merge; w = function (f) {
                                            function t() { var a = null !== f && f.apply(this, arguments) || this; a.data = void 0; a.options = void 0; a.points = void 0; return a } D(t, f); t.prototype.pointAttribs = function (f, l) { f = a.prototype.pointAttribs.call(this, f, l); f.fill = this.options.fillColor; return f }; t.defaultOptions = C(a.defaultOptions, { lineWidth: 1, fillColor: "none" });
                                            return t
                                        }(a); B(w.prototype, { type: "mapline", colorProp: "stroke", drawLegendSymbol: u.prototype.drawLegendSymbol, pointAttrToOptions: { stroke: "color", "stroke-width": "lineWidth" } }); f.registerSeriesType("mapline", w); ""; return w
                                    }); G(f, "Series/MapPoint/MapPointPoint.js", [f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f) {
                                        var w = this && this.__extends || function () {
                                            var a = function (f, u) {
                                                a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, f) { a.__proto__ = f } || function (a, f) {
                                                    for (var n in f) f.hasOwnProperty(n) &&
                                                        (a[n] = f[n])
                                                }; return a(f, u)
                                            }; return function (f, u) { function w() { this.constructor = f } a(f, u); f.prototype = null === u ? Object.create(u) : (w.prototype = u.prototype, new w) }
                                        }(), D = f.isNumber; return function (a) { function f() { var f = null !== a && a.apply(this, arguments) || this; f.options = void 0; f.series = void 0; return f } w(f, a); f.prototype.isValid = function () { return !!(this.options.geometry || D(this.x) && D(this.y) || D(this.options.lon) && D(this.options.lat)) }; return f }(a.seriesTypes.scatter.prototype.pointClass)
                                    }); G(f, "Series/MapPoint/MapPointSeries.js",
                                        [f["Core/Globals.js"], f["Series/MapPoint/MapPointPoint.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, w, D) {
                                            var u = this && this.__extends || function () { var a = function (d, c) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, c) { a.__proto__ = c } || function (a, c) { for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d]) }; return a(d, c) }; return function (d, c) { function f() { this.constructor = d } a(d, c); d.prototype = null === c ? Object.create(c) : (f.prototype = c.prototype, new f) } }(); a = a.noop;
                                            var B = w.seriesTypes.scatter, C = D.extend, y = D.fireEvent, t = D.isNumber, n = D.merge; D = function (a) {
                                                function d() { var c = null !== a && a.apply(this, arguments) || this; c.chart = void 0; c.data = void 0; c.options = void 0; c.points = void 0; return c } u(d, a); d.prototype.drawDataLabels = function () { a.prototype.drawDataLabels.call(this); this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect) }; d.prototype.projectPoint = function (a) {
                                                    var c = this.chart.mapView; if (c) {
                                                        var d = a.geometry, f = a.lon; a = a.lat; d = d && "Point" === d.type && d.coordinates;
                                                        t(f) && t(a) && (d = [f, a]); if (d) return c.lonLatToProjectedUnits({ lon: d[0], lat: d[1] })
                                                    }
                                                }; d.prototype.translate = function () {
                                                    var a = this, d = this.chart.mapView; this.processedXData || this.processData(); this.generatePoints(); this.getProjectedBounds && this.isDirtyData && (delete this.bounds, this.getProjectedBounds()); if (d) {
                                                        var f = d.projection.hasCoordinates; this.points.forEach(function (c) {
                                                            var g = c.x; g = void 0 === g ? void 0 : g; var m = c.y; m = void 0 === m ? void 0 : m; var l = a.projectPoint(c.options); l ? (g = l.x, m = l.y) : c.bounds && (g = c.bounds.midX,
                                                                m = c.bounds.midY); t(g) && t(m) ? (g = d.projectedUnitsToPixels({ x: g, y: m }), c.plotX = g.x, c.plotY = f ? g.y : a.chart.plotHeight - g.y) : c.y = c.plotX = c.plotY = void 0; c.isInside = a.isPointInside(c); c.zone = a.zones.length ? c.getZone() : void 0
                                                        })
                                                    } y(this, "afterTranslate")
                                                }; d.defaultOptions = n(B.defaultOptions, { dataLabels: { crop: !1, defer: !1, enabled: !0, formatter: function () { return this.point.name }, overflow: !1, style: { color: "#000000" } } }); return d
                                            }(B); C(D.prototype, {
                                                type: "mappoint", axisTypes: ["colorAxis"], forceDL: !0, isCartesian: !1, pointClass: f,
                                                searchPoint: a, useMapGeometry: !0
                                            }); w.registerSeriesType("mappoint", D); ""; return D
                                        }); G(f, "Series/Bubble/BubbleLegendDefaults.js", [], function () {
                                            return {
                                                borderColor: void 0, borderWidth: 2, className: void 0, color: void 0, connectorClassName: void 0, connectorColor: void 0, connectorDistance: 60, connectorWidth: 1, enabled: !1, labels: { className: void 0, allowOverlap: !1, format: "", formatter: void 0, align: "right", style: { fontSize: "10px", color: "#000000" }, x: 0, y: 0 }, maxSize: 60, minSize: 10, legendIndex: 0, ranges: {
                                                    value: void 0, borderColor: void 0,
                                                    color: void 0, connectorColor: void 0
                                                }, sizeBy: "area", sizeByAbsoluteValue: !1, zIndex: 1, zThreshold: 0
                                            }
                                        }); G(f, "Series/Bubble/BubbleLegendItem.js", [f["Core/Color/Color.js"], f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function (a, f, w, D) {
                                            var u = a.parse, B = w.noop, C = D.arrayMax, y = D.arrayMin, t = D.isNumber, n = D.merge, l = D.pick, d = D.stableSort; ""; return function () {
                                                function a(a, c) {
                                                    this.options = this.symbols = this.visible = this.selected = this.ranges = this.movementX = this.maxLabel = this.legendSymbol =
                                                        this.legendItemWidth = this.legendItemHeight = this.legendItem = this.legendGroup = this.legend = this.fontMetrics = this.chart = void 0; this.setState = B; this.init(a, c)
                                                } a.prototype.init = function (a, c) { this.options = a; this.visible = !0; this.chart = c.chart; this.legend = c }; a.prototype.addToLegend = function (a) { a.splice(this.options.legendIndex, 0, this) }; a.prototype.drawLegendSymbol = function (a) {
                                                    var c = this.chart, f = this.options, g = l(a.options.itemDistance, 20), n = f.ranges, r = f.connectorDistance; this.fontMetrics = c.renderer.fontMetrics(f.labels.style.fontSize);
                                                    n && n.length && t(n[0].value) ? (d(n, function (a, c) { return c.value - a.value }), this.ranges = n, this.setOptions(), this.render(), a = this.getMaxLabelSize(), n = this.ranges[0].radius, c = 2 * n, r = r - n + a.width, r = 0 < r ? r : 0, this.maxLabel = a, this.movementX = "left" === f.labels.align ? r : 0, this.legendItemWidth = c + r + g, this.legendItemHeight = c + this.fontMetrics.h / 2) : a.options.bubbleLegend.autoRanges = !0
                                                }; a.prototype.setOptions = function () {
                                                    var a = this.ranges, c = this.options, d = this.chart.series[c.seriesIndex], f = this.legend.baseline, t = {
                                                        zIndex: c.zIndex,
                                                        "stroke-width": c.borderWidth
                                                    }, r = { zIndex: c.zIndex, "stroke-width": c.connectorWidth }, q = { align: this.legend.options.rtl || "left" === c.labels.align ? "right" : "left", zIndex: c.zIndex }, k = d.options.marker.fillOpacity, h = this.chart.styledMode; a.forEach(function (g, b) {
                                                        h || (t.stroke = l(g.borderColor, c.borderColor, d.color), t.fill = l(g.color, c.color, 1 !== k ? u(d.color).setOpacity(k).get("rgba") : d.color), r.stroke = l(g.connectorColor, c.connectorColor, d.color)); a[b].radius = this.getRangeRadius(g.value); a[b] = n(a[b], {
                                                            center: a[0].radius -
                                                                a[b].radius + f
                                                        }); h || n(!0, a[b], { bubbleAttribs: n(t), connectorAttribs: n(r), labelAttribs: q })
                                                    }, this)
                                                }; a.prototype.getRangeRadius = function (a) { var c = this.options; return this.chart.series[this.options.seriesIndex].getRadius.call(this, c.ranges[c.ranges.length - 1].value, c.ranges[0].value, c.minSize, c.maxSize, a) }; a.prototype.render = function () {
                                                    var a = this.chart.renderer, c = this.options.zThreshold; this.symbols || (this.symbols = { connectors: [], bubbleItems: [], labels: [] }); this.legendSymbol = a.g("bubble-legend"); this.legendItem =
                                                        a.g("bubble-legend-item"); this.legendSymbol.translateX = 0; this.legendSymbol.translateY = 0; this.ranges.forEach(function (a) { a.value >= c && this.renderRange(a) }, this); this.legendSymbol.add(this.legendItem); this.legendItem.add(this.legendGroup); this.hideOverlappingLabels()
                                                }; a.prototype.renderRange = function (a) {
                                                    var c = this.options, d = c.labels, f = this.chart, g = f.series[c.seriesIndex], l = f.renderer, n = this.symbols; f = n.labels; var k = a.center, h = Math.abs(a.radius), t = c.connectorDistance || 0, b = d.align, u = c.connectorWidth, e =
                                                        this.ranges[0].radius || 0, w = k - h - c.borderWidth / 2 + u / 2, p = this.fontMetrics; p = p.f / 2 - (p.h - p.f) / 2; var x = l.styledMode; t = this.legend.options.rtl || "left" === b ? -t : t; "center" === b && (t = 0, c.connectorDistance = 0, a.labelAttribs.align = "center"); b = w + c.labels.y; var y = e + t + c.labels.x; n.bubbleItems.push(l.circle(e, k + ((w % 1 ? 1 : .5) - (u % 2 ? 0 : .5)), h).attr(x ? {} : a.bubbleAttribs).addClass((x ? "highcharts-color-" + g.colorIndex + " " : "") + "highcharts-bubble-legend-symbol " + (c.className || "")).add(this.legendSymbol)); n.connectors.push(l.path(l.crispLine([["M",
                                                            e, w], ["L", e + t, w]], c.connectorWidth)).attr(x ? {} : a.connectorAttribs).addClass((x ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (c.connectorClassName || "")).add(this.legendSymbol)); a = l.text(this.formatLabel(a), y, b + p).attr(x ? {} : a.labelAttribs).css(x ? {} : d.style).addClass("highcharts-bubble-legend-labels " + (c.labels.className || "")).add(this.legendSymbol); f.push(a); a.placed = !0; a.alignAttr = { x: y, y: b + p }
                                                }; a.prototype.getMaxLabelSize = function () {
                                                    var a, c; this.symbols.labels.forEach(function (d) {
                                                        c =
                                                        d.getBBox(!0); a = a ? c.width > a.width ? c : a : c
                                                    }); return a || {}
                                                }; a.prototype.formatLabel = function (a) { var c = this.options, d = c.labels.formatter; c = c.labels.format; var g = this.chart.numberFormatter; return c ? f.format(c, a) : d ? d.call(a) : g(a.value, 1) }; a.prototype.hideOverlappingLabels = function () { var a = this.chart, c = this.symbols; !this.options.labels.allowOverlap && c && (a.hideOverlappingLabels(c.labels), c.labels.forEach(function (a, d) { a.newOpacity ? a.newOpacity !== a.oldOpacity && c.connectors[d].show() : c.connectors[d].hide() })) };
                                                a.prototype.getRanges = function () {
                                                    var a = this.legend.bubbleLegend, c = a.options.ranges, d, f = Number.MAX_VALUE, u = -Number.MAX_VALUE; a.chart.series.forEach(function (a) { a.isBubble && !a.ignoreSeries && (d = a.zData.filter(t), d.length && (f = l(a.options.zMin, Math.min(f, Math.max(y(d), !1 === a.options.displayNegative ? a.options.zThreshold : -Number.MAX_VALUE))), u = l(a.options.zMax, Math.max(u, C(d))))) }); var r = f === u ? [{ value: u }] : [{ value: f }, { value: (f + u) / 2 }, { value: u, autoRanges: !0 }]; c.length && c[0].radius && r.reverse(); r.forEach(function (a,
                                                        d) { c && c[d] && (r[d] = n(c[d], a)) }); return r
                                                }; a.prototype.predictBubbleSizes = function () { var a = this.chart, c = this.fontMetrics, d = a.legend.options, f = d.floating, l = (d = "horizontal" === d.layout) ? a.legend.lastLineHeight : 0, n = a.plotSizeX, q = a.plotSizeY, k = a.series[this.options.seriesIndex], h = k.getPxExtremes(); a = Math.ceil(h.minPxSize); h = Math.ceil(h.maxPxSize); var t = Math.min(q, n); k = k.options.maxSize; if (f || !/%$/.test(k)) c = h; else if (k = parseFloat(k), c = (t + l - c.h / 2) * k / 100 / (k / 100 + 1), d && q - c >= n || !d && n - c >= q) c = h; return [a, Math.ceil(c)] };
                                                a.prototype.updateRanges = function (a, c) { var d = this.legend.options.bubbleLegend; d.minSize = a; d.maxSize = c; d.ranges = this.getRanges() }; a.prototype.correctSizes = function () { var a = this.legend, c = this.chart.series[this.options.seriesIndex].getPxExtremes(); 1 < Math.abs(Math.ceil(c.maxPxSize) - this.options.maxSize) && (this.updateRanges(this.options.minSize, c.maxPxSize), a.render()) }; return a
                                            }()
                                        }); G(f, "Series/Bubble/BubbleLegendComposition.js", [f["Series/Bubble/BubbleLegendDefaults.js"], f["Series/Bubble/BubbleLegendItem.js"],
                                        f["Core/DefaultOptions.js"], f["Core/Utilities.js"]], function (a, f, w, D) {
                                            var u = w.setOptions, B = D.addEvent, C = D.objectEach, y = D.wrap, t; (function (n) {
                                                function l(a, f, g) {
                                                    var k = this.legend, h = 0 <= d(this); if (k && k.options.enabled && k.bubbleLegend && k.options.bubbleLegend.autoRanges && h) {
                                                        var l = k.bubbleLegend.options; h = k.bubbleLegend.predictBubbleSizes(); k.bubbleLegend.updateRanges(h[0], h[1]); l.placed || (k.group.placed = !1, k.allItems.forEach(function (a) { a.legendGroup.translateY = null })); k.render(); this.getMargins(); this.axes.forEach(function (a) {
                                                            a.visible &&
                                                            a.render(); l.placed || (a.setScale(), a.updateNames(), C(a.ticks, function (a) { a.isNew = !0; a.isNewLabel = !0 }))
                                                        }); l.placed = !0; this.getMargins(); a.call(this, f, g); k.bubbleLegend.correctSizes(); t(k, c(k))
                                                    } else a.call(this, f, g), k && k.options.enabled && k.bubbleLegend && (k.render(), t(k, c(k)))
                                                } function d(a) { a = a.series; for (var c = 0; c < a.length;) { if (a[c] && a[c].isBubble && a[c].visible && a[c].zData.length) return c; c++ } return -1 } function c(a) {
                                                    a = a.allItems; var c = [], d = a.length, f, h = 0; for (f = 0; f < d; f++)if (a[f].legendItemHeight && (a[f].itemHeight =
                                                        a[f].legendItemHeight), a[f] === a[d - 1] || a[f + 1] && a[f]._legendItemPos[1] !== a[f + 1]._legendItemPos[1]) { c.push({ height: 0 }); var g = c[c.length - 1]; for (h; h <= f; h++)a[h].itemHeight > g.height && (g.height = a[h].itemHeight); g.step = f } return c
                                                } function g(a) { var c = this.bubbleLegend, g = this.options, k = g.bubbleLegend, h = d(this.chart); c && c.ranges && c.ranges.length && (k.ranges.length && (k.autoRanges = !!k.ranges[0].autoRanges), this.destroyItem(c)); 0 <= h && g.enabled && k.enabled && (k.seriesIndex = h, this.bubbleLegend = new f(k, this), this.bubbleLegend.addToLegend(a.allItems)) }
                                                function m() { var a = this.chart, c = this.visible, f = this.chart.legend; f && f.bubbleLegend && (this.visible = !c, this.ignoreSeries = c, a = 0 <= d(a), f.bubbleLegend.visible !== a && (f.update({ bubbleLegend: { enabled: a } }), f.bubbleLegend.visible = a), this.visible = c) } function t(a, c) {
                                                    var d = a.options.rtl, f, h, g, b = 0; a.allItems.forEach(function (a, e) {
                                                        f = a.legendGroup.translateX; h = a._legendItemPos[1]; if ((g = a.movementX) || d && a.ranges) g = d ? f - a.options.maxSize / 2 : f + g, a.legendGroup.attr({ translateX: g }); e > c[b].step && b++; a.legendGroup.attr({
                                                            translateY: Math.round(h +
                                                                c[b].height / 2)
                                                        }); a._legendItemPos[1] = h + c[b].height / 2
                                                    })
                                                } var w = []; n.compose = function (c, d, f) { -1 === w.indexOf(c) && (w.push(c), u({ legend: { bubbleLegend: a } }), y(c.prototype, "drawChartBox", l)); -1 === w.indexOf(d) && (w.push(d), B(d, "afterGetAllItems", g)); -1 === w.indexOf(f) && (w.push(f), B(f, "legendItemClick", m)) }
                                            })(t || (t = {})); return t
                                        }); G(f, "Series/Bubble/BubblePoint.js", [f["Core/Series/Point.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, w) {
                                            var D = this && this.__extends || function () {
                                                var a =
                                                    function (f, u) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, f) { a.__proto__ = f } || function (a, f) { for (var n in f) f.hasOwnProperty(n) && (a[n] = f[n]) }; return a(f, u) }; return function (f, u) { function w() { this.constructor = f } a(f, u); f.prototype = null === u ? Object.create(u) : (w.prototype = u.prototype, new w) }
                                            }(); w = w.extend; f = function (f) {
                                                function u() { var a = null !== f && f.apply(this, arguments) || this; a.options = void 0; a.series = void 0; return a } D(u, f); u.prototype.haloPath = function (f) {
                                                    return a.prototype.haloPath.call(this,
                                                        0 === f ? 0 : (this.marker ? this.marker.radius || 0 : 0) + f)
                                                }; return u
                                            }(f.seriesTypes.scatter.prototype.pointClass); w(f.prototype, { ttBelow: !1 }); return f
                                        }); G(f, "Series/Bubble/BubbleSeries.js", [f["Core/Axis/Axis.js"], f["Series/Bubble/BubbleLegendComposition.js"], f["Series/Bubble/BubblePoint.js"], f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, w, D, u, B, C, y) {
                                            var t = this && this.__extends || function () {
                                                var a = function (c, d) {
                                                    a =
                                                    Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) }; return a(c, d)
                                                }; return function (c, d) { function f() { this.constructor = c } a(c, d); c.prototype = null === d ? Object.create(d) : (f.prototype = d.prototype, new f) }
                                            }(), n = D.parse; D = u.noop; var l = C.seriesTypes; u = l.column; var d = l.scatter; l = y.addEvent; var c = y.arrayMax, g = y.arrayMin, m = y.clamp, E = y.extend, z = y.isNumber, A = y.merge, r = y.pick; y = function (a) {
                                                function k() {
                                                    var c = null !== a &&
                                                        a.apply(this, arguments) || this; c.data = void 0; c.maxPxSize = void 0; c.minPxSize = void 0; c.options = void 0; c.points = void 0; c.radii = void 0; c.yData = void 0; c.zData = void 0; return c
                                                } t(k, a); k.prototype.animate = function (a) { !a && this.points.length < this.options.animationLimit && this.points.forEach(function (a) { var b = a.graphic; b && b.width && (this.hasRendered || b.attr({ x: a.plotX, y: a.plotY, width: 1, height: 1 }), b.animate(this.markerAttribs(a), this.options.animation)) }, this) }; k.prototype.getRadii = function () {
                                                    var a = this, c = this.zData,
                                                    b = this.yData, d = [], e = this.chart.bubbleZExtremes; var f = this.getPxExtremes(); var g = f.minPxSize, k = f.maxPxSize; if (!e) { var l = Number.MAX_VALUE, m = -Number.MAX_VALUE, n; this.chart.series.forEach(function (b) { b.bubblePadding && (b.visible || !a.chart.options.chart.ignoreHiddenSeries) && (b = b.getZExtremes()) && (l = Math.min(l || b.zMin, b.zMin), m = Math.max(m || b.zMax, b.zMax), n = !0) }); n ? (e = { zMin: l, zMax: m }, this.chart.bubbleZExtremes = e) : e = { zMin: 0, zMax: 0 } } var q = 0; for (f = c.length; q < f; q++) {
                                                        var r = c[q]; d.push(this.getRadius(e.zMin, e.zMax,
                                                            g, k, r, b[q]))
                                                    } this.radii = d
                                                }; k.prototype.getRadius = function (a, c, b, d, e, f) { var h = this.options, g = "width" !== h.sizeBy, k = h.zThreshold, l = c - a, m = .5; if (null === f || null === e) return null; if (z(e)) { h.sizeByAbsoluteValue && (e = Math.abs(e - k), l = Math.max(c - k, Math.abs(a - k)), a = 0); if (e < a) return b / 2 - 1; 0 < l && (m = (e - a) / l) } g && 0 <= m && (m = Math.sqrt(m)); return Math.ceil(b + m * (d - b)) / 2 }; k.prototype.hasData = function () { return !!this.processedXData.length }; k.prototype.pointAttribs = function (a, c) {
                                                    var b = this.options.marker.fillOpacity; a = B.prototype.pointAttribs.call(this,
                                                        a, c); 1 !== b && (a.fill = n(a.fill).setOpacity(b).get("rgba")); return a
                                                }; k.prototype.translate = function () { a.prototype.translate.call(this); this.getRadii(); this.translateBubble() }; k.prototype.translateBubble = function () { for (var a = this.data, c = this.radii, b = this.getPxExtremes().minPxSize, d = a.length; d--;) { var e = a[d], f = c ? c[d] : 0; z(f) && f >= b / 2 ? (e.marker = E(e.marker, { radius: f, width: 2 * f, height: 2 * f }), e.dlBox = { x: e.plotX - f, y: e.plotY - f, width: 2 * f, height: 2 * f }) : e.shapeArgs = e.plotY = e.dlBox = void 0 } }; k.prototype.getPxExtremes =
                                                    function () { var a = Math.min(this.chart.plotWidth, this.chart.plotHeight), c = function (b) { if ("string" === typeof b) { var c = /%$/.test(b); b = parseInt(b, 10) } return c ? a * b / 100 : b }, b = c(r(this.options.minSize, 8)); c = Math.max(c(r(this.options.maxSize, "20%")), b); return { minPxSize: b, maxPxSize: c } }; k.prototype.getZExtremes = function () {
                                                        var a = this.options, d = (this.zData || []).filter(z); if (d.length) {
                                                            var b = r(a.zMin, m(g(d), !1 === a.displayNegative ? a.zThreshold || 0 : -Number.MAX_VALUE, Number.MAX_VALUE)); a = r(a.zMax, c(d)); if (z(b) && z(a)) return {
                                                                zMin: b,
                                                                zMax: a
                                                            }
                                                        }
                                                    }; k.compose = f.compose; k.defaultOptions = A(d.defaultOptions, {
                                                        dataLabels: { formatter: function () { var a = this.series.chart.numberFormatter, c = this.point.z; return z(c) ? a(c, -1) : "" }, inside: !0, verticalAlign: "middle" }, animationLimit: 250, marker: { lineColor: null, lineWidth: 1, fillOpacity: .5, radius: null, states: { hover: { radiusPlus: 0 } }, symbol: "circle" }, minSize: 8, maxSize: "20%", softThreshold: !1, states: { hover: { halo: { size: 5 } } }, tooltip: { pointFormat: "({point.x}, {point.y}), Size: {point.z}" }, turboThreshold: 0, zThreshold: 0,
                                                        zoneAxis: "z"
                                                    }); return k
                                            }(d); E(y.prototype, { alignDataLabel: u.prototype.alignDataLabel, applyZones: D, bubblePadding: !0, buildKDTree: D, directTouch: !0, isBubble: !0, pointArrayMap: ["y", "z"], pointClass: w, parallelArrays: ["x", "y", "z"], trackerGroups: ["group", "dataLabelsGroup"], specialGroup: "group", zoneAxis: "z" }); l(y, "updatedData", function (a) { delete a.target.chart.bubbleZExtremes }); a.prototype.beforePadding = function () {
                                                var a = this, c = this.len, d = this.chart, f = 0, b = c, g = this.isXAxis, e = g ? "xData" : "yData", l = this.min, m = this.max -
                                                    l, n = c / m, t; this.series.forEach(function (c) { if (c.bubblePadding && (c.visible || !d.options.chart.ignoreHiddenSeries)) { t = a.allowZoomOutside = !0; var h = c[e]; g && c.getRadii(0, 0, c); if (0 < m) for (var k = h.length; k--;)if (z(h[k]) && a.dataMin <= h[k] && h[k] <= a.max) { var p = c.radii && c.radii[k] || 0; f = Math.min((h[k] - l) * n - p, f); b = Math.max((h[k] - l) * n + p, b) } } }); t && 0 < m && !this.logarithmic && (b -= c, n *= (c + Math.max(0, f) - Math.min(b, c)) / c, [["min", "userMin", f], ["max", "userMax", b]].forEach(function (b) {
                                                        "undefined" === typeof r(a.options[b[0]], a[b[1]]) &&
                                                        (a[b[0]] += b[2] / n)
                                                    }))
                                            }; C.registerSeriesType("bubble", y); ""; ""; return y
                                        }); G(f, "Series/MapBubble/MapBubblePoint.js", [f["Series/Map/MapPoint.js"], f["Core/Series/SeriesRegistry.js"]], function (a, f) {
                                            var w = this && this.__extends || function () {
                                                var a = function (f, u) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, f) { a.__proto__ = f } || function (a, f) { for (var n in f) f.hasOwnProperty(n) && (a[n] = f[n]) }; return a(f, u) }; return function (f, u) {
                                                    function w() { this.constructor = f } a(f, u); f.prototype = null === u ? Object.create(u) :
                                                        (w.prototype = u.prototype, new w)
                                                }
                                            }(); f = f.seriesTypes; var D = f.map; return function (f) { function u() { var u = null !== f && f.apply(this, arguments) || this; u.applyOptions = D.prototype.pointClass.prototype.applyOptions; u.getProjectedBounds = a.prototype.getProjectedBounds; return u } w(u, f); u.prototype.isValid = function () { return "number" === typeof this.z }; return u }(f.bubble.prototype.pointClass)
                                        }); G(f, "Series/MapBubble/MapBubbleSeries.js", [f["Series/Bubble/BubbleSeries.js"], f["Series/MapBubble/MapBubblePoint.js"], f["Series/Map/MapSeries.js"],
                                        f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (a, f, w, D, u) {
                                            var B = this && this.__extends || function () { var a = function (f, d) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, d) { a.__proto__ = d } || function (a, d) { for (var c in d) d.hasOwnProperty(c) && (a[c] = d[c]) }; return a(f, d) }; return function (f, d) { function c() { this.constructor = f } a(f, d); f.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype, new c) } }(), C = D.seriesTypes.mappoint, y = u.extend, t = u.merge; u = function (f) {
                                                function l() {
                                                    var a =
                                                        null !== f && f.apply(this, arguments) || this; a.data = void 0; a.options = void 0; a.points = void 0; return a
                                                } B(l, f); l.prototype.searchPoint = function (a, c) { return this.searchKDTree({ clientX: a.chartX - this.chart.plotLeft, plotY: a.chartY - this.chart.plotTop }, c, a) }; l.prototype.translate = function () { C.prototype.translate.call(this); this.getRadii(); this.translateBubble() }; l.compose = a.compose; l.defaultOptions = t(a.defaultOptions, { lineWidth: 0, animationLimit: 500, joinBy: "hc-key", tooltip: { pointFormat: "{point.name}: {point.z}" } });
                                                return l
                                            }(a); y(u.prototype, { type: "mapbubble", axisTypes: ["colorAxis"], getProjectedBounds: w.prototype.getProjectedBounds, isCartesian: !1, pointArrayMap: ["z"], pointClass: f, processData: w.prototype.processData, projectPoint: C.prototype.projectPoint, setData: w.prototype.setData, setOptions: w.prototype.setOptions, updateData: w.prototype.updateData, useMapGeometry: !0, xyFromShape: !0 }); D.registerSeriesType("mapbubble", u); ""; return u
                                        }); G(f, "Series/Heatmap/HeatmapPoint.js", [f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]],
                                            function (a, f) {
                                                var w = this && this.__extends || function () { var a = function (f, n) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, d) { a.__proto__ = d } || function (a, d) { for (var c in d) d.hasOwnProperty(c) && (a[c] = d[c]) }; return a(f, n) }; return function (f, n) { function l() { this.constructor = f } a(f, n); f.prototype = null === n ? Object.create(n) : (l.prototype = n.prototype, new l) } }(), D = f.clamp, u = f.defined, B = f.extend, C = f.pick; a = function (a) {
                                                    function f() {
                                                        var f = null !== a && a.apply(this, arguments) || this; f.options = void 0;
                                                        f.series = void 0; f.value = void 0; f.x = void 0; f.y = void 0; return f
                                                    } w(f, a); f.prototype.applyOptions = function (f, l) { f = a.prototype.applyOptions.call(this, f, l); f.formatPrefix = f.isNull || null === f.value ? "null" : "point"; return f }; f.prototype.getCellAttributes = function () {
                                                        var a = this.series, f = a.options, d = (f.colsize || 1) / 2, c = (f.rowsize || 1) / 2, g = a.xAxis, m = a.yAxis, t = this.options.marker || a.options.marker; a = a.pointPlacementToXValue(); var w = C(this.pointPadding, f.pointPadding, 0), y = {
                                                            x1: D(Math.round(g.len - (g.translate(this.x -
                                                                d, !1, !0, !1, !0, -a) || 0)), -g.len, 2 * g.len), x2: D(Math.round(g.len - (g.translate(this.x + d, !1, !0, !1, !0, -a) || 0)), -g.len, 2 * g.len), y1: D(Math.round(m.translate(this.y - c, !1, !0, !1, !0) || 0), -m.len, 2 * m.len), y2: D(Math.round(m.translate(this.y + c, !1, !0, !1, !0) || 0), -m.len, 2 * m.len)
                                                        };[["width", "x"], ["height", "y"]].forEach(function (a) {
                                                            var c = a[0]; a = a[1]; var d = a + "1", f = a + "2", g = Math.abs(y[d] - y[f]), b = t && t.lineWidth || 0, l = Math.abs(y[d] + y[f]) / 2; c = t && t[c]; u(c) && c < g && (c = c / 2 + b / 2, y[d] = l - c, y[f] = l + c); w && ("y" === a && (d = f, f = a + "1"), y[d] += w,
                                                                y[f] -= w)
                                                        }); return y
                                                    }; f.prototype.haloPath = function (a) { if (!a) return []; var f = this.shapeArgs; return ["M", f.x - a, f.y - a, "L", f.x - a, f.y + f.height + a, f.x + f.width + a, f.y + f.height + a, f.x + f.width + a, f.y - a, "Z"] }; f.prototype.isValid = function () { return Infinity !== this.value && -Infinity !== this.value }; return f
                                                }(a.seriesTypes.scatter.prototype.pointClass); B(a.prototype, { dataLabelOnNull: !0, moveToTopOnHover: !0, ttBelow: !1 }); return a
                                            }); G(f, "Series/Heatmap/HeatmapSeries.js", [f["Core/Color/Color.js"], f["Series/ColorMapMixin.js"],
                                            f["Series/Heatmap/HeatmapPoint.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Renderer/SVG/SVGRenderer.js"], f["Core/Utilities.js"]], function (a, f, w, D, u, B, C) {
                                                var y = this && this.__extends || function () {
                                                    var a = function (c, d) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, c) { a.__proto__ = c } || function (a, c) { for (var b in c) c.hasOwnProperty(b) && (a[b] = c[b]) }; return a(c, d) }; return function (c, d) {
                                                        function f() { this.constructor = c } a(c, d); c.prototype = null === d ? Object.create(d) :
                                                            (f.prototype = d.prototype, new f)
                                                    }
                                                }(), t = u.series, n = u.seriesTypes, l = n.column, d = n.scatter, c = B.prototype.symbols, g = C.extend, m = C.fireEvent, E = C.isNumber, z = C.merge, A = C.pick; B = function (f) {
                                                    function l() { var a = null !== f && f.apply(this, arguments) || this; a.colorAxis = void 0; a.data = void 0; a.options = void 0; a.points = void 0; a.valueMax = NaN; a.valueMin = NaN; return a } y(l, f); l.prototype.drawPoints = function () {
                                                        var a = this; if ((this.options.marker || {}).enabled || this._hasPointMarkers) t.prototype.drawPoints.call(this), this.points.forEach(function (c) {
                                                            c.graphic &&
                                                            (c.graphic[a.chart.styledMode ? "css" : "animate"](a.colorAttribs(c)), null === c.value && c.graphic.addClass("highcharts-null-point"))
                                                        })
                                                    }; l.prototype.getExtremes = function () { var a = t.prototype.getExtremes.call(this, this.valueData), c = a.dataMin; a = a.dataMax; E(c) && (this.valueMin = c); E(a) && (this.valueMax = a); return t.prototype.getExtremes.call(this) }; l.prototype.getValidPoints = function (a, c) { return t.prototype.getValidPoints.call(this, a, c, !0) }; l.prototype.hasData = function () { return !!this.processedXData.length }; l.prototype.init =
                                                        function () { t.prototype.init.apply(this, arguments); var a = this.options; a.pointRange = A(a.pointRange, a.colsize || 1); this.yAxis.axisPointRange = a.rowsize || 1; c.ellipse = c.circle; a.marker && (a.marker.r = a.borderRadius) }; l.prototype.markerAttribs = function (a, c) {
                                                            var d = a.marker || {}, b = this.options.marker || {}, f = a.shapeArgs || {}, e = {}; if (a.hasImage) return { x: a.plotX, y: a.plotY }; if (c) {
                                                                var g = b.states[c] || {}; var h = d.states && d.states[c] || {};[["width", "x"], ["height", "y"]].forEach(function (a) {
                                                                    e[a[0]] = (h[a[0]] || g[a[0]] || f[a[0]]) +
                                                                        (h[a[0] + "Plus"] || g[a[0] + "Plus"] || 0); e[a[1]] = f[a[1]] + (f[a[0]] - e[a[0]]) / 2
                                                                })
                                                            } return c ? e : f
                                                        }; l.prototype.pointAttribs = function (c, d) {
                                                            var f = t.prototype.pointAttribs.call(this, c, d), b = this.options || {}, g = this.chart.options.plotOptions || {}, e = g.series || {}, h = g.heatmap || {}; g = c && c.options.borderColor || b.borderColor || h.borderColor || e.borderColor; e = c && c.options.borderWidth || b.borderWidth || h.borderWidth || e.borderWidth || f["stroke-width"]; f.stroke = c && c.marker && c.marker.lineColor || b.marker && b.marker.lineColor || g || this.color;
                                                            f["stroke-width"] = e; d && (c = z(b.states[d], b.marker && b.marker.states[d], c && c.options.states && c.options.states[d] || {}), d = c.brightness, f.fill = c.color || a.parse(f.fill).brighten(d || 0).get(), f.stroke = c.lineColor); return f
                                                        }; l.prototype.setClip = function (a) { var c = this.chart; t.prototype.setClip.apply(this, arguments); (!1 !== this.options.clip || a) && this.markerGroup.clip((a || this.clipBox) && this.sharedClipKey ? c.sharedClips[this.sharedClipKey] : c.clipRect) }; l.prototype.translate = function () {
                                                            var a = this.options, d = a.marker &&
                                                                a.marker.symbol || "rect", f = c[d] ? d : "rect", b = -1 !== ["circle", "square"].indexOf(f); this.generatePoints(); this.points.forEach(function (h) {
                                                                    var e = h.getCellAttributes(), k = {}; k.x = Math.min(e.x1, e.x2); k.y = Math.min(e.y1, e.y2); k.width = Math.max(Math.abs(e.x2 - e.x1), 0); k.height = Math.max(Math.abs(e.y2 - e.y1), 0); var l = h.hasImage = 0 === (h.marker && h.marker.symbol || d || "").indexOf("url"); if (b) {
                                                                        var m = Math.abs(k.width - k.height); k.x = Math.min(e.x1, e.x2) + (k.width < k.height ? 0 : m / 2); k.y = Math.min(e.y1, e.y2) + (k.width < k.height ? m / 2 : 0);
                                                                        k.width = k.height = Math.min(k.width, k.height)
                                                                    } m = { plotX: (e.x1 + e.x2) / 2, plotY: (e.y1 + e.y2) / 2, clientX: (e.x1 + e.x2) / 2, shapeType: "path", shapeArgs: z(!0, k, { d: c[f](k.x, k.y, k.width, k.height, { r: a.borderRadius }) }) }; l && (h.marker = { width: k.width, height: k.height }); g(h, m)
                                                                }); m(this, "afterTranslate")
                                                        }; l.defaultOptions = z(d.defaultOptions, {
                                                            animation: !1, borderRadius: 0, borderWidth: 0, nullColor: "#f7f7f7", dataLabels: {
                                                                formatter: function () { var a = this.series.chart.numberFormatter, c = this.point.value; return E(c) ? a(c, -1) : "" }, inside: !0,
                                                                verticalAlign: "middle", crop: !1, overflow: !1, padding: 0
                                                            }, marker: { symbol: "rect", radius: 0, lineColor: void 0, states: { hover: { lineWidthPlus: 0 }, select: {} } }, clip: !0, pointRange: null, tooltip: { pointFormat: "{point.x}, {point.y}: {point.value}<br/>" }, states: { hover: { halo: !1, brightness: .2 } }
                                                        }); return l
                                                }(d); g(B.prototype, {
                                                    alignDataLabel: l.prototype.alignDataLabel, axisTypes: f.SeriesMixin.axisTypes, colorAttribs: f.SeriesMixin.colorAttribs, colorKey: f.SeriesMixin.colorKey, directTouch: !0, drawLegendSymbol: D.drawRectangle, getExtremesFromAll: !0,
                                                    getSymbol: t.prototype.getSymbol, parallelArrays: f.SeriesMixin.parallelArrays, pointArrayMap: ["y", "value"], pointClass: w, trackerGroups: f.SeriesMixin.trackerGroups
                                                }); u.registerSeriesType("heatmap", B); ""; ""; return B
                                            }); G(f, "masters/modules/map.src.js", [f["Core/Globals.js"], f["Core/Axis/Color/ColorAxis.js"], f["Series/MapBubble/MapBubbleSeries.js"], f["Core/Chart/MapChart.js"], f["Maps/MapView.js"], f["Maps/Projection.js"]], function (a, f, w, D, u, B) {
                                                a.ColorAxis = f; a.MapChart = D; a.mapChart = a.Map = D.mapChart; a.MapView =
                                                    u; a.maps = D.maps; a.Projection = B; f.compose(a.Chart, a.Fx, a.Legend, a.Series); w.compose(a.Chart, a.Legend, a.Series)
                                            }); G(f, "masters/highmaps.src.js", [f["masters/highcharts.src.js"]], function (a) { a.product = "Highmaps"; return a }); f["masters/highmaps.src.js"]._modules = f; return f["masters/highmaps.src.js"]
});
//# sourceMappingURL=highmaps.js.map