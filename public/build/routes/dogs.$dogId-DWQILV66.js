import {
  require_dist
} from "/build/_shared/chunk-ISZJHPSU.js";
import {
  Link,
  Outlet,
  init_esm,
  require_jsx_dev_runtime,
  useParams
} from "/build/_shared/chunk-TJ67VRKH.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/dogs.$dogId.tsx
init_esm();
var import_routes_gen = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Dog Details Page" }];
};
function DogDetails() {
  const { dogId } = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row space-x-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "menu bg-base-100 w-56 rounded-box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: (0, import_routes_gen.route)("/dogs/:dogId/details", {
            dogId: dogId != null ? dogId : ""
          }),
          children: "Details"
        },
        void 0,
        false,
        {
          fileName: "app/routes/dogs.$dogId.tsx",
          lineNumber: 17,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/dogs.$dogId.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: (0, import_routes_gen.route)("/dogs/:dogId/update", {
            dogId: dogId != null ? dogId : ""
          }),
          children: "Update"
        },
        void 0,
        false,
        {
          fileName: "app/routes/dogs.$dogId.tsx",
          lineNumber: 26,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/dogs.$dogId.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "text-red-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: (0, import_routes_gen.route)("/dogs/:dogId/remove", {
            dogId: dogId != null ? dogId : ""
          }),
          children: "Remove"
        },
        void 0,
        false,
        {
          fileName: "app/routes/dogs.$dogId.tsx",
          lineNumber: 35,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/dogs.$dogId.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dogs.$dogId.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/dogs.$dogId.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dogs.$dogId.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
export {
  DogDetails as default,
  meta
};
//# sourceMappingURL=/build/routes/dogs.$dogId-DWQILV66.js.map
