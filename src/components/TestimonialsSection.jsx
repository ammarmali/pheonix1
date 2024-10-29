/* eslint-disable no-unused-vars */
// TestimonialsSection.jsx
import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "James L",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate, arcu ac suscipit sollicitudin, mauris elit commodo eros, vitae fringilla elit urna ac risus. Proin in feugiat.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d70a4e9d393cc7235c0703e90e339a0a5e03ef3c9c1a492951cf789d5e759633?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424",
      ratingUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d22406df3396a6d1d9cda1c3c42fa1ef94a8c469d52853d07833cb637aa0824?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
    },
    {
      id: 2,
      name: "Emily R",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate, arcu ac suscipit sollicitudin, mauris elit commodo eros, vitae fringilla elit urna ac risus. Proin in feugiat.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b24119fe8aa3d697563b699d50935310eb316249fb9571a854885a8a23149c4?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424",
      ratingUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d22406df3396a6d1d9cda1c3c42fa1ef94a8c469d52853d07833cb637aa0824?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
    },
    {
      id: 3,
      name: "Sarah M",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate, arcu ac suscipit sollicitudin, mauris elit commodo eros, vitae fringilla elit urna ac risus. Proin in feugiat.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd2379c55ccf124e698dcf40eaa47ad9ba9651adef2d23850a571230856f63a1?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424",
      ratingUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d22406df3396a6d1d9cda1c3c42fa1ef94a8c469d52853d07833cb637aa0824?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
    }
  ];

  return (
    <section className="testimonials-container">
      <h2 className="testimonials-heading">What Our Client s Are Saying?</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="testimonial-card">
            <img src={testimonial.imageUrl} alt={`Portrait of ${testimonial.name}`} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-text">{testimonial.text}</p>
            <img src={testimonial.ratingUrl} alt="Rating" className="rating-image" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
