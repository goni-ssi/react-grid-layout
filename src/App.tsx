import { ReactNode } from 'react';
import './App.css';
import { GridItem } from './components/grid-item';
import { GridLayout } from './components/grid-layout';

function App() {
  return (
    <>
      <h1>Grid Layout Test</h1>
      <GridLayout>
        <GridItem>
          <Item>1</Item>
        </GridItem>
        <GridItem>
          <Item>2</Item>
        </GridItem>
        <GridItem>
          <Item>3</Item>
        </GridItem>
        <GridItem>
          <Item>4</Item>
        </GridItem>
        <GridItem>
          <Item>5</Item>
        </GridItem>
      </GridLayout>
    </>
  );
}

const Item = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ width: 100, height: 100, backgroundColor: 'red' }}>
      <div>{children}</div>
    </div>
  );
};

export default App;

