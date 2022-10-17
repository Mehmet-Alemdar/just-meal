import { useState } from "react";

const FilterMenu = ({ title, data }) => {
  const [filter, setFilter] = useState([])

  const handleChange = (e) => {
    if(e.target.checked) {
      setFilter([...filter, e.target.name])
    } else {
      let index = filter.indexOf(e.target.name)
      filter.splice(index, 1)
      let newArray = [...filter]
      setFilter(newArray)
    }
  }

  return (
    <>
      <div className="max-w-md bg-stone-100 my-5 mx-3 drop-shadow-xl">
        <h1 className="pb-5 font-serif text-lg p-5 ">{title}</h1>
        <div className="max-h-96 overflow-y-auto p-5 ">
          {data?.map((item, i) => (
            <div className="pb-3" key={i}>
              <div className="flex felx-col justify-start pb-1">
                <input className="accent-myellow" type="checkbox" name={title === 'Categories' ? item.strCategory : item.strAres} id="d" onChange={(e) => handleChange(e)} />
                <p className="px-5 font-light text-base font-sans">
                  {title === 'Categories' ? item.strCategory : item.strAres}
                  </p>
              </div>
              <hr class="w-full h-0 rounded border-1 border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </>

  );
}
 
export default FilterMenu;