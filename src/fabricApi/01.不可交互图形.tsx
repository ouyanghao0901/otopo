import { FC, useEffect, useRef } from 'react'
import { fabric } from 'fabric'

const App: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    const canvas = new fabric.StaticCanvas(canvasRef.current)
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      width: 100,
      height: 100,
      fill: '#ff0000',
    })
    canvas.add(rect)
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
