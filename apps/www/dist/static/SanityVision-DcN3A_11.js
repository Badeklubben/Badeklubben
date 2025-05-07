var $p = Object.defineProperty;
var Ep = (n, e, t) =>
	e in n ? $p(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (n[e] = t);
var Ws = (n, e, t) => Ep(n, typeof e != 'symbol' ? e + '' : e, t);
import {
	r as B,
	j as D,
	_ as Zp,
	e as Rp,
	a as Pe,
	u as Xh,
	C as Qe,
	b as Tp,
	S as At,
	B as Ai,
	H as Fp,
	f as Al,
	F as Gt,
	h as Mp,
	i as Bp,
	k as pi,
	v as Oi,
	l as qh,
	m as Oa,
	n as jp,
	o as ue,
	p as ge,
	q as ma,
	s as Fn,
	t as Wp,
	G as zp,
	w as Xp,
	x as qp,
	y as ga,
	P as ya,
	z as yt,
	A as _p,
	J as Yp,
	D as ba,
	E as _h,
	I as Np,
	L as Vp,
	T as Zt,
	K as Ip,
	M as Lp,
	N as zs,
	O as Yh,
	Q as Up,
	U as Nh,
	V as Gp,
	W as Hp,
	X as Vh,
	Y as Jp,
	Z as Kp,
	$ as eO
} from './sanity-BGUQwGSa.js';
var tO = Object.defineProperty,
	xa = Object.getOwnPropertySymbols,
	iO = Object.prototype.hasOwnProperty,
	nO = Object.prototype.propertyIsEnumerable,
	Da = (n, e, t) =>
		e in n ? tO(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (n[e] = t),
	Sa = (n, e) => {
		for (var t in e || (e = {})) iO.call(e, t) && Da(n, t, e[t]);
		if (xa) for (var t of xa(e)) nO.call(e, t) && Da(n, t, e[t]);
		return n;
	};
const wa = function (n) {
		const { children: e, className: t, split: i, style: r, size: s, eleRef: o } = n;
		let l = { flex: 1, position: 'relative', outline: 'none' };
		s !== void 0 &&
			(i === 'vertical' ? (l.width = s) : ((l.height = s), (l.display = 'flex')),
			(l.flex = 'none')),
			(l = Sa(Sa({}, l), r));
		const a = ['Pane', i, t].filter(Boolean).join(' ');
		return D.jsx('div', {
			role: 'region',
			ref: o,
			className: a,
			style: l,
			children: e
		});
	},
	wo = 'Resizer',
	rO = function (n) {
		const {
				className: e = wo,
				onClick: t,
				onDoubleClick: i,
				onMouseDown: r,
				onTouchEnd: s,
				onTouchStart: o,
				resizerClassName: l,
				split: a,
				style: u
			} = n,
			h = [l, a, e].filter(Boolean).join(' ');
		return D.jsx('span', {
			role: 'separator',
			className: h,
			style: u,
			onMouseDown: (c) => r(c.nativeEvent),
			onTouchStart: (c) => {
				c.preventDefault(), o(c.nativeEvent);
			},
			onTouchEnd: (c) => {
				c.preventDefault(), s(c.nativeEvent);
			},
			onClick: (c) => {
				t && (c.preventDefault(), t(c.nativeEvent));
			},
			onDoubleClick: (c) => {
				i && (c.preventDefault(), i(c.nativeEvent));
			}
		});
	};
var sO = Object.defineProperty,
	oO = Object.defineProperties,
	lO = Object.getOwnPropertyDescriptors,
	ka = Object.getOwnPropertySymbols,
	aO = Object.prototype.hasOwnProperty,
	uO = Object.prototype.propertyIsEnumerable,
	ko = (n, e, t) =>
		e in n ? sO(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (n[e] = t),
	st = (n, e) => {
		for (var t in e || (e = {})) aO.call(e, t) && ko(n, t, e[t]);
		if (ka) for (var t of ka(e)) uO.call(e, t) && ko(n, t, e[t]);
		return n;
	},
	zr = (n, e) => oO(n, lO(e)),
	Pr = (n, e, t) => ko(n, typeof e != 'symbol' ? e + '' : e, t);
const Ih = {
		display: 'flex',
		flex: 1,
		height: '100%',
		position: 'absolute',
		outline: 'none',
		overflow: 'hidden',
		MozUserSelect: 'text',
		WebkitUserSelect: 'text',
		msUserSelect: 'text',
		userSelect: 'text'
	},
	hO = zr(st({}, Ih), { flexDirection: 'row', left: 0, right: 0 }),
	cO = zr(st({}, Ih), {
		bottom: 0,
		flexDirection: 'column',
		minHeight: '100%',
		top: 0,
		width: '100%'
	}),
	Xs = {},
	Lh = class bn extends B.Component {
		constructor(e) {
			super(e),
				Pr(this, 'pane1', null),
				Pr(this, 'pane2', null),
				Pr(this, 'splitPane', null),
				(this.onMouseDown = this.onMouseDown.bind(this)),
				(this.onTouchStart = this.onTouchStart.bind(this)),
				(this.onMouseMove = this.onMouseMove.bind(this)),
				(this.onTouchMove = this.onTouchMove.bind(this)),
				(this.onMouseUp = this.onMouseUp.bind(this));
			const { size: t, defaultSize: i, minSize: r, maxSize: s, primary: o } = e,
				l = t !== void 0 ? t : Ca(i, r, s, void 0);
			this.state = {
				active: !1,
				resized: !1,
				pane1Size: o === 'first' ? l : void 0,
				pane2Size: o === 'second' ? l : void 0,
				instanceProps: { size: t }
			};
		}
		componentDidMount() {
			document.addEventListener('mouseup', this.onMouseUp),
				document.addEventListener('mousemove', this.onMouseMove),
				document.addEventListener('touchmove', this.onTouchMove),
				this.setState(bn.getSizeUpdate(this.props, this.state));
		}
		static getDerivedStateFromProps(e, t) {
			return bn.getSizeUpdate(e, t);
		}
		componentWillUnmount() {
			document.removeEventListener('mouseup', this.onMouseUp),
				document.removeEventListener('mousemove', this.onMouseMove),
				document.removeEventListener('touchmove', this.onTouchMove);
		}
		onMouseDown(e) {
			this.onTouchStart(
				zr(st({}, e), {
					touches: [{ clientX: e.clientX, clientY: e.clientY }]
				})
			);
		}
		onTouchStart(e) {
			const { allowResize: t, onDragStarted: i, split: r } = this.props;
			if (t) {
				Qa(document, window);
				const s = r === 'vertical' ? e.touches[0].clientX : e.touches[0].clientY;
				typeof i == 'function' && i(), this.setState({ active: !0, position: s });
			}
		}
		onMouseMove(e) {
			const t = Object.assign({}, e, {
				touches: [{ clientX: e.clientX, clientY: e.clientY }]
			});
			this.onTouchMove(t);
		}
		onTouchMove(e) {
			if (!this.state.active || !this.props.allowResize) return;
			const { position: t = 0 } = this.state,
				{
					maxSize: i,
					minSize: r = bn.defaultProps.minSize,
					onChange: s,
					split: o = bn.defaultProps.split,
					step: l
				} = this.props;
			Qa(document, window);
			const a = this.props.primary === 'first',
				u = a ? this.pane1 : this.pane2,
				h = a ? this.pane2 : this.pane1;
			if (!u || !h || !u.getBoundingClientRect) return;
			const c = u,
				f = h,
				d = c.getBoundingClientRect().width,
				p = c.getBoundingClientRect().height,
				O = o === 'vertical' ? e.touches[0].clientX : e.touches[0].clientY,
				m = o === 'vertical' ? d : p;
			let g = t - O;
			if (l) {
				if (Math.abs(g) < l) return;
				g = ~~(g / l) * l;
			}
			let S = a ? g : -g;
			const C = parseInt(window.getComputedStyle(c).order),
				k = parseInt(window.getComputedStyle(f).order);
			C > k && (S = -S);
			let x = i;
			this.splitPane &&
				i !== void 0 &&
				i <= 0 &&
				(o === 'vertical'
					? (x = this.splitPane.getBoundingClientRect().width + i)
					: (x = this.splitPane.getBoundingClientRect().height + i));
			let P = m - S;
			const $ = t - g;
			r && P < r
				? (P = r)
				: x !== void 0 && P > x
					? (P = x)
					: this.setState({ position: $, resized: !0 }),
				s && s(P);
			const T = a ? { pane1Size: P, pane2Size: void 0 } : { pane2Size: P, pane1Size: void 0 };
			this.setState(st({ draggedSize: P }, T));
		}
		onMouseUp() {
			if (!this.state.active || !this.props.allowResize) return;
			const { onDragFinished: e } = this.props,
				{ draggedSize: t } = this.state;
			typeof t < 'u' && typeof e == 'function' && e(t), this.setState({ active: !1 });
		}
		static getSizeUpdate(e, t) {
			const { instanceProps: i } = t;
			if (i.size === e.size && e.size !== void 0) return {};
			const r = e.size !== void 0 ? e.size : Ca(e.defaultSize, e.minSize, e.maxSize, t.draggedSize),
				s =
					e.primary === 'first'
						? { pane1Size: r, pane2Size: void 0 }
						: { pane2Size: r, pane1Size: void 0 };
			return zr(st(st({}, s), typeof e.size > 'u' ? {} : { draggedSize: r }), {
				instanceProps: { size: e.size }
			});
		}
		render() {
			const {
					allowResize: e,
					children: t,
					className: i,
					onResizerClick: r,
					onResizerDoubleClick: s,
					paneClassName: o,
					pane1ClassName: l,
					pane2ClassName: a,
					paneStyle: u,
					pane1Style: h,
					pane2Style: c,
					resizerClassName: f = wo,
					resizerStyle: d,
					split: p,
					style: O
				} = this.props,
				{ pane1Size: m, pane2Size: g } = this.state,
				S = e ? '' : 'disabled',
				C = f && `${f} ${wo}`,
				k = fO(t),
				x = p === 'vertical' ? hO : cO,
				P = O ? st(st({}, x), O) : x,
				$ = ['SplitPane', i, p, S].filter(Boolean).join(' '),
				T = Pa(st(st({}, u), h), Xs),
				w = Pa(st(st({}, u), c), Xs),
				b = ['Pane1', o, l].join(' '),
				A = ['Pane2', o, a].join(' ');
			return D.jsxs('div', {
				'data-testid': 'split-pane',
				className: $,
				style: P,
				ref: (E) => {
					this.splitPane = E;
				},
				children: [
					D.jsx(
						wa,
						{
							className: b,
							eleRef: (E) => {
								this.pane1 = E;
							},
							size: m,
							split: p,
							style: T,
							children: k[0]
						},
						'pane1'
					),
					D.jsx(
						rO,
						{
							className: S,
							onClick: r,
							onDoubleClick: s,
							onMouseDown: this.onMouseDown,
							onTouchStart: this.onTouchStart,
							onTouchEnd: this.onMouseUp,
							resizerClassName: C,
							split: p || 'vertical',
							style: d || Xs
						},
						'resizer'
					),
					D.jsx(
						wa,
						{
							className: A,
							eleRef: (E) => {
								this.pane2 = E;
							},
							size: g,
							split: p,
							style: w,
							children: k[1]
						},
						'pane2'
					)
				]
			});
		}
	};
Pr(Lh, 'defaultProps', {
	allowResize: !0,
	minSize: 50,
	primary: 'first',
	split: 'vertical',
	paneClassName: '',
	pane1ClassName: '',
	pane2ClassName: ''
});
let va = Lh;
function Qa(n, e) {
	var t;
	if (
		'selection' in n &&
		typeof n.selection == 'object' &&
		n.selection &&
		'empty' in n.selection &&
		typeof n.selection.empty == 'function'
	)
		try {
			n.selection.empty();
		} catch {}
	else if (typeof e < 'u' && typeof e.getSelection == 'function')
		try {
			(t = e.getSelection()) == null || t.removeAllRanges();
		} catch {}
}
function Ca(n, e, t, i) {
	if (typeof i == 'number') {
		const r = typeof e == 'number' ? e : 0,
			s = typeof t == 'number' && t >= 0 ? t : 1 / 0;
		return Math.max(r, Math.min(s, i));
	}
	return n !== void 0 ? n : e;
}
function fO(n) {
	return B.Children.toArray(n).filter((e) => e);
}
function dO(n) {
	return n === null || typeof n > 'u' || Object.keys(n).length === 0;
}
function Pa(n, e) {
	return dO(n) ? e : n;
}
class ae {
	lineAt(e) {
		if (e < 0 || e > this.length)
			throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
		return this.lineInner(e, !1, 1, 0);
	}
	line(e) {
		if (e < 1 || e > this.lines)
			throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
		return this.lineInner(e, !0, 1, 0);
	}
	replace(e, t, i) {
		[e, t] = en(this, e, t);
		let r = [];
		return (
			this.decompose(0, e, r, 2),
			i.length && i.decompose(0, i.length, r, 3),
			this.decompose(t, this.length, r, 1),
			$t.from(r, this.length - (t - e) + i.length)
		);
	}
	append(e) {
		return this.replace(this.length, this.length, e);
	}
	slice(e, t = this.length) {
		[e, t] = en(this, e, t);
		let i = [];
		return this.decompose(e, t, i, 0), $t.from(i, t - e);
	}
	eq(e) {
		if (e == this) return !0;
		if (e.length != this.length || e.lines != this.lines) return !1;
		let t = this.scanIdentical(e, 1),
			i = this.length - this.scanIdentical(e, -1),
			r = new Cn(this),
			s = new Cn(e);
		for (let o = t, l = t; ; ) {
			if (
				(r.next(o),
				s.next(o),
				(o = 0),
				r.lineBreak != s.lineBreak || r.done != s.done || r.value != s.value)
			)
				return !1;
			if (((l += r.value.length), r.done || l >= i)) return !0;
		}
	}
	iter(e = 1) {
		return new Cn(this, e);
	}
	iterRange(e, t = this.length) {
		return new Uh(this, e, t);
	}
	iterLines(e, t) {
		let i;
		if (e == null) i = this.iter();
		else {
			t == null && (t = this.lines + 1);
			let r = this.line(e).from;
			i = this.iterRange(
				r,
				Math.max(r, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to)
			);
		}
		return new Gh(i);
	}
	toString() {
		return this.sliceString(0);
	}
	toJSON() {
		let e = [];
		return this.flatten(e), e;
	}
	constructor() {}
	static of(e) {
		if (e.length == 0) throw new RangeError('A document must have at least one line');
		return e.length == 1 && !e[0]
			? ae.empty
			: e.length <= 32
				? new xe(e)
				: $t.from(xe.split(e, []));
	}
}
class xe extends ae {
	constructor(e, t = pO(e)) {
		super(), (this.text = e), (this.length = t);
	}
	get lines() {
		return this.text.length;
	}
	get children() {
		return null;
	}
	lineInner(e, t, i, r) {
		for (let s = 0; ; s++) {
			let o = this.text[s],
				l = r + o.length;
			if ((t ? i : l) >= e) return new OO(r, l, i, o);
			(r = l + 1), i++;
		}
	}
	decompose(e, t, i, r) {
		let s =
			e <= 0 && t >= this.length
				? this
				: new xe(Aa(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
		if (r & 1) {
			let o = i.pop(),
				l = Ar(s.text, o.text.slice(), 0, s.length);
			if (l.length <= 32) i.push(new xe(l, o.length + s.length));
			else {
				let a = l.length >> 1;
				i.push(new xe(l.slice(0, a)), new xe(l.slice(a)));
			}
		} else i.push(s);
	}
	replace(e, t, i) {
		if (!(i instanceof xe)) return super.replace(e, t, i);
		[e, t] = en(this, e, t);
		let r = Ar(this.text, Ar(i.text, Aa(this.text, 0, e)), t),
			s = this.length + i.length - (t - e);
		return r.length <= 32 ? new xe(r, s) : $t.from(xe.split(r, []), s);
	}
	sliceString(
		e,
		t = this.length,
		i = `
`
	) {
		[e, t] = en(this, e, t);
		let r = '';
		for (let s = 0, o = 0; s <= t && o < this.text.length; o++) {
			let l = this.text[o],
				a = s + l.length;
			s > e && o && (r += i),
				e < a && t > s && (r += l.slice(Math.max(0, e - s), t - s)),
				(s = a + 1);
		}
		return r;
	}
	flatten(e) {
		for (let t of this.text) e.push(t);
	}
	scanIdentical() {
		return 0;
	}
	static split(e, t) {
		let i = [],
			r = -1;
		for (let s of e)
			i.push(s), (r += s.length + 1), i.length == 32 && (t.push(new xe(i, r)), (i = []), (r = -1));
		return r > -1 && t.push(new xe(i, r)), t;
	}
}
class $t extends ae {
	constructor(e, t) {
		super(), (this.children = e), (this.length = t), (this.lines = 0);
		for (let i of e) this.lines += i.lines;
	}
	lineInner(e, t, i, r) {
		for (let s = 0; ; s++) {
			let o = this.children[s],
				l = r + o.length,
				a = i + o.lines - 1;
			if ((t ? a : l) >= e) return o.lineInner(e, t, i, r);
			(r = l + 1), (i = a + 1);
		}
	}
	decompose(e, t, i, r) {
		for (let s = 0, o = 0; o <= t && s < this.children.length; s++) {
			let l = this.children[s],
				a = o + l.length;
			if (e <= a && t >= o) {
				let u = r & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
				o >= e && a <= t && !u ? i.push(l) : l.decompose(e - o, t - o, i, u);
			}
			o = a + 1;
		}
	}
	replace(e, t, i) {
		if ((([e, t] = en(this, e, t)), i.lines < this.lines))
			for (let r = 0, s = 0; r < this.children.length; r++) {
				let o = this.children[r],
					l = s + o.length;
				if (e >= s && t <= l) {
					let a = o.replace(e - s, t - s, i),
						u = this.lines - o.lines + a.lines;
					if (a.lines < u >> 4 && a.lines > u >> 6) {
						let h = this.children.slice();
						return (h[r] = a), new $t(h, this.length - (t - e) + i.length);
					}
					return super.replace(s, l, a);
				}
				s = l + 1;
			}
		return super.replace(e, t, i);
	}
	sliceString(
		e,
		t = this.length,
		i = `
`
	) {
		[e, t] = en(this, e, t);
		let r = '';
		for (let s = 0, o = 0; s < this.children.length && o <= t; s++) {
			let l = this.children[s],
				a = o + l.length;
			o > e && s && (r += i), e < a && t > o && (r += l.sliceString(e - o, t - o, i)), (o = a + 1);
		}
		return r;
	}
	flatten(e) {
		for (let t of this.children) t.flatten(e);
	}
	scanIdentical(e, t) {
		if (!(e instanceof $t)) return 0;
		let i = 0,
			[r, s, o, l] =
				t > 0
					? [0, 0, this.children.length, e.children.length]
					: [this.children.length - 1, e.children.length - 1, -1, -1];
		for (; ; r += t, s += t) {
			if (r == o || s == l) return i;
			let a = this.children[r],
				u = e.children[s];
			if (a != u) return i + a.scanIdentical(u, t);
			i += a.length + 1;
		}
	}
	static from(e, t = e.reduce((i, r) => i + r.length + 1, -1)) {
		let i = 0;
		for (let d of e) i += d.lines;
		if (i < 32) {
			let d = [];
			for (let p of e) p.flatten(d);
			return new xe(d, t);
		}
		let r = Math.max(32, i >> 5),
			s = r << 1,
			o = r >> 1,
			l = [],
			a = 0,
			u = -1,
			h = [];
		function c(d) {
			let p;
			if (d.lines > s && d instanceof $t) for (let O of d.children) c(O);
			else
				d.lines > o && (a > o || !a)
					? (f(), l.push(d))
					: d instanceof xe && a && (p = h[h.length - 1]) instanceof xe && d.lines + p.lines <= 32
						? ((a += d.lines),
							(u += d.length + 1),
							(h[h.length - 1] = new xe(p.text.concat(d.text), p.length + 1 + d.length)))
						: (a + d.lines > r && f(), (a += d.lines), (u += d.length + 1), h.push(d));
		}
		function f() {
			a != 0 && (l.push(h.length == 1 ? h[0] : $t.from(h, u)), (u = -1), (a = h.length = 0));
		}
		for (let d of e) c(d);
		return f(), l.length == 1 ? l[0] : new $t(l, t);
	}
}
ae.empty = new xe([''], 0);
function pO(n) {
	let e = -1;
	for (let t of n) e += t.length + 1;
	return e;
}
function Ar(n, e, t = 0, i = 1e9) {
	for (let r = 0, s = 0, o = !0; s < n.length && r <= i; s++) {
		let l = n[s],
			a = r + l.length;
		a >= t &&
			(a > i && (l = l.slice(0, i - r)),
			r < t && (l = l.slice(t - r)),
			o ? ((e[e.length - 1] += l), (o = !1)) : e.push(l)),
			(r = a + 1);
	}
	return e;
}
function Aa(n, e, t) {
	return Ar(n, [''], e, t);
}
class Cn {
	constructor(e, t = 1) {
		(this.dir = t),
			(this.done = !1),
			(this.lineBreak = !1),
			(this.value = ''),
			(this.nodes = [e]),
			(this.offsets = [t > 0 ? 1 : (e instanceof xe ? e.text.length : e.children.length) << 1]);
	}
	nextInner(e, t) {
		for (this.done = this.lineBreak = !1; ; ) {
			let i = this.nodes.length - 1,
				r = this.nodes[i],
				s = this.offsets[i],
				o = s >> 1,
				l = r instanceof xe ? r.text.length : r.children.length;
			if (o == (t > 0 ? l : 0)) {
				if (i == 0) return (this.done = !0), (this.value = ''), this;
				t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
			} else if ((s & 1) == (t > 0 ? 0 : 1)) {
				if (((this.offsets[i] += t), e == 0))
					return (
						(this.lineBreak = !0),
						(this.value = `
`),
						this
					);
				e--;
			} else if (r instanceof xe) {
				let a = r.text[o + (t < 0 ? -1 : 0)];
				if (((this.offsets[i] += t), a.length > Math.max(0, e)))
					return (this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e)), this;
				e -= a.length;
			} else {
				let a = r.children[o + (t < 0 ? -1 : 0)];
				e > a.length
					? ((e -= a.length), (this.offsets[i] += t))
					: (t < 0 && this.offsets[i]--,
						this.nodes.push(a),
						this.offsets.push(
							t > 0 ? 1 : (a instanceof xe ? a.text.length : a.children.length) << 1
						));
			}
		}
	}
	next(e = 0) {
		return (
			e < 0 && (this.nextInner(-e, -this.dir), (e = this.value.length)), this.nextInner(e, this.dir)
		);
	}
}
class Uh {
	constructor(e, t, i) {
		(this.value = ''),
			(this.done = !1),
			(this.cursor = new Cn(e, t > i ? -1 : 1)),
			(this.pos = t > i ? e.length : 0),
			(this.from = Math.min(t, i)),
			(this.to = Math.max(t, i));
	}
	nextInner(e, t) {
		if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
			return (this.value = ''), (this.done = !0), this;
		e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
		let i = t < 0 ? this.pos - this.from : this.to - this.pos;
		e > i && (e = i), (i -= e);
		let { value: r } = this.cursor.next(e);
		return (
			(this.pos += (r.length + e) * t),
			(this.value = r.length <= i ? r : t < 0 ? r.slice(r.length - i) : r.slice(0, i)),
			(this.done = !this.value),
			this
		);
	}
	next(e = 0) {
		return (
			e < 0
				? (e = Math.max(e, this.from - this.pos))
				: e > 0 && (e = Math.min(e, this.to - this.pos)),
			this.nextInner(e, this.cursor.dir)
		);
	}
	get lineBreak() {
		return this.cursor.lineBreak && this.value != '';
	}
}
class Gh {
	constructor(e) {
		(this.inner = e), (this.afterBreak = !0), (this.value = ''), (this.done = !1);
	}
	next(e = 0) {
		let { done: t, lineBreak: i, value: r } = this.inner.next(e);
		return (
			t && this.afterBreak
				? ((this.value = ''), (this.afterBreak = !1))
				: t
					? ((this.done = !0), (this.value = ''))
					: i
						? this.afterBreak
							? (this.value = '')
							: ((this.afterBreak = !0), this.next())
						: ((this.value = r), (this.afterBreak = !1)),
			this
		);
	}
	get lineBreak() {
		return !1;
	}
}
typeof Symbol < 'u' &&
	((ae.prototype[Symbol.iterator] = function () {
		return this.iter();
	}),
	(Cn.prototype[Symbol.iterator] =
		Uh.prototype[Symbol.iterator] =
		Gh.prototype[Symbol.iterator] =
			function () {
				return this;
			}));
class OO {
	constructor(e, t, i, r) {
		(this.from = e), (this.to = t), (this.number = i), (this.text = r);
	}
	get length() {
		return this.to - this.from;
	}
}
function en(n, e, t) {
	return (e = Math.max(0, Math.min(n.length, e))), [e, Math.max(e, Math.min(n.length, t))];
}
let Ii =
	'lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o'
		.split(',')
		.map((n) => (n ? parseInt(n, 36) : 1));
for (let n = 1; n < Ii.length; n++) Ii[n] += Ii[n - 1];
function mO(n) {
	for (let e = 1; e < Ii.length; e += 2) if (Ii[e] > n) return Ii[e - 1] <= n;
	return !1;
}
function $a(n) {
	return n >= 127462 && n <= 127487;
}
const Ea = 8205;
function Me(n, e, t = !0, i = !0) {
	return (t ? Hh : gO)(n, e, i);
}
function Hh(n, e, t) {
	if (e == n.length) return e;
	e && Jh(n.charCodeAt(e)) && Kh(n.charCodeAt(e - 1)) && e--;
	let i = Re(n, e);
	for (e += ot(i); e < n.length; ) {
		let r = Re(n, e);
		if (i == Ea || r == Ea || (t && mO(r))) (e += ot(r)), (i = r);
		else if ($a(r)) {
			let s = 0,
				o = e - 2;
			for (; o >= 0 && $a(Re(n, o)); ) s++, (o -= 2);
			if (s % 2 == 0) break;
			e += 2;
		} else break;
	}
	return e;
}
function gO(n, e, t) {
	for (; e > 0; ) {
		let i = Hh(n, e - 2, t);
		if (i < e) return i;
		e--;
	}
	return 0;
}
function Jh(n) {
	return n >= 56320 && n < 57344;
}
function Kh(n) {
	return n >= 55296 && n < 56320;
}
function Re(n, e) {
	let t = n.charCodeAt(e);
	if (!Kh(t) || e + 1 == n.length) return t;
	let i = n.charCodeAt(e + 1);
	return Jh(i) ? ((t - 55296) << 10) + (i - 56320) + 65536 : t;
}
function $l(n) {
	return n <= 65535
		? String.fromCharCode(n)
		: ((n -= 65536), String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320));
}
function ot(n) {
	return n < 65536 ? 1 : 2;
}
const vo = /\r\n?|\n/;
var Ye = (function (n) {
	return (
		(n[(n.Simple = 0)] = 'Simple'),
		(n[(n.TrackDel = 1)] = 'TrackDel'),
		(n[(n.TrackBefore = 2)] = 'TrackBefore'),
		(n[(n.TrackAfter = 3)] = 'TrackAfter'),
		n
	);
})(Ye || (Ye = {}));
class Ft {
	constructor(e) {
		this.sections = e;
	}
	get length() {
		let e = 0;
		for (let t = 0; t < this.sections.length; t += 2) e += this.sections[t];
		return e;
	}
	get newLength() {
		let e = 0;
		for (let t = 0; t < this.sections.length; t += 2) {
			let i = this.sections[t + 1];
			e += i < 0 ? this.sections[t] : i;
		}
		return e;
	}
	get empty() {
		return this.sections.length == 0 || (this.sections.length == 2 && this.sections[1] < 0);
	}
	iterGaps(e) {
		for (let t = 0, i = 0, r = 0; t < this.sections.length; ) {
			let s = this.sections[t++],
				o = this.sections[t++];
			o < 0 ? (e(i, r, s), (r += s)) : (r += o), (i += s);
		}
	}
	iterChangedRanges(e, t = !1) {
		Qo(this, e, t);
	}
	get invertedDesc() {
		let e = [];
		for (let t = 0; t < this.sections.length; ) {
			let i = this.sections[t++],
				r = this.sections[t++];
			r < 0 ? e.push(i, r) : e.push(r, i);
		}
		return new Ft(e);
	}
	composeDesc(e) {
		return this.empty ? e : e.empty ? this : ec(this, e);
	}
	mapDesc(e, t = !1) {
		return e.empty ? this : Co(this, e, t);
	}
	mapPos(e, t = -1, i = Ye.Simple) {
		let r = 0,
			s = 0;
		for (let o = 0; o < this.sections.length; ) {
			let l = this.sections[o++],
				a = this.sections[o++],
				u = r + l;
			if (a < 0) {
				if (u > e) return s + (e - r);
				s += l;
			} else {
				if (
					i != Ye.Simple &&
					u >= e &&
					((i == Ye.TrackDel && r < e && u > e) ||
						(i == Ye.TrackBefore && r < e) ||
						(i == Ye.TrackAfter && u > e))
				)
					return null;
				if (u > e || (u == e && t < 0 && !l)) return e == r || t < 0 ? s : s + a;
				s += a;
			}
			r = u;
		}
		if (e > r) throw new RangeError(`Position ${e} is out of range for changeset of length ${r}`);
		return s;
	}
	touchesRange(e, t = e) {
		for (let i = 0, r = 0; i < this.sections.length && r <= t; ) {
			let s = this.sections[i++],
				o = this.sections[i++],
				l = r + s;
			if (o >= 0 && r <= t && l >= e) return r < e && l > t ? 'cover' : !0;
			r = l;
		}
		return !1;
	}
	toString() {
		let e = '';
		for (let t = 0; t < this.sections.length; ) {
			let i = this.sections[t++],
				r = this.sections[t++];
			e += (e ? ' ' : '') + i + (r >= 0 ? ':' + r : '');
		}
		return e;
	}
	toJSON() {
		return this.sections;
	}
	static fromJSON(e) {
		if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != 'number'))
			throw new RangeError('Invalid JSON representation of ChangeDesc');
		return new Ft(e);
	}
	static create(e) {
		return new Ft(e);
	}
}
class ve extends Ft {
	constructor(e, t) {
		super(e), (this.inserted = t);
	}
	apply(e) {
		if (this.length != e.length)
			throw new RangeError('Applying change set to a document with the wrong length');
		return Qo(this, (t, i, r, s, o) => (e = e.replace(r, r + (i - t), o)), !1), e;
	}
	mapDesc(e, t = !1) {
		return Co(this, e, t, !0);
	}
	invert(e) {
		let t = this.sections.slice(),
			i = [];
		for (let r = 0, s = 0; r < t.length; r += 2) {
			let o = t[r],
				l = t[r + 1];
			if (l >= 0) {
				(t[r] = l), (t[r + 1] = o);
				let a = r >> 1;
				for (; i.length < a; ) i.push(ae.empty);
				i.push(o ? e.slice(s, s + o) : ae.empty);
			}
			s += o;
		}
		return new ve(t, i);
	}
	compose(e) {
		return this.empty ? e : e.empty ? this : ec(this, e, !0);
	}
	map(e, t = !1) {
		return e.empty ? this : Co(this, e, t, !0);
	}
	iterChanges(e, t = !1) {
		Qo(this, e, t);
	}
	get desc() {
		return Ft.create(this.sections);
	}
	filter(e) {
		let t = [],
			i = [],
			r = [],
			s = new Mn(this);
		e: for (let o = 0, l = 0; ; ) {
			let a = o == e.length ? 1e9 : e[o++];
			for (; l < a || (l == a && s.len == 0); ) {
				if (s.done) break e;
				let h = Math.min(s.len, a - l);
				je(r, h, -1);
				let c = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
				je(t, h, c), c > 0 && ti(i, t, s.text), s.forward(h), (l += h);
			}
			let u = e[o++];
			for (; l < u; ) {
				if (s.done) break e;
				let h = Math.min(s.len, u - l);
				je(t, h, -1), je(r, h, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(h), (l += h);
			}
		}
		return { changes: new ve(t, i), filtered: Ft.create(r) };
	}
	toJSON() {
		let e = [];
		for (let t = 0; t < this.sections.length; t += 2) {
			let i = this.sections[t],
				r = this.sections[t + 1];
			r < 0 ? e.push(i) : r == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
		}
		return e;
	}
	static of(e, t, i) {
		let r = [],
			s = [],
			o = 0,
			l = null;
		function a(h = !1) {
			if (!h && !r.length) return;
			o < t && je(r, t - o, -1);
			let c = new ve(r, s);
			(l = l ? l.compose(c.map(l)) : c), (r = []), (s = []), (o = 0);
		}
		function u(h) {
			if (Array.isArray(h)) for (let c of h) u(c);
			else if (h instanceof ve) {
				if (h.length != t)
					throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${t})`);
				a(), (l = l ? l.compose(h.map(l)) : h);
			} else {
				let { from: c, to: f = c, insert: d } = h;
				if (c > f || c < 0 || f > t)
					throw new RangeError(`Invalid change range ${c} to ${f} (in doc of length ${t})`);
				let p = d ? (typeof d == 'string' ? ae.of(d.split(i || vo)) : d) : ae.empty,
					O = p.length;
				if (c == f && O == 0) return;
				c < o && a(), c > o && je(r, c - o, -1), je(r, f - c, O), ti(s, r, p), (o = f);
			}
		}
		return u(e), a(!l), l;
	}
	static empty(e) {
		return new ve(e ? [e, -1] : [], []);
	}
	static fromJSON(e) {
		if (!Array.isArray(e)) throw new RangeError('Invalid JSON representation of ChangeSet');
		let t = [],
			i = [];
		for (let r = 0; r < e.length; r++) {
			let s = e[r];
			if (typeof s == 'number') t.push(s, -1);
			else {
				if (
					!Array.isArray(s) ||
					typeof s[0] != 'number' ||
					s.some((o, l) => l && typeof o != 'string')
				)
					throw new RangeError('Invalid JSON representation of ChangeSet');
				if (s.length == 1) t.push(s[0], 0);
				else {
					for (; i.length < r; ) i.push(ae.empty);
					(i[r] = ae.of(s.slice(1))), t.push(s[0], i[r].length);
				}
			}
		}
		return new ve(t, i);
	}
	static createSet(e, t) {
		return new ve(e, t);
	}
}
function je(n, e, t, i = !1) {
	if (e == 0 && t <= 0) return;
	let r = n.length - 2;
	r >= 0 && t <= 0 && t == n[r + 1]
		? (n[r] += e)
		: e == 0 && n[r] == 0
			? (n[r + 1] += t)
			: i
				? ((n[r] += e), (n[r + 1] += t))
				: n.push(e, t);
}
function ti(n, e, t) {
	if (t.length == 0) return;
	let i = (e.length - 2) >> 1;
	if (i < n.length) n[n.length - 1] = n[n.length - 1].append(t);
	else {
		for (; n.length < i; ) n.push(ae.empty);
		n.push(t);
	}
}
function Qo(n, e, t) {
	let i = n.inserted;
	for (let r = 0, s = 0, o = 0; o < n.sections.length; ) {
		let l = n.sections[o++],
			a = n.sections[o++];
		if (a < 0) (r += l), (s += l);
		else {
			let u = r,
				h = s,
				c = ae.empty;
			for (
				;
				(u += l),
					(h += a),
					a && i && (c = c.append(i[(o - 2) >> 1])),
					!(t || o == n.sections.length || n.sections[o + 1] < 0);

			)
				(l = n.sections[o++]), (a = n.sections[o++]);
			e(r, u, s, h, c), (r = u), (s = h);
		}
	}
}
function Co(n, e, t, i = !1) {
	let r = [],
		s = i ? [] : null,
		o = new Mn(n),
		l = new Mn(e);
	for (let a = -1; ; )
		if (o.ins == -1 && l.ins == -1) {
			let u = Math.min(o.len, l.len);
			je(r, u, -1), o.forward(u), l.forward(u);
		} else if (
			l.ins >= 0 &&
			(o.ins < 0 || a == o.i || (o.off == 0 && (l.len < o.len || (l.len == o.len && !t))))
		) {
			let u = l.len;
			for (je(r, l.ins, -1); u; ) {
				let h = Math.min(o.len, u);
				o.ins >= 0 && a < o.i && o.len <= h && (je(r, 0, o.ins), s && ti(s, r, o.text), (a = o.i)),
					o.forward(h),
					(u -= h);
			}
			l.next();
		} else if (o.ins >= 0) {
			let u = 0,
				h = o.len;
			for (; h; )
				if (l.ins == -1) {
					let c = Math.min(h, l.len);
					(u += c), (h -= c), l.forward(c);
				} else if (l.ins == 0 && l.len < h) (h -= l.len), l.next();
				else break;
			je(r, u, a < o.i ? o.ins : 0),
				s && a < o.i && ti(s, r, o.text),
				(a = o.i),
				o.forward(o.len - h);
		} else {
			if (o.done && l.done) return s ? ve.createSet(r, s) : Ft.create(r);
			throw new Error('Mismatched change set lengths');
		}
}
function ec(n, e, t = !1) {
	let i = [],
		r = t ? [] : null,
		s = new Mn(n),
		o = new Mn(e);
	for (let l = !1; ; ) {
		if (s.done && o.done) return r ? ve.createSet(i, r) : Ft.create(i);
		if (s.ins == 0) je(i, s.len, 0, l), s.next();
		else if (o.len == 0 && !o.done) je(i, 0, o.ins, l), r && ti(r, i, o.text), o.next();
		else {
			if (s.done || o.done) throw new Error('Mismatched change set lengths');
			{
				let a = Math.min(s.len2, o.len),
					u = i.length;
				if (s.ins == -1) {
					let h = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
					je(i, a, h, l), r && h && ti(r, i, o.text);
				} else
					o.ins == -1
						? (je(i, s.off ? 0 : s.len, a, l), r && ti(r, i, s.textBit(a)))
						: (je(i, s.off ? 0 : s.len, o.off ? 0 : o.ins, l), r && !o.off && ti(r, i, o.text));
				(l = (s.ins > a || (o.ins >= 0 && o.len > a)) && (l || i.length > u)),
					s.forward2(a),
					o.forward(a);
			}
		}
	}
}
class Mn {
	constructor(e) {
		(this.set = e), (this.i = 0), this.next();
	}
	next() {
		let { sections: e } = this.set;
		this.i < e.length
			? ((this.len = e[this.i++]), (this.ins = e[this.i++]))
			: ((this.len = 0), (this.ins = -2)),
			(this.off = 0);
	}
	get done() {
		return this.ins == -2;
	}
	get len2() {
		return this.ins < 0 ? this.len : this.ins;
	}
	get text() {
		let { inserted: e } = this.set,
			t = (this.i - 2) >> 1;
		return t >= e.length ? ae.empty : e[t];
	}
	textBit(e) {
		let { inserted: t } = this.set,
			i = (this.i - 2) >> 1;
		return i >= t.length && !e ? ae.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
	}
	forward(e) {
		e == this.len ? this.next() : ((this.len -= e), (this.off += e));
	}
	forward2(e) {
		this.ins == -1
			? this.forward(e)
			: e == this.ins
				? this.next()
				: ((this.ins -= e), (this.off += e));
	}
}
class Qi {
	constructor(e, t, i) {
		(this.from = e), (this.to = t), (this.flags = i);
	}
	get anchor() {
		return this.flags & 32 ? this.to : this.from;
	}
	get head() {
		return this.flags & 32 ? this.from : this.to;
	}
	get empty() {
		return this.from == this.to;
	}
	get assoc() {
		return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
	}
	get bidiLevel() {
		let e = this.flags & 7;
		return e == 7 ? null : e;
	}
	get goalColumn() {
		let e = this.flags >> 6;
		return e == 16777215 ? void 0 : e;
	}
	map(e, t = -1) {
		let i, r;
		return (
			this.empty
				? (i = r = e.mapPos(this.from, t))
				: ((i = e.mapPos(this.from, 1)), (r = e.mapPos(this.to, -1))),
			i == this.from && r == this.to ? this : new Qi(i, r, this.flags)
		);
	}
	extend(e, t = e) {
		if (e <= this.anchor && t >= this.anchor) return Z.range(e, t);
		let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
		return Z.range(this.anchor, i);
	}
	eq(e, t = !1) {
		return (
			this.anchor == e.anchor && this.head == e.head && (!t || !this.empty || this.assoc == e.assoc)
		);
	}
	toJSON() {
		return { anchor: this.anchor, head: this.head };
	}
	static fromJSON(e) {
		if (!e || typeof e.anchor != 'number' || typeof e.head != 'number')
			throw new RangeError('Invalid JSON representation for SelectionRange');
		return Z.range(e.anchor, e.head);
	}
	static create(e, t, i) {
		return new Qi(e, t, i);
	}
}
class Z {
	constructor(e, t) {
		(this.ranges = e), (this.mainIndex = t);
	}
	map(e, t = -1) {
		return e.empty
			? this
			: Z.create(
					this.ranges.map((i) => i.map(e, t)),
					this.mainIndex
				);
	}
	eq(e, t = !1) {
		if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex) return !1;
		for (let i = 0; i < this.ranges.length; i++) if (!this.ranges[i].eq(e.ranges[i], t)) return !1;
		return !0;
	}
	get main() {
		return this.ranges[this.mainIndex];
	}
	asSingle() {
		return this.ranges.length == 1 ? this : new Z([this.main], 0);
	}
	addRange(e, t = !0) {
		return Z.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
	}
	replaceRange(e, t = this.mainIndex) {
		let i = this.ranges.slice();
		return (i[t] = e), Z.create(i, this.mainIndex);
	}
	toJSON() {
		return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
	}
	static fromJSON(e) {
		if (!e || !Array.isArray(e.ranges) || typeof e.main != 'number' || e.main >= e.ranges.length)
			throw new RangeError('Invalid JSON representation for EditorSelection');
		return new Z(
			e.ranges.map((t) => Qi.fromJSON(t)),
			e.main
		);
	}
	static single(e, t = e) {
		return new Z([Z.range(e, t)], 0);
	}
	static create(e, t = 0) {
		if (e.length == 0) throw new RangeError('A selection needs at least one range');
		for (let i = 0, r = 0; r < e.length; r++) {
			let s = e[r];
			if (s.empty ? s.from <= i : s.from < i) return Z.normalized(e.slice(), t);
			i = s.to;
		}
		return new Z(e, t);
	}
	static cursor(e, t = 0, i, r) {
		return Qi.create(
			e,
			e,
			(t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | ((r ?? 16777215) << 6)
		);
	}
	static range(e, t, i, r) {
		let s = ((i ?? 16777215) << 6) | (r == null ? 7 : Math.min(6, r));
		return t < e ? Qi.create(t, e, 48 | s) : Qi.create(e, t, (t > e ? 8 : 0) | s);
	}
	static normalized(e, t = 0) {
		let i = e[t];
		e.sort((r, s) => r.from - s.from), (t = e.indexOf(i));
		for (let r = 1; r < e.length; r++) {
			let s = e[r],
				o = e[r - 1];
			if (s.empty ? s.from <= o.to : s.from < o.to) {
				let l = o.from,
					a = Math.max(s.to, o.to);
				r <= t && t--, e.splice(--r, 2, s.anchor > s.head ? Z.range(a, l) : Z.range(l, a));
			}
		}
		return new Z(e, t);
	}
}
function tc(n, e) {
	for (let t of n.ranges)
		if (t.to > e) throw new RangeError('Selection points outside of document');
}
let El = 0;
class X {
	constructor(e, t, i, r, s) {
		(this.combine = e),
			(this.compareInput = t),
			(this.compare = i),
			(this.isStatic = r),
			(this.id = El++),
			(this.default = e([])),
			(this.extensions = typeof s == 'function' ? s(this) : s);
	}
	get reader() {
		return this;
	}
	static define(e = {}) {
		return new X(
			e.combine || ((t) => t),
			e.compareInput || ((t, i) => t === i),
			e.compare || (e.combine ? (t, i) => t === i : Zl),
			!!e.static,
			e.enables
		);
	}
	of(e) {
		return new $r([], this, 0, e);
	}
	compute(e, t) {
		if (this.isStatic) throw new Error("Can't compute a static facet");
		return new $r(e, this, 1, t);
	}
	computeN(e, t) {
		if (this.isStatic) throw new Error("Can't compute a static facet");
		return new $r(e, this, 2, t);
	}
	from(e, t) {
		return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
	}
}
function Zl(n, e) {
	return n == e || (n.length == e.length && n.every((t, i) => t === e[i]));
}
class $r {
	constructor(e, t, i, r) {
		(this.dependencies = e), (this.facet = t), (this.type = i), (this.value = r), (this.id = El++);
	}
	dynamicSlot(e) {
		var t;
		let i = this.value,
			r = this.facet.compareInput,
			s = this.id,
			o = e[s] >> 1,
			l = this.type == 2,
			a = !1,
			u = !1,
			h = [];
		for (let c of this.dependencies)
			c == 'doc'
				? (a = !0)
				: c == 'selection'
					? (u = !0)
					: (((t = e[c.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && h.push(e[c.id]);
		return {
			create(c) {
				return (c.values[o] = i(c)), 1;
			},
			update(c, f) {
				if ((a && f.docChanged) || (u && (f.docChanged || f.selection)) || Po(c, h)) {
					let d = i(c);
					if (l ? !Za(d, c.values[o], r) : !r(d, c.values[o])) return (c.values[o] = d), 1;
				}
				return 0;
			},
			reconfigure: (c, f) => {
				let d,
					p = f.config.address[s];
				if (p != null) {
					let O = qr(f, p);
					if (
						this.dependencies.every((m) =>
							m instanceof X
								? f.facet(m) === c.facet(m)
								: m instanceof Be
									? f.field(m, !1) == c.field(m, !1)
									: !0
						) ||
						(l ? Za((d = i(c)), O, r) : r((d = i(c)), O))
					)
						return (c.values[o] = O), 0;
				} else d = i(c);
				return (c.values[o] = d), 1;
			}
		};
	}
}
function Za(n, e, t) {
	if (n.length != e.length) return !1;
	for (let i = 0; i < n.length; i++) if (!t(n[i], e[i])) return !1;
	return !0;
}
function Po(n, e) {
	let t = !1;
	for (let i of e) Pn(n, i) & 1 && (t = !0);
	return t;
}
function yO(n, e, t) {
	let i = t.map((a) => n[a.id]),
		r = t.map((a) => a.type),
		s = i.filter((a) => !(a & 1)),
		o = n[e.id] >> 1;
	function l(a) {
		let u = [];
		for (let h = 0; h < i.length; h++) {
			let c = qr(a, i[h]);
			if (r[h] == 2) for (let f of c) u.push(f);
			else u.push(c);
		}
		return e.combine(u);
	}
	return {
		create(a) {
			for (let u of i) Pn(a, u);
			return (a.values[o] = l(a)), 1;
		},
		update(a, u) {
			if (!Po(a, s)) return 0;
			let h = l(a);
			return e.compare(h, a.values[o]) ? 0 : ((a.values[o] = h), 1);
		},
		reconfigure(a, u) {
			let h = Po(a, i),
				c = u.config.facets[e.id],
				f = u.facet(e);
			if (c && !h && Zl(t, c)) return (a.values[o] = f), 0;
			let d = l(a);
			return e.compare(d, f) ? ((a.values[o] = f), 0) : ((a.values[o] = d), 1);
		}
	};
}
const Ra = X.define({ static: !0 });
class Be {
	constructor(e, t, i, r, s) {
		(this.id = e),
			(this.createF = t),
			(this.updateF = i),
			(this.compareF = r),
			(this.spec = s),
			(this.provides = void 0);
	}
	static define(e) {
		let t = new Be(El++, e.create, e.update, e.compare || ((i, r) => i === r), e);
		return e.provide && (t.provides = e.provide(t)), t;
	}
	create(e) {
		let t = e.facet(Ra).find((i) => i.field == this);
		return ((t == null ? void 0 : t.create) || this.createF)(e);
	}
	slot(e) {
		let t = e[this.id] >> 1;
		return {
			create: (i) => ((i.values[t] = this.create(i)), 1),
			update: (i, r) => {
				let s = i.values[t],
					o = this.updateF(s, r);
				return this.compareF(s, o) ? 0 : ((i.values[t] = o), 1);
			},
			reconfigure: (i, r) =>
				r.config.address[this.id] != null
					? ((i.values[t] = r.field(this)), 0)
					: ((i.values[t] = this.create(i)), 1)
		};
	}
	init(e) {
		return [this, Ra.of({ field: this, create: e })];
	}
	get extension() {
		return this;
	}
}
const ki = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function dn(n) {
	return (e) => new ic(e, n);
}
const Fi = {
	highest: dn(ki.highest),
	high: dn(ki.high),
	default: dn(ki.default),
	low: dn(ki.low),
	lowest: dn(ki.lowest)
};
class ic {
	constructor(e, t) {
		(this.inner = e), (this.prec = t);
	}
}
class ms {
	of(e) {
		return new Ao(this, e);
	}
	reconfigure(e) {
		return ms.reconfigure.of({ compartment: this, extension: e });
	}
	get(e) {
		return e.config.compartments.get(this);
	}
}
class Ao {
	constructor(e, t) {
		(this.compartment = e), (this.inner = t);
	}
}
class Xr {
	constructor(e, t, i, r, s, o) {
		for (
			this.base = e,
				this.compartments = t,
				this.dynamicSlots = i,
				this.address = r,
				this.staticValues = s,
				this.facets = o,
				this.statusTemplate = [];
			this.statusTemplate.length < i.length;

		)
			this.statusTemplate.push(0);
	}
	staticFacet(e) {
		let t = this.address[e.id];
		return t == null ? e.default : this.staticValues[t >> 1];
	}
	static resolve(e, t, i) {
		let r = [],
			s = Object.create(null),
			o = new Map();
		for (let f of bO(e, t, o))
			f instanceof Be ? r.push(f) : (s[f.facet.id] || (s[f.facet.id] = [])).push(f);
		let l = Object.create(null),
			a = [],
			u = [];
		for (let f of r) (l[f.id] = u.length << 1), u.push((d) => f.slot(d));
		let h = i == null ? void 0 : i.config.facets;
		for (let f in s) {
			let d = s[f],
				p = d[0].facet,
				O = (h && h[f]) || [];
			if (d.every((m) => m.type == 0))
				if (((l[p.id] = (a.length << 1) | 1), Zl(O, d))) a.push(i.facet(p));
				else {
					let m = p.combine(d.map((g) => g.value));
					a.push(i && p.compare(m, i.facet(p)) ? i.facet(p) : m);
				}
			else {
				for (let m of d)
					m.type == 0
						? ((l[m.id] = (a.length << 1) | 1), a.push(m.value))
						: ((l[m.id] = u.length << 1), u.push((g) => m.dynamicSlot(g)));
				(l[p.id] = u.length << 1), u.push((m) => yO(m, p, d));
			}
		}
		let c = u.map((f) => f(l));
		return new Xr(e, o, c, l, a, s);
	}
}
function bO(n, e, t) {
	let i = [[], [], [], [], []],
		r = new Map();
	function s(o, l) {
		let a = r.get(o);
		if (a != null) {
			if (a <= l) return;
			let u = i[a].indexOf(o);
			u > -1 && i[a].splice(u, 1), o instanceof Ao && t.delete(o.compartment);
		}
		if ((r.set(o, l), Array.isArray(o))) for (let u of o) s(u, l);
		else if (o instanceof Ao) {
			if (t.has(o.compartment)) throw new RangeError('Duplicate use of compartment in extensions');
			let u = e.get(o.compartment) || o.inner;
			t.set(o.compartment, u), s(u, l);
		} else if (o instanceof ic) s(o.inner, o.prec);
		else if (o instanceof Be) i[l].push(o), o.provides && s(o.provides, l);
		else if (o instanceof $r) i[l].push(o), o.facet.extensions && s(o.facet.extensions, ki.default);
		else {
			let u = o.extension;
			if (!u)
				throw new Error(
					`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`
				);
			s(u, l);
		}
	}
	return s(n, ki.default), i.reduce((o, l) => o.concat(l));
}
function Pn(n, e) {
	if (e & 1) return 2;
	let t = e >> 1,
		i = n.status[t];
	if (i == 4) throw new Error('Cyclic dependency between fields and/or facets');
	if (i & 2) return i;
	n.status[t] = 4;
	let r = n.computeSlot(n, n.config.dynamicSlots[t]);
	return (n.status[t] = 2 | r);
}
function qr(n, e) {
	return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1];
}
const nc = X.define(),
	$o = X.define({ combine: (n) => n.some((e) => e), static: !0 }),
	rc = X.define({ combine: (n) => (n.length ? n[0] : void 0), static: !0 }),
	sc = X.define(),
	oc = X.define(),
	lc = X.define(),
	ac = X.define({ combine: (n) => (n.length ? n[0] : !1) });
class Mt {
	constructor(e, t) {
		(this.type = e), (this.value = t);
	}
	static define() {
		return new xO();
	}
}
class xO {
	of(e) {
		return new Mt(this, e);
	}
}
class DO {
	constructor(e) {
		this.map = e;
	}
	of(e) {
		return new te(this, e);
	}
}
class te {
	constructor(e, t) {
		(this.type = e), (this.value = t);
	}
	map(e) {
		let t = this.type.map(this.value, e);
		return t === void 0 ? void 0 : t == this.value ? this : new te(this.type, t);
	}
	is(e) {
		return this.type == e;
	}
	static define(e = {}) {
		return new DO(e.map || ((t) => t));
	}
	static mapEffects(e, t) {
		if (!e.length) return e;
		let i = [];
		for (let r of e) {
			let s = r.map(t);
			s && i.push(s);
		}
		return i;
	}
}
te.reconfigure = te.define();
te.appendConfig = te.define();
class Ce {
	constructor(e, t, i, r, s, o) {
		(this.startState = e),
			(this.changes = t),
			(this.selection = i),
			(this.effects = r),
			(this.annotations = s),
			(this.scrollIntoView = o),
			(this._doc = null),
			(this._state = null),
			i && tc(i, t.newLength),
			s.some((l) => l.type == Ce.time) || (this.annotations = s.concat(Ce.time.of(Date.now())));
	}
	static create(e, t, i, r, s, o) {
		return new Ce(e, t, i, r, s, o);
	}
	get newDoc() {
		return this._doc || (this._doc = this.changes.apply(this.startState.doc));
	}
	get newSelection() {
		return this.selection || this.startState.selection.map(this.changes);
	}
	get state() {
		return this._state || this.startState.applyTransaction(this), this._state;
	}
	annotation(e) {
		for (let t of this.annotations) if (t.type == e) return t.value;
	}
	get docChanged() {
		return !this.changes.empty;
	}
	get reconfigured() {
		return this.startState.config != this.state.config;
	}
	isUserEvent(e) {
		let t = this.annotation(Ce.userEvent);
		return !!(
			t &&
			(t == e || (t.length > e.length && t.slice(0, e.length) == e && t[e.length] == '.'))
		);
	}
}
Ce.time = Mt.define();
Ce.userEvent = Mt.define();
Ce.addToHistory = Mt.define();
Ce.remote = Mt.define();
function SO(n, e) {
	let t = [];
	for (let i = 0, r = 0; ; ) {
		let s, o;
		if (i < n.length && (r == e.length || e[r] >= n[i])) (s = n[i++]), (o = n[i++]);
		else if (r < e.length) (s = e[r++]), (o = e[r++]);
		else return t;
		!t.length || t[t.length - 1] < s ? t.push(s, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
	}
}
function uc(n, e, t) {
	var i;
	let r, s, o;
	return (
		t
			? ((r = e.changes), (s = ve.empty(e.changes.length)), (o = n.changes.compose(e.changes)))
			: ((r = e.changes.map(n.changes)),
				(s = n.changes.mapDesc(e.changes, !0)),
				(o = n.changes.compose(r))),
		{
			changes: o,
			selection: e.selection
				? e.selection.map(s)
				: (i = n.selection) === null || i === void 0
					? void 0
					: i.map(r),
			effects: te.mapEffects(n.effects, r).concat(te.mapEffects(e.effects, s)),
			annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations,
			scrollIntoView: n.scrollIntoView || e.scrollIntoView
		}
	);
}
function Eo(n, e, t) {
	let i = e.selection,
		r = Li(e.annotations);
	return (
		e.userEvent && (r = r.concat(Ce.userEvent.of(e.userEvent))),
		{
			changes: e.changes instanceof ve ? e.changes : ve.of(e.changes || [], t, n.facet(rc)),
			selection: i && (i instanceof Z ? i : Z.single(i.anchor, i.head)),
			effects: Li(e.effects),
			annotations: r,
			scrollIntoView: !!e.scrollIntoView
		}
	);
}
function hc(n, e, t) {
	let i = Eo(n, e.length ? e[0] : {}, n.doc.length);
	e.length && e[0].filter === !1 && (t = !1);
	for (let s = 1; s < e.length; s++) {
		e[s].filter === !1 && (t = !1);
		let o = !!e[s].sequential;
		i = uc(i, Eo(n, e[s], o ? i.changes.newLength : n.doc.length), o);
	}
	let r = Ce.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
	return kO(t ? wO(r) : r);
}
function wO(n) {
	let e = n.startState,
		t = !0;
	for (let r of e.facet(sc)) {
		let s = r(n);
		if (s === !1) {
			t = !1;
			break;
		}
		Array.isArray(s) && (t = t === !0 ? s : SO(t, s));
	}
	if (t !== !0) {
		let r, s;
		if (t === !1) (s = n.changes.invertedDesc), (r = ve.empty(e.doc.length));
		else {
			let o = n.changes.filter(t);
			(r = o.changes), (s = o.filtered.mapDesc(o.changes).invertedDesc);
		}
		n = Ce.create(
			e,
			r,
			n.selection && n.selection.map(s),
			te.mapEffects(n.effects, s),
			n.annotations,
			n.scrollIntoView
		);
	}
	let i = e.facet(oc);
	for (let r = i.length - 1; r >= 0; r--) {
		let s = i[r](n);
		s instanceof Ce
			? (n = s)
			: Array.isArray(s) && s.length == 1 && s[0] instanceof Ce
				? (n = s[0])
				: (n = hc(e, Li(s), !1));
	}
	return n;
}
function kO(n) {
	let e = n.startState,
		t = e.facet(lc),
		i = n;
	for (let r = t.length - 1; r >= 0; r--) {
		let s = t[r](n);
		s && Object.keys(s).length && (i = uc(i, Eo(e, s, n.changes.newLength), !0));
	}
	return i == n
		? n
		: Ce.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
}
const vO = [];
function Li(n) {
	return n == null ? vO : Array.isArray(n) ? n : [n];
}
var ye = (function (n) {
	return (n[(n.Word = 0)] = 'Word'), (n[(n.Space = 1)] = 'Space'), (n[(n.Other = 2)] = 'Other'), n;
})(ye || (ye = {}));
const QO =
	/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Zo;
try {
	Zo = new RegExp('[\\p{Alphabetic}\\p{Number}_]', 'u');
} catch {}
function CO(n) {
	if (Zo) return Zo.test(n);
	for (let e = 0; e < n.length; e++) {
		let t = n[e];
		if (/\w/.test(t) || (t > '' && (t.toUpperCase() != t.toLowerCase() || QO.test(t)))) return !0;
	}
	return !1;
}
function PO(n) {
	return (e) => {
		if (!/\S/.test(e)) return ye.Space;
		if (CO(e)) return ye.Word;
		for (let t = 0; t < n.length; t++) if (e.indexOf(n[t]) > -1) return ye.Word;
		return ye.Other;
	};
}
class oe {
	constructor(e, t, i, r, s, o) {
		(this.config = e),
			(this.doc = t),
			(this.selection = i),
			(this.values = r),
			(this.status = e.statusTemplate.slice()),
			(this.computeSlot = s),
			o && (o._state = this);
		for (let l = 0; l < this.config.dynamicSlots.length; l++) Pn(this, l << 1);
		this.computeSlot = null;
	}
	field(e, t = !0) {
		let i = this.config.address[e.id];
		if (i == null) {
			if (t) throw new RangeError('Field is not present in this state');
			return;
		}
		return Pn(this, i), qr(this, i);
	}
	update(...e) {
		return hc(this, e, !0);
	}
	applyTransaction(e) {
		let t = this.config,
			{ base: i, compartments: r } = t;
		for (let l of e.effects)
			l.is(ms.reconfigure)
				? (t && ((r = new Map()), t.compartments.forEach((a, u) => r.set(u, a)), (t = null)),
					r.set(l.value.compartment, l.value.extension))
				: l.is(te.reconfigure)
					? ((t = null), (i = l.value))
					: l.is(te.appendConfig) && ((t = null), (i = Li(i).concat(l.value)));
		let s;
		t
			? (s = e.startState.values.slice())
			: ((t = Xr.resolve(i, r, this)),
				(s = new oe(
					t,
					this.doc,
					this.selection,
					t.dynamicSlots.map(() => null),
					(a, u) => u.reconfigure(a, this),
					null
				).values));
		let o = e.startState.facet($o) ? e.newSelection : e.newSelection.asSingle();
		new oe(t, e.newDoc, o, s, (l, a) => a.update(l, e), e);
	}
	replaceSelection(e) {
		return (
			typeof e == 'string' && (e = this.toText(e)),
			this.changeByRange((t) => ({
				changes: { from: t.from, to: t.to, insert: e },
				range: Z.cursor(t.from + e.length)
			}))
		);
	}
	changeByRange(e) {
		let t = this.selection,
			i = e(t.ranges[0]),
			r = this.changes(i.changes),
			s = [i.range],
			o = Li(i.effects);
		for (let l = 1; l < t.ranges.length; l++) {
			let a = e(t.ranges[l]),
				u = this.changes(a.changes),
				h = u.map(r);
			for (let f = 0; f < l; f++) s[f] = s[f].map(h);
			let c = r.mapDesc(u, !0);
			s.push(a.range.map(c)),
				(r = r.compose(h)),
				(o = te.mapEffects(o, h).concat(te.mapEffects(Li(a.effects), c)));
		}
		return { changes: r, selection: Z.create(s, t.mainIndex), effects: o };
	}
	changes(e = []) {
		return e instanceof ve ? e : ve.of(e, this.doc.length, this.facet(oe.lineSeparator));
	}
	toText(e) {
		return ae.of(e.split(this.facet(oe.lineSeparator) || vo));
	}
	sliceDoc(e = 0, t = this.doc.length) {
		return this.doc.sliceString(e, t, this.lineBreak);
	}
	facet(e) {
		let t = this.config.address[e.id];
		return t == null ? e.default : (Pn(this, t), qr(this, t));
	}
	toJSON(e) {
		let t = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
		if (e)
			for (let i in e) {
				let r = e[i];
				r instanceof Be &&
					this.config.address[r.id] != null &&
					(t[i] = r.spec.toJSON(this.field(e[i]), this));
			}
		return t;
	}
	static fromJSON(e, t = {}, i) {
		if (!e || typeof e.doc != 'string')
			throw new RangeError('Invalid JSON representation for EditorState');
		let r = [];
		if (i) {
			for (let s in i)
				if (Object.prototype.hasOwnProperty.call(e, s)) {
					let o = i[s],
						l = e[s];
					r.push(o.init((a) => o.spec.fromJSON(l, a)));
				}
		}
		return oe.create({
			doc: e.doc,
			selection: Z.fromJSON(e.selection),
			extensions: t.extensions ? r.concat([t.extensions]) : r
		});
	}
	static create(e = {}) {
		let t = Xr.resolve(e.extensions || [], new Map()),
			i =
				e.doc instanceof ae
					? e.doc
					: ae.of((e.doc || '').split(t.staticFacet(oe.lineSeparator) || vo)),
			r = e.selection
				? e.selection instanceof Z
					? e.selection
					: Z.single(e.selection.anchor, e.selection.head)
				: Z.single(0);
		return (
			tc(r, i.length),
			t.staticFacet($o) || (r = r.asSingle()),
			new oe(
				t,
				i,
				r,
				t.dynamicSlots.map(() => null),
				(s, o) => o.create(s),
				null
			)
		);
	}
	get tabSize() {
		return this.facet(oe.tabSize);
	}
	get lineBreak() {
		return (
			this.facet(oe.lineSeparator) ||
			`
`
		);
	}
	get readOnly() {
		return this.facet(ac);
	}
	phrase(e, ...t) {
		for (let i of this.facet(oe.phrases))
			if (Object.prototype.hasOwnProperty.call(i, e)) {
				e = i[e];
				break;
			}
		return (
			t.length &&
				(e = e.replace(/\$(\$|\d*)/g, (i, r) => {
					if (r == '$') return '$';
					let s = +(r || 1);
					return !s || s > t.length ? i : t[s - 1];
				})),
			e
		);
	}
	languageDataAt(e, t, i = -1) {
		let r = [];
		for (let s of this.facet(nc))
			for (let o of s(this, t, i)) Object.prototype.hasOwnProperty.call(o, e) && r.push(o[e]);
		return r;
	}
	charCategorizer(e) {
		return PO(this.languageDataAt('wordChars', e).join(''));
	}
	wordAt(e) {
		let { text: t, from: i, length: r } = this.doc.lineAt(e),
			s = this.charCategorizer(e),
			o = e - i,
			l = e - i;
		for (; o > 0; ) {
			let a = Me(t, o, !1);
			if (s(t.slice(a, o)) != ye.Word) break;
			o = a;
		}
		for (; l < r; ) {
			let a = Me(t, l);
			if (s(t.slice(l, a)) != ye.Word) break;
			l = a;
		}
		return o == l ? null : Z.range(o + i, l + i);
	}
}
oe.allowMultipleSelections = $o;
oe.tabSize = X.define({ combine: (n) => (n.length ? n[0] : 4) });
oe.lineSeparator = rc;
oe.readOnly = ac;
oe.phrases = X.define({
	compare(n, e) {
		let t = Object.keys(n),
			i = Object.keys(e);
		return t.length == i.length && t.every((r) => n[r] == e[r]);
	}
});
oe.languageData = nc;
oe.changeFilter = sc;
oe.transactionFilter = oc;
oe.transactionExtender = lc;
ms.reconfigure = te.define();
function Bt(n, e, t = {}) {
	let i = {};
	for (let r of n)
		for (let s of Object.keys(r)) {
			let o = r[s],
				l = i[s];
			if (l === void 0) i[s] = o;
			else if (!(l === o || o === void 0))
				if (Object.hasOwnProperty.call(t, s)) i[s] = t[s](l, o);
				else throw new Error('Config merge conflict for field ' + s);
		}
	for (let r in e) i[r] === void 0 && (i[r] = e[r]);
	return i;
}
class $i {
	eq(e) {
		return this == e;
	}
	range(e, t = e) {
		return Ro.create(e, t, this);
	}
}
$i.prototype.startSide = $i.prototype.endSide = 0;
$i.prototype.point = !1;
$i.prototype.mapMode = Ye.TrackDel;
let Ro = class cc {
	constructor(e, t, i) {
		(this.from = e), (this.to = t), (this.value = i);
	}
	static create(e, t, i) {
		return new cc(e, t, i);
	}
};
function To(n, e) {
	return n.from - e.from || n.value.startSide - e.value.startSide;
}
class Rl {
	constructor(e, t, i, r) {
		(this.from = e), (this.to = t), (this.value = i), (this.maxPoint = r);
	}
	get length() {
		return this.to[this.to.length - 1];
	}
	findIndex(e, t, i, r = 0) {
		let s = i ? this.to : this.from;
		for (let o = r, l = s.length; ; ) {
			if (o == l) return o;
			let a = (o + l) >> 1,
				u = s[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
			if (a == o) return u >= 0 ? o : l;
			u >= 0 ? (l = a) : (o = a + 1);
		}
	}
	between(e, t, i, r) {
		for (let s = this.findIndex(t, -1e9, !0), o = this.findIndex(i, 1e9, !1, s); s < o; s++)
			if (r(this.from[s] + e, this.to[s] + e, this.value[s]) === !1) return !1;
	}
	map(e, t) {
		let i = [],
			r = [],
			s = [],
			o = -1,
			l = -1;
		for (let a = 0; a < this.value.length; a++) {
			let u = this.value[a],
				h = this.from[a] + e,
				c = this.to[a] + e,
				f,
				d;
			if (h == c) {
				let p = t.mapPos(h, u.startSide, u.mapMode);
				if (
					p == null ||
					((f = d = p), u.startSide != u.endSide && ((d = t.mapPos(h, u.endSide)), d < f))
				)
					continue;
			} else if (
				((f = t.mapPos(h, u.startSide)),
				(d = t.mapPos(c, u.endSide)),
				f > d || (f == d && u.startSide > 0 && u.endSide <= 0))
			)
				continue;
			(d - f || u.endSide - u.startSide) < 0 ||
				(o < 0 && (o = f),
				u.point && (l = Math.max(l, d - f)),
				i.push(u),
				r.push(f - o),
				s.push(d - o));
		}
		return { mapped: i.length ? new Rl(r, s, i, l) : null, pos: o };
	}
}
class le {
	constructor(e, t, i, r) {
		(this.chunkPos = e), (this.chunk = t), (this.nextLayer = i), (this.maxPoint = r);
	}
	static create(e, t, i, r) {
		return new le(e, t, i, r);
	}
	get length() {
		let e = this.chunk.length - 1;
		return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
	}
	get size() {
		if (this.isEmpty) return 0;
		let e = this.nextLayer.size;
		for (let t of this.chunk) e += t.value.length;
		return e;
	}
	chunkEnd(e) {
		return this.chunkPos[e] + this.chunk[e].length;
	}
	update(e) {
		let { add: t = [], sort: i = !1, filterFrom: r = 0, filterTo: s = this.length } = e,
			o = e.filter;
		if (t.length == 0 && !o) return this;
		if ((i && (t = t.slice().sort(To)), this.isEmpty)) return t.length ? le.of(t) : this;
		let l = new fc(this, null, -1).goto(0),
			a = 0,
			u = [],
			h = new li();
		for (; l.value || a < t.length; )
			if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
				let c = t[a++];
				h.addInner(c.from, c.to, c.value) || u.push(c);
			} else
				l.rangeIndex == 1 &&
				l.chunkIndex < this.chunk.length &&
				(a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) &&
				(!o || r > this.chunkEnd(l.chunkIndex) || s < this.chunkPos[l.chunkIndex]) &&
				h.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex])
					? l.nextChunk()
					: ((!o || r > l.to || s < l.from || o(l.from, l.to, l.value)) &&
							(h.addInner(l.from, l.to, l.value) || u.push(Ro.create(l.from, l.to, l.value))),
						l.next());
		return h.finishInner(
			this.nextLayer.isEmpty && !u.length
				? le.empty
				: this.nextLayer.update({
						add: u,
						filter: o,
						filterFrom: r,
						filterTo: s
					})
		);
	}
	map(e) {
		if (e.empty || this.isEmpty) return this;
		let t = [],
			i = [],
			r = -1;
		for (let o = 0; o < this.chunk.length; o++) {
			let l = this.chunkPos[o],
				a = this.chunk[o],
				u = e.touchesRange(l, l + a.length);
			if (u === !1) (r = Math.max(r, a.maxPoint)), t.push(a), i.push(e.mapPos(l));
			else if (u === !0) {
				let { mapped: h, pos: c } = a.map(l, e);
				h && ((r = Math.max(r, h.maxPoint)), t.push(h), i.push(c));
			}
		}
		let s = this.nextLayer.map(e);
		return t.length == 0 ? s : new le(i, t, s || le.empty, r);
	}
	between(e, t, i) {
		if (!this.isEmpty) {
			for (let r = 0; r < this.chunk.length; r++) {
				let s = this.chunkPos[r],
					o = this.chunk[r];
				if (t >= s && e <= s + o.length && o.between(s, e - s, t - s, i) === !1) return;
			}
			this.nextLayer.between(e, t, i);
		}
	}
	iter(e = 0) {
		return Bn.from([this]).goto(e);
	}
	get isEmpty() {
		return this.nextLayer == this;
	}
	static iter(e, t = 0) {
		return Bn.from(e).goto(t);
	}
	static compare(e, t, i, r, s = -1) {
		let o = e.filter((c) => c.maxPoint > 0 || (!c.isEmpty && c.maxPoint >= s)),
			l = t.filter((c) => c.maxPoint > 0 || (!c.isEmpty && c.maxPoint >= s)),
			a = Ta(o, l, i),
			u = new pn(o, a, s),
			h = new pn(l, a, s);
		i.iterGaps((c, f, d) => Fa(u, c, h, f, d, r)), i.empty && i.length == 0 && Fa(u, 0, h, 0, 0, r);
	}
	static eq(e, t, i = 0, r) {
		r == null && (r = 999999999);
		let s = e.filter((h) => !h.isEmpty && t.indexOf(h) < 0),
			o = t.filter((h) => !h.isEmpty && e.indexOf(h) < 0);
		if (s.length != o.length) return !1;
		if (!s.length) return !0;
		let l = Ta(s, o),
			a = new pn(s, l, 0).goto(i),
			u = new pn(o, l, 0).goto(i);
		for (;;) {
			if (
				a.to != u.to ||
				!Fo(a.active, u.active) ||
				(a.point && (!u.point || !a.point.eq(u.point)))
			)
				return !1;
			if (a.to > r) return !0;
			a.next(), u.next();
		}
	}
	static spans(e, t, i, r, s = -1) {
		let o = new pn(e, null, s).goto(t),
			l = t,
			a = o.openStart;
		for (;;) {
			let u = Math.min(o.to, i);
			if (o.point) {
				let h = o.activeForPoint(o.to),
					c =
						o.pointFrom < t
							? h.length + 1
							: o.point.startSide < 0
								? h.length
								: Math.min(h.length, a);
				r.point(l, u, o.point, h, c, o.pointRank), (a = Math.min(o.openEnd(u), h.length));
			} else u > l && (r.span(l, u, o.active, a), (a = o.openEnd(u)));
			if (o.to > i) return a + (o.point && o.to > i ? 1 : 0);
			(l = o.to), o.next();
		}
	}
	static of(e, t = !1) {
		let i = new li();
		for (let r of e instanceof Ro ? [e] : t ? AO(e) : e) i.add(r.from, r.to, r.value);
		return i.finish();
	}
	static join(e) {
		if (!e.length) return le.empty;
		let t = e[e.length - 1];
		for (let i = e.length - 2; i >= 0; i--)
			for (let r = e[i]; r != le.empty; r = r.nextLayer)
				t = new le(r.chunkPos, r.chunk, t, Math.max(r.maxPoint, t.maxPoint));
		return t;
	}
}
le.empty = new le([], [], null, -1);
function AO(n) {
	if (n.length > 1)
		for (let e = n[0], t = 1; t < n.length; t++) {
			let i = n[t];
			if (To(e, i) > 0) return n.slice().sort(To);
			e = i;
		}
	return n;
}
le.empty.nextLayer = le.empty;
class li {
	finishChunk(e) {
		this.chunks.push(new Rl(this.from, this.to, this.value, this.maxPoint)),
			this.chunkPos.push(this.chunkStart),
			(this.chunkStart = -1),
			(this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint)),
			(this.maxPoint = -1),
			e && ((this.from = []), (this.to = []), (this.value = []));
	}
	constructor() {
		(this.chunks = []),
			(this.chunkPos = []),
			(this.chunkStart = -1),
			(this.last = null),
			(this.lastFrom = -1e9),
			(this.lastTo = -1e9),
			(this.from = []),
			(this.to = []),
			(this.value = []),
			(this.maxPoint = -1),
			(this.setMaxPoint = -1),
			(this.nextLayer = null);
	}
	add(e, t, i) {
		this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new li())).add(e, t, i);
	}
	addInner(e, t, i) {
		let r = e - this.lastTo || i.startSide - this.last.endSide;
		if (r <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
			throw new Error('Ranges must be added sorted by `from` position and `startSide`');
		return r < 0
			? !1
			: (this.from.length == 250 && this.finishChunk(!0),
				this.chunkStart < 0 && (this.chunkStart = e),
				this.from.push(e - this.chunkStart),
				this.to.push(t - this.chunkStart),
				(this.last = i),
				(this.lastFrom = e),
				(this.lastTo = t),
				this.value.push(i),
				i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)),
				!0);
	}
	addChunk(e, t) {
		if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0) return !1;
		this.from.length && this.finishChunk(!0),
			(this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint)),
			this.chunks.push(t),
			this.chunkPos.push(e);
		let i = t.value.length - 1;
		return (
			(this.last = t.value[i]), (this.lastFrom = t.from[i] + e), (this.lastTo = t.to[i] + e), !0
		);
	}
	finish() {
		return this.finishInner(le.empty);
	}
	finishInner(e) {
		if ((this.from.length && this.finishChunk(!1), this.chunks.length == 0)) return e;
		let t = le.create(
			this.chunkPos,
			this.chunks,
			this.nextLayer ? this.nextLayer.finishInner(e) : e,
			this.setMaxPoint
		);
		return (this.from = null), t;
	}
}
function Ta(n, e, t) {
	let i = new Map();
	for (let s of n)
		for (let o = 0; o < s.chunk.length; o++)
			s.chunk[o].maxPoint <= 0 && i.set(s.chunk[o], s.chunkPos[o]);
	let r = new Set();
	for (let s of e)
		for (let o = 0; o < s.chunk.length; o++) {
			let l = i.get(s.chunk[o]);
			l != null &&
				(t ? t.mapPos(l) : l) == s.chunkPos[o] &&
				!(t != null && t.touchesRange(l, l + s.chunk[o].length)) &&
				r.add(s.chunk[o]);
		}
	return r;
}
class fc {
	constructor(e, t, i, r = 0) {
		(this.layer = e), (this.skip = t), (this.minPoint = i), (this.rank = r);
	}
	get startSide() {
		return this.value ? this.value.startSide : 0;
	}
	get endSide() {
		return this.value ? this.value.endSide : 0;
	}
	goto(e, t = -1e9) {
		return (this.chunkIndex = this.rangeIndex = 0), this.gotoInner(e, t, !1), this;
	}
	gotoInner(e, t, i) {
		for (; this.chunkIndex < this.layer.chunk.length; ) {
			let r = this.layer.chunk[this.chunkIndex];
			if (
				!(
					(this.skip && this.skip.has(r)) ||
					this.layer.chunkEnd(this.chunkIndex) < e ||
					r.maxPoint < this.minPoint
				)
			)
				break;
			this.chunkIndex++, (i = !1);
		}
		if (this.chunkIndex < this.layer.chunk.length) {
			let r = this.layer.chunk[this.chunkIndex].findIndex(
				e - this.layer.chunkPos[this.chunkIndex],
				t,
				!0
			);
			(!i || this.rangeIndex < r) && this.setRangeIndex(r);
		}
		this.next();
	}
	forward(e, t) {
		(this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
	}
	next() {
		for (;;)
			if (this.chunkIndex == this.layer.chunk.length) {
				(this.from = this.to = 1e9), (this.value = null);
				break;
			} else {
				let e = this.layer.chunkPos[this.chunkIndex],
					t = this.layer.chunk[this.chunkIndex],
					i = e + t.from[this.rangeIndex];
				if (
					((this.from = i),
					(this.to = e + t.to[this.rangeIndex]),
					(this.value = t.value[this.rangeIndex]),
					this.setRangeIndex(this.rangeIndex + 1),
					this.minPoint < 0 || (this.value.point && this.to - this.from >= this.minPoint))
				)
					break;
			}
	}
	setRangeIndex(e) {
		if (e == this.layer.chunk[this.chunkIndex].value.length) {
			if ((this.chunkIndex++, this.skip))
				for (
					;
					this.chunkIndex < this.layer.chunk.length &&
					this.skip.has(this.layer.chunk[this.chunkIndex]);

				)
					this.chunkIndex++;
			this.rangeIndex = 0;
		} else this.rangeIndex = e;
	}
	nextChunk() {
		this.chunkIndex++, (this.rangeIndex = 0), this.next();
	}
	compare(e) {
		return (
			this.from - e.from ||
			this.startSide - e.startSide ||
			this.rank - e.rank ||
			this.to - e.to ||
			this.endSide - e.endSide
		);
	}
}
class Bn {
	constructor(e) {
		this.heap = e;
	}
	static from(e, t = null, i = -1) {
		let r = [];
		for (let s = 0; s < e.length; s++)
			for (let o = e[s]; !o.isEmpty; o = o.nextLayer) o.maxPoint >= i && r.push(new fc(o, t, i, s));
		return r.length == 1 ? r[0] : new Bn(r);
	}
	get startSide() {
		return this.value ? this.value.startSide : 0;
	}
	goto(e, t = -1e9) {
		for (let i of this.heap) i.goto(e, t);
		for (let i = this.heap.length >> 1; i >= 0; i--) qs(this.heap, i);
		return this.next(), this;
	}
	forward(e, t) {
		for (let i of this.heap) i.forward(e, t);
		for (let i = this.heap.length >> 1; i >= 0; i--) qs(this.heap, i);
		(this.to - e || this.value.endSide - t) < 0 && this.next();
	}
	next() {
		if (this.heap.length == 0) (this.from = this.to = 1e9), (this.value = null), (this.rank = -1);
		else {
			let e = this.heap[0];
			(this.from = e.from),
				(this.to = e.to),
				(this.value = e.value),
				(this.rank = e.rank),
				e.value && e.next(),
				qs(this.heap, 0);
		}
	}
}
function qs(n, e) {
	for (let t = n[e]; ; ) {
		let i = (e << 1) + 1;
		if (i >= n.length) break;
		let r = n[i];
		if ((i + 1 < n.length && r.compare(n[i + 1]) >= 0 && ((r = n[i + 1]), i++), t.compare(r) < 0))
			break;
		(n[i] = t), (n[e] = r), (e = i);
	}
}
class pn {
	constructor(e, t, i) {
		(this.minPoint = i),
			(this.active = []),
			(this.activeTo = []),
			(this.activeRank = []),
			(this.minActive = -1),
			(this.point = null),
			(this.pointFrom = 0),
			(this.pointRank = 0),
			(this.to = -1e9),
			(this.endSide = 0),
			(this.openStart = -1),
			(this.cursor = Bn.from(e, t, i));
	}
	goto(e, t = -1e9) {
		return (
			this.cursor.goto(e, t),
			(this.active.length = this.activeTo.length = this.activeRank.length = 0),
			(this.minActive = -1),
			(this.to = e),
			(this.endSide = t),
			(this.openStart = -1),
			this.next(),
			this
		);
	}
	forward(e, t) {
		for (
			;
			this.minActive > -1 &&
			(this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0;

		)
			this.removeActive(this.minActive);
		this.cursor.forward(e, t);
	}
	removeActive(e) {
		sr(this.active, e),
			sr(this.activeTo, e),
			sr(this.activeRank, e),
			(this.minActive = Ma(this.active, this.activeTo));
	}
	addActive(e) {
		let t = 0,
			{ value: i, to: r, rank: s } = this.cursor;
		for (; t < this.activeRank.length && (s - this.activeRank[t] || r - this.activeTo[t]) > 0; )
			t++;
		or(this.active, t, i),
			or(this.activeTo, t, r),
			or(this.activeRank, t, s),
			e && or(e, t, this.cursor.from),
			(this.minActive = Ma(this.active, this.activeTo));
	}
	next() {
		let e = this.to,
			t = this.point;
		this.point = null;
		let i = this.openStart < 0 ? [] : null;
		for (;;) {
			let r = this.minActive;
			if (
				r > -1 &&
				(this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide) < 0
			) {
				if (this.activeTo[r] > e) {
					(this.to = this.activeTo[r]), (this.endSide = this.active[r].endSide);
					break;
				}
				this.removeActive(r), i && sr(i, r);
			} else if (this.cursor.value)
				if (this.cursor.from > e) {
					(this.to = this.cursor.from), (this.endSide = this.cursor.startSide);
					break;
				} else {
					let s = this.cursor.value;
					if (!s.point) this.addActive(i), this.cursor.next();
					else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
						this.cursor.next();
					else {
						(this.point = s),
							(this.pointFrom = this.cursor.from),
							(this.pointRank = this.cursor.rank),
							(this.to = this.cursor.to),
							(this.endSide = s.endSide),
							this.cursor.next(),
							this.forward(this.to, this.endSide);
						break;
					}
				}
			else {
				this.to = this.endSide = 1e9;
				break;
			}
		}
		if (i) {
			this.openStart = 0;
			for (let r = i.length - 1; r >= 0 && i[r] < e; r--) this.openStart++;
		}
	}
	activeForPoint(e) {
		if (!this.active.length) return this.active;
		let t = [];
		for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
			(this.activeTo[i] > e ||
				(this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide)) &&
				t.push(this.active[i]);
		return t.reverse();
	}
	openEnd(e) {
		let t = 0;
		for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--) t++;
		return t;
	}
}
function Fa(n, e, t, i, r, s) {
	n.goto(e), t.goto(i);
	let o = i + r,
		l = i,
		a = i - e;
	for (;;) {
		let u = n.to + a - t.to || n.endSide - t.endSide,
			h = u < 0 ? n.to + a : t.to,
			c = Math.min(h, o);
		if (
			(n.point || t.point
				? (n.point &&
						t.point &&
						(n.point == t.point || n.point.eq(t.point)) &&
						Fo(n.activeForPoint(n.to), t.activeForPoint(t.to))) ||
					s.comparePoint(l, c, n.point, t.point)
				: c > l && !Fo(n.active, t.active) && s.compareRange(l, c, n.active, t.active),
			h > o)
		)
			break;
		(l = h), u <= 0 && n.next(), u >= 0 && t.next();
	}
}
function Fo(n, e) {
	if (n.length != e.length) return !1;
	for (let t = 0; t < n.length; t++) if (n[t] != e[t] && !n[t].eq(e[t])) return !1;
	return !0;
}
function sr(n, e) {
	for (let t = e, i = n.length - 1; t < i; t++) n[t] = n[t + 1];
	n.pop();
}
function or(n, e, t) {
	for (let i = n.length - 1; i >= e; i--) n[i + 1] = n[i];
	n[e] = t;
}
function Ma(n, e) {
	let t = -1,
		i = 1e9;
	for (let r = 0; r < e.length; r++)
		(e[r] - i || n[r].endSide - n[t].endSide) < 0 && ((t = r), (i = e[r]));
	return t;
}
function an(n, e, t = n.length) {
	let i = 0;
	for (let r = 0; r < t; ) n.charCodeAt(r) == 9 ? ((i += e - (i % e)), r++) : (i++, (r = Me(n, r)));
	return i;
}
function Mo(n, e, t, i) {
	for (let r = 0, s = 0; ; ) {
		if (s >= e) return r;
		if (r == n.length) break;
		(s += n.charCodeAt(r) == 9 ? t - (s % t) : 1), (r = Me(n, r));
	}
	return i === !0 ? -1 : n.length;
}
const Bo = 'ͼ',
	Ba = typeof Symbol > 'u' ? '__' + Bo : Symbol.for(Bo),
	jo = typeof Symbol > 'u' ? '__styleSet' + Math.floor(Math.random() * 1e8) : Symbol('styleSet'),
	ja = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : {};
class ai {
	constructor(e, t) {
		this.rules = [];
		let { finish: i } = t || {};
		function r(o) {
			return /^@/.test(o) ? [o] : o.split(/,\s*/);
		}
		function s(o, l, a, u) {
			let h = [],
				c = /^@(\w+)\b/.exec(o[0]),
				f = c && c[1] == 'keyframes';
			if (c && l == null) return a.push(o[0] + ';');
			for (let d in l) {
				let p = l[d];
				if (/&/.test(d))
					s(
						d
							.split(/,\s*/)
							.map((O) => o.map((m) => O.replace(/&/, m)))
							.reduce((O, m) => O.concat(m)),
						p,
						a
					);
				else if (p && typeof p == 'object') {
					if (!c)
						throw new RangeError(
							'The value of a property (' + d + ') should be a primitive value.'
						);
					s(r(d), p, h, f);
				} else
					p != null &&
						h.push(
							d.replace(/_.*/, '').replace(/[A-Z]/g, (O) => '-' + O.toLowerCase()) + ': ' + p + ';'
						);
			}
			(h.length || f) &&
				a.push((i && !c && !u ? o.map(i) : o).join(', ') + ' {' + h.join(' ') + '}');
		}
		for (let o in e) s(r(o), e[o], this.rules);
	}
	getRules() {
		return this.rules.join(`
`);
	}
	static newName() {
		let e = ja[Ba] || 1;
		return (ja[Ba] = e + 1), Bo + e.toString(36);
	}
	static mount(e, t, i) {
		let r = e[jo],
			s = i && i.nonce;
		r ? s && r.setNonce(s) : (r = new $O(e, s)), r.mount(Array.isArray(t) ? t : [t], e);
	}
}
let Wa = new Map();
class $O {
	constructor(e, t) {
		let i = e.ownerDocument || e,
			r = i.defaultView;
		if (!e.head && e.adoptedStyleSheets && r.CSSStyleSheet) {
			let s = Wa.get(i);
			if (s) return (e[jo] = s);
			(this.sheet = new r.CSSStyleSheet()), Wa.set(i, this);
		} else (this.styleTag = i.createElement('style')), t && this.styleTag.setAttribute('nonce', t);
		(this.modules = []), (e[jo] = this);
	}
	mount(e, t) {
		let i = this.sheet,
			r = 0,
			s = 0;
		for (let o = 0; o < e.length; o++) {
			let l = e[o],
				a = this.modules.indexOf(l);
			if ((a < s && a > -1 && (this.modules.splice(a, 1), s--, (a = -1)), a == -1)) {
				if ((this.modules.splice(s++, 0, l), i))
					for (let u = 0; u < l.rules.length; u++) i.insertRule(l.rules[u], r++);
			} else {
				for (; s < a; ) r += this.modules[s++].rules.length;
				(r += l.rules.length), s++;
			}
		}
		if (i)
			t.adoptedStyleSheets.indexOf(this.sheet) < 0 &&
				(t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
		else {
			let o = '';
			for (let a = 0; a < this.modules.length; a++)
				o +=
					this.modules[a].getRules() +
					`
`;
			this.styleTag.textContent = o;
			let l = t.head || t;
			this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
		}
	}
	setNonce(e) {
		this.styleTag &&
			this.styleTag.getAttribute('nonce') != e &&
			this.styleTag.setAttribute('nonce', e);
	}
}
var ui = {
		8: 'Backspace',
		9: 'Tab',
		10: 'Enter',
		12: 'NumLock',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		44: 'PrintScreen',
		45: 'Insert',
		46: 'Delete',
		59: ';',
		61: '=',
		91: 'Meta',
		92: 'Meta',
		106: '*',
		107: '+',
		108: ',',
		109: '-',
		110: '.',
		111: '/',
		144: 'NumLock',
		145: 'ScrollLock',
		160: 'Shift',
		161: 'Shift',
		162: 'Control',
		163: 'Control',
		164: 'Alt',
		165: 'Alt',
		173: '-',
		186: ';',
		187: '=',
		188: ',',
		189: '-',
		190: '.',
		191: '/',
		192: '`',
		219: '[',
		220: '\\',
		221: ']',
		222: "'"
	},
	jn = {
		48: ')',
		49: '!',
		50: '@',
		51: '#',
		52: '$',
		53: '%',
		54: '^',
		55: '&',
		56: '*',
		57: '(',
		59: ':',
		61: '+',
		173: '_',
		186: ':',
		187: '+',
		188: '<',
		189: '_',
		190: '>',
		191: '?',
		192: '~',
		219: '{',
		220: '|',
		221: '}',
		222: '"'
	},
	EO = typeof navigator < 'u' && /Mac/.test(navigator.platform),
	ZO =
		typeof navigator < 'u' &&
		/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Te = 0; Te < 10; Te++) ui[48 + Te] = ui[96 + Te] = String(Te);
for (var Te = 1; Te <= 24; Te++) ui[Te + 111] = 'F' + Te;
for (var Te = 65; Te <= 90; Te++)
	(ui[Te] = String.fromCharCode(Te + 32)), (jn[Te] = String.fromCharCode(Te));
for (var _s in ui) jn.hasOwnProperty(_s) || (jn[_s] = ui[_s]);
function RO(n) {
	var e =
			(EO && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey) ||
			(ZO && n.shiftKey && n.key && n.key.length == 1) ||
			n.key == 'Unidentified',
		t = (!e && n.key) || (n.shiftKey ? jn : ui)[n.keyCode] || n.key || 'Unidentified';
	return (
		t == 'Esc' && (t = 'Escape'),
		t == 'Del' && (t = 'Delete'),
		t == 'Left' && (t = 'ArrowLeft'),
		t == 'Up' && (t = 'ArrowUp'),
		t == 'Right' && (t = 'ArrowRight'),
		t == 'Down' && (t = 'ArrowDown'),
		t
	);
}
function _r(n) {
	let e;
	return n.nodeType == 11 ? (e = n.getSelection ? n : n.ownerDocument) : (e = n), e.getSelection();
}
function Wo(n, e) {
	return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function TO(n) {
	let e = n.activeElement;
	for (; e && e.shadowRoot; ) e = e.shadowRoot.activeElement;
	return e;
}
function Er(n, e) {
	if (!e.anchorNode) return !1;
	try {
		return Wo(n, e.anchorNode);
	} catch {
		return !1;
	}
}
function tn(n) {
	return n.nodeType == 3
		? Zi(n, 0, n.nodeValue.length).getClientRects()
		: n.nodeType == 1
			? n.getClientRects()
			: [];
}
function An(n, e, t, i) {
	return t ? za(n, e, t, i, -1) || za(n, e, t, i, 1) : !1;
}
function Ei(n) {
	for (var e = 0; ; e++) if (((n = n.previousSibling), !n)) return e;
}
function Yr(n) {
	return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
function za(n, e, t, i, r) {
	for (;;) {
		if (n == t && e == i) return !0;
		if (e == (r < 0 ? 0 : It(n))) {
			if (n.nodeName == 'DIV') return !1;
			let s = n.parentNode;
			if (!s || s.nodeType != 1) return !1;
			(e = Ei(n) + (r < 0 ? 0 : 1)), (n = s);
		} else if (n.nodeType == 1) {
			if (
				((n = n.childNodes[e + (r < 0 ? -1 : 0)]), n.nodeType == 1 && n.contentEditable == 'false')
			)
				return !1;
			e = r < 0 ? It(n) : 0;
		} else return !1;
	}
}
function It(n) {
	return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function gs(n, e) {
	let t = e ? n.left : n.right;
	return { left: t, right: t, top: n.top, bottom: n.bottom };
}
function FO(n) {
	let e = n.visualViewport;
	return e
		? { left: 0, right: e.width, top: 0, bottom: e.height }
		: { left: 0, right: n.innerWidth, top: 0, bottom: n.innerHeight };
}
function dc(n, e) {
	let t = e.width / n.offsetWidth,
		i = e.height / n.offsetHeight;
	return (
		((t > 0.995 && t < 1.005) || !isFinite(t) || Math.abs(e.width - n.offsetWidth) < 1) && (t = 1),
		((i > 0.995 && i < 1.005) || !isFinite(i) || Math.abs(e.height - n.offsetHeight) < 1) &&
			(i = 1),
		{ scaleX: t, scaleY: i }
	);
}
function MO(n, e, t, i, r, s, o, l) {
	let a = n.ownerDocument,
		u = a.defaultView || window;
	for (let h = n, c = !1; h && !c; )
		if (h.nodeType == 1) {
			let f,
				d = h == a.body,
				p = 1,
				O = 1;
			if (d) f = FO(u);
			else {
				if (
					(/^(fixed|sticky)$/.test(getComputedStyle(h).position) && (c = !0),
					h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth)
				) {
					h = h.assignedSlot || h.parentNode;
					continue;
				}
				let S = h.getBoundingClientRect();
				({ scaleX: p, scaleY: O } = dc(h, S)),
					(f = {
						left: S.left,
						right: S.left + h.clientWidth * p,
						top: S.top,
						bottom: S.top + h.clientHeight * O
					});
			}
			let m = 0,
				g = 0;
			if (r == 'nearest')
				e.top < f.top
					? ((g = -(f.top - e.top + o)),
						t > 0 && e.bottom > f.bottom + g && (g = e.bottom - f.bottom + g + o))
					: e.bottom > f.bottom &&
						((g = e.bottom - f.bottom + o),
						t < 0 && e.top - g < f.top && (g = -(f.top + g - e.top + o)));
			else {
				let S = e.bottom - e.top,
					C = f.bottom - f.top;
				g =
					(r == 'center' && S <= C
						? e.top + S / 2 - C / 2
						: r == 'start' || (r == 'center' && t < 0)
							? e.top - o
							: e.bottom - C + o) - f.top;
			}
			if (
				(i == 'nearest'
					? e.left < f.left
						? ((m = -(f.left - e.left + s)),
							t > 0 && e.right > f.right + m && (m = e.right - f.right + m + s))
						: e.right > f.right &&
							((m = e.right - f.right + s),
							t < 0 && e.left < f.left + m && (m = -(f.left + m - e.left + s)))
					: (m =
							(i == 'center'
								? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2
								: (i == 'start') == l
									? e.left - s
									: e.right - (f.right - f.left) + s) - f.left),
				m || g)
			)
				if (d) u.scrollBy(m, g);
				else {
					let S = 0,
						C = 0;
					if (g) {
						let k = h.scrollTop;
						(h.scrollTop += g / O), (C = (h.scrollTop - k) * O);
					}
					if (m) {
						let k = h.scrollLeft;
						(h.scrollLeft += m / p), (S = (h.scrollLeft - k) * p);
					}
					(e = {
						left: e.left - S,
						top: e.top - C,
						right: e.right - S,
						bottom: e.bottom - C
					}),
						S && Math.abs(S - m) < 1 && (i = 'nearest'),
						C && Math.abs(C - g) < 1 && (r = 'nearest');
				}
			if (d) break;
			h = h.assignedSlot || h.parentNode;
		} else if (h.nodeType == 11) h = h.host;
		else break;
}
function BO(n) {
	let e = n.ownerDocument;
	for (let t = n.parentNode; t && t != e.body; )
		if (t.nodeType == 1) {
			if (t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth) return t;
			t = t.assignedSlot || t.parentNode;
		} else if (t.nodeType == 11) t = t.host;
		else break;
	return null;
}
class jO {
	constructor() {
		(this.anchorNode = null),
			(this.anchorOffset = 0),
			(this.focusNode = null),
			(this.focusOffset = 0);
	}
	eq(e) {
		return (
			this.anchorNode == e.anchorNode &&
			this.anchorOffset == e.anchorOffset &&
			this.focusNode == e.focusNode &&
			this.focusOffset == e.focusOffset
		);
	}
	setRange(e) {
		let { anchorNode: t, focusNode: i } = e;
		this.set(t, Math.min(e.anchorOffset, t ? It(t) : 0), i, Math.min(e.focusOffset, i ? It(i) : 0));
	}
	set(e, t, i, r) {
		(this.anchorNode = e), (this.anchorOffset = t), (this.focusNode = i), (this.focusOffset = r);
	}
}
let Xi = null;
function pc(n) {
	if (n.setActive) return n.setActive();
	if (Xi) return n.focus(Xi);
	let e = [];
	for (
		let t = n;
		t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument);
		t = t.parentNode
	);
	if (
		(n.focus(
			Xi == null
				? {
						get preventScroll() {
							return (Xi = { preventScroll: !0 }), !0;
						}
					}
				: void 0
		),
		!Xi)
	) {
		Xi = !1;
		for (let t = 0; t < e.length; ) {
			let i = e[t++],
				r = e[t++],
				s = e[t++];
			i.scrollTop != r && (i.scrollTop = r), i.scrollLeft != s && (i.scrollLeft = s);
		}
	}
}
let Xa;
function Zi(n, e, t = e) {
	let i = Xa || (Xa = document.createRange());
	return i.setEnd(n, t), i.setStart(n, e), i;
}
function Ui(n, e, t, i) {
	let r = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
	i && ({ altKey: r.altKey, ctrlKey: r.ctrlKey, shiftKey: r.shiftKey, metaKey: r.metaKey } = i);
	let s = new KeyboardEvent('keydown', r);
	(s.synthetic = !0), n.dispatchEvent(s);
	let o = new KeyboardEvent('keyup', r);
	return (o.synthetic = !0), n.dispatchEvent(o), s.defaultPrevented || o.defaultPrevented;
}
function WO(n) {
	for (; n; ) {
		if (n && (n.nodeType == 9 || (n.nodeType == 11 && n.host))) return n;
		n = n.assignedSlot || n.parentNode;
	}
	return null;
}
function Oc(n) {
	for (; n.attributes.length; ) n.removeAttributeNode(n.attributes[0]);
}
function zO(n, e) {
	let t = e.focusNode,
		i = e.focusOffset;
	if (!t || e.anchorNode != t || e.anchorOffset != i) return !1;
	for (i = Math.min(i, It(t)); ; )
		if (i) {
			if (t.nodeType != 1) return !1;
			let r = t.childNodes[i - 1];
			r.contentEditable == 'false' ? i-- : ((t = r), (i = It(t)));
		} else {
			if (t == n) return !0;
			(i = Ei(t)), (t = t.parentNode);
		}
}
function mc(n) {
	return n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
}
function gc(n, e) {
	for (let t = n, i = e; ; ) {
		if (t.nodeType == 3 && i > 0) return { node: t, offset: i };
		if (t.nodeType == 1 && i > 0) {
			if (t.contentEditable == 'false') return null;
			(t = t.childNodes[i - 1]), (i = It(t));
		} else if (t.parentNode && !Yr(t)) (i = Ei(t)), (t = t.parentNode);
		else return null;
	}
}
function yc(n, e) {
	for (let t = n, i = e; ; ) {
		if (t.nodeType == 3 && i < t.nodeValue.length) return { node: t, offset: i };
		if (t.nodeType == 1 && i < t.childNodes.length) {
			if (t.contentEditable == 'false') return null;
			(t = t.childNodes[i]), (i = 0);
		} else if (t.parentNode && !Yr(t)) (i = Ei(t) + 1), (t = t.parentNode);
		else return null;
	}
}
class We {
	constructor(e, t, i = !0) {
		(this.node = e), (this.offset = t), (this.precise = i);
	}
	static before(e, t) {
		return new We(e.parentNode, Ei(e), t);
	}
	static after(e, t) {
		return new We(e.parentNode, Ei(e) + 1, t);
	}
}
const Tl = [];
class fe {
	constructor() {
		(this.parent = null), (this.dom = null), (this.flags = 2);
	}
	get overrideDOMText() {
		return null;
	}
	get posAtStart() {
		return this.parent ? this.parent.posBefore(this) : 0;
	}
	get posAtEnd() {
		return this.posAtStart + this.length;
	}
	posBefore(e) {
		let t = this.posAtStart;
		for (let i of this.children) {
			if (i == e) return t;
			t += i.length + i.breakAfter;
		}
		throw new RangeError('Invalid child in posBefore');
	}
	posAfter(e) {
		return this.posBefore(e) + e.length;
	}
	sync(e, t) {
		if (this.flags & 2) {
			let i = this.dom,
				r = null,
				s;
			for (let o of this.children) {
				if (o.flags & 7) {
					if (!o.dom && (s = r ? r.nextSibling : i.firstChild)) {
						let l = fe.get(s);
						(!l || (!l.parent && l.canReuseDOM(o))) && o.reuseDOM(s);
					}
					o.sync(e, t), (o.flags &= -8);
				}
				if (
					((s = r ? r.nextSibling : i.firstChild),
					t && !t.written && t.node == i && s != o.dom && (t.written = !0),
					o.dom.parentNode == i)
				)
					for (; s && s != o.dom; ) s = qa(s);
				else i.insertBefore(o.dom, s);
				r = o.dom;
			}
			for (s = r ? r.nextSibling : i.firstChild, s && t && t.node == i && (t.written = !0); s; )
				s = qa(s);
		} else if (this.flags & 1)
			for (let i of this.children) i.flags & 7 && (i.sync(e, t), (i.flags &= -8));
	}
	reuseDOM(e) {}
	localPosFromDOM(e, t) {
		let i;
		if (e == this.dom) i = this.dom.childNodes[t];
		else {
			let r = It(e) == 0 ? 0 : t == 0 ? -1 : 1;
			for (;;) {
				let s = e.parentNode;
				if (s == this.dom) break;
				r == 0 && s.firstChild != s.lastChild && (e == s.firstChild ? (r = -1) : (r = 1)), (e = s);
			}
			r < 0 ? (i = e) : (i = e.nextSibling);
		}
		if (i == this.dom.firstChild) return 0;
		for (; i && !fe.get(i); ) i = i.nextSibling;
		if (!i) return this.length;
		for (let r = 0, s = 0; ; r++) {
			let o = this.children[r];
			if (o.dom == i) return s;
			s += o.length + o.breakAfter;
		}
	}
	domBoundsAround(e, t, i = 0) {
		let r = -1,
			s = -1,
			o = -1,
			l = -1;
		for (let a = 0, u = i, h = i; a < this.children.length; a++) {
			let c = this.children[a],
				f = u + c.length;
			if (u < e && f > t) return c.domBoundsAround(e, t, u);
			if ((f >= e && r == -1 && ((r = a), (s = u)), u > t && c.dom.parentNode == this.dom)) {
				(o = a), (l = h);
				break;
			}
			(h = f), (u = f + c.breakAfter);
		}
		return {
			from: s,
			to: l < 0 ? i + this.length : l,
			startDOM: (r ? this.children[r - 1].dom.nextSibling : null) || this.dom.firstChild,
			endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
		};
	}
	markDirty(e = !1) {
		(this.flags |= 2), this.markParentsDirty(e);
	}
	markParentsDirty(e) {
		for (let t = this.parent; t; t = t.parent) {
			if ((e && (t.flags |= 2), t.flags & 1)) return;
			(t.flags |= 1), (e = !1);
		}
	}
	setParent(e) {
		this.parent != e && ((this.parent = e), this.flags & 7 && this.markParentsDirty(!0));
	}
	setDOM(e) {
		this.dom != e && (this.dom && (this.dom.cmView = null), (this.dom = e), (e.cmView = this));
	}
	get rootView() {
		for (let e = this; ; ) {
			let t = e.parent;
			if (!t) return e;
			e = t;
		}
	}
	replaceChildren(e, t, i = Tl) {
		this.markDirty();
		for (let r = e; r < t; r++) {
			let s = this.children[r];
			s.parent == this && i.indexOf(s) < 0 && s.destroy();
		}
		this.children.splice(e, t - e, ...i);
		for (let r = 0; r < i.length; r++) i[r].setParent(this);
	}
	ignoreMutation(e) {
		return !1;
	}
	ignoreEvent(e) {
		return !1;
	}
	childCursor(e = this.length) {
		return new bc(this.children, e, this.children.length);
	}
	childPos(e, t = 1) {
		return this.childCursor().findPos(e, t);
	}
	toString() {
		let e = this.constructor.name.replace('View', '');
		return (
			e +
			(this.children.length
				? '(' + this.children.join() + ')'
				: this.length
					? '[' + (e == 'Text' ? this.text : this.length) + ']'
					: '') +
			(this.breakAfter ? '#' : '')
		);
	}
	static get(e) {
		return e.cmView;
	}
	get isEditable() {
		return !0;
	}
	get isWidget() {
		return !1;
	}
	get isHidden() {
		return !1;
	}
	merge(e, t, i, r, s, o) {
		return !1;
	}
	become(e) {
		return !1;
	}
	canReuseDOM(e) {
		return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
	}
	getSide() {
		return 0;
	}
	destroy() {
		for (let e of this.children) e.parent == this && e.destroy();
		this.parent = null;
	}
}
fe.prototype.breakAfter = 0;
function qa(n) {
	let e = n.nextSibling;
	return n.parentNode.removeChild(n), e;
}
class bc {
	constructor(e, t, i) {
		(this.children = e), (this.pos = t), (this.i = i), (this.off = 0);
	}
	findPos(e, t = 1) {
		for (;;) {
			if (
				e > this.pos ||
				(e == this.pos && (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
			)
				return (this.off = e - this.pos), this;
			let i = this.children[--this.i];
			this.pos -= i.length + i.breakAfter;
		}
	}
}
function xc(n, e, t, i, r, s, o, l, a) {
	let { children: u } = n,
		h = u.length ? u[e] : null,
		c = s.length ? s[s.length - 1] : null,
		f = c ? c.breakAfter : o;
	if (
		!(e == i && h && !o && !f && s.length < 2 && h.merge(t, r, s.length ? c : null, t == 0, l, a))
	) {
		if (i < u.length) {
			let d = u[i];
			d && (r < d.length || (d.breakAfter && c != null && c.breakAfter))
				? (e == i && ((d = d.split(r)), (r = 0)),
					!f && c && d.merge(0, r, c, !0, 0, a)
						? (s[s.length - 1] = d)
						: ((r || (d.children.length && !d.children[0].length)) && d.merge(0, r, null, !1, 0, a),
							s.push(d)))
				: d != null && d.breakAfter && (c ? (c.breakAfter = 1) : (o = 1)),
				i++;
		}
		for (
			h &&
			((h.breakAfter = o),
			t > 0 &&
				(!o && s.length && h.merge(t, h.length, s[0], !1, l, 0)
					? (h.breakAfter = s.shift().breakAfter)
					: (t < h.length ||
							(h.children.length && h.children[h.children.length - 1].length == 0)) &&
						h.merge(t, h.length, null, !1, l, 0),
				e++));
			e < i && s.length;

		)
			if (u[i - 1].become(s[s.length - 1])) i--, s.pop(), (a = s.length ? 0 : l);
			else if (u[e].become(s[0])) e++, s.shift(), (l = s.length ? 0 : a);
			else break;
		!s.length &&
			e &&
			i < u.length &&
			!u[e - 1].breakAfter &&
			u[i].merge(0, 0, u[e - 1], !1, l, a) &&
			e--,
			(e < i || s.length) && n.replaceChildren(e, i, s);
	}
}
function Dc(n, e, t, i, r, s) {
	let o = n.childCursor(),
		{ i: l, off: a } = o.findPos(t, 1),
		{ i: u, off: h } = o.findPos(e, -1),
		c = e - t;
	for (let f of i) c += f.length;
	(n.length += c), xc(n, u, h, l, a, i, 0, r, s);
}
let Ie = typeof navigator < 'u' ? navigator : { userAgent: '', vendor: '', platform: '' },
	zo = typeof document < 'u' ? document : { documentElement: { style: {} } };
const Xo = /Edge\/(\d+)/.exec(Ie.userAgent),
	Sc = /MSIE \d/.test(Ie.userAgent),
	qo = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ie.userAgent),
	ys = !!(Sc || qo || Xo),
	_a = !ys && /gecko\/(\d+)/i.test(Ie.userAgent),
	Ys = !ys && /Chrome\/(\d+)/.exec(Ie.userAgent),
	XO = 'webkitFontSmoothing' in zo.documentElement.style,
	wc = !ys && /Apple Computer/.test(Ie.vendor),
	Ya = wc && (/Mobile\/\w+/.test(Ie.userAgent) || Ie.maxTouchPoints > 2);
var z = {
	mac: Ya || /Mac/.test(Ie.platform),
	windows: /Win/.test(Ie.platform),
	linux: /Linux|X11/.test(Ie.platform),
	ie: ys,
	ie_version: Sc ? zo.documentMode || 6 : qo ? +qo[1] : Xo ? +Xo[1] : 0,
	gecko: _a,
	gecko_version: _a ? +(/Firefox\/(\d+)/.exec(Ie.userAgent) || [0, 0])[1] : 0,
	chrome: !!Ys,
	chrome_version: Ys ? +Ys[1] : 0,
	ios: Ya,
	android: /Android\b/.test(Ie.userAgent),
	safari: wc,
	webkit_version: XO ? +(/\bAppleWebKit\/(\d+)/.exec(Ie.userAgent) || [0, 0])[1] : 0,
	tabSize: zo.documentElement.style.tabSize != null ? 'tab-size' : '-moz-tab-size'
};
const qO = 256;
class Dt extends fe {
	constructor(e) {
		super(), (this.text = e);
	}
	get length() {
		return this.text.length;
	}
	createDOM(e) {
		this.setDOM(e || document.createTextNode(this.text));
	}
	sync(e, t) {
		this.dom || this.createDOM(),
			this.dom.nodeValue != this.text &&
				(t && t.node == this.dom && (t.written = !0), (this.dom.nodeValue = this.text));
	}
	reuseDOM(e) {
		e.nodeType == 3 && this.createDOM(e);
	}
	merge(e, t, i) {
		return this.flags & 8 ||
			(i && (!(i instanceof Dt) || this.length - (t - e) + i.length > qO || i.flags & 8))
			? !1
			: ((this.text = this.text.slice(0, e) + (i ? i.text : '') + this.text.slice(t)),
				this.markDirty(),
				!0);
	}
	split(e) {
		let t = new Dt(this.text.slice(e));
		return (this.text = this.text.slice(0, e)), this.markDirty(), (t.flags |= this.flags & 8), t;
	}
	localPosFromDOM(e, t) {
		return e == this.dom ? t : t ? this.text.length : 0;
	}
	domAtPos(e) {
		return new We(this.dom, e);
	}
	domBoundsAround(e, t, i) {
		return {
			from: i,
			to: i + this.length,
			startDOM: this.dom,
			endDOM: this.dom.nextSibling
		};
	}
	coordsAt(e, t) {
		return _O(this.dom, e, t);
	}
}
class Lt extends fe {
	constructor(e, t = [], i = 0) {
		super(), (this.mark = e), (this.children = t), (this.length = i);
		for (let r of t) r.setParent(this);
	}
	setAttrs(e) {
		if ((Oc(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs))
			for (let t in this.mark.attrs) e.setAttribute(t, this.mark.attrs[t]);
		return e;
	}
	canReuseDOM(e) {
		return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
	}
	reuseDOM(e) {
		e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), (this.flags |= 6));
	}
	sync(e, t) {
		this.dom
			? this.flags & 4 && this.setAttrs(this.dom)
			: this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),
			super.sync(e, t);
	}
	merge(e, t, i, r, s, o) {
		return i &&
			(!(i instanceof Lt && i.mark.eq(this.mark)) || (e && s <= 0) || (t < this.length && o <= 0))
			? !1
			: (Dc(this, e, t, i ? i.children.slice() : [], s - 1, o - 1), this.markDirty(), !0);
	}
	split(e) {
		let t = [],
			i = 0,
			r = -1,
			s = 0;
		for (let l of this.children) {
			let a = i + l.length;
			a > e && t.push(i < e ? l.split(e - i) : l), r < 0 && i >= e && (r = s), (i = a), s++;
		}
		let o = this.length - e;
		return (
			(this.length = e),
			r > -1 && ((this.children.length = r), this.markDirty()),
			new Lt(this.mark, t, o)
		);
	}
	domAtPos(e) {
		return kc(this, e);
	}
	coordsAt(e, t) {
		return Qc(this, e, t);
	}
}
function _O(n, e, t) {
	let i = n.nodeValue.length;
	e > i && (e = i);
	let r = e,
		s = e,
		o = 0;
	(e == 0 && t < 0) || (e == i && t >= 0)
		? z.chrome || z.gecko || (e ? (r--, (o = 1)) : s < i && (s++, (o = -1)))
		: t < 0
			? r--
			: s < i && s++;
	let l = Zi(n, r, s).getClientRects();
	if (!l.length) return null;
	let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
	return (
		z.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (u) => u.width) || a),
		o ? gs(a, o < 0) : a || null
	);
}
class ii extends fe {
	static create(e, t, i) {
		return new ii(e, t, i);
	}
	constructor(e, t, i) {
		super(), (this.widget = e), (this.length = t), (this.side = i), (this.prevWidget = null);
	}
	split(e) {
		let t = ii.create(this.widget, this.length - e, this.side);
		return (this.length -= e), t;
	}
	sync(e) {
		(!this.dom || !this.widget.updateDOM(this.dom, e)) &&
			(this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
			(this.prevWidget = null),
			this.setDOM(this.widget.toDOM(e)),
			this.widget.editable || (this.dom.contentEditable = 'false'));
	}
	getSide() {
		return this.side;
	}
	merge(e, t, i, r, s, o) {
		return i &&
			(!(i instanceof ii) ||
				!this.widget.compare(i.widget) ||
				(e > 0 && s <= 0) ||
				(t < this.length && o <= 0))
			? !1
			: ((this.length = e + (i ? i.length : 0) + (this.length - t)), !0);
	}
	become(e) {
		return e instanceof ii && e.side == this.side && this.widget.constructor == e.widget.constructor
			? (this.widget.compare(e.widget) || this.markDirty(!0),
				this.dom && !this.prevWidget && (this.prevWidget = this.widget),
				(this.widget = e.widget),
				(this.length = e.length),
				!0)
			: !1;
	}
	ignoreMutation() {
		return !0;
	}
	ignoreEvent(e) {
		return this.widget.ignoreEvent(e);
	}
	get overrideDOMText() {
		if (this.length == 0) return ae.empty;
		let e = this;
		for (; e.parent; ) e = e.parent;
		let { view: t } = e,
			i = t && t.state.doc,
			r = this.posAtStart;
		return i ? i.slice(r, r + this.length) : ae.empty;
	}
	domAtPos(e) {
		return (this.length ? e == 0 : this.side > 0)
			? We.before(this.dom)
			: We.after(this.dom, e == this.length);
	}
	domBoundsAround() {
		return null;
	}
	coordsAt(e, t) {
		let i = this.widget.coordsAt(this.dom, e, t);
		if (i) return i;
		let r = this.dom.getClientRects(),
			s = null;
		if (!r.length) return null;
		let o = this.side ? this.side < 0 : e > 0;
		for (
			let l = o ? r.length - 1 : 0;
			(s = r[l]), !(e > 0 ? l == 0 : l == r.length - 1 || s.top < s.bottom);
			l += o ? -1 : 1
		);
		return gs(s, !o);
	}
	get isEditable() {
		return !1;
	}
	get isWidget() {
		return !0;
	}
	get isHidden() {
		return this.widget.isHidden;
	}
	destroy() {
		super.destroy(), this.dom && this.widget.destroy(this.dom);
	}
}
class nn extends fe {
	constructor(e) {
		super(), (this.side = e);
	}
	get length() {
		return 0;
	}
	merge() {
		return !1;
	}
	become(e) {
		return e instanceof nn && e.side == this.side;
	}
	split() {
		return new nn(this.side);
	}
	sync() {
		if (!this.dom) {
			let e = document.createElement('img');
			(e.className = 'cm-widgetBuffer'), e.setAttribute('aria-hidden', 'true'), this.setDOM(e);
		}
	}
	getSide() {
		return this.side;
	}
	domAtPos(e) {
		return this.side > 0 ? We.before(this.dom) : We.after(this.dom);
	}
	localPosFromDOM() {
		return 0;
	}
	domBoundsAround() {
		return null;
	}
	coordsAt(e) {
		return this.dom.getBoundingClientRect();
	}
	get overrideDOMText() {
		return ae.empty;
	}
	get isHidden() {
		return !0;
	}
}
Dt.prototype.children = ii.prototype.children = nn.prototype.children = Tl;
function kc(n, e) {
	let t = n.dom,
		{ children: i } = n,
		r = 0;
	for (let s = 0; r < i.length; r++) {
		let o = i[r],
			l = s + o.length;
		if (!(l == s && o.getSide() <= 0)) {
			if (e > s && e < l && o.dom.parentNode == t) return o.domAtPos(e - s);
			if (e <= s) break;
			s = l;
		}
	}
	for (let s = r; s > 0; s--) {
		let o = i[s - 1];
		if (o.dom.parentNode == t) return o.domAtPos(o.length);
	}
	for (let s = r; s < i.length; s++) {
		let o = i[s];
		if (o.dom.parentNode == t) return o.domAtPos(0);
	}
	return new We(t, 0);
}
function vc(n, e, t) {
	let i,
		{ children: r } = n;
	t > 0 && e instanceof Lt && r.length && (i = r[r.length - 1]) instanceof Lt && i.mark.eq(e.mark)
		? vc(i, e.children[0], t - 1)
		: (r.push(e), e.setParent(n)),
		(n.length += e.length);
}
function Qc(n, e, t) {
	let i = null,
		r = -1,
		s = null,
		o = -1;
	function l(u, h) {
		for (let c = 0, f = 0; c < u.children.length && f <= h; c++) {
			let d = u.children[c],
				p = f + d.length;
			p >= h &&
				(d.children.length
					? l(d, h - f)
					: (!s || (s.isHidden && t > 0)) && (p > h || (f == p && d.getSide() > 0))
						? ((s = d), (o = h - f))
						: (f < h || (f == p && d.getSide() < 0 && !d.isHidden)) && ((i = d), (r = h - f))),
				(f = p);
		}
	}
	l(n, e);
	let a = (t < 0 ? i : s) || i || s;
	return a ? a.coordsAt(Math.max(0, a == i ? r : o), t) : YO(n);
}
function YO(n) {
	let e = n.dom.lastChild;
	if (!e) return n.dom.getBoundingClientRect();
	let t = tn(e);
	return t[t.length - 1] || null;
}
function _o(n, e) {
	for (let t in n)
		t == 'class' && e.class
			? (e.class += ' ' + n.class)
			: t == 'style' && e.style
				? (e.style += ';' + n.style)
				: (e[t] = n[t]);
	return e;
}
const Na = Object.create(null);
function Fl(n, e, t) {
	if (n == e) return !0;
	n || (n = Na), e || (e = Na);
	let i = Object.keys(n),
		r = Object.keys(e);
	if (i.length - (t && i.indexOf(t) > -1 ? 1 : 0) != r.length - (t && r.indexOf(t) > -1 ? 1 : 0))
		return !1;
	for (let s of i) if (s != t && (r.indexOf(s) == -1 || n[s] !== e[s])) return !1;
	return !0;
}
function Yo(n, e, t) {
	let i = !1;
	if (e)
		for (let r in e)
			(t && r in t) || ((i = !0), r == 'style' ? (n.style.cssText = '') : n.removeAttribute(r));
	if (t)
		for (let r in t)
			(e && e[r] == t[r]) ||
				((i = !0), r == 'style' ? (n.style.cssText = t[r]) : n.setAttribute(r, t[r]));
	return i;
}
function NO(n) {
	let e = Object.create(null);
	for (let t = 0; t < n.attributes.length; t++) {
		let i = n.attributes[t];
		e[i.name] = i.value;
	}
	return e;
}
class ke extends fe {
	constructor() {
		super(...arguments),
			(this.children = []),
			(this.length = 0),
			(this.prevAttrs = void 0),
			(this.attrs = null),
			(this.breakAfter = 0);
	}
	merge(e, t, i, r, s, o) {
		if (i) {
			if (!(i instanceof ke)) return !1;
			this.dom || i.transferDOM(this);
		}
		return (
			r && this.setDeco(i ? i.attrs : null), Dc(this, e, t, i ? i.children.slice() : [], s, o), !0
		);
	}
	split(e) {
		let t = new ke();
		if (((t.breakAfter = this.breakAfter), this.length == 0)) return t;
		let { i, off: r } = this.childPos(e);
		r &&
			(t.append(this.children[i].split(r), 0),
			this.children[i].merge(r, this.children[i].length, null, !1, 0, 0),
			i++);
		for (let s = i; s < this.children.length; s++) t.append(this.children[s], 0);
		for (; i > 0 && this.children[i - 1].length == 0; ) this.children[--i].destroy();
		return (this.children.length = i), this.markDirty(), (this.length = e), t;
	}
	transferDOM(e) {
		this.dom &&
			(this.markDirty(),
			e.setDOM(this.dom),
			(e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs),
			(this.prevAttrs = void 0),
			(this.dom = null));
	}
	setDeco(e) {
		Fl(this.attrs, e) ||
			(this.dom && ((this.prevAttrs = this.attrs), this.markDirty()), (this.attrs = e));
	}
	append(e, t) {
		vc(this, e, t);
	}
	addLineDeco(e) {
		let t = e.spec.attributes,
			i = e.spec.class;
		t && (this.attrs = _o(t, this.attrs || {})),
			i && (this.attrs = _o({ class: i }, this.attrs || {}));
	}
	domAtPos(e) {
		return kc(this, e);
	}
	reuseDOM(e) {
		e.nodeName == 'DIV' && (this.setDOM(e), (this.flags |= 6));
	}
	sync(e, t) {
		var i;
		this.dom
			? this.flags & 4 &&
				(Oc(this.dom),
				(this.dom.className = 'cm-line'),
				(this.prevAttrs = this.attrs ? null : void 0))
			: (this.setDOM(document.createElement('div')),
				(this.dom.className = 'cm-line'),
				(this.prevAttrs = this.attrs ? null : void 0)),
			this.prevAttrs !== void 0 &&
				(Yo(this.dom, this.prevAttrs, this.attrs),
				this.dom.classList.add('cm-line'),
				(this.prevAttrs = void 0)),
			super.sync(e, t);
		let r = this.dom.lastChild;
		for (; r && fe.get(r) instanceof Lt; ) r = r.lastChild;
		if (
			!r ||
			!this.length ||
			(r.nodeName != 'BR' &&
				((i = fe.get(r)) === null || i === void 0 ? void 0 : i.isEditable) == !1 &&
				(!z.ios || !this.children.some((s) => s instanceof Dt)))
		) {
			let s = document.createElement('BR');
			(s.cmIgnore = !0), this.dom.appendChild(s);
		}
	}
	measureTextSize() {
		if (this.children.length == 0 || this.length > 20) return null;
		let e = 0,
			t;
		for (let i of this.children) {
			if (!(i instanceof Dt) || /[^ -~]/.test(i.text)) return null;
			let r = tn(i.dom);
			if (r.length != 1) return null;
			(e += r[0].width), (t = r[0].height);
		}
		return e
			? {
					lineHeight: this.dom.getBoundingClientRect().height,
					charWidth: e / this.length,
					textHeight: t
				}
			: null;
	}
	coordsAt(e, t) {
		let i = Qc(this, e, t);
		if (!this.children.length && i && this.parent) {
			let { heightOracle: r } = this.parent.view.viewState,
				s = i.bottom - i.top;
			if (Math.abs(s - r.lineHeight) < 2 && r.textHeight < s) {
				let o = (s - r.textHeight) / 2;
				return {
					top: i.top + o,
					bottom: i.bottom - o,
					left: i.left,
					right: i.left
				};
			}
		}
		return i;
	}
	become(e) {
		return !1;
	}
	covers() {
		return !0;
	}
	static find(e, t) {
		for (let i = 0, r = 0; i < e.children.length; i++) {
			let s = e.children[i],
				o = r + s.length;
			if (o >= t) {
				if (s instanceof ke) return s;
				if (o > t) break;
			}
			r = o + s.breakAfter;
		}
		return null;
	}
}
class Nt extends fe {
	constructor(e, t, i) {
		super(),
			(this.widget = e),
			(this.length = t),
			(this.deco = i),
			(this.breakAfter = 0),
			(this.prevWidget = null);
	}
	merge(e, t, i, r, s, o) {
		return i &&
			(!(i instanceof Nt) ||
				!this.widget.compare(i.widget) ||
				(e > 0 && s <= 0) ||
				(t < this.length && o <= 0))
			? !1
			: ((this.length = e + (i ? i.length : 0) + (this.length - t)), !0);
	}
	domAtPos(e) {
		return e == 0 ? We.before(this.dom) : We.after(this.dom, e == this.length);
	}
	split(e) {
		let t = this.length - e;
		this.length = e;
		let i = new Nt(this.widget, t, this.deco);
		return (i.breakAfter = this.breakAfter), i;
	}
	get children() {
		return Tl;
	}
	sync(e) {
		(!this.dom || !this.widget.updateDOM(this.dom, e)) &&
			(this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
			(this.prevWidget = null),
			this.setDOM(this.widget.toDOM(e)),
			this.widget.editable || (this.dom.contentEditable = 'false'));
	}
	get overrideDOMText() {
		return this.parent
			? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd)
			: ae.empty;
	}
	domBoundsAround() {
		return null;
	}
	become(e) {
		return e instanceof Nt && e.widget.constructor == this.widget.constructor
			? (e.widget.compare(this.widget) || this.markDirty(!0),
				this.dom && !this.prevWidget && (this.prevWidget = this.widget),
				(this.widget = e.widget),
				(this.length = e.length),
				(this.deco = e.deco),
				(this.breakAfter = e.breakAfter),
				!0)
			: !1;
	}
	ignoreMutation() {
		return !0;
	}
	ignoreEvent(e) {
		return this.widget.ignoreEvent(e);
	}
	get isEditable() {
		return !1;
	}
	get isWidget() {
		return !0;
	}
	coordsAt(e, t) {
		return this.widget.coordsAt(this.dom, e, t);
	}
	destroy() {
		super.destroy(), this.dom && this.widget.destroy(this.dom);
	}
	covers(e) {
		let { startSide: t, endSide: i } = this.deco;
		return t == i ? !1 : e < 0 ? t < 0 : i > 0;
	}
}
class Ht {
	eq(e) {
		return !1;
	}
	updateDOM(e, t) {
		return !1;
	}
	compare(e) {
		return this == e || (this.constructor == e.constructor && this.eq(e));
	}
	get estimatedHeight() {
		return -1;
	}
	get lineBreaks() {
		return 0;
	}
	ignoreEvent(e) {
		return !0;
	}
	coordsAt(e, t, i) {
		return null;
	}
	get isHidden() {
		return !1;
	}
	get editable() {
		return !1;
	}
	destroy(e) {}
}
var He = (function (n) {
	return (
		(n[(n.Text = 0)] = 'Text'),
		(n[(n.WidgetBefore = 1)] = 'WidgetBefore'),
		(n[(n.WidgetAfter = 2)] = 'WidgetAfter'),
		(n[(n.WidgetRange = 3)] = 'WidgetRange'),
		n
	);
})(He || (He = {}));
class I extends $i {
	constructor(e, t, i, r) {
		super(), (this.startSide = e), (this.endSide = t), (this.widget = i), (this.spec = r);
	}
	get heightRelevant() {
		return !1;
	}
	static mark(e) {
		return new Gn(e);
	}
	static widget(e) {
		let t = Math.max(-1e4, Math.min(1e4, e.side || 0)),
			i = !!e.block;
		return (
			(t += i && !e.inlineOrder ? (t > 0 ? 3e8 : -4e8) : t > 0 ? 1e8 : -1e8),
			new hi(e, t, t, i, e.widget || null, !1)
		);
	}
	static replace(e) {
		let t = !!e.block,
			i,
			r;
		if (e.isBlockGap) (i = -5e8), (r = 4e8);
		else {
			let { start: s, end: o } = Cc(e, t);
			(i = (s ? (t ? -3e8 : -1) : 5e8) - 1), (r = (o ? (t ? 2e8 : 1) : -6e8) + 1);
		}
		return new hi(e, i, r, t, e.widget || null, !0);
	}
	static line(e) {
		return new Hn(e);
	}
	static set(e, t = !1) {
		return le.of(e, t);
	}
	hasHeight() {
		return this.widget ? this.widget.estimatedHeight > -1 : !1;
	}
}
I.none = le.empty;
class Gn extends I {
	constructor(e) {
		let { start: t, end: i } = Cc(e);
		super(t ? -1 : 5e8, i ? 1 : -6e8, null, e),
			(this.tagName = e.tagName || 'span'),
			(this.class = e.class || ''),
			(this.attrs = e.attributes || null);
	}
	eq(e) {
		var t, i;
		return (
			this == e ||
			(e instanceof Gn &&
				this.tagName == e.tagName &&
				(this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) ==
					(e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) &&
				Fl(this.attrs, e.attrs, 'class'))
		);
	}
	range(e, t = e) {
		if (e >= t) throw new RangeError('Mark decorations may not be empty');
		return super.range(e, t);
	}
}
Gn.prototype.point = !1;
class Hn extends I {
	constructor(e) {
		super(-2e8, -2e8, null, e);
	}
	eq(e) {
		return (
			e instanceof Hn &&
			this.spec.class == e.spec.class &&
			Fl(this.spec.attributes, e.spec.attributes)
		);
	}
	range(e, t = e) {
		if (t != e) throw new RangeError('Line decoration ranges must be zero-length');
		return super.range(e, t);
	}
}
Hn.prototype.mapMode = Ye.TrackBefore;
Hn.prototype.point = !0;
class hi extends I {
	constructor(e, t, i, r, s, o) {
		super(t, i, s, e),
			(this.block = r),
			(this.isReplace = o),
			(this.mapMode = r ? (t <= 0 ? Ye.TrackBefore : Ye.TrackAfter) : Ye.TrackDel);
	}
	get type() {
		return this.startSide != this.endSide
			? He.WidgetRange
			: this.startSide <= 0
				? He.WidgetBefore
				: He.WidgetAfter;
	}
	get heightRelevant() {
		return (
			this.block ||
			(!!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0))
		);
	}
	eq(e) {
		return (
			e instanceof hi &&
			VO(this.widget, e.widget) &&
			this.block == e.block &&
			this.startSide == e.startSide &&
			this.endSide == e.endSide
		);
	}
	range(e, t = e) {
		if (this.isReplace && (e > t || (e == t && this.startSide > 0 && this.endSide <= 0)))
			throw new RangeError('Invalid range for replacement decoration');
		if (!this.isReplace && t != e)
			throw new RangeError('Widget decorations can only have zero-length ranges');
		return super.range(e, t);
	}
}
hi.prototype.point = !0;
function Cc(n, e = !1) {
	let { inclusiveStart: t, inclusiveEnd: i } = n;
	return (
		t == null && (t = n.inclusive), i == null && (i = n.inclusive), { start: t ?? e, end: i ?? e }
	);
}
function VO(n, e) {
	return n == e || !!(n && e && n.compare(e));
}
function No(n, e, t, i = 0) {
	let r = t.length - 1;
	r >= 0 && t[r] + i >= n ? (t[r] = Math.max(t[r], e)) : t.push(n, e);
}
class $n {
	constructor(e, t, i, r) {
		(this.doc = e),
			(this.pos = t),
			(this.end = i),
			(this.disallowBlockEffectsFor = r),
			(this.content = []),
			(this.curLine = null),
			(this.breakAtStart = 0),
			(this.pendingBuffer = 0),
			(this.bufferMarks = []),
			(this.atCursorPos = !0),
			(this.openStart = -1),
			(this.openEnd = -1),
			(this.text = ''),
			(this.textOff = 0),
			(this.cursor = e.iter()),
			(this.skip = t);
	}
	posCovered() {
		if (this.content.length == 0)
			return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
		let e = this.content[this.content.length - 1];
		return !(e.breakAfter || (e instanceof Nt && e.deco.endSide < 0));
	}
	getLine() {
		return (
			this.curLine || (this.content.push((this.curLine = new ke())), (this.atCursorPos = !0)),
			this.curLine
		);
	}
	flushBuffer(e = this.bufferMarks) {
		this.pendingBuffer &&
			(this.curLine.append(lr(new nn(-1), e), e.length), (this.pendingBuffer = 0));
	}
	addBlockWidget(e) {
		this.flushBuffer(), (this.curLine = null), this.content.push(e);
	}
	finish(e) {
		this.pendingBuffer && e <= this.bufferMarks.length
			? this.flushBuffer()
			: (this.pendingBuffer = 0),
			!this.posCovered() &&
				!(e && this.content.length && this.content[this.content.length - 1] instanceof Nt) &&
				this.getLine();
	}
	buildText(e, t, i) {
		for (; e > 0; ) {
			if (this.textOff == this.text.length) {
				let { value: s, lineBreak: o, done: l } = this.cursor.next(this.skip);
				if (((this.skip = 0), l))
					throw new Error('Ran out of text content when drawing inline views');
				if (o) {
					this.posCovered() || this.getLine(),
						this.content.length
							? (this.content[this.content.length - 1].breakAfter = 1)
							: (this.breakAtStart = 1),
						this.flushBuffer(),
						(this.curLine = null),
						(this.atCursorPos = !0),
						e--;
					continue;
				} else (this.text = s), (this.textOff = 0);
			}
			let r = Math.min(this.text.length - this.textOff, e, 512);
			this.flushBuffer(t.slice(t.length - i)),
				this.getLine().append(lr(new Dt(this.text.slice(this.textOff, this.textOff + r)), t), i),
				(this.atCursorPos = !0),
				(this.textOff += r),
				(e -= r),
				(i = 0);
		}
	}
	span(e, t, i, r) {
		this.buildText(t - e, i, r), (this.pos = t), this.openStart < 0 && (this.openStart = r);
	}
	point(e, t, i, r, s, o) {
		if (this.disallowBlockEffectsFor[o] && i instanceof hi) {
			if (i.block) throw new RangeError('Block decorations may not be specified via plugins');
			if (t > this.doc.lineAt(this.pos).to)
				throw new RangeError(
					'Decorations that replace line breaks may not be specified via plugins'
				);
		}
		let l = t - e;
		if (i instanceof hi)
			if (i.block)
				i.startSide > 0 && !this.posCovered() && this.getLine(),
					this.addBlockWidget(new Nt(i.widget || rn.block, l, i));
			else {
				let a = ii.create(i.widget || rn.inline, l, l ? 0 : i.startSide),
					u = this.atCursorPos && !a.isEditable && s <= r.length && (e < t || i.startSide > 0),
					h = !a.isEditable && (e < t || s > r.length || i.startSide <= 0),
					c = this.getLine();
				this.pendingBuffer == 2 && !u && !a.isEditable && (this.pendingBuffer = 0),
					this.flushBuffer(r),
					u && (c.append(lr(new nn(1), r), s), (s = r.length + Math.max(0, s - r.length))),
					c.append(lr(a, r), s),
					(this.atCursorPos = h),
					(this.pendingBuffer = h ? (e < t || s > r.length ? 1 : 2) : 0),
					this.pendingBuffer && (this.bufferMarks = r.slice());
			}
		else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
		l &&
			(this.textOff + l <= this.text.length
				? (this.textOff += l)
				: ((this.skip += l - (this.text.length - this.textOff)),
					(this.text = ''),
					(this.textOff = 0)),
			(this.pos = t)),
			this.openStart < 0 && (this.openStart = s);
	}
	static build(e, t, i, r, s) {
		let o = new $n(e, t, i, s);
		return (
			(o.openEnd = le.spans(r, t, i, o)),
			o.openStart < 0 && (o.openStart = o.openEnd),
			o.finish(o.openEnd),
			o
		);
	}
}
function lr(n, e) {
	for (let t of e) n = new Lt(t, [n], n.length);
	return n;
}
class rn extends Ht {
	constructor(e) {
		super(), (this.tag = e);
	}
	eq(e) {
		return e.tag == this.tag;
	}
	toDOM() {
		return document.createElement(this.tag);
	}
	updateDOM(e) {
		return e.nodeName.toLowerCase() == this.tag;
	}
	get isHidden() {
		return !0;
	}
}
rn.inline = new rn('span');
rn.block = new rn('div');
var me = (function (n) {
	return (n[(n.LTR = 0)] = 'LTR'), (n[(n.RTL = 1)] = 'RTL'), n;
})(me || (me = {}));
const Ri = me.LTR,
	Ml = me.RTL;
function Pc(n) {
	let e = [];
	for (let t = 0; t < n.length; t++) e.push(1 << +n[t]);
	return e;
}
const IO = Pc(
		'88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008'
	),
	LO = Pc(
		'4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333'
	),
	Vo = Object.create(null),
	kt = [];
for (let n of ['()', '[]', '{}']) {
	let e = n.charCodeAt(0),
		t = n.charCodeAt(1);
	(Vo[e] = t), (Vo[t] = -e);
}
function Ac(n) {
	return n <= 247
		? IO[n]
		: 1424 <= n && n <= 1524
			? 2
			: 1536 <= n && n <= 1785
				? LO[n - 1536]
				: 1774 <= n && n <= 2220
					? 4
					: 8192 <= n && n <= 8204
						? 256
						: 64336 <= n && n <= 65023
							? 4
							: 1;
}
const UO = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class ni {
	get dir() {
		return this.level % 2 ? Ml : Ri;
	}
	constructor(e, t, i) {
		(this.from = e), (this.to = t), (this.level = i);
	}
	side(e, t) {
		return (this.dir == t) == e ? this.to : this.from;
	}
	forward(e, t) {
		return e == (this.dir == t);
	}
	static find(e, t, i, r) {
		let s = -1;
		for (let o = 0; o < e.length; o++) {
			let l = e[o];
			if (l.from <= t && l.to >= t) {
				if (l.level == i) return o;
				(s < 0 || (r != 0 ? (r < 0 ? l.from < t : l.to > t) : e[s].level > l.level)) && (s = o);
			}
		}
		if (s < 0) throw new RangeError('Index out of range');
		return s;
	}
}
function $c(n, e) {
	if (n.length != e.length) return !1;
	for (let t = 0; t < n.length; t++) {
		let i = n[t],
			r = e[t];
		if (i.from != r.from || i.to != r.to || i.direction != r.direction || !$c(i.inner, r.inner))
			return !1;
	}
	return !0;
}
const ce = [];
function GO(n, e, t, i, r) {
	for (let s = 0; s <= i.length; s++) {
		let o = s ? i[s - 1].to : e,
			l = s < i.length ? i[s].from : t,
			a = s ? 256 : r;
		for (let u = o, h = a, c = a; u < l; u++) {
			let f = Ac(n.charCodeAt(u));
			f == 512 ? (f = h) : f == 8 && c == 4 && (f = 16),
				(ce[u] = f == 4 ? 2 : f),
				f & 7 && (c = f),
				(h = f);
		}
		for (let u = o, h = a, c = a; u < l; u++) {
			let f = ce[u];
			if (f == 128) u < l - 1 && h == ce[u + 1] && h & 24 ? (f = ce[u] = h) : (ce[u] = 256);
			else if (f == 64) {
				let d = u + 1;
				for (; d < l && ce[d] == 64; ) d++;
				let p = (u && h == 8) || (d < t && ce[d] == 8) ? (c == 1 ? 1 : 8) : 256;
				for (let O = u; O < d; O++) ce[O] = p;
				u = d - 1;
			} else f == 8 && c == 1 && (ce[u] = 1);
			(h = f), f & 7 && (c = f);
		}
	}
}
function HO(n, e, t, i, r) {
	let s = r == 1 ? 2 : 1;
	for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
		let u = o ? i[o - 1].to : e,
			h = o < i.length ? i[o].from : t;
		for (let c = u, f, d, p; c < h; c++)
			if ((d = Vo[(f = n.charCodeAt(c))]))
				if (d < 0) {
					for (let O = l - 3; O >= 0; O -= 3)
						if (kt[O + 1] == -d) {
							let m = kt[O + 2],
								g = m & 2 ? r : m & 4 ? (m & 1 ? s : r) : 0;
							g && (ce[c] = ce[kt[O]] = g), (l = O);
							break;
						}
				} else {
					if (kt.length == 189) break;
					(kt[l++] = c), (kt[l++] = f), (kt[l++] = a);
				}
			else if ((p = ce[c]) == 2 || p == 1) {
				let O = p == r;
				a = O ? 0 : 1;
				for (let m = l - 3; m >= 0; m -= 3) {
					let g = kt[m + 2];
					if (g & 2) break;
					if (O) kt[m + 2] |= 2;
					else {
						if (g & 4) break;
						kt[m + 2] |= 4;
					}
				}
			}
	}
}
function JO(n, e, t, i) {
	for (let r = 0, s = i; r <= t.length; r++) {
		let o = r ? t[r - 1].to : n,
			l = r < t.length ? t[r].from : e;
		for (let a = o; a < l; ) {
			let u = ce[a];
			if (u == 256) {
				let h = a + 1;
				for (;;)
					if (h == l) {
						if (r == t.length) break;
						(h = t[r++].to), (l = r < t.length ? t[r].from : e);
					} else if (ce[h] == 256) h++;
					else break;
				let c = s == 1,
					f = (h < e ? ce[h] : i) == 1,
					d = c == f ? (c ? 1 : 2) : i;
				for (let p = h, O = r, m = O ? t[O - 1].to : n; p > a; )
					p == m && ((p = t[--O].from), (m = O ? t[O - 1].to : n)), (ce[--p] = d);
				a = h;
			} else (s = u), a++;
		}
	}
}
function Io(n, e, t, i, r, s, o) {
	let l = i % 2 ? 2 : 1;
	if (i % 2 == r % 2)
		for (let a = e, u = 0; a < t; ) {
			let h = !0,
				c = !1;
			if (u == s.length || a < s[u].from) {
				let O = ce[a];
				O != l && ((h = !1), (c = O == 16));
			}
			let f = !h && l == 1 ? [] : null,
				d = h ? i : i + 1,
				p = a;
			e: for (;;)
				if (u < s.length && p == s[u].from) {
					if (c) break e;
					let O = s[u];
					if (!h)
						for (let m = O.to, g = u + 1; ; ) {
							if (m == t) break e;
							if (g < s.length && s[g].from == m) m = s[g++].to;
							else {
								if (ce[m] == l) break e;
								break;
							}
						}
					if ((u++, f)) f.push(O);
					else {
						O.from > a && o.push(new ni(a, O.from, d));
						let m = (O.direction == Ri) != !(d % 2);
						Lo(n, m ? i + 1 : i, r, O.inner, O.from, O.to, o), (a = O.to);
					}
					p = O.to;
				} else {
					if (p == t || (h ? ce[p] != l : ce[p] == l)) break;
					p++;
				}
			f ? Io(n, a, p, i + 1, r, f, o) : a < p && o.push(new ni(a, p, d)), (a = p);
		}
	else
		for (let a = t, u = s.length; a > e; ) {
			let h = !0,
				c = !1;
			if (!u || a > s[u - 1].to) {
				let O = ce[a - 1];
				O != l && ((h = !1), (c = O == 16));
			}
			let f = !h && l == 1 ? [] : null,
				d = h ? i : i + 1,
				p = a;
			e: for (;;)
				if (u && p == s[u - 1].to) {
					if (c) break e;
					let O = s[--u];
					if (!h)
						for (let m = O.from, g = u; ; ) {
							if (m == e) break e;
							if (g && s[g - 1].to == m) m = s[--g].from;
							else {
								if (ce[m - 1] == l) break e;
								break;
							}
						}
					if (f) f.push(O);
					else {
						O.to < a && o.push(new ni(O.to, a, d));
						let m = (O.direction == Ri) != !(d % 2);
						Lo(n, m ? i + 1 : i, r, O.inner, O.from, O.to, o), (a = O.from);
					}
					p = O.from;
				} else {
					if (p == e || (h ? ce[p - 1] != l : ce[p - 1] == l)) break;
					p--;
				}
			f ? Io(n, p, a, i + 1, r, f, o) : p < a && o.push(new ni(p, a, d)), (a = p);
		}
}
function Lo(n, e, t, i, r, s, o) {
	let l = e % 2 ? 2 : 1;
	GO(n, r, s, i, l), HO(n, r, s, i, l), JO(r, s, i, l), Io(n, r, s, e, t, i, o);
}
function KO(n, e, t) {
	if (!n) return [new ni(0, 0, e == Ml ? 1 : 0)];
	if (e == Ri && !t.length && !UO.test(n)) return Ec(n.length);
	if (t.length) for (; n.length > ce.length; ) ce[ce.length] = 256;
	let i = [],
		r = e == Ri ? 0 : 1;
	return Lo(n, r, r, t, 0, n.length, i), i;
}
function Ec(n) {
	return [new ni(0, n, 0)];
}
let Zc = '';
function em(n, e, t, i, r) {
	var s;
	let o = i.head - n.from,
		l = ni.find(e, o, (s = i.bidiLevel) !== null && s !== void 0 ? s : -1, i.assoc),
		a = e[l],
		u = a.side(r, t);
	if (o == u) {
		let f = (l += r ? 1 : -1);
		if (f < 0 || f >= e.length) return null;
		(a = e[(l = f)]), (o = a.side(!r, t)), (u = a.side(r, t));
	}
	let h = Me(n.text, o, a.forward(r, t));
	(h < a.from || h > a.to) && (h = u), (Zc = n.text.slice(Math.min(o, h), Math.max(o, h)));
	let c = l == (r ? e.length - 1 : 0) ? null : e[l + (r ? 1 : -1)];
	return c && h == u && c.level + (r ? 0 : 1) < a.level
		? Z.cursor(c.side(!r, t) + n.from, c.forward(r, t) ? 1 : -1, c.level)
		: Z.cursor(h + n.from, a.forward(r, t) ? -1 : 1, a.level);
}
function tm(n, e, t) {
	for (let i = e; i < t; i++) {
		let r = Ac(n.charCodeAt(i));
		if (r == 1) return Ri;
		if (r == 2 || r == 4) return Ml;
	}
	return Ri;
}
const Rc = X.define(),
	Tc = X.define(),
	Fc = X.define(),
	Mc = X.define(),
	Uo = X.define(),
	Bc = X.define(),
	jc = X.define(),
	Wc = X.define({ combine: (n) => n.some((e) => e) }),
	zc = X.define({ combine: (n) => n.some((e) => e) }),
	Xc = X.define();
class Gi {
	constructor(e, t = 'nearest', i = 'nearest', r = 5, s = 5, o = !1) {
		(this.range = e),
			(this.y = t),
			(this.x = i),
			(this.yMargin = r),
			(this.xMargin = s),
			(this.isSnapshot = o);
	}
	map(e) {
		return e.empty
			? this
			: new Gi(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
	}
	clip(e) {
		return this.range.to <= e.doc.length
			? this
			: new Gi(Z.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
	}
}
const ar = te.define({ map: (n, e) => n.map(e) });
function Ue(n, e, t) {
	let i = n.facet(Mc);
	i.length
		? i[0](e)
		: window.onerror
			? window.onerror(String(e), t, void 0, void 0, e)
			: t
				? console.error(t + ':', e)
				: console.error(e);
}
const bs = X.define({ combine: (n) => (n.length ? n[0] : !0) });
let im = 0;
const xn = X.define();
class De {
	constructor(e, t, i, r, s) {
		(this.id = e),
			(this.create = t),
			(this.domEventHandlers = i),
			(this.domEventObservers = r),
			(this.extension = s(this));
	}
	static define(e, t) {
		const { eventHandlers: i, eventObservers: r, provide: s, decorations: o } = t || {};
		return new De(im++, e, i, r, (l) => {
			let a = [xn.of(l)];
			return (
				o &&
					a.push(
						Wn.of((u) => {
							let h = u.plugin(l);
							return h ? o(h) : I.none;
						})
					),
				s && a.push(s(l)),
				a
			);
		});
	}
	static fromClass(e, t) {
		return De.define((i) => new e(i), t);
	}
}
class Ns {
	constructor(e) {
		(this.spec = e), (this.mustUpdate = null), (this.value = null);
	}
	update(e) {
		if (this.value) {
			if (this.mustUpdate) {
				let t = this.mustUpdate;
				if (((this.mustUpdate = null), this.value.update))
					try {
						this.value.update(t);
					} catch (i) {
						if ((Ue(t.state, i, 'CodeMirror plugin crashed'), this.value.destroy))
							try {
								this.value.destroy();
							} catch {}
						this.deactivate();
					}
			}
		} else if (this.spec)
			try {
				this.value = this.spec.create(e);
			} catch (t) {
				Ue(e.state, t, 'CodeMirror plugin crashed'), this.deactivate();
			}
		return this;
	}
	destroy(e) {
		var t;
		if (!((t = this.value) === null || t === void 0) && t.destroy)
			try {
				this.value.destroy();
			} catch (i) {
				Ue(e.state, i, 'CodeMirror plugin crashed');
			}
	}
	deactivate() {
		this.spec = this.value = null;
	}
}
const qc = X.define(),
	Bl = X.define(),
	Wn = X.define(),
	_c = X.define(),
	jl = X.define(),
	Yc = X.define();
function Va(n, e) {
	let t = n.state.facet(Yc);
	if (!t.length) return t;
	let i = t.map((s) => (s instanceof Function ? s(n) : s)),
		r = [];
	return (
		le.spans(i, e.from, e.to, {
			point() {},
			span(s, o, l, a) {
				let u = s - e.from,
					h = o - e.from,
					c = r;
				for (let f = l.length - 1; f >= 0; f--, a--) {
					let d = l[f].spec.bidiIsolate,
						p;
					if (
						(d == null && (d = tm(e.text, u, h)),
						a > 0 && c.length && (p = c[c.length - 1]).to == u && p.direction == d)
					)
						(p.to = h), (c = p.inner);
					else {
						let O = { from: u, to: h, direction: d, inner: [] };
						c.push(O), (c = O.inner);
					}
				}
			}
		}),
		r
	);
}
const Nc = X.define();
function Vc(n) {
	let e = 0,
		t = 0,
		i = 0,
		r = 0;
	for (let s of n.state.facet(Nc)) {
		let o = s(n);
		o &&
			(o.left != null && (e = Math.max(e, o.left)),
			o.right != null && (t = Math.max(t, o.right)),
			o.top != null && (i = Math.max(i, o.top)),
			o.bottom != null && (r = Math.max(r, o.bottom)));
	}
	return { left: e, right: t, top: i, bottom: r };
}
const Dn = X.define();
class at {
	constructor(e, t, i, r) {
		(this.fromA = e), (this.toA = t), (this.fromB = i), (this.toB = r);
	}
	join(e) {
		return new at(
			Math.min(this.fromA, e.fromA),
			Math.max(this.toA, e.toA),
			Math.min(this.fromB, e.fromB),
			Math.max(this.toB, e.toB)
		);
	}
	addToSet(e) {
		let t = e.length,
			i = this;
		for (; t > 0; t--) {
			let r = e[t - 1];
			if (!(r.fromA > i.toA)) {
				if (r.toA < i.fromA) break;
				(i = i.join(r)), e.splice(t - 1, 1);
			}
		}
		return e.splice(t, 0, i), e;
	}
	static extendWithRanges(e, t) {
		if (t.length == 0) return e;
		let i = [];
		for (let r = 0, s = 0, o = 0, l = 0; ; r++) {
			let a = r == e.length ? null : e[r],
				u = o - l,
				h = a ? a.fromB : 1e9;
			for (; s < t.length && t[s] < h; ) {
				let c = t[s],
					f = t[s + 1],
					d = Math.max(l, c),
					p = Math.min(h, f);
				if ((d <= p && new at(d + u, p + u, d, p).addToSet(i), f > h)) break;
				s += 2;
			}
			if (!a) return i;
			new at(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), (o = a.toA), (l = a.toB);
		}
	}
}
class Nr {
	constructor(e, t, i) {
		(this.view = e),
			(this.state = t),
			(this.transactions = i),
			(this.flags = 0),
			(this.startState = e.state),
			(this.changes = ve.empty(this.startState.doc.length));
		for (let s of i) this.changes = this.changes.compose(s.changes);
		let r = [];
		this.changes.iterChangedRanges((s, o, l, a) => r.push(new at(s, o, l, a))),
			(this.changedRanges = r);
	}
	static create(e, t, i) {
		return new Nr(e, t, i);
	}
	get viewportChanged() {
		return (this.flags & 4) > 0;
	}
	get heightChanged() {
		return (this.flags & 2) > 0;
	}
	get geometryChanged() {
		return this.docChanged || (this.flags & 10) > 0;
	}
	get focusChanged() {
		return (this.flags & 1) > 0;
	}
	get docChanged() {
		return !this.changes.empty;
	}
	get selectionSet() {
		return this.transactions.some((e) => e.selection);
	}
	get empty() {
		return this.flags == 0 && this.transactions.length == 0;
	}
}
class Ia extends fe {
	get length() {
		return this.view.state.doc.length;
	}
	constructor(e) {
		super(),
			(this.view = e),
			(this.decorations = []),
			(this.dynamicDecorationMap = []),
			(this.domChanged = null),
			(this.hasComposition = null),
			(this.markedForComposition = new Set()),
			(this.lastCompositionAfterCursor = !1),
			(this.minWidth = 0),
			(this.minWidthFrom = 0),
			(this.minWidthTo = 0),
			(this.impreciseAnchor = null),
			(this.impreciseHead = null),
			(this.forceSelection = !1),
			(this.lastUpdate = Date.now()),
			this.setDOM(e.contentDOM),
			(this.children = [new ke()]),
			this.children[0].setParent(this),
			this.updateDeco(),
			this.updateInner([new at(0, 0, 0, e.state.doc.length)], 0, null);
	}
	update(e) {
		var t;
		let i = e.changedRanges;
		this.minWidth > 0 &&
			i.length &&
			(i.every(({ fromA: u, toA: h }) => h < this.minWidthFrom || u > this.minWidthTo)
				? ((this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1)),
					(this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)))
				: (this.minWidth = this.minWidthFrom = this.minWidthTo = 0));
		let r = -1;
		this.view.inputState.composing >= 0 &&
			(!((t = this.domChanged) === null || t === void 0) && t.newSel
				? (r = this.domChanged.newSel.head)
				: !um(e.changes, this.hasComposition) &&
					!e.selectionSet &&
					(r = e.state.selection.main.head));
		let s = r > -1 ? rm(this.view, e.changes, r) : null;
		if (((this.domChanged = null), this.hasComposition)) {
			this.markedForComposition.clear();
			let { from: u, to: h } = this.hasComposition;
			i = new at(u, h, e.changes.mapPos(u, -1), e.changes.mapPos(h, 1)).addToSet(i.slice());
		}
		(this.hasComposition = s ? { from: s.range.fromB, to: s.range.toB } : null),
			(z.ie || z.chrome) &&
				!s &&
				e &&
				e.state.doc.lines != e.startState.doc.lines &&
				(this.forceSelection = !0);
		let o = this.decorations,
			l = this.updateDeco(),
			a = lm(o, l, e.changes);
		return (
			(i = at.extendWithRanges(i, a)),
			!(this.flags & 7) && i.length == 0
				? !1
				: (this.updateInner(i, e.startState.doc.length, s),
					e.transactions.length && (this.lastUpdate = Date.now()),
					!0)
		);
	}
	updateInner(e, t, i) {
		(this.view.viewState.mustMeasureContent = !0), this.updateChildren(e, t, i);
		let { observer: r } = this.view;
		r.ignore(() => {
			(this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + 'px'),
				(this.dom.style.flexBasis = this.minWidth ? this.minWidth + 'px' : '');
			let o = z.chrome || z.ios ? { node: r.selectionRange.focusNode, written: !1 } : void 0;
			this.sync(this.view, o),
				(this.flags &= -8),
				o && (o.written || r.selectionRange.focusNode != o.node) && (this.forceSelection = !0),
				(this.dom.style.height = '');
		}),
			this.markedForComposition.forEach((o) => (o.flags &= -9));
		let s = [];
		if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
			for (let o of this.children) o instanceof Nt && o.widget instanceof La && s.push(o.dom);
		r.updateGaps(s);
	}
	updateChildren(e, t, i) {
		let r = i ? i.range.addToSet(e.slice()) : e,
			s = this.childCursor(t);
		for (let o = r.length - 1; ; o--) {
			let l = o >= 0 ? r[o] : null;
			if (!l) break;
			let { fromA: a, toA: u, fromB: h, toB: c } = l,
				f,
				d,
				p,
				O;
			if (i && i.range.fromB < c && i.range.toB > h) {
				let k = $n.build(
						this.view.state.doc,
						h,
						i.range.fromB,
						this.decorations,
						this.dynamicDecorationMap
					),
					x = $n.build(
						this.view.state.doc,
						i.range.toB,
						c,
						this.decorations,
						this.dynamicDecorationMap
					);
				(d = k.breakAtStart), (p = k.openStart), (O = x.openEnd);
				let P = this.compositionView(i);
				x.breakAtStart
					? (P.breakAfter = 1)
					: x.content.length &&
						P.merge(P.length, P.length, x.content[0], !1, x.openStart, 0) &&
						((P.breakAfter = x.content[0].breakAfter), x.content.shift()),
					k.content.length &&
						P.merge(0, 0, k.content[k.content.length - 1], !0, 0, k.openEnd) &&
						k.content.pop(),
					(f = k.content.concat(P).concat(x.content));
			} else
				({
					content: f,
					breakAtStart: d,
					openStart: p,
					openEnd: O
				} = $n.build(this.view.state.doc, h, c, this.decorations, this.dynamicDecorationMap));
			let { i: m, off: g } = s.findPos(u, 1),
				{ i: S, off: C } = s.findPos(a, -1);
			xc(this, S, C, m, g, f, d, p, O);
		}
		i && this.fixCompositionDOM(i);
	}
	compositionView(e) {
		let t = new Dt(e.text.nodeValue);
		t.flags |= 8;
		for (let { deco: r } of e.marks) t = new Lt(r, [t], t.length);
		let i = new ke();
		return i.append(t, 0), i;
	}
	fixCompositionDOM(e) {
		let t = (s, o) => {
				(o.flags |= 8 | (o.children.some((a) => a.flags & 7) ? 1 : 0)),
					this.markedForComposition.add(o);
				let l = fe.get(s);
				l && l != o && (l.dom = null), o.setDOM(s);
			},
			i = this.childPos(e.range.fromB, 1),
			r = this.children[i.i];
		t(e.line, r);
		for (let s = e.marks.length - 1; s >= -1; s--)
			(i = r.childPos(i.off, 1)), (r = r.children[i.i]), t(s >= 0 ? e.marks[s].node : e.text, r);
	}
	updateSelection(e = !1, t = !1) {
		(e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
		let i = this.view.root.activeElement,
			r = i == this.dom,
			s = !r && Er(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
		if (!(r || t || s)) return;
		let o = this.forceSelection;
		this.forceSelection = !1;
		let l = this.view.state.selection.main,
			a = this.moveToLine(this.domAtPos(l.anchor)),
			u = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
		if (z.gecko && l.empty && !this.hasComposition && nm(a)) {
			let c = document.createTextNode('');
			this.view.observer.ignore(() => a.node.insertBefore(c, a.node.childNodes[a.offset] || null)),
				(a = u = new We(c, 0)),
				(o = !0);
		}
		let h = this.view.observer.selectionRange;
		(o ||
			!h.focusNode ||
			((!An(a.node, a.offset, h.anchorNode, h.anchorOffset) ||
				!An(u.node, u.offset, h.focusNode, h.focusOffset)) &&
				!this.suppressWidgetCursorChange(h, l))) &&
			(this.view.observer.ignore(() => {
				z.android &&
					z.chrome &&
					this.dom.contains(h.focusNode) &&
					am(h.focusNode, this.dom) &&
					(this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
				let c = _r(this.view.root);
				if (c)
					if (l.empty) {
						if (z.gecko) {
							let f = sm(a.node, a.offset);
							if (f && f != 3) {
								let d = (f == 1 ? gc : yc)(a.node, a.offset);
								d && (a = new We(d.node, d.offset));
							}
						}
						c.collapse(a.node, a.offset),
							l.bidiLevel != null &&
								c.caretBidiLevel !== void 0 &&
								(c.caretBidiLevel = l.bidiLevel);
					} else if (c.extend) {
						c.collapse(a.node, a.offset);
						try {
							c.extend(u.node, u.offset);
						} catch {}
					} else {
						let f = document.createRange();
						l.anchor > l.head && ([a, u] = [u, a]),
							f.setEnd(u.node, u.offset),
							f.setStart(a.node, a.offset),
							c.removeAllRanges(),
							c.addRange(f);
					}
				s && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
			}),
			this.view.observer.setSelectionRange(a, u)),
			(this.impreciseAnchor = a.precise ? null : new We(h.anchorNode, h.anchorOffset)),
			(this.impreciseHead = u.precise ? null : new We(h.focusNode, h.focusOffset));
	}
	suppressWidgetCursorChange(e, t) {
		return (
			this.hasComposition &&
			t.empty &&
			An(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) &&
			this.posFromDOM(e.focusNode, e.focusOffset) == t.head
		);
	}
	enforceCursorAssoc() {
		if (this.hasComposition) return;
		let { view: e } = this,
			t = e.state.selection.main,
			i = _r(e.root),
			{ anchorNode: r, anchorOffset: s } = e.observer.selectionRange;
		if (!i || !t.empty || !t.assoc || !i.modify) return;
		let o = ke.find(this, t.head);
		if (!o) return;
		let l = o.posAtStart;
		if (t.head == l || t.head == l + o.length) return;
		let a = this.coordsAt(t.head, -1),
			u = this.coordsAt(t.head, 1);
		if (!a || !u || a.bottom > u.top) return;
		let h = this.domAtPos(t.head + t.assoc);
		i.collapse(h.node, h.offset),
			i.modify('move', t.assoc < 0 ? 'forward' : 'backward', 'lineboundary'),
			e.observer.readSelectionRange();
		let c = e.observer.selectionRange;
		e.docView.posFromDOM(c.anchorNode, c.anchorOffset) != t.from && i.collapse(r, s);
	}
	moveToLine(e) {
		let t = this.dom,
			i;
		if (e.node != t) return e;
		for (let r = e.offset; !i && r < t.childNodes.length; r++) {
			let s = fe.get(t.childNodes[r]);
			s instanceof ke && (i = s.domAtPos(0));
		}
		for (let r = e.offset - 1; !i && r >= 0; r--) {
			let s = fe.get(t.childNodes[r]);
			s instanceof ke && (i = s.domAtPos(s.length));
		}
		return i ? new We(i.node, i.offset, !0) : e;
	}
	nearest(e) {
		for (let t = e; t; ) {
			let i = fe.get(t);
			if (i && i.rootView == this) return i;
			t = t.parentNode;
		}
		return null;
	}
	posFromDOM(e, t) {
		let i = this.nearest(e);
		if (!i)
			throw new RangeError('Trying to find position for a DOM position outside of the document');
		return i.localPosFromDOM(e, t) + i.posAtStart;
	}
	domAtPos(e) {
		let { i: t, off: i } = this.childCursor().findPos(e, -1);
		for (; t < this.children.length - 1; ) {
			let r = this.children[t];
			if (i < r.length || r instanceof ke) break;
			t++, (i = 0);
		}
		return this.children[t].domAtPos(i);
	}
	coordsAt(e, t) {
		let i = null,
			r = 0;
		for (let s = this.length, o = this.children.length - 1; o >= 0; o--) {
			let l = this.children[o],
				a = s - l.breakAfter,
				u = a - l.length;
			if (a < e) break;
			if (
				u <= e &&
				(u < e || l.covers(-1)) &&
				(a > e || l.covers(1)) &&
				(!i || (l instanceof ke && !(i instanceof ke && t >= 0)))
			)
				(i = l), (r = u);
			else if (i && u == e && a == e && l instanceof Nt && Math.abs(t) < 2) {
				if (l.deco.startSide < 0) break;
				o && (i = null);
			}
			s = u;
		}
		return i ? i.coordsAt(e - r, t) : null;
	}
	coordsForChar(e) {
		let { i: t, off: i } = this.childPos(e, 1),
			r = this.children[t];
		if (!(r instanceof ke)) return null;
		for (; r.children.length; ) {
			let { i: l, off: a } = r.childPos(i, 1);
			for (; ; l++) {
				if (l == r.children.length) return null;
				if ((r = r.children[l]).length) break;
			}
			i = a;
		}
		if (!(r instanceof Dt)) return null;
		let s = Me(r.text, i);
		if (s == i) return null;
		let o = Zi(r.dom, i, s).getClientRects();
		for (let l = 0; l < o.length; l++) {
			let a = o[l];
			if (l == o.length - 1 || (a.top < a.bottom && a.left < a.right)) return a;
		}
		return null;
	}
	measureVisibleLineHeights(e) {
		let t = [],
			{ from: i, to: r } = e,
			s = this.view.contentDOM.clientWidth,
			o = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
			l = -1,
			a = this.view.textDirection == me.LTR;
		for (let u = 0, h = 0; h < this.children.length; h++) {
			let c = this.children[h],
				f = u + c.length;
			if (f > r) break;
			if (u >= i) {
				let d = c.dom.getBoundingClientRect();
				if ((t.push(d.height), o)) {
					let p = c.dom.lastChild,
						O = p ? tn(p) : [];
					if (O.length) {
						let m = O[O.length - 1],
							g = a ? m.right - d.left : d.right - m.left;
						g > l && ((l = g), (this.minWidth = s), (this.minWidthFrom = u), (this.minWidthTo = f));
					}
				}
			}
			u = f + c.breakAfter;
		}
		return t;
	}
	textDirectionAt(e) {
		let { i: t } = this.childPos(e, 1);
		return getComputedStyle(this.children[t].dom).direction == 'rtl' ? me.RTL : me.LTR;
	}
	measureTextSize() {
		for (let s of this.children)
			if (s instanceof ke) {
				let o = s.measureTextSize();
				if (o) return o;
			}
		let e = document.createElement('div'),
			t,
			i,
			r;
		return (
			(e.className = 'cm-line'),
			(e.style.width = '99999px'),
			(e.style.position = 'absolute'),
			(e.textContent = 'abc def ghi jkl mno pqr stu'),
			this.view.observer.ignore(() => {
				this.dom.appendChild(e);
				let s = tn(e.firstChild)[0];
				(t = e.getBoundingClientRect().height),
					(i = s ? s.width / 27 : 7),
					(r = s ? s.height : t),
					e.remove();
			}),
			{ lineHeight: t, charWidth: i, textHeight: r }
		);
	}
	childCursor(e = this.length) {
		let t = this.children.length;
		return t && (e -= this.children[--t].length), new bc(this.children, e, t);
	}
	computeBlockGapDeco() {
		let e = [],
			t = this.view.viewState;
		for (let i = 0, r = 0; ; r++) {
			let s = r == t.viewports.length ? null : t.viewports[r],
				o = s ? s.from - 1 : this.length;
			if (o > i) {
				let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
				e.push(
					I.replace({
						widget: new La(l),
						block: !0,
						inclusive: !0,
						isBlockGap: !0
					}).range(i, o)
				);
			}
			if (!s) break;
			i = s.to + 1;
		}
		return I.set(e);
	}
	updateDeco() {
		let e = 0,
			t = this.view.state
				.facet(Wn)
				.map((s) => ((this.dynamicDecorationMap[e++] = typeof s == 'function') ? s(this.view) : s)),
			i = !1,
			r = this.view.state.facet(_c).map((s, o) => {
				let l = typeof s == 'function';
				return l && (i = !0), l ? s(this.view) : s;
			});
		for (
			r.length && ((this.dynamicDecorationMap[e++] = i), t.push(le.join(r))),
				this.decorations = [...t, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco];
			e < this.decorations.length;

		)
			this.dynamicDecorationMap[e++] = !1;
		return this.decorations;
	}
	scrollIntoView(e) {
		if (e.isSnapshot) {
			let u = this.view.viewState.lineBlockAt(e.range.head);
			(this.view.scrollDOM.scrollTop = u.top - e.yMargin),
				(this.view.scrollDOM.scrollLeft = e.xMargin);
			return;
		}
		for (let u of this.view.state.facet(Xc))
			try {
				if (u(this.view, e.range, e)) return !0;
			} catch (h) {
				Ue(this.view.state, h, 'scroll handler');
			}
		let { range: t } = e,
			i = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1),
			r;
		if (!i) return;
		!t.empty &&
			(r = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) &&
			(i = {
				left: Math.min(i.left, r.left),
				top: Math.min(i.top, r.top),
				right: Math.max(i.right, r.right),
				bottom: Math.max(i.bottom, r.bottom)
			});
		let s = Vc(this.view),
			o = {
				left: i.left - s.left,
				top: i.top - s.top,
				right: i.right + s.right,
				bottom: i.bottom + s.bottom
			},
			{ offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
		MO(
			this.view.scrollDOM,
			o,
			t.head < t.anchor ? -1 : 1,
			e.x,
			e.y,
			Math.max(Math.min(e.xMargin, l), -l),
			Math.max(Math.min(e.yMargin, a), -a),
			this.view.textDirection == me.LTR
		);
	}
}
function nm(n) {
	return (
		n.node.nodeType == 1 &&
		n.node.firstChild &&
		(n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == 'false') &&
		(n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == 'false')
	);
}
class La extends Ht {
	constructor(e) {
		super(), (this.height = e);
	}
	toDOM() {
		let e = document.createElement('div');
		return (e.className = 'cm-gap'), this.updateDOM(e), e;
	}
	eq(e) {
		return e.height == this.height;
	}
	updateDOM(e) {
		return (e.style.height = this.height + 'px'), !0;
	}
	get editable() {
		return !0;
	}
	get estimatedHeight() {
		return this.height;
	}
	ignoreEvent() {
		return !1;
	}
}
function Ic(n, e) {
	let t = n.observer.selectionRange;
	if (!t.focusNode) return null;
	let i = gc(t.focusNode, t.focusOffset),
		r = yc(t.focusNode, t.focusOffset),
		s = i || r;
	if (r && i && r.node != i.node) {
		let l = fe.get(r.node);
		if (!l || (l instanceof Dt && l.text != r.node.nodeValue)) s = r;
		else if (n.docView.lastCompositionAfterCursor) {
			let a = fe.get(i.node);
			!a || (a instanceof Dt && a.text != i.node.nodeValue) || (s = r);
		}
	}
	if (((n.docView.lastCompositionAfterCursor = s != i), !s)) return null;
	let o = e - s.offset;
	return { from: o, to: o + s.node.nodeValue.length, node: s.node };
}
function rm(n, e, t) {
	let i = Ic(n, t);
	if (!i) return null;
	let { node: r, from: s, to: o } = i,
		l = r.nodeValue;
	if (/[\n\r]/.test(l) || n.state.doc.sliceString(i.from, i.to) != l) return null;
	let a = e.invertedDesc,
		u = new at(a.mapPos(s), a.mapPos(o), s, o),
		h = [];
	for (let c = r.parentNode; ; c = c.parentNode) {
		let f = fe.get(c);
		if (f instanceof Lt) h.push({ node: c, deco: f.mark });
		else {
			if (f instanceof ke || (c.nodeName == 'DIV' && c.parentNode == n.contentDOM))
				return { range: u, text: r, marks: h, line: c };
			if (c != n.contentDOM)
				h.push({
					node: c,
					deco: new Gn({
						inclusive: !0,
						attributes: NO(c),
						tagName: c.tagName.toLowerCase()
					})
				});
			else return null;
		}
	}
}
function sm(n, e) {
	return n.nodeType != 1
		? 0
		: (e && n.childNodes[e - 1].contentEditable == 'false' ? 1 : 0) |
				(e < n.childNodes.length && n.childNodes[e].contentEditable == 'false' ? 2 : 0);
}
let om = class {
	constructor() {
		this.changes = [];
	}
	compareRange(e, t) {
		No(e, t, this.changes);
	}
	comparePoint(e, t) {
		No(e, t, this.changes);
	}
};
function lm(n, e, t) {
	let i = new om();
	return le.compare(n, e, t, i), i.changes;
}
function am(n, e) {
	for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode)
		if (t.nodeType == 1 && t.contentEditable == 'false') return !0;
	return !1;
}
function um(n, e) {
	let t = !1;
	return (
		e &&
			n.iterChangedRanges((i, r) => {
				i < e.to && r > e.from && (t = !0);
			}),
		t
	);
}
function hm(n, e, t = 1) {
	let i = n.charCategorizer(e),
		r = n.doc.lineAt(e),
		s = e - r.from;
	if (r.length == 0) return Z.cursor(e);
	s == 0 ? (t = 1) : s == r.length && (t = -1);
	let o = s,
		l = s;
	t < 0 ? (o = Me(r.text, s, !1)) : (l = Me(r.text, s));
	let a = i(r.text.slice(o, l));
	for (; o > 0; ) {
		let u = Me(r.text, o, !1);
		if (i(r.text.slice(u, o)) != a) break;
		o = u;
	}
	for (; l < r.length; ) {
		let u = Me(r.text, l);
		if (i(r.text.slice(l, u)) != a) break;
		l = u;
	}
	return Z.range(o + r.from, l + r.from);
}
function cm(n, e) {
	return e.left > n ? e.left - n : Math.max(0, n - e.right);
}
function fm(n, e) {
	return e.top > n ? e.top - n : Math.max(0, n - e.bottom);
}
function Vs(n, e) {
	return n.top < e.bottom - 1 && n.bottom > e.top + 1;
}
function Ua(n, e) {
	return e < n.top ? { top: e, left: n.left, right: n.right, bottom: n.bottom } : n;
}
function Ga(n, e) {
	return e > n.bottom ? { top: n.top, left: n.left, right: n.right, bottom: e } : n;
}
function Go(n, e, t) {
	let i,
		r,
		s,
		o,
		l = !1,
		a,
		u,
		h,
		c;
	for (let p = n.firstChild; p; p = p.nextSibling) {
		let O = tn(p);
		for (let m = 0; m < O.length; m++) {
			let g = O[m];
			r && Vs(r, g) && (g = Ua(Ga(g, r.bottom), r.top));
			let S = cm(e, g),
				C = fm(t, g);
			if (S == 0 && C == 0) return p.nodeType == 3 ? Ha(p, e, t) : Go(p, e, t);
			if (!i || o > C || (o == C && s > S)) {
				(i = p), (r = g), (s = S), (o = C);
				let k = C ? (t < g.top ? -1 : 1) : S ? (e < g.left ? -1 : 1) : 0;
				l = !k || (k > 0 ? m < O.length - 1 : m > 0);
			}
			S == 0
				? t > g.bottom && (!h || h.bottom < g.bottom)
					? ((a = p), (h = g))
					: t < g.top && (!c || c.top > g.top) && ((u = p), (c = g))
				: h && Vs(h, g)
					? (h = Ga(h, g.bottom))
					: c && Vs(c, g) && (c = Ua(c, g.top));
		}
	}
	if ((h && h.bottom >= t ? ((i = a), (r = h)) : c && c.top <= t && ((i = u), (r = c)), !i))
		return { node: n, offset: 0 };
	let f = Math.max(r.left, Math.min(r.right, e));
	if (i.nodeType == 3) return Ha(i, f, t);
	if (l && i.contentEditable != 'false') return Go(i, f, t);
	let d = Array.prototype.indexOf.call(n.childNodes, i) + (e >= (r.left + r.right) / 2 ? 1 : 0);
	return { node: n, offset: d };
}
function Ha(n, e, t) {
	let i = n.nodeValue.length,
		r = -1,
		s = 1e9,
		o = 0;
	for (let l = 0; l < i; l++) {
		let a = Zi(n, l, l + 1).getClientRects();
		for (let u = 0; u < a.length; u++) {
			let h = a[u];
			if (h.top == h.bottom) continue;
			o || (o = e - h.left);
			let c = (h.top > t ? h.top - t : t - h.bottom) - 1;
			if (h.left - 1 <= e && h.right + 1 >= e && c < s) {
				let f = e >= (h.left + h.right) / 2,
					d = f;
				if (
					((z.chrome || z.gecko) && Zi(n, l).getBoundingClientRect().left == h.right && (d = !f),
					c <= 0)
				)
					return { node: n, offset: l + (d ? 1 : 0) };
				(r = l + (d ? 1 : 0)), (s = c);
			}
		}
	}
	return { node: n, offset: r > -1 ? r : o > 0 ? n.nodeValue.length : 0 };
}
function Lc(n, e, t, i = -1) {
	var r, s;
	let o = n.contentDOM.getBoundingClientRect(),
		l = o.top + n.viewState.paddingTop,
		a,
		{ docHeight: u } = n.viewState,
		{ x: h, y: c } = e,
		f = c - l;
	if (f < 0) return 0;
	if (f > u) return n.state.doc.length;
	for (
		let k = n.viewState.heightOracle.textHeight / 2, x = !1;
		(a = n.elementAtHeight(f)), a.type != He.Text;

	)
		for (; (f = i > 0 ? a.bottom + k : a.top - k), !(f >= 0 && f <= u); ) {
			if (x) return t ? null : 0;
			(x = !0), (i = -i);
		}
	c = l + f;
	let d = a.from;
	if (d < n.viewport.from) return n.viewport.from == 0 ? 0 : t ? null : Ja(n, o, a, h, c);
	if (d > n.viewport.to)
		return n.viewport.to == n.state.doc.length ? n.state.doc.length : t ? null : Ja(n, o, a, h, c);
	let p = n.dom.ownerDocument,
		O = n.root.elementFromPoint ? n.root : p,
		m = O.elementFromPoint(h, c);
	m && !n.contentDOM.contains(m) && (m = null),
		m ||
			((h = Math.max(o.left + 1, Math.min(o.right - 1, h))),
			(m = O.elementFromPoint(h, c)),
			m && !n.contentDOM.contains(m) && (m = null));
	let g,
		S = -1;
	if (m && ((r = n.docView.nearest(m)) === null || r === void 0 ? void 0 : r.isEditable) != !1) {
		if (p.caretPositionFromPoint) {
			let k = p.caretPositionFromPoint(h, c);
			k && ({ offsetNode: g, offset: S } = k);
		} else if (p.caretRangeFromPoint) {
			let k = p.caretRangeFromPoint(h, c);
			k &&
				(({ startContainer: g, startOffset: S } = k),
				(!n.contentDOM.contains(g) || (z.safari && dm(g, S, h)) || (z.chrome && pm(g, S, h))) &&
					(g = void 0));
		}
	}
	if (!g || !n.docView.dom.contains(g)) {
		let k = ke.find(n.docView, d);
		if (!k) return f > a.top + a.height / 2 ? a.to : a.from;
		({ node: g, offset: S } = Go(k.dom, h, c));
	}
	let C = n.docView.nearest(g);
	if (!C) return null;
	if (C.isWidget && ((s = C.dom) === null || s === void 0 ? void 0 : s.nodeType) == 1) {
		let k = C.dom.getBoundingClientRect();
		return e.y < k.top || (e.y <= k.bottom && e.x <= (k.left + k.right) / 2)
			? C.posAtStart
			: C.posAtEnd;
	} else return C.localPosFromDOM(g, S) + C.posAtStart;
}
function Ja(n, e, t, i, r) {
	let s = Math.round((i - e.left) * n.defaultCharacterWidth);
	if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
		let l = n.viewState.heightOracle.textHeight,
			a = Math.floor((r - t.top - (n.defaultLineHeight - l) * 0.5) / l);
		s += a * n.viewState.heightOracle.lineLength;
	}
	let o = n.state.sliceDoc(t.from, t.to);
	return t.from + Mo(o, s, n.state.tabSize);
}
function dm(n, e, t) {
	let i;
	if (n.nodeType != 3 || e != (i = n.nodeValue.length)) return !1;
	for (let r = n.nextSibling; r; r = r.nextSibling)
		if (r.nodeType != 1 || r.nodeName != 'BR') return !1;
	return Zi(n, i - 1, i).getBoundingClientRect().left > t;
}
function pm(n, e, t) {
	if (e != 0) return !1;
	for (let r = n; ; ) {
		let s = r.parentNode;
		if (!s || s.nodeType != 1 || s.firstChild != r) return !1;
		if (s.classList.contains('cm-line')) break;
		r = s;
	}
	let i =
		n.nodeType == 1
			? n.getBoundingClientRect()
			: Zi(n, 0, Math.max(n.nodeValue.length, 1)).getBoundingClientRect();
	return t - i.left > 5;
}
function Ho(n, e) {
	let t = n.lineBlockAt(e);
	if (Array.isArray(t.type)) {
		for (let i of t.type)
			if (i.to > e || (i.to == e && (i.to == t.to || i.type == He.Text))) return i;
	}
	return t;
}
function Om(n, e, t, i) {
	let r = Ho(n, e.head),
		s =
			!i || r.type != He.Text || !(n.lineWrapping || r.widgetLineBreaks)
				? null
				: n.coordsAtPos(e.assoc < 0 && e.head > r.from ? e.head - 1 : e.head);
	if (s) {
		let o = n.dom.getBoundingClientRect(),
			l = n.textDirectionAt(r.from),
			a = n.posAtCoords({
				x: t == (l == me.LTR) ? o.right - 1 : o.left + 1,
				y: (s.top + s.bottom) / 2
			});
		if (a != null) return Z.cursor(a, t ? -1 : 1);
	}
	return Z.cursor(t ? r.to : r.from, t ? -1 : 1);
}
function Ka(n, e, t, i) {
	let r = n.state.doc.lineAt(e.head),
		s = n.bidiSpans(r),
		o = n.textDirectionAt(r.from);
	for (let l = e, a = null; ; ) {
		let u = em(r, s, o, l, t),
			h = Zc;
		if (!u) {
			if (r.number == (t ? n.state.doc.lines : 1)) return l;
			(h = `
`),
				(r = n.state.doc.line(r.number + (t ? 1 : -1))),
				(s = n.bidiSpans(r)),
				(u = n.visualLineSide(r, !t));
		}
		if (a) {
			if (!a(h)) return l;
		} else {
			if (!i) return u;
			a = i(h);
		}
		l = u;
	}
}
function mm(n, e, t) {
	let i = n.state.charCategorizer(e),
		r = i(t);
	return (s) => {
		let o = i(s);
		return r == ye.Space && (r = o), r == o;
	};
}
function gm(n, e, t, i) {
	let r = e.head,
		s = t ? 1 : -1;
	if (r == (t ? n.state.doc.length : 0)) return Z.cursor(r, e.assoc);
	let o = e.goalColumn,
		l,
		a = n.contentDOM.getBoundingClientRect(),
		u = n.coordsAtPos(r, e.assoc || -1),
		h = n.documentTop;
	if (u) o == null && (o = u.left - a.left), (l = s < 0 ? u.top : u.bottom);
	else {
		let d = n.viewState.lineBlockAt(r);
		o == null && (o = Math.min(a.right - a.left, n.defaultCharacterWidth * (r - d.from))),
			(l = (s < 0 ? d.top : d.bottom) + h);
	}
	let c = a.left + o,
		f = i ?? n.viewState.heightOracle.textHeight >> 1;
	for (let d = 0; ; d += 10) {
		let p = l + (f + d) * s,
			O = Lc(n, { x: c, y: p }, !1, s);
		if (p < a.top || p > a.bottom || (s < 0 ? O < r : O > r)) {
			let m = n.docView.coordsForChar(O),
				g = !m || p < m.top ? -1 : 1;
			return Z.cursor(O, g, void 0, o);
		}
	}
}
function Zr(n, e, t) {
	for (;;) {
		let i = 0;
		for (let r of n)
			r.between(e - 1, e + 1, (s, o, l) => {
				if (e > s && e < o) {
					let a = i || t || (e - s < o - e ? -1 : 1);
					(e = a < 0 ? s : o), (i = a);
				}
			});
		if (!i) return e;
	}
}
function Is(n, e, t) {
	let i = Zr(
		n.state.facet(jl).map((r) => r(n)),
		t.from,
		e.head > t.from ? -1 : 1
	);
	return i == t.from ? t : Z.cursor(i, i < t.from ? 1 : -1);
}
class ym {
	setSelectionOrigin(e) {
		(this.lastSelectionOrigin = e), (this.lastSelectionTime = Date.now());
	}
	constructor(e) {
		(this.view = e),
			(this.lastKeyCode = 0),
			(this.lastKeyTime = 0),
			(this.lastTouchTime = 0),
			(this.lastFocusTime = 0),
			(this.lastScrollTop = 0),
			(this.lastScrollLeft = 0),
			(this.pendingIOSKey = void 0),
			(this.tabFocusMode = -1),
			(this.lastSelectionOrigin = null),
			(this.lastSelectionTime = 0),
			(this.lastContextMenu = 0),
			(this.scrollHandlers = []),
			(this.handlers = Object.create(null)),
			(this.composing = -1),
			(this.compositionFirstChange = null),
			(this.compositionEndedAt = 0),
			(this.compositionPendingKey = !1),
			(this.compositionPendingChange = !1),
			(this.mouseSelection = null),
			(this.draggedContent = null),
			(this.handleEvent = this.handleEvent.bind(this)),
			(this.notifiedFocused = e.hasFocus),
			z.safari && e.contentDOM.addEventListener('input', () => null),
			z.gecko && Tm(e.contentDOM.ownerDocument);
	}
	handleEvent(e) {
		!Qm(this.view, e) ||
			this.ignoreDuringComposition(e) ||
			(e.type == 'keydown' && this.keydown(e)) ||
			this.runHandlers(e.type, e);
	}
	runHandlers(e, t) {
		let i = this.handlers[e];
		if (i) {
			for (let r of i.observers) r(this.view, t);
			for (let r of i.handlers) {
				if (t.defaultPrevented) break;
				if (r(this.view, t)) {
					t.preventDefault();
					break;
				}
			}
		}
	}
	ensureHandlers(e) {
		let t = bm(e),
			i = this.handlers,
			r = this.view.contentDOM;
		for (let s in t)
			if (s != 'scroll') {
				let o = !t[s].handlers.length,
					l = i[s];
				l && o != !l.handlers.length && (r.removeEventListener(s, this.handleEvent), (l = null)),
					l || r.addEventListener(s, this.handleEvent, { passive: o });
			}
		for (let s in i) s != 'scroll' && !t[s] && r.removeEventListener(s, this.handleEvent);
		this.handlers = t;
	}
	keydown(e) {
		if (
			((this.lastKeyCode = e.keyCode),
			(this.lastKeyTime = Date.now()),
			e.keyCode == 9 &&
				this.tabFocusMode > -1 &&
				(!this.tabFocusMode || Date.now() <= this.tabFocusMode))
		)
			return !0;
		if (
			(this.tabFocusMode > 0 &&
				e.keyCode != 27 &&
				Gc.indexOf(e.keyCode) < 0 &&
				(this.tabFocusMode = -1),
			z.android && z.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
		)
			return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
		let t;
		return z.ios &&
			!e.synthetic &&
			!e.altKey &&
			!e.metaKey &&
			(((t = Uc.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey) ||
				(xm.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey))
			? ((this.pendingIOSKey = t || e), setTimeout(() => this.flushIOSKey(), 250), !0)
			: (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
	}
	flushIOSKey(e) {
		let t = this.pendingIOSKey;
		return !t || (t.key == 'Enter' && e && e.from < e.to && /^\S+$/.test(e.insert.toString()))
			? !1
			: ((this.pendingIOSKey = void 0),
				Ui(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
	}
	ignoreDuringComposition(e) {
		return /^key/.test(e.type)
			? this.composing > 0
				? !0
				: z.safari &&
					  !z.ios &&
					  this.compositionPendingKey &&
					  Date.now() - this.compositionEndedAt < 100
					? ((this.compositionPendingKey = !1), !0)
					: !1
			: !1;
	}
	startMouseSelection(e) {
		this.mouseSelection && this.mouseSelection.destroy(), (this.mouseSelection = e);
	}
	update(e) {
		this.mouseSelection && this.mouseSelection.update(e),
			this.draggedContent &&
				e.docChanged &&
				(this.draggedContent = this.draggedContent.map(e.changes)),
			e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
	}
	destroy() {
		this.mouseSelection && this.mouseSelection.destroy();
	}
}
function eu(n, e) {
	return (t, i) => {
		try {
			return e.call(n, i, t);
		} catch (r) {
			Ue(t.state, r);
		}
	};
}
function bm(n) {
	let e = Object.create(null);
	function t(i) {
		return e[i] || (e[i] = { observers: [], handlers: [] });
	}
	for (let i of n) {
		let r = i.spec;
		if (r && r.domEventHandlers)
			for (let s in r.domEventHandlers) {
				let o = r.domEventHandlers[s];
				o && t(s).handlers.push(eu(i.value, o));
			}
		if (r && r.domEventObservers)
			for (let s in r.domEventObservers) {
				let o = r.domEventObservers[s];
				o && t(s).observers.push(eu(i.value, o));
			}
	}
	for (let i in St) t(i).handlers.push(St[i]);
	for (let i in ht) t(i).observers.push(ht[i]);
	return e;
}
const Uc = [
		{ key: 'Backspace', keyCode: 8, inputType: 'deleteContentBackward' },
		{ key: 'Enter', keyCode: 13, inputType: 'insertParagraph' },
		{ key: 'Enter', keyCode: 13, inputType: 'insertLineBreak' },
		{ key: 'Delete', keyCode: 46, inputType: 'deleteContentForward' }
	],
	xm = 'dthko',
	Gc = [16, 17, 18, 20, 91, 92, 224, 225],
	ur = 6;
function hr(n) {
	return Math.max(0, n) * 0.7 + 8;
}
function Dm(n, e) {
	return Math.max(Math.abs(n.clientX - e.clientX), Math.abs(n.clientY - e.clientY));
}
class Sm {
	constructor(e, t, i, r) {
		(this.view = e),
			(this.startEvent = t),
			(this.style = i),
			(this.mustSelect = r),
			(this.scrollSpeed = { x: 0, y: 0 }),
			(this.scrolling = -1),
			(this.lastEvent = t),
			(this.scrollParent = BO(e.contentDOM)),
			(this.atoms = e.state.facet(jl).map((o) => o(e)));
		let s = e.contentDOM.ownerDocument;
		s.addEventListener('mousemove', (this.move = this.move.bind(this))),
			s.addEventListener('mouseup', (this.up = this.up.bind(this))),
			(this.extend = t.shiftKey),
			(this.multiple = e.state.facet(oe.allowMultipleSelections) && wm(e, t)),
			(this.dragging = vm(e, t) && ef(t) == 1 ? null : !1);
	}
	start(e) {
		this.dragging === !1 && this.select(e);
	}
	move(e) {
		var t;
		if (e.buttons == 0) return this.destroy();
		if (this.dragging || (this.dragging == null && Dm(this.startEvent, e) < 10)) return;
		this.select((this.lastEvent = e));
		let i = 0,
			r = 0,
			s = ((t = this.scrollParent) === null || t === void 0
				? void 0
				: t.getBoundingClientRect()) || {
				left: 0,
				top: 0,
				right: this.view.win.innerWidth,
				bottom: this.view.win.innerHeight
			},
			o = Vc(this.view);
		e.clientX - o.left <= s.left + ur
			? (i = -hr(s.left - e.clientX))
			: e.clientX + o.right >= s.right - ur && (i = hr(e.clientX - s.right)),
			e.clientY - o.top <= s.top + ur
				? (r = -hr(s.top - e.clientY))
				: e.clientY + o.bottom >= s.bottom - ur && (r = hr(e.clientY - s.bottom)),
			this.setScrollSpeed(i, r);
	}
	up(e) {
		this.dragging == null && this.select(this.lastEvent),
			this.dragging || e.preventDefault(),
			this.destroy();
	}
	destroy() {
		this.setScrollSpeed(0, 0);
		let e = this.view.contentDOM.ownerDocument;
		e.removeEventListener('mousemove', this.move),
			e.removeEventListener('mouseup', this.up),
			(this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null);
	}
	setScrollSpeed(e, t) {
		(this.scrollSpeed = { x: e, y: t }),
			e || t
				? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50))
				: this.scrolling > -1 && (clearInterval(this.scrolling), (this.scrolling = -1));
	}
	scroll() {
		this.scrollParent
			? ((this.scrollParent.scrollLeft += this.scrollSpeed.x),
				(this.scrollParent.scrollTop += this.scrollSpeed.y))
			: this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y),
			this.dragging === !1 && this.select(this.lastEvent);
	}
	skipAtoms(e) {
		let t = null;
		for (let i = 0; i < e.ranges.length; i++) {
			let r = e.ranges[i],
				s = null;
			if (r.empty) {
				let o = Zr(this.atoms, r.from, 0);
				o != r.from && (s = Z.cursor(o, -1));
			} else {
				let o = Zr(this.atoms, r.from, -1),
					l = Zr(this.atoms, r.to, 1);
				(o != r.from || l != r.to) &&
					(s = Z.range(r.from == r.anchor ? o : l, r.from == r.head ? o : l));
			}
			s && (t || (t = e.ranges.slice()), (t[i] = s));
		}
		return t ? Z.create(t, e.mainIndex) : e;
	}
	select(e) {
		let { view: t } = this,
			i = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
		(this.mustSelect || !i.eq(t.state.selection, this.dragging === !1)) &&
			this.view.dispatch({ selection: i, userEvent: 'select.pointer' }),
			(this.mustSelect = !1);
	}
	update(e) {
		e.transactions.some((t) => t.isUserEvent('input.type'))
			? this.destroy()
			: this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
	}
}
function wm(n, e) {
	let t = n.state.facet(Rc);
	return t.length ? t[0](e) : z.mac ? e.metaKey : e.ctrlKey;
}
function km(n, e) {
	let t = n.state.facet(Tc);
	return t.length ? t[0](e) : z.mac ? !e.altKey : !e.ctrlKey;
}
function vm(n, e) {
	let { main: t } = n.state.selection;
	if (t.empty) return !1;
	let i = _r(n.root);
	if (!i || i.rangeCount == 0) return !0;
	let r = i.getRangeAt(0).getClientRects();
	for (let s = 0; s < r.length; s++) {
		let o = r[s];
		if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
			return !0;
	}
	return !1;
}
function Qm(n, e) {
	if (!e.bubbles) return !0;
	if (e.defaultPrevented) return !1;
	for (let t = e.target, i; t != n.contentDOM; t = t.parentNode)
		if (!t || t.nodeType == 11 || ((i = fe.get(t)) && i.ignoreEvent(e))) return !1;
	return !0;
}
const St = Object.create(null),
	ht = Object.create(null),
	Hc = (z.ie && z.ie_version < 15) || (z.ios && z.webkit_version < 604);
function Cm(n) {
	let e = n.dom.parentNode;
	if (!e) return;
	let t = e.appendChild(document.createElement('textarea'));
	(t.style.cssText = 'position: fixed; left: -10000px; top: 10px'),
		t.focus(),
		setTimeout(() => {
			n.focus(), t.remove(), Jc(n, t.value);
		}, 50);
}
function Jc(n, e) {
	let { state: t } = n,
		i,
		r = 1,
		s = t.toText(e),
		o = s.lines == t.selection.ranges.length;
	if (Jo != null && t.selection.ranges.every((a) => a.empty) && Jo == s.toString()) {
		let a = -1;
		i = t.changeByRange((u) => {
			let h = t.doc.lineAt(u.from);
			if (h.from == a) return { range: u };
			a = h.from;
			let c = t.toText((o ? s.line(r++).text : e) + t.lineBreak);
			return {
				changes: { from: h.from, insert: c },
				range: Z.cursor(u.from + c.length)
			};
		});
	} else
		o
			? (i = t.changeByRange((a) => {
					let u = s.line(r++);
					return {
						changes: { from: a.from, to: a.to, insert: u.text },
						range: Z.cursor(a.from + u.length)
					};
				}))
			: (i = t.replaceSelection(s));
	n.dispatch(i, { userEvent: 'input.paste', scrollIntoView: !0 });
}
ht.scroll = (n) => {
	(n.inputState.lastScrollTop = n.scrollDOM.scrollTop),
		(n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft);
};
St.keydown = (n, e) => (
	n.inputState.setSelectionOrigin('select'),
	e.keyCode == 27 &&
		n.inputState.tabFocusMode != 0 &&
		(n.inputState.tabFocusMode = Date.now() + 2e3),
	!1
);
ht.touchstart = (n, e) => {
	(n.inputState.lastTouchTime = Date.now()), n.inputState.setSelectionOrigin('select.pointer');
};
ht.touchmove = (n) => {
	n.inputState.setSelectionOrigin('select.pointer');
};
St.mousedown = (n, e) => {
	if ((n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3)) return !1;
	let t = null;
	for (let i of n.state.facet(Fc)) if (((t = i(n, e)), t)) break;
	if ((!t && e.button == 0 && (t = $m(n, e)), t)) {
		let i = !n.hasFocus;
		n.inputState.startMouseSelection(new Sm(n, e, t, i)),
			i &&
				n.observer.ignore(() => {
					pc(n.contentDOM);
					let s = n.root.activeElement;
					s && !s.contains(n.contentDOM) && s.blur();
				});
		let r = n.inputState.mouseSelection;
		if (r) return r.start(e), r.dragging === !1;
	}
	return !1;
};
function tu(n, e, t, i) {
	if (i == 1) return Z.cursor(e, t);
	if (i == 2) return hm(n.state, e, t);
	{
		let r = ke.find(n.docView, e),
			s = n.state.doc.lineAt(r ? r.posAtEnd : e),
			o = r ? r.posAtStart : s.from,
			l = r ? r.posAtEnd : s.to;
		return l < n.state.doc.length && l == s.to && l++, Z.range(o, l);
	}
}
let Kc = (n, e) => n >= e.top && n <= e.bottom,
	iu = (n, e, t) => Kc(e, t) && n >= t.left && n <= t.right;
function Pm(n, e, t, i) {
	let r = ke.find(n.docView, e);
	if (!r) return 1;
	let s = e - r.posAtStart;
	if (s == 0) return 1;
	if (s == r.length) return -1;
	let o = r.coordsAt(s, -1);
	if (o && iu(t, i, o)) return -1;
	let l = r.coordsAt(s, 1);
	return l && iu(t, i, l) ? 1 : o && Kc(i, o) ? -1 : 1;
}
function nu(n, e) {
	let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
	return { pos: t, bias: Pm(n, t, e.clientX, e.clientY) };
}
const Am = z.ie && z.ie_version <= 11;
let ru = null,
	su = 0,
	ou = 0;
function ef(n) {
	if (!Am) return n.detail;
	let e = ru,
		t = ou;
	return (
		(ru = n),
		(ou = Date.now()),
		(su =
			!e ||
			(t > Date.now() - 400 &&
				Math.abs(e.clientX - n.clientX) < 2 &&
				Math.abs(e.clientY - n.clientY) < 2)
				? (su + 1) % 3
				: 1)
	);
}
function $m(n, e) {
	let t = nu(n, e),
		i = ef(e),
		r = n.state.selection;
	return {
		update(s) {
			s.docChanged && ((t.pos = s.changes.mapPos(t.pos)), (r = r.map(s.changes)));
		},
		get(s, o, l) {
			let a = nu(n, s),
				u,
				h = tu(n, a.pos, a.bias, i);
			if (t.pos != a.pos && !o) {
				let c = tu(n, t.pos, t.bias, i),
					f = Math.min(c.from, h.from),
					d = Math.max(c.to, h.to);
				h = f < h.from ? Z.range(f, d) : Z.range(d, f);
			}
			return o
				? r.replaceRange(r.main.extend(h.from, h.to))
				: l && i == 1 && r.ranges.length > 1 && (u = Em(r, a.pos))
					? u
					: l
						? r.addRange(h)
						: Z.create([h]);
		}
	};
}
function Em(n, e) {
	for (let t = 0; t < n.ranges.length; t++) {
		let { from: i, to: r } = n.ranges[t];
		if (i <= e && r >= e)
			return Z.create(
				n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)),
				n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0)
			);
	}
	return null;
}
St.dragstart = (n, e) => {
	let {
		selection: { main: t }
	} = n.state;
	if (e.target.draggable) {
		let r = n.docView.nearest(e.target);
		if (r && r.isWidget) {
			let s = r.posAtStart,
				o = s + r.length;
			(s >= t.to || o <= t.from) && (t = Z.range(s, o));
		}
	}
	let { inputState: i } = n;
	return (
		i.mouseSelection && (i.mouseSelection.dragging = !0),
		(i.draggedContent = t),
		e.dataTransfer &&
			(e.dataTransfer.setData('Text', n.state.sliceDoc(t.from, t.to)),
			(e.dataTransfer.effectAllowed = 'copyMove')),
		!1
	);
};
St.dragend = (n) => ((n.inputState.draggedContent = null), !1);
function lu(n, e, t, i) {
	if (!t) return;
	let r = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
		{ draggedContent: s } = n.inputState,
		o = i && s && km(n, e) ? { from: s.from, to: s.to } : null,
		l = { from: r, insert: t },
		a = n.state.changes(o ? [o, l] : l);
	n.focus(),
		n.dispatch({
			changes: a,
			selection: { anchor: a.mapPos(r, -1), head: a.mapPos(r, 1) },
			userEvent: o ? 'move.drop' : 'input.drop'
		}),
		(n.inputState.draggedContent = null);
}
St.drop = (n, e) => {
	if (!e.dataTransfer) return !1;
	if (n.state.readOnly) return !0;
	let t = e.dataTransfer.files;
	if (t && t.length) {
		let i = Array(t.length),
			r = 0,
			s = () => {
				++r == t.length && lu(n, e, i.filter((o) => o != null).join(n.state.lineBreak), !1);
			};
		for (let o = 0; o < t.length; o++) {
			let l = new FileReader();
			(l.onerror = s),
				(l.onload = () => {
					/[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), s();
				}),
				l.readAsText(t[o]);
		}
		return !0;
	} else {
		let i = e.dataTransfer.getData('Text');
		if (i) return lu(n, e, i, !0), !0;
	}
	return !1;
};
St.paste = (n, e) => {
	if (n.state.readOnly) return !0;
	n.observer.flush();
	let t = Hc ? null : e.clipboardData;
	return t ? (Jc(n, t.getData('text/plain') || t.getData('text/uri-list')), !0) : (Cm(n), !1);
};
function Zm(n, e) {
	let t = n.dom.parentNode;
	if (!t) return;
	let i = t.appendChild(document.createElement('textarea'));
	(i.style.cssText = 'position: fixed; left: -10000px; top: 10px'),
		(i.value = e),
		i.focus(),
		(i.selectionEnd = e.length),
		(i.selectionStart = 0),
		setTimeout(() => {
			i.remove(), n.focus();
		}, 50);
}
function Rm(n) {
	let e = [],
		t = [],
		i = !1;
	for (let r of n.selection.ranges) r.empty || (e.push(n.sliceDoc(r.from, r.to)), t.push(r));
	if (!e.length) {
		let r = -1;
		for (let { from: s } of n.selection.ranges) {
			let o = n.doc.lineAt(s);
			o.number > r &&
				(e.push(o.text), t.push({ from: o.from, to: Math.min(n.doc.length, o.to + 1) })),
				(r = o.number);
		}
		i = !0;
	}
	return { text: e.join(n.lineBreak), ranges: t, linewise: i };
}
let Jo = null;
St.copy = St.cut = (n, e) => {
	let { text: t, ranges: i, linewise: r } = Rm(n.state);
	if (!t && !r) return !1;
	(Jo = r ? t : null),
		e.type == 'cut' &&
			!n.state.readOnly &&
			n.dispatch({ changes: i, scrollIntoView: !0, userEvent: 'delete.cut' });
	let s = Hc ? null : e.clipboardData;
	return s ? (s.clearData(), s.setData('text/plain', t), !0) : (Zm(n, t), !1);
};
const tf = Mt.define();
function nf(n, e) {
	let t = [];
	for (let i of n.facet(jc)) {
		let r = i(n, e);
		r && t.push(r);
	}
	return t ? n.update({ effects: t, annotations: tf.of(!0) }) : null;
}
function rf(n) {
	setTimeout(() => {
		let e = n.hasFocus;
		if (e != n.inputState.notifiedFocused) {
			let t = nf(n.state, e);
			t ? n.dispatch(t) : n.update([]);
		}
	}, 10);
}
ht.focus = (n) => {
	(n.inputState.lastFocusTime = Date.now()),
		!n.scrollDOM.scrollTop &&
			(n.inputState.lastScrollTop || n.inputState.lastScrollLeft) &&
			((n.scrollDOM.scrollTop = n.inputState.lastScrollTop),
			(n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft)),
		rf(n);
};
ht.blur = (n) => {
	n.observer.clearSelectionRange(), rf(n);
};
ht.compositionstart = ht.compositionupdate = (n) => {
	n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = !0),
		n.inputState.composing < 0 && (n.inputState.composing = 0);
};
ht.compositionend = (n) => {
	(n.inputState.composing = -1),
		(n.inputState.compositionEndedAt = Date.now()),
		(n.inputState.compositionPendingKey = !0),
		(n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0),
		(n.inputState.compositionFirstChange = null),
		z.chrome && z.android
			? n.observer.flushSoon()
			: n.inputState.compositionPendingChange
				? Promise.resolve().then(() => n.observer.flush())
				: setTimeout(() => {
						n.inputState.composing < 0 && n.docView.hasComposition && n.update([]);
					}, 50);
};
ht.contextmenu = (n) => {
	n.inputState.lastContextMenu = Date.now();
};
St.beforeinput = (n, e) => {
	var t;
	let i;
	if (
		z.chrome &&
		z.android &&
		(i = Uc.find((r) => r.inputType == e.inputType)) &&
		(n.observer.delayAndroidKey(i.key, i.keyCode), i.key == 'Backspace' || i.key == 'Delete')
	) {
		let r = ((t = window.visualViewport) === null || t === void 0 ? void 0 : t.height) || 0;
		setTimeout(() => {
			var s;
			(((s = window.visualViewport) === null || s === void 0 ? void 0 : s.height) || 0) > r + 10 &&
				n.hasFocus &&
				(n.contentDOM.blur(), n.focus());
		}, 100);
	}
	return (
		z.ios && e.inputType == 'deleteContentForward' && n.observer.flushSoon(),
		z.safari &&
			e.inputType == 'insertText' &&
			n.inputState.composing >= 0 &&
			setTimeout(() => ht.compositionend(n, e), 20),
		!1
	);
};
const au = new Set();
function Tm(n) {
	au.has(n) ||
		(au.add(n), n.addEventListener('copy', () => {}), n.addEventListener('cut', () => {}));
}
const uu = ['pre-wrap', 'normal', 'pre-line', 'break-spaces'];
class Fm {
	constructor(e) {
		(this.lineWrapping = e),
			(this.doc = ae.empty),
			(this.heightSamples = {}),
			(this.lineHeight = 14),
			(this.charWidth = 7),
			(this.textHeight = 14),
			(this.lineLength = 30),
			(this.heightChanged = !1);
	}
	heightForGap(e, t) {
		let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
		return (
			this.lineWrapping &&
				(i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))),
			this.lineHeight * i
		);
	}
	heightForLine(e) {
		return this.lineWrapping
			? (1 + Math.max(0, Math.ceil((e - this.lineLength) / (this.lineLength - 5)))) *
					this.lineHeight
			: this.lineHeight;
	}
	setDoc(e) {
		return (this.doc = e), this;
	}
	mustRefreshForWrapping(e) {
		return uu.indexOf(e) > -1 != this.lineWrapping;
	}
	mustRefreshForHeights(e) {
		let t = !1;
		for (let i = 0; i < e.length; i++) {
			let r = e[i];
			r < 0
				? i++
				: this.heightSamples[Math.floor(r * 10)] ||
					((t = !0), (this.heightSamples[Math.floor(r * 10)] = !0));
		}
		return t;
	}
	refresh(e, t, i, r, s, o) {
		let l = uu.indexOf(e) > -1,
			a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
		if (
			((this.lineWrapping = l),
			(this.lineHeight = t),
			(this.charWidth = i),
			(this.textHeight = r),
			(this.lineLength = s),
			a)
		) {
			this.heightSamples = {};
			for (let u = 0; u < o.length; u++) {
				let h = o[u];
				h < 0 ? u++ : (this.heightSamples[Math.floor(h * 10)] = !0);
			}
		}
		return a;
	}
}
class Mm {
	constructor(e, t) {
		(this.from = e), (this.heights = t), (this.index = 0);
	}
	get more() {
		return this.index < this.heights.length;
	}
}
class Et {
	constructor(e, t, i, r, s) {
		(this.from = e), (this.length = t), (this.top = i), (this.height = r), (this._content = s);
	}
	get type() {
		return typeof this._content == 'number'
			? He.Text
			: Array.isArray(this._content)
				? this._content
				: this._content.type;
	}
	get to() {
		return this.from + this.length;
	}
	get bottom() {
		return this.top + this.height;
	}
	get widget() {
		return this._content instanceof hi ? this._content.widget : null;
	}
	get widgetLineBreaks() {
		return typeof this._content == 'number' ? this._content : 0;
	}
	join(e) {
		let t = (Array.isArray(this._content) ? this._content : [this]).concat(
			Array.isArray(e._content) ? e._content : [e]
		);
		return new Et(this.from, this.length + e.length, this.top, this.height + e.height, t);
	}
}
var Oe = (function (n) {
	return (
		(n[(n.ByPos = 0)] = 'ByPos'),
		(n[(n.ByHeight = 1)] = 'ByHeight'),
		(n[(n.ByPosNoHeight = 2)] = 'ByPosNoHeight'),
		n
	);
})(Oe || (Oe = {}));
const Rr = 0.001;
class Ve {
	constructor(e, t, i = 2) {
		(this.length = e), (this.height = t), (this.flags = i);
	}
	get outdated() {
		return (this.flags & 2) > 0;
	}
	set outdated(e) {
		this.flags = (e ? 2 : 0) | (this.flags & -3);
	}
	setHeight(e, t) {
		this.height != t &&
			(Math.abs(this.height - t) > Rr && (e.heightChanged = !0), (this.height = t));
	}
	replace(e, t, i) {
		return Ve.of(i);
	}
	decomposeLeft(e, t) {
		t.push(this);
	}
	decomposeRight(e, t) {
		t.push(this);
	}
	applyChanges(e, t, i, r) {
		let s = this,
			o = i.doc;
		for (let l = r.length - 1; l >= 0; l--) {
			let { fromA: a, toA: u, fromB: h, toB: c } = r[l],
				f = s.lineAt(a, Oe.ByPosNoHeight, i.setDoc(t), 0, 0),
				d = f.to >= u ? f : s.lineAt(u, Oe.ByPosNoHeight, i, 0, 0);
			for (c += d.to - u, u = d.to; l > 0 && f.from <= r[l - 1].toA; )
				(a = r[l - 1].fromA),
					(h = r[l - 1].fromB),
					l--,
					a < f.from && (f = s.lineAt(a, Oe.ByPosNoHeight, i, 0, 0));
			(h += f.from - a), (a = f.from);
			let p = Wl.build(i.setDoc(o), e, h, c);
			s = s.replace(a, u, p);
		}
		return s.updateHeight(i, 0);
	}
	static empty() {
		return new it(0, 0);
	}
	static of(e) {
		if (e.length == 1) return e[0];
		let t = 0,
			i = e.length,
			r = 0,
			s = 0;
		for (;;)
			if (t == i)
				if (r > s * 2) {
					let l = e[t - 1];
					l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right),
						(i += 1 + l.break),
						(r -= l.size);
				} else if (s > r * 2) {
					let l = e[i];
					l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right),
						(i += 2 + l.break),
						(s -= l.size);
				} else break;
			else if (r < s) {
				let l = e[t++];
				l && (r += l.size);
			} else {
				let l = e[--i];
				l && (s += l.size);
			}
		let o = 0;
		return (
			e[t - 1] == null ? ((o = 1), t--) : e[t] == null && ((o = 1), i++),
			new Bm(Ve.of(e.slice(0, t)), o, Ve.of(e.slice(i)))
		);
	}
}
Ve.prototype.size = 1;
class sf extends Ve {
	constructor(e, t, i) {
		super(e, t), (this.deco = i);
	}
	blockAt(e, t, i, r) {
		return new Et(r, this.length, i, this.height, this.deco || 0);
	}
	lineAt(e, t, i, r, s) {
		return this.blockAt(0, i, r, s);
	}
	forEachLine(e, t, i, r, s, o) {
		e <= s + this.length && t >= s && o(this.blockAt(0, i, r, s));
	}
	updateHeight(e, t = 0, i = !1, r) {
		return (
			r && r.from <= t && r.more && this.setHeight(e, r.heights[r.index++]),
			(this.outdated = !1),
			this
		);
	}
	toString() {
		return `block(${this.length})`;
	}
}
class it extends sf {
	constructor(e, t) {
		super(e, t, null), (this.collapsed = 0), (this.widgetHeight = 0), (this.breaks = 0);
	}
	blockAt(e, t, i, r) {
		return new Et(r, this.length, i, this.height, this.breaks);
	}
	replace(e, t, i) {
		let r = i[0];
		return i.length == 1 &&
			(r instanceof it || (r instanceof Ze && r.flags & 4)) &&
			Math.abs(this.length - r.length) < 10
			? (r instanceof Ze ? (r = new it(r.length, this.height)) : (r.height = this.height),
				this.outdated || (r.outdated = !1),
				r)
			: Ve.of(i);
	}
	updateHeight(e, t = 0, i = !1, r) {
		return (
			r && r.from <= t && r.more
				? this.setHeight(e, r.heights[r.index++])
				: (i || this.outdated) &&
					this.setHeight(
						e,
						Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) +
							this.breaks * e.lineHeight
					),
			(this.outdated = !1),
			this
		);
	}
	toString() {
		return `line(${this.length}${this.collapsed ? -this.collapsed : ''}${this.widgetHeight ? ':' + this.widgetHeight : ''})`;
	}
}
class Ze extends Ve {
	constructor(e) {
		super(e, 0);
	}
	heightMetrics(e, t) {
		let i = e.doc.lineAt(t).number,
			r = e.doc.lineAt(t + this.length).number,
			s = r - i + 1,
			o,
			l = 0;
		if (e.lineWrapping) {
			let a = Math.min(this.height, e.lineHeight * s);
			(o = a / s), this.length > s + 1 && (l = (this.height - a) / (this.length - s - 1));
		} else o = this.height / s;
		return { firstLine: i, lastLine: r, perLine: o, perChar: l };
	}
	blockAt(e, t, i, r) {
		let { firstLine: s, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, r);
		if (t.lineWrapping) {
			let u =
					r +
					(e < t.lineHeight
						? 0
						: Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)),
				h = t.doc.lineAt(u),
				c = l + h.length * a,
				f = Math.max(i, e - c / 2);
			return new Et(h.from, h.length, f, c, 0);
		} else {
			let u = Math.max(0, Math.min(o - s, Math.floor((e - i) / l))),
				{ from: h, length: c } = t.doc.line(s + u);
			return new Et(h, c, i + l * u, l, 0);
		}
	}
	lineAt(e, t, i, r, s) {
		if (t == Oe.ByHeight) return this.blockAt(e, i, r, s);
		if (t == Oe.ByPosNoHeight) {
			let { from: d, to: p } = i.doc.lineAt(e);
			return new Et(d, p - d, 0, 0, 0);
		}
		let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, s),
			u = i.doc.lineAt(e),
			h = l + u.length * a,
			c = u.number - o,
			f = r + l * c + a * (u.from - s - c);
		return new Et(u.from, u.length, Math.max(r, Math.min(f, r + this.height - h)), h, 0);
	}
	forEachLine(e, t, i, r, s, o) {
		(e = Math.max(e, s)), (t = Math.min(t, s + this.length));
		let { firstLine: l, perLine: a, perChar: u } = this.heightMetrics(i, s);
		for (let h = e, c = r; h <= t; ) {
			let f = i.doc.lineAt(h);
			if (h == e) {
				let p = f.number - l;
				c += a * p + u * (e - s - p);
			}
			let d = a + u * f.length;
			o(new Et(f.from, f.length, c, d, 0)), (c += d), (h = f.to + 1);
		}
	}
	replace(e, t, i) {
		let r = this.length - t;
		if (r > 0) {
			let s = i[i.length - 1];
			s instanceof Ze ? (i[i.length - 1] = new Ze(s.length + r)) : i.push(null, new Ze(r - 1));
		}
		if (e > 0) {
			let s = i[0];
			s instanceof Ze ? (i[0] = new Ze(e + s.length)) : i.unshift(new Ze(e - 1), null);
		}
		return Ve.of(i);
	}
	decomposeLeft(e, t) {
		t.push(new Ze(e - 1), null);
	}
	decomposeRight(e, t) {
		t.push(null, new Ze(this.length - e - 1));
	}
	updateHeight(e, t = 0, i = !1, r) {
		let s = t + this.length;
		if (r && r.from <= t + this.length && r.more) {
			let o = [],
				l = Math.max(t, r.from),
				a = -1;
			for (r.from > t && o.push(new Ze(r.from - t - 1).updateHeight(e, t)); l <= s && r.more; ) {
				let h = e.doc.lineAt(l).length;
				o.length && o.push(null);
				let c = r.heights[r.index++];
				a == -1 ? (a = c) : Math.abs(c - a) >= Rr && (a = -2);
				let f = new it(h, c);
				(f.outdated = !1), o.push(f), (l += h + 1);
			}
			l <= s && o.push(null, new Ze(s - l).updateHeight(e, l));
			let u = Ve.of(o);
			return (
				(a < 0 ||
					Math.abs(u.height - this.height) >= Rr ||
					Math.abs(a - this.heightMetrics(e, t).perLine) >= Rr) &&
					(e.heightChanged = !0),
				u
			);
		} else
			(i || this.outdated) &&
				(this.setHeight(e, e.heightForGap(t, t + this.length)), (this.outdated = !1));
		return this;
	}
	toString() {
		return `gap(${this.length})`;
	}
}
class Bm extends Ve {
	constructor(e, t, i) {
		super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)),
			(this.left = e),
			(this.right = i),
			(this.size = e.size + i.size);
	}
	get break() {
		return this.flags & 1;
	}
	blockAt(e, t, i, r) {
		let s = i + this.left.height;
		return e < s
			? this.left.blockAt(e, t, i, r)
			: this.right.blockAt(e, t, s, r + this.left.length + this.break);
	}
	lineAt(e, t, i, r, s) {
		let o = r + this.left.height,
			l = s + this.left.length + this.break,
			a = t == Oe.ByHeight ? e < o : e < l,
			u = a ? this.left.lineAt(e, t, i, r, s) : this.right.lineAt(e, t, i, o, l);
		if (this.break || (a ? u.to < l : u.from > l)) return u;
		let h = t == Oe.ByPosNoHeight ? Oe.ByPosNoHeight : Oe.ByPos;
		return a ? u.join(this.right.lineAt(l, h, i, o, l)) : this.left.lineAt(l, h, i, r, s).join(u);
	}
	forEachLine(e, t, i, r, s, o) {
		let l = r + this.left.height,
			a = s + this.left.length + this.break;
		if (this.break)
			e < a && this.left.forEachLine(e, t, i, r, s, o),
				t >= a && this.right.forEachLine(e, t, i, l, a, o);
		else {
			let u = this.lineAt(a, Oe.ByPos, i, r, s);
			e < u.from && this.left.forEachLine(e, u.from - 1, i, r, s, o),
				u.to >= e && u.from <= t && o(u),
				t > u.to && this.right.forEachLine(u.to + 1, t, i, l, a, o);
		}
	}
	replace(e, t, i) {
		let r = this.left.length + this.break;
		if (t < r) return this.balanced(this.left.replace(e, t, i), this.right);
		if (e > this.left.length) return this.balanced(this.left, this.right.replace(e - r, t - r, i));
		let s = [];
		e > 0 && this.decomposeLeft(e, s);
		let o = s.length;
		for (let l of i) s.push(l);
		if ((e > 0 && hu(s, o - 1), t < this.length)) {
			let l = s.length;
			this.decomposeRight(t, s), hu(s, l);
		}
		return Ve.of(s);
	}
	decomposeLeft(e, t) {
		let i = this.left.length;
		if (e <= i) return this.left.decomposeLeft(e, t);
		t.push(this.left),
			this.break && (i++, e >= i && t.push(null)),
			e > i && this.right.decomposeLeft(e - i, t);
	}
	decomposeRight(e, t) {
		let i = this.left.length,
			r = i + this.break;
		if (e >= r) return this.right.decomposeRight(e - r, t);
		e < i && this.left.decomposeRight(e, t),
			this.break && e < r && t.push(null),
			t.push(this.right);
	}
	balanced(e, t) {
		return e.size > 2 * t.size || t.size > 2 * e.size
			? Ve.of(this.break ? [e, null, t] : [e, t])
			: ((this.left = e),
				(this.right = t),
				(this.height = e.height + t.height),
				(this.outdated = e.outdated || t.outdated),
				(this.size = e.size + t.size),
				(this.length = e.length + this.break + t.length),
				this);
	}
	updateHeight(e, t = 0, i = !1, r) {
		let { left: s, right: o } = this,
			l = t + s.length + this.break,
			a = null;
		return (
			r && r.from <= t + s.length && r.more
				? (a = s = s.updateHeight(e, t, i, r))
				: s.updateHeight(e, t, i),
			r && r.from <= l + o.length && r.more
				? (a = o = o.updateHeight(e, l, i, r))
				: o.updateHeight(e, l, i),
			a
				? this.balanced(s, o)
				: ((this.height = this.left.height + this.right.height), (this.outdated = !1), this)
		);
	}
	toString() {
		return this.left + (this.break ? ' ' : '-') + this.right;
	}
}
function hu(n, e) {
	let t, i;
	n[e] == null &&
		(t = n[e - 1]) instanceof Ze &&
		(i = n[e + 1]) instanceof Ze &&
		n.splice(e - 1, 3, new Ze(t.length + 1 + i.length));
}
const jm = 5;
class Wl {
	constructor(e, t) {
		(this.pos = e),
			(this.oracle = t),
			(this.nodes = []),
			(this.lineStart = -1),
			(this.lineEnd = -1),
			(this.covering = null),
			(this.writtenTo = e);
	}
	get isCovered() {
		return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
	}
	span(e, t) {
		if (this.lineStart > -1) {
			let i = Math.min(t, this.lineEnd),
				r = this.nodes[this.nodes.length - 1];
			r instanceof it
				? (r.length += i - this.pos)
				: (i > this.pos || !this.isCovered) && this.nodes.push(new it(i - this.pos, -1)),
				(this.writtenTo = i),
				t > i && (this.nodes.push(null), this.writtenTo++, (this.lineStart = -1));
		}
		this.pos = t;
	}
	point(e, t, i) {
		if (e < t || i.heightRelevant) {
			let r = i.widget ? i.widget.estimatedHeight : 0,
				s = i.widget ? i.widget.lineBreaks : 0;
			r < 0 && (r = this.oracle.lineHeight);
			let o = t - e;
			i.block ? this.addBlock(new sf(o, r, i)) : (o || s || r >= jm) && this.addLineDeco(r, s, o);
		} else t > e && this.span(e, t);
		this.lineEnd > -1 &&
			this.lineEnd < this.pos &&
			(this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
	}
	enterLine() {
		if (this.lineStart > -1) return;
		let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
		(this.lineStart = e),
			(this.lineEnd = t),
			this.writtenTo < e &&
				((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) &&
					this.nodes.push(this.blankContent(this.writtenTo, e - 1)),
				this.nodes.push(null)),
			this.pos > e && this.nodes.push(new it(this.pos - e, -1)),
			(this.writtenTo = this.pos);
	}
	blankContent(e, t) {
		let i = new Ze(t - e);
		return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
	}
	ensureLine() {
		this.enterLine();
		let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
		if (e instanceof it) return e;
		let t = new it(0, -1);
		return this.nodes.push(t), t;
	}
	addBlock(e) {
		this.enterLine();
		let t = e.deco;
		t && t.startSide > 0 && !this.isCovered && this.ensureLine(),
			this.nodes.push(e),
			(this.writtenTo = this.pos = this.pos + e.length),
			t && t.endSide > 0 && (this.covering = e);
	}
	addLineDeco(e, t, i) {
		let r = this.ensureLine();
		(r.length += i),
			(r.collapsed += i),
			(r.widgetHeight = Math.max(r.widgetHeight, e)),
			(r.breaks += t),
			(this.writtenTo = this.pos = this.pos + i);
	}
	finish(e) {
		let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
		this.lineStart > -1 && !(t instanceof it) && !this.isCovered
			? this.nodes.push(new it(0, -1))
			: (this.writtenTo < this.pos || t == null) &&
				this.nodes.push(this.blankContent(this.writtenTo, this.pos));
		let i = e;
		for (let r of this.nodes)
			r instanceof it && r.updateHeight(this.oracle, i), (i += r ? r.length : 1);
		return this.nodes;
	}
	static build(e, t, i, r) {
		let s = new Wl(i, e);
		return le.spans(t, i, r, s, 0), s.finish(i);
	}
}
function Wm(n, e, t) {
	let i = new zm();
	return le.compare(n, e, t, i, 0), i.changes;
}
class zm {
	constructor() {
		this.changes = [];
	}
	compareRange() {}
	comparePoint(e, t, i, r) {
		(e < t || (i && i.heightRelevant) || (r && r.heightRelevant)) && No(e, t, this.changes, 5);
	}
}
function Xm(n, e) {
	let t = n.getBoundingClientRect(),
		i = n.ownerDocument,
		r = i.defaultView || window,
		s = Math.max(0, t.left),
		o = Math.min(r.innerWidth, t.right),
		l = Math.max(0, t.top),
		a = Math.min(r.innerHeight, t.bottom);
	for (let u = n.parentNode; u && u != i.body; )
		if (u.nodeType == 1) {
			let h = u,
				c = window.getComputedStyle(h);
			if (
				(h.scrollHeight > h.clientHeight || h.scrollWidth > h.clientWidth) &&
				c.overflow != 'visible'
			) {
				let f = h.getBoundingClientRect();
				(s = Math.max(s, f.left)),
					(o = Math.min(o, f.right)),
					(l = Math.max(l, f.top)),
					(a = u == n.parentNode ? f.bottom : Math.min(a, f.bottom));
			}
			u = c.position == 'absolute' || c.position == 'fixed' ? h.offsetParent : h.parentNode;
		} else if (u.nodeType == 11) u = u.host;
		else break;
	return {
		left: s - t.left,
		right: Math.max(s, o) - t.left,
		top: l - (t.top + e),
		bottom: Math.max(l, a) - (t.top + e)
	};
}
function qm(n, e) {
	let t = n.getBoundingClientRect();
	return {
		left: 0,
		right: t.right - t.left,
		top: e,
		bottom: t.bottom - (t.top + e)
	};
}
class Ls {
	constructor(e, t, i) {
		(this.from = e), (this.to = t), (this.size = i);
	}
	static same(e, t) {
		if (e.length != t.length) return !1;
		for (let i = 0; i < e.length; i++) {
			let r = e[i],
				s = t[i];
			if (r.from != s.from || r.to != s.to || r.size != s.size) return !1;
		}
		return !0;
	}
	draw(e, t) {
		return I.replace({
			widget: new _m(this.size * (t ? e.scaleY : e.scaleX), t)
		}).range(this.from, this.to);
	}
}
class _m extends Ht {
	constructor(e, t) {
		super(), (this.size = e), (this.vertical = t);
	}
	eq(e) {
		return e.size == this.size && e.vertical == this.vertical;
	}
	toDOM() {
		let e = document.createElement('div');
		return (
			this.vertical
				? (e.style.height = this.size + 'px')
				: ((e.style.width = this.size + 'px'),
					(e.style.height = '2px'),
					(e.style.display = 'inline-block')),
			e
		);
	}
	get estimatedHeight() {
		return this.vertical ? this.size : -1;
	}
}
class cu {
	constructor(e) {
		(this.state = e),
			(this.pixelViewport = {
				left: 0,
				right: window.innerWidth,
				top: 0,
				bottom: 0
			}),
			(this.inView = !0),
			(this.paddingTop = 0),
			(this.paddingBottom = 0),
			(this.contentDOMWidth = 0),
			(this.contentDOMHeight = 0),
			(this.editorHeight = 0),
			(this.editorWidth = 0),
			(this.scrollTop = 0),
			(this.scrolledToBottom = !1),
			(this.scaleX = 1),
			(this.scaleY = 1),
			(this.scrollAnchorPos = 0),
			(this.scrollAnchorHeight = -1),
			(this.scaler = fu),
			(this.scrollTarget = null),
			(this.printing = !1),
			(this.mustMeasureContent = !0),
			(this.defaultTextDirection = me.LTR),
			(this.visibleRanges = []),
			(this.mustEnforceCursorAssoc = !1);
		let t = e.facet(Bl).some((i) => typeof i != 'function' && i.class == 'cm-lineWrapping');
		(this.heightOracle = new Fm(t)),
			(this.stateDeco = e.facet(Wn).filter((i) => typeof i != 'function')),
			(this.heightMap = Ve.empty().applyChanges(
				this.stateDeco,
				ae.empty,
				this.heightOracle.setDoc(e.doc),
				[new at(0, 0, 0, e.doc.length)]
			));
		for (
			let i = 0;
			i < 2 && ((this.viewport = this.getViewport(0, null)), !!this.updateForViewport());
			i++
		);
		this.updateViewportLines(),
			(this.lineGaps = this.ensureLineGaps([])),
			(this.lineGapDeco = I.set(this.lineGaps.map((i) => i.draw(this, !1)))),
			this.computeVisibleRanges();
	}
	updateForViewport() {
		let e = [this.viewport],
			{ main: t } = this.state.selection;
		for (let i = 0; i <= 1; i++) {
			let r = i ? t.head : t.anchor;
			if (!e.some(({ from: s, to: o }) => r >= s && r <= o)) {
				let { from: s, to: o } = this.lineBlockAt(r);
				e.push(new cr(s, o));
			}
		}
		return (this.viewports = e.sort((i, r) => i.from - r.from)), this.updateScaler();
	}
	updateScaler() {
		let e = this.scaler;
		return (
			(this.scaler =
				this.heightMap.height <= 7e6
					? fu
					: new zl(this.heightOracle, this.heightMap, this.viewports)),
			e.eq(this.scaler) ? 0 : 2
		);
	}
	updateViewportLines() {
		(this.viewportLines = []),
			this.heightMap.forEachLine(
				this.viewport.from,
				this.viewport.to,
				this.heightOracle.setDoc(this.state.doc),
				0,
				0,
				(e) => {
					this.viewportLines.push(Sn(e, this.scaler));
				}
			);
	}
	update(e, t = null) {
		this.state = e.state;
		let i = this.stateDeco;
		this.stateDeco = this.state.facet(Wn).filter((h) => typeof h != 'function');
		let r = e.changedRanges,
			s = at.extendWithRanges(
				r,
				Wm(i, this.stateDeco, e ? e.changes : ve.empty(this.state.doc.length))
			),
			o = this.heightMap.height,
			l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
		(this.heightMap = this.heightMap.applyChanges(
			this.stateDeco,
			e.startState.doc,
			this.heightOracle.setDoc(this.state.doc),
			s
		)),
			this.heightMap.height != o && (e.flags |= 2),
			l
				? ((this.scrollAnchorPos = e.changes.mapPos(l.from, -1)), (this.scrollAnchorHeight = l.top))
				: ((this.scrollAnchorPos = -1), (this.scrollAnchorHeight = this.heightMap.height));
		let a = s.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
		((t && (t.range.head < a.from || t.range.head > a.to)) || !this.viewportIsAppropriate(a)) &&
			(a = this.getViewport(0, t));
		let u = a.from != this.viewport.from || a.to != this.viewport.to;
		(this.viewport = a),
			(e.flags |= this.updateForViewport()),
			(u || !e.changes.empty || e.flags & 2) && this.updateViewportLines(),
			(this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
				this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))),
			(e.flags |= this.computeVisibleRanges()),
			t && (this.scrollTarget = t),
			!this.mustEnforceCursorAssoc &&
				e.selectionSet &&
				e.view.lineWrapping &&
				e.state.selection.main.empty &&
				e.state.selection.main.assoc &&
				!e.state.facet(zc) &&
				(this.mustEnforceCursorAssoc = !0);
	}
	measure(e) {
		let t = e.contentDOM,
			i = window.getComputedStyle(t),
			r = this.heightOracle,
			s = i.whiteSpace;
		this.defaultTextDirection = i.direction == 'rtl' ? me.RTL : me.LTR;
		let o = this.heightOracle.mustRefreshForWrapping(s),
			l = t.getBoundingClientRect(),
			a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
		(this.contentDOMHeight = l.height), (this.mustMeasureContent = !1);
		let u = 0,
			h = 0;
		if (l.width && l.height) {
			let { scaleX: k, scaleY: x } = dc(t, l);
			((k > 0.005 && Math.abs(this.scaleX - k) > 0.005) ||
				(x > 0.005 && Math.abs(this.scaleY - x) > 0.005)) &&
				((this.scaleX = k), (this.scaleY = x), (u |= 8), (o = a = !0));
		}
		let c = (parseInt(i.paddingTop) || 0) * this.scaleY,
			f = (parseInt(i.paddingBottom) || 0) * this.scaleY;
		(this.paddingTop != c || this.paddingBottom != f) &&
			((this.paddingTop = c), (this.paddingBottom = f), (u |= 10)),
			this.editorWidth != e.scrollDOM.clientWidth &&
				(r.lineWrapping && (a = !0), (this.editorWidth = e.scrollDOM.clientWidth), (u |= 8));
		let d = e.scrollDOM.scrollTop * this.scaleY;
		this.scrollTop != d && ((this.scrollAnchorHeight = -1), (this.scrollTop = d)),
			(this.scrolledToBottom = mc(e.scrollDOM));
		let p = (this.printing ? qm : Xm)(t, this.paddingTop),
			O = p.top - this.pixelViewport.top,
			m = p.bottom - this.pixelViewport.bottom;
		this.pixelViewport = p;
		let g =
			this.pixelViewport.bottom > this.pixelViewport.top &&
			this.pixelViewport.right > this.pixelViewport.left;
		if (
			(g != this.inView && ((this.inView = g), g && (a = !0)), !this.inView && !this.scrollTarget)
		)
			return 0;
		let S = l.width;
		if (
			((this.contentDOMWidth != S || this.editorHeight != e.scrollDOM.clientHeight) &&
				((this.contentDOMWidth = l.width),
				(this.editorHeight = e.scrollDOM.clientHeight),
				(u |= 8)),
			a)
		) {
			let k = e.docView.measureVisibleLineHeights(this.viewport);
			if (
				(r.mustRefreshForHeights(k) && (o = !0),
				o || (r.lineWrapping && Math.abs(S - this.contentDOMWidth) > r.charWidth))
			) {
				let { lineHeight: x, charWidth: P, textHeight: $ } = e.docView.measureTextSize();
				(o = x > 0 && r.refresh(s, x, P, $, S / P, k)), o && ((e.docView.minWidth = 0), (u |= 8));
			}
			O > 0 && m > 0 ? (h = Math.max(O, m)) : O < 0 && m < 0 && (h = Math.min(O, m)),
				(r.heightChanged = !1);
			for (let x of this.viewports) {
				let P = x.from == this.viewport.from ? k : e.docView.measureVisibleLineHeights(x);
				this.heightMap = (
					o
						? Ve.empty().applyChanges(this.stateDeco, ae.empty, this.heightOracle, [
								new at(0, 0, 0, e.state.doc.length)
							])
						: this.heightMap
				).updateHeight(r, 0, o, new Mm(x.from, P));
			}
			r.heightChanged && (u |= 2);
		}
		let C =
			!this.viewportIsAppropriate(this.viewport, h) ||
			(this.scrollTarget &&
				(this.scrollTarget.range.head < this.viewport.from ||
					this.scrollTarget.range.head > this.viewport.to));
		return (
			C &&
				(u & 2 && (u |= this.updateScaler()),
				(this.viewport = this.getViewport(h, this.scrollTarget)),
				(u |= this.updateForViewport())),
			(u & 2 || C) && this.updateViewportLines(),
			(this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
				this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)),
			(u |= this.computeVisibleRanges()),
			this.mustEnforceCursorAssoc &&
				((this.mustEnforceCursorAssoc = !1), e.docView.enforceCursorAssoc()),
			u
		);
	}
	get visibleTop() {
		return this.scaler.fromDOM(this.pixelViewport.top);
	}
	get visibleBottom() {
		return this.scaler.fromDOM(this.pixelViewport.bottom);
	}
	getViewport(e, t) {
		let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)),
			r = this.heightMap,
			s = this.heightOracle,
			{ visibleTop: o, visibleBottom: l } = this,
			a = new cr(
				r.lineAt(o - i * 1e3, Oe.ByHeight, s, 0, 0).from,
				r.lineAt(l + (1 - i) * 1e3, Oe.ByHeight, s, 0, 0).to
			);
		if (t) {
			let { head: u } = t.range;
			if (u < a.from || u > a.to) {
				let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
					c = r.lineAt(u, Oe.ByPos, s, 0, 0),
					f;
				t.y == 'center'
					? (f = (c.top + c.bottom) / 2 - h / 2)
					: t.y == 'start' || (t.y == 'nearest' && u < a.from)
						? (f = c.top)
						: (f = c.bottom - h),
					(a = new cr(
						r.lineAt(f - 1e3 / 2, Oe.ByHeight, s, 0, 0).from,
						r.lineAt(f + h + 1e3 / 2, Oe.ByHeight, s, 0, 0).to
					));
			}
		}
		return a;
	}
	mapViewport(e, t) {
		let i = t.mapPos(e.from, -1),
			r = t.mapPos(e.to, 1);
		return new cr(
			this.heightMap.lineAt(i, Oe.ByPos, this.heightOracle, 0, 0).from,
			this.heightMap.lineAt(r, Oe.ByPos, this.heightOracle, 0, 0).to
		);
	}
	viewportIsAppropriate({ from: e, to: t }, i = 0) {
		if (!this.inView) return !0;
		let { top: r } = this.heightMap.lineAt(e, Oe.ByPos, this.heightOracle, 0, 0),
			{ bottom: s } = this.heightMap.lineAt(t, Oe.ByPos, this.heightOracle, 0, 0),
			{ visibleTop: o, visibleBottom: l } = this;
		return (
			(e == 0 || r <= o - Math.max(10, Math.min(-i, 250))) &&
			(t == this.state.doc.length || s >= l + Math.max(10, Math.min(i, 250))) &&
			r > o - 2 * 1e3 &&
			s < l + 2 * 1e3
		);
	}
	mapLineGaps(e, t) {
		if (!e.length || t.empty) return e;
		let i = [];
		for (let r of e)
			t.touchesRange(r.from, r.to) || i.push(new Ls(t.mapPos(r.from), t.mapPos(r.to), r.size));
		return i;
	}
	ensureLineGaps(e, t) {
		let i = this.heightOracle.lineWrapping,
			r = i ? 1e4 : 2e3,
			s = r >> 1,
			o = r << 1;
		if (this.defaultTextDirection != me.LTR && !i) return [];
		let l = [],
			a = (u, h, c, f) => {
				if (h - u < s) return;
				let d = this.state.selection.main,
					p = [d.from];
				d.empty || p.push(d.to);
				for (let m of p)
					if (m > u && m < h) {
						a(u, m - 10, c, f), a(m + 10, h, c, f);
						return;
					}
				let O = Nm(
					e,
					(m) =>
						m.from >= c.from &&
						m.to <= c.to &&
						Math.abs(m.from - u) < s &&
						Math.abs(m.to - h) < s &&
						!p.some((g) => m.from < g && m.to > g)
				);
				if (!O) {
					if (h < c.to && t && i && t.visibleRanges.some((m) => m.from <= h && m.to >= h)) {
						let m = t.moveToLineBoundary(Z.cursor(h), !1, !0).head;
						m > u && (h = m);
					}
					O = new Ls(u, h, this.gapSize(c, u, h, f));
				}
				l.push(O);
			};
		for (let u of this.viewportLines) {
			if (u.length < o) continue;
			let h = Ym(u.from, u.to, this.stateDeco);
			if (h.total < o) continue;
			let c = this.scrollTarget ? this.scrollTarget.range.head : null,
				f,
				d;
			if (i) {
				let p = (r / this.heightOracle.lineLength) * this.heightOracle.lineHeight,
					O,
					m;
				if (c != null) {
					let g = dr(h, c),
						S = ((this.visibleBottom - this.visibleTop) / 2 + p) / u.height;
					(O = g - S), (m = g + S);
				} else
					(O = (this.visibleTop - u.top - p) / u.height),
						(m = (this.visibleBottom - u.top + p) / u.height);
				(f = fr(h, O)), (d = fr(h, m));
			} else {
				let p = h.total * this.heightOracle.charWidth,
					O = r * this.heightOracle.charWidth,
					m,
					g;
				if (c != null) {
					let S = dr(h, c),
						C = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + O) / p;
					(m = S - C), (g = S + C);
				} else (m = (this.pixelViewport.left - O) / p), (g = (this.pixelViewport.right + O) / p);
				(f = fr(h, m)), (d = fr(h, g));
			}
			f > u.from && a(u.from, f, u, h), d < u.to && a(d, u.to, u, h);
		}
		return l;
	}
	gapSize(e, t, i, r) {
		let s = dr(r, i) - dr(r, t);
		return this.heightOracle.lineWrapping
			? e.height * s
			: r.total * this.heightOracle.charWidth * s;
	}
	updateLineGaps(e) {
		Ls.same(e, this.lineGaps) ||
			((this.lineGaps = e),
			(this.lineGapDeco = I.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping)))));
	}
	computeVisibleRanges() {
		let e = this.stateDeco;
		this.lineGaps.length && (e = e.concat(this.lineGapDeco));
		let t = [];
		le.spans(
			e,
			this.viewport.from,
			this.viewport.to,
			{
				span(r, s) {
					t.push({ from: r, to: s });
				},
				point() {}
			},
			20
		);
		let i =
			t.length != this.visibleRanges.length ||
			this.visibleRanges.some((r, s) => r.from != t[s].from || r.to != t[s].to);
		return (this.visibleRanges = t), i ? 4 : 0;
	}
	lineBlockAt(e) {
		return (
			(e >= this.viewport.from &&
				e <= this.viewport.to &&
				this.viewportLines.find((t) => t.from <= e && t.to >= e)) ||
			Sn(this.heightMap.lineAt(e, Oe.ByPos, this.heightOracle, 0, 0), this.scaler)
		);
	}
	lineBlockAtHeight(e) {
		return (
			(e >= this.viewportLines[0].top &&
				e <= this.viewportLines[this.viewportLines.length - 1].bottom &&
				this.viewportLines.find((t) => t.top <= e && t.bottom >= e)) ||
			Sn(
				this.heightMap.lineAt(this.scaler.fromDOM(e), Oe.ByHeight, this.heightOracle, 0, 0),
				this.scaler
			)
		);
	}
	scrollAnchorAt(e) {
		let t = this.lineBlockAtHeight(e + 8);
		return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200
			? t
			: this.viewportLines[0];
	}
	elementAtHeight(e) {
		return Sn(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
	}
	get docHeight() {
		return this.scaler.toDOM(this.heightMap.height);
	}
	get contentHeight() {
		return this.docHeight + this.paddingTop + this.paddingBottom;
	}
}
class cr {
	constructor(e, t) {
		(this.from = e), (this.to = t);
	}
}
function Ym(n, e, t) {
	let i = [],
		r = n,
		s = 0;
	return (
		le.spans(
			t,
			n,
			e,
			{
				span() {},
				point(o, l) {
					o > r && (i.push({ from: r, to: o }), (s += o - r)), (r = l);
				}
			},
			20
		),
		r < e && (i.push({ from: r, to: e }), (s += e - r)),
		{ total: s, ranges: i }
	);
}
function fr({ total: n, ranges: e }, t) {
	if (t <= 0) return e[0].from;
	if (t >= 1) return e[e.length - 1].to;
	let i = Math.floor(n * t);
	for (let r = 0; ; r++) {
		let { from: s, to: o } = e[r],
			l = o - s;
		if (i <= l) return s + i;
		i -= l;
	}
}
function dr(n, e) {
	let t = 0;
	for (let { from: i, to: r } of n.ranges) {
		if (e <= r) {
			t += e - i;
			break;
		}
		t += r - i;
	}
	return t / n.total;
}
function Nm(n, e) {
	for (let t of n) if (e(t)) return t;
}
const fu = {
	toDOM(n) {
		return n;
	},
	fromDOM(n) {
		return n;
	},
	scale: 1,
	eq(n) {
		return n == this;
	}
};
class zl {
	constructor(e, t, i) {
		let r = 0,
			s = 0,
			o = 0;
		(this.viewports = i.map(({ from: l, to: a }) => {
			let u = t.lineAt(l, Oe.ByPos, e, 0, 0).top,
				h = t.lineAt(a, Oe.ByPos, e, 0, 0).bottom;
			return (r += h - u), { from: l, to: a, top: u, bottom: h, domTop: 0, domBottom: 0 };
		})),
			(this.scale = (7e6 - r) / (t.height - r));
		for (let l of this.viewports)
			(l.domTop = o + (l.top - s) * this.scale),
				(o = l.domBottom = l.domTop + (l.bottom - l.top)),
				(s = l.bottom);
	}
	toDOM(e) {
		for (let t = 0, i = 0, r = 0; ; t++) {
			let s = t < this.viewports.length ? this.viewports[t] : null;
			if (!s || e < s.top) return r + (e - i) * this.scale;
			if (e <= s.bottom) return s.domTop + (e - s.top);
			(i = s.bottom), (r = s.domBottom);
		}
	}
	fromDOM(e) {
		for (let t = 0, i = 0, r = 0; ; t++) {
			let s = t < this.viewports.length ? this.viewports[t] : null;
			if (!s || e < s.domTop) return i + (e - r) / this.scale;
			if (e <= s.domBottom) return s.top + (e - s.domTop);
			(i = s.bottom), (r = s.domBottom);
		}
	}
	eq(e) {
		return e instanceof zl
			? this.scale == e.scale &&
					this.viewports.length == e.viewports.length &&
					this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to)
			: !1;
	}
}
function Sn(n, e) {
	if (e.scale == 1) return n;
	let t = e.toDOM(n.top),
		i = e.toDOM(n.bottom);
	return new Et(
		n.from,
		n.length,
		t,
		i - t,
		Array.isArray(n._content) ? n._content.map((r) => Sn(r, e)) : n._content
	);
}
const pr = X.define({ combine: (n) => n.join(' ') }),
	Ko = X.define({ combine: (n) => n.indexOf(!0) > -1 }),
	el = ai.newName(),
	of = ai.newName(),
	lf = ai.newName(),
	af = { '&light': '.' + of, '&dark': '.' + lf };
function tl(n, e, t) {
	return new ai(e, {
		finish(i) {
			return /&/.test(i)
				? i.replace(/&\w*/, (r) => {
						if (r == '&') return n;
						if (!t || !t[r]) throw new RangeError(`Unsupported selector: ${r}`);
						return t[r];
					})
				: n + ' ' + i;
		}
	});
}
const Vm = tl(
		'.' + el,
		{
			'&': {
				position: 'relative !important',
				boxSizing: 'border-box',
				'&.cm-focused': { outline: '1px dotted #212121' },
				display: 'flex !important',
				flexDirection: 'column'
			},
			'.cm-scroller': {
				display: 'flex !important',
				alignItems: 'flex-start !important',
				fontFamily: 'monospace',
				lineHeight: 1.4,
				height: '100%',
				overflowX: 'auto',
				position: 'relative',
				zIndex: 0
			},
			'.cm-content': {
				margin: 0,
				flexGrow: 2,
				flexShrink: 0,
				display: 'block',
				whiteSpace: 'pre',
				wordWrap: 'normal',
				boxSizing: 'border-box',
				minHeight: '100%',
				padding: '4px 0',
				outline: 'none',
				'&[contenteditable=true]': {
					WebkitUserModify: 'read-write-plaintext-only'
				}
			},
			'.cm-lineWrapping': {
				whiteSpace_fallback: 'pre-wrap',
				whiteSpace: 'break-spaces',
				wordBreak: 'break-word',
				overflowWrap: 'anywhere',
				flexShrink: 1
			},
			'&light .cm-content': { caretColor: 'black' },
			'&dark .cm-content': { caretColor: 'white' },
			'.cm-line': { display: 'block', padding: '0 2px 0 6px' },
			'.cm-layer': {
				position: 'absolute',
				left: 0,
				top: 0,
				contain: 'size style',
				'& > *': { position: 'absolute' }
			},
			'&light .cm-selectionBackground': { background: '#d9d9d9' },
			'&dark .cm-selectionBackground': { background: '#222' },
			'&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground': {
				background: '#d7d4f0'
			},
			'&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground': {
				background: '#233'
			},
			'.cm-cursorLayer': { pointerEvents: 'none' },
			'&.cm-focused > .cm-scroller > .cm-cursorLayer': {
				animation: 'steps(1) cm-blink 1.2s infinite'
			},
			'@keyframes cm-blink': { '0%': {}, '50%': { opacity: 0 }, '100%': {} },
			'@keyframes cm-blink2': { '0%': {}, '50%': { opacity: 0 }, '100%': {} },
			'.cm-cursor, .cm-dropCursor': {
				borderLeft: '1.2px solid black',
				marginLeft: '-0.6px',
				pointerEvents: 'none'
			},
			'.cm-cursor': { display: 'none' },
			'&dark .cm-cursor': { borderLeftColor: '#444' },
			'.cm-dropCursor': { position: 'absolute' },
			'&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor': {
				display: 'block'
			},
			'.cm-iso': { unicodeBidi: 'isolate' },
			'.cm-announced': { position: 'fixed', top: '-10000px' },
			'@media print': { '.cm-announced': { display: 'none' } },
			'&light .cm-activeLine': { backgroundColor: '#cceeff44' },
			'&dark .cm-activeLine': { backgroundColor: '#99eeff33' },
			'&light .cm-specialChar': { color: 'red' },
			'&dark .cm-specialChar': { color: '#f78' },
			'.cm-gutters': {
				flexShrink: 0,
				display: 'flex',
				height: '100%',
				boxSizing: 'border-box',
				insetInlineStart: 0,
				zIndex: 200
			},
			'&light .cm-gutters': {
				backgroundColor: '#f5f5f5',
				color: '#6c6c6c',
				borderRight: '1px solid #ddd'
			},
			'&dark .cm-gutters': { backgroundColor: '#333338', color: '#ccc' },
			'.cm-gutter': {
				display: 'flex !important',
				flexDirection: 'column',
				flexShrink: 0,
				boxSizing: 'border-box',
				minHeight: '100%',
				overflow: 'hidden'
			},
			'.cm-gutterElement': { boxSizing: 'border-box' },
			'.cm-lineNumbers .cm-gutterElement': {
				padding: '0 3px 0 5px',
				minWidth: '20px',
				textAlign: 'right',
				whiteSpace: 'nowrap'
			},
			'&light .cm-activeLineGutter': { backgroundColor: '#e2f2ff' },
			'&dark .cm-activeLineGutter': { backgroundColor: '#222227' },
			'.cm-panels': {
				boxSizing: 'border-box',
				position: 'sticky',
				left: 0,
				right: 0
			},
			'&light .cm-panels': { backgroundColor: '#f5f5f5', color: 'black' },
			'&light .cm-panels-top': { borderBottom: '1px solid #ddd' },
			'&light .cm-panels-bottom': { borderTop: '1px solid #ddd' },
			'&dark .cm-panels': { backgroundColor: '#333338', color: 'white' },
			'.cm-tab': {
				display: 'inline-block',
				overflow: 'hidden',
				verticalAlign: 'bottom'
			},
			'.cm-widgetBuffer': {
				verticalAlign: 'text-top',
				height: '1em',
				width: 0,
				display: 'inline'
			},
			'.cm-placeholder': {
				color: '#888',
				display: 'inline-block',
				verticalAlign: 'top'
			},
			'.cm-highlightSpace:before': {
				content: 'attr(data-display)',
				position: 'absolute',
				pointerEvents: 'none',
				color: '#888'
			},
			'.cm-highlightTab': {
				backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
				backgroundSize: 'auto 100%',
				backgroundPosition: 'right 90%',
				backgroundRepeat: 'no-repeat'
			},
			'.cm-trailingSpace': { backgroundColor: '#ff332255' },
			'.cm-button': {
				verticalAlign: 'middle',
				color: 'inherit',
				fontSize: '70%',
				padding: '.2em 1em',
				borderRadius: '1px'
			},
			'&light .cm-button': {
				backgroundImage: 'linear-gradient(#eff1f5, #d9d9df)',
				border: '1px solid #888',
				'&:active': { backgroundImage: 'linear-gradient(#b4b4b4, #d0d3d6)' }
			},
			'&dark .cm-button': {
				backgroundImage: 'linear-gradient(#393939, #111)',
				border: '1px solid #888',
				'&:active': { backgroundImage: 'linear-gradient(#111, #333)' }
			},
			'.cm-textfield': {
				verticalAlign: 'middle',
				color: 'inherit',
				fontSize: '70%',
				border: '1px solid silver',
				padding: '.2em .5em'
			},
			'&light .cm-textfield': { backgroundColor: 'white' },
			'&dark .cm-textfield': {
				border: '1px solid #555',
				backgroundColor: 'inherit'
			}
		},
		af
	),
	wn = '￿';
class Im {
	constructor(e, t) {
		(this.points = e), (this.text = ''), (this.lineSeparator = t.facet(oe.lineSeparator));
	}
	append(e) {
		this.text += e;
	}
	lineBreak() {
		this.text += wn;
	}
	readRange(e, t) {
		if (!e) return this;
		let i = e.parentNode;
		for (let r = e; ; ) {
			this.findPointBefore(i, r);
			let s = this.text.length;
			this.readNode(r);
			let o = r.nextSibling;
			if (o == t) break;
			let l = fe.get(r),
				a = fe.get(o);
			(l && a
				? l.breakAfter
				: (l ? l.breakAfter : Yr(r)) ||
					(Yr(o) && (r.nodeName != 'BR' || r.cmIgnore) && this.text.length > s)) &&
				this.lineBreak(),
				(r = o);
		}
		return this.findPointBefore(i, t), this;
	}
	readTextNode(e) {
		let t = e.nodeValue;
		for (let i of this.points)
			i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
		for (let i = 0, r = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
			let s = -1,
				o = 1,
				l;
			if (
				(this.lineSeparator
					? ((s = t.indexOf(this.lineSeparator, i)), (o = this.lineSeparator.length))
					: (l = r.exec(t)) && ((s = l.index), (o = l[0].length)),
				this.append(t.slice(i, s < 0 ? t.length : s)),
				s < 0)
			)
				break;
			if ((this.lineBreak(), o > 1))
				for (let a of this.points) a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
			i = s + o;
		}
	}
	readNode(e) {
		if (e.cmIgnore) return;
		let t = fe.get(e),
			i = t && t.overrideDOMText;
		if (i != null) {
			this.findPointInside(e, i.length);
			for (let r = i.iter(); !r.next().done; )
				r.lineBreak ? this.lineBreak() : this.append(r.value);
		} else
			e.nodeType == 3
				? this.readTextNode(e)
				: e.nodeName == 'BR'
					? e.nextSibling && this.lineBreak()
					: e.nodeType == 1 && this.readRange(e.firstChild, null);
	}
	findPointBefore(e, t) {
		for (let i of this.points)
			i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
	}
	findPointInside(e, t) {
		for (let i of this.points)
			(e.nodeType == 3 ? i.node == e : e.contains(i.node)) &&
				(i.pos = this.text.length + (Lm(e, i.node, i.offset) ? t : 0));
	}
}
function Lm(n, e, t) {
	for (;;) {
		if (!e || t < It(e)) return !1;
		if (e == n) return !0;
		(t = Ei(e) + 1), (e = e.parentNode);
	}
}
class du {
	constructor(e, t) {
		(this.node = e), (this.offset = t), (this.pos = -1);
	}
}
class Um {
	constructor(e, t, i, r) {
		(this.typeOver = r), (this.bounds = null), (this.text = ''), (this.domChanged = t > -1);
		let { impreciseHead: s, impreciseAnchor: o } = e.docView;
		if (e.state.readOnly && t > -1) this.newSel = null;
		else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, i, 0))) {
			let l = s || o ? [] : Jm(e),
				a = new Im(l, e.state);
			a.readRange(this.bounds.startDOM, this.bounds.endDOM),
				(this.text = a.text),
				(this.newSel = Km(l, this.bounds.from));
		} else {
			let l = e.observer.selectionRange,
				a =
					(s && s.node == l.focusNode && s.offset == l.focusOffset) ||
					!Wo(e.contentDOM, l.focusNode)
						? e.state.selection.main.head
						: e.docView.posFromDOM(l.focusNode, l.focusOffset),
				u =
					(o && o.node == l.anchorNode && o.offset == l.anchorOffset) ||
					!Wo(e.contentDOM, l.anchorNode)
						? e.state.selection.main.anchor
						: e.docView.posFromDOM(l.anchorNode, l.anchorOffset),
				h = e.viewport;
			if (
				(z.ios || z.chrome) &&
				e.state.selection.main.empty &&
				a != u &&
				(h.from > 0 || h.to < e.state.doc.length)
			) {
				let c = Math.min(a, u),
					f = Math.max(a, u),
					d = h.from - c,
					p = h.to - f;
				(d == 0 || d == 1 || c == 0) &&
					(p == 0 || p == -1 || f == e.state.doc.length) &&
					((a = 0), (u = e.state.doc.length));
			}
			this.newSel = Z.single(u, a);
		}
	}
}
function uf(n, e) {
	let t,
		{ newSel: i } = e,
		r = n.state.selection.main,
		s = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
	if (e.bounds) {
		let { from: o, to: l } = e.bounds,
			a = r.from,
			u = null;
		(s === 8 || (z.android && e.text.length < l - o)) && ((a = r.to), (u = 'end'));
		let h = Hm(n.state.doc.sliceString(o, l, wn), e.text, a - o, u);
		h &&
			(z.chrome &&
				s == 13 &&
				h.toB == h.from + 2 &&
				e.text.slice(h.from, h.toB) == wn + wn &&
				h.toB--,
			(t = {
				from: o + h.from,
				to: o + h.toA,
				insert: ae.of(e.text.slice(h.from, h.toB).split(wn))
			}));
	} else i && ((!n.hasFocus && n.state.facet(bs)) || i.main.eq(r)) && (i = null);
	if (!t && !i) return !1;
	if (
		(!t && e.typeOver && !r.empty && i && i.main.empty
			? (t = {
					from: r.from,
					to: r.to,
					insert: n.state.doc.slice(r.from, r.to)
				})
			: t &&
				  t.from >= r.from &&
				  t.to <= r.to &&
				  (t.from != r.from || t.to != r.to) &&
				  r.to - r.from - (t.to - t.from) <= 4
				? (t = {
						from: r.from,
						to: r.to,
						insert: n.state.doc
							.slice(r.from, t.from)
							.append(t.insert)
							.append(n.state.doc.slice(t.to, r.to))
					})
				: (z.mac || z.android) &&
					  t &&
					  t.from == t.to &&
					  t.from == r.head - 1 &&
					  /^\. ?$/.test(t.insert.toString()) &&
					  n.contentDOM.getAttribute('autocorrect') == 'off'
					? (i && t.insert.length == 2 && (i = Z.single(i.main.anchor - 1, i.main.head - 1)),
						(t = { from: r.from, to: r.to, insert: ae.of([' ']) }))
					: z.chrome &&
						t &&
						t.from == t.to &&
						t.from == r.head &&
						t.insert.toString() ==
							`
 ` &&
						n.lineWrapping &&
						(i && (i = Z.single(i.main.anchor - 1, i.main.head - 1)),
						(t = { from: r.from, to: r.to, insert: ae.of([' ']) })),
		t)
	) {
		if (
			(z.ios && n.inputState.flushIOSKey(t)) ||
			(z.android &&
				((t.to == r.to &&
					(t.from == r.from || (t.from == r.from - 1 && n.state.sliceDoc(t.from, r.from) == ' ')) &&
					t.insert.length == 1 &&
					t.insert.lines == 2 &&
					Ui(n.contentDOM, 'Enter', 13)) ||
					(((t.from == r.from - 1 && t.to == r.to && t.insert.length == 0) ||
						(s == 8 && t.insert.length < t.to - t.from && t.to > r.head)) &&
						Ui(n.contentDOM, 'Backspace', 8)) ||
					(t.from == r.from &&
						t.to == r.to + 1 &&
						t.insert.length == 0 &&
						Ui(n.contentDOM, 'Delete', 46))))
		)
			return !0;
		let o = t.insert.toString();
		n.inputState.composing >= 0 && n.inputState.composing++;
		let l,
			a = () => l || (l = Gm(n, t, i));
		return n.state.facet(Bc).some((u) => u(n, t.from, t.to, o, a)) || n.dispatch(a()), !0;
	} else if (i && !i.main.eq(r)) {
		let o = !1,
			l = 'select';
		return (
			n.inputState.lastSelectionTime > Date.now() - 50 &&
				(n.inputState.lastSelectionOrigin == 'select' && (o = !0),
				(l = n.inputState.lastSelectionOrigin)),
			n.dispatch({ selection: i, scrollIntoView: o, userEvent: l }),
			!0
		);
	} else return !1;
}
function Gm(n, e, t) {
	let i,
		r = n.state,
		s = r.selection.main;
	if (
		e.from >= s.from &&
		e.to <= s.to &&
		e.to - e.from >= (s.to - s.from) / 3 &&
		(!t || (t.main.empty && t.main.from == e.from + e.insert.length)) &&
		n.inputState.composing < 0
	) {
		let l = s.from < e.from ? r.sliceDoc(s.from, e.from) : '',
			a = s.to > e.to ? r.sliceDoc(e.to, s.to) : '';
		i = r.replaceSelection(
			n.state.toText(l + e.insert.sliceString(0, void 0, n.state.lineBreak) + a)
		);
	} else {
		let l = r.changes(e),
			a = t && t.main.to <= l.newLength ? t.main : void 0;
		if (
			r.selection.ranges.length > 1 &&
			n.inputState.composing >= 0 &&
			e.to <= s.to &&
			e.to >= s.to - 10
		) {
			let u = n.state.sliceDoc(e.from, e.to),
				h,
				c = t && Ic(n, t.main.head);
			if (c) {
				let p = e.insert.length - (e.to - e.from);
				h = { from: c.from, to: c.to - p };
			} else h = n.state.doc.lineAt(s.head);
			let f = s.to - e.to,
				d = s.to - s.from;
			i = r.changeByRange((p) => {
				if (p.from == s.from && p.to == s.to) return { changes: l, range: a || p.map(l) };
				let O = p.to - f,
					m = O - u.length;
				if (p.to - p.from != d || n.state.sliceDoc(m, O) != u || (p.to >= h.from && p.from <= h.to))
					return { range: p };
				let g = r.changes({ from: m, to: O, insert: e.insert }),
					S = p.to - s.to;
				return {
					changes: g,
					range: a ? Z.range(Math.max(0, a.anchor + S), Math.max(0, a.head + S)) : p.map(g)
				};
			});
		} else i = { changes: l, selection: a && r.selection.replaceRange(a) };
	}
	let o = 'input.type';
	return (
		(n.composing ||
			(n.inputState.compositionPendingChange &&
				n.inputState.compositionEndedAt > Date.now() - 50)) &&
			((n.inputState.compositionPendingChange = !1),
			(o += '.compose'),
			n.inputState.compositionFirstChange &&
				((o += '.start'), (n.inputState.compositionFirstChange = !1))),
		r.update(i, { userEvent: o, scrollIntoView: !0 })
	);
}
function Hm(n, e, t, i) {
	let r = Math.min(n.length, e.length),
		s = 0;
	for (; s < r && n.charCodeAt(s) == e.charCodeAt(s); ) s++;
	if (s == r && n.length == e.length) return null;
	let o = n.length,
		l = e.length;
	for (; o > 0 && l > 0 && n.charCodeAt(o - 1) == e.charCodeAt(l - 1); ) o--, l--;
	if (i == 'end') {
		let a = Math.max(0, s - Math.min(o, l));
		t -= o + a - s;
	}
	if (o < s && n.length < e.length) {
		let a = t <= s && t >= o ? s - t : 0;
		(s -= a), (l = s + (l - o)), (o = s);
	} else if (l < s) {
		let a = t <= s && t >= l ? s - t : 0;
		(s -= a), (o = s + (o - l)), (l = s);
	}
	return { from: s, toA: o, toB: l };
}
function Jm(n) {
	let e = [];
	if (n.root.activeElement != n.contentDOM) return e;
	let { anchorNode: t, anchorOffset: i, focusNode: r, focusOffset: s } = n.observer.selectionRange;
	return t && (e.push(new du(t, i)), (r != t || s != i) && e.push(new du(r, s))), e;
}
function Km(n, e) {
	if (n.length == 0) return null;
	let t = n[0].pos,
		i = n.length == 2 ? n[1].pos : t;
	return t > -1 && i > -1 ? Z.single(t + e, i + e) : null;
}
const eg = {
		childList: !0,
		characterData: !0,
		subtree: !0,
		attributes: !0,
		characterDataOldValue: !0
	},
	Us = z.ie && z.ie_version <= 11;
class tg {
	constructor(e) {
		(this.view = e),
			(this.active = !1),
			(this.selectionRange = new jO()),
			(this.selectionChanged = !1),
			(this.delayedFlush = -1),
			(this.resizeTimeout = -1),
			(this.queue = []),
			(this.delayedAndroidKey = null),
			(this.flushingAndroidKey = -1),
			(this.lastChange = 0),
			(this.scrollTargets = []),
			(this.intersection = null),
			(this.resizeScroll = null),
			(this.intersecting = !1),
			(this.gapIntersection = null),
			(this.gaps = []),
			(this.printQuery = null),
			(this.parentCheck = -1),
			(this.dom = e.contentDOM),
			(this.observer = new MutationObserver((t) => {
				for (let i of t) this.queue.push(i);
				((z.ie && z.ie_version <= 11) || (z.ios && e.composing)) &&
				t.some(
					(i) =>
						(i.type == 'childList' && i.removedNodes.length) ||
						(i.type == 'characterData' && i.oldValue.length > i.target.nodeValue.length)
				)
					? this.flushSoon()
					: this.flush();
			})),
			Us &&
				(this.onCharData = (t) => {
					this.queue.push({
						target: t.target,
						type: 'characterData',
						oldValue: t.prevValue
					}),
						this.flushSoon();
				}),
			(this.onSelectionChange = this.onSelectionChange.bind(this)),
			(this.onResize = this.onResize.bind(this)),
			(this.onPrint = this.onPrint.bind(this)),
			(this.onScroll = this.onScroll.bind(this)),
			window.matchMedia && (this.printQuery = window.matchMedia('print')),
			typeof ResizeObserver == 'function' &&
				((this.resizeScroll = new ResizeObserver(() => {
					var t;
					((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) <
						Date.now() - 75 && this.onResize();
				})),
				this.resizeScroll.observe(e.scrollDOM)),
			this.addWindowListeners((this.win = e.win)),
			this.start(),
			typeof IntersectionObserver == 'function' &&
				((this.intersection = new IntersectionObserver(
					(t) => {
						this.parentCheck < 0 &&
							(this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)),
							t.length > 0 &&
								t[t.length - 1].intersectionRatio > 0 != this.intersecting &&
								((this.intersecting = !this.intersecting),
								this.intersecting != this.view.inView &&
									this.onScrollChanged(document.createEvent('Event')));
					},
					{ threshold: [0, 0.001] }
				)),
				this.intersection.observe(this.dom),
				(this.gapIntersection = new IntersectionObserver((t) => {
					t.length > 0 &&
						t[t.length - 1].intersectionRatio > 0 &&
						this.onScrollChanged(document.createEvent('Event'));
				}, {}))),
			this.listenForScroll(),
			this.readSelectionRange();
	}
	onScrollChanged(e) {
		this.view.inputState.runHandlers('scroll', e), this.intersecting && this.view.measure();
	}
	onScroll(e) {
		this.intersecting && this.flush(!1), this.onScrollChanged(e);
	}
	onResize() {
		this.resizeTimeout < 0 &&
			(this.resizeTimeout = setTimeout(() => {
				(this.resizeTimeout = -1), this.view.requestMeasure();
			}, 50));
	}
	onPrint(e) {
		(e.type == 'change' && !e.matches) ||
			((this.view.viewState.printing = !0),
			this.view.measure(),
			setTimeout(() => {
				(this.view.viewState.printing = !1), this.view.requestMeasure();
			}, 500));
	}
	updateGaps(e) {
		if (
			this.gapIntersection &&
			(e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))
		) {
			this.gapIntersection.disconnect();
			for (let t of e) this.gapIntersection.observe(t);
			this.gaps = e;
		}
	}
	onSelectionChange(e) {
		let t = this.selectionChanged;
		if (!this.readSelectionRange() || this.delayedAndroidKey) return;
		let { view: i } = this,
			r = this.selectionRange;
		if (i.state.facet(bs) ? i.root.activeElement != this.dom : !Er(i.dom, r)) return;
		let s = r.anchorNode && i.docView.nearest(r.anchorNode);
		if (s && s.ignoreEvent(e)) {
			t || (this.selectionChanged = !1);
			return;
		}
		((z.ie && z.ie_version <= 11) || (z.android && z.chrome)) &&
		!i.state.selection.main.empty &&
		r.focusNode &&
		An(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset)
			? this.flushSoon()
			: this.flush(!1);
	}
	readSelectionRange() {
		let { view: e } = this,
			t = _r(e.root);
		if (!t) return !1;
		let i =
			(z.safari &&
				e.root.nodeType == 11 &&
				TO(this.dom.ownerDocument) == this.dom &&
				ig(this.view, t)) ||
			t;
		if (!i || this.selectionRange.eq(i)) return !1;
		let r = Er(this.dom, i);
		return r &&
			!this.selectionChanged &&
			e.inputState.lastFocusTime > Date.now() - 200 &&
			e.inputState.lastTouchTime < Date.now() - 300 &&
			zO(this.dom, i)
			? ((this.view.inputState.lastFocusTime = 0), e.docView.updateSelection(), !1)
			: (this.selectionRange.setRange(i), r && (this.selectionChanged = !0), !0);
	}
	setSelectionRange(e, t) {
		this.selectionRange.set(e.node, e.offset, t.node, t.offset), (this.selectionChanged = !1);
	}
	clearSelectionRange() {
		this.selectionRange.set(null, 0, null, 0);
	}
	listenForScroll() {
		this.parentCheck = -1;
		let e = 0,
			t = null;
		for (let i = this.dom; i; )
			if (i.nodeType == 1)
				!t && e < this.scrollTargets.length && this.scrollTargets[e] == i
					? e++
					: t || (t = this.scrollTargets.slice(0, e)),
					t && t.push(i),
					(i = i.assignedSlot || i.parentNode);
			else if (i.nodeType == 11) i = i.host;
			else break;
		if ((e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t)) {
			for (let i of this.scrollTargets) i.removeEventListener('scroll', this.onScroll);
			for (let i of (this.scrollTargets = t)) i.addEventListener('scroll', this.onScroll);
		}
	}
	ignore(e) {
		if (!this.active) return e();
		try {
			return this.stop(), e();
		} finally {
			this.start(), this.clear();
		}
	}
	start() {
		this.active ||
			(this.observer.observe(this.dom, eg),
			Us && this.dom.addEventListener('DOMCharacterDataModified', this.onCharData),
			(this.active = !0));
	}
	stop() {
		this.active &&
			((this.active = !1),
			this.observer.disconnect(),
			Us && this.dom.removeEventListener('DOMCharacterDataModified', this.onCharData));
	}
	clear() {
		this.processRecords(), (this.queue.length = 0), (this.selectionChanged = !1);
	}
	delayAndroidKey(e, t) {
		var i;
		if (!this.delayedAndroidKey) {
			let r = () => {
				let s = this.delayedAndroidKey;
				s &&
					(this.clearDelayedAndroidKey(),
					(this.view.inputState.lastKeyCode = s.keyCode),
					(this.view.inputState.lastKeyTime = Date.now()),
					!this.flush() && s.force && Ui(this.dom, s.key, s.keyCode));
			};
			this.flushingAndroidKey = this.view.win.requestAnimationFrame(r);
		}
		(!this.delayedAndroidKey || e == 'Enter') &&
			(this.delayedAndroidKey = {
				key: e,
				keyCode: t,
				force:
					this.lastChange < Date.now() - 50 ||
					!!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
			});
	}
	clearDelayedAndroidKey() {
		this.win.cancelAnimationFrame(this.flushingAndroidKey),
			(this.delayedAndroidKey = null),
			(this.flushingAndroidKey = -1);
	}
	flushSoon() {
		this.delayedFlush < 0 &&
			(this.delayedFlush = this.view.win.requestAnimationFrame(() => {
				(this.delayedFlush = -1), this.flush();
			}));
	}
	forceFlush() {
		this.delayedFlush >= 0 &&
			(this.view.win.cancelAnimationFrame(this.delayedFlush), (this.delayedFlush = -1)),
			this.flush();
	}
	pendingRecords() {
		for (let e of this.observer.takeRecords()) this.queue.push(e);
		return this.queue;
	}
	processRecords() {
		let e = this.pendingRecords();
		e.length && (this.queue = []);
		let t = -1,
			i = -1,
			r = !1;
		for (let s of e) {
			let o = this.readMutation(s);
			o &&
				(o.typeOver && (r = !0),
				t == -1 ? ({ from: t, to: i } = o) : ((t = Math.min(o.from, t)), (i = Math.max(o.to, i))));
		}
		return { from: t, to: i, typeOver: r };
	}
	readChange() {
		let { from: e, to: t, typeOver: i } = this.processRecords(),
			r = this.selectionChanged && Er(this.dom, this.selectionRange);
		if (e < 0 && !r) return null;
		e > -1 && (this.lastChange = Date.now()),
			(this.view.inputState.lastFocusTime = 0),
			(this.selectionChanged = !1);
		let s = new Um(this.view, e, t, i);
		return (
			(this.view.docView.domChanged = {
				newSel: s.newSel ? s.newSel.main : null
			}),
			s
		);
	}
	flush(e = !0) {
		if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
		e && this.readSelectionRange();
		let t = this.readChange();
		if (!t) return this.view.requestMeasure(), !1;
		let i = this.view.state,
			r = uf(this.view, t);
		return (
			this.view.state == i &&
				(t.domChanged || (t.newSel && !t.newSel.main.eq(this.view.state.selection.main))) &&
				this.view.update([]),
			r
		);
	}
	readMutation(e) {
		let t = this.view.docView.nearest(e.target);
		if (!t || t.ignoreMutation(e)) return null;
		if (
			(t.markDirty(e.type == 'attributes'),
			e.type == 'attributes' && (t.flags |= 4),
			e.type == 'childList')
		) {
			let i = pu(t, e.previousSibling || e.target.previousSibling, -1),
				r = pu(t, e.nextSibling || e.target.nextSibling, 1);
			return {
				from: i ? t.posAfter(i) : t.posAtStart,
				to: r ? t.posBefore(r) : t.posAtEnd,
				typeOver: !1
			};
		} else
			return e.type == 'characterData'
				? {
						from: t.posAtStart,
						to: t.posAtEnd,
						typeOver: e.target.nodeValue == e.oldValue
					}
				: null;
	}
	setWindow(e) {
		e != this.win &&
			(this.removeWindowListeners(this.win), (this.win = e), this.addWindowListeners(this.win));
	}
	addWindowListeners(e) {
		e.addEventListener('resize', this.onResize),
			this.printQuery
				? this.printQuery.addEventListener('change', this.onPrint)
				: e.addEventListener('beforeprint', this.onPrint),
			e.addEventListener('scroll', this.onScroll),
			e.document.addEventListener('selectionchange', this.onSelectionChange);
	}
	removeWindowListeners(e) {
		e.removeEventListener('scroll', this.onScroll),
			e.removeEventListener('resize', this.onResize),
			this.printQuery
				? this.printQuery.removeEventListener('change', this.onPrint)
				: e.removeEventListener('beforeprint', this.onPrint),
			e.document.removeEventListener('selectionchange', this.onSelectionChange);
	}
	destroy() {
		var e, t, i;
		this.stop(),
			(e = this.intersection) === null || e === void 0 || e.disconnect(),
			(t = this.gapIntersection) === null || t === void 0 || t.disconnect(),
			(i = this.resizeScroll) === null || i === void 0 || i.disconnect();
		for (let r of this.scrollTargets) r.removeEventListener('scroll', this.onScroll);
		this.removeWindowListeners(this.win),
			clearTimeout(this.parentCheck),
			clearTimeout(this.resizeTimeout),
			this.win.cancelAnimationFrame(this.delayedFlush),
			this.win.cancelAnimationFrame(this.flushingAndroidKey);
	}
}
function pu(n, e, t) {
	for (; e; ) {
		let i = fe.get(e);
		if (i && i.parent == n) return i;
		let r = e.parentNode;
		e = r != n.dom ? r : t > 0 ? e.nextSibling : e.previousSibling;
	}
	return null;
}
function Ou(n, e) {
	let t = e.startContainer,
		i = e.startOffset,
		r = e.endContainer,
		s = e.endOffset,
		o = n.docView.domAtPos(n.state.selection.main.anchor);
	return (
		An(o.node, o.offset, r, s) && ([t, i, r, s] = [r, s, t, i]),
		{ anchorNode: t, anchorOffset: i, focusNode: r, focusOffset: s }
	);
}
function ig(n, e) {
	if (e.getComposedRanges) {
		let r = e.getComposedRanges(n.root)[0];
		if (r) return Ou(n, r);
	}
	let t = null;
	function i(r) {
		r.preventDefault(), r.stopImmediatePropagation(), (t = r.getTargetRanges()[0]);
	}
	return (
		n.contentDOM.addEventListener('beforeinput', i, !0),
		n.dom.ownerDocument.execCommand('indent'),
		n.contentDOM.removeEventListener('beforeinput', i, !0),
		t ? Ou(n, t) : null
	);
}
class j {
	get state() {
		return this.viewState.state;
	}
	get viewport() {
		return this.viewState.viewport;
	}
	get visibleRanges() {
		return this.viewState.visibleRanges;
	}
	get inView() {
		return this.viewState.inView;
	}
	get composing() {
		return this.inputState.composing > 0;
	}
	get compositionStarted() {
		return this.inputState.composing >= 0;
	}
	get root() {
		return this._root;
	}
	get win() {
		return this.dom.ownerDocument.defaultView || window;
	}
	constructor(e = {}) {
		(this.plugins = []),
			(this.pluginMap = new Map()),
			(this.editorAttrs = {}),
			(this.contentAttrs = {}),
			(this.bidiCache = []),
			(this.destroyed = !1),
			(this.updateState = 2),
			(this.measureScheduled = -1),
			(this.measureRequests = []),
			(this.contentDOM = document.createElement('div')),
			(this.scrollDOM = document.createElement('div')),
			(this.scrollDOM.tabIndex = -1),
			(this.scrollDOM.className = 'cm-scroller'),
			this.scrollDOM.appendChild(this.contentDOM),
			(this.announceDOM = document.createElement('div')),
			(this.announceDOM.className = 'cm-announced'),
			this.announceDOM.setAttribute('aria-live', 'polite'),
			(this.dom = document.createElement('div')),
			this.dom.appendChild(this.announceDOM),
			this.dom.appendChild(this.scrollDOM),
			e.parent && e.parent.appendChild(this.dom);
		let { dispatch: t } = e;
		(this.dispatchTransactions =
			e.dispatchTransactions ||
			(t && ((i) => i.forEach((r) => t(r, this)))) ||
			((i) => this.update(i))),
			(this.dispatch = this.dispatch.bind(this)),
			(this._root = e.root || WO(e.parent) || document),
			(this.viewState = new cu(e.state || oe.create(e))),
			e.scrollTo &&
				e.scrollTo.is(ar) &&
				(this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)),
			(this.plugins = this.state.facet(xn).map((i) => new Ns(i)));
		for (let i of this.plugins) i.update(this);
		(this.observer = new tg(this)),
			(this.inputState = new ym(this)),
			this.inputState.ensureHandlers(this.plugins),
			(this.docView = new Ia(this)),
			this.mountStyles(),
			this.updateAttrs(),
			(this.updateState = 0),
			this.requestMeasure();
	}
	dispatch(...e) {
		let t =
			e.length == 1 && e[0] instanceof Ce
				? e
				: e.length == 1 && Array.isArray(e[0])
					? e[0]
					: [this.state.update(...e)];
		this.dispatchTransactions(t, this);
	}
	update(e) {
		if (this.updateState != 0)
			throw new Error('Calls to EditorView.update are not allowed while an update is in progress');
		let t = !1,
			i = !1,
			r,
			s = this.state;
		for (let f of e) {
			if (f.startState != s)
				throw new RangeError(
					"Trying to update state with a transaction that doesn't start from the previous state."
				);
			s = f.state;
		}
		if (this.destroyed) {
			this.viewState.state = s;
			return;
		}
		let o = this.hasFocus,
			l = 0,
			a = null;
		e.some((f) => f.annotation(tf))
			? ((this.inputState.notifiedFocused = o), (l = 1))
			: o != this.inputState.notifiedFocused &&
				((this.inputState.notifiedFocused = o), (a = nf(s, o)), a || (l = 1));
		let u = this.observer.delayedAndroidKey,
			h = null;
		if (
			(u
				? (this.observer.clearDelayedAndroidKey(),
					(h = this.observer.readChange()),
					((h && !this.state.doc.eq(s.doc)) || !this.state.selection.eq(s.selection)) && (h = null))
				: this.observer.clear(),
			s.facet(oe.phrases) != this.state.facet(oe.phrases))
		)
			return this.setState(s);
		(r = Nr.create(this, s, e)), (r.flags |= l);
		let c = this.viewState.scrollTarget;
		try {
			this.updateState = 2;
			for (let f of e) {
				if ((c && (c = c.map(f.changes)), f.scrollIntoView)) {
					let { main: d } = f.state.selection;
					c = new Gi(d.empty ? d : Z.cursor(d.head, d.head > d.anchor ? -1 : 1));
				}
				for (let d of f.effects) d.is(ar) && (c = d.value.clip(this.state));
			}
			this.viewState.update(r, c),
				(this.bidiCache = Vr.update(this.bidiCache, r.changes)),
				r.empty || (this.updatePlugins(r), this.inputState.update(r)),
				(t = this.docView.update(r)),
				this.state.facet(Dn) != this.styleModules && this.mountStyles(),
				(i = this.updateAttrs()),
				this.showAnnouncements(e),
				this.docView.updateSelection(
					t,
					e.some((f) => f.isUserEvent('select.pointer'))
				);
		} finally {
			this.updateState = 0;
		}
		if (
			(r.startState.facet(pr) != r.state.facet(pr) && (this.viewState.mustMeasureContent = !0),
			(t || i || c || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) &&
				this.requestMeasure(),
			t && this.docViewUpdate(),
			!r.empty)
		)
			for (let f of this.state.facet(Uo))
				try {
					f(r);
				} catch (d) {
					Ue(this.state, d, 'update listener');
				}
		(a || h) &&
			Promise.resolve().then(() => {
				a && this.state == a.startState && this.dispatch(a),
					h && !uf(this, h) && u.force && Ui(this.contentDOM, u.key, u.keyCode);
			});
	}
	setState(e) {
		if (this.updateState != 0)
			throw new Error(
				'Calls to EditorView.setState are not allowed while an update is in progress'
			);
		if (this.destroyed) {
			this.viewState.state = e;
			return;
		}
		this.updateState = 2;
		let t = this.hasFocus;
		try {
			for (let i of this.plugins) i.destroy(this);
			(this.viewState = new cu(e)),
				(this.plugins = e.facet(xn).map((i) => new Ns(i))),
				this.pluginMap.clear();
			for (let i of this.plugins) i.update(this);
			this.docView.destroy(),
				(this.docView = new Ia(this)),
				this.inputState.ensureHandlers(this.plugins),
				this.mountStyles(),
				this.updateAttrs(),
				(this.bidiCache = []);
		} finally {
			this.updateState = 0;
		}
		t && this.focus(), this.requestMeasure();
	}
	updatePlugins(e) {
		let t = e.startState.facet(xn),
			i = e.state.facet(xn);
		if (t != i) {
			let r = [];
			for (let s of i) {
				let o = t.indexOf(s);
				if (o < 0) r.push(new Ns(s));
				else {
					let l = this.plugins[o];
					(l.mustUpdate = e), r.push(l);
				}
			}
			for (let s of this.plugins) s.mustUpdate != e && s.destroy(this);
			(this.plugins = r), this.pluginMap.clear();
		} else for (let r of this.plugins) r.mustUpdate = e;
		for (let r = 0; r < this.plugins.length; r++) this.plugins[r].update(this);
		t != i && this.inputState.ensureHandlers(this.plugins);
	}
	docViewUpdate() {
		for (let e of this.plugins) {
			let t = e.value;
			if (t && t.docViewUpdate)
				try {
					t.docViewUpdate(this);
				} catch (i) {
					Ue(this.state, i, 'doc view update listener');
				}
		}
	}
	measure(e = !0) {
		if (this.destroyed) return;
		if (
			(this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled),
			this.observer.delayedAndroidKey)
		) {
			(this.measureScheduled = -1), this.requestMeasure();
			return;
		}
		(this.measureScheduled = 0), e && this.observer.forceFlush();
		let t = null,
			i = this.scrollDOM,
			r = i.scrollTop * this.scaleY,
			{ scrollAnchorPos: s, scrollAnchorHeight: o } = this.viewState;
		Math.abs(r - this.viewState.scrollTop) > 1 && (o = -1),
			(this.viewState.scrollAnchorHeight = -1);
		try {
			for (let l = 0; ; l++) {
				if (o < 0)
					if (mc(i)) (s = -1), (o = this.viewState.heightMap.height);
					else {
						let d = this.viewState.scrollAnchorAt(r);
						(s = d.from), (o = d.top);
					}
				this.updateState = 1;
				let a = this.viewState.measure(this);
				if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
				if (l > 5) {
					console.warn(
						this.measureRequests.length
							? 'Measure loop restarted more than 5 times'
							: 'Viewport failed to stabilize'
					);
					break;
				}
				let u = [];
				a & 4 || ([this.measureRequests, u] = [u, this.measureRequests]);
				let h = u.map((d) => {
						try {
							return d.read(this);
						} catch (p) {
							return Ue(this.state, p), mu;
						}
					}),
					c = Nr.create(this, this.state, []),
					f = !1;
				(c.flags |= a),
					t ? (t.flags |= a) : (t = c),
					(this.updateState = 2),
					c.empty ||
						(this.updatePlugins(c),
						this.inputState.update(c),
						this.updateAttrs(),
						(f = this.docView.update(c)),
						f && this.docViewUpdate());
				for (let d = 0; d < u.length; d++)
					if (h[d] != mu)
						try {
							let p = u[d];
							p.write && p.write(h[d], this);
						} catch (p) {
							Ue(this.state, p);
						}
				if (
					(f && this.docView.updateSelection(!0),
					!c.viewportChanged && this.measureRequests.length == 0)
				) {
					if (this.viewState.editorHeight)
						if (this.viewState.scrollTarget) {
							this.docView.scrollIntoView(this.viewState.scrollTarget),
								(this.viewState.scrollTarget = null),
								(o = -1);
							continue;
						} else {
							let p =
								(s < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(s).top) - o;
							if (p > 1 || p < -1) {
								(r = r + p), (i.scrollTop = r / this.scaleY), (o = -1);
								continue;
							}
						}
					break;
				}
			}
		} finally {
			(this.updateState = 0), (this.measureScheduled = -1);
		}
		if (t && !t.empty) for (let l of this.state.facet(Uo)) l(t);
	}
	get themeClasses() {
		return el + ' ' + (this.state.facet(Ko) ? lf : of) + ' ' + this.state.facet(pr);
	}
	updateAttrs() {
		let e = gu(this, qc, {
				class: 'cm-editor' + (this.hasFocus ? ' cm-focused ' : ' ') + this.themeClasses
			}),
			t = {
				spellcheck: 'false',
				autocorrect: 'off',
				autocapitalize: 'off',
				translate: 'no',
				contenteditable: this.state.facet(bs) ? 'true' : 'false',
				class: 'cm-content',
				style: `${z.tabSize}: ${this.state.tabSize}`,
				role: 'textbox',
				'aria-multiline': 'true'
			};
		this.state.readOnly && (t['aria-readonly'] = 'true'), gu(this, Bl, t);
		let i = this.observer.ignore(() => {
			let r = Yo(this.contentDOM, this.contentAttrs, t),
				s = Yo(this.dom, this.editorAttrs, e);
			return r || s;
		});
		return (this.editorAttrs = e), (this.contentAttrs = t), i;
	}
	showAnnouncements(e) {
		let t = !0;
		for (let i of e)
			for (let r of i.effects)
				if (r.is(j.announce)) {
					t && (this.announceDOM.textContent = ''), (t = !1);
					let s = this.announceDOM.appendChild(document.createElement('div'));
					s.textContent = r.value;
				}
	}
	mountStyles() {
		this.styleModules = this.state.facet(Dn);
		let e = this.state.facet(j.cspNonce);
		ai.mount(this.root, this.styleModules.concat(Vm).reverse(), e ? { nonce: e } : void 0);
	}
	readMeasured() {
		if (this.updateState == 2)
			throw new Error("Reading the editor layout isn't allowed during an update");
		this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
	}
	requestMeasure(e) {
		if (
			(this.measureScheduled < 0 &&
				(this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())),
			e)
		) {
			if (this.measureRequests.indexOf(e) > -1) return;
			if (e.key != null) {
				for (let t = 0; t < this.measureRequests.length; t++)
					if (this.measureRequests[t].key === e.key) {
						this.measureRequests[t] = e;
						return;
					}
			}
			this.measureRequests.push(e);
		}
	}
	plugin(e) {
		let t = this.pluginMap.get(e);
		return (
			(t === void 0 || (t && t.spec != e)) &&
				this.pluginMap.set(e, (t = this.plugins.find((i) => i.spec == e) || null)),
			t && t.update(this).value
		);
	}
	get documentTop() {
		return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
	}
	get documentPadding() {
		return {
			top: this.viewState.paddingTop,
			bottom: this.viewState.paddingBottom
		};
	}
	get scaleX() {
		return this.viewState.scaleX;
	}
	get scaleY() {
		return this.viewState.scaleY;
	}
	elementAtHeight(e) {
		return this.readMeasured(), this.viewState.elementAtHeight(e);
	}
	lineBlockAtHeight(e) {
		return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
	}
	get viewportLineBlocks() {
		return this.viewState.viewportLines;
	}
	lineBlockAt(e) {
		return this.viewState.lineBlockAt(e);
	}
	get contentHeight() {
		return this.viewState.contentHeight;
	}
	moveByChar(e, t, i) {
		return Is(this, e, Ka(this, e, t, i));
	}
	moveByGroup(e, t) {
		return Is(
			this,
			e,
			Ka(this, e, t, (i) => mm(this, e.head, i))
		);
	}
	visualLineSide(e, t) {
		let i = this.bidiSpans(e),
			r = this.textDirectionAt(e.from),
			s = i[t ? i.length - 1 : 0];
		return Z.cursor(s.side(t, r) + e.from, s.forward(!t, r) ? 1 : -1);
	}
	moveToLineBoundary(e, t, i = !0) {
		return Om(this, e, t, i);
	}
	moveVertically(e, t, i) {
		return Is(this, e, gm(this, e, t, i));
	}
	domAtPos(e) {
		return this.docView.domAtPos(e);
	}
	posAtDOM(e, t = 0) {
		return this.docView.posFromDOM(e, t);
	}
	posAtCoords(e, t = !0) {
		return this.readMeasured(), Lc(this, e, t);
	}
	coordsAtPos(e, t = 1) {
		this.readMeasured();
		let i = this.docView.coordsAt(e, t);
		if (!i || i.left == i.right) return i;
		let r = this.state.doc.lineAt(e),
			s = this.bidiSpans(r),
			o = s[ni.find(s, e - r.from, -1, t)];
		return gs(i, (o.dir == me.LTR) == t > 0);
	}
	coordsForChar(e) {
		return this.readMeasured(), this.docView.coordsForChar(e);
	}
	get defaultCharacterWidth() {
		return this.viewState.heightOracle.charWidth;
	}
	get defaultLineHeight() {
		return this.viewState.heightOracle.lineHeight;
	}
	get textDirection() {
		return this.viewState.defaultTextDirection;
	}
	textDirectionAt(e) {
		return !this.state.facet(Wc) || e < this.viewport.from || e > this.viewport.to
			? this.textDirection
			: (this.readMeasured(), this.docView.textDirectionAt(e));
	}
	get lineWrapping() {
		return this.viewState.heightOracle.lineWrapping;
	}
	bidiSpans(e) {
		if (e.length > ng) return Ec(e.length);
		let t = this.textDirectionAt(e.from),
			i;
		for (let s of this.bidiCache)
			if (s.from == e.from && s.dir == t && (s.fresh || $c(s.isolates, (i = Va(this, e)))))
				return s.order;
		i || (i = Va(this, e));
		let r = KO(e.text, t, i);
		return this.bidiCache.push(new Vr(e.from, e.to, t, i, !0, r)), r;
	}
	get hasFocus() {
		var e;
		return (
			(this.dom.ownerDocument.hasFocus() ||
				(z.safari &&
					((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) >
						Date.now() - 3e4)) &&
			this.root.activeElement == this.contentDOM
		);
	}
	focus() {
		this.observer.ignore(() => {
			pc(this.contentDOM), this.docView.updateSelection();
		});
	}
	setRoot(e) {
		this._root != e &&
			((this._root = e),
			this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window),
			this.mountStyles());
	}
	destroy() {
		for (let e of this.plugins) e.destroy(this);
		(this.plugins = []),
			this.inputState.destroy(),
			this.docView.destroy(),
			this.dom.remove(),
			this.observer.destroy(),
			this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled),
			(this.destroyed = !0);
	}
	static scrollIntoView(e, t = {}) {
		return ar.of(new Gi(typeof e == 'number' ? Z.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
	}
	scrollSnapshot() {
		let { scrollTop: e, scrollLeft: t } = this.scrollDOM,
			i = this.viewState.scrollAnchorAt(e);
		return ar.of(new Gi(Z.cursor(i.from), 'start', 'start', i.top - e, t, !0));
	}
	setTabFocusMode(e) {
		e == null
			? (this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1)
			: typeof e == 'boolean'
				? (this.inputState.tabFocusMode = e ? 0 : -1)
				: this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
	}
	static domEventHandlers(e) {
		return De.define(() => ({}), { eventHandlers: e });
	}
	static domEventObservers(e) {
		return De.define(() => ({}), { eventObservers: e });
	}
	static theme(e, t) {
		let i = ai.newName(),
			r = [pr.of(i), Dn.of(tl(`.${i}`, e))];
		return t && t.dark && r.push(Ko.of(!0)), r;
	}
	static baseTheme(e) {
		return Fi.lowest(Dn.of(tl('.' + el, e, af)));
	}
	static findFromDOM(e) {
		var t;
		let i = e.querySelector('.cm-content'),
			r = (i && fe.get(i)) || fe.get(e);
		return (
			((t = r == null ? void 0 : r.rootView) === null || t === void 0 ? void 0 : t.view) || null
		);
	}
}
j.styleModule = Dn;
j.inputHandler = Bc;
j.scrollHandler = Xc;
j.focusChangeEffect = jc;
j.perLineTextDirection = Wc;
j.exceptionSink = Mc;
j.updateListener = Uo;
j.editable = bs;
j.mouseSelectionStyle = Fc;
j.dragMovesSelection = Tc;
j.clickAddsSelectionRange = Rc;
j.decorations = Wn;
j.outerDecorations = _c;
j.atomicRanges = jl;
j.bidiIsolatedRanges = Yc;
j.scrollMargins = Nc;
j.darkTheme = Ko;
j.cspNonce = X.define({ combine: (n) => (n.length ? n[0] : '') });
j.contentAttributes = Bl;
j.editorAttributes = qc;
j.lineWrapping = j.contentAttributes.of({ class: 'cm-lineWrapping' });
j.announce = te.define();
const ng = 4096,
	mu = {};
class Vr {
	constructor(e, t, i, r, s, o) {
		(this.from = e),
			(this.to = t),
			(this.dir = i),
			(this.isolates = r),
			(this.fresh = s),
			(this.order = o);
	}
	static update(e, t) {
		if (t.empty && !e.some((s) => s.fresh)) return e;
		let i = [],
			r = e.length ? e[e.length - 1].dir : me.LTR;
		for (let s = Math.max(0, e.length - 10); s < e.length; s++) {
			let o = e[s];
			o.dir == r &&
				!t.touchesRange(o.from, o.to) &&
				i.push(new Vr(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
		}
		return i;
	}
}
function gu(n, e, t) {
	for (let i = n.state.facet(e), r = i.length - 1; r >= 0; r--) {
		let s = i[r],
			o = typeof s == 'function' ? s(n) : s;
		o && _o(o, t);
	}
	return t;
}
const rg = z.mac ? 'mac' : z.windows ? 'win' : z.linux ? 'linux' : 'key';
function sg(n, e) {
	const t = n.split(/-(?!$)/);
	let i = t[t.length - 1];
	i == 'Space' && (i = ' ');
	let r, s, o, l;
	for (let a = 0; a < t.length - 1; ++a) {
		const u = t[a];
		if (/^(cmd|meta|m)$/i.test(u)) l = !0;
		else if (/^a(lt)?$/i.test(u)) r = !0;
		else if (/^(c|ctrl|control)$/i.test(u)) s = !0;
		else if (/^s(hift)?$/i.test(u)) o = !0;
		else if (/^mod$/i.test(u)) e == 'mac' ? (l = !0) : (s = !0);
		else throw new Error('Unrecognized modifier name: ' + u);
	}
	return (
		r && (i = 'Alt-' + i),
		s && (i = 'Ctrl-' + i),
		l && (i = 'Meta-' + i),
		o && (i = 'Shift-' + i),
		i
	);
}
function Or(n, e, t) {
	return (
		e.altKey && (n = 'Alt-' + n),
		e.ctrlKey && (n = 'Ctrl-' + n),
		e.metaKey && (n = 'Meta-' + n),
		t !== !1 && e.shiftKey && (n = 'Shift-' + n),
		n
	);
}
const og = Fi.default(
		j.domEventHandlers({
			keydown(n, e) {
				return cf(hf(e.state), n, e, 'editor');
			}
		})
	),
	Jn = X.define({ enables: og }),
	yu = new WeakMap();
function hf(n) {
	let e = n.facet(Jn),
		t = yu.get(e);
	return t || yu.set(e, (t = ug(e.reduce((i, r) => i.concat(r), [])))), t;
}
function lg(n, e, t) {
	return cf(hf(n.state), e, n, t);
}
let ei = null;
const ag = 4e3;
function ug(n, e = rg) {
	let t = Object.create(null),
		i = Object.create(null),
		r = (o, l) => {
			let a = i[o];
			if (a == null) i[o] = l;
			else if (a != l)
				throw new Error(
					'Key binding ' + o + ' is used both as a regular binding and as a multi-stroke prefix'
				);
		},
		s = (o, l, a, u, h) => {
			var c, f;
			let d = t[o] || (t[o] = Object.create(null)),
				p = l.split(/ (?!$)/).map((g) => sg(g, e));
			for (let g = 1; g < p.length; g++) {
				let S = p.slice(0, g).join(' ');
				r(S, !0),
					d[S] ||
						(d[S] = {
							preventDefault: !0,
							stopPropagation: !1,
							run: [
								(C) => {
									let k = (ei = { view: C, prefix: S, scope: o });
									return (
										setTimeout(() => {
											ei == k && (ei = null);
										}, ag),
										!0
									);
								}
							]
						});
			}
			let O = p.join(' ');
			r(O, !1);
			let m =
				d[O] ||
				(d[O] = {
					preventDefault: !1,
					stopPropagation: !1,
					run:
						((f = (c = d._any) === null || c === void 0 ? void 0 : c.run) === null || f === void 0
							? void 0
							: f.slice()) || []
				});
			a && m.run.push(a), u && (m.preventDefault = !0), h && (m.stopPropagation = !0);
		};
	for (let o of n) {
		let l = o.scope ? o.scope.split(' ') : ['editor'];
		if (o.any)
			for (let u of l) {
				let h = t[u] || (t[u] = Object.create(null));
				h._any || (h._any = { preventDefault: !1, stopPropagation: !1, run: [] });
				let { any: c } = o;
				for (let f in h) h[f].run.push((d) => c(d, il));
			}
		let a = o[e] || o.key;
		if (a)
			for (let u of l)
				s(u, a, o.run, o.preventDefault, o.stopPropagation),
					o.shift && s(u, 'Shift-' + a, o.shift, o.preventDefault, o.stopPropagation);
	}
	return t;
}
let il = null;
function cf(n, e, t, i) {
	il = e;
	let r = RO(e),
		s = Re(r, 0),
		o = ot(s) == r.length && r != ' ',
		l = '',
		a = !1,
		u = !1,
		h = !1;
	ei &&
		ei.view == t &&
		ei.scope == i &&
		((l = ei.prefix + ' '), Gc.indexOf(e.keyCode) < 0 && ((u = !0), (ei = null)));
	let c = new Set(),
		f = (m) => {
			if (m) {
				for (let g of m.run)
					if (!c.has(g) && (c.add(g), g(t))) return m.stopPropagation && (h = !0), !0;
				m.preventDefault && (m.stopPropagation && (h = !0), (u = !0));
			}
			return !1;
		},
		d = n[i],
		p,
		O;
	return (
		d &&
			(f(d[l + Or(r, e, !o)])
				? (a = !0)
				: o &&
					  (e.altKey || e.metaKey || e.ctrlKey) &&
					  !(z.windows && e.ctrlKey && e.altKey) &&
					  (p = ui[e.keyCode]) &&
					  p != r
					? (f(d[l + Or(p, e, !0)]) ||
							(e.shiftKey && (O = jn[e.keyCode]) != r && O != p && f(d[l + Or(O, e, !1)]))) &&
						(a = !0)
					: o && e.shiftKey && f(d[l + Or(r, e, !0)]) && (a = !0),
			!a && f(d._any) && (a = !0)),
		u && (a = !0),
		a && h && e.stopPropagation(),
		(il = null),
		a
	);
}
class Kn {
	constructor(e, t, i, r, s) {
		(this.className = e), (this.left = t), (this.top = i), (this.width = r), (this.height = s);
	}
	draw() {
		let e = document.createElement('div');
		return (e.className = this.className), this.adjust(e), e;
	}
	update(e, t) {
		return t.className != this.className ? !1 : (this.adjust(e), !0);
	}
	adjust(e) {
		(e.style.left = this.left + 'px'),
			(e.style.top = this.top + 'px'),
			this.width != null && (e.style.width = this.width + 'px'),
			(e.style.height = this.height + 'px');
	}
	eq(e) {
		return (
			this.left == e.left &&
			this.top == e.top &&
			this.width == e.width &&
			this.height == e.height &&
			this.className == e.className
		);
	}
	static forRange(e, t, i) {
		if (i.empty) {
			let r = e.coordsAtPos(i.head, i.assoc || 1);
			if (!r) return [];
			let s = ff(e);
			return [new Kn(t, r.left - s.left, r.top - s.top, null, r.bottom - r.top)];
		} else return hg(e, t, i);
	}
}
function ff(n) {
	let e = n.scrollDOM.getBoundingClientRect();
	return {
		left:
			(n.textDirection == me.LTR ? e.left : e.right - n.scrollDOM.clientWidth * n.scaleX) -
			n.scrollDOM.scrollLeft * n.scaleX,
		top: e.top - n.scrollDOM.scrollTop * n.scaleY
	};
}
function bu(n, e, t, i) {
	let r = n.coordsAtPos(e, t * 2);
	if (!r) return i;
	let s = n.dom.getBoundingClientRect(),
		o = (r.top + r.bottom) / 2,
		l = n.posAtCoords({ x: s.left + 1, y: o }),
		a = n.posAtCoords({ x: s.right - 1, y: o });
	return l == null || a == null
		? i
		: {
				from: Math.max(i.from, Math.min(l, a)),
				to: Math.min(i.to, Math.max(l, a))
			};
}
function hg(n, e, t) {
	if (t.to <= n.viewport.from || t.from >= n.viewport.to) return [];
	let i = Math.max(t.from, n.viewport.from),
		r = Math.min(t.to, n.viewport.to),
		s = n.textDirection == me.LTR,
		o = n.contentDOM,
		l = o.getBoundingClientRect(),
		a = ff(n),
		u = o.querySelector('.cm-line'),
		h = u && window.getComputedStyle(u),
		c = l.left + (h ? parseInt(h.paddingLeft) + Math.min(0, parseInt(h.textIndent)) : 0),
		f = l.right - (h ? parseInt(h.paddingRight) : 0),
		d = Ho(n, i),
		p = Ho(n, r),
		O = d.type == He.Text ? d : null,
		m = p.type == He.Text ? p : null;
	if (
		(O && (n.lineWrapping || d.widgetLineBreaks) && (O = bu(n, i, 1, O)),
		m && (n.lineWrapping || p.widgetLineBreaks) && (m = bu(n, r, -1, m)),
		O && m && O.from == m.from && O.to == m.to)
	)
		return S(C(t.from, t.to, O));
	{
		let x = O ? C(t.from, null, O) : k(d, !1),
			P = m ? C(null, t.to, m) : k(p, !0),
			$ = [];
		return (
			(O || d).to < (m || p).from - (O && m ? 1 : 0) ||
			(d.widgetLineBreaks > 1 && x.bottom + n.defaultLineHeight / 2 < P.top)
				? $.push(g(c, x.bottom, f, P.top))
				: x.bottom < P.top &&
					n.elementAtHeight((x.bottom + P.top) / 2).type == He.Text &&
					(x.bottom = P.top = (x.bottom + P.top) / 2),
			S(x).concat($).concat(S(P))
		);
	}
	function g(x, P, $, T) {
		return new Kn(e, x - a.left, P - a.top - 0.01, $ - x, T - P + 0.01);
	}
	function S({ top: x, bottom: P, horizontal: $ }) {
		let T = [];
		for (let w = 0; w < $.length; w += 2) T.push(g($[w], x, $[w + 1], P));
		return T;
	}
	function C(x, P, $) {
		let T = 1e9,
			w = -1e9,
			b = [];
		function A(F, q, _, Y, N) {
			let W = n.coordsAtPos(F, F == $.to ? -2 : 2),
				K = n.coordsAtPos(_, _ == $.from ? 2 : -2);
			!W ||
				!K ||
				((T = Math.min(W.top, K.top, T)),
				(w = Math.max(W.bottom, K.bottom, w)),
				N == me.LTR
					? b.push(s && q ? c : W.left, s && Y ? f : K.right)
					: b.push(!s && Y ? c : K.left, !s && q ? f : W.right));
		}
		let E = x ?? $.from,
			Q = P ?? $.to;
		for (let F of n.visibleRanges)
			if (F.to > E && F.from < Q)
				for (let q = Math.max(F.from, E), _ = Math.min(F.to, Q); ; ) {
					let Y = n.state.doc.lineAt(q);
					for (let N of n.bidiSpans(Y)) {
						let W = N.from + Y.from,
							K = N.to + Y.from;
						if (W >= _) break;
						K > q &&
							A(Math.max(W, q), x == null && W <= E, Math.min(K, _), P == null && K >= Q, N.dir);
					}
					if (((q = Y.to + 1), q >= _)) break;
				}
		return (
			b.length == 0 && A(E, x == null, Q, P == null, n.textDirection),
			{ top: T, bottom: w, horizontal: b }
		);
	}
	function k(x, P) {
		let $ = l.top + (P ? x.top : x.bottom);
		return { top: $, bottom: $, horizontal: [] };
	}
}
function cg(n, e) {
	return n.constructor == e.constructor && n.eq(e);
}
class fg {
	constructor(e, t) {
		(this.view = e),
			(this.layer = t),
			(this.drawn = []),
			(this.scaleX = 1),
			(this.scaleY = 1),
			(this.measureReq = {
				read: this.measure.bind(this),
				write: this.draw.bind(this)
			}),
			(this.dom = e.scrollDOM.appendChild(document.createElement('div'))),
			this.dom.classList.add('cm-layer'),
			t.above && this.dom.classList.add('cm-layer-above'),
			t.class && this.dom.classList.add(t.class),
			this.scale(),
			this.dom.setAttribute('aria-hidden', 'true'),
			this.setOrder(e.state),
			e.requestMeasure(this.measureReq),
			t.mount && t.mount(this.dom, e);
	}
	update(e) {
		e.startState.facet(Tr) != e.state.facet(Tr) && this.setOrder(e.state),
			(this.layer.update(e, this.dom) || e.geometryChanged) &&
				(this.scale(), e.view.requestMeasure(this.measureReq));
	}
	docViewUpdate(e) {
		this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
	}
	setOrder(e) {
		let t = 0,
			i = e.facet(Tr);
		for (; t < i.length && i[t] != this.layer; ) t++;
		this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
	}
	measure() {
		return this.layer.markers(this.view);
	}
	scale() {
		let { scaleX: e, scaleY: t } = this.view;
		(e != this.scaleX || t != this.scaleY) &&
			((this.scaleX = e),
			(this.scaleY = t),
			(this.dom.style.transform = `scale(${1 / e}, ${1 / t})`));
	}
	draw(e) {
		if (e.length != this.drawn.length || e.some((t, i) => !cg(t, this.drawn[i]))) {
			let t = this.dom.firstChild,
				i = 0;
			for (let r of e)
				r.update && t && r.constructor && this.drawn[i].constructor && r.update(t, this.drawn[i])
					? ((t = t.nextSibling), i++)
					: this.dom.insertBefore(r.draw(), t);
			for (; t; ) {
				let r = t.nextSibling;
				t.remove(), (t = r);
			}
			this.drawn = e;
		}
	}
	destroy() {
		this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
	}
}
const Tr = X.define();
function df(n) {
	return [De.define((e) => new fg(e, n)), Tr.of(n)];
}
const pf = !z.ios,
	zn = X.define({
		combine(n) {
			return Bt(
				n,
				{ cursorBlinkRate: 1200, drawRangeCursor: !0 },
				{
					cursorBlinkRate: (e, t) => Math.min(e, t),
					drawRangeCursor: (e, t) => e || t
				}
			);
		}
	});
function Of(n = {}) {
	return [zn.of(n), dg, pg, Og, zc.of(!0)];
}
function mf(n) {
	return n.startState.facet(zn) != n.state.facet(zn);
}
const dg = df({
	above: !0,
	markers(n) {
		let { state: e } = n,
			t = e.facet(zn),
			i = [];
		for (let r of e.selection.ranges) {
			let s = r == e.selection.main;
			if (r.empty ? !s || pf : t.drawRangeCursor) {
				let o = s ? 'cm-cursor cm-cursor-primary' : 'cm-cursor cm-cursor-secondary',
					l = r.empty ? r : Z.cursor(r.head, r.head > r.anchor ? -1 : 1);
				for (let a of Kn.forRange(n, o, l)) i.push(a);
			}
		}
		return i;
	},
	update(n, e) {
		n.transactions.some((i) => i.selection) &&
			(e.style.animationName = e.style.animationName == 'cm-blink' ? 'cm-blink2' : 'cm-blink');
		let t = mf(n);
		return t && xu(n.state, e), n.docChanged || n.selectionSet || t;
	},
	mount(n, e) {
		xu(e.state, n);
	},
	class: 'cm-cursorLayer'
});
function xu(n, e) {
	e.style.animationDuration = n.facet(zn).cursorBlinkRate + 'ms';
}
const pg = df({
		above: !1,
		markers(n) {
			return n.state.selection.ranges
				.map((e) => (e.empty ? [] : Kn.forRange(n, 'cm-selectionBackground', e)))
				.reduce((e, t) => e.concat(t));
		},
		update(n, e) {
			return n.docChanged || n.selectionSet || n.viewportChanged || mf(n);
		},
		class: 'cm-selectionLayer'
	}),
	nl = {
		'.cm-line': {
			'& ::selection, &::selection': {
				backgroundColor: 'transparent !important'
			}
		},
		'.cm-content': {
			'& :focus': {
				caretColor: 'initial !important',
				'&::selection, & ::selection': {
					backgroundColor: 'Highlight !important'
				}
			}
		}
	};
pf && (nl['.cm-line'].caretColor = nl['.cm-content'].caretColor = 'transparent !important');
const Og = Fi.highest(j.theme(nl)),
	gf = te.define({
		map(n, e) {
			return n == null ? null : e.mapPos(n);
		}
	}),
	kn = Be.define({
		create() {
			return null;
		},
		update(n, e) {
			return (
				n != null && (n = e.changes.mapPos(n)),
				e.effects.reduce((t, i) => (i.is(gf) ? i.value : t), n)
			);
		}
	}),
	mg = De.fromClass(
		class {
			constructor(n) {
				(this.view = n),
					(this.cursor = null),
					(this.measureReq = {
						read: this.readPos.bind(this),
						write: this.drawCursor.bind(this)
					});
			}
			update(n) {
				var e;
				let t = n.state.field(kn);
				t == null
					? this.cursor != null &&
						((e = this.cursor) === null || e === void 0 || e.remove(), (this.cursor = null))
					: (this.cursor ||
							((this.cursor = this.view.scrollDOM.appendChild(document.createElement('div'))),
							(this.cursor.className = 'cm-dropCursor')),
						(n.startState.field(kn) != t || n.docChanged || n.geometryChanged) &&
							this.view.requestMeasure(this.measureReq));
			}
			readPos() {
				let { view: n } = this,
					e = n.state.field(kn),
					t = e != null && n.coordsAtPos(e);
				if (!t) return null;
				let i = n.scrollDOM.getBoundingClientRect();
				return {
					left: t.left - i.left + n.scrollDOM.scrollLeft * n.scaleX,
					top: t.top - i.top + n.scrollDOM.scrollTop * n.scaleY,
					height: t.bottom - t.top
				};
			}
			drawCursor(n) {
				if (this.cursor) {
					let { scaleX: e, scaleY: t } = this.view;
					n
						? ((this.cursor.style.left = n.left / e + 'px'),
							(this.cursor.style.top = n.top / t + 'px'),
							(this.cursor.style.height = n.height / t + 'px'))
						: (this.cursor.style.left = '-100000px');
				}
			}
			destroy() {
				this.cursor && this.cursor.remove();
			}
			setDropPos(n) {
				this.view.state.field(kn) != n && this.view.dispatch({ effects: gf.of(n) });
			}
		},
		{
			eventObservers: {
				dragover(n) {
					this.setDropPos(this.view.posAtCoords({ x: n.clientX, y: n.clientY }));
				},
				dragleave(n) {
					(n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) &&
						this.setDropPos(null);
				},
				dragend() {
					this.setDropPos(null);
				},
				drop() {
					this.setDropPos(null);
				}
			}
		}
	);
function gg() {
	return [kn, mg];
}
function Du(n, e, t, i, r) {
	e.lastIndex = 0;
	for (let s = n.iterRange(t, i), o = t, l; !s.next().done; o += s.value.length)
		if (!s.lineBreak) for (; (l = e.exec(s.value)); ) r(o + l.index, l);
}
function yg(n, e) {
	let t = n.visibleRanges;
	if (t.length == 1 && t[0].from == n.viewport.from && t[0].to == n.viewport.to) return t;
	let i = [];
	for (let { from: r, to: s } of t)
		(r = Math.max(n.state.doc.lineAt(r).from, r - e)),
			(s = Math.min(n.state.doc.lineAt(s).to, s + e)),
			i.length && i[i.length - 1].to >= r ? (i[i.length - 1].to = s) : i.push({ from: r, to: s });
	return i;
}
class bg {
	constructor(e) {
		const { regexp: t, decoration: i, decorate: r, boundary: s, maxLength: o = 1e3 } = e;
		if (!t.global)
			throw new RangeError(
				"The regular expression given to MatchDecorator should have its 'g' flag set"
			);
		if (((this.regexp = t), r)) this.addMatch = (l, a, u, h) => r(h, u, u + l[0].length, l, a);
		else if (typeof i == 'function')
			this.addMatch = (l, a, u, h) => {
				let c = i(l, a, u);
				c && h(u, u + l[0].length, c);
			};
		else if (i) this.addMatch = (l, a, u, h) => h(u, u + l[0].length, i);
		else
			throw new RangeError(
				"Either 'decorate' or 'decoration' should be provided to MatchDecorator"
			);
		(this.boundary = s), (this.maxLength = o);
	}
	createDeco(e) {
		let t = new li(),
			i = t.add.bind(t);
		for (let { from: r, to: s } of yg(e, this.maxLength))
			Du(e.state.doc, this.regexp, r, s, (o, l) => this.addMatch(l, e, o, i));
		return t.finish();
	}
	updateDeco(e, t) {
		let i = 1e9,
			r = -1;
		return (
			e.docChanged &&
				e.changes.iterChanges((s, o, l, a) => {
					a > e.view.viewport.from &&
						l < e.view.viewport.to &&
						((i = Math.min(l, i)), (r = Math.max(a, r)));
				}),
			e.viewportChanged || r - i > 1e3
				? this.createDeco(e.view)
				: r > -1
					? this.updateRange(e.view, t.map(e.changes), i, r)
					: t
		);
	}
	updateRange(e, t, i, r) {
		for (let s of e.visibleRanges) {
			let o = Math.max(s.from, i),
				l = Math.min(s.to, r);
			if (l > o) {
				let a = e.state.doc.lineAt(o),
					u = a.to < l ? e.state.doc.lineAt(l) : a,
					h = Math.max(s.from, a.from),
					c = Math.min(s.to, u.to);
				if (this.boundary) {
					for (; o > a.from; o--)
						if (this.boundary.test(a.text[o - 1 - a.from])) {
							h = o;
							break;
						}
					for (; l < u.to; l++)
						if (this.boundary.test(u.text[l - u.from])) {
							c = l;
							break;
						}
				}
				let f = [],
					d,
					p = (O, m, g) => f.push(g.range(O, m));
				if (a == u)
					for (
						this.regexp.lastIndex = h - a.from;
						(d = this.regexp.exec(a.text)) && d.index < c - a.from;

					)
						this.addMatch(d, e, d.index + a.from, p);
				else Du(e.state.doc, this.regexp, h, c, (O, m) => this.addMatch(m, e, O, p));
				t = t.update({
					filterFrom: h,
					filterTo: c,
					filter: (O, m) => O < h || m > c,
					add: f
				});
			}
		}
		return t;
	}
}
const rl = /x/.unicode != null ? 'gu' : 'g',
	xg = new RegExp(
		`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`,
		rl
	),
	Dg = {
		0: 'null',
		7: 'bell',
		8: 'backspace',
		10: 'newline',
		11: 'vertical tab',
		13: 'carriage return',
		27: 'escape',
		8203: 'zero width space',
		8204: 'zero width non-joiner',
		8205: 'zero width joiner',
		8206: 'left-to-right mark',
		8207: 'right-to-left mark',
		8232: 'line separator',
		8237: 'left-to-right override',
		8238: 'right-to-left override',
		8294: 'left-to-right isolate',
		8295: 'right-to-left isolate',
		8297: 'pop directional isolate',
		8233: 'paragraph separator',
		65279: 'zero width no-break space',
		65532: 'object replacement'
	};
let Gs = null;
function Sg() {
	var n;
	if (Gs == null && typeof document < 'u' && document.body) {
		let e = document.body.style;
		Gs = ((n = e.tabSize) !== null && n !== void 0 ? n : e.MozTabSize) != null;
	}
	return Gs || !1;
}
const Fr = X.define({
	combine(n) {
		let e = Bt(n, { render: null, specialChars: xg, addSpecialChars: null });
		return (
			(e.replaceTabs = !Sg()) && (e.specialChars = new RegExp('	|' + e.specialChars.source, rl)),
			e.addSpecialChars &&
				(e.specialChars = new RegExp(e.specialChars.source + '|' + e.addSpecialChars.source, rl)),
			e
		);
	}
});
function yf(n = {}) {
	return [Fr.of(n), wg()];
}
let Su = null;
function wg() {
	return (
		Su ||
		(Su = De.fromClass(
			class {
				constructor(n) {
					(this.view = n),
						(this.decorations = I.none),
						(this.decorationCache = Object.create(null)),
						(this.decorator = this.makeDecorator(n.state.facet(Fr))),
						(this.decorations = this.decorator.createDeco(n));
				}
				makeDecorator(n) {
					return new bg({
						regexp: n.specialChars,
						decoration: (e, t, i) => {
							let { doc: r } = t.state,
								s = Re(e[0], 0);
							if (s == 9) {
								let o = r.lineAt(i),
									l = t.state.tabSize,
									a = an(o.text, l, i - o.from);
								return I.replace({
									widget: new Cg(
										((l - (a % l)) * this.view.defaultCharacterWidth) / this.view.scaleX
									)
								});
							}
							return (
								this.decorationCache[s] ||
								(this.decorationCache[s] = I.replace({ widget: new Qg(n, s) }))
							);
						},
						boundary: n.replaceTabs ? void 0 : /[^]/
					});
				}
				update(n) {
					let e = n.state.facet(Fr);
					n.startState.facet(Fr) != e
						? ((this.decorator = this.makeDecorator(e)),
							(this.decorations = this.decorator.createDeco(n.view)))
						: (this.decorations = this.decorator.updateDeco(n, this.decorations));
				}
			},
			{ decorations: (n) => n.decorations }
		))
	);
}
const kg = '•';
function vg(n) {
	return n >= 32 ? kg : n == 10 ? '␤' : String.fromCharCode(9216 + n);
}
class Qg extends Ht {
	constructor(e, t) {
		super(), (this.options = e), (this.code = t);
	}
	eq(e) {
		return e.code == this.code;
	}
	toDOM(e) {
		let t = vg(this.code),
			i =
				e.state.phrase('Control character') +
				' ' +
				(Dg[this.code] || '0x' + this.code.toString(16)),
			r = this.options.render && this.options.render(this.code, i, t);
		if (r) return r;
		let s = document.createElement('span');
		return (
			(s.textContent = t),
			(s.title = i),
			s.setAttribute('aria-label', i),
			(s.className = 'cm-specialChar'),
			s
		);
	}
	ignoreEvent() {
		return !1;
	}
}
class Cg extends Ht {
	constructor(e) {
		super(), (this.width = e);
	}
	eq(e) {
		return e.width == this.width;
	}
	toDOM() {
		let e = document.createElement('span');
		return (e.textContent = '	'), (e.className = 'cm-tab'), (e.style.width = this.width + 'px'), e;
	}
	ignoreEvent() {
		return !1;
	}
}
function bf() {
	return Ag;
}
const Pg = I.line({ class: 'cm-activeLine' }),
	Ag = De.fromClass(
		class {
			constructor(n) {
				this.decorations = this.getDeco(n);
			}
			update(n) {
				(n.docChanged || n.selectionSet) && (this.decorations = this.getDeco(n.view));
			}
			getDeco(n) {
				let e = -1,
					t = [];
				for (let i of n.state.selection.ranges) {
					let r = n.lineBlockAt(i.head);
					r.from > e && (t.push(Pg.range(r.from)), (e = r.from));
				}
				return I.set(t);
			}
		},
		{ decorations: (n) => n.decorations }
	);
class $g extends Ht {
	constructor(e) {
		super(), (this.content = e);
	}
	toDOM() {
		let e = document.createElement('span');
		return (
			(e.className = 'cm-placeholder'),
			(e.style.pointerEvents = 'none'),
			e.appendChild(
				typeof this.content == 'string' ? document.createTextNode(this.content) : this.content
			),
			typeof this.content == 'string'
				? e.setAttribute('aria-label', 'placeholder ' + this.content)
				: e.setAttribute('aria-hidden', 'true'),
			e
		);
	}
	coordsAt(e) {
		let t = e.firstChild ? tn(e.firstChild) : [];
		if (!t.length) return null;
		let i = window.getComputedStyle(e.parentNode),
			r = gs(t[0], i.direction != 'rtl'),
			s = parseInt(i.lineHeight);
		return r.bottom - r.top > s * 1.5
			? { left: r.left, right: r.right, top: r.top, bottom: r.top + s }
			: r;
	}
	ignoreEvent() {
		return !1;
	}
}
function Eg(n) {
	return De.fromClass(
		class {
			constructor(e) {
				(this.view = e),
					(this.placeholder = n
						? I.set([I.widget({ widget: new $g(n), side: 1 }).range(0)])
						: I.none);
			}
			get decorations() {
				return this.view.state.doc.length ? I.none : this.placeholder;
			}
		},
		{ decorations: (e) => e.decorations }
	);
}
const sl = 2e3;
function Zg(n, e, t) {
	let i = Math.min(e.line, t.line),
		r = Math.max(e.line, t.line),
		s = [];
	if (e.off > sl || t.off > sl || e.col < 0 || t.col < 0) {
		let o = Math.min(e.off, t.off),
			l = Math.max(e.off, t.off);
		for (let a = i; a <= r; a++) {
			let u = n.doc.line(a);
			u.length <= l && s.push(Z.range(u.from + o, u.to + l));
		}
	} else {
		let o = Math.min(e.col, t.col),
			l = Math.max(e.col, t.col);
		for (let a = i; a <= r; a++) {
			let u = n.doc.line(a),
				h = Mo(u.text, o, n.tabSize, !0);
			if (h < 0) s.push(Z.cursor(u.to));
			else {
				let c = Mo(u.text, l, n.tabSize);
				s.push(Z.range(u.from + h, u.from + c));
			}
		}
	}
	return s;
}
function Rg(n, e) {
	let t = n.coordsAtPos(n.viewport.from);
	return t ? Math.round(Math.abs((t.left - e) / n.defaultCharacterWidth)) : -1;
}
function wu(n, e) {
	let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
		i = n.state.doc.lineAt(t),
		r = t - i.from,
		s = r > sl ? -1 : r == i.length ? Rg(n, e.clientX) : an(i.text, n.state.tabSize, t - i.from);
	return { line: i.number, col: s, off: r };
}
function Tg(n, e) {
	let t = wu(n, e),
		i = n.state.selection;
	return t
		? {
				update(r) {
					if (r.docChanged) {
						let s = r.changes.mapPos(r.startState.doc.line(t.line).from),
							o = r.state.doc.lineAt(s);
						(t = {
							line: o.number,
							col: t.col,
							off: Math.min(t.off, o.length)
						}),
							(i = i.map(r.changes));
					}
				},
				get(r, s, o) {
					let l = wu(n, r);
					if (!l) return i;
					let a = Zg(n.state, t, l);
					return a.length ? (o ? Z.create(a.concat(i.ranges)) : Z.create(a)) : i;
				}
			}
		: null;
}
function Fg(n) {
	let e = (t) => t.altKey && t.button == 0;
	return j.mouseSelectionStyle.of((t, i) => (e(i) ? Tg(t, i) : null));
}
const Mg = {
		Alt: [18, (n) => !!n.altKey],
		Control: [17, (n) => !!n.ctrlKey],
		Shift: [16, (n) => !!n.shiftKey],
		Meta: [91, (n) => !!n.metaKey]
	},
	Bg = { style: 'cursor: crosshair' };
function jg(n = {}) {
	let [e, t] = Mg[n.key || 'Alt'],
		i = De.fromClass(
			class {
				constructor(r) {
					(this.view = r), (this.isDown = !1);
				}
				set(r) {
					this.isDown != r && ((this.isDown = r), this.view.update([]));
				}
			},
			{
				eventObservers: {
					keydown(r) {
						this.set(r.keyCode == e || t(r));
					},
					keyup(r) {
						(r.keyCode == e || !t(r)) && this.set(!1);
					},
					mousemove(r) {
						this.set(t(r));
					}
				}
			}
		);
	return [
		i,
		j.contentAttributes.of((r) => {
			var s;
			return !((s = r.plugin(i)) === null || s === void 0) && s.isDown ? Bg : null;
		})
	];
}
const On = '-10000px';
class xf {
	constructor(e, t, i, r) {
		(this.facet = t),
			(this.createTooltipView = i),
			(this.removeTooltipView = r),
			(this.input = e.state.facet(t)),
			(this.tooltips = this.input.filter((o) => o));
		let s = null;
		this.tooltipViews = this.tooltips.map((o) => (s = i(o, s)));
	}
	update(e, t) {
		var i;
		let r = e.state.facet(this.facet),
			s = r.filter((a) => a);
		if (r === this.input) {
			for (let a of this.tooltipViews) a.update && a.update(e);
			return !1;
		}
		let o = [],
			l = t ? [] : null;
		for (let a = 0; a < s.length; a++) {
			let u = s[a],
				h = -1;
			if (u) {
				for (let c = 0; c < this.tooltips.length; c++) {
					let f = this.tooltips[c];
					f && f.create == u.create && (h = c);
				}
				if (h < 0) (o[a] = this.createTooltipView(u, a ? o[a - 1] : null)), l && (l[a] = !!u.above);
				else {
					let c = (o[a] = this.tooltipViews[h]);
					l && (l[a] = t[h]), c.update && c.update(e);
				}
			}
		}
		for (let a of this.tooltipViews)
			o.indexOf(a) < 0 &&
				(this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
		return (
			t && (l.forEach((a, u) => (t[u] = a)), (t.length = l.length)),
			(this.input = r),
			(this.tooltips = s),
			(this.tooltipViews = o),
			!0
		);
	}
}
function Wg(n) {
	let { win: e } = n;
	return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const Hs = X.define({
		combine: (n) => {
			var e, t, i;
			return {
				position: z.ios
					? 'absolute'
					: ((e = n.find((r) => r.position)) === null || e === void 0 ? void 0 : e.position) ||
						'fixed',
				parent:
					((t = n.find((r) => r.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
				tooltipSpace:
					((i = n.find((r) => r.tooltipSpace)) === null || i === void 0
						? void 0
						: i.tooltipSpace) || Wg
			};
		}
	}),
	ku = new WeakMap(),
	Xl = De.fromClass(
		class {
			constructor(n) {
				(this.view = n),
					(this.above = []),
					(this.inView = !0),
					(this.madeAbsolute = !1),
					(this.lastTransaction = 0),
					(this.measureTimeout = -1);
				let e = n.state.facet(Hs);
				(this.position = e.position),
					(this.parent = e.parent),
					(this.classes = n.themeClasses),
					this.createContainer(),
					(this.measureReq = {
						read: this.readMeasure.bind(this),
						write: this.writeMeasure.bind(this),
						key: this
					}),
					(this.resizeObserver =
						typeof ResizeObserver == 'function'
							? new ResizeObserver(() => this.measureSoon())
							: null),
					(this.manager = new xf(
						n,
						ql,
						(t, i) => this.createTooltip(t, i),
						(t) => {
							this.resizeObserver && this.resizeObserver.unobserve(t.dom), t.dom.remove();
						}
					)),
					(this.above = this.manager.tooltips.map((t) => !!t.above)),
					(this.intersectionObserver =
						typeof IntersectionObserver == 'function'
							? new IntersectionObserver(
									(t) => {
										Date.now() > this.lastTransaction - 50 &&
											t.length > 0 &&
											t[t.length - 1].intersectionRatio < 1 &&
											this.measureSoon();
									},
									{ threshold: [1] }
								)
							: null),
					this.observeIntersection(),
					n.win.addEventListener('resize', (this.measureSoon = this.measureSoon.bind(this))),
					this.maybeMeasure();
			}
			createContainer() {
				this.parent
					? ((this.container = document.createElement('div')),
						(this.container.style.position = 'relative'),
						(this.container.className = this.view.themeClasses),
						this.parent.appendChild(this.container))
					: (this.container = this.view.dom);
			}
			observeIntersection() {
				if (this.intersectionObserver) {
					this.intersectionObserver.disconnect();
					for (let n of this.manager.tooltipViews) this.intersectionObserver.observe(n.dom);
				}
			}
			measureSoon() {
				this.measureTimeout < 0 &&
					(this.measureTimeout = setTimeout(() => {
						(this.measureTimeout = -1), this.maybeMeasure();
					}, 50));
			}
			update(n) {
				n.transactions.length && (this.lastTransaction = Date.now());
				let e = this.manager.update(n, this.above);
				e && this.observeIntersection();
				let t = e || n.geometryChanged,
					i = n.state.facet(Hs);
				if (i.position != this.position && !this.madeAbsolute) {
					this.position = i.position;
					for (let r of this.manager.tooltipViews) r.dom.style.position = this.position;
					t = !0;
				}
				if (i.parent != this.parent) {
					this.parent && this.container.remove(), (this.parent = i.parent), this.createContainer();
					for (let r of this.manager.tooltipViews) this.container.appendChild(r.dom);
					t = !0;
				} else
					this.parent &&
						this.view.themeClasses != this.classes &&
						(this.classes = this.container.className = this.view.themeClasses);
				t && this.maybeMeasure();
			}
			createTooltip(n, e) {
				let t = n.create(this.view),
					i = e ? e.dom : null;
				if (
					(t.dom.classList.add('cm-tooltip'),
					n.arrow && !t.dom.querySelector('.cm-tooltip > .cm-tooltip-arrow'))
				) {
					let r = document.createElement('div');
					(r.className = 'cm-tooltip-arrow'), t.dom.appendChild(r);
				}
				return (
					(t.dom.style.position = this.position),
					(t.dom.style.top = On),
					(t.dom.style.left = '0px'),
					this.container.insertBefore(t.dom, i),
					t.mount && t.mount(this.view),
					this.resizeObserver && this.resizeObserver.observe(t.dom),
					t
				);
			}
			destroy() {
				var n, e, t;
				this.view.win.removeEventListener('resize', this.measureSoon);
				for (let i of this.manager.tooltipViews)
					i.dom.remove(), (n = i.destroy) === null || n === void 0 || n.call(i);
				this.parent && this.container.remove(),
					(e = this.resizeObserver) === null || e === void 0 || e.disconnect(),
					(t = this.intersectionObserver) === null || t === void 0 || t.disconnect(),
					clearTimeout(this.measureTimeout);
			}
			readMeasure() {
				let n = this.view.dom.getBoundingClientRect(),
					e = 1,
					t = 1,
					i = !1;
				if (this.position == 'fixed' && this.manager.tooltipViews.length) {
					let { dom: r } = this.manager.tooltipViews[0];
					if (z.gecko) i = r.offsetParent != this.container.ownerDocument.body;
					else if (r.style.top == On && r.style.left == '0px') {
						let s = r.getBoundingClientRect();
						i = Math.abs(s.top + 1e4) > 1 || Math.abs(s.left) > 1;
					}
				}
				if (i || this.position == 'absolute')
					if (this.parent) {
						let r = this.parent.getBoundingClientRect();
						r.width &&
							r.height &&
							((e = r.width / this.parent.offsetWidth), (t = r.height / this.parent.offsetHeight));
					} else ({ scaleX: e, scaleY: t } = this.view.viewState);
				return {
					editor: n,
					parent: this.parent ? this.container.getBoundingClientRect() : n,
					pos: this.manager.tooltips.map((r, s) => {
						let o = this.manager.tooltipViews[s];
						return o.getCoords ? o.getCoords(r.pos) : this.view.coordsAtPos(r.pos);
					}),
					size: this.manager.tooltipViews.map(({ dom: r }) => r.getBoundingClientRect()),
					space: this.view.state.facet(Hs).tooltipSpace(this.view),
					scaleX: e,
					scaleY: t,
					makeAbsolute: i
				};
			}
			writeMeasure(n) {
				var e;
				if (n.makeAbsolute) {
					(this.madeAbsolute = !0), (this.position = 'absolute');
					for (let l of this.manager.tooltipViews) l.dom.style.position = 'absolute';
				}
				let { editor: t, space: i, scaleX: r, scaleY: s } = n,
					o = [];
				for (let l = 0; l < this.manager.tooltips.length; l++) {
					let a = this.manager.tooltips[l],
						u = this.manager.tooltipViews[l],
						{ dom: h } = u,
						c = n.pos[l],
						f = n.size[l];
					if (
						!c ||
						c.bottom <= Math.max(t.top, i.top) ||
						c.top >= Math.min(t.bottom, i.bottom) ||
						c.right < Math.max(t.left, i.left) - 0.1 ||
						c.left > Math.min(t.right, i.right) + 0.1
					) {
						h.style.top = On;
						continue;
					}
					let d = a.arrow ? u.dom.querySelector('.cm-tooltip-arrow') : null,
						p = d ? 7 : 0,
						O = f.right - f.left,
						m = (e = ku.get(u)) !== null && e !== void 0 ? e : f.bottom - f.top,
						g = u.offset || Xg,
						S = this.view.textDirection == me.LTR,
						C =
							f.width > i.right - i.left
								? S
									? i.left
									: i.right - f.width
								: S
									? Math.min(c.left - (d ? 14 : 0) + g.x, i.right - O)
									: Math.max(i.left, c.left - O + (d ? 14 : 0) - g.x),
						k = this.above[l];
					!a.strictSide &&
						(k
							? c.top - (f.bottom - f.top) - g.y < i.top
							: c.bottom + (f.bottom - f.top) + g.y > i.bottom) &&
						k == i.bottom - c.bottom > c.top - i.top &&
						(k = this.above[l] = !k);
					let x = (k ? c.top - i.top : i.bottom - c.bottom) - p;
					if (x < m && u.resize !== !1) {
						if (x < this.view.defaultLineHeight) {
							h.style.top = On;
							continue;
						}
						ku.set(u, m), (h.style.height = (m = x) / s + 'px');
					} else h.style.height && (h.style.height = '');
					let P = k ? c.top - m - p - g.y : c.bottom + p + g.y,
						$ = C + O;
					if (u.overlap !== !0)
						for (let T of o)
							T.left < $ &&
								T.right > C &&
								T.top < P + m &&
								T.bottom > P &&
								(P = k ? T.top - m - 2 - p : T.bottom + p + 2);
					if (
						(this.position == 'absolute'
							? ((h.style.top = (P - n.parent.top) / s + 'px'),
								(h.style.left = (C - n.parent.left) / r + 'px'))
							: ((h.style.top = P / s + 'px'), (h.style.left = C / r + 'px')),
						d)
					) {
						let T = c.left + (S ? g.x : -g.x) - (C + 14 - 7);
						d.style.left = T / r + 'px';
					}
					u.overlap !== !0 && o.push({ left: C, top: P, right: $, bottom: P + m }),
						h.classList.toggle('cm-tooltip-above', k),
						h.classList.toggle('cm-tooltip-below', !k),
						u.positioned && u.positioned(n.space);
				}
			}
			maybeMeasure() {
				if (
					this.manager.tooltips.length &&
					(this.view.inView && this.view.requestMeasure(this.measureReq),
					this.inView != this.view.inView && ((this.inView = this.view.inView), !this.inView))
				)
					for (let n of this.manager.tooltipViews) n.dom.style.top = On;
			}
		},
		{
			eventObservers: {
				scroll() {
					this.maybeMeasure();
				}
			}
		}
	),
	zg = j.baseTheme({
		'.cm-tooltip': { zIndex: 100, boxSizing: 'border-box' },
		'&light .cm-tooltip': {
			border: '1px solid #bbb',
			backgroundColor: '#f5f5f5'
		},
		'&light .cm-tooltip-section:not(:first-child)': {
			borderTop: '1px solid #bbb'
		},
		'&dark .cm-tooltip': { backgroundColor: '#333338', color: 'white' },
		'.cm-tooltip-arrow': {
			height: '7px',
			width: `${7 * 2}px`,
			position: 'absolute',
			zIndex: -1,
			overflow: 'hidden',
			'&:before, &:after': {
				content: "''",
				position: 'absolute',
				width: 0,
				height: 0,
				borderLeft: '7px solid transparent',
				borderRight: '7px solid transparent'
			},
			'.cm-tooltip-above &': {
				bottom: '-7px',
				'&:before': { borderTop: '7px solid #bbb' },
				'&:after': { borderTop: '7px solid #f5f5f5', bottom: '1px' }
			},
			'.cm-tooltip-below &': {
				top: '-7px',
				'&:before': { borderBottom: '7px solid #bbb' },
				'&:after': { borderBottom: '7px solid #f5f5f5', top: '1px' }
			}
		},
		'&dark .cm-tooltip .cm-tooltip-arrow': {
			'&:before': { borderTopColor: '#333338', borderBottomColor: '#333338' },
			'&:after': {
				borderTopColor: 'transparent',
				borderBottomColor: 'transparent'
			}
		}
	}),
	Xg = { x: 0, y: 0 },
	ql = X.define({ enables: [Xl, zg] }),
	Ir = X.define({ combine: (n) => n.reduce((e, t) => e.concat(t), []) });
class xs {
	static create(e) {
		return new xs(e);
	}
	constructor(e) {
		(this.view = e),
			(this.mounted = !1),
			(this.dom = document.createElement('div')),
			this.dom.classList.add('cm-tooltip-hover'),
			(this.manager = new xf(
				e,
				Ir,
				(t, i) => this.createHostedView(t, i),
				(t) => t.dom.remove()
			));
	}
	createHostedView(e, t) {
		let i = e.create(this.view);
		return (
			i.dom.classList.add('cm-tooltip-section'),
			this.dom.insertBefore(i.dom, t ? t.dom.nextSibling : this.dom.firstChild),
			this.mounted && i.mount && i.mount(this.view),
			i
		);
	}
	mount(e) {
		for (let t of this.manager.tooltipViews) t.mount && t.mount(e);
		this.mounted = !0;
	}
	positioned(e) {
		for (let t of this.manager.tooltipViews) t.positioned && t.positioned(e);
	}
	update(e) {
		this.manager.update(e);
	}
	destroy() {
		var e;
		for (let t of this.manager.tooltipViews) (e = t.destroy) === null || e === void 0 || e.call(t);
	}
	passProp(e) {
		let t;
		for (let i of this.manager.tooltipViews) {
			let r = i[e];
			if (r !== void 0) {
				if (t === void 0) t = r;
				else if (t !== r) return;
			}
		}
		return t;
	}
	get offset() {
		return this.passProp('offset');
	}
	get getCoords() {
		return this.passProp('getCoords');
	}
	get overlap() {
		return this.passProp('overlap');
	}
	get resize() {
		return this.passProp('resize');
	}
}
const qg = ql.compute([Ir], (n) => {
	let e = n.facet(Ir);
	return e.length === 0
		? null
		: {
				pos: Math.min(...e.map((t) => t.pos)),
				end: Math.max(
					...e.map((t) => {
						var i;
						return (i = t.end) !== null && i !== void 0 ? i : t.pos;
					})
				),
				create: xs.create,
				above: e[0].above,
				arrow: e.some((t) => t.arrow)
			};
});
class _g {
	constructor(e, t, i, r, s) {
		(this.view = e),
			(this.source = t),
			(this.field = i),
			(this.setHover = r),
			(this.hoverTime = s),
			(this.hoverTimeout = -1),
			(this.restartTimeout = -1),
			(this.pending = null),
			(this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }),
			(this.checkHover = this.checkHover.bind(this)),
			e.dom.addEventListener('mouseleave', (this.mouseleave = this.mouseleave.bind(this))),
			e.dom.addEventListener('mousemove', (this.mousemove = this.mousemove.bind(this)));
	}
	update() {
		this.pending &&
			((this.pending = null),
			clearTimeout(this.restartTimeout),
			(this.restartTimeout = setTimeout(() => this.startHover(), 20)));
	}
	get active() {
		return this.view.state.field(this.field);
	}
	checkHover() {
		if (((this.hoverTimeout = -1), this.active.length)) return;
		let e = Date.now() - this.lastMove.time;
		e < this.hoverTime
			? (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e))
			: this.startHover();
	}
	startHover() {
		clearTimeout(this.restartTimeout);
		let { view: e, lastMove: t } = this,
			i = e.docView.nearest(t.target);
		if (!i) return;
		let r,
			s = 1;
		if (i instanceof ii) r = i.posAtStart;
		else {
			if (((r = e.posAtCoords(t)), r == null)) return;
			let l = e.coordsAtPos(r);
			if (
				!l ||
				t.y < l.top ||
				t.y > l.bottom ||
				t.x < l.left - e.defaultCharacterWidth ||
				t.x > l.right + e.defaultCharacterWidth
			)
				return;
			let a = e.bidiSpans(e.state.doc.lineAt(r)).find((h) => h.from <= r && h.to >= r),
				u = a && a.dir == me.RTL ? -1 : 1;
			s = t.x < l.left ? -u : u;
		}
		let o = this.source(e, r, s);
		if (o != null && o.then) {
			let l = (this.pending = { pos: r });
			o.then(
				(a) => {
					this.pending == l &&
						((this.pending = null),
						a &&
							!(Array.isArray(a) && !a.length) &&
							e.dispatch({
								effects: this.setHover.of(Array.isArray(a) ? a : [a])
							}));
				},
				(a) => Ue(e.state, a, 'hover tooltip')
			);
		} else
			o &&
				!(Array.isArray(o) && !o.length) &&
				e.dispatch({ effects: this.setHover.of(Array.isArray(o) ? o : [o]) });
	}
	get tooltip() {
		let e = this.view.plugin(Xl),
			t = e ? e.manager.tooltips.findIndex((i) => i.create == xs.create) : -1;
		return t > -1 ? e.manager.tooltipViews[t] : null;
	}
	mousemove(e) {
		var t, i;
		(this.lastMove = {
			x: e.clientX,
			y: e.clientY,
			target: e.target,
			time: Date.now()
		}),
			this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
		let { active: r, tooltip: s } = this;
		if ((r.length && s && !Yg(s.dom, e)) || this.pending) {
			let { pos: o } = r[0] || this.pending,
				l =
					(i = (t = r[0]) === null || t === void 0 ? void 0 : t.end) !== null && i !== void 0
						? i
						: o;
			(o == l
				? this.view.posAtCoords(this.lastMove) != o
				: !Ng(this.view, o, l, e.clientX, e.clientY)) &&
				(this.view.dispatch({ effects: this.setHover.of([]) }), (this.pending = null));
		}
	}
	mouseleave(e) {
		clearTimeout(this.hoverTimeout), (this.hoverTimeout = -1);
		let { active: t } = this;
		if (t.length) {
			let { tooltip: i } = this;
			i && i.dom.contains(e.relatedTarget)
				? this.watchTooltipLeave(i.dom)
				: this.view.dispatch({ effects: this.setHover.of([]) });
		}
	}
	watchTooltipLeave(e) {
		let t = (i) => {
			e.removeEventListener('mouseleave', t),
				this.active.length &&
					!this.view.dom.contains(i.relatedTarget) &&
					this.view.dispatch({ effects: this.setHover.of([]) });
		};
		e.addEventListener('mouseleave', t);
	}
	destroy() {
		clearTimeout(this.hoverTimeout),
			this.view.dom.removeEventListener('mouseleave', this.mouseleave),
			this.view.dom.removeEventListener('mousemove', this.mousemove);
	}
}
const mr = 4;
function Yg(n, e) {
	let t = n.getBoundingClientRect();
	return (
		e.clientX >= t.left - mr &&
		e.clientX <= t.right + mr &&
		e.clientY >= t.top - mr &&
		e.clientY <= t.bottom + mr
	);
}
function Ng(n, e, t, i, r, s) {
	let o = n.scrollDOM.getBoundingClientRect(),
		l = n.documentTop + n.documentPadding.top + n.contentHeight;
	if (o.left > i || o.right < i || o.top > r || Math.min(o.bottom, l) < r) return !1;
	let a = n.posAtCoords({ x: i, y: r }, !1);
	return a >= e && a <= t;
}
function Vg(n, e = {}) {
	let t = te.define(),
		i = Be.define({
			create() {
				return [];
			},
			update(r, s) {
				if (
					r.length &&
					(e.hideOnChange && (s.docChanged || s.selection)
						? (r = [])
						: e.hideOn && (r = r.filter((o) => !e.hideOn(s, o))),
					s.docChanged)
				) {
					let o = [];
					for (let l of r) {
						let a = s.changes.mapPos(l.pos, -1, Ye.TrackDel);
						if (a != null) {
							let u = Object.assign(Object.create(null), l);
							(u.pos = a), u.end != null && (u.end = s.changes.mapPos(u.end)), o.push(u);
						}
					}
					r = o;
				}
				for (let o of s.effects) o.is(t) && (r = o.value), o.is(Ig) && (r = []);
				return r;
			},
			provide: (r) => Ir.from(r)
		});
	return [i, De.define((r) => new _g(r, n, i, t, e.hoverTime || 300)), qg];
}
function Df(n, e) {
	let t = n.plugin(Xl);
	if (!t) return null;
	let i = t.manager.tooltips.indexOf(e);
	return i < 0 ? null : t.manager.tooltipViews[i];
}
const Ig = te.define(),
	vu = X.define({
		combine(n) {
			let e, t;
			for (let i of n) (e = e || i.topContainer), (t = t || i.bottomContainer);
			return { topContainer: e, bottomContainer: t };
		}
	});
function Xn(n, e) {
	let t = n.plugin(Sf),
		i = t ? t.specs.indexOf(e) : -1;
	return i > -1 ? t.panels[i] : null;
}
const Sf = De.fromClass(
	class {
		constructor(n) {
			(this.input = n.state.facet(qn)),
				(this.specs = this.input.filter((t) => t)),
				(this.panels = this.specs.map((t) => t(n)));
			let e = n.state.facet(vu);
			(this.top = new gr(n, !0, e.topContainer)),
				(this.bottom = new gr(n, !1, e.bottomContainer)),
				this.top.sync(this.panels.filter((t) => t.top)),
				this.bottom.sync(this.panels.filter((t) => !t.top));
			for (let t of this.panels) t.dom.classList.add('cm-panel'), t.mount && t.mount();
		}
		update(n) {
			let e = n.state.facet(vu);
			this.top.container != e.topContainer &&
				(this.top.sync([]), (this.top = new gr(n.view, !0, e.topContainer))),
				this.bottom.container != e.bottomContainer &&
					(this.bottom.sync([]), (this.bottom = new gr(n.view, !1, e.bottomContainer))),
				this.top.syncClasses(),
				this.bottom.syncClasses();
			let t = n.state.facet(qn);
			if (t != this.input) {
				let i = t.filter((a) => a),
					r = [],
					s = [],
					o = [],
					l = [];
				for (let a of i) {
					let u = this.specs.indexOf(a),
						h;
					u < 0 ? ((h = a(n.view)), l.push(h)) : ((h = this.panels[u]), h.update && h.update(n)),
						r.push(h),
						(h.top ? s : o).push(h);
				}
				(this.specs = i), (this.panels = r), this.top.sync(s), this.bottom.sync(o);
				for (let a of l) a.dom.classList.add('cm-panel'), a.mount && a.mount();
			} else for (let i of this.panels) i.update && i.update(n);
		}
		destroy() {
			this.top.sync([]), this.bottom.sync([]);
		}
	},
	{
		provide: (n) =>
			j.scrollMargins.of((e) => {
				let t = e.plugin(n);
				return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
			})
	}
);
class gr {
	constructor(e, t, i) {
		(this.view = e),
			(this.top = t),
			(this.container = i),
			(this.dom = void 0),
			(this.classes = ''),
			(this.panels = []),
			this.syncClasses();
	}
	sync(e) {
		for (let t of this.panels) t.destroy && e.indexOf(t) < 0 && t.destroy();
		(this.panels = e), this.syncDOM();
	}
	syncDOM() {
		if (this.panels.length == 0) {
			this.dom && (this.dom.remove(), (this.dom = void 0));
			return;
		}
		if (!this.dom) {
			(this.dom = document.createElement('div')),
				(this.dom.className = this.top ? 'cm-panels cm-panels-top' : 'cm-panels cm-panels-bottom'),
				(this.dom.style[this.top ? 'top' : 'bottom'] = '0');
			let t = this.container || this.view.dom;
			t.insertBefore(this.dom, this.top ? t.firstChild : null);
		}
		let e = this.dom.firstChild;
		for (let t of this.panels)
			if (t.dom.parentNode == this.dom) {
				for (; e != t.dom; ) e = Qu(e);
				e = e.nextSibling;
			} else this.dom.insertBefore(t.dom, e);
		for (; e; ) e = Qu(e);
	}
	scrollMargin() {
		return !this.dom || this.container
			? 0
			: Math.max(
					0,
					this.top
						? this.dom.getBoundingClientRect().bottom -
								Math.max(0, this.view.scrollDOM.getBoundingClientRect().top)
						: Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) -
								this.dom.getBoundingClientRect().top
				);
	}
	syncClasses() {
		if (!(!this.container || this.classes == this.view.themeClasses)) {
			for (let e of this.classes.split(' ')) e && this.container.classList.remove(e);
			for (let e of (this.classes = this.view.themeClasses).split(' '))
				e && this.container.classList.add(e);
		}
	}
}
function Qu(n) {
	let e = n.nextSibling;
	return n.remove(), e;
}
const qn = X.define({ enables: Sf });
class Ut extends $i {
	compare(e) {
		return this == e || (this.constructor == e.constructor && this.eq(e));
	}
	eq(e) {
		return !1;
	}
	destroy(e) {}
}
Ut.prototype.elementClass = '';
Ut.prototype.toDOM = void 0;
Ut.prototype.mapMode = Ye.TrackBefore;
Ut.prototype.startSide = Ut.prototype.endSide = -1;
Ut.prototype.point = !0;
const Mr = X.define(),
	Lg = {
		class: '',
		renderEmptyElements: !1,
		elementStyle: '',
		markers: () => le.empty,
		lineMarker: () => null,
		widgetMarker: () => null,
		lineMarkerChange: null,
		initialSpacer: null,
		updateSpacer: null,
		domEventHandlers: {}
	},
	En = X.define();
function Ug(n) {
	return [wf(), En.of(Object.assign(Object.assign({}, Lg), n))];
}
const Cu = X.define({ combine: (n) => n.some((e) => e) });
function wf(n) {
	return [Gg];
}
const Gg = De.fromClass(
	class {
		constructor(n) {
			(this.view = n),
				(this.prevViewport = n.viewport),
				(this.dom = document.createElement('div')),
				(this.dom.className = 'cm-gutters'),
				this.dom.setAttribute('aria-hidden', 'true'),
				(this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + 'px'),
				(this.gutters = n.state.facet(En).map((e) => new Au(n, e)));
			for (let e of this.gutters) this.dom.appendChild(e.dom);
			(this.fixed = !n.state.facet(Cu)),
				this.fixed && (this.dom.style.position = 'sticky'),
				this.syncGutters(!1),
				n.scrollDOM.insertBefore(this.dom, n.contentDOM);
		}
		update(n) {
			if (this.updateGutters(n)) {
				let e = this.prevViewport,
					t = n.view.viewport,
					i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
				this.syncGutters(i < (t.to - t.from) * 0.8);
			}
			n.geometryChanged &&
				(this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + 'px'),
				this.view.state.facet(Cu) != !this.fixed &&
					((this.fixed = !this.fixed), (this.dom.style.position = this.fixed ? 'sticky' : '')),
				(this.prevViewport = n.view.viewport);
		}
		syncGutters(n) {
			let e = this.dom.nextSibling;
			n && this.dom.remove();
			let t = le.iter(this.view.state.facet(Mr), this.view.viewport.from),
				i = [],
				r = this.gutters.map((s) => new Hg(s, this.view.viewport, -this.view.documentPadding.top));
			for (let s of this.view.viewportLineBlocks)
				if ((i.length && (i = []), Array.isArray(s.type))) {
					let o = !0;
					for (let l of s.type)
						if (l.type == He.Text && o) {
							ol(t, i, l.from);
							for (let a of r) a.line(this.view, l, i);
							o = !1;
						} else if (l.widget) for (let a of r) a.widget(this.view, l);
				} else if (s.type == He.Text) {
					ol(t, i, s.from);
					for (let o of r) o.line(this.view, s, i);
				} else if (s.widget) for (let o of r) o.widget(this.view, s);
			for (let s of r) s.finish();
			n && this.view.scrollDOM.insertBefore(this.dom, e);
		}
		updateGutters(n) {
			let e = n.startState.facet(En),
				t = n.state.facet(En),
				i =
					n.docChanged ||
					n.heightChanged ||
					n.viewportChanged ||
					!le.eq(
						n.startState.facet(Mr),
						n.state.facet(Mr),
						n.view.viewport.from,
						n.view.viewport.to
					);
			if (e == t) for (let r of this.gutters) r.update(n) && (i = !0);
			else {
				i = !0;
				let r = [];
				for (let s of t) {
					let o = e.indexOf(s);
					o < 0
						? r.push(new Au(this.view, s))
						: (this.gutters[o].update(n), r.push(this.gutters[o]));
				}
				for (let s of this.gutters) s.dom.remove(), r.indexOf(s) < 0 && s.destroy();
				for (let s of r) this.dom.appendChild(s.dom);
				this.gutters = r;
			}
			return i;
		}
		destroy() {
			for (let n of this.gutters) n.destroy();
			this.dom.remove();
		}
	},
	{
		provide: (n) =>
			j.scrollMargins.of((e) => {
				let t = e.plugin(n);
				return !t || t.gutters.length == 0 || !t.fixed
					? null
					: e.textDirection == me.LTR
						? { left: t.dom.offsetWidth * e.scaleX }
						: { right: t.dom.offsetWidth * e.scaleX };
			})
	}
);
function Pu(n) {
	return Array.isArray(n) ? n : [n];
}
function ol(n, e, t) {
	for (; n.value && n.from <= t; ) n.from == t && e.push(n.value), n.next();
}
class Hg {
	constructor(e, t, i) {
		(this.gutter = e), (this.height = i), (this.i = 0), (this.cursor = le.iter(e.markers, t.from));
	}
	addElement(e, t, i) {
		let { gutter: r } = this,
			s = (t.top - this.height) / e.scaleY,
			o = t.height / e.scaleY;
		if (this.i == r.elements.length) {
			let l = new kf(e, o, s, i);
			r.elements.push(l), r.dom.appendChild(l.dom);
		} else r.elements[this.i].update(e, o, s, i);
		(this.height = t.bottom), this.i++;
	}
	line(e, t, i) {
		let r = [];
		ol(this.cursor, r, t.from), i.length && (r = r.concat(i));
		let s = this.gutter.config.lineMarker(e, t, r);
		s && r.unshift(s);
		let o = this.gutter;
		(r.length == 0 && !o.config.renderEmptyElements) || this.addElement(e, t, r);
	}
	widget(e, t) {
		let i = this.gutter.config.widgetMarker(e, t.widget, t);
		i && this.addElement(e, t, [i]);
	}
	finish() {
		let e = this.gutter;
		for (; e.elements.length > this.i; ) {
			let t = e.elements.pop();
			e.dom.removeChild(t.dom), t.destroy();
		}
	}
}
class Au {
	constructor(e, t) {
		(this.view = e),
			(this.config = t),
			(this.elements = []),
			(this.spacer = null),
			(this.dom = document.createElement('div')),
			(this.dom.className = 'cm-gutter' + (this.config.class ? ' ' + this.config.class : ''));
		for (let i in t.domEventHandlers)
			this.dom.addEventListener(i, (r) => {
				let s = r.target,
					o;
				if (s != this.dom && this.dom.contains(s)) {
					for (; s.parentNode != this.dom; ) s = s.parentNode;
					let a = s.getBoundingClientRect();
					o = (a.top + a.bottom) / 2;
				} else o = r.clientY;
				let l = e.lineBlockAtHeight(o - e.documentTop);
				t.domEventHandlers[i](e, l, r) && r.preventDefault();
			});
		(this.markers = Pu(t.markers(e))),
			t.initialSpacer &&
				((this.spacer = new kf(e, 0, 0, [t.initialSpacer(e)])),
				this.dom.appendChild(this.spacer.dom),
				(this.spacer.dom.style.cssText += 'visibility: hidden; pointer-events: none'));
	}
	update(e) {
		let t = this.markers;
		if (
			((this.markers = Pu(this.config.markers(e.view))), this.spacer && this.config.updateSpacer)
		) {
			let r = this.config.updateSpacer(this.spacer.markers[0], e);
			r != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [r]);
		}
		let i = e.view.viewport;
		return (
			!le.eq(this.markers, t, i.from, i.to) ||
			(this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1)
		);
	}
	destroy() {
		for (let e of this.elements) e.destroy();
	}
}
class kf {
	constructor(e, t, i, r) {
		(this.height = -1),
			(this.above = 0),
			(this.markers = []),
			(this.dom = document.createElement('div')),
			(this.dom.className = 'cm-gutterElement'),
			this.update(e, t, i, r);
	}
	update(e, t, i, r) {
		this.height != t && ((this.height = t), (this.dom.style.height = t + 'px')),
			this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + 'px' : ''),
			Jg(this.markers, r) || this.setMarkers(e, r);
	}
	setMarkers(e, t) {
		let i = 'cm-gutterElement',
			r = this.dom.firstChild;
		for (let s = 0, o = 0; ; ) {
			let l = o,
				a = s < t.length ? t[s++] : null,
				u = !1;
			if (a) {
				let h = a.elementClass;
				h && (i += ' ' + h);
				for (let c = o; c < this.markers.length; c++)
					if (this.markers[c].compare(a)) {
						(l = c), (u = !0);
						break;
					}
			} else l = this.markers.length;
			for (; o < l; ) {
				let h = this.markers[o++];
				if (h.toDOM) {
					h.destroy(r);
					let c = r.nextSibling;
					r.remove(), (r = c);
				}
			}
			if (!a) break;
			a.toDOM && (u ? (r = r.nextSibling) : this.dom.insertBefore(a.toDOM(e), r)), u && o++;
		}
		(this.dom.className = i), (this.markers = t);
	}
	destroy() {
		this.setMarkers(null, []);
	}
}
function Jg(n, e) {
	if (n.length != e.length) return !1;
	for (let t = 0; t < n.length; t++) if (!n[t].compare(e[t])) return !1;
	return !0;
}
const Kg = X.define(),
	Yi = X.define({
		combine(n) {
			return Bt(
				n,
				{ formatNumber: String, domEventHandlers: {} },
				{
					domEventHandlers(e, t) {
						let i = Object.assign({}, e);
						for (let r in t) {
							let s = i[r],
								o = t[r];
							i[r] = s ? (l, a, u) => s(l, a, u) || o(l, a, u) : o;
						}
						return i;
					}
				}
			);
		}
	});
class Js extends Ut {
	constructor(e) {
		super(), (this.number = e);
	}
	eq(e) {
		return this.number == e.number;
	}
	toDOM() {
		return document.createTextNode(this.number);
	}
}
function Ks(n, e) {
	return n.state.facet(Yi).formatNumber(e, n.state);
}
const e0 = En.compute([Yi], (n) => ({
	class: 'cm-lineNumbers',
	renderEmptyElements: !1,
	markers(e) {
		return e.state.facet(Kg);
	},
	lineMarker(e, t, i) {
		return i.some((r) => r.toDOM) ? null : new Js(Ks(e, e.state.doc.lineAt(t.from).number));
	},
	widgetMarker: () => null,
	lineMarkerChange: (e) => e.startState.facet(Yi) != e.state.facet(Yi),
	initialSpacer(e) {
		return new Js(Ks(e, $u(e.state.doc.lines)));
	},
	updateSpacer(e, t) {
		let i = Ks(t.view, $u(t.view.state.doc.lines));
		return i == e.number ? e : new Js(i);
	},
	domEventHandlers: n.facet(Yi).domEventHandlers
}));
function vf(n = {}) {
	return [Yi.of(n), wf(), e0];
}
function $u(n) {
	let e = 9;
	for (; e < n; ) e = e * 10 + 9;
	return e;
}
const t0 = new (class extends Ut {
		constructor() {
			super(...arguments), (this.elementClass = 'cm-activeLineGutter');
		}
	})(),
	i0 = Mr.compute(['selection'], (n) => {
		let e = [],
			t = -1;
		for (let i of n.selection.ranges) {
			let r = n.doc.lineAt(i.head).from;
			r > t && ((t = r), e.push(t0.range(r)));
		}
		return le.of(e);
	});
function Qf() {
	return i0;
}
const Cf = 1024;
let n0 = 0;
class eo {
	constructor(e, t) {
		(this.from = e), (this.to = t);
	}
}
class ne {
	constructor(e = {}) {
		(this.id = n0++),
			(this.perNode = !!e.perNode),
			(this.deserialize =
				e.deserialize ||
				(() => {
					throw new Error("This node type doesn't define a deserialize function");
				}));
	}
	add(e) {
		if (this.perNode) throw new RangeError("Can't add per-node props to node types");
		return (
			typeof e != 'function' && (e = Je.match(e)),
			(t) => {
				let i = e(t);
				return i === void 0 ? null : [this, i];
			}
		);
	}
}
ne.closedBy = new ne({ deserialize: (n) => n.split(' ') });
ne.openedBy = new ne({ deserialize: (n) => n.split(' ') });
ne.group = new ne({ deserialize: (n) => n.split(' ') });
ne.isolate = new ne({
	deserialize: (n) => {
		if (n && n != 'rtl' && n != 'ltr' && n != 'auto')
			throw new RangeError('Invalid value for isolate: ' + n);
		return n || 'auto';
	}
});
ne.contextHash = new ne({ perNode: !0 });
ne.lookAhead = new ne({ perNode: !0 });
ne.mounted = new ne({ perNode: !0 });
class Lr {
	constructor(e, t, i) {
		(this.tree = e), (this.overlay = t), (this.parser = i);
	}
	static get(e) {
		return e && e.props && e.props[ne.mounted.id];
	}
}
const r0 = Object.create(null);
class Je {
	constructor(e, t, i, r = 0) {
		(this.name = e), (this.props = t), (this.id = i), (this.flags = r);
	}
	static define(e) {
		let t = e.props && e.props.length ? Object.create(null) : r0,
			i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0),
			r = new Je(e.name || '', t, e.id, i);
		if (e.props) {
			for (let s of e.props)
				if ((Array.isArray(s) || (s = s(r)), s)) {
					if (s[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
					t[s[0].id] = s[1];
				}
		}
		return r;
	}
	prop(e) {
		return this.props[e.id];
	}
	get isTop() {
		return (this.flags & 1) > 0;
	}
	get isSkipped() {
		return (this.flags & 2) > 0;
	}
	get isError() {
		return (this.flags & 4) > 0;
	}
	get isAnonymous() {
		return (this.flags & 8) > 0;
	}
	is(e) {
		if (typeof e == 'string') {
			if (this.name == e) return !0;
			let t = this.prop(ne.group);
			return t ? t.indexOf(e) > -1 : !1;
		}
		return this.id == e;
	}
	static match(e) {
		let t = Object.create(null);
		for (let i in e) for (let r of i.split(' ')) t[r] = e[i];
		return (i) => {
			for (let r = i.prop(ne.group), s = -1; s < (r ? r.length : 0); s++) {
				let o = t[s < 0 ? i.name : r[s]];
				if (o) return o;
			}
		};
	}
}
Je.none = new Je('', Object.create(null), 0, 8);
class _l {
	constructor(e) {
		this.types = e;
		for (let t = 0; t < e.length; t++)
			if (e[t].id != t)
				throw new RangeError(
					'Node type ids should correspond to array positions when creating a node set'
				);
	}
	extend(...e) {
		let t = [];
		for (let i of this.types) {
			let r = null;
			for (let s of e) {
				let o = s(i);
				o && (r || (r = Object.assign({}, i.props)), (r[o[0].id] = o[1]));
			}
			t.push(r ? new Je(i.name, r, i.id, i.flags) : i);
		}
		return new _l(t);
	}
}
const yr = new WeakMap(),
	Eu = new WeakMap();
var $e;
(function (n) {
	(n[(n.ExcludeBuffers = 1)] = 'ExcludeBuffers'),
		(n[(n.IncludeAnonymous = 2)] = 'IncludeAnonymous'),
		(n[(n.IgnoreMounts = 4)] = 'IgnoreMounts'),
		(n[(n.IgnoreOverlays = 8)] = 'IgnoreOverlays');
})($e || ($e = {}));
class Se {
	constructor(e, t, i, r, s) {
		if (
			((this.type = e),
			(this.children = t),
			(this.positions = i),
			(this.length = r),
			(this.props = null),
			s && s.length)
		) {
			this.props = Object.create(null);
			for (let [o, l] of s) this.props[typeof o == 'number' ? o : o.id] = l;
		}
	}
	toString() {
		let e = Lr.get(this);
		if (e && !e.overlay) return e.tree.toString();
		let t = '';
		for (let i of this.children) {
			let r = i.toString();
			r && (t && (t += ','), (t += r));
		}
		return this.type.name
			? (/\W/.test(this.type.name) && !this.type.isError
					? JSON.stringify(this.type.name)
					: this.type.name) + (t.length ? '(' + t + ')' : '')
			: t;
	}
	cursor(e = 0) {
		return new al(this.topNode, e);
	}
	cursorAt(e, t = 0, i = 0) {
		let r = yr.get(this) || this.topNode,
			s = new al(r);
		return s.moveTo(e, t), yr.set(this, s._tree), s;
	}
	get topNode() {
		return new ut(this, 0, 0, null);
	}
	resolve(e, t = 0) {
		let i = _n(yr.get(this) || this.topNode, e, t, !1);
		return yr.set(this, i), i;
	}
	resolveInner(e, t = 0) {
		let i = _n(Eu.get(this) || this.topNode, e, t, !0);
		return Eu.set(this, i), i;
	}
	resolveStack(e, t = 0) {
		return l0(this, e, t);
	}
	iterate(e) {
		let { enter: t, leave: i, from: r = 0, to: s = this.length } = e,
			o = e.mode || 0,
			l = (o & $e.IncludeAnonymous) > 0;
		for (let a = this.cursor(o | $e.IncludeAnonymous); ; ) {
			let u = !1;
			if (a.from <= s && a.to >= r && ((!l && a.type.isAnonymous) || t(a) !== !1)) {
				if (a.firstChild()) continue;
				u = !0;
			}
			for (; u && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
				if (!a.parent()) return;
				u = !0;
			}
		}
	}
	prop(e) {
		return e.perNode ? (this.props ? this.props[e.id] : void 0) : this.type.prop(e);
	}
	get propValues() {
		let e = [];
		if (this.props) for (let t in this.props) e.push([+t, this.props[t]]);
		return e;
	}
	balance(e = {}) {
		return this.children.length <= 8
			? this
			: Vl(
					Je.none,
					this.children,
					this.positions,
					0,
					this.children.length,
					0,
					this.length,
					(t, i, r) => new Se(this.type, t, i, r, this.propValues),
					e.makeTree || ((t, i, r) => new Se(Je.none, t, i, r))
				);
	}
	static build(e) {
		return a0(e);
	}
}
Se.empty = new Se(Je.none, [], [], 0);
class Yl {
	constructor(e, t) {
		(this.buffer = e), (this.index = t);
	}
	get id() {
		return this.buffer[this.index - 4];
	}
	get start() {
		return this.buffer[this.index - 3];
	}
	get end() {
		return this.buffer[this.index - 2];
	}
	get size() {
		return this.buffer[this.index - 1];
	}
	get pos() {
		return this.index;
	}
	next() {
		this.index -= 4;
	}
	fork() {
		return new Yl(this.buffer, this.index);
	}
}
class ci {
	constructor(e, t, i) {
		(this.buffer = e), (this.length = t), (this.set = i);
	}
	get type() {
		return Je.none;
	}
	toString() {
		let e = [];
		for (let t = 0; t < this.buffer.length; ) e.push(this.childString(t)), (t = this.buffer[t + 3]);
		return e.join(',');
	}
	childString(e) {
		let t = this.buffer[e],
			i = this.buffer[e + 3],
			r = this.set.types[t],
			s = r.name;
		if ((/\W/.test(s) && !r.isError && (s = JSON.stringify(s)), (e += 4), i == e)) return s;
		let o = [];
		for (; e < i; ) o.push(this.childString(e)), (e = this.buffer[e + 3]);
		return s + '(' + o.join(',') + ')';
	}
	findChild(e, t, i, r, s) {
		let { buffer: o } = this,
			l = -1;
		for (let a = e; a != t && !(Pf(s, r, o[a + 1], o[a + 2]) && ((l = a), i > 0)); a = o[a + 3]);
		return l;
	}
	slice(e, t, i) {
		let r = this.buffer,
			s = new Uint16Array(t - e),
			o = 0;
		for (let l = e, a = 0; l < t; ) {
			(s[a++] = r[l++]), (s[a++] = r[l++] - i);
			let u = (s[a++] = r[l++] - i);
			(s[a++] = r[l++] - e), (o = Math.max(o, u));
		}
		return new ci(s, o, this.set);
	}
}
function Pf(n, e, t, i) {
	switch (n) {
		case -2:
			return t < e;
		case -1:
			return i >= e && t < e;
		case 0:
			return t < e && i > e;
		case 1:
			return t <= e && i > e;
		case 2:
			return i > e;
		case 4:
			return !0;
	}
}
function _n(n, e, t, i) {
	for (
		var r;
		n.from == n.to || (t < 1 ? n.from >= e : n.from > e) || (t > -1 ? n.to <= e : n.to < e);

	) {
		let o = !i && n instanceof ut && n.index < 0 ? null : n.parent;
		if (!o) return n;
		n = o;
	}
	let s = i ? 0 : $e.IgnoreOverlays;
	if (i)
		for (let o = n, l = o.parent; l; o = l, l = o.parent)
			o instanceof ut &&
				o.index < 0 &&
				((r = l.enter(e, t, s)) === null || r === void 0 ? void 0 : r.from) != o.from &&
				(n = l);
	for (;;) {
		let o = n.enter(e, t, s);
		if (!o) return n;
		n = o;
	}
}
class Af {
	cursor(e = 0) {
		return new al(this, e);
	}
	getChild(e, t = null, i = null) {
		let r = Zu(this, e, t, i);
		return r.length ? r[0] : null;
	}
	getChildren(e, t = null, i = null) {
		return Zu(this, e, t, i);
	}
	resolve(e, t = 0) {
		return _n(this, e, t, !1);
	}
	resolveInner(e, t = 0) {
		return _n(this, e, t, !0);
	}
	matchContext(e) {
		return ll(this, e);
	}
	enterUnfinishedNodesBefore(e) {
		let t = this.childBefore(e),
			i = this;
		for (; t; ) {
			let r = t.lastChild;
			if (!r || r.to != t.to) break;
			r.type.isError && r.from == r.to ? ((i = t), (t = r.prevSibling)) : (t = r);
		}
		return i;
	}
	get node() {
		return this;
	}
	get next() {
		return this.parent;
	}
}
class ut extends Af {
	constructor(e, t, i, r) {
		super(), (this._tree = e), (this.from = t), (this.index = i), (this._parent = r);
	}
	get type() {
		return this._tree.type;
	}
	get name() {
		return this._tree.type.name;
	}
	get to() {
		return this.from + this._tree.length;
	}
	nextChild(e, t, i, r, s = 0) {
		for (let o = this; ; ) {
			for (let { children: l, positions: a } = o._tree, u = t > 0 ? l.length : -1; e != u; e += t) {
				let h = l[e],
					c = a[e] + o.from;
				if (Pf(r, i, c, c + h.length)) {
					if (h instanceof ci) {
						if (s & $e.ExcludeBuffers) continue;
						let f = h.findChild(0, h.buffer.length, t, i - c, r);
						if (f > -1) return new ri(new s0(o, h, e, c), null, f);
					} else if (s & $e.IncludeAnonymous || !h.type.isAnonymous || Nl(h)) {
						let f;
						if (!(s & $e.IgnoreMounts) && (f = Lr.get(h)) && !f.overlay)
							return new ut(f.tree, c, e, o);
						let d = new ut(h, c, e, o);
						return s & $e.IncludeAnonymous || !d.type.isAnonymous
							? d
							: d.nextChild(t < 0 ? h.children.length - 1 : 0, t, i, r);
					}
				}
			}
			if (
				s & $e.IncludeAnonymous ||
				!o.type.isAnonymous ||
				(o.index >= 0 ? (e = o.index + t) : (e = t < 0 ? -1 : o._parent._tree.children.length),
				(o = o._parent),
				!o)
			)
				return null;
		}
	}
	get firstChild() {
		return this.nextChild(0, 1, 0, 4);
	}
	get lastChild() {
		return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
	}
	childAfter(e) {
		return this.nextChild(0, 1, e, 2);
	}
	childBefore(e) {
		return this.nextChild(this._tree.children.length - 1, -1, e, -2);
	}
	enter(e, t, i = 0) {
		let r;
		if (!(i & $e.IgnoreOverlays) && (r = Lr.get(this._tree)) && r.overlay) {
			let s = e - this.from;
			for (let { from: o, to: l } of r.overlay)
				if ((t > 0 ? o <= s : o < s) && (t < 0 ? l >= s : l > s))
					return new ut(r.tree, r.overlay[0].from + this.from, -1, this);
		}
		return this.nextChild(0, 1, e, t, i);
	}
	nextSignificantParent() {
		let e = this;
		for (; e.type.isAnonymous && e._parent; ) e = e._parent;
		return e;
	}
	get parent() {
		return this._parent ? this._parent.nextSignificantParent() : null;
	}
	get nextSibling() {
		return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
	}
	get prevSibling() {
		return this._parent && this.index >= 0
			? this._parent.nextChild(this.index - 1, -1, 0, 4)
			: null;
	}
	get tree() {
		return this._tree;
	}
	toTree() {
		return this._tree;
	}
	toString() {
		return this._tree.toString();
	}
}
function Zu(n, e, t, i) {
	let r = n.cursor(),
		s = [];
	if (!r.firstChild()) return s;
	if (t != null) {
		for (let o = !1; !o; ) if (((o = r.type.is(t)), !r.nextSibling())) return s;
	}
	for (;;) {
		if (i != null && r.type.is(i)) return s;
		if ((r.type.is(e) && s.push(r.node), !r.nextSibling())) return i == null ? s : [];
	}
}
function ll(n, e, t = e.length - 1) {
	for (let i = n.parent; t >= 0; i = i.parent) {
		if (!i) return !1;
		if (!i.type.isAnonymous) {
			if (e[t] && e[t] != i.name) return !1;
			t--;
		}
	}
	return !0;
}
class s0 {
	constructor(e, t, i, r) {
		(this.parent = e), (this.buffer = t), (this.index = i), (this.start = r);
	}
}
class ri extends Af {
	get name() {
		return this.type.name;
	}
	get from() {
		return this.context.start + this.context.buffer.buffer[this.index + 1];
	}
	get to() {
		return this.context.start + this.context.buffer.buffer[this.index + 2];
	}
	constructor(e, t, i) {
		super(),
			(this.context = e),
			(this._parent = t),
			(this.index = i),
			(this.type = e.buffer.set.types[e.buffer.buffer[i]]);
	}
	child(e, t, i) {
		let { buffer: r } = this.context,
			s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.context.start, i);
		return s < 0 ? null : new ri(this.context, this, s);
	}
	get firstChild() {
		return this.child(1, 0, 4);
	}
	get lastChild() {
		return this.child(-1, 0, 4);
	}
	childAfter(e) {
		return this.child(1, e, 2);
	}
	childBefore(e) {
		return this.child(-1, e, -2);
	}
	enter(e, t, i = 0) {
		if (i & $e.ExcludeBuffers) return null;
		let { buffer: r } = this.context,
			s = r.findChild(
				this.index + 4,
				r.buffer[this.index + 3],
				t > 0 ? 1 : -1,
				e - this.context.start,
				t
			);
		return s < 0 ? null : new ri(this.context, this, s);
	}
	get parent() {
		return this._parent || this.context.parent.nextSignificantParent();
	}
	externalSibling(e) {
		return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
	}
	get nextSibling() {
		let { buffer: e } = this.context,
			t = e.buffer[this.index + 3];
		return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length)
			? new ri(this.context, this._parent, t)
			: this.externalSibling(1);
	}
	get prevSibling() {
		let { buffer: e } = this.context,
			t = this._parent ? this._parent.index + 4 : 0;
		return this.index == t
			? this.externalSibling(-1)
			: new ri(this.context, this._parent, e.findChild(t, this.index, -1, 0, 4));
	}
	get tree() {
		return null;
	}
	toTree() {
		let e = [],
			t = [],
			{ buffer: i } = this.context,
			r = this.index + 4,
			s = i.buffer[this.index + 3];
		if (s > r) {
			let o = i.buffer[this.index + 1];
			e.push(i.slice(r, s, o)), t.push(0);
		}
		return new Se(this.type, e, t, this.to - this.from);
	}
	toString() {
		return this.context.buffer.childString(this.index);
	}
}
function $f(n) {
	if (!n.length) return null;
	let e = 0,
		t = n[0];
	for (let s = 1; s < n.length; s++) {
		let o = n[s];
		(o.from > t.from || o.to < t.to) && ((t = o), (e = s));
	}
	let i = t instanceof ut && t.index < 0 ? null : t.parent,
		r = n.slice();
	return i ? (r[e] = i) : r.splice(e, 1), new o0(r, t);
}
class o0 {
	constructor(e, t) {
		(this.heads = e), (this.node = t);
	}
	get next() {
		return $f(this.heads);
	}
}
function l0(n, e, t) {
	let i = n.resolveInner(e, t),
		r = null;
	for (let s = i instanceof ut ? i : i.context.parent; s; s = s.parent)
		if (s.index < 0) {
			let o = s.parent;
			(r || (r = [i])).push(o.resolve(e, t)), (s = o);
		} else {
			let o = Lr.get(s.tree);
			if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
				let l = new ut(o.tree, o.overlay[0].from + s.from, -1, s);
				(r || (r = [i])).push(_n(l, e, t, !1));
			}
		}
	return r ? $f(r) : i;
}
class al {
	get name() {
		return this.type.name;
	}
	constructor(e, t = 0) {
		if (
			((this.mode = t),
			(this.buffer = null),
			(this.stack = []),
			(this.index = 0),
			(this.bufferNode = null),
			e instanceof ut)
		)
			this.yieldNode(e);
		else {
			(this._tree = e.context.parent), (this.buffer = e.context);
			for (let i = e._parent; i; i = i._parent) this.stack.unshift(i.index);
			(this.bufferNode = e), this.yieldBuf(e.index);
		}
	}
	yieldNode(e) {
		return e
			? ((this._tree = e), (this.type = e.type), (this.from = e.from), (this.to = e.to), !0)
			: !1;
	}
	yieldBuf(e, t) {
		this.index = e;
		let { start: i, buffer: r } = this.buffer;
		return (
			(this.type = t || r.set.types[r.buffer[e]]),
			(this.from = i + r.buffer[e + 1]),
			(this.to = i + r.buffer[e + 2]),
			!0
		);
	}
	yield(e) {
		return e
			? e instanceof ut
				? ((this.buffer = null), this.yieldNode(e))
				: ((this.buffer = e.context), this.yieldBuf(e.index, e.type))
			: !1;
	}
	toString() {
		return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
	}
	enterChild(e, t, i) {
		if (!this.buffer)
			return this.yield(
				this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode)
			);
		let { buffer: r } = this.buffer,
			s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.buffer.start, i);
		return s < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(s));
	}
	firstChild() {
		return this.enterChild(1, 0, 4);
	}
	lastChild() {
		return this.enterChild(-1, 0, 4);
	}
	childAfter(e) {
		return this.enterChild(1, e, 2);
	}
	childBefore(e) {
		return this.enterChild(-1, e, -2);
	}
	enter(e, t, i = this.mode) {
		return this.buffer
			? i & $e.ExcludeBuffers
				? !1
				: this.enterChild(1, e, t)
			: this.yield(this._tree.enter(e, t, i));
	}
	parent() {
		if (!this.buffer)
			return this.yieldNode(
				this.mode & $e.IncludeAnonymous ? this._tree._parent : this._tree.parent
			);
		if (this.stack.length) return this.yieldBuf(this.stack.pop());
		let e =
			this.mode & $e.IncludeAnonymous
				? this.buffer.parent
				: this.buffer.parent.nextSignificantParent();
		return (this.buffer = null), this.yieldNode(e);
	}
	sibling(e) {
		if (!this.buffer)
			return this._tree._parent
				? this.yield(
						this._tree.index < 0
							? null
							: this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)
					)
				: !1;
		let { buffer: t } = this.buffer,
			i = this.stack.length - 1;
		if (e < 0) {
			let r = i < 0 ? 0 : this.stack[i] + 4;
			if (this.index != r) return this.yieldBuf(t.findChild(r, this.index, -1, 0, 4));
		} else {
			let r = t.buffer[this.index + 3];
			if (r < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3])) return this.yieldBuf(r);
		}
		return i < 0
			? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode))
			: !1;
	}
	nextSibling() {
		return this.sibling(1);
	}
	prevSibling() {
		return this.sibling(-1);
	}
	atLastNode(e) {
		let t,
			i,
			{ buffer: r } = this;
		if (r) {
			if (e > 0) {
				if (this.index < r.buffer.buffer.length) return !1;
			} else
				for (let s = 0; s < this.index; s++) if (r.buffer.buffer[s + 3] < this.index) return !1;
			({ index: t, parent: i } = r);
		} else ({ index: t, _parent: i } = this._tree);
		for (; i; { index: t, _parent: i } = i)
			if (t > -1)
				for (let s = t + e, o = e < 0 ? -1 : i._tree.children.length; s != o; s += e) {
					let l = i._tree.children[s];
					if (this.mode & $e.IncludeAnonymous || l instanceof ci || !l.type.isAnonymous || Nl(l))
						return !1;
				}
		return !0;
	}
	move(e, t) {
		if (t && this.enterChild(e, 0, 4)) return !0;
		for (;;) {
			if (this.sibling(e)) return !0;
			if (this.atLastNode(e) || !this.parent()) return !1;
		}
	}
	next(e = !0) {
		return this.move(1, e);
	}
	prev(e = !0) {
		return this.move(-1, e);
	}
	moveTo(e, t = 0) {
		for (
			;
			(this.from == this.to ||
				(t < 1 ? this.from >= e : this.from > e) ||
				(t > -1 ? this.to <= e : this.to < e)) &&
			this.parent();

		);
		for (; this.enterChild(1, e, t); );
		return this;
	}
	get node() {
		if (!this.buffer) return this._tree;
		let e = this.bufferNode,
			t = null,
			i = 0;
		if (e && e.context == this.buffer)
			e: for (let r = this.index, s = this.stack.length; s >= 0; ) {
				for (let o = e; o; o = o._parent)
					if (o.index == r) {
						if (r == this.index) return o;
						(t = o), (i = s + 1);
						break e;
					}
				r = this.stack[--s];
			}
		for (let r = i; r < this.stack.length; r++) t = new ri(this.buffer, t, this.stack[r]);
		return (this.bufferNode = new ri(this.buffer, t, this.index));
	}
	get tree() {
		return this.buffer ? null : this._tree._tree;
	}
	iterate(e, t) {
		for (let i = 0; ; ) {
			let r = !1;
			if (this.type.isAnonymous || e(this) !== !1) {
				if (this.firstChild()) {
					i++;
					continue;
				}
				this.type.isAnonymous || (r = !0);
			}
			for (; r && t && t(this), (r = this.type.isAnonymous), !this.nextSibling(); ) {
				if (!i) return;
				this.parent(), i--, (r = !0);
			}
		}
	}
	matchContext(e) {
		if (!this.buffer) return ll(this.node, e);
		let { buffer: t } = this.buffer,
			{ types: i } = t.set;
		for (let r = e.length - 1, s = this.stack.length - 1; r >= 0; s--) {
			if (s < 0) return ll(this.node, e, r);
			let o = i[t.buffer[this.stack[s]]];
			if (!o.isAnonymous) {
				if (e[r] && e[r] != o.name) return !1;
				r--;
			}
		}
		return !0;
	}
}
function Nl(n) {
	return n.children.some((e) => e instanceof ci || !e.type.isAnonymous || Nl(e));
}
function a0(n) {
	var e;
	let {
			buffer: t,
			nodeSet: i,
			maxBufferLength: r = Cf,
			reused: s = [],
			minRepeatType: o = i.types.length
		} = n,
		l = Array.isArray(t) ? new Yl(t, t.length) : t,
		a = i.types,
		u = 0,
		h = 0;
	function c(x, P, $, T, w, b) {
		let { id: A, start: E, end: Q, size: F } = l,
			q = h;
		for (; F < 0; )
			if ((l.next(), F == -1)) {
				let K = s[A];
				$.push(K), T.push(E - x);
				return;
			} else if (F == -3) {
				u = A;
				return;
			} else if (F == -4) {
				h = A;
				return;
			} else throw new RangeError(`Unrecognized record size: ${F}`);
		let _ = a[A],
			Y,
			N,
			W = E - x;
		if (Q - E <= r && (N = m(l.pos - P, w))) {
			let K = new Uint16Array(N.size - N.skip),
				v = l.pos - N.size,
				V = K.length;
			for (; l.pos > v; ) V = g(N.start, K, V);
			(Y = new ci(K, Q - N.start, i)), (W = N.start - x);
		} else {
			let K = l.pos - F;
			l.next();
			let v = [],
				V = [],
				U = A >= o ? A : -1,
				re = 0,
				ee = Q;
			for (; l.pos > K; )
				U >= 0 && l.id == U && l.size >= 0
					? (l.end <= ee - r && (p(v, V, E, re, l.end, ee, U, q), (re = v.length), (ee = l.end)),
						l.next())
					: b > 2500
						? f(E, K, v, V)
						: c(E, K, v, V, U, b + 1);
			if (
				(U >= 0 && re > 0 && re < v.length && p(v, V, E, re, E, ee, U, q),
				v.reverse(),
				V.reverse(),
				U > -1 && re > 0)
			) {
				let we = d(_);
				Y = Vl(_, v, V, 0, v.length, 0, Q - E, we, we);
			} else Y = O(_, v, V, Q - E, q - Q);
		}
		$.push(Y), T.push(W);
	}
	function f(x, P, $, T) {
		let w = [],
			b = 0,
			A = -1;
		for (; l.pos > P; ) {
			let { id: E, start: Q, end: F, size: q } = l;
			if (q > 4) l.next();
			else {
				if (A > -1 && Q < A) break;
				A < 0 && (A = F - r), w.push(E, Q, F), b++, l.next();
			}
		}
		if (b) {
			let E = new Uint16Array(b * 4),
				Q = w[w.length - 2];
			for (let F = w.length - 3, q = 0; F >= 0; F -= 3)
				(E[q++] = w[F]), (E[q++] = w[F + 1] - Q), (E[q++] = w[F + 2] - Q), (E[q++] = q);
			$.push(new ci(E, w[2] - Q, i)), T.push(Q - x);
		}
	}
	function d(x) {
		return (P, $, T) => {
			let w = 0,
				b = P.length - 1,
				A,
				E;
			if (b >= 0 && (A = P[b]) instanceof Se) {
				if (!b && A.type == x && A.length == T) return A;
				(E = A.prop(ne.lookAhead)) && (w = $[b] + A.length + E);
			}
			return O(x, P, $, T, w);
		};
	}
	function p(x, P, $, T, w, b, A, E) {
		let Q = [],
			F = [];
		for (; x.length > T; ) Q.push(x.pop()), F.push(P.pop() + $ - w);
		x.push(O(i.types[A], Q, F, b - w, E - b)), P.push(w - $);
	}
	function O(x, P, $, T, w = 0, b) {
		if (u) {
			let A = [ne.contextHash, u];
			b = b ? [A].concat(b) : [A];
		}
		if (w > 25) {
			let A = [ne.lookAhead, w];
			b = b ? [A].concat(b) : [A];
		}
		return new Se(x, P, $, T, b);
	}
	function m(x, P) {
		let $ = l.fork(),
			T = 0,
			w = 0,
			b = 0,
			A = $.end - r,
			E = { size: 0, start: 0, skip: 0 };
		e: for (let Q = $.pos - x; $.pos > Q; ) {
			let F = $.size;
			if ($.id == P && F >= 0) {
				(E.size = T), (E.start = w), (E.skip = b), (b += 4), (T += 4), $.next();
				continue;
			}
			let q = $.pos - F;
			if (F < 0 || q < Q || $.start < A) break;
			let _ = $.id >= o ? 4 : 0,
				Y = $.start;
			for ($.next(); $.pos > q; ) {
				if ($.size < 0)
					if ($.size == -3) _ += 4;
					else break e;
				else $.id >= o && (_ += 4);
				$.next();
			}
			(w = Y), (T += F), (b += _);
		}
		return (
			(P < 0 || T == x) && ((E.size = T), (E.start = w), (E.skip = b)), E.size > 4 ? E : void 0
		);
	}
	function g(x, P, $) {
		let { id: T, start: w, end: b, size: A } = l;
		if ((l.next(), A >= 0 && T < o)) {
			let E = $;
			if (A > 4) {
				let Q = l.pos - (A - 4);
				for (; l.pos > Q; ) $ = g(x, P, $);
			}
			(P[--$] = E), (P[--$] = b - x), (P[--$] = w - x), (P[--$] = T);
		} else A == -3 ? (u = T) : A == -4 && (h = T);
		return $;
	}
	let S = [],
		C = [];
	for (; l.pos > 0; ) c(n.start || 0, n.bufferStart || 0, S, C, -1, 0);
	let k = (e = n.length) !== null && e !== void 0 ? e : S.length ? C[0] + S[0].length : 0;
	return new Se(a[n.topID], S.reverse(), C.reverse(), k);
}
const Ru = new WeakMap();
function Br(n, e) {
	if (!n.isAnonymous || e instanceof ci || e.type != n) return 1;
	let t = Ru.get(e);
	if (t == null) {
		t = 1;
		for (let i of e.children) {
			if (i.type != n || !(i instanceof Se)) {
				t = 1;
				break;
			}
			t += Br(n, i);
		}
		Ru.set(e, t);
	}
	return t;
}
function Vl(n, e, t, i, r, s, o, l, a) {
	let u = 0;
	for (let p = i; p < r; p++) u += Br(n, e[p]);
	let h = Math.ceil((u * 1.5) / 8),
		c = [],
		f = [];
	function d(p, O, m, g, S) {
		for (let C = m; C < g; ) {
			let k = C,
				x = O[C],
				P = Br(n, p[C]);
			for (C++; C < g; C++) {
				let $ = Br(n, p[C]);
				if (P + $ >= h) break;
				P += $;
			}
			if (C == k + 1) {
				if (P > h) {
					let $ = p[k];
					d($.children, $.positions, 0, $.children.length, O[k] + S);
					continue;
				}
				c.push(p[k]);
			} else {
				let $ = O[C - 1] + p[C - 1].length - x;
				c.push(Vl(n, p, O, k, C, x, $, null, a));
			}
			f.push(x + S - s);
		}
	}
	return d(e, t, i, r, 0), (l || a)(c, f, o);
}
class Pi {
	constructor(e, t, i, r, s = !1, o = !1) {
		(this.from = e),
			(this.to = t),
			(this.tree = i),
			(this.offset = r),
			(this.open = (s ? 1 : 0) | (o ? 2 : 0));
	}
	get openStart() {
		return (this.open & 1) > 0;
	}
	get openEnd() {
		return (this.open & 2) > 0;
	}
	static addTree(e, t = [], i = !1) {
		let r = [new Pi(0, e.length, e, 0, !1, i)];
		for (let s of t) s.to > e.length && r.push(s);
		return r;
	}
	static applyChanges(e, t, i = 128) {
		if (!t.length) return e;
		let r = [],
			s = 1,
			o = e.length ? e[0] : null;
		for (let l = 0, a = 0, u = 0; ; l++) {
			let h = l < t.length ? t[l] : null,
				c = h ? h.fromA : 1e9;
			if (c - a >= i)
				for (; o && o.from < c; ) {
					let f = o;
					if (a >= f.from || c <= f.to || u) {
						let d = Math.max(f.from, a) - u,
							p = Math.min(f.to, c) - u;
						f = d >= p ? null : new Pi(d, p, f.tree, f.offset + u, l > 0, !!h);
					}
					if ((f && r.push(f), o.to > c)) break;
					o = s < e.length ? e[s++] : null;
				}
			if (!h) break;
			(a = h.toA), (u = h.toA - h.toB);
		}
		return r;
	}
}
class Ef {
	startParse(e, t, i) {
		return (
			typeof e == 'string' && (e = new u0(e)),
			(i = i
				? i.length
					? i.map((r) => new eo(r.from, r.to))
					: [new eo(0, 0)]
				: [new eo(0, e.length)]),
			this.createParse(e, t || [], i)
		);
	}
	parse(e, t, i) {
		let r = this.startParse(e, t, i);
		for (;;) {
			let s = r.advance();
			if (s) return s;
		}
	}
}
class u0 {
	constructor(e) {
		this.string = e;
	}
	get length() {
		return this.string.length;
	}
	chunk(e) {
		return this.string.slice(e);
	}
	get lineChunks() {
		return !1;
	}
	read(e, t) {
		return this.string.slice(e, t);
	}
}
new ne({ perNode: !0 });
let h0 = 0;
class Pt {
	constructor(e, t, i) {
		(this.set = e), (this.base = t), (this.modified = i), (this.id = h0++);
	}
	static define(e) {
		if (e != null && e.base) throw new Error('Can not derive from a modified tag');
		let t = new Pt([], null, []);
		if ((t.set.push(t), e)) for (let i of e.set) t.set.push(i);
		return t;
	}
	static defineModifier() {
		let e = new Ur();
		return (t) =>
			t.modified.indexOf(e) > -1
				? t
				: Ur.get(
						t.base || t,
						t.modified.concat(e).sort((i, r) => i.id - r.id)
					);
	}
}
let c0 = 0;
class Ur {
	constructor() {
		(this.instances = []), (this.id = c0++);
	}
	static get(e, t) {
		if (!t.length) return e;
		let i = t[0].instances.find((l) => l.base == e && f0(t, l.modified));
		if (i) return i;
		let r = [],
			s = new Pt(r, e, t);
		for (let l of t) l.instances.push(s);
		let o = d0(t);
		for (let l of e.set) if (!l.modified.length) for (let a of o) r.push(Ur.get(l, a));
		return s;
	}
}
function f0(n, e) {
	return n.length == e.length && n.every((t, i) => t == e[i]);
}
function d0(n) {
	let e = [[]];
	for (let t = 0; t < n.length; t++)
		for (let i = 0, r = e.length; i < r; i++) e.push(e[i].concat(n[t]));
	return e.sort((t, i) => i.length - t.length);
}
function Zf(n) {
	let e = Object.create(null);
	for (let t in n) {
		let i = n[t];
		Array.isArray(i) || (i = [i]);
		for (let r of t.split(' '))
			if (r) {
				let s = [],
					o = 2,
					l = r;
				for (let c = 0; ; ) {
					if (l == '...' && c > 0 && c + 3 == r.length) {
						o = 1;
						break;
					}
					let f = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
					if (!f) throw new RangeError('Invalid path: ' + r);
					if (
						(s.push(f[0] == '*' ? '' : f[0][0] == '"' ? JSON.parse(f[0]) : f[0]),
						(c += f[0].length),
						c == r.length)
					)
						break;
					let d = r[c++];
					if (c == r.length && d == '!') {
						o = 0;
						break;
					}
					if (d != '/') throw new RangeError('Invalid path: ' + r);
					l = r.slice(c);
				}
				let a = s.length - 1,
					u = s[a];
				if (!u) throw new RangeError('Invalid path: ' + r);
				let h = new Gr(i, o, a > 0 ? s.slice(0, a) : null);
				e[u] = h.sort(e[u]);
			}
	}
	return Rf.add(e);
}
const Rf = new ne();
class Gr {
	constructor(e, t, i, r) {
		(this.tags = e), (this.mode = t), (this.context = i), (this.next = r);
	}
	get opaque() {
		return this.mode == 0;
	}
	get inherit() {
		return this.mode == 1;
	}
	sort(e) {
		return !e || e.depth < this.depth ? ((this.next = e), this) : ((e.next = this.sort(e.next)), e);
	}
	get depth() {
		return this.context ? this.context.length : 0;
	}
}
Gr.empty = new Gr([], 2, null);
function Tf(n, e) {
	let t = Object.create(null);
	for (let s of n)
		if (!Array.isArray(s.tag)) t[s.tag.id] = s.class;
		else for (let o of s.tag) t[o.id] = s.class;
	let { scope: i, all: r = null } = e || {};
	return {
		style: (s) => {
			let o = r;
			for (let l of s)
				for (let a of l.set) {
					let u = t[a.id];
					if (u) {
						o = o ? o + ' ' + u : u;
						break;
					}
				}
			return o;
		},
		scope: i
	};
}
function p0(n, e) {
	let t = null;
	for (let i of n) {
		let r = i.style(e);
		r && (t = t ? t + ' ' + r : r);
	}
	return t;
}
function O0(n, e, t, i = 0, r = n.length) {
	let s = new m0(i, Array.isArray(e) ? e : [e], t);
	s.highlightRange(n.cursor(), i, r, '', s.highlighters), s.flush(r);
}
class m0 {
	constructor(e, t, i) {
		(this.at = e), (this.highlighters = t), (this.span = i), (this.class = '');
	}
	startSpan(e, t) {
		t != this.class && (this.flush(e), e > this.at && (this.at = e), (this.class = t));
	}
	flush(e) {
		e > this.at && this.class && this.span(this.at, e, this.class);
	}
	highlightRange(e, t, i, r, s) {
		let { type: o, from: l, to: a } = e;
		if (l >= i || a <= t) return;
		o.isTop && (s = this.highlighters.filter((d) => !d.scope || d.scope(o)));
		let u = r,
			h = g0(e) || Gr.empty,
			c = p0(s, h.tags);
		if (
			(c && (u && (u += ' '), (u += c), h.mode == 1 && (r += (r ? ' ' : '') + c)),
			this.startSpan(Math.max(t, l), u),
			h.opaque)
		)
			return;
		let f = e.tree && e.tree.prop(ne.mounted);
		if (f && f.overlay) {
			let d = e.node.enter(f.overlay[0].from + l, 1),
				p = this.highlighters.filter((m) => !m.scope || m.scope(f.tree.type)),
				O = e.firstChild();
			for (let m = 0, g = l; ; m++) {
				let S = m < f.overlay.length ? f.overlay[m] : null,
					C = S ? S.from + l : a,
					k = Math.max(t, g),
					x = Math.min(i, C);
				if (k < x && O)
					for (
						;
						e.from < x &&
						(this.highlightRange(e, k, x, r, s),
						this.startSpan(Math.min(x, e.to), u),
						!(e.to >= C || !e.nextSibling()));

					);
				if (!S || C > i) break;
				(g = S.to + l),
					g > t &&
						(this.highlightRange(d.cursor(), Math.max(t, S.from + l), Math.min(i, g), '', p),
						this.startSpan(Math.min(i, g), u));
			}
			O && e.parent();
		} else if (e.firstChild()) {
			f && (r = '');
			do
				if (!(e.to <= t)) {
					if (e.from >= i) break;
					this.highlightRange(e, t, i, r, s), this.startSpan(Math.min(i, e.to), u);
				}
			while (e.nextSibling());
			e.parent();
		}
	}
}
function g0(n) {
	let e = n.type.prop(Rf);
	for (; e && e.context && !n.matchContext(e.context); ) e = e.next;
	return e || null;
}
const M = Pt.define,
	br = M(),
	Jt = M(),
	Tu = M(Jt),
	Fu = M(Jt),
	Kt = M(),
	xr = M(Kt),
	to = M(Kt),
	Ct = M(),
	bi = M(Ct),
	vt = M(),
	Qt = M(),
	ul = M(),
	mn = M(ul),
	Dr = M(),
	y = {
		comment: br,
		lineComment: M(br),
		blockComment: M(br),
		docComment: M(br),
		name: Jt,
		variableName: M(Jt),
		typeName: Tu,
		tagName: M(Tu),
		propertyName: Fu,
		attributeName: M(Fu),
		className: M(Jt),
		labelName: M(Jt),
		namespace: M(Jt),
		macroName: M(Jt),
		literal: Kt,
		string: xr,
		docString: M(xr),
		character: M(xr),
		attributeValue: M(xr),
		number: to,
		integer: M(to),
		float: M(to),
		bool: M(Kt),
		regexp: M(Kt),
		escape: M(Kt),
		color: M(Kt),
		url: M(Kt),
		keyword: vt,
		self: M(vt),
		null: M(vt),
		atom: M(vt),
		unit: M(vt),
		modifier: M(vt),
		operatorKeyword: M(vt),
		controlKeyword: M(vt),
		definitionKeyword: M(vt),
		moduleKeyword: M(vt),
		operator: Qt,
		derefOperator: M(Qt),
		arithmeticOperator: M(Qt),
		logicOperator: M(Qt),
		bitwiseOperator: M(Qt),
		compareOperator: M(Qt),
		updateOperator: M(Qt),
		definitionOperator: M(Qt),
		typeOperator: M(Qt),
		controlOperator: M(Qt),
		punctuation: ul,
		separator: M(ul),
		bracket: mn,
		angleBracket: M(mn),
		squareBracket: M(mn),
		paren: M(mn),
		brace: M(mn),
		content: Ct,
		heading: bi,
		heading1: M(bi),
		heading2: M(bi),
		heading3: M(bi),
		heading4: M(bi),
		heading5: M(bi),
		heading6: M(bi),
		contentSeparator: M(Ct),
		list: M(Ct),
		quote: M(Ct),
		emphasis: M(Ct),
		strong: M(Ct),
		link: M(Ct),
		monospace: M(Ct),
		strikethrough: M(Ct),
		inserted: M(),
		deleted: M(),
		changed: M(),
		invalid: M(),
		meta: Dr,
		documentMeta: M(Dr),
		annotation: M(Dr),
		processingInstruction: M(Dr),
		definition: Pt.defineModifier(),
		constant: Pt.defineModifier(),
		function: Pt.defineModifier(),
		standard: Pt.defineModifier(),
		local: Pt.defineModifier(),
		special: Pt.defineModifier()
	};
Tf([
	{ tag: y.link, class: 'tok-link' },
	{ tag: y.heading, class: 'tok-heading' },
	{ tag: y.emphasis, class: 'tok-emphasis' },
	{ tag: y.strong, class: 'tok-strong' },
	{ tag: y.keyword, class: 'tok-keyword' },
	{ tag: y.atom, class: 'tok-atom' },
	{ tag: y.bool, class: 'tok-bool' },
	{ tag: y.url, class: 'tok-url' },
	{ tag: y.labelName, class: 'tok-labelName' },
	{ tag: y.inserted, class: 'tok-inserted' },
	{ tag: y.deleted, class: 'tok-deleted' },
	{ tag: y.literal, class: 'tok-literal' },
	{ tag: y.string, class: 'tok-string' },
	{ tag: y.number, class: 'tok-number' },
	{ tag: [y.regexp, y.escape, y.special(y.string)], class: 'tok-string2' },
	{ tag: y.variableName, class: 'tok-variableName' },
	{ tag: y.local(y.variableName), class: 'tok-variableName tok-local' },
	{
		tag: y.definition(y.variableName),
		class: 'tok-variableName tok-definition'
	},
	{ tag: y.special(y.variableName), class: 'tok-variableName2' },
	{
		tag: y.definition(y.propertyName),
		class: 'tok-propertyName tok-definition'
	},
	{ tag: y.typeName, class: 'tok-typeName' },
	{ tag: y.namespace, class: 'tok-namespace' },
	{ tag: y.className, class: 'tok-className' },
	{ tag: y.macroName, class: 'tok-macroName' },
	{ tag: y.propertyName, class: 'tok-propertyName' },
	{ tag: y.operator, class: 'tok-operator' },
	{ tag: y.comment, class: 'tok-comment' },
	{ tag: y.meta, class: 'tok-meta' },
	{ tag: y.invalid, class: 'tok-invalid' },
	{ tag: y.punctuation, class: 'tok-punctuation' }
]);
var io;
const Ni = new ne();
function y0(n) {
	return X.define({ combine: n ? (e) => e.concat(n) : void 0 });
}
const b0 = new ne();
class bt {
	constructor(e, t, i = [], r = '') {
		(this.data = e),
			(this.name = r),
			oe.prototype.hasOwnProperty('tree') ||
				Object.defineProperty(oe.prototype, 'tree', {
					get() {
						return ze(this);
					}
				}),
			(this.parser = t),
			(this.extension = [
				fi.of(this),
				oe.languageData.of((s, o, l) => {
					let a = Mu(s, o, l),
						u = a.type.prop(Ni);
					if (!u) return [];
					let h = s.facet(u),
						c = a.type.prop(b0);
					if (c) {
						let f = a.resolve(o - a.from, l);
						for (let d of c)
							if (d.test(f, s)) {
								let p = s.facet(d.facet);
								return d.type == 'replace' ? p : p.concat(h);
							}
					}
					return h;
				})
			].concat(i));
	}
	isActiveAt(e, t, i = -1) {
		return Mu(e, t, i).type.prop(Ni) == this.data;
	}
	findRegions(e) {
		let t = e.facet(fi);
		if ((t == null ? void 0 : t.data) == this.data) return [{ from: 0, to: e.doc.length }];
		if (!t || !t.allowsNesting) return [];
		let i = [],
			r = (s, o) => {
				if (s.prop(Ni) == this.data) {
					i.push({ from: o, to: o + s.length });
					return;
				}
				let l = s.prop(ne.mounted);
				if (l) {
					if (l.tree.prop(Ni) == this.data) {
						if (l.overlay) for (let a of l.overlay) i.push({ from: a.from + o, to: a.to + o });
						else i.push({ from: o, to: o + s.length });
						return;
					} else if (l.overlay) {
						let a = i.length;
						if ((r(l.tree, l.overlay[0].from + o), i.length > a)) return;
					}
				}
				for (let a = 0; a < s.children.length; a++) {
					let u = s.children[a];
					u instanceof Se && r(u, s.positions[a] + o);
				}
			};
		return r(ze(e), 0), i;
	}
	get allowsNesting() {
		return !0;
	}
}
bt.setState = te.define();
function Mu(n, e, t) {
	let i = n.facet(fi),
		r = ze(n).topNode;
	if (!i || i.allowsNesting)
		for (let s = r; s; s = s.enter(e, t, $e.ExcludeBuffers)) s.type.isTop && (r = s);
	return r;
}
class Hr extends bt {
	constructor(e, t, i) {
		super(e, t, [], i), (this.parser = t);
	}
	static define(e) {
		let t = y0(e.languageData);
		return new Hr(
			t,
			e.parser.configure({ props: [Ni.add((i) => (i.isTop ? t : void 0))] }),
			e.name
		);
	}
	configure(e, t) {
		return new Hr(this.data, this.parser.configure(e), t || this.name);
	}
	get allowsNesting() {
		return this.parser.hasWrappers();
	}
}
function ze(n) {
	let e = n.field(bt.state, !1);
	return e ? e.tree : Se.empty;
}
class x0 {
	constructor(e) {
		(this.doc = e), (this.cursorPos = 0), (this.string = ''), (this.cursor = e.iter());
	}
	get length() {
		return this.doc.length;
	}
	syncTo(e) {
		return (
			(this.string = this.cursor.next(e - this.cursorPos).value),
			(this.cursorPos = e + this.string.length),
			this.cursorPos - this.string.length
		);
	}
	chunk(e) {
		return this.syncTo(e), this.string;
	}
	get lineChunks() {
		return !0;
	}
	read(e, t) {
		let i = this.cursorPos - this.string.length;
		return e < i || t >= this.cursorPos
			? this.doc.sliceString(e, t)
			: this.string.slice(e - i, t - i);
	}
}
let gn = null;
class Jr {
	constructor(e, t, i = [], r, s, o, l, a) {
		(this.parser = e),
			(this.state = t),
			(this.fragments = i),
			(this.tree = r),
			(this.treeLen = s),
			(this.viewport = o),
			(this.skipped = l),
			(this.scheduleOn = a),
			(this.parse = null),
			(this.tempSkipped = []);
	}
	static create(e, t, i) {
		return new Jr(e, t, [], Se.empty, 0, i, [], null);
	}
	startParse() {
		return this.parser.startParse(new x0(this.state.doc), this.fragments);
	}
	work(e, t) {
		return (
			t != null && t >= this.state.doc.length && (t = void 0),
			this.tree != Se.empty && this.isDone(t ?? this.state.doc.length)
				? (this.takeTree(), !0)
				: this.withContext(() => {
						var i;
						if (typeof e == 'number') {
							let r = Date.now() + e;
							e = () => Date.now() > r;
						}
						for (
							this.parse || (this.parse = this.startParse()),
								t != null &&
									(this.parse.stoppedAt == null || this.parse.stoppedAt > t) &&
									t < this.state.doc.length &&
									this.parse.stopAt(t);
							;

						) {
							let r = this.parse.advance();
							if (r)
								if (
									((this.fragments = this.withoutTempSkipped(
										Pi.addTree(r, this.fragments, this.parse.stoppedAt != null)
									)),
									(this.treeLen =
										(i = this.parse.stoppedAt) !== null && i !== void 0
											? i
											: this.state.doc.length),
									(this.tree = r),
									(this.parse = null),
									this.treeLen < (t ?? this.state.doc.length))
								)
									this.parse = this.startParse();
								else return !0;
							if (e()) return !1;
						}
					})
		);
	}
	takeTree() {
		let e, t;
		this.parse &&
			(e = this.parse.parsedPos) >= this.treeLen &&
			((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e),
			this.withContext(() => {
				for (; !(t = this.parse.advance()); );
			}),
			(this.treeLen = e),
			(this.tree = t),
			(this.fragments = this.withoutTempSkipped(Pi.addTree(this.tree, this.fragments, !0))),
			(this.parse = null));
	}
	withContext(e) {
		let t = gn;
		gn = this;
		try {
			return e();
		} finally {
			gn = t;
		}
	}
	withoutTempSkipped(e) {
		for (let t; (t = this.tempSkipped.pop()); ) e = Bu(e, t.from, t.to);
		return e;
	}
	changes(e, t) {
		let { fragments: i, tree: r, treeLen: s, viewport: o, skipped: l } = this;
		if ((this.takeTree(), !e.empty)) {
			let a = [];
			if (
				(e.iterChangedRanges((u, h, c, f) => a.push({ fromA: u, toA: h, fromB: c, toB: f })),
				(i = Pi.applyChanges(i, a)),
				(r = Se.empty),
				(s = 0),
				(o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }),
				this.skipped.length)
			) {
				l = [];
				for (let u of this.skipped) {
					let h = e.mapPos(u.from, 1),
						c = e.mapPos(u.to, -1);
					h < c && l.push({ from: h, to: c });
				}
			}
		}
		return new Jr(this.parser, t, i, r, s, o, l, this.scheduleOn);
	}
	updateViewport(e) {
		if (this.viewport.from == e.from && this.viewport.to == e.to) return !1;
		this.viewport = e;
		let t = this.skipped.length;
		for (let i = 0; i < this.skipped.length; i++) {
			let { from: r, to: s } = this.skipped[i];
			r < e.to &&
				s > e.from &&
				((this.fragments = Bu(this.fragments, r, s)), this.skipped.splice(i--, 1));
		}
		return this.skipped.length >= t ? !1 : (this.reset(), !0);
	}
	reset() {
		this.parse && (this.takeTree(), (this.parse = null));
	}
	skipUntilInView(e, t) {
		this.skipped.push({ from: e, to: t });
	}
	static getSkippingParser(e) {
		return new (class extends Ef {
			createParse(t, i, r) {
				let s = r[0].from,
					o = r[r.length - 1].to;
				return {
					parsedPos: s,
					advance() {
						let a = gn;
						if (a) {
							for (let u of r) a.tempSkipped.push(u);
							e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
						}
						return (this.parsedPos = o), new Se(Je.none, [], [], o - s);
					},
					stoppedAt: null,
					stopAt() {}
				};
			}
		})();
	}
	isDone(e) {
		e = Math.min(e, this.state.doc.length);
		let t = this.fragments;
		return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
	}
	static get() {
		return gn;
	}
}
function Bu(n, e, t) {
	return Pi.applyChanges(n, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class sn {
	constructor(e) {
		(this.context = e), (this.tree = e.tree);
	}
	apply(e) {
		if (!e.docChanged && this.tree == this.context.tree) return this;
		let t = this.context.changes(e.changes, e.state),
			i =
				this.context.treeLen == e.startState.doc.length
					? void 0
					: Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
		return t.work(20, i) || t.takeTree(), new sn(t);
	}
	static init(e) {
		let t = Math.min(3e3, e.doc.length),
			i = Jr.create(e.facet(fi).parser, e, { from: 0, to: t });
		return i.work(20, t) || i.takeTree(), new sn(i);
	}
}
bt.state = Be.define({
	create: sn.init,
	update(n, e) {
		for (let t of e.effects) if (t.is(bt.setState)) return t.value;
		return e.startState.facet(fi) != e.state.facet(fi) ? sn.init(e.state) : n.apply(e);
	}
});
let Ff = (n) => {
	let e = setTimeout(() => n(), 500);
	return () => clearTimeout(e);
};
typeof requestIdleCallback < 'u' &&
	(Ff = (n) => {
		let e = -1,
			t = setTimeout(() => {
				e = requestIdleCallback(n, { timeout: 400 });
			}, 100);
		return () => (e < 0 ? clearTimeout(t) : cancelIdleCallback(e));
	});
const no =
		typeof navigator < 'u' &&
		!((io = navigator.scheduling) === null || io === void 0) &&
		io.isInputPending
			? () => navigator.scheduling.isInputPending()
			: null,
	D0 = De.fromClass(
		class {
			constructor(e) {
				(this.view = e),
					(this.working = null),
					(this.workScheduled = 0),
					(this.chunkEnd = -1),
					(this.chunkBudget = -1),
					(this.work = this.work.bind(this)),
					this.scheduleWork();
			}
			update(e) {
				let t = this.view.state.field(bt.state).context;
				(t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) &&
					this.scheduleWork(),
					(e.docChanged || e.selectionSet) &&
						(this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()),
					this.checkAsyncSchedule(t);
			}
			scheduleWork() {
				if (this.working) return;
				let { state: e } = this.view,
					t = e.field(bt.state);
				(t.tree != t.context.tree || !t.context.isDone(e.doc.length)) &&
					(this.working = Ff(this.work));
			}
			work(e) {
				this.working = null;
				let t = Date.now();
				if (
					(this.chunkEnd < t &&
						(this.chunkEnd < 0 || this.view.hasFocus) &&
						((this.chunkEnd = t + 3e4), (this.chunkBudget = 3e3)),
					this.chunkBudget <= 0)
				)
					return;
				let {
						state: i,
						viewport: { to: r }
					} = this.view,
					s = i.field(bt.state);
				if (s.tree == s.context.tree && s.context.isDone(r + 1e5)) return;
				let o =
						Date.now() +
						Math.min(this.chunkBudget, 100, e && !no ? Math.max(25, e.timeRemaining() - 5) : 1e9),
					l = s.context.treeLen < r && i.doc.length > r + 1e3,
					a = s.context.work(() => (no && no()) || Date.now() > o, r + (l ? 0 : 1e5));
				(this.chunkBudget -= Date.now() - t),
					(a || this.chunkBudget <= 0) &&
						(s.context.takeTree(),
						this.view.dispatch({ effects: bt.setState.of(new sn(s.context)) })),
					this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(),
					this.checkAsyncSchedule(s.context);
			}
			checkAsyncSchedule(e) {
				e.scheduleOn &&
					(this.workScheduled++,
					e.scheduleOn
						.then(() => this.scheduleWork())
						.catch((t) => Ue(this.view.state, t))
						.then(() => this.workScheduled--),
					(e.scheduleOn = null));
			}
			destroy() {
				this.working && this.working();
			}
			isWorking() {
				return !!(this.working || this.workScheduled > 0);
			}
		},
		{
			eventHandlers: {
				focus() {
					this.scheduleWork();
				}
			}
		}
	),
	fi = X.define({
		combine(n) {
			return n.length ? n[0] : null;
		},
		enables: (n) => [
			bt.state,
			D0,
			j.contentAttributes.compute([n], (e) => {
				let t = e.facet(n);
				return t && t.name ? { 'data-language': t.name } : {};
			})
		]
	}),
	S0 = X.define(),
	Ds = X.define({
		combine: (n) => {
			if (!n.length) return '  ';
			let e = n[0];
			if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
				throw new Error('Invalid indent unit: ' + JSON.stringify(n[0]));
			return e;
		}
	});
function Kr(n) {
	let e = n.facet(Ds);
	return e.charCodeAt(0) == 9 ? n.tabSize * e.length : e.length;
}
function Yn(n, e) {
	let t = '',
		i = n.tabSize,
		r = n.facet(Ds)[0];
	if (r == '	') {
		for (; e >= i; ) (t += '	'), (e -= i);
		r = ' ';
	}
	for (let s = 0; s < e; s++) t += r;
	return t;
}
function Il(n, e) {
	n instanceof oe && (n = new Ss(n));
	for (let i of n.state.facet(S0)) {
		let r = i(n, e);
		if (r !== void 0) return r;
	}
	let t = ze(n.state);
	return t.length >= e ? w0(n, t, e) : null;
}
class Ss {
	constructor(e, t = {}) {
		(this.state = e), (this.options = t), (this.unit = Kr(e));
	}
	lineAt(e, t = 1) {
		let i = this.state.doc.lineAt(e),
			{ simulateBreak: r, simulateDoubleBreak: s } = this.options;
		return r != null && r >= i.from && r <= i.to
			? s && r == e
				? { text: '', from: e }
				: (t < 0 ? r < e : r <= e)
					? { text: i.text.slice(r - i.from), from: r }
					: { text: i.text.slice(0, r - i.from), from: i.from }
			: i;
	}
	textAfterPos(e, t = 1) {
		if (this.options.simulateDoubleBreak && e == this.options.simulateBreak) return '';
		let { text: i, from: r } = this.lineAt(e, t);
		return i.slice(e - r, Math.min(i.length, e + 100 - r));
	}
	column(e, t = 1) {
		let { text: i, from: r } = this.lineAt(e, t),
			s = this.countColumn(i, e - r),
			o = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
		return o > -1 && (s += o - this.countColumn(i, i.search(/\S|$/))), s;
	}
	countColumn(e, t = e.length) {
		return an(e, this.state.tabSize, t);
	}
	lineIndent(e, t = 1) {
		let { text: i, from: r } = this.lineAt(e, t),
			s = this.options.overrideIndentation;
		if (s) {
			let o = s(r);
			if (o > -1) return o;
		}
		return this.countColumn(i, i.search(/\S|$/));
	}
	get simulatedBreak() {
		return this.options.simulateBreak || null;
	}
}
const Mf = new ne();
function w0(n, e, t) {
	let i = e.resolveStack(t),
		r = i.node.enterUnfinishedNodesBefore(t);
	if (r != i.node) {
		let s = [];
		for (let o = r; o != i.node; o = o.parent) s.push(o);
		for (let o = s.length - 1; o >= 0; o--) i = { node: s[o], next: i };
	}
	return Bf(i, n, t);
}
function Bf(n, e, t) {
	for (let i = n; i; i = i.next) {
		let r = v0(i.node);
		if (r) return r(Ll.create(e, t, i));
	}
	return 0;
}
function k0(n) {
	return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function v0(n) {
	let e = n.type.prop(Mf);
	if (e) return e;
	let t = n.firstChild,
		i;
	if (t && (i = t.type.prop(ne.closedBy))) {
		let r = n.lastChild,
			s = r && i.indexOf(r.name) > -1;
		return (o) => jf(o, !0, 1, void 0, s && !k0(o) ? r.from : void 0);
	}
	return n.parent == null ? Q0 : null;
}
function Q0() {
	return 0;
}
class Ll extends Ss {
	constructor(e, t, i) {
		super(e.state, e.options), (this.base = e), (this.pos = t), (this.context = i);
	}
	get node() {
		return this.context.node;
	}
	static create(e, t, i) {
		return new Ll(e, t, i);
	}
	get textAfter() {
		return this.textAfterPos(this.pos);
	}
	get baseIndent() {
		return this.baseIndentFor(this.node);
	}
	baseIndentFor(e) {
		let t = this.state.doc.lineAt(e.from);
		for (;;) {
			let i = e.resolve(t.from);
			for (; i.parent && i.parent.from == i.from; ) i = i.parent;
			if (C0(i, e)) break;
			t = this.state.doc.lineAt(i.from);
		}
		return this.lineIndent(t.from);
	}
	continue() {
		return Bf(this.context.next, this.base, this.pos);
	}
}
function C0(n, e) {
	for (let t = e; t; t = t.parent) if (n == t) return !0;
	return !1;
}
function P0(n) {
	let e = n.node,
		t = e.childAfter(e.from),
		i = e.lastChild;
	if (!t) return null;
	let r = n.options.simulateBreak,
		s = n.state.doc.lineAt(t.from),
		o = r == null || r <= s.from ? s.to : Math.min(s.to, r);
	for (let l = t.to; ; ) {
		let a = e.childAfter(l);
		if (!a || a == i) return null;
		if (!a.type.isSkipped) return a.from < o ? t : null;
		l = a.to;
	}
}
function A0({ closing: n, align: e = !0, units: t = 1 }) {
	return (i) => jf(i, e, t, n);
}
function jf(n, e, t, i, r) {
	let s = n.textAfter,
		o = s.match(/^\s*/)[0].length,
		l = (i && s.slice(o, o + i.length) == i) || r == n.pos + o,
		a = e ? P0(n) : null;
	return a ? (l ? n.column(a.from) : n.column(a.to)) : n.baseIndent + (l ? 0 : n.unit * t);
}
const $0 = (n) => n.baseIndent;
function ro({ except: n, units: e = 1 } = {}) {
	return (t) => {
		let i = n && n.test(t.textAfter);
		return t.baseIndent + (i ? 0 : e * t.unit);
	};
}
const E0 = 200;
function Wf() {
	return oe.transactionFilter.of((n) => {
		if (!n.docChanged || (!n.isUserEvent('input.type') && !n.isUserEvent('input.complete')))
			return n;
		let e = n.startState.languageDataAt('indentOnInput', n.startState.selection.main.head);
		if (!e.length) return n;
		let t = n.newDoc,
			{ head: i } = n.newSelection.main,
			r = t.lineAt(i);
		if (i > r.from + E0) return n;
		let s = t.sliceString(r.from, i);
		if (!e.some((u) => u.test(s))) return n;
		let { state: o } = n,
			l = -1,
			a = [];
		for (let { head: u } of o.selection.ranges) {
			let h = o.doc.lineAt(u);
			if (h.from == l) continue;
			l = h.from;
			let c = Il(o, h.from);
			if (c == null) continue;
			let f = /^\s*/.exec(h.text)[0],
				d = Yn(o, c);
			f != d && a.push({ from: h.from, to: h.from + f.length, insert: d });
		}
		return a.length ? [n, { changes: a, sequential: !0 }] : n;
	});
}
const Z0 = X.define(),
	zf = new ne();
function R0(n) {
	let e = n.firstChild,
		t = n.lastChild;
	return e && e.to < t.from ? { from: e.to, to: t.type.isError ? n.to : t.from } : null;
}
function T0(n, e, t) {
	let i = ze(n);
	if (i.length < t) return null;
	let r = i.resolveStack(t, 1),
		s = null;
	for (let o = r; o; o = o.next) {
		let l = o.node;
		if (l.to <= t || l.from > t) continue;
		if (s && l.from < e) break;
		let a = l.type.prop(zf);
		if (a && (l.to < i.length - 50 || i.length == n.doc.length || !F0(l))) {
			let u = a(l, n);
			u && u.from <= t && u.from >= e && u.to > t && (s = u);
		}
	}
	return s;
}
function F0(n) {
	let e = n.lastChild;
	return e && e.to == n.to && e.type.isError;
}
function es(n, e, t) {
	for (let i of n.facet(Z0)) {
		let r = i(n, e, t);
		if (r) return r;
	}
	return T0(n, e, t);
}
function Xf(n, e) {
	let t = e.mapPos(n.from, 1),
		i = e.mapPos(n.to, -1);
	return t >= i ? void 0 : { from: t, to: i };
}
const ws = te.define({ map: Xf }),
	er = te.define({ map: Xf });
function qf(n) {
	let e = [];
	for (let { head: t } of n.state.selection.ranges)
		e.some((i) => i.from <= t && i.to >= t) || e.push(n.lineBlockAt(t));
	return e;
}
const Ti = Be.define({
	create() {
		return I.none;
	},
	update(n, e) {
		n = n.map(e.changes);
		for (let t of e.effects)
			if (t.is(ws) && !M0(n, t.value.from, t.value.to)) {
				let { preparePlaceholder: i } = e.state.facet(Nf),
					r = i ? I.replace({ widget: new _0(i(e.state, t.value)) }) : ju;
				n = n.update({ add: [r.range(t.value.from, t.value.to)] });
			} else
				t.is(er) &&
					(n = n.update({
						filter: (i, r) => t.value.from != i || t.value.to != r,
						filterFrom: t.value.from,
						filterTo: t.value.to
					}));
		if (e.selection) {
			let t = !1,
				{ head: i } = e.selection.main;
			n.between(i, i, (r, s) => {
				r < i && s > i && (t = !0);
			}),
				t &&
					(n = n.update({
						filterFrom: i,
						filterTo: i,
						filter: (r, s) => s <= i || r >= i
					}));
		}
		return n;
	},
	provide: (n) => j.decorations.from(n),
	toJSON(n, e) {
		let t = [];
		return (
			n.between(0, e.doc.length, (i, r) => {
				t.push(i, r);
			}),
			t
		);
	},
	fromJSON(n) {
		if (!Array.isArray(n) || n.length % 2) throw new RangeError('Invalid JSON for fold state');
		let e = [];
		for (let t = 0; t < n.length; ) {
			let i = n[t++],
				r = n[t++];
			if (typeof i != 'number' || typeof r != 'number')
				throw new RangeError('Invalid JSON for fold state');
			e.push(ju.range(i, r));
		}
		return I.set(e, !0);
	}
});
function ts(n, e, t) {
	var i;
	let r = null;
	return (
		(i = n.field(Ti, !1)) === null ||
			i === void 0 ||
			i.between(e, t, (s, o) => {
				(!r || r.from > s) && (r = { from: s, to: o });
			}),
		r
	);
}
function M0(n, e, t) {
	let i = !1;
	return (
		n.between(e, e, (r, s) => {
			r == e && s == t && (i = !0);
		}),
		i
	);
}
function _f(n, e) {
	return n.field(Ti, !1) ? e : e.concat(te.appendConfig.of(Vf()));
}
const B0 = (n) => {
		for (let e of qf(n)) {
			let t = es(n.state, e.from, e.to);
			if (t) return n.dispatch({ effects: _f(n.state, [ws.of(t), Yf(n, t)]) }), !0;
		}
		return !1;
	},
	j0 = (n) => {
		if (!n.state.field(Ti, !1)) return !1;
		let e = [];
		for (let t of qf(n)) {
			let i = ts(n.state, t.from, t.to);
			i && e.push(er.of(i), Yf(n, i, !1));
		}
		return e.length && n.dispatch({ effects: e }), e.length > 0;
	};
function Yf(n, e, t = !0) {
	let i = n.state.doc.lineAt(e.from).number,
		r = n.state.doc.lineAt(e.to).number;
	return j.announce.of(
		`${n.state.phrase(t ? 'Folded lines' : 'Unfolded lines')} ${i} ${n.state.phrase('to')} ${r}.`
	);
}
const W0 = (n) => {
		let { state: e } = n,
			t = [];
		for (let i = 0; i < e.doc.length; ) {
			let r = n.lineBlockAt(i),
				s = es(e, r.from, r.to);
			s && t.push(ws.of(s)), (i = (s ? n.lineBlockAt(s.to) : r).to + 1);
		}
		return t.length && n.dispatch({ effects: _f(n.state, t) }), !!t.length;
	},
	z0 = (n) => {
		let e = n.state.field(Ti, !1);
		if (!e || !e.size) return !1;
		let t = [];
		return (
			e.between(0, n.state.doc.length, (i, r) => {
				t.push(er.of({ from: i, to: r }));
			}),
			n.dispatch({ effects: t }),
			!0
		);
	},
	X0 = [
		{ key: 'Ctrl-Shift-[', mac: 'Cmd-Alt-[', run: B0 },
		{ key: 'Ctrl-Shift-]', mac: 'Cmd-Alt-]', run: j0 },
		{ key: 'Ctrl-Alt-[', run: W0 },
		{ key: 'Ctrl-Alt-]', run: z0 }
	],
	q0 = { placeholderDOM: null, preparePlaceholder: null, placeholderText: '…' },
	Nf = X.define({
		combine(n) {
			return Bt(n, q0);
		}
	});
function Vf(n) {
	return [Ti, V0];
}
function If(n, e) {
	let { state: t } = n,
		i = t.facet(Nf),
		r = (o) => {
			let l = n.lineBlockAt(n.posAtDOM(o.target)),
				a = ts(n.state, l.from, l.to);
			a && n.dispatch({ effects: er.of(a) }), o.preventDefault();
		};
	if (i.placeholderDOM) return i.placeholderDOM(n, r, e);
	let s = document.createElement('span');
	return (
		(s.textContent = i.placeholderText),
		s.setAttribute('aria-label', t.phrase('folded code')),
		(s.title = t.phrase('unfold')),
		(s.className = 'cm-foldPlaceholder'),
		(s.onclick = r),
		s
	);
}
const ju = I.replace({
	widget: new (class extends Ht {
		toDOM(n) {
			return If(n, null);
		}
	})()
});
class _0 extends Ht {
	constructor(e) {
		super(), (this.value = e);
	}
	eq(e) {
		return this.value == e.value;
	}
	toDOM(e) {
		return If(e, this.value);
	}
}
const Y0 = {
	openText: '⌄',
	closedText: '›',
	markerDOM: null,
	domEventHandlers: {},
	foldingChanged: () => !1
};
class so extends Ut {
	constructor(e, t) {
		super(), (this.config = e), (this.open = t);
	}
	eq(e) {
		return this.config == e.config && this.open == e.open;
	}
	toDOM(e) {
		if (this.config.markerDOM) return this.config.markerDOM(this.open);
		let t = document.createElement('span');
		return (
			(t.textContent = this.open ? this.config.openText : this.config.closedText),
			(t.title = e.state.phrase(this.open ? 'Fold line' : 'Unfold line')),
			t
		);
	}
}
function N0(n = {}) {
	let e = Object.assign(Object.assign({}, Y0), n),
		t = new so(e, !0),
		i = new so(e, !1),
		r = De.fromClass(
			class {
				constructor(o) {
					(this.from = o.viewport.from), (this.markers = this.buildMarkers(o));
				}
				update(o) {
					(o.docChanged ||
						o.viewportChanged ||
						o.startState.facet(fi) != o.state.facet(fi) ||
						o.startState.field(Ti, !1) != o.state.field(Ti, !1) ||
						ze(o.startState) != ze(o.state) ||
						e.foldingChanged(o)) &&
						(this.markers = this.buildMarkers(o.view));
				}
				buildMarkers(o) {
					let l = new li();
					for (let a of o.viewportLineBlocks) {
						let u = ts(o.state, a.from, a.to) ? i : es(o.state, a.from, a.to) ? t : null;
						u && l.add(a.from, a.from, u);
					}
					return l.finish();
				}
			}
		),
		{ domEventHandlers: s } = e;
	return [
		r,
		Ug({
			class: 'cm-foldGutter',
			markers(o) {
				var l;
				return ((l = o.plugin(r)) === null || l === void 0 ? void 0 : l.markers) || le.empty;
			},
			initialSpacer() {
				return new so(e, !1);
			},
			domEventHandlers: Object.assign(Object.assign({}, s), {
				click: (o, l, a) => {
					if (s.click && s.click(o, l, a)) return !0;
					let u = ts(o.state, l.from, l.to);
					if (u) return o.dispatch({ effects: er.of(u) }), !0;
					let h = es(o.state, l.from, l.to);
					return h ? (o.dispatch({ effects: ws.of(h) }), !0) : !1;
				}
			})
		}),
		Vf()
	];
}
const V0 = j.baseTheme({
	'.cm-foldPlaceholder': {
		backgroundColor: '#eee',
		border: '1px solid #ddd',
		color: '#888',
		borderRadius: '.2em',
		margin: '0 1px',
		padding: '0 1px',
		cursor: 'pointer'
	},
	'.cm-foldGutter span': { padding: '0 1px', cursor: 'pointer' }
});
class un {
	constructor(e, t) {
		this.specs = e;
		let i;
		function r(l) {
			let a = ai.newName();
			return ((i || (i = Object.create(null)))['.' + a] = l), a;
		}
		const s = typeof t.all == 'string' ? t.all : t.all ? r(t.all) : void 0,
			o = t.scope;
		(this.scope = o instanceof bt ? (l) => l.prop(Ni) == o.data : o ? (l) => l == o : void 0),
			(this.style = Tf(
				e.map((l) => ({
					tag: l.tag,
					class: l.class || r(Object.assign({}, l, { tag: null }))
				})),
				{ all: s }
			).style),
			(this.module = i ? new ai(i) : null),
			(this.themeType = t.themeType);
	}
	static define(e, t) {
		return new un(e, t || {});
	}
}
const hl = X.define(),
	Lf = X.define({
		combine(n) {
			return n.length ? [n[0]] : null;
		}
	});
function oo(n) {
	let e = n.facet(hl);
	return e.length ? e : n.facet(Lf);
}
function ks(n, e) {
	let t = [L0],
		i;
	return (
		n instanceof un && (n.module && t.push(j.styleModule.of(n.module)), (i = n.themeType)),
		e != null && e.fallback
			? t.push(Lf.of(n))
			: i
				? t.push(
						hl.computeN([j.darkTheme], (r) => (r.facet(j.darkTheme) == (i == 'dark') ? [n] : []))
					)
				: t.push(hl.of(n)),
		t
	);
}
class I0 {
	constructor(e) {
		(this.markCache = Object.create(null)),
			(this.tree = ze(e.state)),
			(this.decorations = this.buildDeco(e, oo(e.state))),
			(this.decoratedTo = e.viewport.to);
	}
	update(e) {
		let t = ze(e.state),
			i = oo(e.state),
			r = i != oo(e.startState),
			{ viewport: s } = e.view,
			o = e.changes.mapPos(this.decoratedTo, 1);
		t.length < s.to && !r && t.type == this.tree.type && o >= s.to
			? ((this.decorations = this.decorations.map(e.changes)), (this.decoratedTo = o))
			: (t != this.tree || e.viewportChanged || r) &&
				((this.tree = t),
				(this.decorations = this.buildDeco(e.view, i)),
				(this.decoratedTo = s.to));
	}
	buildDeco(e, t) {
		if (!t || !this.tree.length) return I.none;
		let i = new li();
		for (let { from: r, to: s } of e.visibleRanges)
			O0(
				this.tree,
				t,
				(o, l, a) => {
					i.add(o, l, this.markCache[a] || (this.markCache[a] = I.mark({ class: a })));
				},
				r,
				s
			);
		return i.finish();
	}
}
const L0 = Fi.high(De.fromClass(I0, { decorations: (n) => n.decorations })),
	Uf = un.define([
		{ tag: y.meta, color: '#404740' },
		{ tag: y.link, textDecoration: 'underline' },
		{ tag: y.heading, textDecoration: 'underline', fontWeight: 'bold' },
		{ tag: y.emphasis, fontStyle: 'italic' },
		{ tag: y.strong, fontWeight: 'bold' },
		{ tag: y.strikethrough, textDecoration: 'line-through' },
		{ tag: y.keyword, color: '#708' },
		{
			tag: [y.atom, y.bool, y.url, y.contentSeparator, y.labelName],
			color: '#219'
		},
		{ tag: [y.literal, y.inserted], color: '#164' },
		{ tag: [y.string, y.deleted], color: '#a11' },
		{ tag: [y.regexp, y.escape, y.special(y.string)], color: '#e40' },
		{ tag: y.definition(y.variableName), color: '#00f' },
		{ tag: y.local(y.variableName), color: '#30a' },
		{ tag: [y.typeName, y.namespace], color: '#085' },
		{ tag: y.className, color: '#167' },
		{ tag: [y.special(y.variableName), y.macroName], color: '#256' },
		{ tag: y.definition(y.propertyName), color: '#00c' },
		{ tag: y.comment, color: '#940' },
		{ tag: y.invalid, color: '#f00' }
	]),
	U0 = j.baseTheme({
		'&.cm-focused .cm-matchingBracket': { backgroundColor: '#328c8252' },
		'&.cm-focused .cm-nonmatchingBracket': { backgroundColor: '#bb555544' }
	}),
	Gf = 1e4,
	Hf = '()[]{}',
	Jf = X.define({
		combine(n) {
			return Bt(n, {
				afterCursor: !0,
				brackets: Hf,
				maxScanDistance: Gf,
				renderMatch: J0
			});
		}
	}),
	G0 = I.mark({ class: 'cm-matchingBracket' }),
	H0 = I.mark({ class: 'cm-nonmatchingBracket' });
function J0(n) {
	let e = [],
		t = n.matched ? G0 : H0;
	return (
		e.push(t.range(n.start.from, n.start.to)), n.end && e.push(t.range(n.end.from, n.end.to)), e
	);
}
const K0 = Be.define({
		create() {
			return I.none;
		},
		update(n, e) {
			if (!e.docChanged && !e.selection) return n;
			let t = [],
				i = e.state.facet(Jf);
			for (let r of e.state.selection.ranges) {
				if (!r.empty) continue;
				let s =
					Rt(e.state, r.head, -1, i) ||
					(r.head > 0 && Rt(e.state, r.head - 1, 1, i)) ||
					(i.afterCursor &&
						(Rt(e.state, r.head, 1, i) ||
							(r.head < e.state.doc.length && Rt(e.state, r.head + 1, -1, i))));
				s && (t = t.concat(i.renderMatch(s, e.state)));
			}
			return I.set(t, !0);
		},
		provide: (n) => j.decorations.from(n)
	}),
	e1 = [K0, U0];
function Kf(n = {}) {
	return [Jf.of(n), e1];
}
const t1 = new ne();
function cl(n, e, t) {
	let i = n.prop(e < 0 ? ne.openedBy : ne.closedBy);
	if (i) return i;
	if (n.name.length == 1) {
		let r = t.indexOf(n.name);
		if (r > -1 && r % 2 == (e < 0 ? 1 : 0)) return [t[r + e]];
	}
	return null;
}
function fl(n) {
	let e = n.type.prop(t1);
	return e ? e(n.node) : n;
}
function Rt(n, e, t, i = {}) {
	let r = i.maxScanDistance || Gf,
		s = i.brackets || Hf,
		o = ze(n),
		l = o.resolveInner(e, t);
	for (let a = l; a; a = a.parent) {
		let u = cl(a.type, t, s);
		if (u && a.from < a.to) {
			let h = fl(a);
			if (h && (t > 0 ? e >= h.from && e < h.to : e > h.from && e <= h.to))
				return i1(n, e, t, a, h, u, s);
		}
	}
	return n1(n, e, t, o, l.type, r, s);
}
function i1(n, e, t, i, r, s, o) {
	let l = i.parent,
		a = { from: r.from, to: r.to },
		u = 0,
		h = l == null ? void 0 : l.cursor();
	if (h && (t < 0 ? h.childBefore(i.from) : h.childAfter(i.to)))
		do
			if (t < 0 ? h.to <= i.from : h.from >= i.to) {
				if (u == 0 && s.indexOf(h.type.name) > -1 && h.from < h.to) {
					let c = fl(h);
					return {
						start: a,
						end: c ? { from: c.from, to: c.to } : void 0,
						matched: !0
					};
				} else if (cl(h.type, t, o)) u++;
				else if (cl(h.type, -t, o)) {
					if (u == 0) {
						let c = fl(h);
						return {
							start: a,
							end: c && c.from < c.to ? { from: c.from, to: c.to } : void 0,
							matched: !1
						};
					}
					u--;
				}
			}
		while (t < 0 ? h.prevSibling() : h.nextSibling());
	return { start: a, matched: !1 };
}
function n1(n, e, t, i, r, s, o) {
	let l = t < 0 ? n.sliceDoc(e - 1, e) : n.sliceDoc(e, e + 1),
		a = o.indexOf(l);
	if (a < 0 || (a % 2 == 0) != t > 0) return null;
	let u = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e },
		h = n.doc.iterRange(e, t > 0 ? n.doc.length : 0),
		c = 0;
	for (let f = 0; !h.next().done && f <= s; ) {
		let d = h.value;
		t < 0 && (f += d.length);
		let p = e + f * t;
		for (let O = t > 0 ? 0 : d.length - 1, m = t > 0 ? d.length : -1; O != m; O += t) {
			let g = o.indexOf(d[O]);
			if (!(g < 0 || i.resolveInner(p + O, 1).type != r))
				if ((g % 2 == 0) == t > 0) c++;
				else {
					if (c == 1)
						return {
							start: u,
							end: { from: p + O, to: p + O + 1 },
							matched: g >> 1 == a >> 1
						};
					c--;
				}
		}
		t > 0 && (f += d.length);
	}
	return h.done ? { start: u, matched: !1 } : null;
}
const r1 = Object.create(null),
	Wu = [Je.none],
	zu = [],
	Xu = Object.create(null),
	s1 = Object.create(null);
for (let [n, e] of [
	['variable', 'variableName'],
	['variable-2', 'variableName.special'],
	['string-2', 'string.special'],
	['def', 'variableName.definition'],
	['tag', 'tagName'],
	['attribute', 'attributeName'],
	['type', 'typeName'],
	['builtin', 'variableName.standard'],
	['qualifier', 'modifier'],
	['error', 'invalid'],
	['header', 'heading'],
	['property', 'propertyName']
])
	s1[n] = o1(r1, e);
function lo(n, e) {
	zu.indexOf(n) > -1 || (zu.push(n), console.warn(e));
}
function o1(n, e) {
	let t = [];
	for (let l of e.split(' ')) {
		let a = [];
		for (let u of l.split('.')) {
			let h = n[u] || y[u];
			h
				? typeof h == 'function'
					? a.length
						? (a = a.map(h))
						: lo(u, `Modifier ${u} used at start of tag`)
					: a.length
						? lo(u, `Tag ${u} used as modifier`)
						: (a = Array.isArray(h) ? h : [h])
				: lo(u, `Unknown highlighting tag ${u}`);
		}
		for (let u of a) t.push(u);
	}
	if (!t.length) return 0;
	let i = e.replace(/ /g, '_'),
		r = i + ' ' + t.map((l) => l.id),
		s = Xu[r];
	if (s) return s.id;
	let o = (Xu[r] = Je.define({
		id: Wu.length,
		name: i,
		props: [Zf({ [i]: t })]
	}));
	return Wu.push(o), o.id;
}
me.RTL, me.LTR;
const l1 = (n) => {
	let { state: e } = n,
		t = e.doc.lineAt(e.selection.main.from),
		i = Gl(n.state, t.from);
	return i.line ? a1(n) : i.block ? h1(n) : !1;
};
function Ul(n, e) {
	return ({ state: t, dispatch: i }) => {
		if (t.readOnly) return !1;
		let r = n(e, t);
		return r ? (i(t.update(r)), !0) : !1;
	};
}
const a1 = Ul(d1, 0),
	u1 = Ul(ed, 0),
	h1 = Ul((n, e) => ed(n, e, f1(e)), 0);
function Gl(n, e) {
	let t = n.languageDataAt('commentTokens', e, 1);
	return t.length ? t[0] : {};
}
const yn = 50;
function c1(n, { open: e, close: t }, i, r) {
	let s = n.sliceDoc(i - yn, i),
		o = n.sliceDoc(r, r + yn),
		l = /\s*$/.exec(s)[0].length,
		a = /^\s*/.exec(o)[0].length,
		u = s.length - l;
	if (s.slice(u - e.length, u) == e && o.slice(a, a + t.length) == t)
		return {
			open: { pos: i - l, margin: l && 1 },
			close: { pos: r + a, margin: a && 1 }
		};
	let h, c;
	r - i <= 2 * yn
		? (h = c = n.sliceDoc(i, r))
		: ((h = n.sliceDoc(i, i + yn)), (c = n.sliceDoc(r - yn, r)));
	let f = /^\s*/.exec(h)[0].length,
		d = /\s*$/.exec(c)[0].length,
		p = c.length - d - t.length;
	return h.slice(f, f + e.length) == e && c.slice(p, p + t.length) == t
		? {
				open: {
					pos: i + f + e.length,
					margin: /\s/.test(h.charAt(f + e.length)) ? 1 : 0
				},
				close: {
					pos: r - d - t.length,
					margin: /\s/.test(c.charAt(p - 1)) ? 1 : 0
				}
			}
		: null;
}
function f1(n) {
	let e = [];
	for (let t of n.selection.ranges) {
		let i = n.doc.lineAt(t.from),
			r = t.to <= i.to ? i : n.doc.lineAt(t.to);
		r.from > i.from && r.from == t.to && (r = t.to == i.to + 1 ? i : n.doc.lineAt(t.to - 1));
		let s = e.length - 1;
		s >= 0 && e[s].to > i.from
			? (e[s].to = r.to)
			: e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: r.to });
	}
	return e;
}
function ed(n, e, t = e.selection.ranges) {
	let i = t.map((s) => Gl(e, s.from).block);
	if (!i.every((s) => s)) return null;
	let r = t.map((s, o) => c1(e, i[o], s.from, s.to));
	if (n != 2 && !r.every((s) => s))
		return {
			changes: e.changes(
				t.map((s, o) =>
					r[o]
						? []
						: [
								{ from: s.from, insert: i[o].open + ' ' },
								{ from: s.to, insert: ' ' + i[o].close }
							]
				)
			)
		};
	if (n != 1 && r.some((s) => s)) {
		let s = [];
		for (let o = 0, l; o < r.length; o++)
			if ((l = r[o])) {
				let a = i[o],
					{ open: u, close: h } = l;
				s.push(
					{ from: u.pos - a.open.length, to: u.pos + u.margin },
					{ from: h.pos - h.margin, to: h.pos + a.close.length }
				);
			}
		return { changes: s };
	}
	return null;
}
function d1(n, e, t = e.selection.ranges) {
	let i = [],
		r = -1;
	for (let { from: s, to: o } of t) {
		let l = i.length,
			a = 1e9,
			u = Gl(e, s).line;
		if (u) {
			for (let h = s; h <= o; ) {
				let c = e.doc.lineAt(h);
				if (c.from > r && (s == o || o > c.from)) {
					r = c.from;
					let f = /^\s*/.exec(c.text)[0].length,
						d = f == c.length,
						p = c.text.slice(f, f + u.length) == u ? f : -1;
					f < c.text.length && f < a && (a = f),
						i.push({
							line: c,
							comment: p,
							token: u,
							indent: f,
							empty: d,
							single: !1
						});
				}
				h = c.to + 1;
			}
			if (a < 1e9)
				for (let h = l; h < i.length; h++) i[h].indent < i[h].line.text.length && (i[h].indent = a);
			i.length == l + 1 && (i[l].single = !0);
		}
	}
	if (n != 2 && i.some((s) => s.comment < 0 && (!s.empty || s.single))) {
		let s = [];
		for (let { line: l, token: a, indent: u, empty: h, single: c } of i)
			(c || !h) && s.push({ from: l.from + u, insert: a + ' ' });
		let o = e.changes(s);
		return { changes: o, selection: e.selection.map(o, 1) };
	} else if (n != 1 && i.some((s) => s.comment >= 0)) {
		let s = [];
		for (let { line: o, comment: l, token: a } of i)
			if (l >= 0) {
				let u = o.from + l,
					h = u + a.length;
				o.text[h - o.from] == ' ' && h++, s.push({ from: u, to: h });
			}
		return { changes: s };
	}
	return null;
}
const dl = Mt.define(),
	p1 = Mt.define(),
	O1 = X.define(),
	td = X.define({
		combine(n) {
			return Bt(
				n,
				{ minDepth: 100, newGroupDelay: 500, joinToEvent: (e, t) => t },
				{
					minDepth: Math.max,
					newGroupDelay: Math.min,
					joinToEvent: (e, t) => (i, r) => e(i, r) || t(i, r)
				}
			);
		}
	}),
	id = Be.define({
		create() {
			return Tt.empty;
		},
		update(n, e) {
			let t = e.state.facet(td),
				i = e.annotation(dl);
			if (i) {
				let a = Ge.fromTransaction(e, i.selection),
					u = i.side,
					h = u == 0 ? n.undone : n.done;
				return (
					a ? (h = is(h, h.length, t.minDepth, a)) : (h = od(h, e.startState.selection)),
					new Tt(u == 0 ? i.rest : h, u == 0 ? h : i.rest)
				);
			}
			let r = e.annotation(p1);
			if (
				((r == 'full' || r == 'before') && (n = n.isolate()), e.annotation(Ce.addToHistory) === !1)
			)
				return e.changes.empty ? n : n.addMapping(e.changes.desc);
			let s = Ge.fromTransaction(e),
				o = e.annotation(Ce.time),
				l = e.annotation(Ce.userEvent);
			return (
				s
					? (n = n.addChanges(s, o, l, t, e))
					: e.selection && (n = n.addSelection(e.startState.selection, o, l, t.newGroupDelay)),
				(r == 'full' || r == 'after') && (n = n.isolate()),
				n
			);
		},
		toJSON(n) {
			return {
				done: n.done.map((e) => e.toJSON()),
				undone: n.undone.map((e) => e.toJSON())
			};
		},
		fromJSON(n) {
			return new Tt(n.done.map(Ge.fromJSON), n.undone.map(Ge.fromJSON));
		}
	});
function nd(n = {}) {
	return [
		id,
		td.of(n),
		j.domEventHandlers({
			beforeinput(e, t) {
				let i = e.inputType == 'historyUndo' ? rd : e.inputType == 'historyRedo' ? pl : null;
				return i ? (e.preventDefault(), i(t)) : !1;
			}
		})
	];
}
function vs(n, e) {
	return function ({ state: t, dispatch: i }) {
		if (!e && t.readOnly) return !1;
		let r = t.field(id, !1);
		if (!r) return !1;
		let s = r.pop(n, t, e);
		return s ? (i(s), !0) : !1;
	};
}
const rd = vs(0, !1),
	pl = vs(1, !1),
	m1 = vs(0, !0),
	g1 = vs(1, !0);
class Ge {
	constructor(e, t, i, r, s) {
		(this.changes = e),
			(this.effects = t),
			(this.mapped = i),
			(this.startSelection = r),
			(this.selectionsAfter = s);
	}
	setSelAfter(e) {
		return new Ge(this.changes, this.effects, this.mapped, this.startSelection, e);
	}
	toJSON() {
		var e, t, i;
		return {
			changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
			mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
			startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
			selectionsAfter: this.selectionsAfter.map((r) => r.toJSON())
		};
	}
	static fromJSON(e) {
		return new Ge(
			e.changes && ve.fromJSON(e.changes),
			[],
			e.mapped && Ft.fromJSON(e.mapped),
			e.startSelection && Z.fromJSON(e.startSelection),
			e.selectionsAfter.map(Z.fromJSON)
		);
	}
	static fromTransaction(e, t) {
		let i = lt;
		for (let r of e.startState.facet(O1)) {
			let s = r(e);
			s.length && (i = i.concat(s));
		}
		return !i.length && e.changes.empty
			? null
			: new Ge(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, lt);
	}
	static selection(e) {
		return new Ge(void 0, lt, void 0, void 0, e);
	}
}
function is(n, e, t, i) {
	let r = e + 1 > t + 20 ? e - t - 1 : 0,
		s = n.slice(r, e);
	return s.push(i), s;
}
function y1(n, e) {
	let t = [],
		i = !1;
	return (
		n.iterChangedRanges((r, s) => t.push(r, s)),
		e.iterChangedRanges((r, s, o, l) => {
			for (let a = 0; a < t.length; ) {
				let u = t[a++],
					h = t[a++];
				l >= u && o <= h && (i = !0);
			}
		}),
		i
	);
}
function b1(n, e) {
	return (
		n.ranges.length == e.ranges.length &&
		n.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0
	);
}
function sd(n, e) {
	return n.length ? (e.length ? n.concat(e) : n) : e;
}
const lt = [],
	x1 = 200;
function od(n, e) {
	if (n.length) {
		let t = n[n.length - 1],
			i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - x1));
		return i.length && i[i.length - 1].eq(e)
			? n
			: (i.push(e), is(n, n.length - 1, 1e9, t.setSelAfter(i)));
	} else return [Ge.selection([e])];
}
function D1(n) {
	let e = n[n.length - 1],
		t = n.slice();
	return (
		(t[n.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1))), t
	);
}
function ao(n, e) {
	if (!n.length) return n;
	let t = n.length,
		i = lt;
	for (; t; ) {
		let r = S1(n[t - 1], e, i);
		if ((r.changes && !r.changes.empty) || r.effects.length) {
			let s = n.slice(0, t);
			return (s[t - 1] = r), s;
		} else (e = r.mapped), t--, (i = r.selectionsAfter);
	}
	return i.length ? [Ge.selection(i)] : lt;
}
function S1(n, e, t) {
	let i = sd(n.selectionsAfter.length ? n.selectionsAfter.map((l) => l.map(e)) : lt, t);
	if (!n.changes) return Ge.selection(i);
	let r = n.changes.map(e),
		s = e.mapDesc(n.changes, !0),
		o = n.mapped ? n.mapped.composeDesc(s) : s;
	return new Ge(r, te.mapEffects(n.effects, e), o, n.startSelection.map(s), i);
}
const w1 = /^(input\.type|delete)($|\.)/;
class Tt {
	constructor(e, t, i = 0, r = void 0) {
		(this.done = e), (this.undone = t), (this.prevTime = i), (this.prevUserEvent = r);
	}
	isolate() {
		return this.prevTime ? new Tt(this.done, this.undone) : this;
	}
	addChanges(e, t, i, r, s) {
		let o = this.done,
			l = o[o.length - 1];
		return (
			l &&
			l.changes &&
			!l.changes.empty &&
			e.changes &&
			(!i || w1.test(i)) &&
			((!l.selectionsAfter.length &&
				t - this.prevTime < r.newGroupDelay &&
				r.joinToEvent(s, y1(l.changes, e.changes))) ||
				i == 'input.type.compose')
				? (o = is(
						o,
						o.length - 1,
						r.minDepth,
						new Ge(
							e.changes.compose(l.changes),
							sd(te.mapEffects(e.effects, l.changes), l.effects),
							l.mapped,
							l.startSelection,
							lt
						)
					))
				: (o = is(o, o.length, r.minDepth, e)),
			new Tt(o, lt, t, i)
		);
	}
	addSelection(e, t, i, r) {
		let s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : lt;
		return s.length > 0 &&
			t - this.prevTime < r &&
			i == this.prevUserEvent &&
			i &&
			/^select($|\.)/.test(i) &&
			b1(s[s.length - 1], e)
			? this
			: new Tt(od(this.done, e), this.undone, t, i);
	}
	addMapping(e) {
		return new Tt(ao(this.done, e), ao(this.undone, e), this.prevTime, this.prevUserEvent);
	}
	pop(e, t, i) {
		let r = e == 0 ? this.done : this.undone;
		if (r.length == 0) return null;
		let s = r[r.length - 1],
			o = s.selectionsAfter[0] || t.selection;
		if (i && s.selectionsAfter.length)
			return t.update({
				selection: s.selectionsAfter[s.selectionsAfter.length - 1],
				annotations: dl.of({ side: e, rest: D1(r), selection: o }),
				userEvent: e == 0 ? 'select.undo' : 'select.redo',
				scrollIntoView: !0
			});
		if (s.changes) {
			let l = r.length == 1 ? lt : r.slice(0, r.length - 1);
			return (
				s.mapped && (l = ao(l, s.mapped)),
				t.update({
					changes: s.changes,
					selection: s.startSelection,
					effects: s.effects,
					annotations: dl.of({ side: e, rest: l, selection: o }),
					filter: !1,
					userEvent: e == 0 ? 'undo' : 'redo',
					scrollIntoView: !0
				})
			);
		} else return null;
	}
}
Tt.empty = new Tt(lt, lt);
const ld = [
	{ key: 'Mod-z', run: rd, preventDefault: !0 },
	{ key: 'Mod-y', mac: 'Mod-Shift-z', run: pl, preventDefault: !0 },
	{ linux: 'Ctrl-Shift-z', run: pl, preventDefault: !0 },
	{ key: 'Mod-u', run: m1, preventDefault: !0 },
	{ key: 'Alt-u', mac: 'Mod-Shift-u', run: g1, preventDefault: !0 }
];
function hn(n, e) {
	return Z.create(n.ranges.map(e), n.mainIndex);
}
function jt(n, e) {
	return n.update({ selection: e, scrollIntoView: !0, userEvent: 'select' });
}
function wt({ state: n, dispatch: e }, t) {
	let i = hn(n.selection, t);
	return i.eq(n.selection, !0) ? !1 : (e(jt(n, i)), !0);
}
function Qs(n, e) {
	return Z.cursor(e ? n.to : n.from);
}
function ad(n, e) {
	return wt(n, (t) => (t.empty ? n.moveByChar(t, e) : Qs(t, e)));
}
function Xe(n) {
	return n.textDirectionAt(n.state.selection.main.head) == me.LTR;
}
const ud = (n) => ad(n, !Xe(n)),
	hd = (n) => ad(n, Xe(n));
function cd(n, e) {
	return wt(n, (t) => (t.empty ? n.moveByGroup(t, e) : Qs(t, e)));
}
const k1 = (n) => cd(n, !Xe(n)),
	v1 = (n) => cd(n, Xe(n));
function Q1(n, e, t) {
	if (e.type.prop(t)) return !0;
	let i = e.to - e.from;
	return (i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(e.from, e.to)))) || e.firstChild;
}
function Cs(n, e, t) {
	let i = ze(n).resolveInner(e.head),
		r = t ? ne.closedBy : ne.openedBy;
	for (let a = e.head; ; ) {
		let u = t ? i.childAfter(a) : i.childBefore(a);
		if (!u) break;
		Q1(n, u, r) ? (i = u) : (a = t ? u.to : u.from);
	}
	let s = i.type.prop(r),
		o,
		l;
	return (
		s && (o = t ? Rt(n, i.from, 1) : Rt(n, i.to, -1)) && o.matched
			? (l = t ? o.end.to : o.end.from)
			: (l = t ? i.to : i.from),
		Z.cursor(l, t ? -1 : 1)
	);
}
const C1 = (n) => wt(n, (e) => Cs(n.state, e, !Xe(n))),
	P1 = (n) => wt(n, (e) => Cs(n.state, e, Xe(n)));
function fd(n, e) {
	return wt(n, (t) => {
		if (!t.empty) return Qs(t, e);
		let i = n.moveVertically(t, e);
		return i.head != t.head ? i : n.moveToLineBoundary(t, e);
	});
}
const dd = (n) => fd(n, !1),
	pd = (n) => fd(n, !0);
function Od(n) {
	let e = n.scrollDOM.clientHeight < n.scrollDOM.scrollHeight - 2,
		t = 0,
		i = 0,
		r;
	if (e) {
		for (let s of n.state.facet(j.scrollMargins)) {
			let o = s(n);
			o != null && o.top && (t = Math.max(o == null ? void 0 : o.top, t)),
				o != null && o.bottom && (i = Math.max(o == null ? void 0 : o.bottom, i));
		}
		r = n.scrollDOM.clientHeight - t - i;
	} else r = (n.dom.ownerDocument.defaultView || window).innerHeight;
	return {
		marginTop: t,
		marginBottom: i,
		selfScroll: e,
		height: Math.max(n.defaultLineHeight, r - 5)
	};
}
function md(n, e) {
	let t = Od(n),
		{ state: i } = n,
		r = hn(i.selection, (o) => (o.empty ? n.moveVertically(o, e, t.height) : Qs(o, e)));
	if (r.eq(i.selection)) return !1;
	let s;
	if (t.selfScroll) {
		let o = n.coordsAtPos(i.selection.main.head),
			l = n.scrollDOM.getBoundingClientRect(),
			a = l.top + t.marginTop,
			u = l.bottom - t.marginBottom;
		o &&
			o.top > a &&
			o.bottom < u &&
			(s = j.scrollIntoView(r.main.head, { y: 'start', yMargin: o.top - a }));
	}
	return n.dispatch(jt(i, r), { effects: s }), !0;
}
const qu = (n) => md(n, !1),
	Ol = (n) => md(n, !0);
function mi(n, e, t) {
	let i = n.lineBlockAt(e.head),
		r = n.moveToLineBoundary(e, t);
	if (
		(r.head == e.head && r.head != (t ? i.to : i.from) && (r = n.moveToLineBoundary(e, t, !1)),
		!t && r.head == i.from && i.length)
	) {
		let s = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
		s && e.head != i.from + s && (r = Z.cursor(i.from + s));
	}
	return r;
}
const A1 = (n) => wt(n, (e) => mi(n, e, !0)),
	$1 = (n) => wt(n, (e) => mi(n, e, !1)),
	E1 = (n) => wt(n, (e) => mi(n, e, !Xe(n))),
	Z1 = (n) => wt(n, (e) => mi(n, e, Xe(n))),
	R1 = (n) => wt(n, (e) => Z.cursor(n.lineBlockAt(e.head).from, 1)),
	T1 = (n) => wt(n, (e) => Z.cursor(n.lineBlockAt(e.head).to, -1));
function F1(n, e, t) {
	let i = !1,
		r = hn(n.selection, (s) => {
			let o =
				Rt(n, s.head, -1) ||
				Rt(n, s.head, 1) ||
				(s.head > 0 && Rt(n, s.head - 1, 1)) ||
				(s.head < n.doc.length && Rt(n, s.head + 1, -1));
			if (!o || !o.end) return s;
			i = !0;
			let l = o.start.from == s.head ? o.end.to : o.end.from;
			return Z.cursor(l);
		});
	return i ? (e(jt(n, r)), !0) : !1;
}
const M1 = ({ state: n, dispatch: e }) => F1(n, e);
function ct(n, e) {
	let t = hn(n.state.selection, (i) => {
		let r = e(i);
		return Z.range(i.anchor, r.head, r.goalColumn, r.bidiLevel || void 0);
	});
	return t.eq(n.state.selection) ? !1 : (n.dispatch(jt(n.state, t)), !0);
}
function gd(n, e) {
	return ct(n, (t) => n.moveByChar(t, e));
}
const yd = (n) => gd(n, !Xe(n)),
	bd = (n) => gd(n, Xe(n));
function xd(n, e) {
	return ct(n, (t) => n.moveByGroup(t, e));
}
const B1 = (n) => xd(n, !Xe(n)),
	j1 = (n) => xd(n, Xe(n)),
	W1 = (n) => ct(n, (e) => Cs(n.state, e, !Xe(n))),
	z1 = (n) => ct(n, (e) => Cs(n.state, e, Xe(n)));
function Dd(n, e) {
	return ct(n, (t) => n.moveVertically(t, e));
}
const Sd = (n) => Dd(n, !1),
	wd = (n) => Dd(n, !0);
function kd(n, e) {
	return ct(n, (t) => n.moveVertically(t, e, Od(n).height));
}
const _u = (n) => kd(n, !1),
	Yu = (n) => kd(n, !0),
	X1 = (n) => ct(n, (e) => mi(n, e, !0)),
	q1 = (n) => ct(n, (e) => mi(n, e, !1)),
	_1 = (n) => ct(n, (e) => mi(n, e, !Xe(n))),
	Y1 = (n) => ct(n, (e) => mi(n, e, Xe(n))),
	N1 = (n) => ct(n, (e) => Z.cursor(n.lineBlockAt(e.head).from)),
	V1 = (n) => ct(n, (e) => Z.cursor(n.lineBlockAt(e.head).to)),
	Nu = ({ state: n, dispatch: e }) => (e(jt(n, { anchor: 0 })), !0),
	Vu = ({ state: n, dispatch: e }) => (e(jt(n, { anchor: n.doc.length })), !0),
	Iu = ({ state: n, dispatch: e }) => (e(jt(n, { anchor: n.selection.main.anchor, head: 0 })), !0),
	Lu = ({ state: n, dispatch: e }) => (
		e(jt(n, { anchor: n.selection.main.anchor, head: n.doc.length })), !0
	),
	I1 = ({ state: n, dispatch: e }) => (
		e(
			n.update({
				selection: { anchor: 0, head: n.doc.length },
				userEvent: 'select'
			})
		),
		!0
	),
	L1 = ({ state: n, dispatch: e }) => {
		let t = Ps(n).map(({ from: i, to: r }) => Z.range(i, Math.min(r + 1, n.doc.length)));
		return e(n.update({ selection: Z.create(t), userEvent: 'select' })), !0;
	},
	U1 = ({ state: n, dispatch: e }) => {
		let t = hn(n.selection, (i) => {
			let r = ze(n),
				s = r.resolveStack(i.from, 1);
			if (i.empty) {
				let o = r.resolveStack(i.from, -1);
				o.node.from >= s.node.from && o.node.to <= s.node.to && (s = o);
			}
			for (let o = s; o; o = o.next) {
				let { node: l } = o;
				if (((l.from < i.from && l.to >= i.to) || (l.to > i.to && l.from <= i.from)) && o.next)
					return Z.range(l.to, l.from);
			}
			return i;
		});
		return t.eq(n.selection) ? !1 : (e(jt(n, t)), !0);
	},
	G1 = ({ state: n, dispatch: e }) => {
		let t = n.selection,
			i = null;
		return (
			t.ranges.length > 1
				? (i = Z.create([t.main]))
				: t.main.empty || (i = Z.create([Z.cursor(t.main.head)])),
			i ? (e(jt(n, i)), !0) : !1
		);
	};
function tr(n, e) {
	if (n.state.readOnly) return !1;
	let t = 'delete.selection',
		{ state: i } = n,
		r = i.changeByRange((s) => {
			let { from: o, to: l } = s;
			if (o == l) {
				let a = e(s);
				a < o
					? ((t = 'delete.backward'), (a = Sr(n, a, !1)))
					: a > o && ((t = 'delete.forward'), (a = Sr(n, a, !0))),
					(o = Math.min(o, a)),
					(l = Math.max(l, a));
			} else (o = Sr(n, o, !1)), (l = Sr(n, l, !0));
			return o == l
				? { range: s }
				: {
						changes: { from: o, to: l },
						range: Z.cursor(o, o < s.head ? -1 : 1)
					};
		});
	return r.changes.empty
		? !1
		: (n.dispatch(
				i.update(r, {
					scrollIntoView: !0,
					userEvent: t,
					effects: t == 'delete.selection' ? j.announce.of(i.phrase('Selection deleted')) : void 0
				})
			),
			!0);
}
function Sr(n, e, t) {
	if (n instanceof j)
		for (let i of n.state.facet(j.atomicRanges).map((r) => r(n)))
			i.between(e, e, (r, s) => {
				r < e && s > e && (e = t ? s : r);
			});
	return e;
}
const vd = (n, e, t) =>
		tr(n, (i) => {
			let r = i.from,
				{ state: s } = n,
				o = s.doc.lineAt(r),
				l,
				a;
			if (
				t &&
				!e &&
				r > o.from &&
				r < o.from + 200 &&
				!/[^ \t]/.test((l = o.text.slice(0, r - o.from)))
			) {
				if (l[l.length - 1] == '	') return r - 1;
				let u = an(l, s.tabSize),
					h = u % Kr(s) || Kr(s);
				for (let c = 0; c < h && l[l.length - 1 - c] == ' '; c++) r--;
				a = r;
			} else
				(a = Me(o.text, r - o.from, e, e) + o.from),
					a == r && o.number != (e ? s.doc.lines : 1)
						? (a += e ? 1 : -1)
						: !e &&
							/[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, r - o.from)) &&
							(a = Me(o.text, a - o.from, !1, !1) + o.from);
			return a;
		}),
	ml = (n) => vd(n, !1, !0),
	Qd = (n) => vd(n, !0, !1),
	Cd = (n, e) =>
		tr(n, (t) => {
			let i = t.head,
				{ state: r } = n,
				s = r.doc.lineAt(i),
				o = r.charCategorizer(i);
			for (let l = null; ; ) {
				if (i == (e ? s.to : s.from)) {
					i == t.head && s.number != (e ? r.doc.lines : 1) && (i += e ? 1 : -1);
					break;
				}
				let a = Me(s.text, i - s.from, e) + s.from,
					u = s.text.slice(Math.min(i, a) - s.from, Math.max(i, a) - s.from),
					h = o(u);
				if (l != null && h != l) break;
				(u != ' ' || i != t.head) && (l = h), (i = a);
			}
			return i;
		}),
	Pd = (n) => Cd(n, !1),
	H1 = (n) => Cd(n, !0),
	J1 = (n) =>
		tr(n, (e) => {
			let t = n.lineBlockAt(e.head).to;
			return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
		}),
	K1 = (n) =>
		tr(n, (e) => {
			let t = n.moveToLineBoundary(e, !1).head;
			return e.head > t ? t : Math.max(0, e.head - 1);
		}),
	ey = (n) =>
		tr(n, (e) => {
			let t = n.moveToLineBoundary(e, !0).head;
			return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
		}),
	ty = ({ state: n, dispatch: e }) => {
		if (n.readOnly) return !1;
		let t = n.changeByRange((i) => ({
			changes: { from: i.from, to: i.to, insert: ae.of(['', '']) },
			range: Z.cursor(i.from)
		}));
		return e(n.update(t, { scrollIntoView: !0, userEvent: 'input' })), !0;
	},
	iy = ({ state: n, dispatch: e }) => {
		if (n.readOnly) return !1;
		let t = n.changeByRange((i) => {
			if (!i.empty || i.from == 0 || i.from == n.doc.length) return { range: i };
			let r = i.from,
				s = n.doc.lineAt(r),
				o = r == s.from ? r - 1 : Me(s.text, r - s.from, !1) + s.from,
				l = r == s.to ? r + 1 : Me(s.text, r - s.from, !0) + s.from;
			return {
				changes: {
					from: o,
					to: l,
					insert: n.doc.slice(r, l).append(n.doc.slice(o, r))
				},
				range: Z.cursor(l)
			};
		});
		return t.changes.empty
			? !1
			: (e(n.update(t, { scrollIntoView: !0, userEvent: 'move.character' })), !0);
	};
function Ps(n) {
	let e = [],
		t = -1;
	for (let i of n.selection.ranges) {
		let r = n.doc.lineAt(i.from),
			s = n.doc.lineAt(i.to);
		if ((!i.empty && i.to == s.from && (s = n.doc.lineAt(i.to - 1)), t >= r.number)) {
			let o = e[e.length - 1];
			(o.to = s.to), o.ranges.push(i);
		} else e.push({ from: r.from, to: s.to, ranges: [i] });
		t = s.number + 1;
	}
	return e;
}
function Ad(n, e, t) {
	if (n.readOnly) return !1;
	let i = [],
		r = [];
	for (let s of Ps(n)) {
		if (t ? s.to == n.doc.length : s.from == 0) continue;
		let o = n.doc.lineAt(t ? s.to + 1 : s.from - 1),
			l = o.length + 1;
		if (t) {
			i.push({ from: s.to, to: o.to }, { from: s.from, insert: o.text + n.lineBreak });
			for (let a of s.ranges)
				r.push(Z.range(Math.min(n.doc.length, a.anchor + l), Math.min(n.doc.length, a.head + l)));
		} else {
			i.push({ from: o.from, to: s.from }, { from: s.to, insert: n.lineBreak + o.text });
			for (let a of s.ranges) r.push(Z.range(a.anchor - l, a.head - l));
		}
	}
	return i.length
		? (e(
				n.update({
					changes: i,
					scrollIntoView: !0,
					selection: Z.create(r, n.selection.mainIndex),
					userEvent: 'move.line'
				})
			),
			!0)
		: !1;
}
const ny = ({ state: n, dispatch: e }) => Ad(n, e, !1),
	ry = ({ state: n, dispatch: e }) => Ad(n, e, !0);
function $d(n, e, t) {
	if (n.readOnly) return !1;
	let i = [];
	for (let r of Ps(n))
		t
			? i.push({
					from: r.from,
					insert: n.doc.slice(r.from, r.to) + n.lineBreak
				})
			: i.push({ from: r.to, insert: n.lineBreak + n.doc.slice(r.from, r.to) });
	return e(n.update({ changes: i, scrollIntoView: !0, userEvent: 'input.copyline' })), !0;
}
const sy = ({ state: n, dispatch: e }) => $d(n, e, !1),
	oy = ({ state: n, dispatch: e }) => $d(n, e, !0),
	ly = (n) => {
		if (n.state.readOnly) return !1;
		let { state: e } = n,
			t = e.changes(
				Ps(e).map(
					({ from: r, to: s }) => (r > 0 ? r-- : s < e.doc.length && s++, { from: r, to: s })
				)
			),
			i = hn(e.selection, (r) => {
				let s;
				if (n.lineWrapping) {
					let o = n.lineBlockAt(r.head),
						l = n.coordsAtPos(r.head, r.assoc || 1);
					l && (s = o.bottom + n.documentTop - l.bottom + n.defaultLineHeight / 2);
				}
				return n.moveVertically(r, !0, s);
			}).map(t);
		return (
			n.dispatch({
				changes: t,
				selection: i,
				scrollIntoView: !0,
				userEvent: 'delete.line'
			}),
			!0
		);
	};
function ay(n, e) {
	if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(e - 1, e + 1))) return { from: e, to: e };
	let t = ze(n).resolveInner(e),
		i = t.childBefore(e),
		r = t.childAfter(e),
		s;
	return i &&
		r &&
		i.to <= e &&
		r.from >= e &&
		(s = i.type.prop(ne.closedBy)) &&
		s.indexOf(r.name) > -1 &&
		n.doc.lineAt(i.to).from == n.doc.lineAt(r.from).from &&
		!/\S/.test(n.sliceDoc(i.to, r.from))
		? { from: i.to, to: r.from }
		: null;
}
const Uu = Ed(!1),
	uy = Ed(!0);
function Ed(n) {
	return ({ state: e, dispatch: t }) => {
		if (e.readOnly) return !1;
		let i = e.changeByRange((r) => {
			let { from: s, to: o } = r,
				l = e.doc.lineAt(s),
				a = !n && s == o && ay(e, s);
			n && (s = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
			let u = new Ss(e, { simulateBreak: s, simulateDoubleBreak: !!a }),
				h = Il(u, s);
			for (
				h == null && (h = an(/^\s*/.exec(e.doc.lineAt(s).text)[0], e.tabSize));
				o < l.to && /\s/.test(l.text[o - l.from]);

			)
				o++;
			a
				? ({ from: s, to: o } = a)
				: s > l.from && s < l.from + 100 && !/\S/.test(l.text.slice(0, s)) && (s = l.from);
			let c = ['', Yn(e, h)];
			return (
				a && c.push(Yn(e, u.lineIndent(l.from, -1))),
				{
					changes: { from: s, to: o, insert: ae.of(c) },
					range: Z.cursor(s + 1 + c[1].length)
				}
			);
		});
		return t(e.update(i, { scrollIntoView: !0, userEvent: 'input' })), !0;
	};
}
function Hl(n, e) {
	let t = -1;
	return n.changeByRange((i) => {
		let r = [];
		for (let o = i.from; o <= i.to; ) {
			let l = n.doc.lineAt(o);
			l.number > t && (i.empty || i.to > l.from) && (e(l, r, i), (t = l.number)), (o = l.to + 1);
		}
		let s = n.changes(r);
		return {
			changes: r,
			range: Z.range(s.mapPos(i.anchor, 1), s.mapPos(i.head, 1))
		};
	});
}
const hy = ({ state: n, dispatch: e }) => {
		if (n.readOnly) return !1;
		let t = Object.create(null),
			i = new Ss(n, {
				overrideIndentation: (s) => {
					let o = t[s];
					return o ?? -1;
				}
			}),
			r = Hl(n, (s, o, l) => {
				let a = Il(i, s.from);
				if (a == null) return;
				/\S/.test(s.text) || (a = 0);
				let u = /^\s*/.exec(s.text)[0],
					h = Yn(n, a);
				(u != h || l.from < s.from + u.length) &&
					((t[s.from] = a), o.push({ from: s.from, to: s.from + u.length, insert: h }));
			});
		return r.changes.empty || e(n.update(r, { userEvent: 'indent' })), !0;
	},
	Zd = ({ state: n, dispatch: e }) =>
		n.readOnly
			? !1
			: (e(
					n.update(
						Hl(n, (t, i) => {
							i.push({ from: t.from, insert: n.facet(Ds) });
						}),
						{ userEvent: 'input.indent' }
					)
				),
				!0),
	Rd = ({ state: n, dispatch: e }) =>
		n.readOnly
			? !1
			: (e(
					n.update(
						Hl(n, (t, i) => {
							let r = /^\s*/.exec(t.text)[0];
							if (!r) return;
							let s = an(r, n.tabSize),
								o = 0,
								l = Yn(n, Math.max(0, s - Kr(n)));
							for (; o < r.length && o < l.length && r.charCodeAt(o) == l.charCodeAt(o); ) o++;
							i.push({
								from: t.from + o,
								to: t.from + r.length,
								insert: l.slice(o)
							});
						}),
						{ userEvent: 'delete.dedent' }
					)
				),
				!0),
	cy = (n) => (n.setTabFocusMode(), !0),
	fy = [
		{ key: 'Ctrl-b', run: ud, shift: yd, preventDefault: !0 },
		{ key: 'Ctrl-f', run: hd, shift: bd },
		{ key: 'Ctrl-p', run: dd, shift: Sd },
		{ key: 'Ctrl-n', run: pd, shift: wd },
		{ key: 'Ctrl-a', run: R1, shift: N1 },
		{ key: 'Ctrl-e', run: T1, shift: V1 },
		{ key: 'Ctrl-d', run: Qd },
		{ key: 'Ctrl-h', run: ml },
		{ key: 'Ctrl-k', run: J1 },
		{ key: 'Ctrl-Alt-h', run: Pd },
		{ key: 'Ctrl-o', run: ty },
		{ key: 'Ctrl-t', run: iy },
		{ key: 'Ctrl-v', run: Ol }
	],
	dy = [
		{ key: 'ArrowLeft', run: ud, shift: yd, preventDefault: !0 },
		{
			key: 'Mod-ArrowLeft',
			mac: 'Alt-ArrowLeft',
			run: k1,
			shift: B1,
			preventDefault: !0
		},
		{ mac: 'Cmd-ArrowLeft', run: E1, shift: _1, preventDefault: !0 },
		{ key: 'ArrowRight', run: hd, shift: bd, preventDefault: !0 },
		{
			key: 'Mod-ArrowRight',
			mac: 'Alt-ArrowRight',
			run: v1,
			shift: j1,
			preventDefault: !0
		},
		{ mac: 'Cmd-ArrowRight', run: Z1, shift: Y1, preventDefault: !0 },
		{ key: 'ArrowUp', run: dd, shift: Sd, preventDefault: !0 },
		{ mac: 'Cmd-ArrowUp', run: Nu, shift: Iu },
		{ mac: 'Ctrl-ArrowUp', run: qu, shift: _u },
		{ key: 'ArrowDown', run: pd, shift: wd, preventDefault: !0 },
		{ mac: 'Cmd-ArrowDown', run: Vu, shift: Lu },
		{ mac: 'Ctrl-ArrowDown', run: Ol, shift: Yu },
		{ key: 'PageUp', run: qu, shift: _u },
		{ key: 'PageDown', run: Ol, shift: Yu },
		{ key: 'Home', run: $1, shift: q1, preventDefault: !0 },
		{ key: 'Mod-Home', run: Nu, shift: Iu },
		{ key: 'End', run: A1, shift: X1, preventDefault: !0 },
		{ key: 'Mod-End', run: Vu, shift: Lu },
		{ key: 'Enter', run: Uu, shift: Uu },
		{ key: 'Mod-a', run: I1 },
		{ key: 'Backspace', run: ml, shift: ml },
		{ key: 'Delete', run: Qd },
		{ key: 'Mod-Backspace', mac: 'Alt-Backspace', run: Pd },
		{ key: 'Mod-Delete', mac: 'Alt-Delete', run: H1 },
		{ mac: 'Mod-Backspace', run: K1 },
		{ mac: 'Mod-Delete', run: ey }
	].concat(fy.map((n) => ({ mac: n.key, run: n.run, shift: n.shift }))),
	Td = [
		{ key: 'Alt-ArrowLeft', mac: 'Ctrl-ArrowLeft', run: C1, shift: W1 },
		{ key: 'Alt-ArrowRight', mac: 'Ctrl-ArrowRight', run: P1, shift: z1 },
		{ key: 'Alt-ArrowUp', run: ny },
		{ key: 'Shift-Alt-ArrowUp', run: sy },
		{ key: 'Alt-ArrowDown', run: ry },
		{ key: 'Shift-Alt-ArrowDown', run: oy },
		{ key: 'Escape', run: G1 },
		{ key: 'Mod-Enter', run: uy },
		{ key: 'Alt-l', mac: 'Ctrl-l', run: L1 },
		{ key: 'Mod-i', run: U1, preventDefault: !0 },
		{ key: 'Mod-[', run: Rd },
		{ key: 'Mod-]', run: Zd },
		{ key: 'Mod-Alt-\\', run: hy },
		{ key: 'Shift-Mod-k', run: ly },
		{ key: 'Shift-Mod-\\', run: M1 },
		{ key: 'Mod-/', run: l1 },
		{ key: 'Alt-A', run: u1 },
		{ key: 'Ctrl-m', mac: 'Shift-Alt-m', run: cy }
	].concat(dy),
	py = { key: 'Tab', run: Zd, shift: Rd };
function he() {
	var n = arguments[0];
	typeof n == 'string' && (n = document.createElement(n));
	var e = 1,
		t = arguments[1];
	if (t && typeof t == 'object' && t.nodeType == null && !Array.isArray(t)) {
		for (var i in t)
			if (Object.prototype.hasOwnProperty.call(t, i)) {
				var r = t[i];
				typeof r == 'string' ? n.setAttribute(i, r) : r != null && (n[i] = r);
			}
		e++;
	}
	for (; e < arguments.length; e++) Fd(n, arguments[e]);
	return n;
}
function Fd(n, e) {
	if (typeof e == 'string') n.appendChild(document.createTextNode(e));
	else if (e != null)
		if (e.nodeType != null) n.appendChild(e);
		else if (Array.isArray(e)) for (var t = 0; t < e.length; t++) Fd(n, e[t]);
		else throw new RangeError('Unsupported child node: ' + e);
}
const Gu = typeof String.prototype.normalize == 'function' ? (n) => n.normalize('NFKD') : (n) => n;
class on {
	constructor(e, t, i = 0, r = e.length, s, o) {
		(this.test = o),
			(this.value = { from: 0, to: 0 }),
			(this.done = !1),
			(this.matches = []),
			(this.buffer = ''),
			(this.bufferPos = 0),
			(this.iter = e.iterRange(i, r)),
			(this.bufferStart = i),
			(this.normalize = s ? (l) => s(Gu(l)) : Gu),
			(this.query = this.normalize(t));
	}
	peek() {
		if (this.bufferPos == this.buffer.length) {
			if (((this.bufferStart += this.buffer.length), this.iter.next(), this.iter.done)) return -1;
			(this.bufferPos = 0), (this.buffer = this.iter.value);
		}
		return Re(this.buffer, this.bufferPos);
	}
	next() {
		for (; this.matches.length; ) this.matches.pop();
		return this.nextOverlapping();
	}
	nextOverlapping() {
		for (;;) {
			let e = this.peek();
			if (e < 0) return (this.done = !0), this;
			let t = $l(e),
				i = this.bufferStart + this.bufferPos;
			this.bufferPos += ot(e);
			let r = this.normalize(t);
			if (r.length)
				for (let s = 0, o = i; ; s++) {
					let l = r.charCodeAt(s),
						a = this.match(l, o, this.bufferPos + this.bufferStart);
					if (s == r.length - 1) {
						if (a) return (this.value = a), this;
						break;
					}
					o == i && s < t.length && t.charCodeAt(s) == l && o++;
				}
		}
	}
	match(e, t, i) {
		let r = null;
		for (let s = 0; s < this.matches.length; s += 2) {
			let o = this.matches[s],
				l = !1;
			this.query.charCodeAt(o) == e &&
				(o == this.query.length - 1
					? (r = { from: this.matches[s + 1], to: i })
					: (this.matches[s]++, (l = !0))),
				l || (this.matches.splice(s, 2), (s -= 2));
		}
		return (
			this.query.charCodeAt(0) == e &&
				(this.query.length == 1 ? (r = { from: t, to: i }) : this.matches.push(1, t)),
			r && this.test && !this.test(r.from, r.to, this.buffer, this.bufferStart) && (r = null),
			r
		);
	}
}
typeof Symbol < 'u' &&
	(on.prototype[Symbol.iterator] = function () {
		return this;
	});
const Md = { from: -1, to: -1, match: /.*/.exec('') },
	Jl = 'gm' + (/x/.unicode == null ? '' : 'u');
class Bd {
	constructor(e, t, i, r = 0, s = e.length) {
		if (
			((this.text = e),
			(this.to = s),
			(this.curLine = ''),
			(this.done = !1),
			(this.value = Md),
			/\\[sWDnr]|\n|\r|\[\^/.test(t))
		)
			return new jd(e, t, i, r, s);
		(this.re = new RegExp(t, Jl + (i != null && i.ignoreCase ? 'i' : ''))),
			(this.test = i == null ? void 0 : i.test),
			(this.iter = e.iter());
		let o = e.lineAt(r);
		(this.curLineStart = o.from), (this.matchPos = ns(e, r)), this.getLine(this.curLineStart);
	}
	getLine(e) {
		this.iter.next(e),
			this.iter.lineBreak
				? (this.curLine = '')
				: ((this.curLine = this.iter.value),
					this.curLineStart + this.curLine.length > this.to &&
						(this.curLine = this.curLine.slice(0, this.to - this.curLineStart)),
					this.iter.next());
	}
	nextLine() {
		(this.curLineStart = this.curLineStart + this.curLine.length + 1),
			this.curLineStart > this.to ? (this.curLine = '') : this.getLine(0);
	}
	next() {
		for (let e = this.matchPos - this.curLineStart; ; ) {
			this.re.lastIndex = e;
			let t = this.matchPos <= this.to && this.re.exec(this.curLine);
			if (t) {
				let i = this.curLineStart + t.index,
					r = i + t[0].length;
				if (
					((this.matchPos = ns(this.text, r + (i == r ? 1 : 0))),
					i == this.curLineStart + this.curLine.length && this.nextLine(),
					(i < r || i > this.value.to) && (!this.test || this.test(i, r, t)))
				)
					return (this.value = { from: i, to: r, match: t }), this;
				e = this.matchPos - this.curLineStart;
			} else if (this.curLineStart + this.curLine.length < this.to) this.nextLine(), (e = 0);
			else return (this.done = !0), this;
		}
	}
}
const uo = new WeakMap();
class Hi {
	constructor(e, t) {
		(this.from = e), (this.text = t);
	}
	get to() {
		return this.from + this.text.length;
	}
	static get(e, t, i) {
		let r = uo.get(e);
		if (!r || r.from >= i || r.to <= t) {
			let l = new Hi(t, e.sliceString(t, i));
			return uo.set(e, l), l;
		}
		if (r.from == t && r.to == i) return r;
		let { text: s, from: o } = r;
		return (
			o > t && ((s = e.sliceString(t, o) + s), (o = t)),
			r.to < i && (s += e.sliceString(r.to, i)),
			uo.set(e, new Hi(o, s)),
			new Hi(t, s.slice(t - o, i - o))
		);
	}
}
class jd {
	constructor(e, t, i, r, s) {
		(this.text = e),
			(this.to = s),
			(this.done = !1),
			(this.value = Md),
			(this.matchPos = ns(e, r)),
			(this.re = new RegExp(t, Jl + (i != null && i.ignoreCase ? 'i' : ''))),
			(this.test = i == null ? void 0 : i.test),
			(this.flat = Hi.get(e, r, this.chunkEnd(r + 5e3)));
	}
	chunkEnd(e) {
		return e >= this.to ? this.to : this.text.lineAt(e).to;
	}
	next() {
		for (;;) {
			let e = (this.re.lastIndex = this.matchPos - this.flat.from),
				t = this.re.exec(this.flat.text);
			if (
				(t &&
					!t[0] &&
					t.index == e &&
					((this.re.lastIndex = e + 1), (t = this.re.exec(this.flat.text))),
				t)
			) {
				let i = this.flat.from + t.index,
					r = i + t[0].length;
				if (
					(this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) &&
					(!this.test || this.test(i, r, t))
				)
					return (
						(this.value = { from: i, to: r, match: t }),
						(this.matchPos = ns(this.text, r + (i == r ? 1 : 0))),
						this
					);
			}
			if (this.flat.to == this.to) return (this.done = !0), this;
			this.flat = Hi.get(
				this.text,
				this.flat.from,
				this.chunkEnd(this.flat.from + this.flat.text.length * 2)
			);
		}
	}
}
typeof Symbol < 'u' &&
	(Bd.prototype[Symbol.iterator] = jd.prototype[Symbol.iterator] =
		function () {
			return this;
		});
function Oy(n) {
	try {
		return new RegExp(n, Jl), !0;
	} catch {
		return !1;
	}
}
function ns(n, e) {
	if (e >= n.length) return e;
	let t = n.lineAt(e),
		i;
	for (; e < t.to && (i = t.text.charCodeAt(e - t.from)) >= 56320 && i < 57344; ) e++;
	return e;
}
function gl(n) {
	let e = String(n.state.doc.lineAt(n.state.selection.main.head).number),
		t = he('input', { class: 'cm-textfield', name: 'line', value: e }),
		i = he(
			'form',
			{
				class: 'cm-gotoLine',
				onkeydown: (s) => {
					s.keyCode == 27
						? (s.preventDefault(), n.dispatch({ effects: Zn.of(!1) }), n.focus())
						: s.keyCode == 13 && (s.preventDefault(), r());
				},
				onsubmit: (s) => {
					s.preventDefault(), r();
				}
			},
			he('label', n.state.phrase('Go to line'), ': ', t),
			' ',
			he('button', { class: 'cm-button', type: 'submit' }, n.state.phrase('go')),
			he(
				'button',
				{
					name: 'close',
					onclick: () => {
						n.dispatch({ effects: Zn.of(!1) }), n.focus();
					},
					'aria-label': n.state.phrase('close'),
					type: 'button'
				},
				['×']
			)
		);
	function r() {
		let s = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.value);
		if (!s) return;
		let { state: o } = n,
			l = o.doc.lineAt(o.selection.main.head),
			[, a, u, h, c] = s,
			f = h ? +h.slice(1) : 0,
			d = u ? +u : l.number;
		if (u && c) {
			let m = d / 100;
			a && (m = m * (a == '-' ? -1 : 1) + l.number / o.doc.lines),
				(d = Math.round(o.doc.lines * m));
		} else u && a && (d = d * (a == '-' ? -1 : 1) + l.number);
		let p = o.doc.line(Math.max(1, Math.min(o.doc.lines, d))),
			O = Z.cursor(p.from + Math.max(0, Math.min(f, p.length)));
		n.dispatch({
			effects: [Zn.of(!1), j.scrollIntoView(O.from, { y: 'center' })],
			selection: O
		}),
			n.focus();
	}
	return { dom: i };
}
const Zn = te.define(),
	Hu = Be.define({
		create() {
			return !0;
		},
		update(n, e) {
			for (let t of e.effects) t.is(Zn) && (n = t.value);
			return n;
		},
		provide: (n) => qn.from(n, (e) => (e ? gl : null))
	}),
	my = (n) => {
		let e = Xn(n, gl);
		if (!e) {
			let t = [Zn.of(!0)];
			n.state.field(Hu, !1) == null && t.push(te.appendConfig.of([Hu, gy])),
				n.dispatch({ effects: t }),
				(e = Xn(n, gl));
		}
		return e && e.dom.querySelector('input').select(), !0;
	},
	gy = j.baseTheme({
		'.cm-panel.cm-gotoLine': {
			padding: '2px 6px 4px',
			position: 'relative',
			'& label': { fontSize: '80%' },
			'& [name=close]': {
				position: 'absolute',
				top: '0',
				bottom: '0',
				right: '4px',
				backgroundColor: 'inherit',
				border: 'none',
				font: 'inherit',
				padding: '0'
			}
		}
	}),
	yy = {
		highlightWordAroundCursor: !1,
		minSelectionLength: 1,
		maxMatches: 100,
		wholeWords: !1
	},
	by = X.define({
		combine(n) {
			return Bt(n, yy, {
				highlightWordAroundCursor: (e, t) => e || t,
				minSelectionLength: Math.min,
				maxMatches: Math.min
			});
		}
	});
function Wd(n) {
	return [ky, wy];
}
const xy = I.mark({ class: 'cm-selectionMatch' }),
	Dy = I.mark({ class: 'cm-selectionMatch cm-selectionMatch-main' });
function Ju(n, e, t, i) {
	return (
		(t == 0 || n(e.sliceDoc(t - 1, t)) != ye.Word) &&
		(i == e.doc.length || n(e.sliceDoc(i, i + 1)) != ye.Word)
	);
}
function Sy(n, e, t, i) {
	return n(e.sliceDoc(t, t + 1)) == ye.Word && n(e.sliceDoc(i - 1, i)) == ye.Word;
}
const wy = De.fromClass(
		class {
			constructor(n) {
				this.decorations = this.getDeco(n);
			}
			update(n) {
				(n.selectionSet || n.docChanged || n.viewportChanged) &&
					(this.decorations = this.getDeco(n.view));
			}
			getDeco(n) {
				let e = n.state.facet(by),
					{ state: t } = n,
					i = t.selection;
				if (i.ranges.length > 1) return I.none;
				let r = i.main,
					s,
					o = null;
				if (r.empty) {
					if (!e.highlightWordAroundCursor) return I.none;
					let a = t.wordAt(r.head);
					if (!a) return I.none;
					(o = t.charCategorizer(r.head)), (s = t.sliceDoc(a.from, a.to));
				} else {
					let a = r.to - r.from;
					if (a < e.minSelectionLength || a > 200) return I.none;
					if (e.wholeWords) {
						if (
							((s = t.sliceDoc(r.from, r.to)),
							(o = t.charCategorizer(r.head)),
							!(Ju(o, t, r.from, r.to) && Sy(o, t, r.from, r.to)))
						)
							return I.none;
					} else if (((s = t.sliceDoc(r.from, r.to)), !s)) return I.none;
				}
				let l = [];
				for (let a of n.visibleRanges) {
					let u = new on(t.doc, s, a.from, a.to);
					for (; !u.next().done; ) {
						let { from: h, to: c } = u.value;
						if (
							(!o || Ju(o, t, h, c)) &&
							(r.empty && h <= r.from && c >= r.to
								? l.push(Dy.range(h, c))
								: (h >= r.to || c <= r.from) && l.push(xy.range(h, c)),
							l.length > e.maxMatches)
						)
							return I.none;
					}
				}
				return I.set(l);
			}
		},
		{ decorations: (n) => n.decorations }
	),
	ky = j.baseTheme({
		'.cm-selectionMatch': { backgroundColor: '#99ff7780' },
		'.cm-searchMatch .cm-selectionMatch': { backgroundColor: 'transparent' }
	}),
	vy = ({ state: n, dispatch: e }) => {
		let { selection: t } = n,
			i = Z.create(
				t.ranges.map((r) => n.wordAt(r.head) || Z.cursor(r.head)),
				t.mainIndex
			);
		return i.eq(t) ? !1 : (e(n.update({ selection: i })), !0);
	};
function Qy(n, e) {
	let { main: t, ranges: i } = n.selection,
		r = n.wordAt(t.head),
		s = r && r.from == t.from && r.to == t.to;
	for (let o = !1, l = new on(n.doc, e, i[i.length - 1].to); ; )
		if ((l.next(), l.done)) {
			if (o) return null;
			(l = new on(n.doc, e, 0, Math.max(0, i[i.length - 1].from - 1))), (o = !0);
		} else {
			if (o && i.some((a) => a.from == l.value.from)) continue;
			if (s) {
				let a = n.wordAt(l.value.from);
				if (!a || a.from != l.value.from || a.to != l.value.to) continue;
			}
			return l.value;
		}
}
const Cy = ({ state: n, dispatch: e }) => {
		let { ranges: t } = n.selection;
		if (t.some((s) => s.from === s.to)) return vy({ state: n, dispatch: e });
		let i = n.sliceDoc(t[0].from, t[0].to);
		if (n.selection.ranges.some((s) => n.sliceDoc(s.from, s.to) != i)) return !1;
		let r = Qy(n, i);
		return r
			? (e(
					n.update({
						selection: n.selection.addRange(Z.range(r.from, r.to), !1),
						effects: j.scrollIntoView(r.to)
					})
				),
				!0)
			: !1;
	},
	cn = X.define({
		combine(n) {
			return Bt(n, {
				top: !1,
				caseSensitive: !1,
				literal: !1,
				regexp: !1,
				wholeWord: !1,
				createPanel: (e) => new Wy(e),
				scrollToMatch: (e) => j.scrollIntoView(e)
			});
		}
	});
class zd {
	constructor(e) {
		(this.search = e.search),
			(this.caseSensitive = !!e.caseSensitive),
			(this.literal = !!e.literal),
			(this.regexp = !!e.regexp),
			(this.replace = e.replace || ''),
			(this.valid = !!this.search && (!this.regexp || Oy(this.search))),
			(this.unquoted = this.unquote(this.search)),
			(this.wholeWord = !!e.wholeWord);
	}
	unquote(e) {
		return this.literal
			? e
			: e.replace(/\\([nrt\\])/g, (t, i) =>
					i == 'n'
						? `
`
						: i == 'r'
							? '\r'
							: i == 't'
								? '	'
								: '\\'
				);
	}
	eq(e) {
		return (
			this.search == e.search &&
			this.replace == e.replace &&
			this.caseSensitive == e.caseSensitive &&
			this.regexp == e.regexp &&
			this.wholeWord == e.wholeWord
		);
	}
	create() {
		return this.regexp ? new Ey(this) : new Ay(this);
	}
	getCursor(e, t = 0, i) {
		let r = e.doc ? e : oe.create({ doc: e });
		return i == null && (i = r.doc.length), this.regexp ? _i(this, r, t, i) : qi(this, r, t, i);
	}
}
class Xd {
	constructor(e) {
		this.spec = e;
	}
}
function qi(n, e, t, i) {
	return new on(
		e.doc,
		n.unquoted,
		t,
		i,
		n.caseSensitive ? void 0 : (r) => r.toLowerCase(),
		n.wholeWord ? Py(e.doc, e.charCategorizer(e.selection.main.head)) : void 0
	);
}
function Py(n, e) {
	return (t, i, r, s) => (
		(s > t || s + r.length < i) &&
			((s = Math.max(0, t - 2)), (r = n.sliceString(s, Math.min(n.length, i + 2)))),
		(e(rs(r, t - s)) != ye.Word || e(ss(r, t - s)) != ye.Word) &&
			(e(ss(r, i - s)) != ye.Word || e(rs(r, i - s)) != ye.Word)
	);
}
class Ay extends Xd {
	constructor(e) {
		super(e);
	}
	nextMatch(e, t, i) {
		let r = qi(this.spec, e, i, e.doc.length).nextOverlapping();
		if (r.done) {
			let s = Math.min(e.doc.length, t + this.spec.unquoted.length);
			r = qi(this.spec, e, 0, s).nextOverlapping();
		}
		return r.done || (r.value.from == t && r.value.to == i) ? null : r.value;
	}
	prevMatchInRange(e, t, i) {
		for (let r = i; ; ) {
			let s = Math.max(t, r - 1e4 - this.spec.unquoted.length),
				o = qi(this.spec, e, s, r),
				l = null;
			for (; !o.nextOverlapping().done; ) l = o.value;
			if (l) return l;
			if (s == t) return null;
			r -= 1e4;
		}
	}
	prevMatch(e, t, i) {
		let r = this.prevMatchInRange(e, 0, t);
		return (
			r || (r = this.prevMatchInRange(e, Math.max(0, i - this.spec.unquoted.length), e.doc.length)),
			r && (r.from != t || r.to != i) ? r : null
		);
	}
	getReplacement(e) {
		return this.spec.unquote(this.spec.replace);
	}
	matchAll(e, t) {
		let i = qi(this.spec, e, 0, e.doc.length),
			r = [];
		for (; !i.next().done; ) {
			if (r.length >= t) return null;
			r.push(i.value);
		}
		return r;
	}
	highlight(e, t, i, r) {
		let s = qi(
			this.spec,
			e,
			Math.max(0, t - this.spec.unquoted.length),
			Math.min(i + this.spec.unquoted.length, e.doc.length)
		);
		for (; !s.next().done; ) r(s.value.from, s.value.to);
	}
}
function _i(n, e, t, i) {
	return new Bd(
		e.doc,
		n.search,
		{
			ignoreCase: !n.caseSensitive,
			test: n.wholeWord ? $y(e.charCategorizer(e.selection.main.head)) : void 0
		},
		t,
		i
	);
}
function rs(n, e) {
	return n.slice(Me(n, e, !1), e);
}
function ss(n, e) {
	return n.slice(e, Me(n, e));
}
function $y(n) {
	return (e, t, i) =>
		!i[0].length ||
		((n(rs(i.input, i.index)) != ye.Word || n(ss(i.input, i.index)) != ye.Word) &&
			(n(ss(i.input, i.index + i[0].length)) != ye.Word ||
				n(rs(i.input, i.index + i[0].length)) != ye.Word));
}
class Ey extends Xd {
	nextMatch(e, t, i) {
		let r = _i(this.spec, e, i, e.doc.length).next();
		return r.done && (r = _i(this.spec, e, 0, t).next()), r.done ? null : r.value;
	}
	prevMatchInRange(e, t, i) {
		for (let r = 1; ; r++) {
			let s = Math.max(t, i - r * 1e4),
				o = _i(this.spec, e, s, i),
				l = null;
			for (; !o.next().done; ) l = o.value;
			if (l && (s == t || l.from > s + 10)) return l;
			if (s == t) return null;
		}
	}
	prevMatch(e, t, i) {
		return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, i, e.doc.length);
	}
	getReplacement(e) {
		return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (t, i) => {
			if (i == '&') return e.match[0];
			if (i == '$') return '$';
			for (let r = i.length; r > 0; r--) {
				let s = +i.slice(0, r);
				if (s > 0 && s < e.match.length) return e.match[s] + i.slice(r);
			}
			return t;
		});
	}
	matchAll(e, t) {
		let i = _i(this.spec, e, 0, e.doc.length),
			r = [];
		for (; !i.next().done; ) {
			if (r.length >= t) return null;
			r.push(i.value);
		}
		return r;
	}
	highlight(e, t, i, r) {
		let s = _i(this.spec, e, Math.max(0, t - 250), Math.min(i + 250, e.doc.length));
		for (; !s.next().done; ) r(s.value.from, s.value.to);
	}
}
const Nn = te.define(),
	Kl = te.define(),
	si = Be.define({
		create(n) {
			return new ho(yl(n).create(), null);
		},
		update(n, e) {
			for (let t of e.effects)
				t.is(Nn)
					? (n = new ho(t.value.create(), n.panel))
					: t.is(Kl) && (n = new ho(n.query, t.value ? ea : null));
			return n;
		},
		provide: (n) => qn.from(n, (e) => e.panel)
	});
class ho {
	constructor(e, t) {
		(this.query = e), (this.panel = t);
	}
}
const Zy = I.mark({ class: 'cm-searchMatch' }),
	Ry = I.mark({ class: 'cm-searchMatch cm-searchMatch-selected' }),
	Ty = De.fromClass(
		class {
			constructor(n) {
				(this.view = n), (this.decorations = this.highlight(n.state.field(si)));
			}
			update(n) {
				let e = n.state.field(si);
				(e != n.startState.field(si) || n.docChanged || n.selectionSet || n.viewportChanged) &&
					(this.decorations = this.highlight(e));
			}
			highlight({ query: n, panel: e }) {
				if (!e || !n.spec.valid) return I.none;
				let { view: t } = this,
					i = new li();
				for (let r = 0, s = t.visibleRanges, o = s.length; r < o; r++) {
					let { from: l, to: a } = s[r];
					for (; r < o - 1 && a > s[r + 1].from - 2 * 250; ) a = s[++r].to;
					n.highlight(t.state, l, a, (u, h) => {
						let c = t.state.selection.ranges.some((f) => f.from == u && f.to == h);
						i.add(u, h, c ? Ry : Zy);
					});
				}
				return i.finish();
			}
		},
		{ decorations: (n) => n.decorations }
	);
function ir(n) {
	return (e) => {
		let t = e.state.field(si, !1);
		return t && t.query.spec.valid ? n(e, t) : Yd(e);
	};
}
const os = ir((n, { query: e }) => {
		let { to: t } = n.state.selection.main,
			i = e.nextMatch(n.state, t, t);
		if (!i) return !1;
		let r = Z.single(i.from, i.to),
			s = n.state.facet(cn);
		return (
			n.dispatch({
				selection: r,
				effects: [ta(n, i), s.scrollToMatch(r.main, n)],
				userEvent: 'select.search'
			}),
			_d(n),
			!0
		);
	}),
	ls = ir((n, { query: e }) => {
		let { state: t } = n,
			{ from: i } = t.selection.main,
			r = e.prevMatch(t, i, i);
		if (!r) return !1;
		let s = Z.single(r.from, r.to),
			o = n.state.facet(cn);
		return (
			n.dispatch({
				selection: s,
				effects: [ta(n, r), o.scrollToMatch(s.main, n)],
				userEvent: 'select.search'
			}),
			_d(n),
			!0
		);
	}),
	Fy = ir((n, { query: e }) => {
		let t = e.matchAll(n.state, 1e3);
		return !t || !t.length
			? !1
			: (n.dispatch({
					selection: Z.create(t.map((i) => Z.range(i.from, i.to))),
					userEvent: 'select.search.matches'
				}),
				!0);
	}),
	My = ({ state: n, dispatch: e }) => {
		let t = n.selection;
		if (t.ranges.length > 1 || t.main.empty) return !1;
		let { from: i, to: r } = t.main,
			s = [],
			o = 0;
		for (let l = new on(n.doc, n.sliceDoc(i, r)); !l.next().done; ) {
			if (s.length > 1e3) return !1;
			l.value.from == i && (o = s.length), s.push(Z.range(l.value.from, l.value.to));
		}
		return (
			e(
				n.update({
					selection: Z.create(s, o),
					userEvent: 'select.search.matches'
				})
			),
			!0
		);
	},
	Ku = ir((n, { query: e }) => {
		let { state: t } = n,
			{ from: i, to: r } = t.selection.main;
		if (t.readOnly) return !1;
		let s = e.nextMatch(t, i, i);
		if (!s) return !1;
		let o = s,
			l = [],
			a,
			u,
			h = [];
		if (
			(o.from == i &&
				o.to == r &&
				((u = t.toText(e.getReplacement(o))),
				l.push({ from: o.from, to: o.to, insert: u }),
				(o = e.nextMatch(t, o.from, o.to)),
				h.push(j.announce.of(t.phrase('replaced match on line $', t.doc.lineAt(i).number) + '.'))),
			o)
		) {
			let c = l.length == 0 || l[0].from >= s.to ? 0 : s.to - s.from - u.length;
			(a = Z.single(o.from - c, o.to - c)),
				h.push(ta(n, o)),
				h.push(t.facet(cn).scrollToMatch(a.main, n));
		}
		return (
			n.dispatch({
				changes: l,
				selection: a,
				effects: h,
				userEvent: 'input.replace'
			}),
			!0
		);
	}),
	By = ir((n, { query: e }) => {
		if (n.state.readOnly) return !1;
		let t = e.matchAll(n.state, 1e9).map((r) => {
			let { from: s, to: o } = r;
			return { from: s, to: o, insert: e.getReplacement(r) };
		});
		if (!t.length) return !1;
		let i = n.state.phrase('replaced $ matches', t.length) + '.';
		return (
			n.dispatch({
				changes: t,
				effects: j.announce.of(i),
				userEvent: 'input.replace.all'
			}),
			!0
		);
	});
function ea(n) {
	return n.state.facet(cn).createPanel(n);
}
function yl(n, e) {
	var t, i, r, s, o;
	let l = n.selection.main,
		a = l.empty || l.to > l.from + 100 ? '' : n.sliceDoc(l.from, l.to);
	if (e && !a) return e;
	let u = n.facet(cn);
	return new zd({
		search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : u.literal)
			? a
			: a.replace(/\n/g, '\\n'),
		caseSensitive:
			(i = e == null ? void 0 : e.caseSensitive) !== null && i !== void 0 ? i : u.caseSensitive,
		literal: (r = e == null ? void 0 : e.literal) !== null && r !== void 0 ? r : u.literal,
		regexp: (s = e == null ? void 0 : e.regexp) !== null && s !== void 0 ? s : u.regexp,
		wholeWord: (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0 ? o : u.wholeWord
	});
}
function qd(n) {
	let e = Xn(n, ea);
	return e && e.dom.querySelector('[main-field]');
}
function _d(n) {
	let e = qd(n);
	e && e == n.root.activeElement && e.select();
}
const Yd = (n) => {
		let e = n.state.field(si, !1);
		if (e && e.panel) {
			let t = qd(n);
			if (t && t != n.root.activeElement) {
				let i = yl(n.state, e.query.spec);
				i.valid && n.dispatch({ effects: Nn.of(i) }), t.focus(), t.select();
			}
		} else
			n.dispatch({
				effects: [Kl.of(!0), e ? Nn.of(yl(n.state, e.query.spec)) : te.appendConfig.of(Xy)]
			});
		return !0;
	},
	Nd = (n) => {
		let e = n.state.field(si, !1);
		if (!e || !e.panel) return !1;
		let t = Xn(n, ea);
		return (
			t && t.dom.contains(n.root.activeElement) && n.focus(), n.dispatch({ effects: Kl.of(!1) }), !0
		);
	},
	jy = [
		{ key: 'Mod-f', run: Yd, scope: 'editor search-panel' },
		{
			key: 'F3',
			run: os,
			shift: ls,
			scope: 'editor search-panel',
			preventDefault: !0
		},
		{
			key: 'Mod-g',
			run: os,
			shift: ls,
			scope: 'editor search-panel',
			preventDefault: !0
		},
		{ key: 'Escape', run: Nd, scope: 'editor search-panel' },
		{ key: 'Mod-Shift-l', run: My },
		{ key: 'Mod-Alt-g', run: my },
		{ key: 'Mod-d', run: Cy, preventDefault: !0 }
	];
class Wy {
	constructor(e) {
		this.view = e;
		let t = (this.query = e.state.field(si).query.spec);
		(this.commit = this.commit.bind(this)),
			(this.searchField = he('input', {
				value: t.search,
				placeholder: et(e, 'Find'),
				'aria-label': et(e, 'Find'),
				class: 'cm-textfield',
				name: 'search',
				form: '',
				'main-field': 'true',
				onchange: this.commit,
				onkeyup: this.commit
			})),
			(this.replaceField = he('input', {
				value: t.replace,
				placeholder: et(e, 'Replace'),
				'aria-label': et(e, 'Replace'),
				class: 'cm-textfield',
				name: 'replace',
				form: '',
				onchange: this.commit,
				onkeyup: this.commit
			})),
			(this.caseField = he('input', {
				type: 'checkbox',
				name: 'case',
				form: '',
				checked: t.caseSensitive,
				onchange: this.commit
			})),
			(this.reField = he('input', {
				type: 'checkbox',
				name: 're',
				form: '',
				checked: t.regexp,
				onchange: this.commit
			})),
			(this.wordField = he('input', {
				type: 'checkbox',
				name: 'word',
				form: '',
				checked: t.wholeWord,
				onchange: this.commit
			}));
		function i(r, s, o) {
			return he('button', { class: 'cm-button', name: r, onclick: s, type: 'button' }, o);
		}
		this.dom = he('div', { onkeydown: (r) => this.keydown(r), class: 'cm-search' }, [
			this.searchField,
			i('next', () => os(e), [et(e, 'next')]),
			i('prev', () => ls(e), [et(e, 'previous')]),
			i('select', () => Fy(e), [et(e, 'all')]),
			he('label', null, [this.caseField, et(e, 'match case')]),
			he('label', null, [this.reField, et(e, 'regexp')]),
			he('label', null, [this.wordField, et(e, 'by word')]),
			...(e.state.readOnly
				? []
				: [
						he('br'),
						this.replaceField,
						i('replace', () => Ku(e), [et(e, 'replace')]),
						i('replaceAll', () => By(e), [et(e, 'replace all')])
					]),
			he(
				'button',
				{
					name: 'close',
					onclick: () => Nd(e),
					'aria-label': et(e, 'close'),
					type: 'button'
				},
				['×']
			)
		]);
	}
	commit() {
		let e = new zd({
			search: this.searchField.value,
			caseSensitive: this.caseField.checked,
			regexp: this.reField.checked,
			wholeWord: this.wordField.checked,
			replace: this.replaceField.value
		});
		e.eq(this.query) || ((this.query = e), this.view.dispatch({ effects: Nn.of(e) }));
	}
	keydown(e) {
		lg(this.view, e, 'search-panel')
			? e.preventDefault()
			: e.keyCode == 13 && e.target == this.searchField
				? (e.preventDefault(), (e.shiftKey ? ls : os)(this.view))
				: e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), Ku(this.view));
	}
	update(e) {
		for (let t of e.transactions)
			for (let i of t.effects) i.is(Nn) && !i.value.eq(this.query) && this.setQuery(i.value);
	}
	setQuery(e) {
		(this.query = e),
			(this.searchField.value = e.search),
			(this.replaceField.value = e.replace),
			(this.caseField.checked = e.caseSensitive),
			(this.reField.checked = e.regexp),
			(this.wordField.checked = e.wholeWord);
	}
	mount() {
		this.searchField.select();
	}
	get pos() {
		return 80;
	}
	get top() {
		return this.view.state.facet(cn).top;
	}
}
function et(n, e) {
	return n.state.phrase(e);
}
const wr = 30,
	kr = /[\s\.,:;?!]/;
function ta(n, { from: e, to: t }) {
	let i = n.state.doc.lineAt(e),
		r = n.state.doc.lineAt(t).to,
		s = Math.max(i.from, e - wr),
		o = Math.min(r, t + wr),
		l = n.state.sliceDoc(s, o);
	if (s != i.from) {
		for (let a = 0; a < wr; a++)
			if (!kr.test(l[a + 1]) && kr.test(l[a])) {
				l = l.slice(a);
				break;
			}
	}
	if (o != r) {
		for (let a = l.length - 1; a > l.length - wr; a--)
			if (!kr.test(l[a - 1]) && kr.test(l[a])) {
				l = l.slice(0, a);
				break;
			}
	}
	return j.announce.of(
		`${n.state.phrase('current match')}. ${l} ${n.state.phrase('on line')} ${i.number}.`
	);
}
const zy = j.baseTheme({
		'.cm-panel.cm-search': {
			padding: '2px 6px 4px',
			position: 'relative',
			'& [name=close]': {
				position: 'absolute',
				top: '0',
				right: '4px',
				backgroundColor: 'inherit',
				border: 'none',
				font: 'inherit',
				padding: 0,
				margin: 0
			},
			'& input, & button, & label': { margin: '.2em .6em .2em 0' },
			'& input[type=checkbox]': { marginRight: '.2em' },
			'& label': { fontSize: '80%', whiteSpace: 'pre' }
		},
		'&light .cm-searchMatch': { backgroundColor: '#ffff0054' },
		'&dark .cm-searchMatch': { backgroundColor: '#00ffff8a' },
		'&light .cm-searchMatch-selected': { backgroundColor: '#ff6a0054' },
		'&dark .cm-searchMatch-selected': { backgroundColor: '#ff00ff8a' }
	}),
	Xy = [si, Fi.low(Ty), zy];
class Vd {
	constructor(e, t, i) {
		(this.state = e), (this.pos = t), (this.explicit = i), (this.abortListeners = []);
	}
	tokenBefore(e) {
		let t = ze(this.state).resolveInner(this.pos, -1);
		for (; t && e.indexOf(t.name) < 0; ) t = t.parent;
		return t
			? {
					from: t.from,
					to: this.pos,
					text: this.state.sliceDoc(t.from, this.pos),
					type: t.type
				}
			: null;
	}
	matchBefore(e) {
		let t = this.state.doc.lineAt(this.pos),
			i = Math.max(t.from, this.pos - 250),
			r = t.text.slice(i - t.from, this.pos - t.from),
			s = r.search(Id(e, !1));
		return s < 0 ? null : { from: i + s, to: this.pos, text: r.slice(s) };
	}
	get aborted() {
		return this.abortListeners == null;
	}
	addEventListener(e, t) {
		e == 'abort' && this.abortListeners && this.abortListeners.push(t);
	}
}
function eh(n) {
	let e = Object.keys(n).join(''),
		t = /\w/.test(e);
	return t && (e = e.replace(/\w/g, '')), `[${t ? '\\w' : ''}${e.replace(/[^\w\s]/g, '\\$&')}]`;
}
function qy(n) {
	let e = Object.create(null),
		t = Object.create(null);
	for (let { label: r } of n) {
		e[r[0]] = !0;
		for (let s = 1; s < r.length; s++) t[r[s]] = !0;
	}
	let i = eh(e) + eh(t) + '*$';
	return [new RegExp('^' + i), new RegExp(i)];
}
function _y(n) {
	let e = n.map((r) => (typeof r == 'string' ? { label: r } : r)),
		[t, i] = e.every((r) => /^\w+$/.test(r.label)) ? [/\w*$/, /\w+$/] : qy(e);
	return (r) => {
		let s = r.matchBefore(i);
		return s || r.explicit ? { from: s ? s.from : r.pos, options: e, validFor: t } : null;
	};
}
class th {
	constructor(e, t, i, r) {
		(this.completion = e), (this.source = t), (this.match = i), (this.score = r);
	}
}
function oi(n) {
	return n.selection.main.from;
}
function Id(n, e) {
	var t;
	let { source: i } = n,
		r = e && i[0] != '^',
		s = i[i.length - 1] != '$';
	return !r && !s
		? n
		: new RegExp(
				`${r ? '^' : ''}(?:${i})${s ? '$' : ''}`,
				(t = n.flags) !== null && t !== void 0 ? t : n.ignoreCase ? 'i' : ''
			);
}
const Ld = Mt.define();
function Yy(n, e, t, i) {
	let { main: r } = n.selection,
		s = t - r.from,
		o = i - r.from;
	return Object.assign(
		Object.assign(
			{},
			n.changeByRange((l) =>
				l != r && t != i && n.sliceDoc(l.from + s, l.from + o) != n.sliceDoc(t, i)
					? { range: l }
					: {
							changes: {
								from: l.from + s,
								to: i == r.from ? l.to : l.from + o,
								insert: e
							},
							range: Z.cursor(l.from + s + e.length)
						}
			)
		),
		{ scrollIntoView: !0, userEvent: 'input.complete' }
	);
}
const ih = new WeakMap();
function Ny(n) {
	if (!Array.isArray(n)) return n;
	let e = ih.get(n);
	return e || ih.set(n, (e = _y(n))), e;
}
const as = te.define(),
	Vn = te.define();
class Vy {
	constructor(e) {
		(this.pattern = e),
			(this.chars = []),
			(this.folded = []),
			(this.any = []),
			(this.precise = []),
			(this.byWord = []),
			(this.score = 0),
			(this.matched = []);
		for (let t = 0; t < e.length; ) {
			let i = Re(e, t),
				r = ot(i);
			this.chars.push(i);
			let s = e.slice(t, t + r),
				o = s.toUpperCase();
			this.folded.push(Re(o == s ? s.toLowerCase() : o, 0)), (t += r);
		}
		this.astral = e.length != this.chars.length;
	}
	ret(e, t) {
		return (this.score = e), (this.matched = t), this;
	}
	match(e) {
		if (this.pattern.length == 0) return this.ret(-100, []);
		if (e.length < this.pattern.length) return null;
		let { chars: t, folded: i, any: r, precise: s, byWord: o } = this;
		if (t.length == 1) {
			let S = Re(e, 0),
				C = ot(S),
				k = C == e.length ? 0 : -100;
			if (S != t[0])
				if (S == i[0]) k += -200;
				else return null;
			return this.ret(k, [0, C]);
		}
		let l = e.indexOf(this.pattern);
		if (l == 0)
			return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
		let a = t.length,
			u = 0;
		if (l < 0) {
			for (let S = 0, C = Math.min(e.length, 200); S < C && u < a; ) {
				let k = Re(e, S);
				(k == t[u] || k == i[u]) && (r[u++] = S), (S += ot(k));
			}
			if (u < a) return null;
		}
		let h = 0,
			c = 0,
			f = !1,
			d = 0,
			p = -1,
			O = -1,
			m = /[a-z]/.test(e),
			g = !0;
		for (let S = 0, C = Math.min(e.length, 200), k = 0; S < C && c < a; ) {
			let x = Re(e, S);
			l < 0 &&
				(h < a && x == t[h] && (s[h++] = S),
				d < a && (x == t[d] || x == i[d] ? (d == 0 && (p = S), (O = S + 1), d++) : (d = 0)));
			let P,
				$ =
					x < 255
						? (x >= 48 && x <= 57) || (x >= 97 && x <= 122)
							? 2
							: x >= 65 && x <= 90
								? 1
								: 0
						: (P = $l(x)) != P.toLowerCase()
							? 1
							: P != P.toUpperCase()
								? 2
								: 0;
			(!S || ($ == 1 && m) || (k == 0 && $ != 0)) &&
				(t[c] == x || (i[c] == x && (f = !0)) ? (o[c++] = S) : o.length && (g = !1)),
				(k = $),
				(S += ot(x));
		}
		return c == a && o[0] == 0 && g
			? this.result(-100 + (f ? -200 : 0), o, e)
			: d == a && p == 0
				? this.ret(-200 - e.length + (O == e.length ? 0 : -100), [0, O])
				: l > -1
					? this.ret(-700 - e.length, [l, l + this.pattern.length])
					: d == a
						? this.ret(-900 - e.length, [p, O])
						: c == a
							? this.result(-100 + (f ? -200 : 0) + -700 + (g ? 0 : -1100), o, e)
							: t.length == 2
								? null
								: this.result((r[0] ? -700 : 0) + -200 + -1100, r, e);
	}
	result(e, t, i) {
		let r = [],
			s = 0;
		for (let o of t) {
			let l = o + (this.astral ? ot(Re(i, o)) : 1);
			s && r[s - 1] == o ? (r[s - 1] = l) : ((r[s++] = o), (r[s++] = l));
		}
		return this.ret(e - i.length, r);
	}
}
class Iy {
	constructor(e) {
		(this.pattern = e), (this.matched = []), (this.score = 0), (this.folded = e.toLowerCase());
	}
	match(e) {
		if (e.length < this.pattern.length) return null;
		let t = e.slice(0, this.pattern.length),
			i = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
		return i == null
			? null
			: ((this.matched = [0, t.length]),
				(this.score = i + (e.length == this.pattern.length ? 0 : -100)),
				this);
	}
}
const Fe = X.define({
	combine(n) {
		return Bt(
			n,
			{
				activateOnTyping: !0,
				activateOnCompletion: () => !1,
				activateOnTypingDelay: 100,
				selectOnOpen: !0,
				override: null,
				closeOnBlur: !0,
				maxRenderedOptions: 100,
				defaultKeymap: !0,
				tooltipClass: () => '',
				optionClass: () => '',
				aboveCursor: !1,
				icons: !0,
				addToOptions: [],
				positionInfo: Ly,
				filterStrict: !1,
				compareCompletions: (e, t) => e.label.localeCompare(t.label),
				interactionDelay: 75,
				updateSyncTime: 100
			},
			{
				defaultKeymap: (e, t) => e && t,
				closeOnBlur: (e, t) => e && t,
				icons: (e, t) => e && t,
				tooltipClass: (e, t) => (i) => nh(e(i), t(i)),
				optionClass: (e, t) => (i) => nh(e(i), t(i)),
				addToOptions: (e, t) => e.concat(t),
				filterStrict: (e, t) => e || t
			}
		);
	}
});
function nh(n, e) {
	return n ? (e ? n + ' ' + e : n) : e;
}
function Ly(n, e, t, i, r, s) {
	let o = n.textDirection == me.RTL,
		l = o,
		a = !1,
		u = 'top',
		h,
		c,
		f = e.left - r.left,
		d = r.right - e.right,
		p = i.right - i.left,
		O = i.bottom - i.top;
	if ((l && f < Math.min(p, d) ? (l = !1) : !l && d < Math.min(p, f) && (l = !0), p <= (l ? f : d)))
		(h = Math.max(r.top, Math.min(t.top, r.bottom - O)) - e.top), (c = Math.min(400, l ? f : d));
	else {
		(a = !0), (c = Math.min(400, (o ? e.right : r.right - e.left) - 30));
		let S = r.bottom - e.bottom;
		S >= O || S > e.top ? (h = t.bottom - e.top) : ((u = 'bottom'), (h = e.bottom - t.top));
	}
	let m = (e.bottom - e.top) / s.offsetHeight,
		g = (e.right - e.left) / s.offsetWidth;
	return {
		style: `${u}: ${h / m}px; max-width: ${c / g}px`,
		class: 'cm-completionInfo-' + (a ? (o ? 'left-narrow' : 'right-narrow') : l ? 'left' : 'right')
	};
}
function Uy(n) {
	let e = n.addToOptions.slice();
	return (
		n.icons &&
			e.push({
				render(t) {
					let i = document.createElement('div');
					return (
						i.classList.add('cm-completionIcon'),
						t.type && i.classList.add(...t.type.split(/\s+/g).map((r) => 'cm-completionIcon-' + r)),
						i.setAttribute('aria-hidden', 'true'),
						i
					);
				},
				position: 20
			}),
		e.push(
			{
				render(t, i, r, s) {
					let o = document.createElement('span');
					o.className = 'cm-completionLabel';
					let l = t.displayLabel || t.label,
						a = 0;
					for (let u = 0; u < s.length; ) {
						let h = s[u++],
							c = s[u++];
						h > a && o.appendChild(document.createTextNode(l.slice(a, h)));
						let f = o.appendChild(document.createElement('span'));
						f.appendChild(document.createTextNode(l.slice(h, c))),
							(f.className = 'cm-completionMatchedText'),
							(a = c);
					}
					return a < l.length && o.appendChild(document.createTextNode(l.slice(a))), o;
				},
				position: 50
			},
			{
				render(t) {
					if (!t.detail) return null;
					let i = document.createElement('span');
					return (i.className = 'cm-completionDetail'), (i.textContent = t.detail), i;
				},
				position: 80
			}
		),
		e.sort((t, i) => t.position - i.position).map((t) => t.render)
	);
}
function co(n, e, t) {
	if (n <= t) return { from: 0, to: n };
	if ((e < 0 && (e = 0), e <= n >> 1)) {
		let r = Math.floor(e / t);
		return { from: r * t, to: (r + 1) * t };
	}
	let i = Math.floor((n - e) / t);
	return { from: n - (i + 1) * t, to: n - i * t };
}
class Gy {
	constructor(e, t, i) {
		(this.view = e),
			(this.stateField = t),
			(this.applyCompletion = i),
			(this.info = null),
			(this.infoDestroy = null),
			(this.placeInfoReq = {
				read: () => this.measureInfo(),
				write: (a) => this.placeInfo(a),
				key: this
			}),
			(this.space = null),
			(this.currentClass = '');
		let r = e.state.field(t),
			{ options: s, selected: o } = r.open,
			l = e.state.facet(Fe);
		(this.optionContent = Uy(l)),
			(this.optionClass = l.optionClass),
			(this.tooltipClass = l.tooltipClass),
			(this.range = co(s.length, o, l.maxRenderedOptions)),
			(this.dom = document.createElement('div')),
			(this.dom.className = 'cm-tooltip-autocomplete'),
			this.updateTooltipClass(e.state),
			this.dom.addEventListener('mousedown', (a) => {
				let { options: u } = e.state.field(t).open;
				for (let h = a.target, c; h && h != this.dom; h = h.parentNode)
					if (h.nodeName == 'LI' && (c = /-(\d+)$/.exec(h.id)) && +c[1] < u.length) {
						this.applyCompletion(e, u[+c[1]]), a.preventDefault();
						return;
					}
			}),
			this.dom.addEventListener('focusout', (a) => {
				let u = e.state.field(this.stateField, !1);
				u &&
					u.tooltip &&
					e.state.facet(Fe).closeOnBlur &&
					a.relatedTarget != e.contentDOM &&
					e.dispatch({ effects: Vn.of(null) });
			}),
			this.showOptions(s, r.id);
	}
	mount() {
		this.updateSel();
	}
	showOptions(e, t) {
		this.list && this.list.remove(),
			(this.list = this.dom.appendChild(this.createListBox(e, t, this.range))),
			this.list.addEventListener('scroll', () => {
				this.info && this.view.requestMeasure(this.placeInfoReq);
			});
	}
	update(e) {
		var t;
		let i = e.state.field(this.stateField),
			r = e.startState.field(this.stateField);
		if ((this.updateTooltipClass(e.state), i != r)) {
			let { options: s, selected: o, disabled: l } = i.open;
			(!r.open || r.open.options != s) &&
				((this.range = co(s.length, o, e.state.facet(Fe).maxRenderedOptions)),
				this.showOptions(s, i.id)),
				this.updateSel(),
				l != ((t = r.open) === null || t === void 0 ? void 0 : t.disabled) &&
					this.dom.classList.toggle('cm-tooltip-autocomplete-disabled', !!l);
		}
	}
	updateTooltipClass(e) {
		let t = this.tooltipClass(e);
		if (t != this.currentClass) {
			for (let i of this.currentClass.split(' ')) i && this.dom.classList.remove(i);
			for (let i of t.split(' ')) i && this.dom.classList.add(i);
			this.currentClass = t;
		}
	}
	positioned(e) {
		(this.space = e), this.info && this.view.requestMeasure(this.placeInfoReq);
	}
	updateSel() {
		let e = this.view.state.field(this.stateField),
			t = e.open;
		if (
			(((t.selected > -1 && t.selected < this.range.from) || t.selected >= this.range.to) &&
				((this.range = co(
					t.options.length,
					t.selected,
					this.view.state.facet(Fe).maxRenderedOptions
				)),
				this.showOptions(t.options, e.id)),
			this.updateSelectedOption(t.selected))
		) {
			this.destroyInfo();
			let { completion: i } = t.options[t.selected],
				{ info: r } = i;
			if (!r) return;
			let s = typeof r == 'string' ? document.createTextNode(r) : r(i);
			if (!s) return;
			'then' in s
				? s
						.then((o) => {
							o && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(o, i);
						})
						.catch((o) => Ue(this.view.state, o, 'completion info'))
				: this.addInfoPane(s, i);
		}
	}
	addInfoPane(e, t) {
		this.destroyInfo();
		let i = (this.info = document.createElement('div'));
		if (((i.className = 'cm-tooltip cm-completionInfo'), e.nodeType != null))
			i.appendChild(e), (this.infoDestroy = null);
		else {
			let { dom: r, destroy: s } = e;
			i.appendChild(r), (this.infoDestroy = s || null);
		}
		this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
	}
	updateSelectedOption(e) {
		let t = null;
		for (let i = this.list.firstChild, r = this.range.from; i; i = i.nextSibling, r++)
			i.nodeName != 'LI' || !i.id
				? r--
				: r == e
					? i.hasAttribute('aria-selected') || (i.setAttribute('aria-selected', 'true'), (t = i))
					: i.hasAttribute('aria-selected') && i.removeAttribute('aria-selected');
		return t && Jy(this.list, t), t;
	}
	measureInfo() {
		let e = this.dom.querySelector('[aria-selected]');
		if (!e || !this.info) return null;
		let t = this.dom.getBoundingClientRect(),
			i = this.info.getBoundingClientRect(),
			r = e.getBoundingClientRect(),
			s = this.space;
		if (!s) {
			let o = this.dom.ownerDocument.defaultView || window;
			s = { left: 0, top: 0, right: o.innerWidth, bottom: o.innerHeight };
		}
		return r.top > Math.min(s.bottom, t.bottom) - 10 || r.bottom < Math.max(s.top, t.top) + 10
			? null
			: this.view.state.facet(Fe).positionInfo(this.view, t, r, i, s, this.dom);
	}
	placeInfo(e) {
		this.info &&
			(e
				? (e.style && (this.info.style.cssText = e.style),
					(this.info.className = 'cm-tooltip cm-completionInfo ' + (e.class || '')))
				: (this.info.style.cssText = 'top: -1e6px'));
	}
	createListBox(e, t, i) {
		const r = document.createElement('ul');
		(r.id = t),
			r.setAttribute('role', 'listbox'),
			r.setAttribute('aria-expanded', 'true'),
			r.setAttribute('aria-label', this.view.state.phrase('Completions'));
		let s = null;
		for (let o = i.from; o < i.to; o++) {
			let { completion: l, match: a } = e[o],
				{ section: u } = l;
			if (u) {
				let f = typeof u == 'string' ? u : u.name;
				if (f != s && (o > i.from || i.from == 0))
					if (((s = f), typeof u != 'string' && u.header)) r.appendChild(u.header(u));
					else {
						let d = r.appendChild(document.createElement('completion-section'));
						d.textContent = f;
					}
			}
			const h = r.appendChild(document.createElement('li'));
			(h.id = t + '-' + o), h.setAttribute('role', 'option');
			let c = this.optionClass(l);
			c && (h.className = c);
			for (let f of this.optionContent) {
				let d = f(l, this.view.state, this.view, a);
				d && h.appendChild(d);
			}
		}
		return (
			i.from && r.classList.add('cm-completionListIncompleteTop'),
			i.to < e.length && r.classList.add('cm-completionListIncompleteBottom'),
			r
		);
	}
	destroyInfo() {
		this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), (this.info = null));
	}
	destroy() {
		this.destroyInfo();
	}
}
function Hy(n, e) {
	return (t) => new Gy(t, n, e);
}
function Jy(n, e) {
	let t = n.getBoundingClientRect(),
		i = e.getBoundingClientRect(),
		r = t.height / n.offsetHeight;
	i.top < t.top
		? (n.scrollTop -= (t.top - i.top) / r)
		: i.bottom > t.bottom && (n.scrollTop += (i.bottom - t.bottom) / r);
}
function rh(n) {
	return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
}
function Ky(n, e) {
	let t = [],
		i = null,
		r = (u) => {
			t.push(u);
			let { section: h } = u.completion;
			if (h) {
				i || (i = []);
				let c = typeof h == 'string' ? h : h.name;
				i.some((f) => f.name == c) || i.push(typeof h == 'string' ? { name: c } : h);
			}
		},
		s = e.facet(Fe);
	for (let u of n)
		if (u.hasResult()) {
			let h = u.result.getMatch;
			if (u.result.filter === !1)
				for (let c of u.result.options) r(new th(c, u.source, h ? h(c) : [], 1e9 - t.length));
			else {
				let c = e.sliceDoc(u.from, u.to),
					f,
					d = s.filterStrict ? new Iy(c) : new Vy(c);
				for (let p of u.result.options)
					if ((f = d.match(p.label))) {
						let O = p.displayLabel ? (h ? h(p, f.matched) : []) : f.matched;
						r(new th(p, u.source, O, f.score + (p.boost || 0)));
					}
			}
		}
	if (i) {
		let u = Object.create(null),
			h = 0,
			c = (f, d) => {
				var p, O;
				return (
					((p = f.rank) !== null && p !== void 0 ? p : 1e9) -
						((O = d.rank) !== null && O !== void 0 ? O : 1e9) || (f.name < d.name ? -1 : 1)
				);
			};
		for (let f of i.sort(c)) (h -= 1e5), (u[f.name] = h);
		for (let f of t) {
			let { section: d } = f.completion;
			d && (f.score += u[typeof d == 'string' ? d : d.name]);
		}
	}
	let o = [],
		l = null,
		a = s.compareCompletions;
	for (let u of t.sort((h, c) => c.score - h.score || a(h.completion, c.completion))) {
		let h = u.completion;
		!l ||
		l.label != h.label ||
		l.detail != h.detail ||
		(l.type != null && h.type != null && l.type != h.type) ||
		l.apply != h.apply ||
		l.boost != h.boost
			? o.push(u)
			: rh(u.completion) > rh(l) && (o[o.length - 1] = u),
			(l = u.completion);
	}
	return o;
}
class Vi {
	constructor(e, t, i, r, s, o) {
		(this.options = e),
			(this.attrs = t),
			(this.tooltip = i),
			(this.timestamp = r),
			(this.selected = s),
			(this.disabled = o);
	}
	setSelected(e, t) {
		return e == this.selected || e >= this.options.length
			? this
			: new Vi(this.options, sh(t, e), this.tooltip, this.timestamp, e, this.disabled);
	}
	static build(e, t, i, r, s) {
		let o = Ky(e, t);
		if (!o.length)
			return r && e.some((a) => a.state == 1)
				? new Vi(r.options, r.attrs, r.tooltip, r.timestamp, r.selected, !0)
				: null;
		let l = t.facet(Fe).selectOnOpen ? 0 : -1;
		if (r && r.selected != l && r.selected != -1) {
			let a = r.options[r.selected].completion;
			for (let u = 0; u < o.length; u++)
				if (o[u].completion == a) {
					l = u;
					break;
				}
		}
		return new Vi(
			o,
			sh(i, l),
			{
				pos: e.reduce((a, u) => (u.hasResult() ? Math.min(a, u.from) : a), 1e8),
				create: rb,
				above: s.aboveCursor
			},
			r ? r.timestamp : Date.now(),
			l,
			!1
		);
	}
	map(e) {
		return new Vi(
			this.options,
			this.attrs,
			Object.assign(Object.assign({}, this.tooltip), {
				pos: e.mapPos(this.tooltip.pos)
			}),
			this.timestamp,
			this.selected,
			this.disabled
		);
	}
}
class us {
	constructor(e, t, i) {
		(this.active = e), (this.id = t), (this.open = i);
	}
	static start() {
		return new us(ib, 'cm-ac-' + Math.floor(Math.random() * 2e6).toString(36), null);
	}
	update(e) {
		let { state: t } = e,
			i = t.facet(Fe),
			s = (i.override || t.languageDataAt('autocomplete', oi(t)).map(Ny)).map((l) =>
				(
					this.active.find((u) => u.source == l) ||
					new _e(l, this.active.some((u) => u.state != 0) ? 1 : 0)
				).update(e, i)
			);
		s.length == this.active.length && s.every((l, a) => l == this.active[a]) && (s = this.active);
		let o = this.open;
		o && e.docChanged && (o = o.map(e.changes)),
			e.selection ||
			s.some((l) => l.hasResult() && e.changes.touchesRange(l.from, l.to)) ||
			!eb(s, this.active)
				? (o = Vi.build(s, t, this.id, o, i))
				: o && o.disabled && !s.some((l) => l.state == 1) && (o = null),
			!o &&
				s.every((l) => l.state != 1) &&
				s.some((l) => l.hasResult()) &&
				(s = s.map((l) => (l.hasResult() ? new _e(l.source, 0) : l)));
		for (let l of e.effects) l.is(Gd) && (o = o && o.setSelected(l.value, this.id));
		return s == this.active && o == this.open ? this : new us(s, this.id, o);
	}
	get tooltip() {
		return this.open ? this.open.tooltip : null;
	}
	get attrs() {
		return this.open ? this.open.attrs : tb;
	}
}
function eb(n, e) {
	if (n == e) return !0;
	for (let t = 0, i = 0; ; ) {
		for (; t < n.length && !n[t].hasResult; ) t++;
		for (; i < e.length && !e[i].hasResult; ) i++;
		let r = t == n.length,
			s = i == e.length;
		if (r || s) return r == s;
		if (n[t++].result != e[i++].result) return !1;
	}
}
const tb = { 'aria-autocomplete': 'list' };
function sh(n, e) {
	let t = {
		'aria-autocomplete': 'list',
		'aria-haspopup': 'listbox',
		'aria-controls': n
	};
	return e > -1 && (t['aria-activedescendant'] = n + '-' + e), t;
}
const ib = [];
function bl(n, e) {
	if (n.isUserEvent('input.complete')) {
		let t = n.annotation(Ld);
		if (t && e.activateOnCompletion(t)) return 'input';
	}
	return n.isUserEvent('input.type') ? 'input' : n.isUserEvent('delete.backward') ? 'delete' : null;
}
class _e {
	constructor(e, t, i = -1) {
		(this.source = e), (this.state = t), (this.explicitPos = i);
	}
	hasResult() {
		return !1;
	}
	update(e, t) {
		let i = bl(e, t),
			r = this;
		i
			? (r = r.handleUserEvent(e, i, t))
			: e.docChanged
				? (r = r.handleChange(e))
				: e.selection && r.state != 0 && (r = new _e(r.source, 0));
		for (let s of e.effects)
			if (s.is(as)) r = new _e(r.source, 1, s.value ? oi(e.state) : -1);
			else if (s.is(Vn)) r = new _e(r.source, 0);
			else if (s.is(Ud)) for (let o of s.value) o.source == r.source && (r = o);
		return r;
	}
	handleUserEvent(e, t, i) {
		return t == 'delete' || !i.activateOnTyping ? this.map(e.changes) : new _e(this.source, 1);
	}
	handleChange(e) {
		return e.changes.touchesRange(oi(e.startState)) ? new _e(this.source, 0) : this.map(e.changes);
	}
	map(e) {
		return e.empty || this.explicitPos < 0
			? this
			: new _e(this.source, this.state, e.mapPos(this.explicitPos));
	}
}
class Ji extends _e {
	constructor(e, t, i, r, s) {
		super(e, 2, t), (this.result = i), (this.from = r), (this.to = s);
	}
	hasResult() {
		return !0;
	}
	handleUserEvent(e, t, i) {
		var r;
		let s = this.result;
		s.map && !e.changes.empty && (s = s.map(s, e.changes));
		let o = e.changes.mapPos(this.from),
			l = e.changes.mapPos(this.to, 1),
			a = oi(e.state);
		if (
			(this.explicitPos < 0 ? a <= o : a < this.from) ||
			a > l ||
			!s ||
			(t == 'delete' && oi(e.startState) == this.from)
		)
			return new _e(this.source, t == 'input' && i.activateOnTyping ? 1 : 0);
		let u = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos);
		return nb(s.validFor, e.state, o, l)
			? new Ji(this.source, u, s, o, l)
			: s.update && (s = s.update(s, o, l, new Vd(e.state, a, u >= 0)))
				? new Ji(this.source, u, s, s.from, (r = s.to) !== null && r !== void 0 ? r : oi(e.state))
				: new _e(this.source, 1, u);
	}
	handleChange(e) {
		return e.changes.touchesRange(this.from, this.to)
			? new _e(this.source, 0)
			: this.map(e.changes);
	}
	map(e) {
		return e.empty
			? this
			: (this.result.map ? this.result.map(this.result, e) : this.result)
				? new Ji(
						this.source,
						this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos),
						this.result,
						e.mapPos(this.from),
						e.mapPos(this.to, 1)
					)
				: new _e(this.source, 0);
	}
}
function nb(n, e, t, i) {
	if (!n) return !1;
	let r = e.sliceDoc(t, i);
	return typeof n == 'function' ? n(r, t, i, e) : Id(n, !0).test(r);
}
const Ud = te.define({
		map(n, e) {
			return n.map((t) => t.map(e));
		}
	}),
	Gd = te.define(),
	Le = Be.define({
		create() {
			return us.start();
		},
		update(n, e) {
			return n.update(e);
		},
		provide: (n) => [ql.from(n, (e) => e.tooltip), j.contentAttributes.from(n, (e) => e.attrs)]
	});
function ia(n, e) {
	const t = e.completion.apply || e.completion.label;
	let i = n.state.field(Le).active.find((r) => r.source == e.source);
	return i instanceof Ji
		? (typeof t == 'string'
				? n.dispatch(
						Object.assign(Object.assign({}, Yy(n.state, t, i.from, i.to)), {
							annotations: Ld.of(e.completion)
						})
					)
				: t(n, e.completion, i.from, i.to),
			!0)
		: !1;
}
const rb = Hy(Le, ia);
function vr(n, e = 'option') {
	return (t) => {
		let i = t.state.field(Le, !1);
		if (
			!i ||
			!i.open ||
			i.open.disabled ||
			Date.now() - i.open.timestamp < t.state.facet(Fe).interactionDelay
		)
			return !1;
		let r = 1,
			s;
		e == 'page' &&
			(s = Df(t, i.open.tooltip)) &&
			(r = Math.max(
				2,
				Math.floor(s.dom.offsetHeight / s.dom.querySelector('li').offsetHeight) - 1
			));
		let { length: o } = i.open.options,
			l = i.open.selected > -1 ? i.open.selected + r * (n ? 1 : -1) : n ? 0 : o - 1;
		return (
			l < 0 ? (l = e == 'page' ? 0 : o - 1) : l >= o && (l = e == 'page' ? o - 1 : 0),
			t.dispatch({ effects: Gd.of(l) }),
			!0
		);
	};
}
const sb = (n) => {
		let e = n.state.field(Le, !1);
		return n.state.readOnly ||
			!e ||
			!e.open ||
			e.open.selected < 0 ||
			e.open.disabled ||
			Date.now() - e.open.timestamp < n.state.facet(Fe).interactionDelay
			? !1
			: ia(n, e.open.options[e.open.selected]);
	},
	ob = (n) => (n.state.field(Le, !1) ? (n.dispatch({ effects: as.of(!0) }), !0) : !1),
	lb = (n) => {
		let e = n.state.field(Le, !1);
		return !e || !e.active.some((t) => t.state != 0)
			? !1
			: (n.dispatch({ effects: Vn.of(null) }), !0);
	};
class ab {
	constructor(e, t) {
		(this.active = e),
			(this.context = t),
			(this.time = Date.now()),
			(this.updates = []),
			(this.done = void 0);
	}
}
const ub = 50,
	hb = 1e3,
	cb = De.fromClass(
		class {
			constructor(n) {
				(this.view = n),
					(this.debounceUpdate = -1),
					(this.running = []),
					(this.debounceAccept = -1),
					(this.pendingStart = !1),
					(this.composing = 0);
				for (let e of n.state.field(Le).active) e.state == 1 && this.startQuery(e);
			}
			update(n) {
				let e = n.state.field(Le),
					t = n.state.facet(Fe);
				if (!n.selectionSet && !n.docChanged && n.startState.field(Le) == e) return;
				let i = n.transactions.some((s) => (s.selection || s.docChanged) && !bl(s, t));
				for (let s = 0; s < this.running.length; s++) {
					let o = this.running[s];
					if (i || (o.updates.length + n.transactions.length > ub && Date.now() - o.time > hb)) {
						for (let l of o.context.abortListeners)
							try {
								l();
							} catch (a) {
								Ue(this.view.state, a);
							}
						(o.context.abortListeners = null), this.running.splice(s--, 1);
					} else o.updates.push(...n.transactions);
				}
				this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate),
					n.transactions.some((s) => s.effects.some((o) => o.is(as))) && (this.pendingStart = !0);
				let r = this.pendingStart ? 50 : t.activateOnTypingDelay;
				if (
					((this.debounceUpdate = e.active.some(
						(s) => s.state == 1 && !this.running.some((o) => o.active.source == s.source)
					)
						? setTimeout(() => this.startUpdate(), r)
						: -1),
					this.composing != 0)
				)
					for (let s of n.transactions)
						bl(s, t) == 'input'
							? (this.composing = 2)
							: this.composing == 2 && s.selection && (this.composing = 3);
			}
			startUpdate() {
				(this.debounceUpdate = -1), (this.pendingStart = !1);
				let { state: n } = this.view,
					e = n.field(Le);
				for (let t of e.active)
					t.state == 1 &&
						!this.running.some((i) => i.active.source == t.source) &&
						this.startQuery(t);
			}
			startQuery(n) {
				let { state: e } = this.view,
					t = oi(e),
					i = new Vd(e, t, n.explicitPos == t),
					r = new ab(n, i);
				this.running.push(r),
					Promise.resolve(n.source(i)).then(
						(s) => {
							r.context.aborted || ((r.done = s || null), this.scheduleAccept());
						},
						(s) => {
							this.view.dispatch({ effects: Vn.of(null) }), Ue(this.view.state, s);
						}
					);
			}
			scheduleAccept() {
				this.running.every((n) => n.done !== void 0)
					? this.accept()
					: this.debounceAccept < 0 &&
						(this.debounceAccept = setTimeout(
							() => this.accept(),
							this.view.state.facet(Fe).updateSyncTime
						));
			}
			accept() {
				var n;
				this.debounceAccept > -1 && clearTimeout(this.debounceAccept), (this.debounceAccept = -1);
				let e = [],
					t = this.view.state.facet(Fe);
				for (let i = 0; i < this.running.length; i++) {
					let r = this.running[i];
					if (r.done === void 0) continue;
					if ((this.running.splice(i--, 1), r.done)) {
						let o = new Ji(
							r.active.source,
							r.active.explicitPos,
							r.done,
							r.done.from,
							(n = r.done.to) !== null && n !== void 0
								? n
								: oi(r.updates.length ? r.updates[0].startState : this.view.state)
						);
						for (let l of r.updates) o = o.update(l, t);
						if (o.hasResult()) {
							e.push(o);
							continue;
						}
					}
					let s = this.view.state.field(Le).active.find((o) => o.source == r.active.source);
					if (s && s.state == 1)
						if (r.done == null) {
							let o = new _e(r.active.source, 0);
							for (let l of r.updates) o = o.update(l, t);
							o.state != 1 && e.push(o);
						} else this.startQuery(s);
				}
				e.length && this.view.dispatch({ effects: Ud.of(e) });
			}
		},
		{
			eventHandlers: {
				blur(n) {
					let e = this.view.state.field(Le, !1);
					if (e && e.tooltip && this.view.state.facet(Fe).closeOnBlur) {
						let t = e.open && Df(this.view, e.open.tooltip);
						(!t || !t.dom.contains(n.relatedTarget)) &&
							setTimeout(() => this.view.dispatch({ effects: Vn.of(null) }), 10);
					}
				},
				compositionstart() {
					this.composing = 1;
				},
				compositionend() {
					this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: as.of(!1) }), 20),
						(this.composing = 0);
				}
			}
		}
	),
	fb = typeof navigator == 'object' && /Win/.test(navigator.platform),
	db = Fi.highest(
		j.domEventHandlers({
			keydown(n, e) {
				let t = e.state.field(Le, !1);
				if (
					!t ||
					!t.open ||
					t.open.disabled ||
					t.open.selected < 0 ||
					n.key.length > 1 ||
					(n.ctrlKey && !(fb && n.altKey)) ||
					n.metaKey
				)
					return !1;
				let i = t.open.options[t.open.selected],
					r = t.active.find((o) => o.source == i.source),
					s = i.completion.commitCharacters || r.result.commitCharacters;
				return s && s.indexOf(n.key) > -1 && ia(e, i), !1;
			}
		})
	),
	pb = j.baseTheme({
		'.cm-tooltip.cm-tooltip-autocomplete': {
			'& > ul': {
				fontFamily: 'monospace',
				whiteSpace: 'nowrap',
				overflow: 'hidden auto',
				maxWidth_fallback: '700px',
				maxWidth: 'min(700px, 95vw)',
				minWidth: '250px',
				maxHeight: '10em',
				height: '100%',
				listStyle: 'none',
				margin: 0,
				padding: 0,
				'& > li, & > completion-section': {
					padding: '1px 3px',
					lineHeight: 1.2
				},
				'& > li': {
					overflowX: 'hidden',
					textOverflow: 'ellipsis',
					cursor: 'pointer'
				},
				'& > completion-section': {
					display: 'list-item',
					borderBottom: '1px solid silver',
					paddingLeft: '0.5em',
					opacity: 0.7
				}
			}
		},
		'&light .cm-tooltip-autocomplete ul li[aria-selected]': {
			background: '#17c',
			color: 'white'
		},
		'&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]': {
			background: '#777'
		},
		'&dark .cm-tooltip-autocomplete ul li[aria-selected]': {
			background: '#347',
			color: 'white'
		},
		'&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]': {
			background: '#444'
		},
		'.cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after': {
			content: '"···"',
			opacity: 0.5,
			display: 'block',
			textAlign: 'center'
		},
		'.cm-tooltip.cm-completionInfo': {
			position: 'absolute',
			padding: '3px 9px',
			width: 'max-content',
			maxWidth: '400px',
			boxSizing: 'border-box'
		},
		'.cm-completionInfo.cm-completionInfo-left': { right: '100%' },
		'.cm-completionInfo.cm-completionInfo-right': { left: '100%' },
		'.cm-completionInfo.cm-completionInfo-left-narrow': { right: '30px' },
		'.cm-completionInfo.cm-completionInfo-right-narrow': { left: '30px' },
		'&light .cm-snippetField': { backgroundColor: '#00000022' },
		'&dark .cm-snippetField': { backgroundColor: '#ffffff22' },
		'.cm-snippetFieldPosition': {
			verticalAlign: 'text-top',
			width: 0,
			height: '1.15em',
			display: 'inline-block',
			margin: '0 -0.7px -.7em',
			borderLeft: '1.4px dotted #888'
		},
		'.cm-completionMatchedText': { textDecoration: 'underline' },
		'.cm-completionDetail': { marginLeft: '0.5em', fontStyle: 'italic' },
		'.cm-completionIcon': {
			fontSize: '90%',
			width: '.8em',
			display: 'inline-block',
			textAlign: 'center',
			paddingRight: '.6em',
			opacity: '0.6',
			boxSizing: 'content-box'
		},
		'.cm-completionIcon-function, .cm-completionIcon-method': {
			'&:after': { content: "'ƒ'" }
		},
		'.cm-completionIcon-class': { '&:after': { content: "'○'" } },
		'.cm-completionIcon-interface': { '&:after': { content: "'◌'" } },
		'.cm-completionIcon-variable': { '&:after': { content: "'𝑥'" } },
		'.cm-completionIcon-constant': { '&:after': { content: "'𝐶'" } },
		'.cm-completionIcon-type': { '&:after': { content: "'𝑡'" } },
		'.cm-completionIcon-enum': { '&:after': { content: "'∪'" } },
		'.cm-completionIcon-property': { '&:after': { content: "'□'" } },
		'.cm-completionIcon-keyword': { '&:after': { content: "'🔑︎'" } },
		'.cm-completionIcon-namespace': { '&:after': { content: "'▢'" } },
		'.cm-completionIcon-text': {
			'&:after': { content: "'abc'", fontSize: '50%', verticalAlign: 'middle' }
		}
	}),
	In = {
		brackets: ['(', '[', '{', "'", '"'],
		before: ')]}:;>',
		stringPrefixes: []
	},
	Ci = te.define({
		map(n, e) {
			let t = e.mapPos(n, -1, Ye.TrackAfter);
			return t ?? void 0;
		}
	}),
	na = new (class extends $i {})();
na.startSide = 1;
na.endSide = -1;
const Hd = Be.define({
	create() {
		return le.empty;
	},
	update(n, e) {
		if (((n = n.map(e.changes)), e.selection)) {
			let t = e.state.doc.lineAt(e.selection.main.head);
			n = n.update({ filter: (i) => i >= t.from && i <= t.to });
		}
		for (let t of e.effects) t.is(Ci) && (n = n.update({ add: [na.range(t.value, t.value + 1)] }));
		return n;
	}
});
function Jd() {
	return [mb, Hd];
}
const fo = '()[]{}<>';
function Kd(n) {
	for (let e = 0; e < fo.length; e += 2) if (fo.charCodeAt(e) == n) return fo.charAt(e + 1);
	return $l(n < 128 ? n : n + 1);
}
function ep(n, e) {
	return n.languageDataAt('closeBrackets', e)[0] || In;
}
const Ob = typeof navigator == 'object' && /Android\b/.test(navigator.userAgent),
	mb = j.inputHandler.of((n, e, t, i) => {
		if ((Ob ? n.composing : n.compositionStarted) || n.state.readOnly) return !1;
		let r = n.state.selection.main;
		if (i.length > 2 || (i.length == 2 && ot(Re(i, 0)) == 1) || e != r.from || t != r.to) return !1;
		let s = bb(n.state, i);
		return s ? (n.dispatch(s), !0) : !1;
	}),
	gb = ({ state: n, dispatch: e }) => {
		if (n.readOnly) return !1;
		let i = ep(n, n.selection.main.head).brackets || In.brackets,
			r = null,
			s = n.changeByRange((o) => {
				if (o.empty) {
					let l = xb(n.doc, o.head);
					for (let a of i)
						if (a == l && As(n.doc, o.head) == Kd(Re(a, 0)))
							return {
								changes: { from: o.head - a.length, to: o.head + a.length },
								range: Z.cursor(o.head - a.length)
							};
				}
				return { range: (r = o) };
			});
		return r || e(n.update(s, { scrollIntoView: !0, userEvent: 'delete.backward' })), !r;
	},
	yb = [{ key: 'Backspace', run: gb }];
function bb(n, e) {
	let t = ep(n, n.selection.main.head),
		i = t.brackets || In.brackets;
	for (let r of i) {
		let s = Kd(Re(r, 0));
		if (e == r)
			return s == r ? wb(n, r, i.indexOf(r + r + r) > -1, t) : Db(n, r, s, t.before || In.before);
		if (e == s && tp(n, n.selection.main.from)) return Sb(n, r, s);
	}
	return null;
}
function tp(n, e) {
	let t = !1;
	return (
		n.field(Hd).between(0, n.doc.length, (i) => {
			i == e && (t = !0);
		}),
		t
	);
}
function As(n, e) {
	let t = n.sliceString(e, e + 2);
	return t.slice(0, ot(Re(t, 0)));
}
function xb(n, e) {
	let t = n.sliceString(e - 2, e);
	return ot(Re(t, 0)) == t.length ? t : t.slice(1);
}
function Db(n, e, t, i) {
	let r = null,
		s = n.changeByRange((o) => {
			if (!o.empty)
				return {
					changes: [
						{ insert: e, from: o.from },
						{ insert: t, from: o.to }
					],
					effects: Ci.of(o.to + e.length),
					range: Z.range(o.anchor + e.length, o.head + e.length)
				};
			let l = As(n.doc, o.head);
			return !l || /\s/.test(l) || i.indexOf(l) > -1
				? {
						changes: { insert: e + t, from: o.head },
						effects: Ci.of(o.head + e.length),
						range: Z.cursor(o.head + e.length)
					}
				: { range: (r = o) };
		});
	return r ? null : n.update(s, { scrollIntoView: !0, userEvent: 'input.type' });
}
function Sb(n, e, t) {
	let i = null,
		r = n.changeByRange((s) =>
			s.empty && As(n.doc, s.head) == t
				? {
						changes: { from: s.head, to: s.head + t.length, insert: t },
						range: Z.cursor(s.head + t.length)
					}
				: (i = { range: s })
		);
	return i ? null : n.update(r, { scrollIntoView: !0, userEvent: 'input.type' });
}
function wb(n, e, t, i) {
	let r = i.stringPrefixes || In.stringPrefixes,
		s = null,
		o = n.changeByRange((l) => {
			if (!l.empty)
				return {
					changes: [
						{ insert: e, from: l.from },
						{ insert: e, from: l.to }
					],
					effects: Ci.of(l.to + e.length),
					range: Z.range(l.anchor + e.length, l.head + e.length)
				};
			let a = l.head,
				u = As(n.doc, a),
				h;
			if (u == e) {
				if (oh(n, a))
					return {
						changes: { insert: e + e, from: a },
						effects: Ci.of(a + e.length),
						range: Z.cursor(a + e.length)
					};
				if (tp(n, a)) {
					let f = t && n.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
					return {
						changes: { from: a, to: a + f.length, insert: f },
						range: Z.cursor(a + f.length)
					};
				}
			} else {
				if (
					t &&
					n.sliceDoc(a - 2 * e.length, a) == e + e &&
					(h = lh(n, a - 2 * e.length, r)) > -1 &&
					oh(n, h)
				)
					return {
						changes: { insert: e + e + e + e, from: a },
						effects: Ci.of(a + e.length),
						range: Z.cursor(a + e.length)
					};
				if (n.charCategorizer(a)(u) != ye.Word && lh(n, a, r) > -1 && !kb(n, a, e, r))
					return {
						changes: { insert: e + e, from: a },
						effects: Ci.of(a + e.length),
						range: Z.cursor(a + e.length)
					};
			}
			return { range: (s = l) };
		});
	return s ? null : n.update(o, { scrollIntoView: !0, userEvent: 'input.type' });
}
function oh(n, e) {
	let t = ze(n).resolveInner(e + 1);
	return t.parent && t.from == e;
}
function kb(n, e, t, i) {
	let r = ze(n).resolveInner(e, -1),
		s = i.reduce((o, l) => Math.max(o, l.length), 0);
	for (let o = 0; o < 5; o++) {
		let l = n.sliceDoc(r.from, Math.min(r.to, r.from + t.length + s)),
			a = l.indexOf(t);
		if (!a || (a > -1 && i.indexOf(l.slice(0, a)) > -1)) {
			let h = r.firstChild;
			for (; h && h.from == r.from && h.to - h.from > t.length + a; ) {
				if (n.sliceDoc(h.to - t.length, h.to) == t) return !1;
				h = h.firstChild;
			}
			return !0;
		}
		let u = r.to == e && r.parent;
		if (!u) break;
		r = u;
	}
	return !1;
}
function lh(n, e, t) {
	let i = n.charCategorizer(e);
	if (i(n.sliceDoc(e - 1, e)) != ye.Word) return e;
	for (let r of t) {
		let s = e - r.length;
		if (n.sliceDoc(s, e) == r && i(n.sliceDoc(s - 1, s)) != ye.Word) return s;
	}
	return -1;
}
function vb(n = {}) {
	return [db, Le, Fe.of(n), cb, Qb, pb];
}
const ip = [
		{ key: 'Ctrl-Space', run: ob },
		{ key: 'Escape', run: lb },
		{ key: 'ArrowDown', run: vr(!0) },
		{ key: 'ArrowUp', run: vr(!1) },
		{ key: 'PageDown', run: vr(!0, 'page') },
		{ key: 'PageUp', run: vr(!1, 'page') },
		{ key: 'Enter', run: sb }
	],
	Qb = Fi.highest(Jn.computeN([Fe], (n) => (n.facet(Fe).defaultKeymap ? [ip] : [])));
class Cb {
	constructor(e, t, i) {
		(this.from = e), (this.to = t), (this.diagnostic = i);
	}
}
class vi {
	constructor(e, t, i) {
		(this.diagnostics = e), (this.panel = t), (this.selected = i);
	}
	static init(e, t, i) {
		let r = e,
			s = i.facet(Ln).markerFilter;
		s && (r = s(r, i));
		let o = I.set(
			r.map((l) =>
				l.from == l.to || (l.from == l.to - 1 && i.doc.lineAt(l.from).to == l.from)
					? I.widget({ widget: new Mb(l), diagnostic: l }).range(l.from)
					: I.mark({
							attributes: {
								class:
									'cm-lintRange cm-lintRange-' + l.severity + (l.markClass ? ' ' + l.markClass : '')
							},
							diagnostic: l,
							inclusive: !0
						}).range(l.from, l.to)
			),
			!0
		);
		return new vi(o, t, ln(o));
	}
}
function ln(n, e = null, t = 0) {
	let i = null;
	return (
		n.between(t, 1e9, (r, s, { spec: o }) => {
			if (!(e && o.diagnostic != e)) return (i = new Cb(r, s, o.diagnostic)), !1;
		}),
		i
	);
}
function Pb(n, e) {
	let t = e.pos,
		i = e.end || t,
		r = n.state.facet(Ln).hideOn(n, t, i);
	if (r != null) return r;
	let s = n.startState.doc.lineAt(e.pos);
	return !!(n.effects.some((o) => o.is(np)) || n.changes.touchesRange(s.from, Math.max(s.to, i)));
}
function Ab(n, e) {
	return n.field(nt, !1) ? e : e.concat(te.appendConfig.of(Wb));
}
const np = te.define(),
	ra = te.define(),
	rp = te.define(),
	nt = Be.define({
		create() {
			return new vi(I.none, null, null);
		},
		update(n, e) {
			if (e.docChanged && n.diagnostics.size) {
				let t = n.diagnostics.map(e.changes),
					i = null,
					r = n.panel;
				if (n.selected) {
					let s = e.changes.mapPos(n.selected.from, 1);
					i = ln(t, n.selected.diagnostic, s) || ln(t, null, s);
				}
				!t.size && r && e.state.facet(Ln).autoPanel && (r = null), (n = new vi(t, r, i));
			}
			for (let t of e.effects)
				if (t.is(np)) {
					let i = e.state.facet(Ln).autoPanel ? (t.value.length ? Un.open : null) : n.panel;
					n = vi.init(t.value, i, e.state);
				} else
					t.is(ra)
						? (n = new vi(n.diagnostics, t.value ? Un.open : null, n.selected))
						: t.is(rp) && (n = new vi(n.diagnostics, n.panel, t.value));
			return n;
		},
		provide: (n) => [qn.from(n, (e) => e.panel), j.decorations.from(n, (e) => e.diagnostics)]
	}),
	$b = I.mark({ class: 'cm-lintRange cm-lintRange-active', inclusive: !0 });
function Eb(n, e, t) {
	let { diagnostics: i } = n.state.field(nt),
		r = [],
		s = 2e8,
		o = 0;
	i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, u, { spec: h }) => {
		e >= a &&
			e <= u &&
			(a == u || ((e > a || t > 0) && (e < u || t < 0))) &&
			(r.push(h.diagnostic), (s = Math.min(a, s)), (o = Math.max(u, o)));
	});
	let l = n.state.facet(Ln).tooltipFilter;
	return (
		l && (r = l(r, n.state)),
		r.length
			? {
					pos: s,
					end: o,
					above: n.state.doc.lineAt(s).to < o,
					create() {
						return { dom: Zb(n, r) };
					}
				}
			: null
	);
}
function Zb(n, e) {
	return he(
		'ul',
		{ class: 'cm-tooltip-lint' },
		e.map((t) => op(n, t, !1))
	);
}
const Rb = (n) => {
		let e = n.state.field(nt, !1);
		(!e || !e.panel) && n.dispatch({ effects: Ab(n.state, [ra.of(!0)]) });
		let t = Xn(n, Un.open);
		return t && t.dom.querySelector('.cm-panel-lint ul').focus(), !0;
	},
	ah = (n) => {
		let e = n.state.field(nt, !1);
		return !e || !e.panel ? !1 : (n.dispatch({ effects: ra.of(!1) }), !0);
	},
	Tb = (n) => {
		let e = n.state.field(nt, !1);
		if (!e) return !1;
		let t = n.state.selection.main,
			i = e.diagnostics.iter(t.to + 1);
		return !i.value && ((i = e.diagnostics.iter(0)), !i.value || (i.from == t.from && i.to == t.to))
			? !1
			: (n.dispatch({
					selection: { anchor: i.from, head: i.to },
					scrollIntoView: !0
				}),
				!0);
	},
	Fb = [
		{ key: 'Mod-Shift-m', run: Rb, preventDefault: !0 },
		{ key: 'F8', run: Tb }
	],
	Ln = X.define({
		combine(n) {
			return Object.assign(
				{ sources: n.map((e) => e.source).filter((e) => e != null) },
				Bt(
					n.map((e) => e.config),
					{
						delay: 750,
						markerFilter: null,
						tooltipFilter: null,
						needsRefresh: null,
						hideOn: () => null
					},
					{ needsRefresh: (e, t) => (e ? (t ? (i) => e(i) || t(i) : e) : t) }
				)
			);
		}
	});
function sp(n) {
	let e = [];
	if (n)
		e: for (let { name: t } of n) {
			for (let i = 0; i < t.length; i++) {
				let r = t[i];
				if (/[a-zA-Z]/.test(r) && !e.some((s) => s.toLowerCase() == r.toLowerCase())) {
					e.push(r);
					continue e;
				}
			}
			e.push('');
		}
	return e;
}
function op(n, e, t) {
	var i;
	let r = t ? sp(e.actions) : [];
	return he(
		'li',
		{ class: 'cm-diagnostic cm-diagnostic-' + e.severity },
		he('span', { class: 'cm-diagnosticText' }, e.renderMessage ? e.renderMessage(n) : e.message),
		(i = e.actions) === null || i === void 0
			? void 0
			: i.map((s, o) => {
					let l = !1,
						a = (f) => {
							if ((f.preventDefault(), l)) return;
							l = !0;
							let d = ln(n.state.field(nt).diagnostics, e);
							d && s.apply(n, d.from, d.to);
						},
						{ name: u } = s,
						h = r[o] ? u.indexOf(r[o]) : -1,
						c = h < 0 ? u : [u.slice(0, h), he('u', u.slice(h, h + 1)), u.slice(h + 1)];
					return he(
						'button',
						{
							type: 'button',
							class: 'cm-diagnosticAction',
							onclick: a,
							onmousedown: a,
							'aria-label': ` Action: ${u}${h < 0 ? '' : ` (access key "${r[o]})"`}.`
						},
						c
					);
				}),
		e.source && he('div', { class: 'cm-diagnosticSource' }, e.source)
	);
}
class Mb extends Ht {
	constructor(e) {
		super(), (this.diagnostic = e);
	}
	eq(e) {
		return e.diagnostic == this.diagnostic;
	}
	toDOM() {
		return he('span', {
			class: 'cm-lintPoint cm-lintPoint-' + this.diagnostic.severity
		});
	}
}
class uh {
	constructor(e, t) {
		(this.diagnostic = t),
			(this.id = 'item_' + Math.floor(Math.random() * 4294967295).toString(16)),
			(this.dom = op(e, t, !0)),
			(this.dom.id = this.id),
			this.dom.setAttribute('role', 'option');
	}
}
class Un {
	constructor(e) {
		(this.view = e), (this.items = []);
		let t = (r) => {
				if (r.keyCode == 27) ah(this.view), this.view.focus();
				else if (r.keyCode == 38 || r.keyCode == 33)
					this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
				else if (r.keyCode == 40 || r.keyCode == 34)
					this.moveSelection((this.selectedIndex + 1) % this.items.length);
				else if (r.keyCode == 36) this.moveSelection(0);
				else if (r.keyCode == 35) this.moveSelection(this.items.length - 1);
				else if (r.keyCode == 13) this.view.focus();
				else if (r.keyCode >= 65 && r.keyCode <= 90 && this.selectedIndex >= 0) {
					let { diagnostic: s } = this.items[this.selectedIndex],
						o = sp(s.actions);
					for (let l = 0; l < o.length; l++)
						if (o[l].toUpperCase().charCodeAt(0) == r.keyCode) {
							let a = ln(this.view.state.field(nt).diagnostics, s);
							a && s.actions[l].apply(e, a.from, a.to);
						}
				} else return;
				r.preventDefault();
			},
			i = (r) => {
				for (let s = 0; s < this.items.length; s++)
					this.items[s].dom.contains(r.target) && this.moveSelection(s);
			};
		(this.list = he('ul', {
			tabIndex: 0,
			role: 'listbox',
			'aria-label': this.view.state.phrase('Diagnostics'),
			onkeydown: t,
			onclick: i
		})),
			(this.dom = he(
				'div',
				{ class: 'cm-panel-lint' },
				this.list,
				he(
					'button',
					{
						type: 'button',
						name: 'close',
						'aria-label': this.view.state.phrase('close'),
						onclick: () => ah(this.view)
					},
					'×'
				)
			)),
			this.update();
	}
	get selectedIndex() {
		let e = this.view.state.field(nt).selected;
		if (!e) return -1;
		for (let t = 0; t < this.items.length; t++)
			if (this.items[t].diagnostic == e.diagnostic) return t;
		return -1;
	}
	update() {
		let { diagnostics: e, selected: t } = this.view.state.field(nt),
			i = 0,
			r = !1,
			s = null;
		for (
			e.between(0, this.view.state.doc.length, (o, l, { spec: a }) => {
				let u = -1,
					h;
				for (let c = i; c < this.items.length; c++)
					if (this.items[c].diagnostic == a.diagnostic) {
						u = c;
						break;
					}
				u < 0
					? ((h = new uh(this.view, a.diagnostic)), this.items.splice(i, 0, h), (r = !0))
					: ((h = this.items[u]), u > i && (this.items.splice(i, u - i), (r = !0))),
					t && h.diagnostic == t.diagnostic
						? h.dom.hasAttribute('aria-selected') ||
							(h.dom.setAttribute('aria-selected', 'true'), (s = h))
						: h.dom.hasAttribute('aria-selected') && h.dom.removeAttribute('aria-selected'),
					i++;
			});
			i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0);

		)
			(r = !0), this.items.pop();
		this.items.length == 0 &&
			(this.items.push(
				new uh(this.view, {
					from: -1,
					to: -1,
					severity: 'info',
					message: this.view.state.phrase('No diagnostics')
				})
			),
			(r = !0)),
			s
				? (this.list.setAttribute('aria-activedescendant', s.id),
					this.view.requestMeasure({
						key: this,
						read: () => ({
							sel: s.dom.getBoundingClientRect(),
							panel: this.list.getBoundingClientRect()
						}),
						write: ({ sel: o, panel: l }) => {
							let a = l.height / this.list.offsetHeight;
							o.top < l.top
								? (this.list.scrollTop -= (l.top - o.top) / a)
								: o.bottom > l.bottom && (this.list.scrollTop += (o.bottom - l.bottom) / a);
						}
					}))
				: this.selectedIndex < 0 && this.list.removeAttribute('aria-activedescendant'),
			r && this.sync();
	}
	sync() {
		let e = this.list.firstChild;
		function t() {
			let i = e;
			(e = i.nextSibling), i.remove();
		}
		for (let i of this.items)
			if (i.dom.parentNode == this.list) {
				for (; e != i.dom; ) t();
				e = i.dom.nextSibling;
			} else this.list.insertBefore(i.dom, e);
		for (; e; ) t();
	}
	moveSelection(e) {
		if (this.selectedIndex < 0) return;
		let t = this.view.state.field(nt),
			i = ln(t.diagnostics, this.items[e].diagnostic);
		i &&
			this.view.dispatch({
				selection: { anchor: i.from, head: i.to },
				scrollIntoView: !0,
				effects: rp.of(i)
			});
	}
	static open(e) {
		return new Un(e);
	}
}
function Bb(n, e = 'viewBox="0 0 40 40"') {
	return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(n)}</svg>')`;
}
function Qr(n) {
	return Bb(
		`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`,
		'width="6" height="3"'
	);
}
const jb = j.baseTheme({
		'.cm-diagnostic': {
			padding: '3px 6px 3px 8px',
			marginLeft: '-1px',
			display: 'block',
			whiteSpace: 'pre-wrap'
		},
		'.cm-diagnostic-error': { borderLeft: '5px solid #d11' },
		'.cm-diagnostic-warning': { borderLeft: '5px solid orange' },
		'.cm-diagnostic-info': { borderLeft: '5px solid #999' },
		'.cm-diagnostic-hint': { borderLeft: '5px solid #66d' },
		'.cm-diagnosticAction': {
			font: 'inherit',
			border: 'none',
			padding: '2px 4px',
			backgroundColor: '#444',
			color: 'white',
			borderRadius: '3px',
			marginLeft: '8px',
			cursor: 'pointer'
		},
		'.cm-diagnosticSource': { fontSize: '70%', opacity: 0.7 },
		'.cm-lintRange': {
			backgroundPosition: 'left bottom',
			backgroundRepeat: 'repeat-x',
			paddingBottom: '0.7px'
		},
		'.cm-lintRange-error': { backgroundImage: Qr('#d11') },
		'.cm-lintRange-warning': { backgroundImage: Qr('orange') },
		'.cm-lintRange-info': { backgroundImage: Qr('#999') },
		'.cm-lintRange-hint': { backgroundImage: Qr('#66d') },
		'.cm-lintRange-active': { backgroundColor: '#ffdd9980' },
		'.cm-tooltip-lint': { padding: 0, margin: 0 },
		'.cm-lintPoint': {
			position: 'relative',
			'&:after': {
				content: '""',
				position: 'absolute',
				bottom: 0,
				left: '-2px',
				borderLeft: '3px solid transparent',
				borderRight: '3px solid transparent',
				borderBottom: '4px solid #d11'
			}
		},
		'.cm-lintPoint-warning': { '&:after': { borderBottomColor: 'orange' } },
		'.cm-lintPoint-info': { '&:after': { borderBottomColor: '#999' } },
		'.cm-lintPoint-hint': { '&:after': { borderBottomColor: '#66d' } },
		'.cm-panel.cm-panel-lint': {
			position: 'relative',
			'& ul': {
				maxHeight: '100px',
				overflowY: 'auto',
				'& [aria-selected]': {
					backgroundColor: '#ddd',
					'& u': { textDecoration: 'underline' }
				},
				'&:focus [aria-selected]': {
					background_fallback: '#bdf',
					backgroundColor: 'Highlight',
					color_fallback: 'white',
					color: 'HighlightText'
				},
				'& u': { textDecoration: 'none' },
				padding: 0,
				margin: 0
			},
			'& [name=close]': {
				position: 'absolute',
				top: '0',
				right: '2px',
				background: 'inherit',
				border: 'none',
				font: 'inherit',
				padding: 0,
				margin: 0
			}
		}
	}),
	Wb = [
		nt,
		j.decorations.compute([nt], (n) => {
			let { selected: e, panel: t } = n.field(nt);
			return !e || !t || e.from == e.to ? I.none : I.set([$b.range(e.from, e.to)]);
		}),
		Vg(Eb, { hideOn: Pb }),
		jb
	];
var hh = function (e) {
	e === void 0 && (e = {});
	var { crosshairCursor: t = !1 } = e,
		i = [];
	e.closeBracketsKeymap !== !1 && (i = i.concat(yb)),
		e.defaultKeymap !== !1 && (i = i.concat(Td)),
		e.searchKeymap !== !1 && (i = i.concat(jy)),
		e.historyKeymap !== !1 && (i = i.concat(ld)),
		e.foldKeymap !== !1 && (i = i.concat(X0)),
		e.completionKeymap !== !1 && (i = i.concat(ip)),
		e.lintKeymap !== !1 && (i = i.concat(Fb));
	var r = [];
	return (
		e.lineNumbers !== !1 && r.push(vf()),
		e.highlightActiveLineGutter !== !1 && r.push(Qf()),
		e.highlightSpecialChars !== !1 && r.push(yf()),
		e.history !== !1 && r.push(nd()),
		e.foldGutter !== !1 && r.push(N0()),
		e.drawSelection !== !1 && r.push(Of()),
		e.dropCursor !== !1 && r.push(gg()),
		e.allowMultipleSelections !== !1 && r.push(oe.allowMultipleSelections.of(!0)),
		e.indentOnInput !== !1 && r.push(Wf()),
		e.syntaxHighlighting !== !1 && r.push(ks(Uf, { fallback: !0 })),
		e.bracketMatching !== !1 && r.push(Kf()),
		e.closeBrackets !== !1 && r.push(Jd()),
		e.autocompletion !== !1 && r.push(vb()),
		e.rectangularSelection !== !1 && r.push(Fg()),
		t !== !1 && r.push(jg()),
		e.highlightActiveLine !== !1 && r.push(bf()),
		e.highlightSelectionMatches !== !1 && r.push(Wd()),
		e.tabSize && typeof e.tabSize == 'number' && r.push(Ds.of(' '.repeat(e.tabSize))),
		r.concat([Jn.of(i.flat())]).filter(Boolean)
	);
};
const zb = '#e5c07b',
	ch = '#e06c75',
	Xb = '#56b6c2',
	qb = '#ffffff',
	jr = '#abb2bf',
	xl = '#7d8799',
	_b = '#61afef',
	Yb = '#98c379',
	fh = '#d19a66',
	Nb = '#c678dd',
	Vb = '#21252b',
	dh = '#2c313a',
	ph = '#282c34',
	po = '#353a42',
	Ib = '#3E4451',
	Oh = '#528bff',
	Lb = j.theme(
		{
			'&': { color: jr, backgroundColor: ph },
			'.cm-content': { caretColor: Oh },
			'.cm-cursor, .cm-dropCursor': { borderLeftColor: Oh },
			'&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
				{ backgroundColor: Ib },
			'.cm-panels': { backgroundColor: Vb, color: jr },
			'.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
			'.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },
			'.cm-searchMatch': {
				backgroundColor: '#72a1ff59',
				outline: '1px solid #457dff'
			},
			'.cm-searchMatch.cm-searchMatch-selected': {
				backgroundColor: '#6199ff2f'
			},
			'.cm-activeLine': { backgroundColor: '#6699ff0b' },
			'.cm-selectionMatch': { backgroundColor: '#aafe661a' },
			'&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
				backgroundColor: '#bad0f847'
			},
			'.cm-gutters': { backgroundColor: ph, color: xl, border: 'none' },
			'.cm-activeLineGutter': { backgroundColor: dh },
			'.cm-foldPlaceholder': {
				backgroundColor: 'transparent',
				border: 'none',
				color: '#ddd'
			},
			'.cm-tooltip': { border: 'none', backgroundColor: po },
			'.cm-tooltip .cm-tooltip-arrow:before': {
				borderTopColor: 'transparent',
				borderBottomColor: 'transparent'
			},
			'.cm-tooltip .cm-tooltip-arrow:after': {
				borderTopColor: po,
				borderBottomColor: po
			},
			'.cm-tooltip-autocomplete': {
				'& > ul > li[aria-selected]': { backgroundColor: dh, color: jr }
			}
		},
		{ dark: !0 }
	),
	Ub = un.define([
		{ tag: y.keyword, color: Nb },
		{
			tag: [y.name, y.deleted, y.character, y.propertyName, y.macroName],
			color: ch
		},
		{ tag: [y.function(y.variableName), y.labelName], color: _b },
		{ tag: [y.color, y.constant(y.name), y.standard(y.name)], color: fh },
		{ tag: [y.definition(y.name), y.separator], color: jr },
		{
			tag: [
				y.typeName,
				y.className,
				y.number,
				y.changed,
				y.annotation,
				y.modifier,
				y.self,
				y.namespace
			],
			color: zb
		},
		{
			tag: [y.operator, y.operatorKeyword, y.url, y.escape, y.regexp, y.link, y.special(y.string)],
			color: Xb
		},
		{ tag: [y.meta, y.comment], color: xl },
		{ tag: y.strong, fontWeight: 'bold' },
		{ tag: y.emphasis, fontStyle: 'italic' },
		{ tag: y.strikethrough, textDecoration: 'line-through' },
		{ tag: y.link, color: xl, textDecoration: 'underline' },
		{ tag: y.heading, fontWeight: 'bold', color: ch },
		{ tag: [y.atom, y.bool, y.special(y.variableName)], color: fh },
		{ tag: [y.processingInstruction, y.string, y.inserted], color: Yb },
		{ tag: y.invalid, color: qb }
	]),
	Gb = [Lb, ks(Ub)];
var Hb = j.theme({ '&': { backgroundColor: '#fff' } }, { dark: !1 }),
	Jb = function (e) {
		e === void 0 && (e = {});
		var {
				indentWithTab: t = !0,
				editable: i = !0,
				readOnly: r = !1,
				theme: s = 'light',
				placeholder: o = '',
				basicSetup: l = !0
			} = e,
			a = [];
		switch (
			(t && a.unshift(Jn.of([py])),
			l && (typeof l == 'boolean' ? a.unshift(hh()) : a.unshift(hh(l))),
			o && a.unshift(Eg(o)),
			s)
		) {
			case 'light':
				a.push(Hb);
				break;
			case 'dark':
				a.push(Gb);
				break;
			case 'none':
				break;
			default:
				a.push(s);
				break;
		}
		return i === !1 && a.push(j.editable.of(!1)), r && a.push(oe.readOnly.of(!0)), [...a];
	},
	Kb = (n) => ({
		line: n.state.doc.lineAt(n.state.selection.main.from),
		lineCount: n.state.doc.lines,
		lineBreak: n.state.lineBreak,
		length: n.state.doc.length,
		readOnly: n.state.readOnly,
		tabSize: n.state.tabSize,
		selection: n.state.selection,
		selectionAsSingle: n.state.selection.asSingle().main,
		ranges: n.state.selection.ranges,
		selectionCode: n.state.sliceDoc(n.state.selection.main.from, n.state.selection.main.to),
		selections: n.state.selection.ranges.map((e) => n.state.sliceDoc(e.from, e.to)),
		selectedText: n.state.selection.ranges.some((e) => !e.empty)
	}),
	mh = Mt.define(),
	ex = [];
function tx(n) {
	var {
			value: e,
			selection: t,
			onChange: i,
			onStatistics: r,
			onCreateEditor: s,
			onUpdate: o,
			extensions: l = ex,
			autoFocus: a,
			theme: u = 'light',
			height: h = null,
			minHeight: c = null,
			maxHeight: f = null,
			width: d = null,
			minWidth: p = null,
			maxWidth: O = null,
			placeholder: m = '',
			editable: g = !0,
			readOnly: S = !1,
			indentWithTab: C = !0,
			basicSetup: k = !0,
			root: x,
			initialState: P
		} = n,
		[$, T] = B.useState(),
		[w, b] = B.useState(),
		[A, E] = B.useState(),
		Q = j.theme({
			'&': {
				height: h,
				minHeight: c,
				maxHeight: f,
				width: d,
				minWidth: p,
				maxWidth: O
			},
			'& .cm-scroller': { height: '100% !important' }
		}),
		F = j.updateListener.of((Y) => {
			if (Y.docChanged && typeof i == 'function' && !Y.transactions.some((K) => K.annotation(mh))) {
				var N = Y.state.doc,
					W = N.toString();
				i(W, Y);
			}
			r && r(Kb(Y));
		}),
		q = Jb({
			theme: u,
			editable: g,
			readOnly: S,
			placeholder: m,
			indentWithTab: C,
			basicSetup: k
		}),
		_ = [F, Q, ...q];
	return (
		o && typeof o == 'function' && _.push(j.updateListener.of(o)),
		(_ = _.concat(l)),
		B.useLayoutEffect(() => {
			if ($ && !A) {
				var Y = { doc: e, selection: t, extensions: _ },
					N = P ? oe.fromJSON(P.json, Y, P.fields) : oe.create(Y);
				if ((E(N), !w)) {
					var W = new j({ state: N, parent: $, root: x });
					b(W), s && s(W, N);
				}
			}
			return () => {
				w && (E(void 0), b(void 0));
			};
		}, [$, A]),
		B.useEffect(() => {
			n.container && T(n.container);
		}, [n.container]),
		B.useEffect(
			() => () => {
				w && (w.destroy(), b(void 0));
			},
			[w]
		),
		B.useEffect(() => {
			a && w && w.focus();
		}, [a, w]),
		B.useEffect(() => {
			w && w.dispatch({ effects: te.reconfigure.of(_) });
		}, [u, l, h, c, f, d, p, O, m, g, S, C, k, i, o]),
		B.useEffect(() => {
			if (e !== void 0) {
				var Y = w ? w.state.doc.toString() : '';
				w &&
					e !== Y &&
					w.dispatch({
						changes: { from: 0, to: Y.length, insert: e || '' },
						annotations: [mh.of(!0)]
					});
			}
		}, [e, w]),
		{
			state: A,
			setState: E,
			view: w,
			setView: b,
			container: $,
			setContainer: T
		}
	);
}
var ix = [
		'className',
		'value',
		'selection',
		'extensions',
		'onChange',
		'onStatistics',
		'onCreateEditor',
		'onUpdate',
		'autoFocus',
		'theme',
		'height',
		'minHeight',
		'maxHeight',
		'width',
		'minWidth',
		'maxWidth',
		'basicSetup',
		'placeholder',
		'indentWithTab',
		'editable',
		'readOnly',
		'root',
		'initialState'
	],
	lp = B.forwardRef((n, e) => {
		var {
				className: t,
				value: i = '',
				selection: r,
				extensions: s = [],
				onChange: o,
				onStatistics: l,
				onCreateEditor: a,
				onUpdate: u,
				autoFocus: h,
				theme: c = 'light',
				height: f,
				minHeight: d,
				maxHeight: p,
				width: O,
				minWidth: m,
				maxWidth: g,
				basicSetup: S,
				placeholder: C,
				indentWithTab: k,
				editable: x,
				readOnly: P,
				root: $,
				initialState: T
			} = n,
			w = Zp(n, ix),
			b = B.useRef(null),
			{
				state: A,
				view: E,
				container: Q,
				setContainer: F
			} = tx({
				root: $,
				value: i,
				autoFocus: h,
				theme: c,
				height: f,
				minHeight: d,
				maxHeight: p,
				width: O,
				minWidth: m,
				maxWidth: g,
				basicSetup: S,
				placeholder: C,
				indentWithTab: k,
				editable: x,
				readOnly: P,
				selection: r,
				onChange: o,
				onStatistics: l,
				onCreateEditor: a,
				onUpdate: u,
				extensions: s,
				initialState: T
			});
		B.useImperativeHandle(e, () => ({ editor: b.current, state: A, view: E }), [b, Q, A, E]);
		var q = B.useCallback(
			(Y) => {
				(b.current = Y), F(Y);
			},
			[F]
		);
		if (typeof i != 'string') throw new Error('value must be typeof string but got ' + typeof i);
		var _ = typeof c == 'string' ? 'cm-theme-' + c : 'cm-theme';
		return D.jsx('div', Rp({ ref: q, className: '' + _ + (t ? ' ' + t : '') }, w));
	});
lp.displayName = 'CodeMirror';
var gh = {};
class hs {
	constructor(e, t, i, r, s, o, l, a, u, h = 0, c) {
		(this.p = e),
			(this.stack = t),
			(this.state = i),
			(this.reducePos = r),
			(this.pos = s),
			(this.score = o),
			(this.buffer = l),
			(this.bufferBase = a),
			(this.curContext = u),
			(this.lookAhead = h),
			(this.parent = c);
	}
	toString() {
		return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? '!' + this.score : ''}`;
	}
	static start(e, t, i = 0) {
		let r = e.parser.context;
		return new hs(e, [], t, i, i, 0, [], 0, r ? new yh(r, r.start) : null, 0, null);
	}
	get context() {
		return this.curContext ? this.curContext.context : null;
	}
	pushState(e, t) {
		this.stack.push(this.state, t, this.bufferBase + this.buffer.length), (this.state = e);
	}
	reduce(e) {
		var t;
		let i = e >> 19,
			r = e & 65535,
			{ parser: s } = this.p;
		this.reducePos < this.pos - 25 && this.setLookAhead(this.pos);
		let o = s.dynamicPrecedence(r);
		if ((o && (this.score += o), i == 0)) {
			this.pushState(s.getGoto(this.state, r, !0), this.reducePos),
				r < s.minRepeatTerm && this.storeNode(r, this.reducePos, this.reducePos, 4, !0),
				this.reduceContext(r, this.reducePos);
			return;
		}
		let l = this.stack.length - (i - 1) * 3 - (e & 262144 ? 6 : 0),
			a = l ? this.stack[l - 2] : this.p.ranges[0].from,
			u = this.reducePos - a;
		u >= 2e3 &&
			!(!((t = this.p.parser.nodeSet.types[r]) === null || t === void 0) && t.isAnonymous) &&
			(a == this.p.lastBigReductionStart
				? (this.p.bigReductionCount++, (this.p.lastBigReductionSize = u))
				: this.p.lastBigReductionSize < u &&
					((this.p.bigReductionCount = 1),
					(this.p.lastBigReductionStart = a),
					(this.p.lastBigReductionSize = u)));
		let h = l ? this.stack[l - 1] : 0,
			c = this.bufferBase + this.buffer.length - h;
		if (r < s.minRepeatTerm || e & 131072) {
			let f = s.stateFlag(this.state, 1) ? this.pos : this.reducePos;
			this.storeNode(r, a, f, c + 4, !0);
		}
		if (e & 262144) this.state = this.stack[l];
		else {
			let f = this.stack[l - 3];
			this.state = s.getGoto(f, r, !0);
		}
		for (; this.stack.length > l; ) this.stack.pop();
		this.reduceContext(r, a);
	}
	storeNode(e, t, i, r = 4, s = !1) {
		if (
			e == 0 &&
			(!this.stack.length ||
				this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)
		) {
			let o = this,
				l = this.buffer.length;
			if (
				(l == 0 && o.parent && ((l = o.bufferBase - o.parent.bufferBase), (o = o.parent)),
				l > 0 && o.buffer[l - 4] == 0 && o.buffer[l - 1] > -1)
			) {
				if (t == i) return;
				if (o.buffer[l - 2] >= t) {
					o.buffer[l - 2] = i;
					return;
				}
			}
		}
		if (!s || this.pos == i) this.buffer.push(e, t, i, r);
		else {
			let o = this.buffer.length;
			if (o > 0 && this.buffer[o - 4] != 0)
				for (; o > 0 && this.buffer[o - 2] > i; )
					(this.buffer[o] = this.buffer[o - 4]),
						(this.buffer[o + 1] = this.buffer[o - 3]),
						(this.buffer[o + 2] = this.buffer[o - 2]),
						(this.buffer[o + 3] = this.buffer[o - 1]),
						(o -= 4),
						r > 4 && (r -= 4);
			(this.buffer[o] = e),
				(this.buffer[o + 1] = t),
				(this.buffer[o + 2] = i),
				(this.buffer[o + 3] = r);
		}
	}
	shift(e, t, i, r) {
		if (e & 131072) this.pushState(e & 65535, this.pos);
		else if ((e & 262144) == 0) {
			let s = e,
				{ parser: o } = this.p;
			(r > this.pos || t <= o.maxNode) &&
				((this.pos = r), o.stateFlag(s, 1) || (this.reducePos = r)),
				this.pushState(s, i),
				this.shiftContext(t, i),
				t <= o.maxNode && this.buffer.push(t, i, r, 4);
		} else
			(this.pos = r),
				this.shiftContext(t, i),
				t <= this.p.parser.maxNode && this.buffer.push(t, i, r, 4);
	}
	apply(e, t, i, r) {
		e & 65536 ? this.reduce(e) : this.shift(e, t, i, r);
	}
	useNode(e, t) {
		let i = this.p.reused.length - 1;
		(i < 0 || this.p.reused[i] != e) && (this.p.reused.push(e), i++);
		let r = this.pos;
		(this.reducePos = this.pos = r + e.length),
			this.pushState(t, r),
			this.buffer.push(i, r, this.reducePos, -1),
			this.curContext &&
				this.updateContext(
					this.curContext.tracker.reuse(
						this.curContext.context,
						e,
						this,
						this.p.stream.reset(this.pos - e.length)
					)
				);
	}
	split() {
		let e = this,
			t = e.buffer.length;
		for (; t > 0 && e.buffer[t - 2] > e.reducePos; ) t -= 4;
		let i = e.buffer.slice(t),
			r = e.bufferBase + t;
		for (; e && r == e.bufferBase; ) e = e.parent;
		return new hs(
			this.p,
			this.stack.slice(),
			this.state,
			this.reducePos,
			this.pos,
			this.score,
			i,
			r,
			this.curContext,
			this.lookAhead,
			e
		);
	}
	recoverByDelete(e, t) {
		let i = e <= this.p.parser.maxNode;
		i && this.storeNode(e, this.pos, t, 4),
			this.storeNode(0, this.pos, t, i ? 8 : 4),
			(this.pos = this.reducePos = t),
			(this.score -= 190);
	}
	canShift(e) {
		for (let t = new nx(this); ; ) {
			let i = this.p.parser.stateSlot(t.state, 4) || this.p.parser.hasAction(t.state, e);
			if (i == 0) return !1;
			if ((i & 65536) == 0) return !0;
			t.reduce(i);
		}
	}
	recoverByInsert(e) {
		if (this.stack.length >= 300) return [];
		let t = this.p.parser.nextStates(this.state);
		if (t.length > 8 || this.stack.length >= 120) {
			let r = [];
			for (let s = 0, o; s < t.length; s += 2)
				(o = t[s + 1]) != this.state && this.p.parser.hasAction(o, e) && r.push(t[s], o);
			if (this.stack.length < 120)
				for (let s = 0; r.length < 8 && s < t.length; s += 2) {
					let o = t[s + 1];
					r.some((l, a) => a & 1 && l == o) || r.push(t[s], o);
				}
			t = r;
		}
		let i = [];
		for (let r = 0; r < t.length && i.length < 4; r += 2) {
			let s = t[r + 1];
			if (s == this.state) continue;
			let o = this.split();
			o.pushState(s, this.pos),
				o.storeNode(0, o.pos, o.pos, 4, !0),
				o.shiftContext(t[r], this.pos),
				(o.reducePos = this.pos),
				(o.score -= 200),
				i.push(o);
		}
		return i;
	}
	forceReduce() {
		let { parser: e } = this.p,
			t = e.stateSlot(this.state, 5);
		if ((t & 65536) == 0) return !1;
		if (!e.validAction(this.state, t)) {
			let i = t >> 19,
				r = t & 65535,
				s = this.stack.length - i * 3;
			if (s < 0 || e.getGoto(this.stack[s], r, !1) < 0) {
				let o = this.findForcedReduction();
				if (o == null) return !1;
				t = o;
			}
			this.storeNode(0, this.pos, this.pos, 4, !0), (this.score -= 100);
		}
		return (this.reducePos = this.pos), this.reduce(t), !0;
	}
	findForcedReduction() {
		let { parser: e } = this.p,
			t = [],
			i = (r, s) => {
				if (!t.includes(r))
					return (
						t.push(r),
						e.allActions(r, (o) => {
							if (!(o & 393216))
								if (o & 65536) {
									let l = (o >> 19) - s;
									if (l > 1) {
										let a = o & 65535,
											u = this.stack.length - l * 3;
										if (u >= 0 && e.getGoto(this.stack[u], a, !1) >= 0)
											return (l << 19) | 65536 | a;
									}
								} else {
									let l = i(o, s + 1);
									if (l != null) return l;
								}
						})
					);
			};
		return i(this.state, 0);
	}
	forceAll() {
		for (; !this.p.parser.stateFlag(this.state, 2); )
			if (!this.forceReduce()) {
				this.storeNode(0, this.pos, this.pos, 4, !0);
				break;
			}
		return this;
	}
	get deadEnd() {
		if (this.stack.length != 3) return !1;
		let { parser: e } = this.p;
		return e.data[e.stateSlot(this.state, 1)] == 65535 && !e.stateSlot(this.state, 4);
	}
	restart() {
		this.storeNode(0, this.pos, this.pos, 4, !0),
			(this.state = this.stack[0]),
			(this.stack.length = 0);
	}
	sameState(e) {
		if (this.state != e.state || this.stack.length != e.stack.length) return !1;
		for (let t = 0; t < this.stack.length; t += 3) if (this.stack[t] != e.stack[t]) return !1;
		return !0;
	}
	get parser() {
		return this.p.parser;
	}
	dialectEnabled(e) {
		return this.p.parser.dialect.flags[e];
	}
	shiftContext(e, t) {
		this.curContext &&
			this.updateContext(
				this.curContext.tracker.shift(this.curContext.context, e, this, this.p.stream.reset(t))
			);
	}
	reduceContext(e, t) {
		this.curContext &&
			this.updateContext(
				this.curContext.tracker.reduce(this.curContext.context, e, this, this.p.stream.reset(t))
			);
	}
	emitContext() {
		let e = this.buffer.length - 1;
		(e < 0 || this.buffer[e] != -3) &&
			this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
	}
	emitLookAhead() {
		let e = this.buffer.length - 1;
		(e < 0 || this.buffer[e] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
	}
	updateContext(e) {
		if (e != this.curContext.context) {
			let t = new yh(this.curContext.tracker, e);
			t.hash != this.curContext.hash && this.emitContext(), (this.curContext = t);
		}
	}
	setLookAhead(e) {
		e > this.lookAhead && (this.emitLookAhead(), (this.lookAhead = e));
	}
	close() {
		this.curContext && this.curContext.tracker.strict && this.emitContext(),
			this.lookAhead > 0 && this.emitLookAhead();
	}
}
class yh {
	constructor(e, t) {
		(this.tracker = e), (this.context = t), (this.hash = e.strict ? e.hash(t) : 0);
	}
}
class nx {
	constructor(e) {
		(this.start = e),
			(this.state = e.state),
			(this.stack = e.stack),
			(this.base = this.stack.length);
	}
	reduce(e) {
		let t = e & 65535,
			i = e >> 19;
		i == 0
			? (this.stack == this.start.stack && (this.stack = this.stack.slice()),
				this.stack.push(this.state, 0, 0),
				(this.base += 3))
			: (this.base -= (i - 1) * 3);
		let r = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
		this.state = r;
	}
}
class cs {
	constructor(e, t, i) {
		(this.stack = e),
			(this.pos = t),
			(this.index = i),
			(this.buffer = e.buffer),
			this.index == 0 && this.maybeNext();
	}
	static create(e, t = e.bufferBase + e.buffer.length) {
		return new cs(e, t, t - e.bufferBase);
	}
	maybeNext() {
		let e = this.stack.parent;
		e != null &&
			((this.index = this.stack.bufferBase - e.bufferBase),
			(this.stack = e),
			(this.buffer = e.buffer));
	}
	get id() {
		return this.buffer[this.index - 4];
	}
	get start() {
		return this.buffer[this.index - 3];
	}
	get end() {
		return this.buffer[this.index - 2];
	}
	get size() {
		return this.buffer[this.index - 1];
	}
	next() {
		(this.index -= 4), (this.pos -= 4), this.index == 0 && this.maybeNext();
	}
	fork() {
		return new cs(this.stack, this.pos, this.index);
	}
}
function vn(n, e = Uint16Array) {
	if (typeof n != 'string') return n;
	let t = null;
	for (let i = 0, r = 0; i < n.length; ) {
		let s = 0;
		for (;;) {
			let o = n.charCodeAt(i++),
				l = !1;
			if (o == 126) {
				s = 65535;
				break;
			}
			o >= 92 && o--, o >= 34 && o--;
			let a = o - 32;
			if ((a >= 46 && ((a -= 46), (l = !0)), (s += a), l)) break;
			s *= 46;
		}
		t ? (t[r++] = s) : (t = new e(s));
	}
	return t;
}
class Wr {
	constructor() {
		(this.start = -1),
			(this.value = -1),
			(this.end = -1),
			(this.extended = -1),
			(this.lookAhead = 0),
			(this.mask = 0),
			(this.context = 0);
	}
}
const bh = new Wr();
class rx {
	constructor(e, t) {
		(this.input = e),
			(this.ranges = t),
			(this.chunk = ''),
			(this.chunkOff = 0),
			(this.chunk2 = ''),
			(this.chunk2Pos = 0),
			(this.next = -1),
			(this.token = bh),
			(this.rangeIndex = 0),
			(this.pos = this.chunkPos = t[0].from),
			(this.range = t[0]),
			(this.end = t[t.length - 1].to),
			this.readNext();
	}
	resolveOffset(e, t) {
		let i = this.range,
			r = this.rangeIndex,
			s = this.pos + e;
		for (; s < i.from; ) {
			if (!r) return null;
			let o = this.ranges[--r];
			(s -= i.from - o.to), (i = o);
		}
		for (; t < 0 ? s > i.to : s >= i.to; ) {
			if (r == this.ranges.length - 1) return null;
			let o = this.ranges[++r];
			(s += o.from - i.to), (i = o);
		}
		return s;
	}
	clipPos(e) {
		if (e >= this.range.from && e < this.range.to) return e;
		for (let t of this.ranges) if (t.to > e) return Math.max(e, t.from);
		return this.end;
	}
	peek(e) {
		let t = this.chunkOff + e,
			i,
			r;
		if (t >= 0 && t < this.chunk.length) (i = this.pos + e), (r = this.chunk.charCodeAt(t));
		else {
			let s = this.resolveOffset(e, 1);
			if (s == null) return -1;
			if (((i = s), i >= this.chunk2Pos && i < this.chunk2Pos + this.chunk2.length))
				r = this.chunk2.charCodeAt(i - this.chunk2Pos);
			else {
				let o = this.rangeIndex,
					l = this.range;
				for (; l.to <= i; ) l = this.ranges[++o];
				(this.chunk2 = this.input.chunk((this.chunk2Pos = i))),
					i + this.chunk2.length > l.to && (this.chunk2 = this.chunk2.slice(0, l.to - i)),
					(r = this.chunk2.charCodeAt(0));
			}
		}
		return i >= this.token.lookAhead && (this.token.lookAhead = i + 1), r;
	}
	acceptToken(e, t = 0) {
		let i = t ? this.resolveOffset(t, -1) : this.pos;
		if (i == null || i < this.token.start) throw new RangeError('Token end out of bounds');
		(this.token.value = e), (this.token.end = i);
	}
	acceptTokenTo(e, t) {
		(this.token.value = e), (this.token.end = t);
	}
	getChunk() {
		if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
			let { chunk: e, chunkPos: t } = this;
			(this.chunk = this.chunk2),
				(this.chunkPos = this.chunk2Pos),
				(this.chunk2 = e),
				(this.chunk2Pos = t),
				(this.chunkOff = this.pos - this.chunkPos);
		} else {
			(this.chunk2 = this.chunk), (this.chunk2Pos = this.chunkPos);
			let e = this.input.chunk(this.pos),
				t = this.pos + e.length;
			(this.chunk = t > this.range.to ? e.slice(0, this.range.to - this.pos) : e),
				(this.chunkPos = this.pos),
				(this.chunkOff = 0);
		}
	}
	readNext() {
		return this.chunkOff >= this.chunk.length &&
			(this.getChunk(), this.chunkOff == this.chunk.length)
			? (this.next = -1)
			: (this.next = this.chunk.charCodeAt(this.chunkOff));
	}
	advance(e = 1) {
		for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
			if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
			(e -= this.range.to - this.pos),
				(this.range = this.ranges[++this.rangeIndex]),
				(this.pos = this.range.from);
		}
		return (
			(this.pos += e),
			this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1),
			this.readNext()
		);
	}
	setDone() {
		return (
			(this.pos = this.chunkPos = this.end),
			(this.range = this.ranges[(this.rangeIndex = this.ranges.length - 1)]),
			(this.chunk = ''),
			(this.next = -1)
		);
	}
	reset(e, t) {
		if (
			(t
				? ((this.token = t), (t.start = e), (t.lookAhead = e + 1), (t.value = t.extended = -1))
				: (this.token = bh),
			this.pos != e)
		) {
			if (((this.pos = e), e == this.end)) return this.setDone(), this;
			for (; e < this.range.from; ) this.range = this.ranges[--this.rangeIndex];
			for (; e >= this.range.to; ) this.range = this.ranges[++this.rangeIndex];
			e >= this.chunkPos && e < this.chunkPos + this.chunk.length
				? (this.chunkOff = e - this.chunkPos)
				: ((this.chunk = ''), (this.chunkOff = 0)),
				this.readNext();
		}
		return this;
	}
	read(e, t) {
		if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length)
			return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
		if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length)
			return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
		if (e >= this.range.from && t <= this.range.to) return this.input.read(e, t);
		let i = '';
		for (let r of this.ranges) {
			if (r.from >= t) break;
			r.to > e && (i += this.input.read(Math.max(r.from, e), Math.min(r.to, t)));
		}
		return i;
	}
}
class Ki {
	constructor(e, t) {
		(this.data = e), (this.id = t);
	}
	token(e, t) {
		let { parser: i } = t.p;
		ap(this.data, e, t, this.id, i.data, i.tokenPrecTable);
	}
}
Ki.prototype.contextual = Ki.prototype.fallback = Ki.prototype.extend = !1;
class Dl {
	constructor(e, t, i) {
		(this.precTable = t), (this.elseToken = i), (this.data = typeof e == 'string' ? vn(e) : e);
	}
	token(e, t) {
		let i = e.pos,
			r = 0;
		for (;;) {
			let s = e.next < 0,
				o = e.resolveOffset(1, 1);
			if ((ap(this.data, e, t, 0, this.data, this.precTable), e.token.value > -1)) break;
			if (this.elseToken == null) return;
			if ((s || r++, o == null)) break;
			e.reset(o, e.token);
		}
		r && (e.reset(i, e.token), e.acceptToken(this.elseToken, r));
	}
}
Dl.prototype.contextual = Ki.prototype.fallback = Ki.prototype.extend = !1;
class $s {
	constructor(e, t = {}) {
		(this.token = e),
			(this.contextual = !!t.contextual),
			(this.fallback = !!t.fallback),
			(this.extend = !!t.extend);
	}
}
function ap(n, e, t, i, r, s) {
	let o = 0,
		l = 1 << i,
		{ dialect: a } = t.p.parser;
	e: for (; (l & n[o]) != 0; ) {
		let u = n[o + 1];
		for (let d = o + 3; d < u; d += 2)
			if ((n[d + 1] & l) > 0) {
				let p = n[d];
				if (
					a.allows(p) &&
					(e.token.value == -1 || e.token.value == p || sx(p, e.token.value, r, s))
				) {
					e.acceptToken(p);
					break;
				}
			}
		let h = e.next,
			c = 0,
			f = n[o + 2];
		if (e.next < 0 && f > c && n[u + f * 3 - 3] == 65535) {
			o = n[u + f * 3 - 1];
			continue e;
		}
		for (; c < f; ) {
			let d = (c + f) >> 1,
				p = u + d + (d << 1),
				O = n[p],
				m = n[p + 1] || 65536;
			if (h < O) f = d;
			else if (h >= m) c = d + 1;
			else {
				(o = n[p + 2]), e.advance();
				continue e;
			}
		}
		break;
	}
}
function xh(n, e, t) {
	for (let i = e, r; (r = n[i]) != 65535; i++) if (r == t) return i - e;
	return -1;
}
function sx(n, e, t, i) {
	let r = xh(t, i, e);
	return r < 0 || xh(t, i, n) < r;
}
const tt = typeof process < 'u' && gh && /\bparse\b/.test(gh.LOG);
let Oo = null;
function Dh(n, e, t) {
	let i = n.cursor($e.IncludeAnonymous);
	for (i.moveTo(e); ; )
		if (!(t < 0 ? i.childBefore(e) : i.childAfter(e)))
			for (;;) {
				if ((t < 0 ? i.to < e : i.from > e) && !i.type.isError)
					return t < 0
						? Math.max(0, Math.min(i.to - 1, e - 25))
						: Math.min(n.length, Math.max(i.from + 1, e + 25));
				if (t < 0 ? i.prevSibling() : i.nextSibling()) break;
				if (!i.parent()) return t < 0 ? 0 : n.length;
			}
}
class ox {
	constructor(e, t) {
		(this.fragments = e),
			(this.nodeSet = t),
			(this.i = 0),
			(this.fragment = null),
			(this.safeFrom = -1),
			(this.safeTo = -1),
			(this.trees = []),
			(this.start = []),
			(this.index = []),
			this.nextFragment();
	}
	nextFragment() {
		let e = (this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++]);
		if (e) {
			for (
				this.safeFrom = e.openStart ? Dh(e.tree, e.from + e.offset, 1) - e.offset : e.from,
					this.safeTo = e.openEnd ? Dh(e.tree, e.to + e.offset, -1) - e.offset : e.to;
				this.trees.length;

			)
				this.trees.pop(), this.start.pop(), this.index.pop();
			this.trees.push(e.tree),
				this.start.push(-e.offset),
				this.index.push(0),
				(this.nextStart = this.safeFrom);
		} else this.nextStart = 1e9;
	}
	nodeAt(e) {
		if (e < this.nextStart) return null;
		for (; this.fragment && this.safeTo <= e; ) this.nextFragment();
		if (!this.fragment) return null;
		for (;;) {
			let t = this.trees.length - 1;
			if (t < 0) return this.nextFragment(), null;
			let i = this.trees[t],
				r = this.index[t];
			if (r == i.children.length) {
				this.trees.pop(), this.start.pop(), this.index.pop();
				continue;
			}
			let s = i.children[r],
				o = this.start[t] + i.positions[r];
			if (o > e) return (this.nextStart = o), null;
			if (s instanceof Se) {
				if (o == e) {
					if (o < this.safeFrom) return null;
					let l = o + s.length;
					if (l <= this.safeTo) {
						let a = s.prop(ne.lookAhead);
						if (!a || l + a < this.fragment.to) return s;
					}
				}
				this.index[t]++,
					o + s.length >= Math.max(this.safeFrom, e) &&
						(this.trees.push(s), this.start.push(o), this.index.push(0));
			} else this.index[t]++, (this.nextStart = o + s.length);
		}
	}
}
class lx {
	constructor(e, t) {
		(this.stream = t),
			(this.tokens = []),
			(this.mainToken = null),
			(this.actions = []),
			(this.tokens = e.tokenizers.map((i) => new Wr()));
	}
	getActions(e) {
		let t = 0,
			i = null,
			{ parser: r } = e.p,
			{ tokenizers: s } = r,
			o = r.stateSlot(e.state, 3),
			l = e.curContext ? e.curContext.hash : 0,
			a = 0;
		for (let u = 0; u < s.length; u++) {
			if (((1 << u) & o) == 0) continue;
			let h = s[u],
				c = this.tokens[u];
			if (
				!(i && !h.fallback) &&
				((h.contextual || c.start != e.pos || c.mask != o || c.context != l) &&
					(this.updateCachedToken(c, h, e), (c.mask = o), (c.context = l)),
				c.lookAhead > c.end + 25 && (a = Math.max(c.lookAhead, a)),
				c.value != 0)
			) {
				let f = t;
				if (
					(c.extended > -1 && (t = this.addActions(e, c.extended, c.end, t)),
					(t = this.addActions(e, c.value, c.end, t)),
					!h.extend && ((i = c), t > f))
				)
					break;
			}
		}
		for (; this.actions.length > t; ) this.actions.pop();
		return (
			a && e.setLookAhead(a),
			!i &&
				e.pos == this.stream.end &&
				((i = new Wr()),
				(i.value = e.p.parser.eofTerm),
				(i.start = i.end = e.pos),
				(t = this.addActions(e, i.value, i.end, t))),
			(this.mainToken = i),
			this.actions
		);
	}
	getMainToken(e) {
		if (this.mainToken) return this.mainToken;
		let t = new Wr(),
			{ pos: i, p: r } = e;
		return (
			(t.start = i),
			(t.end = Math.min(i + 1, r.stream.end)),
			(t.value = i == r.stream.end ? r.parser.eofTerm : 0),
			t
		);
	}
	updateCachedToken(e, t, i) {
		let r = this.stream.clipPos(i.pos);
		if ((t.token(this.stream.reset(r, e), i), e.value > -1)) {
			let { parser: s } = i.p;
			for (let o = 0; o < s.specialized.length; o++)
				if (s.specialized[o] == e.value) {
					let l = s.specializers[o](this.stream.read(e.start, e.end), i);
					if (l >= 0 && i.p.parser.dialect.allows(l >> 1)) {
						(l & 1) == 0 ? (e.value = l >> 1) : (e.extended = l >> 1);
						break;
					}
				}
		} else (e.value = 0), (e.end = this.stream.clipPos(r + 1));
	}
	putAction(e, t, i, r) {
		for (let s = 0; s < r; s += 3) if (this.actions[s] == e) return r;
		return (this.actions[r++] = e), (this.actions[r++] = t), (this.actions[r++] = i), r;
	}
	addActions(e, t, i, r) {
		let { state: s } = e,
			{ parser: o } = e.p,
			{ data: l } = o;
		for (let a = 0; a < 2; a++)
			for (let u = o.stateSlot(s, a ? 2 : 1); ; u += 3) {
				if (l[u] == 65535)
					if (l[u + 1] == 1) u = qt(l, u + 2);
					else {
						r == 0 && l[u + 1] == 2 && (r = this.putAction(qt(l, u + 2), t, i, r));
						break;
					}
				l[u] == t && (r = this.putAction(qt(l, u + 1), t, i, r));
			}
		return r;
	}
}
class ax {
	constructor(e, t, i, r) {
		(this.parser = e),
			(this.input = t),
			(this.ranges = r),
			(this.recovering = 0),
			(this.nextStackID = 9812),
			(this.minStackPos = 0),
			(this.reused = []),
			(this.stoppedAt = null),
			(this.lastBigReductionStart = -1),
			(this.lastBigReductionSize = 0),
			(this.bigReductionCount = 0),
			(this.stream = new rx(t, r)),
			(this.tokens = new lx(e, this.stream)),
			(this.topTerm = e.top[1]);
		let { from: s } = r[0];
		(this.stacks = [hs.start(this, e.top[0], s)]),
			(this.fragments =
				i.length && this.stream.end - s > e.bufferLength * 4 ? new ox(i, e.nodeSet) : null);
	}
	get parsedPos() {
		return this.minStackPos;
	}
	advance() {
		let e = this.stacks,
			t = this.minStackPos,
			i = (this.stacks = []),
			r,
			s;
		if (this.bigReductionCount > 300 && e.length == 1) {
			let [o] = e;
			for (
				;
				o.forceReduce() &&
				o.stack.length &&
				o.stack[o.stack.length - 2] >= this.lastBigReductionStart;

			);
			this.bigReductionCount = this.lastBigReductionSize = 0;
		}
		for (let o = 0; o < e.length; o++) {
			let l = e[o];
			for (;;) {
				if (((this.tokens.mainToken = null), l.pos > t)) i.push(l);
				else {
					if (this.advanceStack(l, i, e)) continue;
					{
						r || ((r = []), (s = [])), r.push(l);
						let a = this.tokens.getMainToken(l);
						s.push(a.value, a.end);
					}
				}
				break;
			}
		}
		if (!i.length) {
			let o = r && cx(r);
			if (o) return tt && console.log('Finish with ' + this.stackID(o)), this.stackToTree(o);
			if (this.parser.strict)
				throw (
					(tt &&
						r &&
						console.log(
							'Stuck with token ' +
								(this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : 'none')
						),
					new SyntaxError('No parse at ' + t))
				);
			this.recovering || (this.recovering = 5);
		}
		if (this.recovering && r) {
			let o =
				this.stoppedAt != null && r[0].pos > this.stoppedAt ? r[0] : this.runRecovery(r, s, i);
			if (o)
				return tt && console.log('Force-finish ' + this.stackID(o)), this.stackToTree(o.forceAll());
		}
		if (this.recovering) {
			let o = this.recovering == 1 ? 1 : this.recovering * 3;
			if (i.length > o) for (i.sort((l, a) => a.score - l.score); i.length > o; ) i.pop();
			i.some((l) => l.reducePos > t) && this.recovering--;
		} else if (i.length > 1) {
			e: for (let o = 0; o < i.length - 1; o++) {
				let l = i[o];
				for (let a = o + 1; a < i.length; a++) {
					let u = i[a];
					if (l.sameState(u) || (l.buffer.length > 500 && u.buffer.length > 500))
						if ((l.score - u.score || l.buffer.length - u.buffer.length) > 0) i.splice(a--, 1);
						else {
							i.splice(o--, 1);
							continue e;
						}
				}
			}
			i.length > 12 && i.splice(12, i.length - 12);
		}
		this.minStackPos = i[0].pos;
		for (let o = 1; o < i.length; o++) i[o].pos < this.minStackPos && (this.minStackPos = i[o].pos);
		return null;
	}
	stopAt(e) {
		if (this.stoppedAt != null && this.stoppedAt < e)
			throw new RangeError("Can't move stoppedAt forward");
		this.stoppedAt = e;
	}
	advanceStack(e, t, i) {
		let r = e.pos,
			{ parser: s } = this,
			o = tt ? this.stackID(e) + ' -> ' : '';
		if (this.stoppedAt != null && r > this.stoppedAt) return e.forceReduce() ? e : null;
		if (this.fragments) {
			let u = e.curContext && e.curContext.tracker.strict,
				h = u ? e.curContext.hash : 0;
			for (let c = this.fragments.nodeAt(r); c; ) {
				let f = this.parser.nodeSet.types[c.type.id] == c.type ? s.getGoto(e.state, c.type.id) : -1;
				if (f > -1 && c.length && (!u || (c.prop(ne.contextHash) || 0) == h))
					return (
						e.useNode(c, f),
						tt && console.log(o + this.stackID(e) + ` (via reuse of ${s.getName(c.type.id)})`),
						!0
					);
				if (!(c instanceof Se) || c.children.length == 0 || c.positions[0] > 0) break;
				let d = c.children[0];
				if (d instanceof Se && c.positions[0] == 0) c = d;
				else break;
			}
		}
		let l = s.stateSlot(e.state, 4);
		if (l > 0)
			return (
				e.reduce(l),
				tt && console.log(o + this.stackID(e) + ` (via always-reduce ${s.getName(l & 65535)})`),
				!0
			);
		if (e.stack.length >= 8400) for (; e.stack.length > 6e3 && e.forceReduce(); );
		let a = this.tokens.getActions(e);
		for (let u = 0; u < a.length; ) {
			let h = a[u++],
				c = a[u++],
				f = a[u++],
				d = u == a.length || !i,
				p = d ? e : e.split(),
				O = this.tokens.mainToken;
			if (
				(p.apply(h, c, O ? O.start : p.pos, f),
				tt &&
					console.log(
						o +
							this.stackID(p) +
							` (via ${(h & 65536) == 0 ? 'shift' : `reduce of ${s.getName(h & 65535)}`} for ${s.getName(c)} @ ${r}${p == e ? '' : ', split'})`
					),
				d)
			)
				return !0;
			p.pos > r ? t.push(p) : i.push(p);
		}
		return !1;
	}
	advanceFully(e, t) {
		let i = e.pos;
		for (;;) {
			if (!this.advanceStack(e, null, null)) return !1;
			if (e.pos > i) return Sh(e, t), !0;
		}
	}
	runRecovery(e, t, i) {
		let r = null,
			s = !1;
		for (let o = 0; o < e.length; o++) {
			let l = e[o],
				a = t[o << 1],
				u = t[(o << 1) + 1],
				h = tt ? this.stackID(l) + ' -> ' : '';
			if (
				l.deadEnd &&
				(s ||
					((s = !0),
					l.restart(),
					tt && console.log(h + this.stackID(l) + ' (restarted)'),
					this.advanceFully(l, i)))
			)
				continue;
			let c = l.split(),
				f = h;
			for (
				let d = 0;
				c.forceReduce() &&
				d < 10 &&
				(tt && console.log(f + this.stackID(c) + ' (via force-reduce)'), !this.advanceFully(c, i));
				d++
			)
				tt && (f = this.stackID(c) + ' -> ');
			for (let d of l.recoverByInsert(a))
				tt && console.log(h + this.stackID(d) + ' (via recover-insert)'), this.advanceFully(d, i);
			this.stream.end > l.pos
				? (u == l.pos && (u++, (a = 0)),
					l.recoverByDelete(a, u),
					tt &&
						console.log(h + this.stackID(l) + ` (via recover-delete ${this.parser.getName(a)})`),
					Sh(l, i))
				: (!r || r.score < l.score) && (r = l);
		}
		return r;
	}
	stackToTree(e) {
		return (
			e.close(),
			Se.build({
				buffer: cs.create(e),
				nodeSet: this.parser.nodeSet,
				topID: this.topTerm,
				maxBufferLength: this.parser.bufferLength,
				reused: this.reused,
				start: this.ranges[0].from,
				length: e.pos - this.ranges[0].from,
				minRepeatType: this.parser.minRepeatTerm
			})
		);
	}
	stackID(e) {
		let t = (Oo || (Oo = new WeakMap())).get(e);
		return t || Oo.set(e, (t = String.fromCodePoint(this.nextStackID++))), t + e;
	}
}
function Sh(n, e) {
	for (let t = 0; t < e.length; t++) {
		let i = e[t];
		if (i.pos == n.pos && i.sameState(n)) {
			e[t].score < n.score && (e[t] = n);
			return;
		}
	}
	e.push(n);
}
class ux {
	constructor(e, t, i) {
		(this.source = e), (this.flags = t), (this.disabled = i);
	}
	allows(e) {
		return !this.disabled || this.disabled[e] == 0;
	}
}
const mo = (n) => n;
class hx {
	constructor(e) {
		(this.start = e.start),
			(this.shift = e.shift || mo),
			(this.reduce = e.reduce || mo),
			(this.reuse = e.reuse || mo),
			(this.hash = e.hash || (() => 0)),
			(this.strict = e.strict !== !1);
	}
}
class fs extends Ef {
	constructor(e) {
		if ((super(), (this.wrappers = []), e.version != 14))
			throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);
		let t = e.nodeNames.split(' ');
		this.minRepeatTerm = t.length;
		for (let l = 0; l < e.repeatNodeCount; l++) t.push('');
		let i = Object.keys(e.topRules).map((l) => e.topRules[l][1]),
			r = [];
		for (let l = 0; l < t.length; l++) r.push([]);
		function s(l, a, u) {
			r[l].push([a, a.deserialize(String(u))]);
		}
		if (e.nodeProps)
			for (let l of e.nodeProps) {
				let a = l[0];
				typeof a == 'string' && (a = ne[a]);
				for (let u = 1; u < l.length; ) {
					let h = l[u++];
					if (h >= 0) s(h, a, l[u++]);
					else {
						let c = l[u + -h];
						for (let f = -h; f > 0; f--) s(l[u++], a, c);
						u++;
					}
				}
			}
		(this.nodeSet = new _l(
			t.map((l, a) =>
				Je.define({
					name: a >= this.minRepeatTerm ? void 0 : l,
					id: a,
					props: r[a],
					top: i.indexOf(a) > -1,
					error: a == 0,
					skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1
				})
			)
		)),
			e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)),
			(this.strict = !1),
			(this.bufferLength = Cf);
		let o = vn(e.tokenData);
		(this.context = e.context),
			(this.specializerSpecs = e.specialized || []),
			(this.specialized = new Uint16Array(this.specializerSpecs.length));
		for (let l = 0; l < this.specializerSpecs.length; l++)
			this.specialized[l] = this.specializerSpecs[l].term;
		(this.specializers = this.specializerSpecs.map(wh)),
			(this.states = vn(e.states, Uint32Array)),
			(this.data = vn(e.stateData)),
			(this.goto = vn(e.goto)),
			(this.maxTerm = e.maxTerm),
			(this.tokenizers = e.tokenizers.map((l) => (typeof l == 'number' ? new Ki(o, l) : l))),
			(this.topRules = e.topRules),
			(this.dialects = e.dialects || {}),
			(this.dynamicPrecedences = e.dynamicPrecedences || null),
			(this.tokenPrecTable = e.tokenPrec),
			(this.termNames = e.termNames || null),
			(this.maxNode = this.nodeSet.types.length - 1),
			(this.dialect = this.parseDialect()),
			(this.top = this.topRules[Object.keys(this.topRules)[0]]);
	}
	createParse(e, t, i) {
		let r = new ax(this, e, t, i);
		for (let s of this.wrappers) r = s(r, e, t, i);
		return r;
	}
	getGoto(e, t, i = !1) {
		let r = this.goto;
		if (t >= r[0]) return -1;
		for (let s = r[t + 1]; ; ) {
			let o = r[s++],
				l = o & 1,
				a = r[s++];
			if (l && i) return a;
			for (let u = s + (o >> 1); s < u; s++) if (r[s] == e) return a;
			if (l) return -1;
		}
	}
	hasAction(e, t) {
		let i = this.data;
		for (let r = 0; r < 2; r++)
			for (let s = this.stateSlot(e, r ? 2 : 1), o; ; s += 3) {
				if ((o = i[s]) == 65535)
					if (i[s + 1] == 1) o = i[(s = qt(i, s + 2))];
					else {
						if (i[s + 1] == 2) return qt(i, s + 2);
						break;
					}
				if (o == t || o == 0) return qt(i, s + 1);
			}
		return 0;
	}
	stateSlot(e, t) {
		return this.states[e * 6 + t];
	}
	stateFlag(e, t) {
		return (this.stateSlot(e, 0) & t) > 0;
	}
	validAction(e, t) {
		return !!this.allActions(e, (i) => (i == t ? !0 : null));
	}
	allActions(e, t) {
		let i = this.stateSlot(e, 4),
			r = i ? t(i) : void 0;
		for (let s = this.stateSlot(e, 1); r == null; s += 3) {
			if (this.data[s] == 65535)
				if (this.data[s + 1] == 1) s = qt(this.data, s + 2);
				else break;
			r = t(qt(this.data, s + 1));
		}
		return r;
	}
	nextStates(e) {
		let t = [];
		for (let i = this.stateSlot(e, 1); ; i += 3) {
			if (this.data[i] == 65535)
				if (this.data[i + 1] == 1) i = qt(this.data, i + 2);
				else break;
			if ((this.data[i + 2] & 1) == 0) {
				let r = this.data[i + 1];
				t.some((s, o) => o & 1 && s == r) || t.push(this.data[i], r);
			}
		}
		return t;
	}
	configure(e) {
		let t = Object.assign(Object.create(fs.prototype), this);
		if ((e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top)) {
			let i = this.topRules[e.top];
			if (!i) throw new RangeError(`Invalid top rule name ${e.top}`);
			t.top = i;
		}
		return (
			e.tokenizers &&
				(t.tokenizers = this.tokenizers.map((i) => {
					let r = e.tokenizers.find((s) => s.from == i);
					return r ? r.to : i;
				})),
			e.specializers &&
				((t.specializers = this.specializers.slice()),
				(t.specializerSpecs = this.specializerSpecs.map((i, r) => {
					let s = e.specializers.find((l) => l.from == i.external);
					if (!s) return i;
					let o = Object.assign(Object.assign({}, i), { external: s.to });
					return (t.specializers[r] = wh(o)), o;
				}))),
			e.contextTracker && (t.context = e.contextTracker),
			e.dialect && (t.dialect = this.parseDialect(e.dialect)),
			e.strict != null && (t.strict = e.strict),
			e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)),
			e.bufferLength != null && (t.bufferLength = e.bufferLength),
			t
		);
	}
	hasWrappers() {
		return this.wrappers.length > 0;
	}
	getName(e) {
		return this.termNames
			? this.termNames[e]
			: String((e <= this.maxNode && this.nodeSet.types[e].name) || e);
	}
	get eofTerm() {
		return this.maxNode + 1;
	}
	get topNode() {
		return this.nodeSet.types[this.top[1]];
	}
	dynamicPrecedence(e) {
		let t = this.dynamicPrecedences;
		return t == null ? 0 : t[e] || 0;
	}
	parseDialect(e) {
		let t = Object.keys(this.dialects),
			i = t.map(() => !1);
		if (e)
			for (let s of e.split(' ')) {
				let o = t.indexOf(s);
				o >= 0 && (i[o] = !0);
			}
		let r = null;
		for (let s = 0; s < t.length; s++)
			if (!i[s])
				for (let o = this.dialects[t[s]], l; (l = this.data[o++]) != 65535; )
					(r || (r = new Uint8Array(this.maxTerm + 1)))[l] = 1;
		return new ux(e, i, r);
	}
	static deserialize(e) {
		return new fs(e);
	}
}
function qt(n, e) {
	return n[e] | (n[e + 1] << 16);
}
function cx(n) {
	let e = null;
	for (let t of n) {
		let i = t.p.stoppedAt;
		(t.pos == t.p.stream.end || (i != null && t.pos > i)) &&
			t.p.parser.stateFlag(t.state, 2) &&
			(!e || e.score < t.score) &&
			(e = t);
	}
	return e;
}
function wh(n) {
	if (n.external) {
		let e = n.extend ? 1 : 0;
		return (t, i) => (n.external(t, i) << 1) | e;
	}
	return n.get;
}
const fx = 312,
	kh = 1,
	dx = 2,
	px = 3,
	Ox = 4,
	mx = 313,
	gx = 315,
	yx = 316,
	bx = 5,
	xx = 6,
	Dx = 0,
	Sl = [
		9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200,
		8201, 8202, 8232, 8233, 8239, 8287, 12288
	],
	up = 125,
	Sx = 59,
	wl = 47,
	wx = 42,
	kx = 43,
	vx = 45,
	Qx = 60,
	Cx = 44,
	Px = 63,
	Ax = 46,
	$x = new hx({
		start: !1,
		shift(n, e) {
			return e == bx || e == xx || e == gx ? n : e == yx;
		},
		strict: !1
	}),
	Ex = new $s(
		(n, e) => {
			let { next: t } = n;
			(t == up || t == -1 || e.context) && n.acceptToken(mx);
		},
		{ contextual: !0, fallback: !0 }
	),
	Zx = new $s(
		(n, e) => {
			let { next: t } = n,
				i;
			Sl.indexOf(t) > -1 ||
				(t == wl && ((i = n.peek(1)) == wl || i == wx)) ||
				(t != up && t != Sx && t != -1 && !e.context && n.acceptToken(fx));
		},
		{ contextual: !0 }
	),
	Rx = new $s(
		(n, e) => {
			let { next: t } = n;
			if (t == kx || t == vx) {
				if ((n.advance(), t == n.next)) {
					n.advance();
					let i = !e.context && e.canShift(kh);
					n.acceptToken(i ? kh : dx);
				}
			} else
				t == Px &&
					n.peek(1) == Ax &&
					(n.advance(), n.advance(), (n.next < 48 || n.next > 57) && n.acceptToken(px));
		},
		{ contextual: !0 }
	);
function go(n, e) {
	return (
		(n >= 65 && n <= 90) ||
		(n >= 97 && n <= 122) ||
		n == 95 ||
		n >= 192 ||
		(!e && n >= 48 && n <= 57)
	);
}
const Tx = new $s((n, e) => {
		if (n.next != Qx || !e.dialectEnabled(Dx) || (n.advance(), n.next == wl)) return;
		let t = 0;
		for (; Sl.indexOf(n.next) > -1; ) n.advance(), t++;
		if (go(n.next, !0)) {
			for (n.advance(), t++; go(n.next, !1); ) n.advance(), t++;
			for (; Sl.indexOf(n.next) > -1; ) n.advance(), t++;
			if (n.next == Cx) return;
			for (let i = 0; ; i++) {
				if (i == 7) {
					if (!go(n.next, !0)) return;
					break;
				}
				if (n.next != 'extends'.charCodeAt(i)) break;
				n.advance(), t++;
			}
		}
		n.acceptToken(Ox, -t);
	}),
	Fx = Zf({
		'get set async static': y.modifier,
		'for while do if else switch try catch finally return throw break continue default case':
			y.controlKeyword,
		'in of await yield void typeof delete instanceof': y.operatorKeyword,
		'let var const using function class extends': y.definitionKeyword,
		'import export from': y.moduleKeyword,
		'with debugger as new': y.keyword,
		TemplateString: y.special(y.string),
		super: y.atom,
		BooleanLiteral: y.bool,
		this: y.self,
		null: y.null,
		Star: y.modifier,
		VariableName: y.variableName,
		'CallExpression/VariableName TaggedTemplateExpression/VariableName': y.function(y.variableName),
		VariableDefinition: y.definition(y.variableName),
		Label: y.labelName,
		PropertyName: y.propertyName,
		PrivatePropertyName: y.special(y.propertyName),
		'CallExpression/MemberExpression/PropertyName': y.function(y.propertyName),
		'FunctionDeclaration/VariableDefinition': y.function(y.definition(y.variableName)),
		'ClassDeclaration/VariableDefinition': y.definition(y.className),
		PropertyDefinition: y.definition(y.propertyName),
		PrivatePropertyDefinition: y.definition(y.special(y.propertyName)),
		UpdateOp: y.updateOperator,
		'LineComment Hashbang': y.lineComment,
		BlockComment: y.blockComment,
		Number: y.number,
		String: y.string,
		Escape: y.escape,
		ArithOp: y.arithmeticOperator,
		LogicOp: y.logicOperator,
		BitOp: y.bitwiseOperator,
		CompareOp: y.compareOperator,
		RegExp: y.regexp,
		Equals: y.definitionOperator,
		Arrow: y.function(y.punctuation),
		': Spread': y.punctuation,
		'( )': y.paren,
		'[ ]': y.squareBracket,
		'{ }': y.brace,
		'InterpolationStart InterpolationEnd': y.special(y.brace),
		'.': y.derefOperator,
		', ;': y.separator,
		'@': y.meta,
		TypeName: y.typeName,
		TypeDefinition: y.definition(y.typeName),
		'type enum interface implements namespace module declare': y.definitionKeyword,
		'abstract global Privacy readonly override': y.modifier,
		'is keyof unique infer': y.operatorKeyword,
		JSXAttributeValue: y.attributeValue,
		JSXText: y.content,
		'JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag': y.angleBracket,
		'JSXIdentifier JSXNameSpacedName': y.tagName,
		'JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName': y.attributeName,
		'JSXBuiltin/JSXIdentifier': y.standard(y.tagName)
	}),
	Mx = {
		__proto__: null,
		export: 20,
		as: 25,
		from: 33,
		default: 36,
		async: 41,
		function: 42,
		extends: 54,
		this: 58,
		true: 66,
		false: 66,
		null: 78,
		void: 82,
		typeof: 86,
		super: 102,
		new: 136,
		delete: 148,
		yield: 157,
		await: 161,
		class: 166,
		public: 229,
		private: 229,
		protected: 229,
		readonly: 231,
		instanceof: 250,
		satisfies: 253,
		in: 254,
		const: 256,
		import: 290,
		keyof: 345,
		unique: 349,
		infer: 355,
		is: 391,
		abstract: 411,
		implements: 413,
		type: 415,
		let: 418,
		var: 420,
		using: 423,
		interface: 429,
		enum: 433,
		namespace: 439,
		module: 441,
		declare: 445,
		global: 449,
		for: 468,
		of: 477,
		while: 480,
		with: 484,
		do: 488,
		if: 492,
		else: 494,
		switch: 498,
		case: 504,
		try: 510,
		catch: 514,
		finally: 518,
		return: 522,
		throw: 526,
		break: 530,
		continue: 534,
		debugger: 538
	},
	Bx = {
		__proto__: null,
		async: 123,
		get: 125,
		set: 127,
		declare: 189,
		public: 191,
		private: 191,
		protected: 191,
		static: 193,
		abstract: 195,
		override: 197,
		readonly: 203,
		accessor: 205,
		new: 395
	},
	jx = { __proto__: null, '<': 187 },
	Wx = fs.deserialize({
		version: 14,
		states:
			"$=dO%TQ^OOO%[Q^OOO'_Q`OOP(lOWOOO*zQ?NdO'#CiO+RO!bO'#CjO+aO#tO'#CjO+oO!0LbO'#D^O.QQ^O'#DdO.bQ^O'#DoO%[Q^O'#DwO0fQ^O'#EPOOQ?Mr'#EX'#EXO1PQWO'#EUOOQO'#Em'#EmOOQO'#Ih'#IhO1XQWO'#GpO1dQWO'#ElO1iQWO'#ElO3hQ?NdO'#JmO6[Q?NdO'#JnO6uQWO'#F[O6zQ&jO'#FsOOQ?Mr'#Fe'#FeO7VO,YO'#FeO7eQ7[O'#FzO9RQWO'#FyOOQ?Mr'#Jn'#JnOOQ?Mp'#Jm'#JmO9WQWO'#GtOOQU'#KZ'#KZO9cQWO'#IUO9hQ?MxO'#IVOOQU'#JZ'#JZOOQU'#IZ'#IZQ`Q^OOO`Q^OOO9pQMnO'#DsO9wQ^O'#D{O:OQ^O'#D}O9^QWO'#GpO:VQ7[O'#CoO:eQWO'#EkO:pQWO'#EvO:uQ7[O'#FdO;dQWO'#GpOOQO'#K['#K[O;iQWO'#K[O;wQWO'#GxO;wQWO'#GyO;wQWO'#G{O9^QWO'#HOO<nQWO'#HRO>VQWO'#CeO>gQWO'#H_O>oQWO'#HeO>oQWO'#HgO`Q^O'#HiO>oQWO'#HkO>oQWO'#HnO>tQWO'#HtO>yQ?MyO'#HzO%[Q^O'#H|O?UQ?MyO'#IOO?aQ?MyO'#IQO9hQ?MxO'#ISO?lQ?NdO'#CiO@nQ`O'#DiQOQWOOO%[Q^O'#D}OAUQWO'#EQO:VQ7[O'#EkOAaQWO'#EkOAlQpO'#FdOOQU'#Cg'#CgOOQ?Mp'#Dn'#DnOOQ?Mp'#Jq'#JqO%[Q^O'#JqOOQO'#Jt'#JtOOQO'#Id'#IdOBlQ`O'#EdOOQ?Mp'#Ec'#EcOOQ?Mp'#Jx'#JxOChQ?NQO'#EdOCrQ`O'#ETOOQO'#Js'#JsODWQ`O'#JtOEeQ`O'#ETOCrQ`O'#EdPErO#@ItO'#CbPOOO)CDx)CDxOOOO'#I['#I[OE}O!bO,59UOOQ?Mr,59U,59UOOOO'#I]'#I]OF]O#tO,59UO%[Q^O'#D`OOOO'#I_'#I_OFkO!0LbO,59xOOQ?Mr,59x,59xOFyQ^O'#I`OG^QWO'#JoOI]QrO'#JoO+}Q^O'#JoOIdQWO,5:OOIzQWO'#EmOJXQWO'#KOOJdQWO'#J}OJdQWO'#J}OJlQWO,5;ZOJqQWO'#J|OOQ?Mv,5:Z,5:ZOJxQ^O,5:ZOLvQ?NdO,5:cOMgQWO,5:kONQQ?MxO'#J{ONXQWO'#JzO9WQWO'#JzONmQWO'#JzONuQWO,5;YONzQWO'#JzO!#PQrO'#JnOOQ?Mr'#Ci'#CiO%[Q^O'#EPO!#oQrO,5:pOOQQ'#Ju'#JuOOQO-E<f-E<fO9^QWO,5=[O!$VQWO,5=[O!$[Q^O,5;WO!&_Q7[O'#EhO!'xQWO,5;WO!'}Q^O'#DvO!(XQ`O,5;aO!(aQ`O,5;aO%[Q^O,5;aOOQU'#FS'#FSOOQU'#FU'#FUO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bOOQU'#FY'#FYO!(oQ^O,5;sOOQ?Mr,5;x,5;xOOQ?Mr,5;y,5;yOOQ?Mr,5;{,5;{O%[Q^O'#IlO!*rQ?MxO,5<gO!&_Q7[O,5;bO!+aQ7[O,5;bO!-RQ7[O'#EZO%[Q^O,5;vOOQ?Mr,5;z,5;zO!-YQ&jO'#FiO!.VQ&jO'#KSO!-qQ&jO'#KSO!.^Q&jO'#KSOOQO'#KS'#KSO!.rQ&jO,5<ROOOS,5<_,5<_O!/TQ^O'#FuOOOS'#Ik'#IkO7VO,YO,5<PO!/[Q&jO'#FwOOQ?Mr,5<P,5<PO!/{Q!LQO'#CvOOQ?Mr'#Cz'#CzO!0`QWO'#CzO!0eO!0LbO'#DOO!1RQ7[O,5<dO!1YQWO,5<fO!2uQ$ISO'#GVO!3SQWO'#GWO!3XQWO'#GWO!4wQ$ISO'#G[O!5sQ`O'#G`OOQO'#Gk'#GkO!+hQ7[O'#GjOOQO'#Gm'#GmO!+hQ7[O'#GlO!6fQ!LQO'#JgOOQ?Mr'#Jg'#JgO!6pQWO'#JfO!7OQWO'#JeO!7WQWO'#CuOOQ?Mr'#Cx'#CxOOQ?Mr'#DS'#DSOOQ?Mr'#DU'#DUO1SQWO'#DWO!+hQ7[O'#F}O!+hQ7[O'#GPO!7`QWO'#GRO!7eQWO'#GSO!3XQWO'#GYO!+hQ7[O'#G_O!7jQWO'#EnO!8XQWO,5<eOOQ?Mp'#Cr'#CrO!8aQWO'#EoO!9ZQ`O'#EpOOQ?Mp'#J|'#J|O!9bQ?MxO'#K]O9hQ?MxO,5=`O`Q^O,5>pOOQU'#Jc'#JcOOQU,5>q,5>qOOQU-E<X-E<XO!;aQ?NdO,5:_O!9UQ`O,5:]O!=zQ?NdO,5:gO%[Q^O,5:gO!@bQ?NdO,5:iOOQO,5@v,5@vO!ARQ7[O,5=[O!AaQ?MxO'#JdO9RQWO'#JdO!ArQ?MxO,59ZO!A}Q`O,59ZO!BVQ7[O,59ZO:VQ7[O,59ZO!BbQWO,5;WO!BjQWO'#H^O!COQWO'#K`O%[Q^O,5;|O!9UQ`O,5<OO!CWQWO,5=wO!C]QWO,5=wO!CbQWO,5=wO9hQ?MxO,5=wO;wQWO,5=gOOQO'#Cv'#CvO!CpQ`O,5=dO!CxQ7[O,5=eO!DTQWO,5=gO!DYQpO,5=jO!DbQWO'#K[O>tQWO'#HTO9^QWO'#HVO!DgQWO'#HVO:VQ7[O'#HXO!DlQWO'#HXOOQU,5=m,5=mO!DqQWO'#HYO!ESQWO'#CoO!EXQWO,59PO!EcQWO,59PO!GhQ^O,59POOQU,59P,59PO!GxQ?MxO,59PO%[Q^O,59PO!JTQ^O'#HaOOQU'#Hb'#HbOOQU'#Hc'#HcO`Q^O,5=yO!JkQWO,5=yO`Q^O,5>PO`Q^O,5>RO!JpQWO,5>TO`Q^O,5>VO!JuQWO,5>YO!JzQ^O,5>`OOQU,5>f,5>fO%[Q^O,5>fO9hQ?MxO,5>hOOQU,5>j,5>jO# UQWO,5>jOOQU,5>l,5>lO# UQWO,5>lOOQU,5>n,5>nO# rQ`O'#D[O%[Q^O'#JqO# |Q`O'#JqO#!kQ`O'#DjO#!|Q`O'#DjO#%_Q^O'#DjO#%fQWO'#JpO#%nQWO,5:TO#%sQWO'#EqO#&RQWO'#KPO#&ZQWO,5;[O#&`Q`O'#DjO#&mQ`O'#ESOOQ?Mr,5:l,5:lO%[Q^O,5:lO#&tQWO,5:lO>tQWO,5;VO!A}Q`O,5;VO!BVQ7[O,5;VO:VQ7[O,5;VO#&|QWO,5@]O#'RQ(CYO,5:pOOQO-E<b-E<bO#(XQ?NQO,5;OOCrQ`O,5:oO#(cQ`O,5:oOCrQ`O,5;OO!ArQ?MxO,5:oOOQ?Mp'#Eg'#EgOOQO,5;O,5;OO%[Q^O,5;OO#(pQ?MxO,5;OO#({Q?MxO,5;OO!A}Q`O,5:oOOQO,5;U,5;UO#)ZQ?MxO,5;OPOOO'#IY'#IYP#)oO#@ItO,58|POOO,58|,58|OOOO-E<Y-E<YOOQ?Mr1G.p1G.pOOOO-E<Z-E<ZO#)zQpO,59zOOOO-E<]-E<]OOQ?Mr1G/d1G/dO#*PQrO,5>zO+}Q^O,5>zOOQO,5?Q,5?QO#*ZQ^O'#I`OOQO-E<^-E<^O#*hQWO,5@ZO#*pQrO,5@ZO#*wQWO,5@iOOQ?Mr1G/j1G/jO%[Q^O,5@jO#+PQWO'#IfOOQO-E<d-E<dO#*wQWO,5@iOOQ?Mp1G0u1G0uOOQ?Mv1G/u1G/uOOQ?Mv1G0V1G0VO%[Q^O,5@gO#+eQ?MxO,5@gO#+vQ?MxO,5@gO#+}QWO,5@fO9WQWO,5@fO#,VQWO,5@fO#,eQWO'#IiO#+}QWO,5@fOOQ?Mp1G0t1G0tO!(XQ`O,5:rO!(dQ`O,5:rOOQQ,5:t,5:tO#-VQYO,5:tO#-_Q7[O1G2vO9^QWO1G2vOOQ?Mr1G0r1G0rO#-mQ?NdO1G0rO#.rQ?NbO,5;SOOQ?Mr'#GU'#GUO#/`Q?NdO'#JgO!$[Q^O1G0rO#1hQrO'#JrO%[Q^O'#JrO#1rQWO,5:bOOQ?Mr'#D['#D[OOQ?Mr1G0{1G0{O%[Q^O1G0{OOQ?Mr1G1e1G1eO#1wQWO1G0{O#4]Q?NdO1G0|O#4dQ?NdO1G0|O#6zQ?NdO1G0|O#7RQ?NdO1G0|O#9YQ?NdO1G0|O#9pQ?NdO1G0|O#<gQ?NdO1G0|O#<nQ?NdO1G0|O#?OQ?NdO1G0|O#?]Q?NdO1G0|O#AWQ?NdO1G0|O#DWQ07bO'#CiO#FRQ07bO1G1_O#FYQ07bO'#JnO#FmQ?NdO,5?WOOQ?Mp-E<j-E<jO#GaQ?NdO1G0|OOQ?Mr1G0|1G0|O#IiQ7[O'#JwO#IsQWO,5:uO#IxQ?NdO1G1bO#JlQ&jO,5<VO#JtQ&jO,5<WO#J|Q&jO'#FnO#KeQWO'#FmOOQO'#KT'#KTOOQO'#Ij'#IjO#KjQ&jO1G1mOOQ?Mr1G1m1G1mOOOS1G1x1G1xO#K{Q07bO'#JmO#LVQWO,5<aO!(oQ^O,5<aOOOS-E<i-E<iOOQ?Mr1G1k1G1kO#L[Q`O'#KSOOQ?Mr,5<c,5<cO#LdQ`O,5<cOOQ?Mr,59f,59fO!&_Q7[O'#DQOOOO'#I^'#I^O#LiO!0LbO,59jOOQ?Mr,59j,59jO%[Q^O1G2OO!7eQWO'#InO#LtQ7[O,5<xOOQ?Mr,5<u,5<uO!+hQ7[O'#IqO#MdQ7[O,5=UO!+hQ7[O'#IsO#NVQ7[O,5=WO!&_Q7[O,5=YOOQO1G2Q1G2QO#NaQpO'#CrO#NtQ$ISO'#EoO$ sQ`O'#G`O$!aQpO,5<qO$!hQWO'#KWO9WQWO'#KWO$!vQWO,5<sO!+hQ7[O,5<rO$!{QWO'#GXO$#^QWO,5<rO$#cQpO'#GUO$#pQpO'#KXO$#zQWO'#KXO!&_Q7[O'#KXO$$PQWO,5<vO$$UQ`O'#GaO!5nQ`O'#GaO$$gQWO'#GcO$$lQWO'#GeO!3XQWO'#GhO$$qQ?MxO'#IpO$$|Q`O,5<zOOQ?Mv,5<z,5<zO$%TQ`O'#GaO$%cQ`O'#GbO$%kQ`O'#GbO$%pQ7[O,5=UO$&QQ7[O,5=WOOQ?Mr,5=Z,5=ZO!+hQ7[O,5@QO!+hQ7[O,5@QO$&bQWO'#IuO$&mQWO,5@PO$&uQWO,59aO$'iQ!LSO,59rOOQ?Mr'#Jk'#JkO$([Q7[O,5<iO$(}Q7[O,5<kO@fQWO,5<mOOQ?Mr,5<n,5<nO$)XQWO,5<tO$)^Q7[O,5<yO$)nQWO'#JzO!$[Q^O1G2PO$)sQWO1G2PO9WQWO'#J}O9WQWO'#EqO%[Q^O'#EqO9WQWO'#IwO$)xQ?MxO,5@wOOQU1G2z1G2zOOQU1G4[1G4[OOQ?Mr1G/y1G/yOOQ?Mr1G/w1G/wO$+zQ?NdO1G0ROOQU1G2v1G2vO!&_Q7[O1G2vO%[Q^O1G2vO#-bQWO1G2vO$.OQ7[O'#EhOOQ?Mp,5@O,5@OO$.YQ?MxO,5@OOOQU1G.u1G.uO!ArQ?MxO1G.uO!A}Q`O1G.uO!BVQ7[O1G.uO$.kQWO1G0rO$.pQWO'#CiO$.{QWO'#KaO$/TQWO,5=xO$/YQWO'#KaO$/_QWO'#KaO$/mQWO'#I}O$/{QWO,5@zO$0TQrO1G1hOOQ?Mr1G1j1G1jO9^QWO1G3cO@fQWO1G3cO$0[QWO1G3cO$0aQWO1G3cOOQU1G3c1G3cO!DTQWO1G3RO!&_Q7[O1G3OO$0fQWO1G3OOOQU1G3P1G3PO!&_Q7[O1G3PO$0kQWO1G3PO$0sQ`O'#G}OOQU1G3R1G3RO!5nQ`O'#IyO!DYQpO1G3UOOQU1G3U1G3UOOQU,5=o,5=oO$0{Q7[O,5=qO9^QWO,5=qO$$lQWO,5=sO9RQWO,5=sO!A}Q`O,5=sO!BVQ7[O,5=sO:VQ7[O,5=sO$1ZQWO'#K_O$1fQWO,5=tOOQU1G.k1G.kO$1kQ?MxO1G.kO@fQWO1G.kO$1vQWO1G.kO9hQ?MxO1G.kO$4OQrO,5@|O$4]QWO,5@|O9WQWO,5@|O$4hQ^O,5={O$4oQWO,5={OOQU1G3e1G3eO`Q^O1G3eOOQU1G3k1G3kOOQU1G3m1G3mO>oQWO1G3oO$4tQ^O1G3qO$8xQ^O'#HpOOQU1G3t1G3tO$9VQWO'#HvO>tQWO'#HxOOQU1G3z1G3zO$9_Q^O1G3zO9hQ?MxO1G4QOOQU1G4S1G4SOOQ?Mp'#G]'#G]O9hQ?MxO1G4UO9hQ?MxO1G4WO$=fQWO,5@]O!(oQ^O,5;]O9WQWO,5;]O>tQWO,5:UO!(oQ^O,5:UO!A}Q`O,5:UO$=kQ07bO,5:UOOQO,5;],5;]O$=uQ`O'#IaO$>]QWO,5@[OOQ?Mr1G/o1G/oO$>eQ`O'#IgO$>oQWO,5@kOOQ?Mp1G0v1G0vO#!|Q`O,5:UOOQO'#Ic'#IcO$>wQ`O,5:nOOQ?Mv,5:n,5:nO#&wQWO1G0WOOQ?Mr1G0W1G0WO%[Q^O1G0WOOQ?Mr1G0q1G0qO>tQWO1G0qO!A}Q`O1G0qO!BVQ7[O1G0qOOQ?Mp1G5w1G5wO!ArQ?MxO1G0ZOOQO1G0j1G0jO%[Q^O1G0jO$?OQ?MxO1G0jO$?ZQ?MxO1G0jO!A}Q`O1G0ZOCrQ`O1G0ZO$?iQ?MxO1G0jOOQO1G0Z1G0ZO$?}Q?NdO1G0jPOOO-E<W-E<WPOOO1G.h1G.hOOOO1G/f1G/fO$@XQpO,5<gO$@aQrO1G4fOOQO1G4l1G4lO%[Q^O,5>zO$@kQWO1G5uO$@sQWO1G6TO$@{QrO1G6UO9WQWO,5?QO$AVQ?NdO1G6RO%[Q^O1G6RO$AgQ?MxO1G6RO$AxQWO1G6QO$AxQWO1G6QO9WQWO1G6QO$BQQWO,5?TO9WQWO,5?TOOQO,5?T,5?TO$BfQWO,5?TO$)nQWO,5?TOOQO-E<g-E<gOOQQ1G0^1G0^OOQQ1G0`1G0`O#-YQWO1G0`OOQU7+(b7+(bO!&_Q7[O7+(bO%[Q^O7+(bO$BtQWO7+(bO$CPQ7[O7+(bO$C_Q?NdO,5=UO$EgQ?NdO,5=WO$GoQ?NdO,5=UO$I}Q?NdO,5=WO$L]Q?NdO,59rO$NbQ?NdO,5<iO%!jQ?NdO,5<kO%$rQ?NdO,5<yOOQ?Mr7+&^7+&^O%'QQ?NdO7+&^O%'tQ^O'#IbO%(RQWO,5@^O%(ZQrO,5@^OOQ?Mr1G/|1G/|O%(eQWO7+&gOOQ?Mr7+&g7+&gO%(jQ07bO,5:cO%[Q^O7+&yO%(tQ07bO,5:_O%)RQ07bO,5:gO%)]Q07bO,5:iO%)gQ7[O'#IeO%)qQWO,5@cOOQ?Mr1G0a1G0aOOQO1G1q1G1qOOQO1G1r1G1rO%)yQtO,5<YO!(oQ^O,5<XOOQO-E<h-E<hOOQ?Mr7+'X7+'XOOOS7+'d7+'dOOOS1G1{1G1{O%*UQWO1G1{OOQ?Mr1G1}1G1}O%*ZQpO,59lOOOO-E<[-E<[OOQ?Mr1G/U1G/UO%*bQ?NdO7+'jOOQ?Mr,5?Y,5?YO%+UQpO,5?YOOQ?Mr1G2d1G2dP!&_Q7[O'#InPOQ?Mr-E<l-E<lO%+tQ7[O,5?]OOQ?Mr-E<o-E<oO%,gQ7[O,5?_OOQ?Mr-E<q-E<qO%,qQpO1G2tO%,xQpO'#CrO%-`Q7[O'#J}O%-gQ^O'#EqOOQ?Mr1G2]1G2]O%-qQWO'#ImO%.VQWO,5@rO%.VQWO,5@rO%._QWO,5@rO%.jQWO,5@rOOQO1G2_1G2_O%.xQ7[O1G2^O!+hQ7[O1G2^O%/YQ$ISO'#IoO%/gQWO,5@sO!&_Q7[O,5@sO%/oQpO,5@sOOQ?Mr1G2b1G2bOOQ?Mp,5<{,5<{OOQ?Mp,5<|,5<|O$)nQWO,5<|OCcQWO,5<|O!A}Q`O,5<{OOQO'#Gd'#GdO%/yQWO,5<}OOQ?Mp,5=P,5=PO$)nQWO,5=SOOQO,5?[,5?[OOQO-E<n-E<nOOQ?Mv1G2f1G2fO!5nQ`O,5<{O%0RQWO,5<|O$$gQWO,5<}O!5nQ`O,5<|O!+hQ7[O'#IqO%0uQ7[O1G2pO!+hQ7[O'#IsO%1hQ7[O1G2rO%1rQ7[O1G5lO%1|Q7[O1G5lOOQO,5?a,5?aOOQO-E<s-E<sOOQO1G.{1G.{O!9UQ`O,59tO%[Q^O,59tOOQ?Mr,5<h,5<hO%2ZQWO1G2XO!+hQ7[O1G2`O%2`Q?NdO7+'kOOQ?Mr7+'k7+'kO!$[Q^O7+'kO%3SQWO,5;]OOQ?Mp,5?c,5?cOOQ?Mp-E<u-E<uO%3XQpO'#KYO#&wQWO7+(bO4UQrO7+(bO$BwQWO7+(bO%3cQ?NbO'#CiO%3vQ?NbO,5=QO%4hQWO,5=QOOQ?Mp1G5j1G5jOOQU7+$a7+$aO!ArQ?MxO7+$aO!A}Q`O7+$aO!$[Q^O7+&^O%4mQWO'#I|O%5UQWO,5@{OOQO1G3d1G3dO9^QWO,5@{O%5UQWO,5@{O%5^QWO,5@{OOQO,5?i,5?iOOQO-E<{-E<{OOQ?Mr7+'S7+'SO%5cQWO7+(}O9hQ?MxO7+(}O9^QWO7+(}O@fQWO7+(}OOQU7+(m7+(mO%5hQ?NbO7+(jO!&_Q7[O7+(jO%5rQpO7+(kOOQU7+(k7+(kO!&_Q7[O7+(kO%5yQWO'#K^O%6UQWO,5=iOOQO,5?e,5?eOOQO-E<w-E<wOOQU7+(p7+(pO%7eQ`O'#HWOOQU1G3]1G3]O!&_Q7[O1G3]O%[Q^O1G3]O%7lQWO1G3]O%7wQ7[O1G3]O9hQ?MxO1G3_O$$lQWO1G3_O9RQWO1G3_O!A}Q`O1G3_O!BVQ7[O1G3_O%8VQWO'#I{O%8kQWO,5@yO%8sQ`O,5@yOOQ?Mp1G3`1G3`OOQU7+$V7+$VO@fQWO7+$VO9hQ?MxO7+$VO%9OQWO7+$VO%[Q^O1G6hO%[Q^O1G6iO%9TQ?MxO1G6hO%9_Q^O1G3gO%9fQWO1G3gO%9kQ^O1G3gOOQU7+)P7+)PO9hQ?MxO7+)ZO`Q^O7+)]OOQU'#Kd'#KdOOQU'#JO'#JOO%9rQ^O,5>[OOQU,5>[,5>[O%[Q^O'#HqO%:PQWO'#HsOOQU,5>b,5>bO9WQWO,5>bOOQU,5>d,5>dOOQU7+)f7+)fOOQU7+)l7+)lOOQU7+)p7+)pOOQU7+)r7+)rO%:UQ`O1G5wO%:jQ07bO1G0wO%:tQWO1G0wOOQO1G/p1G/pO%;PQ07bO1G/pO>tQWO1G/pO!(oQ^O'#DjOOQO,5>{,5>{OOQO-E<_-E<_OOQO,5?R,5?ROOQO-E<e-E<eO!A}Q`O1G/pOOQO-E<a-E<aOOQ?Mv1G0Y1G0YOOQ?Mr7+%r7+%rO#&wQWO7+%rOOQ?Mr7+&]7+&]O>tQWO7+&]O!A}Q`O7+&]OOQO7+%u7+%uO$?}Q?NdO7+&UOOQO7+&U7+&UO%[Q^O7+&UO%;ZQ?MxO7+&UO!ArQ?MxO7+%uO!A}Q`O7+%uO%;fQ?MxO7+&UO%;tQ?NdO7++mO%[Q^O7++mO%<UQWO7++lO%<UQWO7++lOOQO1G4o1G4oO9WQWO1G4oO%<^QWO1G4oOOQQ7+%z7+%zO#&wQWO<<K|O4UQrO<<K|O%<lQWO<<K|OOQU<<K|<<K|O!&_Q7[O<<K|O%[Q^O<<K|O%<tQWO<<K|O%=PQ?NdO,5?]O%?XQ?NdO,5?_O%AaQ?NdO1G2^O%CoQ?NdO1G2pO%EwQ?NdO1G2rO%HPQrO,5>|O%[Q^O,5>|OOQO-E<`-E<`O%HZQWO1G5xOOQ?Mr<<JR<<JRO%HcQ07bO1G0rO%JjQ07bO1G0|O%JqQ07bO1G0|O%LrQ07bO1G0|O%LyQ07bO1G0|O%NkQ07bO1G0|O& RQ07bO1G0|O&#cQ07bO1G0|O&#jQ07bO1G0|O&%eQ07bO1G0|O&%rQ07bO1G0|O&'mQ07bO1G0|O&(QQ?NdO<<JeO&)VQ07bO1G0|O&*xQ07bO'#JgO&,{Q07bO1G1bO&-YQ07bO1G0RO&-dQ7[O,5?POOQO-E<c-E<cO!(oQ^O'#FpOOQO'#KU'#KUOOQO1G1t1G1tO&-nQWO1G1sO&-sQ07bO,5?WOOOS7+'g7+'gOOOO1G/W1G/WOOQ?Mr1G4t1G4tO!+hQ7[O7+(`O&0TQrO'#CiO&0_QWO,5?XO9WQWO,5?XOOQO-E<k-E<kO&0mQWO1G6^O&0mQWO1G6^O&0uQWO1G6^O&1QQ7[O7+'xO&1bQpO,5?ZO&1lQWO,5?ZO!&_Q7[O,5?ZOOQO-E<m-E<mO&1qQpO1G6_O&1{QWO1G6_OOQ?Mp1G2h1G2hO$)nQWO1G2hOOQ?Mp1G2g1G2gO&2TQWO1G2iO!&_Q7[O1G2iOOQ?Mp1G2n1G2nO!A}Q`O1G2gOCcQWO1G2hO&2YQWO1G2iO&2bQWO1G2hO&3UQ7[O,5?]OOQ?Mr-E<p-E<pO&3wQ7[O,5?_OOQ?Mr-E<r-E<rO!+hQ7[O7++WOOQ?Mr1G/`1G/`O&4RQWO1G/`OOQ?Mr7+'s7+'sO&4WQ7[O7+'zO&4hQ?NdO<<KVOOQ?Mr<<KV<<KVO&5[QWO1G0wO!&_Q7[O'#IvO&5aQWO,5@tO&7cQrO<<K|O!&_Q7[O1G2lOOQU<<G{<<G{O!ArQ?MxO<<G{O&7jQ?NdO<<IxOOQ?Mr<<Ix<<IxOOQO,5?h,5?hO&8^QWO,5?hO&8cQWO,5?hOOQO-E<z-E<zO&8qQWO1G6gO&8qQWO1G6gO9^QWO1G6gO@fQWO<<LiOOQU<<Li<<LiO&8yQWO<<LiO9hQ?MxO<<LiOOQU<<LU<<LUO%5hQ?NbO<<LUOOQU<<LV<<LVO%5rQpO<<LVO&9OQ`O'#IxO&9ZQWO,5@xO!(oQ^O,5@xOOQU1G3T1G3TO%-gQ^O'#JqOOQO'#Iz'#IzO9hQ?MxO'#IzO&9cQ`O,5=rOOQU,5=r,5=rO&9jQ`O'#EdO&:OQWO7+(wO&:TQWO7+(wOOQU7+(w7+(wO!&_Q7[O7+(wO%[Q^O7+(wO&:]QWO7+(wOOQU7+(y7+(yO9hQ?MxO7+(yO$$lQWO7+(yO9RQWO7+(yO!A}Q`O7+(yO&:hQWO,5?gOOQO-E<y-E<yOOQO'#HZ'#HZO&:sQWO1G6eO9hQ?MxO<<GqOOQU<<Gq<<GqO@fQWO<<GqO&:{QWO7+,SO&;QQWO7+,TO%[Q^O7+,SO%[Q^O7+,TOOQU7+)R7+)RO&;VQWO7+)RO&;[Q^O7+)RO&;cQWO7+)ROOQU<<Lu<<LuOOQU<<Lw<<LwOOQU-E<|-E<|OOQU1G3v1G3vO&;hQWO,5>]OOQU,5>_,5>_O&;mQWO1G3|O9WQWO7+&cO!(oQ^O7+&cOOQO7+%[7+%[O&;rQ07bO1G6UO>tQWO7+%[OOQ?Mr<<I^<<I^OOQ?Mr<<Iw<<IwO>tQWO<<IwOOQO<<Ip<<IpO$?}Q?NdO<<IpO%[Q^O<<IpOOQO<<Ia<<IaO!ArQ?MxO<<IaO&;|Q?MxO<<IpO&<XQ?NdO<= XO&<iQWO<= WOOQO7+*Z7+*ZO9WQWO7+*ZOOQUANAhANAhO&<qQrOANAhO!&_Q7[OANAhO#&wQWOANAhO4UQrOANAhO&<xQWOANAhO%[Q^OANAhO&=QQ?NdO7+'xO&?`Q?NdO,5?]O&AhQ?NdO,5?_O&CpQ?NdO7+'zO&FOQrO1G4hO&FYQ07bO7+&^O&HZQ07bO,5=UO&J_Q07bO,5=WO&JoQ07bO,5=UO&KPQ07bO,5=WO&KaQ07bO,59rO&MdQ07bO,5<iO' dQ07bO,5<kO'#dQ07bO,5<yO'%VQ07bO7+'jO'%dQ07bO7+'kO'%qQWO,5<[OOQO7+'_7+'_O'%vQ7[O<<KzOOQO1G4s1G4sO'%}QWO1G4sO'&YQWO1G4sO'&hQWO7++xO'&hQWO7++xO!&_Q7[O1G4uO'&pQpO1G4uO'&zQWO7++yOOQ?Mp7+(S7+(SO$)nQWO7+(TO''SQpO7+(TOOQ?Mp7+(R7+(RO$)nQWO7+(SO''ZQWO7+(TO!&_Q7[O7+(TOCcQWO7+(SO''`Q7[O<<NrOOQ?Mr7+$z7+$zO''jQpO,5?bOOQO-E<t-E<tO''tQ?NbO7+(WOOQUAN=gAN=gO9^QWO1G5SOOQO1G5S1G5SO'(UQWO1G5SO'(ZQWO7+,RO'(ZQWO7+,RO9hQ?MxOANBTO@fQWOANBTOOQUANBTANBTOOQUANApANApOOQUANAqANAqO'(cQWO,5?dOOQO-E<v-E<vO'(nQ07bO1G6dOOQO,5?f,5?fOOQO-E<x-E<xOOQU1G3^1G3^O%-gQ^O,5<}OOQU<<Lc<<LcO!&_Q7[O<<LcO&:OQWO<<LcO'(xQWO<<LcO%[Q^O<<LcOOQU<<Le<<LeO9hQ?MxO<<LeO$$lQWO<<LeO9RQWO<<LeO')QQ`O1G5RO')]QWO7+,POOQUAN=]AN=]O9hQ?MxOAN=]OOQU<= n<= nOOQU<= o<= oO')eQWO<= nO')jQWO<= oOOQU<<Lm<<LmO')oQWO<<LmO')tQ^O<<LmOOQU1G3w1G3wO>tQWO7+)hO'){QWO<<I}O'*WQ07bO<<I}OOQO<<Hv<<HvOOQ?MrAN?cAN?cOOQOAN?[AN?[O$?}Q?NdOAN?[OOQOAN>{AN>{O%[Q^OAN?[OOQO<<Mu<<MuOOQUG27SG27SO!&_Q7[OG27SO#&wQWOG27SO'*bQrOG27SO4UQrOG27SO'*iQWOG27SO'*qQ07bO<<JeO'+OQ07bO1G2^O',qQ07bO,5?]O'.qQ07bO,5?_O'0qQ07bO1G2pO'2qQ07bO1G2rO'4qQ07bO<<KVO'5OQ07bO<<IxOOQO1G1v1G1vO!+hQ7[OANAfOOQO7+*_7+*_O'5]QWO7+*_O'5hQWO<= dO'5pQpO7+*aOOQ?Mp<<Ko<<KoO$)nQWO<<KoOOQ?Mp<<Kn<<KnO'5zQpO<<KoO$)nQWO<<KnOOQO7+*n7+*nO9^QWO7+*nO'6RQWO<= mOOQUG27oG27oO9hQ?MxOG27oO!(oQ^O1G5OO'6ZQWO7+,OO&:OQWOANA}OOQUANA}ANA}O!&_Q7[OANA}O'6cQWOANA}OOQUANBPANBPO9hQ?MxOANBPO$$lQWOANBPOOQO'#H['#H[OOQO7+*m7+*mOOQUG22wG22wOOQUANEYANEYOOQUANEZANEZOOQUANBXANBXO'6kQWOANBXOOQU<<MS<<MSO!(oQ^OAN?iOOQOG24vG24vO$?}Q?NdOG24vO#&wQWOLD,nOOQULD,nLD,nO!&_Q7[OLD,nO'6pQrOLD,nO'6wQ07bO7+'xO'8jQ07bO,5?]O':jQ07bO,5?_O'<jQ07bO7+'zO'>]Q7[OG27QOOQO<<My<<MyOOQ?MpANAZANAZO$)nQWOANAZOOQ?MpANAYANAYOOQO<<NY<<NYOOQULD-ZLD-ZO'>mQ07bO7+*jOOQUG27iG27iO&:OQWOG27iO!&_Q7[OG27iOOQUG27kG27kO9hQ?MxOG27kOOQUG27sG27sO'>wQ07bOG25TOOQOLD*bLD*bOOQU!$(!Y!$(!YO#&wQWO!$(!YO!&_Q7[O!$(!YO'?RQ?NdOG27QOOQ?MpG26uG26uOOQULD-TLD-TO&:OQWOLD-TOOQULD-VLD-VOOQU!)9Et!)9EtO#&wQWO!)9EtOOQU!$(!o!$(!oOOQU!.K;`!.K;`O'AaQ07bOG27QO!(oQ^O'#DwO1PQWO'#EUO'CSQrO'#JmO'CZQMnO'#DsO'CbQ^O'#D{O'CiQrO'#CiO'FPQrO'#CiO!(oQ^O'#D}O'FaQ^O,5;WO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O'#IlO'HdQWO,5<gO'HlQ7[O,5;bO'JVQ7[O,5;bO!(oQ^O,5;vO!&_Q7[O'#GjO'HlQ7[O'#GjO!&_Q7[O'#GlO'HlQ7[O'#GlO1SQWO'#DWO1SQWO'#DWO!&_Q7[O'#F}O'HlQ7[O'#F}O!&_Q7[O'#GPO'HlQ7[O'#GPO!&_Q7[O'#G_O'HlQ7[O'#G_O!(oQ^O,5:gO'J^Q`O'#D[O!(oQ^O,5@jO'FaQ^O1G0rO'JhQ07bO'#CiO!(oQ^O1G2OO!&_Q7[O'#IqO'HlQ7[O'#IqO!&_Q7[O'#IsO'HlQ7[O'#IsO'JrQpO'#CrO!&_Q7[O,5<rO'HlQ7[O,5<rO'FaQ^O1G2PO!(oQ^O7+&yO!&_Q7[O1G2^O'HlQ7[O1G2^O!&_Q7[O'#IqO'HlQ7[O'#IqO!&_Q7[O'#IsO'HlQ7[O'#IsO!&_Q7[O1G2`O'HlQ7[O1G2`O'FaQ^O7+'kO'FaQ^O7+&^O!&_Q7[OANAfO'HlQ7[OANAfO'KVQWO'#ElO'K[QWO'#ElO'KdQWO'#F[O'KiQWO'#EvO'KnQWO'#KOO'KyQWO'#J|O'LUQWO,5;WO'LZQ7[O,5<dO'LbQWO'#GWO'LgQWO'#GWO'LlQWO,5<eO'LtQWO,5;WO'L|Q07bO1G1_O'MTQWO,5<rO'MYQWO,5<rO'M_QWO,5<tO'MdQWO,5<tO'MiQWO1G2PO'MnQWO1G0rO'MsQ7[O<<KzO'MzQ7[O<<KzO7eQ7[O'#FzO9RQWO'#FyOAaQWO'#EkO!(oQ^O,5;sO!3XQWO'#GWO!3XQWO'#GWO!3XQWO'#GYO!3XQWO'#GYO!+hQ7[O7+(`O!+hQ7[O7+(`O%,qQpO1G2tO%,qQpO1G2tO!&_Q7[O,5=YO!&_Q7[O,5=Y",
		stateData:
			"( O~O'wOS'xOSTOS'yRQ~OPYOQYOSfOY!VOaqOdzOeyOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![XO!fuO!iZO!lYO!mYO!nYO!pvO!rwO!uxO!y]O#t!PO$V|O%e}O%g!QO%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO%v!UO&S!WO&Y!XO&[!YO&^!ZO&`![O&c!]O&i!^O&o!_O&q!`O&s!aO&u!bO&w!cO(OSO(QTO(TUO([VO(j[O(yiO~OWtO~P`OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(O!dO(QTO(TUO([VO(j[O(yiO~Oa!wOp!nO!P!oO!_!yO!`!vO!a!vO!y:lO#Q!pO#R!pO#S!xO#T!pO#U!pO#X!zO#Y!zO(P!lO(QTO(TUO(`!mO(j!sO~O'y!{O~OP]XR]X[]Xa]Xo]X}]X!P]X!Y]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X'u]X([]X(m]X(t]X(u]X~O!d%PX~P(qO_!}O(Q#PO(R!}O(S#PO~O_#QO(S#PO(T#PO(U#QO~Ou#SO!R#TO(]#TO(^#VO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(O:pO(QTO(TUO([VO(j[O(yiO~O!X#ZO!Y#WO!V(cP!V(qP~P+}O!Z#cO~P`OPYOQYOSfOd!jOe!iOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(QTO(TUO([VO(j[O(yiO~Om#mO!X#iO!y]O#f#lO#g#iO(O:qO!h(nP~P.iO!i#oO(O#nO~O!u#sO!y]O%e#tO~O#h#uO~O!d#vO#h#uO~OP$]OR#zO[$cOo$QO}#yO!P#{O!Y$`O!i#xO!m$]O#O$SO#k$OO#l$PO#m$PO#n$PO#o$RO#p$SO#q$SO#r$bO#s$SO#u$TO#w$VO#y$XO#z$YO([VO(m$ZO(t#|O(u#}O~Oa(aX'u(aX's(aX!h(aX!V(aX![(aX%f(aX!d(aX~P1qO#P$dO#]$eO$P$eOP(bXR(bX[(bXo(bX}(bX!P(bX!Y(bX!i(bX!m(bX#O(bX#k(bX#l(bX#m(bX#n(bX#o(bX#p(bX#q(bX#r(bX#s(bX#u(bX#w(bX#y(bX#z(bX([(bX(m(bX(t(bX(u(bX![(bX%f(bX~Oa(bX'u(bX's(bX!V(bX!h(bXs(bX!d(bX~P4UO#]$eO~O$[$hO$^$gO$e$mO~OSfO![$nO$h$oO$j$qO~Oh%WOm%XOo$uOp$tOq$tOw%YOy%ZO{%[O!P$|O![$}O!f%aO!i$yO#g%bO$V%_O$r%]O$t%^O$w%`O(O$sO(QTO(TUO([$vO(t%OO(u%QOg(XP~O!i%cO~O!P%fO![%gO(O%eO~O!d%kO~Oa%lO'u%lO~O}%pO~P%[O(P!lO~P%[O%k%tO~P%[Oh%WO!i%cO(O%eO(P!lO~Oe%{O!i%cO(O%eO~O#s$SO~O}&QO![%}O!i&PO%g&TO(O%eO(P!lO(QTO(TUO`)SP~O!u#sO~O%p&VO!P)OX![)OX(O)OX~O(O&WO~O!r&]O#t!PO%g!QO%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO~Od&bOe&aO!u&_O%e&`O%x&^O~P;|Od&eOeyO![&dO!r&]O!uxO!y]O#t!PO%e}O%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO%v!UO~Ob&hO#]&kO%g&fO(P!lO~P=RO!i&lO!r&pO~O!i#oO~O![XO~Oa%lO't&xO'u%lO~Oa%lO't&{O'u%lO~Oa%lO't&}O'u%lO~O's]X!V]Xs]X!h]X&W]X![]X%f]X!d]X~P(qO!_'[O!`'TO!a'TO(P!lO(QTO(TUO~Op'RO!P'QO!X'UO(`'PO!Z(dP!Z(sP~P@YOk'_O![']O(O%eO~Oe'dO!i%cO(O%eO~O}&QO!i&PO~Op!nO!P!oO!y:lO#Q!pO#R!pO#T!pO#U!pO(P!lO(QTO(TUO(`!mO(j!sO~O!_'jO!`'iO!a'iO#S!pO#X'kO#Y'kO~PAtOa%lOh%WO!d#vO!i%cO'u%lO(m'mO~O!m'qO#]'oO~PCSOp!nO!P!oO(QTO(TUO(`!mO(j!sO~O![XOp(hX!P(hX!_(hX!`(hX!a(hX!y(hX#Q(hX#R(hX#S(hX#T(hX#U(hX#X(hX#Y(hX(P(hX(Q(hX(T(hX(`(hX(j(hX~O!`'iO!a'iO(P!lO~PCrO'z'uO'{'uO'|'wO~O_!}O(Q'yO(R!}O(S'yO~O_#QO(S'yO(T'yO(U#QO~Ou#SO!R#TO(]#TO(^'}O~O!X(PO!V'SX!V'YX!Y'SX!Y'YX~P+}O!Y(RO!V(cX~OP$]OR#zO[$cOo$QO}#yO!P#{O!Y(RO!i#xO!m$]O#O$SO#k$OO#l$PO#m$PO#n$PO#o$RO#p$SO#q$SO#r$bO#s$SO#u$TO#w$VO#y$XO#z$YO([VO(m$ZO(t#|O(u#}O~O!V(cX~PGfO!V(WO~O!V(pX!Y(pX!d(pX!h(pX(m(pX~O#](pX#h#aX!Z(pX~PIiO#](XO!V(rX!Y(rX~O!Y(YO!V(qX~O!V(]O~O#]$eO~PIiO!Z(^O~P`OR#zO}#yO!P#{O!i#xO([VOP!ka[!kao!ka!Y!ka!m!ka#O!ka#k!ka#l!ka#m!ka#n!ka#o!ka#p!ka#q!ka#r!ka#s!ka#u!ka#w!ka#y!ka#z!ka(m!ka(t!ka(u!ka~Oa!ka'u!ka's!ka!V!ka!h!kas!ka![!ka%f!ka!d!ka~PKPO!h(_O~O!d#vO#](`O(m'mO!Y(oXa(oX'u(oX~O!h(oX~PMlO!P%fO![%gO!y]O#f(eO#g(dO(O%eO~O!Y(fO!h(nX~O!h(hO~O!P%fO![%gO#g(dO(O%eO~OP(bXR(bX[(bXo(bX}(bX!P(bX!Y(bX!i(bX!m(bX#O(bX#k(bX#l(bX#m(bX#n(bX#o(bX#p(bX#q(bX#r(bX#s(bX#u(bX#w(bX#y(bX#z(bX([(bX(m(bX(t(bX(u(bX~O!d#vO!h(bX~P! YOR(jO}(iO!i#xO#P$dO!y!xa!P!xa~O!u!xa%e!xa![!xa#f!xa#g!xa(O!xa~P!#ZO!u(nO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![XO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(O!dO(QTO(TUO([VO(j[O(yiO~Oh%WOm%XOo$uOp$tOq$tOw%YOy%ZO{;YO!P$|O![$}O!f<jO!i$yO#g;`O$V%_O$r;[O$t;^O$w%`O(O(rO(QTO(TUO([$vO(t%OO(u%QO~O#h(tO~O!X(vO!h(fP~P%[O(`(xO(j[O~O!P(zO!i#xO(`(xO(j[O~OP:kOQ:kOSfOd<fOe!iOmkOo:kOpkOqkOwkOy:kO{:kO!PWO!TkO!UkO![!eO!f:nO!iZO!l:kO!m:kO!n:kO!p:oO!r:rO!u!hO$V!kO(O)YO(QTO(TUO([VO(j[O(y<dO~O!Y$`Oa$oa'u$oa's$oa!h$oa!V$oa![$oa%f$oa!d$oa~O#t)`O~P!&_Oh%WOm%XOo$uOp$tOq$tOw%YOy%ZO{%[O!P$|O![$}O!f%aO!i$yO#g%bO$V%_O$r%]O$t%^O$w%`O(O(rO(QTO(TUO([$vO(t%OO(u%QO~Og(kP~P!+hO})eO!d)dO![$]X$Y$]X$[$]X$^$]X$e$]X~O!d)dO![(vX$Y(vX$[(vX$^(vX$e(vX~O})eO~P!-qO})eO![(vX$Y(vX$[(vX$^(vX$e(vX~O![)gO$Y)kO$[)fO$^)fO$e)lO~O!X)oO~P!(oO$[$hO$^$gO$e)sO~Ok$xX}$xX!P$xX#P$xX(t$xX(u$xX~OgjXg$xXkjX!YjX#]jX~P!/gOp)uO~Ou)vO(])wO(^)yO~Ok*SO}){O!P)|O(t%OO(u%QO~Og)zO~P!0pOg*TO~Oh%WOm%XOo$uOp$tOq$tOw%YOy%ZO{;YO!P*VO![*WO!f<jO!i$yO#g;`O$V%_O$r;[O$t;^O$w%`O(QTO(TUO([$vO(t%OO(u%QO~O!X*ZO(O*UO!h(zP~P!1_O#h*]O~O!i*^O~Oh%WOm%XOo$uOp$tOq$tOw%YOy%ZO{;YO!P$|O![$}O!f<jO!i$yO#g;`O$V%_O$r;[O$t;^O$w%`O(O*`O(QTO(TUO([$vO(t%OO(u%QO~O!X*cO!V({P~P!3^Oo*oO!P*gO!_*mO!`*fO!a*fO!i*^O#X*nO%]*iO(P!lO(`!mO~O!Z*lO~P!5RO#P$dOk(ZX}(ZX!P(ZX(t(ZX(u(ZX!Y(ZX#](ZX~Og(ZX#}(ZX~P!5zOk*tO#]*sOg(YX!Y(YX~O!Y*uOg(XX~O(O&WOg(XP~O!i*|O~O(O(rO~Om+QO!P%fO!X#iO![%gO!y]O#f#lO#g#iO(O%eO!h(nP~O!d#vO#h+RO~O!P%fO!X+TO!Y(YO![%gO(O%eO!V(qP~Op'XO!P+VO!X+UO(QTO(TUO(`(xO~O!Z(sP~P!8uO!Y+WOa)PX'u)PX~OP$]OR#zO[$cOo$QO}#yO!P#{O!i#xO!m$]O#O$SO#k$OO#l$PO#m$PO#n$PO#o$RO#p$SO#q$SO#r$bO#s$SO#u$TO#w$VO#y$XO#z$YO([VO(m$ZO(t#|O(u#}O~Oa!ga!Y!ga'u!ga's!ga!V!ga!h!gas!ga![!ga%f!ga!d!ga~P!9mOR#zO}#yO!P#{O!i#xO([VOP!oa[!oao!oa!Y!oa!m!oa#O!oa#k!oa#l!oa#m!oa#n!oa#o!oa#p!oa#q!oa#r!oa#s!oa#u!oa#w!oa#y!oa#z!oa(m!oa(t!oa(u!oa~Oa!oa'u!oa's!oa!V!oa!h!oas!oa![!oa%f!oa!d!oa~P!<TOR#zO}#yO!P#{O!i#xO([VOP!qa[!qao!qa!Y!qa!m!qa#O!qa#k!qa#l!qa#m!qa#n!qa#o!qa#p!qa#q!qa#r!qa#s!qa#u!qa#w!qa#y!qa#z!qa(m!qa(t!qa(u!qa~Oa!qa'u!qa's!qa!V!qa!h!qas!qa![!qa%f!qa!d!qa~P!>kOh%WOk+aO![']O%f+`O~O!d+cOa(WX![(WX'u(WX!Y(WX~Oa%lO![XO'u%lO~Oh%WO!i%cO~Oh%WO!i%cO(O%eO~O!d#vO#h(tO~Ob+nO%g+oO(O+kO(QTO(TUO!Z)TP~O!Y+pO`)SX~O[+tO~O`+uO~O![%}O(O%eO(P!lO`)SP~Oh%WO#]+zO~Oh%WOk+}O![$}O~O![,PO~O},RO![XO~O%k%tO~O!u,WO~Oe,]O~Ob,^O(O#nO(QTO(TUO!Z)RP~Oe%{O~O%g!QO(O&WO~P=RO[,cO`,bO~OPYOQYOSfOdzOeyOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO!fuO!iZO!lYO!mYO!nYO!pvO!uxO!y]O%e}O(QTO(TUO([VO(j[O(yiO~O![!eO!r!gO$V!kO(O!dO~P!EkO`,bOa%lO'u%lO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!u!hO$V!kO(O!dO(QTO(TUO([VO(j[O(yiO~Oa,hO!rwO#t!OO%i!OO%j!OO%k!OO~P!HTO!i&lO~O&Y,nO~O![,pO~O&k,rO&m,sOP&haQ&haS&haY&haa&had&hae&ham&hao&hap&haq&haw&hay&ha{&ha!P&ha!T&ha!U&ha![&ha!f&ha!i&ha!l&ha!m&ha!n&ha!p&ha!r&ha!u&ha!y&ha#t&ha$V&ha%e&ha%g&ha%i&ha%j&ha%k&ha%n&ha%p&ha%s&ha%t&ha%v&ha&S&ha&Y&ha&[&ha&^&ha&`&ha&c&ha&i&ha&o&ha&q&ha&s&ha&u&ha&w&ha's&ha(O&ha(Q&ha(T&ha([&ha(j&ha(y&ha!Z&ha&a&hab&ha&f&ha~O(O,xO~Oh!bX!Y!OX!Z!OX!d!OX!d!bX!i!bX#]!OX~O!Y!bX!Z!bX~P# ZO!d,}O#],|Oh(eX!Y#eX!Y(eX!Z#eX!Z(eX!d(eX!i(eX~Oh%WO!d-PO!i%cO!Y!^X!Z!^X~Op!nO!P!oO(QTO(TUO(`!mO~OP:kOQ:kOSfOd<fOe!iOmkOo:kOpkOqkOwkOy:kO{:kO!PWO!TkO!UkO![!eO!f:nO!iZO!l:kO!m:kO!n:kO!p:oO!r:rO!u!hO$V!kO(QTO(TUO([VO(j[O(y<dO~O(O;fO~P##_O!Y-TO!Z(dX~O!Z-VO~O!d,}O#],|O!Y#eX!Z#eX~O!Y-WO!Z(sX~O!Z-YO~O!`-ZO!a-ZO(P!lO~P#!|O!Z-^O~P'_Ok-aO![']O~O!V-fO~Op!xa!_!xa!`!xa!a!xa#Q!xa#R!xa#S!xa#T!xa#U!xa#X!xa#Y!xa(P!xa(Q!xa(T!xa(`!xa(j!xa~P!#ZO!m-kO#]-iO~PCSO!`-mO!a-mO(P!lO~PCrOa%lO#]-iO'u%lO~Oa%lO!d#vO#]-iO'u%lO~Oa%lO!d#vO!m-kO#]-iO'u%lO(m'mO~O'z'uO'{'uO'|-rO~Os-sO~O!V'Sa!Y'Sa~P!9mO!X-wO!V'SX!Y'SX~P%[O!Y(RO!V(ca~O!V(ca~PGfO!Y(YO!V(qa~O!P%fO!X-{O![%gO(O%eO!V'YX!Y'YX~O#]-}O!Y(oa!h(oaa(oa'u(oa~O!d#vO~P#+eO!Y(fO!h(na~O!P%fO![%gO#g.RO(O%eO~Om.WO!P%fO!X.TO![%gO!y]O#f.VO#g.TO(O%eO!Y']X!h']X~OR.[O!i#xO~Oh%WOk._O![']O%f.^O~Oa#`i!Y#`i'u#`i's#`i!V#`i!h#`is#`i![#`i%f#`i!d#`i~P!9mOk<pO}){O!P)|O(t%OO(u%QO~O#h#[aa#[a#]#[a'u#[a!Y#[a!h#[a![#[a!V#[a~P#.aO#h(ZXP(ZXR(ZX[(ZXa(ZXo(ZX!i(ZX!m(ZX#O(ZX#k(ZX#l(ZX#m(ZX#n(ZX#o(ZX#p(ZX#q(ZX#r(ZX#s(ZX#u(ZX#w(ZX#y(ZX#z(ZX'u(ZX([(ZX(m(ZX!h(ZX!V(ZX's(ZXs(ZX![(ZX%f(ZX!d(ZX~P!5zO!Y.lO!h(fX~P!9mO!h.oO~O!V.qO~OP$]OR#zO}#yO!P#{O!i#xO!m$]O([VO[#jia#jio#ji!Y#ji#O#ji#l#ji#m#ji#n#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'u#ji(m#ji(t#ji(u#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#k#ji~P#1|O#k$OO~P#1|OP$]OR#zO}#yO!P#{O!i#xO!m$]O#k$OO#l$PO#m$PO#n$PO([VO[#jia#ji!Y#ji#O#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'u#ji(m#ji(t#ji(u#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~Oo#ji~P#4kOo$QO~P#4kOP$]OR#zOo$QO}#yO!P#{O!i#xO!m$]O#k$OO#l$PO#m$PO#n$PO#o$RO([VOa#ji!Y#ji#u#ji#w#ji#y#ji#z#ji'u#ji(m#ji(t#ji(u#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O[#ji#O#ji#p#ji#q#ji#r#ji#s#ji~P#7YO[$cO#O$SO#p$SO#q$SO#r$bO#s$SO~P#7YOP$]OR#zO[$cOo$QO}#yO!P#{O!i#xO!m$]O#O$SO#k$OO#l$PO#m$PO#n$PO#o$RO#p$SO#q$SO#r$bO#s$SO#u$TO([VO(u#}Oa#ji!Y#ji#y#ji#z#ji'u#ji(m#ji(t#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#w$VO~P#:WO#w#ji~P#:WOP$]OR#zO[$cOo$QO}#yO!P#{O!i#xO!m$]O#O$SO#k$OO#l$PO#m$PO#n$PO#o$RO#p$SO#q$SO#r$bO#s$SO#u$TO([VOa#ji!Y#ji#y#ji#z#ji'u#ji(m#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#w#ji(t#ji(u#ji~P#<uO#w$VO(t#|O(u#}O~P#<uOP$]OR#zO[$cOo$QO}#yO!P#{O!i#xO!m$]O#O$SO#k$OO#l$PO#m$PO#n$PO#o$RO#p$SO#q$SO#r$bO#s$SO#u$TO#w$VO#y$XO([VO(t#|O(u#}O~Oa#ji!Y#ji#z#ji'u#ji(m#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~P#?jOP]XR]X[]Xo]X}]X!P]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X([]X(m]X(t]X(u]X!Y]X!Z]X~O#}]X~P#BQOP$]OR#zO[;SOo:vO}#yO!P#{O!i#xO!m$]O#O:xO#k:tO#l:uO#m:uO#n:uO#o:wO#p:xO#q:xO#r;RO#s:xO#u:yO#w:{O#y:}O#z;OO([VO(m$ZO(t#|O(u#}O~O#}.sO~P#D_O#P$dO#];TO$P;TO#}(bX!Z(bX~P! YOa'`a!Y'`a'u'`a's'`a!h'`a!V'`as'`a!['`a%f'`a!d'`a~P!9mOP#jiR#ji[#jia#jio#ji!Y#ji!i#ji!m#ji#O#ji#k#ji#l#ji#m#ji#n#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'u#ji([#ji(m#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~P#.aO!Y.wOg(kX~P!0pOg.yO~Oa$Oi!Y$Oi'u$Oi's$Oi!V$Oi!h$Ois$Oi![$Oi%f$Oi!d$Oi~P!9mO$[.zO$^.zO~O$[.{O$^.{O~O!d)dO#].|O![$bX$Y$bX$[$bX$^$bX$e$bX~O!X.}O~O![)gO$Y/PO$[)fO$^)fO$e/QO~O!Y;PO!Z(aX~P#D_O!Z/RO~O!d)dO$e(vX~O$e/TO~Ou)vO(])wO(^/WO~O!V/[O~P!&_O(t%OOk%^a}%^a!P%^a(u%^a!Y%^a#]%^a~Og%^a#}%^a~P#L{O(u%QOk%`a}%`a!P%`a(t%`a!Y%`a#]%`a~Og%`a#}%`a~P#MnO!YfX!dfX!hfX!h$xX(mfX~P!/gO!X/eO!Y(YO(O/dO!V(qP!V({P~P!1_Oo*oO!_*mO!`*fO!a*fO!i*^O#X*nO%]*iO(P!lO~Op'XO!P/fO!X+UO!Z*lO(QTO(TUO(`;cO!Z(sP~P$ XO!h/gO~P#.aO!Y/hO!d#vO(m'mO!h(zX~O!h/mO~O!P%fO!X*ZO![%gO(O%eO!h(zP~O#h/oO~O!V$xX!Y$xX!d%PX~P!/gO!Y/pO!V({X~P#.aO!d/rO~O!V/tO~Oh%WOo/xO!d#vO!i%cO(m'mO~O(O/zO~O!d+cO~Oa%lO!Y0OO'u%lO~O!Z0QO~P!5RO!`0RO!a0RO(P!lO(`!mO~O!P0TO(`!mO~O#X0UO~Og%^a!Y%^a#]%^a#}%^a~P!0pOg%`a!Y%`a#]%`a#}%`a~P!0pO(O&WOg'iX!Y'iX~O!Y*uOg(Xa~Og0_O~OR0`O}0`O!P0aO#P$dOkza(tza(uza!Yza#]za~Ogza#}za~P$&zO}){O!P)|Ok$qa(t$qa(u$qa!Y$qa#]$qa~Og$qa#}$qa~P$'sO}){O!P)|Ok$sa(t$sa(u$sa!Y$sa#]$sa~Og$sa#}$sa~P$(fO#h0dO~Og%Ra!Y%Ra#]%Ra#}%Ra~P!0pO!d#vO~O#h0gO~O!Y+WOa)Pa'u)Pa~OR#zO}#yO!P#{O!i#xO([VOP!oi[!oio!oi!Y!oi!m!oi#O!oi#k!oi#l!oi#m!oi#n!oi#o!oi#p!oi#q!oi#r!oi#s!oi#u!oi#w!oi#y!oi#z!oi(m!oi(t!oi(u!oi~Oa!oi'u!oi's!oi!V!oi!h!ois!oi![!oi%f!oi!d!oi~P$*TOh%WOo$uOp$tOq$tOw%YOy%ZO{;YO!P$|O![$}O!f<jO!i$yO#g;`O$V%_O$r;[O$t;^O$w%`O(QTO(TUO([$vO(t%OO(u%QO~Om0pO(O0oO~P$,kO!d+cOa(Wa![(Wa'u(Wa!Y(Wa~O#h0vO~O[]X!YfX!ZfX~O!Y0wO!Z)TX~O!Z0yO~O[0zO~Ob0|O(O+kO(QTO(TUO~O![%}O(O%eO`'qX!Y'qX~O!Y+pO`)Sa~O!h1PO~P!9mO[1SO~O`1TO~O#]1WO~Ok1ZO![$}O~O(`(xO!Z)QP~Oh%WOk1dO![1aO%f1cO~O[1nO!Y1lO!Z)RX~O!Z1oO~O`1qOa%lO'u%lO~O(O#nO(QTO(TUO~O#P$dO#]$eO$P$eOP(bXR(bX[(bXo(bX}(bX!P(bX!Y(bX!i(bX!m(bX#O(bX#k(bX#l(bX#m(bX#n(bX#o(bX#p(bX#q(bX#r(bX#u(bX#w(bX#y(bX#z(bX([(bX(m(bX(t(bX(u(bX~O#s1tO&W1uOa(bX~P$2RO#]$eO#s1tO&W1uO~Oa1wO~P%[Oa1yO~O&a1|OP&_iQ&_iS&_iY&_ia&_id&_ie&_im&_io&_ip&_iq&_iw&_iy&_i{&_i!P&_i!T&_i!U&_i![&_i!f&_i!i&_i!l&_i!m&_i!n&_i!p&_i!r&_i!u&_i!y&_i#t&_i$V&_i%e&_i%g&_i%i&_i%j&_i%k&_i%n&_i%p&_i%s&_i%t&_i%v&_i&S&_i&Y&_i&[&_i&^&_i&`&_i&c&_i&i&_i&o&_i&q&_i&s&_i&u&_i&w&_i's&_i(O&_i(Q&_i(T&_i([&_i(j&_i(y&_i!Z&_ib&_i&f&_i~Ob2SO!Z2QO&f2RO~P`O![XO!i2UO~O&m,sOP&hiQ&hiS&hiY&hia&hid&hie&him&hio&hip&hiq&hiw&hiy&hi{&hi!P&hi!T&hi!U&hi![&hi!f&hi!i&hi!l&hi!m&hi!n&hi!p&hi!r&hi!u&hi!y&hi#t&hi$V&hi%e&hi%g&hi%i&hi%j&hi%k&hi%n&hi%p&hi%s&hi%t&hi%v&hi&S&hi&Y&hi&[&hi&^&hi&`&hi&c&hi&i&hi&o&hi&q&hi&s&hi&u&hi&w&hi's&hi(O&hi(Q&hi(T&hi([&hi(j&hi(y&hi!Z&hi&a&hib&hi&f&hi~O!V2[O~O!Y!^a!Z!^a~P#D_Op!nO!P!oO!X2bO(`!mO!Y'TX!Z'TX~P@YO!Y-TO!Z(da~O!Y'ZX!Z'ZX~P!8uO!Y-WO!Z(sa~O!Z2iO~P'_Oa%lO#]2rO'u%lO~Oa%lO!d#vO#]2rO'u%lO~Oa%lO!d#vO!m2vO#]2rO'u%lO(m'mO~Oa%lO'u%lO~P!9mO!Y$`Os$oa~O!V'Si!Y'Si~P!9mO!Y(RO!V(ci~O!Y(YO!V(qi~O!V(ri!Y(ri~P!9mO!Y(oi!h(oia(oi'u(oi~P!9mO#]2xO!Y(oi!h(oia(oi'u(oi~O!Y(fO!h(ni~O!P%fO![%gO!y]O#f2}O#g2|O(O%eO~O!P%fO![%gO#g2|O(O%eO~Ok3UO![']O%f3TO~Oh%WOk3UO![']O%f3TO~O#h%^aP%^aR%^a[%^aa%^ao%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a'u%^a([%^a(m%^a!h%^a!V%^a's%^as%^a![%^a%f%^a!d%^a~P#L{O#h%`aP%`aR%`a[%`aa%`ao%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a'u%`a([%`a(m%`a!h%`a!V%`a's%`as%`a![%`a%f%`a!d%`a~P#MnO#h%^aP%^aR%^a[%^aa%^ao%^a!Y%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a'u%^a([%^a(m%^a!h%^a!V%^a's%^a#]%^as%^a![%^a%f%^a!d%^a~P#.aO#h%`aP%`aR%`a[%`aa%`ao%`a!Y%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a'u%`a([%`a(m%`a!h%`a!V%`a's%`a#]%`as%`a![%`a%f%`a!d%`a~P#.aO#hzaPza[zaazaoza!iza!mza#Oza#kza#lza#mza#nza#oza#pza#qza#rza#sza#uza#wza#yza#zza'uza([za(mza!hza!Vza'szasza![za%fza!dza~P$&zO#h$qaP$qaR$qa[$qaa$qao$qa!i$qa!m$qa#O$qa#k$qa#l$qa#m$qa#n$qa#o$qa#p$qa#q$qa#r$qa#s$qa#u$qa#w$qa#y$qa#z$qa'u$qa([$qa(m$qa!h$qa!V$qa's$qas$qa![$qa%f$qa!d$qa~P$'sO#h$saP$saR$sa[$saa$sao$sa!i$sa!m$sa#O$sa#k$sa#l$sa#m$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#u$sa#w$sa#y$sa#z$sa'u$sa([$sa(m$sa!h$sa!V$sa's$sas$sa![$sa%f$sa!d$sa~P$(fO#h%RaP%RaR%Ra[%Raa%Rao%Ra!Y%Ra!i%Ra!m%Ra#O%Ra#k%Ra#l%Ra#m%Ra#n%Ra#o%Ra#p%Ra#q%Ra#r%Ra#s%Ra#u%Ra#w%Ra#y%Ra#z%Ra'u%Ra([%Ra(m%Ra!h%Ra!V%Ra's%Ra#]%Ras%Ra![%Ra%f%Ra!d%Ra~P#.aOa#`q!Y#`q'u#`q's#`q!V#`q!h#`qs#`q![#`q%f#`q!d#`q~P!9mO!X3^O!Y'UX!h'UX~P%[O!Y.lO!h(fa~O!Y.lO!h(fa~P!9mO!V3aO~O#}!ka!Z!ka~PKPO#}!ga!Y!ga!Z!ga~P#D_O#}!oa!Z!oa~P!<TO#}!qa!Z!qa~P!>kOg'XX!Y'XX~P!+hO!Y.wOg(ka~OSfO![3uO$c3vO~O!Z3zO~Os3{O~P#.aOa$lq!Y$lq'u$lq's$lq!V$lq!h$lqs$lq![$lq%f$lq!d$lq~P!9mO!V3|O~P#.aO}){O!P)|O(u%QOk'ea(t'ea!Y'ea#]'ea~Og'ea#}'ea~P%+]O}){O!P)|Ok'ga(t'ga(u'ga!Y'ga#]'ga~Og'ga#}'ga~P%,OO(m$ZO~P#.aO!VfX!V$xX!YfX!Y$xX!d%PX#]fX~P!/gO(O;lO~P!1_OmkO(O4OO~P.iO!P%fO!X4QO![%gO(O%eO!Y'aX!h'aX~O!Y/hO!h(za~O!Y/hO!d#vO!h(za~O!Y/hO!d#vO(m'mO!h(za~Og$zi!Y$zi#]$zi#}$zi~P!0pO!X4YO!V'cX!Y'cX~P!3^O!Y/pO!V({a~O!Y/pO!V({a~P#.aO!d#vO#s4bO~Oo4eO!d#vO(m'mO~O(t%OOk%^i}%^i!P%^i(u%^i!Y%^i#]%^i~Og%^i#}%^i~P%0^O(u%QOk%`i}%`i!P%`i(t%`i!Y%`i#]%`i~Og%`i#}%`i~P%1POg(Yi!Y(Yi~P!0pO#]4lOg(Yi!Y(Yi~P!0pO!h4oO~Oa$mq!Y$mq'u$mq's$mq!V$mq!h$mqs$mq![$mq%f$mq!d$mq~P!9mO!V4sO~O!Y4tO![(|X~P#.aOa$xX![$xX%Z]X'u$xX!Y$xX~P!/gO%Z4wOalXklX}lX!PlX![lX'ulX(tlX(ulX!YlX~O%Z4wO~Ob4}O%g5OO(O+kO(QTO(TUO!Y'pX!Z'pX~O!Y0wO!Z)Ta~O[5SO~O`5TO~Oa%lO'u%lO~P#.aO![$}O~P#.aO!Y5]O#]5_O!Z)QX~O!Z5`O~Op!nO!P5aO!_!yO!`!vO!a!vO!y:lO#Q!pO#R!pO#S!pO#T!pO#U!pO#X5fO#Y!zO(P!lO(QTO(TUO(`!mO(j!sO~O!Z5eO~P%6ZOk5kO![1aO%f5jO~Oh%WOk5kO![1aO%f5jO~Ob5rO(O#nO(QTO(TUO!Y'oX!Z'oX~O!Y1lO!Z)Ra~O(QTO(TUO(`5tO~O`5xO~O#s5{O&W5|O~PMlO!h5}O~P%[Oa6PO~Oa6PO~P%[Ob2SO!Z6UO&f2RO~P`O!d6WO~O!d6YOh(ei!Y(ei!Z(ei!d(ei!i(ei~O!Y#ei!Z#ei~P#D_O#]6ZO!Y#ei!Z#ei~O!Y!^i!Z!^i~P#D_Oa%lO#]6dO'u%lO~Oa%lO!d#vO#]6dO'u%lO~O!Y(oq!h(oqa(oq'u(oq~P!9mO!Y(fO!h(nq~O!P%fO![%gO#g6kO(O%eO~O![']O%f6nO~Ok6rO![']O%f6nO~O#h'eaP'eaR'ea['eaa'eao'ea!i'ea!m'ea#O'ea#k'ea#l'ea#m'ea#n'ea#o'ea#p'ea#q'ea#r'ea#s'ea#u'ea#w'ea#y'ea#z'ea'u'ea(['ea(m'ea!h'ea!V'ea's'eas'ea!['ea%f'ea!d'ea~P%+]O#h'gaP'gaR'ga['gaa'gao'ga!i'ga!m'ga#O'ga#k'ga#l'ga#m'ga#n'ga#o'ga#p'ga#q'ga#r'ga#s'ga#u'ga#w'ga#y'ga#z'ga'u'ga(['ga(m'ga!h'ga!V'ga's'gas'ga!['ga%f'ga!d'ga~P%,OO#h$ziP$ziR$zi[$zia$zio$zi!Y$zi!i$zi!m$zi#O$zi#k$zi#l$zi#m$zi#n$zi#o$zi#p$zi#q$zi#r$zi#s$zi#u$zi#w$zi#y$zi#z$zi'u$zi([$zi(m$zi!h$zi!V$zi's$zi#]$zis$zi![$zi%f$zi!d$zi~P#.aO#h%^iP%^iR%^i[%^ia%^io%^i!i%^i!m%^i#O%^i#k%^i#l%^i#m%^i#n%^i#o%^i#p%^i#q%^i#r%^i#s%^i#u%^i#w%^i#y%^i#z%^i'u%^i([%^i(m%^i!h%^i!V%^i's%^is%^i![%^i%f%^i!d%^i~P%0^O#h%`iP%`iR%`i[%`ia%`io%`i!i%`i!m%`i#O%`i#k%`i#l%`i#m%`i#n%`i#o%`i#p%`i#q%`i#r%`i#s%`i#u%`i#w%`i#y%`i#z%`i'u%`i([%`i(m%`i!h%`i!V%`i's%`is%`i![%`i%f%`i!d%`i~P%1PO!Y'Ua!h'Ua~P!9mO!Y.lO!h(fi~O#}#`i!Y#`i!Z#`i~P#D_OP$]OR#zO}#yO!P#{O!i#xO!m$]O([VO[#jio#ji#O#ji#l#ji#m#ji#n#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(m#ji(t#ji(u#ji!Y#ji!Z#ji~O#k#ji~P%HpO#k:tO~P%HpOP$]OR#zO}#yO!P#{O!i#xO!m$]O#k:tO#l:uO#m:uO#n:uO([VO[#ji#O#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(m#ji(t#ji(u#ji!Y#ji!Z#ji~Oo#ji~P%JxOo:vO~P%JxOP$]OR#zOo:vO}#yO!P#{O!i#xO!m$]O#k:tO#l:uO#m:uO#n:uO#o:wO([VO#u#ji#w#ji#y#ji#z#ji#}#ji(m#ji(t#ji(u#ji!Y#ji!Z#ji~O[#ji#O#ji#p#ji#q#ji#r#ji#s#ji~P%MQO[;SO#O:xO#p:xO#q:xO#r;RO#s:xO~P%MQOP$]OR#zO[;SOo:vO}#yO!P#{O!i#xO!m$]O#O:xO#k:tO#l:uO#m:uO#n:uO#o:wO#p:xO#q:xO#r;RO#s:xO#u:yO([VO(u#}O#y#ji#z#ji#}#ji(m#ji(t#ji!Y#ji!Z#ji~O#w:{O~P& iO#w#ji~P& iOP$]OR#zO[;SOo:vO}#yO!P#{O!i#xO!m$]O#O:xO#k:tO#l:uO#m:uO#n:uO#o:wO#p:xO#q:xO#r;RO#s:xO#u:yO([VO#y#ji#z#ji#}#ji(m#ji!Y#ji!Z#ji~O#w#ji(t#ji(u#ji~P&#qO#w:{O(t#|O(u#}O~P&#qOP$]OR#zO[;SOo:vO}#yO!P#{O!i#xO!m$]O#O:xO#k:tO#l:uO#m:uO#n:uO#o:wO#p:xO#q:xO#r;RO#s:xO#u:yO#w:{O#y:}O([VO(t#|O(u#}O~O#z#ji#}#ji(m#ji!Y#ji!Z#ji~P&&POa#{y!Y#{y'u#{y's#{y!V#{y!h#{ys#{y![#{y%f#{y!d#{y~P!9mOk<qO}){O!P)|O(t%OO(u%QO~OP#jiR#ji[#jio#ji!i#ji!m#ji#O#ji#k#ji#l#ji#m#ji#n#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji([#ji(m#ji!Y#ji!Z#ji~P&(tO#P$dOP(ZXR(ZX[(ZXk(ZXo(ZX}(ZX!P(ZX!i(ZX!m(ZX#O(ZX#k(ZX#l(ZX#m(ZX#n(ZX#o(ZX#p(ZX#q(ZX#r(ZX#s(ZX#u(ZX#w(ZX#y(ZX#z(ZX#}(ZX([(ZX(m(ZX(t(ZX(u(ZX!Y(ZX!Z(ZX~O#}$Oi!Y$Oi!Z$Oi~P#D_O#}!oi!Z!oi~P$*TOg'Xa!Y'Xa~P!0pO!Z7UO~O!Y'`a!Z'`a~P#D_OP]XR]X[]Xo]X}]X!P]X!V]X!Y]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X([]X(m]X(t]X(u]X~O!d%WX#s%WX~P&-}O!d#vO(m'mO!Y'aa!h'aa~O!Y/hO!h(zi~O!Y/hO!d#vO!h(zi~Og$zq!Y$zq#]$zq#}$zq~P!0pO!V'ca!Y'ca~P#.aO!d7]O~O!Y/pO!V({i~P#.aO!Y/pO!V({i~O!V7aO~O!d#vO#s7fO~Oo7gO!d#vO(m'mO~O}){O!P)|O(u%QOk'fa(t'fa!Y'fa#]'fa~Og'fa#}'fa~P&2mO}){O!P)|Ok'ha(t'ha(u'ha!Y'ha#]'ha~Og'ha#}'ha~P&3`O!V7iO~Og$|q!Y$|q#]$|q#}$|q~P!0pOa$my!Y$my'u$my's$my!V$my!h$mys$my![$my%f$my!d$my~P!9mO!d6YO~O!Y4tO![(|a~O![']OP$SaR$Sa[$Sao$Sa}$Sa!P$Sa!Y$Sa!i$Sa!m$Sa#O$Sa#k$Sa#l$Sa#m$Sa#n$Sa#o$Sa#p$Sa#q$Sa#r$Sa#s$Sa#u$Sa#w$Sa#y$Sa#z$Sa([$Sa(m$Sa(t$Sa(u$Sa~O%f6nO~P&5iOa#`y!Y#`y'u#`y's#`y!V#`y!h#`ys#`y![#`y%f#`y!d#`y~P!9mO[7nO~Ob7pO(O+kO(QTO(TUO~O!Y0wO!Z)Ti~O`7tO~O(`(xO!Y'lX!Z'lX~O!Y5]O!Z)Qa~O!Z7}O~P%6ZOp!nO!P8OO(QTO(TUO(`!mO(j!sO~O![1aO~O![1aO%f8QO~Ok8TO![1aO%f8QO~O[8YO!Y'oa!Z'oa~O!Y1lO!Z)Ri~O!h8^O~O!h8_O~O!h8bO~O!h8bO~P%[Oa8dO~O!d8eO~O!h8fO~O!Y(ri!Z(ri~P#D_Oa%lO#]8nO'u%lO~O!Y(oy!h(oya(oy'u(oy~P!9mO!Y(fO!h(ny~O%f8qO~P&5iO![']O%f8qO~O#h$zqP$zqR$zq[$zqa$zqo$zq!Y$zq!i$zq!m$zq#O$zq#k$zq#l$zq#m$zq#n$zq#o$zq#p$zq#q$zq#r$zq#s$zq#u$zq#w$zq#y$zq#z$zq'u$zq([$zq(m$zq!h$zq!V$zq's$zq#]$zqs$zq![$zq%f$zq!d$zq~P#.aO#h'faP'faR'fa['faa'fao'fa!i'fa!m'fa#O'fa#k'fa#l'fa#m'fa#n'fa#o'fa#p'fa#q'fa#r'fa#s'fa#u'fa#w'fa#y'fa#z'fa'u'fa(['fa(m'fa!h'fa!V'fa's'fas'fa!['fa%f'fa!d'fa~P&2mO#h'haP'haR'ha['haa'hao'ha!i'ha!m'ha#O'ha#k'ha#l'ha#m'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#u'ha#w'ha#y'ha#z'ha'u'ha(['ha(m'ha!h'ha!V'ha's'has'ha!['ha%f'ha!d'ha~P&3`O#h$|qP$|qR$|q[$|qa$|qo$|q!Y$|q!i$|q!m$|q#O$|q#k$|q#l$|q#m$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#u$|q#w$|q#y$|q#z$|q'u$|q([$|q(m$|q!h$|q!V$|q's$|q#]$|qs$|q![$|q%f$|q!d$|q~P#.aO!Y'Ui!h'Ui~P!9mO#}#`q!Y#`q!Z#`q~P#D_O(t%OOP%^aR%^a[%^ao%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a#}%^a([%^a(m%^a!Y%^a!Z%^a~Ok%^a}%^a!P%^a(u%^a~P&FgO(u%QOP%`aR%`a[%`ao%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a#}%`a([%`a(m%`a!Y%`a!Z%`a~Ok%`a}%`a!P%`a(t%`a~P&HkOk<qO}){O!P)|O(u%QO~P&FgOk<qO}){O!P)|O(t%OO~P&HkOR0`O}0`O!P0aO#P$dOPza[zakzaoza!iza!mza#Oza#kza#lza#mza#nza#oza#pza#qza#rza#sza#uza#wza#yza#zza#}za([za(mza(tza(uza!Yza!Zza~O}){O!P)|OP$qaR$qa[$qak$qao$qa!i$qa!m$qa#O$qa#k$qa#l$qa#m$qa#n$qa#o$qa#p$qa#q$qa#r$qa#s$qa#u$qa#w$qa#y$qa#z$qa#}$qa([$qa(m$qa(t$qa(u$qa!Y$qa!Z$qa~O}){O!P)|OP$saR$sa[$sak$sao$sa!i$sa!m$sa#O$sa#k$sa#l$sa#m$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#u$sa#w$sa#y$sa#z$sa#}$sa([$sa(m$sa(t$sa(u$sa!Y$sa!Z$sa~OP%RaR%Ra[%Rao%Ra!i%Ra!m%Ra#O%Ra#k%Ra#l%Ra#m%Ra#n%Ra#o%Ra#p%Ra#q%Ra#r%Ra#s%Ra#u%Ra#w%Ra#y%Ra#z%Ra#}%Ra([%Ra(m%Ra!Y%Ra!Z%Ra~P&(tO#}$lq!Y$lq!Z$lq~P#D_O#}$mq!Y$mq!Z$mq~P#D_O!Z9OO~O#}9PO~P!0pO!d#vO!Y'ai!h'ai~O!d#vO(m'mO!Y'ai!h'ai~O!Y/hO!h(zq~O!V'ci!Y'ci~P#.aO!Y/pO!V({q~O!V9VO~P#.aO!V9VO~Og(Yy!Y(Yy~P!0pO!Y'ja!['ja~P#.aOa%Yq![%Yq'u%Yq!Y%Yq~P#.aO[9[O~O!Y0wO!Z)Tq~O#]9`O!Y'la!Z'la~O!Y5]O!Z)Qi~P#D_O![1aO%f9dO~O(QTO(TUO(`9iO~O!Y1lO!Z)Rq~O!h9lO~O!h9mO~O!h9nO~O!h9nO~P%[O#]9qO!Y#ey!Z#ey~O!Y#ey!Z#ey~P#D_O%f9vO~P&5iO![']O%f9vO~O#}#{y!Y#{y!Z#{y~P#D_OP$ziR$zi[$zio$zi!i$zi!m$zi#O$zi#k$zi#l$zi#m$zi#n$zi#o$zi#p$zi#q$zi#r$zi#s$zi#u$zi#w$zi#y$zi#z$zi#}$zi([$zi(m$zi!Y$zi!Z$zi~P&(tO}){O!P)|O(u%QOP'eaR'ea['eak'eao'ea!i'ea!m'ea#O'ea#k'ea#l'ea#m'ea#n'ea#o'ea#p'ea#q'ea#r'ea#s'ea#u'ea#w'ea#y'ea#z'ea#}'ea(['ea(m'ea(t'ea!Y'ea!Z'ea~O}){O!P)|OP'gaR'ga['gak'gao'ga!i'ga!m'ga#O'ga#k'ga#l'ga#m'ga#n'ga#o'ga#p'ga#q'ga#r'ga#s'ga#u'ga#w'ga#y'ga#z'ga#}'ga(['ga(m'ga(t'ga(u'ga!Y'ga!Z'ga~O(t%OOP%^iR%^i[%^ik%^io%^i}%^i!P%^i!i%^i!m%^i#O%^i#k%^i#l%^i#m%^i#n%^i#o%^i#p%^i#q%^i#r%^i#s%^i#u%^i#w%^i#y%^i#z%^i#}%^i([%^i(m%^i(u%^i!Y%^i!Z%^i~O(u%QOP%`iR%`i[%`ik%`io%`i}%`i!P%`i!i%`i!m%`i#O%`i#k%`i#l%`i#m%`i#n%`i#o%`i#p%`i#q%`i#r%`i#s%`i#u%`i#w%`i#y%`i#z%`i#}%`i([%`i(m%`i(t%`i!Y%`i!Z%`i~O#}$my!Y$my!Z$my~P#D_O#}#`y!Y#`y!Z#`y~P#D_O!d#vO!Y'aq!h'aq~O!Y/hO!h(zy~O!V'cq!Y'cq~P#.aO!V:PO~P#.aO!Y0wO!Z)Ty~O!Y5]O!Z)Qq~O![1aO%f:WO~O!h:ZO~O%f:`O~P&5iOP$zqR$zq[$zqo$zq!i$zq!m$zq#O$zq#k$zq#l$zq#m$zq#n$zq#o$zq#p$zq#q$zq#r$zq#s$zq#u$zq#w$zq#y$zq#z$zq#}$zq([$zq(m$zq!Y$zq!Z$zq~P&(tO}){O!P)|O(u%QOP'faR'fa['fak'fao'fa!i'fa!m'fa#O'fa#k'fa#l'fa#m'fa#n'fa#o'fa#p'fa#q'fa#r'fa#s'fa#u'fa#w'fa#y'fa#z'fa#}'fa(['fa(m'fa(t'fa!Y'fa!Z'fa~O}){O!P)|OP'haR'ha['hak'hao'ha!i'ha!m'ha#O'ha#k'ha#l'ha#m'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#u'ha#w'ha#y'ha#z'ha#}'ha(['ha(m'ha(t'ha(u'ha!Y'ha!Z'ha~OP$|qR$|q[$|qo$|q!i$|q!m$|q#O$|q#k$|q#l$|q#m$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#u$|q#w$|q#y$|q#z$|q#}$|q([$|q(m$|q!Y$|q!Z$|q~P&(tOg%b!Z!Y%b!Z#]%b!Z#}%b!Z~P!0pO!Y'lq!Z'lq~P#D_O!Y#e!Z!Z#e!Z~P#D_O#h%b!ZP%b!ZR%b!Z[%b!Za%b!Zo%b!Z!Y%b!Z!i%b!Z!m%b!Z#O%b!Z#k%b!Z#l%b!Z#m%b!Z#n%b!Z#o%b!Z#p%b!Z#q%b!Z#r%b!Z#s%b!Z#u%b!Z#w%b!Z#y%b!Z#z%b!Z'u%b!Z([%b!Z(m%b!Z!h%b!Z!V%b!Z's%b!Z#]%b!Zs%b!Z![%b!Z%f%b!Z!d%b!Z~P#.aOP%b!ZR%b!Z[%b!Zo%b!Z!i%b!Z!m%b!Z#O%b!Z#k%b!Z#l%b!Z#m%b!Z#n%b!Z#o%b!Z#p%b!Z#q%b!Z#r%b!Z#s%b!Z#u%b!Z#w%b!Z#y%b!Z#z%b!Z#}%b!Z([%b!Z(m%b!Z!Y%b!Z!Z%b!Z~P&(tOs(aX~P1qO}%pO~P!(oO(P!lO~P!(oO!VfX!YfX#]fX~P&-}OP]XR]X[]Xo]X}]X!P]X!Y]X!YfX!i]X!m]X#O]X#P]X#]]X#]fX#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X([]X(m]X(t]X(u]X~O!dfX!h]X!hfX(mfX~P'CvOP:kOQ:kOSfOd<fOe!iOmkOo:kOpkOqkOwkOy:kO{:kO!PWO!TkO!UkO![XO!f:nO!iZO!l:kO!m:kO!n:kO!p:oO!r:rO!u!hO$V!kO(O)YO(QTO(TUO([VO(j[O(y<dO~O!Y;PO!Z$oa~Oh%WOm%XOo$uOp$tOq$tOw%YOy%ZO{;ZO!P$|O![$}O!f<kO!i$yO#g;aO$V%_O$r;]O$t;_O$w%`O(O(rO(QTO(TUO([$vO(t%OO(u%QO~O#t)`O~P'HlOo!bX(m!bX~P# ZO!Z]X!ZfX~P'CvO!VfX!V$xX!YfX!Y$xX#]fX~P!/gO#h:sO~O!d#vO#h:sO~O#];TO~O#s:xO~O#];dO!Y(rX!Z(rX~O#];TO!Y(pX!Z(pX~O#h;eO~Og;gO~P!0pO#h;mO~O#h;nO~O!d#vO#h;oO~O!d#vO#h;eO~O#};pO~P#D_O#h;qO~O#h;rO~O#h;wO~O#h;xO~O#h;yO~O#h;zO~O#};{O~P!0pO#};|O~P!0pO#P#Q#R#T#U#X#f#g#r(y$r$t$w%Z%e%f%g%n%p%s%t%v%x~'yT#l!U'w(P#mp#k#no}'x$['x(O$^(`~",
		goto: "$2y)XPPPPPP)YPP)]P)nP+O/PPPPP5wPP6_PP<U?kP@OP@OPPP@OPBOP@OP@OP@OPBSPBXPBvPGoPPPGsPPPPGsJuPPPJ{KwPGsPGsPPNVGsPPPGsPGsP!!^GsP!%s!&x!'RP!'u!'y!'u!+VPPPPPPP!+v!&xPP!,W!-QP!/tGsGs!/y!3U!7l!7l!;jPPP!;rGsPPPPPPPPPPP!?QP!@_PPGs!ApPGsPGsGsGsGsGsPGs!CSP!F]P!IbP!If!Ip!It!ItP!FYP!Ix!IxP!L}P!MRGsGs!MX#!]BS@OP@OP@O@OP##i@O@O#%s@O#(c@O#*g@O@O#+V#-c#-c#-h#-q#-c#-zP#-cP@O#.d@O#2T@O@O5wPPP#5zPPP#6e#6eP#6eP#6{#6ePP#7RP#6xP#6x#7f#6x#8Q#8W5t)]#8Z)]P#8b#8b#8bP)]P)]P)]P)]PP)]P#8h#8kP#8k)]P#8oP#8rP)]P)]P)]P)]P)]P)])]PP#8x#9O#9Z#9a#9g#9m#9s#:R#:X#:c#:i#:s#:y#;Z#;a#<R#<e#<k#<q#=P#=f#?T#?c#?j#AO#A^#Bx#CW#C^#Cd#Cj#Ct#Cz#DQ#D[#Dn#DtPPPPPPPPPP#DzPPPPPPP#Eo#Hv#JV#J^#JfPPP$ lP$ u$$m$+V$+Y$+]$+x$+{$,S$,[P$,b$,eP$-R$-V$-}$/]$/b$/xPP$/}$0T$0XP$0[$0`$0d$1Y$1q$2Y$2^$2a$2d$2j$2m$2q$2uR!|RoqOXst!Z#d%k&o&q&r&t,k,p1|2PY!vQ']-]1a5dQ%rvQ%zyQ&R|Q&g!VS'T!e-TQ'c!iS'i!r!yU*f$}*W*kQ+i%{Q+v&TQ,[&aQ-Z'[Q-e'dQ-m'jQ0R*mQ1k,]R;b:o%QdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Y$`$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)z+R+V,h,k,p-a-i-w-}.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3^5a5k5{5|6P6d8O8T8d8nS#q]:l!r)[$[$n'U)o,|-P.}2b3u5_6Z9`9q:k:n:o:r:s:t:u:v:w:x:y:z:{:|:};O;P;T;b;d;e;g;o;p;y;z<gU*y%[;Y;ZQ+n%}Q,^&dQ,e&lQ0m+aQ0q+cQ0|+oQ1s,cQ3Q._Q4}0wQ5r1lQ6p3UQ7p5OR8t6r'OkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$`$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)z+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5_5a5k5{5|6P6Z6d6r8O8T8d8n9`9q:k:n:o:r:s:t:u:v:w:x:y:z:{:|:};O;P;T;b;d;e;g;o;p;y;z<gt!nQ!r!v!y!z'T'[']'i'j'k-T-Z-]-m1a5d5f$z$ti#v$b$c$d$y$|%P%R%]%^%b)v)|*O*Q*S*V*]*c*s*t+`+c+z+}.^.w/]/e/o/p/r0V0X0d1W1Z1c3T3}4Y4b4l4t4w5j6n7]7f8Q8q9P9d9v:W:`;R;S;U;V;W;X;[;];^;_;`;a;h;i;j;k;m;n;q;r;s;t;u;v;w;x;{;|<d<l<m<p<qQ&U|Q'R!eU'X%g*W-WQ+n%}Q,^&dQ0c*|Q0|+oQ1R+uQ1r,bQ1s,cQ4}0wQ5W1TQ5r1lQ5u1nQ5v1qQ7p5OQ7s5TQ8]5xQ9_7tR9j8YrnOXst!V!Z#d%k&f&o&q&r&t,k,p1|2PR,`&h&x^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$`$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(R(X(`(t(v(z)o)z+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5_5a5k5{5|6P6Z6d6r8O8T8d8n9`9q:k:n:o:r:s:t:u:v:w:x:y:z:{:|:};O;P;T;b;d;e;g;o;p;y;z<f<g[#]WZ#W#Z'U(P!b%hm#h#i#l$y%c%f(Y(d(e(f*V*Z*^+T+U+W,g,}-{.R.S.T.V/e/h2U2|2}4Q6Y6kQ%uxQ%yyS&O|&TQ&[!TQ'`!hQ'b!iQ(m#sS+h%z%{Q+l%}Q,V&_Q,Z&aS-d'c'dQ.a(nQ0u+iQ0{+oQ0}+pQ1Q+tQ1f,WS1j,[,]Q2n-eQ4|0wQ5Q0zQ5V1SQ5q1kQ7o5OQ7r5SQ9Z7nR:R9[!O${i$d%P%R%]%^%b*O*Q*]*s*t.w/o0V0X0d3}4l9P<d<l<m!S%wy!i!u%y%z%{'S'b'c'd'h'r*e+h+i-Q-d-e-l/y0u2g2n2u4dQ+b%uQ+{&XQ,O&YQ,Y&aQ.`(mQ1e,VU1i,Z,[,]Q3V.aQ5l1fS5p1j1kQ8X5q#[<h#v$b$c$y$|)v)|*S*V*c+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4t4w5j6n7]7f8Q8q9d9v:W:`;U;W;[;^;`;h;j;m;q;s;u;w;{<p<qo<i;R;S;V;X;];_;a;i;k;n;r;t;v;x;|W%Ui%W*u<dS&X!Q&fQ&Y!RQ&Z!SR+y&V${%Ti#v$b$c$d$y$|%P%R%]%^%b)v)|*O*Q*S*V*]*c*s*t+`+c+z+}.^.w/]/e/o/p/r0V0X0d1W1Z1c3T3}4Y4b4l4t4w5j6n7]7f8Q8q9P9d9v:W:`;R;S;U;V;W;X;[;];^;_;`;a;h;i;j;k;m;n;q;r;s;t;u;v;w;x;{;|<d<l<m<p<qT)w$v)xV*y%[;Y;ZW'X!e%g*W-WS(y#y#zQ+]%pQ+s&QS.Y(i(jQ1[,PQ4m0`R7x5]'OkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$`$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)z+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5_5a5k5{5|6P6Z6d6r8O8T8d8n9`9q:k:n:o:r:s:t:u:v:w:x:y:z:{:|:};O;P;T;b;d;e;g;o;p;y;z<g$i$_c#Y#e%o%q%s(O(U(p(u(})O)P)Q)R)S)T)U)V)W)X)Z)])c)m+^+r-R-p-u-z-|.k.n.r.t.u.v/X0e2]2`2p2w3]3b3c3d3e3f3g3h3i3j3k3l3m3n3q3r3y4q4z6]6c6h6w6x7R7S7z8h8l8v8|8}9s:T:[:m<ZT#TV#U'PkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$`$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)z+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5_5a5k5{5|6P6Z6d6r8O8T8d8n9`9q:k:n:o:r:s:t:u:v:w:x:y:z:{:|:};O;P;T;b;d;e;g;o;p;y;z<gQ'V!eR2c-Tv!nQ!e!r!v!y!z'T'[']'i'j'k-T-Z-]-m1a5d5fU*e$}*W*kS/y*f*mQ0S*nQ1^,RQ4d0RR4g0UnqOXst!Z#d%k&o&q&r&t,k,p1|2PQ&v!^Q's!xS(o#u:sQ+f%xQ,T&[Q,U&^Q-b'aQ-o'lS.j(t;eS0f+R;oQ0s+gQ1`,SQ2T,rQ2V,sQ2_-OQ2l-cQ2o-gS4r0g;yQ4x0tS4{0v;zQ6[2aQ6`2mQ6e2tQ7m4yQ8i6^Q8j6aQ8m6fR9p8f$d$^c#Y#e%q%s(O(U(p(u(})O)P)Q)R)S)T)U)V)W)X)Z)])c)m+^+r-R-p-u-z-|.k.n.r.u.v/X0e2]2`2p2w3]3b3c3d3e3f3g3h3i3j3k3l3m3n3q3r3y4q4z6]6c6h6w6x7R7S7z8h8l8v8|8}9s:T:[:m<ZS(k#p'fQ({#zS+[%o.tS.Z(j(lR3O.['OkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$`$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)z+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5_5a5k5{5|6P6Z6d6r8O8T8d8n9`9q:k:n:o:r:s:t:u:v:w:x:y:z:{:|:};O;P;T;b;d;e;g;o;p;y;z<gS#q]:lQ&q!XQ&r!YQ&t![Q&u!]R1{,nQ'^!hQ+_%uQ-`'`S.](m+bQ2j-_W3S.`.a0l0nQ6_2kW6l3P3R3V4vU8p6m6o6qU9u8r8s8uS:^9t9wQ:f:_R:i:gU!wQ']-]T5b1a5d!Q_OXZ`st!V!Z#d#h%c%k&f&h&o&q&r&t(f,k,p.S1|2P]!pQ!r']-]1a5dT#q]:l%[{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Y$`$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)z+R+V+a,h,k,p-a-i-w-}._.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3U3^5a5k5{5|6P6d6r8O8T8d8nS(y#y#zS.Y(i(j!s<Q$[$n'U)o,|-P.}2b3u5_6Z9`9q:k:n:o:r:s:t:u:v:w:x:y:z:{:|:};O;P;T;b;d;e;g;o;p;y;z<gU$fd)[,eS(l#p'fU*r%S(s3pU0b*x.f6}Q4v0mQ6m3QQ8s6pR9w8tm!tQ!r!v!y!z']'i'j'k-]-m1a5d5fQ'q!uS(b#g1vS-k'h'tQ/k*YQ/w*eQ2v-nQ4U/lS4_/x0SQ7X4PS7d4e4gQ9R7YR9Y7gQ#wbQ'p!uS(a#g1vS(c#m+QQ+S%dQ+d%vQ+j%|U-j'h'q'tQ.O(bQ/j*YQ/v*eQ/|*hQ0r+eQ1g,XS2s-k-nQ2{.WS4T/k/lS4^/w0SQ4a/{Q4c/}Q5n1hQ6g2vQ7W4PQ7[4US7`4_4gQ7e4fQ8V5oS9Q7X7YQ9U7aQ9W7dQ9g8WQ9}9RQ:O9VQ:Q9YQ:Y9hQ:b:PQ<T<OQ<`<XR<a<YV!wQ']-]%[aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Y$`$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)z+R+V+a,h,k,p-a-i-w-}._.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3U3^5a5k5{5|6P6d6r8O8T8d8nS#wz!j!r;}$[$n'U)o,|-P.}2b3u5_6Z9`9q:k:n:o:r:s:t:u:v:w:x:y:z:{:|:};O;P;T;b;d;e;g;o;p;y;z<gR<T<f%[bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Y$`$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)z+R+V+a,h,k,p-a-i-w-}._.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3U3^5a5k5{5|6P6d6r8O8T8d8nQ%dj!S%vy!i!u%y%z%{'S'b'c'd'h'r*e+h+i-Q-d-e-l/y0u2g2n2u4dS%|z!jQ+e%wQ,X&aW1h,Y,Z,[,]U5o1i1j1kS8W5p5qQ9h8X!r<O$[$n'U)o,|-P.}2b3u5_6Z9`9q:k:n:o:r:s:t:u:v:w:x:y:z:{:|:};O;P;T;b;d;e;g;o;p;y;z<gQ<X<eR<Y<f%OeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Y$`$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(R(X(`(t(v(z)z+R+V+a,h,k,p-a-i-w-}._.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3U3^5a5k5{5|6P6d6r8O8T8d8nY#bWZ#W#Z(P!b%hm#h#i#l$y%c%f(Y(d(e(f*V*Z*^+T+U+W,g,}-{.R.S.T.V/e/h2U2|2}4Q6Y6kQ,f&l!p<P$[$n)o,|-P.}2b3u5_6Z9`9q:k:n:o:r:s:t:u:v:w:x:y:z:{:|:};O;P;T;b;d;e;g;o;p;y;z<gR<S'UU'Y!e%g*WR2e-W%QdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Y$`$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)z+R+V,h,k,p-a-i-w-}.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3^5a5k5{5|6P6d8O8T8d8n!r)[$[$n'U)o,|-P.}2b3u5_6Z9`9q:k:n:o:r:s:t:u:v:w:x:y:z:{:|:};O;P;T;b;d;e;g;o;p;y;z<gQ,e&lQ0m+aQ3Q._Q6p3UR8t6r!b$Uc#Y%o(O(U(p(u)W)X)])c+r-p-u-z-|.k.n/X0e2p2w3]3n4q4z6c6h6w8l9s:m!P:z)Z)m-R.t2]2`3b3l3m3q3y6]6x7R7S7z8h8v8|8}:T:[<Z!f$Wc#Y%o(O(U(p(u)T)U)W)X)])c+r-p-u-z-|.k.n/X0e2p2w3]3n4q4z6c6h6w8l9s:m!T:|)Z)m-R.t2]2`3b3i3j3l3m3q3y6]6x7R7S7z8h8v8|8}:T:[<Z!^$[c#Y%o(O(U(p(u)])c+r-p-u-z-|.k.n/X0e2p2w3]3n4q4z6c6h6w8l9s:mQ3}/cz<g)Z)m-R.t2]2`3b3q3y6]6x7R7S7z8h8v8|8}:T:[<ZQ<l<nR<m<o'OkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$`$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)z+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5_5a5k5{5|6P6Z6d6r8O8T8d8n9`9q:k:n:o:r:s:t:u:v:w:x:y:z:{:|:};O;P;T;b;d;e;g;o;p;y;z<gS$oh$pR3v.|'VgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$`$e$n$p%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)z+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.|.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5_5a5k5{5|6P6Z6d6r8O8T8d8n9`9q:k:n:o:r:s:t:u:v:w:x:y:z:{:|:};O;P;T;b;d;e;g;o;p;y;z<gT$kf$qQ$ifS)f$l)jR)r$qT$jf$qT)h$l)j'VhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$`$e$n$p%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)z+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.|.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5_5a5k5{5|6P6Z6d6r8O8T8d8n9`9q:k:n:o:r:s:t:u:v:w:x:y:z:{:|:};O;P;T;b;d;e;g;o;p;y;z<gT$oh$pQ$rhR)q$p%[jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Y$`$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)z+R+V+a,h,k,p-a-i-w-}._.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3U3^5a5k5{5|6P6d6r8O8T8d8n!s<e$[$n'U)o,|-P.}2b3u5_6Z9`9q:k:n:o:r:s:t:u:v:w:x:y:z:{:|:};O;P;T;b;d;e;g;o;p;y;z<g#elOPXZst!Z!`!o#S#d#o#{$n%k&h&k&l&o&q&r&t&x'Q'_(z)o+V+a,h,k,p-a._.}/f0a1d1t1u1w1y1|2P2R3U3u5a5k5{5|6P6r8O8T8d!O%Si$d%P%R%]%^%b*O*Q*]*s*t.w/o0V0X0d3}4l9P<d<l<m#[(s#v$b$c$y$|)v)|*S*V*c+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4t4w5j6n7]7f8Q8q9d9v:W:`;U;W;[;^;`;h;j;m;q;s;u;w;{<p<qQ*}%`Q/Y){o3p;R;S;V;X;];_;a;i;k;n;r;t;v;x;|!O$zi$d%P%R%]%^%b*O*Q*]*s*t.w/o0V0X0d3}4l9P<d<l<mQ*_${U*h$}*W*kQ+O%aQ/}*i#[<V#v$b$c$y$|)v)|*S*V*c+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4t4w5j6n7]7f8Q8q9d9v:W:`;U;W;[;^;`;h;j;m;q;s;u;w;{<p<qn<W;R;S;V;X;];_;a;i;k;n;r;t;v;x;|Q<[<hQ<]<iQ<^<jR<_<k!O%Si$d%P%R%]%^%b*O*Q*]*s*t.w/o0V0X0d3}4l9P<d<l<m#[(s#v$b$c$y$|)v)|*S*V*c+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4t4w5j6n7]7f8Q8q9d9v:W:`;U;W;[;^;`;h;j;m;q;s;u;w;{<p<qo3p;R;S;V;X;];_;a;i;k;n;r;t;v;x;|noOXst!Z#d%k&o&q&r&t,k,p1|2PS*b$|*VQ,y&{Q,z&}R4X/p$z%Ti#v$b$c$d$y$|%P%R%]%^%b)v)|*O*Q*S*V*]*c*s*t+`+c+z+}.^.w/]/e/o/p/r0V0X0d1W1Z1c3T3}4Y4b4l4t4w5j6n7]7f8Q8q9P9d9v:W:`;R;S;U;V;W;X;[;];^;_;`;a;h;i;j;k;m;n;q;r;s;t;u;v;w;x;{;|<d<l<m<p<qQ+|&YQ1Y,OQ5Z1XR7w5[V*j$}*W*kU*j$}*W*kT5c1a5dU/{*g/f5aT4f0T8OQ+d%vQ/|*hQ0r+eQ1g,XQ5n1hQ8V5oQ9g8WR:Y9h!O%Pi$d%P%R%]%^%b*O*Q*]*s*t.w/o0V0X0d3}4l9P<d<l<mr*O$w)a*P*q+P/n0Z0[3s4V4p7V7h9|<U<b<cS0V*p0W#[;U#v$b$c$y$|)v)|*S*V*c+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4t4w5j6n7]7f8Q8q9d9v:W:`;U;W;[;^;`;h;j;m;q;s;u;w;{<p<qn;V;R;S;V;X;];_;a;i;k;n;r;t;v;x;|!^;h(q)_*X*a.b.e.i/U/Z/c/s0k1V1X3Y4W4[5Y5[6s6v7^7b7j7l9T9X:a<n<o`;i3o6y6|7Q8w9x9{:jS;s.d3ZT;t6{8z!O%Ri$d%P%R%]%^%b*O*Q*]*s*t.w/o0V0X0d3}4l9P<d<l<mv*Q$w)a*R*p+P/_/n0Z0[3s4V4h4p7V7h9|<U<b<cS0X*q0Y#[;W#v$b$c$y$|)v)|*S*V*c+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4t4w5j6n7]7f8Q8q9d9v:W:`;U;W;[;^;`;h;j;m;q;s;u;w;{<p<qn;X;R;S;V;X;];_;a;i;k;n;r;t;v;x;|!b;j(q)_*X*a.c.d.i/U/Z/c/s0k1V1X3W3Y4W4[5Y5[6s6t6v7^7b7j7l9T9X:a<n<od;k3o6z6{7Q8w8x9x9y9{:jS;u.e3[T;v6|8{rnOXst!V!Z#d%k&f&o&q&r&t,k,p1|2PQ&c!UR,h&lrnOXst!V!Z#d%k&f&o&q&r&t,k,p1|2PR&c!UQ,Q&ZR1U+ysnOXst!V!Z#d%k&f&o&q&r&t,k,p1|2PQ1b,VS5i1e1fU8P5g5h5lS9c8R8SS:U9b9eQ:c:VR:h:dQ&j!VR,a&fR5u1nS&O|&TR0}+pQ&o!WR,k&pR,q&uT1},p2PR,u&vQ,t&vR2W,uQ'v!{R-q'vSsOtQ#dXT%ns#dQ#OTR'x#OQ#RUR'z#RQ)x$vR/V)xQ#UVR'|#UQ#XWU(S#X(T-xQ(T#YR-x(UQ-U'VR2d-UQ.m(uS3_.m3`R3`.nQ-]']R2h-]Y!rQ']-]1a5dR'g!rQ.x)aR3t.xU#_W%f*VU(Z#_([-yQ([#`R-y(VQ-X'YR2f-Xt`OXst!V!Z#d%k&f&h&o&q&r&t,k,p1|2PS#hZ%cU#r`#h.SR.S(fQ(g#jQ.P(cW.X(g.P2y6iQ2y.QR6i2zQ)j$lR/O)jQ$phR)p$pQ$acU)^$a-t;QQ-t:mR;Q)mQ/i*YW4R/i4S7Z9SU4S/j/k/lS7Z4T4UR9S7[$X)}$w(q)_)a*X*a*p*q*z*{+P.d.e.g.h.i/U/Z/_/a/c/n/s0Z0[0k1V1X3W3X3Y3o3s4V4W4[4h4j4p5Y5[6s6t6u6v6{6|7O7P7Q7V7^7b7h7j7l8w8x8y9T9X9x9y9z9{9|:a:j<U<b<c<n<oQ/q*aU4Z/q4]7_Q4]/sR7_4[S*k$}*WR0P*kr*P$w)a*p*q+P/n0Z0[3s4V4p7V7h9|<U<b<c!^.b(q)_*X*a.d.e.i/U/Z/c/s0k1V1X3Y4W4[5Y5[6s6v7^7b7j7l9T9X:a<n<oU/`*P.b6ya6y3o6{6|7Q8w9x9{:jQ0W*pQ3Z.dU4i0W3Z8zR8z6{v*R$w)a*p*q+P/_/n0Z0[3s4V4h4p7V7h9|<U<b<c!b.c(q)_*X*a.d.e.i/U/Z/c/s0k1V1X3W3Y4W4[5Y5[6s6t6v7^7b7j7l9T9X:a<n<oU/b*R.c6ze6z3o6{6|7Q8w8x9x9y9{:jQ0Y*qQ3[.eU4k0Y3[8{R8{6|Q*v%VR0^*vQ4u0kR7k4uQ+X%iR0j+XQ5^1[S7y5^9aR9a7zQ,S&[R1_,SQ5d1aR7|5dQ1m,^S5s1m8ZR8Z5uQ0x+lW5P0x5R7q9]Q5R0{Q7q5QR9]7rQ+q&OR1O+qQ2P,pR6T2PYrOXst#dQ&s!ZQ+Z%kQ,j&oQ,l&qQ,m&rQ,o&tQ1z,kS1},p2PR6S1|Q%mpQ&w!_Q&z!aQ&|!bQ'O!cQ'n!uQ+Y%jQ+f%xQ+x&UQ,`&jQ,w&yW-h'h'p'q'tQ-o'lQ0O*jQ0s+gS1p,a,dQ2X,vQ2Y,yQ2Z,zQ2o-gW2q-j-k-n-pQ4x0tQ5U1RQ5X1VQ5m1gQ5w1rQ6R1{U6b2p2s2vQ6e2tQ7m4yQ7u5WQ7v5YQ7{5cQ8U5nQ8[5vS8k6c6gQ8m6fQ9^7sQ9f8VQ9k8]Q9r8lQ:S9_Q:X9gQ:]9sR:e:YQ%xyQ'a!iQ'l!uU+g%y%z%{Q-O'SU-c'b'c'dS-g'h'rQ/u*eS0t+h+iQ2a-QS2m-d-eQ2t-lQ4`/yQ4y0uQ6^2gQ6a2nQ6f2uR7c4dS$xi<dR*w%WU%Vi%W<dR0]*uQ$wiS(q#v+cS)_$b$cQ)a$dQ*X$yS*a$|*VQ*p%PQ*q%RQ*z%]Q*{%^Q+P%bQ.d;UQ.e;WQ.g;[Q.h;^Q.i;`Q/U)vS/Z)|/]Q/_*OQ/a*QQ/c*SQ/n*]S/s*c/eQ0Z*sQ0[*th0k+`.^1c3T5j6n8Q8q9d9v:W:`Q1V+zQ1X+}Q3W;hQ3X;jQ3Y;mS3o;R;SQ3s.wQ4V/oQ4W/pQ4[/rQ4h0VQ4j0XQ4p0dQ5Y1WQ5[1ZQ6s;qQ6t;sQ6u;uQ6v;wQ6{;VQ6|;XQ7O;]Q7P;_Q7Q;aQ7V3}Q7^4YQ7b4bQ7h4lQ7j4tQ7l4wQ8w;nQ8x;iQ8y;kQ9T7]Q9X7fQ9x;rQ9y;tQ9z;vQ9{;xQ9|9PQ:a;{Q:j;|Q<U<dQ<b<lQ<c<mQ<n<pR<o<qQ*x%[Q.f;YR6};ZnpOXst!Z#d%k&o&q&r&t,k,p1|2PQ!fPS#fZ#oQ&y!`U'e!o5a8OQ'{#SQ(|#{Q)n$nS,d&h&kQ,i&lQ,v&xQ,{'QQ-_'_Q.p(zQ/S)oS0h+V/fQ0n+aQ1x,hQ2k-aQ3R._Q3x.}Q4n0aQ5h1dQ5y1tQ5z1uQ6O1wQ6Q1yQ6V2RQ6q3UQ7T3uQ8S5kQ8`5{Q8a5|Q8c6PQ8u6rQ9e8TR9o8d#YcOPXZst!Z!`!o#d#o#{%k&h&k&l&o&q&r&t&x'Q'_(z+V+a,h,k,p-a._/f0a1d1t1u1w1y1|2P2R3U5a5k5{5|6P6r8O8T8dQ#YWQ#eYQ%ouQ%qvS%sw!gS(O#W(RQ(U#ZQ(p#uQ(u#xQ(}$OQ)O$PQ)P$QQ)Q$RQ)R$SQ)S$TQ)T$UQ)U$VQ)V$WQ)W$XQ)X$YQ)Z$[Q)]$`Q)c$eW)m$n)o.}3uQ+^%rQ+r&PS-R'U2bQ-p'oS-u(P-wQ-z(XQ-|(`Q.k(tQ.n(vQ.r:kQ.t:nQ.u:oQ.v:rQ/X)zQ0e+RQ2],|Q2`-PQ2p-iQ2w-}Q3].lQ3b:sQ3c:tQ3d:uQ3e:vQ3f:wQ3g:xQ3h:yQ3i:zQ3j:{Q3k:|Q3l:}Q3m;OQ3n.sQ3q;TQ3r;bQ3y;PQ4q0gQ4z0vQ6];dQ6c2rQ6h2xQ6w3^Q6x;eQ7R;gQ7S;oQ7z5_Q8h6ZQ8l6dQ8v;pQ8|;yQ8};zQ9s8nQ:T9`Q:[9qQ:m#SR<Z<gR#[WR'W!el!tQ!r!v!y!z']'i'j'k-]-m1a5d5fS'S!e-TS-Q'T'[R2g-ZR(w#xQ!fQT-[']-]]!qQ!r']-]1a5dQ#p]R'f:lR)b$dY!uQ']-]1a5dQ'h!rS'r!v!yS't!z5fS-l'i'jQ-n'kR2u-mT#kZ%cS#jZ%cS%im,gU(c#h#i#lS.Q(d(eQ.U(fQ0i+WQ2z.RU2{.S.T.VS6j2|2}R8o6kd#^W#W#Z%f(P(Y*V+T-{/er#gZm#h#i#l%c(d(e(f+W.R.S.T.V2|2}6kS*Y$y*^Q/l*ZQ1v,gQ2^,}Q4P/hQ6X2UQ7Y4QQ8g6YT<R'U+UV#aW%f*VU#`W%f*VS(Q#W(YU(V#Z+T/eS-S'U+UT-v(P-{V'Z!e%g*WQ$lfR)t$qT)i$l)jR3w.|T*[$y*^T*d$|*VQ0l+`Q3P.^Q5g1cQ6o3TQ8R5jQ8r6nQ9b8QQ9t8qQ:V9dQ:_9vQ:d:WR:g:`nqOXst!Z#d%k&o&q&r&t,k,p1|2PQ&i!VR,`&ftmOXst!U!V!Z#d%k&f&o&q&r&t,k,p1|2PR,g&lT%jm,gR1],PR,_&dQ&S|R+w&TR+m%}T&m!W&pT&n!W&pT2O,p2P",
		nodeNames:
			'⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem',
		maxTerm: 376,
		context: $x,
		nodeProps: [
			['isolate', -8, 5, 6, 14, 34, 36, 48, 50, 52, ''],
			[
				'group',
				-26,
				9,
				17,
				19,
				65,
				204,
				208,
				212,
				213,
				215,
				218,
				221,
				231,
				233,
				239,
				241,
				243,
				245,
				248,
				254,
				260,
				262,
				264,
				266,
				268,
				270,
				271,
				'Statement',
				-34,
				13,
				14,
				29,
				32,
				33,
				39,
				48,
				51,
				52,
				54,
				59,
				67,
				69,
				73,
				77,
				79,
				81,
				82,
				107,
				108,
				117,
				118,
				135,
				138,
				140,
				141,
				142,
				143,
				144,
				146,
				147,
				166,
				167,
				169,
				'Expression',
				-23,
				28,
				30,
				34,
				38,
				40,
				42,
				171,
				173,
				175,
				176,
				178,
				179,
				180,
				182,
				183,
				184,
				186,
				187,
				188,
				198,
				200,
				202,
				203,
				'Type',
				-3,
				85,
				100,
				106,
				'ClassItem'
			],
			[
				'openedBy',
				23,
				'<',
				35,
				'InterpolationStart',
				53,
				'[',
				57,
				'{',
				70,
				'(',
				159,
				'JSXStartCloseTag'
			],
			['closedBy', 24, '>', 37, 'InterpolationEnd', 47, ']', 58, '}', 71, ')', 164, 'JSXEndTag']
		],
		propSources: [Fx],
		skippedNodes: [0, 5, 6, 274],
		repeatNodeCount: 37,
		tokenData:
			"$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$h&j(U!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(U!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$h&j(RpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(RpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Rp(U!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$h&j(Rp(U!b'w0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(S#S$h&j'x0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$h&j(Rp(U!b'x0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$h&j!m),Q(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#u(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#u(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(Q':f$h&j(U!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$h&j(U!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$h&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$c`$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$c``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$c`$h&j(U!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(U!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$c`(U!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$h&j(Rp(U!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$h&j(Rp(U!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$h&j(U!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$h&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(U!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$h&j(RpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(RpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Rp(U!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$h&j(j%1l(Rp(U!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$h&j(Rp(U!b$[#t(O,2j(`$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$h&j(Rp(U!b$[#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$h&j(Rp(U!b#m(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$h&j$P(Ch(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(u+JY$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$h&j#y(Ch(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(T';W$h&j(RpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$h&j(RpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$h&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$c`$h&j(RpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(RpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$c`(RpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!i/.^$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!h!Lf$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$h&j(Rp(U!b(P%&f#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$h&j(Rp(U!b#k(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$h&j(Rp(U!bo+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!Y+Jf$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$h&j(Rp(U!b}.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_!X!L^$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$h&j(Rp(U!b#l(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$h&j(Rp(U!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$h&j(U!b!U7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$h&j!U7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$h&j!U7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!U7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!U7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$h&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$h&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$h&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$h&j(U!b!U7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(U!b!U7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(U!b!U7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(U!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$h&j(U!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$h&j(Rp!U7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$h&j(Rp!U7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Rp!U7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Rp!U7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(RpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$h&j(RpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$h&j(Rp(U!b!U7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Rp(U!b!U7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Rp(U!b!U7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Rp(U!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$h&j(Rp(U!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$h&j(Rp(U!b'y0/l!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$h&j(Rp(U!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$h&j(U!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$h&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(U!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$h&j(RpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(RpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Rp(U!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$h&j$P(Ch(Rp(U!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Y#t$h&j(Rp(U!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!d$b$h&j#})Lv(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#O-<U(Rp(U!b(y7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$j&j(Rp(U!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#o(Ch(Rp(U!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$P(Ch(Rp(U!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#p(Ch(Rp(U!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#]*!Y$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#h(Cl$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#p(Ch$e#|$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#p(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#o(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#o(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(m(Ct$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$h&j#z(Ch(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!y$Ip$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!P0,v$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$h&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$h&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$h&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$h&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$h&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!V#)l$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#w(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$h&j(Rp(U!b([+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$h&j(Rp(U!b(O,2j$^#t(`$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$h&j(Rp(U!b$^#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X![#Hb(Rp(U!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(t+JY$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z(Kd$?V_!Z(Cds`$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!n7`$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$h&j(Rp(U!b'w0/l$[#t(O,2j(`$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$h&j(Rp(U!b'x0/l$[#t(O,2j(`$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
		tokenizers: [
			Zx,
			Rx,
			Tx,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			Ex,
			new Dl(
				"$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOu~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!R~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(^~~",
				141,
				335
			),
			new Dl("j~RQYZXz{^~^O'{~~aP!P!Qd~iO'|~~", 25, 318)
		],
		topRules: {
			Script: [0, 7],
			SingleExpression: [1, 272],
			SingleClassItem: [2, 273]
		},
		dialects: { jsx: 0, ts: 14769 },
		dynamicPrecedences: { 77: 1, 79: 1, 91: 1, 167: 1, 196: 1 },
		specialized: [
			{ term: 322, get: (n) => Mx[n] || -1 },
			{ term: 338, get: (n) => Bx[n] || -1 },
			{ term: 92, get: (n) => jx[n] || -1 }
		],
		tokenPrec: 14793
	}),
	zx = Hr.define({
		name: 'javascript',
		parser: Wx.configure({
			props: [
				Mf.add({
					IfStatement: ro({ except: /^\s*({|else\b)/ }),
					TryStatement: ro({ except: /^\s*({|catch\b|finally\b)/ }),
					LabeledStatement: $0,
					SwitchBody: (n) => {
						let e = n.textAfter,
							t = /^\s*\}/.test(e),
							i = /^\s*(case|default)\b/.test(e);
						return n.baseIndent + (t ? 0 : i ? 1 : 2) * n.unit;
					},
					Block: A0({ closing: '}' }),
					ArrowFunction: (n) => n.baseIndent + n.unit,
					'TemplateString BlockComment': () => null,
					'Statement Property': ro({ except: /^{/ }),
					JSXElement(n) {
						let e = /^\s*<\//.test(n.textAfter);
						return n.lineIndent(n.node.from) + (e ? 0 : n.unit);
					},
					JSXEscape(n) {
						let e = /\s*\}/.test(n.textAfter);
						return n.lineIndent(n.node.from) + (e ? 0 : n.unit);
					},
					'JSXOpenTag JSXSelfClosingTag'(n) {
						return n.column(n.node.from) + n.unit;
					}
				}),
				zf.add({
					'Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType': R0,
					BlockComment(n) {
						return { from: n.from + 2, to: n.to - 2 };
					}
				})
			]
		}),
		languageData: {
			closeBrackets: { brackets: ['(', '[', '{', "'", '"', '`'] },
			commentTokens: { line: '//', block: { open: '/*', close: '*/' } },
			indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
			wordChars: '$'
		}
	});
var Xx = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/,
	qx =
		/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
	_x =
		/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
	yo = { Space_Separator: Xx, ID_Start: qx, ID_Continue: _x },
	be = {
		isSpaceSeparator(n) {
			return typeof n == 'string' && yo.Space_Separator.test(n);
		},
		isIdStartChar(n) {
			return (
				typeof n == 'string' &&
				((n >= 'a' && n <= 'z') ||
					(n >= 'A' && n <= 'Z') ||
					n === '$' ||
					n === '_' ||
					yo.ID_Start.test(n))
			);
		},
		isIdContinueChar(n) {
			return (
				typeof n == 'string' &&
				((n >= 'a' && n <= 'z') ||
					(n >= 'A' && n <= 'Z') ||
					(n >= '0' && n <= '9') ||
					n === '$' ||
					n === '_' ||
					n === '‌' ||
					n === '‍' ||
					yo.ID_Continue.test(n))
			);
		},
		isDigit(n) {
			return typeof n == 'string' && /[0-9]/.test(n);
		},
		isHexDigit(n) {
			return typeof n == 'string' && /[0-9A-Fa-f]/.test(n);
		}
	};
let kl, Ne, _t, ds, di, xt, Ae, sa, Rn;
var Yx = function (e, t) {
	(kl = String(e)),
		(Ne = 'start'),
		(_t = []),
		(ds = 0),
		(di = 1),
		(xt = 0),
		(Ae = void 0),
		(sa = void 0),
		(Rn = void 0);
	do (Ae = Nx()), Lx[Ne]();
	while (Ae.type !== 'eof');
	return typeof t == 'function' ? vl({ '': Rn }, '', t) : Rn;
};
function vl(n, e, t) {
	const i = n[e];
	if (i != null && typeof i == 'object')
		if (Array.isArray(i))
			for (let r = 0; r < i.length; r++) {
				const s = String(r),
					o = vl(i, s, t);
				o === void 0
					? delete i[s]
					: Object.defineProperty(i, s, {
							value: o,
							writable: !0,
							enumerable: !0,
							configurable: !0
						});
			}
		else
			for (const r in i) {
				const s = vl(i, r, t);
				s === void 0
					? delete i[r]
					: Object.defineProperty(i, r, {
							value: s,
							writable: !0,
							enumerable: !0,
							configurable: !0
						});
			}
	return t.call(n, e, i);
}
let ie, J, Qn, Xt, se;
function Nx() {
	for (ie = 'default', J = '', Qn = !1, Xt = 1; ; ) {
		se = Vt();
		const n = hp[ie]();
		if (n) return n;
	}
}
function Vt() {
	if (kl[ds]) return String.fromCodePoint(kl.codePointAt(ds));
}
function R() {
	const n = Vt();
	return (
		n ===
		`
`
			? (di++, (xt = 0))
			: n
				? (xt += n.length)
				: xt++,
		n && (ds += n.length),
		n
	);
}
const hp = {
	default() {
		switch (se) {
			case '	':
			case '\v':
			case '\f':
			case ' ':
			case ' ':
			case '\uFEFF':
			case `
`:
			case '\r':
			case '\u2028':
			case '\u2029':
				R();
				return;
			case '/':
				R(), (ie = 'comment');
				return;
			case void 0:
				return R(), de('eof');
		}
		if (be.isSpaceSeparator(se)) {
			R();
			return;
		}
		return hp[Ne]();
	},
	comment() {
		switch (se) {
			case '*':
				R(), (ie = 'multiLineComment');
				return;
			case '/':
				R(), (ie = 'singleLineComment');
				return;
		}
		throw pe(R());
	},
	multiLineComment() {
		switch (se) {
			case '*':
				R(), (ie = 'multiLineCommentAsterisk');
				return;
			case void 0:
				throw pe(R());
		}
		R();
	},
	multiLineCommentAsterisk() {
		switch (se) {
			case '*':
				R();
				return;
			case '/':
				R(), (ie = 'default');
				return;
			case void 0:
				throw pe(R());
		}
		R(), (ie = 'multiLineComment');
	},
	singleLineComment() {
		switch (se) {
			case `
`:
			case '\r':
			case '\u2028':
			case '\u2029':
				R(), (ie = 'default');
				return;
			case void 0:
				return R(), de('eof');
		}
		R();
	},
	value() {
		switch (se) {
			case '{':
			case '[':
				return de('punctuator', R());
			case 'n':
				return R(), xi('ull'), de('null', null);
			case 't':
				return R(), xi('rue'), de('boolean', !0);
			case 'f':
				return R(), xi('alse'), de('boolean', !1);
			case '-':
			case '+':
				R() === '-' && (Xt = -1), (ie = 'sign');
				return;
			case '.':
				(J = R()), (ie = 'decimalPointLeading');
				return;
			case '0':
				(J = R()), (ie = 'zero');
				return;
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				(J = R()), (ie = 'decimalInteger');
				return;
			case 'I':
				return R(), xi('nfinity'), de('numeric', 1 / 0);
			case 'N':
				return R(), xi('aN'), de('numeric', NaN);
			case '"':
			case "'":
				(Qn = R() === '"'), (J = ''), (ie = 'string');
				return;
		}
		throw pe(R());
	},
	identifierNameStartEscape() {
		if (se !== 'u') throw pe(R());
		R();
		const n = Ql();
		switch (n) {
			case '$':
			case '_':
				break;
			default:
				if (!be.isIdStartChar(n)) throw vh();
				break;
		}
		(J += n), (ie = 'identifierName');
	},
	identifierName() {
		switch (se) {
			case '$':
			case '_':
			case '‌':
			case '‍':
				J += R();
				return;
			case '\\':
				R(), (ie = 'identifierNameEscape');
				return;
		}
		if (be.isIdContinueChar(se)) {
			J += R();
			return;
		}
		return de('identifier', J);
	},
	identifierNameEscape() {
		if (se !== 'u') throw pe(R());
		R();
		const n = Ql();
		switch (n) {
			case '$':
			case '_':
			case '‌':
			case '‍':
				break;
			default:
				if (!be.isIdContinueChar(n)) throw vh();
				break;
		}
		(J += n), (ie = 'identifierName');
	},
	sign() {
		switch (se) {
			case '.':
				(J = R()), (ie = 'decimalPointLeading');
				return;
			case '0':
				(J = R()), (ie = 'zero');
				return;
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				(J = R()), (ie = 'decimalInteger');
				return;
			case 'I':
				return R(), xi('nfinity'), de('numeric', Xt * (1 / 0));
			case 'N':
				return R(), xi('aN'), de('numeric', NaN);
		}
		throw pe(R());
	},
	zero() {
		switch (se) {
			case '.':
				(J += R()), (ie = 'decimalPoint');
				return;
			case 'e':
			case 'E':
				(J += R()), (ie = 'decimalExponent');
				return;
			case 'x':
			case 'X':
				(J += R()), (ie = 'hexadecimal');
				return;
		}
		return de('numeric', Xt * 0);
	},
	decimalInteger() {
		switch (se) {
			case '.':
				(J += R()), (ie = 'decimalPoint');
				return;
			case 'e':
			case 'E':
				(J += R()), (ie = 'decimalExponent');
				return;
		}
		if (be.isDigit(se)) {
			J += R();
			return;
		}
		return de('numeric', Xt * Number(J));
	},
	decimalPointLeading() {
		if (be.isDigit(se)) {
			(J += R()), (ie = 'decimalFraction');
			return;
		}
		throw pe(R());
	},
	decimalPoint() {
		switch (se) {
			case 'e':
			case 'E':
				(J += R()), (ie = 'decimalExponent');
				return;
		}
		if (be.isDigit(se)) {
			(J += R()), (ie = 'decimalFraction');
			return;
		}
		return de('numeric', Xt * Number(J));
	},
	decimalFraction() {
		switch (se) {
			case 'e':
			case 'E':
				(J += R()), (ie = 'decimalExponent');
				return;
		}
		if (be.isDigit(se)) {
			J += R();
			return;
		}
		return de('numeric', Xt * Number(J));
	},
	decimalExponent() {
		switch (se) {
			case '+':
			case '-':
				(J += R()), (ie = 'decimalExponentSign');
				return;
		}
		if (be.isDigit(se)) {
			(J += R()), (ie = 'decimalExponentInteger');
			return;
		}
		throw pe(R());
	},
	decimalExponentSign() {
		if (be.isDigit(se)) {
			(J += R()), (ie = 'decimalExponentInteger');
			return;
		}
		throw pe(R());
	},
	decimalExponentInteger() {
		if (be.isDigit(se)) {
			J += R();
			return;
		}
		return de('numeric', Xt * Number(J));
	},
	hexadecimal() {
		if (be.isHexDigit(se)) {
			(J += R()), (ie = 'hexadecimalInteger');
			return;
		}
		throw pe(R());
	},
	hexadecimalInteger() {
		if (be.isHexDigit(se)) {
			J += R();
			return;
		}
		return de('numeric', Xt * Number(J));
	},
	string() {
		switch (se) {
			case '\\':
				R(), (J += Vx());
				return;
			case '"':
				if (Qn) return R(), de('string', J);
				J += R();
				return;
			case "'":
				if (!Qn) return R(), de('string', J);
				J += R();
				return;
			case `
`:
			case '\r':
				throw pe(R());
			case '\u2028':
			case '\u2029':
				Ux(se);
				break;
			case void 0:
				throw pe(R());
		}
		J += R();
	},
	start() {
		switch (se) {
			case '{':
			case '[':
				return de('punctuator', R());
		}
		ie = 'value';
	},
	beforePropertyName() {
		switch (se) {
			case '$':
			case '_':
				(J = R()), (ie = 'identifierName');
				return;
			case '\\':
				R(), (ie = 'identifierNameStartEscape');
				return;
			case '}':
				return de('punctuator', R());
			case '"':
			case "'":
				(Qn = R() === '"'), (ie = 'string');
				return;
		}
		if (be.isIdStartChar(se)) {
			(J += R()), (ie = 'identifierName');
			return;
		}
		throw pe(R());
	},
	afterPropertyName() {
		if (se === ':') return de('punctuator', R());
		throw pe(R());
	},
	beforePropertyValue() {
		ie = 'value';
	},
	afterPropertyValue() {
		switch (se) {
			case ',':
			case '}':
				return de('punctuator', R());
		}
		throw pe(R());
	},
	beforeArrayValue() {
		if (se === ']') return de('punctuator', R());
		ie = 'value';
	},
	afterArrayValue() {
		switch (se) {
			case ',':
			case ']':
				return de('punctuator', R());
		}
		throw pe(R());
	},
	end() {
		throw pe(R());
	}
};
function de(n, e) {
	return { type: n, value: e, line: di, column: xt };
}
function xi(n) {
	for (const e of n) {
		if (Vt() !== e) throw pe(R());
		R();
	}
}
function Vx() {
	switch (Vt()) {
		case 'b':
			return R(), '\b';
		case 'f':
			return R(), '\f';
		case 'n':
			return (
				R(),
				`
`
			);
		case 'r':
			return R(), '\r';
		case 't':
			return R(), '	';
		case 'v':
			return R(), '\v';
		case '0':
			if ((R(), be.isDigit(Vt()))) throw pe(R());
			return '\0';
		case 'x':
			return R(), Ix();
		case 'u':
			return R(), Ql();
		case `
`:
		case '\u2028':
		case '\u2029':
			return R(), '';
		case '\r':
			return (
				R(),
				Vt() ===
					`
` && R(),
				''
			);
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
			throw pe(R());
		case void 0:
			throw pe(R());
	}
	return R();
}
function Ix() {
	let n = '',
		e = Vt();
	if (!be.isHexDigit(e) || ((n += R()), (e = Vt()), !be.isHexDigit(e))) throw pe(R());
	return (n += R()), String.fromCodePoint(parseInt(n, 16));
}
function Ql() {
	let n = '',
		e = 4;
	for (; e-- > 0; ) {
		const t = Vt();
		if (!be.isHexDigit(t)) throw pe(R());
		n += R();
	}
	return String.fromCodePoint(parseInt(n, 16));
}
const Lx = {
	start() {
		if (Ae.type === 'eof') throw Di();
		bo();
	},
	beforePropertyName() {
		switch (Ae.type) {
			case 'identifier':
			case 'string':
				(sa = Ae.value), (Ne = 'afterPropertyName');
				return;
			case 'punctuator':
				Cr();
				return;
			case 'eof':
				throw Di();
		}
	},
	afterPropertyName() {
		if (Ae.type === 'eof') throw Di();
		Ne = 'beforePropertyValue';
	},
	beforePropertyValue() {
		if (Ae.type === 'eof') throw Di();
		bo();
	},
	beforeArrayValue() {
		if (Ae.type === 'eof') throw Di();
		if (Ae.type === 'punctuator' && Ae.value === ']') {
			Cr();
			return;
		}
		bo();
	},
	afterPropertyValue() {
		if (Ae.type === 'eof') throw Di();
		switch (Ae.value) {
			case ',':
				Ne = 'beforePropertyName';
				return;
			case '}':
				Cr();
		}
	},
	afterArrayValue() {
		if (Ae.type === 'eof') throw Di();
		switch (Ae.value) {
			case ',':
				Ne = 'beforeArrayValue';
				return;
			case ']':
				Cr();
		}
	},
	end() {}
};
function bo() {
	let n;
	switch (Ae.type) {
		case 'punctuator':
			switch (Ae.value) {
				case '{':
					n = {};
					break;
				case '[':
					n = [];
					break;
			}
			break;
		case 'null':
		case 'boolean':
		case 'numeric':
		case 'string':
			n = Ae.value;
			break;
	}
	if (Rn === void 0) Rn = n;
	else {
		const e = _t[_t.length - 1];
		Array.isArray(e)
			? e.push(n)
			: Object.defineProperty(e, sa, {
					value: n,
					writable: !0,
					enumerable: !0,
					configurable: !0
				});
	}
	if (n !== null && typeof n == 'object')
		_t.push(n), Array.isArray(n) ? (Ne = 'beforeArrayValue') : (Ne = 'beforePropertyName');
	else {
		const e = _t[_t.length - 1];
		e == null
			? (Ne = 'end')
			: Array.isArray(e)
				? (Ne = 'afterArrayValue')
				: (Ne = 'afterPropertyValue');
	}
}
function Cr() {
	_t.pop();
	const n = _t[_t.length - 1];
	n == null
		? (Ne = 'end')
		: Array.isArray(n)
			? (Ne = 'afterArrayValue')
			: (Ne = 'afterPropertyValue');
}
function pe(n) {
	return ps(
		n === void 0
			? `JSON5: invalid end of input at ${di}:${xt}`
			: `JSON5: invalid character '${cp(n)}' at ${di}:${xt}`
	);
}
function Di() {
	return ps(`JSON5: invalid end of input at ${di}:${xt}`);
}
function vh() {
	return (xt -= 5), ps(`JSON5: invalid identifier character at ${di}:${xt}`);
}
function Ux(n) {
	console.warn(`JSON5: '${cp(n)}' in strings is not valid ECMAScript; consider escaping`);
}
function cp(n) {
	const e = {
		"'": "\\'",
		'"': '\\"',
		'\\': '\\\\',
		'\b': '\\b',
		'\f': '\\f',
		'\n': '\\n',
		'\r': '\\r',
		'	': '\\t',
		'\v': '\\v',
		'\0': '\\0',
		'\u2028': '\\u2028',
		'\u2029': '\\u2029'
	};
	if (e[n]) return e[n];
	if (n < ' ') {
		const t = n.charCodeAt(0).toString(16);
		return '\\x' + ('00' + t).substring(t.length);
	}
	return n;
}
function ps(n) {
	const e = new SyntaxError(n);
	return (e.lineNumber = di), (e.columnNumber = xt), e;
}
var Gx = function (e, t, i) {
	const r = [];
	let s = '',
		o,
		l,
		a = '',
		u;
	if (
		(t != null &&
			typeof t == 'object' &&
			!Array.isArray(t) &&
			((i = t.space), (u = t.quote), (t = t.replacer)),
		typeof t == 'function')
	)
		l = t;
	else if (Array.isArray(t)) {
		o = [];
		for (const O of t) {
			let m;
			typeof O == 'string'
				? (m = O)
				: (typeof O == 'number' || O instanceof String || O instanceof Number) && (m = String(O)),
				m !== void 0 && o.indexOf(m) < 0 && o.push(m);
		}
	}
	return (
		i instanceof Number ? (i = Number(i)) : i instanceof String && (i = String(i)),
		typeof i == 'number'
			? i > 0 && ((i = Math.min(10, Math.floor(i))), (a = '          '.substr(0, i)))
			: typeof i == 'string' && (a = i.substr(0, 10)),
		h('', { '': e })
	);
	function h(O, m) {
		let g = m[O];
		switch (
			(g != null &&
				(typeof g.toJSON5 == 'function'
					? (g = g.toJSON5(O))
					: typeof g.toJSON == 'function' && (g = g.toJSON(O))),
			l && (g = l.call(m, O, g)),
			g instanceof Number
				? (g = Number(g))
				: g instanceof String
					? (g = String(g))
					: g instanceof Boolean && (g = g.valueOf()),
			g)
		) {
			case null:
				return 'null';
			case !0:
				return 'true';
			case !1:
				return 'false';
		}
		if (typeof g == 'string') return c(g);
		if (typeof g == 'number') return String(g);
		if (typeof g == 'object') return Array.isArray(g) ? p(g) : f(g);
	}
	function c(O) {
		const m = { "'": 0.1, '"': 0.2 },
			g = {
				"'": "\\'",
				'"': '\\"',
				'\\': '\\\\',
				'\b': '\\b',
				'\f': '\\f',
				'\n': '\\n',
				'\r': '\\r',
				'	': '\\t',
				'\v': '\\v',
				'\0': '\\0',
				'\u2028': '\\u2028',
				'\u2029': '\\u2029'
			};
		let S = '';
		for (let k = 0; k < O.length; k++) {
			const x = O[k];
			switch (x) {
				case "'":
				case '"':
					m[x]++, (S += x);
					continue;
				case '\0':
					if (be.isDigit(O[k + 1])) {
						S += '\\x00';
						continue;
					}
			}
			if (g[x]) {
				S += g[x];
				continue;
			}
			if (x < ' ') {
				let P = x.charCodeAt(0).toString(16);
				S += '\\x' + ('00' + P).substring(P.length);
				continue;
			}
			S += x;
		}
		const C = u || Object.keys(m).reduce((k, x) => (m[k] < m[x] ? k : x));
		return (S = S.replace(new RegExp(C, 'g'), g[C])), C + S + C;
	}
	function f(O) {
		if (r.indexOf(O) >= 0) throw TypeError('Converting circular structure to JSON5');
		r.push(O);
		let m = s;
		s = s + a;
		let g = o || Object.keys(O),
			S = [];
		for (const k of g) {
			const x = h(k, O);
			if (x !== void 0) {
				let P = d(k) + ':';
				a !== '' && (P += ' '), (P += x), S.push(P);
			}
		}
		let C;
		if (S.length === 0) C = '{}';
		else {
			let k;
			if (a === '') (k = S.join(',')), (C = '{' + k + '}');
			else {
				let x =
					`,
` + s;
				(k = S.join(x)),
					(C =
						`{
` +
						s +
						k +
						`,
` +
						m +
						'}');
			}
		}
		return r.pop(), (s = m), C;
	}
	function d(O) {
		if (O.length === 0) return c(O);
		const m = String.fromCodePoint(O.codePointAt(0));
		if (!be.isIdStartChar(m)) return c(O);
		for (let g = m.length; g < O.length; g++)
			if (!be.isIdContinueChar(String.fromCodePoint(O.codePointAt(g)))) return c(O);
		return O;
	}
	function p(O) {
		if (r.indexOf(O) >= 0) throw TypeError('Converting circular structure to JSON5');
		r.push(O);
		let m = s;
		s = s + a;
		let g = [];
		for (let C = 0; C < O.length; C++) {
			const k = h(String(C), O);
			g.push(k !== void 0 ? k : 'null');
		}
		let S;
		if (g.length === 0) S = '[]';
		else if (a === '') S = '[' + g.join(',') + ']';
		else {
			let C =
					`,
` + s,
				k = g.join(C);
			S =
				`[
` +
				s +
				k +
				`,
` +
				m +
				']';
		}
		return r.pop(), (s = m), S;
	}
};
const Hx = { parse: Yx, stringify: Gx };
var Jx = Hx,
	Si = {},
	pt = {},
	Qh;
function Es() {
	return (
		Qh ||
			((Qh = 1),
			Object.defineProperty(pt, '__esModule', { value: !0 }),
			(pt.excelBOM = pt.defaultCsv2JsonOptions = pt.defaultJson2CsvOptions = pt.errors = void 0),
			(pt.errors = {
				optionsRequired: 'Options were not passed and are required.',
				json2csv: {
					cannotCallOn: 'Cannot call json2csv on',
					dataCheckFailure: 'Data provided was not an array of documents.',
					notSameSchema: 'Not all documents have the same schema.'
				},
				csv2json: {
					cannotCallOn: 'Cannot call csv2json on',
					dataCheckFailure: 'CSV is not a string.'
				}
			}),
			(pt.defaultJson2CsvOptions = {
				arrayIndexesAsKeys: !1,
				checkSchemaDifferences: !1,
				delimiter: {
					field: ',',
					wrap: '"',
					eol: `
`
				},
				emptyFieldValue: void 0,
				escapeHeaderNestedDots: !0,
				excelBOM: !1,
				excludeKeys: [],
				expandNestedObjects: !0,
				expandArrayObjects: !1,
				prependHeader: !0,
				preventCsvInjection: !1,
				sortHeader: !1,
				trimFieldValues: !1,
				trimHeaderFields: !1,
				unwindArrays: !1,
				useDateIso8601Format: !1,
				useLocaleFormat: !1,
				wrapBooleans: !1
			}),
			(pt.defaultCsv2JsonOptions = {
				delimiter: {
					field: ',',
					wrap: '"',
					eol: `
`
				},
				excelBOM: !1,
				preventCsvInjection: !1,
				trimFieldValues: !1,
				trimHeaderFields: !1,
				wrapBooleans: !1
			}),
			(pt.excelBOM = '\uFEFF')),
		pt
	);
}
var Ot = {},
	wi = {};
/**
 * @license MIT
 * doc-path <https://github.com/mrodrig/doc-path>
 * Copyright (c) 2015-present, Michael Rodrigues.
 */ var Ch;
function oa() {
	if (Ch) return wi;
	(Ch = 1),
		Object.defineProperty(wi, '__esModule', { value: !0 }),
		(wi.setPath = wi.evaluatePath = void 0);
	function n(s, o) {
		if (!s) return null;
		const { dotIndex: l, key: a, remaining: u } = i(o),
			h = typeof s == 'object' && o in s ? s[o] : void 0,
			c = typeof s == 'object' && a in s ? s[a] : void 0;
		if (l >= 0 && typeof s == 'object' && !(o in s)) {
			const { key: f } = i(u),
				d = parseInt(f);
			return Array.isArray(c) && isNaN(d) ? c.map((p) => n(p, u)) : n(c, u);
		} else if (Array.isArray(s)) {
			const f = parseInt(a);
			return o === a && l === -1 && !isNaN(f) ? c : s.map((d) => n(d, o));
		} else {
			if (l >= 0 && o !== a && typeof s == 'object' && a in s) return n(c, u);
			if (l === -1 && typeof s == 'object' && a in s && !(o in s)) return c;
		}
		return h;
	}
	wi.evaluatePath = n;
	function e(s, o, l) {
		if (s) {
			if (!o) throw new Error('No keyPath was provided.');
		} else throw new Error('No object was provided.');
		return t(s, o, l);
	}
	wi.setPath = e;
	function t(s, o, l) {
		const { dotIndex: a, key: u, remaining: h } = i(o);
		if (o.startsWith('__proto__') || o.startsWith('constructor') || o.startsWith('prototype'))
			return s;
		if (a >= 0) {
			const c = parseInt(u);
			if (typeof s == 'object' && s !== null && !(u in s) && Array.isArray(s) && !isNaN(c))
				return (s[u] = s[u] ?? {}), t(s[u], h, l), s;
			if (typeof s == 'object' && s !== null && !(u in s) && Array.isArray(s))
				return s.forEach((f) => t(f, o, l)), s;
			if (typeof s == 'object' && s !== null && !(u in s) && !Array.isArray(s)) {
				const { key: f } = i(h),
					d = parseInt(f);
				if (!isNaN(d)) s[u] = [];
				else {
					if (h === '') return (s[o] = l), s;
					s[u] = {};
				}
			}
			t(s[u], h, l);
		} else if (Array.isArray(s)) {
			const c = parseInt(u);
			return o === u && a === -1 && !isNaN(c) ? ((s[u] = l), s) : (s.forEach((f) => t(f, h, l)), s);
		} else s[u] = l;
		return s;
	}
	function i(s) {
		const o = r(s);
		return {
			dotIndex: o,
			key: s.slice(0, o >= 0 ? o : void 0).replace(/\\./g, '.'),
			remaining: s.slice(o + 1)
		};
	}
	function r(s) {
		for (let o = 0; o < s.length; o++) {
			const l = o > 0 ? s[o - 1] : '';
			if (s[o] === '.' && l !== '\\') return o;
		}
		return -1;
	}
	return wi;
}
var mt = {},
	zt = {},
	Ph;
function Kx() {
	if (Ph) return zt;
	(Ph = 1),
		Object.defineProperty(zt, '__esModule', { value: !0 }),
		(zt.isDocumentToRecurOn = zt.flatten = zt.unique = void 0);
	function n(i) {
		return [...new Set(i)];
	}
	zt.unique = n;
	function e(i) {
		return [].concat(...i);
	}
	zt.flatten = e;
	function t(i) {
		return typeof i == 'object' && i !== null && !Array.isArray(i) && Object.keys(i).length;
	}
	return (zt.isDocumentToRecurOn = t), zt;
}
var xo = {},
	Ah;
function eD() {
	return Ah || ((Ah = 1), Object.defineProperty(xo, '__esModule', { value: !0 })), xo;
}
var $h;
function tD() {
	return (
		$h ||
			(($h = 1),
			(function (n) {
				var e =
						(mt && mt.__createBinding) ||
						(Object.create
							? function (d, p, O, m) {
									m === void 0 && (m = O);
									var g = Object.getOwnPropertyDescriptor(p, O);
									(!g || ('get' in g ? !p.__esModule : g.writable || g.configurable)) &&
										(g = {
											enumerable: !0,
											get: function () {
												return p[O];
											}
										}),
										Object.defineProperty(d, m, g);
								}
							: function (d, p, O, m) {
									m === void 0 && (m = O), (d[m] = p[O]);
								}),
					t =
						(mt && mt.__setModuleDefault) ||
						(Object.create
							? function (d, p) {
									Object.defineProperty(d, 'default', {
										enumerable: !0,
										value: p
									});
								}
							: function (d, p) {
									d.default = p;
								}),
					i =
						(mt && mt.__importStar) ||
						function (d) {
							if (d && d.__esModule) return d;
							var p = {};
							if (d != null)
								for (var O in d)
									O !== 'default' && Object.prototype.hasOwnProperty.call(d, O) && e(p, d, O);
							return t(p, d), p;
						},
					r =
						(mt && mt.__exportStar) ||
						function (d, p) {
							for (var O in d)
								O !== 'default' && !Object.prototype.hasOwnProperty.call(p, O) && e(p, d, O);
						};
				Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.deepKeysFromList = n.deepKeys = void 0);
				const s = i(Kx());
				r(eD(), n);
				function o(d, p) {
					const O = f(p);
					return typeof d == 'object' && d !== null ? a('', d, O) : [];
				}
				n.deepKeys = o;
				function l(d, p) {
					const O = f(p);
					return d.map((m) => (typeof m == 'object' && m !== null ? o(m, O) : []));
				}
				n.deepKeysFromList = l;
				function a(d, p, O) {
					const m = Object.keys(p).map((g) => {
						const S = c(d, h(g, O));
						return (O.expandNestedObjects && s.isDocumentToRecurOn(p[g])) ||
							(O.arrayIndexesAsKeys && Array.isArray(p[g]) && p[g].length)
							? a(S, p[g], O)
							: O.expandArrayObjects && Array.isArray(p[g])
								? u(p[g], S, O)
								: O.ignoreEmptyArrays && Array.isArray(p[g]) && !p[g].length
									? []
									: S;
					});
					return s.flatten(m);
				}
				function u(d, p, O) {
					let m = l(d, O);
					return d.length
						? d.length && s.flatten(m).length === 0
							? [p]
							: ((m = m.map((g) =>
									Array.isArray(g) && g.length === 0 ? [p] : g.map((S) => c(p, h(S, O)))
								)),
								s.unique(s.flatten(m)))
						: O.ignoreEmptyArraysWhenExpanding
							? []
							: [p];
				}
				function h(d, p) {
					return p.escapeNestedDots ? d.replace(/\./g, '\\.') : d;
				}
				function c(d, p) {
					return d ? d + '.' + p : p;
				}
				function f(d) {
					return {
						arrayIndexesAsKeys: !1,
						expandNestedObjects: !0,
						expandArrayObjects: !1,
						ignoreEmptyArraysWhenExpanding: !1,
						escapeNestedDots: !1,
						ignoreEmptyArrays: !1,
						...(d ?? {})
					};
				}
			})(mt)),
		mt
	);
}
var H = {},
	Eh;
function la() {
	if (Eh) return H;
	(Eh = 1),
		Object.defineProperty(H, '__esModule', { value: !0 }),
		(H.isInvalid =
			H.flatten =
			H.unique =
			H.arrayDifference =
			H.isError =
			H.isUndefined =
			H.isNull =
			H.isObject =
			H.isString =
			H.isNumber =
			H.unwind =
			H.getNCharacters =
			H.removeEmptyFields =
			H.isEmptyField =
			H.computeSchemaDifferences =
			H.isDateRepresentation =
			H.isStringRepresentation =
			H.deepCopy =
			H.validate =
			H.buildC2JOptions =
			H.buildJ2COptions =
				void 0);
	const n = oa(),
		e = Es(),
		t = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,
		i = 1e5;
	function r(b) {
		var A, E, Q;
		return {
			...e.defaultJson2CsvOptions,
			...b,
			delimiter: {
				field:
					((A = b == null ? void 0 : b.delimiter) == null ? void 0 : A.field) ??
					e.defaultJson2CsvOptions.delimiter.field,
				wrap:
					((E = b == null ? void 0 : b.delimiter) == null ? void 0 : E.wrap) ||
					e.defaultJson2CsvOptions.delimiter.wrap,
				eol:
					((Q = b == null ? void 0 : b.delimiter) == null ? void 0 : Q.eol) ||
					e.defaultJson2CsvOptions.delimiter.eol
			},
			fieldTitleMap: Object.create({})
		};
	}
	H.buildJ2COptions = r;
	function s(b) {
		var A, E, Q;
		return {
			...e.defaultCsv2JsonOptions,
			...b,
			delimiter: {
				field:
					((A = b == null ? void 0 : b.delimiter) == null ? void 0 : A.field) ??
					e.defaultCsv2JsonOptions.delimiter.field,
				wrap:
					((E = b == null ? void 0 : b.delimiter) == null ? void 0 : E.wrap) ||
					e.defaultCsv2JsonOptions.delimiter.wrap,
				eol:
					((Q = b == null ? void 0 : b.delimiter) == null ? void 0 : Q.eol) ||
					e.defaultCsv2JsonOptions.delimiter.eol
			}
		};
	}
	H.buildC2JOptions = s;
	function o(b, A, E) {
		if (!b) throw new Error(`${E.cannotCallOn} ${b}.`);
		if (!A(b)) throw new Error(E.dataCheckFailure);
		return !0;
	}
	H.validate = o;
	function l(b) {
		return JSON.parse(JSON.stringify(b));
	}
	H.deepCopy = l;
	function a(b, A) {
		const E = b[0],
			Q = b.length - 1,
			F = b[Q];
		return E === A.delimiter.wrap && F === A.delimiter.wrap;
	}
	H.isStringRepresentation = a;
	function u(b) {
		return t.test(b);
	}
	H.isDateRepresentation = u;
	function h(b, A) {
		return P(b, A).concat(P(A, b));
	}
	H.computeSchemaDifferences = h;
	function c(b) {
		return k(b) || C(b) || b === '';
	}
	H.isEmptyField = c;
	function f(b) {
		return b.filter((A) => !c(A));
	}
	H.removeEmptyFields = f;
	function d(b, A, E) {
		return b.substring(A, A + E);
	}
	H.getNCharacters = d;
	function p(b, A, E) {
		const Q = (0, n.evaluatePath)(A, E);
		let F = l(A);
		Array.isArray(Q) && Q.length
			? Q.forEach((q) => {
					(F = l(A)), b.push((0, n.setPath)(F, E, q));
				})
			: (Array.isArray(Q) && Q.length === 0 && (0, n.setPath)(F, E, ''), b.push(F));
	}
	function O(b, A) {
		const E = [];
		return (
			b.forEach((Q) => {
				p(E, Q, A);
			}),
			E
		);
	}
	H.unwind = O;
	function m(b) {
		return !isNaN(Number(b));
	}
	H.isNumber = m;
	function g(b) {
		return typeof b == 'string';
	}
	H.isString = g;
	function S(b) {
		return typeof b == 'object';
	}
	H.isObject = S;
	function C(b) {
		return b === null;
	}
	H.isNull = C;
	function k(b) {
		return typeof b > 'u';
	}
	H.isUndefined = k;
	function x(b) {
		return Object.prototype.toString.call(b) === '[object Error]';
	}
	H.isError = x;
	function P(b, A) {
		return b.filter((E) => !A.includes(E));
	}
	H.arrayDifference = P;
	function $(b) {
		return [...new Set(b)];
	}
	H.unique = $;
	function T(b) {
		if (b.flat) return b.flat();
		if (b.length > i) {
			let A = [];
			for (let E = 0; E < b.length; E += i) A = A.concat(...b.slice(E, E + i));
			return A;
		}
		return b.reduce((A, E) => A.concat(E), []);
	}
	H.flatten = T;
	function w(b) {
		return b === 1 / 0 || b === -1 / 0;
	}
	return (H.isInvalid = w), H;
}
var Zh;
function iD() {
	if (Zh) return Ot;
	Zh = 1;
	var n =
			(Ot && Ot.__createBinding) ||
			(Object.create
				? function (a, u, h, c) {
						c === void 0 && (c = h);
						var f = Object.getOwnPropertyDescriptor(u, h);
						(!f || ('get' in f ? !u.__esModule : f.writable || f.configurable)) &&
							(f = {
								enumerable: !0,
								get: function () {
									return u[h];
								}
							}),
							Object.defineProperty(a, c, f);
					}
				: function (a, u, h, c) {
						c === void 0 && (c = h), (a[c] = u[h]);
					}),
		e =
			(Ot && Ot.__setModuleDefault) ||
			(Object.create
				? function (a, u) {
						Object.defineProperty(a, 'default', { enumerable: !0, value: u });
					}
				: function (a, u) {
						a.default = u;
					}),
		t =
			(Ot && Ot.__importStar) ||
			function (a) {
				if (a && a.__esModule) return a;
				var u = {};
				if (a != null)
					for (var h in a)
						h !== 'default' && Object.prototype.hasOwnProperty.call(a, h) && n(u, a, h);
				return e(u, a), u;
			};
	Object.defineProperty(Ot, '__esModule', { value: !0 }), (Ot.Json2Csv = void 0);
	const i = oa(),
		r = tD(),
		s = Es(),
		o = t(la()),
		l = function (a) {
			const u = new RegExp(a.delimiter.wrap, 'g'),
				h = /\r?\n|\r/,
				c = a.parseValue && typeof a.parseValue == 'function' ? a.parseValue : null,
				f = a.expandArrayObjects && !a.unwindArrays,
				d = {
					arrayIndexesAsKeys: a.arrayIndexesAsKeys,
					expandNestedObjects: a.expandNestedObjects,
					expandArrayObjects: f,
					ignoreEmptyArraysWhenExpanding: f,
					escapeNestedDots: !0
				};
			function p(v) {
				return (0, r.deepKeysFromList)(v, d);
			}
			function O(v) {
				return a.checkSchemaDifferences ? m(v) : o.unique(o.flatten(v));
			}
			function m(v) {
				const V = v[0],
					U = v.slice(1);
				if (g(V, U)) throw new Error(s.errors.json2csv.notSameSchema);
				return V;
			}
			function g(v, V) {
				return V.reduce((U, re) => (o.computeSchemaDifferences(v, re).length > 0 ? U + 1 : U), 0);
			}
			function S(v) {
				return a.excludeKeys
					? v.filter((V) => {
							for (const U of a.excludeKeys) {
								const re = U instanceof RegExp ? U : new RegExp(`^${U}`);
								if (U === V || V.match(re)) return !1;
							}
							return !0;
						})
					: v;
			}
			function C(v) {
				return a.sortHeader && typeof a.sortHeader == 'function'
					? v.sort(a.sortHeader)
					: a.sortHeader
						? v.sort()
						: v;
			}
			function k(v) {
				return (
					a.trimHeaderFields &&
						(v.headerFields = v.headerFields.map((V) =>
							V.split('.')
								.map((U) => U.trim())
								.join('.')
						)),
					v
				);
			}
			function x(v) {
				return (
					a.prependHeader &&
						(v.headerFields = v.headerFields.map(function (V) {
							return Y(V);
						})),
					v
				);
			}
			function P(v) {
				const V = Object.keys(a.fieldTitleMap);
				return (
					(v.header = v.headerFields
						.map(function (U) {
							let re = U;
							return (
								V.includes(U)
									? (re = a.fieldTitleMap[U])
									: a.escapeHeaderNestedDots || (re = re.replace(/\\\./g, '.')),
								Y(re)
							);
						})
						.join(a.delimiter.field)),
					v
				);
			}
			function $() {
				return a.keys
					? a.keys.map((v) =>
							typeof v == 'object' && 'field' in v
								? ((a.fieldTitleMap[v.field] = v.title ?? v.field), v.field)
								: v
						)
					: [];
			}
			function T() {
				return a.keys
					? a.keys.flatMap((v) =>
							typeof v == 'string' ? [] : v != null && v.wildcardMatch ? v.field : []
						)
					: [];
			}
			function w(v) {
				const V = T(),
					U = $(),
					re = p(v),
					ee = O(re);
				if (a.keys) {
					a.keys = U;
					const rt = U.flatMap((qe) => {
						if (!V.includes(qe)) return qe;
						const Mi = [],
							Bi = new RegExp(`^${qe}`);
						for (const Wt of ee) (qe === Wt || Wt.match(Bi)) && Mi.push(Wt);
						return Mi;
					});
					if (!a.unwindArrays) {
						const qe = S(rt);
						return C(qe);
					}
				}
				const we = S(ee);
				return C(we);
			}
			function b(v, V = !1) {
				if (a.unwindArrays) {
					const U = v.records.length;
					v.headerFields.forEach((ee) => {
						v.records = o.unwind(v.records, ee);
					});
					const re = w(v.records);
					if (((v.headerFields = re), U !== v.records.length)) return b(v);
					if (!V) return b(v, !0);
					if (a.keys) {
						const ee = $();
						v.headerFields = S(ee);
					}
					return v;
				}
				return v;
			}
			function A(v) {
				return (
					(v.recordString = v.records
						.map((V) => {
							const U = Q(V, v.headerFields),
								re = U.map((ee) => {
									(ee = q(ee)), (ee = _(ee));
									let we = c ? c(ee, F) : F(ee);
									return (we = Y(we)), we;
								});
							return N(re);
						})
						.join(a.delimiter.eol)),
					v
				);
			}
			function E(v) {
				const V = o.removeEmptyFields(v);
				return !v.length || !V.length ? a.emptyFieldValue || '' : V.length === 1 ? V[0] : v;
			}
			function Q(v, V) {
				const U = [];
				return (
					V.forEach((re) => {
						let ee = (0, i.evaluatePath)(v, re);
						!o.isUndefined(a.emptyFieldValue) && o.isEmptyField(ee)
							? (ee = a.emptyFieldValue)
							: a.expandArrayObjects && Array.isArray(ee) && (ee = E(ee)),
							U.push(ee);
					}),
					U
				);
			}
			function F(v) {
				const V = v instanceof Date;
				return v === null || Array.isArray(v) || (typeof v == 'object' && !V)
					? JSON.stringify(v)
					: typeof v > 'u'
						? 'undefined'
						: V && a.useDateIso8601Format
							? v.toISOString()
							: a.useLocaleFormat
								? v.toLocaleString()
								: v.toString();
			}
			function q(v) {
				return a.trimFieldValues
					? Array.isArray(v)
						? v.map(q)
						: typeof v == 'string'
							? v.trim()
							: v
					: v;
			}
			function _(v) {
				return a.preventCsvInjection
					? Array.isArray(v)
						? v.map(_)
						: typeof v == 'string' && !o.isNumber(v)
							? v.replace(/^[=+\-@\t\r]+/g, '')
							: v
					: v;
			}
			function Y(v) {
				const V = a.delimiter.wrap;
				return (
					v.includes(a.delimiter.wrap) && (v = v.replace(u, V + V)),
					(v.includes(a.delimiter.field) ||
						v.includes(a.delimiter.wrap) ||
						v.match(h) ||
						(a.wrapBooleans && (v === 'true' || v === 'false'))) &&
						(v = V + v + V),
					v
				);
			}
			function N(v) {
				return v.join(a.delimiter.field);
			}
			function W(v) {
				const V = v.header,
					U = v.recordString;
				return (a.excelBOM ? s.excelBOM : '') + (a.prependHeader ? V + a.delimiter.eol : '') + U;
			}
			function K(v) {
				o.isObject(v) && !v.length && (v = [v]);
				const V = {
						headerFields: w(v),
						records: v,
						header: '',
						recordString: ''
					},
					U = b(V),
					re = A(U),
					ee = x(re),
					we = k(ee),
					rt = P(we);
				return W(rt);
			}
			return { convert: K };
		};
	return (Ot.Json2Csv = l), Ot;
}
var gt = {},
	Rh;
function nD() {
	if (Rh) return gt;
	Rh = 1;
	var n =
			(gt && gt.__createBinding) ||
			(Object.create
				? function (l, a, u, h) {
						h === void 0 && (h = u);
						var c = Object.getOwnPropertyDescriptor(a, u);
						(!c || ('get' in c ? !a.__esModule : c.writable || c.configurable)) &&
							(c = {
								enumerable: !0,
								get: function () {
									return a[u];
								}
							}),
							Object.defineProperty(l, h, c);
					}
				: function (l, a, u, h) {
						h === void 0 && (h = u), (l[h] = a[u]);
					}),
		e =
			(gt && gt.__setModuleDefault) ||
			(Object.create
				? function (l, a) {
						Object.defineProperty(l, 'default', { enumerable: !0, value: a });
					}
				: function (l, a) {
						l.default = a;
					}),
		t =
			(gt && gt.__importStar) ||
			function (l) {
				if (l && l.__esModule) return l;
				var a = {};
				if (l != null)
					for (var u in l)
						u !== 'default' && Object.prototype.hasOwnProperty.call(l, u) && n(a, l, u);
				return e(a, l), a;
			};
	Object.defineProperty(gt, '__esModule', { value: !0 }), (gt.Csv2Json = void 0);
	const i = oa(),
		r = Es(),
		s = t(la()),
		o = function (l) {
			const a = new RegExp(l.delimiter.wrap + l.delimiter.wrap, 'g'),
				u = new RegExp('^' + r.excelBOM),
				h = l.parseValue && typeof l.parseValue == 'function' ? l.parseValue : JSON.parse;
			function c(w) {
				return (
					(w = k(w)),
					l.trimHeaderFields
						? w
								.split('.')
								.map((b) => b.trim())
								.join('.')
						: w
				);
			}
			function f(w) {
				let b = [];
				if (l.headerFields) b = l.headerFields.map((A, E) => ({ value: c(A), index: E }));
				else if (((b = w[0].map((E, Q) => ({ value: c(E), index: Q }))), l.keys)) {
					const E = l.keys;
					b = b.filter((Q) => E.includes(Q.value));
				}
				return { lines: w, headerFields: b, recordLines: [] };
			}
			function d(w) {
				return l.excelBOM ? w.replace(u, '') : w;
			}
			function p(w) {
				const b = [],
					A = w.length - 1,
					E = l.delimiter.eol.length,
					Q = {
						insideWrapDelimiter: !1,
						parsingValue: !0,
						justParsedDoubleQuote: !1,
						startIndex: 0
					};
				let F = [],
					q,
					_,
					Y,
					N,
					W = 0;
				for (; W < w.length; ) {
					if (
						((q = w[W]),
						(_ = W ? w[W - 1] : ''),
						(Y = W < A ? w[W + 1] : ''),
						(N = s.getNCharacters(w, W, E)),
						((N === l.delimiter.eol && !Q.insideWrapDelimiter) || W === A) &&
							_ === l.delimiter.field)
					)
						(N === l.delimiter.eol && Q.startIndex === W) || q === l.delimiter.field
							? F.push('')
							: F.push(w.substr(Q.startIndex)),
							F.push(''),
							b.push(F),
							(F = []),
							(Q.startIndex = W + E),
							(Q.parsingValue = !0),
							(Q.insideWrapDelimiter = Y === l.delimiter.wrap);
					else if (W === A && q === l.delimiter.field) {
						const K = w.substring(Q.startIndex, W);
						F.push(K), F.push(''), b.push(F);
					} else if (
						W === A ||
						(N === l.delimiter.eol &&
							(!Q.insideWrapDelimiter ||
								(Q.insideWrapDelimiter && _ === l.delimiter.wrap && !Q.justParsedDoubleQuote)))
					) {
						const K = W !== A || _ === l.delimiter.wrap ? W : void 0;
						F.push(w.substring(Q.startIndex, K)),
							b.push(F),
							(F = []),
							(Q.startIndex = W + E),
							(Q.parsingValue = !0),
							(Q.insideWrapDelimiter = Y === l.delimiter.wrap);
					} else if (
						q === l.delimiter.wrap &&
						_ === l.delimiter.field &&
						!Q.insideWrapDelimiter &&
						!Q.parsingValue
					)
						(Q.startIndex = W),
							(Q.insideWrapDelimiter = !0),
							(Q.parsingValue = !0),
							s.getNCharacters(w, W + 1, E) === l.delimiter.eol &&
								(W += l.delimiter.eol.length + 1);
					else if (
						(_ !== l.delimiter.wrap || (Q.justParsedDoubleQuote && _ === l.delimiter.wrap)) &&
						q === l.delimiter.wrap &&
						s.getNCharacters(w, W + 1, E) === l.delimiter.eol
					)
						(Q.insideWrapDelimiter = !1), (Q.parsingValue = !1);
					else if (
						q === l.delimiter.wrap &&
						(W === 0 ||
							(s.getNCharacters(w, W - E, E) === l.delimiter.eol && !Q.insideWrapDelimiter))
					)
						(Q.insideWrapDelimiter = !0), (Q.parsingValue = !0), (Q.startIndex = W);
					else if (q === l.delimiter.wrap && Y === l.delimiter.field)
						F.push(w.substring(Q.startIndex, W + 1)),
							(Q.startIndex = W + 2),
							(Q.insideWrapDelimiter = !1),
							(Q.parsingValue = !1);
					else if (
						q === l.delimiter.wrap &&
						_ === l.delimiter.field &&
						!Q.insideWrapDelimiter &&
						Q.parsingValue
					)
						F.push(w.substring(Q.startIndex, W - 1)),
							(Q.insideWrapDelimiter = !0),
							(Q.parsingValue = !0),
							(Q.startIndex = W);
					else if (q === l.delimiter.wrap && Y === l.delimiter.wrap && W !== Q.startIndex) {
						(W += 2), (Q.justParsedDoubleQuote = !0);
						continue;
					} else
						q === l.delimiter.field &&
						_ !== l.delimiter.wrap &&
						Y !== l.delimiter.wrap &&
						!Q.insideWrapDelimiter &&
						Q.parsingValue
							? (F.push(w.substring(Q.startIndex, W)), (Q.startIndex = W + 1))
							: q === l.delimiter.field &&
								_ === l.delimiter.wrap &&
								Y !== l.delimiter.wrap &&
								!Q.parsingValue &&
								((Q.insideWrapDelimiter = !1), (Q.parsingValue = !0), (Q.startIndex = W + 1));
					W++, (Q.justParsedDoubleQuote = !1);
				}
				return b;
			}
			function O(w) {
				return l.headerFields ? (w.recordLines = w.lines) : (w.recordLines = w.lines.splice(1)), w;
			}
			function m(w, b) {
				const A = b[w.index];
				return g(A);
			}
			function g(w) {
				const b = $(w);
				return !s.isError(b) && !s.isInvalid(b) ? b : w === 'undefined' ? void 0 : w;
			}
			function S(w) {
				return l.trimFieldValues && w !== null ? w.trim() : w;
			}
			function C(w, b) {
				return w.reduce((A, E) => {
					const Q = m(E, b);
					try {
						return (0, i.setPath)(A, E.value, Q);
					} catch {
						return A;
					}
				}, {});
			}
			function k(w) {
				const b = w[0],
					A = w.length - 1,
					E = w[A];
				return b === l.delimiter.wrap && E === l.delimiter.wrap ? w.substr(1, A - 1) : w;
			}
			function x(w) {
				return w.replace(a, l.delimiter.wrap);
			}
			function P(w) {
				return w.recordLines.reduce((b, A) => {
					A = A.map((Q) => ((Q = k(Q)), (Q = x(Q)), (Q = S(Q)), Q));
					const E = C(w.headerFields, A);
					return b.concat(E);
				}, []);
			}
			function $(w) {
				try {
					if (s.isStringRepresentation(w, l) && !s.isDateRepresentation(w)) return w;
					const b = h(w);
					return Array.isArray(b) ? b.map(S) : b;
				} catch (b) {
					return b;
				}
			}
			function T(w) {
				const b = d(w),
					A = p(b),
					E = f(A),
					Q = O(E);
				return P(Q);
			}
			return { convert: T };
		};
	return (gt.Csv2Json = o), gt;
}
var Th;
function rD() {
	if (Th) return Si;
	(Th = 1),
		Object.defineProperty(Si, '__esModule', { value: !0 }),
		(Si.csv2json = Si.json2csv = void 0);
	const n = Es(),
		e = iD(),
		t = nD(),
		i = la();
	function r(o, l) {
		const a = (0, i.buildJ2COptions)(l ?? {});
		return (0, i.validate)(o, i.isObject, n.errors.json2csv), (0, e.Json2Csv)(a).convert(o);
	}
	Si.json2csv = r;
	function s(o, l) {
		const a = (0, i.buildC2JOptions)(l ?? {});
		return (0, i.validate)(o, i.isString, n.errors.csv2json), (0, t.Csv2Json)(a).convert(o);
	}
	return (Si.csv2json = s), Si;
}
var sD = rD();
const Tn = [
		'v1',
		'vX',
		'v2021-03-25',
		'v2021-10-21',
		'v2022-03-07',
		'v2025-02-19',
		`v${new Date().toISOString().split('T')[0]}`
	],
	[fp] = Tn.slice(-1);
function dp(n) {
	const e = Pe.c(5),
		[t, i] = B.useState(!1);
	let r, s;
	e[0] !== n.delay
		? ((r = () => {
				const l = setTimeout(() => i(!0), n.delay || 500);
				return () => clearTimeout(l);
			}),
			(s = [n.delay]),
			(e[0] = n.delay),
			(e[1] = r),
			(e[2] = s))
		: ((r = e[1]), (s = e[2])),
		B.useEffect(r, s);
	let o;
	return (
		e[3] !== t
			? ((o = t ? D.jsx(Mp, { muted: !0, size: 4 }) : null), (e[3] = t), (e[4] = o))
			: (o = e[4]),
		o
	);
}
const oD = [
	[zx],
	vf(),
	bf(),
	Qf(),
	Wd(),
	yf(),
	Wf(),
	Kf(),
	Jd(),
	nd(),
	Of(),
	ks(Uf, { fallback: !0 }),
	Jn.of([{ key: 'Mod-Enter', run: () => !0 }, Td, ld].flat().filter(Boolean))
];
function lD(n) {
	const e = Pe.c(7);
	let t, i;
	e[0] !== n ? ((i = aD(n)), (e[0] = n), (e[1] = i)) : (i = e[1]), (t = i);
	const r = t;
	let s, o;
	e[2] !== n ? ((o = ks(uD(n))), (e[2] = n), (e[3] = o)) : (o = e[3]), (s = o);
	const l = s;
	let a;
	return (
		e[4] !== l || e[5] !== r ? ((a = [r, l]), (e[4] = l), (e[5] = r), (e[6] = a)) : (a = e[6]), a
	);
}
function aD(n) {
	const { color: e, fonts: t } = n.sanity,
		i = e.card.enabled,
		r = ba.blue[e.dark ? 400 : 500].hex,
		s = ba.gray[n.sanity.color.dark ? 900 : 100].hex;
	return j.theme(
		{
			'&': { color: i.fg, backgroundColor: i.bg },
			'.cm-content': { caretColor: r },
			'.cm-editor': {
				fontFamily: t.code.family,
				fontSize: yt(t.code.sizes[1].fontSize),
				lineHeight: 'inherit'
			},
			'.cm-cursor, .cm-dropCursor': { borderLeftColor: r },
			'&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
				backgroundColor: s
			},
			'.cm-panels': { backgroundColor: i.bg, color: i.fg },
			'.cm-panels.cm-panels-top': { borderBottom: `2px solid ${i.border}` },
			'.cm-panels.cm-panels-bottom': { borderTop: `2px solid ${i.border}` }
		},
		{ dark: e.dark }
	);
}
function uD(n) {
	const e = n.sanity.color.base,
		t = n.sanity.color.syntax;
	return un.define([
		{ tag: y.keyword, color: t.keyword },
		{
			tag: [y.propertyName, y.name, y.deleted, y.character, y.macroName],
			color: t.property
		},
		{ tag: [y.function(y.variableName), y.labelName], color: t.function },
		{
			tag: [y.color, y.constant(y.name), y.standard(y.name)],
			color: t.variable
		},
		{ tag: [y.definition(y.name), y.separator], color: t.constant },
		{
			tag: [
				y.typeName,
				y.className,
				y.number,
				y.changed,
				y.annotation,
				y.modifier,
				y.self,
				y.namespace
			],
			color: t.number
		},
		{
			tag: [y.operator, y.operatorKeyword, y.url, y.escape, y.regexp, y.link, y.special(y.string)],
			color: t.operator
		},
		{ tag: [y.meta, y.comment], color: t.comment },
		{ tag: y.strong, fontWeight: 'bold' },
		{ tag: y.emphasis, fontStyle: 'italic' },
		{ tag: y.strikethrough, textDecoration: 'line-through' },
		{ tag: y.heading, fontWeight: 'bold', color: t.property },
		{ tag: [y.atom, y.bool, y.special(y.variableName)], color: t.boolean },
		{ tag: [y.processingInstruction, y.string, y.inserted], color: t.string },
		{ tag: y.invalid, color: e.fg }
	]);
}
const hD = ge.div`
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  overflow: clip;
  position: relative;
  display: flex;

  & .cm-theme {
    width: 100%;
  }

  & .cm-editor {
    height: 100%;

    font-size: 16px;
    line-height: 21px;
  }

  & .cm-line {
    padding-left: ${({ theme: n }) => yt(n.sanity.space[3])};
  }

  & .cm-content {
    border-right-width: ${({ theme: n }) => yt(n.sanity.space[4])} !important;
    padding-top: ${({ theme: n }) => yt(n.sanity.space[5])};
  }
`,
	aa = B.forwardRef((n, e) => {
		const t = Pe.c(7),
			[i] = B.useState(n.initialValue),
			r = Xp(),
			s = lD(r),
			o = B.useRef(null);
		let l;
		t[0] === Symbol.for('react.memo_cache_sentinel')
			? ((l = (f) => {
					var O;
					const d = (O = o.current) == null ? void 0 : O.view;
					if (!d) return;
					const p = d.state.doc.toString();
					f !== p &&
						d.dispatch({
							changes: { from: 0, to: p.length, insert: f },
							selection: Z.cursor(f.length)
						});
				}),
				(t[0] = l))
			: (l = t[0]);
		const a = l;
		let u, h;
		t[1] === Symbol.for('react.memo_cache_sentinel')
			? ((u = () => ({ resetEditorContent: a })), (h = [a]), (t[1] = u), (t[2] = h))
			: ((u = t[1]), (h = t[2])),
			B.useImperativeHandle(e, u, h);
		let c;
		return (
			t[3] !== i || t[4] !== n.onChange || t[5] !== s
				? ((c = D.jsx(hD, {
						children: D.jsx(lp, {
							ref: o,
							basicSetup: !1,
							theme: s,
							extensions: oD,
							value: i,
							onChange: n.onChange
						})
					})),
					(t[3] = i),
					(t[4] = n.onChange),
					(t[5] = s),
					(t[6] = c))
				: (c = t[6]),
			c
		);
	});
aa.displayName = 'VisionCodeMirror';
const pp = ['pinnedRelease', 'raw', 'published', 'drafts'],
	cD = ['pinnedRelease'];
function Do(n) {
	return pp.includes(n);
}
function Fh(n) {
	return typeof n == 'string' && cD.includes(n);
}
function Mh({ selectedPerspectiveName: n }) {
	return typeof n < 'u';
}
function Bh({ visionPerspective: n, perspectiveStack: e }) {
	return n !== 'pinnedRelease' ? n : e;
}
function jh(n, e = {}, t = {}) {
	const i = new URLSearchParams();
	i.set('query', n);
	for (const [r, s] of Object.entries(e)) i.set(`$${r}`, JSON.stringify(s));
	for (const [r, s] of Object.entries(t)) s && i.set(r, `${s}`);
	return `?${i}`;
}
function fD(n) {
	return !!n && typeof n == 'object' && Object.prototype.toString.call(n) === '[object Object]';
}
const Op = OD(),
	mp = 'sanityVision:';
function dD() {
	if (Op)
		for (let n = 0; n < localStorage.length; n++) {
			const e = localStorage.key(n);
			e != null && e.startsWith(mp) && localStorage.removeItem(e);
		}
}
function pD(n) {
	const e = `${mp}${n}`;
	let t = null;
	return { get: i, set: r, merge: s };
	function i(a, u) {
		const h = o();
		return typeof h[a] > 'u' ? u : h[a];
	}
	function r(a, u) {
		const h = o();
		return (h[a] = u), localStorage.setItem(e, JSON.stringify(t)), u;
	}
	function s(a) {
		const u = { ...o(), ...a };
		return localStorage.setItem(e, JSON.stringify(u)), u;
	}
	function o() {
		return t === null && (t = l()), t;
	}
	function l() {
		if (!Op) return {};
		try {
			const a = JSON.parse(localStorage.getItem(e) || '{}');
			return fD(a) ? a : {};
		} catch {
			return {};
		}
	}
}
function OD() {
	const n = 'lsCheck';
	try {
		return localStorage.setItem(n, n), localStorage.removeItem(n), !0;
	} catch {
		return !1;
	}
}
function mD(n) {
	const e = {},
		t = {};
	for (const [i, r] of n.entries()) {
		if (i[0] === '$') {
			e[i.slice(1)] = JSON.parse(r);
			continue;
		}
		if (i === 'perspective') {
			t[i] = r;
			continue;
		}
	}
	return { query: n.get('query') || '', params: e, options: t };
}
function gD(n) {
	return n[0] !== 'v' && n !== 'other' ? `v${n}` : n;
}
function So(n) {
	const e = n.replace(/^v/, '').trim().toUpperCase();
	return (
		e.length > 0 &&
		(e === 'X' || e === '1' || (/^\d{4}-\d{2}-\d{2}$/.test(e) && !isNaN(Date.parse(e))))
	);
}
function yD(n, e) {
	try {
		const t = n ? Jx.parse(n) : {};
		return typeof t == 'object' && t && !Array.isArray(t) ? t : {};
	} catch (t) {
		return (
			(t.message = `${e('params.error.params-invalid-json')}:

${t.message.replace('JSON5:', '')}`),
			t
		);
	}
}
const gp = ge(Gt)`
  .sidebarPanes .Pane {
    overflow-y: auto;
    overflow-x: hidden;
  }

  & .Resizer {
    background: var(--card-border-color);
    opacity: 1;
    z-index: 1;
    box-sizing: border-box;
    background-clip: padding-box;
    border: solid transparent;
  }

  & .Resizer:hover {
    border-color: var(--card-shadow-ambient-color);
  }

  & .Resizer.horizontal {
    height: 11px;
    margin: -5px 0;
    border-width: 5px 0;
    cursor: row-resize;
    width: 100%;
    z-index: 4;
  }

  & .Resizer.vertical {
    width: 11px;
    margin: 0 -5px;
    border-width: 0 5px;
    cursor: col-resize;
    z-index: 2; /* To prevent the resizer from being hidden behind CodeMirror scroll area */
  }

  .Resizer.disabled {
    cursor: not-allowed;
  }

  .Resizer.disabled:hover {
    border-color: transparent;
  }
`;
gp.displayName = 'Root';
const bD = ge(Qe)`
  border-bottom: 1px solid var(--card-border-color);
`,
	Yt = ge(Jp)`
  flex: 1;
`,
	xD = ge(ue)`
  position: relative;
`,
	DD = ge.a`
  cursor: pointer;
  margin-right: auto;
`,
	yp = ge(ue)`
  position: absolute;
  top: 1rem;
  left: 0;
  padding: 0;
  margin: 0;
  z-index: 10;
  right: 0;

  ${Yt} {
    user-select: none;
  }
`,
	bp = ge(yp)`
  // This is so its aligned with the gutters of CodeMirror
  left: 33px;
`,
	Wh = ge(Qe)`
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: column;
`,
	SD = ge(Gt)`
  height: 100%;
`,
	wD = ge(ue)`
  position: relative;
`,
	kD = ge(Qe)`
  height: 100%;
  width: 100%;
  position: absolute;
  max-width: 100%;

  ${({ $isInvalid: n }) =>
		n &&
		_h`
      &:after {
        background-color: var(--card-bg-color);
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
      }
    `}
`,
	vD = ge(ue)`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 20;
`,
	QD = ge(Gt)`
  border-top: 1px solid var(--card-border-color);
`,
	CD = ge(Qe)`
  position: relative;
`;
ge(ue)`
  width: 100%;
  height: 100%;
`;
const PD = ge(Gt)`
  height: 100%;
  min-height: ${({ theme: n }) => yt(n.sanity.space[3] * 2 + n.sanity.fonts.text.sizes[2].lineHeight - n.sanity.fonts.text.sizes[2].ascenderHeight - n.sanity.fonts.text.sizes[2].descenderHeight)};
`,
	AD = ge(Qe)`
  position: relative;
`,
	$D = ge(Zt)`
  transform: initial;
  &:before,
  &:after {
    content: none;
  }
  > span {
    display: flex !important;
    gap: ${({ theme: n }) => yt(n.sanity.space[3])};
    align-items: center;
  }
`,
	ED = ge(ue)`
  border-top: 1px solid var(--card-border-color);
`,
	ZD = `{
  
}`;
function RD(n) {
	const e = Pe.c(33),
		{ onChange: t, paramsError: i, hasValidParams: r, editorRef: s } = n,
		{ t: o } = pi(Oi);
	let l;
	e[0] !== n.value || e[1] !== o
		? ((l = Os(n.value, o)), (e[0] = n.value), (e[1] = o), (e[2] = l))
		: (l = e[2]);
	const { raw: a, error: u, parsed: h, valid: c } = l,
		[f, d] = B.useState(c),
		[p, O] = B.useState(!1);
	let m, g;
	e[3] !== u || e[4] !== p || e[5] !== f || e[6] !== t || e[7] !== h || e[8] !== a
		? ((m = () => {
				p || (t({ parsed: h, raw: a, valid: f, error: u }), O(!0));
			}),
			(g = [u, p, f, t, h, a]),
			(e[3] = u),
			(e[4] = p),
			(e[5] = f),
			(e[6] = t),
			(e[7] = h),
			(e[8] = a),
			(e[9] = m),
			(e[10] = g))
		: ((m = e[9]), (g = e[10])),
		B.useEffect(m, g);
	let S;
	e[11] !== t || e[12] !== o
		? ((S = (q) => {
				const _ = Os(q, o);
				d(_.valid), t(_);
			}),
			(e[11] = t),
			(e[12] = o),
			(e[13] = S))
		: (S = e[13]);
	const C = S;
	let k, x;
	e[14] !== C ? ((x = qp(C, 333)), (e[14] = C), (e[15] = x)) : (x = e[15]), (k = x);
	const P = k,
		$ = r ? 'default' : 'critical';
	let T;
	e[16] !== o ? ((T = o('params.label')), (e[16] = o), (e[17] = T)) : (T = e[17]);
	let w;
	e[18] !== T
		? ((w = D.jsx(Yt, { muted: !0, children: T })), (e[18] = T), (e[19] = w))
		: (w = e[19]);
	let b;
	e[20] !== i
		? ((b =
				i &&
				D.jsx(Fn, {
					animate: !0,
					placement: 'top',
					portal: !0,
					content: D.jsx(Zt, { size: 1, children: i }),
					children: D.jsx(ue, {
						padding: 1,
						marginX: 2,
						children: D.jsx(Zt, { children: D.jsx(Ip, {}) })
					})
				})),
			(e[20] = i),
			(e[21] = b))
		: (b = e[21]);
	let A;
	e[22] !== w || e[23] !== b
		? ((A = D.jsx(bp, { children: D.jsxs(Gt, { children: [w, b] }) })),
			(e[22] = w),
			(e[23] = b),
			(e[24] = A))
		: (A = e[24]);
	const E = n.value || ZD;
	let Q;
	e[25] !== s || e[26] !== P || e[27] !== E
		? ((Q = D.jsx(aa, { ref: s, initialValue: E, onChange: P })),
			(e[25] = s),
			(e[26] = P),
			(e[27] = E),
			(e[28] = Q))
		: (Q = e[28]);
	let F;
	return (
		e[29] !== A || e[30] !== Q || e[31] !== $
			? ((F = D.jsxs(Qe, {
					flex: 1,
					tone: $,
					'data-testid': 'params-editor',
					children: [A, Q]
				})),
				(e[29] = A),
				(e[30] = Q),
				(e[31] = $),
				(e[32] = F))
			: (F = e[32]),
		F
	);
}
function Os(n, e) {
	const t = yD(n, e),
		i = t instanceof Error ? {} : t,
		r = t instanceof Error ? t.message : void 0;
	return { parsed: i, raw: n, valid: !r, error: r };
}
function ua() {
	return typeof window < 'u' && window.innerWidth > 600;
}
function xp(n) {
	let e = n;
	return (
		e ||
			(e =
				typeof window < 'u' && typeof document < 'u'
					? document.body.getBoundingClientRect().height - 60
					: 0),
		{
			defaultSize: e / (ua() ? 2 : 1),
			size: e > 550 ? void 0 : e * 0.4,
			allowResize: e > 550,
			minSize: Math.min(170, Math.max(170, e / 2)),
			maxSize: e > 650 ? e * 0.7 : e * 0.6
		}
	);
}
function TD(n) {
	const e = Pe.c(7),
		{ visionRootRef: t } = n,
		[i, r] = B.useState(MD),
		[s, o] = B.useState(FD);
	let l;
	e[0] !== t.current
		? ((l = () => {
				if (!t.current) return;
				const h = (f) => {
						r(ua());
						const d = f == null ? void 0 : f[0];
						d && o(xp(d.contentRect.height));
					},
					c = new ResizeObserver(h);
				return (
					c.observe(t.current),
					() => {
						c.disconnect();
					}
				);
			}),
			(e[0] = t.current),
			(e[1] = l))
		: (l = e[1]);
	let a;
	e[2] !== t ? ((a = [t]), (e[2] = t), (e[3] = a)) : (a = e[3]), B.useEffect(l, a);
	let u;
	return (
		e[4] !== i || e[5] !== s
			? ((u = { paneSizeOptions: s, isNarrowBreakpoint: i }), (e[4] = i), (e[5] = s), (e[6] = u))
			: (u = e[6]),
		u
	);
}
function FD() {
	return xp(void 0);
}
function MD() {
	return ua();
}
function BD(n) {
	const e = Pe.c(30),
		{
			hasValidParams: t,
			listenInProgress: i,
			queryInProgress: r,
			onQueryExecution: s,
			onListenExecution: o
		} = n,
		{ t: l } = pi(Oi);
	let a;
	e[0] !== l ? ((a = l('params.error.params-invalid-json')), (e[0] = l), (e[1] = a)) : (a = e[1]);
	let u;
	e[2] !== a
		? ((u = D.jsx(Qe, {
				radius: 4,
				children: D.jsx(Zt, { size: 1, muted: !0, children: a })
			})),
			(e[2] = a),
			(e[3] = u))
		: (u = e[3]);
	let h;
	e[4] === Symbol.for('react.memo_cache_sentinel')
		? ((h = D.jsx(Qe, {
				radius: 4,
				children: D.jsx(Lp, { keys: ['Ctrl', 'Enter'] })
			})),
			(e[4] = h))
		: (h = e[4]);
	const c = r ? ga : ya,
		f = i || !t,
		d = r ? 'positive' : 'primary';
	let p;
	e[5] !== r || e[6] !== l
		? ((p = l(r ? 'action.query-cancel' : 'action.query-execute')),
			(e[5] = r),
			(e[6] = l),
			(e[7] = p))
		: (p = e[7]);
	let O;
	e[8] !== s || e[9] !== c || e[10] !== f || e[11] !== d || e[12] !== p
		? ((O = D.jsx(ue, {
				flex: 1,
				children: D.jsx(Fn, {
					content: h,
					placement: 'top',
					portal: !0,
					children: D.jsx(Ai, {
						width: 'fill',
						onClick: s,
						type: 'button',
						icon: c,
						disabled: f,
						tone: d,
						text: p
					})
				})
			})),
			(e[8] = s),
			(e[9] = c),
			(e[10] = f),
			(e[11] = d),
			(e[12] = p),
			(e[13] = O))
		: (O = e[13]);
	const m = i ? ga : ya;
	let g;
	e[14] !== i || e[15] !== l
		? ((g = l(i ? 'action.listen-cancel' : 'action.listen-execute')),
			(e[14] = i),
			(e[15] = l),
			(e[16] = g))
		: (g = e[16]);
	const S = !t,
		C = i ? 'positive' : 'default';
	let k;
	e[17] !== o || e[18] !== g || e[19] !== S || e[20] !== C || e[21] !== m
		? ((k = D.jsx(ue, {
				flex: 1,
				marginLeft: 3,
				children: D.jsx(Ai, {
					width: 'fill',
					onClick: o,
					type: 'button',
					icon: m,
					text: g,
					mode: 'ghost',
					disabled: S,
					tone: C
				})
			})),
			(e[17] = o),
			(e[18] = g),
			(e[19] = S),
			(e[20] = C),
			(e[21] = m),
			(e[22] = k))
		: (k = e[22]);
	let x;
	e[23] !== k || e[24] !== O
		? ((x = D.jsxs(Gt, { justify: 'space-evenly', children: [O, k] })),
			(e[23] = k),
			(e[24] = O),
			(e[25] = x))
		: (x = e[25]);
	let P;
	return (
		e[26] !== t || e[27] !== x || e[28] !== u
			? ((P = D.jsx(ED, {
					children: D.jsx(Qe, {
						padding: 3,
						paddingX: 3,
						children: D.jsx(Fn, {
							content: u,
							placement: 'top',
							disabled: t,
							portal: !0,
							children: x
						})
					})
				})),
				(e[26] = t),
				(e[27] = x),
				(e[28] = u),
				(e[29] = P))
			: (P = e[29]),
		P
	);
}
const jD = ge(ue)`
  /* This limits the width of the popover content */
  max-width: 240px;
`,
	WD = ge.a`
  cursor: pointer;
  margin-right: auto;
`,
	zD = ge.div`
  width: 4px;
  height: 4px;
  border-radius: 3px;
  box-shadow: 0 0 0 1px var(--card-bg-color);
  background-color: ${({ tone: n }) => `var(--card-badge-${n}-dot-color)`};
`;
function XD() {
	const n = Pe.c(39),
		[e, t] = B.useState(!1),
		i = B.useRef(null),
		r = B.useRef(null);
	let s;
	n[0] === Symbol.for('react.memo_cache_sentinel') ? ((s = () => t(qD)), (n[0] = s)) : (s = n[0]);
	const o = s,
		{ t: l } = pi(Oi);
	let a, u;
	n[1] === Symbol.for('react.memo_cache_sentinel')
		? ((a = () => t(!1)), (u = () => [i.current, r.current]), (n[1] = a), (n[2] = u))
		: ((a = n[1]), (u = n[2])),
		Gp(a, u);
	let h;
	n[3] !== l ? ((h = l('settings.perspectives.title')), (n[3] = l), (n[4] = h)) : (h = n[4]);
	let c;
	n[5] !== h
		? ((c = D.jsx(Yh, {
				space: 2,
				children: D.jsx(Zt, { weight: 'medium', children: h })
			})),
			(n[5] = h),
			(n[6] = c))
		: (c = n[6]);
	let f;
	n[7] !== l ? ((f = l('settings.perspectives.description')), (n[7] = l), (n[8] = f)) : (f = n[8]);
	let d;
	n[9] !== f
		? ((d = D.jsx(Qe, { children: D.jsx(Zt, { muted: !0, children: f }) })),
			(n[9] = f),
			(n[10] = d))
		: (d = n[10]);
	let p;
	n[11] !== l ? ((p = l('label.new')), (n[11] = l), (n[12] = p)) : (p = n[12]);
	let O;
	n[13] !== p
		? ((O = D.jsx(ue, {
				children: D.jsx(Kp, { tone: 'primary', children: p })
			})),
			(n[13] = p),
			(n[14] = O))
		: (O = n[14]);
	let m;
	n[15] !== l
		? ((m = D.jsx(Zt, {
				muted: !0,
				children: D.jsx(Nh, {
					t: l,
					i18nKey: 'settings.perspective.preview-drafts-renamed-to-drafts.description'
				})
			})),
			(n[15] = l),
			(n[16] = m))
		: (m = n[16]);
	let g;
	n[17] !== O || n[18] !== m
		? ((g = D.jsx(Qe, {
				children: D.jsxs(At, { space: 2, children: [O, m] })
			})),
			(n[17] = O),
			(n[18] = m),
			(n[19] = g))
		: (g = n[19]);
	let S;
	n[20] !== l ? ((S = null), (n[20] = l), (n[21] = S)) : (S = n[21]);
	let C;
	n[22] !== l
		? ((C = l('settings.perspectives.action.docs-link')), (n[22] = l), (n[23] = C))
		: (C = n[23]);
	let k;
	n[24] !== C
		? ((k = D.jsx(Qe, {
				children: D.jsx(Zt, {
					children: D.jsxs(WD, {
						href: 'https://sanity.io/docs/perspectives',
						target: '_blank',
						children: [C, ' →']
					})
				})
			})),
			(n[24] = C),
			(n[25] = k))
		: (k = n[25]);
	let x;
	n[26] !== g || n[27] !== S || n[28] !== k || n[29] !== c || n[30] !== d
		? ((x = D.jsx(jD, {
				children: D.jsxs(At, { space: 4, children: [c, d, g, S, k] })
			})),
			(n[26] = g),
			(n[27] = S),
			(n[28] = k),
			(n[29] = c),
			(n[30] = d),
			(n[31] = x))
		: (x = n[31]);
	let P;
	n[32] === Symbol.for('react.memo_cache_sentinel')
		? ((P = D.jsx(zD, { tone: 'primary' })), (n[32] = P))
		: (P = n[32]);
	let $;
	n[33] !== e
		? (($ = D.jsx(Ai, {
				icon: eO,
				mode: 'bleed',
				padding: 2,
				paddingRight: 1,
				tone: 'primary',
				fontSize: 1,
				ref: i,
				onClick: o,
				selected: e,
				children: P
			})),
			(n[33] = e),
			(n[34] = $))
		: ($ = n[34]);
	let T;
	return (
		n[35] !== e || n[36] !== x || n[37] !== $
			? ((T = D.jsx(Hp, {
					content: x,
					placement: 'bottom-start',
					portal: !0,
					padding: 3,
					ref: r,
					open: e,
					children: $
				})),
				(n[35] = e),
				(n[36] = x),
				(n[37] = $),
				(n[38] = T))
			: (T = n[38]),
		T
	);
}
function qD(n) {
	return !n;
}
const _D = (n) => {
	const e = Pe.c(9),
		{ pinnedPerspective: t, t: i } = n,
		r =
			typeof t.selectedPerspective == 'object'
				? t.selectedPerspective.metadata.title
				: t.selectedPerspectiveName;
	let s;
	e[0] !== t || e[1] !== i
		? ((s = Mh(t)
				? `(${i('settings.perspectives.pinned-release-label')})`
				: i('settings.perspectives.pinned-release-label')),
			(e[0] = t),
			(e[1] = i),
			(e[2] = s))
		: (s = e[2]);
	const o = s;
	let l, a;
	e[3] !== o || e[4] !== r
		? ((a = [r, o].filter(ID)), (e[3] = o), (e[4] = r), (e[5] = a))
		: (a = e[5]),
		(l = a.join(' '));
	const u = l,
		h = !Mh(t);
	let c;
	return (
		e[6] !== h || e[7] !== u
			? ((c = D.jsx('option', {
					value: 'pinnedRelease',
					disabled: h,
					children: u
				})),
				(e[6] = h),
				(e[7] = u),
				(e[8] = c))
			: (c = e[8]),
		c
	);
};
function YD(n) {
	const e = Pe.c(64),
		{
			onChangeDataset: t,
			dataset: i,
			customApiVersion: r,
			apiVersion: s,
			onChangeApiVersion: o,
			datasets: l,
			customApiVersionElementRef: a,
			onCustomApiVersionChange: u,
			isValidApiVersion: h,
			onChangePerspective: c,
			url: f,
			perspective: d
		} = n,
		p = qh(),
		{ t: O } = pi(Oi),
		m = B.useRef(null);
	let g;
	e[0] === Symbol.for('react.memo_cache_sentinel')
		? ((g = () => {
				const qe = m.current;
				if (qe)
					try {
						qe.select(), document.execCommand('copy');
					} catch {
						console.error('Unable to copy to clipboard :(');
					}
			}),
			(e[0] = g))
		: (g = e[0]);
	const S = g;
	let C;
	e[1] === Symbol.for('react.memo_cache_sentinel') ? ((C = [1, 4, 8, 12]), (e[1] = C)) : (C = e[1]);
	let k;
	e[2] !== O ? ((k = O('settings.dataset-label')), (e[2] = O), (e[3] = k)) : (k = e[3]);
	let x;
	e[4] !== k
		? ((x = D.jsx(Qe, {
				paddingTop: 2,
				paddingBottom: 3,
				children: D.jsx(Yt, { children: k })
			})),
			(e[4] = k),
			(e[5] = x))
		: (x = e[5]);
	let P;
	e[6] !== l ? ((P = l.map(VD)), (e[6] = l), (e[7] = P)) : (P = e[7]);
	let $;
	e[8] !== i || e[9] !== t || e[10] !== P
		? (($ = D.jsx(zs, { value: i, onChange: t, children: P })),
			(e[8] = i),
			(e[9] = t),
			(e[10] = P),
			(e[11] = $))
		: ($ = e[11]);
	let T;
	e[12] !== x || e[13] !== $
		? ((T = D.jsx(ue, {
				padding: 1,
				column: 2,
				children: D.jsxs(At, { children: [x, $] })
			})),
			(e[12] = x),
			(e[13] = $),
			(e[14] = T))
		: (T = e[14]);
	let w;
	e[15] !== O ? ((w = O('settings.api-version-label')), (e[15] = O), (e[16] = w)) : (w = e[16]);
	let b;
	e[17] !== w
		? ((b = D.jsx(Qe, {
				paddingTop: 2,
				paddingBottom: 3,
				children: D.jsx(Yt, { children: w })
			})),
			(e[17] = w),
			(e[18] = b))
		: (b = e[18]);
	const A = r === !1 ? s : 'other';
	let E;
	e[19] === Symbol.for('react.memo_cache_sentinel') ? ((E = Tn.map(ND)), (e[19] = E)) : (E = e[19]);
	let Q;
	e[20] !== O
		? ((Q = O('settings.other-api-version-label')), (e[20] = O), (e[21] = Q))
		: (Q = e[21]);
	let F;
	e[22] !== Q
		? ((F = D.jsx('option', { value: 'other', children: Q }, 'other')), (e[22] = Q), (e[23] = F))
		: (F = e[23]);
	let q;
	e[24] !== o || e[25] !== A || e[26] !== F
		? ((q = D.jsxs(zs, {
				'data-testid': 'api-version-selector',
				value: A,
				onChange: o,
				children: [E, F]
			})),
			(e[24] = o),
			(e[25] = A),
			(e[26] = F),
			(e[27] = q))
		: (q = e[27]);
	let _;
	e[28] !== q || e[29] !== b
		? ((_ = D.jsx(ue, {
				padding: 1,
				column: 2,
				children: D.jsxs(At, { children: [b, q] })
			})),
			(e[28] = q),
			(e[29] = b),
			(e[30] = _))
		: (_ = e[30]);
	let Y;
	e[31] !== r || e[32] !== a || e[33] !== h || e[34] !== u || e[35] !== O
		? ((Y =
				r !== !1 &&
				D.jsx(ue, {
					padding: 1,
					column: 2,
					children: D.jsxs(At, {
						children: [
							D.jsx(Qe, {
								paddingTop: 2,
								paddingBottom: 3,
								children: D.jsx(Yt, {
									textOverflow: 'ellipsis',
									children: O('settings.custom-api-version-label')
								})
							}),
							D.jsx(ma, {
								ref: a,
								value: r,
								onChange: u,
								customValidity: h ? void 0 : O('settings.error.invalid-api-version'),
								maxLength: 11
							})
						]
					})
				})),
			(e[31] = r),
			(e[32] = a),
			(e[33] = h),
			(e[34] = u),
			(e[35] = O),
			(e[36] = Y))
		: (Y = e[36]);
	let N;
	e[37] !== O ? ((N = O('settings.perspective-label')), (e[37] = O), (e[38] = N)) : (N = e[38]);
	let W;
	e[39] !== N
		? ((W = D.jsx(ue, { children: D.jsx(Yt, { children: N }) })), (e[39] = N), (e[40] = W))
		: (W = e[40]);
	let K;
	e[41] === Symbol.for('react.memo_cache_sentinel')
		? ((K = D.jsx(ue, { children: D.jsx(XD, {}) })), (e[41] = K))
		: (K = e[41]);
	let v;
	e[42] !== W
		? ((v = D.jsx(Qe, {
				paddingBottom: 1,
				children: D.jsxs(Yh, { space: 1, children: [W, K] })
			})),
			(e[42] = W),
			(e[43] = v))
		: (v = e[43]);
	const V = d || 'default';
	let U;
	e[44] !== p || e[45] !== O
		? ((U = pp.map((qe) =>
				qe === 'pinnedRelease'
					? D.jsxs(
							B.Fragment,
							{
								children: [
									D.jsx(_D, { pinnedPerspective: p, t: O }),
									D.jsx(
										'option',
										{
											value: 'default',
											children: O('settings.perspectives.default')
										},
										'default'
									),
									D.jsx('hr', {})
								]
							},
							'pinnedRelease'
						)
					: D.jsx('option', { children: qe }, qe)
			)),
			(e[44] = p),
			(e[45] = O),
			(e[46] = U))
		: (U = e[46]);
	let re;
	e[47] !== c || e[48] !== V || e[49] !== U
		? ((re = D.jsx(zs, { value: V, onChange: c, children: U })),
			(e[47] = c),
			(e[48] = V),
			(e[49] = U),
			(e[50] = re))
		: (re = e[50]);
	let ee;
	e[51] !== v || e[52] !== re
		? ((ee = D.jsx(ue, {
				padding: 1,
				column: 2,
				children: D.jsxs(At, { children: [v, re] })
			})),
			(e[51] = v),
			(e[52] = re),
			(e[53] = ee))
		: (ee = e[53]);
	let we;
	e[54] !== r || e[55] !== O || e[56] !== f
		? ((we =
				typeof f == 'string'
					? D.jsx(ue, {
							padding: 1,
							flex: 1,
							column: r === !1 ? 6 : 4,
							children: D.jsxs(At, {
								children: [
									D.jsx(Qe, {
										paddingTop: 2,
										paddingBottom: 3,
										children: D.jsxs(Yt, {
											children: [
												O('query.url'),
												' ',
												D.jsxs(DD, {
													onClick: S,
													children: ['[', O('action.copy-url-to-clipboard'), ']']
												})
											]
										})
									}),
									D.jsxs(Gt, {
										flex: 1,
										gap: 1,
										children: [
											D.jsx(ue, {
												flex: 1,
												children: D.jsx(ma, {
													readOnly: !0,
													type: 'url',
													ref: m,
													value: f
												})
											}),
											D.jsx(Fn, {
												content: O('action.copy-url-to-clipboard'),
												children: D.jsx(Ai, {
													'aria-label': O('action.copy-url-to-clipboard'),
													type: 'button',
													mode: 'ghost',
													icon: Wp,
													onClick: S
												})
											})
										]
									})
								]
							})
						})
					: D.jsx(ue, { flex: 1 })),
			(e[54] = r),
			(e[55] = O),
			(e[56] = f),
			(e[57] = we))
		: (we = e[57]);
	let rt;
	return (
		e[58] !== _ || e[59] !== Y || e[60] !== ee || e[61] !== we || e[62] !== T
			? ((rt = D.jsx(bD, {
					paddingX: 3,
					paddingY: 2,
					children: D.jsxs(zp, { columns: C, children: [T, _, Y, ee, we] })
				})),
				(e[58] = _),
				(e[59] = Y),
				(e[60] = ee),
				(e[61] = we),
				(e[62] = T),
				(e[63] = rt))
			: (rt = e[63]),
		rt
	);
}
function ND(n) {
	return D.jsx('option', { children: n }, n);
}
function VD(n) {
	return D.jsx('option', { children: n }, n);
}
function ID(n) {
	return typeof n < 'u';
}
function LD(n, e) {
	return URL.createObjectURL(new Blob([n], { type: e }));
}
function Dp(n, e) {
	return (() => {
		let t = '',
			i = '';
		return (r) => {
			const s = e(r);
			if (!(typeof s != 'string' || s === ''))
				return s === i || ((i = s), t && URL.revokeObjectURL(t), (t = LD(s, n))), t;
		};
	})();
}
const UD = Dp('application/json', (n) => JSON.stringify(n, null, 2)),
	GD = Dp('text/csv', (n) => sD.json2csv(Array.isArray(n) ? n : [n]).trim()),
	Cl = ge(Al)`
  color: ${({ theme: n }) => n.sanity.color.muted.critical.enabled.fg};
`;
function HD(n) {
	const e = Pe.c(7),
		{ error: t } = n,
		{ t: i } = pi(Oi);
	if (!('details' in t)) return null;
	const r = { ...t.details, ...JD(t.details) };
	if (!r.line) return null;
	const s = `${r.line}
${KD(r.column, r.columnEnd)}`;
	let o;
	e[0] !== s ? ((o = D.jsx(Cl, { size: 1, children: s })), (e[0] = s), (e[1] = o)) : (o = e[1]);
	const l = `${i('query.error.line')}:   ${r.lineNumber}
${i('query.error.column')}: ${r.column}`;
	let a;
	e[2] !== l
		? ((a = D.jsx(ue, {
				marginTop: 4,
				children: D.jsx(Cl, { size: 1, children: l })
			})),
			(e[2] = l),
			(e[3] = a))
		: (a = e[3]);
	let u;
	return (
		e[4] !== o || e[5] !== a
			? ((u = D.jsxs('div', { children: [o, a] })), (e[4] = o), (e[5] = a), (e[6] = u))
			: (u = e[6]),
		u
	);
}
function JD(n) {
	if (!n || typeof n.query != 'string' || typeof n.start != 'number') return {};
	const { query: e, start: t, end: i } = n,
		r =
			e.slice(0, t).lastIndexOf(`
`) + 1,
		s = (e.slice(0, r).match(/\n/g) || []).length,
		o = e.slice(
			r,
			e.indexOf(
				`
`,
				r
			)
		),
		l = t - r,
		a = typeof i == 'number' ? i - r : void 0;
	return { line: o, lineNumber: s, column: l, columnEnd: a };
}
function KD(n, e) {
	const t = '-'.repeat(n),
		i = '^'.repeat(e ? e - n : 1);
	return `${t}${i}`;
}
function eS(n) {
	const e = Pe.c(7);
	let t;
	e[0] !== n.error.message
		? ((t = D.jsx(Cl, { size: 1, children: n.error.message })),
			(e[0] = n.error.message),
			(e[1] = t))
		: (t = e[1]);
	let i;
	e[2] !== n.error
		? ((i = D.jsx(HD, { error: n.error })), (e[2] = n.error), (e[3] = i))
		: (i = e[3]);
	let r;
	return (
		e[4] !== t || e[5] !== i
			? ((r = D.jsxs(At, { space: 5, marginTop: 2, children: [t, i] })),
				(e[4] = t),
				(e[5] = i),
				(e[6] = r))
			: (r = e[6]),
		r
	);
}
const tS = ge.div(({ theme: n }) => {
		const { color: e, fonts: t, space: i } = n.sanity;
		return _h`
    & .json-inspector,
    & .json-inspector .json-inspector__selection {
      font-family: ${t.code.family};
      font-size: ${t.code.sizes[2].fontSize}px;
      line-height: ${t.code.sizes[2].lineHeight}px;
      color: var(--card-code-fg-color);
    }

    & .json-inspector .json-inspector__leaf {
      padding-left: ${yt(i[4])};
    }

    & .json-inspector .json-inspector__leaf.json-inspector__leaf_root {
      padding-top: ${yt(i[0])};
      padding-left: 0;
    }

    & .json-inspector > .json-inspector__leaf_root > .json-inspector__line > .json-inspector__key {
      display: none;
    }

    & .json-inspector .json-inspector__line {
      display: block;
      position: relative;
      cursor: default;
    }

    & .json-inspector .json-inspector__line::after {
      content: '';
      position: absolute;
      top: 0;
      left: -200px;
      right: -50px;
      bottom: 0;
      z-index: -1;
      pointer-events: none;
    }

    & .json-inspector .json-inspector__line:hover::after {
      background: var(--card-code-bg-color);
    }

    & .json-inspector .json-inspector__leaf_composite > .json-inspector__line {
      cursor: pointer;
    }

    & .json-inspector .json-inspector__leaf_composite > .json-inspector__line::before {
      content: '▸ ';
      margin-left: calc(0px - ${yt(i[4])});
      font-size: ${t.code.sizes[2].fontSize}px;
      line-height: ${t.code.sizes[2].lineHeight}px;
    }

    &
      .json-inspector
      .json-inspector__leaf_expanded.json-inspector__leaf_composite
      > .json-inspector__line::before {
      content: '▾ ';
      font-size: ${t.code.sizes[2].fontSize}px;
      line-height: ${t.code.sizes[2].lineHeight}px;
    }

    & .json-inspector .json-inspector__radio,
    & .json-inspector .json-inspector__flatpath {
      display: none;
    }

    & .json-inspector .json-inspector__value {
      margin-left: ${yt(i[4] / 2)};
    }

    &
      .json-inspector
      > .json-inspector__leaf_root
      > .json-inspector__line
      > .json-inspector__key
      + .json-inspector__value {
      margin: 0;
    }

    & .json-inspector .json-inspector__key {
      color: ${e.syntax.property};
    }

    & .json-inspector .json-inspector__value_helper,
    & .json-inspector .json-inspector__value_null {
      color: ${e.syntax.constant};
    }

    & .json-inspector .json-inspector__not-found {
      padding-top: ${yt(i[2])};
    }

    & .json-inspector .json-inspector__value_string {
      color: ${e.syntax.string};
      word-break: break-word;
    }

    & .json-inspector .json-inspector__value_boolean {
      color: ${e.syntax.boolean};
    }

    & .json-inspector .json-inspector__value_number {
      color: ${e.syntax.number};
    }

    & .json-inspector .json-inspector__show-original {
      display: inline-block;
      padding: 0 6px;
      cursor: pointer;
    }

    & .json-inspector .json-inspector__show-original:hover {
      color: inherit;
    }

    & .json-inspector .json-inspector__show-original::before {
      content: '↔';
    }

    & .json-inspector .json-inspector__show-original:hover::after {
      content: ' expand';
    }
  `;
	}),
	Pl = new Vp({ maxSize: 5e4 });
function zh(n) {
	const e = Pe.c(7),
		{ data: t, datasetName: i } = n,
		r = _p();
	if (Sp(t) || Array.isArray(t)) {
		const l = r === i ? iS : void 0;
		let a;
		return (
			e[0] !== t || e[1] !== l
				? ((a = D.jsx(tS, {
						children: D.jsx(Yp, {
							data: t,
							search: !1,
							isExpanded: nS,
							onClick: rS,
							interactiveLabel: l
						})
					})),
					(e[0] = t),
					(e[1] = l),
					(e[2] = a))
				: (a = e[2]),
			a
		);
	}
	let s;
	e[3] !== t ? ((s = JSON.stringify(t)), (e[3] = t), (e[4] = s)) : (s = e[4]);
	let o;
	return (
		e[5] !== s
			? ((o = D.jsx(Al, { language: 'json', children: s })), (e[5] = s), (e[6] = o))
			: (o = e[6]),
		o
	);
}
function iS(n) {
	const e = Pe.c(5);
	if (n.isKey || (!n.keypath.endsWith('_id') && !n.keypath.endsWith('_ref'))) return null;
	let t;
	e[0] !== n.value ? ((t = { id: n.value }), (e[0] = n.value), (e[1] = t)) : (t = e[1]);
	let i;
	e[2] === Symbol.for('react.memo_cache_sentinel') ? ((i = D.jsx(Up, {})), (e[2] = i)) : (i = e[2]);
	let r;
	return (
		e[3] !== t
			? ((r = D.jsx(Np, { intent: 'edit', params: t, children: i })), (e[3] = t), (e[4] = r))
			: (r = e[4]),
		r
	);
}
function nS(n, e) {
	const t = Pl.get(n);
	if (typeof t == 'boolean') return t;
	const i = n.split('.', 4);
	return i.length === 4 ? !1 : Array.isArray(e) ? !0 : Sp(e) && !i.some((r) => oS(r));
}
function rS(n) {
	const { path: e } = n,
		t = Pl.get(e);
	t !== void 0 && Pl.set(e, !t);
}
function Sp(n) {
	return n !== null && typeof n == 'object' && !Array.isArray(n);
}
const sS = /^\d+$/;
function oS(n, e = 10) {
	return sS.test(n) && parseInt(n, 10) > e;
}
function lS(n) {
	return n.preventDefault();
}
function aS(n) {
	const e = Pe.c(9),
		{ blobUrl: t } = n,
		{ t: i } = pi(Oi),
		r = !t,
		s = r ? void 0 : 'query-result.csv',
		o = r ? lS : void 0;
	let l;
	e[0] !== t || e[1] !== r || e[2] !== s || e[3] !== o
		? ((l = D.jsx(Ai, {
				as: 'a',
				disabled: r,
				download: s,
				href: t,
				icon: Vh,
				mode: 'ghost',
				onClick: o,
				text: 'CSV',
				tone: 'default'
			})),
			(e[0] = t),
			(e[1] = r),
			(e[2] = s),
			(e[3] = o),
			(e[4] = l))
		: (l = e[4]);
	const a = l;
	let u;
	return (
		e[5] !== a || e[6] !== r || e[7] !== i
			? ((u = r
					? D.jsx(Fn, {
							content: i('result.save-result-as-csv.not-csv-encodable'),
							placement: 'top',
							children: a
						})
					: a),
				(e[5] = a),
				(e[6] = r),
				(e[7] = i),
				(e[8] = u))
			: (u = e[8]),
		u
	);
}
function uS(n) {
	const e = Pe.c(2),
		{ blobUrl: t } = n;
	let i;
	return (
		e[0] !== t
			? ((i = D.jsx(Ai, {
					as: 'a',
					download: 'query-result.json',
					href: t,
					icon: Vh,
					mode: 'ghost',
					text: 'JSON',
					tone: 'default'
				})),
				(e[0] = t),
				(e[1] = i))
			: (i = e[1]),
		i
	);
}
function hS(n) {
	const e = Pe.c(67),
		{
			error: t,
			queryInProgress: i,
			queryResult: r,
			listenInProgress: s,
			listenMutations: o,
			dataset: l,
			queryTime: a,
			e2eTime: u
		} = n,
		{ t: h } = pi(Oi),
		c = !t && !i && typeof r < 'u';
	let f;
	e[0] !== c || e[1] !== r
		? ((f = c ? UD(r) : ''), (e[0] = c), (e[1] = r), (e[2] = f))
		: (f = e[2]);
	const d = f;
	let p;
	e[3] !== c || e[4] !== r
		? ((p = c ? GD(r) : ''), (e[3] = c), (e[4] = r), (e[5] = p))
		: (p = e[5]);
	const O = p,
		m = t ? 'critical' : 'default',
		g = !!t;
	let S;
	e[6] !== h ? ((S = h('result.label')), (e[6] = h), (e[7] = S)) : (S = e[7]);
	let C;
	e[8] !== S
		? ((C = D.jsx(yp, {
				children: D.jsx(ue, {
					marginLeft: 3,
					children: D.jsx(Yt, { muted: !0, children: S })
				})
			})),
			(e[8] = S),
			(e[9] = C))
		: (C = e[9]);
	let k;
	e[10] !== s || e[11] !== o || e[12] !== i
		? ((k = (i || (s && o.length === 0)) && D.jsx(ue, { marginTop: 3, children: D.jsx(dp, {}) })),
			(e[10] = s),
			(e[11] = o),
			(e[12] = i),
			(e[13] = k))
		: (k = e[13]);
	let x;
	e[14] !== t ? ((x = t && D.jsx(eS, { error: t })), (e[14] = t), (e[15] = x)) : (x = e[15]);
	let P;
	e[16] !== l || e[17] !== c || e[18] !== r
		? ((P = c && D.jsx(zh, { data: r, datasetName: l })),
			(e[16] = l),
			(e[17] = c),
			(e[18] = r),
			(e[19] = P))
		: (P = e[19]);
	let $;
	e[20] !== l || e[21] !== s || e[22] !== o
		? (($ = s && o.length > 0 && D.jsx(zh, { data: o, datasetName: l })),
			(e[20] = l),
			(e[21] = s),
			(e[22] = o),
			(e[23] = $))
		: ($ = e[23]);
	let T;
	e[24] !== $ || e[25] !== k || e[26] !== x || e[27] !== P
		? ((T = D.jsxs(ue, { padding: 3, paddingTop: 5, children: [k, x, P, $] })),
			(e[24] = $),
			(e[25] = k),
			(e[26] = x),
			(e[27] = P),
			(e[28] = T))
		: (T = e[28]);
	let w;
	e[29] !== T || e[30] !== C
		? ((w = D.jsxs(vD, { overflow: 'auto', children: [C, T] })),
			(e[29] = T),
			(e[30] = C),
			(e[31] = w))
		: (w = e[31]);
	let b;
	e[32] !== w || e[33] !== m || e[34] !== g
		? ((b = D.jsx(wD, {
				flex: 1,
				children: D.jsx(kD, {
					flex: 1,
					overflow: 'hidden',
					tone: m,
					$isInvalid: g,
					children: w
				})
			})),
			(e[32] = w),
			(e[33] = m),
			(e[34] = g),
			(e[35] = b))
		: (b = e[35]);
	let A;
	e[36] === Symbol.for('react.memo_cache_sentinel')
		? ((A = ['column', 'column', 'row']), (e[36] = A))
		: (A = e[36]);
	let E;
	e[37] !== h ? ((E = h('result.execution-time-label')), (e[37] = h), (e[38] = E)) : (E = e[38]);
	let Q;
	e[39] !== a || e[40] !== h
		? ((Q = typeof a == 'number' ? `${a}ms` : h('result.timing-not-applicable')),
			(e[39] = a),
			(e[40] = h),
			(e[41] = Q))
		: (Q = e[41]);
	let F;
	e[42] !== E || e[43] !== Q
		? ((F = D.jsx(ue, {
				children: D.jsxs(Zt, { muted: !0, children: [E, ':', ' ', Q] })
			})),
			(e[42] = E),
			(e[43] = Q),
			(e[44] = F))
		: (F = e[44]);
	let q;
	e[45] !== h ? ((q = h('result.end-to-end-time-label')), (e[45] = h), (e[46] = q)) : (q = e[46]);
	let _;
	e[47] !== u || e[48] !== h
		? ((_ = typeof u == 'number' ? `${u}ms` : h('result.timing-not-applicable')),
			(e[47] = u),
			(e[48] = h),
			(e[49] = _))
		: (_ = e[49]);
	let Y;
	e[50] !== q || e[51] !== _
		? ((Y = D.jsx(ue, {
				marginLeft: 4,
				children: D.jsxs(Zt, { muted: !0, children: [q, ':', ' ', _] })
			})),
			(e[50] = q),
			(e[51] = _),
			(e[52] = Y))
		: (Y = e[52]);
	let N;
	e[53] !== F || e[54] !== Y
		? ((N = D.jsx(CD, {
				paddingX: 4,
				paddingY: 3,
				sizing: 'border',
				children: D.jsxs(PD, { align: 'center', children: [F, Y] })
			})),
			(e[53] = F),
			(e[54] = Y),
			(e[55] = N))
		: (N = e[55]);
	let W;
	e[56] !== O || e[57] !== c || e[58] !== d || e[59] !== h
		? ((W =
				c &&
				D.jsx(AD, {
					paddingX: 4,
					paddingY: 3,
					sizing: 'border',
					children: D.jsx($D, {
						muted: !0,
						children: D.jsx(Nh, {
							components: {
								SaveResultButtons: () =>
									D.jsxs(D.Fragment, {
										children: [D.jsx(uS, { blobUrl: d }), D.jsx(aS, { blobUrl: O })]
									})
							},
							i18nKey: 'result.save-result-as-format',
							t: h
						})
					})
				})),
			(e[56] = O),
			(e[57] = c),
			(e[58] = d),
			(e[59] = h),
			(e[60] = W))
		: (W = e[60]);
	let K;
	e[61] !== N || e[62] !== W
		? ((K = D.jsxs(QD, {
				justify: 'space-between',
				direction: A,
				children: [N, W]
			})),
			(e[61] = N),
			(e[62] = W),
			(e[63] = K))
		: (K = e[63]);
	let v;
	return (
		e[64] !== b || e[65] !== K
			? ((v = D.jsxs(SD, {
					direction: 'column',
					'data-testid': 'vision-result',
					children: [b, K]
				})),
				(e[64] = b),
				(e[65] = K),
				(e[66] = v))
			: (v = e[66]),
		v
	);
}
function cS(n, e) {
	return !n || !e ? !1 : n === e || !!(n.compareDocumentPosition(e) & 16);
}
const fS =
		/\.(?:api|apicdn)\.sanity\.(?:io|work)\/(vX|v1|v\d{4}-\d\d-\d\d)\/.*?(?:query|listen)\/(.*?)\?(.*)/,
	dS = (n) => Oa('ctrl+enter', n) || Oa('mod+enter', n);
function pS(n) {
	const { datasets: e, config: t, projectId: i, defaultDataset: r } = n,
		s = Bp(),
		{ t: o } = pi(Oi),
		{ perspectiveStack: l } = qh(),
		a = gD(`${t.defaultApiVersion}`),
		u = B.useRef(null),
		h = B.useRef(null),
		c = B.useRef(null),
		f = B.useRef(null),
		d = B.useRef(void 0),
		p = B.useRef(void 0),
		[O] = B.useState(() => pD(i || 'default')),
		{
			storedDataset: m,
			storedApiVersion: g,
			storedQuery: S,
			storedParams: C,
			storedPerspective: k
		} = B.useMemo(
			() => ({
				storedDataset: O.get('dataset', r),
				storedApiVersion: O.get('apiVersion', a),
				storedQuery: O.get('query', ''),
				storedParams: O.get(
					'params',
					`{
  
}`
				),
				storedPerspective: O.get('perspective', void 0)
			}),
			[r, a, O]
		),
		[x, P] = B.useState(() => (e.includes(m) ? m : e.includes(r) ? r : e[0])),
		[$, T] = B.useState(() => (Tn.includes(g) ? g : fp)),
		[w, b] = B.useState(() => (Tn.includes(g) ? !1 : g)),
		[A, E] = B.useState(k || 'raw'),
		Q = w ? So(w) : !0,
		[F, q] = B.useState(void 0),
		[_, Y] = B.useState(() => (typeof S == 'string' ? S : '')),
		[N, W] = B.useState(() => Os(C, o)),
		[K, v] = B.useState(void 0),
		[V, U] = B.useState([]),
		[re, ee] = B.useState(void 0),
		[we, rt] = B.useState(void 0),
		[qe, Mi] = B.useState(void 0),
		[Bi, Wt] = B.useState(!1),
		[nr, rr] = B.useState(!1),
		{ paneSizeOptions: ji, isNarrowBreakpoint: Zs } = TD({ visionRootRef: c }),
		ha = Xh({ apiVersion: Q && w ? w : $ }),
		fn = B.useMemo(
			() =>
				ha.withConfig({
					apiVersion: Q && w ? w : $,
					perspective: Bh({ visionPerspective: A, perspectiveStack: l }),
					dataset: x,
					allowReconfigure: !0
				}),
			[l, A, w, $, x, ha, Q]
		),
		Wi = B.useCallback(() => {
			d.current && (d.current.unsubscribe(), (d.current = void 0));
		}, []),
		gi = B.useCallback(() => {
			p.current && (p.current.unsubscribe(), (p.current = void 0));
		}, []),
		Ke = B.useCallback(
			(L) => {
				if (Bi) {
					Wi(), gi(), Wt(!1);
					return;
				}
				const G = {
					query: (L == null ? void 0 : L.query) || _,
					dataset: (L == null ? void 0 : L.dataset) || x,
					params: Os(JSON.stringify((L == null ? void 0 : L.params) || N.parsed, null, 2), o),
					perspective: Bh({
						visionPerspective: (L == null ? void 0 : L.perspective) || A,
						perspectiveStack: l
					}),
					apiVersion: (L == null ? void 0 : L.apiVersion) || (w && Q ? w : $)
				};
				if (
					(O.set('query', G.query),
					O.set('params', G.params.raw),
					gi(),
					Wt(!G.params.error && !!G.query),
					rr(!1),
					U([]),
					ee(G.params.error ? new Error(G.params.error) : void 0),
					v(void 0),
					rt(void 0),
					Mi(void 0),
					G.params.error)
				)
					return;
				const ft = { perspective: G.perspective ?? [] },
					zi = fn.withConfig({
						apiVersion: G.apiVersion,
						dataset: G.dataset,
						perspective: G.perspective
					}),
					Ms = zi.getUrl(zi.getDataUrl('query', jh(G.query, G.params.parsed, ft)));
				q(Ms);
				const dt = Date.now();
				d.current = zi.observable
					.fetch(G.query, G.params.parsed, {
						filterResponse: !1,
						tag: 'vision'
					})
					.subscribe({
						next: (yi) => {
							rt(yi.ms), Mi(Date.now() - dt), v(yi.result), Wt(!1), ee(void 0);
						},
						error: (yi) => {
							ee(yi), Wt(!1);
						}
					});
			},
			[Bi, _, x, N.parsed, o, A, l, w, Q, $, O, gi, fn, Wi]
		),
		Rs = B.useCallback(
			(L) => {
				(L !== void 0 && !Do(L)) || (E(L), O.set('perspective', L), Ke({ perspective: L }));
			},
			[O, Ke]
		),
		wp = B.useCallback(
			(L) => {
				const G = L.target.value;
				O.set('dataset', G), P(G), Ke({ dataset: G });
			},
			[O, Ke]
		),
		kp = B.useCallback(
			(L) => {
				var ft;
				const G = L.target.value;
				if ((G == null ? void 0 : G.toLowerCase()) === 'other') {
					b('v'), (ft = f.current) == null || ft.focus();
					return;
				}
				T(G), b(!1), O.set('apiVersion', G), Ke({ apiVersion: G });
			},
			[O, Ke]
		),
		vp = B.useCallback(
			(L) => {
				const G = L.target.value || '';
				b(G || 'v'), So(G) && (T(G), O.set('apiVersion', G), Ke({ apiVersion: G }));
			},
			[O, Ke]
		),
		Qp = B.useCallback(
			(L) => {
				const G = L.target.value;
				Rs(G === 'default' ? void 0 : G);
			},
			[Rs]
		),
		ca = B.useCallback((L) => {
			L.type === 'mutation' && U((G) => (G.length === 50 ? [L, ...G.slice(0, 49)] : [L, ...G]));
		}, []),
		Cp = B.useCallback(() => {
			if (nr) {
				gi(), rr(!1);
				return;
			}
			const L = fn.getDataUrl('listen', jh(_, N.parsed, {})),
				G = !N.error && _.trim().length > 0;
			O.set('query', _),
				O.set('params', N.raw),
				Wi(),
				q(L),
				U([]),
				Wt(!1),
				v(void 0),
				rr(G),
				ee(N.error ? new Error(N.error) : void 0),
				rt(void 0),
				Mi(void 0),
				G &&
					(p.current = fn
						.listen(_, N.parsed, {
							events: ['mutation', 'welcome'],
							includeAllVersions: !0
						})
						.subscribe({
							next: ca,
							error: (ft) => {
								ee(ft), rr(!1);
							}
						}));
		}, [nr, N, _, O, Wi, ca, gi, fn]),
		Pp = B.useCallback(
			(L) => {
				W(L), O.set('params', L.raw);
			},
			[O]
		),
		Ts = B.useCallback(
			(L) => {
				const G = c.current && cS(c.current, L.target);
				dS(L) && G && N.valid && (Ke(), L.preventDefault(), L.stopPropagation());
			},
			[N.valid, Ke]
		),
		Fs = B.useCallback(
			(L) => {
				var da, pa;
				if (!L.clipboardData) return;
				const G = L.clipboardData.getData('text/plain').match(fS);
				if (!G) return;
				const [, ft, zi, Ms] = G;
				let dt;
				try {
					const js = new URLSearchParams(Ms);
					dt = mD(js);
				} catch (js) {
					console.warn('Error while trying to parse API URL: ', js.message);
					return;
				}
				let yi, Bs;
				So(ft) && (Tn.includes(ft) ? ((yi = ft), (Bs = !1)) : (Bs = ft));
				const fa =
					Do(dt.options.perspective) && !Fh(dt.options.perspective)
						? dt.options.perspective
						: void 0;
				fa &&
					(!Do(dt.options.perspective) || Fh(dt.options.perspective)) &&
					s.push({
						closable: !0,
						id: 'vision-paste-unsupported-perspective',
						status: 'warning',
						title: 'Perspective in pasted url is currently not supported. Falling back to "raw"'
					});
				const Ee = {
					query: dt.query,
					params: dt.params,
					rawParams: JSON.stringify(dt.params, null, 2),
					dataset: e.includes(zi) ? zi : x,
					apiVersion: yi || $,
					customApiVersion: Bs,
					perspective: fa || A
				};
				L.preventDefault(),
					P(Ee.dataset),
					Y(Ee.query),
					W({ parsed: Ee.params, raw: Ee.rawParams, valid: !0, error: void 0 }),
					T(Ee.apiVersion),
					Ee.customApiVersion && b(Ee.customApiVersion),
					E(Ee.perspective),
					(da = u.current) == null || da.resetEditorContent(Ee.query),
					(pa = h.current) == null || pa.resetEditorContent(Ee.rawParams),
					O.merge({
						query: Ee.query,
						params: Ee.rawParams,
						dataset: Ee.dataset,
						apiVersion: Ee.customApiVersion || Ee.apiVersion,
						perspective: Ee.perspective
					}),
					Ke(Ee),
					s.push({
						closable: !0,
						id: 'vision-paste',
						status: 'info',
						title: 'Parsed URL to query'
					});
			},
			[e, x, $, A, O, s, Ke]
		);
	B.useEffect(
		() => (
			window.document.addEventListener('paste', Fs),
			window.document.addEventListener('keydown', Ts),
			() => {
				window.document.removeEventListener('paste', Fs),
					window.document.removeEventListener('keydown', Ts);
			}
		),
		[Ts, Fs]
	),
		B.useEffect(
			() => () => {
				Wi(), gi();
			},
			[Wi, gi]
		);
	const Ap = jp((L) => {
		L.length > 0 && Rs('pinnedRelease');
	});
	return (
		B.useEffect(() => {
			Ap(l);
		}, [l]),
		D.jsxs(gp, {
			direction: 'column',
			height: 'fill',
			ref: c,
			sizing: 'border',
			overflow: 'hidden',
			'data-testid': 'vision-root',
			children: [
				D.jsx(YD, {
					apiVersion: $,
					customApiVersion: w,
					dataset: x,
					datasets: e,
					onChangeDataset: wp,
					onChangeApiVersion: kp,
					customApiVersionElementRef: f,
					onCustomApiVersionChange: vp,
					isValidApiVersion: Q,
					onChangePerspective: Qp,
					url: F,
					perspective: A
				}),
				D.jsx(xD, {
					flex: 'auto',
					children: D.jsxs(va, {
						split: Zs ? 'vertical' : 'horizontal',
						minSize: 280,
						defaultSize: 400,
						maxSize: -400,
						children: [
							D.jsx(ue, {
								height: 'stretch',
								flex: 1,
								children: D.jsxs(va, {
									className: 'sidebarPanes',
									split: 'horizontal',
									defaultSize: Zs ? ji.defaultSize : ji.minSize,
									size: ji.size,
									allowResize: ji.allowResize,
									minSize: Zs ? ji.minSize : 100,
									maxSize: ji.maxSize,
									primary: 'first',
									children: [
										D.jsx(Wh, {
											display: 'flex',
											'data-testid': 'vision-query-editor',
											children: D.jsxs(ue, {
												flex: 1,
												children: [
													D.jsx(bp, {
														children: D.jsx(Gt, {
															children: D.jsx(Yt, {
																muted: !0,
																children: o('query.label')
															})
														})
													}),
													D.jsx(aa, { initialValue: _, onChange: Y, ref: u })
												]
											})
										}),
										D.jsxs(Wh, {
											display: 'flex',
											children: [
												D.jsx(RD, {
													value: N.raw,
													onChange: Pp,
													paramsError: N.error,
													hasValidParams: N.valid,
													editorRef: h
												}),
												D.jsx(BD, {
													hasValidParams: N.valid,
													queryInProgress: Bi,
													listenInProgress: nr,
													onQueryExecution: Ke,
													onListenExecution: Cp
												})
											]
										})
									]
								})
							}),
							D.jsx(hS, {
								error: re,
								queryInProgress: Bi,
								queryResult: K,
								listenInProgress: nr,
								listenMutations: V,
								dataset: x,
								queryTime: we,
								e2eTime: qe
							})
						]
					})
				})
			]
		})
	);
}
function OS(n) {
	const e = Pe.c(7);
	let t;
	e[0] !== n ? ((t = n.config()), (e[0] = n), (e[1] = t)) : (t = e[1]);
	const i = t.projectId,
		[r, s] = B.useState();
	let o;
	e[2] !== n.observable.datasets
		? ((o = () => {
				const a = n.observable.datasets
					.list()
					.subscribe({ next: (u) => s(u.map(mS)), error: (u) => s(u) });
				return () => a.unsubscribe();
			}),
			(e[2] = n.observable.datasets),
			(e[3] = o))
		: (o = e[3]);
	let l;
	return (
		e[4] !== n || e[5] !== i ? ((l = [n, i]), (e[4] = n), (e[5] = i), (e[6] = l)) : (l = e[6]),
		B.useEffect(o, l),
		r || void 0
	);
}
function mS(n) {
	return n.name;
}
function gS(n) {
	const e = Pe.c(15),
		t = OS(n.client);
	if (!t) {
		let h;
		return (
			e[0] === Symbol.for('react.memo_cache_sentinel')
				? ((h = D.jsx(Gt, {
						align: 'center',
						height: 'fill',
						justify: 'center',
						children: D.jsx(dp, {})
					})),
					(e[0] = h))
				: (h = e[0]),
			h
		);
	}
	let i;
	e[1] !== t || e[2] !== n.client
		? ((i = t instanceof Error ? [n.client.config().dataset || 'production'] : t),
			(e[1] = t),
			(e[2] = n.client),
			(e[3] = i))
		: (i = e[3]);
	const r = i;
	let s;
	e[4] !== n.client ? ((s = n.client.config()), (e[4] = n.client), (e[5] = s)) : (s = e[5]);
	const o = s.projectId;
	let l;
	e[6] !== r || e[7] !== n.client || e[8] !== n.config.defaultDataset
		? ((l = n.config.defaultDataset || n.client.config().dataset || r[0]),
			(e[6] = r),
			(e[7] = n.client),
			(e[8] = n.config.defaultDataset),
			(e[9] = l))
		: (l = e[9]);
	const a = l;
	let u;
	return (
		e[10] !== r || e[11] !== a || e[12] !== o || e[13] !== n
			? ((u = B.createElement(pS, {
					...n,
					key: o,
					datasets: r,
					projectId: o,
					defaultDataset: a
				})),
				(e[10] = r),
				(e[11] = a),
				(e[12] = o),
				(e[13] = n),
				(e[14] = u))
			: (u = e[14]),
		u
	);
}
class yS extends B.Component {
	constructor(t) {
		super(t);
		Ws(this, 'handleRetryRender', () =>
			this.setState((t) => ({ error: null, numRetries: t.numRetries + 1 }))
		);
		Ws(this, 'handleRetryWithCacheClear', () => {
			dD(), this.handleRetryRender();
		});
		this.state = { error: null, numRetries: 0 };
	}
	static getDerivedStateFromError(t) {
		return { error: t instanceof Error ? t.message : `${t}` };
	}
	render() {
		if (!this.state.error) return this.props.children;
		const t = this.state.error,
			i = this.state.numRetries > 0;
		return D.jsx(Qe, {
			height: 'fill',
			overflow: 'auto',
			paddingY: [4, 5, 6, 7],
			paddingX: 4,
			sizing: 'border',
			tone: 'critical',
			children: D.jsx(Tp, {
				width: 3,
				children: D.jsxs(At, {
					space: 4,
					children: [
						D.jsx('div', {
							children: D.jsx(Ai, {
								onClick: i ? this.handleRetryWithCacheClear : this.handleRetryRender,
								text: i ? 'Clear cache and retry' : 'Retry',
								tone: 'default'
							})
						}),
						D.jsx(Fp, { children: 'An error occurred' }),
						D.jsx(Qe, {
							border: !0,
							radius: 2,
							overflow: 'auto',
							padding: 4,
							tone: 'inherit',
							children: D.jsx(At, {
								space: 4,
								children:
									t &&
									D.jsx(Al, {
										size: 1,
										children: D.jsxs('strong', { children: ['Error: ', t] })
									})
							})
						})
					]
				})
			})
		});
	}
}
function wS(n) {
	const e = Pe.c(6);
	let t;
	e[0] === Symbol.for('react.memo_cache_sentinel')
		? ((t = { apiVersion: '1' }), (e[0] = t))
		: (t = e[0]);
	const i = Xh(t);
	let r;
	e[1] !== n.tool.options
		? ((r = { defaultApiVersion: fp, ...n.tool.options }), (e[1] = n.tool.options), (e[2] = r))
		: (r = e[2]);
	const s = r;
	let o;
	return (
		e[3] !== i || e[4] !== s
			? ((o = D.jsx(yS, { children: D.jsx(gS, { client: i, config: s }) })),
				(e[3] = i),
				(e[4] = s),
				(e[5] = o))
			: (o = e[5]),
		o
	);
}
export { wS as default };
