import { c as H } from './sanity-BGUQwGSa.js';
const D = /_key\s*==\s*['"](.*)['"]/;
function K(t) {
	return typeof t == 'string' ? D.test(t.trim()) : typeof t == 'object' && '_key' in t;
}
function L(t) {
	if (!Array.isArray(t)) throw new Error('Path is not an array');
	return t.reduce((e, r, i) => {
		const n = typeof r;
		if (n === 'number') return `${e}[${r}]`;
		if (n === 'string') return `${e}${i === 0 ? '' : '.'}${r}`;
		if (K(r) && r._key) return `${e}[_key=="${r._key}"]`;
		if (Array.isArray(r)) {
			const [s, o] = r;
			return `${e}[${s}:${o}]`;
		}
		throw new Error(`Unsupported path segment \`${JSON.stringify(r)}\``);
	}, '');
}
const I = {
		'\f': '\\f',
		'\n': '\\n',
		'\r': '\\r',
		'	': '\\t',
		"'": "\\'",
		'\\': '\\\\'
	},
	A = {
		'\\f': '\f',
		'\\n': `
`,
		'\\r': '\r',
		'\\t': '	',
		"\\'": "'",
		'\\\\': '\\'
	};
function X(t) {
	return `$${t.map((e) => (typeof e == 'string' ? `['${e.replace(/[\f\n\r\t'\\]/g, (r) => I[r])}']` : typeof e == 'number' ? `[${e}]` : e._key !== '' ? `[?(@._key=='${e._key.replace(/['\\]/g, (r) => I[r])}')]` : `[${e._index}]`)).join('')}`;
}
function j(t) {
	const e = [],
		r = /\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;
	let i;
	for (; (i = r.exec(t)) !== null; ) {
		if (i[1] !== void 0) {
			const n = i[1].replace(/\\(\\|f|n|r|t|')/g, (s) => A[s]);
			e.push(n);
			continue;
		}
		if (i[2] !== void 0) {
			e.push(parseInt(i[2], 10));
			continue;
		}
		if (i[3] !== void 0) {
			const n = i[3].replace(/\\(\\')/g, (s) => A[s]);
			e.push({ _key: n, _index: -1 });
			continue;
		}
	}
	return e;
}
function C(t) {
	return t.map((e) => {
		if (typeof e == 'string' || typeof e == 'number') return e;
		if (e._key !== '') return { _key: e._key };
		if (e._index !== -1) return e._index;
		throw new Error(`invalid segment:${JSON.stringify(e)}`);
	});
}
function z(t) {
	return t.map((e) => {
		if (typeof e == 'string' || typeof e == 'number') return e;
		if (e._index !== -1) return e._index;
		throw new Error(`invalid segment:${JSON.stringify(e)}`);
	});
}
function B(t, e) {
	if (!(e != null && e.mappings)) return;
	const r = X(z(t));
	if (e.mappings[r] !== void 0) return { mapping: e.mappings[r], matchedPath: r, pathSuffix: '' };
	const i = Object.entries(e.mappings)
		.filter(([p]) => r.startsWith(p))
		.sort(([p], [d]) => d.length - p.length);
	if (i.length == 0) return;
	const [n, s] = i[0],
		o = r.substring(n.length);
	return { mapping: s, matchedPath: n, pathSuffix: o };
}
function Q(t) {
	return t !== null && Array.isArray(t);
}
function x(t) {
	return typeof t == 'object' && t !== null;
}
function $(t, e, r = []) {
	if (Q(t))
		return t.map((i, n) => {
			if (x(i)) {
				const s = i._key;
				if (typeof s == 'string') return $(i, e, r.concat({ _key: s, _index: n }));
			}
			return $(i, e, r.concat(n));
		});
	if (x(t)) {
		if (t._type === 'block' || t._type === 'span') {
			const i = { ...t };
			return (
				t._type === 'block'
					? (i.children = $(t.children, e, r.concat('children')))
					: t._type === 'span' && (i.text = $(t.text, e, r.concat('text'))),
				i
			);
		}
		return Object.fromEntries(Object.entries(t).map(([i, n]) => [i, $(n, e, r.concat(i))]));
	}
	return e(t, r);
}
function Y(t, e, r) {
	return $(t, (i, n) => {
		if (typeof i != 'string') return i;
		const s = B(n, e);
		if (!s) return i;
		const { mapping: o, matchedPath: p } = s;
		if (o.type !== 'value' || o.source.type !== 'documentValue') return i;
		const d = e.documents[o.source.document],
			u = e.paths[o.source.path],
			h = j(p),
			y = j(u).concat(n.slice(h.length));
		return r({ sourcePath: y, sourceDocument: d, resultPath: n, value: i });
	});
}
const Z = 'drafts',
	v = 'versions',
	E = '.',
	N = `${Z}${E}`,
	g = `${v}${E}`;
function W(t) {
	return t.startsWith(N);
}
function m(t) {
	return t.startsWith(g);
}
function tt(t) {
	return !W(t) && !m(t);
}
function et(t) {
	if (!m(t)) return;
	const [e, r, ...i] = t.split(E);
	return r;
}
function nt(t) {
	return m(t) ? t.split(E).slice(2).join(E) : W(t) ? t.slice(N.length) : t;
}
function rt(t) {
	const {
		baseUrl: e,
		workspace: r = 'default',
		tool: i = 'default',
		id: n,
		type: s,
		path: o,
		projectId: p,
		dataset: d
	} = t;
	if (!e) throw new Error('baseUrl is required');
	if (!o) throw new Error('path is required');
	if (!n) throw new Error('id is required');
	if (e !== '/' && e.endsWith('/')) throw new Error('baseUrl must not end with a slash');
	const u = r === 'default' ? void 0 : r,
		h = i === 'default' ? void 0 : i,
		y = nt(n),
		k = Array.isArray(o) ? L(C(o)) : o,
		f = new URLSearchParams({ baseUrl: e, id: y, type: s, path: k });
	if (
		(u && f.set('workspace', u),
		h && f.set('tool', h),
		p && f.set('projectId', p),
		d && f.set('dataset', d),
		tt(n))
	)
		f.set('perspective', 'published');
	else if (m(n)) {
		const P = et(n);
		f.set('perspective', P);
	}
	const l = [e === '/' ? '' : e];
	u && l.push(u);
	const b = ['mode=presentation', `id=${y}`, `type=${s}`, `path=${encodeURIComponent(k)}`];
	return h && b.push(`tool=${h}`), l.push('intent', 'edit', `${b.join(';')}?${f}`), l.join('/');
}
function it(t) {
	let e = typeof t == 'string' ? t : t.baseUrl;
	return (
		e !== '/' && (e = e.replace(/\/$/, '')),
		typeof t == 'string' ? { baseUrl: e } : { ...t, baseUrl: e }
	);
}
const T = ({ sourcePath: t, resultPath: e, value: r }) => {
		if (st(r) || at(r)) return !1;
		const i = t.at(-1);
		return !(
			(t.at(-2) === 'slug' && i === 'current') ||
			(typeof i == 'string' && (i.startsWith('_') || i.endsWith('Id'))) ||
			t.some((n) => n === 'meta' || n === 'metadata' || n === 'openGraph' || n === 'seo') ||
			U(t) ||
			U(e) ||
			(typeof i == 'string' && ot.has(i))
		);
	},
	ot = new Set([
		'color',
		'colour',
		'currency',
		'email',
		'format',
		'gid',
		'hex',
		'href',
		'hsl',
		'hsla',
		'icon',
		'id',
		'index',
		'key',
		'language',
		'layout',
		'link',
		'linkAction',
		'locale',
		'lqip',
		'page',
		'path',
		'ref',
		'rgb',
		'rgba',
		'route',
		'secret',
		'slug',
		'status',
		'tag',
		'template',
		'theme',
		'type',
		'textTheme',
		'unit',
		'url',
		'username',
		'variant',
		'website'
	]);
function st(t) {
	return /^\d{4}-\d{2}-\d{2}/.test(t) ? !!Date.parse(t) : !1;
}
function at(t) {
	try {
		new URL(t, t.startsWith('/') ? 'https://acme.com' : void 0);
	} catch {
		return !1;
	}
	return !0;
}
function U(t) {
	return t.some((e) => typeof e == 'string' && e.match(/type/i) !== null);
}
const S = 20;
function ct(t, e, r) {
	var d, u, h, y, k, f, l, b, P;
	const { filter: i, logger: n, enabled: s } = r;
	if (!s) {
		const a = "config.enabled must be true, don't call this function otherwise";
		throw (
			((d = n == null ? void 0 : n.error) == null ||
				d.call(n, `[@sanity/client]: ${a}`, {
					result: t,
					resultSourceMap: e,
					config: r
				}),
			new TypeError(a))
		);
	}
	if (!e)
		return (
			(u = n == null ? void 0 : n.error) == null ||
				u.call(n, '[@sanity/client]: Missing Content Source Map from response body', {
					result: t,
					resultSourceMap: e,
					config: r
				}),
			t
		);
	if (!r.studioUrl) {
		const a = 'config.studioUrl must be defined';
		throw (
			((h = n == null ? void 0 : n.error) == null ||
				h.call(n, `[@sanity/client]: ${a}`, {
					result: t,
					resultSourceMap: e,
					config: r
				}),
			new TypeError(a))
		);
	}
	const o = { encoded: [], skipped: [] },
		p = Y(t, e, ({ sourcePath: a, sourceDocument: _, resultPath: w, value: c }) => {
			if (
				(typeof i == 'function'
					? i({
							sourcePath: a,
							resultPath: w,
							filterDefault: T,
							sourceDocument: _,
							value: c
						})
					: T({ sourcePath: a, resultPath: w, value: c })) === !1
			)
				return (
					n &&
						o.skipped.push({
							path: O(a),
							value: `${c.slice(0, S)}${c.length > S ? '...' : ''}`,
							length: c.length
						}),
					c
				);
			n &&
				o.encoded.push({
					path: O(a),
					value: `${c.slice(0, S)}${c.length > S ? '...' : ''}`,
					length: c.length
				});
			const {
				baseUrl: R,
				workspace: V,
				tool: M
			} = it(typeof r.studioUrl == 'function' ? r.studioUrl(_) : r.studioUrl);
			if (!R) return c;
			const { _id: q, _type: J, _projectId: F, _dataset: G } = _;
			return H(
				c,
				{
					origin: 'sanity.io',
					href: rt({
						baseUrl: R,
						workspace: V,
						tool: M,
						id: q,
						type: J,
						path: a,
						...(!r.omitCrossDatasetReferenceData && {
							dataset: G,
							projectId: F
						})
					})
				},
				!1
			);
		});
	if (n) {
		const a = o.skipped.length,
			_ = o.encoded.length;
		if (
			((a || _) &&
				((y = (n == null ? void 0 : n.groupCollapsed) || n.log) == null ||
					y('[@sanity/client]: Encoding source map into result'),
				(k = n.log) == null ||
					k.call(
						n,
						`[@sanity/client]: Paths encoded: ${o.encoded.length}, skipped: ${o.skipped.length}`
					)),
			o.encoded.length > 0 &&
				((f = n == null ? void 0 : n.log) == null ||
					f.call(n, '[@sanity/client]: Table of encoded paths'),
				(l = (n == null ? void 0 : n.table) || n.log) == null || l(o.encoded)),
			o.skipped.length > 0)
		) {
			const w = new Set();
			for (const { path: c } of o.skipped) w.add(c.replace(D, '0').replace(/\[\d+\]/g, '[]'));
			(b = n == null ? void 0 : n.log) == null ||
				b.call(n, '[@sanity/client]: List of skipped paths', [...w.values()]);
		}
		(a || _) && ((P = n == null ? void 0 : n.groupEnd) == null || P.call(n));
	}
	return p;
}
function O(t) {
	return L(C(t));
}
var ft = Object.freeze({ __proto__: null, stegaEncodeSourceMap: ct });
export { Y as encodeIntoResult, ct as stegaEncodeSourceMap, ft as stegaEncodeSourceMap$1 };
