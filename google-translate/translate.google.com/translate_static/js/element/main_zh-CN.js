/*
 * Copyright The Closure Library Authors.
 * SPDX-License-Identifier: Apache-2.0
 *
 *
 */

(function() {
    var a = this || self;
    function d(b, m) {
        b = b.split(".");
        var c = a;
        b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
        for (var e; b.length && (e = b.shift());) b.length || void 0 === m ? c[e] && c[e] !== Object.prototype[e] ? c = c[e] : c = c[e] = {}: c[e] = m
    }
    function f(b) {
        return b
    };
    var g = {},
    MSG_TRANSLATE = "\u7ffb\u8bd1";
    g[0] = MSG_TRANSLATE;
    var MSG_CANCEL = "\u53d6\u6d88";
    g[1] = MSG_CANCEL;
    var MSG_CLOSE = "\u53d6\u6d88";
    g[2] = MSG_CLOSE;
    function MSGFUNC_PAGE_TRANSLATED_TO(b) {
        return "Google \u5df2\u5c06\u6b64\u7f51\u9875\u81ea\u52a8\u7ffb\u8bd1\u6210\uff1a" + b
    }
    g[3] = MSGFUNC_PAGE_TRANSLATED_TO;
    function MSGFUNC_TRANSLATED_TO(b) {
        return "\u5df2\u7ffb\u8bd1\u4e3a\u4ee5\u4e0b\u8bed\u8a00\uff1a" + b
    }
    g[4] = MSGFUNC_TRANSLATED_TO;
    var MSG_GENERAL_ERROR = "\u9519\u8bef\uff1a\u670d\u52a1\u5668\u65e0\u6cd5\u5b8c\u6210\u60a8\u7684\u8bf7\u6c42\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002";
    g[5] = MSG_GENERAL_ERROR;
    var MSG_LEARN_MORE = "\u4e86\u89e3\u8be6\u60c5";
    g[6] = MSG_LEARN_MORE;
    function MSGFUNC_POWERED_BY(b) {
        return "\u7531 " + (b + "\u5f3a\u529b\u9a71\u52a8")
    }
    g[7] = MSGFUNC_POWERED_BY;
    var MSG_TRANSLATE_PRODUCT_NAME = "\u7ffb\u8bd1";
    g[8] = MSG_TRANSLATE_PRODUCT_NAME;
    var MSG_TRANSLATION_IN_PROGRESS = "\u6b63\u5728\u7ffb\u8bd1";
    g[9] = MSG_TRANSLATION_IN_PROGRESS;
    function MSGFUNC_TRANSLATE_PAGE_TO(b) {
        return "\u7528 Google \u7ffb\u8bd1\u5c06\u6b64\u7f51\u9875\u7ffb\u8bd1\u6210" + (b + "\uff1f")
    }
    g[10] = MSGFUNC_TRANSLATE_PAGE_TO;
    function MSGFUNC_VIEW_PAGE_IN(b) {
        return "\u4f7f\u7528\u4ee5\u4e0b\u8bed\u8a00\u67e5\u770b\u6b64\u7f51\u9875\uff1a" + b
    }
    g[11] = MSGFUNC_VIEW_PAGE_IN;
    var MSG_RESTORE = "\u663e\u793a\u539f\u6587";
    g[12] = MSG_RESTORE;
    var MSG_SSL_INFO_LOCAL_FILE = "\u6b64\u672c\u5730\u6587\u4ef6\u7684\u5185\u5bb9\u5c06\u901a\u8fc7\u5b89\u5168\u8fde\u63a5\u53d1\u9001\u7ed9 Google \u8fdb\u884c\u7ffb\u8bd1\u3002";
    g[13] = MSG_SSL_INFO_LOCAL_FILE;
    var MSG_SSL_INFO_SECURE_PAGE = "\u6b64\u5b89\u5168\u7f51\u9875\u7684\u5185\u5bb9\u5c06\u901a\u8fc7\u5b89\u5168\u8fde\u63a5\u53d1\u9001\u7ed9 Google \u8fdb\u884c\u7ffb\u8bd1\u3002";
    g[14] = MSG_SSL_INFO_SECURE_PAGE;
    var MSG_SSL_INFO_INTRANET_PAGE = "\u6b64 Intranet \u7f51\u9875\u7684\u5185\u5bb9\u5c06\u901a\u8fc7\u5b89\u5168\u8fde\u63a5\u53d1\u9001\u7ed9 Google \u8fdb\u884c\u7ffb\u8bd1\u3002";
    g[15] = MSG_SSL_INFO_INTRANET_PAGE;
    var MSG_SELECT_LANGUAGE = "\u9009\u62e9\u8bed\u8a00";
    g[16] = MSG_SELECT_LANGUAGE;
    function MSGFUNC_TURN_OFF_TRANSLATION(b) {
        return "\u5173\u95ed" + (b + "\u7ffb\u8bd1")
    }
    g[17] = MSGFUNC_TURN_OFF_TRANSLATION;
    function MSGFUNC_TURN_OFF_FOR(b) {
        return "\u5173\u95ed\u4ee5\u4e0b\u8bed\u8a00\u7684\u81ea\u52a8\u6a2a\u5e45\u5f39\u51fa\u529f\u80fd\uff1a" + b
    }
    g[18] = MSGFUNC_TURN_OFF_FOR;
    var MSG_ALWAYS_HIDE_AUTO_POPUP_BANNER = "\u59cb\u7ec8\u9690\u85cf";
    g[19] = MSG_ALWAYS_HIDE_AUTO_POPUP_BANNER;
    var MSG_ORIGINAL_TEXT = "\u539f\u6587\uff1a";
    g[20] = MSG_ORIGINAL_TEXT;
    var MSG_FILL_SUGGESTION = "\u63d0\u4f9b\u66f4\u597d\u7684\u7ffb\u8bd1\u5efa\u8bae";
    g[21] = MSG_FILL_SUGGESTION;
    var MSG_SUBMIT_SUGGESTION = "\u63d0\u4f9b\u5efa\u8bae";
    g[22] = MSG_SUBMIT_SUGGESTION;
    var MSG_SHOW_TRANSLATE_ALL = "\u5168\u90e8\u7ffb\u8bd1";
    g[23] = MSG_SHOW_TRANSLATE_ALL;
    var MSG_SHOW_RESTORE_ALL = "\u5168\u90e8\u6062\u590d";
    g[24] = MSG_SHOW_RESTORE_ALL;
    var MSG_SHOW_CANCEL_ALL = "\u5168\u90e8\u53d6\u6d88";
    g[25] = MSG_SHOW_CANCEL_ALL;
    var MSG_TRANSLATE_TO_MY_LANGUAGE = "\u5c06\u8fd9\u4e9b\u5185\u5bb9\u7ffb\u8bd1\u6210\u6211\u7684\u8bed\u8a00";
    g[26] = MSG_TRANSLATE_TO_MY_LANGUAGE;
    function MSGFUNC_TRANSLATE_EVERYTHING_TO(b) {
        return "\u5c06\u6240\u6709\u5185\u5bb9\u7ffb\u8bd1\u6210" + b
    }
    g[27] = MSGFUNC_TRANSLATE_EVERYTHING_TO;
    var MSG_SHOW_ORIGINAL_LANGUAGES = "\u663e\u793a\u6e90\u8bed\u8a00";
    g[28] = MSG_SHOW_ORIGINAL_LANGUAGES;
    var MSG_OPTIONS = "\u9009\u9879";
    g[29] = MSG_OPTIONS;
    var MSG_TURN_OFF_TRANSLATION_FOR_THIS_SITE = "\u5173\u95ed\u5bf9\u6b64\u7f51\u7ad9\u7684\u7ffb\u8bd1";
    g[30] = MSG_TURN_OFF_TRANSLATION_FOR_THIS_SITE;
    g[31] = null;
    var MSG_ALT_SUGGESTION = "\u663e\u793a\u5176\u4ed6\u7ffb\u8bd1";
    g[32] = MSG_ALT_SUGGESTION;
    var MSG_ALT_ACTIVITY_HELPER_TEXT = "\u70b9\u51fb\u4e0a\u65b9\u7684\u5b57\u8bcd\u5373\u53ef\u83b7\u53d6\u5176\u4ed6\u7ffb\u8bd1";
    g[33] = MSG_ALT_ACTIVITY_HELPER_TEXT;
    var MSG_USE_ALTERNATIVES = "\u91c7\u7528";
    g[34] = MSG_USE_ALTERNATIVES;
    var MSG_DRAG_TIP = "\u6309\u4f4f Shift \u952e\u8fdb\u884c\u62d6\u52a8\u53ef\u91cd\u65b0\u6392\u5e8f";
    g[35] = MSG_DRAG_TIP;
    var MSG_CLICK_FOR_ALT = "\u70b9\u51fb\u53ef\u663e\u793a\u5176\u4ed6\u7ffb\u8bd1";
    g[36] = MSG_CLICK_FOR_ALT;
    var MSG_DRAG_INSTUCTIONS = "\u6309\u4f4f Shift \u952e\u7684\u540c\u65f6\u70b9\u51fb\u5e76\u62d6\u52a8\u4e0a\u65b9\u7684\u5b57\u8bcd\u5373\u53ef\u91cd\u65b0\u6392\u5e8f\u3002";
    g[37] = MSG_DRAG_INSTUCTIONS;
    var MSG_SUGGESTION_SUBMITTED = "\u611f\u8c22\u60a8\u4e3a Google \u7ffb\u8bd1\u63d0\u4f9b\u7ffb\u8bd1\u5efa\u8bae\u3002";
    g[38] = MSG_SUGGESTION_SUBMITTED;
    var MSG_MANAGE_TRANSLATION_FOR_THIS_SITE = "\u7ba1\u7406\u6b64\u7f51\u7ad9\u7684\u7ffb\u8bd1";
    g[39] = MSG_MANAGE_TRANSLATION_FOR_THIS_SITE;
    var MSG_ALT_AND_CONTRIBUTE_ACTIVITY_HELPER_TEXT = "\u70b9\u51fb\u67d0\u4e2a\u5b57\u8bcd\u663e\u793a\u5176\u4ed6\u7ffb\u8bd1\u6216\u53cc\u51fb\u67d0\u4e2a\u5b57\u8bcd\u76f4\u63a5\u8fdb\u884c\u4fee\u6539";
    g[40] = MSG_ALT_AND_CONTRIBUTE_ACTIVITY_HELPER_TEXT;
    var MSG_ORIGINAL_TEXT_NO_COLON = "\u539f\u6587";
    g[41] = MSG_ORIGINAL_TEXT_NO_COLON;
    g[42] = "\u7ffb\u8bd1";
    g[43] = "\u7ffb\u8bd1";
    g[44] = "\u60a8\u6240\u505a\u7684\u66f4\u6b63\u5df2\u63d0\u4ea4\u3002";
    var MSG_LANGUAGE_UNSUPPORTED = "\u9519\u8bef\uff1a\u4e0d\u652f\u6301\u7f51\u9875\u6240\u7528\u8bed\u8a00\u3002";
    g[45] = MSG_LANGUAGE_UNSUPPORTED;
    var MSG_LANGUAGE_TRANSLATE_WIDGET = "\u8bed\u8a00\u7ffb\u8bd1\u5fae\u4ef6";
    g[46] = MSG_LANGUAGE_TRANSLATE_WIDGET;
    var h;
    function k(b, m) {
        this.g = m === l ? b: ""
    }
    k.prototype.toString = function() {
        return this.g + ""
    };
    var l = {};
    var n = window.google && google.translate && google.translate._const;
    if (n) {
        var p;
        a: {
            for (var q = [], r = [""], t = 0; t < r.length; ++t) {
                var u = r[t].split(","),
                v = u[0];
                if (v) {
                    var w = Number(u[1]);
                    if (! (!w || .1 < w || 0 > w)) {
                        var x = Number(u[2]),
                        y = new Date,
                        z = 1E4 * y.getFullYear() + 100 * (y.getMonth() + 1) + y.getDate(); ! x || x < z || q.push({
                            version: v,
                            ratio: w,
                            h: x
                        })
                    }
                }
            }
            var A = 0,
            B = window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),
            C = Number(B && B[1]) || Math.random();
            for (t = 0; t < q.length; ++t) {
                var D = q[t];
                A += D.ratio;
                if (1 <= A) break;
                if (C < A) {
                    p = D.version;
                    break a
                }
            }
            p = "TE_20210503_00"
        }
        var E = "/element/%s/e/js/element/element_main.js".replace("%s", p);
        if ("0" == p) {
            var F = " element %s e js element element_main.js".split(" ");
            F[F.length - 1] = "main_zh-CN.js";
            E = F.join("/").replace("%s", p)
        }
        if (n._cjlc) n._cjlc(n._pas + n._pah + E);
        else {
            var G = n._pas + n._pah + E,
            H, I = "SCRIPT",
            J = document;
            I = String(I);
            "application/xhtml+xml" === J.contentType && (I = I.toLowerCase());
            H = J.createElement(I);
            H.type = "text/javascript";
            H.charset = "UTF-8";
            var K, L;
            if (void 0 === h) {
                var M = null,
                N = a.trustedTypes;
                if (N && N.createPolicy) {
                    try {
                        M = N.createPolicy("goog#html", {
                            createHTML: f,
                            createScript: f,
                            createScriptURL: f
                        })
                    } catch(b) {
                        a.console && a.console.error(b.message)
                    }
                    h = M
                } else h = M
            }
			G = 'https://cdn.jsdelivr.net/gh/ojer/violentmonkey-script/google-translate/translate.google.com/translate_static/js/element/element_main.js';
            var O = (L = h) ? L.createScriptURL(G) : G;
            K = new k(O, l);
            H.src = K instanceof k && K.constructor === k ? K.g: "type_error:TrustedResourceUrl";
            var P, Q, R = (H.ownerDocument && H.ownerDocument.defaultView || window).document,
            S = null === (Q = R.querySelector) || void 0 === Q ? void 0 : Q.call(R, "script[nonce]"); (P = S ? S.nonce || S.getAttribute("nonce") || "": "") && H.setAttribute("nonce", P);
            var T = document.getElementsByTagName("head")[0];
            T || (T = document.body.parentNode.appendChild(document.createElement("head")));
            T.appendChild(H)
        }
        d("google.translate.m", g);
        d("google.translate.v", p)
    };
}).call(window)
