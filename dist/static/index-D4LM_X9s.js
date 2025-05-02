import { e as l, r as C, aU as B, _ as E, j as i } from "./sanity-BGUQwGSa.js";
var _ = 255,
  J = 360,
  D = 100,
  W = (e) => {
    var { r: a, g: r, b: o, a: n } = e,
      t = Math.max(a, r, o),
      h = t - Math.min(a, r, o),
      d = h
        ? t === a
          ? (r - o) / h
          : t === r
            ? 2 + (o - a) / h
            : 4 + (a - r) / h
        : 0;
    return {
      h: 60 * (d < 0 ? d + 6 : d),
      s: t ? (h / t) * D : 0,
      v: (t / _) * D,
      a: n,
    };
  },
  ke = (e) => {
    var { h: a, s: r, l: o } = G(e);
    return "hsl(" + a + ", " + Math.round(r) + "%, " + Math.round(o) + "%)";
  },
  $r = (e) => {
    var { h: a, s: r, v: o } = e;
    return "hsv(" + a + ", " + r + "%, " + o + "%)";
  },
  zr = (e) => {
    var { h: a, s: r, v: o, a: n } = e;
    return "hsva(" + a + ", " + r + "%, " + o + "%, " + n + ")";
  },
  oe = (e) => {
    var { h: a, s: r, l: o, a: n } = G(e);
    return "hsla(" + a + ", " + r + "%, " + o + "%, " + n + ")";
  },
  Wr = (e) => {
    var [a, r, o, n] = (e.match(/\d+/g) || []).map(Number);
    return { h: a, s: r, l: o, a: n };
  },
  Be = (e) => {
    var a =
        /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i,
      r = a.exec(e);
    return r
      ? U({
          h: ce(r[1], r[2]),
          s: Number(r[3]),
          l: Number(r[4]),
          a: r[5] === void 0 ? 1 : Number(r[5]) / (r[6] ? 100 : 1),
        })
      : { h: 0, s: 0, v: 0, a: 1 };
  },
  Ae = Be,
  U = (e) => {
    var { h: a, s: r, l: o, a: n } = e;
    return (
      (r *= (o < 50 ? o : D - o) / D),
      { h: a, s: r > 0 ? ((2 * r) / (o + r)) * D : 0, v: o + r, a: n }
    );
  },
  G = (e) => {
    var { h: a, s: r, v: o, a: n } = e,
      t = ((200 - r) * o) / D;
    return {
      h: a,
      s: t > 0 && t < 200 ? ((r * o) / D / (t <= D ? t : 200 - t)) * D : 0,
      l: t / 2,
      a: n,
    };
  },
  Ee = (e) => {
    var a =
        /hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i,
      r = a.exec(e);
    return r
      ? {
          h: ce(r[1], r[2]),
          s: Number(r[3]),
          v: Number(r[4]),
          a: r[5] === void 0 ? 1 : Number(r[5]) / (r[6] ? D : 1),
        }
      : { h: 0, s: 0, v: 0, a: 1 };
  },
  Re = { grad: J / 400, turn: J, rad: J / (Math.PI * 2) },
  ce = function (a, r) {
    return r === void 0 && (r = "deg"), Number(a) * (Re[r] || 1);
  },
  Xr = Ee,
  je = (e) => {
    var a =
        /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i,
      r = a.exec(e);
    return r
      ? W({
          r: Number(r[1]) / (r[2] ? D / _ : 1),
          g: Number(r[3]) / (r[4] ? D / _ : 1),
          b: Number(r[5]) / (r[6] ? D / _ : 1),
          a: r[7] === void 0 ? 1 : Number(r[7]) / (r[8] ? D : 1),
        })
      : { h: 0, s: 0, v: 0, a: 1 };
  },
  qr = je,
  pe = (e) => {
    var { r: a, g: r, b: o } = e,
      n = (a << 16) | (r << 8) | o;
    return "#" + ((t) => new Array(7 - t.length).join("0") + t)(n.toString(16));
  },
  ge = (e) => {
    var { r: a, g: r, b: o, a: n } = e,
      t = typeof n == "number" && ((n * 255) | 256).toString(16).slice(1);
    return "" + pe({ r: a, g: r, b: o }) + (t || "");
  },
  S = (e) => W(ae(e)),
  ae = (e) => {
    var a = e.replace("#", "");
    /^#?/.test(e) &&
      a.length === 3 &&
      (e =
        "#" +
        a.charAt(0) +
        a.charAt(0) +
        a.charAt(1) +
        a.charAt(1) +
        a.charAt(2) +
        a.charAt(2));
    var r = new RegExp("[A-Za-z0-9]{2}", "g"),
      [o, n, t = 0, h] = e.match(r).map((d) => parseInt(d, 16));
    return { r: o, g: n, b: t, a: (h ?? 255) / _ };
  },
  X = (e) => {
    var { h: a, s: r, v: o, a: n } = e,
      t = a / 60,
      h = r / D,
      d = o / D,
      m = Math.floor(t) % 6,
      c = t - Math.floor(t),
      x = _ * d * (1 - h),
      v = _ * d * (1 - h * c),
      b = _ * d * (1 - h * (1 - c));
    d *= _;
    var s = {};
    switch (m) {
      case 0:
        (s.r = d), (s.g = b), (s.b = x);
        break;
      case 1:
        (s.r = v), (s.g = d), (s.b = x);
        break;
      case 2:
        (s.r = x), (s.g = d), (s.b = b);
        break;
      case 3:
        (s.r = x), (s.g = v), (s.b = d);
        break;
      case 4:
        (s.r = b), (s.g = x), (s.b = d);
        break;
      case 5:
        (s.r = d), (s.g = x), (s.b = v);
        break;
    }
    return (
      (s.r = Math.round(s.r)),
      (s.g = Math.round(s.g)),
      (s.b = Math.round(s.b)),
      l({}, s, { a: n })
    );
  },
  Or = (e) => {
    var { r: a, g: r, b: o } = X(e);
    return "rgb(" + a + ", " + r + ", " + o + ")";
  },
  te = (e) => {
    var { r: a, g: r, b: o, a: n } = X(e);
    return "rgba(" + a + ", " + r + ", " + o + ", " + n + ")";
  },
  Se = (e) => {
    var { r: a, g: r, b: o } = e;
    return { r: a, g: r, b: o };
  },
  De = (e) => {
    var { h: a, s: r, l: o } = e;
    return { h: a, s: r, l: o };
  },
  L = (e) => pe(X(e)),
  Ne = (e) => ge(X(e)),
  Pe = (e) => {
    var { h: a, s: r, v: o } = e;
    return { h: a, s: r, v: o };
  },
  A = (e) => {
    var a, r, o, n, t, h, d, m;
    return (
      typeof e == "string" && N(e)
        ? ((h = S(e)), (d = e))
        : typeof e != "string" && (h = e),
      h &&
        ((o = Pe(h)),
        (t = G(h)),
        (n = X(h)),
        (m = ge(n)),
        (d = L(h)),
        (r = De(t)),
        (a = Se(n))),
      { rgb: a, hsl: r, hsv: o, rgba: n, hsla: t, hsva: h, hex: d, hexa: m }
    );
  },
  ue = (e) => {
    if (!e) return "#ffffff";
    var a = A(e),
      r = (a.rgb.r * 299 + a.rgb.g * 587 + a.rgb.b * 114) / 1e3;
    return r >= 128 ? "#000000" : "#ffffff";
  },
  Te = (e, a) => {
    if (e === a) return !0;
    for (var r in e) if (e[r] !== a[r]) return !1;
    return !0;
  },
  Ur = (e, a) => e.replace(/\s/g, "") === a.replace(/\s/g, ""),
  Yr = (e, a) => (e.toLowerCase() === a.toLowerCase() ? !0 : Te(ae(e), ae(a))),
  N = (e) => /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(e);
function se(e) {
  var a = C.useRef(e);
  return (
    C.useEffect(() => {
      a.current = e;
    }),
    C.useCallback((r, o) => a.current && a.current(r, o), [])
  );
}
var Y = (e) => "touches" in e,
  ne = (e) => {
    !Y(e) && e.preventDefault && e.preventDefault();
  },
  ie = function (a, r, o) {
    return (
      r === void 0 && (r = 0),
      o === void 0 && (o = 1),
      a > o ? o : a < r ? r : a
    );
  },
  de = (e, a) => {
    var r = e.getBoundingClientRect(),
      o = Y(a) ? a.touches[0] : a;
    return {
      left: ie((o.pageX - (r.left + window.pageXOffset)) / r.width),
      top: ie((o.pageY - (r.top + window.pageYOffset)) / r.height),
      width: r.width,
      height: r.height,
      x: o.pageX - (r.left + window.pageXOffset),
      y: o.pageY - (r.top + window.pageYOffset),
    };
  },
  Le = ["prefixCls", "className", "onMove", "onDown"],
  K = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-interactive",
        className: o,
        onMove: n,
        onDown: t,
      } = e,
      h = E(e, Le),
      d = C.useRef(null),
      m = C.useRef(!1),
      [c, x] = C.useState(!1),
      v = se(n),
      b = se(t),
      s = (u) => (m.current && !Y(u) ? !1 : ((m.current = Y(u)), !0)),
      f = C.useCallback(
        (u) => {
          ne(u);
          var R = Y(u) ? u.touches.length > 0 : u.buttons > 0;
          R && d.current ? v && v(de(d.current, u), u) : x(!1);
        },
        [v],
      ),
      g = C.useCallback(() => x(!1), []),
      y = C.useCallback((u) => {
        var R = u ? window.addEventListener : window.removeEventListener;
        R(m.current ? "touchmove" : "mousemove", f),
          R(m.current ? "touchend" : "mouseup", g);
      }, []);
    C.useEffect(
      () => (
        y(c),
        () => {
          c && y(!1);
        }
      ),
      [c, y],
    );
    var p = C.useCallback(
      (u) => {
        ne(u.nativeEvent),
          s(u.nativeEvent) &&
            (b && b(de(d.current, u.nativeEvent), u.nativeEvent), x(!0));
      },
      [b],
    );
    return i.jsx(
      "div",
      l({}, h, {
        className: [r, o || ""].filter(Boolean).join(" "),
        style: l({}, h.style, { touchAction: "none" }),
        ref: d,
        tabIndex: 0,
        onMouseDown: p,
        onTouchStart: p,
      }),
    );
  });
K.displayName = "Interactive";
var He = ["className", "prefixCls", "left", "top", "style", "fillProps"],
  Me = (e) => {
    var {
        className: a,
        prefixCls: r,
        left: o,
        top: n,
        style: t,
        fillProps: h,
      } = e,
      d = E(e, He),
      m = l({}, t, { position: "absolute", left: o, top: n }),
      c = l(
        {
          width: 18,
          height: 18,
          boxShadow: "var(--alpha-pointer-box-shadow)",
          borderRadius: "50%",
          backgroundColor: "var(--alpha-pointer-background-color)",
        },
        h == null ? void 0 : h.style,
        { transform: o ? "translate(-9px, -1px)" : "translate(-1px, -9px)" },
      );
    return i.jsx(
      "div",
      l({ className: r + "-pointer " + (a || ""), style: m }, d, {
        children: i.jsx("div", l({ className: r + "-fill" }, h, { style: c })),
      }),
    );
  },
  _e = [
    "prefixCls",
    "className",
    "hsva",
    "background",
    "bgProps",
    "innerProps",
    "pointerProps",
    "radius",
    "width",
    "height",
    "direction",
    "style",
    "onChange",
    "pointer",
  ],
  ve =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==",
  I = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-alpha",
        className: o,
        hsva: n,
        background: t,
        bgProps: h = {},
        innerProps: d = {},
        pointerProps: m = {},
        radius: c = 0,
        width: x,
        height: v = 16,
        direction: b = "horizontal",
        style: s,
        onChange: f,
        pointer: g,
      } = e,
      y = E(e, _e),
      p = (P) => {
        f && f(l({}, n, { a: b === "horizontal" ? P.left : P.top }), P);
      },
      u = oe(Object.assign({}, n, { a: 1 })),
      R =
        "linear-gradient(to " +
        (b === "horizontal" ? "right" : "bottom") +
        ", rgba(244, 67, 54, 0) 0%, " +
        u +
        " 100%)",
      F = {};
    b === "horizontal" ? (F.left = n.a * 100 + "%") : (F.top = n.a * 100 + "%");
    var k = l(
        {
          "--alpha-background-color": "#fff",
          "--alpha-pointer-background-color": "rgb(248, 248, 248)",
          "--alpha-pointer-box-shadow": "rgb(0 0 0 / 37%) 0px 1px 4px 0px",
          borderRadius: c,
          background: "url(" + ve + ") left center",
          backgroundColor: "var(--alpha-background-color)",
        },
        { width: x, height: v },
        s,
        { position: "relative" },
      ),
      w =
        g && typeof g == "function"
          ? g(l({ prefixCls: r }, m, F))
          : i.jsx(Me, l({}, m, { prefixCls: r }, F));
    return i.jsxs(
      "div",
      l({}, y, {
        className: [r, r + "-" + b, o || ""].filter(Boolean).join(" "),
        style: k,
        ref: a,
        children: [
          i.jsx(
            "div",
            l({}, h, {
              style: l(
                {
                  inset: 0,
                  position: "absolute",
                  background: t || R,
                  borderRadius: c,
                },
                h.style,
              ),
            }),
          ),
          i.jsx(
            K,
            l({}, d, {
              style: l({}, d.style, {
                inset: 0,
                zIndex: 1,
                position: "absolute",
              }),
              onMove: p,
              onDown: p,
              children: w,
            }),
          ),
        ],
      }),
    );
  });
I.displayName = "Alpha";
var Ie = [
    "prefixCls",
    "placement",
    "label",
    "value",
    "className",
    "style",
    "labelStyle",
    "inputStyle",
    "onChange",
    "onBlur",
  ],
  $e = (e) => /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(e),
  ze = (e) => Number(String(e).replace(/%/g, "")),
  M = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-editable-input",
        placement: o = "bottom",
        label: n,
        value: t,
        className: h,
        style: d,
        labelStyle: m,
        inputStyle: c,
        onChange: x,
        onBlur: v,
      } = e,
      b = E(e, Ie),
      [s, f] = C.useState(t),
      g = C.useRef(!1);
    C.useEffect(() => {
      e.value !== s && (g.current || f(e.value));
    }, [e.value]);
    function y(k, w) {
      var P = (w || k.target.value).trim().replace(/^#/, "");
      $e(P) && x && x(k, P);
      var $ = ze(P);
      isNaN($) || (x && x(k, $)), f(P);
    }
    function p(k) {
      (g.current = !1), f(e.value), v && v(k);
    }
    var u = {};
    o === "bottom" && (u.flexDirection = "column"),
      o === "top" && (u.flexDirection = "column-reverse"),
      o === "left" && (u.flexDirection = "row-reverse");
    var R = l(
        {
          "--editable-input-label-color": "rgb(153, 153, 153)",
          "--editable-input-box-shadow":
            "rgb(204 204 204) 0px 0px 0px 1px inset",
          "--editable-input-color": "#666",
          position: "relative",
          alignItems: "center",
          display: "flex",
          fontSize: 11,
        },
        u,
        d,
      ),
      F = l(
        {
          width: "100%",
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 3,
          paddingRight: 3,
          fontSize: 11,
          background: "transparent",
          boxSizing: "border-box",
          border: "none",
          color: "var(--editable-input-color)",
          boxShadow: "var(--editable-input-box-shadow)",
        },
        c,
      );
    return i.jsxs("div", {
      className: [r, h || ""].filter(Boolean).join(" "),
      style: R,
      children: [
        i.jsx(
          "input",
          l(
            {
              ref: a,
              value: s,
              onChange: y,
              onBlur: p,
              autoComplete: "off",
              onFocus: () => (g.current = !0),
            },
            b,
            { style: F },
          ),
        ),
        n &&
          i.jsx("span", {
            style: l(
              {
                color: "var(--editable-input-label-color)",
                textTransform: "capitalize",
              },
              m,
            ),
            children: n,
          }),
      ],
    });
  });
M.displayName = "EditableInput";
var We = [
    "prefixCls",
    "className",
    "color",
    "colors",
    "style",
    "rectProps",
    "onChange",
    "addonAfter",
    "addonBefore",
    "rectRender",
  ],
  q = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-swatch",
        className: o,
        color: n,
        colors: t = [],
        style: h,
        rectProps: d = {},
        onChange: m,
        addonAfter: c,
        addonBefore: x,
        rectRender: v,
      } = e,
      b = E(e, We),
      s = l(
        {
          "--swatch-background-color": "rgb(144, 19, 254)",
          background: "var(--swatch-background-color)",
          height: 15,
          width: 15,
          marginRight: 5,
          marginBottom: 5,
          cursor: "pointer",
          position: "relative",
          outline: "none",
          borderRadius: 2,
        },
        d.style,
      ),
      f = (g, y) => {
        m && m(S(g), A(S(g)), y);
      };
    return i.jsxs(
      "div",
      l({ ref: a }, b, {
        className: [r, o || ""].filter(Boolean).join(" "),
        style: l(
          { display: "flex", flexWrap: "wrap", position: "relative" },
          h,
        ),
        children: [
          x && B.isValidElement(x) && x,
          t &&
            Array.isArray(t) &&
            t.map((g, y) => {
              var p = "",
                u = "";
              typeof g == "string" && ((p = g), (u = g)),
                typeof g == "object" &&
                  g.color &&
                  ((p = g.title || g.color), (u = g.color));
              var R = n && n.toLocaleLowerCase() === u.toLocaleLowerCase(),
                F =
                  v &&
                  v({
                    title: p,
                    color: u,
                    checked: !!R,
                    style: l({}, s, { background: u }),
                    onClick: (w) => f(u, w),
                  });
              if (F) return i.jsx(C.Fragment, { children: F }, y);
              var k =
                d.children && B.isValidElement(d.children)
                  ? B.cloneElement(d.children, { color: u, checked: R })
                  : null;
              return i.jsx(
                "div",
                l({ tabIndex: 0, title: p, onClick: (w) => f(u, w) }, d, {
                  children: k,
                  style: l({}, s, { background: u }),
                }),
                y,
              );
            }),
          c && B.isValidElement(c) && c,
        ],
      }),
    );
  });
q.displayName = "Swatch";
var Xe = ["prefixCls", "className", "style", "color", "colors", "onChange"],
  qe = [
    "#D9E3F0",
    "#F47373",
    "#697689",
    "#37D67A",
    "#2CCCE4",
    "#555555",
    "#dce775",
    "#ff8a65",
    "#ba68c8",
  ],
  Oe = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-block",
        className: o,
        style: n,
        color: t,
        colors: h = qe,
        onChange: d,
      } = e,
      m = E(e, Xe),
      c = typeof t == "string" && N(t) ? S(t) : t,
      x = t ? L(c) : "",
      v = (f) => {
        d && d(A(f));
      },
      b = (f, g) => {
        typeof f == "string" &&
          N(f) &&
          /(3|6)/.test(String(f.replace(/^#/, "").length)) &&
          d &&
          d(A(S(f)));
      },
      s = l(
        {
          "--block-background-color": "rgb(255, 255, 255)",
          "--block-box-shadow": "rgb(0 0 0 / 10%) 0 1px",
          width: 170,
          borderRadius: 6,
          background: "var(--block-background-color)",
          boxShadow: "var(--block-box-shadow)",
          position: "relative",
        },
        n,
      );
    return i.jsxs(
      "div",
      l({ ref: a, className: [r, o].filter(Boolean).join(" "), style: s }, m, {
        children: [
          i.jsx("div", {
            style: {
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "0 10px 10px",
              borderColor: "transparent transparent " + x,
              position: "absolute",
              top: -10,
              left: "50%",
              marginLeft: -10,
            },
          }),
          i.jsx("div", {
            title: x,
            style: {
              backgroundColor: "" + x,
              color: ue(x),
              height: 110,
              fontSize: 18,
              borderRadius: "6px 6px 0 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            children: x.toLocaleUpperCase(),
          }),
          i.jsx(q, {
            colors: h,
            color: x,
            style: { paddingLeft: 10, paddingTop: 10 },
            rectProps: {
              style: {
                marginRight: 10,
                marginBottom: 10,
                borderRadius: 4,
                height: 22,
                width: 22,
              },
            },
            onChange: v,
          }),
          i.jsx(M, {
            value: x.toLocaleUpperCase(),
            onChange: (f, g) => b(g),
            onBlur: (f) => {
              var g = f.target.value;
              (f.target.value = g.slice(0, 6)), b(g.slice(0, 6));
            },
            inputStyle: {
              height: 22,
              outline: 0,
              borderRadius: 3,
              padding: "0 7px",
            },
            style: { padding: 10, paddingTop: 0, borderRadius: "0 0 6px 6px" },
          }),
        ],
      }),
    );
  });
Oe.displayName = "Block";
function fe(e) {
  if (e == null) throw new TypeError("Cannot destructure " + e);
}
var Ue = {
  marginRight: 0,
  marginBottom: 0,
  borderRadius: 0,
  boxSizing: "border-box",
  height: 25,
  width: 25,
};
function Ye(e) {
  var {
      style: a,
      title: r,
      checked: o,
      color: n,
      onClick: t,
      rectProps: h,
    } = e,
    d = C.useRef(null),
    m = C.useCallback(() => {
      (d.current.style.zIndex = "2"),
        (d.current.style.outline = "#fff solid 2px"),
        (d.current.style.boxShadow = "rgb(0 0 0 / 25%) 0 0 5px 2px");
    }, []),
    c = C.useCallback(() => {
      o ||
        ((d.current.style.zIndex = "0"),
        (d.current.style.outline = "initial"),
        (d.current.style.boxShadow = "initial"));
    }, [o]),
    x = o
      ? {
          zIndex: 1,
          outline: "#fff solid 2px",
          boxShadow: "rgb(0 0 0 / 25%) 0 0 5px 2px",
        }
      : { zIndex: 0 };
  return i.jsx(
    "div",
    l({ ref: d, title: r }, h, {
      onClick: t,
      onMouseEnter: m,
      onMouseLeave: c,
      style: l(
        {},
        a,
        {
          marginRight: 0,
          marginBottom: 0,
          borderRadius: 0,
          boxSizing: "border-box",
          height: 25,
          width: 25,
        },
        Ue,
        x,
        h == null ? void 0 : h.style,
      ),
    }),
  );
}
var Ge = [
    "prefixCls",
    "placement",
    "className",
    "style",
    "color",
    "colors",
    "rectProps",
    "onChange",
    "rectRender",
  ],
  Ve = [
    "#B80000",
    "#DB3E00",
    "#FCCB00",
    "#008B02",
    "#006B76",
    "#1273DE",
    "#004DCF",
    "#5300EB",
    "#EB9694",
    "#FAD0C3",
    "#FEF3BD",
    "#C1E1C5",
    "#BEDADC",
    "#C4DEF6",
    "#BED3F3",
    "#D4C4FB",
  ],
  j = (function (e) {
    return (
      (e.Left = "L"),
      (e.LeftTop = "LT"),
      (e.LeftBottom = "LB"),
      (e.Right = "R"),
      (e.RightTop = "RT"),
      (e.RightBottom = "RB"),
      (e.Top = "T"),
      (e.TopRight = "TR"),
      (e.TopLeft = "TL"),
      (e.Bottom = "B"),
      (e.BottomLeft = "BL"),
      (e.BottomRight = "BR"),
      e
    );
  })({}),
  be = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-github",
        placement: o = j.TopRight,
        className: n,
        style: t,
        color: h,
        colors: d = Ve,
        rectProps: m = {},
        onChange: c,
        rectRender: x,
      } = e,
      v = E(e, Ge),
      b = typeof h == "string" && N(h) ? S(h) : h,
      s = h ? L(b) : "",
      f = (F) => c && c(A(F)),
      g = l(
        {
          "--github-border": "1px solid rgba(0, 0, 0, 0.2)",
          "--github-background-color": "#fff",
          "--github-box-shadow": "rgb(0 0 0 / 15%) 0px 3px 12px",
          "--github-arrow-border-color": "rgba(0, 0, 0, 0.15)",
          width: 200,
          borderRadius: 4,
          background: "var(--github-background-color)",
          boxShadow: "var(--github-box-shadow)",
          border: "var(--github-border)",
          position: "relative",
          padding: 5,
        },
        t,
      ),
      y = { borderStyle: "solid", position: "absolute" },
      p = l({}, y),
      u = l({}, y);
    /^T/.test(o) &&
      ((p.borderWidth = "0 8px 8px"),
      (p.borderColor =
        "transparent transparent var(--github-arrow-border-color)"),
      (u.borderWidth = "0 7px 7px"),
      (u.borderColor =
        "transparent transparent var(--github-background-color)")),
      o === j.TopRight && ((p.top = -8), (u.top = -7)),
      o === j.Top && ((p.top = -8), (u.top = -7)),
      o === j.TopLeft && ((p.top = -8), (u.top = -7)),
      /^B/.test(o) &&
        ((p.borderWidth = "8px 8px 0"),
        (p.borderColor =
          "var(--github-arrow-border-color) transparent transparent"),
        (u.borderWidth = "7px 7px 0"),
        (u.borderColor =
          "var(--github-background-color) transparent transparent"),
        o === j.BottomRight && ((p.top = "100%"), (u.top = "100%")),
        o === j.Bottom && ((p.top = "100%"), (u.top = "100%")),
        o === j.BottomLeft && ((p.top = "100%"), (u.top = "100%"))),
      /^(B|T)/.test(o) &&
        ((o === j.Top || o === j.Bottom) &&
          ((p.left = "50%"),
          (p.marginLeft = -8),
          (u.left = "50%"),
          (u.marginLeft = -7)),
        (o === j.TopRight || o === j.BottomRight) &&
          ((p.right = 10), (u.right = 11)),
        (o === j.TopLeft || o === j.BottomLeft) &&
          ((p.left = 7), (u.left = 8))),
      /^L/.test(o) &&
        ((p.borderWidth = "8px 8px 8px 0"),
        (p.borderColor =
          "transparent var(--github-arrow-border-color) transparent transparent"),
        (u.borderWidth = "7px 7px 7px 0"),
        (u.borderColor =
          "transparent var(--github-background-color) transparent transparent"),
        (p.left = -8),
        (u.left = -7)),
      /^R/.test(o) &&
        ((p.borderWidth = "8px 0 8px 8px"),
        (p.borderColor =
          "transparent transparent transparent var(--github-arrow-border-color)"),
        (u.borderWidth = "7px 0 7px 7px"),
        (u.borderColor =
          "transparent transparent transparent var(--github-background-color)"),
        (p.right = -8),
        (u.right = -7)),
      /^(L|R)/.test(o) &&
        ((o === j.RightTop || o === j.LeftTop) && ((p.top = 5), (u.top = 6)),
        (o === j.Left || o === j.Right) &&
          ((p.top = "50%"),
          (u.top = "50%"),
          (p.marginTop = -8),
          (u.marginTop = -7)),
        (o === j.LeftBottom || o === j.RightBottom) &&
          ((p.top = "100%"),
          (u.top = "100%"),
          (p.marginTop = -21),
          (u.marginTop = -20)));
    var R = (F) => {
      var k = l({}, (fe(F), F)),
        w = x && x(l({}, k));
      return w || i.jsx(Ye, l({}, k, { rectProps: m }));
    };
    return i.jsx(
      q,
      l(
        {
          ref: a,
          className: [r, n].filter(Boolean).join(" "),
          colors: d,
          color: s,
          rectRender: R,
        },
        v,
        {
          onChange: f,
          style: g,
          rectProps: {
            style: {
              marginRight: 0,
              marginBottom: 0,
              borderRadius: 0,
              height: 25,
              width: 25,
            },
          },
          addonBefore: i.jsxs(C.Fragment, {
            children: [i.jsx("div", { style: p }), i.jsx("div", { style: u })],
          }),
        },
      ),
    );
  });
be.displayName = "Github";
var Ke = (e) => {
    var { className: a, color: r, left: o, top: n, prefixCls: t } = e,
      h = { position: "absolute", top: n, left: o },
      d = {
        "--saturation-pointer-box-shadow":
          "rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",
        width: 6,
        height: 6,
        transform: "translate(-3px, -3px)",
        boxShadow: "var(--saturation-pointer-box-shadow)",
        borderRadius: "50%",
        backgroundColor: r,
      };
    return C.useMemo(
      () =>
        i.jsx("div", {
          className: t + "-pointer " + (a || ""),
          style: h,
          children: i.jsx("div", { className: t + "-fill", style: d }),
        }),
      [n, o, r, a, t],
    );
  },
  Qe = [
    "prefixCls",
    "radius",
    "pointer",
    "className",
    "hue",
    "style",
    "hsva",
    "onChange",
  ],
  Q = B.forwardRef((e, a) => {
    var r,
      {
        prefixCls: o = "w-color-saturation",
        radius: n = 0,
        pointer: t,
        className: h,
        hue: d = 0,
        style: m,
        hsva: c,
        onChange: x,
      } = e,
      v = E(e, Qe),
      b = l({ width: 200, height: 200, borderRadius: n }, m, {
        position: "relative",
      }),
      s = (g, y) => {
        x && c && x({ h: c.h, s: g.left * 100, v: (1 - g.top) * 100, a: c.a });
      },
      f = C.useMemo(() => {
        if (!c) return null;
        var g = { top: 100 - c.v + "%", left: c.s + "%", color: oe(c) };
        return t && typeof t == "function"
          ? t(l({ prefixCls: o }, g))
          : i.jsx(Ke, l({ prefixCls: o }, g));
      }, [c, t, o]);
    return i.jsx(
      K,
      l({ className: [o, h || ""].filter(Boolean).join(" ") }, v, {
        style: l(
          {
            position: "absolute",
            inset: 0,
            cursor: "crosshair",
            backgroundImage:
              "linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl(" +
              ((r = c == null ? void 0 : c.h) != null ? r : d) +
              ", 100%, 50%))",
          },
          b,
        ),
        ref: a,
        onMove: s,
        onDown: s,
        children: f,
      }),
    );
  });
Q.displayName = "Saturation";
var Ze = ["prefixCls", "className", "hue", "onChange", "direction"],
  Z = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-hue",
        className: o,
        hue: n = 0,
        onChange: t,
        direction: h = "horizontal",
      } = e,
      d = E(e, Ze);
    return i.jsx(
      I,
      l({ ref: a, className: r + " " + (o || "") }, d, {
        direction: h,
        background:
          "linear-gradient(to " +
          (h === "horizontal" ? "right" : "bottom") +
          ", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",
        hsva: { h: n, s: 100, v: 100, a: n / 360 },
        onChange: (m, c) => {
          t && t({ h: h === "horizontal" ? 360 * c.left : 360 * c.top });
        },
      }),
    );
  });
Z.displayName = "Hue";
var Je = [
    "prefixCls",
    "hsva",
    "placement",
    "rProps",
    "gProps",
    "bProps",
    "aProps",
    "className",
    "style",
    "onChange",
  ],
  O = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-editable-input-rgba",
        hsva: o,
        placement: n = "bottom",
        rProps: t = {},
        gProps: h = {},
        bProps: d = {},
        aProps: m = {},
        className: c,
        style: x,
        onChange: v,
      } = e,
      b = E(e, Je),
      s = o ? X(o) : {};
    function f(y) {
      var p = Number(y.target.value);
      p && p > 255 && (y.target.value = "255"),
        p && p < 0 && (y.target.value = "0");
    }
    var g = (y, p, u) => {
      typeof y == "number" &&
        (p === "a" &&
          (y < 0 && (y = 0),
          y > 100 && (y = 100),
          v && v(A(W(l({}, s, { a: y / 100 }))))),
        y > 255 && ((y = 255), (u.target.value = "255")),
        y < 0 && ((y = 0), (u.target.value = "0")),
        p === "r" && v && v(A(W(l({}, s, { r: y })))),
        p === "g" && v && v(A(W(l({}, s, { g: y })))),
        p === "b" && v && v(A(W(l({}, s, { b: y })))));
    };
    return i.jsxs(
      "div",
      l({ ref: a, className: [r, c || ""].filter(Boolean).join(" ") }, b, {
        style: l({ fontSize: 11, display: "flex" }, x),
        children: [
          i.jsx(
            M,
            l(
              {
                label: "R",
                value: s.r || 0,
                onBlur: f,
                placement: n,
                onChange: (y, p) => g(p, "r", y),
              },
              t,
              { style: l({}, t.style) },
            ),
          ),
          i.jsx(
            M,
            l(
              {
                label: "G",
                value: s.g || 0,
                onBlur: f,
                placement: n,
                onChange: (y, p) => g(p, "g", y),
              },
              h,
              { style: l({ marginLeft: 5 }, t.style) },
            ),
          ),
          i.jsx(
            M,
            l(
              {
                label: "B",
                value: s.b || 0,
                onBlur: f,
                placement: n,
                onChange: (y, p) => g(p, "b", y),
              },
              d,
              { style: l({ marginLeft: 5 }, d.style) },
            ),
          ),
          m &&
            i.jsx(
              M,
              l(
                {
                  label: "A",
                  value: s.a ? parseInt(String(s.a * 100), 10) : 0,
                  onBlur: f,
                  placement: n,
                  onChange: (y, p) => g(p, "a", y),
                },
                m,
                { style: l({ marginLeft: 5 }, m.style) },
              ),
            ),
        ],
      }),
    );
  });
O.displayName = "EditableInputRGBA";
var er = [
    "prefixCls",
    "hsva",
    "hProps",
    "sProps",
    "lProps",
    "aProps",
    "className",
    "onChange",
  ],
  xe = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-editable-input-hsla",
        hsva: o,
        hProps: n = {},
        sProps: t = {},
        lProps: h = {},
        aProps: d = {},
        className: m,
        onChange: c,
      } = e,
      x = E(e, er),
      v = o ? G(o) : { h: 0, s: 0, l: 0, a: 0 },
      b = (s, f, g) => {
        typeof s == "number" &&
          (f === "h" &&
            (s < 0 && (s = 0),
            s > 360 && (s = 360),
            c && c(A(U(l({}, v, { h: s }))))),
          f === "s" &&
            (s < 0 && (s = 0),
            s > 100 && (s = 100),
            c && c(A(U(l({}, v, { s }))))),
          f === "l" &&
            (s < 0 && (s = 0),
            s > 100 && (s = 100),
            c && c(A(U(l({}, v, { l: s }))))),
          f === "a" &&
            (s < 0 && (s = 0),
            s > 1 && (s = 1),
            c && c(A(U(l({}, v, { a: s }))))));
      };
    return i.jsx(
      O,
      l(
        {
          ref: a,
          hsva: o,
          rProps: l({ label: "H", value: Math.round(v.h) }, n, {
            onChange: (s, f) => b(f, "h"),
          }),
          gProps: l({ label: "S", value: Math.round(v.s) + "%" }, t, {
            onChange: (s, f) => b(f, "s"),
          }),
          bProps: l({ label: "L", value: Math.round(v.l) + "%" }, h, {
            onChange: (s, f) => b(f, "l"),
          }),
          aProps: l({ label: "A", value: Math.round(v.a * 100) / 100 }, d, {
            onChange: (s, f) => b(f, "a"),
          }),
          className: [r, m || ""].filter(Boolean).join(" "),
        },
        x,
      ),
    );
  });
xe.displayName = "EditableInputHSLA";
var rr = ["style"];
function ar(e) {
  var { style: a } = e,
    r = E(e, rr),
    o = C.useRef(null),
    n = C.useCallback(() => {
      o.current.style.backgroundColor = "var(--chrome-arrow-background-color)";
    }, []),
    t = C.useCallback(() => {
      o.current.style.backgroundColor = "transparent";
    }, []);
  return i.jsx(
    "div",
    l(
      {
        ref: o,
        style: l(
          {
            marginLeft: 5,
            cursor: "pointer",
            transition: "background-color .3s",
            borderRadius: 2,
          },
          a,
        ),
      },
      r,
      {
        onMouseEnter: n,
        onMouseLeave: t,
        children: i.jsx("svg", {
          viewBox: "0 0 1024 1024",
          width: "24",
          height: "24",
          style: { display: "block" },
          children: i.jsx("path", {
            d: "M373.888 576h276.224c9.322667 0 14.293333 11.178667 9.173333 18.773333l-1.258666 1.557334-138.112 146.858666a10.709333 10.709333 0 0 1-14.293334 1.365334l-1.536-1.365334-138.112-146.858666c-6.592-6.997333-2.666667-18.645333 5.973334-20.16l1.941333-0.170667h276.224-276.224z m146.026667-295.189333l138.112 146.858666c7.04 7.509333 2.069333 20.330667-7.914667 20.330667H373.888c-9.984 0-14.976-12.821333-7.914667-20.330667l138.112-146.858666a10.730667 10.730667 0 0 1 15.829334 0z",
            fill: "var(--chrome-arrow-fill)",
          }),
        }),
      },
    ),
  );
}
var or = "EyeDropper" in window;
function tr(e) {
  var a = () => {
    if ("EyeDropper" in window) {
      var r = new window.EyeDropper();
      r.open().then((o) => {
        console.log(o), e.onPickColor == null || e.onPickColor(o.sRGBHex);
      });
    }
  };
  return i.jsx("svg", {
    viewBox: "0 0 512 512",
    height: "1em",
    width: "1em",
    onClick: a,
    children: i.jsx("path", {
      fill: "currentColor",
      d: "M482.8 29.23c38.9 38.98 38.9 102.17 0 141.17L381.2 271.9l9.4 9.5c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0l-160-160c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0l9.5 9.4L341.6 29.23c39-38.974 102.2-38.974 141.2 0zM55.43 323.3 176.1 202.6l45.3 45.3-120.7 120.7c-3.01 3-4.7 7-4.7 11.3V416h36.1c4.3 0 8.3-1.7 11.3-4.7l120.7-120.7 45.3 45.3-120.7 120.7c-15 15-35.4 23.4-56.6 23.4H89.69l-39.94 26.6c-12.69 8.5-29.59 6.8-40.377-4-10.786-10.8-12.459-27.7-3.998-40.4L32 422.3v-42.4c0-21.2 8.43-41.6 23.43-56.6z",
    }),
  });
}
var lr = [
    "prefixCls",
    "className",
    "style",
    "color",
    "showEditableInput",
    "showEyeDropper",
    "showColorPreview",
    "showHue",
    "showAlpha",
    "inputType",
    "rectProps",
    "onChange",
  ],
  H = (function (e) {
    return (e.HEXA = "hexa"), (e.RGBA = "rgba"), (e.HSLA = "hsla"), e;
  })({}),
  sr = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-chrome",
        className: o,
        style: n,
        color: t,
        showEditableInput: h = !0,
        showEyeDropper: d = !0,
        showColorPreview: m = !0,
        showHue: c = !0,
        showAlpha: x = !0,
        inputType: v = H.RGBA,
        rectProps: b = {},
        onChange: s,
      } = e,
      f = E(e, lr),
      g = typeof t == "string" && N(t) ? S(t) : t || { h: 0, s: 0, l: 0, a: 0 },
      y = (T) => s && s(A(T)),
      [p, u] = C.useState(v),
      R = () => {
        p === H.RGBA && u(H.HSLA),
          p === H.HSLA && u(H.HEXA),
          p === H.HEXA && u(H.RGBA);
      },
      F = { paddingTop: 6 },
      k = { textAlign: "center", paddingTop: 4, paddingBottom: 4 },
      w = l(
        {
          "--chrome-arrow-fill": "#333",
          "--chrome-arrow-background-color": "#e8e8e8",
          borderRadius: 0,
          flexDirection: "column",
          width: 230,
          padding: 0,
        },
        n,
      ),
      P = {
        "--chrome-alpha-box-shadow": "rgb(0 0 0 / 25%) 0px 0px 1px inset",
        borderRadius: "50%",
        background: te(g),
        boxShadow: "var(--chrome-alpha-box-shadow)",
      },
      $ = (T) => {
        var z = S(T);
        y(l({}, z));
      },
      V = { height: 14, width: 14 },
      le = { style: l({}, V), fillProps: { style: V } };
    return i.jsx(
      be,
      l(
        {
          ref: a,
          color: g,
          style: w,
          colors: void 0,
          className: [r, o].filter(Boolean).join(" "),
          placement: j.TopLeft,
        },
        f,
        {
          addonAfter: i.jsxs(C.Fragment, {
            children: [
              i.jsx(Q, {
                hsva: g,
                style: { width: "100%", height: 130 },
                onChange: (T) => {
                  y(l({}, g, T, { a: g.a }));
                },
              }),
              i.jsxs("div", {
                style: {
                  padding: 15,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                },
                children: [
                  or && d && i.jsx(tr, { onPickColor: $ }),
                  m &&
                    i.jsx(I, {
                      width: 28,
                      height: 28,
                      hsva: g,
                      radius: 2,
                      style: { borderRadius: "50%" },
                      bgProps: { style: { background: "transparent" } },
                      innerProps: { style: P },
                      pointer: () => i.jsx(C.Fragment, {}),
                    }),
                  i.jsxs("div", {
                    style: { flex: 1 },
                    children: [
                      c == !0 &&
                        i.jsx(Z, {
                          hue: g.h,
                          style: { width: "100%", height: 12 },
                          pointerProps: le,
                          bgProps: { style: { borderRadius: 2 } },
                          onChange: (T) => {
                            y(l({}, g, T));
                          },
                        }),
                      x == !0 &&
                        i.jsx(I, {
                          hsva: g,
                          style: { marginTop: 6, height: 12 },
                          pointerProps: le,
                          bgProps: { style: { borderRadius: 2 } },
                          onChange: (T) => {
                            y(l({}, g, T));
                          },
                        }),
                    ],
                  }),
                ],
              }),
              h &&
                i.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "flex-start",
                    padding: "0 15px 15px 15px",
                    userSelect: "none",
                  },
                  children: [
                    i.jsxs("div", {
                      style: { flex: 1 },
                      children: [
                        p == H.RGBA &&
                          i.jsx(O, {
                            hsva: g,
                            rProps: { labelStyle: F, inputStyle: k },
                            gProps: { labelStyle: F, inputStyle: k },
                            bProps: { labelStyle: F, inputStyle: k },
                            aProps: { labelStyle: F, inputStyle: k },
                            onChange: (T) => y(T.hsva),
                          }),
                        p === H.HEXA &&
                          i.jsx(M, {
                            label: "HEX",
                            labelStyle: F,
                            inputStyle: k,
                            value:
                              g.a > 0 && g.a < 1
                                ? Ne(g).toLocaleUpperCase()
                                : L(g).toLocaleUpperCase(),
                            onChange: (T, z) => {
                              typeof z == "string" &&
                                y(S(/^#/.test(z) ? z : "#" + z));
                            },
                          }),
                        p === H.HSLA &&
                          i.jsx(xe, {
                            hsva: g,
                            hProps: { labelStyle: F, inputStyle: k },
                            sProps: { labelStyle: F, inputStyle: k },
                            lProps: { labelStyle: F, inputStyle: k },
                            aProps: { labelStyle: F, inputStyle: k },
                            onChange: (T) => y(T.hsva),
                          }),
                      ],
                    }),
                    i.jsx(ar, { onClick: R }),
                  ],
                }),
            ],
          }),
          rectRender: () => i.jsx(C.Fragment, {}),
        },
      ),
    );
  });
sr.displayName = "Chrome";
function nr(e) {
  var {
      style: a,
      className: r,
      title: o,
      checked: n,
      color: t,
      onClick: h,
      rectProps: d,
    } = e,
    m = C.useRef(null),
    c = C.useCallback(() => {
      m.current.style.transform = "scale(1.2)";
    }, []),
    x = C.useCallback(() => {
      m.current.style.transform = "scale(1)";
    }, []),
    v = l(
      {
        "--circle-point-background-color": "#fff",
        height: n ? "100%" : 0,
        width: n ? "100%" : 0,
        borderRadius: "50%",
        backgroundColor: "var(--circle-point-background-color)",
        boxSizing: "border-box",
        transition: "height 100ms ease 0s, width 100ms ease 0s",
      },
      d.style,
    );
  return i.jsx("div", {
    ref: m,
    onClick: h,
    onMouseEnter: c,
    onMouseLeave: x,
    title: o,
    className: r,
    style: l(
      {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        padding: 3,
        borderRadius: "50%",
        marginRight: 12,
        marginBottom: 12,
        boxSizing: "border-box",
        transform: "scale(1)",
        boxShadow: t + " 0px 0px " + (n ? 5 : 0) + "px",
        transition: "transform 100ms ease 0s, box-shadow 100ms ease 0s",
      },
      a,
    ),
    children: i.jsx("div", l({}, d, { style: v })),
  });
}
var ir = [
    "prefixCls",
    "className",
    "color",
    "colors",
    "rectProps",
    "pointProps",
    "onChange",
  ],
  dr = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-circle",
        className: o,
        color: n,
        colors: t = [],
        rectProps: h = {},
        pointProps: d = {},
        onChange: m,
      } = e,
      c = E(e, ir),
      x = typeof n == "string" && N(n) ? S(n) : n || {},
      v = n ? L(x) : "",
      b = [r, o].filter(Boolean).join(" "),
      s = [r + "-point", d == null ? void 0 : d.className]
        .filter(Boolean)
        .join(" ");
    return i.jsx(
      q,
      l({ ref: a, colors: t, color: v }, c, {
        className: b,
        rectRender: (f) => {
          var g = l({}, (fe(f), f));
          return i.jsx(
            nr,
            l({}, g, d, {
              style: l({}, g.style, d.style),
              className: s,
              rectProps: h,
            }),
          );
        },
        onChange: (f) => {
          m && m(A(f));
        },
      }),
    );
  });
dr.displayName = "Circle";
var hr = ["style", "color"],
  cr = ["prefixCls", "className", "onChange", "color", "style", "disableAlpha"],
  ee = (e) => {
    var { style: a, color: r } = e,
      o = E(e, hr),
      n = l(
        {
          "--colorful-pointer-background-color": "#fff",
          "--colorful-pointer-border": "2px solid #fff",
          height: 28,
          width: 28,
          position: "absolute",
          transform: "translate(-14px, -4px)",
          boxShadow: "0 2px 4px rgb(0 0 0 / 20%)",
          borderRadius: "50%",
          background: "url(" + ve + ")",
          backgroundColor: "var(--colorful-pointer-background-color)",
          border: "var(--colorful-pointer-border)",
          zIndex: 1,
        },
        a,
      );
    return i.jsx(
      "div",
      l({}, o, {
        style: n,
        children: i.jsx("div", {
          style: {
            backgroundColor: r,
            borderRadius: "50%",
            height: " 100%",
            width: "100%",
          },
        }),
      }),
    );
  },
  pr = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-colorful",
        className: o,
        onChange: n,
        color: t,
        style: h,
        disableAlpha: d,
      } = e,
      m = E(e, cr),
      c = typeof t == "string" && N(t) ? S(t) : t || {},
      x = (v) => n && n(A(v));
    return i.jsxs(
      "div",
      l({ ref: a, style: l({ width: 200, position: "relative" }, h) }, m, {
        className: r + " " + (o || ""),
        children: [
          i.jsx(Q, {
            hsva: c,
            className: r,
            radius: "8px 8px 0 0",
            style: {
              width: "auto",
              height: 150,
              minWidth: 120,
              borderBottom: "12px solid #000",
            },
            pointer: (v) => {
              var { left: b, top: s, color: f } = v;
              return i.jsx(ee, {
                style: {
                  left: b,
                  top: s,
                  transform: "translate(-16px, -16px)",
                },
                color: L(c),
              });
            },
            onChange: (v) => x(l({}, c, v)),
          }),
          i.jsx(Z, {
            hue: c.h,
            height: 24,
            radius: d ? "0 0 8px 8px" : 0,
            className: r,
            onChange: (v) => x(l({}, c, v)),
            pointer: (v) => {
              var { left: b } = v;
              return i.jsx(ee, {
                style: { left: b },
                color: "hsl(" + (c.h || 0) + "deg 100% 50%)",
              });
            },
          }),
          !d &&
            i.jsx(I, {
              hsva: c,
              height: 24,
              className: r,
              radius: "0 0 8px 8px",
              pointer: (v) => {
                var { left: b } = v;
                return i.jsx(ee, { style: { left: b }, color: te(c) });
              },
              onChange: (v) => x(l({}, c, v)),
            }),
        ],
      }),
    );
  });
pr.displayName = "Colorful";
var gr = [
    "prefixCls",
    "className",
    "style",
    "onChange",
    "color",
    "colors",
    "rectProps",
    "rectRender",
  ],
  ur = [
    "#4D4D4D",
    "#999999",
    "#FFFFFF",
    "#F44E3B",
    "#FE9200",
    "#FCDC00",
    "#DBDF00",
    "#A4DD00",
    "#68CCCA",
    "#73D8FF",
    "#AEA1FF",
    "#FDA1FF",
    "#333333",
    "#808080",
    "#cccccc",
    "#D33115",
    "#E27300",
    "#FCC400",
    "#B0BC00",
    "#68BC00",
    "#16A5A5",
    "#009CE0",
    "#7B64FF",
    "#FA28FF",
    "#000000",
    "#666666",
    "#B3B3B3",
    "#9F0500",
    "#C45100",
    "#FB9E00",
    "#808900",
    "#194D33",
    "#0C797D",
    "#0062B1",
    "#653294",
    "#AB149E",
  ];
function vr(e) {
  return e.checked
    ? i.jsx("div", {
        style: {
          height: 5,
          width: 5,
          borderRadius: "50%",
          backgroundColor: ue(e.color),
        },
      })
    : null;
}
var fr = B.forwardRef((e, a) => {
  var {
      prefixCls: r = "w-color-compact",
      className: o,
      style: n,
      onChange: t,
      color: h,
      colors: d = ur,
      rectProps: m,
      rectRender: c,
    } = e,
    x = E(e, gr),
    v = typeof h == "string" && N(h) ? S(h) : h,
    b = h ? L(v).replace(/^#/, "") : "",
    s = C.useCallback((p) => t && t(A(p)), []),
    f = (p, u) => {
      typeof p == "string" && N(p) && /(3|6)/.test(String(p.length)) && s(S(p));
    },
    g = {
      style: { alignItems: "baseline" },
      inputStyle: {
        boxShadow: "none",
        backgroundColor: "transparent",
        outline: 0,
      },
    },
    y = l(
      {
        "--compact-background-color": "#f6f6f6",
        background: "var(--compact-background-color)",
        borderRadius: 3,
        display: "flex",
        width: 240,
        flexWrap: "wrap",
        paddingTop: 5,
        paddingLeft: 5,
      },
      n,
    );
  return i.jsxs(
    "div",
    l(
      { ref: a, style: y, className: [r, o || ""].filter(Boolean).join(" ") },
      x,
      {
        children: [
          i.jsx(q, {
            colors: d,
            color: h ? L(v) : void 0,
            rectRender: c,
            rectProps: l({ children: i.jsx(vr, {}) }, m, {
              style: l(
                {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                m == null ? void 0 : m.style,
              ),
            }),
            onChange: (p) => s(p),
          }),
          i.jsxs("div", {
            style: { display: "flex", margin: "0 4px 3px 0" },
            children: [
              i.jsx(M, {
                onChange: (p, u) => f(u),
                labelStyle: { paddingRight: 5, marginTop: -1 },
                value: b.toLocaleUpperCase(),
                label: i.jsx("div", {
                  style: { width: 8, height: 8, backgroundColor: "#" + b },
                }),
                inputStyle: {
                  outline: "none",
                  boxShadow: "initial",
                  background: "transparent",
                },
                style: {
                  flexDirection: "row-reverse",
                  flex: "1 1 0%",
                  minWidth: 80,
                },
              }),
              i.jsx(O, {
                hsva: v,
                placement: "left",
                onChange: (p) => s(p.hsva),
                aProps: !1,
                rProps: g,
                gProps: g,
                bProps: g,
              }),
            ],
          }),
        ],
      },
    ),
  );
});
fr.displayName = "Compact";
var br = ["prefixCls", "className", "style", "color", "onChange"],
  re = {
    boxShadow: "initial",
    borderWidth: "0 0 1px 0",
    borderBottomColor: "var(--material-border-bottom-color)",
    borderBottomStyle: "solid",
    height: 30,
    outline: 0,
    fontSize: 15,
    padding: 0,
  },
  xr = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-material",
        className: o,
        style: n,
        color: t,
        onChange: h,
      } = e,
      d = E(e, br),
      m = typeof t == "string" && N(t) ? S(t) : t,
      c = t ? L(m).replace(/^#/, "") : "",
      x = (s) => {
        h && h(A(s));
      },
      v = (s, f) => {
        typeof s == "string" &&
          N(s) &&
          /(3|6)/.test(String(s.length)) &&
          h &&
          h(A(S(s)));
      },
      b = l(
        {
          "--material-border-bottom-color": "#eee",
          "--material-background-color": "#fff",
          padding: 16,
          width: 98,
          fontFamily: "Roboto",
          backgroundColor: "var(--material-background-color)",
        },
        n,
      );
    return i.jsxs(
      "div",
      l(
        { ref: a, className: [r, o || ""].filter(Boolean).join(" "), style: b },
        d,
        {
          children: [
            i.jsx(M, {
              label: "Hex",
              value: c.toLocaleUpperCase(),
              onChange: (s, f) => v(f),
              onBlur: (s) => {
                var f = s.target.value;
                (s.target.value = f.slice(0, 6)), v(f.slice(0, 6));
              },
              inputStyle: {
                outline: 0,
                border: 0,
                height: 30,
                fontSize: 15,
                padding: 0,
                boxShadow: "initial",
                borderWidth: "0 0 2px 0",
                borderBottomColor: c
                  ? "#" + c
                  : "var(--material-border-bottom-color)",
                borderBottomStyle: "solid",
                background: "transparent",
              },
              style: {
                flexDirection: "column-reverse",
                alignItems: "flex-start",
              },
            }),
            i.jsx(O, {
              hsva: m,
              placement: "top",
              style: { marginTop: 11 },
              rProps: {
                style: { alignItems: "flex-start" },
                inputStyle: l({}, re),
              },
              gProps: {
                style: { alignItems: "flex-start" },
                inputStyle: l({}, re),
              },
              bProps: {
                style: { alignItems: "flex-start" },
                inputStyle: l({}, re),
              },
              aProps: !1,
              onChange: (s) => x(s.hsva),
            }),
          ],
        },
      ),
    );
  });
xr.displayName = "Material";
const mr = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen",
  ],
  yr = [
    "#F0F8FF",
    "#FAEBD7",
    "#00FFFF",
    "#7FFFD4",
    "#F0FFFF",
    "#F5F5DC",
    "#FFE4C4",
    "#000000",
    "#FFEBCD",
    "#0000FF",
    "#8A2BE2",
    "#A52A2A",
    "#DEB887",
    "#5F9EA0",
    "#7FFF00",
    "#D2691E",
    "#FF7F50",
    "#6495ED",
    "#FFF8DC",
    "#DC143C",
    "#00FFFF",
    "#00008B",
    "#008B8B",
    "#B8860B",
    "#A9A9A9",
    "#006400",
    "#A9A9A9",
    "#BDB76B",
    "#8B008B",
    "#556B2F",
    "#FF8C00",
    "#9932CC",
    "#8B0000",
    "#E9967A",
    "#8FBC8F",
    "#483D8B",
    "#2F4F4F",
    "#2F4F4F",
    "#00CED1",
    "#9400D3",
    "#FF1493",
    "#00BFFF",
    "#696969",
    "#696969",
    "#1E90FF",
    "#B22222",
    "#FFFAF0",
    "#228B22",
    "#FF00FF",
    "#DCDCDC",
    "#F8F8FF",
    "#FFD700",
    "#DAA520",
    "#808080",
    "#008000",
    "#ADFF2F",
    "#808080",
    "#F0FFF0",
    "#FF69B4",
    "#CD5C5C",
    "#4B0082",
    "#FFFFF0",
    "#F0E68C",
    "#E6E6FA",
    "#FFF0F5",
    "#7CFC00",
    "#FFFACD",
    "#ADD8E6",
    "#F08080",
    "#E0FFFF",
    "#FAFAD2",
    "#D3D3D3",
    "#90EE90",
    "#D3D3D3",
    "#FFB6C1",
    "#FFA07A",
    "#20B2AA",
    "#87CEFA",
    "#778899",
    "#778899",
    "#B0C4DE",
    "#FFFFE0",
    "#00FF00",
    "#32CD32",
    "#FAF0E6",
    "#FF00FF",
    "#800000",
    "#66CDAA",
    "#0000CD",
    "#BA55D3",
    "#9370DB",
    "#3CB371",
    "#7B68EE",
    "#00FA9A",
    "#48D1CC",
    "#C71585",
    "#191970",
    "#F5FFFA",
    "#FFE4E1",
    "#FFE4B5",
    "#FFDEAD",
    "#000080",
    "#FDF5E6",
    "#808000",
    "#6B8E23",
    "#FFA500",
    "#FF4500",
    "#DA70D6",
    "#EEE8AA",
    "#98FB98",
    "#AFEEEE",
    "#DB7093",
    "#FFEFD5",
    "#FFDAB9",
    "#CD853F",
    "#FFC0CB",
    "#DDA0DD",
    "#B0E0E6",
    "#800080",
    "#663399",
    "#FF0000",
    "#BC8F8F",
    "#4169E1",
    "#8B4513",
    "#FA8072",
    "#F4A460",
    "#2E8B57",
    "#FFF5EE",
    "#A0522D",
    "#C0C0C0",
    "#87CEEB",
    "#6A5ACD",
    "#708090",
    "#708090",
    "#FFFAFA",
    "#00FF7F",
    "#4682B4",
    "#D2B48C",
    "#008080",
    "#D8BFD8",
    "#FF6347",
    "#40E0D0",
    "#EE82EE",
    "#F5DEB3",
    "#FFFFFF",
    "#F5F5F5",
    "#FFFF00",
    "#9ACD32",
  ];
var me = mr.reduce((e, a, r) => ((e[a] = yr[r]), e), {}),
  Cr = [
    "aqua",
    "black",
    "blue",
    "fuchsia",
    "gray",
    "green",
    "lime",
    "maroon",
    "navy",
    "olive",
    "purple",
    "red",
    "silver",
    "teal",
    "white",
    "yellow",
  ],
  Gr = Cr.reduce((e, a) => ((e[a] = me[a]), e), {});
function Vr(e) {
  return me[e];
}
var wr = ["prefixCls", "className", "onChange", "direction", "hsva"],
  Fr = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-saturation",
        className: o,
        onChange: n,
        direction: t = "horizontal",
        hsva: h,
      } = e,
      d = E(e, wr),
      m = oe(l({}, h, { a: 1, v: 100 }));
    return i.jsx(
      I,
      l({ ref: a }, d, {
        className: r + " " + (o || ""),
        hsva: { h: h.h, s: h.s, v: h.v, a: 1 - h.v / 100 },
        direction: t,
        background:
          "linear-gradient(to " +
          (t === "horizontal" ? "right" : "bottom") +
          ", " +
          m +
          ", rgb(0, 0, 0))",
        onChange: (c, x) => {
          n &&
            n({
              v: t === "horizontal" ? 100 - x.left * 100 : 100 - x.top * 100,
            });
        },
      }),
    );
  });
Fr.displayName = "ShadeSlider";
var kr = [
    "prefixCls",
    "className",
    "onChange",
    "width",
    "presetColors",
    "color",
    "editableDisable",
    "disableAlpha",
    "style",
  ],
  Br = [
    "#D0021B",
    "#F5A623",
    "#f8e61b",
    "#8B572A",
    "#7ED321",
    "#417505",
    "#BD10E0",
    "#9013FE",
    "#4A90E2",
    "#50E3C2",
    "#B8E986",
    "#000000",
    "#4A4A4A",
    "#9B9B9B",
    "#FFFFFF",
  ],
  he = (e) =>
    i.jsx("div", {
      style: {
        boxShadow: "rgb(0 0 0 / 60%) 0px 0px 2px",
        width: 4,
        top: 1,
        bottom: 1,
        left: e.left,
        borderRadius: 1,
        position: "absolute",
        backgroundColor: "#fff",
      },
    }),
  Ar = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-sketch",
        className: o,
        onChange: n,
        width: t = 218,
        presetColors: h = Br,
        color: d,
        editableDisable: m = !0,
        disableAlpha: c = !1,
        style: x,
      } = e,
      v = E(e, kr),
      [b, s] = C.useState({ h: 209, s: 36, v: 90, a: 1 });
    C.useEffect(() => {
      typeof d == "string" && N(d) && s(S(d)), typeof d == "object" && s(d);
    }, [d]);
    var f = (w) => {
        s(w), n && n(A(w));
      },
      g = (w, P) => {
        typeof w == "string" &&
          N(w) &&
          /(3|6)/.test(String(w.length)) &&
          f(S(w));
      },
      y = (w) => f(l({}, b, { a: w.a })),
      p = (w) => f(l({}, b, w, { a: b.a })),
      u = l(
        {
          "--sketch-background": "rgb(255, 255, 255)",
          "--sketch-box-shadow":
            "rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px",
          "--sketch-swatch-box-shadow":
            "rgb(0 0 0 / 15%) 0px 0px 0px 1px inset",
          "--sketch-alpha-box-shadow":
            "rgb(0 0 0 / 15%) 0px 0px 0px 1px inset, rgb(0 0 0 / 25%) 0px 0px 4px inset",
          "--sketch-swatch-border-top": "1px solid rgb(238, 238, 238)",
          background: "var(--sketch-background)",
          borderRadius: 4,
          boxShadow: "var(--sketch-box-shadow)",
          width: t,
        },
        x,
      ),
      R = {
        borderRadius: 2,
        background: te(b),
        boxShadow: "var(--sketch-alpha-box-shadow)",
      },
      F = {
        borderTop: "var(--sketch-swatch-border-top)",
        paddingTop: 10,
        paddingLeft: 10,
      },
      k = {
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 3,
        boxShadow: "var(--sketch-swatch-box-shadow)",
      };
    return i.jsxs(
      "div",
      l({}, v, {
        className: r + " " + (o || ""),
        ref: a,
        style: u,
        children: [
          i.jsxs("div", {
            style: { padding: "10px 10px 8px" },
            children: [
              i.jsx(Q, {
                hsva: b,
                style: { width: "auto", height: 150 },
                onChange: p,
              }),
              i.jsxs("div", {
                style: { display: "flex", marginTop: 4 },
                children: [
                  i.jsxs("div", {
                    style: { flex: 1 },
                    children: [
                      i.jsx(Z, {
                        width: "auto",
                        height: 10,
                        hue: b.h,
                        pointer: he,
                        innerProps: {
                          style: { marginLeft: 1, marginRight: 5 },
                        },
                        onChange: (w) => f(l({}, b, w)),
                      }),
                      !c &&
                        i.jsx(I, {
                          width: "auto",
                          height: 10,
                          hsva: b,
                          pointer: he,
                          style: { marginTop: 4 },
                          innerProps: {
                            style: { marginLeft: 1, marginRight: 5 },
                          },
                          onChange: y,
                        }),
                    ],
                  }),
                  !c &&
                    i.jsx(I, {
                      width: 24,
                      height: 24,
                      hsva: b,
                      radius: 2,
                      style: { marginLeft: 4 },
                      bgProps: { style: { background: "transparent" } },
                      innerProps: { style: R },
                      pointer: () => i.jsx(C.Fragment, {}),
                    }),
                ],
              }),
            ],
          }),
          m &&
            i.jsxs("div", {
              style: { display: "flex", margin: "0 10px 3px 10px" },
              children: [
                i.jsx(M, {
                  label: "Hex",
                  value: L(b).replace(/^#/, "").toLocaleUpperCase(),
                  onChange: (w, P) => g(P),
                  style: { minWidth: 58 },
                }),
                i.jsx(O, {
                  hsva: b,
                  style: { marginLeft: 6 },
                  aProps: c ? !1 : {},
                  onChange: (w) => f(w.hsva),
                }),
              ],
            }),
          h &&
            h.length > 0 &&
            i.jsx(q, {
              style: F,
              colors: h,
              color: L(b),
              onChange: (w) => f(w),
              rectProps: { style: k },
            }),
        ],
      }),
    );
  });
Ar.displayName = "Sketch";
var Er = ["prefixCls", "className", "style", "onChange", "color", "lightness"],
  Rr = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-slider",
        className: o,
        style: n,
        onChange: t,
        color: h,
        lightness: d = [80, 65, 50, 35, 20],
      } = e,
      m = E(e, Er),
      c = typeof h == "string" && N(h) ? S(h) : h || {},
      x = (v, b) => {
        t && t(A(Ae(v)), b);
      };
    return i.jsx(
      "div",
      l(
        {
          ref: a,
          style: l({ display: "flex" }, n),
          className: [r, o || ""].filter(Boolean).join(" "),
        },
        m,
        {
          children: d.map((v, b) => {
            var s = G(c),
              f = "hsl(" + s.h + ", 50%, " + v + "%)",
              g = f === ke(c);
            return i.jsx(
              "div",
              {
                style: {
                  paddingLeft: 1,
                  width: 100 / d.length + "%",
                  boxSizing: "border-box",
                },
                children: i.jsx("div", {
                  onClick: (y) => x(f, y),
                  style: l(
                    { backgroundColor: f, height: 12, cursor: "pointer" },
                    g ? { borderRadius: 2, transform: "scale(1, 1.5)" } : {},
                  ),
                }),
              },
              b,
            );
          }),
        },
      ),
    );
  });
Rr.displayName = "Slider";
var jr =
    "rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",
  Sr = (e) => {
    var { className: a, color: r, left: o, top: n, style: t, prefixCls: h } = e,
      d = l({}, t, { position: "absolute", top: n, left: o }),
      m = h + "-pointer " + (a || "");
    return i.jsx("div", {
      className: m,
      style: d,
      children: i.jsx("div", {
        className: h + "-fill",
        style: {
          width: 10,
          height: 10,
          transform: "translate(-5px, -5px)",
          boxShadow: jr,
          borderRadius: "50%",
          backgroundColor: "#fff",
        },
        children: i.jsx("div", {
          style: {
            inset: 0,
            borderRadius: "50%",
            position: "absolute",
            backgroundColor: r,
          },
        }),
      }),
    });
  },
  ye = Math.PI * 2,
  Dr = (e, a) => ((e % a) + a) % a,
  Nr = (e, a) => Math.sqrt(e * e + a * a);
function Ce(e) {
  var { width: a = 0 } = e,
    r = a / 2;
  return { width: a, radius: r, cx: r, cy: r };
}
function Pr(e, a) {
  var { cx: r, cy: o } = Ce(e),
    n = we(e),
    t = (180 + Fe(e, a.h, !0)) * (ye / 360),
    h = (a.s / 100) * n,
    d = e.direction === "clockwise" ? -1 : 1;
  return { x: r + h * Math.cos(t) * d, y: o + h * Math.sin(t) * d };
}
function we(e) {
  var { width: a = 0 } = e;
  return a / 2;
}
function Fe(e, a, r) {
  var o = e.angle || 0,
    n = e.direction;
  return (
    r && n === "clockwise"
      ? (a = o + a)
      : n === "clockwise"
        ? (a = 360 - o + a)
        : r && n === "anticlockwise"
          ? (a = o + 180 - a)
          : n === "anticlockwise" && (a = o - a),
    Dr(a, 360)
  );
}
function Tr(e, a, r) {
  var { cx: o, cy: n } = Ce(e),
    t = we(e);
  (a = o - a), (r = n - r);
  var h = Fe(e, Math.atan2(-r, -a) * (360 / ye)),
    d = Math.min(Nr(a, r), t);
  return { h: Math.round(h), s: Math.round((100 / t) * d) };
}
var Lr = [
    "prefixCls",
    "radius",
    "pointer",
    "className",
    "style",
    "width",
    "height",
    "oval",
    "direction",
    "angle",
    "color",
    "onChange",
  ],
  Hr = "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",
  Mr = "conic-gradient(red, magenta, blue, aqua, lime, yellow, red)",
  _r = B.forwardRef((e, a) => {
    var {
        prefixCls: r = "w-color-wheel",
        radius: o = 0,
        pointer: n,
        className: t,
        style: h,
        width: d = 200,
        height: m = 200,
        oval: c,
        direction: x = "anticlockwise",
        angle: v = 180,
        color: b,
        onChange: s,
      } = e,
      f = E(e, Lr),
      g = typeof b == "string" && N(b) ? S(b) : b || {},
      y = b ? L(g) : "",
      p = Pr({ width: d }, g),
      u = { top: "0", left: "0", color: y },
      R = (w, P) => {
        var $ = Tr({ width: d }, d - w.x, m - w.y),
          V = { h: $.h, s: $.s, v: g.v, a: g.a };
        s && s(A(V));
      },
      F = {
        zIndex: 1,
        transform:
          "translate(" +
          p.x +
          "px, " +
          p.y +
          "px) " +
          (c === "x" || c === "X"
            ? "scaleY(2)"
            : c === "y" || c === "Y"
              ? "scaleX(2)"
              : ""),
      },
      k =
        n && typeof n == "function"
          ? n(l({ prefixCls: r, style: F }, u))
          : i.jsx(Sr, l({ prefixCls: r, style: F }, u));
    return i.jsxs(
      K,
      l({ className: [r, t || ""].filter(Boolean).join(" ") }, f, {
        style: l(
          {
            position: "relative",
            width: d,
            transform:
              c === "x" || c === "X"
                ? "scaleY(0.5)"
                : c === "y" || c === "Y"
                  ? "scaleX(0.5)"
                  : "",
            height: m,
          },
          h,
        ),
        ref: a,
        onMove: R,
        onDown: R,
        children: [
          k,
          i.jsx("div", {
            style: {
              position: "absolute",
              borderRadius: "50%",
              background: x === "anticlockwise" ? Hr : Mr,
              transform: "rotateZ(" + (v + 90) + "deg)",
              inset: 0,
            },
          }),
          i.jsx("div", {
            style: {
              position: "absolute",
              borderRadius: "50%",
              background:
                "radial-gradient(circle closest-side, #fff, transparent)",
              inset: 0,
            },
          }),
          i.jsx("div", {
            style: {
              backgroundColor: "#000",
              borderRadius: "50%",
              position: "absolute",
              inset: 0,
              opacity: typeof g.v == "number" ? 1 - g.v / 100 : 0,
            },
          }),
        ],
      }),
    );
  });
_r.displayName = "Wheel";
export {
  I as Alpha,
  ve as BACKGROUND_IMG,
  Oe as Block,
  sr as Chrome,
  dr as Circle,
  pr as Colorful,
  fr as Compact,
  M as EditableInput,
  xe as EditableInputHSLA,
  O as EditableInputRGBA,
  be as Github,
  Z as Hue,
  xr as Material,
  Me as Pointer,
  Q as Saturation,
  Fr as ShadeSlider,
  Ar as Sketch,
  Rr as Slider,
  q as Swatch,
  _r as Wheel,
  Cr as baseNamed,
  A as color,
  me as colorKeywords,
  Gr as colorKeywordsBase,
  Vr as colorNameToHex,
  Te as equalColorObjects,
  Ur as equalColorString,
  Yr as equalHex,
  ue as getContrastingColor,
  S as hexToHsva,
  ae as hexToRgba,
  Wr as hslStringToHsla,
  Ae as hslStringToHsva,
  Be as hslaStringToHsva,
  De as hslaToHsl,
  U as hslaToHsva,
  Xr as hsvStringToHsva,
  Ee as hsvaStringToHsva,
  L as hsvaToHex,
  Ne as hsvaToHexa,
  ke as hsvaToHslString,
  G as hsvaToHsla,
  oe as hsvaToHslaString,
  Pe as hsvaToHsv,
  $r as hsvaToHsvString,
  zr as hsvaToHsvaString,
  Or as hsvaToRgbString,
  X as hsvaToRgba,
  te as hsvaToRgbaString,
  ce as parseHue,
  qr as rgbStringToHsva,
  je as rgbaStringToHsva,
  pe as rgbaToHex,
  ge as rgbaToHexa,
  W as rgbaToHsva,
  Se as rgbaToRgb,
  N as validHex,
};
