import { useRef, useState } from "react";
import { ButtonAction } from "../components/button";
import { getShoppingList } from "../utils/Shopping";

export function EditShopping({
  index,
  setItems,
}: {
  index: number;
  setItems: Function;
}) {
  const [disabled, setDisabled] = useState(true);
  const inputItemRef = useRef<HTMLInputElement>(null);
  const [inputItem, setInputItem] = useState<string>("");

  const handleEdit = () => {
    setDisabled(!disabled);
  };

  const handleInputChange = () => {
    if (inputItemRef.current?.value) setInputItem(inputItemRef.current?.value);
    else setInputItem("");
  };

  const handleSave = () => {
    const items = getShoppingList();
    items.splice(index, 1);
    items.push(inputItem);
    localStorage.setItem("shoppingList", JSON.stringify(items));
    setItems(items);
    setDisabled(true);
  };

  if (!disabled)
    return (
      <div className="flex flex-wrap justify-center items-center">
        <input
          type="text"
          className="rounded-lg border-2 border-gray-600 bg-gray-150 mb-4 md:mb-0"
          ref={inputItemRef}
          onChange={handleInputChange}
          maxLength={40}
        />
        <div className="flex justify-around mb-4 md:mb-0 2xl:mt-0 w-full md:w-auto space-x-2">
          <div onClick={handleSave}>
            <ButtonAction action="save" />
          </div>
          <div onClick={handleEdit}>
            <ButtonAction action="cancel" />
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex flex-wrap justify-center items-center space-x-4">
      <div onClick={handleEdit}>
        <ButtonAction action="edit" />
      </div>
    </div>
  );
}
