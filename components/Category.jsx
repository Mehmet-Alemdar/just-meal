import Image from "next/image";
import Link from "next/link";

const Category = ({ data }) => {
  const id = data.idMeal

  return ( 
    <Link href={`/detail/${id}`}>
        <div className="my-5 mx-5 max-w-96 text-center bg-white rounded drop-shadow-xl cursor-pointer hover:bg-myellow">
        <Image 
          src={ data.strMealThumb }
          placeholder="blur"
          blurDataURL={ data.strMealThumb }
          width={400}
          height={400}
          layout='responsive'
          alt="categoryImage"
          className="rounded-t"
        />
        <p className="text-mblack font-bold text-base font-sans my-5 mx-10">{data.strMeal}</p>
        <p className="text-mblack font-light text-base font-sans my-5 mx-10">{data?.strCategory}</p>
        <p className="text-mblack font-light text-base font-sans my-5 mx-10">{data?.strArea}</p>
      </div>
    </Link>
   );
}
 
export default Category;
