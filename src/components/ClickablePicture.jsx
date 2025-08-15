import maxenceglasses from '../assets/images/maxence-glasses.png';
import maxence from '../assets/images/maxence.png';
import {useState} from 'react';

function ClickablePicture() {
  const [withoutGlass, setPicture] = useState(false);

  return (
    <img
      style={{cursor: 'pointer'}}
      src={withoutGlass ? maxenceglasses : maxence}
      onClick={() => {
        setPicture(!withoutGlass);
        console.log(withoutGlass);
      }}
      alt="image"
    />
  );
}

export default ClickablePicture;
