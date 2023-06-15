import { FC, useEffect, useRef } from 'react'
import { fabric } from 'fabric'

const App: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 400,
      height: 400,
      backgroundColor: '#feee',
      // backgroundImage:
      // 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27d1b4e5f8824198b6d51a2b1c2d0d75~tplv-k3u1fbpfcp-zoom-crop-mark:400:400:400:400.awebp',
    })

    canvas.setBackgroundImage(
      'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27d1b4e5f8824198b6d51a2b1c2d0d75~tplv-k3u1fbpfcp-zoom-crop-mark:400:400:400:400.awebp',
      canvas.renderAll.bind(canvas),
      {
        angle: 15,
        scaleX: 1,
        scaleY: 1,
      }
    )
    const circle = new fabric.Circle({
      radius: 30,
      top: 0,
      left: 0,
      fill: 'pink',
    })

    canvas.add(circle)

    return () => {
      canvas.dispose()
    }
  }, [])
  return (
    <>
      <canvas
        ref={canvasRef}
        id="canvas"
        className="b"
        width={500}
        height={500}
      ></canvas>
    </>
  )
}
export default App
