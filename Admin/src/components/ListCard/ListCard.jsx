import './listcard.css';
import { useNavigate } from 'react-router-dom';

function ListCard({ FeaturesList, Name, ProductImg, Price, Amount, onDelete, id }) {
    const navigate = useNavigate();

    return (
        <div className='list-item-card'>
            <div className='list-img-container'>
                <img src={ProductImg} alt={Name} />
            </div>

            <p className='list-name'>{Name}</p>

            <div className='list-item-features'>
                {FeaturesList.map((item, i) => (
                    <p key={i} className='feature'>{item}</p>
                ))}
            </div>

            <p className='list-amount'>{Amount}</p>
            <p className='list-price'>Rs. {Price}</p>

            <p className='item-remove' onClick={() => onDelete(id)}>X</p>

            <button type='button' onClick={() => navigate(`/edit/${id}`)}>Edit</button>
        </div>
    );
}

export default ListCard;
