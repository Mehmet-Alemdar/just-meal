import Image from "next/image";
import { CiLocationOn, CiCircleList, CiYoutube } from 'react-icons/ci'
import { GiRiceCooker } from 'react-icons/gi'
import { baseUrl, fetchApi } from '../utils/fetchApi'

const RandomRecipe = ({ mealRandom }) => {
  return (
    <div className="flex justify-center">
      <div className="md:w-1/2 sm:w-3/4 w-5/6 flex flex-col justify-center my-10 ">
        <Image
          src={ mealRandom?.strMealThumb }
          placeholder="blur"
          blurDataURL={ mealRandom?.strMealThumb }
          width={800}
          height={500}
          objectFit='cover'
          className="rounded"
        />
        <h1 className='text-2xl font-bold font-serif text-myellow mt-5'> { mealRandom.strMeal }</h1>
        <div className="flex items-center gap-3 my-5">
          <CiLocationOn className=" bg-myellow text-white rounded"  size={25}/>
          <p className="font-light"> { mealRandom.strArea }</p>
        </div>
        <div className="flex gap-3 my-3">
          <div>
            <CiCircleList className="bg-myellow text-white rounded"  size={25}/>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium font-serif text-xl text-myellow">Ingredients for { mealRandom.strMeal }</h1>
              <ul className="list-disc list-inside mt-5">
                {
                  Object.keys(mealRandom).filter(element => element.substring(0,13) === 'strIngredient').map((item, index) => {
                    if(mealRandom[`strIngredient${index}`] !== null && mealRandom[`strIngredient${index}`] !== '') {
                      return (
                        <li>{mealRandom[`strIngredient${index + 1}`]} <span className="font-bold">{mealRandom[`strMeasure${index + 1}`]}</span> </li>
                      )
                    }
                  })
                }
              </ul>
          </div>
        </div>
        <div className="flex gap-3 my-3">
          <div>
            <GiRiceCooker className="bg-myellow text-white rounded"  size={25}/>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium font-serif text-xl text-myellow"> { mealRandom.strMeal } recipe</h1>
            <p className="my-5">{mealRandom.strInstructions}</p>
          </div>
        </div>
        <div className="flex gap-3 my-3 h-96">
          <div>
            <CiYoutube className="bg-myellow text-white rounded"  size={25}/>
          </div>
          <div className="flex flex-col w-full">
            <h1 className="font-medium font-serif text-xl text-myellow"> Watch { mealRandom.strMeal } recipe video</h1>
            <iframe 
              src={(mealRandom.strYoutube).replace('watch?v=', 'embed/')}
              className="my-5 md:w-3/4 w-full md:h-full h-72"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen" 
              msallowfullscreen="msallowfullscreen" 
              oallowfullscreen="oallowfullscreen" 
              webkitallowfullscreen="webkitallowfullscreen"
              >
            </iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
 
export default RandomRecipe;

export async function getStaticProps() {
  const randomRecipe  = await fetchApi(`${baseUrl}/random.php`)
  return {
    props: {
      mealRandom: randomRecipe?.meals[0]
    }
  }
}