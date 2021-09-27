import UIButton from 'components/UI/Button/Button';
import React from 'react'
import { Link } from 'react-router-dom';
import { BiTrash } from 'react-icons/bi';
import './Card.css'
const PromotionCard = ({promotion, onClickComments, onClickDelete }) => {
    return (
        <div className="promotion-card">
            <img src={promotion.imageUrl} alt={promotion.title} className="promotion-card__image"/>
            <div className="promotion-card__info">
                <h1 className="promotion-card__title">{promotion.title}</h1>
                <span className="promotion-card__price">R$ {promotion.price}</span>
                <footer className="promotion-card__footer">
                    {promotion.comments.length > 0 && (
                        <div className="promotion-card__comment">"{promotion.comments[0].comment}"</div>
                    )}
                    <button onClick={onClickComments} className="promotion-card__comments-count">{promotion.comments.length} {' '} {promotion.comments.length > 1 ? 'Comentários' : 'Comentário'}</button>
                    <UIButton href={promotion.url} rel="noreferrer" target="_blank" component="a">Ir Para o Site</UIButton>
                    <UIButton
          component={Link}
          to={`/edit/${promotion.id}`}
          className="promotion-card__edit-button"
        >
          Editar
        </UIButton>
                </footer>
        <button type="button" className="promotion-card__delete-button" onClick={onClickDelete}>
        <BiTrash />
        </button>
            </div>
        </div>
    )
}

export default PromotionCard;