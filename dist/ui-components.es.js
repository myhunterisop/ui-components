import { defineComponent as _, ref as r, computed as p, watchEffect as m, openBlock as f, createElementBlock as d, mergeProps as g, createCommentVNode as h } from "vue";
const y = ["innerHTML"], I = /* @__PURE__ */ _({
  __name: "UiIco",
  props: {
    name: {},
    dir: {}
  },
  setup(c) {
    const a = c, e = r(null), t = r({}), s = r(""), u = p(
      () => a.dir ? `ui-ico--${a.dir}` : ""
    );
    return m(async () => {
      if (!a.name) {
        e.value = null, t.value = {}, s.value = "";
        return;
      }
      try {
        const n = (await import(`~/assets/icons/${a.name}.svg?raw`)).default;
        e.value = n;
        const o = n.match(/^<svg\s+([^>]*)>([\s\S]*)<\/svg>$/i);
        if (o) {
          const l = {};
          o[1].replace(/([a-zA-Z:-]+)\s*=\s*"([^"]*)"/g, (w, v, i) => (l[v] = i, "")), t.value = l, s.value = o[2];
        } else
          t.value = {}, s.value = "";
      } catch {
        e.value = null, t.value = {}, s.value = "";
      }
    }), (n, o) => e.value ? (f(), d("svg", g({ key: 0 }, t.value, {
      class: ["ui-ico", u.value],
      innerHTML: s.value,
      focusable: "false",
      role: "img"
    }), null, 16, y)) : h("", !0);
  }
});
const k = (c, a) => {
  const e = c.__vccOpts || c;
  for (const [t, s] of a)
    e[t] = s;
  return e;
}, C = /* @__PURE__ */ k(I, [["__scopeId", "data-v-a37584c0"]]);
export {
  C as UiIco
};
