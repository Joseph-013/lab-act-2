import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';

function App() {
  return (
    <div className='h-screen w-screen flex flex-col items-center'>
        <div className='max-w-5xl w-full h-full'>
            <NavBar />

            {/* <main className='flex flex-grow justify-center'>
                <div className='w-full'>
                    test
                </div>
            </main> */}
        </div>
        
    </div>
        
  );
}

export default App;
