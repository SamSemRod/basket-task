import React, {useEffect, useMemo} from "react";

import { Group, Header } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import { ShopItem } from "../ShopItem/ShopItem";

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from "../../store"; 
import { fetchProducts,  addCount} from "../../store/productsSlice";

export function ShopList () {
    const dispatch = useDispatch<AppDispatch>();
    const items = useSelector((state: RootState) => state.items.items);
    useEffect(() => {
        dispatch(fetchProducts())
      }, [dispatch]);
    const memoizedItems = useMemo(() => {
      return items.map((item) => <ShopItem item={item}></ShopItem>)
    }, [items]) 
    return (
        <Group header={<Header mode="secondary">Товары</Header>}>
            {memoizedItems}
        </Group>
    )
}