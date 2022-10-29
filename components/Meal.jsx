import Image from 'next/image'
import Link from 'next/link'

const Meal = ({ data }) => (
  <Link href={`/filter/${ data.strCategory }`}>
    <div className="my-5 mx-5 text-center bg-white rounded drop-shadow-xl cursor-pointer hover:bg-myellow">
      <div className='text-center my-3'>
        <h1 className="font-normal text-lg font-serif">{ data.strCategory }</h1>
      </div>
      <div className='text-center mb-8'>
        <Image 
          src={ data.strCategoryThumb }
          width={320}
          height={200}
          alt="mealImage"
          className='rounded '
        />
      </div>
      {/* <div className='my-5 mx-10 text-left'>
        <p className="text-mblack font-light text-base font-sans">
          { data.strCategoryDescription?.substring(0,250) }
          {data.strCategoryDescription?.length > 250 && <span className='text-myellow cursor-pointer font-medium'> ...read more</span>}
        </p>
      </div> */}
    </div>
  </Link>

)
 
export default Meal;