const Testimonials = () => {
  const testimonials = [
    {
      avatar: "",
      name: "Ayodele",
      title: "Video Producer",
      quote:
        "I am very proud of how articulate he is in conveying his thoughts and ideas, very gifted instructor, highly recommended.",
    },
    {
      avatar: "",
      name: "Dennis",
      title: "UI/UX designer",
      quote:
        "Thanks so much, I really appreciate you. I’m currently working full-time with a US based company.",
    },
    {
      avatar: "",
      name: "Adebayo",
      title: "Graphic Designer",
      quote:
        "Highly efficient teaching approach, which helps to make learning fun and interesting. When I was afraid of learning design ... he made it easier for me to learn, and today, I am a PRO !.",
    },
    {
      avatar: "",
      name: "David",
      title: "Product designer",
      quote:
        "Besides being a great coach and tutor, he doesn't just stop at teaching. He follows up on the students progress and continuously contributes to their growth.",
    },
    {
      avatar: "",
      name: "Prince",
      title: "Web designer",
      quote:
        "To be honest when I joined the class I thought we were just going to learn flyers and posters but I was surprised when we learnt Branding, product package designing, Photoshop, picture manipulation and editing, then to top it off digital art.",
    },
    {
      avatar: "",
      name: "Mathew",
      title: " Graphic Designer",
      quote:
        "He had a great attitude and was approachable. He explains technical definitions clearly. Fun class. I was surprised at how many notes and ideas I took away from this course. Now I'm intotech without any doubt",
    },
    {
      avatar: "",
      name: "Tunmishe",
      title: " Graphic Designer/Video Editor",
      quote:
        "The best teacher ever. You need to see what I'm doing with video editing and in a very shorttime you taught me a lot and you motivated me.",
    },
    {
      avatar: "",
      name: "Toyosi",
      title: " Graphic Designer",
      quote:
        "Not only are you calm at teaching ,you also made learning fun and it always increases mycuriosity towards designing.",
    },
  ];

  return (
    <section className="">
      <div id="testimonials" className="w-full mx-auto">
        <div className="max-w-2xl sm:text-center md:mx-auto">
          <h2 className="text-slate-800 dark:text-slate-300 text-3xl font-semibold sm:text-4xl">
            See what others saying about us
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-200">
            Listen to what the experts around the world are saying about us.
          </p>
        </div>
        <div className="mt-12 relative">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[400px] w-[400px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#ff5a4a]/40 opacity-50 blur-[80px]"></div>
          <div className="absolute top-auto left-0 right-auto bottom-0 h-[400px] w-[400px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(109,224,244,0.4)] opacity-50 blur-[80px]"></div>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li
                key={idx}
                className="bg-white dark:bg-slate-700 border-2 dark:border-slate-500 p-4 rounded-xl"
              >
                <figure>
                  <div className="flex items-center gap-x-4">
                    {/* <img
                      src={item.avatar}
                      className="w-14 h-14 object-cover rounded-full"
                      alt={item.name}
                    /> */}
                    <div>
                      <span className="block text-gray-800 dark:text-slate-200 font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-gray-600 dark:text-slate-300 text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <p className="mt-6 text-gray-800 dark:text-slate-200 text-sm">
                    {item.quote}
                  </p>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
