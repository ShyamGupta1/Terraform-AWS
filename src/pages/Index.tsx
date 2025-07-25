import React from 'react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Terraform EC2 Tutorial
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 text-center mb-12">
            Learn how to deploy and manage AWS EC2 instances using Terraform
          </p>
          
          <div className="grid gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Getting Started
              </h2>
              <p className="text-gray-600">
                This tutorial will guide you through the process of using Terraform to create and manage AWS EC2 instances.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Prerequisites
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>AWS Account with appropriate permissions</li>
                <li>Terraform installed on your local machine</li>
                <li>AWS CLI configured with your credentials</li>
                <li>Basic understanding of cloud computing concepts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;