import Link from "next/link";
import FilterMenu from "./FilterMenu";
import { AiFillHome } from 'react-icons/ai'

const SidebarMenu = ({ toggleSidebar }) => {
  const meals = [
    { strCategory: 'Beef'},
    { strCategory: 'Breakfast'},
    { strCategory: 'Chicken'},
    { strCategory: 'Dessert'},
    { strCategory: 'Lamb'},
    { strCategory: 'Miscellaneous'},
    { strCategory: 'Vegetarian'},
    { strCategory: 'Beef'},
    { strCategory: 'Breakfast'},
    { strCategory: 'Chicken'},
    { strCategory: 'Dessert'},
    { strCategory: 'Lamb'},
    { strCategory: 'Miscellaneous'},
    { strCategory: 'Vegetarian'},
  ]

  const areas = [
    {strAres: 'American'},
    {strAres: 'British'},
    {strAres: 'Canadian'},
    {strAres: 'Chinese'},
    {strAres: 'French'},
    {strAres: 'Vietnamese'},
    {strAres: 'Portuguese'},
    {strAres: 'American'},
    {strAres: 'British'},
    {strAres: 'Canadian'},
    {strAres: 'Chinese'},
    {strAres: 'French'},
    {strAres: 'Vietnamese'},
    {strAres: 'Portuguese'},

  ]
  return (
    <>
      {
        toggleSidebar && 
        <div className="bg-mwhite absolute w-full h-screen z-10 px-5 pt-10">
          <div className="flex flex-col">
            <div className="pb-1 flex items-center gap-2">
              <AiFillHome />
              <Link href='/'>
                <a className="text-mblack font-medium cursor-pointer">Home</a>
              </Link>
            </div>
            <hr className="w-full h-0 rounded border-1 border-gray-300 pb-4" />
            <div className="pb-1 flex items-center gap-2">
              <AiFillHome />
              <Link href='/random-meal'>
                <a className="text-mblackfont-medium cursor-pointer">Random Meal</a>
              </Link>
            </div>
            <hr className="w-full h-0 rounded border-1 border-gray-300 pb-4" />
          </div>
          <h1 className="font-semibold text-xl">Filter</h1>
          <FilterMenu title={'Categories'} data={[meals, areas]}/>
        </div>
      }
    </>
  );
}
 
export default SidebarMenu;