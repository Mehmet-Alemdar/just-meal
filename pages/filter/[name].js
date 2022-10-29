import { useRouter } from "next/router"
import { useState } from "react"
import Category from "../../components/Category"
import { baseUrl, fetchApiWithParam } from '../../utils/fetchApi'

const Filter = ({ meals }) => {
  const router = useRouter()
  const { name } = router.query

  const [showCount, setShowCount] = useState(1)

  return (
    <div className='w-ful flex flex-col gap-5 justify-center items-center text-center pt-10'>
      <div className="md:w-11/12 w-full">
        <h1 className='text-2xl font-light font-serif text-mblack'>{ name }</h1>
        <div className="flex flex-row">
          <div className="basis-full grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center">
            {
              meals?.length > 10
              ?meals?.slice(0, showCount * 10).map((item, i) => (
                <Category data={item} key={i} />
              ))
              :
              meals?.map((item,i) => (
                <Category data={item} key={i} />
              ))
            }
          </div>
        </div>
      </div>
      {
        meals?.length > showCount * 10 &&
        <div className="border border-black w-72 cursor-pointer py-1 mb-10 rounded hover:bg-myellow" onClick={() => setShowCount(showCount + 1)}>
          <p>Show More</p>
        </div>
      }
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