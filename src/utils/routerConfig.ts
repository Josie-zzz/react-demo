import { TestState, TestWorkLoop, TestHook, TestCanvas, TestSSE, TestWebSocket } from '@/router'
import React from 'react'

interface IPathOptions {
    path: string
    name: string
    component: React.LazyExoticComponent<any>
    exact?: boolean
}

const pathOptions: IPathOptions[] = [
    {
        path: '/testState',
        name: 'testState',
        component: TestState,
    },
    {
        path: '/testWorkLoop',
        name: 'testWorkLoop',
        component: TestWorkLoop,
    },
    {
        path: '/testHook',
        name: 'testHook',
        component: TestHook,
    },
    {
        path: '/TestCanvas',
        name: 'TestCanvas',
        component: TestCanvas,
    },
    {
        path: '/TestSSE',
        name: 'TestSSE',
        component: TestSSE,
    },
    {
        path: '/TestWebSocket',
        name: 'TestWebSocket',
        component: TestWebSocket,
    },
]

export {
    pathOptions
}