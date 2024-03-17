import React from "react";
import { Button, Group, IconButton, SimpleCell, Input } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { Icon24Add, Icon24MinusOutline, Icon24TrashSimpleOutline } from '@vkontakte/icons';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from "../../store"; 
import { deleteItem, removeCount, addCount, setCount } from "../../store/productsSlice";

import { Item } from "../../types/Types";

export function ShopCount({itemId}: {itemId:number}) {
    const dispatch = useDispatch<AppDispatch>();
    const count = useSelector((state: RootState) => state.items.items.find(item => item.id === itemId)?.count || 0);
    const handleIncrement = () => {
        dispatch(addCount({id: itemId}));
      };
    
      const handleDecrement = () => {
        dispatch(removeCount({id: itemId}));
      };
      const handleDelete = () => {
        dispatch(deleteItem({id: itemId}));
      };
      
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(setCount({id: itemId, count: Number(value)}));
      };
    return (
        <div className="change-count">
        <IconButton label="Удалить" onClick={handleDelete}>
        <Icon24TrashSimpleOutline />
      </IconButton>
      <IconButton label="Вычесть" onClick={handleDecrement}>
        <Icon24MinusOutline />
      </IconButton>
      <Input 
        type="number" 
        className="input" 
        value={count}
        style={{
            width: "2em",
            height: "2em",
            WebkitAppearance: "none",
            margin: 4,
        }} 
        onChange={handleChange} 
      />
      <IconButton label="Добавить" onClick={handleIncrement}>
        <Icon24Add />
      </IconButton>
    </div>
    );
}