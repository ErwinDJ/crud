import {
  require_config,
  require_schema
} from "/build/_shared/chunk-WQS63GH4.js";
import {
  require_dist
} from "/build/_shared/chunk-ISZJHPSU.js";
import {
  Link,
  init_esm,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-TJ67VRKH.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/dogs._index.tsx
init_esm();
var import_routes_gen = __toESM(require_dist());
var import_config = __toESM(require_config());
var import_schema = __toESM(require_schema());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ITEMS_PER_PAGE = 10;
function DogList() {
  const data = useLoaderData();
  const [currentPage, setCurrentPage] = (0, import_react2.useState)(1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = (data == null ? void 0 : data.slice(startIndex, endIndex)) || [];
  const totalPages = Math.ceil(((data == null ? void 0 : data.length) || 0) / ITEMS_PER_PAGE);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "table table-zebra w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "ID" }, void 0, false, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Name" }, void 0, false, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Breed" }, void 0, false, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Action" }, void 0, false, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dogs._index.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/dogs._index.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: paginatedData.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", { className: "kbd", children: item.id }, void 0, false, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 46,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: item.name }, void 0, false, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: item.breed }, void 0, false, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: (0, import_routes_gen.route)("/dogs/:dogId/details", {
              dogId: item.id.toString()
            }),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", { className: "kbd", children: "Edit" }, void 0, false, {
              fileName: "app/routes/dogs._index.tsx",
              lineNumber: 56,
              columnNumber: 19
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/dogs._index.tsx",
            lineNumber: 51,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this)
      ] }, item.id, true, {
        fileName: "app/routes/dogs._index.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "app/routes/dogs._index.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dogs._index.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mt-4", children: Array.from({ length: totalPages }, (_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: `mx-1 px-2 py-1 rounded ${currentPage === index + 1 ? "bg-gray-400 text-white" : "bg-white-200"}`,
        onClick: () => handlePageChange(index + 1),
        children: index + 1
      },
      index,
      false,
      {
        fileName: "app/routes/dogs._index.tsx",
        lineNumber: 67,
        columnNumber: 11
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/dogs._index.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dogs._index.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
export {
  DogList as default
};
//# sourceMappingURL=/build/routes/dogs._index-3NZ7HQW6.js.map
