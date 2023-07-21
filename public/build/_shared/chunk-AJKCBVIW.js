import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/drizzle-orm/column.js
var require_column = __commonJS({
  "node_modules/drizzle-orm/column.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Column = void 0;
    var Column = class {
      constructor(table, config) {
        this.table = table;
        this.config = config;
        this.name = config.name;
        this.notNull = config.notNull;
        this.default = config.default;
        this.hasDefault = config.hasDefault;
        this.primary = config.primaryKey;
      }
      mapFromDriverValue(value) {
        return value;
      }
      mapToDriverValue(value) {
        return value;
      }
    };
    exports.Column = Column;
  }
});

// node_modules/drizzle-orm/table.js
var require_table = __commonJS({
  "node_modules/drizzle-orm/table.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getTableName = exports.Table = exports.OriginalName = exports.Columns = exports.Schema = exports.TableName = void 0;
    exports.TableName = Symbol("Name");
    exports.Schema = Symbol("Schema");
    exports.Columns = Symbol("Columns");
    exports.OriginalName = Symbol("OriginalName");
    var Table = class {
      constructor(name, schema) {
        this[exports.TableName] = this[exports.OriginalName] = name;
        this[exports.Schema] = schema;
      }
    };
    Table.Symbol = {
      Name: exports.TableName,
      Schema: exports.Schema,
      OriginalName: exports.OriginalName,
      Columns: exports.Columns
    };
    exports.Table = Table;
    function getTableName(table) {
      return table[exports.TableName];
    }
    exports.getTableName = getTableName;
  }
});

// node_modules/drizzle-orm/view.js
var require_view = __commonJS({
  "node_modules/drizzle-orm/view.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.View = exports.ViewBaseConfig = void 0;
    exports.ViewBaseConfig = Symbol("ViewBaseConfig");
    var View = class {
      constructor({ name, schema, selectedFields, query }) {
        this[exports.ViewBaseConfig] = {
          name,
          schema,
          selectedFields,
          query,
          isExisting: !query
        };
      }
    };
    exports.View = View;
  }
});

// node_modules/drizzle-orm/alias.js
var require_alias = __commonJS({
  "node_modules/drizzle-orm/alias.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TableAliasProxyHandler = exports.ColumnAliasProxyHandler = void 0;
    var column_1 = require_column();
    var table_1 = require_table();
    var ColumnAliasProxyHandler = class {
      constructor(table) {
        this.table = table;
      }
      get(columnObj, prop, receiver) {
        if (prop === "table") {
          return this.table;
        }
        return columnObj[prop];
      }
    };
    exports.ColumnAliasProxyHandler = ColumnAliasProxyHandler;
    var TableAliasProxyHandler = class {
      constructor(alias) {
        this.alias = alias;
      }
      get(tableObj, prop, receiver) {
        if (prop === table_1.Table.Symbol.Name) {
          return this.alias;
        }
        if (prop === table_1.Table.Symbol.Columns) {
          const columns = tableObj[table_1.Table.Symbol.Columns];
          if (!columns) {
            return columns;
          }
          const proxiedColumns = {};
          Object.keys(columns).map((key) => {
            proxiedColumns[key] = new Proxy(columns[key], new ColumnAliasProxyHandler(new Proxy(tableObj, this)));
          });
          return proxiedColumns;
        }
        const value = tableObj[prop];
        if (value instanceof column_1.Column) {
          return new Proxy(value, new ColumnAliasProxyHandler(new Proxy(tableObj, this)));
        }
        return value;
      }
    };
    exports.TableAliasProxyHandler = TableAliasProxyHandler;
  }
});

// node_modules/drizzle-orm/subquery.js
var require_subquery = __commonJS({
  "node_modules/drizzle-orm/subquery.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SelectionProxyHandler = exports.WithSubquery = exports.Subquery = exports.SubqueryConfig = void 0;
    var alias_1 = require_alias();
    var column_1 = require_column();
    var sql_1 = require_sql();
    var view_1 = require_view();
    exports.SubqueryConfig = Symbol("SubqueryConfig");
    var Subquery = class {
      constructor(sql, selection, alias, isWith = false) {
        this[exports.SubqueryConfig] = {
          sql,
          selection,
          alias,
          isWith
        };
      }
    };
    exports.Subquery = Subquery;
    var WithSubquery = class extends Subquery {
    };
    exports.WithSubquery = WithSubquery;
    var SelectionProxyHandler = class {
      constructor(config) {
        this.config = Object.assign({}, config);
      }
      get(subquery, prop, receiver) {
        if (typeof prop === "symbol") {
          return subquery[prop];
        }
        const columns = subquery instanceof Subquery ? subquery[exports.SubqueryConfig].selection : subquery instanceof view_1.View ? subquery[view_1.ViewBaseConfig].selectedFields : subquery;
        const value = columns[prop];
        if (value instanceof sql_1.SQL.Aliased) {
          if (this.config.sqlAliasedBehavior === "sql" && !value.isSelectionField) {
            return value.sql;
          }
          const newValue = value.clone();
          newValue.isSelectionField = true;
          return newValue;
        }
        if (value instanceof sql_1.SQL) {
          if (this.config.sqlBehavior === "sql") {
            return value;
          }
          throw new Error(`You tried to reference "${prop}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`);
        }
        if (value instanceof column_1.Column) {
          if (this.config.alias) {
            return new Proxy(value, new alias_1.ColumnAliasProxyHandler(new Proxy(value.table, new alias_1.TableAliasProxyHandler(this.config.alias))));
          }
          return value;
        }
        if (typeof value !== "object" || value === null) {
          return value;
        }
        return new Proxy(value, new SelectionProxyHandler(this.config));
      }
    };
    exports.SelectionProxyHandler = SelectionProxyHandler;
  }
});

// node_modules/drizzle-orm/sql/index.js
var require_sql = __commonJS({
  "node_modules/drizzle-orm/sql/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fillPlaceholders = exports.placeholder = exports.Placeholder = exports.sql = exports.param = exports.Param = exports.noopMapper = exports.noopEncoder = exports.noopDecoder = exports.isDriverValueEncoder = exports.name = exports.Name = exports.SQL = exports.StringChunk = exports.isSQLWrapper = exports.FakePrimitiveParam = void 0;
    var subquery_1 = require_subquery();
    var view_1 = require_view();
    var column_1 = require_column();
    var table_1 = require_table();
    var FakePrimitiveParam = class {
    };
    exports.FakePrimitiveParam = FakePrimitiveParam;
    function isSQLWrapper(value) {
      return typeof value === "object" && value !== null && "getSQL" in value && typeof value.getSQL === "function";
    }
    exports.isSQLWrapper = isSQLWrapper;
    function mergeQueries(queries) {
      const result = { sql: "", params: [] };
      queries.forEach((query) => {
        var _a;
        result.sql += query.sql;
        result.params.push(...query.params);
        if (result.typings && ((_a = query.typings) === null || _a === void 0 ? void 0 : _a.length)) {
          result.typings.push(...query.typings);
        }
      });
      return result;
    }
    var StringChunk = class {
      constructor(value) {
        this.value = Array.isArray(value) ? value : [value];
      }
    };
    exports.StringChunk = StringChunk;
    var SQL = class {
      constructor(queryChunks) {
        this.queryChunks = queryChunks;
        this.decoder = exports.noopDecoder;
        this.shouldInlineParams = false;
      }
      append(query) {
        this.queryChunks.push(...query.queryChunks);
        return this;
      }
      toQuery(config) {
        return this.buildQueryFromSourceParams(this.queryChunks, config);
      }
      buildQueryFromSourceParams(chunks, _config) {
        const config = Object.assign({}, _config, {
          inlineParams: _config.inlineParams || this.shouldInlineParams,
          paramStartIndex: _config.paramStartIndex || { value: 0 }
        });
        const { escapeName, escapeParam, escapeString, prepareTyping, inlineParams, paramStartIndex } = config;
        return mergeQueries(chunks.map((chunk) => {
          if (chunk instanceof StringChunk) {
            return { sql: chunk.value.join(""), params: [] };
          }
          if (chunk instanceof Name) {
            return { sql: escapeName(chunk.value), params: [] };
          }
          if (typeof chunk === "undefined") {
            return { sql: "", params: [] };
          }
          if (Array.isArray(chunk)) {
            const result = [new StringChunk("(")];
            chunk.forEach((p, i) => {
              result.push(p);
              if (i < chunk.length - 1) {
                result.push(new StringChunk(", "));
              }
            });
            result.push(new StringChunk(")"));
            return this.buildQueryFromSourceParams(result, config);
          }
          if (chunk instanceof SQL) {
            return this.buildQueryFromSourceParams(chunk.queryChunks, Object.assign(Object.assign({}, config), { inlineParams: inlineParams || chunk.shouldInlineParams }));
          }
          if (chunk instanceof table_1.Table) {
            const schemaName = chunk[table_1.Table.Symbol.Schema];
            const tableName = chunk[table_1.Table.Symbol.Name];
            return {
              sql: typeof schemaName !== "undefined" ? escapeName(schemaName) + "." + escapeName(tableName) : escapeName(tableName),
              params: []
            };
          }
          if (chunk instanceof column_1.Column) {
            return { sql: escapeName(chunk.table[table_1.Table.Symbol.Name]) + "." + escapeName(chunk.name), params: [] };
          }
          if (chunk instanceof view_1.View) {
            const schemaName = chunk[view_1.ViewBaseConfig].schema;
            const viewName = chunk[view_1.ViewBaseConfig].name;
            return {
              sql: typeof schemaName !== "undefined" ? escapeName(schemaName) + "." + escapeName(viewName) : escapeName(viewName),
              params: []
            };
          }
          if (chunk instanceof Param) {
            const mappedValue = chunk.value === null ? null : chunk.encoder.mapToDriverValue(chunk.value);
            if (mappedValue instanceof SQL) {
              return this.buildQueryFromSourceParams([mappedValue], config);
            }
            if (inlineParams) {
              return { sql: this.mapInlineParam(mappedValue, config), params: [] };
            }
            let typings;
            if (typeof prepareTyping !== "undefined") {
              typings = [prepareTyping(chunk.encoder)];
            }
            return { sql: escapeParam(paramStartIndex.value++, mappedValue), params: [mappedValue], typings };
          }
          if (chunk instanceof SQL.Aliased && typeof chunk.fieldAlias !== "undefined") {
            return { sql: escapeName(chunk.fieldAlias), params: [] };
          }
          if (chunk instanceof subquery_1.Subquery) {
            if (chunk[subquery_1.SubqueryConfig].isWith) {
              return { sql: escapeName(chunk[subquery_1.SubqueryConfig].alias), params: [] };
            }
            return this.buildQueryFromSourceParams([
              new StringChunk("("),
              chunk[subquery_1.SubqueryConfig].sql,
              new StringChunk(") "),
              new Name(chunk[subquery_1.SubqueryConfig].alias)
            ], config);
          }
          if (isSQLWrapper(chunk)) {
            return this.buildQueryFromSourceParams([
              new StringChunk("("),
              chunk.getSQL(),
              new StringChunk(")")
            ], config);
          }
          if (inlineParams) {
            return { sql: this.mapInlineParam(chunk, config), params: [] };
          }
          return { sql: escapeParam(paramStartIndex.value++, chunk), params: [chunk] };
        }));
      }
      mapInlineParam(chunk, { escapeString }) {
        if (chunk === null) {
          return "null";
        }
        if (typeof chunk === "number" || typeof chunk === "boolean") {
          return chunk.toString();
        }
        if (typeof chunk === "string") {
          return escapeString(chunk);
        }
        if (typeof chunk === "object") {
          const mappedValueAsString = chunk.toString();
          if (mappedValueAsString === "[object Object]") {
            return escapeString(JSON.stringify(chunk));
          }
          return escapeString(mappedValueAsString);
        }
        throw new Error("Unexpected param value: " + chunk);
      }
      getSQL() {
        return this;
      }
      as(alias) {
        if (typeof alias === "undefined") {
          return this;
        }
        return new SQL.Aliased(this, alias);
      }
      mapWith(decoder) {
        if (typeof decoder === "function") {
          this.decoder = { mapFromDriverValue: decoder };
        } else {
          this.decoder = decoder;
        }
        return this;
      }
      inlineParams() {
        this.shouldInlineParams = true;
        return this;
      }
    };
    exports.SQL = SQL;
    var Name = class {
      constructor(value) {
        this.value = value;
      }
    };
    exports.Name = Name;
    function name(value) {
      return new Name(value);
    }
    exports.name = name;
    function isDriverValueEncoder(value) {
      return typeof value === "object" && value !== null && "mapToDriverValue" in value && typeof value.mapToDriverValue === "function";
    }
    exports.isDriverValueEncoder = isDriverValueEncoder;
    exports.noopDecoder = {
      mapFromDriverValue: (value) => value
    };
    exports.noopEncoder = {
      mapToDriverValue: (value) => value
    };
    exports.noopMapper = Object.assign(Object.assign({}, exports.noopDecoder), exports.noopEncoder);
    var Param = class {
      constructor(value, encoder = exports.noopEncoder) {
        this.value = value;
        this.encoder = encoder;
      }
    };
    exports.Param = Param;
    function param(value, encoder) {
      return new Param(value, encoder);
    }
    exports.param = param;
    function sql(strings, ...params) {
      const queryChunks = [];
      if (params.length > 0 || strings.length > 0 && strings[0] !== "") {
        queryChunks.push(new StringChunk(strings[0]));
      }
      params.forEach((param2, paramIndex) => {
        queryChunks.push(param2);
        queryChunks.push(new StringChunk(strings[paramIndex + 1]));
      });
      return new SQL(queryChunks);
    }
    exports.sql = sql;
    (function(sql2) {
      function empty() {
        return new SQL([]);
      }
      sql2.empty = empty;
      function fromList(list) {
        return new SQL(list);
      }
      sql2.fromList = fromList;
      function raw(str) {
        return new SQL([new StringChunk(str)]);
      }
      sql2.raw = raw;
    })(sql = exports.sql || (exports.sql = {}));
    (function(SQL2) {
      class Aliased {
        constructor(sql2, fieldAlias) {
          this.sql = sql2;
          this.fieldAlias = fieldAlias;
          this.isSelectionField = false;
        }
        getSQL() {
          return this.sql;
        }
        clone() {
          return new Aliased(this.sql, this.fieldAlias);
        }
      }
      SQL2.Aliased = Aliased;
    })(SQL = exports.SQL || (exports.SQL = {}));
    var Placeholder = class {
      constructor(name2) {
        this.name = name2;
      }
    };
    exports.Placeholder = Placeholder;
    function placeholder(name2) {
      return new Placeholder(name2);
    }
    exports.placeholder = placeholder;
    function fillPlaceholders(params, values) {
      return params.map((p) => {
        if (p instanceof Placeholder) {
          if (!(p.name in values)) {
            throw new Error(`No value for placeholder "${p.name}" was provided`);
          }
          return values[p.name];
        }
        return p;
      });
    }
    exports.fillPlaceholders = fillPlaceholders;
  }
});

// node_modules/drizzle-orm/sql/expressions/conditions.js
var require_conditions = __commonJS({
  "node_modules/drizzle-orm/sql/expressions/conditions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.notIlike = exports.ilike = exports.notLike = exports.like = exports.notBetween = exports.between = exports.notExists = exports.exists = exports.isNotNull = exports.isNull = exports.notInArray = exports.inArray = exports.lte = exports.lt = exports.gte = exports.gt = exports.not = exports.or = exports.and = exports.ne = exports.eq = exports.bindIfParam = void 0;
    var column_1 = require_column();
    var table_1 = require_table();
    var view_1 = require_view();
    var index_1 = require_sql();
    function bindIfParam(value, column) {
      if ((0, index_1.isDriverValueEncoder)(column) && !(0, index_1.isSQLWrapper)(value) && !(value instanceof index_1.Param) && !(value instanceof index_1.Placeholder) && !(value instanceof column_1.Column) && !(value instanceof table_1.Table) && !(value instanceof view_1.View)) {
        return new index_1.Param(value, column);
      }
      return value;
    }
    exports.bindIfParam = bindIfParam;
    function eq(left, right) {
      return (0, index_1.sql)`${left} = ${bindIfParam(right, left)}`;
    }
    exports.eq = eq;
    function ne(left, right) {
      return (0, index_1.sql)`${left} <> ${bindIfParam(right, left)}`;
    }
    exports.ne = ne;
    function and(...conditions) {
      if (conditions.length === 0) {
        return void 0;
      }
      const chunks = [index_1.sql.raw("(")];
      conditions.filter((c) => typeof c !== "undefined").forEach((condition, index) => {
        if (index === 0) {
          chunks.push(condition);
        } else {
          chunks.push((0, index_1.sql)` and `, condition);
        }
      });
      chunks.push((0, index_1.sql)`)`);
      return index_1.sql.fromList(chunks);
    }
    exports.and = and;
    function or(...conditions) {
      if (conditions.length === 0) {
        return void 0;
      }
      const chunks = [index_1.sql.raw("(")];
      conditions.filter((c) => typeof c !== "undefined").forEach((condition, index) => {
        if (index === 0) {
          chunks.push(condition);
        } else {
          chunks.push((0, index_1.sql)` or `, condition);
        }
      });
      chunks.push((0, index_1.sql)`)`);
      return index_1.sql.fromList(chunks);
    }
    exports.or = or;
    function not(condition) {
      return (0, index_1.sql)`not ${condition}`;
    }
    exports.not = not;
    function gt(left, right) {
      return (0, index_1.sql)`${left} > ${bindIfParam(right, left)}`;
    }
    exports.gt = gt;
    function gte(left, right) {
      return (0, index_1.sql)`${left} >= ${bindIfParam(right, left)}`;
    }
    exports.gte = gte;
    function lt(left, right) {
      return (0, index_1.sql)`${left} < ${bindIfParam(right, left)}`;
    }
    exports.lt = lt;
    function lte(left, right) {
      return (0, index_1.sql)`${left} <= ${bindIfParam(right, left)}`;
    }
    exports.lte = lte;
    function inArray(column, values) {
      if (Array.isArray(values)) {
        if (values.length === 0) {
          throw new Error("inArray requires at least one value");
        }
        return (0, index_1.sql)`${column} in ${values.map((v) => bindIfParam(v, column))}`;
      }
      return (0, index_1.sql)`${column} in ${bindIfParam(values, column)}`;
    }
    exports.inArray = inArray;
    function notInArray(column, values) {
      if ((0, index_1.isSQLWrapper)(values)) {
        return (0, index_1.sql)`${column} not in ${values}`;
      }
      if (Array.isArray(values)) {
        if (values.length === 0) {
          throw new Error("inArray requires at least one value");
        }
        return (0, index_1.sql)`${column} not in ${values.map((v) => bindIfParam(v, column))}`;
      }
      return (0, index_1.sql)`${column} not in ${bindIfParam(values, column)}`;
    }
    exports.notInArray = notInArray;
    function isNull(column) {
      return (0, index_1.sql)`${column} is null`;
    }
    exports.isNull = isNull;
    function isNotNull(column) {
      return (0, index_1.sql)`${column} is not null`;
    }
    exports.isNotNull = isNotNull;
    function exists(subquery) {
      return (0, index_1.sql)`exists (${subquery})`;
    }
    exports.exists = exists;
    function notExists(subquery) {
      return (0, index_1.sql)`exists (${subquery})`;
    }
    exports.notExists = notExists;
    function between(column, min, max) {
      return (0, index_1.sql)`${column} between ${bindIfParam(min, column)} and ${bindIfParam(max, column)}`;
    }
    exports.between = between;
    function notBetween(column, min, max) {
      return (0, index_1.sql)`${column} not between ${bindIfParam(min, column)} and ${bindIfParam(max, column)}`;
    }
    exports.notBetween = notBetween;
    function like(column, value) {
      return (0, index_1.sql)`${column} like ${value}`;
    }
    exports.like = like;
    function notLike(column, value) {
      return (0, index_1.sql)`${column} not like ${value}`;
    }
    exports.notLike = notLike;
    function ilike(column, value) {
      return (0, index_1.sql)`${column} ilike ${value}`;
    }
    exports.ilike = ilike;
    function notIlike(column, value) {
      return (0, index_1.sql)`${column} not ilike ${value}`;
    }
    exports.notIlike = notIlike;
  }
});

// node_modules/drizzle-orm/sql/expressions/select.js
var require_select = __commonJS({
  "node_modules/drizzle-orm/sql/expressions/select.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.desc = exports.asc = void 0;
    var __1 = require_sql();
    function asc(column) {
      return (0, __1.sql)`${column} asc`;
    }
    exports.asc = asc;
    function desc(column) {
      return (0, __1.sql)`${column} desc`;
    }
    exports.desc = desc;
  }
});

// node_modules/drizzle-orm/sql/expressions/index.js
var require_expressions = __commonJS({
  "node_modules/drizzle-orm/sql/expressions/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_conditions(), exports);
    __exportStar(require_select(), exports);
  }
});

// node_modules/drizzle-orm/expressions.js
var require_expressions2 = __commonJS({
  "node_modules/drizzle-orm/expressions.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_expressions(), exports);
  }
});

export {
  require_expressions2 as require_expressions
};
//# sourceMappingURL=/build/_shared/chunk-AJKCBVIW.js.map
