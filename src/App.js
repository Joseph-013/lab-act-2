import './App.css';
import NavBar from './NavBar';
import TermComponent from './TermComponent.js';
import Footer from './Footer.js';
import {curriculumData} from './curriculumData.js';

function App() {
  return (
    <div className='h-screen w-screen flex flex-col items-center bg-gray-100'>
        <div className='max-w-5xl w-full h-full bg-white'>
            <NavBar />
            <div className='w-full flex justify-end px-5 py-2 text-sm breadcrumbs-red'>
                myUSTe&nbsp;&gt;&nbsp;Curriculum
            </div>
            <main className='flex flex-grow flex-col px-8 w-full'>
                {curriculumData.map((term) => (
                    <TermComponent term={term} />
                ))}
            </main>
            <Footer />
        </div>

    </div>
        
  );
}

export default App;
