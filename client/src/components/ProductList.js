import { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

const ProductList = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        const getProducts = async()=>{
            const res = await axios.get('http://localhost:4000/api/products')
            setList(res.data)
        }
        getProducts();
    }, [list])

    const  deleteProduct = async(id) =>{
        await axios.delete('http://localhost:4000/api/products/'+ id)
    }
    return (
        
            <div className="row">
                {
                    list.map(lista => (
                        <div className="col-md-4 p-2" key={lista._id}>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Nombre: {lista.nombre}</h5>
                                </div>
                                <div className="card-body">
                                    <p>Apellido:{lista.apellido}</p>
                                    <p>Edad: {lista.edad}</p>
                                    <p>Telefono: {lista.telefono}</p>
                                    <p>Email: {lista.email}</p>
                                </div>
                    
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={()=>deleteProduct(lista._id)}>
                                        Delete
                                    </button>
                                    <Link className='btn btn-primary m-1' to={'/edit/' + lista._id}>
                                        Edit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        
    )
}

export default ProductList
