import {useState} from 'react';
import LikeButton from './LikeButton';

function DiscoButton() {
  const styleColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [index, setIndex] = useState(0);

  const nextColor = () => {
    setIndex((prevIndex) => (prevIndex + 1) % styleColors.length);
  };

  return (
    <LikeButton
      style={{
        backgroundColor: styleColors[index],
        fontSize: '20px',
        padding: '10px',
      }}
      onClick={nextColor}
    />
  );
}

export default DiscoButton;
