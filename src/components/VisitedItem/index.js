import {
  VisitListItem,
  VisitImage,
  VisitedCard,
  Paragraph,
  RemoveButton,
} from './styledComponents'

const VisitedItem = props => {
  const {details, onRemoveVisited} = props
  const {id, name, imageUrl} = details

  const removeVisited = () => {
    onRemoveVisited(id)
  }

  return (
    <VisitListItem>
      <VisitImage src={imageUrl} alt="thumbnail" />
      <VisitedCard>
        <Paragraph>{name}</Paragraph>
        <RemoveButton type="button" onClick={removeVisited}>
          Remove
        </RemoveButton>
      </VisitedCard>
    </VisitListItem>
  )
}

export default VisitedItem
