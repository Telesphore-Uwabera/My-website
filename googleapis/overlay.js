google.maps.__gjsload__('overlay', function(_) {
    var Sx = function(a) {
        this.g = a
    }
      , Fpa = function() {}
      , Tx = function(a) {
        a.hu = a.hu || new Fpa;
        return a.hu
    }
      , Gpa = function(a) {
        this.Ea = new _.mj(()=>{
            const b = a.hu;
            if (a.getPanes()) {
                if (a.getProjection()) {
                    if (!b.Qr && a.onAdd)
                        a.onAdd();
                    b.Qr = !0;
                    a.draw()
                }
            } else {
                if (b.Qr)
                    if (a.onRemove)
                        a.onRemove();
                    else
                        a.remove();
                b.Qr = !1
            }
        }
        ,0)
    }
      , Hpa = function(a, b) {
        const c = Tx(a);
        let d = c.Yq;
        d || (d = c.Yq = new Gpa(a));
        _.zb(c.Va || [], _.bh);
        var e = c.sb = c.sb || new _.Sla;
        const f = b.__gm;
        e.bindTo("zoom", f);
        e.bindTo("offset", f);
        e.bindTo("center", f, "projectionCenterQ");
        e.bindTo("projection", b);
        e.bindTo("projectionTopLeft", f);
        e = c.vy = c.vy || new Sx(e);
        e.bindTo("zoom", f);
        e.bindTo("offset", f);
        e.bindTo("projection", b);
        e.bindTo("projectionTopLeft", f);
        a.bindTo("projection", e, "outProjection");
        a.bindTo("panes", f);
        e = ()=>_.nj(d.Ea);
        c.Va = [_.$g(a, "panes_changed", e), _.$g(f, "zoom_changed", e), _.$g(f, "offset_changed", e), _.$g(b, "projection_changed", e), _.$g(f, "projectioncenterq_changed", e)];
        _.nj(d.Ea);
        b instanceof _.sh ? (_.gi(b, "Ox"),
        _.ei(b, 148440)) : b instanceof _.Ai && (_.gi(b, "Oxs"),
        _.ei(b, 181451))
    }
      , Mpa = function(a) {
        if (a) {
            var b = a.getMap();
            if (Ipa(a) !== b && b && b instanceof _.sh) {
                const c = b.__gm;
                c.overlayLayer ? a.__gmop = new Jpa(b,a,c.overlayLayer) : c.vb.then(({fa: d})=>{
                    const e = new Kpa(b,d);
                    d.Qb(e);
                    c.overlayLayer = e;
                    Lpa(a);
                    Mpa(a)
                }
                )
            }
        }
    }
      , Lpa = function(a) {
        if (a) {
            var b = a.__gmop;
            b && (a.__gmop = null,
            b.g.unbindAll(),
            b.g.set("panes", null),
            b.g.set("projection", null),
            b.i.ef(b),
            b.h && (b.h = !1,
            b.g.onRemove ? b.g.onRemove() : b.g.remove()))
        }
    }
      , Ipa = function(a) {
        return (a = a.__gmop) ? a.map : null
    }
      , Npa = function(a, b) {
        a.g.get("projection") != b && (a.g.bindTo("panes", a.map.__gm),
        a.g.set("projection", b))
    };
    _.ta(Sx, _.nh);
    Sx.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.bg(this.get("zoom"))),
        a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    }
    ;
    var Ux = {};
    _.ta(Gpa, _.nh);
    Ux.Be = function(a) {
        if (a) {
            var b = a.getMap();
            (Tx(a).by || null) !== b && (b && Hpa(a, b),
            Tx(a).by = b)
        }
    }
    ;
    Ux.ef = function(a) {
        const b = Tx(a);
        var c = b.sb;
        c && c.unbindAll();
        (c = b.vy) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Va && _.zb(b.Va, _.bh);
        b.Va = null;
        b.Yq && (b.Yq.Ea.Rc(),
        b.Yq = null);
        delete Tx(a).by
    }
    ;
    var Vx = {}
      , Jpa = class {
        constructor(a, b, c) {
            this.map = a;
            this.g = b;
            this.i = c;
            this.h = !1;
            _.gi(this.map, "Ox");
            _.ei(this.map, 148440);
            c.Be(this)
        }
        draw() {
            this.h || (this.h = !0,
            this.g.onAdd && this.g.onAdd());
            this.g.draw && this.g.draw()
        }
    }
      , Kpa = class {
        constructor(a, b) {
            this.l = a;
            this.i = b;
            this.g = null;
            this.h = []
        }
        dispose() {}
        kc(a, b, c, d, e, f, g, k) {
            const m = this.g = this.g || new _.It(this.l,this.i,()=>{}
            );
            m.kc(a, b, c, d, e, f, g, k);
            for (const q of this.h)
                Npa(q, m),
                q.draw()
        }
        Be(a) {
            this.h.push(a);
            this.g && Npa(a, this.g);
            this.i.refresh()
        }
        ef(a) {
            _.Ob(this.h, a)
        }
    }
    ;
    Vx.Be = Mpa;
    Vx.ef = Lpa;
    _.Qg("overlay", {
        pw: function(a) {
            if (a) {
                (0,
                Ux.ef)(a);
                (0,
                Vx.ef)(a);
                var b = a.getMap();
                b && (b instanceof _.sh ? (0,
                Vx.Be)(a) : (0,
                Ux.Be)(a))
            }
        },
        preventMapHitsFrom: a=>{
            _.jp(a, {
                Ve: ({event: b})=>{
                    _.ao(b.La)
                }
                ,
                zd: b=>_.Wo(b),
                Pj: b=>_.Xo(b),
                ve: b=>_.Xo(b),
                Qd: b=>_.Yo(b)
            }).Il(!0)
        }
        ,
        preventMapHitsAndGesturesFrom: a=>{
            a.addEventListener("click", _.Yg);
            a.addEventListener("contextmenu", _.Yg);
            a.addEventListener("dblclick", _.Yg);
            a.addEventListener("mousedown", _.Yg);
            a.addEventListener("mousemove", _.Yg);
            a.addEventListener("MSPointerDown", _.Yg);
            a.addEventListener("pointerdown", _.Yg);
            a.addEventListener("touchstart", _.Yg);
            a.addEventListener("wheel", _.Yg)
        }
    });
});
