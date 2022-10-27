import Image from "next/image";

const Category = ({ data }) => {
  return ( 
    <div className="my-5 mx-5 text-center bg-white rounded drop-shadow-xl cursor-pointer hover:bg-myellow">
        <Image 
          src={ data.strMealThumb }
          width={400}
          height={400}
          layout='responsive'
          alt="categoryImage"
          className="rounded-t"
        />
      <p className="text-mblack font-light text-base font-sans my-5 mx-10">
        {data.strMeal}
      </p>

    </div>
   );
}
 
export default Category;