import { useEffect, useState } from "react";
import { getTrendingCocktails } from "../api/cocktail-service";

const useGetTrending = () => {
  const [cocktails, setCocktails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrendingCocktails()
      .then((res) => {
        setCocktails(res.map((item) => item.drinks[0]));
        setIsSuccess(true);
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, isSuccess, cocktails };
};
export default useGetTrending;
