import React from 'react';
import {
    CatsContainer,
    CatLinksContainer,
    MainCatLink,
    MainCatLinkIcon,
    MainCatLinkText,
    MainCatsContainer,
    CatLinksRow,
    CatLinksHeadLink, CatLinksLink
} from "./Cats.styled";
import arrow from '../../images/arrow-right-cats.svg'
import {connect} from "react-redux";
import {chooseCategory, closeCats} from "../../actions/navbar.action";

class Cats extends React.Component {

    componentDidMount() {
        this.props.chooseCategory(0);
    }

    render() {

        const { initialData, catsData, chosenMainCat } = this.props;
        const { chooseCategory, closeCats } = this.props;

        return (
            <CatsContainer
                onMouseLeave={() => closeCats()}
            >
                <MainCatsContainer>
                    {initialData.map((e, idx) =>
                    <MainCatLink
                        onMouseOver={()=> {
                            chooseCategory(idx);
                        }}
                        key={idx}
                        active={chosenMainCat === idx}
                    >
                        <MainCatLinkText>{e.name}</MainCatLinkText>
                        <MainCatLinkIcon src={arrow}/>
                    </MainCatLink>
                    )}
                </MainCatsContainer>

                <CatLinksContainer>
                    {catsData.data.map((e,idx) =>
                        <CatLinksRow key={idx}>
                            <CatLinksHeadLink>{e.name}</CatLinksHeadLink>
                            {e.data.map((e, idx) =>
                                <CatLinksLink href={e.link} key={idx}>{e.name}</CatLinksLink>
                            )}
                        </CatLinksRow>
                    )}
                </CatLinksContainer>

            </CatsContainer>
        );
    }
}

export default connect(
    ({navbar: { initialData, catsData, chosenMainCat }}) => ({
        initialData, catsData, chosenMainCat
    }),
    { chooseCategory, closeCats }
)(Cats);
