import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function CreateTours() {
    const navigate = useNavigate();
    const data = {
        title: "",
        price: "",
        description: ""
    };

    return (
        <div>
            <Formik
                initialValues={data}
                onSubmit={(values) => {
                    axios
                        .post("http://localhost:3000/tours", values)
                        .then(() => {
                            navigate("/tours")
                        })
                        .catch((error) => {
                            console.log(error.message)
                        })
                }
            }>
                <Form>
                    <h1>Thêm tour du lịch mới</h1>
                    <Link to={"/tours"}>Quay lại trang danh sách</Link>
                    <table style={{textAlign: "left"}}>
                        <tbody>
                            <tr>
                                <td>Tên: </td>
                                <td>
                                    <Field name={"title"}></Field>
                                    <ErrorMessage name={"title"}></ErrorMessage>
                                </td>
                            </tr>
                            <tr>
                                <td>Giá: </td>
                                <td>
                                    <Field name={"price"}></Field>
                                    <ErrorMessage name={"price"}></ErrorMessage>
                                </td>
                            </tr>
                            <tr>
                                <td>Mô tả: </td>
                                <td>
                                    <Field name={"description"}></Field>
                                    <ErrorMessage name={"description"}></ErrorMessage>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button type={"submit"}>Lưu</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Form>
            </Formik>
        </div>
    )
}