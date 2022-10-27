import { useRouter } from "next/router"
import Category from "../../components/Category"

const Filter = () => {
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
    {
      strMeal: 'Fish pie',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg'
    },
    {
      strMeal: 'Escovitch Fish',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1520084413.jpg'
    }
  ]
  return (
    <div className='w-full justify-center text-center pt-10'>
      <h1 className='text-2xl font-light font-serif text-mblack'>{ name }</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center">
        { categories.map((item, i) => (
          <Category data={item} key={i}/>
        ))}
      </div>
    </div>
  );
}
 
export default Filter;