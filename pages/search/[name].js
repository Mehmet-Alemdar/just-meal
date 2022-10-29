import { useRouter } from "next/router"
import Category from "../../components/Category"
import { baseUrl, fetchApiWithParam } from '../../utils/fetchApi'

const Search = ({ meals }) => {
  const router = useRouter()

  const { name } = router.query

  const categories = [
    {
      strMeal: 'Baked salmon with fennel & tomatoes',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg'
    },
    {
      strMeal: 'Cajun spiced fish tacos',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg'
    },
    // {
    //   strMeal: 'Fish pie',
    //   strMealThumb: 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg'
    // },
    // {
    //   strMeal: 'Escovitch Fish',
    //   strMealThumb: 'https://www.themealdb.com/images/media/meals/1520084413.jpg'
    // }
  ]

  return (
    <div className='w-full flex justify-center text-center pt-10'>
      <div className="w-11/12">
        <div className="flex items-center justify-center gap-2">
          <h1 className='text-xl font-light font-serif text-mblack'>You Searched</h1>
          <h1 className='text-2xl font-light font-serif text-myellow'> { name.toUpperCase() }</h1>
        </div>
        {
          meals?.length > 0
          ?<div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center">
            {
              meals?.map((item, i) => (
                <Category data={item} key={i}/>
              ))
            }
          </div>
          :<div className="bg-red-200 h-96 flex justify-center items-center">
            <h1 className='text-2xl font-light font-serif text-myellow'> Not Found</h1>
          </div>
        }
      </div>


  </div>
  );
}

export default Search;

export async function getServerSideProps({ query: { name }}) {
  const mealList = await fetchApiWithParam(`${baseUrl}/search.php`, {s: name})
  return {
    props: {
      meals: mealList.meals
    }
  }
}