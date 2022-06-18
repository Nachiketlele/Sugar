import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  let cat = [
    {
      id: 1,
      title: "HOME",
      path: "/",
      sub: {
        a: "LIPS",
        p1: "/",
        b: "FACE",
        p2: "/",
        c: "EYES",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
    {
      id: 2,
      title: "BRUSHES",
      path: "/makeup",
      sub: {
        a: "FACE BRUSHES",
        p1: "/",
        b: "EYES BRUSHES",
        p2: "/",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
    {
      id: 3,
      title: "SKINCARE",
      path: "/skincare",
      sub: {
        a: "MOISTURIZERS",
        p1: "/",
        b: "SUNSCREEN",
        p2: "/",
        c: "SETTING MISTS",
        p3: "/",
        d: "COFFEE CULTURE RANGE",
        p4: "/",
        e: "SHEET MASK COMBO",
        p5: "/",
        f: "CITRUS GOT REAL RANGE",
        p6: "/",
        g: "MASKS",
        p7: "/",
        h: "AQUAHOLIC RANGE",
        p8: "/",
      },
    },{
      id: 4,
      title: "TRENDING",
      path: "/trending",
      sub: {
        a: "SUGAR MERCH STATION",
        p1: "/",
        b: "MAKEUP KITS",
        p2: "/",
        c: "BESTSELLERS",
        p3: "/",
        d: "SUGAR SETS",
        p4: "/",
        e:"VALUE SETS",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },{
      id: 5,
      title: "BLOG",
      path: "/",
      sub: {
        a: "FEATURED",
        p1: "/",
        b: "MAKEUP",
        p2: "/",
        c: "SKINCARE",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
  ];

  return (
    <div className="upperBox">
      {cat.map((el) => (
        <div className="main_menu" key={el.id}>
          <Link  className="menu-btn" to={el.path}>
            {el.title}
          </Link>

          <div className="xyz">
            <div className="b">
              <div className="div">
                <ul>
                  <li>
                    <Link className="p" to={el.sub.p1}>
                      {el.sub.a}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p2}>
                      {el.sub.b}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p3}>
                      {el.sub.c}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p4}>
                      {el.sub.d}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p5}>
                      {el.sub.e}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p6}>
                      {el.sub.f}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p7}>
                      {el.sub.g}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p8}>
                      {el.sub.h}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Link className="grow" to="/Grow">
        OFFERS
      </Link>
      <Link className="grow" to="/Grow">
        STORES
      </Link>
      </div>
  );
};

export default Navbar;
