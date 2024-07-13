import meh from '../assets/meh.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import bullsEye from '../assets/bulls-eye.webp'
import { Image, ImageProps } from '@chakra-ui/react'
interface Props{
    rating:number
}


const Emoji = ({rating}:Props) => {
    if(rating<3)return null;
    const emojiMap :{[key:number]:ImageProps}= {
        3:{src:meh,alt:'neutral face',boxSize:'20px'},
        4:{src:thumbsUp,alt:'smiling face with smiling eyes',boxSize:'20px'},
        5:{src:bullsEye,alt:'smiling face with heart-eyes',boxSize:'30px'}
    }
  return (
    <Image {...emojiMap[rating]} marginT op={1}/>
  )
}

export default Emoji