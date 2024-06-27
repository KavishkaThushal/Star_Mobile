import StatusCard from '../../components/Status-Card/StatusCard'
import './status.css'

function Status() {
  return (
    <div className='status-wrapper'>
      <div className='status-wrapper-card-title'>
        <p>Name</p>
        <p>Date</p>
        <p>Issue</p>
        <p>Status</p>
      </div>
      <StatusCard name='Mahinda Rajapaksha' date='2024/12/24' issue='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nemo fugit quam repellendus nostrum, saepe accusamus adipisci non mollitia aperiam molestiae, distinctio, quisquam totam autem sit corrupti laudantium earum nihil quod perspiciatis eaque. Quae, illum?' status='rejected'/>
    </div>
  )
}

export default Status