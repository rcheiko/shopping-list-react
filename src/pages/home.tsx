import { useState } from "react";
import { AddShoppingCard } from "../components/AddShopping";
import { DeleteShoppingCard } from "../components/DeleteShopping";
import { EditShopping } from "../components/EditShopping";
import Root from "../layout/root";
import { getShoppingList } from "../utils/Shopping";

export default function Home() {
  const [items, setItems] = useState(getShoppingList());

  return (
    <>
      <Root>
        <div className="flex flex-col justify-center items-center rounded-xl border border-gray-700 bg-gray-800 p-4 mx-auto lg:w-1/2 overflow-hidden">
          <AddShoppingCard setItems={setItems} />

          <ul className="mt-4 space-y-2">
            {items.map((elem, index) => (
              <li key={index}>
                <div className="flex flex-wrap justify-center items-center space-x-6 rounded-lg border border-gray-700 py-4 px-8 mb-4">
                  <p className="text-gray-100">{elem}</p>
                  <div className="flex flex-wrap justify-center items-center space-x-2">
                    <EditShopping index={index} setItems={setItems} />
                    <DeleteShoppingCard index={index} setItems={setItems} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Root>
    </>
  );
}
