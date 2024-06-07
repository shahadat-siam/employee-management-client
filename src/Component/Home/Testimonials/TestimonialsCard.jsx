const TestimonialsCard = ({data}) => {
  return (
    <div className="border space-y-2 my-10  shadow-md p-6 border-gray-200">
      <img className="w-32 h-28 rounded-[100%] border border-[#327991ee] " src={data?.image} alt="" />
      <p>{data?.testimonial}</p>
      <p className="text-[#327991ee] text-xl font-semibold">{data?.name}</p>
        <div className="flex gap-5">
        <p className="font-semibold ">{data?.position} , </p>
        <p>{data?.date}</p>
        </div>
    </div>
  );
};

export default TestimonialsCard;
