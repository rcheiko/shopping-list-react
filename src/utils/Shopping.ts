export function addShopping(
  Items: string,
  inputItemRef: React.RefObject<HTMLInputElement>,
  setInputItem: Function,
  setItems: Function,
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault();
  const items = getShoppingList();
  items.push(Items);
  localStorage.setItem("shoppingList", JSON.stringify(items));
  setItems(items);
  if (inputItemRef.current) inputItemRef.current.value = "";
  setInputItem("");
}

export function getShoppingList() {
  const shoppingList = localStorage.getItem("shoppingList");
  const items =
    typeof shoppingList === "string" ? JSON.parse(shoppingList) : [];
  return Array.isArray(items) ? items : [];
}
