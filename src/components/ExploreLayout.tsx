import React, {FunctionComponent, useMemo} from 'react';

interface ExploreLayoutProps {
  distributionFunction: (i: number, spacing: number) => {x: number, y:number}
  elementWidth?: number;
  elementHeight?: number;
}


export const ExploreLayout:FunctionComponent<ExploreLayoutProps> = ({children, distributionFunction, elementWidth=300, elementHeight=300}) => {
  
  const numberOfChildren = React.Children.count(children)

  const points = useMemo(() => {
    let points = []
    for(let i=0; i < numberOfChildren; ++i)
      points[i] = distributionFunction(i, 1)
    return points
  }, [numberOfChildren])

  const boxes = useMemo(() => {
    return React.Children.map(children, (child, i) => {
      let {x, y} = points[i]
      return <div
        className="ExploreLayoutElement"
        style={{
          position: "absolute",
          left: (x - elementWidth/2) + 'px',
          top: (y - elementHeight/2) + 'px',
          width: elementWidth + 'px',
          height: elementHeight + 'px',
          border: '1px solid red',
        }}
      >{child}</div>
    })
  }, [points, elementWidth, elementHeight, children])

  return <div className="ExploreLayout">{boxes}</div>
}

export default ExploreLayout
