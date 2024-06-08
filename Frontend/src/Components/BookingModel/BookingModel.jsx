import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { useState } from "react";
import './bookingModel.css'	
function BookingModel({opened, setOpened}) {
    const [value,setValue] = useState(null)
  
     
  return (
    <Modal
    opened={opened}
    onClose={()=>setOpened(false)}
    title='Make an appointment'
    centered
    
    >
        <div className="date-container">
            <DatePicker onChange={setValue}  />
            <Button disabled={!value} onClick={()=>(setOpened(false))} >Make an Appointment</Button>
        </div>

    </Modal>
  )
}

export default BookingModel