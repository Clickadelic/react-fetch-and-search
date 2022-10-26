import * as React from 'react';

import Container from '@mui/material/Container';

export default function Container({children}) {
  return (
      <Container maxWidth="lg">
        {children}
      </Container>
  );
}