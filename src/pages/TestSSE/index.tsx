import React, { useEffect } from 'react'

const TestSSE = () => {
    useEffect(() => {
        const evtSource = new EventSource('http://localhost:4000/api/sse/getData')
        const container = document.getElementById('container')

        // 监听默认的事件，没有指定 event
        evtSource.onmessage = function (event) {
            const p = document.createElement('p')
            p.innerHTML = event.data
            container.appendChild(p)
        }

        // 监听自定义事件，设置为红色标
        evtSource.addEventListener('my-event', (event) => {
            const p = document.createElement('p')
            p.innerHTML = event.data
            p.style.color = 'red'
            container.appendChild(p)
        })

        setTimeout(() => {
            // 设置 10s 后客户端关闭
            evtSource.close()
        }, 10 * 1000)

        // 监听 error 事件
        evtSource.onerror = (error) => {
            console.error('EventSource error:', error);
            evtSource.close(); // 关闭连接
        };

        // 监听链接打开
        evtSource.onopen = function(event) {  
            console.log('SSE connection opened.');  
        };

    }, [])
    return (
        <div>
            <div>test: sse</div>
            <div id="container" />
        </div>
    )
}

export default TestSSE
