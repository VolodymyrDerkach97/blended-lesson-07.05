import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchByName } from "../api/cocktail-service";

const useGetCocktails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cocktails, setCocktails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const query = searchParams.get("query");

  const handleSubmit = (value) => {
    setSearchParams({ query: value.trim() });
  };

  useEffect(() => {
    setIsLoading(true);
    if (query) {
      searchByName(query)
        .then((res) => {
          setCocktails(res.drinks);
          setIsSuccess(true);
        })
        .catch(console.log)
        .finally(() => setIsLoading(false));
    }
  }, [query]);

  return { cocktails, handleSubmit, isLoading, isSuccess };
};
export default useGetCocktails;
