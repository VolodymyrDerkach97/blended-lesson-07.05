import { SearchForm } from '../components/SearchForm';
import { Section } from '../components/Section';
import { CocktailsList } from '../components/CocktailsList';
import { Loader } from '../components/Loader';
import { useSearchParams } from 'react-router-dom';
import log from 'eslint-plugin-react/lib/util/log';
import { useEffect, useState } from 'react';
import { searchByName } from '../api/cocktail-service';

export const Cocktails = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [cocktails, setCocktails] = useState(null);
  const query = searchParams.get('query');

  const handleSubmit = (value) =>{
    setSearchParams({query: value.trim()})
  }

  useEffect(() => {
    if(query){
      searchByName(query).then(res => setCocktails(res.drinks));
    }
  },[query])

  return (
    <>
      <Section>
        <h1 className='uppercase text-4xl text-gray-600 text-center'>
          Search Cocktails
        </h1>

        <SearchForm onSubmit={handleSubmit}/>
        <CocktailsList cocktails={cocktails} />
      </Section>
    </>
  );
};
