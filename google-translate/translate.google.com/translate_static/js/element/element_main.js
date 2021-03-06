/*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
 */
(function() {
	var aa = '" style="background-image:url(',
		ba = "-disabled",
		ca = "-document.getElementById('",
		da = "/translate_a/t",
		ea = "/translate_suggestion?client=",
		fa = '</button></div></div></td></tr><tr id="',
		ha = '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
		ia = '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="',
		ja = "Component already rendered",
		g = "DIV",
		ka = "Edge",
		la = "Google Website Translator",
		ma = "IFRAME",
		na = "INPUT",
		oa = "INTERNAL_SERVER_ERROR",
		pa = "Not available",
		qa = "Opera",
		ra = "POST",
		sa = "SPAN",
		ta = "Symbol.iterator",
		ua = "TEXTAREA",
		va = "Unable to set parent component",
		wa = "[goog.net.IframeIo] Unable to send, already active.",
		xa = "about:invalid#zClosurez",
		ya = "about:invalid#zSoyz",
		za = "absolute",
		Aa = "action",
		Ba = "activedescendant",
		Ca = "activity-form-container",
		Da = "alt-edited",
		Ea = "array",
		Fa = "auto",
		Ga = "backgroundImage",
		Ia = "backgroundPosition",
		Ja = "blur",
		Ka = "border-box",
		La = "button",
		Ma = "callback",
		Na = "cancelled",
		Oa = "change",
		Pa = "character",
		Qa = "checked",
		Ra = "chg_tgt_lang",
		Sa = "click",
		Ta = "clk_no_ap_site",
		Ua = "complete",
		Va = "container",
		Wa = "contextmenu",
		Xa = "dblclick",
		Ya = "direction",
		Za = "div",
		$a = "finish",
		ab = "finishSourceLang",
		bb = "finishTargetLang",
		cb = "focus",
		db = "focusin",
		eb = "focusout",
		p = "function",
		fb = "goog-float-bottom",
		gb = "goog-float-top",
		hb = "goog-inline-block ",
		ib = "goog-menuheader",
		jb = "goog-menuseparator",
		kb = "goog-option",
		lb = "goog-option-selected",
		mb = "goog-te-menu-value",
		nb = "goog-te-menu2-item-selected",
		ob = "goog-te-spinner-animation-show",
		pb = "goog-te-spinner-pos-show",
		qb = "hidden",
		rb = "hide",
		sb = "horizontal",
		tb = "https://translate.google.com",
		ub = "https://www.google.com/images/cleardot.gif",
		ub = "https://cdn.jsdelivr.net/gh/cacaos/violentmonkey-script@main/google-translate/www.google.com/images/cleardot.gif",
		vb = "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png",
		wb = "javascript:void(0)",
		xb = "keydown",
		yb = "keypress",
		zb = "load",
		Ab = "mousedown",
		Bb = "mousemove",
		Cb = "mouseout",
		Db = "mouseover",
		Eb = "move_offscreen",
		r = "none",
		Fb = "number",
		Gb = "object",
		Hb = "opacity 1s linear",
		Ib = "paddingLeft",
		Jb = "paddingRight",
		Kb = "position",
		Lb = "progressSection",
		Mb = "promptSourceLang",
		Nb = "promptTargetLang",
		Ob = "ready",
		Pb = "readystatechange",
		Qb = "rtl",
		Rb = "selected",
		Sb = "skiptranslate",
		Tb = "status-message",
		t = "string",
		Ub = "submitted",
		Vb = "targetLanguage",
		Wb = "textarea-placeholder-input",
		Xb = "toggle_display",
		Yb = "trans-target-empty",
		Zb = "trans-target-highlight",
		$b = "transition",
		ac = "translate",
		bc = "vertical",
		cc = "visible",
		dc = "withCredentials",
		ec = "zClosurez",
		v;
	function fc(a) {
		var b = 0;
		return function() {
			return b < a.length ? {
				done: !1,
				value: a[b++]
			}: {
				done: !0
			}
		}
	}
	var gc = typeof Object.defineProperties == p ? Object.defineProperty: function(a, b, c) {
		if (a == Array.prototype || a == Object.prototype) return a;
		a[b] = c.value;
		return a
	};
	function hc(a) {
		a = [Gb == typeof globalThis && globalThis, a, Gb == typeof window && window, Gb == typeof self && self, Gb == typeof global && global];
		for (var b = 0; b < a.length; ++b) {
			var c = a[b];
			if (c && c.Math == Math) return c
		}
		throw Error("Cannot find global object");
	}
	var ic = hc(this);
	function jc(a, b) {
		if (b) a: {
			var c = ic;
			a = a.split(".");
			for (var d = 0; d < a.length - 1; d++) {
				var e = a[d];
				if (! (e in c)) break a;
				c = c[e]
			}
			a = a[a.length - 1];
			d = c[a];
			b = b(d);
			b != d && null != b && gc(c, a, {
				configurable: !0,
				writable: !0,
				value: b
			})
		}
	}
	jc("Symbol",
		function(a) {
			function b(f) {
				if (this instanceof b) throw new TypeError("Symbol is not a constructor");
				return new c(d + (f || "") + "_" + e++, f)
			}
			function c(f, h) {
				this.g = f;
				gc(this, "description", {
					configurable: !0,
					writable: !0,
					value: h
				})
			}
			if (a) return a;
			c.prototype.toString = function() {
				return this.g
			};
			var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
				e = 0;
			return b
		});
	jc(ta,
		function(a) {
			if (a) return a;
			a = Symbol(ta);
			for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
				var d = ic[b[c]];
				typeof d === p && typeof d.prototype[a] != p && gc(d.prototype, a, {
					configurable: !0,
					writable: !0,
					value: function() {
						return kc(fc(this))
					}
				})
			}
			return a
		});
	function kc(a) {
		a = {
			next: a
		};
		a[Symbol.iterator] = function() {
			return this
		};
		return a
	}
	function lc(a) {
		var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
		return b ? b.call(a) : {
			next: fc(a)
		}
	}
	var mc = typeof Object.create == p ? Object.create: function(a) {
		function b() {}
		b.prototype = a;
		return new b
	},
		nc;
	if (typeof Object.setPrototypeOf == p) nc = Object.setPrototypeOf;
	else {
		var oc;
		a: {
			var rc = {
				a: !0
			},
				sc = {};
			try {
				sc.__proto__ = rc;
				oc = sc.a;
				break a
			} catch(a) {}
			oc = !1
		}
		nc = oc ?
			function(a, b) {
				a.__proto__ = b;
				if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
				return a
			}: null
	}
	var tc = nc;
	function w(a, b) {
		a.prototype = mc(b.prototype);
		a.prototype.constructor = a;
		if (tc) tc(a, b);
		else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
			var d = Object.getOwnPropertyDescriptor(b, c);
			d && Object.defineProperty(a, c, d)
		} else a[c] = b[c];
		a.G = b.prototype
	}
	function uc(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	}
	jc("WeakMap",
		function(a) {
			function b(l) {
				this.g = (k += Math.random() + 1).toString();
				if (l) {
					l = lc(l);
					for (var m; ! (m = l.next()).done;) m = m.value,
						this.set(m[0], m[1])
				}
			}
			function c() {}
			function d(l) {
				var m = typeof l;
				return m === Gb && null !== l || m === p
			}
			function e(l) {
				if (!uc(l, h)) {
					var m = new c;
					gc(l, h, {
						value: m
					})
				}
			}
			function f(l) {
				var m = Object[l];
				m && (Object[l] = function(n) {
					if (n instanceof c) return n;
					Object.isExtensible(n) && e(n);
					return m(n)
				})
			}
			if (function() {
				if (!a || !Object.seal) return ! 1;
				try {
					var l = Object.seal({}),
						m = Object.seal({}),
						n = new a([[l, 2], [m, 3]]);
					if (2 != n.get(l) || 3 != n.get(m)) return ! 1;
					n.delete(l);
					n.set(m, 4);
					return ! n.has(l) && 4 == n.get(m)
				} catch(q) {
					return ! 1
				}
			} ()) return a;
			var h = "$jscomp_hidden_" + Math.random();
			f("freeze");
			f("preventExtensions");
			f("seal");
			var k = 0;
			b.prototype.set = function(l, m) {
				if (!d(l)) throw Error("Invalid WeakMap key");
				e(l);
				if (!uc(l, h)) throw Error("WeakMap key fail: " + l);
				l[h][this.g] = m;
				return this
			};
			b.prototype.get = function(l) {
				return d(l) && uc(l, h) ? l[h][this.g] : void 0
			};
			b.prototype.has = function(l) {
				return d(l) && uc(l, h) && uc(l[h], this.g)
			};
			b.prototype.delete = function(l) {
				return d(l) && uc(l, h) && uc(l[h], this.g) ? delete l[h][this.g] : !1
			};
			return b
		});
	jc("Map",
		function(a) {
			function b() {
				var k = {};
				return k.ub = k.next = k.head = k
			}
			function c(k, l) {
				var m = k.g;
				return kc(function() {
					if (m) {
						for (; m.head != k.g;) m = m.ub;
						for (; m.next != m.head;) return m = m.next,
							{
								done: !1,
								value: l(m)
							};
						m = null
					}
					return {
						done: !0,
						value: void 0
					}
				})
			}
			function d(k, l) {
				var m = l && typeof l;
				m == Gb || m == p ? f.has(l) ? m = f.get(l) : (m = "" + ++h, f.set(l, m)) : m = "p_" + l;
				var n = k.h[m];
				if (n && uc(k.h, m)) for (k = 0; k < n.length; k++) {
					var q = n[k];
					if (l !== l && q.key !== q.key || l === q.key) return {
						id: m,
						list: n,
						index: k,
						Aa: q
					}
				}
				return {
					id: m,
					list: n,
					index: -1,
					Aa: void 0
				}
			}
			function e(k) {
				this.h = {};
				this.g = b();
				this.size = 0;
				if (k) {
					k = lc(k);
					for (var l; ! (l = k.next()).done;) l = l.value,
						this.set(l[0], l[1])
				}
			}
			if (function() {
				if (!a || typeof a != p || !a.prototype.entries || typeof Object.seal != p) return ! 1;
				try {
					var k = Object.seal({
						x: 4
					}),
						l = new a(lc([[k, "s"]]));
					if ("s" != l.get(k) || 1 != l.size || l.get({
						x: 4
					}) || l.set({
						x: 4
					},
						"t") != l || 2 != l.size) return ! 1;
					var m = l.entries(),
						n = m.next();
					if (n.done || n.value[0] != k || "s" != n.value[1]) return ! 1;
					n = m.next();
					return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
				} catch(q) {
					return ! 1
				}
			} ()) return a;
			var f = new WeakMap;
			e.prototype.set = function(k, l) {
				k = 0 === k ? 0 : k;
				var m = d(this, k);
				m.list || (m.list = this.h[m.id] = []);
				m.Aa ? m.Aa.value = l: (m.Aa = {
					next: this.g,
					ub: this.g.ub,
					head: this.g,
					key: k,
					value: l
				},
					m.list.push(m.Aa), this.g.ub.next = m.Aa, this.g.ub = m.Aa, this.size++);
				return this
			};
			e.prototype.delete = function(k) {
				k = d(this, k);
				return k.Aa && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.h[k.id], k.Aa.ub.next = k.Aa.next, k.Aa.next.ub = k.Aa.ub, k.Aa.head = null, this.size--, !0) : !1
			};
			e.prototype.clear = function() {
				this.h = {};
				this.g = this.g.ub = b();
				this.size = 0
			};
			e.prototype.has = function(k) {
				return !! d(this, k).Aa
			};
			e.prototype.get = function(k) {
				return (k = d(this, k).Aa) && k.value
			};
			e.prototype.entries = function() {
				return c(this,
					function(k) {
						return [k.key, k.value]
					})
			};
			e.prototype.keys = function() {
				return c(this,
					function(k) {
						return k.key
					})
			};
			e.prototype.values = function() {
				return c(this,
					function(k) {
						return k.value
					})
			};
			e.prototype.forEach = function(k, l) {
				for (var m = this.entries(), n; ! (n = m.next()).done;) n = n.value,
					k.call(l, n[1], n[0], this)
			};
			e.prototype[Symbol.iterator] = e.prototype.entries;
			var h = 0;
			return e
		});
	jc("Array.from",
		function(a) {
			return a ? a: function(b, c, d) {
				c = null != c ? c: function(k) {
					return k
				};
				var e = [],
					f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
				if (typeof f == p) {
					b = f.call(b);
					for (var h = 0; ! (f = b.next()).done;) e.push(c.call(d, f.value, h++))
				} else for (f = b.length, h = 0; h < f; h++) e.push(c.call(d, b[h], h));
				return e
			}
		});
	var vc = vc || {},
		x = this || self;
	function y() {}
	function wc(a) {
		a.Le = void 0;
		a.ca = function() {
			return a.Le ? a.Le: a.Le = new a
		}
	}
	function xc(a) {
		var b = typeof a;
		return b != Gb ? b: a ? Array.isArray(a) ? Ea: b: "null"
	}
	function yc(a) {
		var b = xc(a);
		return b == Ea || b == Gb && typeof a.length == Fb
	}
	function zc(a) {
		var b = typeof a;
		return b == Gb && null != a || b == p
	}
	function Ac(a) {
		return Object.prototype.hasOwnProperty.call(a, Bc) && a[Bc] || (a[Bc] = ++Cc)
	}
	var Bc = "closure_uid_" + (1E9 * Math.random() >>> 0),
		Cc = 0;
	function Dc(a, b, c) {
		return a.call.apply(a.bind, arguments)
	}
	function Ec(a, b, c) {
		if (!a) throw Error();
		if (2 < arguments.length) {
			var d = Array.prototype.slice.call(arguments, 2);
			return function() {
				var e = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(e, d);
				return a.apply(b, e)
			}
		}
		return function() {
			return a.apply(b, arguments)
		}
	}
	function A(a, b, c) {
		Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? A = Dc: A = Ec;
		return A.apply(null, arguments)
	}
	function Fc(a, b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return function() {
			var d = c.slice();
			d.push.apply(d, arguments);
			return a.apply(this, d)
		}
	}
	function Gc() {
		return Date.now()
	}
	function Hc(a, b) {
		a = a.split(".");
		var c = x;
		a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
		for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}: c[d] = b
	}
	function B(a, b) {
		function c() {}
		c.prototype = b.prototype;
		a.G = b.prototype;
		a.prototype = new c;
		a.prototype.constructor = a;
		a.Wj = function(d, e, f) {
			for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
			return b.prototype[e].apply(d, h)
		}
	}
	function Ic(a) {
		return a
	};
	function Jc(a, b) {
		if (Error.captureStackTrace) Error.captureStackTrace(this, Jc);
		else {
			var c = Error().stack;
			c && (this.stack = c)
		}
		a && (this.message = String(a));
		b && (this.Gh = b)
	}
	B(Jc, Error);
	Jc.prototype.name = "CustomError";
	var Kc, Lc = {};
	function Mc(a, b) {
		a = a.split("%s");
		for (var c = "",
			d = a.length - 1,
			e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
		Jc.call(this, c + a[d])
	}
	B(Mc, Jc);
	Mc.prototype.name = "AssertionError";
	function Nc(a) {
		return a[a.length - 1]
	}
	var Oc = Array.prototype.indexOf ?
		function(a, b) {
			return Array.prototype.indexOf.call(a, b, void 0)
		}: function(a, b) {
			if (typeof a === t) return typeof b !== t || 1 != b.length ? -1 : a.indexOf(b, 0);
			for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
			return - 1
		},
		Pc = Array.prototype.forEach ?
		function(a, b, c) {
			Array.prototype.forEach.call(a, b, c)
		}: function(a, b, c) {
			for (var d = a.length,
				e = typeof a === t ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
		},
		Qc = Array.prototype.filter ?
		function(a, b) {
			return Array.prototype.filter.call(a, b, void 0)
		}: function(a, b) {
			for (var c = a.length,
				d = [], e = 0, f = typeof a === t ? a.split("") : a, h = 0; h < c; h++) if (h in f) {
					var k = f[h];
					b.call(void 0, k, h, a) && (d[e++] = k)
				}
			return d
		},
		Rc = Array.prototype.map ?
		function(a, b) {
			return Array.prototype.map.call(a, b, void 0)
		}: function(a, b) {
			for (var c = a.length,
				d = Array(c), e = typeof a === t ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
			return d
		},
		Sc = Array.prototype.some ?
		function(a, b) {
			return Array.prototype.some.call(a, b, void 0)
		}: function(a, b) {
			for (var c = a.length,
				d = typeof a === t ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return ! 0;
			return ! 1
		},
		Tc = Array.prototype.every ?
		function(a, b) {
			return Array.prototype.every.call(a, b, void 0)
		}: function(a, b) {
			for (var c = a.length,
				d = typeof a === t ? a.split("") : a, e = 0; e < c; e++) if (e in d && !b.call(void 0, d[e], e, a)) return ! 1;
			return ! 0
		};
	function Uc(a, b) {
		a: {
			for (var c = a.length,
				d = typeof a === t ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
					b = e;
					break a
				}
			b = -1
		}
		return 0 > b ? null: typeof a === t ? a.charAt(b) : a[b]
	}
	function Vc(a, b) {
		return 0 <= Oc(a, b)
	}
	function Wc(a, b) {
		b = Oc(a, b);
		var c; (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
		return c
	}
	function Xc(a) {
		return Array.prototype.concat.apply([], arguments)
	}
	function Yc(a) {
		var b = a.length;
		if (0 < b) {
			for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
			return c
		}
		return []
	}
	function Zc(a, b, c, d) {
		Array.prototype.splice.apply(a, $c(arguments, 1))
	}
	function $c(a, b, c) {
		return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
	};
	function ad(a) {
		var b = !1,
			c;
		return function() {
			b || (c = a(), b = !0);
			return c
		}
	};
	function bd(a, b, c) {
		for (var d in a) b.call(c, a[d], d, a)
	}
	function cd(a, b) {
		for (var c in a) if (b.call(void 0, a[c], c, a)) return ! 0;
		return ! 1
	}
	function dd(a) {
		var b = [],
			c = 0,
			d;
		for (d in a) b[c++] = d;
		return b
	}
	function ed(a, b) {
		return null !== a && b in a
	}
	function fd() {
		var a = gd,
			b;
		for (b in a) return ! 1;
		return ! 0
	}
	function hd(a, b, c) {
		if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
		a[b] = c
	}
	function id(a) {
		var b = {},
			c;
		for (c in a) b[c] = a[c];
		return b
	}
	var jd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
	function kd(a, b) {
		for (var c, d, e = 1; e < arguments.length; e++) {
			d = arguments[e];
			for (c in d) a[c] = d[c];
			for (var f = 0; f < jd.length; f++) c = jd[f],
				Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
		}
	};
	var ld = {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		command: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	};
	var md;
	function nd() {
		if (void 0 === md) {
			var a = null,
				b = x.trustedTypes;
			if (b && b.createPolicy) {
				try {
					a = b.createPolicy("goog#html", {
						createHTML: Ic,
						createScript: Ic,
						createScriptURL: Ic
					})
				} catch(c) {
					x.console && x.console.error(c.message)
				}
				md = a
			} else md = a
		}
		return md
	};
	function od(a, b) {
		this.g = a === pd && b || "";
		this.h = qd
	}
	od.prototype.Va = !0;
	od.prototype.Ga = function() {
		return this.g
	};
	function rd(a) {
		return a instanceof od && a.constructor === od && a.h === qd ? a.g: "type_error:Const"
	}
	function sd(a) {
		return new od(pd, a)
	}
	var qd = {},
		pd = {};
	var td = {};
	function ud(a, b) {
		this.g = b === td ? a: "";
		this.Va = !0
	}
	ud.prototype.Ga = function() {
		return this.g.toString()
	};
	function vd(a) {
		return a instanceof ud && a.constructor === ud ? a.g: "type_error:SafeScript"
	}
	ud.prototype.toString = function() {
		return this.g.toString()
	};
	var wd = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
	function xd(a, b) {
		this.g = b === yd ? a: ""
	}
	v = xd.prototype;
	v.Va = !0;
	v.Ga = function() {
		return this.g.toString()
	};
	v.Je = !0;
	v.wb = function() {
		return 1
	};
	v.toString = function() {
		return this.g + ""
	};
	function zd(a) {
		return a instanceof xd && a.constructor === xd ? a.g: "type_error:TrustedResourceUrl"
	}
	var yd = {};
	function Ad(a) {
		var b = nd();
		a = b ? b.createScriptURL(a) : a;
		return new xd(a, yd)
	};
	var Bd = String.prototype.trim ?
		function(a) {
			return a.trim()
		}: function(a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
		};
	function Cd(a, b) {
		return a.replace(/(\r\n|\r|\n)/g, b ? "<br />": "<br>")
	}
	function Dd(a, b) {
		if (b) a = a.replace(Ed, "&amp;").replace(Fd, "&lt;").replace(Gd, "&gt;").replace(Hd, "&quot;").replace(Id, "&#39;").replace(Jd, "&#0;");
		else {
			if (!Kd.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ed, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Fd, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Gd, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Hd, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Id, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Jd, "&#0;"))
		}
		return a
	}
	var Ed = /&/g,
		Fd = /</g,
		Gd = />/g,
		Hd = /"/g,
		Id = /'/g,
		Jd = /\x00/g,
		Kd = /[\x00&<>"']/;
	function Ld(a, b) {
		var c = 0;
		a = Bd(String(a)).split(".");
		b = Bd(String(b)).split(".");
		for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
			var f = a[e] || "",
				h = b[e] || "";
			do {
				f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
				h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
				if (0 == f[0].length && 0 == h[0].length) break;
				c = Md(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Md(0 == f[2].length, 0 == h[2].length) || Md(f[2], h[2]);
				f = f[3];
				h = h[3]
			} while ( 0 == c )
		}
		return c
	}
	function Md(a, b) {
		return a < b ? -1 : a > b ? 1 : 0
	};
	function Nd(a, b) {
		this.g = b === Od ? a: ""
	}
	v = Nd.prototype;
	v.Va = !0;
	v.Ga = function() {
		return this.g.toString()
	};
	v.Je = !0;
	v.wb = function() {
		return 1
	};
	v.toString = function() {
		return this.g.toString()
	};
	function Pd(a) {
		return a instanceof Nd && a.constructor === Nd ? a.g: "type_error:SafeUrl"
	}
	var Qd = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
		Rd = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
		Sd = /^(?:(?:https?|mailto|ftp):|[^:/ ? #] * ( ? :[/?#]|$))/i;
	function Td(a) {
		if (a instanceof Nd) return a;
		a = typeof a == Gb && a.Va ? a.Ga() : String(a);
		if (Sd.test(a)) a = Ud(a);
		else {
			a = String(a);
			a = a.replace(/(%0A|%0D)/g, "");
			var b = a.match(Rd);
			a = b && Qd.test(b[1]) ? Ud(a) : null
		}
		return a
	}
	var Od = {};
	function Ud(a) {
		return new Nd(a, Od)
	}
	var Vd = Ud(xa);
	function Wd(a, b) {
		this.g = b === Xd ? a: ""
	}
	Wd.prototype.Va = !0; Wd.prototype.Ga = function() {
		return this.g
	}; Wd.prototype.toString = function() {
		return this.g.toString()
	};
	function Yd(a) {
		return a instanceof Wd && a.constructor === Wd ? a.g: "type_error:SafeStyle"
	}
	var Xd = {},
		Zd = new Wd("", Xd);
	function $d(a) {
		if (a instanceof Nd) return 'url("' + Pd(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
		a = a instanceof od ? rd(a) : ae(String(a));
		if (/[{;}]/.test(a)) throw new Mc("Value does not allow [{;}], got: %s.", [a]);
		return a
	}
	function ae(a) {
		var b = a.replace(be, "$1").replace(be, "$1").replace(ce, "url");
		if (de.test(b)) {
			if (ee.test(a)) return ec;
			for (var c = b = !0,
				d = 0; d < a.length; d++) {
				var e = a.charAt(d);
				"'" == e && c ? b = !b: '"' == e && b && (c = !c)
			}
			if (!b || !c || !fe(a)) return ec
		} else return ec;
		return ge(a)
	}
	function fe(a) {
		for (var b = !0,
			c = /^[-_a-zA-Z0-9]$/,
			d = 0; d < a.length; d++) {
			var e = a.charAt(d);
			if ("]" == e) {
				if (b) return ! 1;
				b = !0
			} else if ("[" == e) {
				if (!b) return ! 1;
				b = !1
			} else if (!b && !c.test(e)) return ! 1
		}
		return b
	}
	var de = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
		ce = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
		be = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\],]+\)/g,ee = /\/\*/;
	function ge(a) {
		return a.replace(ce,
			function(b, c, d, e) {
				var f = "";
				d = d.replace(/^(['"])(.*)\1$/,
					function(h, k, l) {
						f = k;
						return l
					});
					b = (Td(d) || Vd).Ga();
					return c + f + b + f + e
				})
	};
	var he = {};
	function ie(a, b) {
		this.g = b === he ? a: "";
		this.Va = !0
	}
	ie.prototype.Ga = function() {
		return this.g
	};
	function je(a) {
		return a instanceof ie && a.constructor === ie ? a.g: "type_error:SafeStyleSheet"
	}
	ie.prototype.toString = function() {
		return this.g.toString()
	};
	var ke; a: {
		var le = x.navigator;
		if (le) {
			var me = le.userAgent;
			if (me) {
				ke = me;
				break a
			}
		}
		ke = ""
	}
	function C(a) {
		return - 1 != ke.indexOf(a)
	}
	function ne(a) {
		for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,
			c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
		return c
	};
	function oe() {
		return C("Trident") || C("MSIE")
	}
	function pe() {
		return C("Firefox") || C("FxiOS")
	}
	function qe() {
		return (C("Chrome") || C("CriOS")) && !C(ka)
	}
	function re() {
		function a(e) {
			e = Uc(e, d);
			return c[e] || ""
		}
		var b = ke;
		if (!oe()) {
			b = ne(b);
			var c = {};
			Pc(b,
				function(e) {
					c[e[0]] = e[1]
				});
			var d = Fc(ed, c);
			C(qa) ? a(["Version", qa]) : C(ka) ? a([ka]) : C("Edg/") ? a(["Edg"]) : qe() && a(["Chrome", "CriOS", "HeadlessChrome"])
		}
	};
	function se(a, b, c) {
		this.g = c === te ? a: "";
		this.h = b
	}
	v = se.prototype; v.Je = !0; v.wb = function() {
		return this.h
	}; v.Va = !0; v.Ga = function() {
		return this.g.toString()
	}; v.toString = function() {
		return this.g.toString()
	};
	function ue(a) {
		return ve(a).toString()
	}
	function ve(a) {
		return a instanceof se && a.constructor === se ? a.g: "type_error:SafeHtml"
	}
	function we(a) {
		if (a instanceof se) return a;
		var b = typeof a == Gb,
			c = null;
		b && a.Je && (c = a.wb());
		return xe(Dd(b && a.Va ? a.Ga() : String(a)), c)
	}
	function ye(a) {
		if (a instanceof se) return a;
		a = we(a);
		var b = ue(a);
		b = Cd(b.replace(/  /g, " &#160;"), void 0);
		return xe(b, a.wb())
	}
	var ze = /^[a-zA-Z0-9-]+$/,
		Ae = {
			action: !0,
			cite: !0,
			data: !0,
			formaction: !0,
			href: !0,
			manifest: !0,
			poster: !0,
			src: !0
		},
		Be = {
			APPLET: !0,
			BASE: !0,
			EMBED: !0,
			IFRAME: !0,
			LINK: !0,
			MATH: !0,
			META: !0,
			OBJECT: !0,
			SCRIPT: !0,
			STYLE: !0,
			SVG: !0,
			TEMPLATE: !0
		};
	function Ce(a, b, c) {
		De(String(a));
		return Ee(String(a), b, c)
	}
	function De(a) {
		if (!ze.test(a)) throw Error("");
		if (a.toUpperCase() in Be) throw Error("");
	}
	function Fe(a) {
		null === Ge && (Ge = He("script"));
		var b = {
			nonce: Ge
		};
		for (d in b) if (Object.prototype.hasOwnProperty.call(b, d)) {
			var c = d.toLowerCase();
			if ("language" == c || "src" == c || "text" == c || "type" == c) throw Error("");
		}
		var d = "";
		a = Xc(a);
		for (c = 0; c < a.length; c++) d += vd(a[c]).toString();
		a = xe(d, 0);
		return Ee("script", b, a)
	}
	function Ie(a) {
		function b(f) {
			Array.isArray(f) ? Pc(f, b) : (f = we(f), e.push(ue(f)), f = f.wb(), 0 == d ? d = f: 0 != f && d != f && (d = null))
		}
		var c = we(Je),
			d = c.wb(),
			e = [];
		Pc(a, b);
		return xe(e.join(ue(c)), d)
	}
	function Ke(a) {
		return Ie(Array.prototype.slice.call(arguments))
	}
	var te = {};
	function xe(a, b) {
		var c = nd();
		a = c ? c.createHTML(a) : a;
		return new se(a, b, te)
	}
	function Ee(a, b, c) {
		var d = null;
		var e = "<" + a + Le(b);
		null == c ? c = [] : Array.isArray(c) || (c = [c]); ! 0 === ld[a.toLowerCase()] ? e += ">": (d = Ke(c), e += ">" + ue(d) + "</" + a + ">", d = d.wb()); (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
		return xe(e, d)
	}
	function Le(a) {
		var b = "";
		if (a) for (var c in a) if (Object.prototype.hasOwnProperty.call(a, c)) {
			if (!ze.test(c)) throw Error("");
			var d = a[c];
			if (null != d) {
				var e = c;
				var f = d;
				if (f instanceof od) f = rd(f);
				else if ("style" == e.toLowerCase()) {
					d = void 0;
					if (!zc(f)) throw Error("");
					if (! (f instanceof Wd)) {
						var h = "";
						for (d in f) if (Object.prototype.hasOwnProperty.call(f, d)) {
							if (!/^[-_a-zA-Z0-9]+$/.test(d)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + d);
							var k = f[d];
							null != k && (k = Array.isArray(k) ? Rc(k, $d).join(" ") : $d(k), h += d + ":" + k + ";")
						}
						f = h ? new Wd(h, Xd) : Zd
					}
					f = Yd(f)
				} else {
					if (/^on/i.test(e)) throw Error("");
					if (e.toLowerCase() in Ae) if (f instanceof xd) f = zd(f).toString();
					else if (f instanceof Nd) f = Pd(f);
					else if (typeof f === t) f = (Td(f) || Vd).Ga();
					else throw Error("");
				}
				f.Va && (f = f.Ga());
				e = e + '="' + Dd(String(f)) + '"';
				b += " " + e
			}
		}
		return b
	}
	var Me = xe("<!DOCTYPE html>", 0), Je = new se(x.trustedTypes && x.trustedTypes.emptyHTML || "", 0, te), Ne = xe("<br>", 0);
	function Oe(a, b, c) {
		rd(a);
		rd(a);
		return xe(b, c || null)
	}
	function Pe(a, b) {
		rd(a);
		rd(a);
		b = (a = nd()) ? a.createScript(b) : b;
		return new ud(b, td)
	}
	function Qe(a, b) {
		rd(a);
		rd(a);
		return Ad(b)
	};
	var Re = ad(function() {
		var a = document.createElement(Za),
			b = document.createElement(Za);
		b.appendChild(document.createElement(Za));
		a.appendChild(b);
		b = a.firstChild.firstChild;
		a.innerHTML = ve(Je);
		return ! b.parentElement
	});
	function Se(a, b) {
		if (Re()) for (; a.lastChild;) a.removeChild(a.lastChild);
		a.innerHTML = ve(b)
	}
	function Te(a, b) {
		b instanceof Nd || b instanceof Nd || (b = typeof b == Gb && b.Va ? b.Ga() : String(b), Sd.test(b) || (b = xa), b = Ud(b));
		a.action = Pd(b)
	}
	var Ge = null,
		Ue = null,
		Ve = /^[\w+/_-]+[=]{0,2}$/;
	function He(a) {
		var b = x.document;
		if (!b.querySelector) return "";
		var c = b.querySelector(a + "[nonce]");
		c || "style" != a || (c = b.querySelector('link[rel="stylesheet"][nonce]'));
		return c && (a = c.nonce || c.getAttribute("nonce")) && Ve.test(a) ? a: ""
	};
	function We(a) {
		return a.replace(/\xa0|[ \t]+/g, " ")
	}
	function Xe(a) {
		return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
	}
	function Ye(a) {
		return a.replace(/^[\s\xa0]+/, "")
	}
	function Ze(a) {
		return a.replace(/[\s\xa0]+$/, "")
	}
	function $e(a) {
		return encodeURIComponent(String(a))
	}
	function af(a) {
		return decodeURIComponent(a.replace(/\+/g, " "))
	}
	function bf(a) {
		return a = Dd(a, void 0)
	}
	function cf(a) {
		return - 1 != a.indexOf("&") ? "document" in x ? df(a) : ef(a) : a
	}
	function df(a) {
		var b = {
			"&amp;": "&",
			"&lt;": "<",
			"&gt;": ">",
			"&quot;": '"'
		};
		var c = x.document.createElement(Za);
		return a.replace(ff,
			function(d, e) {
				var f = b[d];
				if (f) return f;
				"#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (f = String.fromCharCode(e)));
				f || (f = Oe(sd("Single HTML entity."), d + " "), Se(c, f), f = c.firstChild.nodeValue.slice(0, -1));
				return b[d] = f
			})
	}
	function ef(a) {
		return a.replace(/&([^;]+);/g,
			function(b, c) {
				switch (c) {
					case "amp":
						return "&";
					case "lt":
						return "<";
					case "gt":
						return ">";
					case "quot":
						return '"';
					default:
						return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? b: String.fromCharCode(c)
				}
			})
	}
	var ff = /&([^;\s<&]+);?/g;
	function gf() {
		return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Gc()).toString(36)
	}
	function hf(a) {
		return String(a).replace(/\-([a-z])/g,
			function(b, c) {
				return c.toUpperCase()
			})
	}
	function jf(a) {
		return a.replace(/(^|[\s]+)([a-z])/g,
			function(b, c, d) {
				return c + d.toUpperCase()
			})
	};
	function kf() {
		return C("iPhone") && !C("iPod") && !C("iPad")
	}
	function lf() {
		return kf() || C("iPad") || C("iPod")
	};
	function mf(a) {
		mf[" "](a);
		return a
	}
	mf[" "] = y;
	function nf(a, b) {
		try {
			return mf(a[b]),
				!0
		} catch(c) {}
		return ! 1
	}
	function of(a, b, c) {
		return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
	};
	var pf = C(qa),
		D = oe(),
		qf = C(ka),
		rf = qf || D,
		E = C("Gecko") && !( - 1 != ke.toLowerCase().indexOf("webkit") && !C(ka)) && !(C("Trident") || C("MSIE")) && !C(ka),
		F = -1 != ke.toLowerCase().indexOf("webkit") && !C(ka),
		sf = F && C("Mobile"),
		tf = C("Macintosh"),
		uf = C("Windows"),
		vf = C("Android"),
		wf = kf(),
		xf = C("iPad"),
		yf = C("iPod"),
		zf = lf();
	function Af() {
		var a = x.document;
		return a ? a.documentMode: void 0
	}
	var Bf;
	a: {
		var Cf = "",
			Df = function() {
				var a = ke;
				if (E) return /rv:([^\);]+)(\)|;)/.exec(a);
if (qf) return /Edge\/([\d\.]+)/.exec(a);
if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
if (F) return /WebKit\/(\S+)/.exec(a);
if (pf) return /(?:Version)[ \/]?(\S+)/.exec(a)
} ();
Df && (Cf = Df ? Df[1] : "");
if (D) {
	var Ef = Af();
	if (null != Ef && Ef > parseFloat(Cf)) {
		Bf = String(Ef);
		break a
	}
}
Bf = Cf
}
var Ff = Bf,
	Gf = {};
function H(a) {
	return of(Gf, a,
		function() {
			return 0 <= Ld(Ff, a)
		})
}
function Hf(a) {
	return Number(If) >= a
}
var Jf;
if (x.document && D) {
	var Kf = Af();
	Jf = Kf ? Kf: parseInt(Ff, 10) || void 0
} else Jf = void 0;
var If = Jf;
var Lf = pe(),
	Mf = kf() || C("iPod"),
	Nf = C("iPad"),
	Of = C("Android") && !(qe() || pe() || C(qa) || C("Silk")),
	Pf = qe(),
	Qf = C("Safari") && !(qe() || C("Coast") || C(qa) || C(ka) || C("Edg/") || C("OPR") || pe() || C("Silk") || C("Android")) && !lf();
var Rf = null,
	Sf = E || F && !Qf || pf || !Qf && !D && typeof x.atob == p;
function Tf(a) {
	if (Sf) return x.atob(a);
	var b = "";
	Uf(a,
		function(c) {
			b += String.fromCharCode(c)
		});
	return b
}
function Uf(a, b) {
	function c(l) {
		for (; d < a.length;) {
			var m = a.charAt(d++),
				n = Rf[m];
			if (null != n) return n;
			if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
		}
		return l
	}
	Vf();
	for (var d = 0;;) {
		var e = c( - 1),
			f = c(0),
			h = c(64),
			k = c(64);
		if (64 === k && -1 === e) break;
		b(e << 2 | f >> 4);
		64 != h && (b(f << 4 & 240 | h >> 2), 64 != k && b(h << 6 & 192 | k))
	}
}
function Vf() {
	if (!Rf) {
		Rf = {};
		for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
			var f = d[e];
			void 0 === Rf[f] && (Rf[f] = e)
		}
	}
};
var Wf = typeof Uint8Array === p;
function Xf() {}
var Yf;
function Zf(a, b, c, d) {
	a.g = null;
	Yf && (b || (b = Yf), Yf = null);
	b || (b = []);
	a.A = void 0;
	a.l = -1;
	a.h = b;
	a: {
		if (b = a.h.length) {--b;
			var e = a.h[b];
			if (! (null === e || typeof e != Gb || Array.isArray(e) || Wf && e instanceof Uint8Array)) {
				a.m = b - a.l;
				a.j = e;
				break a
			}
		}
		a.m = Number.MAX_VALUE
	}
	a.o = {};
	if (c) for (b = 0; b < c.length; b++) e = c[b],
		e < a.m ? (e += a.l, a.h[e] = a.h[e] || $f) : (ag(a), a.j[e] = a.j[e] || $f);
	if (d && d.length) for (c = 0; c < d.length; c++) {
		e = b = void 0;
		for (var f = a,
			h = d[c], k = 0; k < h.length; k++) {
			var l = h[k],
				m = bg(f, l);
			null != m && (e = l, b = m, cg(f, l, void 0))
		}
		e && cg(f, e, b)
	}
}
var $f = [];
function ag(a) {
	var b = a.m + a.l;
	a.h[b] || (a.j = a.h[b] = {})
}
function bg(a, b) {
	if (b < a.m) {
		b += a.l;
		var c = a.h[b];
		return c !== $f ? c: a.h[b] = []
	}
	if (a.j) return c = a.j[b],
		c === $f ? a.j[b] = [] : c
}
function cg(a, b, c) {
	b < a.m ? a.h[b + a.l] = c: (ag(a), a.j[b] = c);
	return a
}
function dg(a, b, c) {
	a.g || (a.g = {});
	var d = c ? eg(c) : c;
	a.g[b] = c;
	cg(a, b, d)
}
function fg(a, b, c) {
	a.g || (a.g = {});
	if (!a.g[b]) {
		var d = bg(a, b);
		for (var e = [], f = 0; f < d.length; f++) e[f] = new c(d[f]);
		a.g[b] = e
	}
	d = a.g[b];
	d == $f && (d = a.g[b] = []);
	c = new c;
	a = bg(a, b);
	d.push(c);
	a.push(eg(c));
	return c
}
function eg(a) {
	if (a.g) for (var b in a.g) {
		var c = a.g[b];
		if (Array.isArray(c)) for (var d = 0; d < c.length; d++) c[d] && eg(c[d]);
		else c && eg(c)
	}
	return a.h
}
Xf.prototype.toString = function() {
	return eg(this).toString()
};
var gg = "StopIteration" in x ? x.StopIteration: {
	message: "StopIteration",
	stack: ""
};
function hg() {}
hg.prototype.next = function() {
	throw gg;
};
hg.prototype.La = function() {
	return this
};
function ig(a) {
	if (a instanceof hg) return a;
	if (typeof a.La == p) return a.La(!1);
	if (yc(a)) {
		var b = 0,
			c = new hg;
		c.next = function() {
			for (;;) {
				if (b >= a.length) throw gg;
				if (b in a) return a[b++];
				b++
			}
		};
		return c
	}
	throw Error("Not implemented");
}
function jg(a, b, c) {
	a = ig(a);
	try {
		for (; b.call(c, a.next(), void 0, a););
	} catch(d) {
		if (d !== gg) throw d;
	}
};
function kg(a, b) {
	this.h = {};
	this.g = [];
	this.l = this.j = 0;
	var c = arguments.length;
	if (1 < c) {
		if (c % 2) throw Error("Uneven number of arguments");
		for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
	} else if (a) if (a instanceof kg) for (c = a.Ua(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
	else for (d in a) this.set(d, a[d])
}
v = kg.prototype;
v.Ea = function() {
	lg(this);
	for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
	return a
};
v.Ua = function() {
	lg(this);
	return this.g.concat()
};
function mg(a, b) {
	return ng(a.h, b)
}
function og(a) {
	a.h = {};
	a.g.length = 0;
	a.j = 0;
	a.l = 0
}
v.remove = function(a) {
	return ng(this.h, a) ? (delete this.h[a], this.j--, this.l++, this.g.length > 2 * this.j && lg(this), !0) : !1
};
function lg(a) {
	if (a.j != a.g.length) {
		for (var b = 0,
			c = 0; b < a.g.length;) {
			var d = a.g[b];
			ng(a.h, d) && (a.g[c++] = d);
			b++
		}
		a.g.length = c
	}
	if (a.j != a.g.length) {
		var e = {};
		for (c = b = 0; b < a.g.length;) d = a.g[b],
			ng(e, d) || (a.g[c++] = d, e[d] = 1),
			b++;
		a.g.length = c
	}
}
v.get = function(a, b) {
	return ng(this.h, a) ? this.h[a] : b
};
v.set = function(a, b) {
	ng(this.h, a) || (this.j++, this.g.push(a), this.l++);
	this.h[a] = b
};
v.forEach = function(a, b) {
	for (var c = this.Ua(), d = 0; d < c.length; d++) {
		var e = c[d],
			f = this.get(e);
		a.call(b, f, e, this)
	}
};
v.La = function(a) {
	lg(this);
	var b = 0,
		c = this.l,
		d = this,
		e = new hg;
	e.next = function() {
		if (c != d.l) throw Error("The map has changed since the iterator was created");
		if (b >= d.g.length) throw gg;
		var f = d.g[b++];
		return a ? f: d.h[f]
	};
	return e
};
function ng(a, b) {
	return Object.prototype.hasOwnProperty.call(a, b)
};
function pg(a) {
	if (a.Ea && typeof a.Ea == p) return a.Ea();
	if (typeof a === t) return a.split("");
	if (yc(a)) {
		for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
		return b
	}
	b = [];
	c = 0;
	for (d in a) b[c++] = a[d];
	return b
}
function qg(a) {
	if (a.Ua && typeof a.Ua == p) return a.Ua();
	if (!a.Ea || typeof a.Ea != p) {
		if (yc(a) || typeof a === t) {
			var b = [];
			a = a.length;
			for (var c = 0; c < a; c++) b.push(c);
			return b
		}
		return dd(a)
	}
}
function rg(a, b, c) {
	if (a.forEach && typeof a.forEach == p) a.forEach(b, c);
	else if (yc(a) || typeof a === t) Pc(a, b, c);
	else for (var d = qg(a), e = pg(a), f = e.length, h = 0; h < f; h++) b.call(c, e[h], d && d[h], a)
};
var sg = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function tg(a) {
	return a ? decodeURI(a) : a
}
function ug(a, b) {
	if (a) {
		a = a.split("&");
		for (var c = 0; c < a.length; c++) {
			var d = a[c].indexOf("="),
				e = null;
			if (0 <= d) {
				var f = a[c].substring(0, d);
				e = a[c].substring(d + 1)
			} else f = a[c];
			b(f, e ? af(e) : "")
		}
	}
};
function vg(a) {
	this.l = this.C = this.j = "";
	this.A = null;
	this.m = this.o = "";
	this.h = !1;
	if (a instanceof vg) {
		this.h = a.h;
		wg(this, a.j);
		this.C = a.C;
		this.l = a.l;
		xg(this, a.A);
		this.o = a.o;
		var b = a.g;
		var c = new yg;
		c.j = b.j;
		b.g && (c.g = new kg(b.g), c.h = b.h);
		zg(this, c);
		this.m = a.m
	} else a && (b = String(a).match(sg)) ? (this.h = !1, wg(this, b[1] || "", !0), this.C = Ag(b[2] || ""), this.l = Ag(b[3] || "", !0), xg(this, b[4]), this.o = Ag(b[5] || "", !0), zg(this, b[6] || "", !0), this.m = Ag(b[7] || "")) : (this.h = !1, this.g = new yg(null, this.h))
}
vg.prototype.toString = function() {
	var a = [],
		b = this.j;
	b && a.push(Bg(b, Cg, !0), ":");
	var c = this.l;
	if (c || "file" == b) a.push("//"),
		(b = this.C) && a.push(Bg(b, Cg, !0), "@"),
		a.push($e(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
		c = this.A,
		null != c && a.push(":", String(c));
	if (c = this.o) this.l && "/" != c.charAt(0) && a.push("/"),
		a.push(Bg(c, "/" == c.charAt(0) ? Eg: Fg, !0)); (c = this.g.toString()) && a.push("?", c); (c = this.m) && a.push("#", Bg(c, Gg));
	return a.join("")
};
function wg(a, b, c) {
	a.j = c ? Ag(b, !0) : b;
	a.j && (a.j = a.j.replace(/:$/, ""))
}
function xg(a, b) {
	if (b) {
		b = Number(b);
		if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
		a.A = b
	} else a.A = null
}
function zg(a, b, c) {
	b instanceof yg ? (a.g = b, Hg(a.g, a.h)) : (c || (b = Bg(b, Ig)), a.g = new yg(b, a.h))
}
function Ag(a, b) {
	return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
}
function Bg(a, b, c) {
	return typeof a === t ? (a = encodeURI(a).replace(b, Jg), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
}
function Jg(a) {
	a = a.charCodeAt(0);
	return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Cg = /[#\/\?@]/g,
	Fg = /[#\?:]/g,
	Eg = /[#\?]/g,
	Ig = /[#\?@]/g,
	Gg = /#/g;
function yg(a, b) {
	this.h = this.g = null;
	this.j = a || null;
	this.l = !!b
}
function Kg(a) {
	a.g || (a.g = new kg, a.h = 0, a.j && ug(a.j,
		function(b, c) {
			a.add(af(b), c)
		}))
}
function Lg(a) {
	var b = qg(a);
	if ("undefined" == typeof b) throw Error("Keys are undefined");
	var c = new yg(null, void 0);
	a = pg(a);
	for (var d = 0; d < b.length; d++) {
		var e = b[d],
			f = a[d];
		Array.isArray(f) ? Mg(c, e, f) : c.add(e, f)
	}
	return c
}
v = yg.prototype;v.add = function(a, b) {
	Kg(this);
	this.j = null;
	a = Ng(this, a);
	var c = this.g.get(a);
	c || this.g.set(a, c = []);
	c.push(b);
	this.h = this.h + 1;
	return this
};v.remove = function(a) {
	Kg(this);
	a = Ng(this, a);
	return mg(this.g, a) ? (this.j = null, this.h = this.h - this.g.get(a).length, this.g.remove(a)) : !1
};
function Og(a, b) {
	Kg(a);
	b = Ng(a, b);
	return mg(a.g, b)
}
v.forEach = function(a, b) {
	Kg(this);
	this.g.forEach(function(c, d) {
		Pc(c,
			function(e) {
				a.call(b, e, d, this)
			},
			this)
	},
		this)
};v.Ua = function() {
	Kg(this);
	for (var a = this.g.Ea(), b = this.g.Ua(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
	return c
};v.Ea = function(a) {
	Kg(this);
	var b = [];
	if (typeof a === t) Og(this, a) && (b = Xc(b, this.g.get(Ng(this, a))));
	else {
		a = this.g.Ea();
		for (var c = 0; c < a.length; c++) b = Xc(b, a[c])
	}
	return b
};v.set = function(a, b) {
	Kg(this);
	this.j = null;
	a = Ng(this, a);
	Og(this, a) && (this.h = this.h - this.g.get(a).length);
	this.g.set(a, [b]);
	this.h = this.h + 1;
	return this
};v.get = function(a, b) {
	if (!a) return b;
	a = this.Ea(a);
	return 0 < a.length ? String(a[0]) : b
};
function Mg(a, b, c) {
	a.remove(b);
	0 < c.length && (a.j = null, a.g.set(Ng(a, b), Yc(c)), a.h = a.h + c.length)
}
v.toString = function() {
	if (this.j) return this.j;
	if (!this.g) return "";
	for (var a = [], b = this.g.Ua(), c = 0; c < b.length; c++) {
		var d = b[c],
			e = $e(d);
		d = this.Ea(d);
		for (var f = 0; f < d.length; f++) {
			var h = e;
			"" !== d[f] && (h += "=" + $e(d[f]));
			a.push(h)
		}
	}
	return this.j = a.join("&")
};
function Ng(a, b) {
	b = String(b);
	a.l && (b = b.toLowerCase());
	return b
}
function Hg(a, b) {
	b && !a.l && (Kg(a), a.j = null, a.g.forEach(function(c, d) {
		var e = d.toLowerCase();
		d != e && (this.remove(d), Mg(this, e, c))
	},
		a));
	a.l = b
}
v.Xd = function(a) {
	for (var b = 0; b < arguments.length; b++) rg(arguments[b],
		function(c, d) {
			this.add(d, c)
		},
		this)
};
var Pg = {},
	Qg = {},
	Rg = {},
	Sg = {};
function Tg() {
	throw Error("Do not instantiate directly");
}
Tg.prototype.ld = null;Tg.prototype.ja = function() {
	return this.g
};Tg.prototype.toString = function() {
	return this.g
};
function Ug(a) {
	if (a.Lb !== Pg) throw Error("Sanitized content was not of kind HTML.");
	return Oe(sd("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."), a.toString(), a.ld)
}
function Vg() {
	Tg.call(this)
}
B(Vg, Tg);Vg.prototype.Lb = Pg;
function Wg() {
	Tg.call(this)
}
B(Wg, Tg);Wg.prototype.Lb = Sg;Wg.prototype.ld = 1;
function Xg(a, b) {
	return null != a && a.Lb === b
};
function Yg(a) {
	a: {
		var b = ["window", "location", "href"];
		var c = x;
		for (var d = 0; d < b.length; d++) if (c = c[b[d]], null == c) {
			c = null;
			break a
		}
	}
	null == a && (a = 'Unknown Error of type "null/undefined"');
	if (typeof a === t) return {
		message: a,
		name: "Unknown error",
		lineNumber: pa,
		fileName: c,
		stack: pa
	};
	b = !1;
	try {
		var e = a.lineNumber || a.line || pa
	} catch(h) {
		e = pa,
			b = !0
	}
	try {
		var f = a.fileName || a.filename || a.sourceURL || x.$googDebugFname || c
	} catch(h) {
		f = pa,
			b = !0
	}
	c = Zg(a);
	if (! (!b && a.lineNumber && a.fileName && a.stack && a.message && a.name)) return b = a.message,
		null == b && (b = a.constructor && a.constructor instanceof Function ? 'Unknown Error of type "' + (a.constructor.name ? a.constructor.name: $g(a.constructor)) + '"': "Unknown Error of unknown type", typeof a.toString === p && Object.prototype.toString !== a.toString && (b += ": " + a.toString())),
		{
			message: b,
			name: a.name || "UnknownError",
			lineNumber: e,
			fileName: f,
			stack: c || pa
		};
	a.stack = c;
	return {
		message: a.message,
		name: a.name,
		lineNumber: a.lineNumber,
		fileName: a.fileName,
		stack: a.stack
	}
}
function Zg(a, b) {
	b || (b = {});
	b[ah(a)] = !0;
	var c = a.stack || ""; (a = a.Gh) && !b[ah(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += typeof a === t ? a: a.message + "\n"), c += Zg(a, b));
	return c
}
function ah(a) {
	var b = "";
	typeof a.toString === p && (b = "" + a);
	return b + a.stack
}
function bh(a) {
	var b = Error();
	if (Error.captureStackTrace) Error.captureStackTrace(b, a || bh),
		b = String(b.stack);
	else {
		try {
			throw b;
		} catch(c) {
			b = c
		}
		b = (b = b.stack) ? String(b) : null
	}
	b || (b = ch(a || arguments.callee.caller, []));
	return b
}
function ch(a, b) {
	var c = [];
	if (Vc(b, a)) c.push("[...circular reference...]");
	else if (a && 50 > b.length) {
		c.push($g(a) + "(");
		for (var d = a.arguments,
			e = 0; d && e < d.length; e++) {
			0 < e && c.push(", ");
			var f = d[e];
			switch (typeof f) {
				case Gb:
					f = f ? Gb: "null";
					break;
				case t:
					break;
				case Fb:
					f = String(f);
					break;
				case "boolean":
					f = f ? "true": "false";
					break;
				case p:
					f = (f = $g(f)) ? f: "[fn]";
					break;
				default:
					f = typeof f
			}
			40 < f.length && (f = f.substr(0, 40) + "...");
			c.push(f)
		}
		b.push(a);
		c.push(")\n");
		try {
			c.push(ch(a.caller, b))
		} catch(h) {
			c.push("[exception trying to get caller]\n")
		}
	} else a ? c.push("[...long stack...]") : c.push("[end]");
	return c.join("")
}
function $g(a) {
	if (dh[a]) return dh[a];
	a = String(a);
	if (!dh[a]) {
		var b = /function\s+([^\(]+)/m.exec(a);
		dh[a] = b ? b[1] : "[Anonymous]"
	}
	return dh[a]
}
var dh = {};
function eh(a) {
	if (null != a) switch (a.ld) {
		case 1:
			return 1;
		case - 1 : return - 1;
		case 0:
			return 0
	}
	return null
}
function fh(a) {
	return Xg(a, Pg) ? a: a instanceof se ? gh(ue(a), a.wb()) : gh(String(String(a)).replace(hh, ih), eh(a))
}
var gh = function(a) {
	function b(c) {
		this.g = c
	}
	b.prototype = a.prototype;
	return function(c, d) {
		c = new b(String(c));
		void 0 !== d && (c.ld = d);
		return c
	}
} (Vg), jh = function(a) {
	function b(c) {
		this.g = c
	}
	b.prototype = a.prototype;
	return function(c) {
		return new b(String(c))
	}
} (Wg);
function kh(a) {
	return a instanceof Tg ? !!a.ja() : !!a
}
function lh(a) {
	return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
}
function I(a) {
	if (Xg(a, Pg)) {
		var b = String;
		a = String(a.ja()).replace(mh, "").replace(nh, "&lt;");
		b = b(a).replace(oh, ih)
	} else b = String(a).replace(hh, ih);
	return b
}
function ph(a) {
	Xg(a, Qg) || Xg(a, Rg) ? a = qh(a) : a instanceof Nd ? a = qh(Pd(a)) : a instanceof xd ? a = qh(zd(a).toString()) : (a = String(a), a = rh.test(a) ? a.replace(sh, th) : ya);
	return a
}
function uh(a) {
	Xg(a, Qg) || Xg(a, Rg) ? a = qh(a) : a instanceof Nd ? a = qh(Pd(a)) : a instanceof xd ? a = qh(zd(a).toString()) : (a = String(a), a = vh.test(a) ? a.replace(sh, th) : ya);
	return a
}
function wh(a) {
	return Xg(a, Rg) ? a.ja() : a instanceof xd ? zd(a).toString() : ya
}
function xh(a) {
	Xg(a, Sg) ? a = lh(a.ja()) : null == a ? a = "": a instanceof Wd ? a = lh(Yd(a)) : a instanceof ie ? a = lh(je(a)) : (a = String(a), a = yh.test(a) ? a: "zSoyz");
	return a
}
var zh = {
	"\x00": "&#0;",
	"\t": "&#9;",
	"\n": "&#10;",
	"\x0B": "&#11;",
	"\f": "&#12;",
	"\r": "&#13;",
	" ": "&#32;",
	'"': "&quot;",
	"&": "&amp;",
	"'": "&#39;",
	"-": "&#45;",
	"/": "&#47;",
	"<": "&lt;",
	"=": "&#61;",
	">": "&gt;",
	"`": "&#96;",
	"\u0085": "&#133;",
	"\u00a0": "&#160;",
	"\u2028": "&#8232;",
	"\u2029": "&#8233;"
};
function ih(a) {
	return zh[a]
}
var Ah = {
	"\x00": "\\0 ",
	"\b": "\\8 ",
	"\t": "\\9 ",
	"\n": "\\a ",
	"\x0B": "\\b ",
	"\f": "\\c ",
	"\r": "\\d ",
	'"': "\\22 ",
	"&": "\\26 ",
	"'": "\\27 ",
	"(": "\\28 ",
	")": "\\29 ",
	"*": "\\2a ",
	"/": "\\2f ",
	":": "\\3a ",
	";": "\\3b ",
	"<": "\\3c ",
	"=": "\\3d ",
	">": "\\3e ",
	"@": "\\40 ",
	"\\": "\\5c ",
	"{": "\\7b ",
	"}": "\\7d ",
	"\u0085": "\\85 ",
	"\u00a0": "\\a0 ",
	"\u2028": "\\2028 ",
	"\u2029": "\\2029 "
};
function Bh(a) {
	return Ah[a]
}
var Ch = {
	"\x00": "%00",
	"\u0001": "%01",
	"\u0002": "%02",
	"\u0003": "%03",
	"\u0004": "%04",
	"\u0005": "%05",
	"\u0006": "%06",
	"\u0007": "%07",
	"\b": "%08",
	"\t": "%09",
	"\n": "%0A",
	"\x0B": "%0B",
	"\f": "%0C",
	"\r": "%0D",
	"\u000e": "%0E",
	"\u000f": "%0F",
	"\u0010": "%10",
	"\u0011": "%11",
	"\u0012": "%12",
	"\u0013": "%13",
	"\u0014": "%14",
	"\u0015": "%15",
	"\u0016": "%16",
	"\u0017": "%17",
	"\u0018": "%18",
	"\u0019": "%19",
	"\u001a": "%1A",
	"\u001b": "%1B",
	"\u001c": "%1C",
	"\u001d": "%1D",
	"\u001e": "%1E",
	"\u001f": "%1F",
	" ": "%20",
	'"': "%22",
	"'": "%27",
	"(": "%28",
	")": "%29",
	"<": "%3C",
	">": "%3E",
	"\\": "%5C",
	"{": "%7B",
	"}": "%7D",
	"\u007f": "%7F",
	"\u0085": "%C2%85",
	"\u00a0": "%C2%A0",
	"\u2028": "%E2%80%A8",
	"\u2029": "%E2%80%A9",
	"\uff01": "%EF%BC%81",
	"\uff03": "%EF%BC%83",
	"\uff04": "%EF%BC%84",
	"\uff06": "%EF%BC%86",
	"\uff07": "%EF%BC%87",
	"\uff08": "%EF%BC%88",
	"\uff09": "%EF%BC%89",
	"\uff0a": "%EF%BC%8A",
	"\uff0b": "%EF%BC%8B",
	"\uff0c": "%EF%BC%8C",
	"\uff0f": "%EF%BC%8F",
	"\uff1a": "%EF%BC%9A",
	"\uff1b": "%EF%BC%9B",
	"\uff1d": "%EF%BC%9D",
	"\uff1f": "%EF%BC%9F",
	"\uff20": "%EF%BC%A0",
	"\uff3b": "%EF%BC%BB",
	"\uff3d": "%EF%BC%BD"
};
function th(a) {
	return Ch[a]
}
var hh = /[\x00\x22\x26\x27\x3c\x3e]/g,
	oh = /[\x00\x22\x27\x3c\x3e]/g,
	Dh = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g,
	sh = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
	yh = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
	rh = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
	vh = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
function qh(a) {
	return String(a).replace(sh, th)
}
var mh = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
	nh = /</g;
var Eh = !D || Hf(9), Fh = !E && !D || D && Hf(9) || E && H("1.9.1"), Gh = D && !H("9"), Hh = D || pf || F, Ih = D && !Hf(9);
function J(a, b) {
	this.x = void 0 !== a ? a: 0;
	this.y = void 0 !== b ? b: 0
}
function Jh(a) {
	return new J(a.x, a.y)
}
function Kh(a, b) {
	return new J(a.x - b.x, a.y - b.y)
}
J.prototype.ceil = function() {
	this.x = Math.ceil(this.x);
	this.y = Math.ceil(this.y);
	return this
};J.prototype.floor = function() {
	this.x = Math.floor(this.x);
	this.y = Math.floor(this.y);
	return this
};J.prototype.round = function() {
	this.x = Math.round(this.x);
	this.y = Math.round(this.y);
	return this
};J.prototype.translate = function(a, b) {
	a instanceof J ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), typeof b === Fb && (this.y += b));
	return this
};
function Lh(a, b) {
	this.width = a;
	this.height = b
}
Lh.prototype.aspectRatio = function() {
	return this.width / this.height
};Lh.prototype.ceil = function() {
	this.width = Math.ceil(this.width);
	this.height = Math.ceil(this.height);
	return this
};Lh.prototype.floor = function() {
	this.width = Math.floor(this.width);
	this.height = Math.floor(this.height);
	return this
};Lh.prototype.round = function() {
	this.width = Math.round(this.width);
	this.height = Math.round(this.height);
	return this
};
function Mh(a) {
	return a ? new Nh(K(a)) : Kc || (Kc = new Nh)
}
function Oh(a, b) {
	return typeof b === t ? a.getElementById(b) : b
}
function Ph(a, b) {
	return (b || document).getElementsByTagName(String(a))
}
function Qh() {
	var a = document;
	return a.querySelectorAll && a.querySelector ? a.querySelectorAll(".alt-edited") : Rh(document, "*", Da, void 0)
}
function Sh(a, b) {
	var c = b || document;
	if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
	else {
		c = document;
		var d = b || c;
		a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a: "") : Rh(c, "*", a, b)[0] || null
	}
	return a || null
}
function Rh(a, b, c, d) {
	a = d || a;
	b = b && "*" != b ? String(b).toUpperCase() : "";
	if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c: ""));
	if (c && a.getElementsByClassName) {
		a = a.getElementsByClassName(c);
		if (b) {
			d = {};
			for (var e = 0,
				f = 0,
				h; h = a[f]; f++) b == h.nodeName && (d[e++] = h);
			d.length = e;
			return d
		}
		return a
	}
	a = a.getElementsByTagName(b || "*");
	if (c) {
		d = {};
		for (f = e = 0; h = a[f]; f++) b = h.className,
			typeof b.split == p && Vc(b.split(/\s+/), c) && (d[e++] = h);
		d.length = e;
		return d
	}
	return a
}
function Th(a, b) {
	bd(b,
		function(c, d) {
			c && typeof c == Gb && c.Va && (c = c.Ga());
			"style" == d ? a.style.cssText = c: "class" == d ? a.className = c: "for" == d ? a.htmlFor = c: Uh.hasOwnProperty(d) ? a.setAttribute(Uh[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
		})
}
var Uh = {
	cellpadding: "cellPadding",
	cellspacing: "cellSpacing",
	colspan: "colSpan",
	frameborder: "frameBorder",
	height: "height",
	maxlength: "maxLength",
	nonce: "nonce",
	role: "role",
	rowspan: "rowSpan",
	type: "type",
	usemap: "useMap",
	valign: "vAlign",
	width: "width"
};
function Vh(a) {
	a = a.document;
	a = Wh(a) ? a.documentElement: a.body;
	return new Lh(a.clientWidth, a.clientHeight)
}
function Xh(a) {
	var b = Yh(a);
	a = a.parentWindow || a.defaultView;
	return D && H("10") && a.pageYOffset != b.scrollTop ? new J(b.scrollLeft, b.scrollTop) : new J(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}
function Yh(a) {
	return a.scrollingElement ? a.scrollingElement: !F && Wh(a) ? a.documentElement: a.body || a.documentElement
}
function Zh(a) {
	return a ? a.parentWindow || a.defaultView: window
}
function $h(a, b, c) {
	return ai(document, arguments)
}
function ai(a, b) {
	var c = String(b[0]),
		d = b[1];
	if (!Eh && d && (d.name || d.type)) {
		c = ["<", c];
		d.name && c.push(' name="', bf(d.name), '"');
		if (d.type) {
			c.push(' type="', bf(d.type), '"');
			var e = {};
			kd(e, d);
			delete e.type;
			d = e
		}
		c.push(">");
		c = c.join("")
	}
	c = bi(a, c);
	d && (typeof d === t ? c.className = d: Array.isArray(d) ? c.className = d.join(" ") : Th(c, d));
	2 < b.length && ci(a, c, b, 2);
	return c
}
function ci(a, b, c, d) {
	function e(k) {
		k && b.appendChild(typeof k === t ? a.createTextNode(k) : k)
	}
	for (; d < c.length; d++) {
		var f = c[d];
		if (!yc(f) || zc(f) && 0 < f.nodeType) e(f);
		else {
			a: {
				if (f && typeof f.length == Fb) {
					if (zc(f)) {
						var h = typeof f.item == p || typeof f.item == t;
						break a
					}
					if (typeof f === p) {
						h = typeof f.item == p;
						break a
					}
				}
				h = !1
			}
			Pc(h ? Yc(f) : f, e)
		}
	}
}
function bi(a, b) {
	b = String(b);
	"application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
	return a.createElement(b)
}
function di() {
	var a = Ce("WBR"),
		b = document,
		c = bi(b, g);
	D ? (a = Ke(Ne, a), Se(c, a), c.removeChild(c.firstChild)) : Se(c, a);
	if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
	else {
		for (b = b.createDocumentFragment(); c.firstChild;) b.appendChild(c.firstChild);
		c = b
	}
	return c
}
function Wh(a) {
	return "CSS1Compat" == a.compatMode
}
function ei(a) {
	if (1 != a.nodeType) return ! 1;
	switch (a.tagName) {
		case "APPLET":
		case "AREA":
		case "BASE":
		case "BR":
		case "COL":
		case "COMMAND":
		case "EMBED":
		case "FRAME":
		case "HR":
		case "IMG":
		case na:
		case ma:
		case "ISINDEX":
		case "KEYGEN":
		case "LINK":
		case "NOFRAMES":
		case "NOSCRIPT":
		case "META":
		case "OBJECT":
		case "PARAM":
		case "SCRIPT":
		case "SOURCE":
		case "STYLE":
		case "TRACK":
		case "WBR":
			return ! 1
	}
	return ! 0
}
function fi(a, b) {
	ci(K(a), a, arguments, 1)
}
function gi(a) {
	for (var b; b = a.firstChild;) a.removeChild(b)
}
function hi(a, b) {
	b.parentNode && b.parentNode.insertBefore(a, b)
}
function ii(a, b) {
	b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}
function ji(a) {
	a && a.parentNode && a.parentNode.removeChild(a)
}
function ki(a) {
	return Fh && void 0 != a.children ? a.children: Qc(a.childNodes,
		function(b) {
			return 1 == b.nodeType
		})
}
function li(a) {
	return void 0 !== a.firstElementChild ? a.firstElementChild: mi(a.firstChild, !0)
}
function mi(a, b) {
	for (; a && 1 != a.nodeType;) a = b ? a.nextSibling: a.previousSibling;
	return a
}
function ni(a) {
	return zc(a) && 1 == a.nodeType
}
function oi(a, b) {
	if (!a || !b) return ! 1;
	if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
	if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
	for (; b && a != b;) b = b.parentNode;
	return b == a
}
function pi(a, b) {
	if (a == b) return 0;
	if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
	if (D && !Hf(9)) {
		if (9 == a.nodeType) return - 1;
		if (9 == b.nodeType) return 1
	}
	if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
		var c = 1 == a.nodeType,
			d = 1 == b.nodeType;
		if (c && d) return a.sourceIndex - b.sourceIndex;
		var e = a.parentNode,
			f = b.parentNode;
		return e == f ? qi(a, b) : !c && oi(e, b) ? -1 * ri(a, b) : !d && oi(f, a) ? ri(b, a) : (c ? a.sourceIndex: e.sourceIndex) - (d ? b.sourceIndex: f.sourceIndex)
	}
	d = K(a);
	c = d.createRange();
	c.selectNode(a);
	c.collapse(!0);
	a = d.createRange();
	a.selectNode(b);
	a.collapse(!0);
	return c.compareBoundaryPoints(x.Range.START_TO_END, a)
}
function ri(a, b) {
	var c = a.parentNode;
	if (c == b) return - 1;
	for (; b.parentNode != c;) b = b.parentNode;
	return qi(b, a)
}
function qi(a, b) {
	for (; b = b.previousSibling;) if (b == a) return - 1;
	return 1
}
function si(a) {
	var b, c = arguments.length;
	if (!c) return null;
	if (1 == c) return arguments[0];
	var d = [],
		e = Infinity;
	for (b = 0; b < c; b++) {
		for (var f = [], h = arguments[b]; h;) f.unshift(h),
			h = h.parentNode;
		d.push(f);
		e = Math.min(e, f.length)
	}
	f = null;
	for (b = 0; b < e; b++) {
		h = d[0][b];
		for (var k = 1; k < c; k++) if (h != d[k][b]) return f;
		f = h
	}
	return f
}
function K(a) {
	return 9 == a.nodeType ? a: a.ownerDocument || a.document
}
function ti(a) {
	return a.contentDocument || a.contentWindow.document
}
function ui(a) {
	try {
		return a.contentWindow || (a.contentDocument ? Zh(a.contentDocument) : null)
	} catch(b) {}
	return null
}
function vi(a, b) {
	if ("textContent" in a) a.textContent = b;
	else if (3 == a.nodeType) a.data = String(b);
	else if (a.firstChild && 3 == a.firstChild.nodeType) {
		for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
		a.firstChild.data = String(b)
	} else {
		gi(a);
		var c = K(a);
		a.appendChild(c.createTextNode(String(b)))
	}
}
var wi = {
	SCRIPT: 1,
	STYLE: 1,
	HEAD: 1,
	IFRAME: 1,
	OBJECT: 1
},
	xi = {
		IMG: " ",
		BR: "\n"
	};
function yi(a, b) {
	b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
}
function zi(a) {
	return D && !H("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex")
}
function Ai(a) {
	a = a.tabIndex;
	return typeof a === Fb && 0 <= a && 32768 > a
}
function Bi(a) {
	if (Gh && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
	else {
		var b = [];
		Ci(a, b, !0);
		a = b.join("")
	}
	a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
	a = a.replace(/\u200B/g, "");
	Gh || (a = a.replace(/ +/g, " "));
	" " != a && (a = a.replace(/^\s*/, ""));
	return a
}
function Di(a) {
	var b = [];
	Ci(a, b, !1);
	return b.join("")
}
function Ci(a, b, c) {
	if (! (a.nodeName in wi)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
	else if (a.nodeName in xi) b.push(xi[a.nodeName]);
	else for (a = a.firstChild; a;) Ci(a, b, c),
		a = a.nextSibling
}
function Nh(a) {
	this.g = a || x.document || document
}
v = Nh.prototype;v.s = function(a) {
	return Oh(this.g, a)
};v.J = function(a, b, c) {
	return ai(this.g, arguments)
};
function Ei(a, b) {
	return bi(a.g, b)
}
function Fi(a) {
	a = a.g;
	return a.parentWindow || a.defaultView
}
v.appendChild = function(a, b) {
	a.appendChild(b)
};v.Qc = gi;v.Qh = ki;v.bg = li;v.contains = oi;v.ib = vi;v.Af = Bi;
function Gi(a, b) {
	b = a(b || Hi, void 0);
	a = Ei(Mh(), g);
	b = Ii(b);
	Se(a, b);
	1 == a.childNodes.length && (b = a.firstChild, 1 == b.nodeType && (a = b));
	return a
}
function Ii(a) {
	return zc(a) ? a instanceof Tg ? Ug(a) : we("zSoyz") : we(String(a))
}
var Hi = {};
function Ji(a) {
	return typeof a.className == t ? a.className: a.getAttribute && a.getAttribute("class") || ""
}
function Ki(a) {
	return a.classList ? a.classList: Ji(a).match(/\S+/g) || []
}
function Li(a, b) {
	typeof a.className == t ? a.className = b: a.setAttribute && a.setAttribute("class", b)
}
function Mi(a, b) {
	return a.classList ? a.classList.contains(b) : Vc(Ki(a), b)
}
function L(a, b) {
	if (a.classList) a.classList.add(b);
	else if (!Mi(a, b)) {
		var c = Ji(a);
		Li(a, c + (0 < c.length ? " " + b: b))
	}
}
function Ni(a, b) {
	if (a.classList) Pc(b,
		function(e) {
			L(a, e)
		});
	else {
		var c = {};
		Pc(Ki(a),
			function(e) {
				c[e] = !0
			});
		Pc(b,
			function(e) {
				c[e] = !0
			});
		b = "";
		for (var d in c) b += 0 < b.length ? " " + d: d;
		Li(a, b)
	}
}
function Oi(a, b) {
	a.classList ? a.classList.remove(b) : Mi(a, b) && Li(a, Qc(Ki(a),
		function(c) {
			return c != b
		}).join(" "))
}
function Pi(a, b) {
	a.classList ? Pc(b,
		function(c) {
			Oi(a, c)
		}) : Li(a, Qc(Ki(a),
			function(c) {
				return ! Vc(b, c)
			}).join(" "))
};
function Qi() {}
Qi.prototype.h = function() {};
function Ri(a, b, c, d) {
	this.top = a;
	this.right = b;
	this.bottom = c;
	this.left = d
}
v = Ri.prototype;v.contains = function(a) {
	return this && a ? a instanceof Ri ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom: a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom: !1
};v.ceil = function() {
	this.top = Math.ceil(this.top);
	this.right = Math.ceil(this.right);
	this.bottom = Math.ceil(this.bottom);
	this.left = Math.ceil(this.left);
	return this
};v.floor = function() {
	this.top = Math.floor(this.top);
	this.right = Math.floor(this.right);
	this.bottom = Math.floor(this.bottom);
	this.left = Math.floor(this.left);
	return this
};v.round = function() {
	this.top = Math.round(this.top);
	this.right = Math.round(this.right);
	this.bottom = Math.round(this.bottom);
	this.left = Math.round(this.left);
	return this
};v.translate = function(a, b) {
	a instanceof J ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, typeof b === Fb && (this.top += b, this.bottom += b));
	return this
};
function Si(a, b, c, d) {
	this.left = a;
	this.top = b;
	this.width = c;
	this.height = d
}
v = Si.prototype;v.contains = function(a) {
	return a instanceof J ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height: this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
};v.ceil = function() {
	this.left = Math.ceil(this.left);
	this.top = Math.ceil(this.top);
	this.width = Math.ceil(this.width);
	this.height = Math.ceil(this.height);
	return this
};v.floor = function() {
	this.left = Math.floor(this.left);
	this.top = Math.floor(this.top);
	this.width = Math.floor(this.width);
	this.height = Math.floor(this.height);
	return this
};v.round = function() {
	this.left = Math.round(this.left);
	this.top = Math.round(this.top);
	this.width = Math.round(this.width);
	this.height = Math.round(this.height);
	return this
};v.translate = function(a, b) {
	a instanceof J ? (this.left += a.x, this.top += a.y) : (this.left += a, typeof b === Fb && (this.top += b));
	return this
};
function M(a, b, c) {
	if (typeof b === t)(b = Ti(a, b)) && (a.style[b] = c);
	else for (var d in b) {
		c = a;
		var e = b[d],
			f = Ti(c, d);
		f && (c.style[f] = e)
	}
}
var Ui = {};
function Ti(a, b) {
	var c = Ui[b];
	if (!c) {
		var d = hf(b);
		c = d;
		void 0 === a.style[d] && (d = (F ? "Webkit": E ? "Moz": D ? "ms": pf ? "O": null) + jf(d), void 0 !== a.style[d] && (c = d));
		Ui[b] = c
	}
	return c
}
function Vi(a, b) {
	var c = K(a);
	return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "": ""
}
function Wi(a, b) {
	return Vi(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}
function Xi(a, b, c) {
	if (b instanceof J) {
		var d = b.x;
		b = b.y
	} else d = b,
		b = c;
	a.style.left = Yi(d);
	a.style.top = Yi(b)
}
function Zi(a) {
	a = a ? K(a) : document;
	return ! D || Hf(9) || Wh(Mh(a).g) ? a.documentElement: a.body
}
function $i(a) {
	try {
		return a.getBoundingClientRect()
	} catch(b) {
		return {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0
		}
	}
}
function aj(a) {
	if (D && !Hf(8)) return a.offsetParent;
	var b = K(a),
		c = Wi(a, Kb),
		d = "fixed" == c || c == za;
	for (a = a.parentNode; a && a != b; a = a.parentNode) if (11 == a.nodeType && a.host && (a = a.host), c = Wi(a, Kb), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || c == za || "relative" == c)) return a;
	return null
}
function bj(a) {
	for (var b = new Ri(0, Infinity, Infinity, 0), c = Mh(a), d = c.g.body, e = c.g.documentElement, f = Yh(c.g); a = aj(a);) if (! (D && 0 == a.clientWidth || F && 0 == a.clientHeight && a == d) && a != d && a != e && Wi(a, "overflow") != cc) {
		var h = cj(a),
			k = new J(a.clientLeft, a.clientTop);
		h.x += k.x;
		h.y += k.y;
		b.top = Math.max(b.top, h.y);
		b.right = Math.min(b.right, h.x + a.clientWidth);
		b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
		b.left = Math.max(b.left, h.x)
	}
	d = f.scrollLeft;
	f = f.scrollTop;
	b.left = Math.max(b.left, d);
	b.top = Math.max(b.top, f);
	c = Vh(Fi(c) || window);
	b.right = Math.min(b.right, d + c.width);
	b.bottom = Math.min(b.bottom, f + c.height);
	return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b: null
}
function cj(a) {
	var b = K(a),
		c = new J(0, 0),
		d = Zi(b);
	if (a == d) return c;
	a = $i(a);
	b = Xh(Mh(b).g);
	c.x = a.left + b.x;
	c.y = a.top + b.y;
	return c
}
function dj(a, b) {
	var c = new J(0, 0),
		d = Zh(K(a));
	if (!nf(d, "parent")) return c;
	do {
		if (d == b) var e = cj(a);
		else e = $i(a), e = new J(e.left, e.top);
		c.x += e.x;
		c.y += e.y
	} while ( d && d != b && d != d . parent && ( a = d . frameElement ) && (d = d.parent));
	return c
}
function Yi(a) {
	typeof a == Fb && (a += "px");
	return a
}
function ej(a) {
	var b = fj;
	if (Wi(a, "display") != r) return b(a);
	var c = a.style,
		d = c.display,
		e = c.visibility,
		f = c.position;
	c.visibility = qb;
	c.position = za;
	c.display = "inline";
	a = b(a);
	c.display = d;
	c.position = f;
	c.visibility = e;
	return a
}
function fj(a) {
	var b = a.offsetWidth,
		c = a.offsetHeight,
		d = F && !b && !c;
	return (void 0 === b || d) && a.getBoundingClientRect ? (a = $i(a), new Lh(a.right - a.left, a.bottom - a.top)) : new Lh(b, c)
}
function N(a, b) {
	a.style.display = b ? "": r
}
function gj(a, b) {
	b = Mh(b);
	var c = b.g;
	if (D && c.createStyleSheet) b = c.createStyleSheet(),
		hj(b, a);
	else {
		c = Rh(b.g, "HEAD", void 0, void 0)[0];
		if (!c) {
			var d = Rh(b.g, "BODY", void 0, void 0)[0];
			c = b.J("HEAD");
			d.parentNode.insertBefore(c, d)
		}
		d = b.J("STYLE");
		null === Ue && (Ue = He("style"));
		var e = Ue;
		e && d.setAttribute("nonce", e);
		hj(d, a);
		b.appendChild(c, d)
	}
}
function hj(a, b) {
	b = je(b);
	D && void 0 !== a.cssText ? a.cssText = b: x.trustedTypes ? vi(a, b) : a.innerHTML = b
}
function ij(a) {
	return Qb == Wi(a, Ya)
}
var jj = E ? "MozUserSelect": F || qf ? "WebkitUserSelect": null;
function kj(a, b, c) {
	c = c ? null: a.getElementsByTagName("*");
	if (jj) {
		if (b = b ? r: "", a.style && (a.style[jj] = b), c) {
			a = 0;
			for (var d; d = c[a]; a++) d.style && (d.style[jj] = b)
		}
	} else if (D || pf) if (b = b ? "on": "", a.setAttribute("unselectable", b), c) for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
}
function lj(a) {
	return new Lh(a.offsetWidth, a.offsetHeight)
}
function mj(a, b) {
	var c = K(a),
		d = Wh(Mh(c).g); ! D || H("10") || d && H("8") ? nj(a, b, "content-box") : (c = a.style, d ? (c.pixelWidth = b.width, c.pixelHeight = b.height) : (d = oj(a), a = pj(a), c.pixelWidth = b.width + a.left + d.left + d.right + a.right, c.pixelHeight = b.height + a.top + d.top + d.bottom + a.bottom))
}
function nj(a, b, c) {
	a = a.style;
	E ? a.MozBoxSizing = c: F ? a.WebkitBoxSizing = c: a.boxSizing = c;
	a.width = Math.max(b.width, 0) + "px";
	a.height = Math.max(b.height, 0) + "px"
}
function qj(a, b, c, d) {
	if (/^\d+px?$/.test(b)) return parseInt(b, 10);
	var e = a.style[c],
		f = a.runtimeStyle[c];
	a.runtimeStyle[c] = a.currentStyle[c];
	a.style[c] = b;
	b = a.style[d];
	a.style[c] = e;
	a.runtimeStyle[c] = f;
	return + b
}
function rj(a, b) {
	return (b = a.currentStyle ? a.currentStyle[b] : null) ? qj(a, b, "left", "pixelLeft") : 0
}
function oj(a) {
	if (D) {
		var b = rj(a, Ib),
			c = rj(a, Jb),
			d = rj(a, "paddingTop");
		a = rj(a, "paddingBottom");
		return new Ri(d, c, a, b)
	}
	b = Vi(a, Ib);
	c = Vi(a, Jb);
	d = Vi(a, "paddingTop");
	a = Vi(a, "paddingBottom");
	return new Ri(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}
var sj = {
	thin: 2,
	medium: 4,
	thick: 6
};
function tj(a, b) {
	if ((a.currentStyle ? a.currentStyle[b + "Style"] : null) == r) return 0;
	b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
	return b in sj ? sj[b] : qj(a, b, "left", "pixelLeft")
}
function pj(a) {
	if (D && !Hf(9)) {
		var b = tj(a, "borderLeft"),
			c = tj(a, "borderRight"),
			d = tj(a, "borderTop");
		a = tj(a, "borderBottom");
		return new Ri(d, c, a, b)
	}
	b = Vi(a, "borderLeftWidth");
	c = Vi(a, "borderRightWidth");
	d = Vi(a, "borderTopWidth");
	a = Vi(a, "borderBottomWidth");
	return new Ri(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
};
var uj = function() {
	if (uf) {
		var a = /Windows NT ([0-9.]+)/;
		return (a = a.exec(ke)) ? a[1] : "0"
	}
	return tf ? (a = /1[0|1][_.][0-9_.]+/, (a = a.exec(ke)) ? a[0].replace(/_/g, ".") : "10") : vf ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(ke)) ? a[1] : "") : wf || xf || yf ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(ke)) ? a[1].replace(/_/g, ".") : "") : ""
} ();
function vj(a) {
	return (a = a.exec(ke)) ? a[1] : ""
}
var wj = function() {
	if (Lf) return vj(/Firefox\/([0-9.]+)/);
	if (D || qf || pf) return Ff;
	if (Pf) return lf() ? vj(/CriOS\/([0-9.]+)/) : vj(/Chrome\/([0-9.]+)/);
	if (Qf && !lf()) return vj(/Version\/([0-9.]+)/);
	if (Mf || Nf) {
		var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(ke);
		if (a) return a[1] + "." + a[2]
	} else if (Of) return (a = vj(/Android\s+([0-9.]+)/)) ? a: vj(/Version\/([0-9.]+)/);
	return ""
} ();
function xj(a, b, c, d, e, f, h, k, l) {
	var m = yj(c);
	var n = cj(a);
	var q = ej(a);
	n = new Si(n.x, n.y, q.width, q.height);
	if (q = bj(a)) {
		var u = new Si(q.left, q.top, q.right - q.left, q.bottom - q.top);
		q = Math.max(n.left, u.left);
		var z = Math.min(n.left + n.width, u.left + u.width);
		if (q <= z) {
			var G = Math.max(n.top, u.top);
			u = Math.min(n.top + n.height, u.top + u.height);
			G <= u && (n.left = q, n.top = G, n.width = z - q, n.height = u - G)
		}
	}
	q = Mh(a);
	G = Mh(c);
	q.g != G.g && (z = q.g.body, G = dj(z, Fi(G)), G = Kh(G, cj(z)), !D || Hf(9) || Wh(q.g) || (G = Kh(G, Xh(q.g))), n.left += G.x, n.top += G.y);
	a = zj(a, b);
	b = n.left;
	a & 4 ? b += n.width: a & 2 && (b += n.width / 2);
	b = new J(b, n.top + (a & 1 ? n.height: 0));
	b = Kh(b, m);
	e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
	if (h) if (l) var U = l;
	else if (U = bj(c)) U.top -= m.y,
		U.right -= m.x,
		U.bottom -= m.y,
		U.left -= m.x;
	return Aj(b, c, d, f, U, h, k)
}
function yj(a) {
	if (a = a.offsetParent) {
		var b = "HTML" == a.tagName || "BODY" == a.tagName;
		if (!b || "static" != Wi(a, Kb)) {
			var c = cj(a);
			if (!b) {
				b = ij(a);
				var d;
				if (d = b) {
					d = Qf && 0 <= Ld(wj, 10);
					var e;
					if (e = zf) e = 0 <= Ld(uj, 10);
					var f = Pf && 0 <= Ld(wj, 85);
					d = E || d || e || f
				}
				b = d ? -a.scrollLeft: !b || rf && H("8") || Wi(a, "overflowX") == cc ? a.scrollLeft: a.scrollWidth - a.clientWidth - a.scrollLeft;
				c = Kh(c, new J(b, a.scrollTop))
			}
		}
	}
	return c || new J
}
function Aj(a, b, c, d, e, f, h) {
	a = Jh(a);
	var k = zj(b, c);
	c = ej(b);
	h = h ? new Lh(h.width, h.height) : new Lh(c.width, c.height);
	a = Jh(a);
	h = new Lh(h.width, h.height);
	var l = 0;
	if (d || 0 != k) k & 4 ? a.x -= h.width + (d ? d.right: 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left),
		k & 1 ? a.y -= h.height + (d ? d.bottom: 0) : d && (a.y += d.top);
	if (f) {
		if (e) {
			d = a;
			k = h;
			l = 0;
			65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
			132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
			d.x < e.left && f & 1 && (d.x = e.left, l |= 1);
			if (f & 16) {
				var m = d.x;
				d.x < e.left && (d.x = e.left, l |= 4);
				d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, m + k.width - e.left), k.width = Math.max(k.width, 0), l |= 4)
			}
			d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
			f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
			d.y < e.top && f & 4 && (d.y = e.top, l |= 2);
			f & 32 && (m = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
			d.y + k.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
			f & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
			e = l
		} else e = 256;
		l = e
	}
	f = new Si(0, 0, 0, 0);
	f.left = a.x;
	f.top = a.y;
	f.width = h.width;
	f.height = h.height;
	e = l;
	if (e & 496) return e;
	Xi(b, new J(f.left, f.top));
	h = new Lh(f.width, f.height);
	c == h || c && h && c.width == h.width && c.height == h.height || (c = h, h = K(b), a = Wh(Mh(h).g), !D || H("10") || a && H("8") ? nj(b, c, Ka) : (h = b.style, a ? (a = oj(b), b = pj(b), h.pixelWidth = c.width - b.left - a.left - a.right - b.right, h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = c.width, h.pixelHeight = c.height)));
	return e
}
function zj(a, b) {
	return (b & 8 && ij(a) ? b ^ 4 : b) & -9
};
var Bj;
function Cj(a, b) {
	b ? a.setAttribute("role", b) : a.removeAttribute("role")
}
function Dj(a, b, c) {
	Array.isArray(c) && (c = c.join(" "));
	var d = "aria-" + b;
	"" === c || void 0 == c ? (Bj || (Bj = {
		atomic: !1,
		autocomplete: r,
		dropeffect: r,
		haspopup: !1,
		live: "off",
		multiline: !1,
		multiselectable: !1,
		orientation: bc,
		readonly: !1,
		relevant: "additions text",
		required: !1,
		sort: r,
		busy: !1,
		disabled: !1,
		hidden: !1,
		invalid: "false"
	}), c = Bj, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
};
function Ej(a) {
	a && typeof a.P == p && a.P()
};
function O() {
	this.va = this.va;
	this.Oa = this.Oa
}
O.prototype.va = !1;O.prototype.P = function() {
	this.va || (this.va = !0, this.L())
};
function Fj(a, b) {
	a.va ? b() : (a.Oa || (a.Oa = []), a.Oa.push(b))
}
O.prototype.L = function() {
	if (this.Oa) for (; this.Oa.length;) this.Oa.shift()()
};
function Gj(a, b) {
	this.type = a;
	this.currentTarget = this.target = b;
	this.defaultPrevented = this.j = !1
}
Gj.prototype.stopPropagation = function() {
	this.j = !0
};Gj.prototype.g = function() {
	this.defaultPrevented = !0
};
var Hj = function() {
	if (!x.addEventListener || !Object.defineProperty) return ! 1;
	var a = !1,
		b = Object.defineProperty({},
			"passive", {
				get: function() {
					a = !0
				}
			});
	try {
		x.addEventListener("test", y, b),
			x.removeEventListener("test", y, b)
	} catch(c) {}
	return a
} ();
var Ij = {
	Zb: Ab,
	$b: "mouseup",
	yc: "mousecancel",
	Dj: Bb,
	Fj: Db,
	Ej: Cb,
	Bj: "mouseenter",
	Cj: "mouseleave"
};
function Jj(a, b) {
	Gj.call(this, a ? a.type: "");
	this.relatedTarget = this.currentTarget = this.target = null;
	this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
	this.key = "";
	this.keyCode = 0;
	this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
	this.state = null;
	this.l = !1;
	this.pointerId = 0;
	this.pointerType = "";
	this.h = null;
	if (a) {
		var c = this.type = a.type,
			d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
		this.target = a.target || a.srcElement;
		this.currentTarget = b; (b = a.relatedTarget) ? E && (nf(b, "nodeName") || (b = null)) : c == Db ? b = a.fromElement: c == Cb && (b = a.toElement);
		this.relatedTarget = b;
		d ? (this.clientX = void 0 !== d.clientX ? d.clientX: d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY: d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX: a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY: a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
		this.button = a.button;
		this.keyCode = a.keyCode || 0;
		this.key = a.key || "";
		this.ctrlKey = a.ctrlKey;
		this.altKey = a.altKey;
		this.shiftKey = a.shiftKey;
		this.metaKey = a.metaKey;
		this.l = tf ? a.metaKey: a.ctrlKey;
		this.pointerId = a.pointerId || 0;
		this.pointerType = typeof a.pointerType === t ? a.pointerType: Kj[a.pointerType] || "";
		this.state = a.state;
		this.h = a;
		a.defaultPrevented && Jj.G.g.call(this)
	}
}
B(Jj, Gj);
var Kj = {
	2 : "touch",
	3 : "pen",
	4 : "mouse"
};Jj.prototype.stopPropagation = function() {
	Jj.G.stopPropagation.call(this);
	this.h.stopPropagation ? this.h.stopPropagation() : this.h.cancelBubble = !0
};Jj.prototype.g = function() {
	Jj.G.g.call(this);
	var a = this.h;
	a.preventDefault ? a.preventDefault() : a.returnValue = !1
};
var Lj = "closure_listenable_" + (1E6 * Math.random() | 0);
function Mj(a) {
	return ! (!a || !a[Lj])
};
var Nj = 0;
function Oj(a, b, c, d, e) {
	this.listener = a;
	this.g = null;
	this.src = b;
	this.type = c;
	this.capture = !!d;
	this.Dd = e;
	this.key = ++Nj;
	this.pc = this.kd = !1
}
function Pj(a) {
	a.pc = !0;
	a.listener = null;
	a.g = null;
	a.src = null;
	a.Dd = null
};
function Qj(a) {
	this.src = a;
	this.g = {};
	this.h = 0
}
Qj.prototype.add = function(a, b, c, d, e) {
	var f = a.toString();
	a = this.g[f];
	a || (a = this.g[f] = [], this.h++);
	var h = Rj(a, b, d, e); - 1 < h ? (b = a[h], c || (b.kd = !1)) : (b = new Oj(b, this.src, f, !!d, e), b.kd = c, a.push(b));
	return b
};Qj.prototype.remove = function(a, b, c, d) {
	a = a.toString();
	if (! (a in this.g)) return ! 1;
	var e = this.g[a];
	b = Rj(e, b, c, d);
	return - 1 < b ? (Pj(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.g[a], this.h--), !0) : !1
};
function Sj(a, b) {
	var c = b.type;
	if (! (c in a.g)) return ! 1;
	var d = Wc(a.g[c], b);
	d && (Pj(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
	return d
}
function Tj(a, b) {
	b = b && b.toString();
	var c = 0,
		d;
	for (d in a.g) if (!b || d == b) {
		for (var e = a.g[d], f = 0; f < e.length; f++)++c,
			Pj(e[f]);
		delete a.g[d];
		a.h--
	}
	return c
}
Qj.prototype.Lc = function(a, b, c, d) {
	a = this.g[a.toString()];
	var e = -1;
	a && (e = Rj(a, b, c, d));
	return - 1 < e ? a[e] : null
};Qj.prototype.hasListener = function(a, b) {
	var c = void 0 !== a,
		d = c ? a.toString() : "",
		e = void 0 !== b;
	return cd(this.g,
		function(f) {
			for (var h = 0; h < f.length; ++h) if (! (c && f[h].type != d || e && f[h].capture != b)) return ! 0;
			return ! 1
		})
};
function Rj(a, b, c, d) {
	for (var e = 0; e < a.length; ++e) {
		var f = a[e];
		if (!f.pc && f.listener == b && f.capture == !!c && f.Dd == d) return e
	}
	return - 1
};
var Uj = "closure_lm_" + (1E6 * Math.random() | 0), Vj = {},
	Wj = 0;
function P(a, b, c, d, e) {
	if (d && d.once) return Xj(a, b, c, d, e);
	if (Array.isArray(b)) {
		for (var f = 0; f < b.length; f++) P(a, b[f], c, d, e);
		return null
	}
	c = Yj(c);
	return Mj(a) ? a.D(b, c, zc(d) ? !!d.capture: !!d, e) : Zj(a, b, c, !1, d, e)
}
function Zj(a, b, c, d, e, f) {
	if (!b) throw Error("Invalid event type");
	var h = zc(e) ? !!e.capture: !!e,
		k = ak(a);
	k || (a[Uj] = k = new Qj(a));
	c = k.add(b, c, d, h, f);
	if (c.g) return c;
	d = bk();
	c.g = d;
	d.src = a;
	d.listener = c;
	if (a.addEventListener) Hj || (e = h),
		void 0 === e && (e = !1),
		a.addEventListener(b.toString(), d, e);
	else if (a.attachEvent) a.attachEvent(ck(b.toString()), d);
	else if (a.addListener && a.removeListener) a.addListener(d);
	else throw Error("addEventListener and attachEvent are unavailable.");
	Wj++;
	return c
}
function bk() {
	function a(c) {
		return b.call(a.src, a.listener, c)
	}
	var b = dk;
	return a
}
function Xj(a, b, c, d, e) {
	if (Array.isArray(b)) {
		for (var f = 0; f < b.length; f++) Xj(a, b[f], c, d, e);
		return null
	}
	c = Yj(c);
	return Mj(a) ? a.Db(b, c, zc(d) ? !!d.capture: !!d, e) : Zj(a, b, c, !0, d, e)
}
function ek(a, b, c, d, e) {
	if (Array.isArray(b)) for (var f = 0; f < b.length; f++) ek(a, b[f], c, d, e);
	else d = zc(d) ? !!d.capture: !!d,
		c = Yj(c),
		Mj(a) ? a.ga(b, c, d, e) : a && (a = ak(a)) && (b = a.Lc(b, c, d, e)) && fk(b)
}
function fk(a) {
	if (typeof a === Fb || !a || a.pc) return ! 1;
	var b = a.src;
	if (Mj(b)) return Sj(b.Ma, a);
	var c = a.type,
		d = a.g;
	b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ck(c), d) : b.addListener && b.removeListener && b.removeListener(d);
	Wj--; (c = ak(b)) ? (Sj(c, a), 0 == c.h && (c.src = null, b[Uj] = null)) : Pj(a);
	return ! 0
}
function gk(a, b) {
	if (!a) return 0;
	if (Mj(a)) return a.Ma ? Tj(a.Ma, b) : 0;
	a = ak(a);
	if (!a) return 0;
	var c = 0;
	b = b && b.toString();
	for (var d in a.g) if (!b || d == b) for (var e = a.g[d].concat(), f = 0; f < e.length; ++f) fk(e[f]) && ++c;
	return c
}
function ck(a) {
	return a in Vj ? Vj[a] : Vj[a] = "on" + a
}
function hk(a, b) {
	var c = a.listener,
		d = a.Dd || a.src;
	a.kd && fk(a);
	return c.call(d, b)
}
function dk(a, b) {
	return a.pc ? !0 : hk(a, new Jj(b, this))
}
function ak(a) {
	a = a[Uj];
	return a instanceof Qj ? a: null
}
var ik = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Yj(a) {
	if (typeof a === p) return a;
	a[ik] || (a[ik] = function(b) {
		return a.handleEvent(b)
	});
	return a[ik]
};
function Q() {
	O.call(this);
	this.Ma = new Qj(this);
	this.Dh = this;
	this.bf = null
}
B(Q, O);Q.prototype[Lj] = !0;v = Q.prototype;v.rd = function() {
	return this.bf
};v.kf = function(a) {
	this.bf = a
};v.addEventListener = function(a, b, c, d) {
	P(this, a, b, c, d)
};v.removeEventListener = function(a, b, c, d) {
	ek(this, a, b, c, d)
};v.dispatchEvent = function(a) {
	var b = this.rd();
	if (b) {
		var c = [];
		for (var d = 1; b; b = b.rd()) c.push(b),
			++d
	}
	b = this.Dh;
	d = a.type || a;
	if (typeof a === t) a = new Gj(a, b);
	else if (a instanceof Gj) a.target = a.target || b;
	else {
		var e = a;
		a = new Gj(d, b);
		kd(a, e)
	}
	e = !0;
	if (c) for (var f = c.length - 1; ! a.j && 0 <= f; f--) {
		var h = a.currentTarget = c[f];
		e = jk(h, d, !0, a) && e
	}
	a.j || (h = a.currentTarget = b, e = jk(h, d, !0, a) && e, a.j || (e = jk(h, d, !1, a) && e));
	if (c) for (f = 0; ! a.j && f < c.length; f++) h = a.currentTarget = c[f],
		e = jk(h, d, !1, a) && e;
	return e
};v.L = function() {
	Q.G.L.call(this);
	this.Ma && Tj(this.Ma, void 0);
	this.bf = null
};v.D = function(a, b, c, d) {
	return this.Ma.add(String(a), b, !1, c, d)
};v.Db = function(a, b, c, d) {
	return this.Ma.add(String(a), b, !0, c, d)
};v.ga = function(a, b, c, d) {
	return this.Ma.remove(String(a), b, c, d)
};
function jk(a, b, c, d) {
	b = a.Ma.g[String(b)];
	if (!b) return ! 0;
	b = b.concat();
	for (var e = !0,
		f = 0; f < b.length; ++f) {
		var h = b[f];
		if (h && !h.pc && h.capture == c) {
			var k = h.listener,
				l = h.Dd || h.src;
			h.kd && Sj(a.Ma, h);
			e = !1 !== k.call(l, d) && e
		}
	}
	return e && !d.defaultPrevented
}
v.Lc = function(a, b, c, d) {
	return this.Ma.Lc(String(a), b, c, d)
};v.hasListener = function(a, b) {
	return this.Ma.hasListener(void 0 !== a ? String(a) : void 0, b)
};
function kk(a, b) {
	this.l = a;
	this.j = b;
	this.h = 0;
	this.g = null
}
kk.prototype.get = function() {
	if (0 < this.h) {
		this.h--;
		var a = this.g;
		this.g = a.next;
		a.next = null
	} else a = this.l();
	return a
};
function lk(a, b) {
	a.j(b);
	100 > a.h && (a.h++, b.next = a.g, a.g = b)
};
var mk;
function nk() {
	var a = x.MessageChannel;
	"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !C("Presto") && (a = function() {
		var e = bi(document, ma);
		e.style.display = r;
		document.documentElement.appendChild(e);
		var f = e.contentWindow;
		e = f.document;
		e.open();
		e.close();
		var h = "callImmediate" + Math.random(),
			k = "file:" == f.location.protocol ? "*": f.location.protocol + "//" + f.location.host;
		e = A(function(l) {
			if (("*" == k || l.origin == k) && l.data == h) this.port1.onmessage()
		},
			this);
		f.addEventListener("message", e, !1);
		this.port1 = {};
		this.port2 = {
			postMessage: function() {
				f.postMessage(h, k)
			}
		}
	});
	if ("undefined" !== typeof a && !oe()) {
		var b = new a,
			c = {},
			d = c;
		b.port1.onmessage = function() {
			if (void 0 !== c.next) {
				c = c.next;
				var e = c.Sf;
				c.Sf = null;
				e()
			}
		};
		return function(e) {
			d.next = {
				Sf: e
			};
			d = d.next;
			b.port2.postMessage(0)
		}
	}
	return function(e) {
		x.setTimeout(e, 0)
	}
};
function ok(a) {
	x.setTimeout(function() {
		throw a;
	},
		0)
};
function pk() {
	this.h = this.g = null
}
pk.prototype.add = function(a, b) {
	var c = qk.get();
	c.set(a, b);
	this.h ? this.h.next = c: this.g = c;
	this.h = c
};pk.prototype.remove = function() {
	var a = null;
	this.g && (a = this.g, this.g = this.g.next, this.g || (this.h = null), a.next = null);
	return a
};
var qk = new kk(function() {
	return new rk
},
	function(a) {
		return a.reset()
	});
function rk() {
	this.next = this.g = this.h = null
}
rk.prototype.set = function(a, b) {
	this.h = a;
	this.g = b;
	this.next = null
};rk.prototype.reset = function() {
	this.next = this.g = this.h = null
};
function sk(a, b) {
	tk || uk();
	vk || (tk(), vk = !0);
	wk.add(a, b)
}
var tk;
function uk() {
	if (x.Promise && x.Promise.resolve) {
		var a = x.Promise.resolve(void 0);
		tk = function() {
			a.then(xk)
		}
	} else tk = function() {
		var b = xk;
		typeof x.setImmediate !== p || x.Window && x.Window.prototype && !C(ka) && x.Window.prototype.setImmediate == x.setImmediate ? (mk || (mk = nk()), mk(b)) : x.setImmediate(b)
	}
}
var vk = !1,
	wk = new pk;
function xk() {
	for (var a; a = wk.remove();) {
		try {
			a.h.call(a.g)
		} catch(b) {
			ok(b)
		}
		lk(qk, a)
	}
	vk = !1
};
function yk(a, b) {
	this.g = 0;
	this.A = void 0;
	this.l = this.h = this.j = null;
	this.m = this.o = !1;
	if (a != y) try {
		var c = this;
		a.call(b,
			function(d) {
				zk(c, 2, d)
			},
			function(d) {
				zk(c, 3, d)
			})
	} catch(d) {
		zk(this, 3, d)
	}
}
function Ak() {
	this.next = this.j = this.h = this.l = this.g = null;
	this.m = !1
}
Ak.prototype.reset = function() {
	this.j = this.h = this.l = this.g = null;
	this.m = !1
};
var Bk = new kk(function() {
	return new Ak
},
	function(a) {
		a.reset()
	});
function Ck(a, b, c) {
	var d = Bk.get();
	d.l = a;
	d.h = b;
	d.j = c;
	return d
}
function Dk(a) {
	if (a instanceof yk) return a;
	var b = new yk(y);
	zk(b, 2, a);
	return b
}
function Ek() {
	var a = Fk[5];
	return new yk(function(b, c) {
		c(a)
	})
}
function Gk() {
	var a, b, c = new yk(function(d, e) {
		a = d;
		b = e
	});
	return new Hk(c, a, b)
}
yk.prototype.then = function(a, b, c) {
	return Ik(this, typeof a === p ? a: null, typeof b === p ? b: null, c)
};yk.prototype.$goog_Thenable = !0;yk.prototype.cancel = function(a) {
	if (0 == this.g) {
		var b = new Jk(a);
		sk(function() {
			Kk(this, b)
		},
			this)
	}
};
function Kk(a, b) {
	if (0 == a.g) if (a.j) {
		var c = a.j;
		if (c.h) {
			for (var d = 0,
				e = null,
				f = null,
				h = c.h; h && (h.m || (d++, h.g == a && (e = h), !(e && 1 < d))); h = h.next) e || (f = h);
			e && (0 == c.g && 1 == d ? Kk(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : Lk(c), Mk(c, e, 3, b)))
		}
		a.j = null
	} else zk(a, 3, b)
}
function Nk(a, b) {
	a.h || 2 != a.g && 3 != a.g || Ok(a);
	a.l ? a.l.next = b: a.h = b;
	a.l = b
}
function Ik(a, b, c, d) {
	var e = Ck(null, null, null);
	e.g = new yk(function(f, h) {
		e.l = b ?
			function(k) {
				try {
					var l = b.call(d, k);
					f(l)
				} catch(m) {
					h(m)
				}
			}: f;
		e.h = c ?
			function(k) {
				try {
					var l = c.call(d, k);
					void 0 === l && k instanceof Jk ? h(k) : f(l)
				} catch(m) {
					h(m)
				}
			}: h
	});
	e.g.j = a;
	Nk(a, e);
	return e.g
}
yk.prototype.B = function(a) {
	this.g = 0;
	zk(this, 2, a)
};yk.prototype.H = function(a) {
	this.g = 0;
	zk(this, 3, a)
};
function zk(a, b, c) {
	if (0 == a.g) {
		a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
		a.g = 1;
		a: {
			var d = c,
				e = a.B,
				f = a.H;
			if (d instanceof yk) {
				Nk(d, Ck(e || y, f || null, a));
				var h = !0
			} else {
				if (d) try {
					var k = !!d.$goog_Thenable
				} catch(m) {
					k = !1
				} else k = !1;
				if (k) d.then(e, f, a),
					h = !0;
				else {
					if (zc(d)) try {
						var l = d.then;
						if (typeof l === p) {
							Pk(d, l, e, f, a);
							h = !0;
							break a
						}
					} catch(m) {
						f.call(a, m);
						h = !0;
						break a
					}
					h = !1
				}
			}
		}
		h || (a.A = c, a.g = b, a.j = null, Ok(a), 3 != b || c instanceof Jk || Qk(a, c))
	}
}
function Pk(a, b, c, d, e) {
	function f(l) {
		k || (k = !0, d.call(e, l))
	}
	function h(l) {
		k || (k = !0, c.call(e, l))
	}
	var k = !1;
	try {
		b.call(a, h, f)
	} catch(l) {
		f(l)
	}
}
function Ok(a) {
	a.o || (a.o = !0, sk(a.C, a))
}
function Lk(a) {
	var b = null;
	a.h && (b = a.h, a.h = b.next, b.next = null);
	a.h || (a.l = null);
	return b
}
yk.prototype.C = function() {
	for (var a; a = Lk(this);) Mk(this, a, this.g, this.A);
	this.o = !1
};
function Mk(a, b, c, d) {
	if (3 == c && b.h && !b.m) for (; a && a.m; a = a.j) a.m = !1;
	if (b.g) b.g.j = null,
		Rk(b, c, d);
	else try {
		b.m ? b.l.call(b.j) : Rk(b, c, d)
	} catch(e) {
		Sk.call(null, e)
	}
	lk(Bk, b)
}
function Rk(a, b, c) {
	2 == b ? a.l.call(a.j, c) : a.h && a.h.call(a.j, c)
}
function Qk(a, b) {
	a.m = !0;
	sk(function() {
		a.m && Sk.call(null, b)
	})
}
var Sk = ok;
function Jk(a) {
	Jc.call(this, a)
}
B(Jk, Jc);Jk.prototype.name = "cancel";
function Hk(a, b, c) {
	this.promise = a;
	this.h = b;
	this.g = c
};
function Tk(a, b, c) {
	if (typeof a === p) c && (a = A(a, c));
	else if (a && typeof a.handleEvent == p) a = A(a.handleEvent, a);
	else throw Error("Invalid listener argument");
	return 2147483647 < Number(b) ? -1 : x.setTimeout(a, b || 0)
}
function Uk(a) {
	x.clearTimeout(a)
};
function Vk(a, b, c) {
	O.call(this);
	this.h = a;
	this.l = b || 0;
	this.j = c;
	this.g = A(this.bh, this)
}
B(Vk, O);v = Vk.prototype;v.Vb = 0;v.L = function() {
	Vk.G.L.call(this);
	this.stop();
	delete this.h;
	delete this.j
};v.start = function(a) {
	this.stop();
	this.Vb = Tk(this.g, void 0 !== a ? a: this.l)
};v.stop = function() {
	0 != this.Vb && Uk(this.Vb);
	this.Vb = 0
};v.bh = function() {
	this.Vb = 0;
	this.h && this.h.call(this.j)
};
function Wk(a) {
	O.call(this);
	this.h = a;
	this.g = {}
}
B(Wk, O);
var Xk = [];v = Wk.prototype;v.D = function(a, b, c, d) {
	return Yk(this, a, b, c, d)
};
function Zk(a, b, c, d) {
	Yk(a, b, Sa, c, !1, d)
}
function Yk(a, b, c, d, e, f) {
	Array.isArray(c) || (c && (Xk[0] = c.toString()), c = Xk);
	for (var h = 0; h < c.length; h++) {
		var k = P(b, c[h], d || a.handleEvent, e || !1, f || a.h || a);
		if (!k) break;
		a.g[k.key] = k
	}
	return a
}
v.Db = function(a, b, c, d) {
	return $k(this, a, b, c, d)
};
function $k(a, b, c, d, e, f) {
	if (Array.isArray(c)) for (var h = 0; h < c.length; h++) $k(a, b, c[h], d, e, f);
	else {
		b = Xj(b, c, d || a.handleEvent, e, f || a.h || a);
		if (!b) return a;
		a.g[b.key] = b
	}
	return a
}
v.ga = function(a, b, c, d, e) {
	if (Array.isArray(b)) for (var f = 0; f < b.length; f++) this.ga(a, b[f], c, d, e);
	else c = c || this.handleEvent,
		d = zc(d) ? !!d.capture: !!d,
		e = e || this.h || this,
		c = Yj(c),
		d = !!d,
		b = Mj(a) ? a.Lc(b, c, d, e) : a ? (a = ak(a)) ? a.Lc(b, c, d, e) : null: null,
		b && (fk(b), delete this.g[b.key]);
	return this
};
function al(a) {
	bd(a.g,
		function(b, c) {
			this.g.hasOwnProperty(c) && fk(b)
		},
		a);
	a.g = {}
}
v.L = function() {
	Wk.G.L.call(this);
	al(this)
};v.handleEvent = function() {
	throw Error("EventHandler.handleEvent not implemented");
};
function bl(a) {
	if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return ! 1;
	if (cl(a.keyCode)) return ! 0;
	switch (a.keyCode) {
		case 18:
		case 20:
		case 93:
		case 17:
		case 40:
		case 35:
		case 27:
		case 36:
		case 45:
		case 37:
		case 224:
		case 91:
		case 144:
		case 12:
		case 34:
		case 33:
		case 19:
		case 255:
		case 44:
		case 39:
		case 145:
		case 16:
		case 38:
		case 252:
		case 224:
		case 92:
			return ! 1;
		case 0:
			return ! E;
		default:
			return 166 > a.keyCode || 183 < a.keyCode
	}
}
function dl(a, b, c, d, e, f) {
	if (F && !H("525")) return ! 0;
	if (tf && e) return cl(a);
	if (e && !d) return ! 1;
	if (!E) {
		typeof b === Fb && (b = el(b));
		var h = 17 == b || 18 == b || tf && 91 == b;
		if ((!c || tf) && h || tf && 16 == b && (d || f)) return ! 1
	}
	if ((F || qf) && d && c) switch (a) {
		case 220:
		case 219:
		case 221:
		case 192:
		case 186:
		case 189:
		case 187:
		case 188:
		case 190:
		case 191:
		case 192:
		case 222:
			return ! 1
	}
	if (D && d && b == a) return ! 1;
	switch (a) {
		case 13:
			return E ? f || e ? !1 : !(c && d) : !0;
		case 27:
			return ! (F || qf || E)
	}
	return E && (d || e || f) ? !1 : cl(a)
}
function cl(a) {
	if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (F || qf) && 0 == a) return ! 0;
	switch (a) {
		case 32:
		case 43:
		case 63:
		case 64:
		case 107:
		case 109:
		case 110:
		case 111:
		case 186:
		case 59:
		case 189:
		case 187:
		case 61:
		case 188:
		case 190:
		case 191:
		case 192:
		case 222:
		case 219:
		case 220:
		case 221:
		case 163:
		case 58:
			return ! 0;
		case 173:
			return E;
		default:
			return ! 1
	}
}
function el(a) {
	if (E) a = fl(a);
	else if (tf && F) switch (a) {
		case 93:
			a = 91
	}
	return a
}
function fl(a) {
	switch (a) {
		case 61:
			return 187;
		case 59:
			return 186;
		case 173:
			return 189;
		case 224:
			return 91;
		case 0:
			return 224;
		default:
			return a
	}
};
function gl(a, b, c, d) {
	Jj.call(this, d);
	this.type = "key";
	this.keyCode = a;
	this.repeat = c
}
B(gl, Jj);
function hl(a, b) {
	Q.call(this);
	a && il(this, a, b)
}
B(hl, Q);v = hl.prototype;v.F = null;v.Gd = null;v.Ne = null;v.Hd = null;v.Fa = -1;v.hb = -1;v.ne = !1;
var jl = {
	3 : 13,
	12 : 144,
	63232 : 38,
	63233 : 40,
	63234 : 37,
	63235 : 39,
	63236 : 112,
	63237 : 113,
	63238 : 114,
	63239 : 115,
	63240 : 116,
	63241 : 117,
	63242 : 118,
	63243 : 119,
	63244 : 120,
	63245 : 121,
	63246 : 122,
	63247 : 123,
	63248 : 44,
	63272 : 46,
	63273 : 36,
	63275 : 35,
	63276 : 33,
	63277 : 34,
	63289 : 144,
	63302 : 45
},
	kl = {
		Up: 38,
		Down: 40,
		Left: 37,
		Right: 39,
		Enter: 13,
		F1: 112,
		F2: 113,
		F3: 114,
		F4: 115,
		F5: 116,
		F6: 117,
		F7: 118,
		F8: 119,
		F9: 120,
		F10: 121,
		F11: 122,
		F12: 123,
		"U+007F": 46,
		Home: 36,
		End: 35,
		PageUp: 33,
		PageDown: 34,
		Insert: 45
	},
	ll = !F || H("525"), ml = tf && E;v = hl.prototype;v.gi = function(a) {
		if (F || qf) if (17 == this.Fa && !a.ctrlKey || 18 == this.Fa && !a.altKey || tf && 91 == this.Fa && !a.metaKey) this.hb = this.Fa = -1; - 1 == this.Fa && (a.ctrlKey && 17 != a.keyCode ? this.Fa = 17 : a.altKey && 18 != a.keyCode ? this.Fa = 18 : a.metaKey && 91 != a.keyCode && (this.Fa = 91));
		ll && !dl(a.keyCode, this.Fa, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.hb = el(a.keyCode), ml && (this.ne = a.altKey))
	};v.hi = function(a) {
		this.hb = this.Fa = -1;
		this.ne = a.altKey
	};v.handleEvent = function(a) {
		var b = a.h,
			c = b.altKey;
		if (D && a.type == yb) {
			var d = this.hb;
			var e = 13 != d && 27 != d ? b.keyCode: 0
		} else(F || qf) && a.type == yb ? (d = this.hb, e = 0 <= b.charCode && 63232 > b.charCode && cl(d) ? b.charCode: 0) : pf && !F ? (d = this.hb, e = cl(d) ? b.keyCode: 0) : (a.type == yb ? (ml && (c = this.ne), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.hb, e = b.charCode) : (d = b.keyCode || this.hb, e = b.charCode || 0)) : (d = b.keyCode || this.hb, e = b.charCode || 0), tf && 63 == e && 224 == d && (d = 191));
		var f = d = el(d);
		d ? 63232 <= d && d in jl ? f = jl[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in kl && (f = kl[b.keyIdentifier]);
		E && ll && a.type == yb && !dl(f, this.Fa, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.Fa, this.Fa = f, b = new gl(f, e, a, b), b.altKey = c, this.dispatchEvent(b))
	};v.s = function() {
		return this.F
	};
function il(a, b, c) {
	a.Hd && nl(a);
	a.F = b;
	a.Gd = P(a.F, yb, a, c);
	a.Ne = P(a.F, xb, a.gi, c, a);
	a.Hd = P(a.F, "keyup", a.hi, c, a)
}
function nl(a) {
	a.Gd && (fk(a.Gd), fk(a.Ne), fk(a.Hd), a.Gd = null, a.Ne = null, a.Hd = null);
	a.F = null;
	a.Fa = -1;
	a.hb = -1
}
v.L = function() {
	hl.G.L.call(this);
	nl(this)
};
function ol() {}
wc(ol);ol.prototype.g = 0;
function R(a) {
	Q.call(this);
	this.h = a || Mh();
	this.ta = pl;
	this.S = null;
	this.Z = !1;
	this.F = null;
	this.O = void 0;
	this.M = this.C = this.H = this.Sa = null;
	this.Cb = !1
}
B(R, Q);R.prototype.Ub = ol.ca();
var pl = null;
function ql(a, b) {
	switch (a) {
		case 1:
			return b ? "disable": "enable";
		case 2:
			return b ? "highlight": "unhighlight";
		case 4:
			return b ? "activate": "deactivate";
		case 8:
			return b ? "select": "unselect";
		case 16:
			return b ? "check": "uncheck";
		case 32:
			return b ? cb: Ja;
		case 64:
			return b ? "open": "close"
	}
	throw Error("Invalid component state");
}
function rl(a) {
	return a.S || (a.S = ":" + (a.Ub.g++).toString(36))
}
function sl(a, b) {
	if (a.H && a.H.M) {
		var c = a.H.M,
			d = a.S;
		d in c && delete c[d];
		hd(a.H.M, b, a)
	}
	a.S = b
}
v = R.prototype;v.s = function() {
	return this.F
};
function tl(a, b) {
	return a.F ? Sh(b, a.F || a.h.g) : null
}
function S(a) {
	a.O || (a.O = new Wk(a));
	return a.O
}
function ul(a, b) {
	if (a == b) throw Error(va);
	if (b && a.H && a.S && vl(a.H, a.S) && a.H != b) throw Error(va);
	a.H = b;
	R.G.kf.call(a, b)
}
v.xb = function() {
	return this.H
};v.kf = function(a) {
	if (this.H && this.H != a) throw Error("Method not supported");
	R.G.kf.call(this, a)
};v.J = function() {
	this.F = Ei(this.h, g)
};v.ka = function(a) {
	wl(this, a)
};
function wl(a, b, c) {
	if (a.Z) throw Error(ja);
	a.F || a.J();
	b ? b.insertBefore(a.F, c || null) : a.h.g.body.appendChild(a.F);
	a.H && !a.H.Z || a.T()
}
function xl(a, b) {
	if (a.Z) throw Error(ja);
	if (b && a.Yd(b)) {
		a.Cb = !0;
		var c = K(b);
		a.h && a.h.g == c || (a.h = Mh(b));
		a.X(b);
		a.T()
	} else throw Error("Invalid element to decorate");
}
v.Yd = function() {
	return ! 0
};v.X = function(a) {
	this.F = a
};v.T = function() {
	this.Z = !0;
	yl(this,
		function(a) { ! a.Z && a.s() && a.T()
		})
};v.da = function() {
	yl(this,
		function(a) {
			a.Z && a.da()
		});
	this.O && al(this.O);
	this.Z = !1
};v.L = function() {
	this.Z && this.da();
	this.O && (this.O.P(), delete this.O);
	yl(this,
		function(a) {
			a.P()
		}); ! this.Cb && this.F && ji(this.F);
	this.H = this.Sa = this.F = this.M = this.C = null;
	R.G.L.call(this)
};
function T(a, b) {
	return rl(a) + "." + b
}
v.zc = function(a, b) {
	this.ke(a, zl(this), b)
};v.ke = function(a, b, c) {
	if (a.Z && (c || !this.Z)) throw Error(ja);
	if (0 > b || b > zl(this)) throw Error("Child component index out of bounds");
	this.M && this.C || (this.M = {},
		this.C = []);
	if (a.xb() == this) {
		var d = rl(a);
		this.M[d] = a;
		Wc(this.C, a)
	} else hd(this.M, rl(a), a);
	ul(a, this);
	Zc(this.C, b, 0, a);
	a.Z && this.Z && a.xb() == this ? (c = this.Uc(), (c.childNodes[b] || null) != a.s() && (a.s().parentElement == c && c.removeChild(a.s()), b = c.childNodes[b] || null, c.insertBefore(a.s(), b))) : c ? (this.F || this.J(), b = Al(this, b + 1), wl(a, this.Uc(), b ? b.F: null)) : this.Z && !a.Z && a.F && a.F.parentNode && 1 == a.F.parentNode.nodeType && a.T()
};v.Uc = function() {
	return this.F
};
function Bl(a) {
	null == a.ta && (a.ta = ij(a.Z ? a.F: a.h.g.body));
	return a.ta
}
function zl(a) {
	return a.C ? a.C.length: 0
}
function vl(a, b) {
	a.M && b ? (a = a.M, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
	return b
}
function Al(a, b) {
	return a.C ? a.C[b] || null: null
}
function yl(a, b, c) {
	a.C && Pc(a.C, b, c)
}
function Cl(a, b) {
	return a.C && b ? Oc(a.C, b) : -1
}
v.Zd = function(a, b) {
	if (a) {
		var c = typeof a === t ? a: rl(a);
		a = vl(this, c);
		if (c && a) {
			var d = this.M;
			c in d && delete d[c];
			Wc(this.C, a);
			b && (a.da(), a.F && ji(a.F));
			ul(a, null)
		}
	}
	if (!a) throw Error("Child is not in parent component");
	return a
};v.Qc = function(a) {
	for (var b = []; this.C && 0 != this.C.length;) {
		var c = b,
			d = c.push;
		var e = this.Zd(Al(this, 0), a);
		d.call(c, e)
	}
	return b
};
function Dl() {}
var El;wc(Dl);
var Fl = {
	button: "pressed",
	checkbox: Qa,
	menuitem: Rb,
	menuitemcheckbox: Qa,
	menuitemradio: Qa,
	radio: Qa,
	tab: Rb,
	treeitem: Rb
};v = Dl.prototype;v.Wb = function() {};v.J = function(a) {
	return a.h.J(g, Gl(this, a).join(" "), a.ja())
};v.yb = function(a) {
	return a
};
function Hl(a, b, c) {
	if (a = a.s ? a.s() : a) {
		var d = [b];
		D && !H("7") && (d = Il(Ki(a), b), d.push(b)); (c ? Ni: Pi)(a, d)
	}
}
v.Vc = function() {
	return ! 0
};v.Ia = function(a, b) {
	b.id && sl(a, b.id);
	var c = this.yb(b);
	c && c.firstChild ? Jl(a, c.firstChild.nextSibling ? Yc(c.childNodes) : c.firstChild) : a.Hb = null;
	var d = 0,
		e = this.ha(),
		f = this.ha(),
		h = !1,
		k = !1,
		l = !1,
		m = Yc(Ki(b));
	Pc(m,
		function(q) {
			h || q != e ? k || q != f ? d |= this.td(q) : k = !0 : (h = !0, f == e && (k = !0));
			1 == this.td(q) && zi(c) && Ai(c) && yi(c, !1)
		},
		this);
	a.$ = d;
	h || (m.push(e), f == e && (k = !0));
	k || m.push(f); (a = a.xe) && m.push.apply(m, a);
	if (D && !H("7")) {
		var n = Il(m);
		0 < n.length && (m.push.apply(m, n), l = !0)
	}
	h && k && !a && !l || Li(b, m.join(" "));
	return b
};v.Bf = function(a) {
	Bl(a) && this.ae(a.s(), !0);
	a.isEnabled() && this.Xb(a, a.isVisible())
};
function Kl(a, b, c) {
	if (a = c || a.Wb()) c = b.getAttribute("role") || null,
		a != c && Cj(b, a)
}
function Ll(a, b, c) {
	b.isVisible() || Dj(c, qb, !b.isVisible());
	b.isEnabled() || a.Ya(c, 1, !b.isEnabled());
	b.fa & 8 && a.Ya(c, 8, !!(b.$ & 8));
	b.fa & 16 && a.Ya(c, 16, !!(b.$ & 16));
	b.fa & 64 && a.Ya(c, 64, !!(b.$ & 64))
}
v.Wc = function(a, b) {
	kj(a, !b, !D && !pf)
};v.ae = function(a, b) {
	Hl(a, this.ha() + "-rtl", b)
};v.$d = function(a) {
	var b;
	return a.fa & 32 && (b = a.s()) ? zi(b) && Ai(b) : !1
};v.Xb = function(a, b) {
	var c;
	if (a.fa & 32 && (c = a.s())) {
		if (!b && a.$ & 32) {
			try {
				c.blur()
			} catch(d) {}
			a.$ & 32 && a.Cf(null)
		} (zi(c) && Ai(c)) != b && yi(c, b)
	}
};v.setVisible = function(a, b) {
	N(a, b);
	a && Dj(a, qb, !b)
};v.sc = function(a, b, c) {
	var d = a.s();
	if (d) {
		var e = this.Kc(b);
		e && Hl(a, e, c);
		this.Ya(d, b, c)
	}
};v.Ya = function(a, b, c) {
	El || (El = {
		1 : "disabled",
		8 : Rb,
		16 : Qa,
		64 : "expanded"
	});
	b = El[b];
	var d = a.getAttribute("role") || null;
	d && (d = Fl[d] || b, b = b == Qa || b == Rb ? d: b);
	b && Dj(a, b, c)
};v.rc = function(a, b) {
	var c = this.yb(a);
	c && (gi(c), b && (typeof b === t ? vi(c, b) : (a = function(d) {
		if (d) {
			var e = K(c);
			c.appendChild(typeof d === t ? e.createTextNode(d) : d)
		}
	},
		Array.isArray(b) ? Pc(b, a) : !yc(b) || "nodeType" in b ? a(b) : Pc(Yc(b), a))))
};v.ha = function() {
	return "goog-control"
};
function Gl(a, b) {
	var c = a.ha(),
		d = [c],
		e = a.ha();
	e != c && d.push(e);
	c = b.$;
	for (e = []; c;) {
		var f = c & -c;
		e.push(a.Kc(f));
		c &= ~f
	}
	d.push.apply(d, e); (a = b.xe) && d.push.apply(d, a);
	D && !H("7") && d.push.apply(d, Il(d));
	return d
}
function Il(a, b) {
	var c = [];
	b && (a = Xc(a, [b]));
	Pc([],
		function(d) { ! Tc(d, Fc(Vc, a)) || b && !Vc(d, b) || c.push(d.join("_"))
		});
	return c
}
v.Kc = function(a) {
	this.g || Ml(this);
	return this.g[a]
};v.td = function(a) {
	if (!this.j) {
		this.g || Ml(this);
		var b = this.g,
			c = {},
			d;
		for (d in b) c[b[d]] = d;
		this.j = c
	}
	a = parseInt(this.j[a], 10);
	return isNaN(a) ? 0 : a
};
function Ml(a) {
	var b = a.ha();
	b.replace(/\xa0|\s/g, " ");
	a.g = {
		1 : b + ba,
		2 : b + "-hover",
		4 : b + "-active",
		8 : b + "-selected",
		16 : b + "-checked",
		32 : b + "-focused",
		64 : b + "-open"
	}
};
function Nl() {}
B(Nl, Dl);wc(Nl);v = Nl.prototype;v.Wb = function() {
	return La
};v.Ya = function(a, b, c) {
	switch (b) {
		case 8:
		case 16:
			Dj(a, "pressed", c);
			break;
		default:
		case 64:
		case 1:
			Nl.G.Ya.call(this, a, b, c)
	}
};v.J = function(a) {
	var b = Nl.G.J.call(this, a);
	this.Qd(b, a.aa());
	var c = a.Ba();
	c && this.ya(b, c);
	a.fa & 16 && this.Ya(b, 16, !!(a.$ & 16));
	return b
};v.Ia = function(a, b) {
	b = Nl.G.Ia.call(this, a, b);
	var c = this.Ba(b);
	a.m = c;
	a.A = this.aa(b);
	a.fa & 16 && this.Ya(b, 16, !!(a.$ & 16));
	return b
};v.Ba = y;v.ya = y;v.aa = function(a) {
	return a.title
};v.Qd = function(a, b) {
	a && (b ? a.title = b: a.removeAttribute("title"))
};v.ha = function() {
	return "goog-button"
};
function Ol(a, b) {
	if (!a) throw Error("Invalid class name " + a);
	if (typeof b !== p) throw Error("Invalid decorator function " + b);
	Pl[a] = b
}
var Ql = {},
	Pl = {};
function V(a, b, c) {
	R.call(this, c);
	if (!b) {
		for (b = this.constructor; b;) {
			var d = Ac(b);
			if (d = Ql[d]) break;
			b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor
		}
		b = d ? typeof d.ca === p ? d.ca() : new d: null
	}
	this.g = b;
	this.Hb = void 0 !== a ? a: null
}
B(V, R);v = V.prototype;v.Hb = null;v.$ = 0;v.fa = 39;v.qb = 255;v.Tc = 0;v.la = !0;v.xe = null;v.Fe = !0;v.ed = !1;
function Rl(a, b) {
	a.Z && b != a.Fe && Sl(a, b);
	a.Fe = b
}
v.J = function() {
	var a = this.g.J(this);
	this.F = a;
	Kl(this.g, a, this.Mc());
	this.ed || this.g.Wc(a, !1);
	this.isVisible() || this.g.setVisible(a, !1)
};v.Mc = function() {
	return null
};v.Uc = function() {
	return this.g.yb(this.s())
};v.Yd = function(a) {
	return this.g.Vc(a)
};v.X = function(a) {
	this.F = a = this.g.Ia(this, a);
	Kl(this.g, a, this.Mc());
	this.ed || this.g.Wc(a, !1);
	this.la = a.style.display != r
};v.T = function() {
	V.G.T.call(this);
	Ll(this.g, this, this.F);
	this.g.Bf(this);
	if (this.fa & -2 && (this.Fe && Sl(this, !0), this.fa & 32)) {
		var a = this.s();
		if (a) {
			var b = this.l || (this.l = new hl);
			il(b, a);
			S(this).D(b, "key", this.Ha).D(a, cb, this.dh).D(a, Ja, this.Cf)
		}
	}
};
function Sl(a, b) {
	var c = S(a),
		d = a.s();
	b ? (c.D(d, Ij.Zb, a.vc).D(d, [Ij.$b, Ij.yc], a.ec).D(d, Db, a.be).D(d, Cb, a.Ge), a.Oc != y && c.D(d, Wa, a.Oc), D && (H(9) || c.D(d, Xa, a.eg), a.o || (a.o = new Tl(a), Fj(a, Fc(Ej, a.o))))) : (c.ga(d, Ij.Zb, a.vc).ga(d, [Ij.$b, Ij.yc], a.ec).ga(d, Db, a.be).ga(d, Cb, a.Ge), a.Oc != y && c.ga(d, Wa, a.Oc), D && (H(9) || c.ga(d, Xa, a.eg), Ej(a.o), a.o = null))
}
v.da = function() {
	V.G.da.call(this);
	this.l && nl(this.l);
	this.isVisible() && this.isEnabled() && this.g.Xb(this, !1)
};v.L = function() {
	V.G.L.call(this);
	this.l && (this.l.P(), delete this.l);
	delete this.g;
	this.o = this.xe = this.Hb = null
};v.ja = function() {
	return this.Hb
};v.Ib = function(a) {
	this.g.rc(this.s(), a);
	this.Hb = a
};
function Jl(a, b) {
	a.Hb = b
}
v.fb = function() {
	var a = this.ja();
	if (!a) return "";
	a = typeof a === t ? a: Array.isArray(a) ? Rc(a, Di).join("") : Bi(a);
	return Xe(a)
};v.Ng = function(a) {
	this.Ib(a)
};v.isVisible = function() {
	return this.la
};v.setVisible = function(a, b) {
	return b || this.la != a && this.dispatchEvent(a ? "show": rb) ? ((b = this.s()) && this.g.setVisible(b, a), this.isEnabled() && this.g.Xb(this, a), this.la = a, !0) : !1
};v.isEnabled = function() {
	return ! (this.$ & 1)
};v.oa = function(a) {
	var b = this.xb();
	b && typeof b.isEnabled == p && !b.isEnabled() || !Ul(this, 1, !a) || (a || (Vl(this, !1), Wl(this, !1)), this.isVisible() && this.g.Xb(this, a), Xl(this, 1, !a, !0))
};
function Wl(a, b) {
	Ul(a, 2, b) && Xl(a, 2, b)
}
function Vl(a, b) {
	Ul(a, 4, b) && Xl(a, 4, b)
}
function Yl(a, b) {
	Ul(a, 64, b) && Xl(a, 64, b)
}
function Xl(a, b, c, d) {
	d || 1 != b ? a.fa & b && c != !!(a.$ & b) && (a.g.sc(a, b, c), a.$ = c ? a.$ | b: a.$ & ~b) : a.oa(!c)
}
v.sa = function(a, b) {
	if (this.Z && this.$ & a && !b) throw Error(ja); ! b && this.$ & a && Xl(this, a, !1);
	this.fa = b ? this.fa | a: this.fa & ~a
};
function Zl(a, b) {
	return !! (a.qb & b) && !!(a.fa & b)
}
function Ul(a, b, c) {
	return !! (a.fa & b) && !!(a.$ & b) != c && (!(a.Tc & b) || a.dispatchEvent(ql(b, c))) && !a.va
}
v.be = function(a) { ! $l(a, this.s()) && this.dispatchEvent("enter") && this.isEnabled() && Zl(this, 2) && Wl(this, !0)
};v.Ge = function(a) { ! $l(a, this.s()) && this.dispatchEvent("leave") && (Zl(this, 4) && Vl(this, !1), Zl(this, 2) && Wl(this, !1))
};v.Oc = y;
function $l(a, b) {
	return !! a.relatedTarget && oi(b, a.relatedTarget)
}
v.vc = function(a) {
	this.isEnabled() && (Zl(this, 2) && Wl(this, !0), 0 != a.h.button || tf && a.ctrlKey || (Zl(this, 4) && Vl(this, !0), this.g && this.g.$d(this) && this.s().focus()));
	this.ed || 0 != a.h.button || tf && a.ctrlKey || a.g()
};v.ec = function(a) {
	this.isEnabled() && (Zl(this, 2) && Wl(this, !0), this.$ & 4 && this.nc(a) && Zl(this, 4) && Vl(this, !1))
};v.eg = function(a) {
	this.isEnabled() && this.nc(a)
};v.nc = function(a) {
	if (Zl(this, 16)) {
		var b = !(this.$ & 16);
		Ul(this, 16, b) && Xl(this, 16, b)
	}
	Zl(this, 8) && Ul(this, 8, !0) && Xl(this, 8, !0);
	Zl(this, 64) && Yl(this, !(this.$ & 64));
	b = new Gj(Aa, this);
	a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.l = a.l);
	return this.dispatchEvent(b)
};v.dh = function() {
	Zl(this, 32) && Ul(this, 32, !0) && Xl(this, 32, !0)
};v.Cf = function() {
	Zl(this, 4) && Vl(this, !1);
	Zl(this, 32) && Ul(this, 32, !1) && Xl(this, 32, !1)
};v.Ha = function(a) {
	return this.isVisible() && this.isEnabled() && this.uc(a) ? (a.g(), a.stopPropagation(), !0) : !1
};v.uc = function(a) {
	return 13 == a.keyCode && this.nc(a)
};
if (typeof V !== p) throw Error("Invalid component class " + V);
if (typeof Dl !== p) throw Error("Invalid renderer class " + Dl);
var am = Ac(V);Ql[am] = Dl;Ol("goog-control",
	function() {
		return new V(null)
	});
function Tl(a) {
	O.call(this);
	this.h = a;
	this.g = !1;
	this.j = new Wk(this);
	Fj(this, Fc(Ej, this.j));
	a = this.h.F;
	this.j.D(a, Ij.Zb, this.m).D(a, Ij.$b, this.o).D(a, Sa, this.l)
}
B(Tl, O);
var bm = !D || Hf(9);Tl.prototype.m = function() {
	this.g = !1
};Tl.prototype.o = function() {
	this.g = !0
};
function cm(a, b) {
	if (!bm) return a.button = 0,
		a.type = b,
		a;
	var c = document.createEvent("MouseEvents");
	c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
	return c
}
Tl.prototype.l = function(a) {
	if (this.g) this.g = !1;
	else {
		var b = a.h,
			c = b.button,
			d = b.type,
			e = cm(b, Ab);
		this.h.vc(new Jj(e, a.currentTarget));
		e = cm(b, "mouseup");
		this.h.ec(new Jj(e, a.currentTarget));
		bm || (b.button = c, b.type = d)
	}
};Tl.prototype.L = function() {
	this.h = null;
	Tl.G.L.call(this)
};
function dm() {}
B(dm, Nl);wc(dm);v = dm.prototype;v.Wb = function() {};v.J = function(a) {
	Rl(a, !1);
	a.qb &= -256;
	a.sa(32, !1);
	return a.h.J("BUTTON", {
		"class": Gl(this, a).join(" "),
		disabled: !a.isEnabled(),
		title: a.aa() || "",
		value: a.Ba() || ""
	},
		a.fb() || "")
};v.Vc = function(a) {
	return "BUTTON" == a.tagName || a.tagName == na && (a.type == La || "submit" == a.type || "reset" == a.type)
};v.Ia = function(a, b) {
	Rl(a, !1);
	a.qb &= -256;
	a.sa(32, !1);
	if (b.disabled) {
		var c = this.Kc(1);
		L(b, c)
	}
	return dm.G.Ia.call(this, a, b)
};v.Bf = function(a) {
	S(a).D(a.s(), Sa, a.nc)
};v.Wc = y;v.ae = y;v.$d = function(a) {
	return a.isEnabled()
};v.Xb = y;v.sc = function(a, b, c) {
	dm.G.sc.call(this, a, b, c); (a = a.s()) && 1 == b && (a.disabled = c)
};v.Ba = function(a) {
	return a.value
};v.ya = function(a, b) {
	a && (a.value = b)
};v.Ya = y;
function em(a, b, c) {
	V.call(this, a, b || dm.ca(), c)
}
B(em, V);v = em.prototype;v.Ba = function() {
	return this.m
};v.ya = function(a) {
	this.m = a;
	this.g.ya(this.s(), a)
};v.aa = function() {
	return this.A
};v.Qd = function(a) {
	this.A = a;
	this.g.Qd(this.s(), a)
};v.L = function() {
	em.G.L.call(this);
	delete this.m;
	delete this.A
};v.T = function() {
	em.G.T.call(this);
	if (this.fa & 32) {
		var a = this.s();
		a && S(this).D(a, "keyup", this.uc)
	}
};v.uc = function(a) {
	return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.nc(a) : 32 == a.keyCode
};Ol("goog-button",
	function() {
		return new em(null)
	});
function fm() {}
B(fm, Nl);wc(fm);v = fm.prototype;v.J = function(a) {
	var b = Gl(this, a);
	b = a.h.J(g, hb + b.join(" "), gm(this, a.ja(), a.h));
	this.Qd(b, a.aa());
	return b
};v.Wb = function() {
	return La
};v.yb = function(a) {
	return a && a.firstChild && a.firstChild.firstChild
};
function gm(a, b, c) {
	return c.J(g, hb + (a.ha() + "-outer-box"), c.J(g, hb + (a.ha() + "-inner-box"), b))
}
v.Vc = function(a) {
	return a.tagName == g
};v.Ia = function(a, b) {
	hm(b, !0);
	hm(b, !1);
	a: {
		var c = a.h.bg(b);
		var d = this.ha() + "-outer-box";
		if (c && Mi(c, d) && (c = a.h.bg(c), d = this.ha() + "-inner-box", c && Mi(c, d))) {
			c = !0;
			break a
		}
		c = !1
	}
	c || b.appendChild(gm(this, b.childNodes, a.h));
	Ni(b, ["goog-inline-block", this.ha()]);
	return fm.G.Ia.call(this, a, b)
};v.ha = function() {
	return "goog-custom-button"
};
function hm(a, b) {
	if (a) for (var c = b ? a.firstChild: a.lastChild, d; c && c.parentNode == a;) {
		d = b ? c.nextSibling: c.previousSibling;
		if (3 == c.nodeType) {
			var e = c.nodeValue;
			if ("" == Bd(e)) a.removeChild(c);
			else {
				c.nodeValue = b ? Ye(e) : Ze(e);
				break
			}
		} else break;
		c = d
	}
};
function im(a, b, c) {
	em.call(this, a, b || fm.ca(), c);
	this.sa(16, !0)
}
B(im, em);Ol("goog-toggle-button",
	function() {
		return new im(null)
	});
function jm() {}
jm.prototype.g = null;
function km(a) {
	var b; (b = a.g) || (b = {},
		lm(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
	return b
};
var nm;
function om() {}
B(om, jm);
function pm(a) {
	return (a = lm(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function lm(a) {
	if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
		for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
			var d = b[c];
			try {
				return new ActiveXObject(d),
					a.h = d
			} catch(e) {}
		}
		throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
	}
	return a.h
}
nm = new om;
function qm(a) {
	Q.call(this);
	this.headers = new kg;
	this.M = a || null;
	this.h = !1;
	this.H = this.g = null;
	this.m = "";
	this.j = 0;
	this.C = "";
	this.l = this.K = this.A = this.I = !1;
	this.o = 0;
	this.B = null;
	this.S = "";
	this.O = this.N = !1
}
B(qm, Q);
var rm = /^https?$/i,
	sm = [ra, "PUT"], tm = [];
function um(a, b, c, d, e) {
	var f = new qm;
	tm.push(f);
	b && f.D(Ua, b);
	f.Db(Ob, f.Hh);
	e && (f.o = Math.max(0, e));
	f.send(a, c, d, void 0)
}
v = qm.prototype;v.Hh = function() {
	this.P();
	Wc(tm, this)
};v.send = function(a, b, c, d) {
	if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.m + "; newUri=" + a);
	b = b ? b.toUpperCase() : "GET";
	this.m = a;
	this.C = "";
	this.j = 0;
	this.I = !1;
	this.h = !0;
	this.g = this.M ? pm(this.M) : pm(nm);
	this.H = this.M ? km(this.M) : km(nm);
	this.g.onreadystatechange = A(this.Eg, this);
	try {
		this.K = !0,
			this.g.open(b, String(a), !0),
			this.K = !1
	} catch(f) {
		vm(this, f);
		return
	}
	a = c || "";
	var e = new kg(this.headers);
	d && rg(d,
		function(f, h) {
			e.set(h, f)
		});
	d = Uc(e.Ua(), wm);
	c = x.FormData && a instanceof x.FormData; ! Vc(sm, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
	e.forEach(function(f, h) {
		this.g.setRequestHeader(h, f)
	},
		this);
	this.S && (this.g.responseType = this.S);
	dc in this.g && this.g.withCredentials !== this.N && (this.g.withCredentials = this.N);
	try {
		xm(this),
			0 < this.o && ((this.O = ym(this.g)) ? (this.g.timeout = this.o, this.g.ontimeout = A(this.Xg, this)) : this.B = Tk(this.Xg, this.o, this)),
			this.A = !0,
			this.g.send(a),
			this.A = !1
	} catch(f) {
		vm(this, f)
	}
};
function ym(a) {
	return D && H(9) && typeof a.timeout === Fb && void 0 !== a.ontimeout
}
function wm(a) {
	return "content-type" == a.toLowerCase()
}
v.Xg = function() {
	"undefined" != typeof vc && this.g && (this.C = "Timed out after " + this.o + "ms, aborting", this.j = 8, this.dispatchEvent("timeout"), this.abort(8))
};
function vm(a, b) {
	a.h = !1;
	a.g && (a.l = !0, a.g.abort(), a.l = !1);
	a.C = b;
	a.j = 5;
	zm(a);
	Am(a)
}
function zm(a) {
	a.I || (a.I = !0, a.dispatchEvent(Ua), a.dispatchEvent("error"))
}
v.abort = function(a) {
	this.g && this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1, this.j = a || 7, this.dispatchEvent(Ua), this.dispatchEvent("abort"), Am(this))
};v.L = function() {
	this.g && (this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1), Am(this, !0));
	qm.G.L.call(this)
};v.Eg = function() {
	this.va || (this.K || this.A || this.l ? Bm(this) : this.Wi())
};v.Wi = function() {
	Bm(this)
};
function Bm(a) {
	if (a.h && "undefined" != typeof vc && (!a.H[1] || 4 != Cm(a) || 2 != Dm(a))) if (a.A && 4 == Cm(a)) Tk(a.Eg, 0, a);
	else if (a.dispatchEvent(Pb), 4 == Cm(a)) {
		a.h = !1;
		try {
			if (Em(a)) a.dispatchEvent(Ua),
				a.dispatchEvent("success");
			else {
				a.j = 6;
				try {
					var b = 2 < Cm(a) ? a.g.statusText: ""
				} catch(c) {
					b = ""
				}
				a.C = b + " [" + Dm(a) + "]";
				zm(a)
			}
		} finally {
			Am(a)
		}
	}
}
function Am(a, b) {
	if (a.g) {
		xm(a);
		var c = a.g,
			d = a.H[0] ? y: null;
		a.g = null;
		a.H = null;
		b || a.dispatchEvent(Ob);
		try {
			c.onreadystatechange = d
		} catch(e) {}
	}
}
function xm(a) {
	a.g && a.O && (a.g.ontimeout = null);
	a.B && (Uk(a.B), a.B = null)
}
function Em(a) {
	var b = Dm(a);
	a: switch (b) {
		case 200:
		case 201:
		case 202:
		case 204:
		case 206:
		case 304:
		case 1223:
			var c = !0;
			break a;
		default:
			c = !1
	}
	if (!c) {
		if (b = 0 === b) a = String(a.m).match(sg)[1] || null,
			!a && x.self && x.self.location && (a = x.self.location.protocol, a = a.substr(0, a.length - 1)),
			b = !rm.test(a ? a.toLowerCase() : "");
		c = b
	}
	return c
}
function Cm(a) {
	return a.g ? a.g.readyState: 0
}
function Dm(a) {
	try {
		return 2 < Cm(a) ? a.g.status: -1
	} catch(b) {
		return - 1
	}
}
function Fm(a) {
	try {
		return a.g ? a.g.responseText: ""
	} catch(b) {
		return ""
	}
};
function Gm() {}
wc(Gm);
function Hm(a) {
	Zf(this, a, null, null)
}
w(Hm, Xf);
function Im(a) {
	Zf(this, a, Jm, null)
}
w(Im, Xf);
var Jm = [3, 4];
function Km(a) {
	Zf(this, a, Lm, null)
}
w(Km, Xf);
var Lm = [3];
function Mm(a) {
	Zf(this, a, Nm, null)
}
w(Mm, Xf);
var Nm = [2];
function Om(a) {
	Zf(this, a, Pm, Qm)
}
w(Om, Xf);Om.prototype.gb = function() {
	return bg(this, 16)
};Om.prototype.Sb = function(a) {
	cg(this, 16, a)
};Om.prototype.qa = function() {
	return bg(this, 1)
};Om.prototype.ua = function(a) {
	cg(this, 1, a)
};
var Pm = [26, 80], Qm = [[40, 92]];
function Rm() {
	this.j = this.g = "";
	Gm.ca()
}
Rm.prototype.Sb = function(a) {
	this.g = a
};Rm.prototype.ua = function(a) {
	this.j = a
};Rm.prototype.store = function(a) {
	cg(a, 65, 0);
	a.Sb(this.g);
	cg(a, 14, "");
	a.ua(this.j);
	cg(a, 50, "");
	cg(a, 52, "");
	cg(a, 32, 0)
};wc(Rm);
function Sm(a, b) {
	var c = a[b - 1];
	if (null == c || Tm(c)) a = a[a.length - 1],
		Tm(a) && (c = a[b]);
	return c
}
function Tm(a) {
	return zc(a) && !yc(a)
};
function Um(a, b) {
	return a === b ? !0 : Tc(a,
		function(c, d) {
			if (Tm(c)) {
				d = c;
				for (var e in d) if (c = d[e], !Vm(c, Sm(b, +e))) return ! 1;
				return ! 0
			}
			return Vm(c, Sm(b, d + 1))
		}) && Tc(b,
			function(c, d) {
				if (Tm(c)) {
					for (var e in c) if (null == Sm(a, +e)) return ! 1;
					return ! 0
				}
				return null == c == (null == Sm(a, d + 1))
			})
}
function Vm(a, b) {
	return a === b || null == a && null == b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b) ? !0 : Array.isArray(a) && Array.isArray(b) ? Um(a, b) : !1
};
function Wm() {}
function Xm(a, b, c) {
	a = a.g = b = b || [];
	if (a.length) {
		b = a.length - 1;
		var d = Tm(a[b]);
		b = d ? a[b] : {};
		d && a.length--;
		d = 0;
		for (var e in b) {
			var f = +e;
			f <= c ? (a[f - 1] = b[e], delete b[e]) : d++
		}
		if (a.length > c) {
			e = d;
			d = c;
			f = a.length - c;
			for (var h = 0; 0 < f; --f, ++d) null != a[d] && (b[d + 1] = a[d], delete a[d], h++);
			d = e + h;
			a.length = c
		}
		d && (a[c] = b)
	}
}
function Ym(a, b, c) {
	a = a.g[b];
	return null != a ? a: c
}
function Zm(a, b) {
	return !! Ym(a, b, void 0)
}
function $m(a, b) {
	return + Ym(a, b, 0)
}
function an(a, b) {
	return Ym(a, b, "")
}
function bn(a, b, c) {
	a = a.g;
	a[b] || (a[b] = []);
	return a[b][c]
}
function W(a, b) {
	return (a = a.g[b]) ? a.length: 0
};new Uint8Array(0);
function cn(a) {
	Xm(this, a, 9)
}
B(cn, Wm);
function dn() {
	O.call(this);
	this.g = Rm.ca()
}
w(dn, O);dn.prototype.h = function() {
	en(this, 25)
};
function en(a, b) {
	var c = new Om;
	a.g.store(c);
	cg(c, 31, b);
	return c
}
wc(dn);
function fn() {
	this.h = [];
	this.g = {};
	this.l = !1;
	this.H = 1;
	this.o = {};
	this.j = null;
	this.m = "";
	P(window, "beforeunload", this.B, !1, this)
}
function gn(a, b, c) {
	if (null == b) return "1";
	switch (xc(b)) {
		case t:
			return a = b,
				64 < a.length && (null == c || !c) && (a = a.substr(0, 64)),
				$e(a);
		case Fb:
			return "" + b;
		case "boolean":
			return b ? "1": "0";
		case Ea:
			var d = [],
				e;
			for (e in b) d.push(gn(a, b[e], c));
			return d.join(",");
		case Gb:
			d = [];
			for (e in b) d.push(hn(a, e, b[e], c));
			return d.join(",");
		default:
			return ""
	}
}
function hn(a, b, c, d) {
	return [$e(b), gn(a, c, d || "smtalt" == b)].join("=")
}
fn.prototype.log = function(a, b) {
	this.h.push([a, b]);
	this.l || (this.l = !0, Tk(this.A, 0, this))
};fn.prototype.A = function() {
	for (var a = 0; a < this.h.length; a++) {
		var b = this.h[a];
		jn(this, b[0], b[1])
	}
	this.h = [];
	this.l = !1
};
function jn(a, b, c) {
	kn(a, a.m + "/gen204?" + (a.j ? ["client=", a.j, "&"].join("") : "") + hn(a, b, c))
}
function kn(a, b) {
	var c = new Image,
		d = a.H++;
	a.o[d] = c;
	c.onload = c.onerror = function() {
		delete fn.ca().o[d]
	};
	c.src = b;
	c = null
}
function ln(a, b) {
	var c = 0,
		d = null;
	b in a.g && (d = a.g[b], c = d[0], d = d[1]);
	if (xc(1) == Gb) {
		xc(d) != Gb && (d = {});
		for (var e in 1) d[e] = mn(e in d ? d[e] : null, 1[e])
	} else d = mn(d, 1);
	a.g[b] = [c, d];
	Uk(a.g[b][0]);
	c = Tk(A(a.C, a, b), 2E3);
	a.g[b][0] = c
}
fn.prototype.C = function(a) {
	jn(this, a, this.g[a][1]);
	a in this.g && (Uk(this.g[a][0]), delete this.g[a])
};
function mn(a, b) {
	null == b && (b = 1);
	isNaN(a) && (a = parseInt(a, 10));
	isNaN(b) && (b = parseInt(b, 10));
	return a + b
}
fn.prototype.B = function() {
	this.A();
	for (var a in this.g) 0 != this.g[a] && this.C(a)
};wc(fn);
function nn() {
	this.g = []
}
nn.prototype.add = function(a) {
	this.g.push(a)
};
function on() {
	this.g = []
}
w(on, nn);on.prototype.add = function(a) {
	if (a) for (; a(););
};wc(on);
function pn(a) {
	this.g = [];
	this.h = .5;
	qn(this, a);
	this.l = 0;
	this.j = !0;
	this.m = A(this.o, this)
}
w(pn, nn);
function qn(a, b) {
	1 < b ? a.h = 1 : .001 > b ? a.h = .001 : b && (a.h = b)
}
pn.prototype.add = function(a) {
	nn.prototype.add.call(this, a);
	this.j && rn(this)
};
function rn(a) {
	a.j = !1;
	window.setTimeout(a.m, Math.min(a.l, 5E3))
}
pn.prototype.o = function() {
	var a = (new Date).getTime();
	do {
		this.g.length && (this.g[0] && this.g[0]() || this.g.shift());
		var b = !!this.g.length;
		var c = 95 * this.h + 5;
		var d = (new Date).getTime() - a
	} while ( b && d < c );
	this.l = Math.ceil(d * (1 / this.h - 1)) + 1;
	b ? rn(this) : this.j = !0
};
function sn(a, b) {
	this.B = a || null;
	this.I = b || on.ca();
	this.A = this.o = this.M = null;
	this.l = this.j = !1;
	this.m = null;
	this.g = [];
	this.h = 0
}
function tn(a, b) {
	a.j || (a.M = b)
}
function un(a, b, c) {
	a.o = c ? A(b, c) : b
}
function vn(a, b, c) {
	a.A = c ? A(b, c) : b
}
function wn(a, b) {
	a.j || (a.j = !0, a.H = b, a.h++, a.m = a.M, a.C())
}
sn.prototype.stop = function() {
	this.h++;
	this.j = !1;
	this.g = []
};
function xn(a) {
	if (!a.j) return null;
	for (var b = !1,
		c = 0; c < a.g.length; ++c) if (a.g[c].target === a) {
			a.g[c].ready = !1;
			a.g[c].Zg = a.h + 1;
			b = !0;
			break
		}
	b || a.g.push({
		target: a,
		ready: !1,
		Zg: a.h + 1
	});
	return A(a.C, a, a, a.h + 1)
}
function yn(a) {
	if (!a.j) return ! 0;
	for (var b = 0; b < a.g.length; ++b) if (a.g[b].target === a && a.g[b].Zg == a.h) return a.g[b].ready;
	return ! 0
}
sn.prototype.C = function(a, b) {
	if (this.j) {
		if (a) for (var c = 0; c < this.g.length; ++c) if (this.g[c].target === a) {
			this.g[c].ready = !0;
			break
		}
		this.l || this.I.add(A(this.K, this, b || this.h))
	}
};sn.prototype.K = function(a) {
	if (this.h != a) return ! 1;
	a = this.m;
	if (a == zn) return this.stop(),
		this.o && this.o.call(this.B, this, this.H),
		!1;
	this.l = !0;
	try {
		var b = a.call(this.B, this, this.H);
		if (!b) throw Error();
	} catch(c) {
		this.stop();
		a = c;
		if (this.A) this.A.call(this.B, a, this, this.H);
		else throw a;
		return ! 1
	} finally {
		this.l = !1
	}
	b != An && (this.m = b, this.h++, this.C());
	return ! 1
};
function An() {}
function zn() {};
function Bn() {
	Q.call(this);
	this.g = 0;
	this.endTime = this.startTime = null
}
B(Bn, Q);Bn.prototype.h = function() {
	this.Ta("begin")
};Bn.prototype.j = function() {
	this.Ta("end")
};Bn.prototype.Eb = function() {
	this.Ta("stop")
};Bn.prototype.Ta = function(a) {
	this.dispatchEvent(a)
};
function Cn(a, b) {
	Array.isArray(b) || (b = [b]);
	b = Rc(b,
		function(c) {
			return typeof c === t ? c: c.$j + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
		});
	M(a, $b, b.join(","))
}
var Dn = ad(function() {
	if (D) return H("10.0");
	var a = bi(document, g),
		b = F ? "-webkit": E ? "-moz": D ? "-ms": pf ? "-o": null,
		c = {
			transition: Hb
		};
	b && (c[b + "-transition"] = Hb);
	b = Ce(Za, {
		style: c
	});
	Se(a, b);
	a = a.firstChild;
	b = a.style[hf($b)];
	return "" != ("undefined" !== typeof b ? b: a.style[Ti(a, $b)] || "")
});
function En(a, b, c, d, e) {
	Bn.call(this);
	this.F = a;
	this.o = b;
	this.A = c;
	this.l = d;
	this.C = Array.isArray(e) ? e: [e]
}
B(En, Bn);v = En.prototype;v.play = function() {
	if (1 == this.g) return ! 1;
	this.h();
	this.Ta("play");
	this.startTime = Gc();
	this.g = 1;
	if (Dn()) return M(this.F, this.A),
		this.m = Tk(this.aj, void 0, this),
		!0;
	this.sf(!1);
	return ! 1
};v.aj = function() {
	ej(this.F);
	Cn(this.F, this.C);
	M(this.F, this.l);
	this.m = Tk(A(this.sf, this, !1), 1E3 * this.o)
};v.stop = function() {
	1 == this.g && this.sf(!0)
};v.sf = function(a) {
	M(this.F, $b, "");
	Uk(this.m);
	M(this.F, this.l);
	this.endTime = Gc();
	this.g = 0;
	a ? this.Eb() : this.Ta($a);
	this.j()
};v.L = function() {
	this.stop();
	En.G.L.call(this)
};
function Fn(a, b) {
	Q.call(this);
	this.o = new Wk(this);
	this.Yb(a || null);
	b && (this.qc = b)
}
B(Fn, Q);v = Fn.prototype;v.F = null;v.Ac = !0;v.Pf = null;v.ic = !1;v.Oe = -1;v.qc = Xb;v.s = function() {
	return this.F
};v.Yb = function(a) {
	Gn(this);
	this.F = a
};v.setAutoHide = function(a) {
	Gn(this);
	this.Ac = a
};
function Gn(a) {
	if (a.ic) throw Error("Can not change this state of the popup while showing.");
}
v.isVisible = function() {
	return this.ic
};v.setVisible = function(a) {
	this.xa && this.xa.stop();
	this.ta && this.ta.stop();
	if (a) {
		if (!this.ic && this.ce()) {
			if (!this.F) throw Error("Caller must call setElement before trying to show the popup");
			this.jb();
			a = K(this.F);
			if (this.Ac) if (this.o.D(a, Ab, this.Ye, !0), D) {
				try {
					var b = a.activeElement
				} catch(d) {}
				for (; b && b.nodeName == ma;) {
					try {
						var c = ti(b)
					} catch(d) {
						break
					}
					a = c;
					b = a.activeElement
				}
				this.o.D(a, Ab, this.Ye, !0);
				this.o.D(a, "deactivate", this.Dg)
			} else this.o.D(a, Ja, this.Dg);
			this.qc == Xb ? (this.F.style.visibility = cc, N(this.F, !0)) : this.qc == Eb && this.jb();
			this.ic = !0;
			this.Oe = Date.now();
			this.xa ? (Xj(this.xa, "end", this.Fg, !1, this), this.xa.play()) : this.Fg()
		}
	} else Hn(this)
};v.jb = y;
function Hn(a, b) {
	a.ic && a.dispatchEvent({
		type: "beforehide",
		target: b
	}) && (a.o && al(a.o), a.ic = !1, a.ta ? (Xj(a.ta, "end", Fc(a.Tf, b), !1, a), a.ta.play()) : a.Tf(b))
}
v.Tf = function(a) {
	this.qc == Xb ? this.zi() : this.qc == Eb && (this.F.style.top = "-10000px");
	this.Ze(a)
};v.zi = function() {
	this.F.style.visibility = qb;
	N(this.F, !1)
};v.ce = function() {
	return this.dispatchEvent("beforeshow")
};v.Fg = function() {
	this.dispatchEvent("show")
};v.Ze = function(a) {
	this.dispatchEvent({
		type: rb,
		target: a
	})
};v.Ye = function(a) {
	a = a.target;
	oi(this.F, a) || In(this, a) || 150 > Date.now() - this.Oe || Hn(this, a)
};v.Dg = function(a) {
	var b = K(this.F);
	if ("undefined" != typeof document.activeElement) {
		if (a = b.activeElement, !a || oi(this.F, a) || "BODY" == a.tagName || In(this, a)) return
	} else if (a.target != b) return;
	150 > Date.now() - this.Oe || Hn(this)
};
function In(a, b) {
	return Sc(a.Pf || [],
		function(c) {
			return b === c || oi(c, b)
		})
}
v.L = function() {
	Fn.G.L.call(this);
	this.o.P();
	Ej(this.xa);
	Ej(this.ta);
	delete this.F;
	delete this.o;
	delete this.Pf
};
function Jn(a, b) {
	this.C = b || void 0;
	Fn.call(this, a)
}
B(Jn, Fn);Jn.prototype.jb = function() {
	if (this.C) {
		var a = !this.isVisible() && this.qc != Eb,
			b = this.s();
		a && (b.style.visibility = qb, N(b, !0));
		this.C.h(b, 8, this.Re);
		a && N(b, !1)
	}
};
function Kn(a, b) {
	Jn.call(this, a);
	this.j = b;
	this.g = 0;
	this.h = null;
	this.l = 0;
	this.setVisible(!0);
	this.setVisible(!1);
	L(this.s(), "round-trip-popup");
	L(this.j, "round-trip-content")
}
w(Kn, Jn);Kn.prototype.B = function() {
	Uk(this.l);
	1 == this.g ? Xj(this.h, $a, A(this.B, this)) : 0 == this.g && (this.l = Tk(A(this.A, this, -1), 200))
};Kn.prototype.A = function(a) {
	if (this.g != a && (0 != this.g || !(this.isVisible() && 1 == a || !this.isVisible() && -1 == a))) {
		var b = this.isVisible();
		this.setVisible(!0);
		var c = -Math.ceil(ej(this.j).width);
		ij(this.s()) && (c = -c);
		var d = 1 == a ? c: 0;
		c = 1 == a ? 0 : c;
		this.setVisible(b);
		if (Dn()) {
			b = .2;
			if (0 != this.g) {
				var e = parseInt(Vi(this.j, "left"), 10);
				this.m();
				b *= (c - e) / (c - d);
				d = e
			}
			this.g = a;
			this.h = new En(this.j, b, {
				left: d + "px"
			},
				{
					left: c + "px"
				},
				"left " + b + "s");
			this.h.play();
			Xj(this.h, $a, A(this.m, this)); - 1 == a ? Xj(this.h, $a, A(this.setVisible, this, !1)) : this.setVisible(!0)
		} else M(this.j, "left", c + "px"),
			this.setVisible(1 == a ? !0 : !1)
	}
};Kn.prototype.m = function() {
	0 != this.g && (this.h.stop(), Tk(A(gk, this, this.h)), this.g = 0, this.h = null)
};
function Ln(a) {
	Xm(this, a, 4)
}
B(Ln, Wm);
function Mn(a) {
	Xm(this, a, 2)
}
B(Mn, Wm);
function Nn(a) {
	Xm(this, a, 7)
}
B(Nn, Wm);
function On(a, b) {
	return new Ln(bn(a, 2, b))
};
function Pn(a) {
	Xm(this, a, 21)
}
B(Pn, Wm);
function Qn(a, b) {
	return new Nn(bn(a, 5, b))
};
function Rn() {
	this.F = null;
	this.g = $h(g, "gt-hl-layer", document.createTextNode(""));
	this.h = null;
	this.F && (hi(this.g, this.F), Sn(this))
}
function Tn(a, b, c, d, e) {
	var f = d || "gt-hl-text";
	d = a.F && (a.F.value || Bi(a.F));
	Sn(a);
	gi(a.g);
	if (b != c || e) {
		if (0 < b) {
			var h = d.substring(0, b);
			Un(a.g, h, 0, e)
		}
		b < c && (h = d.substring(b, c), f = $h(sa, f), Un(f, h, b, e), a.g.appendChild(f));
		c < d.length && (h = d.substring(c), Un(a.g, h, c, e))
	}
}
function Sn(a) {
	var b = a.F;
	var c = K(b),
		d = D && b.currentStyle;
	d && Wh(Mh(c).g) && d.width != Fa && d.height != Fa && !d.boxSizing ? (c = qj(b, d.width, "width", "pixelWidth"), b = qj(b, d.height, "height", "pixelHeight"), b = new Lh(c, b)) : (d = lj(b), c = oj(b), b = pj(b), b = new Lh(d.width - b.left - c.left - c.right - b.right, d.height - b.top - c.top - c.bottom - b.bottom));
	mj(a.g, b);
	c = cj(a.F);
	b = a.g;
	d = c.x;
	c = c.y;
	var e = cj(b);
	d instanceof J && (c = d.y, d = d.x);
	Xi(b, b.offsetLeft + (d - e.x), b.offsetTop + (Number(c) - e.y));
	b = oj(a.F);
	M(a.g, Ib, b.left + "px");
	M(a.g, Jb, b.right + "px");
	a.g.dir = a.F.dir
}
function Un(a, b, c, d) {
	d = d || [];
	for (var e = 0,
		f; f = d[e]; e++) if (! (0 > f.Hc - c)) {
			if (f.Hc - c >= b.length) break;
			if (0 < f.Hc - c) {
				var h = b.substring(0, f.Hc - c);
				Vn(a, h)
			}
			var k = f.className || "gt-hl-text";
			h = b.substring(f.Hc - c, f.tf - c);
			var l = $h(sa);
			Li(l, k);
			Vn(l, h);
			a.appendChild(l);
			b = b.substring(f.tf - c);
			c = f.tf
		}
	b && Vn(a, b)
}
function Vn(a, b) {
	b = b.replace(/(\r\n|\r|\n)/g, "\n").split("\n");
	for (var c = 0,
		d = b.length; c < d; c++) {
		if (0 < c) {
			var e = $h("BR");
			a.appendChild(e)
		}
		a.appendChild(document.createTextNode(String(b[c])))
	}
};
function Wn(a, b, c, d, e) {
	this.A = !!b;
	this.node = null;
	this.m = 0;
	this.Ud = !1;
	this.M = !c;
	a && Xn(this, a, d);
	this.depth = void 0 != e ? e: this.m || 0;
	this.A && (this.depth *= -1)
}
B(Wn, hg);
function Xn(a, b, c, d) {
	if (a.node = b) a.m = typeof c === Fb ? c: 1 != a.node.nodeType ? 0 : a.A ? -1 : 1;
	typeof d === Fb && (a.depth = d)
}
Wn.prototype.C = function() {
	var a = this.A ? -1 : 1;
	this.m == a && (this.m = -1 * a, this.depth += this.m * (this.A ? -1 : 1))
};Wn.prototype.next = function() {
	if (this.Ud) {
		if (!this.node || this.M && 0 == this.depth) throw gg;
		var a = this.node;
		var b = this.A ? -1 : 1;
		if (this.m == b) {
			var c = this.A ? a.lastChild: a.firstChild;
			c ? Xn(this, c) : Xn(this, a, -1 * b)
		} else(c = this.A ? a.previousSibling: a.nextSibling) ? Xn(this, c) : Xn(this, a.parentNode, -1 * b);
		this.depth += this.m * (this.A ? -1 : 1)
	} else this.Ud = !0;
	a = this.node;
	if (!this.node) throw gg;
	return a
};
function Yn() {}
function Zn(a) {
	for (var b = [], c = 0, d = a.Nc(); c < d; c++) b.push(a.cc(c));
	return b
}
function $n(a) {
	return a.Me() ? a.Ja() : a.$a()
}
Yn.prototype.Me = function() {
	return ! 1
};
function ao(a, b) {
	Wn.call(this, a, b, !0)
}
B(ao, Wn);
function bo(a, b, c, d, e) {
	this.h = this.g = null;
	this.l = this.j = 0;
	this.o = !!e;
	if (a) {
		this.g = a;
		this.j = b;
		this.h = c;
		this.l = d;
		if (1 == a.nodeType && "BR" != a.tagName) if (a = a.childNodes, b = a[b]) this.g = b,
			this.j = 0;
		else {
			a.length && (this.g = Nc(a));
			var f = !0
		}
		1 == c.nodeType && ((this.h = c.childNodes[d]) ? this.l = 0 : this.h = c)
	}
	Wn.call(this, this.o ? this.h: this.g, this.o, !0);
	if (f) try {
		this.next()
	} catch(h) {
		if (h != gg) throw h;
	}
}
B(bo, ao);bo.prototype.H = function() {
	return this.g
};bo.prototype.B = function() {
	return this.Ud && (this.node != (this.o ? this.g: this.h) ? !1 : this.o ? this.j ? -1 != this.m: 1 == this.m: !this.l || 1 != this.m)
};bo.prototype.next = function() {
	if (this.B()) throw gg;
	return bo.G.next.call(this)
};bo.prototype.C = function() {
	bo.G.C.apply(this);
	if (oi(this.node, this.o ? this.g: this.h)) throw gg;
};
function co() {}
function eo(a, b) {
	b = b.Ic();
	try {
		return 0 <= a.eb(b, 0, 0) && 0 >= a.eb(b, 1, 1)
	} catch(c) {
		if (!D) throw c;
		return ! 1
	}
}
co.prototype.La = function() {
	return new bo(this.Pa(), this.lb(), this.kb(), this.zb())
};
function fo(a) {
	this.g = a
}
B(fo, co);
function go(a) {
	var b = K(a).createRange();
	if (3 == a.nodeType) b.setStart(a, 0),
		b.setEnd(a, a.length);
	else if (ho(a)) {
		for (var c, d = a; (c = d.firstChild) && ho(c);) d = c;
		b.setStart(d, 0);
		for (d = a; (c = d.lastChild) && ho(c);) d = c;
		b.setEnd(d, 1 == d.nodeType ? d.childNodes.length: d.length)
	} else c = a.parentNode,
		a = Oc(c.childNodes, a),
		b.setStart(c, a),
		b.setEnd(c, a + 1);
	return b
}
function io(a, b, c, d) {
	var e = K(a).createRange();
	e.setStart(a, b);
	e.setEnd(c, d);
	return e
}
v = fo.prototype;v.Ic = function() {
	return this.g
};v.de = function() {
	return this.g.commonAncestorContainer
};v.Pa = function() {
	return this.g.startContainer
};v.lb = function() {
	return this.g.startOffset
};v.kb = function() {
	return this.g.endContainer
};v.zb = function() {
	return this.g.endOffset
};v.eb = function(a, b, c) {
	return this.g.compareBoundaryPoints(1 == c ? 1 == b ? x.Range.START_TO_START: x.Range.START_TO_END: 1 == b ? x.Range.END_TO_START: x.Range.END_TO_END, a)
};v.Qa = function() {
	return this.g.collapsed
};v.Df = function() {
	return this.g.toString()
};v.select = function(a) {
	var b = Zh(K(this.Pa()));
	this.Rc(b.getSelection(), a)
};v.Rc = function(a) {
	a.removeAllRanges();
	a.addRange(this.g)
};
function jo(a) {
	this.g = a
}
B(jo, fo);jo.prototype.Rc = function(a, b) { ! b || this.Qa() ? jo.G.Rc.call(this, a, b) : (a.collapse(this.kb(), this.zb()), a.extend(this.Pa(), this.lb()))
};
function ko(a) {
	this.h = this.g = this.o = null;
	this.l = this.j = -1;
	this.m = a
}
B(ko, co);
function lo(a) {
	var b = K(a).body.createTextRange();
	if (1 == a.nodeType) b.moveToElementText(a),
		ho(a) && !a.childNodes.length && b.collapse(!1);
	else {
		for (var c = 0,
			d = a; d = d.previousSibling;) {
			var e = d.nodeType;
			if (3 == e) c += d.length;
			else if (1 == e) {
				b.moveToElementText(d);
				break
			}
		}
		d || b.moveToElementText(a.parentNode);
		b.collapse(!d);
		c && b.move(Pa, c);
		b.moveEnd(Pa, a.length)
	}
	return b
}
v = ko.prototype;v.Ic = function() {
	return this.m
};v.de = function() {
	if (!this.o) {
		var a = this.m.text,
			b = this.m.duplicate(),
			c = a.replace(/ +$/, ""); (c = a.length - c.length) && b.moveEnd(Pa, -c);
		c = b.parentElement();
		b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
		if (this.Qa() && 0 < b) return this.o = c;
		for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) c = c.parentNode;
		for (; 1 == c.childNodes.length && c.innerText == mo(c.firstChild) && ho(c.firstChild);) c = c.firstChild;
		0 == a.length && (c = no(this, c));
		this.o = c
	}
	return this.o
};
function no(a, b) {
	for (var c = b.childNodes,
		d = 0,
		e = c.length; d < e; d++) {
		var f = c[d];
		if (ho(f)) {
			var h = lo(f),
				k = h.htmlText != f.outerHTML;
			if (a.Qa() && k ? 0 <= a.eb(h, 1, 1) && 0 >= a.eb(h, 1, 0) : a.m.inRange(h)) return no(a, f)
		}
	}
	return b
}
v.Pa = function() {
	this.g || (this.g = oo(this, 1), this.Qa() && (this.h = this.g));
	return this.g
};v.lb = function() {
	0 > this.j && (this.j = po(this, 1), this.Qa() && (this.l = this.j));
	return this.j
};v.kb = function() {
	if (this.Qa()) return this.Pa();
	this.h || (this.h = oo(this, 0));
	return this.h
};v.zb = function() {
	if (this.Qa()) return this.lb();
	0 > this.l && (this.l = po(this, 0), this.Qa() && (this.j = this.l));
	return this.l
};v.eb = function(a, b, c) {
	return this.m.compareEndPoints((1 == b ? "Start": "End") + "To" + (1 == c ? "Start": "End"), a)
};
function oo(a, b, c) {
	c = c || a.de();
	if (!c || !c.firstChild) return c;
	for (var d = 1 == b,
		e = 0,
		f = c.childNodes.length; e < f; e++) {
		var h = d ? e: f - e - 1,
			k = c.childNodes[h];
		try {
			var l = qo(k)
		} catch(n) {
			continue
		}
		var m = l.Ic();
		if (a.Qa()) if (!ho(k)) {
			if (0 == a.eb(m, 1, 1)) {
				a.j = a.l = h;
				break
			}
		} else {
			if (eo(l, a)) return oo(a, b, k)
		} else {
			if (eo(a, l)) {
				if (!ho(k)) {
					d ? a.j = h: a.l = h + 1;
					break
				}
				return oo(a, b, k)
			}
			if (0 > a.eb(m, 1, 0) && 0 < a.eb(m, 0, 1)) return oo(a, b, k)
		}
	}
	return c
}
function po(a, b) {
	var c = 1 == b,
		d = c ? a.Pa() : a.kb();
	if (1 == d.nodeType) {
		d = d.childNodes;
		for (var e = d.length,
			f = c ? 1 : -1, h = c ? 0 : e - 1; 0 <= h && h < e; h += f) {
			var k = d[h];
			if (!ho(k) && 0 == a.m.compareEndPoints((1 == b ? "Start": "End") + "To" + (1 == b ? "Start": "End"), qo(k).Ic())) return c ? h: h + 1
		}
		return - 1 == h ? 0 : h
	}
	a = a.m.duplicate();
	b = lo(d);
	a.setEndPoint(c ? "EndToEnd": "StartToStart", b);
	a = a.text.length;
	return c ? d.length - a: a
}
function mo(a) {
	return 3 == a.nodeType ? a.nodeValue: a.innerText
}
v.Qa = function() {
	return 0 == this.m.compareEndPoints("StartToEnd", this.m)
};v.Df = function() {
	return this.m.text
};v.select = function() {
	this.m.select()
};
function ro(a) {
	this.g = a
}
B(ro, fo);ro.prototype.Rc = function(a) {
	a.collapse(this.Pa(), this.lb());
	this.kb() == this.Pa() && this.zb() == this.lb() || a.extend(this.kb(), this.zb());
	0 == a.rangeCount && a.addRange(this.g)
};
function so(a) {
	this.g = a
}
B(so, fo);so.prototype.eb = function(a, b, c) {
	return H("528") ? so.G.eb.call(this, a, b, c) : this.g.compareBoundaryPoints(1 == c ? 1 == b ? x.Range.START_TO_START: x.Range.END_TO_START: 1 == b ? x.Range.START_TO_END: x.Range.END_TO_END, a)
};so.prototype.Rc = function(a, b) {
	b ? a.setBaseAndExtent(this.kb(), this.zb(), this.Pa(), this.lb()) : a.setBaseAndExtent(this.Pa(), this.lb(), this.kb(), this.zb())
};
function to(a) {
	return Ih ? new ko(a, K(a.parentElement())) : F ? new so(a) : E ? new jo(a) : pf ? new ro(a) : new fo(a)
}
function qo(a) {
	if (D && !Hf(9)) {
		var b = new ko(lo(a), K(a));
		if (ho(a)) {
			for (var c, d = a; (c = d.firstChild) && ho(c);) d = c;
			b.g = d;
			b.j = 0;
			for (d = a; (c = d.lastChild) && ho(c);) d = c;
			b.h = d;
			b.l = 1 == d.nodeType ? d.childNodes.length: d.length;
			b.o = a
		} else b.g = b.h = b.o = a.parentNode,
			b.j = Oc(b.o.childNodes, a),
			b.l = b.j + 1;
		a = b
	} else a = F ? new so(go(a)) : E ? new jo(go(a)) : pf ? new ro(go(a)) : new fo(go(a));
	return a
}
function ho(a) {
	return ei(a) || 3 == a.nodeType
};
function uo() {
	this.l = this.h = this.j = this.g = this.m = null;
	this.o = !1
}
B(uo, Yn);
function vo(a, b) {
	var c = new uo;
	c.m = a;
	c.o = !!b;
	return c
}
v = uo.prototype;v.ze = function() {
	return wo(this).Ic()
};v.Nc = function() {
	return 1
};v.cc = function() {
	return this
};
function wo(a) {
	var b;
	if (! (b = a.m)) {
		b = a.Ja();
		var c = a.Ka(),
			d = a.$a(),
			e = a.ab();
		if (D && !Hf(9)) {
			var f = b,
				h = c,
				k = d,
				l = e,
				m = !1;
			1 == f.nodeType && (h = f.childNodes[h], m = !h, f = h || f.lastChild || f, h = 0);
			var n = lo(f);
			h && n.move(Pa, h);
			f == k && h == l ? n.collapse(!0) : (m && n.collapse(!1), m = !1, 1 == k.nodeType && (k = (h = k.childNodes[l]) || k.lastChild || k, l = 0, m = !h), f = lo(k), f.collapse(!m), l && f.moveEnd(Pa, l), n.setEndPoint("EndToEnd", f));
			l = new ko(n, K(b));
			l.g = b;
			l.j = c;
			l.h = d;
			l.l = e;
			b = l
		} else b = F ? new so(io(b, c, d, e)) : E ? new jo(io(b, c, d, e)) : pf ? new ro(io(b, c, d, e)) : new fo(io(b, c, d, e));
		b = a.m = b
	}
	return b
}
v.Xc = function() {
	return wo(this).de()
};v.Ja = function() {
	return this.g || (this.g = wo(this).Pa())
};v.Ka = function() {
	return null != this.j ? this.j: this.j = wo(this).lb()
};v.$a = function() {
	return this.h || (this.h = wo(this).kb())
};v.ab = function() {
	return null != this.l ? this.l: this.l = wo(this).zb()
};v.Me = function() {
	return this.o
};v.Zc = function() {
	return wo(this).Qa()
};v.Yc = function() {
	return wo(this).Df()
};v.La = function() {
	return new bo(this.Ja(), this.Ka(), this.$a(), this.ab())
};v.select = function() {
	wo(this).select(this.o)
};
function xo() {}
B(xo, Yn);
function yo() {
	this.j = this.h = this.g = null
}
B(yo, xo);v = yo.prototype;v.ze = function() {
	return this.g || document.body.createControlRange()
};v.Nc = function() {
	return this.g ? this.g.length: 0
};v.cc = function(a) {
	a = this.g.item(a);
	return vo(qo(a), void 0)
};v.Xc = function() {
	return si.apply(null, this.Be())
};v.Ja = function() {
	return zo(this)[0]
};v.Ka = function() {
	return 0
};v.$a = function() {
	var a = zo(this),
		b = Nc(a);
	return Uc(a,
		function(c) {
			return oi(c, b)
		})
};v.ab = function() {
	return this.$a().childNodes.length
};v.Be = function() {
	if (!this.h && (this.h = [], this.g)) for (var a = 0; a < this.g.length; a++) this.h.push(this.g.item(a));
	return this.h
};
function zo(a) {
	a.j || (a.j = a.Be().concat(), a.j.sort(function(b, c) {
		return b.sourceIndex - c.sourceIndex
	}));
	return a.j
}
v.Zc = function() {
	return ! this.g || !this.g.length
};v.Yc = function() {
	return ""
};v.La = function() {
	return new Ao(this)
};v.select = function() {
	this.g && this.g.select()
};
function Ao(a) {
	this.j = this.h = this.g = null;
	a && (this.j = zo(a), this.g = this.j.shift(), this.h = Nc(this.j) || this.g);
	Wn.call(this, this.g, !1, !0)
}
B(Ao, ao);Ao.prototype.H = function() {
	return this.g
};Ao.prototype.B = function() {
	return ! this.depth && !this.j.length
};Ao.prototype.next = function() {
	if (this.B()) throw gg;
	if (!this.depth) {
		var a = this.j.shift();
		Xn(this, a, 1, 1);
		return a
	}
	return Ao.G.next.call(this)
};
function Bo() {
	this.g = [];
	this.l = [];
	this.j = this.h = null
}
B(Bo, xo);v = Bo.prototype;v.ze = function() {
	return this.g[0]
};v.Nc = function() {
	return this.g.length
};v.cc = function(a) {
	this.l[a] || (this.l[a] = vo(to(this.g[a]), void 0));
	return this.l[a]
};v.Xc = function() {
	if (!this.j) {
		for (var a = [], b = 0, c = this.Nc(); b < c; b++) a.push(this.cc(b).Xc());
		this.j = si.apply(null, a)
	}
	return this.j
};
function Co(a) {
	a.h || (a.h = Zn(a), a.h.sort(function(b, c) {
		var d = b.Ja();
		b = b.Ka();
		var e = c.Ja();
		c = c.Ka();
		return d == e && b == c ? 0 : Do(d, b, e, c) ? 1 : -1
	}));
	return a.h
}
v.Ja = function() {
	return Co(this)[0].Ja()
};v.Ka = function() {
	return Co(this)[0].Ka()
};v.$a = function() {
	return Nc(Co(this)).$a()
};v.ab = function() {
	return Nc(Co(this)).ab()
};v.Zc = function() {
	return 0 == this.g.length || 1 == this.g.length && this.cc(0).Zc()
};v.Yc = function() {
	return Rc(Zn(this),
		function(a) {
			return a.Yc()
		}).join("")
};v.La = function() {
	return new Eo(this)
};v.select = function() {
	var a = Zh(K(D ? this.Xc() : this.Ja())).getSelection();
	a.removeAllRanges();
	for (var b = 0,
		c = this.Nc(); b < c; b++) a.addRange(this.cc(b).ze())
};
function Eo(a) {
	this.g = null;
	this.h = 0;
	a && (this.g = Rc(Co(a),
		function(b) {
			return ig(b)
		}));
	Wn.call(this, a ? this.H() : null, !1, !0)
}
B(Eo, ao);Eo.prototype.H = function() {
	return this.g[0].H()
};Eo.prototype.B = function() {
	return this.g[this.h].B()
};Eo.prototype.next = function() {
	try {
		var a = this.g[this.h],
			b = a.next();
		Xn(this, a.node, a.m, a.depth);
		return b
	} catch(c) {
		if (c !== gg || this.g.length - 1 == this.h) throw c;
		this.h++;
		return this.next()
	}
};
function Fo() {
	var a = window.getSelection();
	return a && Go(a)
}
function Go(a) {
	var b = !1;
	if (a.createRange) try {
		var c = a.createRange()
	} catch(e) {
		return null
	} else if (a.rangeCount) {
		if (1 < a.rangeCount) {
			b = new Bo;
			c = 0;
			for (var d = a.rangeCount; c < d; c++) b.g.push(a.getRangeAt(c));
			return b
		}
		c = a.getRangeAt(0);
		b = Do(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
	} else return null; (a = c) && a.addElement ? (b = new yo, b.g = a, a = b) : a = vo(to(a), b);
	return a
}
function Do(a, b, c, d) {
	if (a == c) return d < b;
	var e;
	if (1 == a.nodeType && b) if (e = a.childNodes[b]) a = e,
		b = 0;
	else if (oi(a, c)) return ! 0;
	if (1 == c.nodeType && d) if (e = c.childNodes[d]) c = e,
		d = 0;
	else if (oi(c, a)) return ! 1;
	return 0 < (pi(a, c) || b - d)
};
function Ho() {
	var a = Fo();
	return null != a && !a.Zc() && 0 < a.Yc().length
};
function Io(a) {
	Q.call(this);
	this.F = a;
	a = D ? eb: Ja;
	this.g = P(this.F, D ? db: cb, this, !D);
	this.h = P(this.F, a, this, !D)
}
B(Io, Q);Io.prototype.handleEvent = function(a) {
	var b = new Jj(a.h);
	b.type = a.type == db || a.type == cb ? db: eb;
	this.dispatchEvent(b)
};Io.prototype.L = function() {
	Io.G.L.call(this);
	fk(this.g);
	fk(this.h);
	delete this.F
};
function Jo(a, b, c) {
	this.j = a;
	this.l = b;
	this.C = c
}
B(Jo, Qi);Jo.prototype.h = function(a, b, c) {
	xj(this.j, this.l, a, b, void 0, c, this.C)
};
function Ko(a, b) {
	this.g = a instanceof J ? a: new J(a, b)
}
B(Ko, Qi);Ko.prototype.h = function(a, b, c) {
	xj(Zi(a), 0, a, b, this.g, c, null, void 0)
};
function Lo() {
	this.g = new kg
}
function Mo(a) {
	var b = typeof a;
	return b == Gb && a || b == p ? "o" + Ac(a) : b.substr(0, 1) + a
}
v = Lo.prototype;v.add = function(a) {
	this.g.set(Mo(a), a)
};v.remove = function(a) {
	return this.g.remove(Mo(a))
};v.contains = function(a) {
	return mg(this.g, Mo(a))
};v.Ea = function() {
	return this.g.Ea()
};v.La = function() {
	return this.g.La(!1)
};
function No(a, b, c) {
	this.R = c || (a ? Mh(Oh(document, a)) : Mh());
	Jn.call(this, this.R.J(g, {
		style: "position:absolute;display:none;"
	}));
	this.Cb = new J(1, 1);
	this.B = new Lo;
	this.M = null;
	a && Oo(this, a);
	null != b && this.Na(b)
}
B(No, Jn);
var Po = [];v = No.prototype;v.za = null;v.className = "goog-tooltip";v.Rg = 500;v.rg = 0;
function Oo(a, b) {
	b = Oh(document, b);
	a.B.add(b);
	P(b, Db, a.ee, !1, a);
	P(b, Cb, a.dc, !1, a);
	P(b, Bb, a.ig, !1, a);
	P(b, cb, a.Ef, !1, a);
	P(b, Ja, a.dc, !1, a)
}
function Qo(a, b) {
	if (b) b = Oh(document, b),
		Ro(a, b),
		a.B.remove(b);
	else {
		for (var c = a.B.Ea(), d = 0; b = c[d]; d++) Ro(a, b);
		og(a.B.g)
	}
}
function Ro(a, b) {
	ek(b, Db, a.ee, !1, a);
	ek(b, Cb, a.dc, !1, a);
	ek(b, Bb, a.ig, !1, a);
	ek(b, cb, a.Ef, !1, a);
	ek(b, Ja, a.dc, !1, a)
}
v.Na = function(a) {
	vi(this.s(), a)
};v.Yb = function(a) {
	var b = this.s();
	b && ji(b);
	No.G.Yb.call(this, a);
	a ? (b = this.R.g.body, b.insertBefore(a, b.lastChild), Ej(this.M), this.M = new Io(this.s()), Fj(this, Fc(Ej, this.M)), P(this.M, db, this.bc, void 0, this), P(this.M, eb, this.Td, void 0, this)) : (Ej(this.M), this.M = null)
};v.wc = function() {
	return Bi(this.s())
};
function So(a) {
	return a.S ? a.isVisible() ? 4 : 1 : a.ia ? 3 : a.isVisible() ? 2 : 0
}
v.ce = function() {
	if (!Fn.prototype.ce.call(this)) return ! 1;
	if (this.h) for (var a, b = 0; a = Po[b]; b++) oi(a.s(), this.h) || a.setVisible(!1);
	Vc(Po, this) || Po.push(this);
	a = this.s();
	a.className = this.className;
	this.bc();
	P(a, Db, this.Cd, !1, this);
	P(a, Cb, this.Bd, !1, this);
	To(this);
	return ! 0
};v.Ze = function() {
	Wc(Po, this);
	for (var a = this.s(), b, c = 0; b = Po[c]; c++) b.h && oi(a, b.h) && b.setVisible(!1);
	this.hd && this.hd.Td();
	ek(a, Db, this.Cd, !1, this);
	ek(a, Cb, this.Bd, !1, this);
	this.h = void 0;
	0 == So(this) && (this.Ra = !1);
	Fn.prototype.Ze.call(this)
};v.Ue = function(a, b) {
	this.h == a && this.B.contains(this.h) && (this.Ra || !this.Qf ? (this.setVisible(!1), this.isVisible() || (this.h = a, this.C = b || new Uo(Jh(this.Cb)), this.isVisible() && this.jb(), this.setVisible(!0))) : this.h = void 0);
	this.S = void 0
};v.Be = function() {
	return this.B
};v.Qi = function(a) {
	this.ia = void 0;
	if (a == this.h) {
		a = this.R;
		var b = a.g;
		try {
			var c = b && b.activeElement;
			var d = c && c.nodeName ? c: null
		} catch(e) {
			d = null
		}
		d = d && this.s() && a.contains(this.s(), d);
		null != this.za && (this.za == this.s() || this.B.contains(this.za)) || d || this.ac && this.ac.za || this.setVisible(!1)
	}
};
function Vo(a, b) {
	var c = Xh(a.R.g);
	a.Cb.x = b.clientX + c.x;
	a.Cb.y = b.clientY + c.y
}
v.ee = function(a) {
	var b = Wo(this, a.target);
	this.za = b;
	this.bc();
	b != this.h && (this.h = b, Xo(this, b), Yo(this), Vo(this, a))
};
function Wo(a, b) {
	try {
		for (; b && !a.B.contains(b);) b = b.parentNode;
		return b
	} catch(c) {
		return null
	}
}
v.ig = function(a) {
	Vo(this, a);
	this.Ra = !0
};v.Ef = function(a) {
	this.za = a = Wo(this, a.target);
	this.Ra = !0;
	if (this.h != a) {
		this.h = a;
		var b = new Zo(this.za);
		this.bc();
		Xo(this, a, b);
		Yo(this)
	}
};
function Yo(a) {
	if (a.h) for (var b, c = 0; b = Po[c]; c++) oi(b.s(), a.h) && (b.ac = a, a.hd = b)
}
v.dc = function(a) {
	var b = Wo(this, a.target),
		c = Wo(this, a.relatedTarget);
	b != c && (b == this.za && (this.za = null), To(this), this.Ra = !1, !this.isVisible() || a.relatedTarget && oi(this.s(), a.relatedTarget) ? this.h = void 0 : this.Td())
};v.Cd = function() {
	var a = this.s();
	this.za != a && (this.bc(), this.za = a)
};v.Bd = function(a) {
	var b = this.s();
	this.za != b || a.relatedTarget && oi(b, a.relatedTarget) || (this.za = null, this.Td())
};
function Xo(a, b, c) {
	a.S || (a.S = Tk(A(a.Ue, a, b, c), a.Rg))
}
function To(a) {
	a.S && (Uk(a.S), a.S = void 0)
}
v.Td = function() {
	2 == So(this) && (this.ia = Tk(A(this.Qi, this, this.h), this.rg))
};v.bc = function() {
	this.ia && (Uk(this.ia), this.ia = void 0)
};v.L = function() {
	this.setVisible(!1);
	To(this);
	Qo(this);
	this.s() && ji(this.s());
	this.za = null;
	delete this.R;
	No.G.L.call(this)
};
function Uo(a, b) {
	Ko.call(this, a, b)
}
B(Uo, Ko);Uo.prototype.h = function(a, b, c) {
	b = Zi(a);
	b = bj(b);
	c = c ? new Ri(c.top + 10, c.right, c.bottom, c.left + 10) : new Ri(10, 0, 0, 10);
	Aj(this.g, a, 8, c, b, 9) & 496 && Aj(this.g, a, 8, c, b, 5)
};
function Zo(a) {
	Jo.call(this, a, 5)
}
B(Zo, Jo);Zo.prototype.h = function(a, b, c) {
	var d = new J(10, 0);
	xj(this.j, this.l, a, b, d, c, 9) & 496 && xj(this.j, 4, a, 1, d, c, 5)
};
function $o() {
	this.h = []
}
B($o, Dl);wc($o);
function ap(a, b) {
	var c = a.h[b];
	if (!c) {
		switch (b) {
			case 0:
				c = a.ha() + "-highlight";
				break;
			case 1:
				c = a.ha() + "-checkbox";
				break;
			case 2:
				c = a.ha() + "-content"
		}
		a.h[b] = c
	}
	return c
}
v = $o.prototype;v.Wb = function() {
	return "menuitem"
};v.J = function(a) {
	var b = a.h.J(g, Gl(this, a).join(" "), bp(this, a.ja(), a.h));
	cp(this, a, b, !!(a.fa & 8) || !!(a.fa & 16));
	return b
};v.yb = function(a) {
	return a && a.firstChild
};v.Ia = function(a, b) {
	var c = li(b),
		d = ap(this, 2);
	c && Mi(c, d) || b.appendChild(bp(this, b.childNodes, a.h));
	Mi(b, kb) && (a.Pd(!0), this.Pd(a, b, !0));
	return $o.G.Ia.call(this, a, b)
};v.rc = function(a, b) {
	var c = this.yb(a),
		d = dp(this, a) ? c.firstChild: null;
	$o.G.rc.call(this, a, b);
	d && !dp(this, a) && c.insertBefore(d, c.firstChild || null)
};
function bp(a, b, c) {
	a = ap(a, 2);
	return c.J(g, a, b)
}
v.Qg = function(a, b, c) {
	a && b && cp(this, a, b, c)
};v.Pd = function(a, b, c) {
	a && b && cp(this, a, b, c)
};
function dp(a, b) {
	return (b = a.yb(b)) ? (b = b.firstChild, a = ap(a, 1), !!b && ni(b) && Mi(b, a)) : !1
}
function cp(a, b, c, d) {
	Kl(a, c, b.Mc());
	Ll(a, b, c);
	d != dp(a, c) && (d ? L(c, kb) : Oi(c, kb), c = a.yb(c), d ? (a = ap(a, 1), c.insertBefore(b.h.J(g, a), c.firstChild || null)) : c.removeChild(c.firstChild))
}
v.Kc = function(a) {
	switch (a) {
		case 2:
			return ap(this, 0);
		case 16:
		case 8:
			return lb;
		default:
			return $o.G.Kc.call(this, a)
	}
};v.td = function(a) {
	var b = ap(this, 0);
	switch (a) {
		case lb:
			return 16;
		case b:
			return 2;
		default:
			return $o.G.td.call(this, a)
	}
};v.ha = function() {
	return "goog-menuitem"
};
function ep(a, b, c, d) {
	V.call(this, a, d || $o.ca(), c);
	this.ya(b)
}
B(ep, V);v = ep.prototype;v.Ba = function() {
	var a = this.Sa;
	return null != a ? a: this.fb()
};v.ya = function(a) {
	this.Sa = a
};v.sa = function(a, b) {
	ep.G.sa.call(this, a, b);
	switch (a) {
		case 8:
			this.$ & 16 && !b && Ul(this, 16, !1) && Xl(this, 16, !1); (a = this.s()) && this.g.Qg(this, a, b);
			break;
		case 16:
			(a = this.s()) && this.g.Pd(this, a, b)
	}
};v.Qg = function(a) {
	this.sa(8, a)
};v.Pd = function(a) {
	this.sa(16, a)
};v.fb = function() {
	var a = this.ja();
	return Array.isArray(a) ? (a = Rc(a,
		function(b) {
			return ni(b) && (Mi(b, "goog-menuitem-accel") || Mi(b, "goog-menuitem-mnemonic-separator")) ? "": Di(b)
		}).join(""), Xe(a)) : ep.G.fb.call(this)
};v.ec = function(a) {
	var b = this.xb();
	if (b) {
		var c = b.U;
		b.U = null;
		if (b = c && typeof a.clientX === Fb) b = new J(a.clientX, a.clientY),
			b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y: !1;
		if (b) return
	}
	ep.G.ec.call(this, a)
};v.uc = function(a) {
	return a.keyCode == this.Bg && this.nc(a) ? !0 : ep.G.uc.call(this, a)
};v.Rh = function() {
	return this.Bg
};Ol("goog-menuitem",
	function() {
		return new ep(null)
	});ep.prototype.Mc = function() {
		return this.fa & 16 ? "menuitemcheckbox": this.fa & 8 ? "menuitemradio": ep.G.Mc.call(this)
	};ep.prototype.xb = function() {
		return V.prototype.xb.call(this)
	};ep.prototype.rd = function() {
		return V.prototype.rd.call(this)
	};
function fp(a) {
	this.g = a
}
wc(fp);
function gp(a, b) {
	a && (a.tabIndex = b ? 0 : -1)
}
v = fp.prototype;v.J = function(a) {
	var b = a.h,
		c = b.J,
		d = this.$c(),
		e = [d, a.Rb == sb ? d + "-horizontal": d + "-vertical"];
	a.isEnabled() || e.push(d + ba);
	return c.call(b, g, e.join(" "))
};v.fe = function(a) {
	return a.tagName == g
};
function hp(a, b, c) {
	c.id && sl(b, c.id);
	var d = a.$c(),
		e = !1,
		f = Ki(c);
	f && Pc(f,
		function(h) {
			h == d ? e = !0 : h && (h == d + ba ? b.oa(!1) : h == d + "-horizontal" ? ip(b, sb) : h == d + "-vertical" && ip(b, bc))
		},
		a);
	e || L(c, d);
	jp(a, b, c);
	return c
}
function jp(a, b, c) {
	if (c) for (var d = c.firstChild,
		e; d && d.parentNode == c;) {
		e = d.nextSibling;
		if (1 == d.nodeType) {
			var f = a.Ae(d);
			f && (f.F = d, b.isEnabled() || f.oa(!1), b.zc(f), xl(f, d))
		} else d.nodeValue && "" != Bd(d.nodeValue) || c.removeChild(d);
		d = e
	}
}
v.Ae = function(a) {
	a: {
		a = Ki(a);
		for (var b = 0,
			c = a.length; b < c; b++) {
			var d = a[b];
			if (d = d in Pl ? Pl[d]() : null) {
				a = d;
				break a
			}
		}
		a = null
	}
	return a
};v.ge = function(a) {
	a = a.s();
	kj(a, !0, E);
	D && (a.hideFocus = !0);
	var b = this.g;
	b && Cj(a, b)
};v.$c = function() {
	return "goog-container"
};
function kp() {}
B(kp, Dl);wc(kp);kp.prototype.J = function(a) {
	return a.h.J(g, this.ha())
};kp.prototype.Ia = function(a, b) {
	b.id && sl(a, b.id);
	if ("HR" == b.tagName) {
		var c = b;
		b = this.J(a);
		hi(b, c);
		ji(c)
	} else L(b, this.ha());
	return b
};kp.prototype.rc = function() {};kp.prototype.ha = function() {
	return jb
};
function lp(a, b) {
	V.call(this, null, a || kp.ca(), b);
	this.sa(1, !1);
	this.sa(2, !1);
	this.sa(4, !1);
	this.sa(32, !1);
	this.$ = 1
}
B(lp, V);lp.prototype.T = function() {
	lp.G.T.call(this);
	var a = this.s();
	Cj(a, "separator")
};Ol(jb,
	function() {
		return new lp
	});
function mp(a) {
	this.g = a || "menu"
}
B(mp, fp);wc(mp);v = mp.prototype;v.fe = function(a) {
	return "UL" == a.tagName || mp.G.fe.call(this, a)
};v.Ae = function(a) {
	return "HR" == a.tagName ? new lp: mp.G.Ae.call(this, a)
};v.Dc = function(a, b) {
	return oi(a.s(), b)
};v.$c = function() {
	return "goog-menu"
};v.ge = function(a) {
	mp.G.ge.call(this, a);
	a = a.s();
	Dj(a, "haspopup", "true")
};
function np(a, b, c, d) {
	Jo.call(this, a, b);
	this.A = c ? 5 : 0;
	this.m = d || void 0
}
B(np, Jo);np.prototype.o = function(a) {
	this.A = a
};np.prototype.h = function(a, b, c) {
	var d = xj(this.j, this.l, a, b, null, c, 10, void 0, this.m);
	if (d & 496) {
		var e = op(d, this.l);
		b = op(d, b);
		d = xj(this.j, e, a, b, null, c, 10, void 0, this.m);
		d & 496 && (e = op(d, e), b = op(d, b), xj(this.j, e, a, b, null, c, this.A, void 0, this.m))
	}
};
function op(a, b) {
	a & 48 && (b ^= 4);
	a & 192 && (b ^= 1);
	return b
};
function pp(a, b) {
	this.g = a instanceof J ? a: new J(a, b)
}
B(pp, Qi);pp.prototype.h = function(a, b, c) {
	var d = K(a);
	var e = d.body;
	d = d.documentElement;
	d = new J(e.scrollLeft || d.scrollLeft, e.scrollTop || d.scrollTop);
	e = this.g.x + d.x;
	d = this.g.y + d.y;
	var f = yj(a);
	e -= f.x;
	d -= f.y;
	Aj(new J(e, d), a, b, c, null, null, void 0)
};
function qp(a, b) {
	pp.call(this, a, b)
}
B(qp, pp);qp.prototype.j = 0;qp.prototype.o = function(a) {
	this.j = a
};qp.prototype.h = function(a, b, c) {
	var d = Zi(a);
	d = bj(d);
	var e = Yh(Mh(a).g);
	e = new J(this.g.x + e.scrollLeft, this.g.y + e.scrollTop);
	var f = b,
		h = Aj(e, a, f, c, d, 10, void 0);
	if (0 != (h & 496)) {
		if (h & 16 || h & 32) f ^= 4;
		if (h & 64 || h & 128) f ^= 1;
		h = Aj(e, a, f, c, d, 10, void 0);
		0 != (h & 496) && Aj(e, a, b, c, d, this.j, void 0)
	}
};
function rp(a, b, c) {
	R.call(this, c);
	this.Bb = b || fp.ca();
	this.Rb = a || bc
}
B(rp, R);v = rp.prototype;v.jc = null;v.xc = null;v.Bb = null;v.Rb = null;v.la = !0;v.Ab = !0;v.Mb = !0;v.ma = -1;v.ra = null;v.kc = !1;v.rb = null;
function X(a) {
	return a.jc || a.s()
}
function sp(a, b) {
	if (a.Mb) {
		var c = X(a),
			d = a.Z;
		a.jc = b;
		var e = X(a);
		d && (a.jc = c, tp(a, !1), a.jc = b, il(up(a), e), tp(a, !0))
	} else throw Error("Can't set key event target for container that doesn't support keyboard focus!");
}
function up(a) {
	return a.xc || (a.xc = new hl(X(a)))
}
v.J = function() {
	this.F = this.Bb.J(this)
};v.Uc = function() {
	return this.s()
};v.Yd = function(a) {
	return this.Bb.fe(a)
};v.X = function(a) {
	this.F = hp(this.Bb, this, a);
	a.style.display == r && (this.la = !1)
};v.T = function() {
	rp.G.T.call(this);
	yl(this,
		function(b) {
			b.Z && vp(this, b)
		},
		this);
	var a = this.s();
	this.Bb.ge(this);
	this.setVisible(this.la, !0);
	S(this).D(this, "enter", this.De).D(this, "highlight", this.Pc).D(this, "unhighlight", this.He).D(this, "open", this.ki).D(this, "close", this.Zh).D(a, Ij.Zb, this.eh).D(K(a), [Ij.$b, Ij.yc], this.ai).D(a, [Ij.Zb, Ij.$b, Ij.yc, Db, Cb, Wa], this.Xh);
	this.Mb && tp(this, !0)
};
function tp(a, b) {
	var c = S(a),
		d = X(a);
	b ? c.D(d, cb, a.Ff).D(d, Ja, a.ad).D(up(a), "key", a.Ha) : c.ga(d, cb, a.Ff).ga(d, Ja, a.ad).ga(up(a), "key", a.Ha)
}
v.da = function() {
	this.Fb( - 1);
	this.ra && Yl(this.ra, !1);
	this.kc = !1;
	rp.G.da.call(this)
};v.L = function() {
	rp.G.L.call(this);
	this.xc && (this.xc.P(), this.xc = null);
	this.Bb = this.ra = this.rb = this.jc = null
};v.De = function() {
	return ! 0
};v.Pc = function(a) {
	var b = Cl(this, a.target);
	if ( - 1 < b && b != this.ma) {
		var c = wp(this);
		c && Wl(c, !1);
		this.ma = b;
		c = wp(this);
		this.kc && Vl(c, !0);
		this.ra && c != this.ra && (c.fa & 64 ? Yl(c, !0) : Yl(this.ra, !1))
	}
	b = this.s();
	null != a.target.s() && Dj(b, Ba, a.target.s().id)
};v.He = function(a) {
	a.target == wp(this) && (this.ma = -1);
	this.s().removeAttribute("aria-activedescendant")
};v.ki = function(a) { (a = a.target) && a != this.ra && a.xb() == this && (this.ra && Yl(this.ra, !1), this.ra = a)
};v.Zh = function(a) {
	a.target == this.ra && (this.ra = null);
	var b = this.s(),
		c = a.target.s();
	b && a.target.$ & 2 && c && (a = "", c && (a = c.id), Dj(b, Ba, a))
};v.eh = function(a) {
	this.Ab && (this.kc = !0);
	var b = X(this);
	b && zi(b) && Ai(b) ? b.focus() : a.g()
};v.ai = function() {
	this.kc = !1
};v.Xh = function(a) {
	a: {
		var b = a.target;
		if (this.rb) for (var c = this.s(); b && b !== c;) {
			var d = b.id;
			if (d in this.rb) {
				b = this.rb[d];
				break a
			}
			b = b.parentNode
		}
		b = null
	}
	if (b) switch (a.type) {
		case Ij.Zb:
			b.vc(a);
			break;
		case Ij.$b:
		case Ij.yc:
			b.ec(a);
			break;
		case Db:
			b.be(a);
			break;
		case Cb:
			b.Ge(a);
			break;
		case Wa:
			b.Oc(a)
	}
};v.Ff = function() {};v.ad = function() {
	this.Fb( - 1);
	this.kc = !1;
	this.ra && Yl(this.ra, !1)
};v.Ha = function(a) {
	return this.isEnabled() && this.isVisible() && (0 != zl(this) || this.jc) && this.he(a) ? (a.g(), a.stopPropagation(), !0) : !1
};v.he = function(a) {
	var b = wp(this);
	if (b && typeof b.Ha == p && b.Ha(a) || this.ra && this.ra != b && typeof this.ra.Ha == p && this.ra.Ha(a)) return ! 0;
	if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return ! 1;
	switch (a.keyCode) {
		case 27:
			if (this.Mb) X(this).blur();
			else return ! 1;
			break;
		case 36:
			xp(this);
			break;
		case 35:
			yp(this);
			break;
		case 38:
			if (this.Rb == bc) zp(this);
			else return ! 1;
			break;
		case 37:
			if (this.Rb == sb) Bl(this) ? Ap(this) : zp(this);
			else return ! 1;
			break;
		case 40:
			if (this.Rb == bc) Ap(this);
			else return ! 1;
			break;
		case 39:
			if (this.Rb == sb) Bl(this) ? zp(this) : Ap(this);
			else return ! 1;
			break;
		default:
			return ! 1
	}
	return ! 0
};
function vp(a, b) {
	var c = b.s();
	c = c.id || (c.id = rl(b));
	a.rb || (a.rb = {});
	a.rb[c] = b
}
v.zc = function(a, b) {
	rp.G.zc.call(this, a, b)
};v.ke = function(a, b, c) {
	a.Tc |= 2;
	a.Tc |= 64;
	a.sa(32, !1);
	Rl(a, !1);
	var d = a.xb() == this ? Cl(this, a) : -1;
	rp.G.ke.call(this, a, b, c);
	a.Z && this.Z && vp(this, a);
	a = d; - 1 == a && (a = zl(this));
	a == this.ma ? this.ma = Math.min(zl(this) - 1, b) : a > this.ma && b <= this.ma ? this.ma++:a < this.ma && b > this.ma && this.ma--
};v.Zd = function(a, b) {
	if (a = typeof a === t ? vl(this, a) : a) {
		var c = Cl(this, a); - 1 != c && (c == this.ma ? (Wl(a, !1), this.ma = -1) : c < this.ma && this.ma--);
		var d = a.s();
		d && d.id && this.rb && (c = this.rb, d = d.id, d in c && delete c[d])
	}
	a = rp.G.Zd.call(this, a, b);
	Rl(a, !0);
	return a
};
function ip(a, b) {
	if (a.s()) throw Error(ja);
	a.Rb = b
}
v.isVisible = function() {
	return this.la
};v.setVisible = function(a, b) {
	if (b || this.la != a && this.dispatchEvent(a ? "show": rb)) {
		this.la = a;
		var c = this.s();
		c && (N(c, a), this.Mb && gp(X(this), this.Ab && this.la), b || this.dispatchEvent(this.la ? "aftershow": "afterhide"));
		return ! 0
	}
	return ! 1
};v.isEnabled = function() {
	return this.Ab
};v.oa = function(a) {
	this.Ab != a && this.dispatchEvent(a ? "enable": "disable") && (a ? (this.Ab = !0, yl(this,
		function(b) {
			b.$g ? delete b.$g: b.oa(!0)
		})) : (yl(this,
			function(b) {
				b.isEnabled() ? b.oa(!1) : b.$g = !0
			}), this.kc = this.Ab = !1), this.Mb && gp(X(this), a && this.la))
};
function Bp(a, b) {
	b != a.Mb && a.Z && tp(a, b);
	a.Mb = b;
	a.Ab && a.la && gp(X(a), b)
}
v.Fb = function(a) { (a = Al(this, a)) ? Wl(a, !0) : -1 < this.ma && Wl(wp(this), !1)
};
function wp(a) {
	return Al(a, a.ma)
}
function xp(a) {
	Cp(a,
		function(b, c) {
			return (b + 1) % c
		},
		zl(a) - 1)
}
function yp(a) {
	Cp(a,
		function(b, c) {
			b--;
			return 0 > b ? c - 1 : b
		},
		0)
}
function Ap(a) {
	Cp(a,
		function(b, c) {
			return (b + 1) % c
		},
		a.ma)
}
function zp(a) {
	Cp(a,
		function(b, c) {
			b--;
			return 0 > b ? c - 1 : b
		},
		a.ma)
}
function Cp(a, b, c) {
	c = 0 > c ? Cl(a, a.ra) : c;
	var d = zl(a);
	c = b.call(a, c, d);
	for (var e = 0; e <= d;) {
		var f = Al(a, c);
		if (f && a.Rf(f)) {
			a.Fb(c);
			break
		}
		e++;
		c = b.call(a, c, d)
	}
}
v.Rf = function(a) {
	return a.isVisible() && a.isEnabled() && !!(a.fa & 2)
};
function Dp() {}
B(Dp, Dl);wc(Dp);Dp.prototype.ha = function() {
	return ib
};
function Ep(a, b, c) {
	V.call(this, a, c || Dp.ca(), b);
	this.sa(1, !1);
	this.sa(2, !1);
	this.sa(4, !1);
	this.sa(32, !1);
	this.$ = 1
}
B(Ep, V);Ol(ib,
	function() {
		return new Ep(null)
	});Ol(jb,
		function() {
			return new lp
		});
function Fp(a, b) {
	rp.call(this, bc, b || mp.ca(), a);
	Bp(this, !1)
}
B(Fp, rp);v = Fp.prototype;v.le = !0;v.Dc = function(a) {
	if (this.Bb.Dc(this, a)) return ! 0;
	for (var b = 0,
		c = zl(this); b < c; b++) {
		var d = Al(this, b);
		if (typeof d.Dc == p && d.Dc(a)) return ! 0
	}
	return ! 1
};v.setVisible = function(a, b, c) { (b = Fp.G.setVisible.call(this, a, b)) && a && this.Z && this.le && X(this).focus();
	a && c && typeof c.clientX === Fb ? this.U = new J(c.clientX, c.clientY) : this.U = null;
	return b
};v.De = function(a) {
	this.le && X(this).focus();
	return Fp.G.De.call(this, a)
};v.Rf = function(a) {
	return a.isEnabled() && a.isVisible() && !!(a.fa & 2)
};v.X = function(a) {
	for (var b = this.Bb,
		c = Rh(this.h.g, g, b.$c() + "-content", a), d = c.length, e = 0; e < d; e++) jp(b, this, c[e]);
	Fp.G.X.call(this, a)
};v.he = function(a) {
	var b = Fp.G.he.call(this, a);
	b || yl(this,
		function(c) { ! b && c.Rh && c.Bg == a.keyCode && (this.isEnabled() && this.Fb(Cl(this, c)), b = c.Ha(a))
		},
		this);
	return b
};v.Fb = function(a) {
	Fp.G.Fb.call(this, a);
	if (a = Al(this, a)) {
		var b = a.s();
		a = this.s() || Yh(document);
		var c = a || Yh(document);
		var d = cj(b),
			e = cj(c),
			f = pj(c);
		if (c == Yh(document)) {
			var h = d.x - c.scrollLeft;
			d = d.y - c.scrollTop;
			D && !Hf(10) && (h += f.left, d += f.top)
		} else h = d.x - e.x - f.left,
			d = d.y - e.y - f.top;
		b = fj(b);
		f = c.clientHeight - b.height;
		e = c.scrollLeft;
		var k = c.scrollTop;
		e += Math.min(h, Math.max(h - (c.clientWidth - b.width), 0));
		k += Math.min(d, Math.max(d - f, 0));
		c = new J(e, k);
		a.scrollLeft = c.x;
		a.scrollTop = c.y
	}
};
function Gp(a, b) {
	Fp.call(this, a, b);
	this.le = !0;
	Bp(this, !0);
	this.setVisible(!1, !0);
	this.g = new kg
}
B(Gp, Fp);v = Gp.prototype;v.Yg = !1;v.vg = 0;v.Da = null;v.X = function(a) {
	Gp.G.X.call(this, a); (a = a.getAttribute("for") || a.htmlFor) && Hp(this, this.h.s(a), 1)
};v.T = function() {
	Gp.G.T.call(this);
	this.g.forEach(this.fd, this);
	var a = S(this);
	a.D(this, Aa, this.We);
	a.D(this.h.g, Ab, this.Ui, !0)
};
function Hp(a, b, c, d, e, f) {
	b && mg(a.g, Ac(b)) || (c = a.se(b, c, d, e, f), a.Z && a.fd(c), b = Fc(a.Vi, b), a.s() && S(a).D(a.s(), xb, b))
}
v.Vi = function(a, b) {
	if (27 == b.keyCode) a.focus();
	else if (a = Al(this, this.ma)) {
		var c = a.s();
		a = new Jj(b.h, c);
		a.target = c;
		if (32 == b.keyCode || 13 == b.keyCode) if (Mj(c)) jk(c, xb, !1, a);
		else if (c = ak(c)) if (c = c.g[xb.toString()]) {
			c = c.concat();
			for (var d = 0; d < c.length; d++) {
				var e = c[d];
				e && 0 == e.capture && !e.pc && hk(e, a)
			}
		}
		32 == b.keyCode && this.mb()
	}
};v.se = function(a, b, c, d, e) {
	if (!a) return null;
	b = {
		F: a,
		Ug: b,
		Ri: c,
		Gc: d ? Wa: Ab,
		Re: e
	};
	this.g.set(Ac(a), b);
	return b
};v.fd = function(a) {
	S(this).D(a.F, a.Gc, this.Nd);
	a.Gc != Wa && S(this).D(a.F, xb, this.Yi)
};v.nd = function() {
	if (this.Z) for (var a = this.g.Ua(), b = 0; b < a.length; b++) this.ue(this.g.get(a[b]));
	og(this.g)
};v.ue = function(a) {
	S(this).ga(a.F, a.Gc, this.Nd)
};v.bd = function(a, b, c) {
	b = void 0 !== a.Ug ? new np(a.F, a.Ug, !0) : new qp(b, c);
	b.o && b.o(5);
	var d = a.Ri;
	c = a.Re;
	var e = a.F;
	a = this.isVisible(); (this.isVisible() || 150 > Date.now() - this.vg) && this.Yg ? this.mb() : (this.Da = e || null, this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d: 8, a || (this.s().style.visibility = qb), N(this.s(), !0), b.h(this.s(), d, c), a || (this.s().style.visibility = cc), this.Fb( - 1), this.setVisible(!0)))
};v.mb = function() {
	this.isVisible() && (this.setVisible(!1), this.isVisible() || (this.vg = Date.now(), this.Da = null))
};v.We = function() {
	this.mb()
};v.Nd = function(a) {
	Ip(this, a)
};v.Yi = function(a) {
	32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || Ip(this, a);
	40 == a.keyCode && xp(this)
};
function Ip(a, b) {
	for (var c = a.g.Ua(), d = 0; d < c.length; d++) {
		var e = a.g.get(c[d]);
		if (e.F == b.currentTarget) {
			a.bd(e, b.clientX, b.clientY);
			b.g();
			b.stopPropagation();
			break
		}
	}
}
v.Ui = function(a) {
	this.isVisible() && !this.Dc(a.target) && this.mb()
};v.ad = function(a) {
	Gp.G.ad.call(this, a);
	this.mb()
};v.L = function() {
	Gp.G.L.call(this);
	this.g && (og(this.g), delete this.g)
};
function Y(a, b, c) {
	Gp.call(this, b, c);
	this.o = new kg;
	this.l = a || 5;
	this.A = null;
	this.B = !1;
	this.m = Array(this.l);
	this.N = Array(this.l);
	this.I = fn.ca();
	this.K = dn.ca();
	this.R = null;
	this.Yg = !0
}
B(Y, Gp);
var Jp = "";v = Y.prototype;v.J = function() {
	Y.G.J.call(this);
	for (var a = 0; a < this.l; ++a) this.zc(new ep(""), !0)
};v.ka = function(a) {
	Y.G.ka.call(this, a);
	L(this.s(), "alt-menu")
};v.mf = function(a) {
	a = this.o.get(Ac(a));
	for (var b = 0; b < W(a, 2) && b < this.l; ++b) {
		var c = Al(this, b);
		c.Ib(an(On(a, b), 0));
		c.ya(b);
		c.setVisible(!0, !0)
	}
	for (; b < this.l; ++b) Al(this, b).setVisible(!1)
};
function Kp(a, b, c) {
	a.o.set(Ac(b), c);
	Hp(a, b, 9, 8, !1, new Ri( - 2, 1, -2, 1))
}
v.nd = function() {
	Y.G.nd.call(this);
	og(this.o)
};v.setVisible = function(a, b) {
	var c = this.Da;
	this.R = c;
	a && null != c ? (Lp(this, c), ln(this.I, "altshow"), en(this.K, 207)) : null != this.A && Tn(this.A, 0, 0);
	null != c && (a ? this.te(c) : this.qe(c));
	b = Y.G.setVisible.call(this, a, b);
	a && null != this.s() && kj(this.s(), !1);
	return b
};v.fb = function() {
	if (null != this.R) {
		var a = Bi(this.R);
		if (null != a) return a
	}
	return ""
};v.mb = function() {
	Y.G.mb.call(this);
	if (this.B) for (var a = 0; a < this.m.length; a++) {
		var b = this.m[a];
		Uk(b.l);
		b.m();
		b.A( - 1);
		b.m();
		b.setVisible(!1)
	}
};v.te = function(a) {
	L(a, "trans-target");
	a.title = ""
};v.qe = function(a) {
	Oi(a, "trans-target");
	a.title = Jp
};v.Ha = function(a) {
	if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode) return ! 1;
	var b = Y.G.Ha.call(this, a);
	if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
		var c = ij(this.Da.parentNode.parentNode),
			d = null;
		if (!c && 37 == a.keyCode || c && 39 == a.keyCode) d = !1;
		if (!c && 39 == a.keyCode || c && 37 == a.keyCode) d = !0;
		if (this.me(d) && (c = this.Da, (c = d ? void 0 !== c.nextElementSibling ? c.nextElementSibling: mi(c.nextSibling, !0) : void 0 !== c.previousElementSibling ? c.previousElementSibling: mi(c.previousSibling, !1)) && c != this.Da)) return this.mb(),
			this.Pg(d),
			this.bd(c ? this.g.get(Ac(c)) : null, 0, 0),
			Mp(this),
			a.g(),
			a.stopPropagation(),
			!0
	}
	return b
};v.bd = function(a, b, c) {
	ij((a.F || this.Da).parentNode.parentNode) ? M(this.s(), Ya, Qb) : M(this.s(), Ya, "");
	if (this.B) for (var d = 0; d < this.m.length; d++) Np(this, d),
		vi(this.m[d].j, "...");
	this.mf(a.F);
	Y.G.bd.call(this, a, b, c)
};
function Op(a, b, c) { ! a.B || b >= a.l || "" == c || (vi(a.m[b].j, c), Np(a, b))
}
function Np(a, b) {
	var c = a.m[b];
	xj(Al(a, b).s(), 12, c.s(), 8, new J(1, 0))
}
v.Pc = function(a) {
	Y.G.Pc.call(this, a);
	var b = this.Da;
	null != b && (ln(this.I, "altmenuhl"), en(this.K, 209), Lp(this, b), a = this.sd(a.target), -1 != a && a != this.l && (Uk(this.N[a]), this.N[a] = Tk(this.Oi, 300, this), this.B && (b = this.m[a], ij(this.Da.parentNode.parentNode) ? (L(b.s(), Qb), M(b.s(), Ya, Qb)) : (Oi(b.s(), Qb), M(b.s(), Ya, "")), Np(this, a), Uk(b.l), 0 == b.g ? b.l = Tk(A(b.A, b, 1), 300) : b.A(1))))
};v.Oi = function() {
	ln(this.I, "altmenuhold");
	en(this.K, 208)
};v.He = function(a) {
	Y.G.He.call(this, a);
	a = this.sd(a.target); - 1 != a && a != this.l && (Uk(this.N[a]), this.B && this.m[a].B())
};v.sd = function(a) {
	return Cl(this, a)
};v.me = function() {
	return ! 0
};v.Pg = function() {};v.se = function(a, b, c, d, e) { (a = Y.G.se.call(this, a, b, c, d, e)) && a.Gc == Ab && (a.Gc = Sa);
	return a
};v.fd = function(a) {
	Y.G.fd.call(this, a);
	S(this).D(a.F, Db, this.ng);
	S(this).D(a.F, Cb, this.zd);
	S(this).D(a.F, Wa, this.lg);
	S(this).D(a.F, Bb, this.mg)
};v.ue = function(a) {
	Y.G.ue.call(this, a);
	S(this).ga(a.F, Db, this.ng);
	S(this).ga(a.F, Cb, this.zd);
	S(this).ga(a.F, Wa, this.lg);
	S(this).ga(a.F, Bb, this.mg)
};
function Lp(a, b) {
	if (null != a.A && (b = a.o.get(Ac(b))) && (a = a.A, a.h)) for (var c = a.F && (a.F.value || Bi(a.F)), d = -1, e = -1, f = !1, h = 0; h < W(a.h, 5); h++) {
		var k = Qn(a.h, h);
		if (0 != W(k, 2) && (0 == $m(k, 5) && (f = c.indexOf(an(k, 4), e + 1), 0 <= f ? (d = f, e = d + an(k, 4).length, f = !0) : f = !1), Qn(a.h, h).g == b.g)) {
			if (f) {
				c = [];
				for (e = 0; e < W(b, 3); ++e) c.push({
					Hc: d + $m(new Mn(bn(b, 3, e)), 0),
					tf: d + $m(new Mn(bn(b, 3, e)), 1)
				});
				Tn(a, 0, 0, void 0, c)
			} else d = c.indexOf(an(b, 0)),
				0 <= d && Tn(a, d, d + an(b, 0).length);
			break
		}
	}
}
function Pp(a, b) {
	b ? jg(a.g.La(!1),
		function(c) {
			"" == this.h.Af(c.F) && (L(c.F, Yb), this.h.ib(c.F, "_"));
			return ! 0
		},
		a) : jg(a.g.La(!1),
			function(c) {
				Mi(c.F, Yb) && (Oi(c.F, Yb), this.h.ib(c.F, ""));
				return ! 0
			},
			a)
}
v.ng = function(a) { ! Ho() && this.isEnabled() && (L(a.target, Zb), Lp(this, a.target), Pp(this, !0), ln(this.I, "althighlight"), en(this.K, 206))
};v.zd = function(a) {
	Oi(a.target, Zb);
	null == this.A || this.isVisible() || Tn(this.A, 0, 0);
	Pp(this, !1)
};v.mg = function(a) {
	Ho() && this.zd(a)
};v.lg = function(a) {
	Ho() || (this.zd(a), vo(qo(a.target), void 0).select())
};
function Mp(a) {
	jg(a.g.La(!1),
		function(b) {
			Oi(b.F, Zb);
			return ! 0
		},
		a)
}
v.We = function(a) {
	a && a.currentTarget && a.currentTarget.Da && (a.m = a.currentTarget.Da);
	Y.G.We.call(this, a)
};v.Nd = function(a) {
	Ho() ? Mp(this) : this.Ab && Y.G.Nd.call(this, a)
};
function Qp(a, b, c) {
	this.W = this.j = null;
	Y.call(this, a, b, c)
}
B(Qp, Y);v = Qp.prototype;v.Pg = function(a) {
	this.j = a
};v.setVisible = function(a, b) {
	b = Qp.G.setVisible.call(this, a, b);
	this.j = null;
	a ? this.W = this.fb() : null != this.W && this.W != this.fb() && this.dispatchEvent(new Gj(Aa, this));
	return b
};v.te = function(a) {
	Qp.G.te.call(this, a);
	L(a, "trans-edit");
	a.contentEditable = !0;
	sp(this, a);
	X(this).focus();
	yi(X(this), !0);
	S(this).D(a, xb, this.fg);
	S(this).D(a, Cb, this.Ad);
	S(this).D(a, Db, this.Ad);
	if (null != this.j) {
		a = vo(qo(a), void 0);
		var b = this.j ? a.Ka() : a.ab(),
			c = $n(a);
		a = c;
		var d = b,
			e = new uo;
		e.o = Do(a, d, c, b);
		if (ni(a) && !ei(a)) {
			var f = a.parentNode;
			d = Oc(f.childNodes, a);
			a = f
		}
		ni(c) && !ei(c) && (f = c.parentNode, b = Oc(f.childNodes, c), c = f);
		e.o ? (e.g = c, e.j = b, e.h = a, e.l = d) : (e.g = a, e.j = d, e.h = c, e.l = b);
		e.select()
	}
};v.qe = function(a) {
	Qp.G.qe.call(this, a);
	Oi(a, "trans-edit");
	a.contentEditable = !1;
	X(this) && yi(X(this), !1);
	S(this).ga(a, xb, this.fg);
	S(this).ga(a, Cb, this.Ad);
	S(this).ga(a, Db, this.Ad)
};v.Ad = function() {
	var a = Fo();
	null == a || a.Ja() == a.$a() && a.Ka() == a.ab() || this.setVisible(a.Ja() == a.$a())
};v.fg = function(a) {
	for (var b = 0; b < this.l; ++b) Al(this, b).setVisible(!1);
	if (13 == a.keyCode || 3 == a.keyCode) return null === wp(this) ? (this.mb(), a.stopPropagation(), a.g(), !0) : !1;
	null === wp(this) || !bl(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Da.focus(), this.Fb(Cl(this, null)));
	return ! 1
};v.me = function(a) {
	var b = Fo();
	if (b.Ja() == b.$a() && b.Ka() == b.ab()) {
		var c = b.Me() ? b.Ka() : b.ab();
		b = vo(qo($n(b)), void 0);
		if (!a && c == b.Ka() || a && c == b.ab()) return ! 0
	}
	return ! 1
};
function Rp(a, b, c) {
	Y.call(this, a, b, c);
	this.j = null
}
w(Rp, Y);v = Rp.prototype;v.ka = function(a) {
	Y.prototype.ka.call(this, a);
	this.j = new Sp("");
	this.zc(this.j, !0)
};v.mf = function(a) {
	Y.prototype.mf.call(this, a);
	this.j.sb().value = this.h.Af(a)
};v.setVisible = function(a, b) {
	b = Y.prototype.setVisible.call(this, a, b);
	a && null != this.s() && (X(this) == this.j.sb() || X(this) == this.j.Jc()) && Wl(this.j, !0);
	return b
};v.Pc = function(a) {
	Y.prototype.Pc.call(this, a);
	a.target == this.j ? sp(this, this.j.sb()) : sp(this, this.s());
	X(this).focus();
	X(this).tabIndex = 0
};v.sd = function(a) {
	return a == this.j ? -1 : Y.prototype.sd.call(this, a)
};v.Ha = function(a) {
	return 9 == a.keyCode ? (this.j.$ & 2 ? (X(this) == this.j.sb() ? sp(this, this.j.Jc()) : sp(this, this.j.sb()), X(this).focus(), X(this).tabIndex = 0) : Wl(this.j, !0), a.g(), a.stopPropagation(), !0) : Y.prototype.Ha.call(this, a)
};v.me = function() {
	return null === wp(this) || !(wp(this) instanceof Sp)
};
function Sp(a, b, c) {
	V.call(this, a, c || Tp.ca(), b);
	this.sa(4, !1)
}
w(Sp, V);v = Sp.prototype;v.vc = function(a) {
	a.target == this.Jc() && this.dispatchEvent(Aa)
};v.T = function() {
	V.prototype.T.call(this);
	S(this).D(this.sb(), xb,
		function(a) {
			32 == a.keyCode && a.stopPropagation()
		})
};v.sb = function() {
	return this.g.sb(this.s())
};v.Jc = function() {
	return this.g.Jc(this.s())
};v.fb = function() {
	return this.sb().value
};
function Tp() {}
w(Tp, Dl);Tp.prototype.J = function(a) {
	var b = a.h.J(na, {
		value: a.ja(),
		id: "alt-input-text",
		type: "text"
	}),
		c = a.h.J(na, {
			value: Up,
			id: "alt-input-submit",
			"class": Vp,
			type: La
		});
	return a.h.J(g, {
		id: "alt-input"
	},
		b, c)
};Tp.prototype.sb = function(a) {
	return a.firstChild
};Tp.prototype.Jc = function(a) {
	return a.firstChild.nextSibling
};wc(Tp);
var Up = "",
	Vp = "";
function Wp() {}
B(Wp, Dl);wc(Wp);v = Wp.prototype;v.Wb = function() {};v.Ia = function(a, b) {
	Rl(a, !1);
	a.qb &= -256;
	a.sa(32, !1);
	Wp.G.Ia.call(this, a, b);
	a.Ib(b.value);
	return b
};v.J = function(a) {
	Rl(a, !1);
	a.qb &= -256;
	a.sa(32, !1);
	return a.h.J(ua, {
		"class": Gl(this, a).join(" "),
		disabled: !a.isEnabled()
	},
		a.ja() || "")
};v.Vc = function(a) {
	return a.tagName == ua
};v.ae = y;v.$d = function(a) {
	return a.isEnabled()
};v.Xb = y;v.sc = function(a, b, c) {
	Wp.G.sc.call(this, a, b, c); (a = a.s()) && 1 == b && (a.disabled = c)
};v.Ya = y;v.rc = function(a, b) {
	a && (a.value = b)
};v.ha = function() {
	return "goog-textarea"
};
function Xp(a, b, c) {
	V.call(this, a, b || Wp.ca(), c);
	Rl(this, !1);
	this.ed = !0; (b = this.s()) && this.g.Wc(b, !0);
	this.fc = "" != a;
	a || (this.Hb = "")
}
B(Xp, V);
var Yp = !(D && !Hf(11));v = Xp.prototype;v.hc = !1;v.Ed = !1;v.fc = !1;v.tb = 0;v.zg = 0;v.Ve = 0;v.qg = !1;v.Ld = !1;v.hf = !1;v.gf = !1;v.oc = "";
function Zp(a) {
	return a.j.top + a.j.bottom + a.B.top + a.B.bottom
}
function $p(a) {
	var b = a.Ve,
		c = a.s();
	b && c && a.Ld && (b -= Zp(a));
	return b
}
function aq(a) {
	a.Ve = 50;
	bq(a)
}
function cq(a) {
	a.zg = 50;
	bq(a)
}
v.ya = function(a) {
	this.Ib(String(a))
};v.Ba = function() {
	return this.s().value != this.oc || dq(this) || this.fc ? this.s().value: ""
};v.Ib = function(a) {
	Xp.G.Ib.call(this, a);
	this.fc = "" != a;
	bq(this)
};v.oa = function(a) {
	Xp.G.oa.call(this, a);
	this.s().disabled = !a
};
function bq(a) {
	a.s() && a.vd()
}
function dq(a) {
	a.s();
	return "placeholder" in a.s()
}
function eq(a) {
	a.oc && (dq(a) ? a.s().placeholder = a.oc: !a.s() || a.fc || a.Ed || (L(a.s(), Wb), a.s().value = a.oc))
}
v.T = function() {
	Xp.G.T.call(this);
	var a = this.s();
	M(a, {
		overflowY: qb,
		overflowX: Fa,
		boxSizing: Ka,
		MsBoxSizing: Ka,
		WebkitBoxSizing: Ka,
		MozBoxSizing: Ka
	});
	this.j = oj(a);
	this.B = pj(a);
	S(this).D(a, "scroll", this.vd).D(a, cb, this.vd).D(a, "keyup", this.vd).D(a, "mouseup", this.Si).D(a, Ja, this.Fh);
	eq(this);
	bq(this)
};
function fq(a) {
	if (!a.qg) {
		var b = a.s().cloneNode(!1);
		M(b, {
			position: za,
			height: Fa,
			top: "-9999px",
			margin: "0",
			padding: "1px",
			border: "1px solid #000",
			overflow: qb
		});
		a.h.g.body.appendChild(b);
		var c = b.scrollHeight;
		b.style.padding = "10px";
		var d = b.scrollHeight;
		a.hf = d > c;
		b.style.borderWidth = "10px";
		a.gf = b.scrollHeight > d;
		b.style.height = "100px";
		100 != b.offsetHeight && (a.Ld = !0);
		ji(b);
		a.qg = !0
	}
	b = a.s();
	isNaN(a.j.top) && (a.j = oj(b), a.B = pj(b));
	c = a.s().scrollHeight;
	var e = a.s();
	d = e.offsetHeight - e.clientHeight;
	if (!a.hf) {
		var f = a.j;
		d -= f.top + f.bottom
	}
	a.gf || (e = pj(e), d -= e.top + e.bottom);
	c += 0 < d ? d: 0;
	a.Ld ? c -= Zp(a) : (a.hf || (d = a.j, c += d.top + d.bottom), a.gf || (a = pj(b), c += a.top + a.bottom));
	return c
}
function gq(a, b) {
	a.tb != b && (a.tb = b, a.s().style.height = b + "px")
}
function hq(a) {
	var b = a.s();
	b.style.height = Fa;
	var c = b.value.match(/\n/g) || [];
	b.rows = c.length + 1;
	a.tb = 0
}
v.Fh = function() {
	dq(this) || (this.Ed = !1, "" == this.s().value && (this.fc = !1, eq(this)))
};v.vd = function(a) {
	if (!this.hc) {
		var b = this.s(); ! dq(this) && a && a.type == cb && (b.value == this.oc && this.oc && !this.Ed && (Oi(b, Wb), b.value = ""), this.Ed = !0, this.fc = "" != b.value);
		var c = !1;
		this.hc = !0;
		a = this.tb;
		if (b.scrollHeight) {
			var d = !1,
				e = !1,
				f = fq(this),
				h = b.offsetHeight,
				k = $p(this);
			var l = this.zg;
			var m = this.s();
			l && m && this.Ld && (l -= Zp(this));
			k && f < k ? (gq(this, k), d = !0) : l && f > l ? (gq(this, l), b.style.overflowY = "", e = !0) : h != f ? gq(this, f) : this.tb || (this.tb = f);
			d || e || !Yp || (c = !0)
		} else hq(this);
		this.hc = !1;
		c && (b = this.s(), this.hc || (this.hc = !0, (e = b.scrollHeight) ? (f = fq(this), c = $p(this), c && f <= c || (d = this.j, b.style.paddingTop = d.top + 1 + "px", fq(this) == f && (b.style.paddingTop = d.top + e + "px", b.scrollTop = 0, e = fq(this) - e, e >= c ? gq(this, e) : gq(this, c)), b.style.paddingTop = d.top + "px")) : hq(this), this.hc = !1));
		a != this.tb && this.dispatchEvent("resize")
	}
};v.Si = function() {
	var a = this.s(),
		b = a.offsetHeight;
	a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
	b != this.tb && (this.tb = this.Ve = b)
};
function iq(a) {
	return function() {
		return a
	}
}
function jq(a, b) {
	for (var c = 0; c < b.length - 2; c += 3) {
		var d = b.charAt(c + 2);
		d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
		d = "+" == b.charAt(c + 1) ? a >>> d: a << d;
		a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
	}
	return a
}
function kq(a, b) {
	var c = b.split(".");
	b = Number(c[0]) || 0;
	for (var d = [], e = 0, f = 0; f < a.length; f++) {
		var h = a.charCodeAt(f);
		128 > h ? d[e++] = h: (2048 > h ? d[e++] = h >> 6 | 192 : (55296 == (h & 64512) && f + 1 < a.length && 56320 == (a.charCodeAt(f + 1) & 64512) ? (h = 65536 + ((h & 1023) << 10) + (a.charCodeAt(++f) & 1023), d[e++] = h >> 18 | 240, d[e++] = h >> 12 & 63 | 128) : d[e++] = h >> 12 | 224, d[e++] = h >> 6 & 63 | 128), d[e++] = h & 63 | 128)
	}
	a = b;
	for (e = 0; e < d.length; e++) a += d[e],
		a = jq(a, "+-a^+6");
	a = jq(a, "+-3^+b+-f");
	a ^= Number(c[1]) || 0;
	0 > a && (a = (a & 2147483647) + 2147483648);
	c = a % 1E6;
	return c.toString() + "." + (c ^ b)
}
var lq = null;
function mq() {
	var a = iq(String.fromCharCode(116)),
		b = iq(String.fromCharCode(107));
	a = [a(), a()];
	a[1] = b();
	return a.join("")
};
function nq() {
	this.g = 0;
	this.h = dn.ca()
}
function oq(a) {
	a = a.Ea("q").join("");
	if (null !== lq) var b = lq;
	else {
		var c = iq(String.fromCharCode(84));
		b = iq(String.fromCharCode(75));
		c = [c(), c()];
		c[1] = b();
		b = (lq = window[c.join(b())] || "") || ""
	}
	return "&" + mq() + "=" + kq(a, b)
}
function pq(a, b, c, d, e) {
	c = c.toString();
	c += oq(d);
	d = d.toString();
	var f = ra;
	b += "?" + c;
	2E3 > b.length + d.length && (f = "GET", b += "&" + d, d = ""); ++a.g;
	um(b,
		function(h) {--a.g;
			e(h)
		},
		f, d, void 0)
}
nq.prototype.j = function(a, b, c) {
	c = c.target; ! Em(c) || "[" != Fm(c)[0] && "{" != Fm(c)[0] ? (qq(this, c), b && b(Dm(c))) : (b = rq(c, "handleSingleResult_"), Array.isArray(b) && (b = new Pn(b)), a(b))
};nq.prototype.l = function(a, b, c) {
	c = c.target;
	if (Em(c)) {
		c = rq(c, "handleTextResult_");
		var d = [];
		if (a) d.push(Array.isArray(c) ? c[0] : c);
		else if (Array.isArray(c)) for (a = 0; a < c.length; ++a) d.push(Array.isArray(c[a]) ? c[a][0] : c[a]);
		b(d)
	} else qq(this, c),
		b(null, c.j)
};
function rq(a, b) {
	var c = Fm(a);
	a = {
		"class": "trans.common.TranslationAPI",
		func: b,
		url: String(a.m)
	};
	try {
		var d = JSON.parse(c)
	} catch(e) {
		throw d = fn.ca(),
			a.js = c,
			a.error = e.message,
			d.log("jsonParseErr", a),
			e;
	}
	return d
}
function qq(a, b) {
	var c = b.j;
	c = c in sq ? sq[c] : 0;
	a = en(a.h, 148);
	var d = new Hm;
	d = cg(d, 1, 156);
	c && cg(d, 5, c);
	dg(a, 63, d);
	c = fn.ca();
	a = String(b.m);
	b = Fm(b);
	c.log("invalidResponse", {
		q: a.substring(0, 500),
		ql: a.length,
		r: b.substring(0, 500),
		rl: b.length
	})
}
var tq = {},
	sq = (tq[1] = 15, tq[2] = 16, tq[3] = 17, tq[4] = 18, tq[5] = 19, tq[6] = 20, tq[7] = 21, tq[8] = 22, tq[9] = 23, tq);
function uq(a) {
	switch (a) {
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 10:
			return 4;
		case 3:
			return 5;
		default:
			return 0
	}
};
function vq(a, b) {
	this.h = b;
	for (var c = [], d = !0, e = a.length - 1; 0 <= e; e--) {
		var f = a[e] | 0;
		d && f == b || (c[e] = f, d = !1)
	}
	this.g = c
}
var wq = {};
function xq(a) {
	return - 128 <= a && 128 > a ? of(wq, a,
		function(b) {
			return new vq([b | 0], 0 > b ? -1 : 0)
		}) : new vq([a | 0], 0 > a ? -1 : 0)
}
function yq(a) {
	if (isNaN(a) || !isFinite(a)) return zq;
	if (0 > a) return Aq(yq( - a));
	for (var b = [], c = 1, d = 0; a >= c; d++) b[d] = a / c | 0,
		c *= 4294967296;
	return new vq(b, 0)
}
var zq = xq(0), Bq = xq(1), Cq = xq(16777216);
function Dq(a) {
	if ( - 1 == a.h) return - Dq(Aq(a));
	for (var b = 0,
		c = 1,
		d = 0; d < a.g.length; d++) {
		var e = Eq(a, d);
		b += (0 <= e ? e: 4294967296 + e) * c;
		c *= 4294967296
	}
	return b
}
v = vq.prototype;v.toString = function(a) {
	a = a || 10;
	if (2 > a || 36 < a) throw Error("radix out of range: " + a);
	if (Fq(this)) return "0";
	if ( - 1 == this.h) return "-" + Aq(this).toString(a);
	for (var b = yq(Math.pow(a, 6)), c = this, d = "";;) {
		var e = Gq(c, b).g;
		c = Hq(c, Iq(e, b));
		var f = ((0 < c.g.length ? c.g[0] : c.h) >>> 0).toString(a);
		c = e;
		if (Fq(c)) return f + d;
		for (; 6 > f.length;) f = "0" + f;
		d = "" + f + d
	}
};
function Eq(a, b) {
	return 0 > b ? 0 : b < a.g.length ? a.g[b] : a.h
}
function Fq(a) {
	if (0 != a.h) return ! 1;
	for (var b = 0; b < a.g.length; b++) if (0 != a.g[b]) return ! 1;
	return ! 0
}
function Jq(a, b) {
	a = Hq(a, b);
	return - 1 == a.h ? -1 : Fq(a) ? 0 : 1
}
function Aq(a) {
	for (var b = a.g.length,
		c = [], d = 0; d < b; d++) c[d] = ~a.g[d];
	return (new vq(c, ~a.h)).add(Bq)
}
v.abs = function() {
	return - 1 == this.h ? Aq(this) : this
};v.add = function(a) {
	for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0, e = 0; e <= b; e++) {
		var f = d + (Eq(this, e) & 65535) + (Eq(a, e) & 65535),
			h = (f >>> 16) + (Eq(this, e) >>> 16) + (Eq(a, e) >>> 16);
		d = h >>> 16;
		f &= 65535;
		h &= 65535;
		c[e] = h << 16 | f
	}
	return new vq(c, c[c.length - 1] & -2147483648 ? -1 : 0)
};
function Hq(a, b) {
	return a.add(Aq(b))
}
function Iq(a, b) {
	if (Fq(a) || Fq(b)) return zq;
	if ( - 1 == a.h) return - 1 == b.h ? Iq(Aq(a), Aq(b)) : Aq(Iq(Aq(a), b));
	if ( - 1 == b.h) return Aq(Iq(a, Aq(b)));
	if (0 > Jq(a, Cq) && 0 > Jq(b, Cq)) return yq(Dq(a) * Dq(b));
	for (var c = a.g.length + b.g.length,
		d = [], e = 0; e < 2 * c; e++) d[e] = 0;
	for (e = 0; e < a.g.length; e++) for (var f = 0; f < b.g.length; f++) {
		var h = Eq(a, e) >>> 16,
			k = Eq(a, e) & 65535,
			l = Eq(b, f) >>> 16,
			m = Eq(b, f) & 65535;
		d[2 * e + 2 * f] += k * m;
		Kq(d, 2 * e + 2 * f);
		d[2 * e + 2 * f + 1] += h * m;
		Kq(d, 2 * e + 2 * f + 1);
		d[2 * e + 2 * f + 1] += k * l;
		Kq(d, 2 * e + 2 * f + 1);
		d[2 * e + 2 * f + 2] += h * l;
		Kq(d, 2 * e + 2 * f + 2)
	}
	for (e = 0; e < c; e++) d[e] = d[2 * e + 1] << 16 | d[2 * e];
	for (e = c; e < 2 * c; e++) d[e] = 0;
	return new vq(d, 0)
}
function Kq(a, b) {
	for (; (a[b] & 65535) != a[b];) a[b + 1] += a[b] >>> 16,
		a[b] &= 65535,
		b++
}
function Lq(a, b) {
	this.g = a;
	this.h = b
}
function Gq(a, b) {
	if (Fq(b)) throw Error("division by zero");
	if (Fq(a)) return new Lq(zq, zq);
	if ( - 1 == a.h) return b = Gq(Aq(a), b),
		new Lq(Aq(b.g), Aq(b.h));
	if ( - 1 == b.h) return b = Gq(a, Aq(b)),
		new Lq(Aq(b.g), b.h);
	if (30 < a.g.length) {
		if ( - 1 == a.h || -1 == b.h) throw Error("slowDivide_ only works with positive integers.");
		for (var c = Bq,
			d = b; 0 >= Jq(d, a);) c = Mq(c, 1),
			d = Mq(d, 1);
		var e = Nq(c, 1),
			f = Nq(d, 1);
		d = Nq(d, 2);
		for (c = Nq(c, 2); ! Fq(d);) {
			var h = f.add(d);
			0 >= Jq(h, a) && (e = e.add(c), f = h);
			d = Nq(d, 1);
			c = Nq(c, 1)
		}
		b = Hq(a, Iq(e, b));
		return new Lq(e, b)
	}
	for (e = zq; 0 <= Jq(a, b);) {
		c = Math.max(1, Math.floor(Dq(a) / Dq(b)));
		d = Math.ceil(Math.log(c) / Math.LN2);
		d = 48 >= d ? 1 : Math.pow(2, d - 48);
		f = yq(c);
		for (h = Iq(f, b); - 1 == h.h || 0 < Jq(h, a);) c -= d,
			f = yq(c),
			h = Iq(f, b);
		Fq(f) && (f = Bq);
		e = e.add(f);
		a = Hq(a, h)
	}
	return new Lq(e, a)
}
v.and = function(a) {
	for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Eq(this, d) & Eq(a, d);
	return new vq(c, this.h & a.h)
};v.or = function(a) {
	for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Eq(this, d) | Eq(a, d);
	return new vq(c, this.h | a.h)
};v.xor = function(a) {
	for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Eq(this, d) ^ Eq(a, d);
	return new vq(c, this.h ^ a.h)
};
function Mq(a, b) {
	var c = b >> 5;
	b %= 32;
	for (var d = a.g.length + c + (0 < b ? 1 : 0), e = [], f = 0; f < d; f++) e[f] = 0 < b ? Eq(a, f - c) << b | Eq(a, f - c - 1) >>> 32 - b: Eq(a, f - c);
	return new vq(e, a.h)
}
function Nq(a, b) {
	var c = b >> 5;
	b %= 32;
	for (var d = a.g.length - c,
		e = [], f = 0; f < d; f++) e[f] = 0 < b ? Eq(a, f + c) >>> b | Eq(a, f + c + 1) << 32 - b: Eq(a, f + c);
	return new vq(e, a.h)
};Hq(Mq(Bq, 32), Bq);Hq(Mq(Bq, 128), Bq);
var Oq = D || F || pf || qf || !1;Pf && 0 <= Ld(wj, "4") || Qf && H("533") || E && H("2.0") || D && H("10") || pf && re();
function Pq(a, b, c, d, e, f, h, k, l) {
	R.call(this, a);
	this.l = h || null;
	null != this.l && this.l.A(A(this.bi, this));
	this.A = null;
	this.g = Fa;
	this.xa = this.j = "";
	this.pb = new nq;
	this.ac = !!b && Oq && !D;
	this.U = null != e ? e: 0;
	this.m = this.ac ? new Qp: new Rp;
	l && this.m.oa(!1);
	if (0 < this.U) for (a = this.m, a.B = !0, b = 0; b < a.l; b++) h = $h(g, "goog-menu", ""),
		e = $h(g, null, h),
		h = new Kn(e, h),
		a.m[b] = h,
		document.body.appendChild(e);
	this.m.ka(c);
	this.o = k || null;
	this.ob = null != d ? d: -1;
	this.R = fn.ca();
	this.I = new kg;
	this.N = null;
	this.bb = "t";
	this.W = this.ia = null;
	this.B = f || null;
	this.Ra = !1;
	null != this.B && (this.B.l(A(this.gj, this)), this.B.j(A(this.Yh, this)));
	this.wa = null;
	this.K = dn.ca()
}
w(Pq, R);
function Qq(a, b) {
	a.wa = b;
	a.m.A = b
}
function Rq(a) {
	a.N = tb;
	a.m.I.m = a.N || ""
}
function Sq(a) {
	var b = Tq;
	a.R.j = b;
	a.bb = b
}
function Uq(a, b) {
	null != a.B && a.B.g();
	b && (a.A = new Pn(b), a.W = null);
	Vq(a) && (a.l.h(), null != a.o && a.o.g(!1));
	if (a.A) {
		b = 0 != Qh().length;
		a.h.Qc(a.s());
		a.m.nd();
		a.wa && (a.wa.h = a.A);
		for (var c = "",
			d = 0,
			e = 0; e < W(a.A, 5); e++) Wq(a.A, e) && (c += " "),
			c += Xq(a.A, e),
			d += W(Qn(a.A, e), 2);
		if (0 != d) {
			c = [];
			d = !1;
			e = a.A;
			for (var f = "",
				h = 0; h < W(e, 5); h++) {
				var k = Qn(e, h);
				null != k.g[4] && 0 < an(k, 4).length ? f = an(k, 4) : (new Nn(k.g)).g[4] = f
			}
			for (e = 0; e < W(a.A, 5); e++) {
				f = Qn(a.A, e);
				h = On(f, 0);
				if (Wq(a.A, e)) a.h.appendChild(a.s(), a.h.g.createTextNode(" "));
				else if ("km" == a.j || "lo" == a.j) {
					k = a.h;
					var l = k.appendChild,
						m = a.s();
					var n = F ? di() : pf ? document.createTextNode("&shy;") : D ? document.createTextNode("&#8203;") : di();
					l.call(k, m, n)
				}
				null != f.g[4] && 0 < an(f, 4).length && 0 == $m(f, 5) && c.push(an(f, 4));
				var q;
				k = Xq(a.A, e);
				/^[\s\xa0]*$/.test(k) ? 0 == k.length || (q = Yq(k)) : (q = a.h.J(sa, null, k), h = $m(h, 1), 0 <= a.ob && h < a.ob && L(q, "alt-low-conf"), mg(a.I, a.g + "." + a.j + "." + an(f, 0)) && (h = a.I.get(a.g + "." + a.j + "." + an(f, 0)), h != Zq(f, 0) && (a.h.ib(q, h), L(q, Da), d = !0, $q(a, !0))), q.title = Jp, Kp(a.m, q, f));
				q && a.h.appendChild(a.s(), q)
			}
			if (null != a.l) {
				q = a.g + "." + a.j;
				for (e = 0; e < c.length; ++e) q += "." + c[e];
				mg(a.I, q) && (ar(a, !1), d = !0, br(a, a.I.get(q)), null != a.o && a.o.g(!1), $q(a, !0))
			}
			d || ($q(a, !1), ar(a, !1)); (d || b) && a.dispatchEvent(Aa)
		}
	} else $q(a, !1),
		ar(a, !1)
}
function Yq(a) {
	a = Cd(bf(a)).split("<br>");
	var b = document.createDocumentFragment(),
		c = 0;
	Pc(a,
		function(d) {
			0 != c && b.appendChild($h("BR"));
			c++;
			"" != d && b.appendChild(document.createTextNode(String(cf(d))))
		});
	return b
}
function cr(a, b) {
	if (Vq(a)) return a.l.g();
	var c = [];
	if (a.s() && a.s().childNodes) for (var d = 0; d < a.s().childNodes.length; ++d) {
		var e = a.s().childNodes[d];
		c[d] = b && "BR" == e.tagName ? "\n": Bi(e)
	}
	return c.join("")
}
function dr(a, b, c, d) {
	if (b) for (a = 0; a < W(b, 5); a++) {
		var e = Qn(b, a),
			f = c;
		if ((e = e && e) && Um(f.g, e.g)) {
			c = b;
			b = a;
			f = -1;
			a = W(c, 5);
			for (e = b; 0 <= e; e--) if (0 == $m(Qn(c, e), 5)) {
				f = e;
				break
			}
			for (e = b + 1; e <= W(c, 5); e++) if (0 == $m(Qn(c, e), 5)) {
				a = e;
				break
			}
			if (d) b = er(c, f, a);
			else if (d = c, c = f, d) {
				f = b + 1;
				e = b;
				for (b = Xq(d, b).length; 64 > b && (f != a || e != c);) f < a && (b += Xq(d, f++).length + 1),
					64 > b && e > c && (b += Xq(d, --e).length + 1);
				b = er(d, e, f)
			} else b = "";
			return b
		}
	}
	return ""
}
function er(a, b, c) {
	var d = [];
	d.push(Xq(a, b));
	for (b += 1; b < c; b++) Wq(a, b) && d.push(" "),
		d.push(Xq(a, b));
	return d.join("")
}
function Wq(a, b) {
	if (0 == b) return ! 1;
	var c = Qn(a, b),
		d = Qn(a, b - 1);
	if (c = Zm(On(c, 0), 2) && !Zm(On(d, 0), 3)) a = Xq(a, b - 1),
		b = a.length - 1,
		c = !(0 <= b && a.indexOf("\n", b) == b);
	return c
}
v = Pq.prototype;v.gb = function() {
	return this.g
};v.qa = function() {
	return this.j
};v.J = function() {
	this.X(Ei(this.h, "span"))
};v.X = function(a) {
	R.prototype.X.call(this, a);
	Uq(this)
};v.T = function() {
	R.prototype.T.call(this);
	S(this).D(this.m, Aa, this.ni);
	null != this.o && null != this.o.h && (S(this).D(this.o.h, Sa, this.si), Zk(S(this), this.o.h, this.K.h, this.K));
	S(this).D(this.m, "show", this.mi);
	this.s() && S(this).D(this.s(), xb,
		function(a) {
			32 == a.keyCode && a.stopPropagation()
		},
		!0)
};v.L = function() {
	R.prototype.L.call(this);
	this.m.P()
};v.bi = function() {
	this.B.oa(this.l.j());
	$q(this, this.l.j())
};v.ni = function(a) {
	if (a.type != rb || a.target == this.m) if (null == a.target && null != this.l) this.R.log("editpopupclk"),
		en(this.K, 233),
		null != this.o && this.o.g(!0),
		this.l.l(cr(this)),
		this.Ra = this.B.s().style.display != r,
		this.B.reset(),
		null != this.o ? this.B.oa(this.o.h.style.display != r) : this.B.oa(!1),
		$q(this, !1);
	else {
		var b = a.m;
		null == b && null != a.currentTarget && (b = a.currentTarget.Da);
		var c = a.target.fb();
		if (null != b && null != a.target) {
			var d = b,
				e = this.m.o.get(Ac(d));
			this.h.ib(d, c);
			c == Zq(e, 0) ? (Oi(d, Da), 0 == Qh().length && ($q(this, !1), ar(this, !1))) : (L(d, Da), $q(this, !0), ar(this, !0));
			null != this.I && this.I.set(this.g + "." + this.j + "." + an(e, 0), c);
			e = this.m.o.get(Ac(b));
			null != this.I && this.I.set(this.g + "." + this.j + "." + an(e, 0), c);
			d = Zq(e, 0);
			b = Cl(this.m, a.target);
			d = {
				sl: this.g,
				tl: this.j,
				utrans: c,
				gtrans: d,
				index: b,
				ophrase: an(e, 0),
				osentence: an(e, 4),
				tsentence: dr(this, this.A, e)
			};
			0 < W(e, 2) && (d.confidence = $m(On(e, 0), 1));
			if (a.target instanceof Sp || -1 == b) d.manual = 1,
				en(this.K, 240);
			else {
				a = en(this.K, 239);
				e = new Mm;
				var f = fg(fg(e, 2, Km), 3, Im);
				cg(f, 1, b);
				dg(a, 27, e)
			}
			for (var h in d) typeof d[h] === t && 64 < d[h].length && (d.tr = 1, d[h] = d[h].substr(0, 64));
			this.R.log("usealt", d, this.N);
			h = new Gj("usealt");
			h.text = c;
			this.dispatchEvent(h);
			this.dispatchEvent(Aa)
		}
	}
};
function br(a, b) {
	if (a.s()) {
		null == a.ia && (a.W = Yc(a.h.Qh(a.s())));
		a.ia = b;
		var c;
		if (c = a.s().childNodes && 0 < a.s().childNodes.length) c = (c = a.s().childNodes[0]) ? mg(a.m.g, Ac(c)) : !1;
		if (c) a.h.Qc(a.s()),
			a.m.nd(),
			b = a.h.J(sa, Da, a.ia),
			a.h.appendChild(a.s(), b),
			Kp(a.m, b, new Nn);
		else {
			gi(a.s());
			a = a.s();
			c = bf(b);
			b = $h(g);
			c = Cd(c).split("<br>");
			for (var d = 0; d < c.length; ++d) {
				var e = c[d];
				e.length && (e = $h(sa, Da, e), b.appendChild(e));
				d != c.length - 1 && (e = $h("BR"), b.appendChild(e))
			}
			a.appendChild(b)
		}
	}
}
v.si = function() {
	null != this.l && Vq(this) ? this.l.o() : fr(this);
	this.R.log("clkundo", void 0, this.N)
};v.Yh = function() {
	Vq(this) && (this.l.j() && (br(this, this.l.g()), this.Ra = !0), this.l.h(), null != this.o && this.o.g(!1), this.l.j() && $q(this, !0), this.B.oa(!0), N(this.B.s(), this.Ra), this.dispatchEvent(Aa));
	en(this.K, 215);
	this.R.log("clkcancel", void 0, this.N)
};v.mi = function() {
	var a = this.m.o.get(Ac(this.m.Da));
	if (a) {
		if (0 < this.U) {
			var b = new yg("source=baf");
			if (1 == this.U) {
				for (var c = [], d = 0, e = W(a, 2); d < e; d++) c.push(Zq(a, d));
				d = this.pb;
				var f = this.j,
					h = this.g,
					k = gr(this),
					l = A(this.ij, this);
				e = new yg;
				var m = new yg;
				e.set("client", "mt");
				e.set("sl", f);
				e.set("tl", h);
				e.set("hl", k);
				e.set("v", "1.0");
				b && e.Xd(b); (b = !Array.isArray(c) || Array.isArray(c) && 1 == c.length) ? m.set("q", c) : Mg(m, "q", c);
				b = A(d.l, d, b, l);
				pq(d, da, e, m, b)
			} else for (d = 0, e = W(a, 2); d < e; d++) {
				h = Zq(a, d);
				c = this.pb;
				m = this.j;
				l = this.g;
				f = gr(this);
				k = A(this.jj, this, d);
				var n = b,
					q = new yg,
					u = new yg;
				q.set("client", "mt");
				q.set("sl", m);
				q.set("tl", l);
				q.set("hl", f);
				Mg(q, "dt", ["at", "t"]);
				n && q.Xd(n);
				u.set("q", h);
				pq(c, "/translate_a/single", q, u, A(c.j, c, k, void 0))
			}
		}
		b = new Gj(Sa);
		b.text = this.m.fb();
		b.o = W(this.A, 5);
		this.dispatchEvent(b);
		b = {};
		b.confidence = $m(On(a, 0), 1);
		this.g && this.j && this.xa && (b.segments = W(this.A, 5), b.sl = this.g, b.tl = this.j, b.hl = this.xa);
		en(this.K, 238);
		this.R.log("phrsclk", b, this.N)
	}
};v.jj = function(a, b) {
	if (1 == this.U || 1 < W(b, 5)) {
		var c = an(new cn(bn(b, 0, 0)), 0);
		var d = 1;
		for (var e = W(b, 0); d < e; d++) c += " " + an(new cn(bn(b, 0, d)), 0);
		d = c
	} else if (1 == W(b, 5)) {
		c = [];
		b = Qn(b, 0);
		d = 0;
		for (e = Math.min(this.U, W(b, 2)); d < e; d++) c.push(Zq(b, d));
		d = c.join(", ")
	} else d = "...";
	Op(this.m, a, d)
};v.ij = function(a) {
	for (var b = 0; b < a.length; b++) Op(this.m, b, a[b])
};
function fr(a) {
	Vq(a) && (null != a.o && a.o.g(!1), a.l.h());
	og(a.I);
	a.ia = null;
	Uq(a);
	a.dispatchEvent(Aa)
}
function $q(a, b) {
	null != a.o && null != a.o.h && N(a.o.h, b)
}
function ar(a, b) {
	null != a.B && (b && a.B.reset(), N(a.B.s(), b))
}
v.gj = function() {
	en(this.K, 374);
	var a = [],
		b;
	null != this.W ? b = this.W: b = ki(this.s());
	for (var c = {
		segment: []
	},
		d = null, e = 0, f = 0; f < b.length; f++) {
		var h = Qn(this.A, f);
		if (null != h) {
			var k = Bi(b[f]);
			a: {
				var l = k;
				var m = h;
				if (0 == W(m, 2)) l = 0;
				else {
					for (var n = 0; n < W(m, 2); ++n) if (l == Zq(m, n)) {
						l = n;
						break a
					}
					l = -1
				}
			}
			m = Bd(an(h, 4));
			n = dr(this, this.A, h, !0);
			if (0 != m.length) {
				if (0 == a.length || m != a[a.length - 1]) a.push(m),
					e = a.length - 1,
					d = null,
					e < W(this.A, 0) && (d = Ym(new cn(bn(this.A, 0, e)), 4, 0)),
					d = uq(d),
					e = 0,
					d = {
						source: m,
						original_target: n,
						segment_source: d,
						phrase_correction: []
					},
					c.segment.push(d);
				if (0 != l) for (m = Zq(h, 0).length, l = {
					alternative_index: l,
					edited_phrase: k,
					source_span: [],
					target_span: [{
						start: e,
						end: e + m
					}]
				},
					d.phrase_correction.push(l), m = 0; m < W(h, 3); ++m) n = new Mn(bn(h, 3, m)),
					l.source_span.push({
						start: $m(n, 0),
						end: $m(n, 1)
					});
				e += k.length;
				Zm(On(h, 0), 2) && e++
			}
		}
	}
	if (Vq(this)) {
		this.dispatchEvent(Aa);
		this.l.h();
		null != this.o && this.o.g(!1);
		$q(this, !0);
		this.l.g() != cr(this) && br(this, this.l.g());
		b = this.g + "." + this.j;
		for (f = 0; f < a.length; ++f) b += "." + a[f];
		a = this.l.g();
		this.I.set(b, a);
		c.contains_full_edit = !0
	}
	c.edited_target = cr(this, !0);
	a = new yg;
	a.set("ue", JSON.stringify(c));
	a.set("sl", this.g);
	a.set("tl", this.j);
	um(ea + this.bb, void 0, ra, a.toString(), 1E4)
};
function Vq(a) {
	return null != a.l && a.l.m()
}
function Xq(a, b) {
	a = Qn(a, b);
	return 0 == W(a, 2) ? an(a, 0) : Zq(a, 0)
}
function Zq(a, b) {
	return an(On(a, b), 0)
}
function gr(a) {
	a = a.xa;
	0 === a.length && null != Oh(document, "hl") && (a = Oh(document, "hl").value);
	return a
};
var hr = window.google && google.translate && google.translate._const;hr || (hr = {
	_cac: "",
	_cam: "",
	_cest: new Date,
	_cjlc: "",
	_cl: "",
	_cuc: "",
	_cnad: !1,
	_cnal: {},
	Uj: "",
	_pah: "",
	_pas: "",
	_pbi: "",
	_pci: "",
	_phf: "",
	_pli: "",
	_plla: "",
	_pmi: "",
	_ps: "",
	_pta: "",
	_puh: ""
});
var ir = window.google && window.google.translate && window.google.translate.v || "",
	jr = hr._cl || "en",
	kr = hr._cuc,
	lr = hr._cnad,
	mr = hr._cest,
	nr = hr._cnal || {},
	or = "lib" == hr._cam ? 1 : 0, pr = (hr._cac || "te") + (1 == or ? "_lib": ""), qr = function() {
		function a(d) {
			return function() {
				return d
			}
		}
		var b = String.fromCharCode(107),
			c = a(String.fromCharCode(116));
		b = a(b);
		c = [c(), c()];
		c[1] = b();
		return hr["_c" + c.join(b())] || ""
	} (), rr = hr._pah || "", sr = hr._pas || "https://", tr = hr._pbi || "", ur = hr._pci || "", vr = hr._plla || "", wr = hr._pli || "", xr = hr._ps || "", yr = hr._puh || "", zr = "//" + yr + ea + pr, Ar = "https://www.google.com/support/translate" + ("en" == jr ? "": "#googtrans/en/" + jr);
function Br(a) {
	for (var b = {},
		c = 0; c < a.length; ++c) b[a[c]] = !0;
	return b
}
function Cr(a) {
	this.h = a ? [a] : [];
	this.g = [0];
	this.j = !1
}
Cr.prototype.register = function(a) {
	if (this.j) return a || y;
	this.g.push(0);
	var b = this.g.length - 1;
	return A(function() {
		this.g[b]++;
		a && a.apply(null, arguments);
		Dr(this)
	},
		this)
};Cr.prototype.delay = function(a) {
	return this.j ? a: A(function() {
		if (this.j) a.apply(null, arguments);
		else {
			var b = arguments;
			this.h.push(function() {
				a.apply(null, b)
			})
		}
	},
		this)
};Cr.prototype.finish = function() {
	this.g[0] = 1;
	Dr(this)
};
function Dr(a) {
	for (var b = 0; b < a.g.length; ++b) if (0 == a.g[b]) return;
	a.j = !0;
	for (b = 0; b < a.h.length; ++b) {
		var c = a.h[b];
		a.h[b] = null;
		c.call()
	}
	a.h = [];
	a.g = []
}
function Er(a) {
	this.j = a;
	this.h = this.g = !1
}
function Fr(a, b) {
	return A(function() {
		b && b.apply(null, arguments);
		this.h ? this.g || (this.j.call(), this.g = !0) : this.g = !0
	},
		a)
}
Er.prototype.finish = function() {
	this.h || (this.h = !0, this.g && this.j.call())
};
function Gr(a, b, c) {
	this.g = b;
	this.A = a;
	this.o = c || 0;
	this.j = this.h = !1
}
function Hr(a) {
	a.h || a.m()
}
Gr.prototype.m = function() { (this.h = (this.j = !!this.A.call()) || 0 >= --this.o) ? (this.g.call(null, this.j), this.l = 0) : this.l = window.setTimeout(A(this.m, this), 30)
};Gr.prototype.cancel = function() {
	this.l && window.clearTimeout(this.l);
	this.h = !0;
	this.g.call(null, this.j)
};
function Ir(a, b) {
	return function() {
		a.dispatchEvent(b)
	}
}
function Jr(a) {
	a = Bd(a).toLowerCase().replace("_", "-");
	if ("zh-cn" == a) return "zh-CN";
	if ("zh-tw" == a) return "zh-TW";
	var b = a.indexOf("-");
	a = 0 <= b ? a.substring(0, b) : a;
	return "zh" == a ? "zh-CN": a
}
function Kr(a) {
	var b = [],
		c;
	for (c in a) if (a[c] !== Object.prototype[c]) {
		var d = $e(c);
		if (xc(a[c]) == Ea) for (var e = 0; e < a[c].length; ++e) b.push(d + "=" + $e(a[c][e]));
		else b.push(d + "=" + $e(a[c]))
	}
	return b.join("&")
}
function Lr(a, b) {
	b = b || {};
	b.nca = a;
	b.client = pr;
	ir && (b.logld = "v" + ir);
	var c = new Image;
	//c.src = "//" + yr + "/gen204?" + Kr(b);
	c.onload = function() {
		c.onload = null
	}
}
function Mr(a, b) {
	if ((D || pf) && window.location.hostname != document.domain) {
		Nr = Nr ? Nr + 1 : 1;
		var c = "f" + Nr + "_" + Gc().toString(36);
		window[c] = function() {
			window[c] = void 0;
			a.src = wb;
			b && window.setTimeout(function() {
				b()
			},
				0)
		};
		a.src = "javascript:void(document.write(\"<script>document.domain='" + document.domain + "';parent['" + c + "']();\x3c/script>\"))"
	} else b && b()
}
var Nr;
function Or() {
	var a = {};
	try {
		for (var b in Object.prototype) {
			var c = Object.prototype[b];
			delete Object.prototype[b];
			a[b] = c
		}
	} catch(d) {
		return {}
	}
	return a
}
function Pr(a) {
	for (var b in a) Object.prototype[b] = a[b]
}
function Qr(a) {
	for (var b in a) if (a[b] !== Object.prototype[b]) return ! 1;
	return ! 0
}
function Rr(a, b) {
	return a != Fa && "zh-CN" != a && a == b
};
var Sr = null,
	Tr = null;
function Ur(a, b, c) {
	for (var d in c) c[d] !== Object.prototype[d] && (b[d] = typeof c[d] === p ? c[d] : Fc(Vr, a, Number(c[d])))
}
function Wr() {
	Sr && Xr();
	Sr = [];
	Tr = P(window, "unload",
		function() {
			Xr()
		})
}
function Xr() {
	Tr && (fk(Tr), Tr = null);
	Sr && Sr.length && Lr(Sr.join(""));
	Sr = null
}
function Vr(a, b, c) {
	var d = Array.prototype.slice.call(arguments);
	d.splice(0, 2);
	d = "l" + a.toString(16) + "i" + b.toString(16) + (d.length ? "-" + d.join("_") : "");
	Sr ? Sr.push(d) : Lr(d)
};
function Yr(a) {
	Zf(this, a, null, null)
}
w(Yr, Xf);
var Zr = {};
function $r() {
	var a = "undefined" !== typeof window ? window.trustedTypes: void 0;
	return null !== a && void 0 !== a ? a: null
}
var as;
function bs() {
	var a, b;
	void 0 === as && (as = null !== (b = null === (a = $r()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
		createHTML: function(c) {
			return c
		},
		createScript: function(c) {
			return c
		},
		createScriptURL: function(c) {
			return c
		}
	})) && void 0 !== b ? b: null);
	return as
};
function cs() {}
function ds(a, b) {
	if (b !== Zr) throw Error("Bad secret");
	this.g = a
}
w(ds, cs);ds.prototype.toString = function() {
	return this.g.toString()
};
function es(a) {
	var b;
	if (null === (b = $r()) || void 0 === b ? 0 : b.isScript(a)) return a;
	if (a instanceof ds) return a.g;
	throw Error("wrong type");
};
function fs() {
	var a = new Yr([null, null, null, null, null, '(function(){/*\n\n Copyright The Closure Library Authors.\n SPDX-License-Identifier: Apache-2.0\n*/\nvar d="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},e;if("function"==typeof Object.setPrototypeOf)e=Object.setPrototypeOf;else{var f;a:{var k={a:!0},l={};try{l.__proto__=k;f=l.a;break a}catch(a){}f=!1}e=f?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var m=e;var n={};function p(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}var q;function r(){var a,b;void 0===q&&(q=null!==(b=null===(a=p())||void 0===a?void 0:a.createPolicy("google#safe",{createHTML:function(c){return c},createScript:function(c){return c},createScriptURL:function(c){return c}}))&&void 0!==b?b:null);return q};var t=function(a,b){if(b!==n)throw Error("Bad secret");this.g=a},u=function(){};t.prototype=d(u.prototype);t.prototype.constructor=t;if(m)m(t,u);else for(var v in u)if("prototype"!=v)if(Object.defineProperties){var w=Object.getOwnPropertyDescriptor(u,v);w&&Object.defineProperty(t,v,w)}else t[v]=u[v];t.prototype.toString=function(){return this.g.toString()};function x(a){var b;if(null===(b=p())||void 0===b?0:b.isScriptURL(a))return a;if(a instanceof t)return a.g;throw Error("wrong type");};function y(a){var b,c=null===(b=r())||void 0===b?void 0:b.createScriptURL(a);return new t(null!==c&&void 0!==c?c:a,n)};if(!function(){if(self.origin)return"null"===self.origin;if(""!==location.host)return!1;try{return window.parent.escape(""),!1}catch(a){return!0}}())throw Error("sandboxing error");\nwindow.addEventListener("message",function(a){var b=a.ports[0];a=a.data;var c=a.callbackName.split("."),g=window;"window"===c[0]&&c.unshift();for(var h=0;h<c.length-1;h++)g[c[h]]={},g=g[c[h]];g[c[c.length-1]]=function(z){b.postMessage(JSON.stringify(z))};c=document.createElement("script");a=y(a.url);c.src=x(a);document.body.appendChild(c)},!0);}).call(this);\n']);
	if (!a) return null;
	a = bg(a, 6);
	var b;
	if (a) {
		var c = null === (b = bs()) || void 0 === b ? void 0 : b.createScript(a);
		b = new ds(null !== c && void 0 !== c ? c: a, Zr)
	} else b = null;
	return b
};
function gs(a) {
	this.url = a;
	this.timeout = -1;
	this.l = this.j = Ma;
	this.g = this.h = null
}
function hs(a, b) {
	b = void 0 === b ? {}: b;
	a.g = Gk();
	var c = new vg(a.url),
		d = new Map;
	a.l && d.set(a.l, a.j);
	c.g.Xd(Lg(b), d);
	is(a).then(function() {
		js(a, c.toString())
	}).then(function() {
		return a.g.promise
	}).then(function() {
		ks(a)
	},
		function() {
			ks(a)
		});
	0 < a.timeout && (a.m = setTimeout(function() {
		a.g.g("Timeout!")
	},
		a.timeout));
	return a.g.promise
}
function js(a, b) {
	var c = new MessageChannel;
	a.h.contentWindow.postMessage({
		url: b,
		callbackName: a.j
	},
		"*", [c.port2]);
	c.port1.onmessage = function(d) {
		var e = {};
		void 0 !== a.m && (clearTimeout(a.m), a.m = void 0);
		void 0 === d.data && a.g.g("Callback called, but no data received");
		typeof d.data !== t && a.g.g("Exploitation attempt! Data is not a string!");
		try {
			e = JSON.parse(d.data)
		} catch(f) {
			a.g.g("Invalid Data received: " + f.message)
		}
		a.g.h(e)
	}
}
function is(a) {
	var b = Gk(),
		c = bi(document, ma);
	if (!c.sandbox) throw Error("iframe sandboxes not supported");
	c.sandbox.value = "allow-scripts";
	c.style.display = r;
	a.h = c;
	a = fs();
	a = Ke(Me, Ce("body", {},
		Fe(Pe(sd("TS-Closure conversions of the same types"), (a instanceof cs ? es(a) : vd(a)).toString()))));
	c.srcdoc = ve(a);
	a = Qe(sd("data URL to be opened only in a sandbox"), "data:text/html;charset=UTF-8;base64," + btoa(ue(a)));
	c.src = zd(a).toString();
	c.addEventListener(zb,
		function() {
			return b.h(c)
		},
		!1);
	c.addEventListener("error",
		function(d) {
			b.g(d)
		},
		!1);
	document.documentElement.appendChild(c);
	return b.promise
}
function ks(a) {
	null !== a.h && (document.documentElement.removeChild(a.h), a.h = null)
};
function ls(a, b) {
	O.call(this);
	this.g = new vg(a);
	if (b) for (var c in b) b[c] !== Object.prototype[c] && this.g.g.set(c, b[c])
}
w(ls, O);ls.prototype.j = function() {
	return ! 0
};ls.prototype.Wa = function() {
	return this.j()
};ls.prototype.send = function() {
	return null
};ls.prototype.cancel = function() {};
function ms(a, b, c, d) {
	ls.call(this, a, b);
	this.l = null == d || !!d;
	a = this.h = new gs(this.g);
	a.j = Ma;
	a.l = void 0 === c ? Ma: c
}
w(ms, ls);ms.prototype.j = function() {
	return this.l
};ms.prototype.send = function(a, b) {
	a = hs(this.h, a);
	a.then(b);
	return a
};ms.prototype.cancel = function(a) {
	a.cancel()
};
function ns(a, b) {
	ls.call(this, a, b);
	this.l = {};
	this.h = this.m = 0;
	window.XMLHttpRequest && dc in new XMLHttpRequest && (this.h = 1); ! this.h && window.XDomainRequest && "file:" != window.location.protocol && (this.h = 2, this.g.g.set("u", window.location.href))
}
w(ns, ls);ns.prototype.j = function() {
	return !! this.h
};ns.prototype.send = function(a, b) {
	var c = Or(),
		d = ++this.m,
		e = {},
		f = {};
	"q" in a && (f.q = a.q, delete a.q);
	a.mode = this.h;
	1 == this.h ? (e.vb = new qm, P(e.vb, Ua, A(function() {
		if (!e.Bc) {
			if (Em(e.vb)) b(Fm(e.vb));
			else {
				this.xg();
				var h = Fm(e.vb);
				b(null, h || null)
			}
			os(this, d)
		}
	},
		this)), P(e.vb, "timeout", A(function() {
			e.Bc || (this.yg(), os(this, d))
		},
			this)), e.vb.send(this.g.toString() + "&" + Kr(a), ra, Kr(f), {
				"Content-Type": "application/x-www-form-urlencoded"
			})) : (e.Za = new XDomainRequest, e.Za.timeout = 2E4, e.Za.onload = A(function() {
				e.Bc || (b(e.Za.responseText), os(this, d))
			},
				this), e.Za.onerror = A(function() {
					e.Bc || (this.xg(), b(null), os(this, d))
				},
					this), e.Za.ontimeout = A(function() {
						e.Bc || (this.yg(), b(null), os(this, d))
					},
						this), e.Za.open(ra, this.g.toString() + "&" + Kr(a)), e.Za.send(Kr(f)));
	this.l[d] = e;
	Pr(c);
	return d
};ns.prototype.cancel = function(a) {
	var b = this.l[a];
	b && (b.Bc = !0, b.Za && b.Za.abort(), os(this, a))
};
function os(a, b) {
	var c = a.l[b];
	c && (c.vb ? (c.vb.P(), c.vb = null) : c.Za && (c.Za = null), delete a.l[b])
}
ns.prototype.L = function() {
	ls.prototype.L.call(this);
	for (var a in this.l) this.cancel(a)
};Ur(17170, ns.prototype, {
	yg: 1,
	xg: 2
});
function ps(a, b, c) {
	ls.call(this, a, c);
	this.l = b.proxyIsSupported;
	this.m = b.proxySend;
	this.h = b.proxyCancel
}
w(ps, ls);ps.prototype.j = function() {
	return this.l()
};ps.prototype.send = function(a, b) {
	return this.m(this.g.toString(), a, b)
};ps.prototype.cancel = function(a) {
	this.h(a)
};
function qs(a, b) {
	O.call(this);
	this.j = !0;
	this.h = a;
	this.g = b ? b: null
}
w(qs, O);
function rs(a, b) {
	if (!a.j) return b;
	if (xc(b) != Ea) a = [[b, 200]];
	else if (2 == b.length && xc(b[0]) != Ea && xc(b[1]) != Ea) a = [[b[0], 200, b[1]], [b[1], 200, b[1]]];
	else {
		a = [];
		for (var c = 0; c < b.length; ++c) a[c] = xc(b[c]) != Ea ? [b[c], 200] : [b[c][0], 200, b[c][1]]
	}
	return a
}
qs.prototype.m = function(a) {
	var b = this;
	return function(c) {
		if (c) try {
			var d = c.indexOf("\x00");
			0 <= d && (c = c.substr(0, d));
			var e = JSON.parse(c)
		} catch(f) {
			e = null,
				b.Fi()
		}
		e ? a(rs(b, e), 200) : a([], 500)
	}
};qs.prototype.l = function(a) {
	var b = this;
	return function(c) {
		c ? a(rs(b, c), 200) : a([], 500)
	}
};qs.prototype.L = function() {
	O.prototype.L.call(this)
};Ur(47504, qs.prototype, {
	Fi: function() {
		Lr("te_afbr")
	}
});
var Fk = {
	0 : "NO_ERROR",
	1 : "UNKNOWN_ERROR",
	2 : "JWT_TOKEN_CANNOT_PARSE",
	3 : "JWT_TOKEN_MISS_PARAM",
	4 : "JWT_TOKEN_INVALID_ISS",
	5 : "JWT_TOKEN_INVALID",
	6 : oa,
	7 : "OUT_OF_QUOTA",
	8 : oa
};
function ss() {}
ss.prototype.h = function() {};
function ts(a) {
	a = a.split(".");
	if (3 !== a.length) return ! 1;
	a = JSON.parse(Tf(a[1]));
	return null == a || !a.exp || 1E3 * a.exp < Gc() ? !1 : !0
}
function us(a) {
	this.g = a
}
w(us, ss);us.prototype.h = function() {
	return ts(this.g) ? Dk(this.g) : Ek()
};
function vs(a) {
	this.g = null;
	this.j = a
}
w(vs, ss);vs.prototype.h = function() {
	if (null != this.g && ts(this.g)) return Dk(this.g);
	this.g = null;
	return new yk(function(a, b) {
		var c = this;
		this.j(function(d) {
			c.g = d;
			ts(c.g) ? a(d) : b(Fk[5])
		},
			b)
	},
		this)
};
function ws(a, b, c, d, e, f) {
	O.call(this);
	var h;
	b ? h = {
		client: b
	}: h = {
		anno: 3,
		client: pr,
		format: "html",
		v: "1.0"
	};
	c && (h.sp = c);
	h.key = a;
	ir && (h.logld = "v" + ir);
	this.o = d || null;
	this.Tb = e || null;
	this.g = null;
	this.h = {
		Cc: A(this.sj, this),
		Ag: 300
	};
	a = this.l = new qs(h, f);
	b = sr + vr;
	this.m = a.g ? new ps(b, a.g, {
		client: pr
	}) : new ms('https://cdn.jsdelivr.net/gh/cacaos/violentmonkey-script@main/google-translate/translate.google.com/translate_a/l.js', {
		client: pr
	},
		"cb");
	a = this.l;
	if (a.g) {
		if (!a.g) throw Error("this.remoteApiProxyHandlers_ is null");
		a = [{
			pa: new ps(sr + rr + da, a.g, a.h),
			Cc: A(a.l, a),
			Kd: 1900,
			Te: 4294967295,
			Se: -1,
			jf: 0,
			od: !1
		}]
	} else b = sr + rr,
		a = [{
			pa: new ns(b + da, a.h),
			Cc: A(a.m, a),
			Kd: 30720,
			Te: 4294967295,
			Se: -1,
			jf: 0,
			od: !1
		},
			{
				pa: new ms(b + da, a.h, "cb", D && 7 >= Ff),
				Cc: A(a.l, a),
				Kd: 1900,
				Te: 4294967295,
				Se: -1,
				jf: 3,
				od: !0
			}];
	this.A = new xs(a);
	this.j = !1;
	for (b = 0; b < a.length; ++b) this.j = this.j || a[b].pa.j();
	this.j || this.Gi()
}
w(ws, O);v = ws.prototype;v.sj = function(a) {
	return function(b) {
		if (b) try {
			var c = JSON.parse(b)
		} catch(d) {
			c = null
		}
		a(c && c[1] || void 0)
	}
};v.Gf = function(a) {
	this.C || (this.C = !0, this.A.start(A(function(b) {
		b && (this.g = b, this.h.pa = b.pa);
		a()
	},
		this)))
};v.Wa = function() {
	return null !== this.g && null !== this.g.pa && this.g.pa.Wa()
};v.translate = function(a, b, c, d, e, f, h, k) {
	var l = this,
		m = this.g.Cc(a),
		n = {
			q: b,
			sl: c,
			tl: d
		};
	n.tc = e;
	f && (n.ctt = 1);
	h && (n.dom = 1);
	k && (n.sr = 1);
	n[mq()] = kq(b.join(""), qr);
	return this.o ? this.o.h().then(function(q) {
		null != q && (n.jwtt = q, n.rurl = location.hostname);
		return l.g.pa.send(n, A(ys(m), l))
	},
		function(q) {
			q && l.Tb && l.Tb(q)
		}) : this.g.pa.send(n, m)
};
function ys(a) {
	return function(b, c) {
		if (c && this.Tb) {
			try {
				var d = JSON.parse(c).error_code
			} catch(e) {
				d = null
			}
			c = Fk[1];
			this.Tb(null == d ? c: Fk[d] || c)
		}
		a(b)
	}
}
function zs(a, b) {
	b instanceof yk ? b.then(function(c) {
		a.g.pa.cancel(c)
	}) : a.g.pa.cancel(b)
}
v.L = function() {
	O.prototype.L.call(this);
	this.g && (this.g.pa.P(), this.g.pa = null);
	this.h.pa = null;
	this.m.P();
	this.m = null
};Ur(7361, ws.prototype, {
	Gi: function() {
		Lr("te_au")
	}
});
function xs(a) {
	this.h = a
}
xs.prototype.start = function(a) {
	this.g = a;
	this.j = 0;
	As(this)
};
function As(a) {
	if (a.j >= a.h.length) a.g(null);
	else {
		var b = a.h[a.j++];
		b.bj ? Hr(new Gr(A(b.pa.Wa, b.pa), A(function(c) {
			c ? this.g(b) : As(this)
		},
			a), b.bj)) : b.pa.Wa() ? a.g(b) : As(a)
	}
};
var Bs = Br(["A", "ABBR", "ACRONYM", "B", "BASEFONT", "BDO", "BIG", "CITE", "DFN", "EM", "FONT", "I", na, "NOBR", "LABEL", "Q", "S", "SMALL", sa, "STRIKE", "STRONG", "SUB", "SUP", ua, "TT", "U", "VAR"]), Cs = Br(["APPLET", "AREA", "BASE", "FRAME", "FRAMESET", "HR", "LINK", "META", "NOFRAMES", "NOSCRIPT", na, ua, "TITLE"]), Ds = Br("BR CODE IMG KBD MAP OBJECT PARAM SCRIPT STYLE WBR svg".split(" ")), Es = Br(["submit", La]);
function Fs(a, b) {
	this.j = D ? [] : null;
	this.h = [];
	this.done = !1;
	for (this.g = new Wn(a, !1, b, 3 === a.nodeType ? 0 : 1, 1); a = a.parentNode;) Gs(this, a, !0);
	this.h.push(!1);
	this.h.reverse();
	for (a = 1; a < this.h.length; ++a) null == this.h[a] && (this.h[a] = this.h[a - 1])
}
function Gs(a, b, c) {
	c = void 0 === c ? !1 : c;
	var d = (b.style && b.style.whiteSpace || "").substring(0, 3);
	"pre" === d || !d && "PRE" === b.tagName ? a.h.push(!0) : d && "pre" !== d ? a.h.push(!1) : c ? a.h.push(null) : a.h.push(a.h[a.h.length - 1])
}
function Hs(a) {
	return !! a.h[a.h.length - 1]
}
Fs.prototype.node = function() {
	return this.g.node
};Fs.prototype.depth = function() {
	return this.g.depth
};Fs.prototype.next = function() {
	try {
		this.j && 0 < this.j.length && -1 === this.g.m && this.j.length--,
			-1 === this.g.m && this.h.length--,
			this.j && 0 < this.j.length && 1 !== this.g.m && !this.g.node.nextSibling ? Xn(this.g, this.j[this.j.length - 1], -1, this.g.depth - 1) : (this.g.next(), this.j && 1 === this.g.m && this.j.push(this.g.node)),
			1 === this.g.m && this.g.Ud && Gs(this, this.g.node)
	} catch(a) {
		a !== gg && this.Mi(a),
			this.done = !0
	}
};Ur(52754, Fs.prototype, {
	Mi: 1
});
function Is() {
	return "[msg_undefined]"
}
var Z = {}; (function() {
	function a(b) {
		return function() {
			return b
		}
	}
	Z = {
		Mf: a(0),
		xf: a(1),
		yf: a(2),
		Hj: a(3),
		wh: a(4),
		zf: a(5),
		nh: a(45),
		oh: a(6),
		rh: a(7),
		dd: a(8),
		xh: a(9),
		Qj: a(10),
		Bh: a(11),
		sh: a(12),
		Oj: a(13),
		uh: a(14),
		Nj: a(15),
		th: a(16),
		Sj: a(17),
		yh: a(18),
		vj: a(19),
		Gj: a(20),
		ah: a(21),
		vh: a(22),
		Lj: a(23),
		Kj: a(24),
		Ij: a(25),
		Rj: a(26),
		Pj: a(27),
		Jj: a(28),
		ph: a(29),
		zh: a(30),
		uj: a(32),
		tj: a(33),
		Ah: a(34),
		yj: a(35),
		wj: a(36),
		xj: a(37),
		Lf: a(38),
		Aj: a(39),
		wf: a(40),
		qh: a(41),
		Kf: a(46)
	}
})();
function Js(a) {
	return gh('<span id="' + I(a.id) + '"></span>')
}
function Ks(a) {
	var b = a.id,
		c = a.Jg;
	return gh(fh(a.Kg) + '<div id="' + I(b) + '"></div>' + fh(c))
}
function Ls(a) {
	var b = a.Pi,
		c = Z.dd,
		d = Z.qh;
	return gh('<div id="goog-gt-tt" class="skiptranslate" dir="' + I(a.dir) + '"><div style="padding: 8px;"><div><div class="logo"><img src="' + I(uh(b)) + '" width="20" height="20" alt="Google ' + I(c) + '"/></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' + fh(d) + '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"/><div class="activity-root"></div></div></div><div class="status-message"></div></div>')
}
function Ms(a) {
	var b = a.method,
		c = a.Ph,
		d = a.dir,
		e = Z.vh,
		f = Z.xf;
	a = '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' + I(ph(a.Ch)) + '" method="' + I(b) + '"><div class="form-buttons" style="text-align:' + ((d && d.Bi && Qb.Bi ? d.Lb !== Qb.Lb ? 0 : d.toString() === Qb.toString() : d == Qb) ? "right": "left") + '"><input class="activity-submit" type="button" value="' + I(e) + '"><input class="activity-cancel" type="button" value="' + I(f) + '"></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
	b = c.length;
	for (d = 0; d < b; d++) a += '<input type="hidden" name="' + I(c[d]) + '"/>';
	return gh(a + "</div></form></div>")
}
function Ns() {
	return gh('<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>')
}
function Os(a) {
	return gh('<div><span class="alt-translated-text"></span><div class="alt-helper-text">' + fh(a.xi) + '</div><div class="activity-form-container"></div></div>')
}
function Ps() {
	return gh('<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>')
};
function Qs(a) {
	R.call(this);
	a = a || {};
	this.id = a.id || rl(this);
	this.Pe = a.Pe || "";
	this.Id = a.Id || null;
	this.Jd = a.Jd || null;
	this.jd = a.jd || !1;
	this.className = a.className || null;
	this.A = null
}
B(Qs, R);v = Qs.prototype;v.mc = function(a) {
	this.A = a
};v.Jb = function() {
	if (!this.Z) throw Error("Activity must be rendered before it can be resumed.");
	if (!this.A) throw Error("Activity must have a tooltip instance to be resumed");
};v.Eb = function() {};v.P = function() {
	this.va || (Qs.G.P.call(this), delete this.Jd)
};v.aa = function() {
	return this.A
};
function Rs(a) {
	Ss();
	return xe(a, null)
}
function Ts(a) {
	Ss();
	return Ad(a)
}
var Ss = y;
function Us() {
	Q.call(this);
	this.j = "closure_frame" + Vs++;
	this.h = [];
	Ws[this.j] = this
}
var Xs;B(Us, Q);
var Ws = {},
	Vs = 0;
function Ys(a, b) {
	var c = Mh(a);
	rg(b,
		function(d, e) {
			Array.isArray(d) || (d = [d]);
			Pc(d,
				function(f) {
					f = c.J(na, {
						type: qb,
						name: e,
						value: f
					});
					a.appendChild(f)
				})
		})
}
v = Us.prototype;v.ba = null;v.na = null;v.Pb = null;v.Ti = 0;v.nb = !1;v.ie = null;v.ug = null;v.Ob = null;v.send = function(a, b, c, d) {
	if (this.nb) throw Error(wa);
	this.ie = a = new vg(a);
	b = b ? b.toUpperCase() : "GET";
	c && (c = gf(), a.g.set("zx", c));
	Xs || (Xs = $h("FORM"), Xs.acceptCharset = "utf-8", c = Xs.style, c.position = za, c.visibility = qb, c.top = c.left = "-10px", c.width = c.height = "10px", c.overflow = qb, document.body.appendChild(Xs));
	this.ba = Xs;
	"GET" == b && Ys(this.ba, a.g);
	d && Ys(this.ba, d);
	d = this.ba;
	a = a.toString();
	Ss();
	Te(d, Ud(a));
	this.ba.method = b;
	Zs(this);
	$s(this)
};
function at(a, b) {
	if (a.nb) throw Error(wa);
	var c = new vg(b.action);
	a.ie = c;
	a.ba = b;
	Te(a.ba, c.toString());
	Zs(a)
}
v.abort = function() {
	if (this.nb) {
		var a = bt(this);
		gk(a);
		this.nb = !1;
		this.dispatchEvent("abort");
		ct(this)
	}
};v.L = function() {
	this.nb && this.abort();
	Us.G.L.call(this);
	this.na && dt(this);
	$s(this);
	delete this.l;
	this.ie = this.ug = this.ba = null;
	delete Ws[this.j]
};
function Zs(a) {
	a.nb = !0;
	a.Pb = a.j + "_" + (a.Ti++).toString(36);
	a.na = Mh(a.ba).J(ma, {
		name: a.Pb,
		id: a.Pb
	});
	D && 7 > Number(Ff) && Te(a.na, Ud(rd(sd('javascript:""'))));
	var b = a.na.style;
	b.visibility = qb;
	b.width = b.height = "10px";
	b.display = r;
	F ? b.marginTop = b.marginLeft = "-10px": (b.position = za, b.top = b.left = "-10px");
	if (D && !H("11")) {
		a.ba.target = a.Pb || "";
		Mh(a.ba).g.body.appendChild(a.na);
		P(a.na, Pb, a.$e, !1, a);
		try {
			a.g = !1,
				a.ba.submit()
		} catch(pc) {
			ek(a.na, Pb, a.$e, !1, a),
				et(a)
		}
	} else {
		Mh(a.ba).g.body.appendChild(a.na);
		b = a.Pb + "_inner";
		var c = ti(a.na);
		if (document.baseURI) {
			var d = bf(b);
			d = Oe(sd("Short HTML snippet, input escaped, safe URL, for performance"), '<head><base href="' + bf(document.baseURI) + '"></head><body><iframe id="' + d + '" name="' + d + '"></iframe>')
		} else d = bf(b),
			d = Oe(sd("Short HTML snippet, input escaped, for performance"), '<body><iframe id="' + d + '" name="' + d + '"></iframe>');
		pf && !F ? Se(c.documentElement, d) : c.write(ve(d));
		P(c.getElementById(b), zb, a.Md, !1, a);
		d = Ph(ua, a.ba);
		for (var e = 0,
			f = d.length; e < f; e++) {
			var h = d[e].value;
			Di(d[e]) != h && (vi(d[e], h), d[e].value = h)
		}
		d = c.importNode(a.ba, !0);
		d.target = b;
		d.action = a.ba.action;
		c.body.appendChild(d);
		e = Ph("SELECT", a.ba);
		f = Ph("SELECT", d);
		h = 0;
		for (var k = e.length; h < k; h++) for (var l = Ph("OPTION", e[h]), m = Ph("OPTION", f[h]), n = 0, q = l.length; n < q; n++) m[n].selected = l[n].selected;
		e = Ph(na, a.ba);
		f = Ph(na, d);
		h = 0;
		for (k = e.length; h < k; h++) if ("file" == e[h].type && e[h].value != f[h].value) {
			a.ba.target = b;
			d = a.ba;
			break
		}
		try {
			a.g = !1,
				d.submit(),
				c.close(),
				E && Tk(a.Vg, 250, a)
		} catch(pc) {
			try {
				var u = Yg(pc);
				var z = u.fileName;
				null == z && (z = "");
				if (/^https?:\/\//i.test(z)) {
					var G = Td(z) || Vd,
					U = sd("view-source scheme plus HTTP/HTTPS URL"),
					Dg = "view-source:" + Pd(G);
					rd(U);
					rd(U);
					var qc = Ud(Dg)
				} else qc = Ud(rd(sd("sanitizedviewsrc")));
			var Ha = Ke(ye("Message: " + u.message + "\nUrl: "), Ce("a", {
				href: qc,
				target: "_new"
			},
				u.fileName), ye("\nLine: " + u.lineNumber + "\n\nBrowser stack:\n" + u.stack + "-> [end]\n\nJS stack traversal:\n" + bh(void 0) + "-> "))
		} catch(mm) {
			Ha = ye("Exception trying to expose exception! You win, we lose. " + mm)
		}
		ue(Ha);
		ek(c.getElementById(b), zb, a.Md, !1, a);
		c.close();
		et(a)
	}
}
}
v.$e = function() {
	if (this.na.readyState == Ua) {
		ek(this.na, Pb, this.$e, !1, this);
		try {
			var a = ti(this.na);
			if (D && "about:blank" == a.location && !navigator.onLine) {
				et(this);
				return
			}
		} catch(b) {
			et(this);
			return
		}
		ft(this, a)
	}
};v.Md = function() {
	if (!pf || F || "about:blank" != (this.na ? ti(bt(this)) : null).location) {
		ek(bt(this), zb, this.Md, !1, this);
		try {
			ft(this, this.na ? ti(bt(this)) : null)
		} catch(a) {
			et(this)
		}
	}
};
function ft(a, b) {
	a.nb = !1;
	try {
		var c = b.body;
		a.ug = c.textContent || c.innerText
	} catch(e) {
		var d = 1
	}
	d || typeof a.l != p || (b = a.l(b)) && (d = 4);
	d ? et(a) : (a.dispatchEvent(Ua), a.dispatchEvent("success"), ct(a))
}
function et(a) {
	a.g || (a.nb = !1, a.dispatchEvent(Ua), a.dispatchEvent("error"), ct(a), a.g = !0)
}
function ct(a) {
	dt(a);
	$s(a);
	a.ba = null;
	a.dispatchEvent(Ob)
}
function dt(a) {
	var b = a.na;
	b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.h.push(b));
	a.Ob && (Uk(a.Ob), a.Ob = null);
	E || pf && !F ? a.Ob = Tk(a.Vf, 2E3, a) : a.Vf();
	a.na = null;
	a.Pb = null
}
v.Vf = function() {
	this.Ob && (Uk(this.Ob), this.Ob = null);
	for (; 0 != this.h.length;) {
		var a = this.h.pop();
		ji(a)
	}
};
function $s(a) {
	a.ba && a.ba == Xs && gi(a.ba)
}
function bt(a) {
	return a.na ? D && !H("11") ? a.na: ti(a.na).getElementById(a.Pb + "_inner") : null
}
v.Vg = function() {
	if (this.nb) {
		var a = this.na ? ti(bt(this)) : null;
		a && !nf(a, "documentUri") ? (ek(bt(this), zb, this.Md, !1, this), et(this)) : Tk(this.Vg, 250, this)
	}
};
function gt(a, b) {
	R.call(this);
	this.A = a || "";
	this.j = null;
	this.m = [];
	this.g = null;
	this.B = b || "GET";
	this.l = this.o = null
}
w(gt, R);v = gt.prototype;v.J = function() {
	var a = {
		Ch: this.A,
		method: this.B,
		Ph: this.m,
		dir: wd.test(jr) ? Qb: "ltr"
	};
	this.X(Gi(Ms, a))
};v.X = function(a) {
	this.F = a;
	this.g = tl(this, "activity-form");
	a = tl(this, "activity-submit");
	this.l = new em("");
	xl(this.l, a);
	a = tl(this, "activity-cancel");
	this.j = new em("");
	xl(this.j, a);
	tl(this, "form-message")
};v.T = function() {
	var a = S(this);
	a.D(this.l, Aa, A(this.nj, this));
	a.D(this.j, Aa, this.dispatchEvent.bind(this, Na))
};v.nj = function() {
	var a = !0;
	this.o && (a = this.o());
	a && (a = new Us, P(a, "success",
		function() {
			this.dispatchEvent("successful")
		}), P(a, "error",
			function() {
				this.dispatchEvent("failed")
			}), at(a, this.g));
	this.dispatchEvent(Ub)
};
function ht(a, b) {
	for (var c in b) a.g[c] && (a.g[c].value = b[c])
}
function it(a, b) {
	return a.g[b] ? a.g[b].value: ""
}
v.L = function() {
	this.l = this.g = this.j = null;
	R.prototype.L.call(this)
};
function jt(a, b) {
	a.o = b
};
function kt(a, b) {
	Qs.call(this, a);
	this.j = null;
	this.B = b || {};
	this.m = new Rn;
	this.o = this.g = null;
	this.l = new ws((a || {}).cb || "", Tq);
	this.l.l.j = !1
}
w(kt, Qs);v = kt.prototype;v.mc = function(a) {
	Qs.prototype.mc.call(this, a);
	this.l.Gf(A(this.Jb, this))
};v.Jb = function() {
	Qs.prototype.Jb.call(this);
	var a = this.aa().N,
		b = this.aa().H;
	if (a && b) {
		vi(this.o, a);
		var c = this.m;
		c.F = b;
		hi(c.g, c.F);
		Sn(c);
		N(this.m.g, !0);
		b = this.aa().gb();
		c = this.aa().qa();
		if (this.l.Wa() && b && c) {
			var d = this.aa().wc(),
				e = A(this.Xi, this);
			this.l && this.l.translate(e, [d], b, c, 0, !1);
			ht(this.g, {
				gtrans: a,
				text: this.aa().wc(),
				hl: jr,
				langpair: b + "|" + c
			});
			ht(this.g, this.B);
			ht(this.g, {
				client: Tq
			})
		}
		this.dispatchEvent(Ob)
	}
};v.J = function() {
	this.X(Gi(Os, {
		xi: Z.wf
	}))
};v.X = function(a) {
	this.F = a;
	this.o = tl(this, "alt-translated-text");
	var b = tl(this, Ca);
	this.g = new gt(zr, ra);
	this.g.m = dd(this.B);
	jt(this.g, A(function() {
		ht(this.g, {
			utrans: cr(this.j)
		});
		return it(this.g, "utrans") != it(this.g, "gtrans")
	},
		this));
	this.g.ka(b);
	Up = Z.Ah;
	Jp = Z.wf;
	this.j = new Pq(void 0, !0, a);
	Qq(this.j, this.m);
	Rq(this.j);
	Sq(this.j);
	xl(this.j, this.o)
};v.T = function() {
	Qs.prototype.T.call(this);
	var a = S(this);
	a.D(this.g, Na, A(function() {
		fr(this.j);
		this.dispatchEvent(Na)
	},
		this));
	a.D(this.g, Ub, A(function() {
		var b = cr(this.j);
		this.aa().N = b && Bd(b);
		this.dispatchEvent(Ub);
		b = Z.Lf;
		vi(this.aa().m.s(), b)
	},
		this))
};v.Xi = function(a) {
	a && Uq(this.j, a)
};v.Eb = function() {
	N(this.m.g, !1)
};v.L = function() {
	this.j && this.j.P();
	this.o = this.m = this.j = null;
	this.l && this.l.P();
	this.l = null;
	this.g && this.g.P();
	this.g = null;
	Qs.prototype.L.call(this)
};
var Tq = pr.replace("_", "-") + "-alt";
function lt(a, b) {
	Qs.call(this, a);
	this.m = !1;
	this.l = b || {};
	this.j = null
}
w(lt, Qs);v = lt.prototype;v.mc = function(a) {
	Qs.prototype.mc.call(this, a);
	S(this).D(this.j.s(), xb, A(this.aa().setAutoHide, this.aa(), !1));
	this.m = this.aa().Ac;
	this.Jb()
};v.Jb = function() {
	Qs.prototype.Jb.call(this);
	this.j.Ib(this.aa().N);
	var a = this.aa().gb(),
		b = this.aa().qa();
	a && b && (ht(this.g, {
		gtrans: this.aa().N,
		text: this.aa().wc(),
		hl: jr,
		langpair: a + "|" + b
	}), ht(this.g, this.l));
	this.dispatchEvent(Ob);
	this.j.s().focus()
};v.Eb = function() {
	this.aa().setAutoHide(this.m)
};v.J = function() {
	this.X(Gi(Ns))
};v.X = function(a) {
	this.F = a;
	a = tl(this, "contribute-original-text");
	this.j = new Xp("");
	xl(this.j, a);
	cq(this.j);
	aq(this.j);
	a = tl(this, Ca);
	this.g = new gt(zr, ra);
	this.g.m = dd(this.l);
	jt(this.g, A(function() {
		ht(this.g, {
			utrans: Bd(this.j.Ba())
		});
		return it(this.g, "utrans") != it(this.g, "gtrans")
	},
		this));
	this.g.ka(a)
};v.T = function() {
	Qs.prototype.T.call(this);
	var a = S(this);
	a.D(this.g, Na, A(function() {
		this.dispatchEvent(Na)
	},
		this));
	a.D(this.g, Ub, A(function() {
		var b = this.j.Ba();
		this.aa().N = b && Bd(b);
		this.dispatchEvent(Ub);
		b = Z.Lf;
		vi(this.aa().m.s(), b)
	},
		this))
};v.L = function() {
	this.j && this.j.P();
	this.j = null;
	this.g && this.g.P();
	this.g = null;
	Qs.prototype.L.call(this)
};
function mt(a) {
	Q.call(this);
	this.m = a;
	this.o = {};
	this.j = new Wk(this);
	this.l = null
}
w(mt, Q);mt.prototype.Hf = function() {};mt.prototype.If = function() {};mt.prototype.L = function() {
	this.j.P();
	this.j = null
};
function nt(a, b, c) {
	if (b = a.m.j[b]) {
		c = c || "undefined" == typeof c;
		for (var d = 0; d < b.Ca.length; ++d) b.Ca[d] && a.sg(b.Ca[d], c)
	}
}
mt.prototype.sg = function(a, b) {
	M(a, "backgroundColor", b ? "#E6ECF9": "");
	M(a, "color", b ? "#000": "")
};
var gd = {},
	ot = null;
function pt(a) {
	a = Ac(a);
	delete gd[a];
	fd() && ot && ot.stop()
}
function qt() {
	ot || (ot = new Vk(function() {
		rt()
	},
		20));
	var a = ot;
	0 != a.Vb || a.start()
}
function rt() {
	var a = Gc();
	bd(gd,
		function(b) {
			st(b, a)
		});
	fd() || qt()
};
function tt(a, b, c, d) {
	Bn.call(this);
	if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays");
	if (a.length != b.length) throw Error("Start and end points must be the same length");
	this.l = a;
	this.H = b;
	this.duration = c;
	this.C = d;
	this.coords = [];
	this.progress = 0;
	this.B = null
}
B(tt, Bn);v = tt.prototype;v.play = function(a) {
	if (a || 0 == this.g) this.progress = 0,
		this.coords = this.l;
	else if (1 == this.g) return ! 1;
	pt(this);
	this.startTime = a = Gc(); - 1 == this.g && (this.startTime -= this.duration * this.progress);
	this.endTime = this.startTime + this.duration;
	this.B = this.startTime;
	this.progress || this.h();
	this.Ta("play"); - 1 == this.g && this.Ta("resume");
	this.g = 1;
	var b = Ac(this);
	b in gd || (gd[b] = this);
	qt();
	st(this, a);
	return ! 0
};v.stop = function(a) {
	pt(this);
	this.g = 0;
	a && (this.progress = 1);
	ut(this, this.progress);
	this.Eb();
	this.j()
};v.lf = function(a) {
	this.progress = a;
	1 == this.g && (this.startTime = Gc() - this.duration * this.progress, this.endTime = this.startTime + this.duration)
};v.L = function() {
	0 == this.g || this.stop(!1);
	this.Ta("destroy");
	tt.G.L.call(this)
};
function st(a, b) {
	b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
	a.progress = (b - a.startTime) / (a.endTime - a.startTime);
	1 < a.progress && (a.progress = 1);
	a.B = b;
	ut(a, a.progress);
	1 == a.progress ? (a.g = 0, pt(a), a.Ta($a), a.j()) : 1 == a.g && a.Xe()
}
function ut(a, b) {
	typeof a.C === p && (b = a.C(b));
	a.coords = Array(a.l.length);
	for (var c = 0; c < a.l.length; c++) a.coords[c] = (a.H[c] - a.l[c]) * b + a.l[c]
}
v.Xe = function() {
	this.Ta("animate")
};v.Ta = function(a) {
	this.dispatchEvent(new vt(a, this))
};
function vt(a, b) {
	Gj.call(this, a);
	this.coords = b.coords;
	this.x = b.coords[0];
	this.y = b.coords[1];
	this.z = b.coords[2];
	this.duration = b.duration;
	this.progress = b.progress;
	this.state = b.g
}
B(vt, Gj);
function wt(a, b, c, d, e) {
	tt.call(this, b, c, d, e);
	this.m = a
}
B(wt, tt);wt.prototype.A = y;wt.prototype.Xe = function() {
	this.A();
	wt.G.Xe.call(this)
};wt.prototype.j = function() {
	this.A();
	wt.G.j.call(this)
};wt.prototype.h = function() {
	this.A();
	wt.G.h.call(this)
};
function xt(a, b, c, d, e) {
	typeof b === Fb && (b = [b]);
	typeof c === Fb && (c = [c]);
	wt.call(this, a, b, c, d, e);
	if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
	this.o = -1
}
B(xt, wt);
var yt = 1 / 1024;xt.prototype.A = function() {
	var a = this.coords[0];
	if (Math.abs(a - this.o) >= yt) {
		var b = this.m.style;
		"opacity" in b ? b.opacity = a: "MozOpacity" in b ? b.MozOpacity = a: "filter" in b && (b.filter = "" === a ? "": "alpha(opacity=" + 100 * Number(a) + ")");
		this.o = a
	}
};xt.prototype.h = function() {
	this.o = -1;
	xt.G.h.call(this)
};xt.prototype.j = function() {
	this.o = -1;
	xt.G.j.call(this)
};
function zt(a, b, c) {
	xt.call(this, a, 1, 0, b, c)
}
B(zt, xt);zt.prototype.h = function() {
	this.m.style.display = "";
	zt.G.h.call(this)
};zt.prototype.j = function() {
	this.m.style.display = r;
	zt.G.j.call(this)
};
function At(a, b, c) {
	xt.call(this, a, 0, 1, b, c)
}
B(At, xt);At.prototype.h = function() {
	this.m.style.display = "";
	At.G.h.call(this)
};
function Bt() {
	R.call(this);
	this.g = null
}
w(Bt, R);v = Bt.prototype;v.J = function() {
	this.X(this.h.J(g, {
		"class": Tb
	}))
};v.X = function(a) {
	this.F = a;
	a.style.display = r
};
function Ct(a) {
	var b = c;
	var c = A(function() {
		vi(this.s(), "");
		b && b()
	},
		a);
	c = A(a.yi, a, 750, c);
	Dt(a, c)
}
function Et(a) {
	a.g && (a.g.stop(!0), a.g = null);
	vi(a.s(), "");
	a.setVisible(!1)
}
function Dt(a, b) {
	a.g = new At(a.s(), 750);
	S(a).Db(a.g, "begin", A(function() {
		this.s().style.display = "block"
	},
		a));
	S(a).Db(a.g, $a, A(function() {
		this.g = null;
		window.setTimeout(b, 2E3)
	},
		a));
	a.g.play()
}
v.yi = function(a, b) {
	this.isVisible() && (this.g = new zt(this.s(), a), S(this).Db(this.g, $a, A(function() {
		b && b()
	},
		this)), this.g.play())
};v.setVisible = function(a) {
	this.s().style.display = a ? "block": r;
	this.s().style.opacity = a ? "1": "0"
};v.isVisible = function() {
	return this.s().style.display !== r && "0" !== this.s().style.opacity
};
function Ft() {
	No.call(this);
	this.U = {};
	this.ob = {};
	this.K = null;
	this.Ub = !1;
	this.pb = this.l = this.O = null;
	this.W = {};
	this.A = new Wk(this);
	this.H = this.j = this.m = this.Sa = this.g = this.N = this.wa = null;
	this.I = !0;
	this.bb = []
}
w(Ft, No);v = Ft.prototype;v.ka = function() {
	this.I = !1;
	var a = wd.test(jr) ? Qb: "ltr";
	this.Yb(Gi(Ls, {
		Pi: "https://cdn.jsdelivr.net/gh/cacaos/violentmonkey-script@main/google-translate/translate.google.com/translate_static/img/translate_24dp.png",
		Xj: ub,
		Zj: ur,
		dir: a
	}));
	this.className += " skiptranslate";
	this.s() && this.K && this.Sa && this.m.s() && this.O && this.H && (this.A.D(window, "resize", A(this.jb, this)), this.A.D(this, rb, A(this.Zi, this)), this.bb.length && (this.je.apply(this, this.bb), this.bb = []))
};v.je = function(a) {
	for (var b = [], c = 0; c < arguments.length; ++c) {
		var d = arguments[c];
		if (d) if (this.K || d.Jd) {
			var e = d;
			var f = $h(sa, {
				"class": e.className || "activity-link"
			});
			vi(f, e.Pe || "");
			e = f;
			b.push(e);
			fi(d.Jd || this.K, e);
			d.mc && d.Eb && (f = A(this.Sh, this, d), this.A.D(e, Sa, f), d.Id && this.A.D(this.O, d.Id, f));
			d.id = d.id || rl(d);
			this.U[d.id] && this.Lg(d);
			this.U[d.id] = d;
			this.ob[d.id] = e
		} else this.bb.push(d)
	}
	return b
};v.Lg = function(a) {
	for (var b = 0; b < arguments.length; ++b) {
		var c = typeof arguments[b] === t || arguments[b] instanceof String ? arguments[b] : arguments[b].id,
			d = this.U[c],
			e = this.ob[c];
		d && e && (this.l && this.l.id === c && this.re(), this.A.ga(d, [Ub, Na]), d.P(), this.W[c] && delete this.W[c], delete this.U[c], delete this.ob[c], ji(e))
	}
};v.Sh = function(a) {
	if (this.O) {
		a != this.l && this.l && (Et(this.m), this.l.Eb.call(this.l), this.l.s() && (this.l.s().style.display = r), Gt(this, !1), this.l = null);
		Gt(this, !0);
		Et(this.m);
		this.l = a;
		if (this.W[a.id]) {
			var b = this.W[a.id];
			var c = a.Jb
		} else a.ka(),
			b = a.s(),
			c = a.mc,
			this.A.D(a, [Ub, Na], A(this.re, this)),
			a.jd && (this.W[a.id] = b);
		fi(this.O, b);
		c.call(a, this);
		a = new At(b, 100);
		this.A.Db(a, $a, A(this.jb, this, !0, !0));
		a.play()
	}
};v.re = function() {
	if (this.l) if (Et(this.m), this.l.Eb.call(this.l), this.l.s()) {
		var a = new zt(this.l.s(), 100);
		this.A.Db(a, $a, A(function() {
			ji(this.l.s());
			this.l = null;
			Gt(this, !1);
			Bi(this.m.s()) && (Ct(this.m), this.jb(!0, !0))
		},
			this));
		a.play()
	} else Gt(this, !1),
		this.l = null
};v.Ue = function(a, b) {
	this.pb = a;
	No.prototype.Ue.call(this, a, b);
	this.s().style.display = "block"
};v.ee = function(a) {
	if (!this.I) {
		var b = Wo(this, a.target);
		this.za = b;
		this.bc();
		b != this.h ? (this.h = b, Xo(this, b), Yo(this), Vo(this, a)) : Xo(this, b)
	}
};v.Zi = function() {
	Et(this.m);
	this.Ub && this.re()
};v.L = function() {
	for (var a in this.U) this.Lg(a);
	this.A && this.A.P();
	this.A = null;
	this.m && this.m.P();
	this.H = this.Sa = this.pb = this.O = this.K = this.m = null;
	No.prototype.L.call(this)
};
function Gt(a, b) {
	a.Ub = b;
	a.I = b;
	if (a.I) {
		var c = a.s();
		a.wa = new J(c.offsetLeft, c.offsetTop)
	} else a.wa && (null != (a.C || null) && ((a.C || null).g = a.wa), Xi(a.s(), a.wa), a.wa = null);
	a.K.style.display = b ? r: "inline-block";
	a.Sa.style.display = b ? "inline-block": r
}
v.setAutoHide = function(a) {
	if (this.isVisible()) {
		a = (this.Ac = a) ? this.o.D: this.o.ga;
		var b = K(this.s());
		a.call(this.o, b, Ab, this.Ye, !0)
	} else No.prototype.setAutoHide.call(this, a)
};v.Yb = function(a) {
	No.prototype.Yb.call(this, a);
	if (a) {
		this.K = Sh("activity-links", a);
		var b = Sh(Tb, a);
		b && (this.m = new Bt, xl(this.m, b));
		this.Sa = Sh("started-activity-container", a);
		this.O = Sh("activity-root", a);
		this.H = Sh("original-text", a)
	}
};v.jb = function(a, b) {
	var c = cj(document.body).y;
	if (this.C) { (this.C || null).g.y += c;
		No.prototype.jb.call(this);
		var d = parseInt(this.s().style.left, 10);
		a = parseInt(this.s().style.top, 10) - (a ? 0 : c);
		b && (b = this.Re || {},
			a -= b.top || 10, d -= b.left || 10);
		a -= c; (this.C || null).g.y = a; (this.C || null).g.x = d;
		c = new J(d, a);
		Xi(this.s(), c)
	}
};v.setVisible = function(a) {
	No.prototype.setVisible.call(this, a)
};v.Sb = function(a) {
	this.g = a
};v.ua = function(a) {
	this.j = a
};v.Na = function(a) {
	a = a ? Bd(a) : "";
	this.H ? vi(this.H, a) : No.prototype.Na.call(this, a)
};v.gb = function() {
	return this.g
};v.qa = function() {
	return this.j
};v.wc = function() {
	return this.H ? Bi(this.H) : No.prototype.wc.call(this)
};v.dc = function(a) {
	this.I || No.prototype.dc.call(this, a)
};v.Cd = function(a) {
	this.I || No.prototype.Cd.call(this, a)
};v.Bd = function(a) {
	this.I || No.prototype.Bd.call(this, a)
};
var Ht = {
	set: function(a, b) {
		a.className = b
	},
	get: function(a) {
		a = a.className;
		return typeof a === t && a.match(/\S+/g) || []
	},
	add: function(a, b) {
		var c = Ht.get(a),
			d = $c(arguments, 1),
			e = c.length + d.length;
		Ht.Nf(c, d);
		Ht.set(a, c.join(" "));
		return c.length == e
	},
	remove: function(a, b) {
		var c = Ht.get(a),
			d = $c(arguments, 1),
			e = Ht.ag(c, d);
		Ht.set(a, e.join(" "));
		return e.length == c.length - d.length
	},
	Nf: function(a, b) {
		for (var c = 0; c < b.length; c++) Vc(a, b[c]) || a.push(b[c])
	},
	ag: function(a, b) {
		return Qc(a,
			function(c) {
				return ! Vc(b, c)
			})
	},
	ck: function(a, b, c) {
		for (var d = Ht.get(a), e = !1, f = 0; f < d.length; f++) d[f] == b && (Zc(d, f--, 1), e = !0);
		e && (d.push(c), Ht.set(a, d.join(" ")));
		return e
	},
	Vj: function(a, b, c) {
		var d = Ht.get(a);
		typeof b === t ? Wc(d, b) : Array.isArray(b) && (d = Ht.ag(d, b));
		typeof c !== t || Vc(d, c) ? Array.isArray(c) && Ht.Nf(d, c) : d.push(c);
		Ht.set(a, d.join(" "))
	},
	has: function(a, b) {
		return Vc(Ht.get(a), b)
	},
	enable: function(a, b, c) {
		c ? Ht.add(a, b) : Ht.remove(a, b)
	},
	toggle: function(a, b) {
		var c = !Ht.has(a, b);
		Ht.enable(a, b, c);
		return c
	}
};
function It(a, b) {
	mt.call(this, a);
	b = b || {};
	this.g = {
		cb: b.cb || "",
		Nb: b.Nb || 1
	};
	this.h = null
}
w(It, mt);v = It.prototype;v.Hf = function(a, b) {
	b && (b.g = a, Oo(this.h, b))
};v.If = function(a) {
	a && Qo(this.h, a)
};v.gh = function() {
	var a = this.h.pb;
	if (a && void 0 !== a.g) {
		var b = a.g;
		a = this.m.j[b];
		nt(this, this.l, !1);
		this.l = b;
		nt(this, b);
		this.h.Sb(a.mj);
		this.h.ua(a.oj);
		b = a.Y;
		this.h.N = b && Bd(b);
		this.h.Na(a.text)
	}
};v.fh = function() {
	nt(this, this.l, !1)
};v.Gg = function() {
	this.m.j[this.l].Oh.dispatchEvent("updating")
};v.L = function() {
	this.h.P();
	this.h = null;
	mt.prototype.L.call(this)
};v.sg = function(a, b) {
	Ht[b ? "add": "remove"](a, "goog-text-highlight")
};
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Jt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
function Kt(a) {
	this.o = a;
	this.l = this.h = this.m = this.j = -1;
	this.g = !1;
	this.C = 0;
	this.B = "";
	this.H = 0
}
Kt.prototype.start = function() {
	if (!this.g) {
		this.g = !0;
		var a = [],
			b;
		var c = 62;
		for (b = 0; 15 > b; b++) a[b] = Jt[0 | Math.random() * c];
		this.B = a.join("");
		this.C = 0;
		this.l = this.h = this.m = this.j = -1;
		this.H = Gc();
		Tk(this.A, 1E4, this)
	}
};Kt.prototype.stop = function() {
	this.g && (this.g = !1, Lt(this))
};Kt.prototype.A = function() {
	this.g && (Lt(this), Tk(this.A, 1E3, this))
};
function Lt(a) {
	var b = a.o.l,
		c = a.o.o,
		d = a.o.j,
		e = a.o.m;
	if (a.j != b || a.m != c || a.h != d || a.l != e) {
		var f = {};
		f.ct = b;
		f.cv = c;
		f.cts = d;
		f.cvs = e;
		f.sid = a.B;
		f.seq = a.C++;
		f.tat = Gc() - a.H;
		if (0 <= a.j || 0 <= a.m || 0 <= a.h || 0 <= a.l) f.pt = a.j,
			f.pv = a.m,
			f.pts = a.h,
			f.pvs = a.l;
		Lr("te_v", f);
		a.j = b;
		a.m = c;
		a.h = d;
		a.l = e
	}
};
function Mt() {
	this.m = this.j = this.o = this.l = 0;
	this.g = [];
	this.h = null != x.IntersectionObserver ? new IntersectionObserver(A(this.A, this)) : null
}
Mt.prototype.reset = function() {
	this.m = this.j = this.o = this.l = 0;
	this.g = []
};Mt.prototype.A = function(a) {
	for (var b = 0; b < a.length; b++) {
		var c = a[b];
		if (0 < c.intersectionRatio && null != c.target[Nt]) {
			this.o += Bi(c.target).length;
			var d = c.target[Nt];
			this.m += this.g[d];
			this.g[d] = 0;
			c.target[Nt] = void 0
		}
	}
};Ur(36546, Mt.prototype, {
	wg: 1
});
var Nt = "_gt_" + Math.random().toString(36).substr(2);
function Ot(a, b) {
	O.call(this);
	a = a || {};
	this.g = id(a);
	this.g.Nb = a.Nb;
	this.g.pf = !!a.pf;
	this.g.Jh = parseInt(a.Jh, 10) || 300;
	this.g.cj = a.cj;
	this.g.trackVisibility = a.trackVisibility || !1;
	this.A = 0;
	this.j = {};
	this.o = new Wk(this);
	this.l = new It(this, this.g);
	b && (this.l.o = b || {});
	a = this.l;
	a.h = new Ft({
		lj: a.g.lj
	});
	a.h.rg = 300;
	a.h.Rg = 1E3;
	a.h.setAutoHide(!0);
	a.j.D(a.h, "show", A(a.gh, a));
	a.j.D(a.h, rb, A(a.fh, a));
	b = new kt({
		cb: a.g.cb,
		id: "alternate",
		Pe: Z.ah,
		jd: !0
	},
		a.o);
	a.h.je(b);
	a.j.D(b, Ub, A(a.Gg, a));
	a.g.Nb && (b = new lt({
		id: "contribute",
		Id: Xa,
		jd: !0
	},
		a.o), a.h.je(b), a.j.D(b, Ub, A(a.Gg, a)));
	a.h.ka();
	this.m = this.h = null;
	this.g.trackVisibility && null != x.IntersectionObserver && (this.h = new Mt, this.m = new Kt(this.h))
}
w(Ot, O);
function Pt(a) {
	a.m && a.m.stop();
	for (var b in a.j) {
		var c = a,
			d = b,
			e = c.j[d];
		if (e) {
			if (c.h) for (var f = c.h,
				h = e.Ca,
				k = 0; k < h.length; ++k) {
				var l = f,
					m = h[k];
				ni(m) ? (m[Nt] = void 0, l.h && l.h.unobserve(m)) : l.wg(m.nodeType)
			}
			for (f = 0; f < e.Ca.length; ++f) e.Ca[f] && c.l.If(e.Ca[f]);
			delete c.j[d]
		}
	}
	a.h && a.h.reset()
}
Ot.prototype.L = function() {
	Pt(this);
	this.o.P();
	this.o = null;
	this.l.P();
	this.l = null
};
function Qt(a) {
	for (var b = 0; b < a.length; ++b) if (a[b] && a[b].node) return a[b].node;
	return null
}
function Rt(a) {
	var b = Qt(a);
	if (!b) return null;
	var c = [],
		d = [],
		e = [];
	b = new Fs(b, !0);
	var f = a[a.length - 1].node,
		h = 0,
		k = !1;
	do {
		b.next();
		var l = b.node();
		if (!l) break;
		var m = b.g.m,
			n = b.depth();
		for (1 == m && --n; h < a.length && !a[h].node;)++h;
		l == a[h].node || !k && 1 == m && (null != l && null == l.previousSibling ? 0 : !St(Tt(l))) ? (m = Ut(l), d.push({
			node: m,
			Na: function() {}
		}), e[d.length - 1] = n, hi(m, l), l == a[h].node && (c[h++] = d.length - 1, k = !0)) : k = !1
	} while ( l != f );
	return {
		vf: e,
		$i: c,
		Ai: d
	}
}
function St(a) {
	return null != a && Ds[a.tagName]
}
function Tt(a) {
	if (null == a) return null;
	for (a = a.previousSibling; null != a && null != a && 3 == a.nodeType && "" == Bd(Bi(a));) a = a.previousSibling;
	return a
}
function Vt(a, b, c, d, e, f) {
	Q.call(this);
	this.g = [];
	for (var h = 0; h < a.length; ++h) this.g.push("nodeType" in a[h] ? Wt(a[h]) : a[h]),
		Xt(a[h].node);
	this.j = b;
	this.M = d || 0;
	this.N = e || 0;
	this.C = c;
	this.A = f || null;
	this.K = this.H = this.O = !1;
	this.m = [];
	this.o = [];
	this.h = [];
	this.S = [];
	new Wk(this);
	this.l = this.I = !1
}
var Wt;w(Vt, Q);
function Yt(a) {
	if (!a) return ! 1;
	if (3 != a.nodeType || !D) return Zt in a && !!a[Zt];
	if (!a.parentNode) return ! 0;
	if (! ($t in a.parentNode)) return ! 1;
	var b = a.parentNode[$t];
	if (!b || !b[a.nodeValue]) return ! 1;
	b = b[a.nodeValue];
	for (var c = 0; c < b.length; ++c) if (b[c] == a) return ! 0;
	return ! 1
}
function au(a, b) {
	if (!a) return "";
	if ("TITLE" == a.tagName) return String(document.title);
	3 == a.nodeType ? b = "nodeValue": b || (b = "value");
	return a.getAttribute && a.getAttribute(b) ? String(a.getAttribute(b)) : typeof a[b] === t ? String(a[b]) : ""
}
Vt.prototype.ja = function() {
	return this.j
};
function bu(a, b, c) {
	b = {
		Hg: b,
		af: c,
		ea: []
	};
	a.h.push(b);
	return b
}
function cu(a) {
	if (!a.l && a.O && !a.H && !a.K) {
		a.H = !0;
		var b;
		if (b = du(a.g)) {
			b = a.g;
			var c = a.h;
			if (1 == b.length && b[0] && b[0].uf) {
				for (var d = [], e = 0; e < c.length; ++e) for (var f = 0; f < c[e].ea.length; ++f) d.push(c[e].ea[f].Y);
				b[0].Na(d.join(" "), b[0].node);
				b = !0
			} else b = !1;
			b = !b
		}
		if (b && (b = Rt(a.g))) {
			a.o = b.$i;
			a.m = b.Ai;
			d = a.g;
			e = a.o;
			f = a.m;
			var h = b.vf;
			c = [];
			for (var k = 0; k < d.length; ++k) if (c[k] = [], d[k].node && void 0 !== e[k]) for (var l = 0; l < f.length; ++l) if (! (h[l] > h[e[k]])) {
				if (h[l] == h[e[k]]) {
					if (f[l].node.parentNode != f[e[k]].node.parentNode) continue
				} else {
					for (var m = h[e[k]] - h[l], n = f[e[k]].node.parentNode; m--&&n && n != f[l].node.parentNode;) n = n.parentNode;
					if (n != f[l].node.parentNode) continue
				}
				c[k].push(l)
			}
			d = a.g;
			e = a.h;
			f = -1;
			for (h = e.length - 1; 0 <= h; --h) for (k = e[h], l = k.ea.length - 1; 0 <= l; --l) if (m = k.ea[l], !(0 > m.V) && d[m.V] && d[m.V].node) if (0 > f) m.Fd = Br(c[m.V]),
				f = c[m.V][c[m.V].length - 1];
			else for (n = c[m.V].length - 1; 0 <= n; --n) if (c[m.V][n] <= f) {
				m.Fd = Br(c[m.V].slice(0, n + 1));
				f = c[m.V][n];
				break
			}
			for (c = d = 0; c < a.h.length; ++c) {
				e = a.h[c];
				f = a.g;
				h = e;
				k = b.vf;
				l = a.o;
				m = "";
				for (n = 0; n < h.ea.length; ++n) {
					var q = h.ea[n];
					m += q.Y;
					if (0 > q.V) {
						var u = -1,
							z = -1,
							G = l[h.ea[n - 1].V];
						void 0 !== G && (u = k[G]);
						n < h.ea.length - 1 && (G = l[h.ea[n + 1].V], void 0 !== G && (z = k[G]));
						if (0 <= u || 0 <= z) a: if (z = (0 > u || z < u) && n < h.ea.length - 1, u = h.ea[z ? n + 1 : n - 1], !(u.V >= f.length || null == f[u.V].node)) {
							G = q.Y;
							q.Y = "";
							if (/^ +$/.test(G) && (q = z ? u.Y.charCodeAt(0) : u.Y.charCodeAt(u.Y.length - 1), 3584 <= q && 3711 >= q || 12288 <= q && 12351 >= q || 12352 <= q && 12543 >= q || 12784 <= q && 12799 >= q || 19968 <= q && 40959 >= q || 65280 <= q && 65519 >= q)) break a;
							u.Y = z ? G + u.Y: u.Y + G
						}
					}
				}
				f = m;
				h = a.g;
				k = e;
				l = a.m;
				m = b.vf;
				n = a.o;
				q = [];
				for (u = 0; u < k.ea.length && !(d >= l.length); ++u) if (z = k.ea[u], z.Fd && !(0 > z.V) && h[z.V].node && z.Y) if (d == n[z.V] || d in z.Fd && (!(d + 1 in z.Fd) || d + 1 != n[z.V])) {
					if (l[d] && l[d].node) {
						G = Ut(l[d].node);
						q.push(G);
						for (var U = l[d].node, Dg = m[n[z.V]] - m[d], qc = G, Ha = h[z.V].node.parentNode, pc = qc; Ha && Dg--;) pc = Ha.cloneNode(!1),
							pc.appendChild(qc),
							Ha = Ha.parentNode,
							qc = pc;
						U.appendChild(pc);
						U = h[z.V].node;
						h[z.V].Wd ? h[z.V].tg || G.appendChild(U) : (U = h[z.V].node.cloneNode(!1), U.id && (U.id = ""), G.appendChild(U));
						h[z.V].Na(z.Y, U)
					}
				} else++d,
					--u;
				h = q;
				q = a.g;
				k = a.C;
				if (e.Hg) k = e.Hg;
				else {
					l = q.length;
					m = -1;
					for (n = 0; n < e.ea.length; ++n) u = e.ea[n].V,
						0 <= u && q[u] && q[u].node && (m = Math.max(m, u), l = Math.min(l, u));
					q = "";
					for (n = l; n <= m; ++n) k[n] && (q += k[n]);
					k = q
				}
				m = h;
				n = k;
				if (a.A) {
					if (3 != a.A.g.Nb) {
						h = a.S;
						k = h.push;
						l = a.A;
						e = e.af;
						q = a;
						e = l.j[++l.A] = {
							id: l.A.toString(),
							Oh: q,
							text: n,
							ak: e || n,
							Y: f,
							mj: l.C,
							oj: l.B,
							Ca: m
						};
						for (f = 0; f < m.length; ++f) m[f] && l.l.Hf(e.id, m[f]);
						if (l.h) for (f = l.h, q = n.length, f.j += q, n = f.g.length, f.g.push(q), q = 0; q < m.length; ++q) u = f,
							z = m[q],
							ni(z) ? (z[Nt] = n, u.l += Bi(z).length, u.h && u.h.observe(z)) : u.wg(z.nodeType);
						l.m && l.m.start();
						k.call(h, e.id)
					}
				} else for (e = 0; e < m.length; ++e) m[e].title = n
			}
			b = a.g;
			for (c = 0; c < b.length; ++c) b[c].node && !b[c].Wd && ji(b[c].node);
			b = a.g;
			c = a.m;
			a = a.o;
			for (e = d = 0; e < c.length; ++e) if (f = c[e].node) {
				for (; d < b.length && e > a[d];) d++; (d >= b.length || e != a[d]) && !f.firstChild && (ji(f), c[e].node = null)
			}
		}
	}
}
Vt.prototype.restore = function() {
	if (this.H) if (this.H = !1, this.A && Pt(this.A), this.S = [], du(this.m), 1 == this.g.length && this.g[0].uf) this.g[0].Na(this.C[0], this.g[0].node);
	else {
		for (var a = 0,
			b = 0; b < this.m.length; ++b) {
			var c = this.m[b].node;
			if (c) {
				for (; a < this.g.length && b > this.o[a];) {
					var d = a++;
					this.g[d].node && (eu(this.g[d].node), this.g[d].node = null)
				}
				if (a < this.g.length && b == this.o[a] && this.g[a].node) {
					this.g[a].tg || (gi(c), c.appendChild(this.g[a].node));
					this.g[a].Na(this.C[a], this.g[a].node);
					a++;
					d = c;
					var e = d.parentNode;
					if (e && 11 != e.nodeType) if (d.removeNode) d.removeNode(!1);
					else {
						for (; c = d.firstChild;) e.insertBefore(c, d);
						ji(d)
					}
				} else ji(c)
			}
		}
		this.m = []
	}
};Vt.prototype.L = function() {
	Q.prototype.L.call(this);
	this.restore();
	for (var a = 0; a < this.g.length; ++a) this.g[a].node && eu(this.g[a].node);
	this.g = null
};
function Xt(a) {
	if (a) if (3 == a.nodeType && D) {
		$t in a.parentNode && a.parentNode[$t] || (a.parentNode[$t] = {});
		var b = a.parentNode[$t];
		b[a.nodeValue] || (b[a.nodeValue] = []);
		b = b[a.nodeValue];
		for (var c = 0; c < b.length; ++c) if (b[c] == a) return;
		b.push(a)
	} else a[Zt] = 1
}
function eu(a) {
	if (!a || 3 == a.nodeType && D) {
		var b = a.parentNode;
		if (b && $t in b) {
			var c = b[$t];
			if (c && a && c[a.nodeValue]) {
				var d = c[a.nodeValue];
				if (d) for (var e = 0; e < d.length; ++e) if (d[e] == a) {
					d.splice(e, 1);
					break
				}
				0 == d.length && delete c[a.nodeValue]
			}
			if (c && Qr(c)) try {
				delete b[$t]
			} catch(f) {
				b[$t] = ""
			}
		}
	} else if (Zt in a) try {
		delete a[Zt]
	} catch(f) {
		a[Zt] = ""
	}
}
function du(a) {
	for (var b = 0; b < a.length; ++b) try {
		a[b].node && !a[b].node.parentNode && (a[b].node = null)
	} catch(c) {
		a[b].node = null
	}
	for (b = a.length - 1; 0 <= b && !a[b].node; --b);
	a.length = b + 1;
	return a.length
}
function Ut(a) {
	a = a.ownerDocument ? a.ownerDocument.createElement("font") : bi(document, "font");
	Xt(a);
	a.style.verticalAlign = "inherit";
	return a
}
function fu() {
	this.h = {};
	this.g = {}
}
fu.prototype.has = function(a, b) {
	return null != this.h[a] || null != this.g[a] || b && (a in this.h || a in this.g)
};fu.prototype.write = function(a, b) {
	this.g[a] = b
};fu.prototype.remove = function(a) {
	delete this.g[a];
	delete this.h[a]
};
var Zt = "_gt_" + Math.random().toString(36).substr(2), $t = "_gtn_" + Math.random().toString(36).substr(2); (function() {
	function a(c) {
		document.title = c
	}
	var b = {};
	Wt = function(c, d) {
		if ("TITLE" == c.tagName) return {
			node: c,
			Na: a,
			Wd: !0,
			tg: !0,
			uf: !0
		};
		if (3 == c.nodeType) return {
			node: c,
			Na: function(e, f) {
				vi(f, e)
			}
		};
		d || (d = "value");
		b[d] || (b[d] = function(e, f) {
			f.setAttribute && f.setAttribute(d, e);
			typeof e === t && (f[d] = e)
		});
		c = {
			node: c,
			Na: b[d],
			Wd: !0
		};
		"value" != d && (c.uf = !0);
		return c
	}
})();
function gu(a, b, c, d) {
	d = d.firstChild && 3 == d.firstChild.nodeType ? d.firstChild.nodeValue: Bi(d);
	d = {
		V: c,
		Y: cf(d)
	};
	a.push(d);
	b[c] ? b[c].end = d: b[c] = {
		start: d,
		end: d
	};
	return d
}
function hu(a) {
	for (var b, c = a.firstChild; c; c = b) b = c.nextSibling,
		3 != c.nodeType && (c == a.firstChild ? hi(c, a) : ii(c, a), hu(c))
};
function iu(a, b, c, d, e) {
	b = b || {};
	this.K = e || [];
	this.o = [];
	this.H = [];
	ju(this, a || document.documentElement, void 0 === b.Mg || !!b.Mg);
	this.C = c || Vt;
	this.B = b.Ei;
	this.j = this.g = this.m = this.Fc = null;
	this.A = !!b.rj;
	this.O = !!b.qj;
	this.va = this.A ? 27 : 13;
	this.I = !0;
	this.M = [];
	this.l = new sn(this, d)
}
function ku(a, b, c, d) {
	a.l.j || (b = {
		Wg: b,
		Sg: c,
		Ca: [],
		Ig: [],
		Kb: [],
		textLength: 0,
		size: 0,
		continuous: !0
	},
		a.Fc = null, tn(a.l, a.h), un(a.l, d), vn(a.l, A(function(e) {
			this.Li(e);
			d()
		},
			a)), wn(a.l, b))
}
function lu(a, b) {
	return 0 < a.Ca.length ? new b(a.Ca, a.Kb.join(""), a.Ig, a.textLength, a.size) : null
}
function mu(a, b) {
	if (!a.j) return a.Fc = lu(b, a.C),
		!0;
	if (!b.continuous && 0 < b.Ca.length) return a.Fc = lu(b, a.C),
		!0;
	b.continuous = a.j.Cg;
	a: {
		var c = a.j;
		var d = a.va;
		if (b.size > b.Sg || b.textLength > b.Wg) c = !1;
		else {
			var e = c.size,
				f = c.text.length;
			if (0 != b.Ca.length && (e += 1 == b.Ca.length ? b.size + d + d: b.size + d, f += b.textLength, e > b.Sg || f > b.Wg)) {
				c = !1;
				break a
			}
			b.size = e;
			b.textLength = f;
			b.Ca.push(c.node);
			b.Ig.push(c.text);
			d = b.Ca.length - 1;
			0 == d ? b.Kb.push(c.we) : (1 == d && (b.Kb[0] = "<a i=0>" + b.Kb[0] + "</a>"), b.Kb.push("<a i=" + d + ">"), b.Kb.push(c.we), b.Kb.push("</a>"));
			c = !0
		}
	}
	if (c) return a.j = null,
		!1;
	a.Fc = lu(b, a.C);
	return ! 0
}
function nu(a, b, c) {
	var d = au(b, c);
	d && Bd(We(d)) && a.M.push({
		node: b,
		Eh: c,
		text: d
	})
}
iu.prototype.h = function(a, b) {
	var c = this;
	if (this.j && mu(this, b)) return zn;
	if (!this.g) {
		this.I = !!this.o.length;
		if (!this.o.length && (a = this.M.shift())) return this.j = {
			Cg: !1,
			node: Wt(a.node, a.Eh),
			text: a.text,
			we: bf(a.text),
			size: this.A ? $e(a.text).length: a.text.length
		},
			b.continuous = !1,
			mu(this, b),
			zn;
		a = this.o.shift() || this.H.shift();
		if (!a) return this.j = null,
			mu(this, b),
			zn;
		this.m = [a.pj];
		this.g = new Fs(a.root)
	}
	this.g.next();
	if (this.g.done) return this.g = null,
		b.continuous = !1,
		this.h;
	a = this.g.node();
	var d = this.g.g.m;
	if ( - 1 == d) return ou(this),
		pu(a) || (b.continuous = !1),
		this.h;
	qu(this, a);
	d = 1 == d;
	var e = ru(a);
	if ((e || d) && this.I && !su(a)) return ju(this, a, tu(this), !0),
		this.g.g.C(),
		ou(this),
		this.h;
	if (d && tu(this) && (this.O && nu(this, a, "title"), nu(this, a, "alt"), nu(this, a, "placeholder"), nu(this, a, "aria-label"), nu(this, a, "aria-placeholder"), nu(this, a, "aria-roledescription"), nu(this, a, "aria-valuetext"), Hs(this.g))) for (var f = a.firstChild; f;) {
		if (3 == f.nodeType) {
			var h = f.nodeValue.split("\n");
			if (2 < h.length || 2 == h.length && "" != Bd(h[0]) && "" != Bd(h[1])) {
				f.nodeValue = h[0];
				for (var k = 1; k < h.length; ++k) {
					var l = K(a).createElement("font");
					this.K.push(l);
					ii(l, f);
					f = l;
					ii(K(a).createTextNode("\n" + h[k]), f);
					f = f.nextSibling
				}
			}
		}
		f = f.nextSibling
	}
	a.shadowRoot && Array.from(a.shadowRoot.childNodes).forEach(function(n) {
		ju(c, n, tu(c))
	});
	if (e) {
		this.g.g.C();
		if (tu(this)) {
			var m = au(a);
			if (Bd(We(m)) && (this.j = {
				Cg: !0,
				node: Wt(a),
				text: m,
				we: bf(m),
				size: this.A ? $e(m).length: m.length
			},
				mu(this, b))) return ou(this),
				zn
		}
		ou(this);
		return this.h
	}
	if (d) {
		if (uu(a) || !a.firstChild && a.tagName != ma) return b.continuous = b.continuous && !!Ds[a.tagName],
			this.g.g.C(),
			ou(this),
			this.h;
		if (a.tagName == ma) {
			try {
				a.src.match(/https?:\/\//) && tg(a.src.match(sg)[3] || null) != window.location.hostname || (m = ti(a).documentElement) && ju(this, m, tu(this))
			} catch(n) {}
			b.continuous = !1;
			this.g.g.C();
			ou(this);
			return this.h
		}
		tu(this) && pu(a) ? this.B && "A" == a.tagName && a.href && this.B(a) : b.continuous = !1;
		return this.h
	}
	this.g.g.C();
	ou(this);
	return this.h
};
function uu(a) {
	return Yt(a) || 3 != a.nodeType && (!a.tagName || Cs[a.tagName] || Ds[a.tagName] || Mi(a, Sb))
}
function vu(a) {
	var b = K(a);
	return b.defaultView && b.defaultView.getComputedStyle ? b.defaultView.getComputedStyle(a, null) : a.currentStyle
}
function su(a) {
	return 3 == a.nodeType ? !0 : 1 != a.nodeType ? !1 : a.offsetWidth && a.offsetHeight ? !0 : (a = vu(a), !!a && a.display != r && a.visibility != qb)
}
function pu(a) {
	if (3 == a.nodeType) return ! 0;
	if (1 != a.nodeType) return ! 1;
	var b = vu(a);
	return !! Bs[a.tagName] && (!b || !b.display || "inline" == b.display)
}
function ru(a) {
	return !! a && (3 == a.nodeType && typeof a.nodeValue === t || "TITLE" == a.tagName && typeof a.value === t || a.tagName == ua && Mi(a, ac) || a.tagName == na && (Es[a.type] || Mi(a, ac)))
}
function ju(a, b, c, d) { (d ? a.H: a.o).push({
	root: b,
	pj: void 0 === c || c
})
}
function tu(a) {
	return a.m[a.m.length - 1]
}
function qu(a, b) {
	b = !Yt(b) && (b.nodeType == Lc && tu(a) || !(Mi(b, "notranslate") || b.attributes && b.attributes.translate && "no" == b.attributes.translate.value) && (Mi(b, ac) || !!b.attributes && !!b.attributes.translate && "yes" == b.attributes.translate.value || tu(a)));
	a.m.push(b)
}
function ou(a) {
	a.m.pop()
}
Ur(5762, iu.prototype, {
	Li: 1
});
function wu() {
	O.call(this);
	this.g = []
}
w(wu, O);wu.prototype.restore = function() {
	Tk(this.h, 0, this)
};wu.prototype.h = function() {
	for (var a = 0; a < this.g.length; ++a) ji(this.g[a]);
	this.g = []
};wu.prototype.L = function() {
	O.prototype.L.call(this);
	this.restore()
};
function xu(a) {
	var b = new Lo;
	rg(a,
		function(c) {
			if (ni(c)) b.add(c);
			else {
				a: {
					var d;
					if (Hh && !(D && H("9") && !H("10") && x.SVGElement && c instanceof x.SVGElement) && (d = c.parentElement)) {
						c = d;
						break a
					}
					d = c.parentNode;
					c = ni(d) ? d: null
				}
				null != c && b.add(c)
			}
		});
	return b
};
function yu(a) {
	this.h = !0;
	this.l = a;
	this.j = !1;
	this.g = []
}
yu.prototype.ja = function() {
	return this.g.join("")
};
function zu(a, b) {
	this.m = a;
	this.l = !0;
	this.j = b;
	this.g = null;
	this.h = 0
}
function Au(a, b) {
	return a.l ? (b(A(a.o, a), a.m, a.j ? "en": ""), !0) : !1
}
zu.prototype.o = function(a, b, c) {
	this.g = b;
	this.h = c;
	a()
};
function Bu(a, b) {
	this.l = a;
	this.B = !!b;
	this.g = this.C = 0;
	this.m = this.j = -1;
	this.o = this.A = this.h = 0
}
function Cu(a, b, c) {
	a.B && (b -= 9);
	for (var d = "",
		e = 0,
		f = a.C; f < a.l.length; ++f) {
		var h = a.l.charAt(f),
			k = h.charCodeAt(0);
		e++;
		a.h += a.B ? 127 >= k ? 32 >= k || Du[k] ? 3 : 1 : 2047 >= k || 55296 <= k && 56319 >= k || 56320 <= k && 57343 >= k ? 6 : 9 : 1;
		k = a.h >= b;
		Eu[h] ? (a.m = f, a.A = a.h, k = k || e > c) : " " == h && (a.j = f, a.o = a.h, k = k || e > c);
		if (k) return 0 <= a.m ? (d = a.l.substring(a.g, a.m + 1), a.h -= a.A, a.g = a.m + 1, a.m >= a.j ? (a.j = -1, a.o = 0) : a.o -= a.A, a.m = -1, a.A = 0) : 0 <= a.j ? (d = a.l.substring(a.g, a.j + 1), a.h -= a.o, a.g = a.j + 1, a.j = -1, a.o = 0) : (d = a.l.substring(a.g, f + 1), a.h = 0, a.g = f + 1, a.m = a.j = -1, a.o = a.A = 0),
			a.C = f + 1,
			d
	}
	a.g < a.l.length && (d = a.l.substring(a.g), a.g = a.l.length);
	return d
}
var Eu = Br(". , ; : \\? !".split(" ")), Du = Br([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);
function Fu(a, b, c, d, e, f) {
	this.A = d || y;
	this.U = f || y;
	this.va = !!e;
	this.j = a.g.Te;
	this.l = 0;
	this.I = y;
	this.B = c;
	this.H = this.h = this.m = 0;
	this.g = null;
	this.K = 0;
	this.ia = !1;
	this.W = a.g.Se;
	this.O = [];
	this.N = 0;
	this.o = (this.Oa = a.g.od) ? a.g.Kd - (new vg(a.g.pa.g)).toString().length: a.g.Kd;
	this.wa = this.va ? 1 : 6;
	this.xa = a.g.jf;
	this.S = b;
	this.C = [];
	this.R = a
}
function Gu(a, b) {
	var c = 0;
	a.I = A(function() {++c == this.C.length && b()
	},
		a)
}
function Hu(a, b, c) {
	if (0 == a.h && (a.h = b ? 860 : a.o, !c || c <= a.o)) {
		a.m = a.h;
		return
	}
	do b = a.h,
		a.h < a.o && (a.h *= a.wa, a.h > a.o && (a.h = a.o));
	while (b != a.h && c && a.h < c);
	a.m = a.h
}
function Iu(a, b) {
	var c = null != b,
		d = !c && !a.ia; (d || c) && a.A(100, d, b)
}
function Ju(a) {
	return a.Oa ? a.g.N: a.g.ja().length
}
function Ku(a, b, c, d, e) {
	return new iu(a.S.shift(), {
		rj: a.Oa,
		Ei: b,
		Mg: !0,
		qj: !!c
	},
		function() {
			var f = Array.prototype.slice.call(arguments);
			return new Vt(f.shift(), f.shift(), f.shift(), f.shift(), f.shift(), c, d)
		},
		a.B, e)
}
function Lu(a, b, c) {
	if (0 < a.W && Mu(b) >= a.W) return ! 0;
	if (Ju(a) > a.h) {
		if (0 < Mu(b)) return ! 0;
		Hu(a, c, Ju(a));
		for (var d = a.g.ja(), e = new Bu(d, a.Oa), f; f = Cu(e, a.h, a.j);) if (b.m.push(new zu([f], !1)), a.l += f.length, a.j -= f.length, 0 >= a.j) {
			b.H = d.substring(e.g);
			break
		} else Hu(a, c);
		Nu(b, a.g, !0);
		a.g = null;
		return ! 0
	}
	if (Ju(a) > a.m) return ! 0;
	Nu(b, a.g, !0);
	a.m -= Ju(a) + a.xa;
	a.l += a.g.M;
	a.j -= a.g.M;
	a.g = null;
	return ! 1
};
function Ou(a, b) {
	O.call(this);
	this.l = b;
	this.j = {
		rootMargin: a
	};
	this.g = new IntersectionObserver(A(this.h, this), this.j)
}
w(Ou, O);Ou.prototype.L = function() {
	O.prototype.L.call(this);
	this.g = null
};Ou.prototype.h = function(a) {
	for (var b = 0; b < a.length; b++) if (0 < a[b].intersectionRatio) {
		this.l();
		break
	}
};
function Pu() {
	R.call(this)
}
w(Pu, R);Pu.prototype.J = function() {
	this.X(Gi(Ps))
};Pu.prototype.X = function(a) {
	this.F = a
};
function Qu(a) {
	Oi(a.s(), pb);
	Oi(a.s().firstChild, ob)
};
function Ru() {
	this.g = new Pu;
	this.g.J();
	this.g.ka();
	this.h = 0
}
Ru.prototype.reset = function() {
	this.h = 0;
	Qu(this.g)
};
function Su(a, b, c, d, e, f, h, k) {
	this.m = a;
	this.h = b;
	this.C = [];
	this.H = null;
	this.l = c;
	this.g = d;
	this.j = e;
	this.va = f;
	this.O = h;
	this.B = this.o = null;
	this.A = k || null;
	this.K = this.I = !1;
	this.M = {}
}
function Tu(a) {
	for (var b = new Lo,
		c = 0; c < a.length; c++) {
		for (var d = a[c], e = new Lo, f = 0; f < d.g.length; f++) {
			var h = d.g[f].node;
			null != h && e.add(h)
		}
		d = b;
		e = pg(e);
		f = e.length;
		for (h = 0; h < f; h++) d.add(e[h])
	}
	return b
}
v = Su.prototype;v.trackVisibility = function(a) {
	a = this.o = new Ou("200px", A(this.oi, this, a));
	var b = xu(Tu([].concat(this.h, this.C)));
	rg(b, A(a.g.observe, a.g));
	a = this.B = new Ou("0px", A(this.ti, this));
	b = xu(Tu([].concat(this.h, this.C)));
	rg(b, A(a.g.observe, a.g))
};v.oi = function(a) {
	this.o && (this.o.g.disconnect(), this.o = null);
	a()
};v.ti = function() {
	this.I = !0;
	Uu(this);
	if (!this.K && this.A) {
		var a = this.A;
		0 == a.h++&&(a = a.g, L(a.s(), pb), L(a.s().firstChild, ob))
	}
};
function Uu(a) {
	a.B && (a.B.g.disconnect(), a.B = null)
}
v.Jf = function() {
	if (this.I && !this.K && this.A) {
		var a = this.A;
		0 == --a.h && Qu(a.g)
	}
	this.o && (this.o.g.disconnect(), this.o = null);
	Uu(this)
};
function Nu(a, b, c) {
	c ? (a.h.push(b), a.M[b.ja()] = !0) : a.C.push(b)
}
function Mu(a) {
	return a.h.length + a.C.length
}
function Vu(a) {
	if (0 == a.m.length) {
		for (var b = [], c = 0; c < a.h.length; ++c) b.push(a.h[c].ja());
		a.m.push(new zu(b, !1))
	}
}
v.translate = function(a) {
	function b() {
		d++;
		d == c && e()
	}
	Vu(this);
	for (var c = 0,
		d = 0,
		e = y,
		f = this.l,
		h = this.g,
		k = this.j,
		l = this.va,
		m = this.O,
		n = 0; n < this.m.length; ++n) Au(this.m[n],
			function(q, u, z) {
				q = f.R.translate(Fc(q, b), u, z || h, k, ++f.N, l, m, f.va);
				f.O.push(q);
				return q
			}) && c++;
	0 != c && (e = xn(a));
	return c
};
function Wu(a, b) {
	O.call(this);
	this.h = [];
	this.l = [];
	this.g = a;
	this.j = b
}
w(Wu, O);Wu.prototype.m = function(a) {
	var b = Bd(a.href);
	0 == b.indexOf("javascript:") || 0 <= b.indexOf("#") || (this.l.push(a.href), this.h.push(a), a.href = b + "#googtrans/" + this.g + "/" + this.j)
};Wu.prototype.L = function() {
	O.prototype.L.call(this);
	this.restore()
};Wu.prototype.restore = function() {
	if (this.h.length) {
		for (var a = 0; a < this.h.length; ++a) this.h[a].href = this.l[a];
		this.h = [];
		this.l = []
	}
};
function Xu(a, b) {
	O.call(this);
	this.g = a;
	this.h = wd.test(b) ? "translated-rtl": "translated-ltr";
	a = [].concat(this.g);
	for (b = 0; b < a.length; ++b) ni(a[b]) && L(a[b], this.h)
}
w(Xu, O);Xu.prototype.L = function() {
	O.prototype.L.call(this);
	this.restore()
};Xu.prototype.restore = function() {
	for (var a = [].concat(this.g), b = 0; b < a.length; ++b) ni(a[b]) && Oi(a[b], this.h)
};
function Yu(a, b, c, d, e, f, h, k, l, m) {
	O.call(this);
	this.B = a;
	this.Cb = b;
	this.R = c || null;
	this.ia = m || null;
	this.I = null;
	this.Ra = !!d;
	this.ac = e || "transparent";
	this.Ub = !!f;
	this.H = [];
	this.pb = this.M = this.h = !1;
	this.l = k || new fu;
	this.Ih = !k;
	this.W = h || on.ca();
	this.Sa = new wu;
	this.wa = this.ta = this.K = !1;
	this.bb = this.m = .5;
	this.ob = .01;
	this.C = new pn(this.m);
	this.N = (this.A = this.U = !!l) ? new MutationObserver(A(this.ji, this)) : null;
	this.j = this.g = null;
	P(window, Ja, this.og, !0, this);
	P(window, cb, this.pg, !0, this)
}
w(Yu, O);v = Yu.prototype;v.gb = function() {
	return this.g ? this.g: ""
};v.qa = function() {
	return this.j ? this.j: ""
};v.Lh = function(a) {
	this.Hi.apply(this, arguments);
	this.o && this.o(0, !1, 1)
};v.Xf = function(a) {
	this.Ii.apply(this, arguments);
	this.o && this.o(0, !1, 1)
};v.Mh = function(a) {
	this.Ji.apply(this, arguments);
	this.o && this.o(0, !1, 1)
};v.Nh = function(a) {
	this.Ki.apply(this, arguments);
	this.o && this.o(0, !1, 1)
};v.translate = function(a, b, c, d, e) {
	if (d || a != this.g || b != this.j) Zu(this),
		this.Ih && (this.l = new fu);
	else if (this.h) return;
	this.o = c;
	this.hd = e;
	this.A = this.U;
	this.N && this.N.observe(document.body, {
		attributes: !0,
		childList: !0,
		characterData: !0,
		subtree: !0
	});
	this.h = !0;
	this.g = a;
	this.j = b;
	this.Ra && (this.I = new Wu(a, b));
	this.wa = this.g == Fa;
	this.R && (c = this.R, a && (c.C = a), b && (c.B = b));
	this.xa = new Xu(this.B, this.j);
	this.O = $u(this); (a = this.B instanceof Node ? this.B: null) && av(a, this.j)
};
function $u(a) {
	var b = new sn(a, a.W);
	tn(b, a.kg);
	vn(b, A(a.Lh, a));
	wn(b, new Fu(a.Cb, [].concat(a.B), a.W, a.o, a.A, a.hd));
	return b
}
v.restore = function() {
	Zu(this);
	this.Sa.restore();
	var a = this.B instanceof Node ? this.B: null;
	a && av(a, this.gb())
};v.L = function() {
	O.prototype.L.call(this);
	this.restore();
	ek(window, Ja, this.og, !0, this);
	ek(window, cb, this.pg, !0, this)
};
function bv(a, b, c, d) {
	var e = Qr(a.l.h),
		f = new sn(a, b.B);
	b.C.push(f);
	un(f, b.I);
	Hu(b, e);
	tn(f, d || a.gg);
	b = c || new Su([], [], b, a.gb(), a.qa(), a.pb, a.M, a.ia);
	vn(f, a.pi, a);
	a.A && un(f, b.Jf, b);
	wn(f, b)
}
v.pi = function(a, b, c) {
	c.Jf();
	this.M ? this.Nh(a) : this.Mh(a);
	c.l.I()
};v.pg = function() {
	this.K = !1;
	this.S = 0;
	qn(this.C, this.m)
};v.og = function(a) {
	a.target == window && (this.K = !0, this.S = 0, qn(this.C, .01))
};v.ji = function(a) {
	if (this.h && this.A) {
		for (var b = 0; b < a.length; b++) if (a[b].target && a[b].target.className && typeof a[b].target.className === t && (0 <= a[b].target.className.indexOf(ac) || 0 == a[b].target.className.indexOf("goog-"))) return;
		this.W.add(A(this.dj, this))
	}
};v.dj = function() {
	this.M = !0;
	this.O.stop();
	this.O = $u(this);
	return ! 1
};v.kg = function(a, b) {
	Gu(b, xn(a));
	bv(this, b);
	return this.vi
};v.vi = function(a, b) {
	if (!this.h) return zn;
	if (!yn(a)) return An;
	if (!this.A) for (a = 0; a < this.H.length; ++a) {
		var c = A(this.Of, this, b, this.H[a]);
		b.B.add(c)
	}
	return this.ui
};v.dg = function(a, b) {
	if (this.S && !this.K) {
		a = (new Date).getTime() - this.S;
		var c = this.m;
		900 > a && .01 < c ? c = Math.max(.9 * c, .01) : 1100 < a && .5 > c && (c = Math.min(1.5 * c, .5));
		this.m = c;
		this.ta ? this.ob = .01 : this.bb = this.m
	}
	this.M = this.h = !0;
	this.S = (new Date).getTime();
	this.Qf != (a = document.body.innerText || document.body.textContent || document.body.innerHTML) ? (this.Qf = a, a = !0) : a = !1;
	a ? (this.ta = !1, this.m = this.bb, this.K || qn(this.C, this.m), a = [].concat(this.B), c = this.C, b.A = y, b.S = a, b.g = null, b.N = 0, b.C = [], b.I = y, b.B = c, a = new sn(this, this.C), tn(a, this.kg), vn(a, A(this.Xf, this)), wn(a, b), this.O = a) : (this.ta = !0, this.m = this.ob, this.K || qn(this.C, this.m), a = new sn(this, this.C), tn(a, this.dg), vn(a, A(this.Xf, this)), wn(a, b), this.O = a);
	return zn
};v.ui = function(a, b) {
	if (!this.h) return zn;
	this.M = this.h = !1;
	this.wa ? Iu(b, !0) : (Iu(b), b.U(b.l));
	if (this.Ub) return this.dg;
	for (a = 0; a < b.C.length; ++a) b.C[a].stop();
	for (a = 0; a < b.O.length; ++a) zs(b.R, b.O[a]);
	return zn
};
function cv(a, b, c) {
	a: {
		var d = a.Ra ? A(a.I.m, a.I) : y,
			e = a.R,
			f = a.ac,
			h = a.Sa.g;
		b = xn(b);
		if (!c.M) {
			if (0 == c.S.length) {
				0 == c.l && 0 == c.N && c.A(0, !0);
				c = !1;
				break a
			}
			c.M = Ku(c, d, e, f, h)
		}
		c.ta = !0;
		ku(c.M, c.j, c.h, b);
		c = !0
	}
	return c ? a.gg: a.yd
}
v.gg = function(a, b) {
	if (!this.h) return zn;
	var c = b.l;
	if (null == c.g) {
		if (!c.ta) return cv(this, a, b.l);
		if (!yn(a)) return An;
		c.ta = !1;
		c.g = c.M.Fc || null;
		var d = c.g ? c.g: c.M = null;
		if (!d) return cv(this, a, b.l);
		this.H.push(d);
		var e = d.ja();
		if (this.l.has(e, !this.A) || null != b.M[e] && b.M[e]) return e = c.g.M,
			c.l += e,
			c.j -= e,
			c.g = null,
			this.A && Nu(b, d, !1),
			cv(this, a, b.l);
		this.l.g[d.ja()] = null
	}
	0 < Mu(b) && qn(this.C, .5);
	return Lu(c, b, Qr(this.l.h)) ? this.yd: cv(this, a, b.l)
};v.yd = function(a, b) {
	if (!this.h || 0 == Mu(b)) return zn;
	bv(this, b.l);
	return this.A ? (b.trackVisibility(xn(a)), this.wi) : 0 == b.translate(a) ? zn: this.jg
};v.wi = function(a, b) {
	return this.h ? yn(a) ? 0 == b.translate(a) ? zn: this.jg: An: zn
};v.Of = function(a, b) {
	b.l && this.l.remove(b.j);
	if (!this.h) return ! 1;
	if (this.l.has(b.ja(), !1)) {
		var c = this.l;
		if (c.has(b.j, !1)) {
			var d = b.j,
				e = c.g[d];
			e || (e = c.h[d], c.g[d] = e);
			b.h = e;
			b.O = !0
		} else c.remove(b.j),
			b.l = !0;
		cu(b)
	} else if (c = this.l, b.l) c.remove(b.j);
	else if (b.B) {
		d = b.B.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
		b.O = !0;
		delete b.B;
		b.B = null;
		b.h = [];
		e = bi(document, Za);
		N(e, !1);
		d = Rs(0 <= d.indexOf("<i>") ? d: "<b>" + d + "</b>");
		Se(e, d);
		document.body.appendChild(e);
		d = [];
		var f;
		for (f = e.firstChild; f; f = f.nextSibling) if ("I" == f.tagName) var h = bu(b, Bi(f), f.innerHTML);
		else if ("B" == f.tagName) {
			h || (h = bu(b, "", ""));
			if (1 == b.g.length) gu(h.ea, d, 0, f);
			else {
				var k = d;
				var l = f;
				var m = b.g;
				h = h.ea;
				for (var n = [], q = l.firstChild; q; q = u) {
					var u = q.nextSibling;
					hu(q)
				}
				for (u = l.firstChild; u; u = u.nextSibling) u.attributes && u.attributes.i ? (l = parseInt(u.attributes.i.nodeValue, 10), !isNaN(l) && 0 <= l && l < m.length && (m[l].Wd && n[l] ? n[l].Y += u.firstChild && 3 == u.firstChild.nodeType ? u.firstChild.nodeValue: Bi(u) : n[l] = gu(h, k, l, u))) : 3 == u.nodeType && h.push({
					V: -1,
					Y: cf(u.nodeValue)
				});
				null != h && 0 < h.length && -1 == h[0].V && (1 == h.length ? h[0].V = 0 : (h[1].Y = h[0].Y + h[1].Y, h.shift()))
			}
			h = void 0
		}
		f = b.h;
		for (k = 0; k < f.length - 1; ++k) m = f[k],
			h = Ze(m.ea[m.ea.length - 1].Y),
			h = h.charCodeAt(h.length - 1),
			12288 <= h && 12351 >= h || 65280 <= h && 65519 >= h || (m.ea[m.ea.length - 1].Y += " ");
		ji(e);
		for (e = 0; e < b.g.length; ++e) e < d.length && e < b.C.length && null != d[e] && (f = b.C[e], k = d[e].start, null != k && (m = f.substring(0, f.length - Ye(f).length), " " == m && (m = ""), m && (k.Y = m + Ye(k.Y))), k = d[e].end, null != k && (f = f.substring(Ze(f).length), " " == f && (f = ""), f && (k.Y = Ze(k.Y) + f)));
		1 != b.h.length || b.h[0].af || (b.h[0].af = b.j);
		c.write(b.j, b.h);
		cu(b)
	}
	b.I || (this.wa = !1);
	c = b.l ? !0 : void 0;
	a.K += b.M;
	null != c && (a.ia = !0);
	b = Math.min(Math.floor(100 * a.K / a.l), 100);
	if (a.H != b || c) a.H = b,
		a.va ? (a.A(a.H, !0, c), a.U(a.K)) : a.A(a.H, !1, c);
	return ! 1
};v.jg = function(a, b) {
	if (!this.h) return zn;
	if (!yn(a)) return An;
	if (1 < Mu(b)) {
		a = b.m[0];
		var c = b.h;
		if (a.j || 0 == c.length || null == a.g || 0 == a.g.length) a = null;
		else {
			for (var d = [], e = [], f = 0; f < a.g.length && f < c.length; ++f) {
				var h = a.g[f];
				h && h[0] && 200 == h[1] || (e.push(c[f]), d.push(a.m[f]))
			}
			a = 0 < e.length ? {
				ej: new zu(d, !0),
				fj: e
			}: null
		}
		a = a ? new Su([a.ej], a.fj, b.l, b.g, b.j, b.va, b.O, b.A) : null;
		null != a && bv(this, b.l, a, this.yd)
	} else {
		a = !1;
		for (c = 0; c < b.m.length; ++c) d = b.m[c],
			d.j || 200 == d.h && d.g && d.g[0] ? d = d.l = !1 : (d.j = !0, d = d.l = !0),
			a = d || a;
		if (a) return this.yd
	}
	d = this.gb();
	a = this.qa();
	if (1 < b.h.length) if (c = b.m[0], e = d == Fa, d = b.h, 200 == c.h) for (f = 0; f < c.g.length && f < d.length; ++f) if ((h = c.g[f]) && 200 == h[1]) {
		var k = h[2],
			l = d[f],
			m = l,
			n = null != k && k == a;
		m.B = h[0];
		void 0 !== n && (m.K = n);
		l.I = e && null == k
	} else d[f].l = !0;
	else for (a = 0; a < d.length; ++a) d[a].l = !0;
	else {
		c = new yu(d == Fa);
		for (d = 0; d < b.m.length; ++d) h = b.m[d],
			e = a,
			f = c,
			200 == h.h && h.g && h.g[0] ? (h = h.g[0], f.g.push(h[0]), h = h[2], f.h = f.h && null != h && h == e, null != h && (f.l = !1)) : 500 != h.h && (f.j = !0);
		null != b.H && (c.g.push(b.H), b.H = null);
		if (a = b.h[0]) d = c.h,
			a.B = c.ja(),
			void 0 !== d && (a.K = d),
			a.I = c.l,
			a.l = c.j
	}
	if (this.A) {
		a = A(this.Of, this);
		for (c = 0; c < b.h.length; c++) a(b.l, b.h[c]);
		for (c = 0; c < b.C.length; c++) a(b.l, b.C[c]);
		Uu(b);
		b.K = !0;
		b.I && b.A && (b = b.A, 0 == --b.h && Qu(b.g))
	}
	return zn
};
function Zu(a) {
	a.N && a.N.disconnect();
	a.ia && a.ia.reset();
	a.h && (a.O.stop(), a.h = !1, a.M = !1);
	if (a.H.length) {
		for (var b = 0; b < a.H.length; ++b) a.H[b].P();
		a.H = []
	}
	null != a.I && (a.I.restore(), a.I = null);
	null != a.xa && (a.xa.restore(), a.xa = null)
}
function av(a, b) {
	a.getAttribute("xml:lang") && a.setAttribute("xml:lang", b);
	a.getAttribute("lang") && a.setAttribute("lang", b)
}
Ur(3046, Yu.prototype, {
	Hi: 1,
	Ji: 2,
	Ii: 3,
	Ki: 4
});
function dv(a, b, c, d, e, f, h, k, l, m, n) {
	O.call(this);
	this.K = b || null;
	this.S = !!c;
	this.I = d || "transparent";
	this.H = f || "";
	b = h || {
		fetchStart: 0,
		Yj: 0
	};
	a = b.fetchStart || 0;
	b = b.fetchEnd || 0;
	this.M = a && b ? b - a: 0;
	this.N = Date.now() - mr;
	this.o = !1;
	this.h = new ws(e || "", void 0, f, l, m, n);
	this.O = new pn(1);
	this.A = new fu;
	this.l = null;
	this.C = !0;
	this.m = null != x.IntersectionObserver;
	this.B = k || null;
	new Wk(this);
	e = new Cr;
	f = new Er(A(this.h.Gf, this.h, e.register()));
	this.ud = Fr(f, e.delay(A(this.ud, this)));
	this.qd = Fr(f, e.delay(A(this.qd, this)));
	this.Vd = Fr(f, e.delay(A(this.Vd, this)));
	this.restore = Fr(f, e.delay(A(this.restore, this)));
	f.finish();
	e.finish()
}
B(dv, O);Ur(14097, dv.prototype, {
	Qe: function() {
		Lr(this.h.j ? "te_afas": "te_afau")
	}
});v = dv.prototype;v.hj = function(a) {
	this.m = a
};v.Wa = function() {
	return this.h.j
};v.ud = function(a, b) {
	if (this.h.Wa()) {
		var c = this.h,
			d = {
				alpha: !0
			};
		b && (d.hl = b);
		c.m.send(d, a)
	} else this.Qe(),
		a(null)
};v.qd = function(a) {
	var b = document.documentElement.lang;
	if (b) a(b);
	else if (this.h.Wa()) {
		var c = new Wn(document.body, !1, !1, 1, 1);
		b = [];
		try {
			for (var d = 0,
				e = this.h.h.Ag; b.length + d < e;) {
				var f = c.next();
				if (1 == c.m && uu(f)) c.C();
				else if (3 == f.nodeType) {
					var h = Bd(We(f.nodeValue));
					h && (b.push(h), d += h.length)
				}
			}
		} catch(k) {
			if (k != gg) throw k;
		}
		e = this.h;
		b = b.join(" ");
		a = e.h.Cc(a);
		e.h.pa.send({
			q: b.substring(0, e.h.Ag),
			sl: Fa,
			tl: "en"
		},
			a)
	} else this.Qe(),
		a(null, !0)
};v.Vd = function(a, b, c, d, e) {
	var f = Date.now();
	Wr();
	if (!a || Rr(a, b)) a = Fa;
	if (e || a != this.g || b != this.j) this.A = new fu;
	this.g = a;
	this.j = b;
	this.h.Wa() ? (d = d || document.documentElement, this.l && this.l.P(), this.B.reset(), this.l = new Yu(d, this.h, this.K, this.S, this.I, !0, this.O, this.A, this.m, this.B), this.l.pb = this.o, this.C = !0, this.l.translate(a, b, c, e, A(this.Ni, this, f, a, b))) : (this.Qe(), c(0, !1, !0))
};v.hh = function() {
	return !! this.l && this.l.h
};v.Og = function(a) {
	this.o = a
};v.restore = function() {
	Wr();
	this.h.Wa() && this.l && this.l.restore()
};v.L = function() {
	Xr();
	dv.G.L.call(this);
	this.h.P();
	this.l = this.h = null;
	this.A = new fu
};v.Ni = function(a, b, c, d) {
	this.C && (this.C = !1, b = {
		sl: b,
		tl: c,
		textlen: d
	},
		this.o && (b.ctt = "1"), "" != this.H && (b.sp = this.H), b.ttt = Date.now() - a, b.ttl = this.N, this.M && (b.ttf = this.M), this.m && (b.sr = 1), Lr("te_time", b))
};
function ev(a) {
	R.call(this, a);
	this.o = new Wk(this)
}
w(ev, R);v = ev.prototype;v.J = function() {
	var a = Ei(this.h, "select");
	a.className = "goog-te-combo";
	a.setAttribute("aria-label", Z.Kf);
	this.X(a)
};v.T = function() {
	R.prototype.T.call(this);
	this.Wf()
};v.Wf = function() {
	P(this.s(), Oa, Ir(this, Oa));
	this.dispatchEvent(zb)
};v.da = function() {
	R.prototype.da.call(this);
	this.o.P();
	this.o = null
};
function fv(a, b) {
	a.s().parentNode != b && (a.s().parentNode.removeChild(a.s()), b.appendChild(a.s()))
}
v.Sc = function(a) {
	this.h.Qc(this.s());
	for (var b in a) if (a[b] !== Object.prototype[b]) {
		var c = this.h.J("OPTION", {
			value: b
		});
		this.h.ib(c, a[b]);
		this.s().appendChild(c)
	}
	this.s().selectedIndex = 0
};v.Ba = function() {
	return this.s().value
};v.ya = function(a) {
	if (this.s().value != a) for (var b = 0,
		c; c = this.s().options.item(b); ++b) if (c.value == a) {
			this.s().selectedIndex = b;
			break
		}
};v.cd = function(a) {
	if ("undefined" == xc(a)) return this.s().options.item(this.s().selectedIndex).text;
	for (var b = 0,
		c; c = this.s().options.item(b); ++b) if (c.value == a) return c.text
};v.oa = function(a) {
	this.s().disabled = !a
};
function gv(a) {
	ev.call(this, a)
}
w(gv, ev);gv.prototype.Gb = function(a) {
	this.Sc.call(this, a)
};
function hv(a, b) {
	ev.call(this, b);
	this.g = a && id(a) || {};
	this.g.ff = this.g.ff || 11;
	this.g.Sd = 0 != this.g.Sd;
	this.g.Xa || (this.g.Xa = xr)
}
w(hv, ev);v = hv.prototype;v.md = function() {
	throw Error("Not implemented.");
};v.J = function() {
	this.md();
	this.B = this.s();
	this.l = $h(ma, {
		frameBorder: 0,
		"class": "goog-te-menu-frame skiptranslate",
		title: Z.Kf
	});
	this.l.style.visibility = cc;
	N(this.l, !1);
	document.body.appendChild(this.l)
};v.Wf = function() {
	var a = wd.test(jr) ? Qb: "ltr",
		b = Ts(this.g.Xa),
		c = T(this, "menuBody");
	this.o.D(this.l, zb, this.ih);
	Mr(this.l, A(function() {
		var d = ti(this.l);
		var e = gh(ia + I(wh(b)) + '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' + I(a) + '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' + I(c) + '" class="goog-te-menu"></div></body>');
		e = Ug(e);
		d.write(ve(e));
		d.close()
	},
		this))
};v.ih = function() {
	this.j = new Nh(ti(this.l));
	this.N = this.j.s(T(this, "menuBody"));
	this.o.D(this.B, Sa, this.Ee);
	D ? this.o.D(this.l, Ja, this.xd) : this.o.D(ui(this.l), Ja, this.xd);
	this.dispatchEvent(zb)
};v.da = function() {
	ev.prototype.da.call(this);
	ji(this.l);
	this.B = this.U = this.A = this.N = this.j = this.l = null
};v.hg = function(a) {
	this.m != a.currentTarget.value && (this.ya(a.currentTarget.value), this.dispatchEvent(Oa));
	this.xd()
};v.Ee = function() {
	iv(this);
	ui(this.l).focus();
	this.W = !0
};v.xd = function() {
	this.W && (this.W = !1, iv(this, !1), Zh(K(this.B)).focus())
};v.cf = function() {};v.df = function() {};
function iv(a, b) {
	if ("undefined" == typeof b || b) {
		a.df();
		b = dj(a.B, window);
		var c = b.y + a.B.offsetHeight,
			d = b.y - a.I.height,
			e = b.x,
			f = b.x + a.B.offsetWidth - a.I.width;
		if (D && !H("7.0")) {
			var h = document.body;
			c -= h.offsetTop;
			d -= h.offsetTop;
			e -= h.offsetLeft;
			f -= h.offsetLeft
		} else h = Xh(document),
			c -= h.y,
			d -= h.y,
			e -= h.x,
			f -= h.x;
		h = Vh(window);
		b.y = b.y <= h.height - a.I.height ? c: d;
		b.y > h.height - a.I.height && (b.y = h.height - a.I.height);
		0 > b.y && (b.y = 0);
		wd.test(jr) ? b.x = 0 <= f ? f: e: b.x = e <= h.width - a.I.width ? e: f;
		b.x > h.width - a.I.width && (b.x = h.width - a.I.width);
		0 > b.x && (b.x = 0);
		Xi(a.l, b);
		N(a.l, !0);
		jv(a)
	} else a.cf(),
		N(a.l, !1)
}
v.Ba = function() {
	return this.m
};v.Sc = function(a) {
	this.j.Qc(this.N);
	N(this.l, !0);
	this.ia = a;
	this.A = [];
	for (var b in a) if (a[b] !== Object.prototype[b]) if ("---" == a[b]) {
		var c = {
			link: this.j.J(g, {
				className: "goog-te-menu2-separator",
				value: b
			}),
			Ci: !0
		};
		this.A.push(c)
	} else {
		c = {
			link: this.j.J("A", {
				className: nb,
				href: wb,
				value: b
			})
		};
		this.A.push(c);
		var d = this.j.J(g, {
			style: "white-space:nowrap"
		});
		this.j.appendChild(c.link, d);
		this.g.Sd && this.j.appendChild(d, this.j.J(sa, {
			className: "indicator"
		},
			"\u203a"));
		this.j.appendChild(d, this.j.J(sa, {
			className: "text"
		},
			a[b]));
		this.o.D(c.link, Sa, this.hg)
	}
	a = this.A.length - 1;
	a = Math.round((a - a % this.g.ff) / this.g.ff) + 1;
	this.U = this.j.J("TABLE", {
		cellspacing: 0,
		cellpadding: 0,
		border: 0
	});
	c = this.j.J("TBODY");
	b = this.j.J("TR", {
		valign: "top"
	});
	this.N.className = "goog-te-menu2";
	this.j.appendChild(this.N, this.U);
	this.j.appendChild(this.U, c);
	this.j.appendChild(c, b);
	for (d = c = 0; c < a; ++c) {
		var e = this.j.J("TD");
		this.j.appendChild(b, e);
		for (var f = 0; 11 > f && d < this.A.length; ++f, ++d) this.j.appendChild(e, this.A[d].link);
		c != a - 1 && (e = this.j.J("TD", {
			"class": "goog-te-menu2-colpad"
		},
			"\u00a0"), this.j.appendChild(b, e))
	}
	this.m = null;
	this.ya(this.A[0].link.value);
	jv(this);
	N(this.l, !1)
};v.cd = function(a) {
	return this.ia["undefined" == xc(a) ? this.m: a]
};v.ef = function() {};v.ya = function(a) {
	if (this.m != a) {
		this.cd(a) && (this.m = a, this.ef());
		for (var b = 0; b < this.A.length; ++b) {
			var c = this.A[b];
			c.Ci || (c.link.className = c.link.value == a && this.g.Sd ? nb: "goog-te-menu2-item")
		}
	}
};
function jv(a) {
	mj(a.N, lj(a.U));
	mj(a.l, lj(a.N));
	a.I = lj(a.l)
}
function kv(a, b) {
	hv.call(this, a, b)
}
w(kv, hv);v = kv.prototype;v.md = function() {
	var a = this.h.J("a", {
		"aria-haspopup": "true"
	});
	a.className = mb;
	a.href = wb;
	this.K = this.h.J(sa);
	a.appendChild(this.K);
	this.R = this.h.J("IMG", {
		src: ub,
		alt: "",
		style: "background-image:url(" + ur + ");background-position:-14px 0px;border:none",
		width: 14,
		height: 14
	});
	a.appendChild(this.R);
	this.X(a)
};v.cf = function() {
	M(this.R, Ia, "-14px 0px")
};v.df = function() {
	M(this.R, Ia, "0px 0px")
};v.da = function() {
	hv.prototype.da.call(this);
	this.R = this.K = null
};v.ef = function() {
	this.h.ib(this.K, this.cd(this.m) || "")
};v.Gb = function(a) {
	this.Sc.call(this, a)
};
function lv(a, b) {
	hv.call(this, a, b)
}
w(lv, hv);v = lv.prototype;v.md = function() {
	var a = this.h.J("a", {
		"aria-haspopup": "true"
	});
	a.className = mb;
	a.href = wb;
	this.K = this.h.J(sa);
	a.appendChild(this.K);
	a.appendChild(this.h.J("IMG", {
		src: ub,
		alt: "",
		width: 1,
		height: 1
	}));
	a.appendChild(this.h.J(sa, {
		style: "border-left:1px solid #bbb"
	},
		"\u200b"));
	a.appendChild(this.h.J("IMG", {
		src: ub,
		alt: "",
		width: 1,
		height: 1
	}));
	this.R = this.h.J("span", {
		style: "color:#767676",
		"aria-hidden": "true"
	},
		"\u25bc");
	a.appendChild(this.R);
	this.X(a)
};v.cf = function() {
	M(this.R, "color", "#9b9b9b")
};v.df = function() {
	M(this.R, "color", "#d5d5d5")
};v.da = function() {
	hv.prototype.da.call(this);
	this.R = this.K = null
};v.ef = function() {
	this.h.ib(this.K, this.cd(this.m) || "")
};v.Gb = function(a) {
	this.Sc.call(this, a)
};
function mv(a, b) {
	hv.call(this, a, b);
	this.g.Sd = !1
}
w(mv, hv);mv.prototype.md = function() {
	var a = Ei(this.h, Za);
	a.className = "goog-te-button";
	var b = this.h.J(g, {
		style: "background: url(" + tr + ") repeat-x 0 -39px"
	});
	a.appendChild(b);
	this.K = Ei(this.h, La);
	b.appendChild(this.K);
	this.X(a)
};mv.prototype.Ng = function(a) {
	gi(this.K);
	this.K.appendChild(this.h.g.createTextNode(String(a + "\u00a0\u25bc")))
};mv.prototype.da = function() {
	hv.prototype.da.call(this);
	this.K = null
};mv.prototype.hg = function(a) {
	this.ya(a.currentTarget.value);
	this.dispatchEvent(Oa);
	this.xd()
};
function nv() {
	this.h = {};
	this.g = 0
}
nv.prototype.j = function(a, b) {
	a = this.h[b];
	if (!a) return b;
	b = "";
	a.rf && (b += "<" + a.rf + a.attributes + ">");
	a.Ie && (b += a.Ie);
	a.ve && (b += "</" + a.ve + ">");
	return b
};nv.prototype.rf = function(a, b) {
	De(a);
	return ov(this, {
		rf: a,
		attributes: Le(b)
	})
};nv.prototype.ve = function(a) {
	De(a);
	return ov(this, {
		ve: a
	})
};nv.prototype.text = function(a) {
	return ov(this, {
		Ie: bf(a)
	})
};
function ov(a, b) {
	a.g++;
	var c = "{SafeHtmlFormatter:" + a.g + "_" + gf() + "}";
	a.h[bf(c)] = b;
	return c
};
function pv(a, b) {
	R.call(this, b);
	this.g = a && id(a) || {};
	this.j = new Wk(this)
}
B(pv, R);
var qv = {
	Tj: 0,
	zj: 1,
	Mj: 2
};v = pv.prototype;v.J = function() {
	var a = Ei(this.h, Za);
	L(a, Sb);
	L(a, "goog-te-gadget");
	a.dir = wd.test(jr) ? Qb: "ltr";
	N(a, !1);
	if (2 == this.g.Qb) {
		var b = Ks({
			id: T(this, Vb),
			Kg: "",
			Jg: ""
		});
		Se(a, Ii(b))
	} else {
		b = new nv;
		if (D && !H("7.0")) var c = "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" + vb.replace(Dh, Bh) + "',sizingMethod='scale');\"></span>";
		else c = Z.dd,
			c = '<img src="' + I(uh(vb)) + '" width="37px" height="14px" style="padding-right: 3px" alt="Google ' + I(c) + '">';
		var d = Z.dd;
		var e = gh('<span style="white-space:nowrap"><a class="goog-logo-link" href="' + I(ph(tb)) + '" target="_blank">' + c + fh(d) + "</a></span>");
		c = Z;
		d = c.rh;
		e = Ug(e);
		e = ov(b, {
			Ie: ue(e)
		});
		c = d.call(c, e);
		d = bf("SafeHtmlFormatter:");
		b = bf(c).replace(new RegExp("\\{" + d + "[\\w&#;]+\\}", "g"), A(b.j, b, []));
		b = xe(b, null);
		b = Ks({
			id: T(this, Vb),
			Kg: "",
			Jg: 1 == this.g.Qb ? Ke("\u00a0", "\u00a0", b) : b
		});
		Se(a, Ii(b))
	}
	this.X(a)
};v.T = function() {
	pv.G.T.call(this);
	this.l = 2 == this.g.Qb ? new lv(null, this.h) : new gv(this.h);
	this.j.D(this.l, Oa, Ir(this, Ra));
	this.j.D(this.l, zb, this.jh);
	var a = this.h.s(T(this, Vb));
	if (2 == this.g.Qb) {
		var b = this.h.J("IMG", {
			src: ub,
			"class": "goog-te-gadget-icon",
			alt: ""
		});
		b.style.backgroundImage = "url(" + ur + ")";
		b.style.backgroundPosition = "-65px 0px";
		var c = this.h.J(sa, {
			style: "vertical-align: middle"
		});
		a.appendChild(b);
		a.appendChild(c);
		this.l.ka(c);
		a.style.whiteSpace = "nowrap";
		a.className = "goog-te-gadget-simple"
	} else this.l.ka(a),
		1 == this.g.Qb && (a.style.display = "inline")
};v.jh = function() {
	if (2 == this.g.Qb) {
		var a = this.l,
			b = this.h.s(T(this, Vb));
		a.o.ga(a.B, Sa, a.Ee);
		a.B = b;
		a.o.D(a.B, Sa, a.Ee)
	}
	this.dispatchEvent(zb)
};v.da = function() {
	pv.G.da.call(this);
	this.j.P();
	this.j = null;
	this.l.P();
	this.l = null
};v.qa = function() {
	return this.l.Ba()
};v.ua = function(a) {
	"" == a ? this.K && this.l.Gb(this.K) : this.I && this.l.Gb(this.I);
	this.l.ya(a)
};v.setVisible = function(a) {
	N(this.s(), a)
};v.oa = function(a) {
	this.l.oa(a)
};v.nf = function(a, b) {
	this.K = a;
	this.I = b
};
function rv() {
	Mh()
}
rv.prototype.ka = function(a) {
	a = a({},
		{});
	this.g(null, a instanceof Tg ? a.Lb: null)
};
function sv(a, b) {
	b = b || {};
	var c = b.id,
		d = b.top,
		e = b.left,
		f = b.bottom,
		h = b.right;
	b = jh("." + xh(b.className) + " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" + (kh(d) || 0 == d ? "top:" + xh(d) + "px; _top:expression((" + xh(d) + "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');": "top:auto;") + (kh(e) || 0 == e ? "left:" + xh(e) + "px; _left:expression((" + xh(e) + "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');": "left:auto;") + (kh(f) || 0 == f ? "bottom:" + xh(f) + "px; _top:expression((-" + xh(f) + ca + String(c).replace(Dh, Bh) + "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');": "bottom:auto;") + (kh(h) || 0 == h ? "right:" + xh(h) + "px; _left:expression((-" + xh(h) + ca + String(c).replace(Dh, Bh) + "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');": "right:auto;") + "}");
	a.g(null, b.Lb);
	a = b.toString();
	b = sd("Soy SanitizedCss produces SafeStyleSheet-contract-compliant value.");
	rd(b);
	rd(b);
	return new ie(a, he)
}
rv.prototype.g = y;
function tv(a, b) {
	R.call(this, b);
	this.g = a && id(a) || {};
	this.g.Xa || (this.g.Xa = xr);
	this.j = new Wk(this)
}
B(tv, R);
var uv = {
	TOP_LEFT: 1,
	TOP_RIGHT: 2,
	BOTTOM_RIGHT: 3,
	BOTTOM_LEFT: 4
};v = tv.prototype;v.J = function() {
	var a = Ei(this.h, Za);
	this.la = !1;
	N(a, !1);
	var b = T(this, Va);
	b = gh('<iframe id="' + I(b) + '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>');
	Se(a, Ii(b));
	this.X(a)
};v.T = function() {
	tv.G.T.call(this);
	var a = wd.test(jr) ? Qb: "ltr",
		b = Ts(this.g.Xa),
		c = T(this, ac);
	this.s().id = T(this, "floatContainer");
	var d = {
		id: this.s().id,
		className: "goog-te-ftab-float"
	};
	this.s().className += " goog-te-ftab-float";
	switch (this.g.pd) {
		case 2:
			var e = gb;
			d.top = 0;
			d.right = 20;
			break;
		case 3:
			e = fb;
			d.bottom = 0;
			d.right = 20;
			break;
		case 4:
			e = fb;
			d.bottom = 0;
			d.left = 20;
			break;
		default:
			e = gb,
				d.top = 0,
				d.left = 20
	}
	gj(sv(new rv, d), this.s());
	this.A = this.h.s(T(this, Va));
	this.j.D(this.A, zb, this.kh);
	Mr(this.A, A(function() {
		var f = ti(this.A);
		var h = e;
		var k = Z.Mf;
		h = gh(ia + I(wh(b)) + '"></head><body class="goog-te-ftab ' + I(h) + '" scroll="no" style="overflow:hidden" dir="' + I(a) + '"><a id="' + I(c) + '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' + I(uh(ub)) + aa + I(uh(ur)) + ');background-position:-65px 0px"><span>' + fh(k) + "</span></a></body>");
		h = Ug(h);
		f.write(ve(h));
		f.close()
	},
		this))
};v.kh = function() {
	this.l = (new Nh(ti(this.A))).s(T(this, ac));
	this.j.D(this.l, Sa, Ir(this, "clk_trans"));
	N(this.s(), !0);
	var a = lj(this.l);
	N(this.s(), !1);
	mj(this.A, a);
	mj(this.s(), a);
	this.dispatchEvent(zb)
};v.da = function() {
	tv.G.da.call(this);
	this.j.P();
	this.j = null;
	ji(this.A);
	this.l = this.A = null
};v.isVisible = function() {
	return this.la
};v.setVisible = function(a) {
	this.la = a;
	N(this.s(), a)
};
function vv(a, b) {
	R.call(this, b);
	this.o = new Wk(this);
	this.g = a && id(a) || {};
	this.g.Xa || (this.g.Xa = xr);
	this.g.qf = !1;
	M(this.h.g.body, Kb, "relative");
	Of || M(this.h.g.body, "minHeight", "100%");
	M(this.h.g.documentElement, "height", "100%");
	M(this.h.g.body, "top", "0px");
	D && (window._bannerquirkfixleft = -parseInt("0" + this.h.g.body.leftMargin, 10), window._bannerquirkfixtop = -parseInt("0" + this.h.g.body.topMargin, 10) - 40)
}
B(vv, R);v = vv.prototype;v.ka = function() {
	var a = this.h.g.body.firstChild;
	wl(this, a.parentNode, a)
};v.J = function() {
	var a = Ei(this.h, Za);
	this.la = !1;
	N(a, !1);
	L(a, Sb);
	var b = T(this, Va);
	b = gh('<iframe id="' + I(b) + '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>');
	Se(a, Ii(b));
	this.X(a)
};v.T = function() {
	vv.G.T.call(this);
	var a = wd.test(jr) ? Qb: "ltr",
		b = Ts(this.g.Xa),
		c = T(this, "promptSection"),
		d = T(this, "confirm"),
		e = T(this, Lb),
		f = T(this, "progressValue"),
		h = T(this, "cancel"),
		k = T(this, "finishSection"),
		l = T(this, "restore"),
		m = T(this, "errorSection"),
		n = T(this, "errorContent"),
		q = T(this, "close"),
		u = T(this, "noAutoPopup"),
		z,
		G = [];
	this.g.qf && G.push(Js({
		id: T(this, Mb)
	}));
	G.push(Js({
		id: T(this, Nb)
	}));
	var U = Rs(Z.Bh.apply(null, G));
	G = [];
	this.g.qf && G.push(Js({
		id: T(this, ab)
	}));
	G.push(Js({
		id: T(this, bb)
	}));
	var Dg = Rs(Z.wh.apply(null, G));
	this.g.Tg && (z = this.g.Tg);
	this.A = this.h.s(T(this, Va));
	this.o.D(this.A, zb, this.lh);
	Mr(this.A, A(function() {
		var qc = ti(this.A);
		var Ha = z;
		var pc = Z.dd,
			mm = Z.Mf,
			Lv = Z.xh,
			Mv = Z.xf,
			Nv = Z.sh,
			Ov = Z.yf,
			Pv = Z.yf;
		Ha = gh(ia + I(wh(b)) + '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' + I(a) + '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' + I(ph(tb)) + '" class="goog-logo-link" target="_blank"><img src="' + I(uh("https://cdn.jsdelivr.net/gh/cacaos/violentmonkey-script@main/google-translate/translate.google.com/translate_static/img/googlelogo_color_68x28dp.png")) + '" alt="Google ' + I(pc) + '"></a></td>' + (Ha ? '<td width=1><img src="' + I(uh(ub)) + '" width="9" height="15" title="' + I(Ha) + '" alt="' + I(Ha) + aa + I(uh(ur)) + ');background-position:-56px 0px;margin:0 4px"></td>': "") + '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' + I(c) + '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' + fh(U) + ha + I(d) + '"><b>' + fh(mm) + '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + I(u) + '"></button></div></div></td></tr><tr id="' + I(e) + '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' + fh(Lv) + '&nbsp;<span dir="ltr">(<b id="' + I(f) + '"></b>%)</span>&nbsp;<img src="' + I(uh(wr)) + '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + I(h) + '">' + fh(Mv) + fa + I(k) + '" style="display:none"><td><span class="goog-te-banner-content">' + fh(Dg) + ha + I(l) + '">' + fh(Nv) + fa + I(m) + '" style="display:none" valign=middle><td><span id="' + I(n) + '" class="goog-te-banner-content"></span></td></tr></table></td><td><td class="goog-te-banner-margin"></td></td><td width=1 id="options"></td><td width=1><a id="' + I(q) + '" class="goog-close-link" href="javascript:void(0)" title="' + I(Ov) + '"><img src="' + I(uh(ub)) + '" width="15" height="15" alt="' + I(Pv) + aa + I(uh(ur)) + ');background-position:-28px 0px"></a></td></tr></table></body>');
		Ha = Ug(Ha);
		qc.write(ve(Ha));
		qc.close()
	},
		this))
};v.lh = function() {
	this.j = new Nh(ti(this.A));
	wv(this, Z.zf);
	if (this.g.Xa == xr) {
		var a = "url(" + tr + ")";
		M(this.j.g.body, Ga, a);
		for (var b = this.j.g.getElementsByTagName(La), c = 0; c < b.length; ++c) {
			var d = b[c].parentNode;
			M(d, Ga, a);
			M(d, "backgroundRepeat", "repeat-x");
			M(d, Ia, "0 -39px")
		}
	}
	this.g.qf && (this.m = new kv(this.g, this.j));
	this.l = new kv(this.g, this.j);
	this.B = new mv(this.g, this.j);
	this.o.D(this.j.s(T(this, "confirm")), Sa, Ir(this, "clk_confirm"));
	this.o.D(this.j.s(T(this, "cancel")), Sa, Ir(this, "clk_cancel"));
	this.o.D(this.j.s(T(this, "restore")), Sa, Ir(this, "clk_restore"));
	this.o.D(this.j.s(T(this, "close")), Sa, Ir(this, "clk_close"));
	this.N = this.j.s(T(this, "noAutoPopup"));
	this.o.D(this.N, Sa, Ir(this, "clk_no_ap"));
	this.m && this.o.D(this.m, Oa, Ir(this, "chg_src_lang"));
	this.o.D(this.l, Oa, Ir(this, Ra));
	this.o.D(this.B, Oa, this.li);
	a = new Cr(A(this.mh, this));
	this.m && this.o.D(this.m, zb, a.register());
	this.o.D(this.l, zb, a.register());
	this.o.D(this.B, zb, a.register());
	a.finish();
	this.m && this.m.ka(this.j.s(T(this, Mb)));
	this.l.ka(this.j.s(T(this, Nb)));
	this.B.ka(this.j.s("options"))
};v.mh = function() {
	this.B.Ng(Z.ph);
	this.B.Sc({
		turn_off_site: Z.zh,
		s1: "---",
		learn_more: Z.oh
	});
	this.dispatchEvent(zb)
};v.li = function() {
	switch (this.B.Ba()) {
		case "learn_more":
			window.open(Ar, "_blank");
			break;
		case "turn_off_site":
			this.dispatchEvent(Ta)
	}
};v.da = function() {
	this.setVisible(!1);
	vv.G.da.call(this);
	this.o.P();
	this.o = null;
	this.m && (this.m.P(), this.m = null);
	this.l.P();
	this.l = null;
	this.B.P();
	this.B = null;
	ji(this.A);
	this.Ec = this.j = null
};v.gb = function() {
	return this.m ? this.m.Ba() : ""
};v.qa = function() {
	return this.l.Ba()
};v.Sb = function(a) {
	this.m && this.m.ya(a);
	this.R && this.R[a] && this.j.ib(this.N, Z.yh(this.R[a]))
};v.ua = function(a) {
	this.l.ya(a)
};
function xv(a, b, c, d) {
	if (a.Ec != b) {
		a.Ec = b;
		if (0 == b) {
			a.m && fv(a.m, a.j.s(T(a, Mb)));
			if (a.K) {
				var e = a.qa();
				a.l.Gb(a.K);
				a.ua(e)
			}
			fv(a.l, a.j.s(T(a, Nb)))
		} else 2 == b && (a.m && fv(a.m, a.j.s(T(a, ab))), a.I && (e = a.qa(), a.l.Gb(a.I), a.ua(e)), fv(a.l, a.j.s(T(a, bb))));
		e = {};
		e[ - 1] = a.j.s(T(a, "errorSection"));
		e[0] = a.j.s(T(a, "promptSection"));
		e[1] = a.j.s(T(a, Lb));
		e[2] = a.j.s(T(a, "finishSection"));
		for (var f in e) e[f] !== Object.prototype[f] && N(e[f], f == b)
	}
	c && a.setVisible(!0);
	a.N.parentNode.parentNode.style.display = d ? "block": r
}
v.isVisible = function() {
	return this.la
};v.setVisible = function(a) {
	if (this.la != a) {
		this.la = a;
		if (D) var b = parseInt("0" + this.h.g.body.leftMargin, 10),
			c = parseInt("0" + this.h.g.body.topMargin, 10);
		var d = "BackCompat" == this.h.g.compatMode;
		a ? (M(this.h.g.body, "top", "40px"), N(this.s(), !0), D && (H("7.0") ? (window._bannerquirkfixleft = window._bannerquirkfixtop = 0, d && (this.h.g.body.topMargin = c + 40)) : d ? (this.h.g.body.topMargin = c + 40, window._bannerquirkfixleft = window._bannerquirkfixtop = 0) : (window._bannerquirkfixleft = -b, window._bannerquirkfixtop = -c - 40))) : (M(this.h.g.body, "top", "0px"), N(this.s(), !1), d && 40 <= c && (this.h.g.body.topMargin = c - 40))
	}
};v.lf = function(a) {
	this.j.ib(this.j.s(T(this, "progressValue")), a)
};
function wv(a, b) {
	a.j.ib(a.j.s(T(a, "errorContent")), b)
}
v.nf = function(a, b) {
	this.K = a;
	this.I = b;
	this.l.Gb(a)
};
function yv(a, b) {
	O.call(this);
	xc(a) == t && (b = a, a = {});
	xc(b) == t && (b = Oh(document, String(b)));
	this.U = b;
	this.o = new Wk(this);
	this.Tb = this.W = void 0;
	a = Object(a);
	this.m = Fa; ! (b = window.parent != window) && (b = (!window.external || !window.external.googleToolbarVersion || 6.2 > parseFloat(window.external.googleToolbarVersion)) && (!window.gtbExternal || !window.gtbExternal.isTranslateEnabled || !window.gtbExternal.isTranslateEnabled())) && (b = navigator.appVersion && navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/), b = !(b && b[2] && b[3] && 4001 <= 1E3 * Number(b[2]) + Number(b[3])));
	this.g = {
		oe: b,
		Zf: !1,
		pe: null,
		gd: null,
		Ke: [],
		Yf: [],
		Kh: !1,
		lc: !1,
		cb: "",
		$f: !1,
		ye: "",
		Qb: 0,
		Uf: !1
	};
	this.wa = {
		Xa: xr,
		Tg: "https://" == sr ? Z.uh: null
	};
	this.R = {
		Xa: xr,
		pd: null
	};
	a && ("autoDisplay" in a && (this.g.oe = this.g.oe && !!a.autoDisplay), "multilanguagePage" in a && (this.g.lc = !!a.multilanguagePage), "gaTrack" in a && (this.g.$f = !!a.gaTrack), "layout" in a && (this.g.Qb = a.layout), a.pageLanguage && (this.g.Od = Jr(a.pageLanguage)), a.includedLanguages && (this.g.Ke = a.includedLanguages.split(",")), a.excludedLanguages && (this.g.Yf = a.excludedLanguages.split(",")), this.g.Od && (this.m = this.g.Od), a.key && (this.g.cb = a.key), a.gaId && (this.g.ye = a.gaId), this.R.pd = Number(a.floatPosition) || this.R.pd, "disableAutoTranslation" in a && (this.g.Uf = !!a.disableAutoTranslation), a.jwtToken && (this.W = new us(a.jwtToken)), a.jwtTokenProvider && (this.W = new vs(a.jwtTokenProvider)), a.translateErrorHandler && (this.Tb = a.translateErrorHandler)); ! this.g.Uf && zv(this) && (this.g.Zf = !0);
	this.C = {};
	if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) && a[2]) for (this.C = {},
		a = af(a[2]).split("|"), b = 0; b < a.length; ++b) {
		var c = a[b].split("=");
		c[0] && (this.C[c[0]] = c[1])
	}
	this.ta = new Ot({
		cb: this.g.cb,
		Nb: 1,
		pf: !0,
		bk: zr
	},
		{
			client: pr,
			u: window.location.href
		});
	this.H = new dv(void 0, this.ta, void 0, void 0, this.g.cb, void 0, void 0, new Ru, this.W, this.Tb);
	this.M = !1;
	this.o.D(window, "unload", this.P);
	this.K = new Cr(A(this.fi, this));
	this.I = new Cr(A(this.ii, this));
	this.S = new Er(A(this.Di, this));
	this.h = new vv(this.wa);
	this.H.ud(this.K.register(A(this.ei, this)), jr);
	this.U ? (this.l = new pv(this.g), this.o.D(this.l, zb, this.K.register()), this.o.D(this.l, Ra, Fr(this.S, this.I.delay(A(this.di, this)))), this.l.ka(this.U)) : this.R.pd && (this.A = new tv(this.R), this.o.D(this.A, zb, this.K.register()), this.o.D(this.A, "clk_trans", Fr(this.S, this.I.delay(A(this.ci, this)))), this.A.ka()); ! this.g.Od && this.g.Kh && this.H.qd(this.K.register(A(this.$h, this)));
	this.K.finish()
}
w(yv, O);
function zv(a) {
	function b(f, h) {
		if (f = af(f).match("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)")) {
			if (f[3]) return h.g.pe = f[2],
				h.g.gd = f[3],
				!0;
			if (f[6]) return h.g.pe = f[5],
				h.g.gd = f[6],
				!0
		}
		return ! 1
	}
	var c = {
		url: function() {
			var f = window.location.href.match(/#.*googtrans(.*)/);
			return f && f[1]
		},
		cookie: function() {
			var f = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
			return f && f[2]
		}
	},
		d;
	for (d in c) if (c[d] !== Object.prototype[d]) {
		var e = c[d]();
		if (e && b(e, a)) return d
	}
	return ""
}
function Av(a, b) {
	for (var c = window.location.hostname.split("."); 2 < c.length;) c.shift();
	c = ";domain=" + c.join(".");
	null != b ? a = a + "=" + b: (b = new Date, b.setTime(b.getTime() - 1), a = a + "=none;expires=" + b.toGMTString());
	a += ";path=/";
	document.cookie = a;
	try {
		document.cookie = a + c
	} catch(d) {}
}
function Bv(a, b) {
	var c = null;
	void 0 !== b && (c = void 0 !== a ? "/" + a + "/" + b: "/" + b);
	Av("googtrans", c)
}
v = yv.prototype;v.ei = function(a) {
	this.j = Jr(jr);
	this.O = a || {};
	this.B = {};
	this.N = {};
	a = !this.g.Ke.length;
	var b = Br(this.g.Ke),
		c = Br(this.g.Yf);
	this.B[jr] = "";
	this.N[jr] = "";
	for (var d in this.O.tl) this.O.tl[d] === Object.prototype[d] || !(a || d in b) || d in c || (this.N[d] = this.O.tl[d], d == this.g.Od && !this.g.lc) || (this.B[d] = this.O.tl[d]);
	this.B[jr] || delete this.B[jr];
	this.N[jr] || delete this.N[jr];
	this.ia = id(this.O.sl)
};v.$h = function(a) {
	a && (this.m = Jr(a))
};v.fi = function() {
	delete this.K;
	if (this.O) {
		this.m = this.m || this.g.pe;
		this.j = this.g.gd || this.j;
		var a = this.g.Zf || this.g.oe && this.m != this.j && !(this.m in nr) && "1" != this.C.os && "1" != this.C["o" + this.m];
		"zh-TW" == this.m && (this.m = "zh-CN");
		this.ia[this.m] || (a = !1, this.m = Fa);
		if (!this.B[this.j]) if (a = !1, this.B.en) this.j = "en";
		else for (var b in this.B) if (this.B[b] !== Object.prototype[b]) {
			this.j = b;
			break
		}
		if (this.l) {
			var c = this.B,
				d = {
					"": Z.th
				};
			for (b in c) c[b] !== Object.prototype[b] && (d[b] = c[b]);
			this.l.nf(d, this.N);
			this.l.ua("")
		} ! lr && a ? this.g.gd ? Fr(this.S, this.I.delay(A(this.Rd, this, !0, !0))).call() : (this.M = !0, Fr(this.S, this.I.delay(A(this.Rd, this))).call(), Lr("te_ap", {
			sl: this.m
		})) : (this.A && this.A.setVisible(!0), this.l && this.l.setVisible(!0));
		window.google.translate.TranslateService && this.oa(!1);
		this.S.finish()
	}
};v.ii = function() {
	var a = this.h,
		b = this.ia;
	a.m && a.m.Gb(b);
	a.R = b;
	this.h.nf(this.B, this.N);
	this.h.Sb(this.m);
	this.h.ua(this.j);
	this.o.D(this.h, "clk_confirm", this.Uh);
	this.o.D(this.h, "clk_cancel", this.Th);
	this.o.D(this.h, "clk_restore", this.Ce);
	this.o.D(this.h, "clk_close", this.wd);
	this.o.D(this.h, "clk_no_ap", this.Vh);
	this.o.D(this.h, Ta, this.Wh);
	this.o.D(this.h, "chg_src_lang", this.cg);
	this.o.D(this.h, Ra, this.cg);
	this.l && this.l.setVisible(!0)
};v.Di = function() {
	this.o.D(this.h, zb, this.I.register());
	this.h.ka();
	this.I.finish()
};v.L = function() {
	this.H.restore();
	O.prototype.L.call(this);
	this.H.P();
	this.o.P();
	this.o = null;
	this.h && this.h.P();
	this.h = null;
	this.A && this.A.P();
	this.A = null;
	this.l && this.l.P();
	this.U = this.l = null
};v.Uh = function() { ! this.h.isVisible() || !this.g.lc && Rr(this.m, this.h.qa()) || (this.M && Lr("te_apt", {
	sl: this.m
}), Cv(this, !1), this.l && this.l.ua(this.h.qa()))
};v.Th = function() {
	this.h.isVisible() && (Dv(this), xv(this.h, 0), this.l && this.l.ua(""))
};v.Ce = function() {
	this.h.isVisible() && (Dv(this), xv(this.h, 0));
	this.l && this.l.ua("")
};v.wd = function() {
	this.h.isVisible() && (this.M && (this.M = !1, Lr("te_apc", {
		sl: this.m
	})), Dv(this), this.h.setVisible(!1), this.l && this.l.ua(""), this.A && this.A.setVisible(!0))
};v.Vh = function() {
	this.h.isVisible() && (this.C["o" + this.m] = "1", Lr("te_apr", {
		sl: this.m
	}), this.M = !1, this.wd())
};v.Wh = function() {
	if (this.h.isVisible()) {
		this.M = !1;
		this.C.os = "1";
		var a = null;
		if (this.C) {
			a = [];
			for (var b in this.C) this.C[b] !== Object.prototype[b] && a.push(b + "=" + this.C[b]);
			a = a.join("|")
		}
		Av("googtransopt", a);
		this.wd()
	}
};v.cg = function() {
	this.h.isVisible() && (!this.g.lc && Rr(this.m, this.h.qa()) ? this.Ce() : (this.m = this.h.gb() || this.m, this.j = this.h.qa(), 2 == this.h.Ec && (this.l && this.l.ua(this.h.qa()), Cv(this))))
};v.Rd = function(a, b) {
	this.h.isVisible() || (this.A && this.A.setVisible(!1), a ? Cv(this, b) : xv(this.h, 0, !0, this.M))
};v.kj = function(a, b) {
	Fr(this.S, this.I.delay(A(this.Rd, this, a, b))).call()
};v.ci = function() {
	this.Rd(2 == this.h.Ec)
};v.di = function() {
	this.l.qa() ? !this.g.lc && Rr(this.m, this.h.qa()) ? this.Ce() : (this.j = this.l.qa(), this.h.ua(this.j), Cv(this)) : this.l.ua(this.j)
};
function Cv(a, b) {
	if (window.google.translate.TranslateService) try {
		window.google.translate.TranslateService.getInstance().restore()
	} catch(c) {}
	Bv(a.m, a.j);
	a.M = !1; ! b && a.m in nr && Lr("te_ape", {
		sl: a.m
	});
	a.h.lf(0);
	xv(a.h, 1, !0);
	a.H.Og( !! b);
	window.setTimeout(A(a.H.Vd, a.H, a.g.lc ? Fa: a.m, a.j, A(a.ri, a), void 0, void 0), 0);
	if (a.g.$f && window._gaq && window._gat) try {
		a.g.ye ? window._gat._getTracker(a.g.ye)._trackEvent(la, "Translate", a.j) : window._gat._getTrackerByName()._trackEvent(la, "Translate", a.j)
	} catch(c) {}
}
v.ri = function(a, b, c) {
	typeof this.xa == p && this.xa();
	this.h.isVisible() && 1 == this.h.Ec && (c ? (Dv(this), xv(this.h, -1, !0), 2 == c ? wv(this.h, Z.nh) : wv(this.h, Z.zf)) : (this.h.lf(a), b && (this.l && this.l.ua(this.j), this.h.Sb(this.m), xv(this.h, 2))))
};
function Dv(a) {
	Bv();
	window.setTimeout(A(a.H.restore, a.H, null), 0)
}
v.oa = function(a) {
	a || this.wd();
	this.l && this.l.oa(a);
	this.A && this.A.setVisible(a)
};
function Ev(a) {
	if (a && (a = String(a), a = a.split("."), a.length)) {
		for (var b = window,
			c = 0; c < a.length; ++c) {
			var d = a[c];
			if (! (d && d in b)) return;
			b = b[d]
		}
		return b
	}
};
var Fv = Ev("google.translate.m");
if (Fv) for (var Gv in Z) if (Z[Gv] !== Object.prototype[Z[Gv]] && Z[Gv]) {
	var Hv = Z[Gv]();
	Z[Gv] = Fv[Hv] ? Fv[Hv] : Is
}
if (1 == or) {
	var Iv = null,
		Jv = function(a) {
			if (!Iv) {
				var b, c, d, e;
				a && ("key" in a && (b = a.key), "serverParams" in a && (c = a.serverParams), "timeInfo" in a && (d = a.timeInfo), "remoteApiProxyHandlers" in a && (e = a.remoteApiProxyHandlers), (a = (a = window.location.hash.match(/google\.translate\.element\.sp=([^&]+)/)) && a[1] ? a[1] : null) && (c = a));
				a = 0;
				if ("te_lib" == pr || sf) a = 3;
				Iv = new dv(void 0, new Ot({
					cb: b,
					Nb: a,
					pf: !0,
					trackVisibility: "tvis" == c
				}), void 0, void 0, b, c, d, new Ru, void 0, void 0, e);
				Iv.constructor = y;
				Iv.isAvailable = Iv.Wa;
				Iv.getSupportedLanguages = Iv.ud;
				Iv.getPageLanguage = Iv.qd;
				Iv.setClickThrough = Iv.Og;
				Iv.translatePage = Iv.Vd;
				Iv.restore = Iv.restore;
				Iv.isTranslating = Iv.hh;
				Iv.setCheckVisibility = Iv.hj
			}
			return Iv
		};
	Jv.getInstance = function() {
		return Iv
	};
	Hc("google.translate.TranslateService", Jv);
	Lr("te_li")
} else {
	var Kv = null,
		Qv = function(a, b) {
			Kv || (Kv = new yv(a, b), Kv.constructor = y);
			return Kv
		};
	Qv.getInstance = function() {
		return Kv
	};
	Hc("google.translate.TranslateElement", Qv);
	yv.prototype.dispose = yv.prototype.P;
	yv.prototype.showBanner = yv.prototype.kj;
	yv.prototype.setEnabled = yv.prototype.oa;
	Hc("google.translate.TranslateElement.FloatPosition", uv);
	uv.TOP_LEFT = 1;
	uv.TOP_RIGHT = 2;
	uv.BOTTOM_RIGHT = 3;
	uv.BOTTOM_LEFT = 4;
	Hc("google.translate.TranslateElement.InlineLayout", qv);
	qv.VERTICAL = 0;
	qv.HORIZONTAL = 1;
	qv.SIMPLE = 2
} (function() {
	for (var a in Object.prototype) {
		bd = function(d, e, f) {
			for (var h in d) d[h] !== Object.prototype[h] && e.call(f, d[h], h, d)
		};
		break
	}
	var b = Gc(),
		c = Ev(kr);
	c && typeof c == p && (1 == or ? c() : function e() {
		var f = document.readyState;
		"undefined" == xc(f) || f == Ua || "interactive" == f || 2E4 <= Gc() - b ? c() : window.setTimeout(e, 500)
	} ())
})();
}).call(window)
