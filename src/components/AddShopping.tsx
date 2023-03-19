import { addShopping } from "../utils/Shopping";
import { ButtonAction } from "./button";
import { useRef, useState } from "react";

export function AddShoppingCard({ setItems }: { setItems: Function }) {
  const [inputItem, setInputItem] = useState<string>("");
  const inputItemRef = useRef<HTMLInputElement>(null);

  const handleInputChange = () => {
    if (inputItemRef.current?.value) setInputItem(inputItemRef.current?.value);
    else setInputItem("");
  };

  if (!inputItem)
    return (
      <div>
        <form className="flex justify-center items-center space-x-2">
          <label htmlFor="shoppingList">Add to shopping list</label>
          <input
            type="text"
            id="shoppingList"
            ref={inputItemRef}
            onChange={handleInputChange}
            className="border-2 border-gray-300 rounded-md"
          />
          <div>
            <ButtonAction action="add" disabled="true" />
          </div>
        </form>
      </div>
    );

  return (
    <div>
      <form
        onSubmit={(event) => addShopping(inputItem, setItems, event)}
        className="flex justify-center items-center space-x-2"
      >
        <label htmlFor="shoppingList">Add to shopping list</label>
        <input
          type="text"
          id="shoppingList"
          ref={inputItemRef}
          onChange={handleInputChange}
          className="border-2 border-gray-300 rounded-md"
        />
        <div>
          <ButtonAction action="add" />
        </div>
      </form>
    </div>
  );
}
