import { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!apiKey) {
      alert("Clé Web3Forms manquante.");
      return;
    }

    formData.append("access_key", apiKey);
    formData.append("subject", "Nouveau message depuis le site AVTP111");
    formData.append("from_name", "Formulaire AVTP111");

    try {
      setLoading(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        console.error("Web3Forms error:", result);
        alert("Erreur Web3Forms : " + (result.message || "Requête invalide"));
      }
    } catch (err) {
      console.error("Erreur Web3Forms", err);
      alert("Une erreur s’est produite.");
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    {
      label: "Nom *",
      name: "name",
      type: "text",
      required: true,
      autoComplete: "name",
    },
    {
      label: "Email *",
      name: "email",
      type: "email",
      required: true,
      autoComplete: "email",
    },
    {
      label: "Téléphone",
      name: "phone",
      type: "tel",
      required: false,
      autoComplete: "tel",
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 space-y-5"
    >
      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {fields.map(({ label, name, type, required, autoComplete }) => (
        <div key={name}>
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <input
            type={type}
            id={name}
            name={name}
            required={required}
            autoComplete={autoComplete}
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
          />
        </div>
      ))}

      <div>
        <label
          htmlFor="object"
          className="block text-sm font-medium text-gray-700"
        >
          Objet *
        </label>
        <select
          id="object"
          name="object"
          required
          defaultValue=""
          className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
        >
          <option value="" disabled hidden>
            -- Sélectionnez un objet --
          </option>
          <option value="Terrassement">Terrassement</option>
          <option value="Aménagement">Aménagement</option>
          <option value="Tranchée">Tranchée</option>
          <option value="Autre">Autre</option>
        </select>
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
          className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-400"
        } bg-orange-500 text-white font-semibold py-3 px-6 rounded-xl shadow transition`}
      >
        {loading ? "Envoi en cours..." : "Envoyer"}
      </button>

      <p
        className="text-green-600 mt-2 text-sm"
        aria-live="polite"
        role="status"
      >
        {submitted &&
          "Merci pour votre message. Nous reviendrons vers vous rapidement !"}
      </p>
    </form>
  );
};

export default ContactForm;
