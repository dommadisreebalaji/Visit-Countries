import styled from 'styled-components'

export const VisitListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #1f1f2f;
`

export const VisitImage = styled.img`
  width: 100%;
`

export const VisitedCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`

export const Paragraph = styled.p`
  color: #f1f5f9;
  font-size: 14px;
  font-family: 'Roboto';
`

export const RemoveButton = styled.button`
  outline: none;
  border: 1px solid #cbd5e1;
  color: #f1f5f9;
  font-size: 13px;
  border-radius: 6px;
  padding: 8px;
  background-color: transparent;
  cursor: pointer;
`
