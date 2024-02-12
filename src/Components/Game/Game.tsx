import * as S from './styles' ;

interface Props {
    img: string ;
    text: string ;
}

export const Game: React.FC<Props> = (props) => {
    return ( 
    <S.Games>
      {props.img}  {props.text}
    </S.Games>
    )
}