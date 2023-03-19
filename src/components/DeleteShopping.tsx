import { getShoppingList } from "../utils/Shopping";
import { ButtonAction } from "./button";

export function DeleteShoppingCard({ index, setItems }: { index: number, setItems: Function }) {

  const deleteItem = (index: number) => () => {
    const items = getShoppingList();
    items.splice(index, 1);
    localStorage.setItem("shoppingList", JSON.stringify(items));
    setItems(items);
  };

  return (
    <div onClick={deleteItem(index)}>
      <ButtonAction action="delete" />
    </div>
  );
}
