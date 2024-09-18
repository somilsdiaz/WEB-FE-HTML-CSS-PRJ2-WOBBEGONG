import React from 'react';

const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-300 p-4">
                Header
            </header>
            <div className="bg-gray-200 p-4">
                Sub-header
            </div>
            <main className="flex-grow bg-white p-4">
                Content
            </main>
            <footer className="bg-gray-400 p-4">
                Footer
            </footer>
        </div>
    );
};

export default App;
