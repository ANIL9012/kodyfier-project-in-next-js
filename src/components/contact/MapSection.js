// app/components/MapSection.jsx

export default function MapSection() {
  return (
    <section className="w-full">
      <iframe
        title="Google Map"
        src="https://maps.google.com/maps?q=Chakarpur%20Qadeem%20Shahabad%20Rampur%20UP&t=&z=13&ie=UTF8&iwloc=&output=embed"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="
          w-full
          h-[300px]
          sm:h-[400px]
          md:h-[500px]
          lg:h-[600px]
          border-0
        "
      />
    </section>
  );
}
