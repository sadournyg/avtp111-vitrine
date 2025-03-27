import { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto bg-white shadow-md rounded p-6 space-y-4"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nom *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-orange-300"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-orange-300"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-orange-300"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring focus:ring-orange-300"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-[#f97316] hover:bg-[#fb923c] text-white font-semibold py-2 px-6 rounded transition"
      >
        Envoyer
      </button>

      {submitted && (
        <p className="text-green-600 mt-2 text-sm">
          Merci pour votre message. Nous reviendrons vers vous rapidement !
        </p>
      )}
    </form>
  );
};

export default ContactForm;
