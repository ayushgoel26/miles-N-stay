import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import SignUpModal from './components/signUpModal';

function App() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const openSignUpModal = () => setShowSignUpModal(true);
  const closeSignUpModal = () => setShowSignUpModal(false);
  return (
    <div className="App">
      <Button variant="primary" onClick={openSignUpModal}>
        Sign Up
      </Button>
      <SignUpModal showModal={showSignUpModal} closeModal={closeSignUpModal}/>
    </div>
  );
}

export default App;
