import React from 'react';
import { useHistory } from 'react-router';
import { useSpring, animated} from 'react-spring'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceCard = ({service}) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    const {name,price, description, area,image} = service;
    const history = useHistory()
    const handleCart = id =>{
        const url = `CartItem/${id}`
        history.push(url)
    }
    return (
        <div className="card mx-3 my-3 col-md-4 shadow-sm singleService">
            <animated.div className="card" 
             onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
             onMouseLeave={() => set({ xys: [0, 0, 1] })}
             style={{ transform: props.xys.interpolate(trans) }}
       
            >
            
            {
                
                service.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${service.image.img}`}/>
                :
               <img style={{height: '200px'}} className="img-fluid mb-3" src={`https://boiling-dusk-71900.herokuapp.com/services${service.img}`} alt=""/>
            }
            </animated.div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>Price: <span className="">{price}&#2547;</span></p>
                <p className="card-text">{description}</p>
                <p>Available at: <span>{area}</span> </p>
                <button onClick={()=> handleCart(service._id)} className="btn btn-primary mb-1 serviceBtn">Get Service</button>
            </div>
        </div>
    );
};

export default ServiceCard;