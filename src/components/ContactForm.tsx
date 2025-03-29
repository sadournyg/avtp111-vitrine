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
      className="bg-white shadow-md rounded-xl p-6 space-y-5"
    >
      {[
        { label: "Nom *", name: "name", type: "text", required: true },
        { label: "Email *", name: "email", type: "email", required: true },
        { label: "Téléphone", name: "phone", type: "tel", required: false },
      ].map((field, index) => (
        <div key={index}>
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-gray-700"
          >
            {field.label}
          </label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            required={field.required}
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
          />
        </div>
      ))}

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
          className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-orange-500 cursor-pointer hover:bg-orange-400 text-white font-semibold py-3 px-6 rounded-xl shadow transition"
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
