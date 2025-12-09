import React from "react";

const EmptyState = ({ 
  icon: Icon,       
  title,            
  description,      
  actionText,     
  onAction         
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      {Icon && <Icon className="w-24 h-24 mb-4 text-gray-400" />}
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {description && <p className="text-gray-500 mb-4">{description}</p>}
      {actionText && onAction && (
        <button 
          onClick={onAction} 
          className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
