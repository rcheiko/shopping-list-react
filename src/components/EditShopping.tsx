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
      <div className="flex justify-center items-center space-x-4">
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md"
          ref={inputItemRef}
          onChange={handleInputChange}
        />
        <div className="flex space-x-6">
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
    <div className="flex justify-center items-center space-x-4">
      <div onClick={handleEdit}>
        <ButtonAction action="edit" />
      </div>
    </div>
  );
}
