import React from "react";

import( /* webpackPreload: true */ '@/pages/TestState');
const TestState = React.lazy(() => import('@/pages/TestState'))
const TestWorkLoop = React.lazy(() => import('@/pages/TestWorkLoop'))
const TestHook = React.lazy(() => import('@/pages/TestHook'))
const TestCanvas = React.lazy(() => import('@/pages/testCanvas'))
const TestSSE = React.lazy(() => import('@/pages/TestSSE'))
const TestWebSocket = React.lazy(() => import('@/pages/testWebSocket'))

export {
    TestState,
    TestWorkLoop,
    TestHook,
    TestCanvas,
    TestSSE,
    TestWebSocket,
}