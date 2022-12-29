import DirectoryItem from '../directory-item/directory-item.component';
import  {DirectoryContainer} from './directory.styles.jsx'

 const categories = [
   {
     id: 1,
     title: "hats",
     imageUrl:
       "https://media.npr.org/assets/img/2017/06/19/gettyimages-540137452_wide-1b74e6d8f62c4f65708d592ce3ed0acc91a0ab7d-s800-c85.webp",
     route: "shop/hats"
   },
   {
     id: 2,
     title: "jackets",
     imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
     route: "shop/jackets"
   },
   {
     id: 3,
     title: "sneakers",
     imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
     route: "shop/sneakers"
   },
   {
     id: 4,
     title: "Mens",
     imageUrl:
       "https://i.pinimg.com/originals/87/24/3a/87243a91f4637d10ea89245e86f8a0a1.jpg",
     route: "shop/mens"
   },
   {
     id: 5,
     title: "Women",
     imageUrl:
       "https://imageio.forbes.com/specials-images/imageserve/602527a137dd89a21685790e/Rihanna-at-the-The-Fashion-Awards-2019-Red-Carpet-Arrivals/0x0.jpg?format=jpg&crop=3000,2064,x0,y0,safe&width=960",
     route: "shop/womens"
   },
 ];
const Directory=({})=>{
    
    return(
        <DirectoryContainer>
            {categories.map((category)=>(
                <DirectoryItem key={category.id} category={category}/>
            ))}
        </DirectoryContainer>

    )
}

export default Directory;