import React from "react"

export default function Cards(props) {
    return <div className="--article">
                    <img className="--photo" src={`${props.imageUrl}`} alt="A photo of a Mt.Fuji"/>
                    <span className="--description">
                        <p>
                            <img className="--pin" src="/Images/Pin.png" alt="a small pin icon"/>  
                            <span className="--japan" >{props.location}</span> 
                            <span className="--map-title" >View on Google Maps</span>
                            
                        </p>
                        <h1>{props.title}</h1>
                        <span className="--startDate">{props.startDate}</span>
                        <span className="--endDate">{props.endDate}</span>
                        <p>{props.description}</p>
                    </span>
           </div>
}

