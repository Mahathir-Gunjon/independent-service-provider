import React from 'react';
import { Container } from 'react-bootstrap';
import PhotoAlbum from "react-photo-album";


const photos = [
    {
        src: "https://www.thephotoargus.com/wp-content/uploads/2020/10/MichalisLight.jpg",
        width: 800,
        height: 600
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTARk0jWsrIOHmbwQcjiU3HYbfytV4Ua8pRS0FAwHR937cj9mcUQZjc5wstx23sqsX9-IQ&usqp=CAU",
        width: 1600,
        height: 900
    },
    {
        src: "https://naturefineart.com/wp-content/uploads/2019/07/AFR_02_14_08353-1000x667.jpg",
        width: 800,
        height: 600
    },
    {
        src: "https://iso.500px.com/wp-content/uploads/2020/08/stock-photo-240662573.jpg",
        width: 1600,
        height: 900
    },
    {
        src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/DB21/production/_123179065_jo-anne-mcarthur-wildlife-photographer-of-the-year.jpg",
        width: 800,
        height: 600
    },
    {
        src: "https://www.rwongphoto.com/images/xl/RW8461.jpg",
        width: 1600,
        height: 900
    }
];

const BestCaptures = () => {
    return (
        <div className='bg-dark py-5'>
            <Container>
                <h1 className='text-danger text-center display-3 py-5'>Best clicks</h1>
                <PhotoAlbum layout="rows" photos={photos} />
            </Container>
        </div>
    );
};

export default BestCaptures;