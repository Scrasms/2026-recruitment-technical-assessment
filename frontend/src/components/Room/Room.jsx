import './Room.css';

function Room({ name, rooms_available, building_picture }) {
  console.log(building_picture)
  return(
    <>
      <article className="room-container width-full">
        <div className="room-available flex justify-centre align-centre">
          <div className="green-dot"></div>
          <p>{rooms_available} rooms available</p>
        </div>
        <div className="room-name flex justify-start align-centre">
          <p>{name}</p>
        </div>
        <img src={building_picture} />
      </article>
    </>
  );
}

export default Room;