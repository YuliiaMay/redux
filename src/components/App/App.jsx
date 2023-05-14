import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../../layout/Layout/Layout';
import { routes } from '../../routes';
import { Home, Options } from '../../views';
import { useEffect } from 'react';

export const App = () => {
  // useEffect(() => {
  //   fetch('https://64511b10a3221969115af51b.mockapi.io/comments')
  // }, [])

  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.OPTIONS} element={<Options />} />
        </Route>

        <Route path='*' element={<Navigate to={routes.HOME} replace />} />
      </Routes>
    </>
  );
};
