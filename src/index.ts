import type { Linter } from 'eslint'
import type { LinterPlugin } from '@/types.ts'
import demo from '@/rules/demo.ts'
import { version } from '../package.json' with { type: 'json' }

const plugin = {
    meta: {
        name: 'lonewolfyx',
        version,
    },
    // @keep-sorted
    rules: {
        demo,
    },
    configs: {
        recommended: [],
    },
} satisfies LinterPlugin

Object.assign(plugin.configs, {
    recommended: [{
        files: ['**/*.md'],
        plugins: {
            // 看场景加载对应插件依赖,
            lonewolfyx: plugin,
        },
        // language: '对应插件',
        rules: {
            'lonewolfyx/demo': 'error',
        },
    }],
})

type RuleDefinitions = typeof plugin['rules']
type RuleOptionsTuple<T> = T extends { defaultOptions: infer TOptions extends readonly unknown[] }
    ? [...TOptions]
    : []

export type RuleOptions = {
    [K in keyof RuleDefinitions]: RuleOptionsTuple<RuleDefinitions[K]>
}

export type Rules = {
    [K in keyof RuleOptions]: Linter.RuleEntry<RuleOptions[K]>
}
