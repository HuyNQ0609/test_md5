import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function ListTours() {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/tours")
            .then((response) => {
                setTours(response.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
        },[]
    )

    return (
        <div>
            <h1>Danh sách tour du lịch</h1>
            <Link to={"/tours/create"}>Tạo mới tour du lịch</Link>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th colSpan={3}>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tours.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button><Link to={`/tours/view/${item.id}`}>Chi tiết</Link></button>
                                </td>
                                <td>
                                    <button><Link to={`/tours/update/${item.id}`}>Sửa thông tin</Link></button>
                                </td>
                                <td>
                                    <button><Link to={`/tours/delete/${item.id}`}>Xóa tour</Link></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}