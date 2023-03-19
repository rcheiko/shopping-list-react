import { useState } from "react";
import { AddShoppingCard } from "../components/AddShopping";
import { ButtonAction } from "../components/button";
import { EditShopping } from "../components/EditShopping";
import Root from "../layout/root";
import { getShoppingList } from "../utils/Shopping";

export default function Home() {
  const [items, setItems] = useState(getShoppingList());

  const deleteItem = (index: number) => () => {
    const newItems = [...items];
    newItems.splice(index, 1);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
    setItems(newItems);
  };

  return (
    <>
      <Root>
        <div>
          <AddShoppingCard setItems={setItems} />

          {items.map((elem, index) => (
            <div key={index} className="flex justify-center items-center space-x-8 py-2">
              <div>{elem}</div>
              <EditShopping index={index} setItems={setItems}  />
              <div onClick={deleteItem(index)}>
                <ButtonAction action="delete" />
              </div>
            </div>
          ))}

        </div>
      </Root>
    </>
  );
}
