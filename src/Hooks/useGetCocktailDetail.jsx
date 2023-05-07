import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCocktailDetail } from "../api/cocktail-service";

const useGetCocktailDetail = () => {
  const [drinkDetail, setDrinkDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { cocktailId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getCocktailDetail(cocktailId)
      .then((res) => {
        setDrinkDetail(res);
        setIsSuccess(true);
      })
      .catch((error) => navigate("/", { replace: true }))
      .finally(() => setIsLoading(false));
  }, [cocktailId]);

  return { isLoading, isSuccess, drinkDetail };
};
export default useGetCocktailDetail;
