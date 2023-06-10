function k() {
}
const bt = (t) => t;
function Me(t) {
  return t();
}
function He() {
  return /* @__PURE__ */ Object.create(null);
}
function T(t) {
  t.forEach(Me);
}
function _e(t) {
  return typeof t == "function";
}
function Z(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let he;
function ye(t, e) {
  return he || (he = document.createElement("a")), he.href = e, t === he.href;
}
function vt(t) {
  return Object.keys(t).length === 0;
}
function yt(t, ...e) {
  if (t == null)
    return k;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function it(t, e, n) {
  t.$$.on_destroy.push(yt(e, n));
}
function $t(t, e, n) {
  return t.set(n), e;
}
const st = typeof window < "u";
let wt = st ? () => window.performance.now() : () => Date.now(), Oe = st ? (t) => requestAnimationFrame(t) : k;
const X = /* @__PURE__ */ new Set();
function ct(t) {
  X.forEach((e) => {
    e.c(t) || (X.delete(e), e.f());
  }), X.size !== 0 && Oe(ct);
}
function kt(t) {
  let e;
  return X.size === 0 && Oe(ct), {
    promise: new Promise((n) => {
      X.add(e = { c: t, f: n });
    }),
    abort() {
      X.delete(e);
    }
  };
}
const xt = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in xt;
function u(t, e) {
  t.appendChild(e);
}
function at(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function Ct(t) {
  const e = p("style");
  return Et(at(t), e), e.sheet;
}
function Et(t, e) {
  return u(t.head || t, e), e.sheet;
}
function w(t, e, n) {
  t.insertBefore(e, n || null);
}
function C(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function je(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function p(t) {
  return document.createElement(t);
}
function H(t) {
  return document.createTextNode(t);
}
function $() {
  return H(" ");
}
function Ft() {
  return H("");
}
function L(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function m(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function St(t) {
  return Array.from(t.childNodes);
}
function $e(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function Pe(t, e) {
  t.value = e ?? "";
}
function Q(t, e, n) {
  for (let r = 0; r < t.options.length; r += 1) {
    const i = t.options[r];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Se(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function Nt(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(t, n, r, e), i;
}
function fe(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
const ge = /* @__PURE__ */ new Map();
let be = 0;
function Rt(t) {
  let e = 5381, n = t.length;
  for (; n--; )
    e = (e << 5) - e ^ t.charCodeAt(n);
  return e >>> 0;
}
function At(t, e) {
  const n = { stylesheet: Ct(e), rules: {} };
  return ge.set(t, n), n;
}
function Be(t, e, n, r, i, a, o, l = 0) {
  const c = 16.666 / r;
  let s = `{
`;
  for (let v = 0; v <= 1; v += c) {
    const y = e + (n - e) * a(v);
    s += v * 100 + `%{${o(y, 1 - y)}}
`;
  }
  const d = s + `100% {${o(n, 1 - n)}}
}`, f = `__svelte_${Rt(d)}_${l}`, h = at(t), { stylesheet: _, rules: g } = ge.get(h) || At(h, t);
  g[f] || (g[f] = !0, _.insertRule(`@keyframes ${f} ${d}`, _.cssRules.length));
  const b = t.style.animation || "";
  return t.style.animation = `${b ? `${b}, ` : ""}${f} ${r}ms linear ${i}ms 1 both`, be += 1, f;
}
function Mt(t, e) {
  const n = (t.style.animation || "").split(", "), r = n.filter(
    e ? (a) => a.indexOf(e) < 0 : (a) => a.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), i = n.length - r.length;
  i && (t.style.animation = r.join(", "), be -= i, be || Ot());
}
function Ot() {
  Oe(() => {
    be || (ge.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && C(e);
    }), ge.clear());
  });
}
let ce;
function ie(t) {
  ce = t;
}
function qe() {
  if (!ce)
    throw new Error("Function called outside component initialization");
  return ce;
}
function ut(t) {
  qe().$$.on_mount.push(t);
}
function jt(t, e) {
  return qe().$$.context.set(t, e), e;
}
function qt(t) {
  return qe().$$.context.get(t);
}
const G = [], Je = [];
let Y = [];
const Ke = [], zt = /* @__PURE__ */ Promise.resolve();
let Ae = !1;
function Lt() {
  Ae || (Ae = !0, zt.then(W));
}
function D(t) {
  Y.push(t);
}
const Ne = /* @__PURE__ */ new Set();
let U = 0;
function W() {
  if (U !== 0)
    return;
  const t = ce;
  do {
    try {
      for (; U < G.length; ) {
        const e = G[U];
        U++, ie(e), Dt(e.$$);
      }
    } catch (e) {
      throw G.length = 0, U = 0, e;
    }
    for (ie(null), G.length = 0, U = 0; Je.length; )
      Je.pop()();
    for (let e = 0; e < Y.length; e += 1) {
      const n = Y[e];
      Ne.has(n) || (Ne.add(n), n());
    }
    Y.length = 0;
  } while (G.length);
  for (; Ke.length; )
    Ke.pop()();
  Ae = !1, Ne.clear(), ie(t);
}
function Dt(t) {
  if (t.fragment !== null) {
    t.update(), T(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(D);
  }
}
function Tt(t) {
  const e = [], n = [];
  Y.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), Y = e;
}
let oe;
function It() {
  return oe || (oe = Promise.resolve(), oe.then(() => {
    oe = null;
  })), oe;
}
function Re(t, e, n) {
  t.dispatchEvent(Nt(`${e ? "intro" : "outro"}${n}`));
}
const me = /* @__PURE__ */ new Set();
let z;
function we() {
  z = {
    r: 0,
    c: [],
    p: z
    // parent group
  };
}
function ke() {
  z.r || T(z.c), z = z.p;
}
function N(t, e) {
  t && t.i && (me.delete(t), t.i(e));
}
function j(t, e, n, r) {
  if (t && t.o) {
    if (me.has(t))
      return;
    me.add(t), z.c.push(() => {
      me.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
const Wt = { duration: 0 };
function Ue(t, e, n, r) {
  const i = { direction: "both" };
  let a = e(t, n, i), o = r ? 0 : 1, l = null, c = null, s = null;
  function d() {
    s && Mt(t, s);
  }
  function f(_, g) {
    const b = _.b - o;
    return g *= Math.abs(b), {
      a: o,
      b: _.b,
      d: b,
      duration: g,
      start: _.start,
      end: _.start + g,
      group: _.group
    };
  }
  function h(_) {
    const { delay: g = 0, duration: b = 300, easing: v = bt, tick: y = k, css: O } = a || Wt, x = {
      start: wt() + g,
      b: _
    };
    _ || (x.group = z, z.r += 1), l || c ? c = x : (O && (d(), s = Be(t, o, _, b, g, v, O)), _ && y(0, 1), l = f(x, b), D(() => Re(t, _, "start")), kt((A) => {
      if (c && A > c.start && (l = f(c, b), c = null, Re(t, l.b, "start"), O && (d(), s = Be(t, o, l.b, l.duration, 0, v, a.css))), l) {
        if (A >= l.end)
          y(o = l.b, 1 - o), Re(t, l.b, "end"), c || (l.b ? d() : --l.group.r || T(l.group.c)), l = null;
        else if (A >= l.start) {
          const E = A - l.start;
          o = l.a + l.d * v(E / l.duration), y(o, 1 - o);
        }
      }
      return !!(l || c);
    }));
  }
  return {
    run(_) {
      _e(a) ? It().then(() => {
        a = a(i), h(_);
      }) : h(_);
    },
    end() {
      d(), l = c = null;
    }
  };
}
const Ht = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
[...Ht];
function ve(t) {
  t && t.c();
}
function ae(t, e, n, r) {
  const { fragment: i, after_update: a } = t.$$;
  i && i.m(e, n), r || D(() => {
    const o = t.$$.on_mount.map(Me).filter(_e);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : T(o), t.$$.on_mount = [];
  }), a.forEach(D);
}
function ue(t, e) {
  const n = t.$$;
  n.fragment !== null && (Tt(n.after_update), T(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Pt(t, e) {
  t.$$.dirty[0] === -1 && (G.push(t), Lt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function de(t, e, n, r, i, a, o, l = [-1]) {
  const c = ce;
  ie(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: k,
    not_equal: i,
    bound: He(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: He(),
    dirty: l,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  o && o(s.root);
  let d = !1;
  if (s.ctx = n ? n(t, e.props || {}, (f, h, ..._) => {
    const g = _.length ? _[0] : h;
    return s.ctx && i(s.ctx[f], s.ctx[f] = g) && (!s.skip_bound && s.bound[f] && s.bound[f](g), d && Pt(t, f)), h;
  }) : [], s.update(), d = !0, T(s.before_update), s.fragment = r ? r(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = St(e.target);
      s.fragment && s.fragment.l(f), f.forEach(C);
    } else
      s.fragment && s.fragment.c();
    e.intro && N(t.$$.fragment), ae(t, e.target, e.anchor, e.customElement), W();
  }
  ie(c);
}
let ee;
typeof HTMLElement == "function" && (ee = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(Me).filter(_e);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    T(this.$$.on_disconnect);
  }
  $destroy() {
    ue(this, 1), this.$destroy = k;
  }
  $on(t, e) {
    if (!_e(e))
      return k;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const r = n.indexOf(e);
      r !== -1 && n.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !vt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
const V = [];
function ft(t, e = k) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (Z(t, l) && (t = l, n)) {
      const c = !V.length;
      for (const s of r)
        s[1](), V.push(s, t);
      if (c) {
        for (let s = 0; s < V.length; s += 2)
          V[s][0](V[s + 1]);
        V.length = 0;
      }
    }
  }
  function a(l) {
    i(l(t));
  }
  function o(l, c = k) {
    const s = [l, c];
    return r.add(s), r.size === 1 && (n = e(i) || k), l(t), () => {
      r.delete(s), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
const se = ft([]);
function Bt(t) {
  let e, n;
  return {
    c() {
      e = p("div"), n = H(
        /*message*/
        t[0]
      ), this.c = k, m(e, "class", "alert alert-danger"), m(e, "role", "alert");
    },
    m(r, i) {
      w(r, e, i), u(e, n);
    },
    p(r, [i]) {
      i & /*message*/
      1 && $e(
        n,
        /*message*/
        r[0]
      );
    },
    i: k,
    o: k,
    d(r) {
      r && C(e);
    }
  };
}
function Jt(t, e, n) {
  let { message: r = "" } = e;
  return t.$$set = (i) => {
    "message" in i && n(0, r = i.message);
  }, [r];
}
class dt extends ee {
  constructor(e) {
    super(), de(
      this,
      {
        target: this.shadowRoot,
        props: fe(this.attributes),
        customElement: !0
      },
      Jt,
      Bt,
      Z,
      { message: 0 },
      null
    ), e && (e.target && w(e.target, this, e.anchor), e.props && (this.$set(e.props), W()));
  }
  static get observedAttributes() {
    return ["message"];
  }
  get message() {
    return this.$$.ctx[0];
  }
  set message(e) {
    this.$$set({ message: e }), W();
  }
}
customElements.define("alert-component", dt);
function Ve(t, e, n) {
  const r = t.slice();
  return r[18] = e[n], r;
}
function Ge(t) {
  let e, n;
  return e = new dt({
    props: {
      message: "File/Folder with this name already exists."
    }
  }), {
    c() {
      ve(e.$$.fragment);
    },
    m(r, i) {
      ae(e, r, i), n = !0;
    },
    i(r) {
      n || (N(e.$$.fragment, r), n = !0);
    },
    o(r) {
      j(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ue(e, r);
    }
  };
}
function Qe(t) {
  let e, n, r, i, a, o, l = (
    /*filterList*/
    t[6]
  ), c = [];
  for (let s = 0; s < l.length; s += 1)
    c[s] = Xe(Ve(t, l, s));
  return {
    c() {
      e = p("div"), n = p("select");
      for (let s = 0; s < c.length; s += 1)
        c[s].c();
      r = $(), i = p("label"), i.textContent = "Folder", m(n, "class", "form-select"), m(n, "id", "folder"), n.disabled = /*canCreateChild*/
      t[5], /*selectedFolder*/
      t[4] === void 0 && D(() => (
        /*select_change_handler*/
        t[13].call(n)
      )), m(i, "for", "folder"), m(e, "class", "form-floating mb-3");
    },
    m(s, d) {
      w(s, e, d), u(e, n);
      for (let f = 0; f < c.length; f += 1)
        c[f] && c[f].m(n, null);
      Q(
        n,
        /*selectedFolder*/
        t[4],
        !0
      ), u(e, r), u(e, i), a || (o = L(
        n,
        "change",
        /*select_change_handler*/
        t[13]
      ), a = !0);
    },
    p(s, d) {
      if (d & /*filterList*/
      64) {
        l = /*filterList*/
        s[6];
        let f;
        for (f = 0; f < l.length; f += 1) {
          const h = Ve(s, l, f);
          c[f] ? c[f].p(h, d) : (c[f] = Xe(h), c[f].c(), c[f].m(n, null));
        }
        for (; f < c.length; f += 1)
          c[f].d(1);
        c.length = l.length;
      }
      d & /*canCreateChild*/
      32 && (n.disabled = /*canCreateChild*/
      s[5]), d & /*selectedFolder, filterList*/
      80 && Q(
        n,
        /*selectedFolder*/
        s[4]
      );
    },
    d(s) {
      s && C(e), je(c, s), a = !1, o();
    }
  };
}
function Xe(t) {
  let e, n = (
    /*folder*/
    t[18].name + ""
  ), r, i;
  return {
    c() {
      e = p("option"), r = H(n), e.__value = i = /*folder*/
      t[18].name, e.value = e.__value;
    },
    m(a, o) {
      w(a, e, o), u(e, r);
    },
    p(a, o) {
      o & /*filterList*/
      64 && n !== (n = /*folder*/
      a[18].name + "") && $e(r, n), o & /*filterList*/
      64 && i !== (i = /*folder*/
      a[18].name) && (e.__value = i, e.value = e.__value);
    },
    d(a) {
      a && C(e);
    }
  };
}
function Kt(t) {
  let e, n, r, i, a, o, l, c, s, d, f, h, _, g, b, v, y, O, x, A, E, M, te, P, B, J, xe, ne, ze, re, le, Le, I, De, pe, Te, Ce, Ie, Ee, K, Fe, We, F = (
    /*isDuplicate*/
    t[3] && Ge()
  ), R = (
    /*selectLevel*/
    t[2] === "child" && Qe(t)
  );
  return {
    c() {
      e = p("div"), n = p("div"), r = p("div"), r.innerHTML = "<h3>Create Files or Folders</h3>", i = $(), F && F.c(), a = $(), o = p("div"), l = p("input"), c = $(), s = p("label"), s.textContent = "Name", d = $(), f = p("div"), h = p("select"), _ = p("option"), _.textContent = "File", g = p("option"), g.textContent = "Folder", b = $(), v = p("label"), v.textContent = "Type", y = $(), O = p("div"), x = p("select"), A = p("option"), A.textContent = "Root", E = p("option"), E.textContent = "Child", M = $(), te = p("label"), te.textContent = "Select Level", P = $(), R && R.c(), B = $(), J = p("div"), xe = p("div"), ne = p("button"), ne.textContent = "Reset", ze = $(), re = p("div"), le = p("button"), le.textContent = "Cancel", Le = $(), I = p("button"), De = H("Save"), Te = $(), Ce = p("div"), Ie = $(), Ee = p("style"), Ee.textContent = `.left-tab {
      padding-right: 1.5rem !important;
    }
    .form-container {
      width: 80%;
    }

    .form-heading {
      margin-bottom: 40px;
    }

    .form-heading h3 {
      color: #47d7ac;
    }

    .action-btns {
      margin-top: 40px;
    }

    .action-btns .btn {
      border-radius: 20px;
      padding: 12px 24px;
      font-size: 14px;
      line-height: 16px;
      min-width: 100px;
    }

    .action-btns .btn-primary {
      background-color: #13294b;
      border-color: #13294b;
    }

    .action-btns .btn-outline-primary {
      border-color: #13294b;
      color: #13294b;
    }

    .action-btns .btn-primary.disabled,
    .action-btns .btn-primary:disabled {
      background-color: #13294b;
    }

    @media only screen and (max-width: 1050px) {
      .form-container {
        width: 100%;
      }
    }

    @media only screen and (max-width: 768px) {
      .form-container {
        margin-bottom: 20px;
      }

      .left-tab {
        padding-right: 0;
      }
    }`, this.c = k, m(r, "class", "form-heading"), m(l, "type", "text"), m(l, "class", "form-control"), m(l, "id", "name"), m(l, "placeholder", "Enter file or Folder name"), m(s, "for", "name"), m(o, "class", "form-floating mb-3"), _.__value = "file", _.value = _.__value, g.__value = "folder", g.value = g.__value, m(h, "class", "form-select"), m(h, "id", "type"), /*type*/
      t[1] === void 0 && D(() => (
        /*select0_change_handler*/
        t[11].call(h)
      )), m(v, "for", "type"), m(f, "class", "form-floating mb-3"), A.__value = "root", A.value = A.__value, E.__value = "child", E.value = E.__value, m(x, "class", "form-select"), m(x, "id", "level"), x.disabled = /*canCreateChild*/
      t[5], /*selectLevel*/
      t[2] === void 0 && D(() => (
        /*select1_change_handler*/
        t[12].call(x)
      )), m(te, "for", "level"), m(O, "class", "form-floating mb-3"), m(ne, "class", "btn btn-outline-primary ms-1"), m(le, "class", "btn btn-outline-primary me-1"), I.disabled = pe = !/*name*/
      t[0], m(I, "class", "btn btn-primary ms-1"), m(J, "class", "d-flex justify-content-between action-btns"), m(Ce, "class", "d-flex justify-content-center mt-1"), m(n, "class", "form-container"), m(e, "class", "col-md-7 left-tab");
    },
    m(S, q) {
      w(S, e, q), u(e, n), u(n, r), u(n, i), F && F.m(n, null), u(n, a), u(n, o), u(o, l), Pe(
        l,
        /*name*/
        t[0]
      ), u(o, c), u(o, s), u(n, d), u(n, f), u(f, h), u(h, _), u(h, g), Q(
        h,
        /*type*/
        t[1],
        !0
      ), u(f, b), u(f, v), u(n, y), u(n, O), u(O, x), u(x, A), u(x, E), Q(
        x,
        /*selectLevel*/
        t[2],
        !0
      ), u(O, M), u(O, te), u(n, P), R && R.m(n, null), u(n, B), u(n, J), u(J, xe), u(xe, ne), u(J, ze), u(J, re), u(re, le), u(re, Le), u(re, I), u(I, De), u(n, Te), u(n, Ce), u(e, Ie), u(e, Ee), K = !0, Fe || (We = [
        L(
          l,
          "input",
          /*input_input_handler*/
          t[10]
        ),
        L(
          h,
          "change",
          /*select0_change_handler*/
          t[11]
        ),
        L(
          x,
          "change",
          /*select1_change_handler*/
          t[12]
        ),
        L(
          ne,
          "click",
          /*resetStore*/
          t[9]
        ),
        L(
          le,
          "click",
          /*handleCancel*/
          t[8]
        ),
        L(
          I,
          "click",
          /*handleSave*/
          t[7]
        )
      ], Fe = !0);
    },
    p(S, [q]) {
      /*isDuplicate*/
      S[3] ? F ? q & /*isDuplicate*/
      8 && N(F, 1) : (F = Ge(), F.c(), N(F, 1), F.m(n, a)) : F && (we(), j(F, 1, 1, () => {
        F = null;
      }), ke()), q & /*name*/
      1 && l.value !== /*name*/
      S[0] && Pe(
        l,
        /*name*/
        S[0]
      ), q & /*type*/
      2 && Q(
        h,
        /*type*/
        S[1]
      ), (!K || q & /*canCreateChild*/
      32) && (x.disabled = /*canCreateChild*/
      S[5]), q & /*selectLevel*/
      4 && Q(
        x,
        /*selectLevel*/
        S[2]
      ), /*selectLevel*/
      S[2] === "child" ? R ? R.p(S, q) : (R = Qe(S), R.c(), R.m(n, B)) : R && (R.d(1), R = null), (!K || q & /*name*/
      1 && pe !== (pe = !/*name*/
      S[0])) && (I.disabled = pe);
    },
    i(S) {
      K || (N(F), K = !0);
    },
    o(S) {
      j(F), K = !1;
    },
    d(S) {
      S && C(e), F && F.d(), R && R.d(), Fe = !1, T(We);
    }
  };
}
function Ut(t, e, n) {
  let r = "", i = "file", a = "root", o = !1, l = "", c = [], s = !0, d = [];
  function f() {
    const E = c.filter((M) => M.type === "folder").length;
    n(5, s = E === 0);
  }
  function h(E) {
    return E.some((M) => M.name === r);
  }
  function _() {
    const E = { name: r, type: i, children: [] }, M = l ? c.find(({ name: P }) => P === l) : null;
    if (h(M ? M.children : c))
      return n(3, o = !0), !1;
    n(3, o = !1), M ? M.children.push(E) : c.push(E), se.update((P) => {
      const B = [...P];
      return localStorage.setItem("store", JSON.stringify(B)), B;
    }), f(), b();
  }
  const g = () => {
    n(3, o = !1), b();
  }, b = () => {
    n(0, r = ""), n(1, i = "file"), n(2, a = "root"), n(4, l = "");
  }, v = () => {
    localStorage.removeItem("store"), se.set([]);
  };
  ut(() => {
    se.subscribe((E) => {
      c = E, n(6, d = c.filter((M) => M.type === "folder")), f();
    });
  });
  function y() {
    r = this.value, n(0, r);
  }
  function O() {
    i = Se(this), n(1, i);
  }
  function x() {
    a = Se(this), n(2, a);
  }
  function A() {
    l = Se(this), n(4, l), n(6, d);
  }
  return [
    r,
    i,
    a,
    o,
    l,
    s,
    d,
    _,
    g,
    v,
    y,
    O,
    x,
    A
  ];
}
class pt extends ee {
  constructor(e) {
    super(), de(
      this,
      {
        target: this.shadowRoot,
        props: fe(this.attributes),
        customElement: !0
      },
      Ut,
      Kt,
      Z,
      {},
      null
    ), e && e.target && w(e.target, this, e.anchor);
  }
}
customElements.define("form-component", pt);
function Vt(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Ye(t) {
  return t /= 0.5, t < 1 ? 0.5 * t * t : (t--, -0.5 * (t * (t - 2) - 1));
}
function Ze(t, { delay: e = 0, duration: n = 400, easing: r = Vt, axis: i = "y" } = {}) {
  const a = getComputedStyle(t), o = +a.opacity, l = i === "y" ? "height" : "width", c = parseFloat(a[l]), s = i === "y" ? ["top", "bottom"] : ["left", "right"], d = s.map((y) => `${y[0].toUpperCase()}${y.slice(1)}`), f = parseFloat(a[`padding${d[0]}`]), h = parseFloat(a[`padding${d[1]}`]), _ = parseFloat(a[`margin${d[0]}`]), g = parseFloat(a[`margin${d[1]}`]), b = parseFloat(a[`border${d[0]}Width`]), v = parseFloat(a[`border${d[1]}Width`]);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (y) => `overflow: hidden;opacity: ${Math.min(y * 20, 1) * o};${l}: ${y * c}px;padding-${s[0]}: ${y * f}px;padding-${s[1]}: ${y * h}px;margin-${s[0]}: ${y * _}px;margin-${s[1]}: ${y * g}px;border-${s[0]}-width: ${y * b}px;border-${s[1]}-width: ${y * v}px;`
  };
}
function et(t, e, n) {
  const r = t.slice();
  return r[7] = e[n], r;
}
function tt(t) {
  let e, n, r, i, a, o = (
    /*folder*/
    t[1].name + ""
  ), l, c, s, d;
  function f(g, b) {
    return (
      /*folder*/
      g[1].type == "folder" ? Qt : Gt
    );
  }
  let h = f(t), _ = h(t);
  return {
    c() {
      e = p("div"), n = p("div"), r = p("h3"), _.c(), i = $(), a = p("span"), l = H(o), m(n, "class", c = "text " + /*folder*/
      (t[1].type == "folder" ? (
        /*folderClass*/
        t[2]
      ) : "")), m(e, "class", "header");
    },
    m(g, b) {
      w(g, e, b), u(e, n), u(n, r), _.m(r, null), u(r, i), u(r, a), u(a, l), s || (d = L(
        e,
        "click",
        /*handleClick*/
        t[4]
      ), s = !0);
    },
    p(g, b) {
      h !== (h = f(g)) && (_.d(1), _ = h(g), _ && (_.c(), _.m(r, i))), b & /*folder*/
      2 && o !== (o = /*folder*/
      g[1].name + "") && $e(l, o), b & /*folder, folderClass*/
      6 && c !== (c = "text " + /*folder*/
      (g[1].type == "folder" ? (
        /*folderClass*/
        g[2]
      ) : "")) && m(n, "class", c);
    },
    d(g) {
      g && C(e), _.d(), s = !1, d();
    }
  };
}
function Gt(t) {
  let e, n;
  return {
    c() {
      e = p("img"), ye(e.src, n = "./assets/file.svg") || m(e, "src", n), m(e, "alt", "file");
    },
    m(r, i) {
      w(r, e, i);
    },
    d(r) {
      r && C(e);
    }
  };
}
function Qt(t) {
  let e, n;
  return {
    c() {
      e = p("img"), ye(e.src, n = "./assets/folder.svg") || m(e, "src", n), m(e, "alt", "folder");
    },
    m(r, i) {
      w(r, e, i);
    },
    d(r) {
      r && C(e);
    }
  };
}
function nt(t) {
  let e, n, r, i, a = (
    /*folder*/
    t[1].children
  ), o = [];
  for (let l = 0; l < a.length; l += 1)
    o[l] = rt(et(t, a, l));
  return {
    c() {
      e = p("div"), n = p("ul");
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      m(e, "class", "details");
    },
    m(l, c) {
      w(l, e, c), u(e, n);
      for (let s = 0; s < o.length; s += 1)
        o[s] && o[s].m(n, null);
      i = !0;
    },
    p(l, c) {
      if (t = l, c & /*folder*/
      2) {
        a = /*folder*/
        t[1].children;
        let s;
        for (s = 0; s < a.length; s += 1) {
          const d = et(t, a, s);
          o[s] ? o[s].p(d, c) : (o[s] = rt(d), o[s].c(), o[s].m(n, null));
        }
        for (; s < o.length; s += 1)
          o[s].d(1);
        o.length = a.length;
      }
    },
    i(l) {
      i || (D(() => {
        i && (r || (r = Ue(e, Ze, { duration: 150, easing: Ye }, !0)), r.run(1));
      }), i = !0);
    },
    o(l) {
      r || (r = Ue(e, Ze, { duration: 150, easing: Ye }, !1)), r.run(0), i = !1;
    },
    d(l) {
      l && C(e), je(o, l), l && r && r.end();
    }
  };
}
function Xt(t) {
  let e, n;
  return {
    c() {
      e = p("img"), ye(e.src, n = "./assets/file.svg") || m(e, "src", n), m(e, "alt", "file");
    },
    m(r, i) {
      w(r, e, i);
    },
    d(r) {
      r && C(e);
    }
  };
}
function Yt(t) {
  let e, n;
  return {
    c() {
      e = p("img"), ye(e.src, n = "./assets/folder.svg") || m(e, "src", n), m(e, "alt", "folder");
    },
    m(r, i) {
      w(r, e, i);
    },
    d(r) {
      r && C(e);
    }
  };
}
function rt(t) {
  let e, n, r, i, a = (
    /*child*/
    t[7].name + ""
  ), o, l, c;
  function s(h, _) {
    return (
      /*child*/
      h[7].type == "folder" ? Yt : Xt
    );
  }
  let d = s(t), f = d(t);
  return {
    c() {
      e = p("li"), n = p("div"), f.c(), r = $(), i = p("h3"), o = H(a), c = $(), m(n, "class", l = "text " + /*child*/
      (t[7].type == "folder" ? "accordion-button collapsed" : ""));
    },
    m(h, _) {
      w(h, e, _), u(e, n), f.m(n, null), u(n, r), u(n, i), u(i, o), u(e, c);
    },
    p(h, _) {
      d !== (d = s(h)) && (f.d(1), f = d(h), f && (f.c(), f.m(n, r))), _ & /*folder*/
      2 && a !== (a = /*child*/
      h[7].name + "") && $e(o, a), _ & /*folder*/
      2 && l !== (l = "text " + /*child*/
      (h[7].type == "folder" ? "accordion-button collapsed" : "")) && m(n, "class", l);
    },
    d(h) {
      h && C(e), f.d();
    }
  };
}
function Zt(t) {
  let e, n, r, i, a, o = (
    /*folder*/
    t[1] && /*folder*/
    t[1].name && tt(t)
  ), l = (
    /*open*/
    t[0] && /*folder*/
    t[1].children && /*folder*/
    t[1].children.length && nt(t)
  );
  return {
    c() {
      e = p("div"), o && o.c(), n = $(), l && l.c(), r = $(), i = p("style"), i.textContent = `div.header {\r
      display: flex;\r
      width: 100%;\r
      background-color: #47d7ac;\r
      border-radius: 4px;\r
      color: #fff;\r
      cursor: pointer;\r
    }\r
\r
    .result-container .accordion-button {\r
      background-color: #47d7ac;\r
      border-radius: 4px;\r
    }\r
\r
    .result-container .accordion-button:not(.collapsed) {\r
      background-color: #47d7ac;\r
      border-bottom-left-radius: 0;\r
      border-bottom-right-radius: 0;\r
    }\r
\r
    div.header .text {\r
      flex: 1;\r
      padding: 12px 20px;\r
      white-space: nowrap;\r
      overflow: hidden;\r
      text-overflow: ellipsis;\r
    }\r
\r
    div.header:hover h3 {\r
      color: #fff;\r
    }\r
\r
    div.details {\r
      background-color: #47d7ac;\r
      padding: 1rem;\r
    }\r
\r
    div.details ul {\r
      list-style-type: none;\r
    }\r
\r
    .accordion {\r
      margin-bottom: 5px;\r
    }\r
\r
    .accordion h3 {\r
      font-size: 16px;\r
      margin-bottom: 0;\r
      color: #13294b;\r
      display: flex;\r
      align-items: center;\r
      font-weight: 400;\r
    }\r
\r
    div.details .text.accordion-button {\r
      padding: 0;\r
    }\r
\r
    .accordion h3 img,\r
    div.details .text img {\r
      width: 24px;\r
      height: 24px;\r
      margin-right: 10px;\r
    }\r
\r
    div.details .text {\r
      text-align: left;\r
      cursor: pointer;\r
      display: flex;\r
      align-items: center;\r
    }\r
\r
    h4,\r
    h2 {\r
      cursor: pointer;\r
    }\r
\r
    .text span {\r
      white-space: nowrap;\r
      overflow: hidden;\r
      text-overflow: ellipsis;\r
    }`, this.c = k, m(e, "class", "accordion");
    },
    m(c, s) {
      w(c, e, s), o && o.m(e, null), u(e, n), l && l.m(e, null), u(e, r), u(e, i), a = !0;
    },
    p(c, [s]) {
      /*folder*/
      c[1] && /*folder*/
      c[1].name ? o ? o.p(c, s) : (o = tt(c), o.c(), o.m(e, n)) : o && (o.d(1), o = null), /*open*/
      c[0] && /*folder*/
      c[1].children && /*folder*/
      c[1].children.length ? l ? (l.p(c, s), s & /*open, folder*/
      3 && N(l, 1)) : (l = nt(c), l.c(), N(l, 1), l.m(e, r)) : l && (we(), j(l, 1, 1, () => {
        l = null;
      }), ke());
    },
    i(c) {
      a || (N(l), a = !0);
    },
    o(c) {
      j(l), a = !1;
    },
    d(c) {
      c && C(e), o && o.d(), l && l.d();
    }
  };
}
const ht = {}, en = () => qt(ht), mt = () => {
  const e = { current: ft(null) };
  return jt(ht, e), e;
};
function tn(t, e, n) {
  let r, i, { open: a = !1 } = e, { folder: o } = e;
  const { current: l } = en();
  it(t, l, (d) => n(5, i = d));
  const c = {};
  mt();
  function s() {
    o.type !== "file" && (n(0, a = !a), a && $t(l, i = c, i));
  }
  return t.$$set = (d) => {
    "open" in d && n(0, a = d.open), "folder" in d && n(1, o = d.folder);
  }, t.$$.update = () => {
    t.$$.dirty & /*$current*/
    32 && i !== c && n(0, a = !1), t.$$.dirty & /*open, folder*/
    3 && n(2, r = a && o.children && o.children.length ? "accordion-button" : "accordion-button collapsed");
  }, [a, o, r, l, s, i];
}
class _t extends ee {
  constructor(e) {
    super(), de(
      this,
      {
        target: this.shadowRoot,
        props: fe(this.attributes),
        customElement: !0
      },
      tn,
      Zt,
      Z,
      { open: 0, folder: 1 },
      null
    ), e && (e.target && w(e.target, this, e.anchor), e.props && (this.$set(e.props), W()));
  }
  static get observedAttributes() {
    return ["open", "folder"];
  }
  get open() {
    return this.$$.ctx[0];
  }
  set open(e) {
    this.$$set({ open: e }), W();
  }
  get folder() {
    return this.$$.ctx[1];
  }
  set folder(e) {
    this.$$set({ folder: e }), W();
  }
}
customElements.define("item-component", _t);
function lt(t, e, n) {
  const r = t.slice();
  return r[1] = e[n], r;
}
function nn(t) {
  let e;
  return {
    c() {
      e = p("div"), e.textContent = "No files and folders are created!", m(e, "class", "alert alert-light"), m(e, "role", "alert");
    },
    m(n, r) {
      w(n, e, r);
    },
    p: k,
    i: k,
    o: k,
    d(n) {
      n && C(e);
    }
  };
}
function rn(t) {
  let e, n, r = (
    /*$folderStructure*/
    t[0]
  ), i = [];
  for (let o = 0; o < r.length; o += 1)
    i[o] = ot(lt(t, r, o));
  const a = (o) => j(i[o], 1, 1, () => {
    i[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      e = Ft();
    },
    m(o, l) {
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(o, l);
      w(o, e, l), n = !0;
    },
    p(o, l) {
      if (l & /*$folderStructure*/
      1) {
        r = /*$folderStructure*/
        o[0];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const s = lt(o, r, c);
          i[c] ? (i[c].p(s, l), N(i[c], 1)) : (i[c] = ot(s), i[c].c(), N(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (we(), c = r.length; c < i.length; c += 1)
          a(c);
        ke();
      }
    },
    i(o) {
      if (!n) {
        for (let l = 0; l < r.length; l += 1)
          N(i[l]);
        n = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let l = 0; l < i.length; l += 1)
        j(i[l]);
      n = !1;
    },
    d(o) {
      je(i, o), o && C(e);
    }
  };
}
function ot(t) {
  let e, n;
  return e = new _t({ props: { folder: (
    /*folder*/
    t[1]
  ) } }), {
    c() {
      ve(e.$$.fragment);
    },
    m(r, i) {
      ae(e, r, i), n = !0;
    },
    p(r, i) {
      const a = {};
      i & /*$folderStructure*/
      1 && (a.folder = /*folder*/
      r[1]), e.$set(a);
    },
    i(r) {
      n || (N(e.$$.fragment, r), n = !0);
    },
    o(r) {
      j(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ue(e, r);
    }
  };
}
function ln(t) {
  let e, n, r, i, a, o, l, c, s, d;
  const f = [rn, nn], h = [];
  function _(g, b) {
    var v;
    return (
      /*$folderStructure*/
      (v = g[0]) != null && v.length ? 0 : 1
    );
  }
  return o = _(t), l = h[o] = f[o](t), {
    c() {
      e = p("div"), n = p("div"), r = p("h4"), r.textContent = "File & Folder Structure", i = $(), a = p("div"), l.c(), c = $(), s = p("style"), s.textContent = `.right-tab {
      padding-left: 1.5rem;
    }
    .result-container {
      padding: 20px;
      background-color: #13294b;
      color: #fff;
      border-radius: 10px;
      max-height: 500px;
      display: flex;
      flex-direction: column;
    }
    .result-container h4 {
      font-weight: 300;
      margin-bottom: 20px;
    }
    .accordian-container {
      overflow: auto;
    }

    @media only screen and (max-width: 768px) {
      .ps-4 {
        padding-left: 0 !important;
      }
    }`, this.c = k, m(a, "class", "accordian-container"), m(n, "class", "result-container"), m(e, "class", "col-md-5 right-tab");
    },
    m(g, b) {
      w(g, e, b), u(e, n), u(n, r), u(n, i), u(n, a), h[o].m(a, null), u(e, c), u(e, s), d = !0;
    },
    p(g, [b]) {
      let v = o;
      o = _(g), o === v ? h[o].p(g, b) : (we(), j(h[v], 1, 1, () => {
        h[v] = null;
      }), ke(), l = h[o], l ? l.p(g, b) : (l = h[o] = f[o](g), l.c()), N(l, 1), l.m(a, null));
    },
    i(g) {
      d || (N(l), d = !0);
    },
    o(g) {
      j(l), d = !1;
    },
    d(g) {
      g && C(e), h[o].d();
    }
  };
}
function on(t, e, n) {
  let r;
  return it(t, se, (i) => n(0, r = i)), mt(), [r];
}
class gt extends ee {
  constructor(e) {
    super(), de(
      this,
      {
        target: this.shadowRoot,
        props: fe(this.attributes),
        customElement: !0
      },
      on,
      ln,
      Z,
      {},
      null
    ), e && e.target && w(e.target, this, e.anchor);
  }
}
customElements.define("result-component", gt);
function sn(t) {
  let e, n, r, i, a, o, l, c;
  return r = new pt({}), a = new gt({}), {
    c() {
      e = p("div"), n = p("div"), ve(r.$$.fragment), i = $(), ve(a.$$.fragment), o = $(), l = p("style"), l.textContent = `@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");

    body {
      background-color: #000;
    }

    .svelte-component-wrapper {
      font-family: "Roboto", sans-serif;
      background-color: #fff;
      border-radius: 10px;
      margin-top: 70px;
      padding: 30px 30px 30px 50px;
      box-shadow: 5px 5px 6px 2px rgba(0, 0, 0, 0.1);
      z-index: 10;
      min-width: 420px;
    }`, this.c = k, m(n, "class", "row"), m(e, "class", "container svelte-component-wrapper");
    },
    m(s, d) {
      w(s, e, d), u(e, n), ae(r, n, null), u(n, i), ae(a, n, null), u(e, o), u(e, l), c = !0;
    },
    p: k,
    i(s) {
      c || (N(r.$$.fragment, s), N(a.$$.fragment, s), c = !0);
    },
    o(s) {
      j(r.$$.fragment, s), j(a.$$.fragment, s), c = !1;
    },
    d(s) {
      s && C(e), ue(r), ue(a);
    }
  };
}
function cn(t) {
  return ut(() => {
    const e = localStorage.getItem("store");
    if (e) {
      const n = JSON.parse(e);
      se.set(n);
    }
  }), [];
}
class an extends ee {
  constructor(e) {
    super(), de(
      this,
      {
        target: this.shadowRoot,
        props: fe(this.attributes),
        customElement: !0
      },
      cn,
      sn,
      Z,
      {},
      null
    ), e && e.target && w(e.target, this, e.anchor);
  }
}
customElements.define("file-folder-component", an);
