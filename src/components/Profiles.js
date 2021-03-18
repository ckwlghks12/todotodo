import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

function Profiles() {
    return (
        <div>
            <h3> 사용자 목록</h3>
            <ul>
                <li>
                    <Link to="/profiles/ckwlghks12">ckwlghks12</Link>
                </li>
                <li>
                    <Link to="/profiles/homer">homer</Link>
                </li>
            </ul>

            <Route
                path="/profiles"
                exact
                render={() => <div>사용자를 선택 해주세요</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
}

export default Profiles;
