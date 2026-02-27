import './Icon.css';

function Icon({ image, invert }) {
  return (
    <>
      <div className={`icon flex justify-centre align-centre ${invert ? 'invert' : ''}`}>
        <img src={image} />
      </div>
    </>
  );
}

export default Icon;
