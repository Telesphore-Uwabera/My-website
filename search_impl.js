google.maps.__gjsload__('search_impl', function(_) {
    var Fkb = function(a) {
        a = a.Ob();
        Ekb || (Ekb = {
            G: "sssM",
            H: ["ss"]
        });
        return _.Af(a, Ekb, 1)
    }, Gkb = function(a, b) {
        _.H(a.j, 3, b)
    }, Kkb = function(a, b, c) {
        const d = _.wE(new Hkb);
        c.Qk = (0,
        _.pa)(d.load, d);
        c.clickable = 0 != a.get("clickable");
        _.GJa(c, _.oL(b));
        const e = [];
        e.push(_.$g(c, "click", (0,
        _.pa)(Ikb, null, a)));
        _.zb(["mouseover", "mouseout", "mousemove"], function(f) {
            e.push(_.$g(c, f, (0,
            _.pa)(Jkb, null, a, f)))
        });
        e.push(_.$g(a, "clickable_changed", function() {
            a.g.clickable = 0 != a.get("clickable")
        }));
        a.h = e
    }, Ikb = function(a, b, c, d, e) {
        let f = null;
        if (e && (f = {
            status: e.getStatus()
        },
        0 == e.getStatus())) {
            f.location = _.N(e.j, 2) ? new _.Dg(_.Jo(_.Df(e.j, 2, _.Oo).j, 1),_.Jo(_.Df(e.j, 2, _.Oo).j, 2)) : null;
            f.fields = {};
            const g = _.rf(e.j, 3);
            for (let k = 0; k < g; ++k) {
                const m = _.Gm(e.j, 3, _.wL, k);
                f.fields[m.getKey()] = m.Na()
            }
        }
        _.kh(a, "click", b, c, d, f)
    }, Jkb = function(a, b, c, d, e, f, g) {
        let k = null;
        f && (k = {
            title: f[1].title,
            snippet: f[1].snippet
        });
        _.kh(a, b, c, d, e, k, g)
    }, Lkb = function() {}, Mkb = class extends _.M {
        constructor() {
            super()
        }
        mc() {
            return _.Jf(this.j, 2)
        }
    }
    , Ekb;
    var Nkb = class extends _.M {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.L(this.j, 1, -1)
        }
    }
    ;
    var Hkb = class {
        constructor() {
            var a = _.Fk
              , b = _.Ek;
            this.h = _.Rf;
            this.g = _.vm(_.Vq, a, _.At + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(g) {
                g = new Nkb(g);
                b(g)
            }
            var d = new Mkb;
            _.H(d.j, 1, a.layerId.split("|")[0]);
            _.H(d.j, 2, a.featureId);
            Gkb(d, this.h.g().g());
            for (var e in a.parameters) {
                var f = _.Gf(d.j, 4, _.wL);
                _.H(f.j, 1, e);
                _.H(f.j, 2, a.parameters[e])
            }
            a = Fkb(d);
            this.g(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    }
    ;
    Lkb.prototype.qB = function(a) {
        if (_.zj[15]) {
            var b = a.l;
            const D = a.l = a.getMap();
            b && a.g && (a.i ? (b = b.__gm.h,
            b.set(b.get().xh(a.g))) : a.g && _.cKa(a.g, b) && (_.zb(a.h || [], _.bh),
            a.h = null));
            if (D) {
                var c = a.get("layerId");
                b = a.get("spotlightDescription");
                var d = a.get("paintExperimentIds")
                  , e = a.get("styler")
                  , f = a.get("roadmapStyler")
                  , g = a.get("mapsApiLayer")
                  , k = a.get("darkLaunch")
                  , m = a.get("mapFeatures")
                  , q = a.get("clickableCities")
                  , t = a.get("travelMapRequest")
                  , v = a.get("searchPipeMetadata")
                  , x = a.get("overlayLayer")
                  , y = a.get("caseExperimentIds")
                  , A = a.get("airQualityPipeMetadata")
                  , C = a.get("directionsPipeParameters");
                const E = new _.Iq;
                c = c.split("|");
                E.layerId = c[0];
                for (let J = 1; J < c.length; ++J) {
                    const [S,...X] = c[J].split(":");
                    E.parameters[S] = X.join(":")
                }
                b && (E.spotlightDescription = new _.Qq(b));
                d && (E.paintExperimentIds = d.slice(0));
                e && (E.styler = new _.Ip(e));
                f && (E.roadmapStyler = new _.Ip(f));
                t && (E.travelMapRequest = new _.vla(t));
                g && (E.mapsApiLayer = new _.Jq(g));
                m && (E.mapFeatures = m);
                q && (E.clickableCities = q);
                v && (E.searchPipeMetadata = new _.xs(v));
                x && (E.overlayLayer = new _.Rq(x));
                y && (E.caseExperimentIds = y.slice(0));
                A && (E.airQualityPipeMetadata = new _.lla(A));
                C && (E.directionsPipeParameters = new _.ila(C));
                E.darkLaunch = !!k;
                b = E;
                a.g = b;
                a.i = a.get("renderOnBaseMap");
                a.i ? (a = D.__gm.h,
                a.set(a.get().rf(b))) : Kkb(a, D, b);
                _.gi(D, "Lg");
                _.ei(D, 148282)
            }
        }
    }
    ;
    _.Qg("search_impl", new Lkb);
});
