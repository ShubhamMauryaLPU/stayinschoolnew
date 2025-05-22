export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your school?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join 1,200+ institutions using our platform to improve student retention.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-amber-50 transition-all">
            Get Started
          </button>
        </div>
        
        <p className="mt-4 text-orange-100 text-sm">
          Free 30-day trial • No credit card required
        </p>
      </div>
    </section>
  );
}