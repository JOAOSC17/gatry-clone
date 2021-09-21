import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Form.css'
const initialValue ={
    title:'',
    imageUrl:'',
    url:'',
    price:0,
}
const PromotionForm = ({id}) => {
    const [ values, setValues ] = useState(id ? null :initialValue);
    const history = useHistory();
    useEffect(()=>{
        if(id){
            axios.get(`http://localhost:5000/promotions/${id}`)
        .then((response)=>{
         setValues(response.data);
        })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(values);
    function onChange(ev){
        const {name, value} = ev.target;
        setValues({...values, [name]: value})
    }
    function onSubmit(ev){
        ev.preventDefault();
        const method =id ? 'put' : 'post';
        const url = id 
        ?`http://localhost:5000/promotions/${id}`
        :'http://localhost:5000/promotions';
        axios[method](url, values)
        .then((response)=>{
         history.push('/');
        })
    }
    return (
        <div>
            <h1>Promo Show</h1>
            <h2>Nova Promoção</h2>
            {!values ? (
                <div>Carregando...</div>
            ):(
                <form onSubmit={onSubmit}>
                <div className="promotion-form__group">
                    <label htmlfor="title">Título</label>
                    <input id="title" name="title" type="text" onChange={onChange} value={values.title}/>
                </div>
                <div className="promotion-form__group">
                    <label htmlfor="url">Link</label>
                    <input id="url" name="url" type="text" onChange={onChange} value={values.url}/>
                </div>
                <div className="promotion-form__group">
                    <label htmlfor="imageUrl">Imagem(URL)</label>
                    <input id="imageUrl" name="imageUrl" type="text" onChange={onChange} value={values.imageUrl}/>
                </div>
                <div className="promotion-form__group">
                    <label htmlfor="price">Preço</label>
                    <input id="price" name="price" type="number" onChange={onChange} value={values.price}/>
                </div>
                <div>
                    <button type="submit">Salvar</button>
                </div>
            </form>
            )}
        </div>
    )
}

export default PromotionForm