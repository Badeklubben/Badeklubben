const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'static/index-G5Z-MTND.js',
			'static/sanity-BGUQwGSa.js',
			'static/sanity-BIOIP5Bt.css',
			'static/index2-BXtnjfOB.js'
		])
) => i.map((i) => d[i]);
import {
	a0 as Oe,
	a1 as Me,
	a as $,
	a2 as Ae,
	r as S,
	j as p,
	a3 as Ve,
	a4 as Be,
	a5 as he,
	k as re,
	a6 as se,
	a7 as de,
	S as pe,
	T as N,
	f as Pe,
	o as ne,
	a8 as Ee,
	C as ae,
	b as $e,
	p as Re,
	a9 as fe,
	aa as ye,
	ab as oe,
	ac as We,
	ad as xe,
	H as He,
	ae as Ke,
	af as Fe,
	ag as Z,
	ah as me,
	m as Ge,
	i as Ue,
	ai as ke,
	w as Je,
	aj as qe,
	ak as ge,
	al as Ye,
	am as q,
	an as Qe,
	ao as Xe,
	ap as Ze,
	aq as et,
	ar as tt,
	F as we,
	as as F,
	at as nt,
	au as Te,
	av as Ce,
	aw as at,
	l as rt,
	ax as st,
	ay as ot,
	az as it,
	aA as lt,
	aB as ct,
	aC as dt,
	aD as ut,
	aE as ee,
	aF as pt,
	aG as Ie,
	aH as mt,
	aI as ht,
	U as _e,
	aJ as ft,
	aK as yt,
	aL as xt,
	aM as gt,
	aN as It,
	aO as Pt,
	aP as ve,
	aQ as wt,
	aR as _t,
	aS as vt
} from './sanity-BGUQwGSa.js';
function bt() {
	return Oe(function (t, e) {
		var r,
			n = !1;
		t.subscribe(
			Me(e, function (o) {
				var a = r;
				(r = o), n && e.next([a, o]), (n = !0);
			})
		);
	});
}
const jt = [];
function St(t) {
	const e = $.c(60),
		{ children: r, flatIndex: n, index: o, params: a, payload: i, siblingIndex: s } = t,
		{ navigate: l, navigateIntent: u, resolvePathFromState: c } = fe(),
		d = ye(),
		{ panes: x, expand: I } = Ze();
	let f;
	f = (d == null ? void 0 : d.panes) || jt;
	const m = f;
	let P;
	P = x == null ? void 0 : x[x.length - 2];
	const g = P,
		h = o - 1;
	let y;
	e[0] !== h || e[1] !== m || e[2] !== d || e[3] !== s
		? ((y = (v) => {
				const j = m[h] || [],
					E = j[s],
					M = v(j, E),
					X = [...m.slice(0, h), M, ...m.slice(h + 1)];
				return { ...(d || {}), panes: X };
			}),
			(e[0] = h),
			(e[1] = m),
			(e[2] = d),
			(e[3] = s),
			(e[4] = y))
		: (y = e[4]);
	const w = y;
	let _;
	e[5] !== w || e[6] !== l
		? ((_ = (v) => {
				const j = w(v);
				return setTimeout(() => l(j), 0), j;
			}),
			(e[5] = w),
			(e[6] = l),
			(e[7] = _))
		: (_ = e[7]);
	const b = _;
	let R;
	e[8] !== w || e[9] !== c || e[10] !== s
		? ((R = (v) => {
				const j = w((E, M) => [...E.slice(0, s), { ...M, params: v }, ...E.slice(s + 1)]);
				return c(j);
			}),
			(e[8] = w),
			(e[9] = c),
			(e[10] = s),
			(e[11] = R))
		: (R = e[11]);
	const U = R;
	let T;
	e[12] !== b || e[13] !== s
		? ((T = (v) => {
				b((j, E) => [...j.slice(0, s), { ...E, payload: v }, ...j.slice(s + 1)]);
			}),
			(e[12] = b),
			(e[13] = s),
			(e[14] = T))
		: (T = e[14]);
	const L = T;
	let C;
	e[15] !== b || e[16] !== s
		? ((C = (v) => {
				b((j, E) => [...j.slice(0, s), { ...E, params: v }, ...j.slice(s + 1)]);
			}),
			(e[15] = b),
			(e[16] = s),
			(e[17] = C))
		: (C = e[17]);
	const k = C;
	let z;
	e[18] !== h || e[19] !== l || e[20] !== m
		? ((z = (v) => {
				const { id: j, parentRefPath: E, type: M, template: X, version: Ne } = v;
				l({
					panes: [
						...m.slice(0, h + 1),
						[
							{
								id: j,
								params: {
									template: X.id,
									parentRefPath: it(E),
									type: M,
									version: Ne
								},
								payload: X.params
							}
						]
					]
				});
			}),
			(e[18] = h),
			(e[19] = l),
			(e[20] = m),
			(e[21] = z))
		: (z = e[21]);
	const O = z;
	let J;
	const D = m[h] ? m[h].length > 1 : !1,
		A = m[h] ? m[h].length : 0,
		le = n ? et : void 0;
	let V, B;
	e[22] !== b
		? ((V = (v) => {
				const j = v === void 0 ? {} : v;
				b(() => [{ id: j.id || '', payload: j.payload, params: j.params || {} }]);
			}),
			(B = () => {
				b(Et);
			}),
			(e[22] = b),
			(e[23] = V),
			(e[24] = B))
		: ((V = e[23]), (B = e[24]));
	let W;
	e[25] !== I || e[26] !== h || e[27] !== g || e[28] !== l || e[29] !== m
		? ((W = (v) => {
				(v === void 0 || v) && g && I(g.element), l({ panes: [...m.slice(0, h)] });
			}),
			(e[25] = I),
			(e[26] = h),
			(e[27] = g),
			(e[28] = l),
			(e[29] = m),
			(e[30] = W))
		: (W = e[30]);
	let H;
	e[31] !== b || e[32] !== s
		? ((H = (v) => {
				b((j, E) => {
					const M = {
						...E,
						payload: (v == null ? void 0 : v.payload) || E.payload,
						params: (v == null ? void 0 : v.params) || E.params
					};
					return [...j.slice(0, s), M, ...j.slice(s)];
				});
			}),
			(e[31] = b),
			(e[32] = s),
			(e[33] = H))
		: (H = e[33]);
	let K;
	e[34] !== a || e[35] !== k
		? ((K = (v) => {
				const j = Ce(a, 'view');
				return k(v ? { ...j, view: v } : j);
			}),
			(e[34] = a),
			(e[35] = k),
			(e[36] = K))
		: (K = e[36]);
	let Y;
	e[37] !== U ||
	e[38] !== n ||
	e[39] !== h ||
	e[40] !== O ||
	e[41] !== u ||
	e[42] !== a ||
	e[43] !== i ||
	e[44] !== m ||
	e[45] !== k ||
	e[46] !== L ||
	e[47] !== s ||
	e[48] !== A ||
	e[49] !== le ||
	e[50] !== V ||
	e[51] !== B ||
	e[52] !== W ||
	e[53] !== H ||
	e[54] !== K ||
	e[55] !== D
		? ((Y = {
				index: n,
				groupIndex: h,
				siblingIndex: s,
				payload: i,
				params: a,
				hasGroupSiblings: D,
				groupLength: A,
				routerPanesState: m,
				ChildLink: dt,
				BackLink: le,
				ReferenceChildLink: ct,
				handleEditReference: O,
				ParameterizedLink: lt,
				replaceCurrent: V,
				closeCurrent: B,
				closeCurrentAndAfter: W,
				duplicateCurrent: H,
				setView: K,
				setParams: k,
				setPayload: L,
				createPathWithParams: U,
				navigateIntent: u
			}),
			(e[37] = U),
			(e[38] = n),
			(e[39] = h),
			(e[40] = O),
			(e[41] = u),
			(e[42] = a),
			(e[43] = i),
			(e[44] = m),
			(e[45] = k),
			(e[46] = L),
			(e[47] = s),
			(e[48] = A),
			(e[49] = le),
			(e[50] = V),
			(e[51] = B),
			(e[52] = W),
			(e[53] = H),
			(e[54] = K),
			(e[55] = D),
			(e[56] = Y))
		: (Y = e[56]),
		(J = Y);
	const ce = J;
	let Q;
	return (
		e[57] !== r || e[58] !== ce
			? ((Q = p.jsx(tt.Provider, { value: ce, children: r })),
				(e[57] = r),
				(e[58] = ce),
				(e[59] = Q))
			: (Q = e[59]),
		Q
	);
}
function Et(t, e) {
	return t.length > 1 ? t.filter((r) => r !== e) : t;
}
class G extends Error {
	constructor({ message: e, context: r, helpId: n, cause: o }) {
		super(e),
			(this.name = 'PaneResolutionError'),
			(this.context = r),
			(this.helpId = n),
			(this.cause = o);
	}
}
const be = new WeakMap();
function ie(t) {
	const e = be.get(t);
	if (e) return e;
	const r = It();
	return be.set(t, r), r;
}
const $t = (t) => !!t && typeof (t == null ? void 0 : t.then) == 'function',
	Rt = (t) => (xe(t) ? typeof t.serialize == 'function' : !1),
	kt = (t) => (e, r, n) => {
		try {
			return t(e, r, n);
		} catch (o) {
			throw o instanceof G
				? o
				: new G({
						message: typeof (o == null ? void 0 : o.message) == 'string' ? o.message : '',
						context: r,
						cause: o
					});
		}
	},
	Tt =
		(t) =>
		(...e) =>
			t(...e).pipe(xt(1), gt());
function De(t) {
	const e = kt(
		Tt(
			t((r, n, o) => {
				if (!r)
					throw new G({
						message: 'Pane returned no child',
						context: n,
						helpId: 'structure-item-returned-no-child'
					});
				return $t(r) || pt(r)
					? ut(r).pipe(Ie((a) => e(a, n, o)))
					: Rt(r)
						? e(r.serialize(n), n, o)
						: typeof r == 'function'
							? e(r(n.id, n), n, o)
							: ee(r);
			})
		)
	);
	return e;
}
const je = new WeakMap();
function Le(t, e) {
	const r = je.get(t) || new Map();
	if (r) {
		const a = r.get(e);
		if (a) return a;
	}
	const n = t[e];
	if (typeof n != 'function')
		throw new Error(`Expected property \`${e}\` to be a function but got ${typeof n} instead.`);
	const o = n.bind(t);
	return r.set(e, o), je.set(t, r), o;
}
async function Ct(t) {
	const e = new Map(),
		r = De((i) => (s, l, u) => {
			const c = s && `${ie(s)}-${l.path.join('__')}`,
				d = c && e.get(c);
			if (d) return d;
			const x = i(s, l, u);
			return c && e.set(c, x), x;
		}),
		n = [
			[
				{
					id: `__edit__${t.params.id}`,
					params: { ...Ce(t.params, ['id']), type: t.params.type },
					payload: t.payload
				}
			]
		];
	async function o({
		currentId: i,
		flatIndex: s,
		intent: l,
		params: u,
		parent: c,
		path: d,
		payload: x,
		unresolvedPane: I,
		levelIndex: f,
		structureContext: m
	}) {
		var w;
		if (!I) return [];
		const { id: P, type: g, ...h } = u,
			y = await Te(
				r(
					I,
					{
						id: i,
						splitIndex: 0,
						parent: c,
						path: d,
						index: s,
						params: {},
						payload: void 0,
						structureContext: m
					},
					s
				)
			);
		return y.type === 'document' && y.id === P
			? [
					{
						panes: [
							...d.slice(0, d.length - 1).map((_) => [{ id: _ }]),
							[{ id: P, params: h, payload: x }]
						],
						depthIndex: d.length,
						levelIndex: f
					}
				]
			: ((w = y.canHandleIntent) != null && w.call(y, l, u, { pane: y, index: s })) ||
				  (y.type === 'documentList' &&
						y.schemaTypeName === g &&
						y.options.filter === '_type == $type')
				? [
						{
							panes: [...d.map((_) => [{ id: _ }]), [{ id: u.id, params: h, payload: x }]],
							depthIndex: d.length,
							levelIndex: f
						}
					]
				: y.type === 'list' && y.child && y.items
					? (
							await Promise.all(
								y.items.map((_, b) =>
									_.type === 'divider'
										? Promise.resolve([])
										: o({
												currentId: _._id || _.id,
												flatIndex: s + 1,
												intent: l,
												params: u,
												parent: y,
												path: [...d, _.id],
												payload: x,
												unresolvedPane: typeof y.child == 'function' ? Le(y, 'child') : y.child,
												levelIndex: b,
												structureContext: m
											})
								)
							)
						).flat()
					: [];
	}
	const a = (
		await o({
			currentId: 'root',
			flatIndex: 0,
			levelIndex: 0,
			intent: t.intent,
			params: t.params,
			parent: null,
			path: [],
			payload: t.payload,
			unresolvedPane: t.rootPaneNode,
			structureContext: t.structureContext
		})
	).sort((i, s) =>
		i.depthIndex === s.depthIndex ? i.levelIndex - s.levelIndex : i.depthIndex - s.depthIndex
	)[0];
	return a ? a.panes : n;
}
const Dt = (t, e) => {
	const r = t.replace(/^__edit__/, ''),
		{
			params: n,
			payload: o,
			structureContext: { resolveDocumentNode: a }
		} = e,
		{ type: i, template: s } = n;
	if (!i)
		throw new Error(
			`Document type for document with ID ${r} was not provided in the router params.`
		);
	let l = a({ schemaType: i, documentId: r }).id('editor');
	return s && (l = l.initialValueTemplate(s, o)), l.serialize();
};
function Lt(t) {
	var e, r;
	return `contextHash(${JSON.stringify({ id: t.id, parentId: parent && ie(parent), path: t.path, index: t.index, splitIndex: t.splitIndex, serializeOptionsIndex: (e = t.serializeOptions) == null ? void 0 : e.index, serializeOptionsPath: (r = t.serializeOptions) == null ? void 0 : r.path })})`;
}
const Se = (t) => {
	const e = {
		type: t.type,
		id: t.routerPaneSibling.id,
		params: t.routerPaneSibling.params || {},
		payload: t.routerPaneSibling.payload || null,
		flatIndex: t.flatIndex,
		groupIndex: t.groupIndex,
		siblingIndex: t.siblingIndex,
		path: t.path,
		paneNode: t.type === 'resolvedMeta' ? ie(t.paneNode) : null
	};
	return `metaHash(${JSON.stringify(e)})`;
};
function te({
	unresolvedPane: t,
	flattenedRouterPanes: e,
	parent: r,
	path: n,
	resolvePane: o,
	structureContext: a
}) {
	const [i, ...s] = e,
		l = s[0],
		u = {
			id: i.routerPaneSibling.id,
			splitIndex: i.siblingIndex,
			parent: r,
			path: [...n, i.routerPaneSibling.id],
			index: i.flatIndex,
			params: i.routerPaneSibling.params || {},
			payload: i.routerPaneSibling.payload,
			structureContext: a
		};
	try {
		return o(t, u, i.flatIndex).pipe(
			Ie((c) => {
				const d = { type: 'resolvedMeta', ...i, paneNode: c, path: u.path },
					x = s.map((f, m) => ({
						type: 'loading',
						path: [...u.path, ...s.slice(m).map((P, g) => `[${f.flatIndex + g}]`)],
						paneNode: null,
						...f
					}));
				if (!s.length) return ee([d]);
				let I;
				return (
					l != null && l.routerPaneSibling.id.startsWith('__edit__')
						? (I = te({
								unresolvedPane: Dt,
								flattenedRouterPanes: s,
								parent: r,
								path: u.path,
								resolvePane: o,
								structureContext: a
							}))
						: i.groupIndex === (l == null ? void 0 : l.groupIndex)
							? (I = te({
									unresolvedPane: t,
									flattenedRouterPanes: s,
									parent: r,
									path: n,
									resolvePane: o,
									structureContext: a
								}))
							: (I = te({
									unresolvedPane: typeof c.child == 'function' ? Le(c, 'child') : c.child,
									flattenedRouterPanes: s,
									parent: c,
									path: u.path,
									resolvePane: o,
									structureContext: a
								})),
					vt(ee([d, ...x]), I.pipe(F((f) => [d, ...f])))
				);
			})
		);
	} catch (c) {
		if (
			c instanceof G &&
			(c.context &&
				console.warn(
					`Pane resolution error at index ${c.context.index}${c.context.splitIndex > 0 ? ` for split pane index ${c.context.splitIndex}` : ''}: ${c.message}${c.helpId ? ` - see ${Ee(c.helpId)}` : ''}`,
					c
				),
			c.helpId === 'structure-item-returned-no-child')
		)
			return ee([]);
		throw c;
	}
}
function zt({
	routerPanesStream: t,
	rootPaneNode: e,
	initialCacheState: r = {
		cacheKeysByFlatIndex: [],
		flattenedRouterPanes: [],
		resolvedPaneCache: new Map(),
		resolvePane: () => wt
	},
	structureContext: n
}) {
	return t
		.pipe(
			F((o) => [[{ id: 'root' }], ...o]),
			F((o) =>
				o
					.flatMap((a, i) =>
						a.map((s, l) => ({
							routerPaneSibling: s,
							groupIndex: i,
							siblingIndex: l
						}))
					)
					.map((a, i) => ({ ...a, flatIndex: i }))
			),
			Pt([]),
			bt(),
			F(([o, a]) => {
				for (let i = 0; i < a.length; i++) {
					const s = o[i],
						l = a[i];
					if (!me(s, l)) return { flattenedRouterPanes: a, diffIndex: i };
				}
				return { flattenedRouterPanes: a, diffIndex: a.length };
			}),
			ve((o, a) => {
				const { cacheKeysByFlatIndex: i, resolvedPaneCache: s } = o,
					{ flattenedRouterPanes: l, diffIndex: u } = a,
					c = i.slice(0, u + 1),
					d = i.slice(u + 1),
					x = new Set(c.flatMap((f) => Array.from(f))),
					I = d.flatMap((f) => Array.from(f)).filter((f) => !x.has(f));
				for (const f of I) s.delete(f);
				return {
					flattenedRouterPanes: l,
					cacheKeysByFlatIndex: i,
					resolvedPaneCache: s,
					resolvePane: De((f) => (m, P, g) => {
						const h = m && `${ie(m)}-${Lt(P)}`,
							y = h && s.get(h);
						if (y) return y;
						const w = f(m, P, g);
						if (!h) return w;
						const _ = i[g] || new Set();
						return _.add(h), (i[g] = _), s.set(h, w), w;
					})
				};
			}, r),
			Ie(({ flattenedRouterPanes: o, resolvePane: a }) =>
				te({
					unresolvedPane: e,
					flattenedRouterPanes: o,
					parent: null,
					path: [],
					resolvePane: a,
					structureContext: n
				})
			)
		)
		.pipe(
			ve(
				(o, a) =>
					a.map((i, s) => {
						const l = o[s];
						return !l || i.type !== 'loading'
							? i
							: l.routerPaneSibling.id === i.routerPaneSibling.id
								? l
								: i;
					}),
				[]
			),
			_t((o, a) => {
				if (o.length !== a.length) return !1;
				for (let i = 0; i < a.length; i++) {
					const s = o[i],
						l = a[i];
					if (Se(s) !== Se(l)) return !1;
				}
				return !0;
			})
		);
}
function Nt() {
	const t = $.c(6),
		[e] = S.useState(Mt);
	let r, n;
	t[0] !== e ? ((n = e.asObservable().pipe(F(Ot))), (t[0] = e), (t[1] = n)) : (n = t[1]), (r = n);
	const o = r,
		{ state: a } = fe();
	let i, s;
	return (
		t[2] !== a || t[3] !== e
			? ((i = () => {
					e.next(a);
				}),
				(s = [a, e]),
				(t[2] = a),
				(t[3] = e),
				(t[4] = i),
				(t[5] = s))
			: ((i = t[4]), (s = t[5])),
		S.useEffect(i, s),
		o
	);
}
function Ot(t) {
	return (t == null ? void 0 : t.panes) || [];
}
function Mt() {
	return new at(1);
}
function At() {
	const t = $.c(6),
		[e, r] = S.useState();
	if (e) throw e;
	const { structureContext: n, rootPaneNode: o } = oe();
	let a;
	t[0] === Symbol.for('react.memo_cache_sentinel')
		? ((a = { paneDataItems: [], resolvedPanes: [], routerPanes: [] }), (t[0] = a))
		: (a = t[0]);
	const [i, s] = S.useState(a),
		l = Nt();
	let u, c;
	return (
		t[1] !== o || t[2] !== l || t[3] !== n
			? ((u = () => {
					const d = zt({
						rootPaneNode: o,
						routerPanesStream: l,
						structureContext: n
					})
						.pipe(F(Vt))
						.subscribe({ next: (x) => s(x), error: (x) => r(x) });
					return () => d.unsubscribe();
				}),
				(c = [o, l, n]),
				(t[1] = o),
				(t[2] = l),
				(t[3] = n),
				(t[4] = u),
				(t[5] = c))
			: ((u = t[4]), (c = t[5])),
		S.useEffect(u, c),
		i
	);
}
function Vt(t) {
	const e = t.reduce(Wt, []),
		r = e.length,
		n = t.map((o) => {
			const { groupIndex: a, flatIndex: i, siblingIndex: s, routerPaneSibling: l, path: u } = o,
				c = l.id,
				d = e[a + 1];
			return {
				active: a === r - 2,
				childItemId: (d == null ? void 0 : d[0].id) ?? null,
				index: i,
				itemId: l.id,
				groupIndex: a,
				key: `${o.type === 'loading' ? 'unknown' : o.paneNode.id}-${c}-${s}`,
				pane: o.type === 'loading' ? q : o.paneNode,
				params: l.params || {},
				path: u.join(';'),
				payload: l.payload,
				selected: i === t.length - 1,
				siblingIndex: s
			};
		});
	return { paneDataItems: n, routerPanes: e, resolvedPanes: n.map(Bt) };
}
function Bt(t) {
	return t.pane;
}
function Wt(t, e) {
	const r = t[e.groupIndex] || [];
	return (r[e.siblingIndex] = e.routerPaneSibling), (t[e.groupIndex] = r), t;
}
async function Ht(t, e, r) {
	if (e && r) return { id: e, type: r };
	if (!e && r) return { id: nt(), type: r };
	if (e && !r) {
		const n = await Te(t.resolveTypeForDocument(e));
		return { id: e, type: n };
	}
	throw new G({
		message: 'Neither document `id` or `type` was provided when trying to resolve intent.'
	});
}
const Kt = {},
	Ft = S.memo(function () {
		const t = $.c(7),
			{ navigate: e } = fe(),
			r = ye(Gt),
			{ rootPaneNode: n, structureContext: o } = oe(),
			a = We(),
			[i, s] = S.useState(null);
		if (i) throw i;
		let l, u;
		return (
			t[0] !== a || t[1] !== r || t[2] !== e || t[3] !== n || t[4] !== o
				? ((l = () => {
						if (r) {
							const { intent: c, params: d, payload: x } = r;
							let I;
							return (
								(I = !1),
								(async function () {
									const { id: f, type: m } = await Ht(
										a,
										typeof d.id == 'string' ? d.id : void 0,
										typeof d.type == 'string' ? d.type : void 0
									);
									if (I) return;
									const P = await Ct({
										intent: c,
										params: { ...d, id: f, type: m },
										payload: x,
										rootPaneNode: n,
										structureContext: o
									});
									I || e({ panes: P }, { replace: !0 });
								})().catch(s),
								() => {
									I = !0;
								}
							);
						}
					}),
					(u = [a, r, e, n, o]),
					(t[0] = a),
					(t[1] = r),
					(t[2] = e),
					(t[3] = n),
					(t[4] = o),
					(t[5] = l),
					(t[6] = u))
				: ((l = t[5]), (u = t[6])),
			S.useEffect(l, u),
			null
		);
	});
function Gt(t) {
	const e = typeof t.intent == 'string' ? t.intent : void 0;
	return e ? { intent: e, params: xe(t.params) ? t.params : Kt, payload: t.payload } : void 0;
}
const Ut = Re.span`
  &:not(:last-child)::after {
    content: ' ➝ ';
    opacity: 0.5;
  }
`;
function Jt(t) {
	return t
		.replace(
			/\(\.\.\.\)\./g,
			`(...)
  .`
		)
		.replace(/__WEBPACK_IMPORTED_MODULE_\d+_+/g, '')
		.replace(/___default\./g, '.')
		.replace(new RegExp(` \\(https?:\\/\\/${window.location.host}`, 'g'), ' (');
}
function qt(t) {
	const e = $.c(37),
		{ error: r } = t;
	if (!(r instanceof G)) throw r;
	const { cause: n } = r,
		{ t: o } = re(se),
		a = (n == null ? void 0 : n.stack) || r.stack,
		i = a && !(n instanceof de) && !r.message.includes('Module build failed:');
	let s;
	e[0] !== n ? ((s = n instanceof de ? n.path : []), (e[0] = n), (e[1] = s)) : (s = e[1]);
	const l = s,
		u = (n instanceof de && n.helpId) || r.helpId,
		c = Qt;
	let d;
	e[2] !== o ? ((d = o('structure-error.header.text')), (e[2] = o), (e[3] = d)) : (d = e[3]);
	let x;
	e[4] !== d ? ((x = p.jsx(He, { as: 'h2', children: d })), (e[4] = d), (e[5] = x)) : (x = e[5]);
	let I;
	e[6] !== l || e[7] !== o
		? ((I =
				l.length > 0 &&
				p.jsxs(pe, {
					space: 2,
					children: [
						p.jsx(N, {
							size: 1,
							weight: 'medium',
							children: o('structure-error.structure-path.label')
						}),
						p.jsx(Pe, { children: l.slice(1).map(Yt) })
					]
				})),
			(e[6] = l),
			(e[7] = o),
			(e[8] = I))
		: (I = e[8]);
	let f;
	e[9] !== o ? ((f = o('structure-error.error.label')), (e[9] = o), (e[10] = f)) : (f = e[10]);
	let m;
	e[11] !== f
		? ((m = p.jsx(N, { size: 1, weight: 'medium', children: f })), (e[11] = f), (e[12] = m))
		: (m = e[12]);
	let P;
	e[13] !== r.message || e[14] !== i || e[15] !== a
		? ((P = i ? Jt(a) : r.message), (e[13] = r.message), (e[14] = i), (e[15] = a), (e[16] = P))
		: (P = e[16]);
	let g;
	e[17] !== P ? ((g = p.jsx(Pe, { children: P })), (e[17] = P), (e[18] = g)) : (g = e[18]);
	let h;
	e[19] !== m || e[20] !== g
		? ((h = p.jsxs(pe, { marginTop: 4, space: 2, children: [m, g] })),
			(e[19] = m),
			(e[20] = g),
			(e[21] = h))
		: (h = e[21]);
	let y;
	e[22] !== u || e[23] !== o
		? ((y =
				u &&
				p.jsx(ne, {
					marginTop: 4,
					children: p.jsx(N, {
						children: p.jsx('a', {
							href: Ee(u),
							rel: 'noopener noreferrer',
							target: '_blank',
							children: o('structure-error.docs-link.text')
						})
					})
				})),
			(e[22] = u),
			(e[23] = o),
			(e[24] = y))
		: (y = e[24]);
	let w;
	e[25] !== o
		? ((w = o('structure-error.reload-button.text')), (e[25] = o), (e[26] = w))
		: (w = e[26]);
	let _;
	e[27] !== w
		? ((_ = p.jsx(ne, {
				marginTop: 4,
				children: p.jsx(Ke, { text: w, icon: Fe, tone: 'primary', onClick: c })
			})),
			(e[27] = w),
			(e[28] = _))
		: (_ = e[28]);
	let b;
	e[29] !== y || e[30] !== _ || e[31] !== I || e[32] !== h
		? ((b = p.jsxs(ae, {
				marginTop: 4,
				padding: 4,
				radius: 2,
				overflow: 'auto',
				shadow: 1,
				tone: 'inherit',
				children: [I, h, y, _]
			})),
			(e[29] = y),
			(e[30] = _),
			(e[31] = I),
			(e[32] = h),
			(e[33] = b))
		: (b = e[33]);
	let R;
	return (
		e[34] !== b || e[35] !== x
			? ((R = p.jsx(ae, {
					height: 'fill',
					overflow: 'auto',
					padding: 4,
					sizing: 'border',
					tone: 'critical',
					children: p.jsxs($e, { children: [x, b] })
				})),
				(e[34] = b),
				(e[35] = x),
				(e[36] = R))
			: (R = e[36]),
		R
	);
}
function Yt(t, e) {
	return p.jsx(Ut, { children: t }, `${t}-${e}`);
}
function Qt() {
	window.location.reload();
}
function Xt(t) {
	const e = $.c(14),
		{ isSelected: r, pane: n, paneKey: o } = t;
	let a;
	e[0] !== n ? ((a = (xe(n) && n.type) || null), (e[0] = n), (e[1] = a)) : (a = e[1]);
	const i = a,
		{ t: s } = re(se);
	let l;
	e[2] !== s ? ((l = s('panes.unknown-pane-type.title')), (e[2] = s), (e[3] = l)) : (l = e[3]);
	let u;
	e[4] !== l ? ((u = p.jsx(mt, { title: l })), (e[4] = l), (e[5] = u)) : (u = e[5]);
	let c;
	e[6] !== s || e[7] !== i
		? ((c = p.jsx(ht, {
				children: p.jsx(ne, {
					padding: 4,
					children:
						typeof i == 'string'
							? p.jsx(N, {
									as: 'p',
									muted: !0,
									children: p.jsx(_e, {
										t: s,
										i18nKey: 'panes.unknown-pane-type.unknown-type.text',
										values: { type: i }
									})
								})
							: p.jsx(N, {
									as: 'p',
									muted: !0,
									children: p.jsx(_e, {
										t: s,
										i18nKey: 'panes.unknown-pane-type.missing-type.text'
									})
								})
				})
			})),
			(e[6] = s),
			(e[7] = i),
			(e[8] = c))
		: (c = e[8]);
	let d;
	return (
		e[9] !== r || e[10] !== o || e[11] !== u || e[12] !== c
			? ((d = p.jsxs(Xe, { id: o, selected: r, children: [u, c] })),
				(e[9] = r),
				(e[10] = o),
				(e[11] = u),
				(e[12] = c),
				(e[13] = d))
			: (d = e[13]),
		d
	);
}
const Zt = {
		component: S.lazy(() => Z(() => import('./index-G5Z-MTND.js'), __vite__mapDeps([0, 1, 2]))),
		document: S.lazy(() =>
			Z(() => import('./sanity-BGUQwGSa.js').then((t) => t.b2), __vite__mapDeps([1, 2])).then(
				function (t) {
					return t.pane;
				}
			)
		),
		documentList: S.lazy(() =>
			Z(() => import('./sanity-BGUQwGSa.js').then((t) => t.b2), __vite__mapDeps([1, 2])).then(
				function (t) {
					return t.pane$1;
				}
			)
		),
		list: S.lazy(() => Z(() => import('./index2-BXtnjfOB.js'), __vite__mapDeps([3, 1, 2])))
	},
	en = S.memo(
		function (t) {
			const e = $.c(23),
				{
					active: r,
					childItemId: n,
					groupIndex: o,
					index: a,
					itemId: i,
					pane: s,
					paneKey: l,
					params: u,
					payload: c,
					path: d,
					selected: x,
					siblingIndex: I
				} = t,
				f = Zt[s.type] || Xt;
			let m;
			e[0] !== l || e[1] !== d || e[2] !== x
				? ((m = p.jsx(ge, { paneKey: l, path: d, selected: x })),
					(e[0] = l),
					(e[1] = d),
					(e[2] = x),
					(e[3] = m))
				: (m = e[3]);
			const P = n || '';
			let g;
			e[4] !== f ||
			e[5] !== r ||
			e[6] !== a ||
			e[7] !== i ||
			e[8] !== s ||
			e[9] !== l ||
			e[10] !== x ||
			e[11] !== P
				? ((g = p.jsx(f, {
						childItemId: P,
						index: a,
						itemId: i,
						isActive: r,
						isSelected: x,
						paneKey: l,
						pane: s
					})),
					(e[4] = f),
					(e[5] = r),
					(e[6] = a),
					(e[7] = i),
					(e[8] = s),
					(e[9] = l),
					(e[10] = x),
					(e[11] = P),
					(e[12] = g))
				: (g = e[12]);
			let h;
			e[13] !== m || e[14] !== g
				? ((h = p.jsx(S.Suspense, { fallback: m, children: g })),
					(e[13] = m),
					(e[14] = g),
					(e[15] = h))
				: (h = e[15]);
			let y;
			return (
				e[16] !== o || e[17] !== a || e[18] !== u || e[19] !== c || e[20] !== I || e[21] !== h
					? ((y = p.jsx(St, {
							flatIndex: a,
							index: o,
							params: u,
							payload: c,
							siblingIndex: I,
							children: h
						})),
						(e[16] = o),
						(e[17] = a),
						(e[18] = u),
						(e[19] = c),
						(e[20] = I),
						(e[21] = h),
						(e[22] = y))
					: (y = e[22]),
				y
			);
		},
		({ params: t = {}, payload: e = null, ...r }, { params: n = {}, payload: o = null, ...a }) => {
			if (!me(t, n) || !me(e, o)) return !1;
			const i = new Set([...Object.keys(r), ...Object.keys(a)]);
			for (const s of i) if (r[s] !== a[s]) return !1;
			return !0;
		}
	);
function tn() {
	const t = $.c(17),
		{ t: e } = re(se);
	let r;
	t[0] === Symbol.for('react.memo_cache_sentinel')
		? ((r = p.jsx(ne, {
				children: p.jsx(N, { size: 1, children: p.jsx(ft, {}) })
			})),
			(t[0] = r))
		: (r = t[0]);
	let n;
	t[1] !== e ? ((n = e('no-document-types-screen.title')), (t[1] = e), (t[2] = n)) : (n = t[2]);
	let o;
	t[3] !== n
		? ((o = p.jsx(N, { as: 'h1', size: 1, weight: 'medium', children: n })), (t[3] = n), (t[4] = o))
		: (o = t[4]);
	let a;
	t[5] !== e ? ((a = e('no-document-types-screen.subtitle')), (t[5] = e), (t[6] = a)) : (a = t[6]);
	let i;
	t[7] !== a
		? ((i = p.jsx(N, { as: 'p', muted: !0, size: 1, children: a })), (t[7] = a), (t[8] = i))
		: (i = t[8]);
	let s;
	t[9] !== e
		? ((s = e('no-document-types-screen.link-text')), (t[9] = e), (t[10] = s))
		: (s = t[10]);
	let l;
	t[11] !== s
		? ((l = p.jsx(N, {
				as: 'p',
				muted: !0,
				size: 1,
				children: p.jsx('a', {
					href: 'https://www.sanity.io/docs/create-a-schema-and-configure-sanity-studio',
					target: '_blank',
					rel: 'noreferrer',
					children: s
				})
			})),
			(t[11] = s),
			(t[12] = l))
		: (l = t[12]);
	let u;
	return (
		t[13] !== o || t[14] !== i || t[15] !== l
			? ((u = p.jsx(ae, {
					height: 'fill',
					children: p.jsx(we, {
						align: 'center',
						height: 'fill',
						justify: 'center',
						padding: 4,
						sizing: 'border',
						children: p.jsx($e, {
							width: 0,
							children: p.jsx(ae, {
								padding: 4,
								radius: 2,
								shadow: 1,
								tone: 'caution',
								children: p.jsxs(we, {
									children: [
										r,
										p.jsxs(pe, {
											flex: 1,
											marginLeft: 3,
											space: 3,
											children: [o, i, l]
										})
									]
								})
							})
						})
					})
				})),
				(t[13] = o),
				(t[14] = i),
				(t[15] = l),
				(t[16] = u))
			: (u = t[16]),
		u
	);
}
const nn = (t) => {
		const e = $.c(7),
			{ documentId: r, documentType: n } = t,
			{ selectedReleaseId: o } = rt(),
			a = st(r, n, 'default', o),
			i = ke(),
			{ t: s } = re(se),
			l = !(a != null && a.published) && !(a != null && a.draft),
			u =
				(a == null ? void 0 : a.version) ||
				(a == null ? void 0 : a.draft) ||
				(a == null ? void 0 : a.published),
			c = i.get(n),
			{ value: d, isLoading: x } = ot({ enabled: !0, schemaType: c, value: u }),
			I = l
				? s('browser-document-title.new-document', {
						schemaType: (c == null ? void 0 : c.title) || (c == null ? void 0 : c.name)
					})
				: (d == null ? void 0 : d.title) || s('browser-document-title.untitled-document'),
			f = a.ready && !x,
			m = ze(I);
		let P;
		e[0] !== m || e[1] !== f
			? ((P = () => {
					f && (document.title = m);
				}),
				(e[0] = m),
				(e[1] = f),
				(e[2] = P))
			: (P = e[2]);
		let g;
		return (
			e[3] !== I || e[4] !== m || e[5] !== f
				? ((g = [I, f, m]), (e[3] = I), (e[4] = m), (e[5] = f), (e[6] = g))
				: (g = e[6]),
			S.useEffect(P, g),
			null
		);
	},
	ue = (t) => {
		const e = $.c(5),
			{ title: r } = t,
			n = ze(r);
		let o;
		e[0] !== n
			? ((o = () => {
					document.title = n;
				}),
				(e[0] = n),
				(e[1] = o))
			: (o = e[1]);
		let a;
		return (
			e[2] !== n || e[3] !== r ? ((a = [n, r]), (e[2] = n), (e[3] = r), (e[4] = a)) : (a = e[4]),
			S.useEffect(o, a),
			null
		);
	},
	an = (t) => {
		const e = $.c(8),
			{ resolvedPanes: r } = t;
		if (!(r != null && r.length)) return null;
		const n = r[r.length - 1];
		if (on(n)) {
			let i;
			return (
				e[0] === Symbol.for('react.memo_cache_sentinel')
					? ((i = p.jsx(ue, {})), (e[0] = i))
					: (i = e[0]),
				i
			);
		}
		if (sn(n)) {
			if (n != null && n.title) {
				let s;
				return (
					e[1] !== n.title
						? ((s = p.jsx(ue, { title: n.title })), (e[1] = n.title), (e[2] = s))
						: (s = e[2]),
					s
				);
			}
			let i;
			return (
				e[3] !== n.options.id || e[4] !== n.options.type
					? ((i = p.jsx(nn, {
							documentId: n.options.id,
							documentType: n.options.type
						})),
						(e[3] = n.options.id),
						(e[4] = n.options.type),
						(e[5] = i))
					: (i = e[5]),
				i
			);
		}
		const o = n == null ? void 0 : n.title;
		let a;
		return e[6] !== o ? ((a = p.jsx(ue, { title: o })), (e[6] = o), (e[7] = a)) : (a = e[7]), a;
	};
function ze(t) {
	const e = $.c(3),
		r = oe().structureContext.title;
	let n;
	return (
		e[0] !== t || e[1] !== r
			? ((n = [t, r].filter(rn)), (e[0] = t), (e[1] = r), (e[2] = n))
			: (n = e[2]),
		n.join(' | ')
	);
}
function rn(t) {
	return t;
}
function sn(t) {
	return t !== q && t.type === 'document';
}
function on(t) {
	return t === q;
}
const ln = Re(yt)`
  min-height: 100%;
  min-width: 320px;
`,
	cn = Ge('mod+s'),
	dn = S.memo(function (t) {
		var J;
		const e = $.c(31),
			{ onPaneChange: r } = t,
			{ push: n } = Ue(),
			o = ke(),
			{ layoutCollapsed: a, setLayoutCollapsed: i } = oe(),
			{ paneDataItems: s, resolvedPanes: l } = At(),
			u = ye(un),
			{ sanity: c } = Je(),
			{ media: d } = c,
			[x, I] = S.useState(null);
		let f;
		e[0] !== i ? ((f = () => i(!0)), (e[0] = i), (e[1] = f)) : (f = e[1]);
		const m = f;
		let P;
		e[2] !== i ? ((P = () => i(!1)), (e[2] = i), (e[3] = P)) : (P = e[3]);
		const g = P;
		let h, y;
		e[4] !== r || e[5] !== l
			? ((h = () => {
					l.length && r(l);
				}),
				(y = [r, l]),
				(e[4] = r),
				(e[5] = l),
				(e[6] = h),
				(e[7] = y))
			: ((h = e[6]), (y = e[7])),
			S.useEffect(h, y);
		let w, _;
		if (
			(e[8] !== n
				? ((w = () => {
						const D = (A) => {
							cn(A) &&
								(A.preventDefault(),
								n({
									closable: !0,
									id: 'auto-save-message',
									status: 'info',
									title: 'Your work is automatically saved!',
									duration: 4e3
								}));
						};
						return (
							window.addEventListener('keydown', D), () => window.removeEventListener('keydown', D)
						);
					}),
					(_ = [n]),
					(e[8] = n),
					(e[9] = w),
					(e[10] = _))
				: ((w = e[9]), (_ = e[10])),
			S.useEffect(w, _),
			!((J = o._original) != null && J.types.some(qe)))
		) {
			let D;
			return (
				e[11] === Symbol.for('react.memo_cache_sentinel')
					? ((D = p.jsx(tn, {})), (e[11] = D))
					: (D = e[11]),
				D
			);
		}
		const b = x || null,
			R = a ? void 0 : 'fill',
			U = d[1];
		let T;
		e[12] !== s ? ((T = s.map(pn)), (e[12] = s), (e[13] = T)) : (T = e[13]);
		let L;
		e[14] !== u || e[15] !== s.length
			? ((L = s.length <= 1 && u && p.jsx(ge, { paneKey: 'intent-resolver' })),
				(e[14] = u),
				(e[15] = s.length),
				(e[16] = L))
			: (L = e[16]);
		let C;
		e[17] !== m || e[18] !== g || e[19] !== d[1] || e[20] !== T || e[21] !== L || e[22] !== R
			? ((C = p.jsxs(ln, {
					flex: 1,
					height: R,
					minWidth: U,
					onCollapse: m,
					onExpand: g,
					children: [T, L]
				})),
				(e[17] = m),
				(e[18] = g),
				(e[19] = d[1]),
				(e[20] = T),
				(e[21] = L),
				(e[22] = R),
				(e[23] = C))
			: (C = e[23]);
		let k;
		e[24] !== l ? ((k = p.jsx(an, { resolvedPanes: l })), (e[24] = l), (e[25] = k)) : (k = e[25]);
		let z;
		e[26] === Symbol.for('react.memo_cache_sentinel')
			? ((z = p.jsx('div', { 'data-portal': '', ref: I })), (e[26] = z))
			: (z = e[26]);
		let O;
		return (
			e[27] !== C || e[28] !== k || e[29] !== b
				? ((O = p.jsxs(Ye, { element: b, children: [C, k, z] })),
					(e[27] = C),
					(e[28] = k),
					(e[29] = b),
					(e[30] = O))
				: (O = e[30]),
			O
		);
	});
function un(t) {
	return typeof t.intent == 'string';
}
function pn(t) {
	const {
		active: e,
		childItemId: r,
		groupIndex: n,
		itemId: o,
		key: a,
		pane: i,
		index: s,
		params: l,
		path: u,
		payload: c,
		siblingIndex: d,
		selected: x
	} = t;
	return p.jsx(
		S.Fragment,
		{
			children:
				i === q
					? p.jsx(ge, { paneKey: a, path: u, selected: x })
					: p.jsx(en, {
							active: e,
							groupIndex: n,
							index: s,
							pane: i,
							childItemId: r,
							itemId: o,
							paneKey: a,
							params: l,
							payload: c,
							path: u,
							selected: x,
							siblingIndex: d
						})
		},
		`${i === q ? 'loading' : i.type}-${s}`
	);
}
function yn(t) {
	const e = $.c(14),
		{ tool: r } = t,
		{ options: n } = r,
		{ unstable_sources: o } = Ae(),
		[a] = o;
	let i;
	e[0] !== n ? ((i = n || {}), (e[0] = n), (e[1] = i)) : (i = e[1]);
	const { source: s, defaultDocumentNode: l, structure: u } = i;
	let c;
	e[2] === Symbol.for('react.memo_cache_sentinel') ? ((c = []), (e[2] = c)) : (c = e[2]),
		S.useEffect(mn, c);
	let d;
	e[3] === Symbol.for('react.memo_cache_sentinel')
		? ((d = { error: null }), (e[3] = d))
		: (d = e[3]);
	const [x, I] = S.useState(d),
		{ error: f } = x;
	if (f) {
		let w;
		return e[4] !== f ? ((w = p.jsx(qt, { error: f })), (e[4] = f), (e[5] = w)) : (w = e[5]), w;
	}
	const m = s || a.name;
	let P, g;
	e[6] === Symbol.for('react.memo_cache_sentinel')
		? ((P = p.jsx(dn, { onPaneChange: he })), (g = p.jsx(Ft, {})), (e[6] = P), (e[7] = g))
		: ((P = e[6]), (g = e[7]));
	let h;
	e[8] !== l || e[9] !== u
		? ((h = p.jsxs(Qe, {
				defaultDocumentNode: l,
				structure: u,
				children: [P, g]
			})),
			(e[8] = l),
			(e[9] = u),
			(e[10] = h))
		: (h = e[10]);
	let y;
	return (
		e[11] !== m || e[12] !== h
			? ((y = p.jsx(Ve, {
					onCatch: I,
					children: p.jsx(Be, { name: m, children: h })
				})),
				(e[11] = m),
				(e[12] = h),
				(e[13] = y))
			: (y = e[13]),
		y
	);
}
function mn() {
	return he([]), hn;
}
function hn() {
	return he([]);
}
export { yn as default };
