import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2021 - Present'} 
                        title={'Frent-End Developer'}
                        subTitle={'ReactJS'}
                        text={`I've started learning HTML & CSS and then I tried a little bit of react. Then I realized that I need more knowledge of Javascript and I've learned some important parts of it like functional programming and such subjects. After learning JS and React, I've started to learn NodeJS and MongoDB for better understanding of BackEnd.`} 
                    />
                    <ResumeItem 
                        year={'2019-present'} 
                        title={'Trader'}
                        subTitle={'Tehran Stock Exchange & Forex & Cryptocurrencies'}
                        text={'I started learning to trade during 2019 and I started with Technical Analysis. Then I have experinced some algorithm trading in Metatrader. I think everyone should have a wallet and trade in cryptocurrency world. Now this field is one of my hobbies and I will do it for rest of my Life! '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications & Military Service'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2017 - 2019'} 
                        title={'Military Service'}
                        subTitle={'SAAS Naja(Aghidati)'}
                        text={'Like every boy in my country, I went to military service. It was a full(21months) service!'} 
                    />
                    <ResumeItem 
                        year={'2012 - 2017'} 
                        title={'Software Engineering Degree'}
                        subTitle={'University of Isfahan'}
                        text={'I have some experience of coding in C, C++, Java and Android and also UML Design in this period. I have graduated from highschool in the "Computer Engineering(Software Engineering)" field degree with final rate of 14.30. '} 
                    />
                    <ResumeItem 
                        year={'2008 - 2011'} 
                        title={'High School Graduation'}
                        subTitle={'NemooneDolati Shahid Fahmideh'}
                        text={'I have graduated from highschool in the field of "Mathematics-Physics" degree with final rate of 18.70. '} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
