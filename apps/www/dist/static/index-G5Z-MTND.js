import {
	a as I,
	r as E,
	aV as G,
	aW as R,
	j as u,
	ao as T,
	p as V,
	ab as g,
	ae as w,
	aX as A,
	aq as L,
	aH as W,
	aY as q,
	o as K,
	aZ as X
} from './sanity-BGUQwGSa.js';
const Y = V(K)`
  position: relative;
`;
function Z(d) {
	const e = I.c(3),
		{ children: a } = d,
		{ collapsed: s } = q();
	let t;
	return (
		e[0] !== a || e[1] !== s
			? ((t = u.jsx(Y, {
					hidden: s,
					height: 'fill',
					overflow: 'auto',
					children: a
				})),
				(e[0] = a),
				(e[1] = s),
				(e[2] = t))
			: (t = e[2]),
		t
	);
}
function _(d) {
	const e = I.c(11),
		{ actionHandlers: a, index: s, menuItems: t, menuItemGroups: o, title: n } = d,
		{ features: c } = g();
	if (!(t != null && t.length) && !n) return null;
	let l;
	e[0] !== a || e[1] !== o || e[2] !== t
		? ((l = u.jsx(X, { menuItems: t, menuItemGroups: o, actionHandlers: a })),
			(e[0] = a),
			(e[1] = o),
			(e[2] = t),
			(e[3] = l))
		: (l = e[3]);
	let r;
	e[4] !== c.backButton || e[5] !== s
		? ((r =
				c.backButton &&
				s > 0 &&
				u.jsx(w, {
					as: L,
					'data-as': 'a',
					icon: A,
					mode: 'bleed',
					tooltipProps: { content: 'Back' }
				})),
			(e[4] = c.backButton),
			(e[5] = s),
			(e[6] = r))
		: (r = e[6]);
	let i;
	return (
		e[7] !== l || e[8] !== r || e[9] !== n
			? ((i = u.jsx(W, { actions: l, backButton: r, title: n })),
				(e[7] = l),
				(e[8] = r),
				(e[9] = n),
				(e[10] = i))
			: (i = e[10]),
		i
	);
}
function F(d) {
	const e = I.c(37);
	let a, s, t, o;
	e[0] !== d
		? (({ index: a, pane: s, paneKey: t, ...o } = d),
			(e[0] = d),
			(e[1] = a),
			(e[2] = s),
			(e[3] = t),
			(e[4] = o))
		: ((a = e[1]), (s = e[2]), (t = e[3]), (o = e[4]));
	let n, c, l, r, i;
	if (e[5] !== s) {
		const { child: S, component: y, menuItems: U, menuItemGroups: $, type: z, ...v } = s;
		(c = S),
			(n = y),
			(r = U),
			(l = $),
			(i = v),
			(e[5] = s),
			(e[6] = n),
			(e[7] = c),
			(e[8] = l),
			(e[9] = r),
			(e[10] = i);
	} else (n = e[6]), (c = e[7]), (l = e[8]), (r = e[9]), (i = e[10]);
	const [k, C] = E.useState(null),
		{ title: b } = G(s),
		B = b === void 0 ? '' : b;
	let p, m;
	e[11] !== i || e[12] !== o
		? (({ key: m, ...p } = { ...o, ...i }), (e[11] = i), (e[12] = o), (e[13] = p), (e[14] = m))
		: ((p = e[13]), (m = e[14]));
	const H = k == null ? void 0 : k.actionHandlers;
	let x;
	e[15] !== a || e[16] !== l || e[17] !== r || e[18] !== H || e[19] !== B
		? ((x = u.jsx(_, {
				actionHandlers: H,
				index: a,
				menuItems: r,
				menuItemGroups: l,
				title: B
			})),
			(e[15] = a),
			(e[16] = l),
			(e[17] = r),
			(e[18] = H),
			(e[19] = B),
			(e[20] = x))
		: (x = e[20]);
	let f;
	e[21] !== n || e[22] !== c || e[23] !== p || e[24] !== m || e[25] !== t
		? ((f = R.isValidElementType(n) && u.jsx(n, { ...p, ref: C, child: c, paneKey: t }, m)),
			(e[21] = n),
			(e[22] = c),
			(e[23] = p),
			(e[24] = m),
			(e[25] = t),
			(e[26] = f))
		: (f = e[26]);
	let P;
	e[27] !== n ? ((P = E.isValidElement(n) && n), (e[27] = n), (e[28] = P)) : (P = e[28]);
	let h;
	e[29] !== f || e[30] !== P
		? ((h = u.jsxs(Z, { children: [f, P] })), (e[29] = f), (e[30] = P), (e[31] = h))
		: (h = e[31]);
	let j;
	return (
		e[32] !== t || e[33] !== o.isSelected || e[34] !== x || e[35] !== h
			? ((j = u.jsxs(T, {
					id: t,
					minWidth: 320,
					selected: o.isSelected,
					children: [x, h]
				})),
				(e[32] = t),
				(e[33] = o.isSelected),
				(e[34] = x),
				(e[35] = h),
				(e[36] = j))
			: (j = e[36]),
		j
	);
}
export { F as default };
