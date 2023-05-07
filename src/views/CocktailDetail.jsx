import { Loader } from "../components/Loader";
import { GoBackBtn } from "../components/GoBackBtn";
import { CocktailInfo } from "../components/CocktailInfo";
import { useLocation } from "react-router-dom";
import useGetCocktailDetail from "../Hooks/useGetCocktailDetail";

export const CocktailDetail = () => {
  const { isLoading, isSuccess, drinkDetail } = useGetCocktailDetail();

  const location = useLocation();
  const path = location?.state?.from ?? "/";

  console.log("path", path);

  return (
    <>
      <h1 className="uppercase text-4xl text-gray-600 text-center">
        CocktailDetail
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <GoBackBtn path={path} />
          {isSuccess && <CocktailInfo {...drinkDetail} />}
        </>
      )}
    </>
  );
};
