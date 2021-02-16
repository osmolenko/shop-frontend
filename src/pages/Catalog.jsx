import React from 'react';
import {
    CatalogCatsContainer,
    CatalogContainer,
    CatalogMainContainer, CategoriesContainer,
    CategoryContainer,
    CategoryIcon,
    CategoryText,
    ListCheckbox,
    ListContainer,
    ListItemContainer,
    ListText,
    MainCategoryContainer,
    MainCategoryIcon,
    MainCategoryText,
    SortContainer,
    SortText
} from "./Catalog.styled";
import Select from "../components/product/Select";
import arrowLarge from '../images/arrow-right-cats.svg'
import arrowSmall from '../images/arrow-right.svg'
import {connect} from "react-redux";
import {catalogOpenCat, catalogOpenMainCat} from "../actions/catalog.action";

class Catalog extends React.Component{

    componentDidMount() {
        document.title = this.props.title
    }

    render() {

        const sort = ["По умолчанию", "По возрастанию цены", "По убыванию цены", "По популярности", "Сперва акционные товары"];
        const show = [9,18,27];

        const { initialData, mainCat, cat } = this.props;
        const { catalogOpenMainCat, catalogOpenCat } = this.props;

        return (
            <CatalogContainer>
                <SortContainer>
                    <SortText>Сортировать</SortText>
                    <Select width='280px' option={sort}/>
                    <SortText>Показать</SortText>
                    <Select width='120px' option={show}/>
                </SortContainer>

                <CatalogMainContainer>

                    <CatalogCatsContainer>
                        {initialData.map((e,idx) =>
                            <div key={idx}>
                                <MainCategoryContainer key={idx} onClick={() => catalogOpenMainCat(idx)}>
                                    <MainCategoryText>{e.name}</MainCategoryText>
                                    <MainCategoryIcon src={arrowLarge} alt='more...' active={mainCat === idx}/>
                                </MainCategoryContainer>

                                <CategoriesContainer active={mainCat === idx}>
                                {e.data.map((e,idx) =>
                                    <div>
                                        <CategoryContainer key={idx} onClick={() => catalogOpenCat(idx)}>
                                            <CategoryText>{e.name}</CategoryText>
                                            <CategoryIcon src={arrowSmall} alt='more...' active={cat === idx}/>
                                        </CategoryContainer>

                                        <ListContainer active={cat === idx}>
                                        {e.data.map((e,idx) =>
                                            <ListItemContainer key={idx}>
                                                <ListCheckbox />
                                                <ListText >{e.name}</ListText>
                                            </ListItemContainer>
                                            )}
                                        </ListContainer>

                                    </div>
                                    )}
                                </CategoriesContainer>
                            </div>
                        )}


                    </CatalogCatsContainer>



                </CatalogMainContainer>

            </CatalogContainer>
        );
    }
}

export default connect(
    ({navbar: { initialData }, catalog: { mainCat, cat }}) => ({
        initialData, mainCat, cat
    }),
    { catalogOpenMainCat, catalogOpenCat }
)(Catalog)