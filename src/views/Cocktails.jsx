import { SearchForm } from "../components/SearchForm";
import { Section } from "../components/Section";
import { CocktailsList } from "../components/CocktailsList";
import { Loader } from "../components/Loader";
import useGetCocktails from "../Hooks/useGetCocktails";

export const Cocktails = () => {
  const { cocktails, handleSubmit, isLoading, isSuccess } = useGetCocktails();

  return (
    <>
      {isLoading && <Loader />}
        <Section>
          <h1 className="uppercase text-4xl text-gray-600 text-center">
            Search Cocktails
          </h1>

          <SearchForm onSubmit={handleSubmit} />
          {isSuccess && (
          <CocktailsList cocktails={cocktails} />
          )}
        </Section>
    </>
  );
};
