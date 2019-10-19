import React, { useState ,useEffect } from 'react';
import './Card.css';
import Image from '../CardItems/Image';
import Name from '../CardItems/Name';
import Description from '../CardItems/Description';

const Card = () => {

    const [images, setImages] = useState(null);
    const API_KEY = 'de681e5d88f140db75c765adbaf0d54f632ab6b991b139760afc76e3255b40b8'; //Key of unsplash api to fetch images.

    useEffect(() => {
        fetch('https://api.unsplash.com/photos/?client_id=' + API_KEY, {
                    method: 'GET',
            })
                .then(res => res.json())
                .then(data => {
                    setImages(data);
                })
                .catch(error => {
            
                });
    }, []);
    
   
    return (
        <div className="Card-container">
            {images && images.map(img => (
                <div 
                    key={img.id}
                    className="Card"
                >
                    <Image 
                        image={img.urls.regular}
                        alt={img.alt_description}
                    />
                    <Name name={img.user.name} />
                    <Description description={img.user.bio} />
                </div>
            ))}
        </div>

    );
}

export default Card;