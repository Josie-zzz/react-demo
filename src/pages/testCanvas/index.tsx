import React, { useEffect, useState } from 'react'
// import { objectURL } from '@/pages/AudioWave/mock'
import Hls from 'hls.js'

const TestCanvas = () => {
    useEffect(() => {
        var cn;
      //= document.getElementById('cw');
      var c;
      var u = 10;
      const m = {
        x: innerWidth / 2,
        y: innerHeight / 2,
      };
      window.onmousemove = function (e) {
        m.x = e.clientX;
        m.y = e.clientY;
      };
      function gc() {
        var s = "0123456789ABCDEF";
        var c = "#";
        for (var i = 0; i < 6; i++) {
          c += s[Math.ceil(Math.random() * 15)];
        }
        return c;
      }
      var a = [];
      function myfunction() {
        cn = document.getElementsByTagName('canvas')[0]
        c = cn.getContext("2d");

        for (var i = 0; i < 10; i++) {
          var r = 30;
          var x = Math.random() * (innerWidth - 2 * r) + r;
          var y = Math.random() * (innerHeight - 2 * r) + r;
          var t = new ob(
            innerWidth / 2,
            innerHeight / 2,
            5,
            "red",
            Math.random() * 200 + 20,
            2,
          );
          a.push(t);
        }
        //cn.style.backgroundColor = "#700bc8";

        c.lineWidth = "2";
        c.globalAlpha = 0.5;
        resize();
        anim();
      };
      window.onresize = function () {
        resize();
      };
      function resize() {
        cn.height = innerHeight;
        cn.width = innerWidth;
        for (var i = 0; i < 101; i++) {
          var r = 30;
          var x = Math.random() * (innerWidth - 2 * r) + r;
          var y = Math.random() * (innerHeight - 2 * r) + r;
          a[i] = new ob(
            innerWidth / 2,
            innerHeight / 2,
            4,
            gc(),
            Math.random() * 200 + 20,
            0.02,
          );
        }
        //  a[0] = new ob(innerWidth / 2, innerHeight / 2, 40, "red", 0.05, 0.05);
        //a[0].dr();
      }
      function ob(x, y, r, cc, o, s) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.cc = cc;
        this.theta = Math.random() * Math.PI * 2;
        this.s = s;
        this.o = o;
        this.t = Math.random() * 150;

        this.o = o;
        this.dr = function () {
          const ls = {
            x: this.x,
            y: this.y,
          };
          this.theta += this.s;
          this.x = m.x + Math.cos(this.theta) * this.t;
          this.y = m.y + Math.sin(this.theta) * this.t;
          c.beginPath();
          c.lineWidth = this.r;
          c.strokeStyle = this.cc;
          c.moveTo(ls.x, ls.y);
          c.lineTo(this.x, this.y);
          c.stroke();
          c.closePath();
        };
      }
      function anim() {
        requestAnimationFrame(anim);
        c.fillStyle = "rgba(0,0,0,0.05)";
        c.fillRect(0, 0, cn.width, cn.height);
        a.forEach(function (e, i) {
          e.dr();
        });
      }

      myfunction()
    }, [])
    // useEffect(() => {
    //     const canvas = document.getElementsByTagName('canvas')[0]
    //     const ctx = canvas.getContext('2d')
    //     console.log(ctx === canvas.getContext('2d'))
    //     // 返回当前显示设备的物理像素分辨率与CSS 像素分辨率之比
    //     // 如果设备像素比大于1，说明设备具有高DPI屏幕，代码将Canvas元素的实际渲染尺寸调整为CSS尺寸的相应倍数，然后通过ctx.scale()方法将绘图上下文的坐标系缩放，以确保绘制的内容在高分辨率屏幕上保持清晰。
    //     // 比如我这里看到的值是 2
    //     var ratio = window.devicePixelRatio || 1;
    //     ctx.scale(ratio, ratio);
    //     ctx.fillStyle = 'green'
    //     ctx.fillRect(10, 10, 100, 100)
    //     ctx.clearRect(50, 50, 10, 10)
    //     ctx.lineCap = 'round'; // 线条端点样式
    //     ctx.lineJoin = 'round'; // 线条连接样式

    //     ctx.beginPath()
    //     ctx.lineCap = 'butt'
    //     ctx.lineJoin = 'bevel'
    //     ctx.moveTo(200, 50)
    //     ctx.lineTo(150, 70)
    //     ctx.lineTo(250, 100)
    //     // ctx.fill()
    //     ctx.stroke()

    //     ctx.font = "28px Times New Roman";
    //     ctx.fillStyle = "Black";
    //     ctx.strokeStyle = 'Black'
    //     ctx.strokeText("Sample String", 50, 30);
    //     ctx.fillText("Sample String", 150, 30);

    //     ctx.save()
    //     ctx.translate(100, 50)
    //     ctx.rotate((Math.PI / 180) * 25)
    //     ctx.fillRect(0, 0, 50, 50)
    //     ctx.restore()
    //     ctx.fillStyle = 'blue'
    //     ctx.fillRect(0, 0, 50, 50)
    // }, [])
    return (
        <div>
            <canvas id="myCanvas" width={800} height={400} />
            {/* <TestVideo />
            <TestFile /> */}
        </div>
    )
}

const TestVideo = () => {
    useEffect(() => {
        const video: HTMLVideoElement = document.getElementById('test') as HTMLVideoElement
        const audio: HTMLAudioElement = document.getElementById('test2') as HTMLAudioElement
        console.log(video.canPlayType('application/vnd.apple.mpegurl'), 'canPlayType-application/vnd.apple.mpegurl')
        console.log(video.canPlayType('video/mp4'), 'canPlayType-video/mp4')

        console.log(audio.canPlayType('application/vnd.apple.mpegurl'), 'audio-canPlayType-application/vnd.apple.mpegurl')
        console.log(audio.canPlayType('video/mp4'), 'audio-canPlayType-video/mp4')
    }, [])

    return (
        <>
            <video id="test">hhhh</video>
            <audio id="test2">hhhh</audio>
        </>
    )
}

const TestFile = () => {
    useEffect(() => {
        const oVideo = document.getElementById('test10') as HTMLMediaElement
        if (Hls.isSupported()) {
            const hls = new Hls()
            // hls.loadSource(objectURL)
            hls.attachMedia(oVideo)
        }
    }, [])

    return <video preload="auto" controls id={'test10'} />
}

export default TestCanvas
