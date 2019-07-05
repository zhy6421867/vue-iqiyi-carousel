function Swipe (t, e) {
  var n, i, r, a, o, s, c, u, l, d, p, f, h, m = 0,
    v = -1,
    y = null,
    b = null,
    g = null,
    w = (document.documentElement.clientWidth, 0),
    _ = {
      handleEvent: function (t) {
        switch (o && t.stopPropagation(), t.type) {
          case "touchstart":
            this.onTouchStart(t);
            break;
          case "touchmove":
            this.onTouchMove(t);
            break;
          case "touchend":
            this.onTouchEnd(t);
            break;
          case "webkitTransitionEnd":
          case "msTransitionEnd":
          case "oTransitionEnd":
          case "otransitionend":
          case "transitionend":
            this.onTransitionEnd(t);
            break
        }
      },
      onTouchStart: function (t) {
        var e = t.touches[0];
        l = {
          x: e.pageX,
          y: e.pageY,
          time: +new Date
        }, d = void 0, p = {}
      },
      onTouchMove: function (t) {
        if (a && t.preventDefault(), !(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
          a && t.preventDefault();
          var e = t.touches[0];
          p = {
            x: e.pageX - l.x,
            y: e.pageY - l.y
          }, "undefined" == typeof d && (d = !!(d || Math.abs(p.x) < Math.abs(p.y))), d || (t.preventDefault(), E(), V(q(m - 2), p.x + $(-2), 0), V(q(m - 1), p.x + $(-1), 0), V(q(m), p.x + $(0), 0), V(q(m + 1), p.x + $(1), 0), V(q(m + 2), p.x + $(2), 0))
        }
      },
      onTouchEnd: function (t) {
        var e = +new Date - l.time,
          n = Number(e) < 250 && Math.abs(p.x) > 20 || Math.abs(p.x) > w / 2,
          i = p.x < 0 ? -1 : 1;
        !d && n ? A(m, r, i) : (V(q(m - 2), $(-2), r), V(q(m - 1), $(-1), r), V(q(m), $(0), r), V(q(m + 1), $(1), r), V(q(m + 2), $(2), r)), O()
      },
      onTransitionEnd: function (t) {
        var e = b.reduce(function (e, n, i) {
          return n === t.target ? i : e
        }, -1);
        m === e && O()
      }
    };

  function k() {
    t && t.children.length && (g = t, R(), x(e), T(), C(), O(), "undefined" !== typeof window && window.addEventListener("orientationchange" in window ? "orientationchange" : "resize", function (t) {
      B()
    }))
  }

  function x(t) {
    t = t || {}, n = t.direction || "left", i = t.delay || 2e3, r = t.speed || 300, a = t.disableScroll || !1, o = t.stopPropagation || !1, s = t.startIndex || 0, c = !1 !== t.autoPlay, u = "function" === typeof t.callback ? t.callback : function () {}
  }

  function C() {
    m = s || 0, v = "left" === n ? -1 : 1, b.forEach(function (t) {
      t.style.position = "absolute"
    }), S(), I(), N(m), b.forEach(function (t) {
      t.style.visibility = "visible"
    })
  }

  function S() {
    var t = b.length;
    if (!(t >= 5)) {
      switch (t) {
        case 4:
        case 3:
          e();
          break;
        case 2:
          e(2);
          break;
        case 1:
          e(4);
          break
      }
      R()
    }

    function e() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        n = document.createDocumentFragment();
      while (e-- > 0)
        for (var i = 0; i < t; i++) {
          var r = b[i].cloneNode(!0);
          r.classList.remove("selected"), n.appendChild(r)
        }
      g.appendChild(n)
    }
  }

  function T() {
    var e = t;
    e.addEventListener("touchstart", _, !1), e.addEventListener("touchmove", _, !1), e.addEventListener("touchend", _, !1), e.addEventListener("webkitTransitionEnd", _, !1), e.addEventListener("msTransitionEnd", _, !1), e.addEventListener("oTransitionEnd", _, !1), e.addEventListener("otransitionend", _, !1), e.addEventListener("transitionend", _, !1)
  }

  function I() {
    w = g.offsetWidth;
    var t = q(m),
      e = q(m + 1),
      n = t.offsetWidth,
      i = e.offsetWidth;
    f = i, h = (w - n) / 2
  }

  function O() {
    c && (y && E(), y = setTimeout(function () {
      j()
    }, i))
  }

  function j() {
    A(m, r, v)
  }

  function P() {
    A(m, r, -1 * v)
  }

  function E() {
    clearTimeout(y)
  }

  function A(t, e, n) {
    setTimeout(function () {
      var i = q(t + 2 * n);
      i.style.visibility = "hidden", V(i, $(-2 * n), 0), i.style.visibility = "visible", V(q(t + 1 * n), $(2 * n), e), V(q(t), $(1 * n), e);
      var r = q(t - 1 * n);
      Array.prototype.slice.call(r.parentNode.children).forEach(function (t) {
        t.classList.remove("selected")
      }), V(r, $(0), e), r.classList.add("selected"), V(q(t - 2 * n), $(-1 * n), e), m = L(m - 1 * n), setTimeout(function () {
        u(m, q(m))
      }, 0)
    }, 20)
  }

  function R() {
    b = Array.prototype.slice.call(g.children)
  }

  function N(t) {
    for (var e = 0, n = b.length; e < n; e++) {
      var i = b[e],
        r = e;
      V(i, $(-2 * v), 0), i.setAttribute("data-index", r)
    }
    V(q(t - 2), $(-2), 0), V(q(t - 1), $(-1), 0), V(q(t), $(0), 0), V(q(t + 1), $(1), 0), V(q(t + 2), $(2), 0)
  }

  function $(t) {
    var e, n = h,
      i = -f + h,
      r = w - h;
    return 0 == t ? e = n : t < 0 ? e = i + (t + 1) * f : t > 0 && (e = r + (t - 1) * f), e
  }

  function q(t) {
    return b[L(t)]
  }

  function L(t) {
    return (b.length + t % b.length) % b.length
  }

  function V(t, e, n) {
    var i = t,
      r = i && i.style;
    r && (r.webkitTransitionDuration = r.MozTransitionDuration = r.msTransitionDuration = r.OTransitionDuration = r.transitionDuration = n + "ms", r.webkitTransform = "translate(" + e + "px,0)translateZ(0)", r.msTransform = r.MozTransform = r.OTransform = "translateX(" + e + "px)")
  }

  function B() {
    E(), setTimeout(function () {
      I(), N(m), O()
    }, 200)
  }
  return k(), {
    start: function () {
      O()
    },
    prev: function () {
      E(), P()
    },
    next: function () {
      E(), j()
    },
    stop: function () {
      E()
    },
    refresh: function () {
      B()
    }
  }
}

export default Swipe
