
module.exports = {
  name: "EasyGameFramework",
  mode: "modules",
  target:"ES6",
  out: `doc/`,
  ignoreCompilerErrors: true,
  preserveConstEnums: true,
  theme: "default",
  stripInternal: true,
  tsconfig:"../tsconfig.test.json",
  excludeProtected: true,
  "external-modulemap": "packages/([\\w\\-_]+)/",
  exclude: [
    "**/__tests__/*",
    "**/(dist|__tests__|examples)/**/*"
    // "**/+(dev-packages|examples|typings)/**/*",
    // "**/*test.ts",
    // "packages/adapter-miniprogram/**/*",
    // "packages/component-miniprogram/**/*",
    // "packages/**/src/global.d.ts",
    // "packages/**/shaderLib/global.d.ts",
    // "scripts/**/*"
  ],
  plugin: ["@strictsoftware/typedoc-plugin-monorepo", 'typedoc-plugin-remove-references']
};