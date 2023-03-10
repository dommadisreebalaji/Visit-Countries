import {
  CountryItemContainer,
  VisitButton,
  ListItem,
  VisitedParagraph,
} from './styledComponents'

const CountryItem = props => {
  const {countryDetails, changeButton} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisitButton = () => {
    changeButton(id)
  }

  return (
    <CountryItemContainer>
      <ListItem>{name}</ListItem>
      {isVisited ? (
        <VisitedParagraph>Visited</VisitedParagraph>
      ) : (
        <VisitButton type="button" onClick={onClickVisitButton}>
          Visit
        </VisitButton>
      )}
    </CountryItemContainer>
  )
}

export default CountryItem
