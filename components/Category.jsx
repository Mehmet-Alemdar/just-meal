import Image from 'next/image'

const Category = ({ data }) => (
  <div className="lg:w-80 md:w-full my-10 mx-5 text-center bg-white rounded drop-shadow-xl">
    <div className='text-center my-3'>
      <h1 className="font-normal text-lg font-serif">{ data.strCategory }</h1>
    </div>
    <Image 
      src={ data.strCategoryThumb }
      width={320}
      height={200}
      alt="categoryImage"
    />
    <div className='my-5 mx-10 text-left'>
      <p className="text-mblack font-light text-base font-sans">
        { data.strCategoryDescription?.substring(0,250) }
        {data.strCategoryDescription?.length > 400 && <span className='text-myellow cursor-pointer font-medium'> ...read more</span>}
      </p>
    </div>
  </div>
)
 
export default Category;