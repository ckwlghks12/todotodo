// import { createGlobalStyle } from 'styled-components';
// import TodoTemplate from './components/TodoTemplate';
// import TodoHead from './components/TodoHead';
// import TodoList from './components/TodoList';
// import TodoCreate from './components/TodoCreate';
// import { Providers } from './components/TodoContext';
// import Users from './components/Users';
// import { UsersProvider } from './components/UsersContext';

import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Profiles from './components/Profiles';

// const GlobalStyle = createGlobalStyle`
//     body {
//         background: #e9ecef;
//     }
// `;

function App() {
    return (
        // <Providers>
        //     <GlobalStyle />
        //     <TodoTemplate>
        //         <TodoHead />
        //         <TodoList />
        //         <TodoCreate />
        //     </TodoTemplate>
        // </Providers>
        // <UsersProvider>
        //     <Users />
        // </UsersProvider>

        <div>
            <div>
                <ul>
                    <li>
                        <Link to="/">홈</Link>
                    </li>
                    <li>
                        <Link to="/about">소개</Link>
                    </li>
                    <li>
                        <Link to="/profiles">프로필 목록</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/profiles" component={Profiles} />
            </div>
        </div>
    );
}

export default App;
