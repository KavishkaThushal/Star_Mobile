import './statuscard.css'

function StatusCard({name,date,issue,status}) {
  return (
    <div className='status-wrapper-card'>
    <p>{name}</p>
    <p>{date}</p>
    <p>{issue}</p>
    <select name="status" id="status" value={status}>
      <option value="pending">Pending</option>
      <option value="approved">Approved</option>
      <option value="rejected">Rejected</option>
    </select>
  </div>
  )
}

export default StatusCard