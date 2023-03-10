import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #161624;
  min-height: 100vh;
  padding: 25px;
`

export const AppHeading = styled.h1`
  font-family: Roboto;
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
  margin: 10px;
`
export const CountriesListContainer = styled.ul`
  background-color: #1f1f2f;
  margin: 5px;
  padding: 10px;
  overflow-y: scroll;
  height: 40vh;
  border-radius: 10px;
`

export const VisitedCountriesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const EmptyViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`
export const EmptyParagraph = styled.p`
  font-family: Roboto;
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
  margin: 10px;
`
