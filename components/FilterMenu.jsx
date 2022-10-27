import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdArrowDropDown, MdOutlineHighlightOff } from 'react-icons/md'

const FilterMenu = ({ titles, data }) => {
  const [filter, setFilter] = useState([])
  const router = useRouter()
  const { name } = router.query

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

  useEffect(() => {
    if(filter.length > 0) {
      router.push(`/category/${filter}`)
    } 

  }, [filter])

  return (
    <>
      {data.map((items,index) => (
        <div className="md:w-full w-96  bg-stone-100 my-5 md:drop-shadow-xl rounded">
          <div className="flex p-5 justify-between">
            <h1 className="font-serif text-lg">{titles[index]}</h1>
          </div>
          <div className="md:h-96 md:max-w-96 h-72  overflow-y-auto p-5">
            {
              items.map((item, i) => (
                <div className="pb-3" key={i}>
                  <div className="flex felx-col justify-start pb-1">
                    <input className={`accent-myellow`} type="checkbox" name={`${Object.values(item)}`} id="d" onChange={(e) => handleChange(e)} />
                    <p className="px-5 font-light text-base font-sans">
                      {Object.values(item)}
                    </p>
                  </div>
                  <hr className="w-full h-0 rounded border-1 border-gray-300" />
                </div>
              ))
            }
          </div>
        </div>
      ))}
    </>
  );
}
 
export default FilterMenu;