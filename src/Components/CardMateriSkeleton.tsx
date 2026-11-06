const CardMateriSkeleton = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center rounded-[25px] w-[344px] px-3 pb-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] gap-y-[15px] animate-pulse">
      {/* Image Skeleton */}
      <div className="w-[343px] h-[267px] bg-gray-300 rounded-t-[25px]"></div>

      {/* Title Skeleton */}
      <div className="w-[280px] space-y-2">
        <div className="h-6 bg-gray-300 rounded"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
      </div>

      {/* Button Skeleton */}
      <div className="w-[153px] h-[50px] bg-gray-300 rounded-[20px]"></div>
    </div>
  );
};

export default CardMateriSkeleton;
