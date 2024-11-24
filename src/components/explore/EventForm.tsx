
function EventForm() {
    return (
      <>
        <div>
            <form className = "text-[#1B98D5]">
                <label htmlFor="name" >Name:</label>
                <input type="text" id="name" name="name" required/>
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" required/>
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" required/>
                <label htmlFor="tags">Tags:</label>
                <input type="text" id="tags" name="tags" required/>
                <label htmlFor="start_time">Start Time:</label>
                <input type="datetime-local" id="start_time" name="start_time" required/>
                <label htmlFor="end_time">End Time:</label>
                <input type="datetime-local" id="end_time" name="end_time" required/>
                <label htmlFor="host">Host:</label>
                <input type="text" id="host" name="host" required/>
                <label htmlFor="max_number_of_participants">Max Number of Participants:</label>
                <input type="number" id="max_number_of_participants" name="max_number_of_participants" required/>
                <label htmlFor="min_number_of_participants">Min Number of Participants:</label>
                <input type="number" id="min_number_of_participants" name="min_number_of_participants" required/>
                <label htmlFor="participants">Participants:</label>
                <input type="number" id="participants" name="participants" required/>
                <label htmlFor="longitude">Longitude:</label>
                <input type="number" id="longitude" name="longitude" required/>
                <label htmlFor="latitude">Latitude:</label>
                <input type="number" id="latitude" name="latitude" required/>
                <button type="submit">Submit</button>
            </form>
        </div>
      </>
    );
  }
  
  export default EventForm;