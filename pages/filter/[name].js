import { useRouter } from "next/router"
import { useState } from "react"
import Category from "../../components/Category"
import { baseUrl ,fetchApi, fetchApiWithParam } from '../../utils/fetchApi'

// const mealArr = [
//   { strCategory: 'Beef'},
//   { strCategory: 'Chicken'},
//   { strCategory: 'Dessert'},
//   { strCategory: 'Lamb'},
//   { strCategory: 'Miscellaneous'},
//   { strCategory: 'Pasta'},
//   { strCategory: 'Pork'},
//   { strCategory: 'Seafood'},
//   { strCategory: 'Side'},
//   { strCategory: 'Starter'},
//   { strCategory: 'Vegan'},
//   { strCategory: 'Vegetarian'},
//   { strCategory: 'Breakfast'},
//   { strCategory: 'Goat'},
// ]

// const areas = [
//   {strAres: 'American'},
//   {strAres: 'British'},
//   {strAres: 'Canadian'},
//   {strAres: 'Chinese'},
//   {strAres: 'French'},
//   {strAres: 'Vietnamese'},
//   {strAres: 'Portuguese'},
//   {strAres: 'American'},
//   {strAres: 'British'},
//   {strAres: 'Canadian'},
//   {strAres: 'Chinese'},
//   {strAres: 'French'},
//   {strAres: 'Vietnamese'},
//   {strAres: 'Portuguese'},
// ]

const Filter = ({ meals }) => {
  const router = useRouter()
  const { name } = router.query
  const [page, setPage] = useState(1)

  const categories = [
    {
      idMeal: 2,
      strMeal: 'Baked salmon with fennel & tomatoes',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg'
    },
    {
      idMeal: 1,
      strMeal: 'Cajun spiced fish tacos',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg'
    },
    {
      idMeal: 3,
      strMeal: 'Fish pie',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg'
    },
    {
      idMeal: 4,
      strMeal: 'Escovitch Fish',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1520084413.jpg'
    }
  ]
  return (
    <div className='w-ful flex justify-center text-center pt-10'>
      <div className="w-11/12">
        <h1 className='text-2xl font-light font-serif text-mblack'>{ name }</h1>
        <div className="flex flex-row">
          <div className="basis-full grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center">
            {/* { 
              meals.length >= 5
              ?meals?.slice(0,5 * page).map((item, i) => (
                <Category data={item} key={i}/>
              ))
              :meals?.map((item, i) => (
                <Category data={item} key={i}/>
              ))
            } */}
            {meals?.map((item,i) => (
              <Category data={item} key={i} />
            ))}
          </div>
        </div>
        {/* <nav aria-label="Page navigation example">
        <ul class="inline-flex items-center -space-x-px">
          <li>
            <a href="#" class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Previous</span>
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </a>
          </li>
          <li>
            <p onClick={() => setPage(1)} class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</p>
          </li>
          <li>
            <p onClick={() => setPage(2)} class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</p>
          </li>
          <li>
            <a href="#" aria-current="page" class="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
          </li>
          <li>
            <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Next</span>
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
          </li>
        </ul>
      </nav> */}

      </div>

    </div>
  );
}
 
export default Filter;

export async function getServerSideProps({ query: { name }}) {
  const mealList = await fetchApiWithParam(`${baseUrl}/filter.php`, {c: name})

  return {
    props: {
      meals: mealList?.meals
    }
  }
}