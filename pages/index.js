import Category from '../components/Category'
import FilterMenu from '../components/FilterMenu'

export default function Home() {
  const categories = [
    {
      idCategory: '14',
      strCategory: 'Goat',
      strCategoryThumb: 'https://www.themealdb.com/images/category/goat.png',
      strCategoryDescription: 'The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese.'
    },
    {
      idCategory: '13',
      strCategory: 'Breakfast',
      strCategoryThumb: 'https://www.themealdb.com/images/category/breakfast.png',
      strCategoryDescription: 'Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more "typical", or "traditional", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast.'
    },
    {
      idCategory: '12',
      strCategory: 'Vegetarion',
      strCategoryThumb: 'https://www.themealdb.com/images/category/vegetarian.png',
      strCategoryDescription: 'Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter.\r\n' +
      '\r\n' +
      'Vegetarianism may be adopted for various reasons. Many people object to eating meat out of respect for sentient life. Such ethical motivations have been codified under various religious beliefs, as well as animal rights advocacy. Other motivations for vegetarianism are health-related, political, environmental, cultural, aesthetic, economic, or personal preference. There are variations of the diet as well: an ovo-lacto vegetarian diet includes both eggs and dairy products, an ovo-vegetarian diet includes eggs but not dairy products, and a lacto-vegetarian diet includes dairy products but not eggs. A vegan diet excludes all animal products, including eggs and dairy. Some vegans also avoid other animal products such as beeswax, leather or silk clothing, and goose-fat shoe polish.'
    },
    {
      idCategory: '11',
      strCategory: 'Vegan',
      strCategoryThumb: 'https://www.themealdb.com/images/category/vegan.png',
      strCategoryDescription: 'Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more "typical", or "traditional", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast.'
    },
    {
      idCategory: '14',
      strCategory: 'Goat',
      strCategoryThumb: 'https://www.themealdb.com/images/category/goat.png',
      strCategoryDescription: 'The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese.'
    },
    {
      idCategory: '13',
      strCategory: 'Breakfast',
      strCategoryThumb: 'https://www.themealdb.com/images/category/breakfast.png',
      strCategoryDescription: 'Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more "typical", or "traditional", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast.'
    },
    {
      idCategory: '12',
      strCategory: 'Vegetarion',
      strCategoryThumb: 'https://www.themealdb.com/images/category/vegetarian.png',
      strCategoryDescription: 'Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter.\r\n' +
      '\r\n' +
      'Vegetarianism may be adopted for various reasons. Many people object to eating meat out of respect for sentient life. Such ethical motivations have been codified under various religious beliefs, as well as animal rights advocacy. Other motivations for vegetarianism are health-related, political, environmental, cultural, aesthetic, economic, or personal preference. There are variations of the diet as well: an ovo-lacto vegetarian diet includes both eggs and dairy products, an ovo-vegetarian diet includes eggs but not dairy products, and a lacto-vegetarian diet includes dairy products but not eggs. A vegan diet excludes all animal products, including eggs and dairy. Some vegans also avoid other animal products such as beeswax, leather or silk clothing, and goose-fat shoe polish.'
    },
    {
      idCategory: '11',
      strCategory: 'Vegan',
      strCategoryThumb: 'https://www.themealdb.com/images/category/vegan.png',
      strCategoryDescription: 'Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more "typical", or "traditional", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast.'
    },
  ]

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
    <div className='flex pt-5 px-5'>
      <div className='flex-initial w-1/4 min-w-min justify-center mt-11'>
        <FilterMenu title={'Categories'} data={meals}/>
        <FilterMenu title={'Areas'} data={areas}/>
      </div>
      <div className='basis-full justify-center text-center'>
        <h1 className='text-2xl font-light font-serif text-mblack'>All Meal Categories</h1>
        <div className='flex flex-wrap justify-center'>
          {
            categories?.map((item) => <Category data={item} key={item.idCategory} />)
          }
        </div>
      </div>

    </div>
  )
}
