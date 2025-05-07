import {
	a as L,
	aV as T,
	j as x,
	ao as A,
	p as S,
	a_ as $,
	ab as H,
	aY as C,
	ae as D,
	aX as G,
	aq as W,
	aH as E,
	ap as F,
	a$ as R,
	b0 as X,
	aI as q,
	o as K,
	b1 as M,
	aZ as U
} from './sanity-BGUQwGSa.js';
const V = S.hr`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`;
function Y(y) {
	const t = L.c(20),
		{ childItemId: o, items: e, isActive: d, layout: u, showIcons: i, title: r } = y,
		{ collapsed: b } = F();
	let c;
	t[0] !== e ? ((c = e == null ? void 0 : e.filter(Z)), (t[0] = e), (t[1] = c)) : (c = t[1]);
	const n = R(c);
	let s;
	t[2] !== e
		? ((s = (a) => {
				var j;
				return (
					((j = e == null ? void 0 : e.find((B, g) => g === a)) == null ? void 0 : j.type) ===
					'divider'
				);
			}),
			(t[2] = e),
			(t[3] = s))
		: (s = t[3]);
	const l = s;
	let v;
	t[4] !== i
		? ((v = (a) => {
				var B;
				const j = (B = a.displayOptions) == null ? void 0 : B.showIcon;
				return typeof j < 'u' ? j !== !1 : i !== !1;
			}),
			(t[4] = i),
			(t[5] = v))
		: (v = t[5]);
	const I = v;
	let p;
	t[6] !== o || t[7] !== n || t[8] !== d || t[9] !== u || t[10] !== I
		? ((p = (a, j) => {
				const { virtualIndex: B } = j;
				if (a.type === 'divider')
					return x.jsx(K, { marginBottom: 1, children: x.jsx(V, {}) }, `divider-${B}`);
				const g = !d && o === a.id,
					w = d && o === a.id,
					k =
						a._id && a.schemaType
							? { _id: a._id, _type: a.schemaType.name, title: a.title }
							: void 0;
				return x.jsx(
					M,
					{
						icon: I(a) ? a.icon : !1,
						id: a.id,
						layout: u,
						marginBottom: 1,
						pressed: g,
						schemaType: a.schemaType,
						selected: w,
						title: n(a).title,
						value: k
					},
					a.id
				);
			}),
			(t[6] = o),
			(t[7] = n),
			(t[8] = d),
			(t[9] = u),
			(t[10] = I),
			(t[11] = p))
		: (p = t[11]);
	const m = p,
		f = b ? 'hidden' : 'auto';
	let h;
	t[12] !== l || t[13] !== e || t[14] !== m || t[15] !== r
		? ((h =
				e &&
				e.length > 0 &&
				x.jsx(X, {
					activeItemDataAttr: 'data-hovered',
					ariaLabel: r,
					canReceiveFocus: !0,
					getItemDisabled: l,
					itemHeight: 51,
					items: e,
					onlyShowSelectionWhenActive: !0,
					paddingBottom: 1,
					paddingX: 3,
					renderItem: m,
					wrapAround: !1
				})),
			(t[12] = l),
			(t[13] = e),
			(t[14] = m),
			(t[15] = r),
			(t[16] = h))
		: (h = t[16]);
	let P;
	return (
		t[17] !== f || t[18] !== h
			? ((P = x.jsx(q, { overflow: f, children: h })), (t[17] = f), (t[18] = h), (t[19] = P))
			: (P = t[19]),
		P
	);
}
function Z(y) {
	return y.type !== 'divider';
}
const z = (y) => {
	const t = L.c(11),
		{ index: o, menuItems: e, menuItemGroups: d, title: u } = y,
		{ features: i } = H(),
		{ collapsed: r, isLast: b } = C(),
		c = b && !r ? -1 : 0;
	let n;
	t[0] !== d || t[1] !== e
		? ((n = x.jsx(U, { menuItems: e, menuItemGroups: d })), (t[0] = d), (t[1] = e), (t[2] = n))
		: (n = t[2]);
	let s;
	t[3] !== i.backButton || t[4] !== o
		? ((s =
				i.backButton &&
				o > 0 &&
				x.jsx(D, {
					as: W,
					'data-as': 'a',
					icon: G,
					mode: 'bleed',
					tooltipProps: { content: 'Back' }
				})),
			(t[3] = i.backButton),
			(t[4] = o),
			(t[5] = s))
		: (s = t[5]);
	let l;
	return (
		t[6] !== n || t[7] !== s || t[8] !== c || t[9] !== u
			? ((l = x.jsx(E, { actions: n, backButton: s, tabIndex: c, title: u })),
				(t[6] = n),
				(t[7] = s),
				(t[8] = c),
				(t[9] = u),
				(t[10] = l))
			: (l = t[10]),
		l
	);
};
function N(y) {
	const t = L.c(21),
		{ childItemId: o, index: e, isActive: d, isSelected: u, pane: i, paneKey: r } = y,
		{ defaultLayout: b, displayOptions: c, items: n, menuItems: s, menuItemGroups: l } = i,
		v = (c == null ? void 0 : c.showIcons) !== !1,
		{ title: I } = T(i);
	let p;
	t[0] !== i.source ? ((p = $), (t[0] = i.source), (t[1] = p)) : (p = t[1]);
	let m;
	t[2] !== e || t[3] !== l || t[4] !== s || t[5] !== I
		? ((m = x.jsx(z, { index: e, menuItems: s, menuItemGroups: l, title: I })),
			(t[2] = e),
			(t[3] = l),
			(t[4] = s),
			(t[5] = I),
			(t[6] = m))
		: (m = t[6]);
	let f;
	t[7] !== o || t[8] !== b || t[9] !== d || t[10] !== n || t[11] !== r || t[12] !== v || t[13] !== I
		? ((f = x.jsx(
				Y,
				{
					childItemId: o,
					isActive: d,
					items: n,
					layout: b,
					showIcons: v,
					title: I
				},
				r
			)),
			(t[7] = o),
			(t[8] = b),
			(t[9] = d),
			(t[10] = n),
			(t[11] = r),
			(t[12] = v),
			(t[13] = I),
			(t[14] = f))
		: (f = t[14]);
	let h;
	return (
		t[15] !== u || t[16] !== r || t[17] !== p || t[18] !== m || t[19] !== f
			? ((h = x.jsxs(A, {
					currentMaxWidth: 350,
					'data-testid': 'structure-tool-list-pane',
					'data-ui': 'ListPane',
					id: r,
					maxWidth: 640,
					minWidth: 320,
					selected: u,
					children: [p, m, f]
				})),
				(t[15] = u),
				(t[16] = r),
				(t[17] = p),
				(t[18] = m),
				(t[19] = f),
				(t[20] = h))
			: (h = t[20]),
		h
	);
}
export { N as default };
