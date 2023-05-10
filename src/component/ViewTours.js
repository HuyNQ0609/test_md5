import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ViewTours() {
    const {id} = useParams();
    const [tour, setTour] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/tours/${id}`)
            .then((response) => {
                setTour(response.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [id])

    return (
        <div>
            <h1>Thông tin chi tiết</h1>
            <Link to={"/tours"}>Trở lại danh sách</Link>
            <ul key={tour.id} style={{textAlign: "left"}}>
                <li>{tour.title}</li>
                <li>{tour.price}</li>
                <li>{tour.description}</li>
            </ul>
        </div>
    )
}