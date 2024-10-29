import './currentTime.css';

function CurrentTime() {
  const currentTime = new Date();
  return (
    <div>
      <h2><span style={{color: "rgb(255, 202, 0)"}}>Текущее время: </span> <span className="timeAndDate">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})}</span></h2>
      <h2><span style={{color: "rgb(255, 202, 0)"}}>Текущая дата: </span> <span className="timeAndDate">{currentTime.toLocaleDateString('en-US')}</span></h2>
    </div>
  );
}

export default CurrentTime;