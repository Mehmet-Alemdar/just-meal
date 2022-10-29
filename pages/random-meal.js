import Category from "../components/Category";
import { baseUrl ,fetchApi} from '../utils/fetchApi'

const RandomMeal = ({ randomMeals }) => {
  const categories = [
    {
      strMeal: 'Baked salmon with fennel & tomatoes',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg'
    },
    {
      strMeal: 'Cajun spiced fish tacos',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg'
    },
    {
      strMeal: 'Fish pie',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg'
    },
    {
      strMeal: 'Escovitch Fish',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1520084413.jpg'
    },
    {
      strMeal: 'Baked salmon with fennel & tomatoes',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg'
    },
    {
      strMeal: 'Cajun spiced fish tacos',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg'
    },
    {
      strMeal: 'Fish pie',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg'
    },
    {
      strMeal: 'Escovitch Fish',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1520084413.jpg'
    },
    {
      strMeal: 'Baked salmon with fennel & tomatoes',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg'
    },
    {
      strMeal: 'Cajun spiced fish tacos',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg'
    }
  ]
  return (
    <div className='w-full justify-center text-center pt-10'>
      <h1 className='text-2xl font-light font-serif text-mblack'>10 Random Meal</h1>
      <div className="flex flex-row">
        <div className="basis-full grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center">
          {randomMeals?.map((item,i) => (
            <Category data={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default RandomMeal;

export async function getStaticProps() {
    const randomMeals = await fetchApi(`${baseUrl}/randomselection.php`)

    return {
      props: {
        randomMeals: randomMeals.meals,
      }
    }
  }