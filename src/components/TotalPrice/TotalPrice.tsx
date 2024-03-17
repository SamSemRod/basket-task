import { Group, Header, SimpleCell, Title } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import { useSelector } from 'react-redux';
import { RootState } from "../../store"; 
import { cutWords } from "../ShopItem/ShopItem";

export function TotalPrice () {
    const items = useSelector((state: RootState) => state.items.items);
    const res = () => {
        return items.reduce((total, { count, price }) => total + count * price, 0).toFixed(2);
    }
    return (
        <Group header={<Header mode="secondary">Итого</Header>}>
            <SimpleCell>
                {items.map((item) => <Title level="3" style={{padding: 10}}>{item.count} &times; {cutWords(item.title, 5)} <br/></Title>)}
                <Title level="1">${res()}</Title>
            </SimpleCell>
        </Group>
    )
}