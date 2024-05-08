/** @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').PluginOptions} */
module.exports = {
  entryPoints: ['./packages/oh-my-live2d/src/index.ts'],
  tsconfig: './packages/oh-my-live2d/tsconfig.json',
  out: './docs/src/api',
  plugin: ['typedoc-plugin-markdown', './docs/src/.vitepress/theme/typedoc-theme.mjs'],
  theme: 'themeExpand',
  hideBreadcrumbs: true,
  hidePageHeader: true,
  hidePageTitle: false,
  disableSources: true,
  name: 'oh-my-live2d',
  typeDeclarationFormat: 'list',
  parametersFormat: 'table',
  // expandObjects: true,
  expandParameters: true,
  outputFileStrategy: 'members',
  // flattenOutputFiles: true,
  textContentMappings: {
    'label.name': '',
    'label.returns': '返回值类型:',
    'label.source': '查看源码',
    'label.extends': '继承',
    'label.implements': '实现',
    'label.type': '类型',
    'label.description': '描述',
    'label.typeDeclaration': '类型',
    'kind.typeAlias.plural': '类型别名',
    'kind.typeAlias.singular': '类型别名',
    'kind.class.plural': '类',
    'kind.class.singular': '类',
    'kind.interface.plural': '接口',
    'kind.interface.singular': '接口',
    'kind.module.plural': '模块',
    'kind.typeParameter.plural': '类型参数',
    'kind.typeParameter.singular': '类型参数',
    'kind.function.plural': '函数',
    'kind.function.singular': '函数',
    'kind.parameter.singular': '参数',
    'kind.parameter.plural': '参数:',
    'label.defaultValue': '默认值'
  }
};
