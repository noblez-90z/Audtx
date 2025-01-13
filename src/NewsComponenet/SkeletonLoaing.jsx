import React from "react";
import "../app.css";

const SkeletonLoading = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg max-w-xs">
      <div className="w-full h-40 bg-gray-300 rounded shimmer"></div>
      <div className="mt-4 space-y-2">
        <div className="w-3/4 h-4 bg-gray-300 rounded shimmer"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded shimmer"></div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex space-x-2 shimmer">
          <div className="h-2 w-2 shimmer"></div>
          <div className="h-2 w-2 shimmer"></div>
        </div>
        <div className="h-2 w-2 shimmer"></div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
