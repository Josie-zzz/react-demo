import React, { useEffect, useId, useRef, useState, useTransition } from 'react'
import { flushSync } from 'react-dom'
// import crowd1 from '../../assets/crowd1.png'
// import legend from '../../assets/legend-bar.svg'
// console.log(crowd1)
// console.log(legend, typeof legend)
// 调试一些新特性，看效果
const TestState = () => {
    const [count, setCount] = useState(1)
    const [age, setAge] = useState(1)
    const [isPending, startTransition] = useTransition()
    const id = useId()
    const id2 = useId()

    console.log(id, id2, 'id....')

    useEffect(() => {
        import(/* webpackChunkName: 'lodash' */ /* webpackPreload: true */ 'lodash').then((module) => {
            const {add} = module.default
            console.log(add(1, 20))
        })
    })

    const handleClick = () => {
        // 一个优先级调度的例子
        setCount(preVal => {
            console.log(1)
            return ++preVal
        })
        startTransition(() => {
            setCount(preVal => {
                console.log(2)
                return ++preVal
            })
            setCount(preVal => {
                console.log(3)
                return ++preVal
            })
        })
        setCount(preVal => {
            console.log(4)
            return ++preVal
        })
        setCount(preVal => {
            console.log(5)
            return ++preVal
        })
    }

    const handleClick2 = () => {
        setAge(preVal => {
            console.log(preVal, 'one')
            return 2
        })
        flushSync(() => {
            setAge(preVal => {
                console.log(preVal, 'one')
                return 3
            })
        })
        setAge(preVal => {
            console.log(preVal, 'one')
            return 4
        })
        flushSync(() => {
            setAge(preVal => {
                console.log(preVal, 'three')
                return 5
            })
        })
    }

    console.log('render....')

    return (
        <div className="box">
            <div>cont: {count}</div>
            <div>age: {age}</div>
            <div onClick={handleClick}>测试优先级</div>
            <div onClick={handleClick2}>同步与异步</div>
        </div>
    )
}

export default TestState