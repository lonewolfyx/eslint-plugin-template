import { createEslintPlugin } from '@/utils.ts'

const Rule_Name = 'demo'

export default createEslintPlugin({
    name: Rule_Name,
    meta: {
        type: 'layout',
        fixable: 'whitespace',
        docs: {
            description: 'enforce consistent spacing around markdown links',
        },
        schema: [],
        messages: {},
    },
    create(context) {
        const ctx = context.sourceCode
        return {
            // 对应 AST type :https://astexplorer.net/
            heading(node) {
                console.log(ctx)
                console.log(node)
                // context.report({
                //     node,
                //     fix: fixer => fixer.replaceTextRange([1, 2], ' '),
                // })
            },
        }
    },
})
