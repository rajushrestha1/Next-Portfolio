import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

/* -------------------- */
/* Fetch All Testimonials */
/* -------------------- */
async function getTestimonials() {
  const query = `
    *[_type == "testimonial"] | order(_createdAt desc){
      _id,
      name,
      rating,
      message,
      image
    }
  `;
  return await client.fetch(query);
}

/* -------------------- */
/* Star Component */
function Star({ filled }) {
  return (
    <span className={`text-yellow-400 ${filled ? "opacity-100" : "opacity-30"}`}>
      ★
    </span>
  );
}

/* -------------------- */
/* Main Page Component */
export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Testimonials</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t._id}
            className="bg-gray-900 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition duration-300"
          >
            {t.image && (
              <img
                src={urlFor(t.image).width(150).url()}
                alt={t.name}
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
            )}

            <h3 className="text-xl font-semibold mb-2">{t.name}</h3>

            {/* Star Rating */}
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} filled={i <= t.rating} />
              ))}
            </div>

            <p className="text-gray-400 text-sm">{t.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}