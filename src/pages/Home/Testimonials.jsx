import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    initials: "SK",
    name: "Sunita K.",
    role: "Principal, Delhi Public School",
    text: "The Early Warning System helped us reduce dropouts by 42% in just one academic year.",
  },
  {
    initials: "RM",
    name: "Rajesh M.",
    role: "Teacher, Rural Maharashtra",
    text: "The Community Hub bridged the digital divide for our village students.",
  },
  {
    initials: "AP",
    name: "Anjali P.",
    role: "Counselor, Govt. School, Rajasthan",
    text: "With the engagement tools, we’ve seen more consistent student motivation and attendance.",
  },
  {
    initials: "NK",
    name: "Neha K.",
    role: "Headmistress, Bihar",
    text: "The parent portal has transformed the way we interact with families. It's a game-changer.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-orange-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">Trusted by Educators</h2>
        <p className="text-xl text-gray-600 mt-2">
          What schools and teachers say about our solutions
        </p>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border border-orange-100 shadow-md p-8 rounded-xl h-full flex flex-col justify-between">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold mr-4">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg italic flex-grow">"{t.text}"</p>
              <div className="flex mt-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
