import { FC, useEffect, useRef } from 'react'
import { fabric } from 'fabric'

const App: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current)

    const path = new fabric.Path('M 10 10 L 100 10 L 150 100')

    path.set({
      top: 0,
      left: 0,
    })

    canvas.add(path)

    const text = new fabric.Text('你好', {
      top: 160,
      strokeWidth: 2,
      stroke: '#ff0000',
      strokeDashArray: [10, 6],
      fontSize: 120,
      fill: 'orange', // 填充色：橙色
      overline: true, // 上划线
      underline: true,
      linethrough: true,
    })
    canvas.add(text)

    const itext = new fabric.IText('434', {})
    canvas.add(itext)

    const textbox = new fabric.Textbox('textbox', {
      left: 100,
      top: 100,
    })
    canvas.add(textbox)
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
