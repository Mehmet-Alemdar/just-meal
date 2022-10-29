import { useRouter } from "next/router"
import { useState } from "react"
import Category from "../../components/Category"
import { baseUrl, fetchApiWithParam } from '../../utils/fetchApi'
import Image from "next/image"

const Search = ({ meals }) => {
  const router = useRouter()
  const { name } = router.query

  const [showCount, setShowCount] = useState(1)

  return (
    <div className='w-full flex flex-col items-center justify-center text-center pt-10'>
      <div className="md:w-11/12">
        <div className="flex items-center justify-center gap-2">
          <h1 className='text-xl font-light font-serif text-mblack'>You Searched</h1>
          <h1 className='text-2xl font-light font-serif text-myellow'> { name.toUpperCase() }</h1>
        </div>
        {
          meals?.length > 0
          ?<div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center">
            {
              meals?.length > 10
              ?meals?.slice(0, showCount * 10).map((item, i) => (
                <Category data={item} key={i} />
              ))
              :
              meals?.map((item,i) => (
                <Category data={item} key={i} />
              ))
            }
          </div>
          :<div className="h-screen flex justify-center items-start py-10">
            <svg className="w-full h-full"  viewBox="0 0 416 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M101.195 278.592L23.0119 187.354C9.22111 171.261 7.07487 148.221 17.6558 129.857L43.65 84.7432C57.6395 60.4638 88.8481 52.4194 112.831 66.9111L146.963 87.5352C170.192 101.571 199.84 84.8445 199.84 57.7053C199.84 43.7629 208.15 31.1621 220.965 25.6703L246.63 14.6718C265.815 6.45066 288.088 11.0111 302.497 26.1107L391.794 119.685C402.629 131.038 407.504 146.82 404.961 162.307L398.185 203.566C392.116 240.518 344.032 251.103 323.006 220.115C313.064 205.462 294.91 198.746 277.825 203.401L254.328 209.802C245.769 212.134 237.985 216.701 231.773 223.034L174.86 281.067C154.33 302.001 120.275 300.857 101.195 278.592Z" stroke="url(#paint0_linear_2_4)" stroke-width="20"/>
            <path d="M137.136 136.096C138.064 136.096 139.024 137.008 140.016 138.832C141.008 140.656 141.84 142.752 142.512 145.12C143.184 147.456 143.52 149.2 143.52 150.352C143.52 152.112 143.136 153.696 142.368 155.104C141.632 156.48 140.576 157.568 139.2 158.368C137.824 159.136 136.256 159.52 134.496 159.52C132.064 159.52 129.952 158.864 128.16 157.552C126.4 156.24 124.992 154.736 123.936 153.04C122.88 151.312 121.792 149.248 120.672 146.848L120 145.408L120.096 157.024C120.096 157.728 119.968 158.416 119.712 159.088C119.488 159.728 119.088 160.048 118.512 160.048C117.936 160.048 117.52 159.728 117.264 159.088C117.008 158.416 116.88 157.76 116.88 157.12C116.88 155.072 117.04 152.128 117.36 148.288C117.68 144.448 117.84 141.584 117.84 139.696C117.84 139.248 117.808 138.784 117.744 138.304C117.68 137.824 117.632 137.488 117.6 137.296C117.44 136.432 117.36 135.664 117.36 134.992V134.8C117.456 134.8 117.744 134.736 118.224 134.608C118.736 134.448 119.04 134.368 119.136 134.368H119.616C120.832 139.84 122.624 144.896 124.992 149.536C127.392 154.144 130.672 156.448 134.832 156.448C136.784 156.448 138.256 155.872 139.248 154.72C140.272 153.536 140.784 151.952 140.784 149.968C140.784 148.272 140.512 146.72 139.968 145.312C139.424 143.872 138.608 142.112 137.52 140.032L136.224 137.488C136.128 137.328 136.08 137.168 136.08 137.008C136.08 136.752 136.176 136.544 136.368 136.384C136.56 136.192 136.816 136.096 137.136 136.096ZM120.096 157.024V156.928V157.024ZM158.247 160.048C156.359 160.048 154.647 159.632 153.111 158.8C151.607 157.936 150.423 156.752 149.559 155.248C148.727 153.712 148.311 151.968 148.311 150.016C148.311 146.816 149.479 144.432 151.815 142.864C154.183 141.296 157.079 140.512 160.503 140.512C162.071 140.512 163.527 140.896 164.871 141.664C166.247 142.432 167.351 143.536 168.183 144.976C169.015 146.416 169.431 148.08 169.431 149.968C169.431 152.016 168.903 153.808 167.847 155.344C166.791 156.848 165.399 158.016 163.671 158.848C161.975 159.648 160.167 160.048 158.247 160.048ZM157.719 157.312C160.695 157.312 162.951 156.64 164.487 155.296C166.023 153.952 166.791 151.984 166.791 149.392C166.791 147.632 166.183 146.112 164.967 144.832C163.783 143.552 162.119 142.912 159.975 142.912C158.535 142.912 157.079 143.184 155.607 143.728C154.135 144.272 152.919 145.088 151.959 146.176C150.999 147.264 150.519 148.576 150.519 150.112C150.519 151.392 150.839 152.592 151.479 153.712C152.119 154.8 152.983 155.68 154.071 156.352C155.191 156.992 156.407 157.312 157.719 157.312ZM180.976 160C180.656 160.064 180.448 160.096 180.352 160.096C179.36 160.096 178.672 159.36 178.288 157.888C177.936 156.416 177.76 154.352 177.76 151.696C177.76 150.608 177.792 148.912 177.856 146.608C177.92 145.2 177.952 144.144 177.952 143.44C174.016 143.44 172.048 142.992 172.048 142.096C172.048 141.808 172.08 141.584 172.144 141.424C172.24 141.264 172.432 141.184 172.72 141.184L177.952 140.848C177.92 139.28 177.84 137.568 177.712 135.712C177.584 134.048 177.504 132.512 177.472 131.104C177.472 130.752 177.616 130.512 177.904 130.384C178.192 130.224 178.496 130.144 178.816 130.144C179.2 130.144 179.52 130.352 179.776 130.768C180.032 131.152 180.16 131.552 180.16 131.968L180.496 140.752L184.48 140.944C185.088 140.88 185.6 140.992 186.016 141.28C186.464 141.568 186.704 142.048 186.736 142.72C186.064 143.008 185.328 143.184 184.528 143.248C183.728 143.312 182.384 143.344 180.496 143.344C180.496 146.32 180.64 151.216 180.928 158.032C180.928 158.736 180.928 159.232 180.928 159.52C180.96 159.776 180.976 159.936 180.976 160ZM211.645 159.424C211.133 159.36 210.653 159.328 210.205 159.328C209.789 159.296 209.501 159.28 209.341 159.28C209.213 159.248 209.149 159.184 209.149 159.088C208.925 158.064 208.765 157.168 208.669 156.4C208.573 155.6 208.509 154.864 208.477 154.192C208.445 153.232 208.365 152.288 208.237 151.36C208.141 150.4 207.917 149.136 207.565 147.568C205.773 147.856 204.573 148 203.965 148C203.325 148 202.845 147.888 202.525 147.664C202.205 147.408 202.045 147.008 202.045 146.464C202.045 146.144 202.221 145.984 202.573 145.984L204.013 145.84C204.237 145.808 205.261 145.68 207.085 145.456C207.021 144.528 206.893 142.624 206.701 139.744C206.605 137.44 206.461 135.6 206.269 134.224L200.269 134.752C199.821 135.04 199.469 135.184 199.213 135.184C198.829 134.896 198.589 134.528 198.493 134.08C199.261 133.248 201.101 132.56 204.013 132.016C206.957 131.472 210.141 131.2 213.565 131.2C217.853 131.2 221.533 131.664 224.605 132.592C227.677 133.488 229.341 134.88 229.597 136.768C228.605 136.768 227.645 136.656 226.717 136.432C225.789 136.208 224.621 135.872 223.213 135.424C221.421 134.816 219.773 134.352 218.269 134.032C216.797 133.712 215.133 133.552 213.277 133.552C212.093 133.552 210.797 133.648 209.389 133.84C209.389 136.816 209.469 140.576 209.629 145.12L211.309 144.976C216.429 144.56 219.421 144.352 220.285 144.352C220.701 144.352 220.989 144.384 221.149 144.448C221.309 144.48 221.437 144.544 221.533 144.64C221.565 145.6 220.653 146.288 218.797 146.704C216.941 147.088 213.997 147.36 209.965 147.52C210.125 149.088 210.429 151.136 210.877 153.664C211.293 156.032 211.549 157.952 211.645 159.424ZM238.122 160.048C236.234 160.048 234.522 159.632 232.986 158.8C231.482 157.936 230.298 156.752 229.434 155.248C228.602 153.712 228.186 151.968 228.186 150.016C228.186 146.816 229.354 144.432 231.69 142.864C234.058 141.296 236.954 140.512 240.378 140.512C241.946 140.512 243.402 140.896 244.746 141.664C246.122 142.432 247.226 143.536 248.058 144.976C248.89 146.416 249.306 148.08 249.306 149.968C249.306 152.016 248.778 153.808 247.722 155.344C246.666 156.848 245.274 158.016 243.546 158.848C241.85 159.648 240.042 160.048 238.122 160.048ZM237.594 157.312C240.57 157.312 242.826 156.64 244.362 155.296C245.898 153.952 246.666 151.984 246.666 149.392C246.666 147.632 246.058 146.112 244.842 144.832C243.658 143.552 241.994 142.912 239.85 142.912C238.41 142.912 236.954 143.184 235.482 143.728C234.01 144.272 232.794 145.088 231.834 146.176C230.874 147.264 230.394 148.576 230.394 150.112C230.394 151.392 230.714 152.592 231.354 153.712C231.994 154.8 232.858 155.68 233.946 156.352C235.066 156.992 236.282 157.312 237.594 157.312ZM275.203 159.76C274.627 159.76 274.163 159.52 273.811 159.04C273.491 158.528 273.203 157.76 272.947 156.736C272.691 155.68 272.291 153.856 271.747 151.264C271.203 153.408 270.179 155.12 268.675 156.4C267.171 157.648 265.331 158.272 263.155 158.272C261.171 158.272 259.491 157.584 258.115 156.208C256.771 154.8 255.763 152.96 255.091 150.688C254.419 148.384 254.083 145.904 254.083 143.248C254.083 142.032 254.195 140.992 254.419 140.128C254.675 139.232 254.979 138.56 255.331 138.112C255.715 137.664 256.083 137.456 256.435 137.488C256.819 137.488 257.011 137.744 257.011 138.256C257.011 138.672 256.899 139.328 256.675 140.224C256.451 141.216 256.339 142.352 256.339 143.632C256.339 145.552 256.611 147.424 257.155 149.248C257.731 151.072 258.563 152.576 259.651 153.76C260.771 154.912 262.083 155.488 263.587 155.488C264.835 155.488 265.971 155.12 266.995 154.384C268.019 153.648 268.819 152.72 269.395 151.6C270.003 150.48 270.307 149.376 270.307 148.288V140.656C270.659 139.984 271.139 139.648 271.747 139.648C272.291 139.648 272.659 140.112 272.851 141.04C273.043 141.968 273.139 143.28 273.139 144.976C273.139 146.416 273.123 147.52 273.091 148.288C273.283 149.344 273.571 150.416 273.955 151.504C274.371 152.592 274.883 153.824 275.491 155.2C276.227 156.896 276.595 157.936 276.595 158.32C276.595 159.28 276.131 159.76 275.203 159.76ZM285.011 160.192C284.563 160.32 284.307 160.384 284.243 160.384C283.987 160.384 283.715 160.256 283.427 160C282.371 158.432 281.603 155.696 281.123 151.792C280.675 147.888 280.451 144.528 280.451 141.712C280.451 141.264 280.771 141.04 281.411 141.04C282.371 141.04 282.851 141.568 282.851 142.624C282.851 142.912 282.835 143.152 282.803 143.344C283.091 142.672 283.635 141.984 284.435 141.28C285.235 140.576 286.163 139.984 287.219 139.504C288.275 139.024 289.347 138.784 290.435 138.784C293.859 138.784 296.355 140.304 297.923 143.344C299.491 146.352 300.275 150.096 300.275 154.576C300.275 156.112 300.115 157.344 299.795 158.272C299.475 159.168 299.043 159.616 298.499 159.616C297.923 159.616 297.635 159.44 297.635 159.088C297.859 157.392 297.971 155.728 297.971 154.096C297.971 149.968 297.251 146.848 295.811 144.736C294.371 142.592 292.467 141.52 290.099 141.52C288.947 141.52 287.827 141.808 286.739 142.384C285.683 142.96 284.819 143.76 284.147 144.784C283.507 145.808 283.187 146.976 283.187 148.288C283.187 149.76 283.267 151.04 283.427 152.128C283.587 153.216 283.843 154.528 284.195 156.064C284.579 157.568 284.851 158.944 285.011 160.192ZM312.331 159.952C310.827 159.952 309.515 159.44 308.395 158.416C307.307 157.392 306.475 156.064 305.899 154.432C305.355 152.8 305.083 151.104 305.083 149.344C305.083 146.272 305.723 143.68 307.003 141.568C308.315 139.456 310.299 138.4 312.955 138.4C314.555 138.4 315.947 138.688 317.131 139.264C318.347 139.808 319.931 140.736 321.883 142.048L323.131 142.912C322.971 141.856 322.731 140.64 322.411 139.264C322.091 137.888 321.883 136.944 321.787 136.432C321.243 133.936 320.843 132.08 320.587 130.864C320.363 129.616 320.251 128.512 320.251 127.552C320.251 125.856 320.731 125.008 321.691 125.008C322.043 125.776 322.459 127.424 322.939 129.952C323.419 132.448 324.027 135.872 324.763 140.224C325.531 144.832 326.203 148.592 326.779 151.504C327.355 154.416 327.835 156.24 328.219 156.976C328.219 157.712 327.675 158.08 326.587 158.08C325.755 158.08 325.179 157.6 324.859 156.64C324.571 155.68 324.395 154 324.331 151.6H323.947C322.603 154.032 320.859 156.032 318.715 157.6C316.571 159.168 314.443 159.952 312.331 159.952ZM312.955 157.6C314.267 157.6 315.675 157.056 317.179 155.968C318.715 154.848 320.011 153.504 321.067 151.936C322.123 150.336 322.651 148.896 322.651 147.616V146.176C319.355 142.72 316.315 140.992 313.531 140.992C311.579 140.992 310.075 141.712 309.019 143.152C307.963 144.56 307.435 146.416 307.435 148.72L307.483 149.728C307.675 152.16 308.219 154.08 309.115 155.488C310.011 156.896 311.291 157.6 312.955 157.6Z" fill="black"/>
            <defs>
            <linearGradient id="paint0_linear_2_4" x1="66.2683" y1="244.351" x2="296.932" y2="21.0857" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F0A200"/>
            <stop offset="1" stop-color="#F74A00" stop-opacity="0.85"/>
            </linearGradient>
            </defs>
            </svg>
          </div>
        }
      </div>
      {
        meals?.length > showCount * 10 &&
        <div className="border border-black w-72 cursor-pointer py-1 mb-10 rounded hover:bg-myellow" onClick={() => setShowCount(showCount + 1)}>
          <p>Show More</p>
        </div>
      }
  </div>
  );
}

export default Search;

export async function getServerSideProps({ query: { name }}) {
  const mealList = await fetchApiWithParam(`${baseUrl}/search.php`, {s: name})
  return {
    props: {
      meals: mealList.meals
    }
  }
}
