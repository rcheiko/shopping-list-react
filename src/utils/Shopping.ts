export function addShopping (Items: string, setItems: Function) {
    const items = getShoppingList()
    items.push(Items)
    localStorage.setItem('shoppingList', JSON.stringify(items));
    setItems(items)
}

export function getShoppingList () {
    const shoppingList = localStorage.getItem('shoppingList');
    const items = typeof shoppingList === 'string' ? JSON.parse(shoppingList) : [];
    return Array.isArray(items) ? items : [];
}