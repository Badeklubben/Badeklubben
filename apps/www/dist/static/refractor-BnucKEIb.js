import { a as d, R as u, j as i } from './sanity-BGUQwGSa.js';
function f(c) {
	const e = d.c(13),
		{ language: g, value: a } = c,
		t = typeof g == 'string' ? g : void 0;
	let l;
	e[0] !== t ? ((l = t ? u.hasLanguage(t) : !1), (e[0] = t), (e[1] = l)) : (l = e[1]);
	const r = l;
	let s;
	e[2] !== t || e[3] !== r || e[4] !== a
		? ((s = !(t && r) && i.jsx('code', { children: a })),
			(e[2] = t),
			(e[3] = r),
			(e[4] = a),
			(e[5] = s))
		: (s = e[5]);
	let n;
	e[6] !== t || e[7] !== r || e[8] !== a
		? ((n = t && r && i.jsx(u, { inline: !0, language: t, value: String(a) })),
			(e[6] = t),
			(e[7] = r),
			(e[8] = a),
			(e[9] = n))
		: (n = e[9]);
	let o;
	return (
		e[10] !== s || e[11] !== n
			? ((o = i.jsxs(i.Fragment, { children: [s, n] })), (e[10] = s), (e[11] = n), (e[12] = o))
			: (o = e[12]),
		o
	);
}
f.displayName = 'LazyRefractor';
export { f as default };
