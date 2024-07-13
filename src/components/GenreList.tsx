
import { Button, HStack, Image, List, ListItem } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';
import GenreListSkeleton from './GenreListSkelaton';

interface Props{
    onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectedGenre}:Props) => {
    const {data ,isLoading} = useGenres();
    if(isLoading) return <GenreListSkeleton/>
  return (
    <List>
        {data.map((genre) => (
            <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                    <Button onClick={()=>onSelectedGenre(genre)}fontSize='lg' variant='link'>{genre.name}</Button>
                </HStack>
            </ListItem>
        ))}
    </List>
  )
}

export default GenreList