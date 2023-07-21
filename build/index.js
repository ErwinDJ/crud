var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 39,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 81,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react3 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-KXCCUDQ2.css";

// app/components/Navbar.tsx
var import_react2 = require("@remix-run/react"), import_routes_gen = require("routes-gen"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), Navbar = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "navbar bg-base-300 rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-full items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "menu menu-horizontal px-1 space-x-4", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: (0, import_routes_gen.route)("/dogs"), children: "Dog List" }, void 0, !1, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 9,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: (0, import_routes_gen.route)("/dogs/create"), children: "New Dog" }, void 0, !1, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 12,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Navbar.tsx",
  lineNumber: 7,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Navbar.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/components/Navbar.tsx",
  lineNumber: 5,
  columnNumber: 3
}, this);

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navbar, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/dogs.$dogId.details.tsx
var dogs_dogId_details_exports = {};
__export(dogs_dogId_details_exports, {
  default: () => DogDetailsMain,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react"), import_expressions = require("drizzle-orm/expressions");

// app/db/config.server.ts
var import_better_sqlite3 = require("drizzle-orm/better-sqlite3"), import_migrator = require("drizzle-orm/better-sqlite3/migrator"), import_better_sqlite32 = __toESM(require("better-sqlite3")), sqlite = new import_better_sqlite32.default("sqlite.db"), db = (0, import_better_sqlite3.drizzle)(sqlite);
(0, import_migrator.migrate)(db, { migrationsFolder: "./app/db/migrations" });

// app/db/schema.server.ts
var import_sqlite_core = require("drizzle-orm/sqlite-core"), dogs = (0, import_sqlite_core.sqliteTable)("dogs", {
  id: (0, import_sqlite_core.integer)("id").primaryKey(),
  name: (0, import_sqlite_core.text)("name").notNull(),
  breed: (0, import_sqlite_core.text)("breed").notNull()
});

// app/routes/dogs.$dogId.details.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), loader = ({ params }) => {
  let { dogId } = params, result = db.select().from(dogs).where((0, import_expressions.eq)(dogs.id, Number(dogId))).get();
  return (0, import_node2.json)(result);
};
function DogDetailsMain() {
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-3/5 lg:w-2/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "mb-6", children: "Dog details:" }, void 0, !1, {
      fileName: "app/routes/dogs.$dogId.details.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mockup-code", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("pre", { "data-prefix": "~", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("code", { children: [
        "Name: ",
        data.name
      ] }, void 0, !0, {
        fileName: "app/routes/dogs.$dogId.details.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      ",\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("code", { children: [
        "Breed: ",
        data.breed
      ] }, void 0, !0, {
        fileName: "app/routes/dogs.$dogId.details.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dogs.$dogId.details.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dogs.$dogId.details.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dogs.$dogId.details.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/dogs.$dogId.remove.tsx
var dogs_dogId_remove_exports = {};
__export(dogs_dogId_remove_exports, {
  action: () => action,
  default: () => DogDetailsRemove
});
var import_node3 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_expressions2 = require("drizzle-orm/expressions"), import_routes_gen2 = require("routes-gen");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), action = ({ params }) => {
  let { dogId } = params;
  return db.delete(dogs).where((0, import_expressions2.eq)(dogs.id, Number(dogId))).run(), (0, import_node3.redirect)((0, import_routes_gen2.route)("/dogs"));
};
function DogDetailsRemove() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "my-modal-6", className: "btn btn-wide", children: "Delete" }, void 0, !1, {
      fileName: "app/routes/dogs.$dogId.remove.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "checkbox", id: "my-modal-6", className: "modal-toggle" }, void 0, !1, {
      fileName: "app/routes/dogs.$dogId.remove.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "modal modal-bottom sm:modal-middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "modal-box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "font-bold text-lg", children: "Delete Database Entry" }, void 0, !1, {
        fileName: "app/routes/dogs.$dogId.remove.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "py-4", children: "Are you sure you want to delete this database entry? This action is irreversible." }, void 0, !1, {
        fileName: "app/routes/dogs.$dogId.remove.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "modal-action", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Form, { method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "_method", value: "delete" }, void 0, !1, {
          fileName: "app/routes/dogs.$dogId.remove.tsx",
          lineNumber: 37,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "btn", children: "Yes" }, void 0, !1, {
          fileName: "app/routes/dogs.$dogId.remove.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dogs.$dogId.remove.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/dogs.$dogId.remove.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dogs.$dogId.remove.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dogs.$dogId.remove.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dogs.$dogId.remove.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/dogs.$dogId.update.tsx
var dogs_dogId_update_exports = {};
__export(dogs_dogId_update_exports, {
  action: () => action2,
  default: () => DogDetailsUpdate,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react6 = require("@remix-run/react"), import_with_zod = require("@remix-validated-form/with-zod"), import_remix_validated_form2 = require("remix-validated-form"), import_routes_gen3 = require("routes-gen"), import_expressions3 = require("drizzle-orm/expressions"), import_zod = require("zod");

// app/components/Input.tsx
var import_remix_validated_form = require("remix-validated-form"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Input = ({ name, label, ...rest }) => {
  let { error, getInputProps } = (0, import_remix_validated_form.useField)(name);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: name, className: "mb-3", children: label }, void 0, !1, {
      fileName: "app/components/Input.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "input",
      {
        className: "input input-bordered w-full max-w-xs",
        ...rest,
        ...getInputProps({ id: name })
      },
      void 0,
      !1,
      {
        fileName: "app/components/Input.tsx",
        lineNumber: 17,
        columnNumber: 7
      },
      this
    ),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "label-text-alt mt-3", children: error }, void 0, !1, {
      fileName: "app/components/Input.tsx",
      lineNumber: 23,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Input.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
};

// app/routes/dogs.$dogId.update.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), validator = (0, import_with_zod.withZod)(
  import_zod.z.object({
    name: import_zod.z.string().min(1).max(34),
    breed: import_zod.z.string().min(1).max(34)
  })
), loader2 = ({ params }) => {
  let { dogId } = params, { id, ...rest } = db.select().from(dogs).where((0, import_expressions3.eq)(dogs.id, Number(dogId))).get();
  return (0, import_node4.json)({ defaultValues: rest });
}, action2 = async ({ request, params }) => {
  let fieldValues = await validator.validate(await request.formData()), { dogId } = params;
  return fieldValues.error ? (0, import_remix_validated_form2.validationError)(fieldValues.error) : (db.update(dogs).set(fieldValues.data).where((0, import_expressions3.eq)(dogs.id, Number(dogId))).run(), (0, import_node4.redirect)((0, import_routes_gen3.route)("/dogs")));
};
function DogDetailsUpdate() {
  let { defaultValues } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "mb-6 text-xl", children: "Update doggo entry" }, void 0, !1, {
      fileName: "app/routes/dogs.$dogId.update.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_remix_validated_form2.ValidatedForm,
      {
        className: "space-y-6",
        method: "POST",
        validator,
        defaultValues,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { name: "name", label: "Name", placeholder: "Name" }, void 0, !1, {
            fileName: "app/routes/dogs.$dogId.update.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { name: "breed", label: "Breed", placeholder: "Breed" }, void 0, !1, {
            fileName: "app/routes/dogs.$dogId.update.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "btn btn-accent", type: "submit", children: "Update" }, void 0, !1, {
            fileName: "app/routes/dogs.$dogId.update.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/dogs.$dogId.update.tsx",
        lineNumber: 57,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/dogs.$dogId.update.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

// app/routes/dogs.$dogId.tsx
var dogs_dogId_exports = {};
__export(dogs_dogId_exports, {
  default: () => DogDetails,
  meta: () => meta
});
var import_react7 = require("@remix-run/react"), import_routes_gen4 = require("routes-gen"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), meta = () => [{ title: "Dog Details Page" }];
function DogDetails() {
  let { dogId } = (0, import_react7.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-row space-x-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { className: "menu bg-base-100 w-56 rounded-box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_react7.Link,
        {
          to: (0, import_routes_gen4.route)("/dogs/:dogId/details", {
            dogId: dogId ?? ""
          }),
          children: "Details"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dogs.$dogId.tsx",
          lineNumber: 17,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dogs.$dogId.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_react7.Link,
        {
          to: (0, import_routes_gen4.route)("/dogs/:dogId/update", {
            dogId: dogId ?? ""
          }),
          children: "Update"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dogs.$dogId.tsx",
          lineNumber: 26,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dogs.$dogId.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "text-red-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_react7.Link,
        {
          to: (0, import_routes_gen4.route)("/dogs/:dogId/remove", {
            dogId: dogId ?? ""
          }),
          children: "Remove"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dogs.$dogId.tsx",
          lineNumber: 35,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dogs.$dogId.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dogs.$dogId.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
      fileName: "app/routes/dogs.$dogId.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dogs.$dogId.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/dogs.create.tsx
var dogs_create_exports = {};
__export(dogs_create_exports, {
  action: () => action3,
  default: () => DogInsertion,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react8 = require("@remix-run/react"), import_with_zod2 = require("@remix-validated-form/with-zod"), import_remix_validated_form3 = require("remix-validated-form"), import_routes_gen5 = require("routes-gen"), import_zod2 = require("zod");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), validator2 = (0, import_with_zod2.withZod)(
  import_zod2.z.object({
    name: import_zod2.z.string().min(1).max(34),
    breed: import_zod2.z.string().min(1).max(34)
  })
), loader3 = () => (0, import_node5.json)({
  defaultValues: {
    name: "",
    breed: ""
  }
}), action3 = async ({ request }) => {
  let fieldValues = await validator2.validate(await request.formData());
  return fieldValues.error ? (0, import_remix_validated_form3.validationError)(fieldValues.error) : (db.insert(dogs).values(fieldValues.data).run(), (0, import_node5.redirect)((0, import_routes_gen5.route)("/dogs")));
};
function DogInsertion() {
  let { defaultValues } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-center items-center h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "mb-2 text-xl", children: "Add a new Dog" }, void 0, !1, {
        fileName: "app/routes/dogs.create.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-gray-600", children: "Add your dog's name and breed" }, void 0, !1, {
        fileName: "app/routes/dogs.create.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dogs.create.tsx",
      lineNumber: 44,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      import_remix_validated_form3.ValidatedForm,
      {
        className: "space-y-6",
        method: "POST",
        validator: validator2,
        defaultValues,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Input, { name: "name", label: "Name", placeholder: "Name" }, void 0, !1, {
            fileName: "app/routes/dogs.create.tsx",
            lineNumber: 55,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Input, { name: "breed", label: "Breed", placeholder: "Breed" }, void 0, !1, {
            fileName: "app/routes/dogs.create.tsx",
            lineNumber: 56,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { className: "btn btn-accent", type: "submit", children: "Submit" }, void 0, !1, {
            fileName: "app/routes/dogs.create.tsx",
            lineNumber: 58,
            columnNumber: 7
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/dogs.create.tsx",
        lineNumber: 49,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/dogs.create.tsx",
    lineNumber: 43,
    columnNumber: 3
  }, this) }, void 0, !1, {
    fileName: "app/routes/dogs.create.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/dogs._index.tsx
var dogs_index_exports = {};
__export(dogs_index_exports, {
  default: () => DogList,
  loader: () => loader4
});
var import_node6 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), import_routes_gen6 = require("routes-gen");
var import_react10 = require("react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), ITEMS_PER_PAGE = 10, loader4 = () => {
  let result = db.select().from(dogs).all();
  return (0, import_node6.json)(result);
};
function DogList() {
  let data = (0, import_react9.useLoaderData)(), [currentPage, setCurrentPage] = (0, import_react10.useState)(1), startIndex = (currentPage - 1) * ITEMS_PER_PAGE, endIndex = startIndex + ITEMS_PER_PAGE, paginatedData = (data == null ? void 0 : data.slice(startIndex, endIndex)) || [], totalPages = Math.ceil(((data == null ? void 0 : data.length) || 0) / ITEMS_PER_PAGE), handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "overflow-x-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("table", { className: "table table-zebra w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("th", { children: "ID" }, void 0, !1, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("th", { children: "Name" }, void 0, !1, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("th", { children: "Breed" }, void 0, !1, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("th", { children: "Action" }, void 0, !1, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dogs._index.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dogs._index.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("tbody", { children: paginatedData.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("th", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("kbd", { className: "kbd", children: item.id }, void 0, !1, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 46,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("td", { children: item.name }, void 0, !1, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("td", { children: item.breed }, void 0, !1, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          import_react9.Link,
          {
            to: (0, import_routes_gen6.route)("/dogs/:dogId/details", {
              dogId: item.id.toString()
            }),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("kbd", { className: "kbd", children: "Edit" }, void 0, !1, {
              fileName: "app/routes/dogs._index.tsx",
              lineNumber: 56,
              columnNumber: 19
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dogs._index.tsx",
            lineNumber: 51,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/dogs._index.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this)
      ] }, item.id, !0, {
        fileName: "app/routes/dogs._index.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/dogs._index.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dogs._index.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex justify-center mt-4", children: Array.from({ length: totalPages }, (_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "button",
      {
        className: `mx-1 px-2 py-1 rounded ${currentPage === index + 1 ? "bg-gray-400 text-white" : "bg-white-200"}`,
        onClick: () => handlePageChange(index + 1),
        children: index + 1
      },
      index,
      !1,
      {
        fileName: "app/routes/dogs._index.tsx",
        lineNumber: 67,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/dogs._index.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dogs._index.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  loader: () => loader5
});
var import_node7 = require("@remix-run/node"), import_routes_gen7 = require("routes-gen"), loader5 = () => (0, import_node7.redirect)((0, import_routes_gen7.route)("/dogs"));

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login,
  links: () => links2
});
var import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function Login() {
  let [searchParams] = (0, import_react11.useSearchParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bg-white p-8 rounded-xl shadow-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "text-3xl font-bold mb-6 text-center text-gray-800", children: "Login" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("form", { className: "space-y-6", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { htmlFor: "username", className: "block text-sm font-medium text-gray-700", children: "Username" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "input",
          {
            type: "text",
            id: "username",
            name: "username",
            className: "block w-full bg-gray-200 border-transparent rounded-lg focus:bg-white focus:border-blue-400 focus:ring-0 text-black"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 20,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700", children: "Password" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "input",
          {
            type: "password",
            id: "password",
            name: "password",
            className: "block w-full bg-gray-200 border-transparent rounded-lg focus:bg-white focus:border-blue-400 focus:ring-0 text-black"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 31,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "inline-flex items-center justify-center px-4 py-2 w-40 text-white font-semibold bg-gradient-to-br from-blue-400 to-blue-600 rounded-md shadow-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400",
          children: "Login"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 39,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/dogs.tsx
var dogs_exports = {};
__export(dogs_exports, {
  default: () => DogsLayout,
  meta: () => meta2
});
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), meta2 = () => [{ title: "Dog List Page" }];
function DogsLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "m-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
    fileName: "app/routes/dogs.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dogs.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "499fb148", entry: { module: "/build/entry.client-M7A6UH2U.js", imports: ["/build/_shared/chunk-TJ67VRKH.js", "/build/_shared/chunk-4IYZMDEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3ZUWZ6A5.js", imports: ["/build/_shared/chunk-LOFM6JKP.js", "/build/_shared/chunk-ISZJHPSU.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-OTSDAEBV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dogs": { id: "routes/dogs", parentId: "root", path: "dogs", index: void 0, caseSensitive: void 0, module: "/build/routes/dogs-ZOFH2OG5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dogs.$dogId": { id: "routes/dogs.$dogId", parentId: "routes/dogs", path: ":dogId", index: void 0, caseSensitive: void 0, module: "/build/routes/dogs.$dogId-DWQILV66.js", imports: ["/build/_shared/chunk-ISZJHPSU.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dogs.$dogId.details": { id: "routes/dogs.$dogId.details", parentId: "routes/dogs.$dogId", path: "details", index: void 0, caseSensitive: void 0, module: "/build/routes/dogs.$dogId.details-WURSKERP.js", imports: ["/build/_shared/chunk-AJKCBVIW.js", "/build/_shared/chunk-WQS63GH4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dogs.$dogId.remove": { id: "routes/dogs.$dogId.remove", parentId: "routes/dogs.$dogId", path: "remove", index: void 0, caseSensitive: void 0, module: "/build/routes/dogs.$dogId.remove-FLFHGOZO.js", imports: ["/build/_shared/chunk-AJKCBVIW.js", "/build/_shared/chunk-WQS63GH4.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dogs.$dogId.update": { id: "routes/dogs.$dogId.update", parentId: "routes/dogs.$dogId", path: "update", index: void 0, caseSensitive: void 0, module: "/build/routes/dogs.$dogId.update-I2WXBITS.js", imports: ["/build/_shared/chunk-AJKCBVIW.js", "/build/_shared/chunk-G7OQWILX.js", "/build/_shared/chunk-WQS63GH4.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dogs._index": { id: "routes/dogs._index", parentId: "routes/dogs", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dogs._index-3NZ7HQW6.js", imports: ["/build/_shared/chunk-WQS63GH4.js", "/build/_shared/chunk-ISZJHPSU.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dogs.create": { id: "routes/dogs.create", parentId: "routes/dogs", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/dogs.create-OYBYXZEC.js", imports: ["/build/_shared/chunk-G7OQWILX.js", "/build/_shared/chunk-WQS63GH4.js", "/build/_shared/chunk-ISZJHPSU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-NHG4BTIE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-499FB148.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dogs.$dogId.details": {
    id: "routes/dogs.$dogId.details",
    parentId: "routes/dogs.$dogId",
    path: "details",
    index: void 0,
    caseSensitive: void 0,
    module: dogs_dogId_details_exports
  },
  "routes/dogs.$dogId.remove": {
    id: "routes/dogs.$dogId.remove",
    parentId: "routes/dogs.$dogId",
    path: "remove",
    index: void 0,
    caseSensitive: void 0,
    module: dogs_dogId_remove_exports
  },
  "routes/dogs.$dogId.update": {
    id: "routes/dogs.$dogId.update",
    parentId: "routes/dogs.$dogId",
    path: "update",
    index: void 0,
    caseSensitive: void 0,
    module: dogs_dogId_update_exports
  },
  "routes/dogs.$dogId": {
    id: "routes/dogs.$dogId",
    parentId: "routes/dogs",
    path: ":dogId",
    index: void 0,
    caseSensitive: void 0,
    module: dogs_dogId_exports
  },
  "routes/dogs.create": {
    id: "routes/dogs.create",
    parentId: "routes/dogs",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: dogs_create_exports
  },
  "routes/dogs._index": {
    id: "routes/dogs._index",
    parentId: "routes/dogs",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dogs_index_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/dogs": {
    id: "routes/dogs",
    parentId: "root",
    path: "dogs",
    index: void 0,
    caseSensitive: void 0,
    module: dogs_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
