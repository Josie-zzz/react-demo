import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";

let sum = 0
let count = 100
const TestHook = () => {
    const [status, setStatus] = useState(false)
    const [env, setEnv] = useState(false)

    let num
    useEffect(() => {
        num = ++count
        console.log('effect', num)
        return () => {
            console.log(num, 'destory')
        }
    }, [status])

    useEffect(() => {
        console.log(env, 'env')
    }, [env])


    // useEffect(() => {
    //     console.log('useEffect')
    //     return () => {
    //         console.log('useEffect - destory')
    //     }
    // }, [num])

    return (
        <div>
            <div onClick={() => setStatus(!status)}>hhhh</div>
            <div onClick={() => setEnv(!env)}>houhou</div>
        </div>
    )
}

const Update = (props) => {
    const { status } = props
    const ref = useRef(false)
    useEffect(() => {
        console.log('mount')
    }, [])
    useEffect(() => {
        if(!ref.current) {
            ref.current = true
            return
        }
        console.log('update')
    }, [status])

    return (
        <div>
            ndfkjsnfk
        </div>
    )
}

const Btn = () => {
    return (
        <div>sjskjs</div>
    )
}
interface IP {
    children: React.ReactNode
}

const Step: React.FC<IP> = (props) => {
    // const store = useSyncExternalStore((callback) => {

    // })
    
    // const bbb = React.cloneElement(props.children, {
    //     get () {
    //         // props.children.props
    //     }
    // })
    return (
        <div>
            {
                props.children
            }
        </div>
    )
}

export default TestHook