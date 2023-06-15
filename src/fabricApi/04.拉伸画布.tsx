import { FC, useEffect, useRef } from 'react'
import { fabric } from 'fabric'

const App: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current)

    fabric.Image.fromURL(
      'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27d1b4e5f8824198b6d51a2b1c2d0d75~tplv-k3u1fbpfcp-zoom-crop-mark:400:400:400:400.awebp',
      img => {
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
          scaleX: (canvas.width || 0) / (img.width || 0),
          scaleY: (canvas.height || 0) / (img.height || 0),
        })
      }
    )
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
