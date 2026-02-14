import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
const slides = [
  {
    image: "/images/r1.jpg",
    title: "Affiliated with Lincoln University, malaysia",
    desc: "Shaping Future Leaders in IT and Management",
  },
  {
    image: "/images/r2.jpg",
    title: "Texas College of Management & IT",
    desc: "Quality Education with Practical Exposure",
  },
  {
    image: "/images/r3.jpg",
    title: "Build Your Career With Confidence",
    desc: "Learn. Grow. Succeed.",
  },
];

function Imgcarousal() {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[80vh] mt-18">
            <img
              src={slide.image}
              alt="Campus"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="max-w-6xl mx-auto px-6 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6">{slide.desc}</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => navigate("/apply")}
                    className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 transition cursor-pointer"
                  >
                    Apply Now
                  </button>
                  <button 
                   onClick={() => navigate("/programs")}
                  className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition cursor-pointer">
                    Explore Programs
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Imgcarousal;
