(function(t) {
    function n(n) {
        for (var e, a, l = n[0], s = n[1], d = n[2], p = 0, u = []; p < l.length; p++) a = l[p], o[a] && u.push(o[a][0]), o[a] = 0;
        for (e in s) Object.prototype.hasOwnProperty.call(s, e) && (t[e] = s[e]);
        c && c(n);
        while (u.length) u.shift()();
        return i.push.apply(i, d || []), r()
    }

    function r() {
        for (var t, n = 0; n < i.length; n++) {
            for (var r = i[n], e = !0, l = 1; l < r.length; l++) {
                var s = r[l];
                0 !== o[s] && (e = !1)
            }
            e && (i.splice(n--, 1), t = a(a.s = r[0]))
        }
        return t
    }
    var e = {},
        o = {
            1: 0
        },
        i = [];

    function a(n) {
        if (e[n]) return e[n].exports;
        var r = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, a), r.l = !0, r.exports
    }
    a.m = t, a.c = e, a.d = function(t, n, r) {
        a.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: r
        })
    }, a.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, a.t = function(t, n) {
        if (1 & n && (t = a(t)), 8 & n) return t;
        if (4 & n && "object" === typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (a.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t)
            for (var e in t) a.d(r, e, function(n) {
                return t[n]
            }.bind(null, e));
        return r
    }, a.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return a.d(n, "a", n), n
    }, a.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, a.p = "/";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = l.push.bind(l);
    l.push = n, l = l.slice();
    for (var d = 0; d < l.length; d++) n(l[d]);
    var c = s;
    i.push([13, 0]), r()
})({
    "+AcJ": function(t, n, r) {},
    12: function(t, n) {},
    13: function(t, n, r) {
        t.exports = r("Vtdi")
    },
    "1YMD": function(t, n, r) {},
    "93I9": function(t, n, r) {},
    EXms: function(t, n, r) {},
    EYzw: function(t, n, r) {},
    IgPM: function(t, n, r) {
        "use strict";
        var e = r("EXms"),
            o = r.n(e);
        o.a
    },
    MfCY: function(t, n, r) {},
    Typh: function(t, n, r) {
        "use strict";
        var e = r("tW8T"),
            o = r.n(e);
        o.a
    },
    Vtdi: function(t, n, r) {
        "use strict";
        r.r(n);
        r("VRzm");
        var e = r("Kw5r"),
            o = r("Zg5B"),
            i = r("KN3F"),
            a = function() {
                var t = this,
                    n = t.$createElement,
                    r = t._self._c || n;
                return r("div", {
                    staticClass: "grid-container"
                }, [r("div", {
                    staticClass: "grid-lines"
                }, [r("div", {
                    staticClass: "grid-lines-inner"
                }, [r("div", {
                    staticClass: "grid-ground"
                }), r("div", {
                    staticClass: "horizontal"
                }, t._l(10, function(t) {
                    return r("div", {
                        staticClass: "line"
                    })
                })), r("div", {
                    staticClass: "vertical"
                }, t._l(10, function(t) {
                    return r("div", {
                        staticClass: "line"
                    })
                }))])]), r("main", [r("RetroLogo", {
                    attrs: {
                        title: "George",
                        subtitle: "Kwa"
                    }
                }), r("RetroAudio"), "mobile" !== t.$mq ? r("DigitalClock") : t._e(), "mobile" !== t.$mq ? r("ShodanStats") : t._e(), r("router-view")], 1)])
            },
            l = [],
            s = function() {
                var t = this,
                    n = t.$createElement,
                    r = t._self._c || n;
                return r("div", {
                    staticClass: "clock"
                }, [r("div", [r("p", [t._v(t._s(t.time))])])])
            },
            d = [],
            c = e["a"].extend({
                data: () => {
                    return {
                        time: ""
                    }
                },
                methods: {
                    updateTime: function() {
                        let t = new Date;
                        this.time = p(t.getHours(), 2) + ":" + p(t.getMinutes(), 2) + ":" + p(t.getSeconds(), 2)
                    }
                },
                mounted: function() {
                    this.interval = setInterval(() => {
                        this.updateTime()
                    }, 1e3)
                },
                beforeDestroy: function() {
                    clearInterval(this.interval)
                }
            });

        function p(t, n) {
            for (var r = "", e = 0; e < n; e++) r += "0";
            return (r + t).slice(-n)
        }
        var u = c,
            g = (r("YMdL"), r("KHd+")),
            f = Object(g["a"])(u, s, d, !1, null, "b190824a", null),
            m = f.exports,
            h = function() {
                var t = this,
                    n = t.$createElement,
                    r = t._self._c || n;
                return r("div", {
                    staticClass: "audio"
                }, [r("div", {
                    staticClass: "controls"
                }, [r("button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.isPlaying,
                        expression: "!isPlaying"
                    }],
                    staticClass: "play",
                    on: {
                        click: function(n) {
                            t.play()
                        }
                    }
                }, [t._v("Enable Music")]), r("button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isPlaying,
                        expression: "isPlaying"
                    }],
                    staticClass: "mute",
                    on: {
                        click: function(n) {
                            t.stop()
                        }
                    }
                }, [t._v("Mute")])]), t._m(0)])
            },
            b = [function() {
                var t = this,
                    n = t.$createElement,
                    r = t._self._c || n;
                return r("div", {
                    staticClass: "credits"
                }, [r("a", {
                    attrs: {
                        href: "https://freemusicarchive.org/music/Timecrawler_82/Osaka_Lights/Street_Dancing"
                    }
                }, [t._v("Music: Street Dancing by Timecrawler 82")])])
            }],
            x = e["a"].extend({
                data: function() {
                    return {
                        isPlaying: !1
                    }
                },
                mounted: function() {
                    this.audio = new Audio("https://2000.shodan.io/timecrawler.mp3"), this.audio.loop = !0
                },
                methods: {
                    play: function() {
                        this.audio.play(), this.isPlaying = !0
                    },
                    stop: function() {
                        this.audio.pause(), this.isPlaying = !1
                    }
                }
            }),
            v = x,
            y = (r("z/Rs"), Object(g["a"])(v, h, b, !1, null, "6d57537a", null)),
            w = y.exports,
            _ = function() {
                var t = this,
                    n = t.$createElement,
                    r = t._self._c || n;
                return r("div", {
                    staticClass: "logo"
                }, [r("h1", [t._v(t._s(t.title))]), r("h2", [t._v(t._s(t.subtitle))]), r("svg", {
                    staticClass: "triangle",
                    attrs: {
                        height: "160",
                        width: "200"
                    }
                }, [r("defs", [r("linearGradient", {
                    attrs: {
                        id: "grad1",
                        x1: "0%",
                        y1: "100%",
                        x2: "100%",
                        y2: "0%"
                    }
                }, [r("stop", {
                    staticStyle: {
                        "stop-color": "rgb(50,50,50)",
                        "stop-opacity": "1"
                    },
                    attrs: {
                        offset: "0%"
                    }
                }), r("stop", {
                    staticStyle: {
                        "stop-color": "black",
                        "stop-opacity": "1"
                    },
                    attrs: {
                        offset: "100%"
                    }
                })], 1), r("filter", {
                    attrs: {
                        id: "dropshadow",
                        height: "130%"
                    }
                }, [r("feGaussianBlur", {
                    attrs: {
                        in: "SourceAlpha",
                        stdDeviation: "3"
                    }
                }), r("feOffset", {
                    attrs: {
                        dx: "2",
                        dy: "2",
                        result: "offsetblur"
                    }
                }), r("feMerge", [r("feMergeNode"), r("feMergeNode", {
                    attrs: {
                        in: "SourceGraphic"
                    }
                })], 1)], 1)], 1), r("polygon", {
                    attrs: {
                        points: "0,0 200,0 100,150",
                        stroke: "#36e2f8",
                        "stroke-width": "3"
                    }
                })])])
            },
            F = [],
            E = {
                props: ["title", "subtitle"]
            },
            B = E,
            T = Object(g["a"])(B, _, F, !1, null, null, null),
            C = T.exports,
            O = function() {
                var t = this,
                    n = t.$createElement,
                    r = t._self._c || n;
                return r("div", {
                    staticClass: "stats",
                    class: {
                        active: t.isActive
                    }
                }, [t._m(0)])
            },
            I = [function() {
                var t = this,
                    n = t.$createElement,
                    r = t._self._c || n;
                return r("ul", [r("li", [t._v("Shodan Platform running - usage information:")]), r("li", [t._v("Target: Internet")]), r("li", [t._v("Ports: 1,225")]), r("li", [t._v("Users: 2+ million")])])
            }],
            A = e["a"].extend({
                data: function() {
                    return {
                        isActive: !1
                    }
                },
                methods: {
                    activate: function() {
                        this.isActive = !0
                    }
                },
                mounted: function() {
                    setTimeout(() => {
                        this.activate()
                    }, 1e3)
                }
            }),
            L = A,
            D = (r("Typh"), Object(g["a"])(L, O, I, !1, null, "27214deb", null)),
            N = D.exports,
            M = {
                name: "app",
                components: {
                    DigitalClock: m,
                    RetroAudio: w,
                    RetroLogo: C,
                    ShodanStats: N
                }
            },
            k = M,
            H = (r("taZu"), r("IgPM"), Object(g["a"])(k, a, l, !1, null, null, null)),
            S = H.exports,
            U = r("jE9Z"),
            R = function() {
                var t = this,
                    n = t.$createElement,
                    r = t._self._c || n;
                return r("div", [r("div", {
                    staticClass: "content"
                }, [t._l(t.$store.state.banners, function(n, e) {
                    return [r("transition", {
                        attrs: {
                            name: "slide",
                            mode: "out-in"
                        }
                    }, [r("ShodanBanner", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e === t.index,
                            expression: "i === index"
                        }],
                        attrs: {
                            banner: n
                        }
                    })], 1)]
                })], 2)])
            },
            P = [],
            j = function() {
                var t = this,
                    n = t.$createElement,
                    r = t._self._c || n;
                return r("div", {
                    staticClass: "container"
                }, [r("div", {
                    staticClass: "banner"
                }, [r("div", {
                    staticClass: "inner"
                }, [r("h5", [t._v(t._s(t.banner.ip_str))]), r("div", {
                    staticClass: "container u-full-width"
                }, [r("div", {
                    staticClass: "row"
                }, [r("div", {
                    staticClass: "four columns"
                }, [r("ul", [t.banner.port ? r("li", [r("span", [t._v("Port:")]), r("em", [t._v(t._s(t.banner.port))])]) : t._e(), t.banner.hostnames && t.banner.hostnames.length > 0 ? r("li", [r("span", [t._v("Hostname:")]), r("em", [t._v(t._s(t.banner.hostnames[0]))])]) : t._e(), t.banner.os ? r("li", [r("span", [t._v("Operating System:")]), r("em", [t._v(t._s(t.banner.os))])]) : t._e(), t.banner.org ? r("li", [r("span", [t._v("Organization:")]), r("em", [t._v(t._s(t.banner.org))])]) : t._e(), t.banner.location && t.banner.location.country_name ? r("li", [r("span", [t._v("Country:")]), r("em", [t._v(t._s(t.banner.location.country_name))])]) : t._e(), t.banner.location && t.banner.location.city ? r("li", [r("span", [t._v("City:")]), r("em", [t._v(t._s(t.banner.location.city))])]) : t._e(), t.banner.tags && t.banner.tags.length > 0 ? r("li", [r("span", [t._v("Tags:")]), r("em", [t._v(t._s(t.banner.tags))])]) : t._e()])]), r("div", {
                    staticClass: "eight columns"
                }, [t.banner.opts && t.banner.opts.screenshot ? t._e() : r("pre", [t._v(t._s(t.banner.data))]), t.banner.opts && t.banner.opts.screenshot ? r("div", {
                    staticClass: "screenshot"
                }, [r("img", {
                    attrs: {
                        src: "data:image/gif;base64," + t.banner.opts.screenshot.data
                    }
                })]) : t._e()])])]), r("p", {
                    staticClass: "footer"
                }, [t._v("[shodan@internet ~] $")])])]), r("div", {
                    staticClass: "u-center"
                }, [r("br"), r("a", {
                    staticClass: "button button-primary",
                    attrs: {
                        href: t.visitUrl,
                        target: "_blank"
                    }
                }, [t._v("View Details")])])])
            },
            z = [],
            W = {
                name: "ShodanBanner",
                props: ["banner"],
                computed: {
                    visitUrl: function() {
                        return "https://beta.shodan.io/host/" + this.banner.ip_str
                    }
                }
            },
            G = W,
            Z = (r("d3X6"), Object(g["a"])(G, j, z, !1, null, "704b5ceb", null)),
            Q = Z.exports,
            Y = 5e3,
            J = {
                data: function() {
                    return {
                        index: 0
                    }
                },
                components: {
                    ShodanBanner: Q
                },
                methods: {
                    rotateBanner: function() {
                        this.index == this.$store.state.banners.length - 1 ? this.index = 0 : this.index += 1
                    }
                },
                mounted: function() {
                    var t = this;
                    this.interval = setInterval(function() {
                        t.rotateBanner()
                    }, Y)
                },
                beforeDestroy: function() {
                    clearInterval(this.interval)
                }
            },
            V = J,
            q = (r("byj9"), Object(g["a"])(V, R, P, !1, null, "b37a4198", null)),
            K = q.exports,
            $ = function() {
                var t = this,
                    n = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            X = [function() {
                var t = this,
                    n = t.$createElement,
                    r = t._self._c || n;
                return r("div", {
                    staticClass: "about"
                }, [r("h1", [t._v("This is an about page")])])
            }],
            tt = {},
            nt = Object(g["a"])(tt, $, X, !1, null, null, null),
            rt = nt.exports;
        e["a"].use(U["a"]);
        var et = new U["a"]({
                routes: [{
                    path: "/",
                    name: "home",
                    component: K
                }, {
                    path: "/about",
                    name: "about",
                    component: rt
                }]
            }),
            ot = r("L2JU"),
            it = "https://shodan.nyc3.digitaloceanspaces.com/shodan-2000/bannersv2.json",
            at = {
                fetchData: function(t) {
                    var n = t.commit;
                    e["a"].http.get(it).then(function(t) {
                        n("updateBanners", t.data)
                    }).catch(function() {})
                }
            },
            lt = {
                banners: [{
                    hash: 0,
                    ip: 1879186488,
                    org: "China Mobile",
                    isp: "China Mobile",
                    transport: "tcp",
                    data: "",
                    asn: "AS56046",
                    port: 8e3,
                    hostnames: [],
                    location: {
                        city: "Nanjing",
                        region_code: "04",
                        area_code: null,
                        longitude: 118.77780000000001,
                        country_code3: "CHN",
                        latitude: 32.0617,
                        postal_code: null,
                        dma_code: null,
                        country_code: "CN",
                        country_name: "China"
                    },
                    timestamp: "2018-07-28T15:41:23.847347",
                    domains: [],
                    http: {
                        robots_hash: null,
                        redirects: [],
                        securitytxt: null,
                        title: null,
                        sitemap_hash: null,
                        robots: null,
                        server: null,
                        host: "112.2.28.56",
                        html: null,
                        location: "/",
                        securitytxt_hash: null,
                        sitemap: null,
                        html_hash: null
                    },
                    os: null,
                    _shodan: {
                        crawler: "d264629436af1b777b3b513ca6ed1404d7395d80",
                        id: "610ca9e2-7857-4db8-a85e-923d999cf3ef",
                        module: "http-simple-new",
                        options: {}
                    },
                    opts: {},
                    ip_str: "112.2.28.56"
                }, {
                    hash: -942552666,
                    tags: ["ics"],
                    ip: 1879186488,
                    isp: "China Mobile",
                    transport: "tcp",
                    data: "Copyright: Original Siemens Equipment\nPLC name: SIMATIC 300(1)\nModule type: CPU 315-2 DP\nUnknown (129): Boot Loader           A%\nModule: 6ES7 315-2AH14-0AB0  v.0.5\nBasic Firmware: v.3.3.10\nModule name: CPU 315-2 DP\nSerial number of module: S C-E7UU50372014\nPlant identification: \nBasic Hardware: 6ES7 315-2AH14-0AB0  v.0.5\n",
                    asn: "AS56046",
                    port: 102,
                    hostnames: [],
                    location: {
                        city: "Nanjing",
                        region_code: "04",
                        area_code: null,
                        longitude: 118.77780000000001,
                        country_code3: "CHN",
                        latitude: 32.0617,
                        postal_code: null,
                        dma_code: null,
                        country_code: "CN",
                        country_name: "China"
                    },
                    timestamp: "2018-07-27T18:04:02.576928",
                    domains: [],
                    org: "China Mobile",
                    os: null,
                    _shodan: {
                        crawler: "62861a86c4e4b71dceed5113ce9593b98431f89a",
                        id: null,
                        module: "s7",
                        options: {}
                    },
                    opts: {
                        s7: {
                            dst_tsap: "0x102",
                            src_tsap: "0x100",
                            identities: {
                                Copyright: {
                                    raw: "4f726967696e616c205369656d656e732045717569706d656e74000000000000",
                                    value: "Original Siemens Equipment"
                                },
                                "PLC name": {
                                    raw: "53494d4154494320333030283129000000000000000000000000000000000000",
                                    value: "SIMATIC 300(1)"
                                },
                                "Module type": {
                                    raw: "435055203331352d322044500000000000000000000000000000000000000000",
                                    value: "CPU 315-2 DP"
                                },
                                "Unknown (129)": {
                                    raw: "426f6f74204c6f61646572202020202020202020000041250b0c",
                                    value: "Boot Loader           A%  "
                                },
                                Module: {
                                    raw: "36455337203331352d32414831342d304142302000c000050001",
                                    value: "6ES7 315-2AH14-0AB0  v.0.5"
                                },
                                "Basic Firmware": {
                                    raw: "202020202020202020202020202020202020202000c05603030a",
                                    value: "                     v.3.3.10"
                                },
                                "Module name": {
                                    raw: "435055203331352d322044500000000000000000000000000000000000000000",
                                    value: "CPU 315-2 DP"
                                },
                                "Serial number of module": {
                                    raw: "5320432d45375555353033373230313400000000000000000000000000000000",
                                    value: "S C-E7UU50372014"
                                },
                                "Plant identification": {
                                    raw: "0000000000000000000000000000000000000000000000000000000000000000",
                                    value: ""
                                },
                                "Basic Hardware": {
                                    raw: "36455337203331352d32414831342d304142302000c000050001",
                                    value: "6ES7 315-2AH14-0AB0  v.0.5"
                                }
                            }
                        }
                    },
                    ip_str: "112.2.28.56"
                }, {
                    hash: 809137545,
                    ip: 1879186488,
                    isp: "China Mobile",
                    transport: "tcp",
                    data: "\nLogin: ",
                    asn: "AS56046",
                    port: 23,
                    hostnames: [],
                    location: {
                        city: "Nanjing",
                        region_code: "04",
                        area_code: null,
                        longitude: 118.77780000000001,
                        country_code3: "CHN",
                        latitude: 32.0617,
                        postal_code: null,
                        dma_code: null,
                        country_code: "CN",
                        country_name: "China"
                    },
                    timestamp: "2018-07-20T20:27:36.448609",
                    domains: [],
                    org: "China Mobile",
                    os: null,
                    _shodan: {
                        crawler: "4f9b846181c7a8a68bcc980ab6b9f2b340ab5fb2",
                        id: null,
                        module: "telnet",
                        options: {}
                    },
                    opts: {
                        telnet: {
                            will: ["ECHO", "SGA"],
                            do: ["SGA"],
                            dont: [],
                            wont: []
                        }
                    },
                    ip_str: "112.2.28.56"
                }, {
                    version: "1.1",
                    ip: 1879186488,
                    hash: 9088167,
                    port: 8443,
                    transport: "tcp",
                    title: "欢迎使用浙大恩特客户资源管理系统",
                    html: '\ufeff<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n<html xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\r\n<title>欢迎使用浙大恩特客户资源管理系统</title>\r\n<style type="text/css">\r\n\x3c!--\r\nbody {\r\n    font-family:"宋体";\r\n\theight: 100%;\r\n\tbackground:url(images/main/body_bg.jpg) repeat-x;\r\n}\r\n#login {\r\n    width: 860px;\r\n\theight: 100%;\r\n\tmargin:0 auto;\r\n\t/*visibility: hidden;*/\r\n}\r\n.Ent-btn-text {\r\n\tCOLOR: #FFFFFF;\r\n\tFONT-SIZE: 15px;\r\n\tfont-weight:bold;\r\n\tborder: none;\r\n\twidth: 121px;\r\n\theight: 42px;\r\n\ttext-decoration: none;\r\n\tmargin: 0px;\r\n\tpadding-left:15px;\r\n\tbackground:url(images/main/loginBtn.gif) no-repeat;\r\n\tcursor:pointer;\r\n}\r\n.Ent-btn-text:hover {\r\n\tbackground:url(images/main/loginBtn.gif) right top no-repeat;\r\n}\r\n.downloadBtn {\r\n\tCOLOR: #000000;\r\n\tFONT-SIZE: 25px;\r\n\tfont-weight:bold;\r\n\tborder: none;\r\n\twidth: 138px;\r\n\theight: 43px;\r\n\ttext-decoration: none;\r\n\tmargin: 0px;\r\n\tmargin-top:-10px;\r\n\tpadding-top:5px;\r\n\tbackground:url(images/main/downloadBtn.gif) no-repeat;\r\n\tcursor:pointer;\r\n}\r\n#login .login-title { \r\n    position:relative;\r\n    height: 30px;\r\n}\r\n.login-title .login-qlink { \r\n    display:none;\r\n    position:absolute;\r\n    right:0;\r\n\tbottom:0;\r\n}\r\n.login-title .login-qlink a { \r\n    color:#001C6B;\r\n\tfont-size:12px;\r\n\ttext-decoration: underline;\r\n}\r\n.login-title .login-qlink span { \r\n    font-size: 12px;\r\n    color: #ccc;\r\n    padding:0 5px;\r\n}\r\n#login .login-main {\r\n    margin-top: 20px;\r\n\tbackground:url(images/main/main_bg.gif) 0px 102px repeat-x;\r\n\t*background:url(images/main/main_bg.gif) 0px 122px repeat-x;\r\n\t_background:url(images/main/main_bg.gif) 0px 122px repeat-x;\r\n}\r\n.login-main .login-left{\r\n    width:530px;\r\n    float: left;\r\n}\r\n.login-main .login-left .logo{\r\n    position:relative;\r\n    height:79px;\r\n    background:url(images/main/logo.jpg) no-repeat;\r\n}\r\n.login-main .login-left .logo div{\r\n\tdisplay:none;\r\n    position:absolute;\r\n\tleft:283px;\r\n\tbottom:5px;\r\n\theight:25px;\r\n}\r\n.login-main .login-left .bar{\r\n    height:60px;\r\n\tline-height:60px;\r\n\tmargin-top:15px;\t\r\n}\r\n.login-main .login-left .bar img{\r\n   float:left;\r\n   padding:0 10px 0 0;\r\n}\r\n.login-main .login-right {\r\n    float: right;\r\n\twidth:320px;\r\n    padding-top: 50px;\r\n}\r\n.login-main .login-right h1 {\r\n\toverflow:hidden;\r\n\tfont-family:Arial, Helvetica, sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight:bold;\r\n\twidth:260px;\r\n\tcolor:#000000;\r\n\tmargin:0 10px 35px 5px;\r\n\tpadding:5px 0 10px 10px;\r\n\ttext-align: left;\r\n\tborder-bottom:2px solid #42A0E1;\r\n}\r\n.login-main .login-right .login-box {\t\r\n\twidth: 290px; \r\n\tfloat: left; \r\n\tpadding-top: 16px; \r\n\tpadding-bottom: 20px;\r\n\tbackground:#ffffff;\r\n\tborder:1px solid #cccccc;\r\n}\r\n.login-main .login-right .login-footer {\r\n\tfloat:left;\r\n    width: 290px;\r\n\theight: 7px;\r\n\tbackground:url(images/main/login_bg.png) repeat scroll 8px top;\r\n}\r\n.login-form{\r\n    text-align: center;\r\n\twidth:280px;\r\n\tmargin: 0px auto;\r\n\tpadding-bottom:20px;\r\n}\r\n.login-form label {\r\n\tfont-size:12px;\r\n\tfont-weight:bold;\r\n\tcolor:#666666;\r\n}\r\n/*.login-form .input-text {\r\n\twidth:150px;\r\n\theight:18px;\r\n\tline-height:18px;\r\n\tpadding:2px 3px;\r\n\tborder:1px solid #29ABE2;\r\n}*/\r\n.login-form .input-text {\r\n\tBORDER-BOTTOM: #808080 1px solid; BORDER-LEFT: #000 1px solid; PADDING-BOTTOM: 0px; PADDING-LEFT: 3px; WIDTH: 150px; PADDING-RIGHT: 0px; FONT-FAMILY: Arial; BACKGROUND: url(images/main/login_bg.gif) no-repeat left -9px; HEIGHT: 20px; FONT-SIZE: 14px; BORDER-TOP: #000 1px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #808080 1px solid; PADDING-TOP: 4px\r\n}\r\n.login-form .input-text-over {\r\n\tBACKGROUND: url(images/main/login_bg.gif) no-repeat left -35px\r\n}\r\n.login-form .login-btn{\r\n\ttext-align:left;\r\n    margin-top:30px;\r\n\tpadding-left:90px;\r\n}\r\n.login-form .forget-psw{\r\n\tdisplay:none;\r\n    font-size:12px;\r\n\ttext-align:left;\r\n    margin-top:30px;\r\n\tpadding-left:99px;\r\n}\r\n.login-main .login-right .login-kj {\r\n\tdisplay:none;\r\n    width:260px;\r\n\theight: 128px;\r\n\ttext-align: center;\r\n\tmargin-top: 15px;\r\n\tbackground:#D3EDF9;\r\n}\r\n#login .copyright {\r\n\ttext-align:center;\r\n\tfont-size: 12px;\r\n\tcolor:#666666;\r\n\tpadding-left: 90px;\r\n\theight: 39px;\r\n\tline-height: 39px;\r\n\tbackground:url(images/main/logoMini.gif) no-repeat left top;\r\n\tborder-top:1px solid #000;\r\n}\r\n#login .copyright span {\r\n    font-family:"Aril";\r\n\tfont-size: 15px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.logo a {\r\n    float:left;\r\n\tpadding: 2px;\r\n\tdisplay: block;\r\n\twidth: 80px;\r\n\tline-height: 18px;\r\n\theight: 18px;\r\n\ttext-align: center;\r\n}\r\n.logo a:link.current {\r\n\tcolor: #FFFFFF;\r\n\tfont-weight: bolder;\r\n\tbackground-color: #29ABE2;\r\n\tfont-style: normal;\r\n\tborder-width: 1px;\r\n\tborder-style: solid;\r\n\tborder-top-color: #1E3D60;\r\n\tborder-left-color: #1E3D60;\r\n\tborder-right-color: #FFFFFF;\r\n\tborder-bottom-color: #FFFFFF;\r\n}\r\n.logo a:visited.current {\r\n\tcolor: #FFFFFF;\r\n\tfont-weight: bolder;\r\n\tbackground-color: #29ABE2;\r\n\tfont-style: normal;\r\n\tborder-width: 1px;\r\n\tborder-style: solid;\r\n\tborder-top-color: #1E3D60;\r\n\tborder-left-color: #1E3D60;\r\n\tborder-right-color: #FFFFFF;\r\n\tborder-bottom-color: #FFFFFF;\r\n}\r\n.logo a:hover.current {\r\n\tcolor: #FFFFFF;\r\n\tfont-weight: bold;\r\n\tbackground-color: #29ABE2;\r\n}\r\n.logo a:link {\r\n\ttext-decoration: none;\r\n\tcolor: #999999;\r\n\tfont-style: italic;\r\n}\r\n.logo a:visited {\r\n\ttext-decoration: none;\r\n\tcolor: #999999;\r\n\tfont-style: italic;\r\n}\r\n.logo a:hover {\r\n\ttext-decoration: none;\r\n\tcolor: #FFFFFF;\r\n\tfont-style: normal;\r\n\tborder-width: 1px;\r\n\tborder-style: solid;\r\n\tborder-top-color: #FFFFFF;\r\n\tborder-left-color: #FFFFFF;\r\n\tborder-right-color: #333333;\r\n\tborder-bottom-color: #333333;\r\n\tbackground-color: #29ABE2;\r\n}\r\n.noscript {\r\n\tposition: absolute;\r\n\tbackground-color: #FFFFDD;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tpadding: 1px 0;\r\n\tfont-family: "宋体";\r\n\tfont-size: 12px;\r\n\tline-height: 18px;\r\n\tfont-weight: normal;\r\n\tcolor: #333333;\r\n\tborder-bottom-style: ridge;\r\n\tborder-bottom-color: #ACACAC;\r\n\tborder-bottom-width: 2px;\r\n}\r\n.login-left ul li{\r\n\tlist-style: none;\r\n\theight:25px;\r\n\tline-height:25px;\r\n\tfont-size:13px;\r\n}\r\n--\x3e\r\n</style>\r\n<script type="text/javascript" src="script/Ent.base.js"><\/script>\r\n<script type="text/javascript" src="script/Ent.plug-in.js"><\/script>\r\n<script type="text/javascript" src="script/Ent.init.js"><\/script>\r\n<script type="text/javascript">\r\n\x3c!--\r\nvar WB = null ;\r\nvar pageLayout = false ;\r\nfunction doLogin(){\r\n\tif(WB && !WB.closed){\r\n\t\tWB.focus() ;\r\n\t\treturn ;\r\n\t}\r\n\tvar F = document.forms[\'form1\'] ;\r\n\tvar tID = document.getElementById(\'usr_id\')\t\r\n\tif(tID.value==\'\'){\r\n\t\twindow.setTimeout(function(){\t\t\t\t\t\r\n\t\t\tdocument.getElementById(\'usr_id\').focus() ;\r\n\t\t},0)\r\n\t\treturn ;\r\n\t}\r\n\t\r\n\t//语言判断\r\n\tvar lang = NT.util.dom.cookie(\'lang\') ;\r\n\tvar root = \'entsoft/\'\r\n\tif(lang == \'en-us\') {\r\n\t\troot = \'entsoft_en/\'\r\n\t}\t\r\n\tvar strUrl=root+\'ep/logonctr.jsp\';\r\n\t\r\n\tstrUrl=strUrl+"?cst_id="+F[\'cst_id\'].value;\r\n\tif(F[\'WEBURL\'].value==""){\r\n\t\tvar tmp=document.URL;\r\n\t\tvar str=tmp.substring(tmp.indexOf("//")+2);\r\n\t\tstr=str.substring(0,str.indexOf("/"));\r\n\t\tstrUrl=strUrl+"&WEBURL="+str;\r\n\t}else{\r\n\t\tstrUrl=strUrl+"&WEBURL="+F[\'WEBURL\'].value;\r\n\t}\r\n\tstrUrl=strUrl+"&formID="+F[\'formID\'].value+"&w_state="+F[\'w_state\'].value+"&formName="+F[\'formName\'].value+"&usr_id="+tID.value+"&password="+document.getElementById(\'password\').value;\r\n\r\n\tvar url=F[\'WEBURL\'].value;\r\n\tvar firstnum=url.substring(0,url.indexOf("."));\r\n\t\r\n\t//内网不进行安全套嵌\r\n\r\n\tif(firstnum!="192"&&firstnum!="172"&&firstnum!="10"){\r\n\t\tif(url.indexOf("localhost") == -1 ) {\r\n\t\t\tstrUrl=strUrl+"&homePage="+F[\'homePage\'].value;\r\n\t\t\tstrUrl="https://"+document.domain+":8443"+F[\'context_root\'].value+"/"+strUrl;\r\n\t\t}\r\n\t}\r\n\t\r\n\t//ie的输入历史\r\n\r\n\ttry{window.external.AutoCompleteSaveForm(form1)}catch(e){}\r\n\t\r\n\tWB = NT.util.bom.open(strUrl) ;\r\n\tdocument.getElementById(\'password\').value="";\r\n}\r\nfunction init(){\t\r\n\t//document.getElementById(\'loginBox\').style.visibility = \'visible\' ;\r\n\t//setPos() ;\r\n\t\r\n\tnew NT.widget.Button({\r\n\t\tid: \'btnSignIn\',\r\n\t\tel: \'logon\',\r\n\t\ticon: \'Ent-icon-lock\'\r\n\t}).addEvent("click",doLogin)\r\n\t//载入是初始化用户语言\r\n\tvar uLang = getUserLang() ;\r\n\tswitchFace(uLang) ;\t\r\n\t\r\n\tvar tmp=document.URL;\r\n\tvar str=tmp.substring(tmp.indexOf("//")+2);\r\n\tvar homePage=tmp.substring(0,tmp.lastIndexOf("/"));\r\n\t\r\n\tvar context_root=str.substring(str.indexOf("/"),str.lastIndexOf("/"));\r\n\tif (context_root=="/"){\r\n\t\tcontext_root="";\r\n\t}\r\n\tstr=str.substring(0,str.indexOf("/"));\r\n\tvar F = document.forms[\'form1\'] ;\r\n\tF[\'WEBURL\'].value=str;\r\n\tF[\'homePage\'].value=homePage;\r\n\tF[\'context_root\'].value=context_root;\r\n\tF[\'w_state\'].value=screen.width;\r\n\tvar tID = document.getElementById(\'usr_id\')\t\r\n\ttID.select();tID.focus();\r\n}\r\nfunction setPos(){\r\n\tvar cH = document.body.clientHeight ;\r\n\tvar box = document.getElementById(\'loginBox\') ;\r\n\tbox.style.marginTop = (cH/2 - box.offsetHeight/2) + \'px\' ;\r\n}\r\nfunction switchFace(l){\r\n\tvar lName = document.getElementById(\'lab-name\')  ;\r\n\tvar lPwd = document.getElementById(\'lab-pwd\')  ;\r\n\tvar lForget = document.getElementById(\'lab-forget\')  ;\r\n\tvar lCopy = document.getElementById(\'lab-copy\')  ;\t\r\n\tvar lH1 = document.getElementById(\'lab-h1\')  ;\r\n\tvar lH2 = document.getElementById(\'lab-h2\')  ;\r\n\tvar lBtn = document.getElementById(\'downloadBtn\')  ;\r\n\tvar lZh = document.getElementById(\'b-zh\')  ;\r\n\tvar lEn = document.getElementById(\'b-en\')  ;\r\n\tswitch(l){\r\n\t\tcase \'zh-cn\' :\r\n\t\t\tlName.innerHTML = \'用户名:\' ;\r\n\t\t\tlPwd.innerHTML = \'密&nbsp;&nbsp;码:\' ;\r\n\t\t\tlForget.innerHTML = \'忘记了密码？\';\r\n\t\t\tlCopy.innerHTML = \'<span>CopyRight&copy;2002-2010</span>&nbsp;浙大恩特网络科技有限公司。保留所有权利。\' ;\r\n\t\t\tNT.getPlu(\'btnSignIn\').setLabel(\'登 录\') ;\r\n\t\t\tlH1.innerHTML = \'登录EnterCRM\';\r\n\t\t\tlH2.innerHTML = \'第一次登录 请下载安装控件\';\r\n\t\t\tlBtn.value = \'下载控件\';\r\n\t\t\tlZh.className = \'\' ;\r\n\t\t\tlEn.className = \'\' ;\r\n\t\t\tbreak ;\r\n\t\tcase \'en-us\' :\r\n\t\t\tlName.innerHTML = \'User：\' ;\r\n\t\t\tlPwd.innerHTML = \'Pswd：\' ;\r\n\t\t\tlForget.innerHTML = \'Forgot your password？\';\r\n\t\t\tlCopy.innerHTML = \'<span>CopyRight&copy;2002-2010</span>&nbsp;Zhejiang University Enterprise Software Technology Co.,Ltd. All right reserved\' ;\r\n\t\t\tNT.getPlu(\'btnSignIn\').setLabel(\'Sign In\') ;\r\n\t\t\tlH1.innerHTML = \'Login EnterCRM\';\r\n\t\t\tlH2.innerHTML = \'Please download control if first login\';\r\n\t\t\tlBtn.value = \'Download\';\r\n\t\t\tlZh.className = \'\' ;\r\n\t\t\tlEn.className = \'\' ;\r\n\t\t\tbreak ;\r\n\t}\r\n\tNT.util.dom.cookie(\'lang\', l) ;\r\n}\r\n//获取用户语言\r\nfunction getUserLang(){\r\n\t//获取cookie中的语言信息\r\n\tvar uLang = NT.util.dom.cookie(\'lang\') ;\r\n\t\r\n\tif(!uLang) {\r\n\t\ttry { \r\n\t\t\tvar _lang = navigator.userLanguage ; \r\n\t\t\tif (_lang.indexOf(\'zh-cn\')!=-1)  return(\'zh-cn\') ;//简体中文\r\n\r\n\t\t\tif (_lang.indexOf(\'zh-tw\')!=-1)  return(\'zh-cn\') ;//繁体中文\r\n\t\t\tif (_lang.indexOf(\'en\')!=-1)     return(\'en-us\') ;//英文\r\n\t\t\tif (_lang.indexOf(\'de\')!=-1)     return(\'en-us\') ;//德文\r\n\t\t\tif (_lang.indexOf(\'ar\')!=-1)     return(\'en-us\') ;//阿拉伯文\r\n\t\t\tif (_lang.indexOf(\'fr\')!=-1)     return(\'en-us\') ;//法文\r\n\t\t\tif (_lang.indexOf(\'ko\')!=-1)     return(\'en-us\') ;//韩文/朝鲜文\r\n\r\n\t\t\tif (_lang.indexOf(\'ja\')!=-1)     return(\'en-us\') ;//日文\r\n\t\t\tif (_lang.indexOf(\'es\')!=-1)     return(\'en-us\') ;//西班牙文\r\n\t\t\tif (_lang.indexOf(\'ru\')!=-1)     return(\'en-us\') ;//俄文\r\n\t\t\tif (_lang.indexOf(\'pt\')!=-1)     return(\'en-us\') ;//葡萄牙文\r\n\t\t\tif (_lang.indexOf(\'ms\')!=-1)     return(\'en-us\') ;//马来西亚文\r\n\r\n\t\t\tif (_lang.indexOf(\'el\')!=-1)     return(\'en-us\') ;//希腊文\r\n\r\n\t\t\tif (_lang.indexOf(\'da\')!=-1)     return(\'en-us\') ;//丹麦文\r\n\r\n\t\t\tif (_lang.indexOf(\'it\')!=-1)     return(\'en-us\') ;//丹麦文\r\n\r\n\t\t} catch (er) { \r\n\t\t\treturn(\'zh-cn\') ;\r\n    \t}\r\n\t}\r\n\treturn uLang ;\r\n}\r\n\r\nfunction goToNext(){\r\n\tevt = NT.util.event.getEvent()\r\n\tif (evt.keyCode==13){\r\n\t\tif(NT.env.isIE){\r\n\t\t\tevt.keyCode=9 ;\t\t\t\r\n\t\t} else {\r\n\t\t\ttry{\r\n\t\t\t\twindow.setTimeout(function(){\t\t\t\t\t\r\n\t\t\t\t\tdocument.getElementById(\'password\').focus() ;\r\n\t\t\t\t},0) ;\r\n\t\t\t}catch(e){}\r\n\t\t}\r\n\t}\r\n}\r\nfunction doLogin_proxy(){\r\n\tevt = NT.util.event.getEvent()\r\n\tif (evt.keyCode==13){\r\n\t\tdoLogin();\r\n\t}\r\n}\r\n/*\r\nNT.bind(window, \'unload\', function(){\r\n\tif(WB && !WB.closed) {WB.close()}\r\n})\r\n\r\nNT.bind(window, \'resize\', setPos)\r\n*/\r\n//--\x3e\r\nfunction systemhelp(){\r\n\tvar screenH = window.screen.availHeight - 30 ;\r\n\tvar screenW = window.screen.availWidth - 12 ;\r\n\tvar newin=window.open(\'entsoft/systemhelp/systemHelp.html\',\'systemHelp\',\'top=0,left=0,toolbar=no,scrollbars=no,resizable=yes,location=no,status=no,width=\'+screenW+\',height=\'+screenH);\r\n\tnewin.focus();\r\n}\r\nfunction openModWin(url,win,ftr){ \r\n\tvar newin=window.open(url,win,ftr);\r\n\tnewin.focus();\r\n}\r\n<\/script>\r\n</head>\r\n<body>\r\n<noscript>\r\n<div class="noscript">您的浏览器不支持JavaScript或者JavaScript被禁止使用，无法正常登录系统。</div>\r\n</noscript>\r\n<div id="login">\r\n\t  <div class="login-title">\r\n\t     <div class="login-qlink">\r\n\t\t  <a href="#" onClick="systemhelp();return false;">系统帮助</a><span>|</span><a href="#" onClick="openModWin(\'entsoft/ep/about.jsp\',\'ABOUT\',\'top=100,left=200,width=400,height=250,resizable=no\');return false;">关于软件</a>\r\n\t\t </div>\r\n\t  </div>\r\n\r\n\t  <div class="login-main">\r\n\t      <div class="login-right">\r\n\t      \t  \x3c!--<div class="login-top"></div>--\x3e\r\n\t\t      <div class="login-box">\r\n\t\t\t\t<form name="form1" method="post" class="login-form" action="return false" >\r\n\t\t\t\t<h1 id="lab-h1">登录EnterCRM</h1>\r\n\t\t\t\t<p>\r\n\t\t\t\t<label for="usr_id" id="lab-name">用户名:</label>\r\n\t\t\t\t<input type="text" name="usr_id" class="input-text" id="usr_id" maxLength=40 tabindex="1" onblur="this.className=\'input-text\';" onfocus="this.className=\'input-text input-text-over\';" onkeydown="goToNext()" />\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t<label for="password" id="lab-pwd">密&nbsp;&nbsp;码:</label>\r\n\t\t\t\t<input type="password" id="password" name="password" class="input-text" maxLength=20 tabindex="2" onblur="this.className=\'input-text\';" onfocus="this.className=\'input-text input-text-over\';" onkeydown="doLogin_proxy()" />\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class="login-btn">\r\n\t\t\t\t\x3c!--<input type="button" id="logon" class="loginBtn" value="登录"/>--\x3e\r\n\t\t\t\t<button id="logon">登录</button>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class="forget-psw">\r\n\t\t\t\t<a id="lab-forget" href="#">忘记了密码？</a>\r\n\t\t\t\t</p>\r\n\t\t\t\t\t<input type="hidden" name="cst_id" value="" />\r\n\t\t\t\t\t<input type="hidden" name=\'WEBURL\' value="" />\r\n\t\t\t\t\t<input type="hidden" name="formID" value="EnterCRM" />\r\n\t\t\t\t\t<input type="hidden" name="w_state" value="" />\r\n\t\t\t\t\t<input type="hidden" name="formName" value="CRM" />\r\n\t\t\t\t\t<input type="hidden" name="homePage" value="" />\r\n\t\t\t\t\t<input type="hidden"  name="context_root" value="" />\r\n                </form>\r\n\t\t\t  </div>\r\n\t\t\t  \r\n\t\t\t  <div class="login-footer"></div>\r\n\t\t\t  <div class="login-kj">\r\n\t\t\t     <h1 id="lab-h2">第一次登录 请下载安装控件</h1>\r\n\t\t\t\t <input type="button" class="downloadBtn" id="downloadBtn" value="下载控件"/>\r\n\t\t\t  </div>\r\n\t\t  </div>\r\n\t\t  <div class="login-left">\r\n              <div class="logo">\r\n\t\t\t     <div>\r\n\t\t\t     <a href="javascript:switchFace(\'zh-cn\')" id="b-zh" onfocus="blur()" title="登录中文版">简体中文</a>\r\n                 <a href="javascript:switchFace(\'en-us\')" id="b-en" onfocus="blur()" title="Login English">English</a>\r\n\t\t\t\t </div>\r\n\t\t      </div>\r\n\t\t\t  \r\n\t\t\t  <div style="text-align:left;margin-top:23px;"><img src="images/main/bar.jpg"></div>\r\n\t\t\t  \x3c!--<div style="padding-left:35px;padding-top:170px;margin:20px 0 10px 0;background:url(images/bar.gif) 60px top no-repeat;">\r\n\t\t\t     <ul>\r\n\t\t\t  \t \t<li>恩特软件更加专业</li>\r\n\t\t\t\t\t<li>恩特软件追求高效</li>\r\n\t\t\t\t\t<li>恩特软件注重服务</li>\r\n\t\t\t\t </ul>\r\n\t\t\t  </div>\r\n\t\t\t  \r\n\t\t\t  <div class="bar"><img src="images/bar1.jpg">安全</div>\r\n\t\t\t  <div class="bar"><img src="images/bar2.jpg">模块化</div>\r\n\t\t\t  <div class="bar"><img src="images/bar3.jpg">手机使用</div>--\x3e\r\n\t\t  </div>\r\n\t\t  <div style="clear:both"></div>\r\n\t  </div>\r\n\r\n\t  <div id="lab-copy" class="copyright">\r\n\t     <span>CopyRight&copy;2002-2010</span>&nbsp;浙大恩特网络科技有限公司。保留所有权利。\r\n\t  </div>\r\n</div>\r\n</body>\r\n</html>\r\n',
                    location: {
                        city: "Nanjing",
                        region_code: "04",
                        area_code: null,
                        longitude: 118.77780000000001,
                        country_code3: "CHN",
                        latitude: 32.0617,
                        postal_code: null,
                        dma_code: null,
                        country_code: "CN",
                        country_name: "China"
                    },
                    product: "Apache Tomcat/Coyote JSP engine",
                    http: {
                        robots_hash: null,
                        redirects: [],
                        securitytxt: null,
                        title: "欢迎使用浙大恩特客户资源管理系统",
                        sitemap_hash: null,
                        robots: null,
                        favicon: null,
                        host: "112.2.28.56",
                        html: '\ufeff<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n<html xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\r\n<title>欢迎使用浙大恩特客户资源管理系统</title>\r\n<style type="text/css">\r\n\x3c!--\r\nbody {\r\n    font-family:"宋体";\r\n\theight: 100%;\r\n\tbackground:url(images/main/body_bg.jpg) repeat-x;\r\n}\r\n#login {\r\n    width: 860px;\r\n\theight: 100%;\r\n\tmargin:0 auto;\r\n\t/*visibility: hidden;*/\r\n}\r\n.Ent-btn-text {\r\n\tCOLOR: #FFFFFF;\r\n\tFONT-SIZE: 15px;\r\n\tfont-weight:bold;\r\n\tborder: none;\r\n\twidth: 121px;\r\n\theight: 42px;\r\n\ttext-decoration: none;\r\n\tmargin: 0px;\r\n\tpadding-left:15px;\r\n\tbackground:url(images/main/loginBtn.gif) no-repeat;\r\n\tcursor:pointer;\r\n}\r\n.Ent-btn-text:hover {\r\n\tbackground:url(images/main/loginBtn.gif) right top no-repeat;\r\n}\r\n.downloadBtn {\r\n\tCOLOR: #000000;\r\n\tFONT-SIZE: 25px;\r\n\tfont-weight:bold;\r\n\tborder: none;\r\n\twidth: 138px;\r\n\theight: 43px;\r\n\ttext-decoration: none;\r\n\tmargin: 0px;\r\n\tmargin-top:-10px;\r\n\tpadding-top:5px;\r\n\tbackground:url(images/main/downloadBtn.gif) no-repeat;\r\n\tcursor:pointer;\r\n}\r\n#login .login-title { \r\n    position:relative;\r\n    height: 30px;\r\n}\r\n.login-title .login-qlink { \r\n    display:none;\r\n    position:absolute;\r\n    right:0;\r\n\tbottom:0;\r\n}\r\n.login-title .login-qlink a { \r\n    color:#001C6B;\r\n\tfont-size:12px;\r\n\ttext-decoration: underline;\r\n}\r\n.login-title .login-qlink span { \r\n    font-size: 12px;\r\n    color: #ccc;\r\n    padding:0 5px;\r\n}\r\n#login .login-main {\r\n    margin-top: 20px;\r\n\tbackground:url(images/main/main_bg.gif) 0px 102px repeat-x;\r\n\t*background:url(images/main/main_bg.gif) 0px 122px repeat-x;\r\n\t_background:url(images/main/main_bg.gif) 0px 122px repeat-x;\r\n}\r\n.login-main .login-left{\r\n    width:530px;\r\n    float: left;\r\n}\r\n.login-main .login-left .logo{\r\n    position:relative;\r\n    height:79px;\r\n    background:url(images/main/logo.jpg) no-repeat;\r\n}\r\n.login-main .login-left .logo div{\r\n\tdisplay:none;\r\n    position:absolute;\r\n\tleft:283px;\r\n\tbottom:5px;\r\n\theight:25px;\r\n}\r\n.login-main .login-left .bar{\r\n    height:60px;\r\n\tline-height:60px;\r\n\tmargin-top:15px;\t\r\n}\r\n.login-main .login-left .bar img{\r\n   float:left;\r\n   padding:0 10px 0 0;\r\n}\r\n.login-main .login-right {\r\n    float: right;\r\n\twidth:320px;\r\n    padding-top: 50px;\r\n}\r\n.login-main .login-right h1 {\r\n\toverflow:hidden;\r\n\tfont-family:Arial, Helvetica, sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight:bold;\r\n\twidth:260px;\r\n\tcolor:#000000;\r\n\tmargin:0 10px 35px 5px;\r\n\tpadding:5px 0 10px 10px;\r\n\ttext-align: left;\r\n\tborder-bottom:2px solid #42A0E1;\r\n}\r\n.login-main .login-right .login-box {\t\r\n\twidth: 290px; \r\n\tfloat: left; \r\n\tpadding-top: 16px; \r\n\tpadding-bottom: 20px;\r\n\tbackground:#ffffff;\r\n\tborder:1px solid #cccccc;\r\n}\r\n.login-main .login-right .login-footer {\r\n\tfloat:left;\r\n    width: 290px;\r\n\theight: 7px;\r\n\tbackground:url(images/main/login_bg.png) repeat scroll 8px top;\r\n}\r\n.login-form{\r\n    text-align: center;\r\n\twidth:280px;\r\n\tmargin: 0px auto;\r\n\tpadding-bottom:20px;\r\n}\r\n.login-form label {\r\n\tfont-size:12px;\r\n\tfont-weight:bold;\r\n\tcolor:#666666;\r\n}\r\n/*.login-form .input-text {\r\n\twidth:150px;\r\n\theight:18px;\r\n\tline-height:18px;\r\n\tpadding:2px 3px;\r\n\tborder:1px solid #29ABE2;\r\n}*/\r\n.login-form .input-text {\r\n\tBORDER-BOTTOM: #808080 1px solid; BORDER-LEFT: #000 1px solid; PADDING-BOTTOM: 0px; PADDING-LEFT: 3px; WIDTH: 150px; PADDING-RIGHT: 0px; FONT-FAMILY: Arial; BACKGROUND: url(images/main/login_bg.gif) no-repeat left -9px; HEIGHT: 20px; FONT-SIZE: 14px; BORDER-TOP: #000 1px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #808080 1px solid; PADDING-TOP: 4px\r\n}\r\n.login-form .input-text-over {\r\n\tBACKGROUND: url(images/main/login_bg.gif) no-repeat left -35px\r\n}\r\n.login-form .login-btn{\r\n\ttext-align:left;\r\n    margin-top:30px;\r\n\tpadding-left:90px;\r\n}\r\n.login-form .forget-psw{\r\n\tdisplay:none;\r\n    font-size:12px;\r\n\ttext-align:left;\r\n    margin-top:30px;\r\n\tpadding-left:99px;\r\n}\r\n.login-main .login-right .login-kj {\r\n\tdisplay:none;\r\n    width:260px;\r\n\theight: 128px;\r\n\ttext-align: center;\r\n\tmargin-top: 15px;\r\n\tbackground:#D3EDF9;\r\n}\r\n#login .copyright {\r\n\ttext-align:center;\r\n\tfont-size: 12px;\r\n\tcolor:#666666;\r\n\tpadding-left: 90px;\r\n\theight: 39px;\r\n\tline-height: 39px;\r\n\tbackground:url(images/main/logoMini.gif) no-repeat left top;\r\n\tborder-top:1px solid #000;\r\n}\r\n#login .copyright span {\r\n    font-family:"Aril";\r\n\tfont-size: 15px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.logo a {\r\n    float:left;\r\n\tpadding: 2px;\r\n\tdisplay: block;\r\n\twidth: 80px;\r\n\tline-height: 18px;\r\n\theight: 18px;\r\n\ttext-align: center;\r\n}\r\n.logo a:link.current {\r\n\tcolor: #FFFFFF;\r\n\tfont-weight: bolder;\r\n\tbackground-color: #29ABE2;\r\n\tfont-style: normal;\r\n\tborder-width: 1px;\r\n\tborder-style: solid;\r\n\tborder-top-color: #1E3D60;\r\n\tborder-left-color: #1E3D60;\r\n\tborder-right-color: #FFFFFF;\r\n\tborder-bottom-color: #FFFFFF;\r\n}\r\n.logo a:visited.current {\r\n\tcolor: #FFFFFF;\r\n\tfont-weight: bolder;\r\n\tbackground-color: #29ABE2;\r\n\tfont-style: normal;\r\n\tborder-width: 1px;\r\n\tborder-style: solid;\r\n\tborder-top-color: #1E3D60;\r\n\tborder-left-color: #1E3D60;\r\n\tborder-right-color: #FFFFFF;\r\n\tborder-bottom-color: #FFFFFF;\r\n}\r\n.logo a:hover.current {\r\n\tcolor: #FFFFFF;\r\n\tfont-weight: bold;\r\n\tbackground-color: #29ABE2;\r\n}\r\n.logo a:link {\r\n\ttext-decoration: none;\r\n\tcolor: #999999;\r\n\tfont-style: italic;\r\n}\r\n.logo a:visited {\r\n\ttext-decoration: none;\r\n\tcolor: #999999;\r\n\tfont-style: italic;\r\n}\r\n.logo a:hover {\r\n\ttext-decoration: none;\r\n\tcolor: #FFFFFF;\r\n\tfont-style: normal;\r\n\tborder-width: 1px;\r\n\tborder-style: solid;\r\n\tborder-top-color: #FFFFFF;\r\n\tborder-left-color: #FFFFFF;\r\n\tborder-right-color: #333333;\r\n\tborder-bottom-color: #333333;\r\n\tbackground-color: #29ABE2;\r\n}\r\n.noscript {\r\n\tposition: absolute;\r\n\tbackground-color: #FFFFDD;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tpadding: 1px 0;\r\n\tfont-family: "宋体";\r\n\tfont-size: 12px;\r\n\tline-height: 18px;\r\n\tfont-weight: normal;\r\n\tcolor: #333333;\r\n\tborder-bottom-style: ridge;\r\n\tborder-bottom-color: #ACACAC;\r\n\tborder-bottom-width: 2px;\r\n}\r\n.login-left ul li{\r\n\tlist-style: none;\r\n\theight:25px;\r\n\tline-height:25px;\r\n\tfont-size:13px;\r\n}\r\n--\x3e\r\n</style>\r\n<script type="text/javascript" src="script/Ent.base.js"><\/script>\r\n<script type="text/javascript" src="script/Ent.plug-in.js"><\/script>\r\n<script type="text/javascript" src="script/Ent.init.js"><\/script>\r\n<script type="text/javascript">\r\n\x3c!--\r\nvar WB = null ;\r\nvar pageLayout = false ;\r\nfunction doLogin(){\r\n\tif(WB && !WB.closed){\r\n\t\tWB.focus() ;\r\n\t\treturn ;\r\n\t}\r\n\tvar F = document.forms[\'form1\'] ;\r\n\tvar tID = document.getElementById(\'usr_id\')\t\r\n\tif(tID.value==\'\'){\r\n\t\twindow.setTimeout(function(){\t\t\t\t\t\r\n\t\t\tdocument.getElementById(\'usr_id\').focus() ;\r\n\t\t},0)\r\n\t\treturn ;\r\n\t}\r\n\t\r\n\t//语言判断\r\n\tvar lang = NT.util.dom.cookie(\'lang\') ;\r\n\tvar root = \'entsoft/\'\r\n\tif(lang == \'en-us\') {\r\n\t\troot = \'entsoft_en/\'\r\n\t}\t\r\n\tvar strUrl=root+\'ep/logonctr.jsp\';\r\n\t\r\n\tstrUrl=strUrl+"?cst_id="+F[\'cst_id\'].value;\r\n\tif(F[\'WEBURL\'].value==""){\r\n\t\tvar tmp=document.URL;\r\n\t\tvar str=tmp.substring(tmp.indexOf("//")+2);\r\n\t\tstr=str.substring(0,str.indexOf("/"));\r\n\t\tstrUrl=strUrl+"&WEBURL="+str;\r\n\t}else{\r\n\t\tstrUrl=strUrl+"&WEBURL="+F[\'WEBURL\'].value;\r\n\t}\r\n\tstrUrl=strUrl+"&formID="+F[\'formID\'].value+"&w_state="+F[\'w_state\'].value+"&formName="+F[\'formName\'].value+"&usr_id="+tID.value+"&password="+document.getElementById(\'password\').value;\r\n\r\n\tvar url=F[\'WEBURL\'].value;\r\n\tvar firstnum=url.substring(0,url.indexOf("."));\r\n\t\r\n\t//内网不进行安全套嵌\r\n\r\n\tif(firstnum!="192"&&firstnum!="172"&&firstnum!="10"){\r\n\t\tif(url.indexOf("localhost") == -1 ) {\r\n\t\t\tstrUrl=strUrl+"&homePage="+F[\'homePage\'].value;\r\n\t\t\tstrUrl="https://"+document.domain+":8443"+F[\'context_root\'].value+"/"+strUrl;\r\n\t\t}\r\n\t}\r\n\t\r\n\t//ie的输入历史\r\n\r\n\ttry{window.external.AutoCompleteSaveForm(form1)}catch(e){}\r\n\t\r\n\tWB = NT.util.bom.open(strUrl) ;\r\n\tdocument.getElementById(\'password\').value="";\r\n}\r\nfunction init(){\t\r\n\t//document.getElementById(\'loginBox\').style.visibility = \'visible\' ;\r\n\t//setPos() ;\r\n\t\r\n\tnew NT.widget.Button({\r\n\t\tid: \'btnSignIn\',\r\n\t\tel: \'logon\',\r\n\t\ticon: \'Ent-icon-lock\'\r\n\t}).addEvent("click",doLogin)\r\n\t//载入是初始化用户语言\r\n\tvar uLang = getUserLang() ;\r\n\tswitchFace(uLang) ;\t\r\n\t\r\n\tvar tmp=document.URL;\r\n\tvar str=tmp.substring(tmp.indexOf("//")+2);\r\n\tvar homePage=tmp.substring(0,tmp.lastIndexOf("/"));\r\n\t\r\n\tvar context_root=str.substring(str.indexOf("/"),str.lastIndexOf("/"));\r\n\tif (context_root=="/"){\r\n\t\tcontext_root="";\r\n\t}\r\n\tstr=str.substring(0,str.indexOf("/"));\r\n\tvar F = document.forms[\'form1\'] ;\r\n\tF[\'WEBURL\'].value=str;\r\n\tF[\'homePage\'].value=homePage;\r\n\tF[\'context_root\'].value=context_root;\r\n\tF[\'w_state\'].value=screen.width;\r\n\tvar tID = document.getElementById(\'usr_id\')\t\r\n\ttID.select();tID.focus();\r\n}\r\nfunction setPos(){\r\n\tvar cH = document.body.clientHeight ;\r\n\tvar box = document.getElementById(\'loginBox\') ;\r\n\tbox.style.marginTop = (cH/2 - box.offsetHeight/2) + \'px\' ;\r\n}\r\nfunction switchFace(l){\r\n\tvar lName = document.getElementById(\'lab-name\')  ;\r\n\tvar lPwd = document.getElementById(\'lab-pwd\')  ;\r\n\tvar lForget = document.getElementById(\'lab-forget\')  ;\r\n\tvar lCopy = document.getElementById(\'lab-copy\')  ;\t\r\n\tvar lH1 = document.getElementById(\'lab-h1\')  ;\r\n\tvar lH2 = document.getElementById(\'lab-h2\')  ;\r\n\tvar lBtn = document.getElementById(\'downloadBtn\')  ;\r\n\tvar lZh = document.getElementById(\'b-zh\')  ;\r\n\tvar lEn = document.getElementById(\'b-en\')  ;\r\n\tswitch(l){\r\n\t\tcase \'zh-cn\' :\r\n\t\t\tlName.innerHTML = \'用户名:\' ;\r\n\t\t\tlPwd.innerHTML = \'密&nbsp;&nbsp;码:\' ;\r\n\t\t\tlForget.innerHTML = \'忘记了密码？\';\r\n\t\t\tlCopy.innerHTML = \'<span>CopyRight&copy;2002-2010</span>&nbsp;浙大恩特网络科技有限公司。保留所有权利。\' ;\r\n\t\t\tNT.getPlu(\'btnSignIn\').setLabel(\'登 录\') ;\r\n\t\t\tlH1.innerHTML = \'登录EnterCRM\';\r\n\t\t\tlH2.innerHTML = \'第一次登录 请下载安装控件\';\r\n\t\t\tlBtn.value = \'下载控件\';\r\n\t\t\tlZh.className = \'\' ;\r\n\t\t\tlEn.className = \'\' ;\r\n\t\t\tbreak ;\r\n\t\tcase \'en-us\' :\r\n\t\t\tlName.innerHTML = \'User：\' ;\r\n\t\t\tlPwd.innerHTML = \'Pswd：\' ;\r\n\t\t\tlForget.innerHTML = \'Forgot your password？\';\r\n\t\t\tlCopy.innerHTML = \'<span>CopyRight&copy;2002-2010</span>&nbsp;Zhejiang University Enterprise Software Technology Co.,Ltd. All right reserved\' ;\r\n\t\t\tNT.getPlu(\'btnSignIn\').setLabel(\'Sign In\') ;\r\n\t\t\tlH1.innerHTML = \'Login EnterCRM\';\r\n\t\t\tlH2.innerHTML = \'Please download control if first login\';\r\n\t\t\tlBtn.value = \'Download\';\r\n\t\t\tlZh.className = \'\' ;\r\n\t\t\tlEn.className = \'\' ;\r\n\t\t\tbreak ;\r\n\t}\r\n\tNT.util.dom.cookie(\'lang\', l) ;\r\n}\r\n//获取用户语言\r\nfunction getUserLang(){\r\n\t//获取cookie中的语言信息\r\n\tvar uLang = NT.util.dom.cookie(\'lang\') ;\r\n\t\r\n\tif(!uLang) {\r\n\t\ttry { \r\n\t\t\tvar _lang = navigator.userLanguage ; \r\n\t\t\tif (_lang.indexOf(\'zh-cn\')!=-1)  return(\'zh-cn\') ;//简体中文\r\n\r\n\t\t\tif (_lang.indexOf(\'zh-tw\')!=-1)  return(\'zh-cn\') ;//繁体中文\r\n\t\t\tif (_lang.indexOf(\'en\')!=-1)     return(\'en-us\') ;//英文\r\n\t\t\tif (_lang.indexOf(\'de\')!=-1)     return(\'en-us\') ;//德文\r\n\t\t\tif (_lang.indexOf(\'ar\')!=-1)     return(\'en-us\') ;//阿拉伯文\r\n\t\t\tif (_lang.indexOf(\'fr\')!=-1)     return(\'en-us\') ;//法文\r\n\t\t\tif (_lang.indexOf(\'ko\')!=-1)     return(\'en-us\') ;//韩文/朝鲜文\r\n\r\n\t\t\tif (_lang.indexOf(\'ja\')!=-1)     return(\'en-us\') ;//日文\r\n\t\t\tif (_lang.indexOf(\'es\')!=-1)     return(\'en-us\') ;//西班牙文\r\n\t\t\tif (_lang.indexOf(\'ru\')!=-1)     return(\'en-us\') ;//俄文\r\n\t\t\tif (_lang.indexOf(\'pt\')!=-1)     return(\'en-us\') ;//葡萄牙文\r\n\t\t\tif (_lang.indexOf(\'ms\')!=-1)     return(\'en-us\') ;//马来西亚文\r\n\r\n\t\t\tif (_lang.indexOf(\'el\')!=-1)     return(\'en-us\') ;//希腊文\r\n\r\n\t\t\tif (_lang.indexOf(\'da\')!=-1)     return(\'en-us\') ;//丹麦文\r\n\r\n\t\t\tif (_lang.indexOf(\'it\')!=-1)     return(\'en-us\') ;//丹麦文\r\n\r\n\t\t} catch (er) { \r\n\t\t\treturn(\'zh-cn\') ;\r\n    \t}\r\n\t}\r\n\treturn uLang ;\r\n}\r\n\r\nfunction goToNext(){\r\n\tevt = NT.util.event.getEvent()\r\n\tif (evt.keyCode==13){\r\n\t\tif(NT.env.isIE){\r\n\t\t\tevt.keyCode=9 ;\t\t\t\r\n\t\t} else {\r\n\t\t\ttry{\r\n\t\t\t\twindow.setTimeout(function(){\t\t\t\t\t\r\n\t\t\t\t\tdocument.getElementById(\'password\').focus() ;\r\n\t\t\t\t},0) ;\r\n\t\t\t}catch(e){}\r\n\t\t}\r\n\t}\r\n}\r\nfunction doLogin_proxy(){\r\n\tevt = NT.util.event.getEvent()\r\n\tif (evt.keyCode==13){\r\n\t\tdoLogin();\r\n\t}\r\n}\r\n/*\r\nNT.bind(window, \'unload\', function(){\r\n\tif(WB && !WB.closed) {WB.close()}\r\n})\r\n\r\nNT.bind(window, \'resize\', setPos)\r\n*/\r\n//--\x3e\r\nfunction systemhelp(){\r\n\tvar screenH = window.screen.availHeight - 30 ;\r\n\tvar screenW = window.screen.availWidth - 12 ;\r\n\tvar newin=window.open(\'entsoft/systemhelp/systemHelp.html\',\'systemHelp\',\'top=0,left=0,toolbar=no,scrollbars=no,resizable=yes,location=no,status=no,width=\'+screenW+\',height=\'+screenH);\r\n\tnewin.focus();\r\n}\r\nfunction openModWin(url,win,ftr){ \r\n\tvar newin=window.open(url,win,ftr);\r\n\tnewin.focus();\r\n}\r\n<\/script>\r\n</head>\r\n<body>\r\n<noscript>\r\n<div class="noscript">您的浏览器不支持JavaScript或者JavaScript被禁止使用，无法正常登录系统。</div>\r\n</noscript>\r\n<div id="login">\r\n\t  <div class="login-title">\r\n\t     <div class="login-qlink">\r\n\t\t  <a href="#" onClick="systemhelp();return false;">系统帮助</a><span>|</span><a href="#" onClick="openModWin(\'entsoft/ep/about.jsp\',\'ABOUT\',\'top=100,left=200,width=400,height=250,resizable=no\');return false;">关于软件</a>\r\n\t\t </div>\r\n\t  </div>\r\n\r\n\t  <div class="login-main">\r\n\t      <div class="login-right">\r\n\t      \t  \x3c!--<div class="login-top"></div>--\x3e\r\n\t\t      <div class="login-box">\r\n\t\t\t\t<form name="form1" method="post" class="login-form" action="return false" >\r\n\t\t\t\t<h1 id="lab-h1">登录EnterCRM</h1>\r\n\t\t\t\t<p>\r\n\t\t\t\t<label for="usr_id" id="lab-name">用户名:</label>\r\n\t\t\t\t<input type="text" name="usr_id" class="input-text" id="usr_id" maxLength=40 tabindex="1" onblur="this.className=\'input-text\';" onfocus="this.className=\'input-text input-text-over\';" onkeydown="goToNext()" />\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t<label for="password" id="lab-pwd">密&nbsp;&nbsp;码:</label>\r\n\t\t\t\t<input type="password" id="password" name="password" class="input-text" maxLength=20 tabindex="2" onblur="this.className=\'input-text\';" onfocus="this.className=\'input-text input-text-over\';" onkeydown="doLogin_proxy()" />\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class="login-btn">\r\n\t\t\t\t\x3c!--<input type="button" id="logon" class="loginBtn" value="登录"/>--\x3e\r\n\t\t\t\t<button id="logon">登录</button>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class="forget-psw">\r\n\t\t\t\t<a id="lab-forget" href="#">忘记了密码？</a>\r\n\t\t\t\t</p>\r\n\t\t\t\t\t<input type="hidden" name="cst_id" value="" />\r\n\t\t\t\t\t<input type="hidden" name=\'WEBURL\' value="" />\r\n\t\t\t\t\t<input type="hidden" name="formID" value="EnterCRM" />\r\n\t\t\t\t\t<input type="hidden" name="w_state" value="" />\r\n\t\t\t\t\t<input type="hidden" name="formName" value="CRM" />\r\n\t\t\t\t\t<input type="hidden" name="homePage" value="" />\r\n\t\t\t\t\t<input type="hidden"  name="context_root" value="" />\r\n                </form>\r\n\t\t\t  </div>\r\n\t\t\t  \r\n\t\t\t  <div class="login-footer"></div>\r\n\t\t\t  <div class="login-kj">\r\n\t\t\t     <h1 id="lab-h2">第一次登录 请下载安装控件</h1>\r\n\t\t\t\t <input type="button" class="downloadBtn" id="downloadBtn" value="下载控件"/>\r\n\t\t\t  </div>\r\n\t\t  </div>\r\n\t\t  <div class="login-left">\r\n              <div class="logo">\r\n\t\t\t     <div>\r\n\t\t\t     <a href="javascript:switchFace(\'zh-cn\')" id="b-zh" onfocus="blur()" title="登录中文版">简体中文</a>\r\n                 <a href="javascript:switchFace(\'en-us\')" id="b-en" onfocus="blur()" title="Login English">English</a>\r\n\t\t\t\t </div>\r\n\t\t      </div>\r\n\t\t\t  \r\n\t\t\t  <div style="text-align:left;margin-top:23px;"><img src="images/main/bar.jpg"></div>\r\n\t\t\t  \x3c!--<div style="padding-left:35px;padding-top:170px;margin:20px 0 10px 0;background:url(images/bar.gif) 60px top no-repeat;">\r\n\t\t\t     <ul>\r\n\t\t\t  \t \t<li>恩特软件更加专业</li>\r\n\t\t\t\t\t<li>恩特软件追求高效</li>\r\n\t\t\t\t\t<li>恩特软件注重服务</li>\r\n\t\t\t\t </ul>\r\n\t\t\t  </div>\r\n\t\t\t  \r\n\t\t\t  <div class="bar"><img src="images/bar1.jpg">安全</div>\r\n\t\t\t  <div class="bar"><img src="images/bar2.jpg">模块化</div>\r\n\t\t\t  <div class="bar"><img src="images/bar3.jpg">手机使用</div>--\x3e\r\n\t\t  </div>\r\n\t\t  <div style="clear:both"></div>\r\n\t  </div>\r\n\r\n\t  <div id="lab-copy" class="copyright">\r\n\t     <span>CopyRight&copy;2002-2010</span>&nbsp;浙大恩特网络科技有限公司。保留所有权利。\r\n\t  </div>\r\n</div>\r\n</body>\r\n</html>\r\n',
                        location: "/",
                        components: {},
                        securitytxt_hash: null,
                        server: "Apache-Coyote/1.1",
                        sitemap: null,
                        html_hash: -1446774834
                    },
                    tags: ["self-signed"],
                    timestamp: "2018-07-14T22:54:21.814717",
                    ssl: {
                        dhparams: {
                            prime: "e9e642599d355f37c97ffd3567120b8e25c9cd43e927b3a9670fbec5d890141922d2c3b3ad2480093799869d1e846aab49fab0ad26d2ce6a22219d470bce7d777d4a21fbe9c270b57f607002f3cef8393694cf45ee3688c11a8c56ab127a3daf",
                            public_key: "6c55c2cfc09655fdf3f62d22473857a4d36684bc7b02f47eca025663bd0187bfa2b9c5af616f685da7f38d417ed72b2bd9285567f34110a292a31b9946d872ef875e9f91419b1f4cfdcc20823c986eb9b8e7f64b5ad2dfd01f0bd20a29795640",
                            bits: 768,
                            generator: "30470ad5a005fb14ce2d9dcd87e38bc7d1b1c5facbaecbe95f190aa7a31d23c4dbbcbe06174544401a5b2c020965d8c2bd2171d3668445771f74ba084d2029d83c1c158547f3a9f1a2715be23d51ae4d3e5a1f6a7064f316933a346d3f529252",
                            fingerprint: "Java 7/Hardcoded 768-bit prime"
                        },
                        tlsext: [],
                        versions: ["TLSv1", "-SSLv2", "SSLv3", "-TLSv1.1", "-TLSv1.2"],
                        acceptable_cas: [],
                        cert: {
                            sig_alg: "md5WithRSAEncryption",
                            issued: "20060825060019Z",
                            expires: "20160822060019Z",
                            pubkey: {
                                bits: 1024,
                                type: "rsa"
                            },
                            version: 0,
                            extensions: [],
                            fingerprint: {
                                sha256: "69a12caef43c4fd86426214f1bcc15e94faddc187ffa2c527391f9c915a3a666",
                                sha1: "53150ecae70409eb80b65e20142cb8b2d1d3c494"
                            },
                            serial: 1156485619,
                            issuer: {
                                C: "cn",
                                CN: "entsoft",
                                L: "hz",
                                O: "entsoft",
                                ST: "zj",
                                OU: "entsoft"
                            },
                            expired: !0,
                            subject: {
                                C: "cn",
                                CN: "entsoft",
                                L: "hz",
                                O: "entsoft",
                                ST: "zj",
                                OU: "entsoft"
                            }
                        },
                        cipher: {
                            version: "TLSv1/SSLv3",
                            bits: 128,
                            name: "DHE-RSA-AES128-SHA"
                        },
                        chain: ["-----BEGIN CERTIFICATE-----\nMIICLDCCAZUCBETukfMwDQYJKoZIhvcNAQEEBQAwXTELMAkGA1UEBhMCY24xCzAJ\nBgNVBAgTAnpqMQswCQYDVQQHEwJoejEQMA4GA1UEChMHZW50c29mdDEQMA4GA1UE\nCxMHZW50c29mdDEQMA4GA1UEAxMHZW50c29mdDAeFw0wNjA4MjUwNjAwMTlaFw0x\nNjA4MjIwNjAwMTlaMF0xCzAJBgNVBAYTAmNuMQswCQYDVQQIEwJ6ajELMAkGA1UE\nBxMCaHoxEDAOBgNVBAoTB2VudHNvZnQxEDAOBgNVBAsTB2VudHNvZnQxEDAOBgNV\nBAMTB2VudHNvZnQwgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAOkaqbr1N74D\nrWIBEo46uXci582fmz0g+TX2whIM+HJBTtZnEVXzFfC9uemCl/Tc+glpOioAjXMx\n2bOUQ5acWoAW5Yu5e1TRwD2EDaKEXy+U+hLKS2Nz6dPS0j/IXGKSBHUGKZiYGpH3\nQRfHoeP6865A4EVa0baLSDDDU/xaY8dxAgMBAAEwDQYJKoZIhvcNAQEEBQADgYEA\nReL+Wsb+LnIo9Qc0eqwgpq7VF0RaaQa99V69zEYX1QNzcF3ttSypkhyDDxcefCk8\n6ebBbsWy3EcI9t45LjIzoi5wq2D2pkSDy8e3FahDU+zXvxBmcBD75uKdzMR4QKu9\n8ti0QCDd1QnVYUYhHEvScRcUMRyrEOy/oMnRzSv5Cv8=\n-----END CERTIFICATE-----\n"],
                        alpn: []
                    },
                    hostnames: [],
                    org: "China Mobile",
                    data: 'HTTP/1.1 200 OK\r\nServer: Apache-Coyote/1.1\r\nX-Powered-By: Servlet 2.4; JBoss-4.0.5.GA (build: CVSTag=Branch_4_0 date=200610162339)/Tomcat-5.5\r\nSet-Cookie: JSESSIONID=B99B1458EC18071240509A4C57CA0508; Path=/; Secure\r\nETag: W/"16246-1289437306000"\r\nLast-Modified: Thu, 11 Nov 2010 01:01:46 GMT\r\nContent-Type: text/html\r\nContent-Length: 16246\r\nDate: Sat, 14 Jul 2018 22:54:46 GMT\r\n\r\n',
                    asn: "AS56046",
                    info: "Tomcat 5.5",
                    isp: "China Mobile",
                    domains: [],
                    ip_str: "112.2.28.56",
                    os: null,
                    _shodan: {
                        crawler: "264b5a9d15a64f96a4768e9d8081b9ddefadb706",
                        id: "76803f88-134f-4360-8b57-125e1be929fb",
                        module: "https",
                        options: {}
                    },
                    opts: {
                        vulns: null,
                        heartbleed: "2018/07/14 17:54:39 112.2.28.56:8443 - ERROR: heartbleed: timeout\n"
                    }
                }],
                activeBanner: {
                    ip_str: "177.34.0.15",
                    port: 512,
                    os: "Windows 2000"
                }
            };
        e["a"].use(ot["a"]);
        var st = !1,
            dt = new ot["a"].Store({
                actions: at,
                mutations: {
                    updateBanners: function(t, n) {
                        t.banners = n
                    }
                },
                strict: st,
                state: lt
            });
        setInterval(function() {
            dt.dispatch("fetchData")
        }, 36e5);
        var ct = dt;
        e["a"].config.productionTip = !1, e["a"].use(o["a"], {
            breakpoints: {
                mobile: 550,
                tablet: 900,
                laptop: 1250,
                desktop: 1 / 0
            }
        }), e["a"].use(i["a"]);
        var pt = {
            methods: {
                isMobile: function() {
                    return "undefined" !== typeof window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile")
                }
            }
        };
        new e["a"]({
            router: et,
            store: ct,
            render: function(t) {
                return t(S)
            },
            mounted: function() {
                ct.dispatch("fetchData")
            },
            mixins: [pt]
        }).$mount("#app")
    },
    YMdL: function(t, n, r) {
        "use strict";
        var e = r("+AcJ"),
            o = r.n(e);
        o.a
    },
    byj9: function(t, n, r) {
        "use strict";
        var e = r("MfCY"),
            o = r.n(e);
        o.a
    },
    d3X6: function(t, n, r) {
        "use strict";
        var e = r("1YMD"),
            o = r.n(e);
        o.a
    },
    tW8T: function(t, n, r) {},
    taZu: function(t, n, r) {
        "use strict";
        var e = r("93I9"),
            o = r.n(e);
        o.a
    },
    "z/Rs": function(t, n, r) {
        "use strict";
        var e = r("EYzw"),
            o = r.n(e);
        o.a
    }
});
