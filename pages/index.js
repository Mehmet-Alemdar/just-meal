import { baseUrl, fetchApi } from '../utils/fetchApi'
import Meal from '../components/Meal'

export default function Home({ mealCategories }) {
  return (
    <div className='w-full flex justify-center text-center pt-10'>
      <div className='w-11/12'>
        <h1 className='text-2xl font-light font-serif text-mblack'>All Meals</h1>
        <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center'>
          {
            mealCategories?.map((item, i) => <Meal data={item} key={i} />)
          }
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const mealCategories = await fetchApi(`${baseUrl}/categories.php`)
  return {
    props: {
      mealCategories: mealCategories.categories,
    }
  }
}