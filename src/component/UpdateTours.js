import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {ErrorMessage, Field, Formik} from "formik";

export default function UpdateTours() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:3000/tours/${id}`)
            .then((response) => {
                setTour(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const data = {
        title: tour.title || '',
        price: tour.price || '',
        description: tour.description || '',
    };

    return (
        <div>
            <Link to={"/tours"}>Trở lại danh sách</Link>
            <Formik
                initialValues={data}
                onSubmit={(values) => {
                    axios
                        .put(`http://localhost:3000/tours/${id}`, values)
                        .then(() => {
                            navigate('/tours');
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }}>
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        <Field name={'title'}></Field>
                        <ErrorMessage name="title"/>

                        <Field name={'price'}></Field>
                        <ErrorMessage name="price"/>

                        <Field name={'description'}></Field>
                        <ErrorMessage name="description"/>

                        <button>Update Tours</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};
