
function EventCard(props : any) {
    return (
      <>
        <div className = "card">
            <img src={props.eventImg} alt="Event Image" />
            <h2>{props.eventName}</h2>
            <p>Treffen im Olympiapark</p>
        </div>
      </>
    );
  }
  
  export default EventCard;