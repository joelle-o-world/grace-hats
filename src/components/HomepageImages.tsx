import React, { FunctionComponent } from "react";
import ImageGrid from "./ImageGrid";

import Img1 from "../img/homepage-images/3.tiff.png";
import Img2 from "../img/homepage-images/cowl.tiff.png";
import Img3 from "../img/homepage-images/veil.tiff.png";
import Img4 from "../img/homepage-images/IMG_1640.jpg.png";
import Img5 from "../img/homepage-images/IMG_1722.jpg.png";
import Img6 from "../img/homepage-images/IMG_3829.jpg.png";
import Img7 from "../img/homepage-images/IMG_3831.jpg.png";
import Img8 from "../img/homepage-images/IMG_4688.jpg.png";
import Img9 from "../img/homepage-images/IMG_8489.jpg.png";
import Img10 from "../img/homepage-images/IMG_8937.jpg.png";
import Img11 from "../img/homepage-images/balacalva.tiff.png";
import Img12 from "../img/homepage-images/hemp bonnet.tiff.png";
import Img13 from "../img/homepage-images/IMG_1640.jpg.png";
import Img14 from "../img/homepage-images/Hyères_Evade_2021 (1).tiff.png";
import Img15 from "../img/homepage-images/evadehouse_29_01_20214877.jpg.png";
import Img16 from "../img/homepage-images/evadehouse_29_01_20215140.jpg.png";
import Img17 from "../img/homepage-images/evadehouse_29_01_20215227.jpg.png";
import Img18 from "../img/homepage-images/0fec83eb-6f78-4d43-bdcc-4ace622692fb.jpg.png";
import Img19 from "../img/homepage-images/9BE62C14-75BB-49D1-953E-3C0444479AA4.jpg.png";
import Img20 from "../img/homepage-images/E5059BDD-787C-4219-BC61-6A74F4FB31E8.jpg.png";

export const HomepageImages: FunctionComponent = () => {
  return (
    <ImageGrid>
      <HomepageImage thumbnail={Img1} caption="anya in hat" />
      <HomepageImage thumbnail={Img2} />
      <HomepageImage thumbnail={Img3} />
      <HomepageImage thumbnail={Img4} />
      <HomepageImage thumbnail={Img5} />
      <HomepageImage thumbnail={Img6} />
      <HomepageImage thumbnail={Img7} />
      <HomepageImage thumbnail={Img8} />
      <HomepageImage thumbnail={Img9} />
      <HomepageImage thumbnail={Img10} />
      <HomepageImage thumbnail={Img11} />
      <HomepageImage thumbnail={Img12} />
      <HomepageImage thumbnail={Img13} />
      <HomepageImage thumbnail={Img14} />
      <HomepageImage thumbnail={Img15} />
      <HomepageImage thumbnail={Img16} />
      <HomepageImage thumbnail={Img17} />
      <HomepageImage thumbnail={Img18} />
      <HomepageImage thumbnail={Img19} />
      <HomepageImage thumbnail={Img20} />
    </ImageGrid>
  );
};

export default HomepageImages;

export const HomepageImage: FunctionComponent<{
  thumbnail: string;
  caption?: string;
}> = ({ thumbnail, caption }) => {
  return (
    <div className="HomepageImage">
      <img src={thumbnail} className="HomepageImageThumbnail" />
      {caption ? <p className="caption">{caption}</p> : null}
    </div>
  );
};
