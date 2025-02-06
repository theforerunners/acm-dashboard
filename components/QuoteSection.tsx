export default function QuoteSection() {
  return (
    <section
      id="quote"
      className={`min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white`}
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
          &ldquo;Innovation distinguishes between a leader and a
          follower.&rdquo;
        </h1>
        <p className="text-xl italic">- Steve Jobs</p>
      </div>
    </section>
  );
}
