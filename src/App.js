import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import ApiTester from './components/ApiTester';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/test-api" element={<ApiTester />} />
            </Routes>
        </Router>
    );
};

export default App;
