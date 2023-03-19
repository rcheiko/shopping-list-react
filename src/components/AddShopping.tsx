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
      <form className="flex justify-center items-center space-x-2 my-6">
        <label
          htmlFor="shoppingList"
          className="text-lg font-medium text-gray-100"
        >
          Add to shopping list
        </label>
        <input
          type="text"
          id="shoppingList"
          ref={inputItemRef}
          onChange={handleInputChange}
          className="border-2 border-gray-300 rounded-md"
          maxLength={40}
        />
        <div>
          <ButtonAction action="add" disabled="true" />
        </div>
      </form>
    );

  return (
    <form
      onSubmit={(event) => addShopping(inputItem, inputItemRef, setInputItem, setItems, event)}
      className="flex justify-center items-center space-x-2 my-6"
    >
      <label
        htmlFor="shoppingList"
        className="text-lg font-medium text-gray-100"
      >
        Add to shopping list
      </label>
      <input
        type="text"
        id="shoppingList"
        ref={inputItemRef}
        onChange={handleInputChange}
        className="border-2 border-gray-300 rounded-md"
        maxLength={40}
      />
      <div>
        <ButtonAction action="add" />
      </div>
    </form>
  );
}
