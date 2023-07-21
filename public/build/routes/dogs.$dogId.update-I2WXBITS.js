import {
  require_expressions
} from "/build/_shared/chunk-AJKCBVIW.js";
import {
  Input,
  ValidatedForm,
  init_index_esm,
  require_remix_validated_form_with_zod_cjs,
  z
} from "/build/_shared/chunk-G7OQWILX.js";
import {
  require_config,
  require_schema
} from "/build/_shared/chunk-WQS63GH4.js";
import {
  require_dist
} from "/build/_shared/chunk-ISZJHPSU.js";
import {
  init_esm,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-TJ67VRKH.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/dogs.$dogId.update.tsx
init_esm();
var import_with_zod = __toESM(require_remix_validated_form_with_zod_cjs());
init_index_esm();
var import_routes_gen = __toESM(require_dist());
var import_expressions = __toESM(require_expressions());
var import_config = __toESM(require_config());
var import_schema = __toESM(require_schema());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var validator = (0, import_with_zod.withZod)(
  z.object({
    name: z.string().min(1).max(34),
    breed: z.string().min(1).max(34)
  })
);
function DogDetailsUpdate() {
  const { defaultValues } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-6 text-xl", children: "Update doggo entry" }, void 0, false, {
      fileName: "app/routes/dogs.$dogId.update.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ValidatedForm,
      {
        className: "space-y-6",
        method: "POST",
        validator,
        defaultValues,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "name", label: "Name", placeholder: "Name" }, void 0, false, {
            fileName: "app/routes/dogs.$dogId.update.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "breed", label: "Breed", placeholder: "Breed" }, void 0, false, {
            fileName: "app/routes/dogs.$dogId.update.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn btn-accent", type: "submit", children: "Update" }, void 0, false, {
            fileName: "app/routes/dogs.$dogId.update.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/dogs.$dogId.update.tsx",
        lineNumber: 57,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/dogs.$dogId.update.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
export {
  DogDetailsUpdate as default
};
//# sourceMappingURL=/build/routes/dogs.$dogId.update-I2WXBITS.js.map
