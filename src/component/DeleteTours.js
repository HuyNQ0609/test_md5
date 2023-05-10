import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function DeleteTours() {
    const {id} = useParams();
    const [tour, setTour] = useState([]);
    const [check, setCheck] = useState(true);
    const navigator = useNavigate();
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
            <div>
                <button onClick={() => handleDelete(tour.id)}>Xóa</button>
            </div>
        </div>
    )

    function handleDelete(id) {
        axios
            .delete(`http://localhost:3000/tours/${id}`)
            .then(() => {
                navigator("/tours")
                setCheck(!check)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
}