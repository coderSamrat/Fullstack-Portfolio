import React from 'react';

const MyAllProjectList = () => {
      return (
            <div className="relative mt-20">
                  <div className="container mx-auto p-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">All Projects</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                              {/* Render project cards here */}
                        </div>
                  </div>
            </div>
      );
}

export default MyAllProjectList;
