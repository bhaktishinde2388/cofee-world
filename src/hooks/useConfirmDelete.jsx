import { useCallback } from "react";

const useConfirmDelete = (websiteName = "MyCoffeeShop") => {
  const confirmDelete = useCallback((itemName = "this item") => {
    return window.confirm(`Are you sure you want to delete "${itemName}" from ${websiteName}?`);
  }, [websiteName]);

  return confirmDelete;
};

export default useConfirmDelete;
