import React from "react";
import { Button, Div, SimpleCell, Text, Popover } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import { Item } from "../../types/Types";
import { ShopCount } from "../ShopCount/ShopCount";
import "./ShopItem.css"

export function cutWords(text: string, n: number): string {
  const words = text.split(' ');
  for (let i = n; i < words.length; i += n + 1) {
    words[i] += '\n';
  }
  return words.join(' ');
}

export function ShopItem({item}:{item:Item}) {

    return (
      <div className="content">
        <div className="item-description">
          <SimpleCell
            key={item.id}
            before={
              <img src={item.image} alt={item.title} className="image" ></img>
            }
          >
            <a href="url">{item.title}<br/>
            </a>
            
            <Popover
              trigger="hover"
              placement="bottom"
              role="tooltip"
              aria-describedby="tooltip-1"
              content={
                  <Div>
                    <Text style={{whiteSpace: 'pre-wrap'}}>{cutWords(item.description, 5)}</Text>
                  </Div>
                }
              >
              <Button id="tooltip-1" mode="link" style={{color: 'black'}}>
                {item.description.split(" ").splice(0,5).join(" ")}...
              </Button>
            </Popover>     

            <Text className="price">${item.price}</Text>
          </SimpleCell>
        </div>
       <ShopCount itemId={item.id}></ShopCount>
      
      </div>
        
    );
}
