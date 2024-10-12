import React, { useEffect, useRef } from 'react'

const TestWebSocket = () => {
    const socket = useRef<any>()
    useEffect(() => {
        // 创建 WebSocket 连接，注意是 ws 协议
        socket.current = new WebSocket('ws://localhost:8080/custom-path')

        // 监听 open 事件
        socket.current.addEventListener('open', function (event) {
            console.log('Connected to the server')
        })

        // 监听 message 事件
        socket.current.addEventListener('message', function (event) {
            const messagesList = document.getElementById('messagesList')
            const messageItem = document.createElement('li')
            console.log(event.data, 'da...')
            messageItem.textContent = event.data
            // 将收到的消息 append 到页面中
            messagesList.appendChild(messageItem)
        })
    }, [])

    function sendMessage() {
        const messageInput: any = document.getElementById('messageInput')
        const message = messageInput.value
        // 将表单发送至服务器
        socket.current.send(message)
        // 重置
        messageInput.value = ''
    }

    return (
        <div>
            <h1>Chat Room</h1>
            <input type="text" id="messageInput" placeholder="Type your message here..." />
            <button onClick={sendMessage}>Send</button>
            <ul id="messagesList"></ul>
        </div>
    )
}

export default TestWebSocket
