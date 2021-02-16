import styled from 'styled-components';
import {CatalogSortListText, CatalogSortText} from "../common.styled/text.styled";
import {blackText, border, catsInactiveBorder, catsLink, textAdditional} from "../common.styled/colors.styled";
import check from '../images/check.svg'

export const CatalogContainer = styled.section`
  padding: 60px 60px 90px 60px;
`

export const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
`

export const SortText = styled(CatalogSortText)`
  color: ${textAdditional};
  margin: 0 17px 0 35px;
`

export const CatalogMainContainer = styled.div`
  display: grid;
  grid-template-areas: "cats products";
  grid-template-columns: 270px auto;
`

export const CatalogCatsContainer = styled.div`
  grid-area: cats;
  
  display: flex;
  flex-flow: row wrap;
`

export const MainCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  cursor: pointer;

  width: 260px;
  
  padding: 14px 0 10px 0;
  
  border-bottom: 1px solid ${border};
`

export const MainCategoryText = styled.h4`
  color: ${catsLink};
  
  margin-block: 0 !important;
`

export const MainCategoryIcon = styled.img`
  align-self: flex-end;
  margin-bottom: 10px;
  transform: ${(props)=> props.active ? 'rotate(270deg);' : 'rotate(90deg);'};

  transition: all 0.2s ease-in-out;

`

export const CategoriesContainer = styled.div`
  ${(props)=> props.active ? '' : 'display: none'};

  transition: all 0.5s ease;

`

export const CategoryContainer = styled(MainCategoryContainer)`
  border: none;
  cursor: pointer;

`

export const CategoryText = styled(CatalogSortText)`
  
`

export const CategoryIcon = styled(MainCategoryIcon)`
  margin: 0 2px 6px 0;
  transform: ${(props)=> props.active ? 'rotate(90deg) !important;' : 'rotate(270deg) !important;'};

  transition: all 0.2s ease-in-out;

`

export const ListContainer = styled.div`
  margin: 10px 0 30px 0;

  ${(props)=> props.active ? '' : 'display: none'};

  transition: all 0.5s ease-in;

`

export const ListItemContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  
  cursor: pointer;
  margin: 15px 0 0 10px;
`

export const ListCheckbox = styled.div`
  height: 20px;
  width: 20px;
  background-size: 9.5px 7.99px;
  background-position: center;
  background-repeat: no-repeat;

  background-image: url(${(props)=> props.active ? check : ''});

  transition: all 0.5s ease;

  border: 1px solid ${(props)=> props.active ? blackText : catsInactiveBorder};
  
  box-sizing: border-box;
  border-radius: 2px;
  
  margin-right: 12px;
`

export const ListText = styled(CatalogSortListText)`
  color: ${(props)=> props.active ? blackText : catsInactiveBorder};

`