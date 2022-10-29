import Category from "../components/Category";
import { baseUrl ,fetchApi} from '../utils/fetchApi'

const RandomMeal = ({ randomMeals }) => {
  return (
    <div className='w-full flex justify-center text-center pt-10'>
      <div className="md:w-11/12 w-full">
        <h1 className='text-2xl font-light font-serif text-mblack'>10 Random Meal</h1>
        <div className="flex flex-row">
          <div className="basis-full grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center">
            {randomMeals?.map((item,i) => (
              <Category data={item} key={i} />
            ))}
          </div>
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
