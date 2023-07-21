import {
  require_expressions
} from "/build/_shared/chunk-AJKCBVIW.js";
import {
  require_config,
  require_schema
} from "/build/_shared/chunk-WQS63GH4.js";
import {
  init_esm,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-TJ67VRKH.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/dogs.$dogId.details.tsx
init_esm();
var import_expressions = __toESM(require_expressions());
var import_config = __toESM(require_config());
var import_schema = __toESM(require_schema());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function DogDetailsMain() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-3/5 lg:w-2/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-6", children: "Dog details:" }, void 0, false, {
      fileName: "app/routes/dogs.$dogId.details.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mockup-code", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { "data-prefix": "~", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: [
        "Name: ",
        data.name
      ] }, void 0, true, {
        fileName: "app/routes/dogs.$dogId.details.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      ",\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: [
        "Breed: ",
        data.breed
      ] }, void 0, true, {
        fileName: "app/routes/dogs.$dogId.details.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dogs.$dogId.details.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dogs.$dogId.details.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dogs.$dogId.details.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
export {
  DogDetailsMain as default
};
//# sourceMappingURL=/build/routes/dogs.$dogId.details-WURSKERP.js.map
