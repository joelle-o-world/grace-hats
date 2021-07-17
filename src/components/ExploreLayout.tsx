import React, {FunctionComponent, useEffect, useMemo, useRef} from 'react';

import './ExploreLayout.sass'

interface ExploreLayoutProps {
  distributionFunction: (i: number, spacing?: number) => {x: number, y:number}
  elementWidth?: number;
  elementHeight?: number;
}


export const ExploreLayout:FunctionComponent<ExploreLayoutProps> = ({children, distributionFunction, elementWidth=30, elementHeight=30}) => {
  
  const numberOfChildren = React.Children.count(children)

  const points = useMemo(() => {
    let points = []
    for(let i=0; i < numberOfChildren; ++i)
      points[i] = distributionFunction(i)
    return points
  }, [numberOfChildren])

  const boxes = useMemo(() => {
    const minX = Math.min(...points.map(p => p.x))
    const minY = Math.min(...points.map(p => p.y))
    const padding = 200
    return React.Children.map(children, (child, i) => {
      let {x, y} = points[i]
      return <div
        className="ExploreLayoutElement"
        style={{
          position: "absolute",
          left: (x - elementWidth/2 - minX + padding) + 'px',
          top: (y - elementHeight/2 - minY + padding) + 'px',
          width: elementWidth + 'px',
          height: elementHeight + 'px',
          border: '1px solid red',
        }}
      >{child}</div>
    })
  }, [points, elementWidth, elementHeight, children])

  const divRef = useRef(null as HTMLDivElement|null)
  useEffect(() => {
    let div = divRef.current
    if(div) {
       console.log(div.clientHeight, div.clientWidth)
    }
  }, [])

  return <div ref={divRef} className="ExploreLayout">{boxes}</div>
}

export default ExploreLayout
