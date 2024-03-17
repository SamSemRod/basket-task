import * as React from "react";
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { ShopList } from "./components/ShopList/ShopList";
import { TotalPrice } from "./components/TotalPrice/TotalPrice";
import './App.css'


const App = () => {
  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader delimiter="none" />}>
        <SplitCol autoSpaced>
          <View activePanel="main" className="container">
            
            <Panel id="main">
                <PanelHeader>Потребительская корзина</PanelHeader>  
              <div className="content">
              <div className="shop-list">
                <ShopList></ShopList>
              </div>
              <div className="total-price">
                <TotalPrice></TotalPrice>
              </div>
              </div>
              </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

 

export default App;
