import React from 'react';
import { ThemeProvider } from 'styled-components'
import { Theme } from '@amaabca/react-components'
import { Button, Header } from '@amaabca/react-components'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div>
        <Header>
          <p>
            This is in the header
          </p>
          <Button>Check out this button</Button>
        </Header>
      </div>
    </ThemeProvider>
  );
}

export default App;
