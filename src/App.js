import React from 'react';
import { Routes, Route } from 'react-router';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ToDoComponent from './ToDoComponent';  
import './App.css';
// 1. Додємо роутінг до нашого todo list.

// 2. Зробити меню навігації з 3 посиланнями з посиланнями 
// на такі сторінки як “Home” (“/“), “Туду Ліст” (/todo-list),
// “Про застосунок” (/about) (сторінка з інформацією про цей застосунок, 
// технології які використовуються для його розроблення, 
// коротко про автора, можна навіть додати фото 😎). 
// Активне меню має підсвічуватися.
// 3. Зробити першу базову сторінку Home “/“ де має бути привітання 
// і короткий опис того що ми можемо тут робити.
// “Ласкаво просимо до вашого todo
// List”,  і кнопка “розпочати” (теж приклад).

// 4. При на натисканні на посилання “розпочати” має редіректити 
// на роут “/todo-list” так samo як і посилання з меню.

// 5. При натисканні посилання “редагувати” ( має бути з минулого дз ) 
// має відкритись нове вікно з роутом “/todo-list/${id}” 
// де id - цієї туду. Після натискання кнопки “зберегти” 
// має редіректити назад на “/todo-list”. 
// (Поки робимо < Link onClick = { handleSave } to =“”/>)

// 6. Всі кнопки які редіректять кудись мають бути стилізованими 
// посиланнями <Link/> не <button/>
function App() {
  return (
    <div className="App">
      <main>
          <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About />} />
            <Route path="todo-list" element={<ToDoComponent />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
