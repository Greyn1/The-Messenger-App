import PageContent from './PageContent';
import TopBanner from './TopBanner';
import { MessageProvider } from './contexts/MessageContext';
import MessageBoard from './MessageBoard';
import './App.css';

function App() {
  return (
    <>
      <PageContent>
        <MessageProvider>
          <TopBanner />
          <MessageBoard />
        </MessageProvider>
      </PageContent>
    </>
  );
}

export default App;
