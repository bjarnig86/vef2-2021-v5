import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  // TODO útfæra 404 síðu
  return (
    <>
    <h2>404 síða fannst ekki</h2>
    <Link to="/">Heim</Link>
    </>
  )
}
