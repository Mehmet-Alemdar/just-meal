import Image from "next/image";
import { useState, useEffect } from "react";
import { CiLocationOn, CiCircleList, CiYoutube } from 'react-icons/ci'
import { BiCategoryAlt } from 'react-icons/bi'
import { GiRiceCooker } from 'react-icons/gi'
import { baseUrl ,fetchApi, fetchApiWithParam } from '../../utils/fetchApi'
import { useRouter } from "next/router"

const Detail = ({mealRandom}) => {
  const router = useRouter()
  const { id } = router.query

  console.log('id, ',id)

  const data = {
    dateModified:null,
    idMeal:"52772",
    strArea:"Japanese",
    strCategory:"Chicken",
    strDrinkAlternate:null,
    strIngredient1:"soy sauce",
    strIngredient10:"",
    strIngredient11:"",
    strIngredient12:"",
    strIngredient13:"",
    strIngredient14:"",
    strIngredient15:"",
    strIngredient16:null,
    strIngredient17:null,
    strIngredient18:null,
    strIngredient19:null,
    strIngredient2:"water",
    strIngredient20:null,
    strIngredient3:"brown sugar",
    strIngredient4:"ground ginger",
    strIngredient5:"minced garlic",
    strIngredient6:"cornstarch",
    strIngredient7:"chicken breasts",
    strIngredient8:"stir-fry vegetables",
    strIngredient9:"brown rice",
    strInstructions:"Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray. Combine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling. Meanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat. Place the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks. *Meanwhile, steam or cook the vegetables according to package directions. Add the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
    strMeal:"Teriyaki Chicken Casserole",
    strMealThumb:"https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    strMeasure1:"3/4 cup",
    strMeasure10:"",
    strMeasure11:"",
    strMeasure12:"",
    strMeasure13:"",
    strMeasure14:"",
    strMeasure15:"",
    strMeasure16:null,
    strMeasure17:null,
    strMeasure18:null,
    strMeasure19:null,
    strMeasure2:"1/2 cup",
    strMeasure20:null,
    strMeasure3:"1/4 cup",
    strMeasure4:"1/2 teaspoon",
    strMeasure5:"1/2 teaspoon",
    strMeasure6:"4 Tablespoons",
    strMeasure7:"2",
    strMeasure8:"1 (12 oz.)",
    strMeasure9:"3 cups",
    strSource:null,
    strTags:"Meat,Casserole",
    strYoutube:"https://www.youtube.com/embed/4aZr5hZXP_s"
  }

  // console.log(Object.entries(data))
  // console.log(Object.keys(data).filter(element => element.substring(0,13) === 'strIngredient'))
  // console.log(Object.entries(data).filter(element => element.substring(0,13) === 'strIngredient'))
  // Object.entries(data).map((item, index) => {
  //   if(item[0].substring(0,13) === 'strIngredient' || item[0].substring(0,10) === 'strMeasure') {
  //     if(item[1] !== null && item[1] !== '') {
  //       console.log(item)
  //     }
  //   }
  // })
  console.log('asdfasdf',mealRandom)
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
        {/* <div className="flex items-center gap-3 my-3">
          <BiCategoryAlt className="bg-myellow text-white rounded"  size={25}/>
          <p className="font-light"> { mealRandom.strCategory }</p>
        </div> */}
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
 
export default Detail;

export async function getServerSideProps({ query: { id }}) {
  const mealRandom = await fetchApiWithParam(`${baseUrl}/lookup.php`, {i: id})
  return {
    props: {
      mealRandom: mealRandom?.meals[0],
    }
  }
}

// export async function getStaticProps() {
//   const mealRandom = await fetchApi(`${baseUrl}/random.php`)
//   return {
//     props: {
//       mealRandom: mealRandom,
//     }
//   }
// }