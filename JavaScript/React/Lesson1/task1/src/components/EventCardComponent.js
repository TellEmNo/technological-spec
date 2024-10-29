import './eventCard.css';

function EventCard({title, date, location}) {
  return ( 
    <div className="eventCard">
      <h1><span style={{color: "#61dafb"}}>Группа: </span>  {title}</h1>
      <h2><span style={{color: "#61dafb"}}>Дата: </span> {date}</h2>
      <h2><span style={{color: "#61dafb"}}>Место: </span> {location}</h2>
    </div>
  );
}

export default EventCard;
