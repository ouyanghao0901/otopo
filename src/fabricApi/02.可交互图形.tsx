import { FC, useEffect, useRef } from 'react'
import { fabric } from 'fabric'

const App: FC = () => {
  const canvasRef = useRef<fabric.Canvas | null>(null)
  useEffect(() => {
    const canvas = new fabric.Canvas('canvas')
    canvasRef.current = canvas

    const rect = new fabric.Rect({
      left: 200,
      top: 200,
      width: 100,
      height: 100,
      fill: '#ff0000',
      rx: 25,
      ry: 10,
      strokeWidth: 5,
      stroke: '#f9f', // 边框颜色
      borderColor: '#000', // 选中时，边框颜色：天蓝
      borderScaleFactor: 5,
      borderDashArray: [10, 6], // 选中时 边框样式
      transparentCorners: false, // 选中时 角是否是空心   实心时cornerColor才生效
      cornerColor: '#a1de93', // 选中时 角的颜色
      cornerStrokeColor: '#ff0000', // 选中时 角的颜色
      cornerStyle: 'circle', // 选中时 角的形状
      cornerSize: 20, // 选中时 角的大小
      cornerDashArray: [10, 10],
      selectionBackgroundColor: '#7f1300', // 选中时，选框的背景色：朱红
      padding: 40, // 选中时 边框距离元素的距离
    })
    canvas.add(rect)

    const ellipse = new fabric.Ellipse({
      top: 20,
      left: 120,
      rx: 70,
      ry: 30,
      fill: '#ff0000',
    })
    canvas.add(ellipse)

    const triangle = new fabric.Triangle({
      left: 240,
      top: 0,
      width: 100,
      height: 100,
      fill: '#ff0000',
    })
    canvas.add(triangle)

    const line = new fabric.Line([0, 120, 120, 120], {
      stroke: '#ff0000',
      strokeWidth: 10,
      strokeDashArray: [15, 5],
    })
    canvas.add(line)

    const poliLine = new fabric.Polyline(
      [
        { x: 30, y: 30 },
        { x: 150, y: 140 },
        { x: 240, y: 150 },
        // { x: 100, y: 30 },
      ],
      {
        stroke: '#ff0000',
        strokeWidth: 3,
        fill: 'transparent',
      }
    )

    canvas.add(poliLine)

    const polygon = new fabric.Polygon(
      [
        { x: 10, y: 120 },
        { x: 10, y: 150 },
        { x: 100, y: 200 },
        // { x: 100, y: 30 },
      ],
      {
        strokeWidth: 5,
        stroke: '#ff0000',
        fill: '#ff98',
      }
    )

    canvas.add(polygon)
    return () => {
      canvas.dispose()
    }
  }, [])
  return (
    <>
      <canvas id="canvas" className="b" width={500} height={500}></canvas>
    </>
  )
}
export default App
