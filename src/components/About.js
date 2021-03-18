import React from 'react';
import qs from 'qs';

function About({ location }) {
    console.log(location);
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });

    console.log(query);
    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터 기초 실습</p>
        </div>
    );
}

export default About;
