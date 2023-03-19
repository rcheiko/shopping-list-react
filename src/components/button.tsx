type ButtonActionProps = {
  action: 'add' | 'edit' | 'delete' | 'save' | 'cancel',
  disabled?: "true" | "false"
}

export function ButtonAction({ action, disabled = "false" }: ButtonActionProps ) {

  if (disabled === "true") return (
    <div className="flex justify-center items-center space-x-4">
      <button className="bg-gray-500 text-white font-bold py-1 px-4 rounded cursor-not-allowed">
        {action}
      </button>
    </div>
  )

  else if (action === "save") return (
    <div className="flex justify-center items-center space-x-4">
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded">
        {action}
      </button>
    </div>
  );

  else if (action === "cancel") return (
    <div className="flex justify-center items-center space-x-4">
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">
        {action}
      </button>
    </div>
  )

  return (
    <div className="flex justify-center items-center space-x-4">
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
        {action}
      </button>
    </div>
  );
}
