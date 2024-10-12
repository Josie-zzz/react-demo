import React from 'react'
import WaveSurfer from 'wavesurfer.js'
import M3U8 from '@/assets/test.m3u8'


// 调试源码
class TestWorkLoop extends React.Component {
    componentDidMount() {
        console.log(`App Mount`)
        console.log(`App 组件对应的fiber节点: `, (this as any)._reactInternals)
    }

    render() {
        return (
            <div className="app">
                <header>header</header>
                <Content />
            </div>
        )
    }
}

class Content extends React.Component {
    ref = React.createRef<any>()

    componentDidMount() {
        console.log(`Content Mount`)
        console.log(`Content 组件对应的fiber节点: `, (this as any)._reactInternals)
        const objectURL = URL.createObjectURL(new Blob([M3U8], { type: 'application/vnd.apple.mpegURL' }));

        const wavesurfer = WaveSurfer.create({
            container: this.ref.current,
            waveColor: 'rgb(200, 0, 200)',
            progressColor: 'rgb(100, 0, 100)',
            url: objectURL,
          })
          
          wavesurfer.on('click', () => {
            wavesurfer.play()
          })
    }
    render() {
        return (
            <div ref={this.ref}>hhhh99</div>
        )
    }
}

export default TestWorkLoop
