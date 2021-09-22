import React, { useEffect, useState } from 'react';
import './Search.css'
import { Link } from 'react-router-dom';
import PromotionList from '../List/List';
import useApi from 'components/utils/useApi';
const PromotionSearch = () => {
    const [promotions, setPromotions]= useState([]);
    const [search, setSearch] = useState(""); 
    const [load, loadInfo]=useApi({
        url:'/promotions',
        method:'get',
        params:{
            _embed:'comments',
            _order:'desc',
            _sort:'id',
            title_like: search || undefined
        }
    })
    useEffect(()=>{
        load();
      },[search])

    return (
        <div className="promotion-search">
            <header className="promotion-search__header">
                <h1>Promo Show</h1>
            <Link to="/create">Nova Promoção</Link>
            </header>
                <input 
                type="search" 
                className="promotion-search__input"
                placeholder="Buscar..." value={search} onChange={(ev)=> setSearch(ev.target.value)}/>
            <PromotionList promotions={loadInfo.data} error={loadInfo.error} loading={loadInfo.loading}/>
        </div>
    )
}
export default PromotionSearch;