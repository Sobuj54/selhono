const Articles = () => {
  const news = [
    {
      img: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Let’s Get Solution For Building Construction Work",
      date: "22 December 2023",
    },
    {
      img: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Low Cost Latest Invented Interior Designing Ideas",
      date: "20 December 2023",
    },
    {
      img: "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Best For Any Office & Business Interior Solution",
      date: "1 December 2023",
    },
  ];
  return (
    <section className="my-28">
      <div className="w-1/2 mx-auto text-center">
        <h3 className="text-5xl font-dm-serif mb-5">Articles and News</h3>
        <p className="text-base">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when looking&apos;s at its layouts the
          points of using.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16 ">
        {news.map((article, index) => (
          <div
            key={index}
            className="rounded-[50px] p-6 border-2 border-black/30 hover:bg-orange-100 transition-all duration-200 ease-in">
            <img
              src={article.img}
              alt="img"
              className="object-cover rounded-t-[50px]"
            />
            <h5 className="font-dm-serif text-2xl mt-3">{article.title}</h5>
            <p className="mt-4">{article.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
