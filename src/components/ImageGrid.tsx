import React, {FunctionComponent} from 'react';


export const ImageGrid: FunctionComponent = ({children}) => {
  const numberOfChildren = React.Children.count(children)
  const numberOfCols = Math.ceil(Math.sqrt(numberOfChildren))
  console.log(numberOfCols);

  const style = {
    gridTemplateColumns: `repeat(${numberOfCols}, 1fr)`
  }

  return <div className="ImageGrid" style={style}>
    {children}
  </div>
}

export default ImageGrid;
